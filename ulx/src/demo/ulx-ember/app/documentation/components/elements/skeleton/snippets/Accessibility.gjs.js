export default `
import Component from '@glimmer/component';
import { UlxSkeleton, t } from 'ulx-components';

export default class DemoSkeletonAccessibility extends Component {
  <template>
    <div>
      <p>{{t "msg.doc.skeleton.accessibility.desc"}}</p>
      <div aria-busy="true" aria-label="Loading content">
        <UlxSkeleton class="mb-2" />
        <UlxSkeleton @width="10rem" class="mb-2" />
        <UlxSkeleton @width="5rem" class="mb-2" />
        <UlxSkeleton @shape="circle" @size="3rem" />
      </div>
    </div>
  </template>
}
`;
