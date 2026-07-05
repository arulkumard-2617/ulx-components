import { hash } from '@ember/helper';
import { UlxAvatar } from 'ulx-components';

<template>
  <div class="flex flex-col gap-6">
    <div class="ulx-profile-details">
      <div>
        <UlxAvatar
          @memberProfile={{hash
            fullName="Jane Doe"
            avatarUrl="https://randomuser.me/api/portraits/women/90.jpg"
            hasBsAvatar=true
          }}
          @size="l-size"
          @shape="circle"
        />
      </div>
      <div class="profile-details">
        <p class="username">Jane Doe</p>
        <p class="profile-email">jane.doe@example.com</p>
        <p class="profile-description">Product designer</p>
      </div>
    </div>

    <div class="ulx-profile-details">
      <div>
        <UlxAvatar
          @memberProfile={{hash
            fullName="Emily Carter"
            hasImage=false
            colorTheme="blue"
          }}
          @size="l-size"
          @shape="circle"
        />
      </div>
      <div class="profile-details">
        <p class="username">Emily Carter</p>
        <p class="profile-email">emily.carter@example.com</p>
        <p class="profile-description">Engineering lead</p>
      </div>
    </div>

    <div class="ulx-profile-details">
      <div>
        <UlxAvatar
          @memberProfile={{hash isAnnon=true}}
          @size="l-size"
          @shape="circle"
        />
      </div>
      <div class="profile-details">
        <p class="username">Guest user</p>
        <p class="profile-email">Not signed in</p>
      </div>
    </div>
  </div>
</template>
