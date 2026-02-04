import Component from '@glimmer/component';
import { UlxAvatarGroup } from 'ulx-components';

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

  <template>
    <UlxAvatarGroup
      @items={{this.avatarItems}}
      @stacked={{true}}
      @maxVisible={{4}}
      @size="l-size"
      @shape="circle"
    />
  </template>
}
