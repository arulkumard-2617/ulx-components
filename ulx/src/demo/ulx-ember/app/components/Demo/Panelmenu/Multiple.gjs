import Component from '@glimmer/component';
import { UlxPanelmenu } from 'ulx-components';

export default class DemoPanelmenuMultiple extends Component {
  get items() {
    return [
      {
        key: 'files',
        label: 'Files',
        icon: 'bs-icons1 event-library-icon s20',
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
        icon: 'bs-icons1 options-icon s20',
        items: [
          { key: 'upload', label: 'Upload', icon: 'bs-icons1 upload-icon s20' }, 
          { key: 'download', label: 'Download', icon: 'bs-icons1 download-icon s20' }, 
          { key: 'sync', label: 'Sync', icon: 'bs-icons1 user-sync-icon s20' }
        ]
      },
      {
        key: 'devices',
        label: 'Devices',
        icon: 'bs-icons1 preview-icon s20',
        items: [{ key: 'phone', label: 'Phone', icon: 'bs-icons1 mobile-preview-icon s20' }, 
        { key: 'desktop', label: 'Desktop', icon: 'bs-icons1 web-preview-icon s20' }, 
        { key: 'tablet', label: 'Tablet', icon: 'bs-icons1 add-note-icon s20' }]
      }
    ];
  }

  <template>
    <div class="w-100p md-max-w-640">
      <UlxPanelmenu @model={{this.items}} @multiple={{true}} />
    </div>
  </template>
}

