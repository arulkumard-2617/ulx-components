import { UlxImage, t } from 'ulx-components';

<template>
  <div>
    <p class="text-12 fg-secondary mb-4">{{"ULS size tokens from xs-size through xxxl-size with square crop for comparison."}}</p>
    <div class="flex wrap gap-4 items-end">
      <UlxImage
        @src="https://randomuser.me/api/portraits/women/12.jpg"
        @alt="Sample portrait for UlxImage demos"
        @shape="square"
        @size="xs-size"
      />
      <UlxImage
        @src="https://randomuser.me/api/portraits/women/12.jpg"
        @alt="Sample portrait for UlxImage demos"
        @shape="square"
        @size="s-size"
      />
      <UlxImage
        @src="https://randomuser.me/api/portraits/women/12.jpg"
        @alt="Sample portrait for UlxImage demos"
        @shape="square"
        @size="m-size"
      />
      <UlxImage
        @src="https://randomuser.me/api/portraits/women/12.jpg"
        @alt="Sample portrait for UlxImage demos"
        @shape="square"
        @size="l-size"
      />
      <UlxImage
        @src="https://randomuser.me/api/portraits/women/12.jpg"
        @alt="Sample portrait for UlxImage demos"
        @shape="square"
        @size="xl-size"
      />
      <UlxImage
        @src="https://randomuser.me/api/portraits/women/12.jpg"
        @alt="Sample portrait for UlxImage demos"
        @shape="square"
        @size="xxl-size"
      />
      <UlxImage
        @src="https://randomuser.me/api/portraits/women/12.jpg"
        @alt="Sample portrait for UlxImage demos"
        @shape="square"
        @size="xxxl-size"
      />
    </div>
  </div>
</template>
