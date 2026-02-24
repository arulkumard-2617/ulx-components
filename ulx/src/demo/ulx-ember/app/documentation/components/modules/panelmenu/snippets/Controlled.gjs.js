export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxButton, UlxPanelmenu } from 'ulx-components';

export default class DemoPanelmenuControlled extends Component {
  @tracked expandedKeys = { files: true };

  get items() {
    return [
      {
        key: 'files',
        label: 'Files',
        icon: 'bs-icons1 folder-icon',
        items: [
          { key: 'new', label: 'New', icon: 'bs-icons1 add-icon-01 s20' },
          { key: 'open', label: 'Open', icon: 'bs-icons1 move-right-icon s20' },
        ]
      },
      {
        key: 'edit',
        label: 'Edit',
        icon: 'bs-icons1 edit-icon',
        items: [
          { key: 'copy', label: 'Copy', icon: 'bs-icons1 copy-icon s20' },
          { key: 'paste', label: 'Paste', icon: 'bs-icons1 copy-icon s20' }
        ]
      }
    ];
  }

  get areAllExpanded() {
    const expandedKeys = this.expandedKeys ?? {};
    return this.items.every((item) => Boolean(item?.key && expandedKeys[item.key]));
  }

  @action
  toggleAll() {
    if (this.areAllExpanded) {
      this.expandedKeys = {};
      return;
    }

    const next = {};
    this.items.forEach((item) => {
      item?.key && (next[item.key] = true);
    });
    this.expandedKeys = next;
  }

  @action
  onExpandedKeysChange(next) {
    this.expandedKeys = next;
  }

  <template>
    <div class="w-100p md-max-w-640 fxb column center-all gp3">
      <UlxButton @label="Toggle All" @text={{true}} @onClick={{this.toggleAll}} />
      <UlxPanelmenu
        @model={{this.items}}
        @expandedKeys={{this.expandedKeys}}
        @onExpandedKeysChange={{this.onExpandedKeysChange}}
        @multiple={{true}}
      />
    </div>
  </template>
}
`;

