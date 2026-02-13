export default `
import { UlxSegment, UlxSegmentsGroup, t } from 'ulx-components';

<template>
  <div class="disabled-demo">
    <h3>{{t "lbl.disabled.state"}}</h3>
    <p>Disabled segments have reduced opacity, disabled pointer events, and a
      not-allowed cursor</p>

    <UlxSegment @customClass="mgb5" @disabled={{true}}>
      <p>This segment is disabled. It cannot be interacted with.</p>
    </UlxSegment>

    <h3>{{t "msg.disabled.in.segments.group"}}</h3>
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

    <h3>{{t "msg.comparison.normal.vs.disabled"}}</h3>
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

`;
