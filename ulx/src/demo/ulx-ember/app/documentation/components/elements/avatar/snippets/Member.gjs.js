export default `
import { hash } from '@ember/helper';
import { UlxAvatar, t } from 'ulx-components';

<template>
  <div class="flex flex-col gap-6">
    <div>
      <h6 class="bold-font mb-3">{{t "lbl.image.avatar"}}</h6>
      <div class="flex wrap gap-4 items-center">
        <UlxAvatar
          @memberProfile={{hash
            fullName="Jane Doe"
            avatarUrl="https://randomuser.me/api/portraits/women/90.jpg"
            hasBsAvatar=true
          }}
          @size="l-size"
          @shape="circle"
        />

        <UlxAvatar
          @memberProfile={{hash
            fullName="John Smith"
            avatarUrl="https://randomuser.me/api/portraits/women/91.jpg"
            hasIAMPhoto=true
          }}
          @size="l-size"
          @shape="circle"
        />

        <UlxAvatar
          @memberProfile={{hash
            fullName="Peter Miller"
            avatarUrl="https://randomuser.me/api/portraits/men/32.jpg"
            hasBsAvatar=true
          }}
          @size="l-size"
          @shape="circle"
        />
      </div>
    </div>

    <div>
      <h6 class="bold-font mb-3">{{t "lbl.initials.fallback"}}</h6>
      <div class="flex wrap gap-4 items-center">
        <UlxAvatar
          @memberProfile={{hash
            fullName="Emily Carter"
            hasImage=false
            colorTheme="blue"
          }}
          @size="m-size"
          @shape="circle"
        />

        <UlxAvatar
          @nameOnly={{true}}
          @name="Legacy Member"
          @index={{0}}
          @size="m-size"
          @shape="circle"
        />

        <UlxAvatar
          @nameOnly={{true}}
          @name="Another Member"
          @index={{3}}
          @size="m-size"
          @shape="circle"
        />
      </div>
    </div>

    <div>
      <h6 class="bold-font mb-3">{{t "lbl.anonymous.avatar"}}</h6>
      <div class="flex wrap gap-4 items-center">
        <UlxAvatar
          @memberProfile={{hash isAnnon=true}}
          @size="m-size"
          @shape="circle"
        />
      </div>
    </div>
  </div>
</template>
`;
