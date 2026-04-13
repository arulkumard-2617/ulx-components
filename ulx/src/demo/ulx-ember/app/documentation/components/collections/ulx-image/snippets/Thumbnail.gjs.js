export default `
import { hash } from '@ember/helper';
import { UlxImage, t } from 'ulx-components';

<template>
  <div class="ulx-grid col-1 gap-6">
    <div>
      <h6 class="bold-font mb-2">{{t
          "lbl.doc.image.thumb.landscape.heading"
        }}</h6>
      <p class="text-12 fg-secondary mb-3">{{t
          "msg.doc.image.thumb.landscape.intro"
        }}</p>
      <div class="flex wrap gap-4 items-end">
        <UlxImage
          @src="https://randomuser.me/api/portraits/women/12.jpg"
          @alt={{t "msg.doc.image.thumb.landscape.alt" (hash size="xs")}}
          @thumbLandscape="xs"
          @shape="rounded"
        />
        <UlxImage
          @src="https://randomuser.me/api/portraits/women/28.jpg"
          @alt={{t "msg.doc.image.thumb.landscape.alt" (hash size="s")}}
          @thumbLandscape="s"
          @shape="rounded"
        />
        <UlxImage
          @src="https://randomuser.me/api/portraits/women/44.jpg"
          @alt={{t "msg.doc.image.thumb.landscape.alt" (hash size="m")}}
          @thumbLandscape="m"
          @shape="rounded"
        />
        <UlxImage
          @src="https://randomuser.me/api/portraits/women/56.jpg"
          @alt={{t "msg.doc.image.thumb.landscape.alt" (hash size="l")}}
          @thumbLandscape="l"
          @shape="rounded"
        />
        <UlxImage
          @src="https://randomuser.me/api/portraits/women/72.jpg"
          @alt={{t "msg.doc.image.thumb.landscape.alt" (hash size="xl")}}
          @thumbLandscape="xl"
          @shape="rounded"
        />
      </div>
    </div>
    <div>
      <h6 class="bold-font mb-2">{{t
          "lbl.doc.image.thumb.portrait.heading"
        }}</h6>
      <p class="text-12 fg-secondary mb-3">{{t
          "msg.doc.image.thumb.portrait.intro"
        }}</p>
      <div class="flex wrap gap-4 items-end">
        <UlxImage
          @src="https://randomuser.me/api/portraits/men/11.jpg"
          @alt={{t "msg.doc.image.thumb.portrait.alt" (hash size="xs")}}
          @thumbPortrait="xs"
          @shape="rounded"
        />
        <UlxImage
          @src="https://randomuser.me/api/portraits/men/24.jpg"
          @alt={{t "msg.doc.image.thumb.portrait.alt" (hash size="s")}}
          @thumbPortrait="s"
          @shape="rounded"
        />
        <UlxImage
          @src="https://randomuser.me/api/portraits/men/37.jpg"
          @alt={{t "msg.doc.image.thumb.portrait.alt" (hash size="m")}}
          @thumbPortrait="m"
          @shape="rounded"
        />
        <UlxImage
          @src="https://randomuser.me/api/portraits/men/50.jpg"
          @alt={{t "msg.doc.image.thumb.portrait.alt" (hash size="l")}}
          @thumbPortrait="l"
          @shape="rounded"
        />
      </div>
    </div>
  </div>
</template>

`;
