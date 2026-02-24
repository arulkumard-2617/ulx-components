import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxChip, t } from 'ulx-components';

const AVATAR_IMAGE = 'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png';

export default class DemoChipImage extends Component {
  @tracked showImageWithClose = true;

  @action
  handleRemoveImageWithClose() {
    this.showImageWithClose = false;
  }

  <template>
    <div class="fxb fxwrap gp4">
      <UlxChip
        @label={{t "msg.chip.with.image"}}
        @image={{AVATAR_IMAGE}}
        @imageAlt={{t "lbl.image"}}
        @size="s-size"
      />
      {{#if this.showImageWithClose}}
        <UlxChip
          @label={{t "msg.chip.with.image.and.close"}}
          @image={{AVATAR_IMAGE}}
          @imageAlt={{t "lbl.image"}}
          @size="s-size"
          @removable={{true}}
          @onRemove={{this.handleRemoveImageWithClose}}
        />
      {{/if}}
    </div>
  </template>
}
