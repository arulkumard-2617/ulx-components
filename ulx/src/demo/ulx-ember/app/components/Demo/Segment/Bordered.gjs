import Component from '@glimmer/component';
import { UlxSegment } from 'ulx-components';

export default class BorderedDemoComponent extends Component {
  <template>
    <div class="bordered-demo">
      <h3 class="mb-1">{{"Colored Border Segments"}}</h3>
      <p class="mb-5">Segment with primary colored left border (3px width)</p>
      <UlxSegment @borderSide="left" @borderColor="primary">
        <p>Primary left border</p>
      </UlxSegment>
    </div>
  </template>
}
