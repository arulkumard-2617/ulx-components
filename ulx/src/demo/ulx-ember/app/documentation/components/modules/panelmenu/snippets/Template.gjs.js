export default `
import Component from '@glimmer/component';
import { UlxPanelmenu } from 'ulx-components';
import TemplateItem from './TemplateItem';

export default class DemoPanelmenuTemplate extends Component {
  get items() {
    return [
      {
        key: 'mail',
        label: 'Mail',
        icon: 'bs-icons1 email-icon s20',
        badge: 5,
        template: TemplateItem,
        items: [
          {
            key: 'compose',
            label: 'Compose',
            icon: 'bs-icons1 mail-edit-icon s20',
            shortcut: '⌘+N',
            template: TemplateItem,
          },
          {
            key: 'inbox',
            label: 'Inbox',
            icon: 'bs-icons1 email-icon-01 s20',
            badge: 5,
            template: TemplateItem,
          },
          {
            key: 'sent',
            label: 'Sent',
            icon: 'bs-icons1 send-icon s20',
            shortcut: '⌘+S',
            template: TemplateItem,
          },
          {
            key: 'trash',
            label: 'Trash',
            icon: 'bs-icons1 delete-icon s20',
            shortcut: '⌘+T',
            template: TemplateItem,
          },
        ],
      },
      {
        key: 'reports',
        label: 'Reports',
        icon: 'bs-icons1 report-icon-01 s20',
        shortcut: '⌘+R',
        template: TemplateItem,
        items: [
          {
            key: 'sales',
            label: 'Sales',
            icon: 'bs-icons1 sales-summary-icon s20',
            badge: 3,
            template: TemplateItem,
          },
          {
            key: 'products',
            label: 'Products',
            icon: 'bs-icons1 space-icon s20',
            badge: 6,
            template: TemplateItem,
          },
        ],
      },
      {
        key: 'profile',
        label: 'Profile',
        icon: 'bs-icons1 team-member-icon s20',
        shortcut: '⌘+W',
        template: TemplateItem,
        items: [
          {
            key: 'settings',
            label: 'Settings',
            icon: 'bs-icons1 settings-icon-01 s20',
            shortcut: '⌘+O',
            template: TemplateItem,
          },
          {
            key: 'privacy',
            label: 'Privacy',
            icon: 'bs-icons1 data-privacy-icon s20',
            shortcut: '⌘+P',
            template: TemplateItem,
          },
        ],
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
