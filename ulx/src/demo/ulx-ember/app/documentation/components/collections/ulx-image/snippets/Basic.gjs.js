export default `
import { UlxImage, t } from 'ulx-components';

<template>
  <div class="ulx-grid col-1 gap-6">
    <div>
      <h6 class="bold-font mb-2">{{t "lbl.image"}}
        —
        {{t "lbl.doc.image.decorative.heading"}}</h6>
      <p class="text-12 fg-secondary mb-3">{{t
          "msg.doc.image.basic.decorative.desc"
        }}</p>
      <UlxImage
        @src="https://randomuser.me/api/portraits/women/32.jpg"
        @alt=""
      />
    </div>
    <div>
      <h6 class="bold-font mb-2">{{t "lbl.image"}}
        —
        {{t "lbl.doc.image.meaningful.heading"}}</h6>
      <p class="text-12 fg-secondary mb-3">{{t
          "msg.doc.image.basic.meaningful.desc"
        }}</p>
      <UlxImage
        @src="https://randomuser.me/api/portraits/men/44.jpg"
        @alt={{t "msg.doc.image.sample.alt"}}
        @size="xl-size"
        @shape="rounded"
      />
    </div>
  </div>
</template>

`;
