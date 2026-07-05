export default `
import Component from '@glimmer/component';
import { UlxButton, UlxIcon } from 'ulx-components';

export default class ExhibitorAddonCardTemplate extends Component {
  <template>
    <div class="border border-default rounded-md overflow-hidden">
      <div class="flex items-start gap-3 p-3 bg-primaryLayer1">
        <div class="shrink-0" aria-hidden="true">
          <svg class="w-56 h-56" aria-hidden="true">
            <use href="#plugin-medium"></use>
          </svg>
        </div>
        <p class="text-14 m-0 flex-1 medium-font">
          Boost exhibitor satisfaction with booth customization, lead scanning, and
          more — with the Exhibitor Pro add-on.
          <UlxButton
            @label="More Info"
            @variant="primary"
            @text={{true}}
            @size="s-size"
            @customClass="ps-0"
          />
        </p>
      </div>

      <div
        class="flex items-center justify-between gap-3 p-3 border-t border-default bg-default"
      >
        <div class="flex items-center gap-1">
          <UlxIcon
            @iconName="bs-icons1 verified-icon"
            @type="font"
            @size="s16"
            @customClass="fg-green"
            aria-hidden="true"
          />
          <span class="text-13 medium-font">Add-on applied</span>
        </div>
        <UlxButton
          @label="Revoke Add-On"
          @variant="link"
          @size="s-size"
          @customClass="fg-red"
        >
          <:prefix>
            <UlxIcon
              @iconName="bs-icons1 close-stroke-icon"
              @type="font"
              @size="s16"
              aria-hidden="true"
            />
          </:prefix>
        </UlxButton>
      </div>
    </div>
  </template>
}

`;
