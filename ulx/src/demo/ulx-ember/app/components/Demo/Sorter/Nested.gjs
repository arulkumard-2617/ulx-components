import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSorter } from 'ulx-components';

const ROOT_LIST_ID = '__root__';

const SORTER_GROUP = {
  name: 'nested-freeform-demo',
  pull: true,
  put: true,
};

const NESTED_TREE = [
  {
    id: 'item-1-1',
    label: 'Item 1.1',
    children: [
      { id: 'item-2-2-a', label: 'Item 2.2 A', children: [] },
      { id: 'item-1-4', label: 'Item 1.4', children: [] },
      { id: 'item-3-3', label: 'Item 3.3', children: [] },
      { id: 'item-2-1-a', label: 'Item 2.1 A', children: [] },
      { id: 'item-3-4', label: 'Item 3.4', children: [] },
      { id: 'item-3-1', label: 'Item 3.1', children: [] },
      { id: 'item-3-2', label: 'Item 3.2', children: [] },
      { id: 'item-2-2-b', label: 'Item 2.2 B', children: [] },
      { id: 'item-2-3', label: 'Item 2.3', children: [] },
      { id: 'item-2-1-b', label: 'Item 2.1 B', children: [] },
    ],
  },
  { id: 'item-2-4', label: 'Item 2.4', children: [] },
  { id: 'item-1-5', label: 'Item 1.5', children: [] },
];

function findNode(nodes, itemId) {
  for (const node of nodes) {
    if (node.id === itemId) {
      return node;
    }
    const match = node.children?.length ? findNode(node.children, itemId) : null;
    if (match) {
      return match;
    }
  }
  return null;
}

function getDescendantIds(node) {
  const ids = [];
  for (const child of node.children ?? []) {
    ids.push(child.id, ...getDescendantIds(child));
  }
  return ids;
}

function buildItemIndex(nodes, index = new Map()) {
  for (const node of nodes) {
    index.set(node.id, node);
    buildItemIndex(node.children ?? [], index);
  }

  return index;
}

function getNestedContainer(itemElement, itemId) {
  return (
    Array.from(itemElement.querySelectorAll('[data-list]')).find(
      (element) => element.dataset.list === itemId,
    ) ?? null
  );
}

function serializeTreeFromDom(container, itemIndex) {
  return Array.from(container.children)
    .filter((element) => element.dataset.itemId)
    .map((itemElement) => {
      const itemId = itemElement.dataset.itemId;
      const item = itemIndex.get(itemId);

      if (!item) {
        return null;
      }

      const nestedContainer = getNestedContainer(itemElement, itemId);

      return {
        ...item,
        children: nestedContainer ? serializeTreeFromDom(nestedContainer, itemIndex) : [],
      };
    })
    .filter(Boolean);
}

function getRootContainer(event) {
  return (
    event.to?.closest(`[data-list="${ROOT_LIST_ID}"]`) ??
    event.from?.closest(`[data-list="${ROOT_LIST_ID}"]`) ??
    null
  );
}

class NestedTree extends Component {
  get wrapperClass() {
    return this.args.isRoot ? 'w-full' : 'ms-5 mt-2 w-full';
  }

  <template>
    <div class={{this.wrapperClass}}>
      <UlxSorter
        @items={{@items}}
        @itemKey="id"
        @listKey={{@parentId}}
        @customClass="w-full"
        @itemClass="w-full"
        @options={{@options}}
        as |item|
      >
        <div class="w-full">
          <div class="w-full bg-layer3 border border-radius-sm pd2">
            <span class="text-14 fg-text">{{item.label}}</span>
          </div>
          {{#if item.children.length}}
            <NestedTree
              @items={{item.children}}
              @parentId={{item.id}}
              @options={{@options}}
            />
          {{/if}}
        </div>
      </UlxSorter>
    </div>
  </template>
}

export default class NestedSorterDemo extends Component {
  @tracked items = structuredClone(NESTED_TREE);

  constructor() {
    super(...arguments);
    // Keep one stable options object so nested sorters are not recreated every render.
    this.sortableOptions = {
      group: SORTER_GROUP,
      animation: 150,
      fallbackOnBody: true,
      swapThreshold: 0.65,
      emptyInsertThreshold: 24,
      onMove: this.handleMove,
      onAdd: this.handleAdd,
      onUpdate: this.handleUpdate,
    };
  }

  @action
  handleMove(event) {
    const draggedId = event.dragged?.dataset?.itemId;
    const targetParentId = event.to?.dataset?.list;

    if (!draggedId || !targetParentId || targetParentId === ROOT_LIST_ID) {
      return true;
    }

    const draggedNode = findNode(this.items, draggedId);
    if (!draggedNode) {
      return true;
    }

    const blockedParentIds = new Set([draggedId, ...getDescendantIds(draggedNode)]);
    return !blockedParentIds.has(targetParentId);
  }

  @action
  syncItemsFromDom(event) {
    const rootContainer = getRootContainer(event);

    if (!rootContainer) {
      return;
    }

    const itemIndex = buildItemIndex(this.items);
    this.items = serializeTreeFromDom(rootContainer, itemIndex);
  }

  @action
  handleAdd(event) {
    const movedItem = event.item;
    this.syncItemsFromDom(event);

    if (movedItem?.parentNode === event.to) {
      event.to.removeChild(movedItem);
    }
  }

  @action
  handleUpdate(event) {
    this.syncItemsFromDom(event);
  }

  <template>
    <div class="w-full bg-layer2 border border-radius-sm pd1">
      <NestedTree
        @items={{this.items}}
        @parentId={{ROOT_LIST_ID}}
        @isRoot={{true}}
        @options={{this.sortableOptions}}
      />
    </div>
  </template>
}
