import { UlxAvatar, t } from 'ulx-components';

<template>
  <div class="flex wrap gap-4 items-center">
    <UlxAvatar
      @type="image"
      @image="https://randomuser.me/api/portraits/women/90.jpg"
      @imageAlt={{t "lbl.user.profile.picture"}}
      @shape="square"
      @size="xl-size"
      @ariaLabel={{t "lbl.user.profile"}}
    />
    <UlxAvatar
      @type="image"
      @image="https://randomuser.me/api/portraits/women/91.jpg"
      @imageAlt={{t "lbl.user.profile.picture"}}
      @shape="circle"
      @size="xl-size"
      @ariaLabel={{t "lbl.user.profile"}}
    />
  </div>
</template>
