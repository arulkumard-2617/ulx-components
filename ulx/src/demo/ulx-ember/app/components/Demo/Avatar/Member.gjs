import Component from '@glimmer/component';
import { UlxAvatar } from 'ulx-components';

export default class MemberDemoComponent extends Component {
  get members() {
    return [
      {
        id: 'member-jasper',
        fullName: 'Jasper G',
        email: 'jasper.g@example.com',
        avatarUrl: 'https://randomuser.me/api/portraits/women/90.jpg',
        hasBsAvatar: true
      },
      {
        id: 'member-john',
        fullName: 'John Smith',
        email: 'john.smith@example.com',
        avatarUrl: 'https://randomuser.me/api/portraits/women/91.jpg',
        hasIAMPhoto: true
      },
      {
        id: 'member-emily',
        fullName: 'Emily Carter',
        email: 'emily.carter@example.com'
      },
      {
        id: 'member-peter',
        fullName: 'Peter Miller',
        email: 'peter.miller@example.com',
        avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
        hasBsAvatar: true
      },
      {
        id: 'member-alex',
        fullName: 'Alex Rivera',
        email: 'alex.rivera@example.com'
      },
      {
        id: 'member-sam',
        fullName: 'Sam Patel',
        email: 'sam.patel@example.com'
      },
      {
        id: 'member-anonymous',
        isAnnon: true
      }
    ];
  }

  <template>
    <div class="flex flex-col gap-6">
      <div>
        <h6 class="bold-font mb-3">Member profiles</h6>
        <p class="text-13 fg-secondary mb-4">
          Same UlxAvatar API for every member. Photo when available; colored
          initials when not.
        </p>
        <div class="flex wrap gap-4 items-center">
          {{#each this.members as |member index|}}
            <div class="flex flex-col gap-2 items-center">
              <UlxAvatar
                @memberProfile={{member}}
                @index={{index}}
                @size="l-size"
                @shape="circle"
              />
              <span class="text-13 fg-secondary">
                {{if member.isAnnon "Anonymous" member.fullName}}
              </span>
            </div>
          {{/each}}
        </div>
      </div>

      <div>
        <h6 class="bold-font mb-3">Legacy nameOnly</h6>
        <div class="flex wrap gap-4 items-center">
          <UlxAvatar
            @nameOnly={{true}}
            @name="Legacy Member"
            @index={{0}}
            @size="m-size"
            @shape="circle"
          />
        </div>
      </div>
    </div>
  </template>
}
