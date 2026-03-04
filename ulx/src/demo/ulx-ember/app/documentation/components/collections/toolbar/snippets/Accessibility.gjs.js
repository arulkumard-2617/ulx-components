export default `
import { UlxToolbar, UlxButton, t } from 'ulx-components';

<template>
  <div class="pda4">
    <UlxToolbar aria-label={{t "lbl.text.editor.toolbar"}}>
      <:start>
        <div class="flex items-center gap-2">
          <UlxButton
            @variant="secondary"
            @icon="bold-icon"
            @iconComponentClass="bs-icons1"
            @iconSize="s18"
            aria-label={{t "lbl.bold"}}
          />
          <UlxButton
            @variant="secondary"
            @icon="italic-icon"
            @iconComponentClass="bs-icons1"
            @iconSize="s18"
            aria-label={{t "lbl.italic"}}
          />
          <UlxButton
            @variant="secondary"
            @icon="underline-icon"
            @iconComponentClass="bs-icons1"
            @iconSize="s18"
            aria-label={{t "lbl.underline"}}
          />
        </div>
      </:start>

      <:end>
        <div class="flex items-center gap-2">
          <UlxButton
            @variant="text"
            @icon="undo-icon-01"
            @iconComponentClass="bs-icons1"
            @iconSize="s18"
            aria-label={{t "lbl.undo"}}
          />
          <UlxButton
            @variant="text"
            @icon="redo-icon-01"
            @iconComponentClass="bs-icons1"
            @iconSize="s18"
            aria-label={{t "lbl.redo"}}
          />
        </div>
      </:end>
    </UlxToolbar>
  </div>
</template>
`;

