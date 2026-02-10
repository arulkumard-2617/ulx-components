export default `
import Component from '@glimmer/component';
import { UlxAvatarGroup, UlxAvatar } from 'ulx-components';

export default class GroupDemoComponent extends Component {
  get avatarItems() {
    return [
      {
        type: 'image',
        image: 'https://randomuser.me/api/portraits/women/90.jpg',
        imageAlt: 'User profile picture',
        ariaLabel: 'User profile',
      },
      {
        type: 'image',
        image: 'https://randomuser.me/api/portraits/women/91.jpg',
        imageAlt: 'User profile picture',
        ariaLabel: 'User profile',
      },
      {
        type: 'image',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        imageAlt: 'User profile picture',
        ariaLabel: 'User profile',
      },
      {
        type: 'image',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        imageAlt: 'User profile picture',
        ariaLabel: 'User profile',
      },
      {
        type: 'image',
        image: 'https://randomuser.me/api/portraits/men/75.jpg',
        imageAlt: 'User profile picture',
        ariaLabel: 'User profile',
      },
    ];
  }

  get visibleAvatars() {
    const maxVisible = 4;
    return this.avatarItems.slice(0, maxVisible);
  }

  get overflowCount() {
    const maxVisible = 4;
    return this.avatarItems.length > maxVisible
      ? this.avatarItems.length - maxVisible
      : 0;
  }

  get overflowLabel() {
    return \`+\${this.overflowCount}\`;
  }

  get overflowAriaLabel() {
    return \`\${this.overflowCount} more members\`;
  }

  <template>
    <div class="fxb fcol gp5">
      <UlxAvatarGroup
        @items={{this.avatarItems}}
        @stacked={{true}}
        @maxVisible={{4}}
        @size="l-size"
        @shape="circle"
      />
      <UlxAvatarGroup @stacked={{true}} @size="l-size" @shape="circle">
        {{#each this.visibleAvatars as |avatar|}}
          <UlxAvatar
            @type={{avatar.type}}
            @image={{avatar.image}}
            @imageAlt={{avatar.imageAlt}}
            @ariaLabel={{avatar.ariaLabel}}
            @size="l-size"
            @shape="circle"
          />
        {{/each}}

        {{#if this.overflowCount}}
          <UlxAvatar
            @type="text"
            @label={{this.overflowLabel}}
            @size="l-size"
            @shape="circle"
            @variant="grey"
            @ariaLabel={{this.overflowAriaLabel}}
          />
        {{/if}}
      </UlxAvatarGroup>
    </div>
  </template>
}

`;
