/* eslint-disable no-console */
export const actionMenuDemoItems = [
  {
    label: 'Edit',
    icon: 'bs-icons1 edit-icon',
    command: () => console.log('Edit clicked'),
  },
  {
    label: 'Duplicate',
    icon: 'bs-icons1 copy-icon',
    command: () => console.log('Duplicate clicked'),
  },
  { separator: true },
  {
    label: 'Delete',
    icon: 'bs-icons1 close-icon-01',
    command: () => console.log('Delete clicked'),
  },
];
