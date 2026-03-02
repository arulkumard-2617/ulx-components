import { UlxToolbar, UlxButton, UlxIconInput, t } from 'ulx-components';

<template>
  <div class="pda4">
    <UlxToolbar>
      <:start>
        <div class="flex items-center gap-2">
          <UlxButton
            @variant="secondary"
            @icon="left-pointed-icon"
            @iconComponentClass="bs-icons1"
            @iconSize="s18"
            aria-label={{t "lbl.back"}}
          />
          <UlxButton
            @variant="secondary"
            @icon="right-pointed-icon"
            @iconComponentClass="bs-icons1"
            @iconSize="s18"
            aria-label={{t "lbl.forward"}}
          />
        </div>
      </:start>

      <:center>
        <div class="w-full max-w-sm">
          <UlxIconInput
            @placeholder={{t "lbl.search"}}
            @iconName="search-icon"
            @iconType="font"
            @iconSize="s18"
            @iconClass="bs-icons1"
            aria-label={{t "lbl.search"}}
          />
        </div>
      </:center>

      <:end>
        <div class="flex items-center gap-2">
          <UlxButton
            @variant="text"
            @icon="settings-icon-01"
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
