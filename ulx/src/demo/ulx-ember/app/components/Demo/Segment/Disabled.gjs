import { UlxSegment, UlxSegmentsGroup, t } from 'ulx-components';

<template>
  <div class="disabled-demo">
    <h3>{{"Disabled State"}}</h3>
    <p>Disabled segments have reduced opacity, disabled pointer events, and a
      not-allowed cursor</p>

    <UlxSegment @customClass="mb-5" @disabled={{true}}>
      <p>This segment is disabled. It cannot be interacted with.</p>
    </UlxSegment>

    <h3>{{"Disabled in Segments Group"}}</h3>
    <UlxSegmentsGroup>
      <UlxSegment @disabled={{true}}>
        <p>First segment - disabled</p>
      </UlxSegment>
      <UlxSegment>
        <p>Second segment - normal</p>
      </UlxSegment>
      <UlxSegment @disabled={{true}}>
        <p>Third segment - disabled</p>
      </UlxSegment>
    </UlxSegmentsGroup>

    <h3>Comparison: Normal vs Disabled</h3>
    <UlxSegmentsGroup>
      <UlxSegment>
        <p>Normal segment - fully interactive</p>
      </UlxSegment>
      <UlxSegment @disabled={{true}}>
        <p>Disabled segment - non-interactive</p>
      </UlxSegment>
    </UlxSegmentsGroup>
  </div>
</template>
