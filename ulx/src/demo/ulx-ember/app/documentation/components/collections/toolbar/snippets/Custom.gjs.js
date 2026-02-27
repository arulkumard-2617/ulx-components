export default `
import { UlxToolbar, UlxButton, UlxInput, t } from 'ulx-components';

<template>
  <div class="pda4">
    <UlxToolbar>
      <:start>
        <div class="flex items-center gap-2">
          <UlxButton
            @variant="secondary"
            @icon="arrow-left-icon-01"
            @iconComponentClass="bs-icons1"
            @iconSize="s18"
            aria-label={{t "lbl.back"}}
          />
          <UlxButton
            @variant="secondary"
            @icon="arrow-right-icon-01"
            @iconComponentClass="bs-icons1"
            @iconSize="s18"
            aria-label={{t "lbl.forward"}}
          />
        </div>
      </:start>

      <:center>
        <div class="w-full max-w-sm">
          <UlxInput
            @placeholder={{t "lbl.search"}}
            aria-label={{t "lbl.search"}}
          />
        </div>
      </:center>

      <:end>
        <div class="flex items-center gap-2">
          <UlxButton
            @variant="text"
            @icon="settings-01-icon"
            @iconComponentClass="bs-icons1"
            @iconSize="s18"
            aria-label={{t "lbl.settings"}}
          />
          <UlxButton
            @variant="text"
            @icon="download-icon-01"
            @iconComponentClass="bs-icons1"
            @iconSize="s18"
            aria-label={{t "lbl.download"}}
          />
        </div>
      </:end>
    </UlxToolbar>
  </div>
</template>
`;

