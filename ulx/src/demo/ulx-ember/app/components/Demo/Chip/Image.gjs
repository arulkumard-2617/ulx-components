import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxChip, t } from 'ulx-components';

const AVATAR_IMAGE =
  'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png';

export default class DemoChipImage extends Component {
  @tracked showImageWithClose = true;

  @action
  handleRemoveImageWithClose() {
    this.showImageWithClose = false;
  }

  <template>
    <div class="flex flex-wrap gap-4">
      <UlxChip
        @label="With image"
        @image={{AVATAR_IMAGE}}
        @imageAlt={{t "lbl.image"}}
      />
      {{#if this.showImageWithClose}}
        <UlxChip
          @label="With image and close icon"
          @image={{AVATAR_IMAGE}}
          @imageAlt={{t "lbl.image"}}
          @removable={{true}}
          @onRemove={{this.handleRemoveImageWithClose}}
        />
      {{/if}}
    </div>
  </template>
}
