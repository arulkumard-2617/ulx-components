import Component from '@glimmer/component';
import { UlxAvatar } from 'ulx-components';

export default class MemberDemoComponent extends Component {
  get profiles() {
    return [
      {
        fullName: 'Jasper G',
        avatarUrl: 'https://randomuser.me/api/portraits/women/90.jpg',
        hasBsAvatar: true
      },
      {
        fullName: 'John Smith',
        avatarUrl: 'https://randomuser.me/api/portraits/women/91.jpg',
        hasIAMPhoto: true
      },
      {
        fullName: 'Peter Miller',
        avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
        hasBsAvatar: true
      },
      {
        nameOnly: true,
        name: 'Emily Carter'
      },
      {
        nameOnly: true,
        name: 'Legacy Member'
      },
      {
        nameOnly: true,
        name: 'Another Member'
      }
    ];
  }

  <template>
    <div class="flex wrap gap-4 items-center">
      {{#each this.profiles as |profile index|}}
        <UlxAvatar
          @memberProfile={{unless profile.nameOnly profile}}
          @nameOnly={{profile.nameOnly}}
          @name={{profile.name}}
          @index={{index}}
          @size="l-size"
          @shape="circle"
        />
      {{/each}}
    </div>
  </template>
}
