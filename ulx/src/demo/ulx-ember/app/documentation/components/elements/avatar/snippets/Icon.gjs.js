export default `
import { UlxAvatar } from 'ulx-components';

<template>
  <div class="fxb wrap gp4 fvc">
    <UlxAvatar
      @type="icon"
      @iconName="user-info-icon-01"
      @iconType="font"
      @iconComponentClass="bs-icons1"
      @shape="circle"
      @size="xl-size"
      @variant="primary"
    />
    <UlxAvatar
      @type="icon"
      @iconName="contact-support-icon-01"
      @iconType="font"
      @iconComponentClass="bs-icons1"
      @shape="circle"
      @size="l-size"
      @variant="secondary"
    />
    <UlxAvatar
      @type="icon"
      @iconName="reassign-member-icon"
      @iconType="font"
      @iconComponentClass="bs-icons1"
      @shape="square"
      @size="m-size"
      @variant="info"
    />
  </div>
</template>

`;
