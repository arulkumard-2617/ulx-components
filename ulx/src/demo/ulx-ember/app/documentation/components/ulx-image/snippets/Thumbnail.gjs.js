export default `
import { hash } from '@ember/helper';
import { UlxImage, t } from 'ulx-components';

<template>
  <div class="ulx-grid col-1 gap-6">
    <div>
      <h6 class="bold-font mb-2">{{"16:9 fixed thumbs (thumb-landscape-*)"}}</h6>
      <p class="text-12 fg-secondary mb-3">{{"ULS presets for wide list cells and banners. Use @thumbLandscape: xs, s, m, l, or xl."}}</p>
      <div class="flex wrap gap-4 items-end">
        <UlxImage
          @src="https://randomuser.me/api/portraits/women/12.jpg"
          @alt="Wide thumbnail sample, xs preset"
          @thumbLandscape="xs"
          @shape="rounded"
        />
        <UlxImage
          @src="https://randomuser.me/api/portraits/women/28.jpg"
          @alt="Wide thumbnail sample, s preset"
          @thumbLandscape="s"
          @shape="rounded"
        />
        <UlxImage
          @src="https://randomuser.me/api/portraits/women/44.jpg"
          @alt="Wide thumbnail sample, m preset"
          @thumbLandscape="m"
          @shape="rounded"
        />
        <UlxImage
          @src="https://randomuser.me/api/portraits/women/56.jpg"
          @alt="Wide thumbnail sample, l preset"
          @thumbLandscape="l"
          @shape="rounded"
        />
        <UlxImage
          @src="https://randomuser.me/api/portraits/women/72.jpg"
          @alt="Wide thumbnail sample, xl preset"
          @thumbLandscape="xl"
          @shape="rounded"
        />
      </div>
    </div>
    <div>
      <h6 class="bold-font mb-2">{{"9:16 fixed thumbs (thumb-portrait-*)"}}</h6>
      <p class="text-12 fg-secondary mb-3">{{"ULS presets for narrow phone-style mockups. Use @thumbPortrait: xs, s, m, or l."}}</p>
      <div class="flex wrap gap-4 items-end">
        <UlxImage
          @src="https://randomuser.me/api/portraits/men/11.jpg"
          @alt="Tall thumbnail sample, xs preset"
          @thumbPortrait="xs"
          @shape="rounded"
        />
        <UlxImage
          @src="https://randomuser.me/api/portraits/men/24.jpg"
          @alt="Tall thumbnail sample, s preset"
          @thumbPortrait="s"
          @shape="rounded"
        />
        <UlxImage
          @src="https://randomuser.me/api/portraits/men/37.jpg"
          @alt="Tall thumbnail sample, m preset"
          @thumbPortrait="m"
          @shape="rounded"
        />
        <UlxImage
          @src="https://randomuser.me/api/portraits/men/50.jpg"
          @alt="Tall thumbnail sample, l preset"
          @thumbPortrait="l"
          @shape="rounded"
        />
      </div>
    </div>
  </div>
</template>

`;
