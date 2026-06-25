import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { fn } from '@ember/helper';
import { UlxCheckbox, UlxTristateCheckbox, UlxFieldSet } from 'ulx-components';

function resolveGroupValue(children) {
  const checkedCount = children.filter((child) => child.checked).length;

  if (checkedCount === 0) return false;
  if (checkedCount === children.length) return true;
  return null;
}

function nestedTrunkEndIndex(children, lastCheckedIndex) {
  return lastCheckedIndex >= 0 ? lastCheckedIndex : children.length - 1;
}

function updateGroupChildren(groups, groupId, checked) {
  return groups.map((group) => {
    if (group.id !== groupId) return group;

    return {
      ...group,
      children: group.children.map((child) => ({ ...child, checked })),
    };
  });
}

function updateChildChecked(groups, groupId, childId, checked) {
  return groups.map((group) => {
    if (group.id !== groupId) return group;

    return {
      ...group,
      children: group.children.map((child) =>
        child.id === childId ? { ...child, checked } : child,
      ),
    };
  });
}

export default class NestedTristateCheckboxDemo extends Component {
  @tracked eventChecked = false;

  @tracked zoneGroups = [
    {
      id: 'zone-1',
      children: [
        { id: 'zone-1-a', checked: true },
        { id: 'zone-1-b', checked: false },
        { id: 'zone-1-c', checked: true },
      ],
    },
    {
      id: 'zone-2',
      children: [
        { id: 'zone-2-a', checked: false },
        { id: 'zone-2-b', checked: false },
        { id: 'zone-2-c', checked: true },
      ],
    },
  ];

  get zoneGroupsWithMeta() {
    return this.zoneGroups.map((group) => {
      const lastCheckedIndex = group.children.reduce(
        (lastIndex, child, index) => (child.checked ? index : lastIndex),
        -1,
      );
      const hasChecked = lastCheckedIndex >= 0;

      return {
        ...group,
        value: resolveGroupValue(group.children),
        hasChecked,
        trunkEndIndex: nestedTrunkEndIndex(group.children, lastCheckedIndex),
        children: group.children.map((child, index) => ({
          ...child,
          isLastChecked: hasChecked && index === lastCheckedIndex,
        })),
      };
    });
  }

  @action
  handleEventCheckedChange(checked) {
    this.eventChecked = checked;
  }

  @action
  handleGroupValueChange(group, nextValue) {
    if (nextValue === true) {
      this.zoneGroups = updateGroupChildren(this.zoneGroups, group.id, true);
      return;
    }

    if (nextValue === false) {
      this.zoneGroups = updateGroupChildren(this.zoneGroups, group.id, false);
      return;
    }

    this.zoneGroups = this.zoneGroups.map((entry) => {
      if (entry.id !== group.id) return entry;

      return {
        ...entry,
        children: entry.children.map((child, index) => ({
          ...child,
          checked: index === 0,
        })),
      };
    });
  }

  @action
  handleChildCheckedChange(group, child, checked) {
    this.zoneGroups = updateChildChecked(
      this.zoneGroups,
      group.id,
      child.id,
      checked,
    );
  }

  <template>
    <UlxFieldSet @legend="Check-in Access" @customClass="col-12">
      <div class="ulx-checkbox-group nested">
        <div class="checkbox-tree-item">
          <UlxCheckbox
            @id="checkin-event"
            @checked={{this.eventChecked}}
            @itemLabel="Event Check-in"
            @onCheckedChange={{this.handleEventCheckedChange}}
          />
        </div>

        {{#each this.zoneGroupsWithMeta key="id" as |group|}}
          <div class="checkbox-tree-item">
            <UlxTristateCheckbox
              @id={{group.id}}
              @value={{group.value}}
              @itemLabel="Zone Check-in"
              @onValueChange={{fn this.handleGroupValueChange group}}
            />

            <div
              class="checkbox-nested {{if group.hasChecked 'is-trunk-primary'}}"
              data-trunk-end-index={{group.trunkEndIndex}}
            >
              <span class="primary-line-trunk" aria-hidden="true"></span>

              {{#each group.children key="id" as |child|}}
                <div
                  class="checkbox-nested-item {{if child.isLastChecked 'is-last-checked'}}"
                >
                  <span class="primary-line-connector" aria-hidden="true">
                    <span class="primary-line-elbow"></span>
                  </span>

                  <UlxCheckbox
                    @id={{child.id}}
                    @checked={{child.checked}}
                    @itemLabel="Zone Check-in"
                    @onCheckedChange={{fn this.handleChildCheckedChange group child}}
                  />
                </div>
              {{/each}}
            </div>
          </div>
        {{/each}}
      </div>
    </UlxFieldSet>
  </template>
}
