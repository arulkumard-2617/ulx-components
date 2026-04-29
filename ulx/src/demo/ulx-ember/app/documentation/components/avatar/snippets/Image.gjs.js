export default `
import { UlxAvatar, t } from 'ulx-components';

<template>
  <div class="flex wrap gap-4 items-center">
    <UlxAvatar
      @type="image"
      @image="https://randomuser.me/api/portraits/women/90.jpg"
      @imageAlt="User profile picture"
      @shape="square"
      @size="xl-size"
      @ariaLabel="User profile"
    />
    <UlxAvatar
      @type="image"
      @image="https://randomuser.me/api/portraits/women/91.jpg"
      @imageAlt="User profile picture"
      @shape="circle"
      @size="xl-size"
      @ariaLabel="User profile"
    />
  </div>
</template>

`;
