import { UlxImage, t } from 'ulx-components';

<template>
  <div class="ulx-grid col-1 gap-6">
    <div>
      <h6 class="bold-font mb-2">{{"Decorative images"}}</h6>
      <p class="text-12 fg-secondary mb-3">{{"When the image repeats nearby text or is purely visual, keep @alt empty."}}</p>
      <UlxImage
        @src="https://randomuser.me/api/portraits/men/71.jpg"
        @alt=""
        @size="m-size"
        @shape="rounded"
      />
    </div>
    <div>
      <h6 class="bold-font mb-2">{{"Meaningful images"}}</h6>
      <p class="text-12 fg-secondary mb-3">{{"Non-empty alt summarizes the image for people using screen readers."}}</p>
      <UlxImage
        @src="https://randomuser.me/api/portraits/women/90.jpg"
        @alt="Sample portrait for UlxImage demos"
        @size="m-size"
      />
    </div>
    <div>
      <h6 class="bold-font mb-2">{{"Supplementary description"}}</h6>
      <p class="text-12 fg-secondary mb-3">{{"Pass attributes such as aria-describedby on the root (via ...attributes) when a caption adds context beyond the alt text."}}</p>
      <figure class="inline-block">
        <UlxImage
          @src="https://randomuser.me/api/portraits/men/33.jpg"
          @alt="Sample portrait for UlxImage demos"
          @size="l-size"
          @shape="rounded"
          aria-describedby="ulx-image-demo-figcap"
        />
        <figcaption id="ulx-image-demo-figcap" class="text-12 fg-secondary mt-2">
          {{"Extended caption: this figure illustrates pairing the component with visible supporting text."}}
        </figcaption>
      </figure>
    </div>
    <div>
      <h6 class="bold-font mb-2">{{"Load failure (meaningful alt)"}}</h6>
      <p class="text-12 fg-secondary mb-3">{{"When the URL fails and alt is meaningful, UlxImage exposes an accessible fallback name."}}</p>
      <UlxImage
        @src="data:image/jpeg;base64,INVALIDNOTBASE64"
        @alt="Sample portrait for UlxImage demos"
        @size="l-size"
        @shape="rounded"
      />
    </div>
  </div>
</template>
