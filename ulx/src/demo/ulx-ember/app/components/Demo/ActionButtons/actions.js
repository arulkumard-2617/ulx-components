export function buildSplitActionButtons({
  primaryLabel = 'Save',
  primaryIcon = 'bs-icons1 ls-tick-icon',
  onPrimary,
  onUpdate,
  onDelete
}) {
  return [
    {
      label: primaryLabel,
      icon: primaryIcon,
      action: onPrimary
    },
    {
      label: 'Update',
      icon: 'bs-icons1 session-settings-icon',
      command: onUpdate
    },
    { separator: true },
    {
      label: 'Delete',
      icon: 'bs-icons1 close-icon-01',
      linkClass: 'fg-red',
      command: onDelete
    }
  ];
}
