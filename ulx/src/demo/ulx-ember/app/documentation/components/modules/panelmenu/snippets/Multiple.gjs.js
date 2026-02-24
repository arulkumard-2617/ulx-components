export default `
import Component from '@glimmer/component';
import { UlxPanelmenu } from 'ulx-components';

export default class DemoPanelmenuMultiple extends Component {
  get items() {
    return [
      {
        key: 'files',
        label: 'Files',
        icon: 'bs-icons1 folder-icon',
        items: [
          {
            key: 'documents',
            label: 'Documents',
            items: [
              {
                key: 'invoices',
                label: 'Invoices',
                items: [{ key: 'pending', label: 'Pending' }, { key: 'paid', label: 'Paid' }]
              },
              { key: 'clients', label: 'Clients' }
            ]
          },
          {
            key: 'images',
            label: 'Images',
            items: [{ key: 'logos', label: 'Logos' }]
          }
        ]
      },
      {
        key: 'cloud',
        label: 'Cloud',
        items: [{ key: 'upload', label: 'Upload' }, { key: 'download', label: 'Download' }, { key: 'sync', label: 'Sync' }]
      },
      {
        key: 'devices',
        label: 'Devices',
        items: [{ key: 'phone', label: 'Phone' }, { key: 'desktop', label: 'Desktop' }, { key: 'tablet', label: 'Tablet' }]
      }
    ];
  }

  <template>
    <div class="w-100p md-max-w-640">
      <UlxPanelmenu @model={{this.items}} @multiple={{true}} />
    </div>
  </template>
}
`;

