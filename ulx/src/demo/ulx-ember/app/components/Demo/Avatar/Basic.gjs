import { UlxAvatar } from 'ulx-components';

<template>
  <div class="ulx-grid col-2">
    <div class="">
      <h6 class="bold-font mgb3">Square</h6>
      <div class="fxb wrap gp4 fvc">
        <UlxAvatar
          @type="text"
          @label="UL"
          @shape="square"
          @size="xl-size"
          @variant="grey"
        />
        <UlxAvatar
          @type="text"
          @label="V"
          @shape="square"
          @size="l-size"
          @variant="blue"
        />
        <UlxAvatar
          @type="text"
          @label="U"
          @shape="square"
          @size="m-size"
          @variant="purple"
        />
      </div>
    </div>

    <div class="">
      <h6 class="bold-font mgb3">Circle</h6>
      <div class="fxb wrap gp4 fvc">
        <UlxAvatar
          @type="text"
          @label="P"
          @shape="circle"
          @size="xl-size"
          @variant="grey"
        />
        <UlxAvatar
          @type="text"
          @label="V"
          @shape="circle"
          @size="l-size"
          @variant="blue"
        />
        <UlxAvatar
          @type="text"
          @label="U"
          @shape="circle"
          @size="m-size"
          @variant="purple"
        />
      </div>
    </div>
  </div>
</template>
