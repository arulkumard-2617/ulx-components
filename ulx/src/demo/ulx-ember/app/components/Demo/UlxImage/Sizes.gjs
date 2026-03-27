import { UlxImage, t } from 'ulx-components';

<template>
  <div>
    <p class="text-12 fg-secondary mb-4">{{t "msg.doc.image.sizes.intro"}}</p>
    <div class="flex wrap gap-4 items-end">
      <UlxImage
        @src="https://randomuser.me/api/portraits/women/12.jpg"
        @alt={{t "msg.doc.image.sample.alt"}}
        @shape="square"
        @size="xs-size"
      />
      <UlxImage
        @src="https://randomuser.me/api/portraits/women/12.jpg"
        @alt={{t "msg.doc.image.sample.alt"}}
        @shape="square"
        @size="s-size"
      />
      <UlxImage
        @src="https://randomuser.me/api/portraits/women/12.jpg"
        @alt={{t "msg.doc.image.sample.alt"}}
        @shape="square"
        @size="m-size"
      />
      <UlxImage
        @src="https://randomuser.me/api/portraits/women/12.jpg"
        @alt={{t "msg.doc.image.sample.alt"}}
        @shape="square"
        @size="l-size"
      />
      <UlxImage
        @src="https://randomuser.me/api/portraits/women/12.jpg"
        @alt={{t "msg.doc.image.sample.alt"}}
        @shape="square"
        @size="xl-size"
      />
      <UlxImage
        @src="https://randomuser.me/api/portraits/women/12.jpg"
        @alt={{t "msg.doc.image.sample.alt"}}
        @shape="square"
        @size="xxl-size"
      />
      <UlxImage
        @src="https://randomuser.me/api/portraits/women/12.jpg"
        @alt={{t "msg.doc.image.sample.alt"}}
        @shape="square"
        @size="xxxl-size"
      />
    </div>
  </div>
</template>
