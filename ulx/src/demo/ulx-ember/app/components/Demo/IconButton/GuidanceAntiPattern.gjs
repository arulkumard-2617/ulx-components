import Component from '@glimmer/component';
import { UlxIconButton } from 'ulx-components';

export default class DemoIconButtonGuidanceAntiPattern extends Component {
  <template>
    <div class="flex flex-col gap-4">
      <p class="mgt0 mb-0 text-12 fg-text-secondary component-usages__not-recommended-label">
        {{"Not recommended"}}
      </p>
      <UlxIconButton
        @iconLeft="add-icon-01"
        @iconComponentClass="bs-icons1"
        @fluid={{true}}
        aria-label="Add item"
      />
      <div class="flex items-center gap-2 flex-wrap">
        <UlxIconButton
          @iconLeft="add-icon-01"
          @iconComponentClass="bs-icons1"
          @variant="primary"
          aria-label="Add"
        />
        <UlxIconButton
          @iconLeft="edit-icon"
          @iconComponentClass="bs-icons1"
          @variant="primary"
          aria-label="Edit"
        />
        <UlxIconButton
          @iconLeft="delete-icon"
          @iconComponentClass="bs-icons1"
          @variant="primary"
          aria-label="Delete"
        />
      </div>
    </div>
  </template>
}
