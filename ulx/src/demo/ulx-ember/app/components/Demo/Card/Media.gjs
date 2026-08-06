import { UlxCard, UlxIconButton, tooltip } from 'ulx-components';

const mediaItems = [
  {
    id: 'pdf',
    src: '/default-pdf.png',
    alt: 'PDF preview',
    type: 'PDF',
    fileName: '4972699-hd_1920_1080_30fps.pdf'
  },
  {
    id: 'jpg',
    src: '/thumbnail.jpg',
    alt: 'Fabric swatches and notebook on marble surface',
    type: 'JPG',
    fileName: '4972699-hd_1920_1080_30fps.jpg'
  }
];

<template>
  <div class="flex flex-wrap gap-4">
    {{#each mediaItems key="id" as |item|}}
      <div class="w-280">
        <UlxCard
          @appearance="outlined"
          @size="s-size"
          @customClass="media-card"
          @contentClass="no-padding"
          data-qa="ulx-media-card"
        >
          <:content>
            <div class="card-media">
              <img
                src={{item.src}}
                alt={{item.alt}}
                class="ulx-card-image"
              />
              <div class="card-media-actions">
                <span class="card-media-type">{{item.type}}</span>
                <div class="flex items-center gap-1">
                  <UlxIconButton
                    {{tooltip "View" position="bottom"}}
                    @iconLeft="view-icon"
                    @variant="white on-hover"
                    @size="xs-size"
                    @iconSize="s16"
                    aria-label="View"
                  />
                  <UlxIconButton
                    {{tooltip "Download" position="bottom"}}
                    @iconLeft="download-icon"
                    @variant="white on-hover"
                    @size="xs-size"
                    @iconSize="s16"
                    aria-label="Download"
                  />
                  <UlxIconButton
                    {{tooltip "Delete" position="bottom"}}
                    @iconLeft="delete-icon"
                    @variant="white on-hover"
                    @size="xs-size"
                    @iconSize="s16"
                    aria-label="Delete"
                  />
                </div>
              </div>
            </div>
          </:content>

          <:footer>
            <span
              class="card-media-name"
              title={{item.fileName}}
            >{{item.fileName}}</span>
            <UlxIconButton
              {{tooltip "Info" position="bottom"}}
              @iconLeft="info-stroked-icon"
              @variant="secondary"
              @text={{true}}
              @size="xs-size"
              @iconSize="s16"
              aria-label="Info"
            />
          </:footer>
        </UlxCard>
      </div>
    {{/each}}
  </div>
</template>
