import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxAccordion } from 'ulx-components';

const LOREM_1 =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const LOREM_2 =
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.';
const LOREM_3 =
  'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.';

export default class MultipleAccordionDemo extends Component {
  @tracked activeIndex = [0];

  get tabs() {
    return [
      { header: 'Header I', content: LOREM_1 },
      { header: 'Header II', content: LOREM_2 },
      { header: 'Header III', content: LOREM_3 },
    ];
  }

  @action
  handleTabChange(event) {
    this.activeIndex = event.index;
  }

  <template>
    <div class="">
      <UlxAccordion
        @model={{this.tabs}}
        @activeIndex={{this.activeIndex}}
        @onTabChange={{this.handleTabChange}}
        @multiple={{true}}
      >
        <:content as |item|>
          <p class="m-0">{{item.content}}</p>
        </:content>
      </UlxAccordion>
    </div>
  </template>
}
