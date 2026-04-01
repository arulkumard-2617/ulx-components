import Component from '@glimmer/component';

export default class ColorPaletteComponent extends Component {
  getStyleString = (cssVar) => {
    return `width: 70px; height: 70px; margin: 0 auto 1rem; background: ${cssVar};`;
  };

  <template>
    <div class="flex flex-col gap-8 w-full">
      {{#each @paletteGroups as |group|}}
        <div class="flex flex-col gap-2">
          <h5 class="mt-0 mb-2 bold-font fg-primary">{{group.title}}</h5>
          <div class="ulx-grid col-4 gap-5">
            {{#each group.colors as |color|}}
              <article
                class="ulx-foundation-card p-3 rounded border flex-flex-col md-w-1-3 text-center"
              >
                <div
                  class="rounded mb-2 border m-auto"
                  style={{this.getStyleString color.cssVar}}
                ></div>
                <p class="mb-1 fg-text-secondary"><code
                  >{{color.token}}</code></p>
              </article>
            {{/each}}
          </div>
        </div>
      {{/each}}
    </div>
  </template>
}
