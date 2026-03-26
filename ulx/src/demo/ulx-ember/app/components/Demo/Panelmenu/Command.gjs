import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxPanelmenu, UlxToast } from 'ulx-components';

export default class DemoPanelmenuCommand extends Component {
  @tracked messages = [];

  @action
  showToast(variant, summary, detail) {
    this.messages = [
      ...this.messages,
      {
        id: `panelmenu-cmd-${Date.now()}-${summary}`,
        variant,
        summary,
        detail,
        life: 3000,
      },
    ];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  get items() {
    return [
      {
        key: 'files',
        label: 'Files',
        icon: 'bs-icons1 event-library-icon s20',
        items: [
          {
            key: 'new',
            label: 'New',
            icon: 'bs-icons1 add-icon-01 s20',
            command: () => this.showToast('success', 'Success', 'File created'),
          },
          {
            key: 'search',
            label: 'Search',
            icon: 'bs-icons1 search-icon s20',
            command: () =>
              this.showToast('warn', 'Search Results', 'No results found'),
          },
          {
            key: 'print',
            label: 'Print',
            icon: 'bs-icons1 print-icon s20',
            command: () =>
              this.showToast('error', 'Error', 'No printer connected'),
          },
        ],
      },
      {
        key: 'sync',
        label: 'Sync',
        icon: 'bs-icons1 user-sync-icon s20',
        items: [
          {
            key: 'import',
            label: 'Import',
            icon: 'bs-icons1 download-icon s20',
            command: () =>
              this.showToast('info', 'Downloads', 'Downloaded from cloud'),
          },
          {
            key: 'export',
            label: 'Export',
            icon: 'bs-icons1 upload-icon s20',
            command: () =>
              this.showToast('info', 'Shared', 'Exported to cloud'),
          },
        ],
      },
      {
        key: 'signout',
        label: 'Sign Out',
        icon: 'bs-icons1 sign-out-icon s20',
        command: () => this.showToast('info', 'Signed out', 'User logged out'),
      },
    ];
  }

  <template>
    <div class="w-full md-max-w-640">
      <UlxPanelmenu @items={{this.items}} />
      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
    </div>
  </template>
}
