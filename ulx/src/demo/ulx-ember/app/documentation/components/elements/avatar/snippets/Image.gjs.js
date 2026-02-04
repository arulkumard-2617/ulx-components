export default `
import { UlxAvatar } from 'ulx-components';

<template>
  <div class="fxb wrap gp4 fvc">
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
