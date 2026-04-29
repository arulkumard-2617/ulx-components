import { UlxImage, t } from 'ulx-components';

<template>
  <div>
    <div class="ulx-grid col-2 gap-8">
      <div>
        <h6 class="bold-font mb-2">{{"1:1 (img-aspect-square)"}}</h6>
        <div class="w-full max-w-240">
          <UlxImage
            @src="https://randomuser.me/api/portraits/women/36.jpg"
            @alt="Sample portrait for UlxImage demos"
            @aspectRatio="square"
            @objectFit="cover"
          />
        </div>
      </div>
      <div>
        <h6 class="bold-font mb-2">{{"16:9 (img-aspect-video)"}}</h6>
        <div class="w-full max-w-240">
          <UlxImage
            @src="https://randomuser.me/api/portraits/men/41.jpg"
            @alt="Sample portrait for UlxImage demos"
            @aspectRatio="video"
            @objectFit="cover"
          />
        </div>
      </div>
      <div>
        <h6 class="bold-font mb-2">{{"9:16 (img-aspect-portrait)"}}</h6>
        <div class="w-full max-w-240">
          <UlxImage
            @src="https://randomuser.me/api/portraits/women/77.jpg"
            @alt="Sample portrait for UlxImage demos"
            @aspectRatio="portrait"
            @objectFit="cover"
          />
        </div>
      </div>
      <div>
        <h6 class="bold-font mb-2">{{"4:3 (img-aspect-four-three)"}}</h6>
        <div class="w-full max-w-240">
          <UlxImage
            @src="https://randomuser.me/api/portraits/men/52.jpg"
            @alt="Sample portrait for UlxImage demos"
            @aspectRatio="four-three"
            @objectFit="cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>
