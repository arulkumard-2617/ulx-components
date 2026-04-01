export default `
import { tooltip, UlxButton } from 'ulx-components';

<template>
  <div class="flex gap-3 align-items-center flex-wrap">
    <UlxButton
      {{tooltip "Shows on mouse enter, hides on mouse leave" event="hover"}}
      @label="Hover"
    />
    <UlxButton
      {{tooltip
        "Shows on focus, hides on blur (keyboard or click away)"
        event="focus"
      }}
      @label="Focus"
    />
    <UlxButton
      {{tooltip
        "Shows on hover or focus, hides on mouse leave or blur"
        event="both"
      }}
      @label="Both"
    />
  </div>
</template>

`;
