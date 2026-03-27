export default `
import { hash } from '@ember/helper';
import { UlxAvatar, t } from 'ulx-components';

<template>
  <div class="ulx-grid col-2">
    <div class="">
      <h6 class="bold-font mb-3">{{t "lbl.square"}}</h6>
      <div class="flex wrap gap-4 items-center">
        <UlxAvatar
          @memberProfile={{hash fullName="U L" colorTheme="grey"}}
          @shape="square"
          @size="xl-size"
        />
        <UlxAvatar
          @memberProfile={{hash fullName="Vivek" colorTheme="blue"}}
          @shape="square"
          @size="l-size"
        />
        <UlxAvatar
          @memberProfile={{hash fullName="Uma" colorTheme="purple"}}
          @shape="square"
          @size="m-size"
        />
      </div>
    </div>

    <div class="">
      <h6 class="bold-font mb-3">{{t "lbl.circle"}}</h6>
      <div class="flex wrap gap-4 items-center">
        <UlxAvatar
          @memberProfile={{hash fullName="Priya" colorTheme="grey"}}
          @shape="circle"
          @size="xl-size"
        />
        <UlxAvatar
          @memberProfile={{hash fullName="Vivek" colorTheme="blue"}}
          @shape="circle"
          @size="l-size"
        />
        <UlxAvatar
          @memberProfile={{hash fullName="Uma" colorTheme="purple"}}
          @shape="circle"
          @size="m-size"
        />
      </div>
    </div>
  </div>
</template>

`;
