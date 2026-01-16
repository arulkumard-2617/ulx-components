import Component from '@glimmer/component';

export default class ColorPaletteComponent extends Component {
  getStyleString = (cssVar) => {
    return `width: 70px; height: 70px; margin: 0 auto 1rem; background: ${cssVar};`;
  }

  <template>
    <div class="fxb fcol gp8 w-100p">
      {{#each @paletteGroups as |group|}}
        <div class="fxcol gp2">
          <h5 class="mgt0 mgb2 font-bold fg-primary">{{group.title}}</h5>
          <div class="uls-grid col-4">
            {{#each group.colors as |color|}}
              <article class="uls-foundation-card pd3 rds2 bdr flex-column md-w-1-3 text-center">
                <div
                  class="rds2 mgb2 bdr mg-auto"
                  style={{this.getStyleString color.cssVar}}
                ></div>
                <p class="mgb1 fg-text-secondary"><code>{{color.token}}</code></p>
              </article>
            {{/each}}
          </div>
        </div>
      {{/each}}
    </div>
  </template>
}

