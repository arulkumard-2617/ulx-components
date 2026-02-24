export default `
import Component from '@glimmer/component';
import { UlxPanelmenu } from 'ulx-components';

export default class DemoPanelmenuBasic extends Component {
  get items() {
    return [
      {
        key: 'files',
        label: 'Files',
        icon: 'bs-icons1 event-library-icon',
        items: [
          { key: 'new', label: 'New', icon: 'bs-icons1 add-icon-01' },
          { key: 'open', label: 'Open', icon: 'bs-icons1 move-right-icon' },
          { separator: true },
          { key: 'quit', label: 'Quit', icon: 'bs-icons1 close-icon-01' }
        ]
      },
      {
        key: 'edit',
        label: 'Edit',
        icon: 'bs-icons1 edit-icon',
        items: [
          { key: 'copy', label: 'Copy', icon: 'bs-icons1 copy-icon' },
          { key: 'paste', label: 'Paste', icon: 'bs-icons1 copy-icon' }
        ]
      },
      {
        key: 'disabled',
        label: 'Disabled',
        icon: 'bs-icons1 lock-filled-icon',
        disabled: true,
        items: [{ key: 'x', label: 'Hidden by disabled' }]
      }
    ];
  }

  <template>
    <div class="w-100p md-max-w-640">
      <UlxPanelmenu @model={{this.items}} />
    </div>
  </template>
}
`;

