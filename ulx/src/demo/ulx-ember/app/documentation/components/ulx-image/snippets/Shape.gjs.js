export default `
import { UlxImage, t } from 'ulx-components';

<template>
  <div>
    <p class="text-12 fg-secondary mb-4">{{"Use @shape with ULS classes: square (pair with @size for crop), rounded, or circle."}}</p>
    <div class="ulx-grid col-3">
      <div>
        <h6 class="bold-font mb-3">{{"Square"}}</h6>
        <UlxImage
          @src="https://randomuser.me/api/portraits/women/65.jpg"
          @alt="Sample portrait for UlxImage demos"
          @shape="square"
          @size="l-size"
          @objectFit="cover"
        />
      </div>
      <div>
        <h6 class="bold-font mb-3">{{"Rounded"}}</h6>
        <UlxImage
          @src="https://randomuser.me/api/portraits/men/22.jpg"
          @alt="Sample portrait for UlxImage demos"
          @shape="rounded"
          @size="l-size"
        />
      </div>
      <div>
        <h6 class="bold-font mb-3">{{"Circle"}}</h6>
        <UlxImage
          @src="https://randomuser.me/api/portraits/women/68.jpg"
          @alt="Sample portrait for UlxImage demos"
          @shape="circle"
          @size="l-size"
        />
      </div>
    </div>
  </div>
</template>

`;
