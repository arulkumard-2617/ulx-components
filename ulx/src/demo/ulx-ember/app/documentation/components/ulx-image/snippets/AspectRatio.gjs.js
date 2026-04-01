export default `
import { UlxImage, t } from 'ulx-components';

<template>
  <div>
    <p class="text-12 fg-secondary mb-4">{{t
        "msg.doc.image.aspectratio.intro"
      }}</p>
    <div class="ulx-grid col-2 gap-4">
      <div>
        <h6 class="bold-font mb-2">{{t "lbl.doc.image.aspect.square"}}</h6>
        <div class="w-full max-w-240">
          <UlxImage
            @src="https://randomuser.me/api/portraits/women/36.jpg"
            @alt={{t "msg.doc.image.sample.alt"}}
            @aspectRatio="square"
            @size="img-size-75"
            @objectFit="cover"
          />
        </div>
      </div>
      <div>
        <h6 class="bold-font mb-2">{{t "lbl.doc.image.aspect.video"}}</h6>
        <div class="w-full max-w-240">
          <UlxImage
            @src="https://randomuser.me/api/portraits/men/41.jpg"
            @alt={{t "msg.doc.image.sample.alt"}}
            @aspectRatio="video"
            @size="img-size-100"
            @objectFit="cover"
          />
        </div>
      </div>
      <div>
        <h6 class="bold-font mb-2">{{t "lbl.doc.image.aspect.portrait"}}</h6>
        <div class="w-full max-w-240">
          <UlxImage
            @src="https://randomuser.me/api/portraits/women/77.jpg"
            @alt={{t "msg.doc.image.sample.alt"}}
            @aspectRatio="portrait"
            @size="img-size-100"
            @objectFit="cover"
          />
        </div>
      </div>
      <div>
        <h6 class="bold-font mb-2">{{t "lbl.doc.image.aspect.fourthree"}}</h6>
        <div class="w-full max-w-240">
          <UlxImage
            @src="https://randomuser.me/api/portraits/men/52.jpg"
            @alt={{t "msg.doc.image.sample.alt"}}
            @aspectRatio="four-three"
            @size="img-size-100"
            @objectFit="cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

`;
