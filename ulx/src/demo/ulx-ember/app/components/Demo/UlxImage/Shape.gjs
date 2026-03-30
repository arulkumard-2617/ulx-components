import { UlxImage, t } from 'ulx-components';

<template>
  <div>
    <p class="text-12 fg-secondary mb-4">{{t "msg.doc.image.shape.intro"}}</p>
    <div class="ulx-grid col-3">
      <div>
        <h6 class="bold-font mb-3">{{t "lbl.square"}}</h6>
        <UlxImage
          @src="https://randomuser.me/api/portraits/women/65.jpg"
          @alt={{t "msg.doc.image.sample.alt"}}
          @shape="square"
          @size="l-size"
          @objectFit="cover"
        />
      </div>
      <div>
        <h6 class="bold-font mb-3">{{t "lbl.rounded"}}</h6>
        <UlxImage
          @src="https://randomuser.me/api/portraits/men/22.jpg"
          @alt={{t "msg.doc.image.sample.alt"}}
          @shape="rounded"
          @size="l-size"
        />
      </div>
      <div>
        <h6 class="bold-font mb-3">{{t "lbl.circle"}}</h6>
        <UlxImage
          @src="https://randomuser.me/api/portraits/women/68.jpg"
          @alt={{t "msg.doc.image.sample.alt"}}
          @shape="circle"
          @size="l-size"
        />
      </div>
    </div>
  </div>
</template>
