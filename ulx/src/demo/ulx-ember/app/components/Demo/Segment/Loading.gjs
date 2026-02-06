import { UlxSegment, UlxSegmentsGroup } from 'ulx-components';

<template>
  <div class="loading-demo">
    <h3>Loading State</h3>
    <p>Segments in loading state show a semi-transparent overlay and reduce
      content opacity</p>

    <UlxSegment @loading={{true}}>
      <p>This segment is in a loading state. Content is dimmed and pointer
        events are disabled.</p>
    </UlxSegment>

    <UlxSegmentsGroup>
      <UlxSegment @loading={{true}}>
        <p>First segment - loading</p>
      </UlxSegment>
    </UlxSegmentsGroup>
  </div>
</template>
