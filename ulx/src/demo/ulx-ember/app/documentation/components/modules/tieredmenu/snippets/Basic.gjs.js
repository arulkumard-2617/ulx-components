export default `
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { UlxTieredmenu } from 'ulx-components';

export default class BasicTieredmenuDemo extends Component {
  get items() {
    return [
      {
        label: 'File',
        icon: 'bs-icons1 pdf-stroke-icon',
        items: [
          {
            label: 'New',
            icon: 'bs-icons1 add-icon-01',
            items: [
              { label: 'Project', icon: 'bs-icons1 library-icon' },
              { label: 'File', icon: 'bs-icons1 pdf-stroke-icon' },
              { separator: true },
              {
                label: 'From Template',
                icon: 'bs-icons1 copy-icon',
              },
            ],
          },
          { label: 'Open', icon: 'bs-icons1 library-icon' },
          { separator: true },
          {
            label: 'Export',
            icon: 'bs-icons1 upload-icon',
            items: [
              { label: 'PDF', icon: 'bs-icons1 pdf-filled-icon' },
              { label: 'Excel', icon: 'bs-icons1 pdf-stroke-icon' },
              { label: 'CSV', icon: 'bs-icons1 pdf-stroke-icon' },
            ],
          },
          { separator: true },
          { label: 'Exit', icon: 'bs-icons1 close-icon-01' },
        ],
      },
      {
        label: 'Edit',
        icon: 'bs-icons1 edit-icon',
        items: [
          { label: 'Undo', icon: 'bs-icons1 undo-icon' },
          { label: 'Redo', icon: 'bs-icons1 update-icon' },
          { separator: true },
          {
            label: 'Find',
            icon: 'bs-icons1 search-icon',
            items: [
              { label: 'Find...', icon: 'bs-icons1 search-icon' },
              { label: 'Find and Replace', icon: 'bs-icons1 user-sync-icon' },
              { label: 'Find in Files', icon: 'bs-icons1 library-icon' },
            ],
          },
        ],
      },
      {
        label: 'View',
        icon: 'bs-icons1 view-icon',
        items: [
          { label: 'Zoom In', icon: 'bs-icons1 zoom-in-stroke-icon' },
          { label: 'Zoom Out', icon: 'bs-icons1 zoom-out-stroke-icon' },
        ],
      },
      { separator: true },
      {
        label: 'Help',
        icon: 'bs-icons1 question-icon',
      },
    ];
  }

  @action
  handleItemSelect(item) {
    console.log('Selected:', item.label);
  }

  <template>
    <div class="">
      <UlxTieredmenu
        @model={{this.items}}
        @onItemSelect={{this.handleItemSelect}}
      />
    </div>
  </template>
}

`;
