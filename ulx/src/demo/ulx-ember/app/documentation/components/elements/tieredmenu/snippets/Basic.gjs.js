export default `
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { UlxTieredmenu } from 'ulx-components';

export default class BasicTieredmenuDemo extends Component {
  get items() {
    return [
      {
        label: 'File',
        icon: 'pi pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus',
            items: [
              { label: 'Project', icon: 'pi pi-folder' },
              { label: 'File', icon: 'pi pi-file' },
              { separator: true },
              {
                label: 'From Template',
                icon: 'pi pi-copy',
                items: [
                  { label: 'React Template', icon: 'pi pi-code' },
                  { label: 'Ember Template', icon: 'pi pi-code' },
                  { label: 'Vue Template', icon: 'pi pi-code' },
                ],
              },
            ],
          },
          { label: 'Open', icon: 'pi pi-folder-open' },
          { separator: true },
          {
            label: 'Export',
            icon: 'pi pi-upload',
            items: [
              { label: 'PDF', icon: 'pi pi-file-pdf' },
              { label: 'Excel', icon: 'pi pi-file-excel' },
              { label: 'CSV', icon: 'pi pi-file' },
            ],
          },
          { separator: true },
          { label: 'Exit', icon: 'pi pi-times' },
        ],
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        items: [
          { label: 'Undo', icon: 'pi pi-undo' },
          { label: 'Redo', icon: 'pi pi-refresh' },
          { separator: true },
          {
            label: 'Find',
            icon: 'pi pi-search',
            items: [
              { label: 'Find...', icon: 'pi pi-search' },
              { label: 'Find and Replace', icon: 'pi pi-sync' },
              { label: 'Find in Files', icon: 'pi pi-folder' },
            ],
          },
        ],
      },
      {
        label: 'View',
        icon: 'pi pi-eye',
        items: [
          { label: 'Zoom In', icon: 'pi pi-search-plus' },
          { label: 'Zoom Out', icon: 'pi pi-search-minus' },
        ],
      },
      { separator: true },
      {
        label: 'Help',
        icon: 'pi pi-question-circle',
      },
    ];
  }

  @action
  handleItemSelect(item) {
    console.log('Selected:', item.label);
  }

  <template>
    <div class="pda4">
      <UlxTieredmenu
        @model={{this.items}}
        @onItemSelect={{this.handleItemSelect}}
      />
    </div>
  </template>
}

`;
