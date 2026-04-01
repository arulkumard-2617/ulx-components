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
            @icon="italics-icon"
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
            @variant="link"
            @icon="undo-icon"
            @iconComponentClass="bs-icons1"
            @iconSize="s18"
            aria-label={{t "lbl.undo"}}
          />
          <UlxButton
            @variant="link"
            @icon="redo-icon"
            @iconComponentClass="bs-icons1"
            @iconSize="s18"
            aria-label={{t "lbl.redo"}}
          />
        </div>
      </:end>
    </UlxToolbar>
  </div>
</template>
