export default `
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { UlxTieredmenu, t } from 'ulx-components';

export default class TemplateTieredmenuDemo extends Component {
  get items() {
    return [
      {
        label: t('lbl.file'),
        icon: 'bs-icons1 pdf-stroke-icon',
        items: [
          {
            label: t('lbl.new'),
            icon: 'bs-icons1 add-icon-01',
            items: [
              { label: t('lbl.project'), icon: 'bs-icons1 library-icon' },
              { label: t('lbl.file'), icon: 'bs-icons1 pdf-stroke-icon' },
              { separator: true },
              {
                label: t('lbl.from.template'),
                icon: 'bs-icons1 copy-icon',
              },
            ],
          },
          { label: t('lbl.open'), icon: 'bs-icons1 library-icon' },
          { separator: true },
          {
            label: t('lbl.export'),
            icon: 'bs-icons1 upload-icon',
            items: [
              { label: t('lbl.pdf'), icon: 'bs-icons1 pdf-filled-icon' },
              { label: t('lbl.excel'), icon: 'bs-icons1 pdf-stroke-icon' },
              { label: t('lbl.csv'), icon: 'bs-icons1 pdf-stroke-icon' },
            ],
          },
          { separator: true },
          { label: t('lbl.exit'), icon: 'bs-icons1 close-icon-01' },
        ],
      },
      {
        label: t('lbl.edit'),
        icon: 'bs-icons1 edit-icon',
        items: [
          { label: t('lbl.undo'), icon: 'bs-icons1 undo-icon' },
          { label: t('lbl.redo'), icon: 'bs-icons1 update-icon' },
          { separator: true },
          {
            label: t('lbl.find'),
            icon: 'bs-icons1 search-icon',
            items: [
              { label: t('lbl.find.ellipsis'), icon: 'bs-icons1 search-icon' },
              { label: t('lbl.find.and.replace'), icon: 'bs-icons1 user-sync-icon' },
              { label: t('lbl.find.in.files'), icon: 'bs-icons1 library-icon' },
            ],
          },
        ],
      },
      {
        label: t('lbl.view'),
        icon: 'bs-icons1 view-icon',
        items: [
          { label: t('lbl.zoom.in'), icon: 'bs-icons1 zoom-in-stroke-icon' },
          { label: t('lbl.zoom.out'), icon: 'bs-icons1 zoom-out-stroke-icon' },
        ],
      },
      { separator: true },
      {
        label: t('lbl.help'),
        icon: 'bs-icons1 question-icon',
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
