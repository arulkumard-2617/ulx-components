import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { LinkTo } from '@ember/routing';
import { UlxCard, UlxIcon, UlxButton, UlxSelectButton } from 'ulx-components';
import { DocNavItems } from '../../../constants/docs';

const CATEGORY_META = {
  Form: {
    title: 'Form Controls',
    description: 'Inputs, selects, checkboxes, radios and more.',
    icon: 'edit-icon'
  },
  Button: {
    title: 'Buttons & Actions',
    description: 'Buttons, button groups, FABs and action elements.',
    icon: 'checkbox-icon'
  },
  Menu: {
    title: 'Navigation',
    description: 'Menus, tabs, breadcrumbs, paginators and more.',
    icon: 'hamburger-icon'
  },
  Data: {
    title: 'Data Display',
    description: 'Tables, lists, badges, avatars and progress indicators.',
    icon: 'list-view-icon'
  },
  Messages: {
    title: 'Feedback',
    description: 'Alerts, toasts, dialogs, spinners and progress bars.',
    icon: 'feedback-icon'
  },
  Overlay: {
    title: 'Overlay',
    description: 'Modals, drawers, tooltips, popovers and more.',
    icon: 'focus-icon'
  },
  Panel: {
    title: 'Surfaces',
    description: 'Cards, panels, dividers and surfaces.',
    icon: 'image-left-right-icon'
  },
  Misc: {
    title: 'Other',
    description: 'Miscellaneous components and helpers.',
    icon: 'others-session'
  }
};

/**
 * Overview landing page: stats, category browse (grid/list), and feedback CTA.
 */
export default class OverviewDocPageComponent extends Component {
  @tracked viewMode = 'grid';

  get componentsNav() {
    return DocNavItems.find((item) => item.menuTitle === 'Components');
  }

  get categories() {
    const children = this.componentsNav?.children ?? [];

    return children
      .filter((group) => group.category && Array.isArray(group.items))
      .map((group) => {
        const meta = CATEGORY_META[group.category] ?? {
          title: group.category,
          description: 'Explore components in this category.',
          icon: 'grid-view-icon'
        };
        const firstItem = group.items[0];

        return {
          key: group.category,
          title: meta.title,
          description: meta.description,
          icon: meta.icon,
          count: group.items.length,
          route: firstItem?.route,
          countLabel: `${group.items.length} component${group.items.length === 1 ? '' : 's'}`
        };
      })
      .filter((category) => category.route);
  }

  get componentCount() {
    return this.categories.reduce(
      (total, category) => total + category.count,
      0
    );
  }

  get stats() {
    return [
      {
        key: 'components',
        value: `${this.componentCount}+`,
        label: 'Components',
        icon: 'grid-view-icon',
        iconClass: 'fg-primary',
        boxClass: 'bg-primaryLayer1'
      },
      {
        key: 'categories',
        value: String(this.categories.length),
        label: 'Categories',
        icon: 'list-view-icon',
        iconClass: 'fg-blue',
        boxClass: 'bg-blueLayer1'
      },
      {
        key: 'customizable',
        value: '100%',
        label: 'Customizable',
        icon: 'session-settings-icon',
        iconClass: 'fg-green',
        boxClass: 'bg-greenLayer1'
      },
      {
        key: 'accessible',
        value: 'Accessible',
        label: 'WCAG 2.2 AA',
        icon: 'accessibility-icon',
        iconClass: 'fg-orange',
        boxClass: 'bg-orangeLayer1'
      }
    ];
  }

  get viewModeOptions() {
    return [
      { value: 'grid', icon: 'grid-view-icon', label: 'Grid' },
      { value: 'list', icon: 'list-view-icon', label: 'List' }
    ];
  }

  get categoryGridClass() {
    return this.viewMode === 'list'
      ? 'ulx-grid col-1 gap-4'
      : 'ulx-grid col-4 col-md-2 col-sm-1 gap-4';
  }

  isGridView = () => this.viewMode === 'grid';

  @action
  onViewModeChange(value) {
    this.viewMode = value ?? 'grid';
  }

  <template>
    <div class="flex flex-col gap-8">
      <div class="ulx-grid col-4 col-md-2 col-sm-1 gap-4">
        {{#each this.stats key="key" as |stat|}}
          <div class="flex items-center gap-3 p-4 border rounded-md">
            <div
              class="w-48 h-48 flex items-center justify-center rounded shrink-0
                {{stat.boxClass}}"
            >
              <UlxIcon
                @iconName={{stat.icon}}
                @type="font"
                @componentClass="bs-icons1"
                @customClass={{stat.iconClass}}
                @size="s20"
                aria-hidden="true"
              />
            </div>
            <div class="min-w-0">
              <div class="bold-font text-20">{{stat.value}}</div>
              <div class="fg-text-secondary text-14">{{stat.label}}</div>
            </div>
          </div>
        {{/each}}
      </div>

      <section>
        <div class="flex items-center justify-between gap-4 mb-5">
          <h4 class="mgt0 mb-0 bold-font">{{"Browse by Category"}}</h4>
          <UlxSelectButton
            @options={{this.viewModeOptions}}
            @value={{this.viewMode}}
            @onChange={{this.onViewModeChange}}
            @optionLabel="label"
            @optionValue="value"
            @variant="secondary"
            @size="s-size"
            @ariaLabel="Category layout"
          >
            <:item as |option|>
              <span class="flex items-center gap-1">
                <UlxIcon
                  @iconName={{option.icon}}
                  @type="font"
                  @componentClass="bs-icons1"
                  @size="s16"
                  aria-hidden="true"
                />
                <span>{{option.label}}</span>
              </span>
            </:item>
          </UlxSelectButton>
        </div>

        <div class={{this.categoryGridClass}}>
          {{#each this.categories key="key" as |category|}}
            <LinkTo
              @route={{category.route}}
              class="block decoration-none fg-text h-full"
            >
              {{#if (this.isGridView)}}
                <UlxCard
                  @appearance="outlined"
                  @rounded={{true}}
                  @interactive={{true}}
                  @hoverable={{true}}
                  @customClass="h-full"
                  @contentClass="flex flex-col gap-3 h-full"
                >
                  <div
                    class="w-40 h-40 flex items-center justify-center rounded bg-primaryLayer1"
                  >
                    <UlxIcon
                      @iconName={{category.icon}}
                      @type="font"
                      @componentClass="bs-icons1"
                      @customClass="fg-primary"
                      @size="s20"
                      aria-hidden="true"
                    />
                  </div>
                  <h6 class="bold-font mgt0 mb-0">{{category.title}}</h6>
                  <p class="fg-text-secondary text-14 mgt0 mb-0 grow">
                    {{category.description}}
                  </p>
                  <span class="fg-primary text-14 flex items-center gap-1">
                    {{category.countLabel}}
                    <UlxIcon
                      @iconName="right-arrow-icon"
                      @type="font"
                      @componentClass="bs-icons1"
                      @size="s14"
                      aria-hidden="true"
                    />
                  </span>
                </UlxCard>
              {{else}}
                <UlxCard
                  @appearance="outlined"
                  @rounded={{true}}
                  @interactive={{true}}
                  @hoverable={{true}}
                  @contentClass="flex items-center gap-4"
                >
                  <div
                    class="w-40 h-40 flex items-center justify-center rounded bg-primaryLayer1 shrink-0"
                  >
                    <UlxIcon
                      @iconName={{category.icon}}
                      @type="font"
                      @componentClass="bs-icons1"
                      @customClass="fg-primary"
                      @size="s20"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="grow min-w-0">
                    <h6 class="bold-font mgt0 mb-1">{{category.title}}</h6>
                    <p class="fg-text-secondary text-14 mgt0 mb-0">
                      {{category.description}}
                    </p>
                  </div>
                  <span
                    class="fg-primary text-14 flex items-center gap-1 shrink-0"
                  >
                    {{category.countLabel}}
                    <UlxIcon
                      @iconName="right-arrow-icon"
                      @type="font"
                      @componentClass="bs-icons1"
                      @size="s14"
                      aria-hidden="true"
                    />
                  </span>
                </UlxCard>
              {{/if}}
            </LinkTo>
          {{/each}}
        </div>
      </section>

      <div
        class="flex items-center justify-between gap-4 flex-wrap p-5 rounded-md bg-primaryLayer1"
      >
        <div class="flex items-center gap-4 min-w-0">
          <div class="min-w-0">
            <h6 class="bold-font mgt0 mb-1">{{"Need something missing?"}}</h6>
            <p class="fg-text-secondary text-14 mgt0 mb-0">
              {{"We're always improving ULX. Request a component or suggest an improvement."}}
            </p>
          </div>
        </div>
        <UlxButton
          @label="Give Feedback"
          @href="#"
          @iconRight="link-external-icon"
          @iconComponentClass="bs-icons1"
          @iconSize="s16"
        />
      </div>

      <p class="text-center fg-text-secondary text-14 mgt0 mb-0">
        {{"Pro Tip: Click on any category to explore all available components."}}
      </p>
    </div>
  </template>
}
