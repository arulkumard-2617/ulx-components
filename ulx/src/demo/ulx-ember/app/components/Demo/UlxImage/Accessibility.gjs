import { UlxImage, t } from 'ulx-components';

<template>
  <div class="ulx-grid col-1 gap-6">
    <div>
      <h6 class="bold-font mb-2">{{t "lbl.doc.image.a11y.decorative.heading"}}</h6>
      <p class="text-12 fg-secondary mb-3">{{t "msg.doc.image.a11y.decorative.desc"}}</p>
      <UlxImage
        @src="https://randomuser.me/api/portraits/men/71.jpg"
        @alt=""
        @size="m-size"
        @shape="rounded"
      />
    </div>
    <div>
      <h6 class="bold-font mb-2">{{t "lbl.doc.image.a11y.meaningful.heading"}}</h6>
      <p class="text-12 fg-secondary mb-3">{{t "msg.doc.image.a11y.meaningful.desc"}}</p>
      <UlxImage
        @src="https://randomuser.me/api/portraits/women/90.jpg"
        @alt={{t "msg.doc.image.sample.alt"}}
        @size="m-size"
      />
    </div>
    <div>
      <h6 class="bold-font mb-2">{{t "lbl.doc.image.a11y.describedby.heading"}}</h6>
      <p class="text-12 fg-secondary mb-3">{{t "msg.doc.image.a11y.describedby.desc"}}</p>
      <figure class="inline-block">
        <UlxImage
          @src="https://randomuser.me/api/portraits/men/33.jpg"
          @alt={{t "msg.doc.image.sample.alt"}}
          @size="l-size"
          @shape="rounded"
          aria-describedby="ulx-image-demo-figcap"
        />
        <figcaption id="ulx-image-demo-figcap" class="text-12 fg-secondary mt-2">
          {{t "msg.doc.image.a11y.figcaption"}}
        </figcaption>
      </figure>
    </div>
    <div>
      <h6 class="bold-font mb-2">{{t "lbl.doc.image.a11y.loadfail.heading"}}</h6>
      <p class="text-12 fg-secondary mb-3">{{t "msg.doc.image.a11y.loadfail.desc"}}</p>
      <UlxImage
        @src="data:image/jpeg;base64,INVALIDNOTBASE64"
        @alt={{t "msg.doc.image.sample.alt"}}
        @size="l-size"
        @shape="rounded"
      />
    </div>
  </div>
</template>
