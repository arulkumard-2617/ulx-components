export default `
import Component from '@glimmer/component';
import { UlxPanelmenu } from 'ulx-components';

export default class DemoPanelmenuBasic extends Component {
  get items() {
    return [
      {
        key: 'files',
        label: 'Files',
        icon: 'bs-icons1 event-library-icon s20',
        items: [
          { key: 'new', label: 'New', icon: 'bs-icons1 add-icon-01 s20' },
          { key: 'open', label: 'Open', icon: 'bs-icons1 move-right-icon s20' },
          { separator: true },
          { key: 'quit', label: 'Quit', icon: 'bs-icons1 close-icon-01 s20' },
        ],
      },
      {
        key: 'edit',
        label: 'Edit',
        icon: 'bs-icons1 edit-icon s20',
        items: [
          { key: 'copy', label: 'Copy', icon: 'bs-icons1 copy-icon s20' },
          { key: 'paste', label: 'Paste', icon: 'bs-icons1 copy-icon s20' },
        ],
      },
      {
        key: 'disabled',
        label: 'Disabled',
        icon: 'bs-icons1 lock-filled-icon s20',
        disabled: true,
        items: [{ key: 'x', label: 'Hidden by disabled' }],
      },
    ];
  }

  <template>
    <div class="w-full md-max-w-640">
      <UlxPanelmenu @model={{this.items}} />
    </div>
  </template>
}

`;
