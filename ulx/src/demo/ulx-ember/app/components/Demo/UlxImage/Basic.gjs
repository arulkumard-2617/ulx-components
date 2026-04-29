import { UlxImage, t } from 'ulx-components';

<template>
  <div class="ulx-grid col-1 gap-6">
    <div>
      <h6 class="bold-font mb-2">{{t "lbl.image"}}
        —
        {{"Decorative"}}</h6>
      <p class="text-12 fg-secondary mb-3">{{"Use an empty alt so assistive technologies treat the image as decorative."}}</p>
      <UlxImage
        @src="https://randomuser.me/api/portraits/women/32.jpg"
        @alt=""
      />
    </div>
    <div>
      <h6 class="bold-font mb-2">{{t "lbl.image"}}
        —
        {{"Meaningful"}}</h6>
      <p class="text-12 fg-secondary mb-3">{{"Provide descriptive alt text when the image conveys information. Rounded shape uses the ULS modifier."}}</p>
      <UlxImage
        @src="https://randomuser.me/api/portraits/men/44.jpg"
        @alt="Sample portrait for UlxImage demos"
        @size="xl-size"
        @shape="rounded"
      />
    </div>
  </div>
</template>
