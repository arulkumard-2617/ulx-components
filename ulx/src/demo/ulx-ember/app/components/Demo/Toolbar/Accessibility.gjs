import { UlxToolbar, UlxIconButton, t } from 'ulx-components';

<template>
  <div class="pda4">
    <UlxToolbar aria-label={{t "lbl.text.editor.toolbar"}}>
      <:start>
        <div class="flex items-center gap-2">
          <UlxIconButton
            @variant="secondary"
            @iconLeft="bold-icon"
            @iconComponentClass="bs-icons1"
            @iconSize="s18"
            aria-label={{t "lbl.bold"}}
          />
          <UlxIconButton
            @variant="secondary"
            @iconLeft="italics-icon"
            @iconComponentClass="bs-icons1"
            @iconSize="s18"
            aria-label={{t "lbl.italic"}}
          />
          <UlxIconButton
            @variant="secondary"
            @iconLeft="underline-icon"
            @iconComponentClass="bs-icons1"
            @iconSize="s18"
            aria-label={{t "lbl.underline"}}
          />
        </div>
      </:start>

      <:end>
        <div class="flex items-center gap-2">
          <UlxIconButton
            @variant="link"
            @iconLeft="undo-icon"
            @iconComponentClass="bs-icons1"
            @iconSize="s18"
            aria-label={{t "lbl.undo"}}
          />
          <UlxIconButton
            @variant="link"
            @iconLeft="redo-icon"
            @iconComponentClass="bs-icons1"
            @iconSize="s18"
            aria-label={{t "lbl.redo"}}
          />
        </div>
      </:end>
    </UlxToolbar>
  </div>
</template>
