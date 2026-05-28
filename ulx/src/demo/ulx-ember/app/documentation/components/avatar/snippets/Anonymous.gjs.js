export default `
import { hash } from '@ember/helper';
import { UlxAvatar } from 'ulx-components';

<template>
  <div class="flex wrap gap-4 items-center">
    <UlxAvatar
      @memberProfile={{hash isAnnon=true}}
      @size="m-size"
      @shape="circle"
      @variant="anonymous"
    />
    <UlxAvatar
      @type="icon"
      @iconName="anonymous-icon"
      @iconType="font"
      @iconComponentClass="bs-icons1"
      @variant="anonymous"
      @size="m-size"
      @shape="circle"
      @ariaLabel="Anonymous user"
    />
  </div>
</template>

`;
