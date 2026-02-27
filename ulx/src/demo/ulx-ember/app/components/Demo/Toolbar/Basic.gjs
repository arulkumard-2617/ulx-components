import {
  UlxToolbar,
  UlxButton,
  UlxSplitButton,
  UlxIconInput,
  t,
} from 'ulx-components';
import { array, hash } from '@ember/helper';

<template>
  <div class="pda4">
    <UlxToolbar>
      <:start>
        <UlxButton
          @variant="primary"
          @icon="add-icon-01"
          @iconComponentClass="bs-icons1"
          @iconSize="s18"
          @customClass="me-5"
          aria-label={{t "lbl.new"}}
        />
        <UlxButton
          @variant="primary"
          @icon="print-icon"
          @iconComponentClass="bs-icons1"
          @iconSize="s18"
          @customClass="me-5"
          aria-label={{t "lbl.duplicate"}}
        />
        <UlxButton
          @variant="primary"
          @icon="delete-icon-01"
          @iconComponentClass="bs-icons1"
          @iconSize="s18"
          @customClass="me-5"
          aria-label={{t "lbl.delete"}}
        />
      </:start>

      <:center>
        <div class="w-full max-w-xs">
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
          <UlxSplitButton
            @label={{t "lbl.save"}}
            @model={{array
              (hash label=(t "lbl.update") icon="refresh-clockwise-icon-01")
              (hash label=(t "lbl.delete") icon="delete-icon-01")
            }}
            @size="s-size"
          />
        </div>
      </:end>
    </UlxToolbar>
  </div>
</template>
