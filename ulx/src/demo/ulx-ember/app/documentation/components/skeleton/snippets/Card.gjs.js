export default `
import Component from '@glimmer/component';
import { UlxSkeleton } from 'ulx-components';

export default class DemoSkeletonCard extends Component {
  <template>
    <div class="uls-card w-full p-16">
      <div class="flex mb-3">
        <UlxSkeleton @shape="circle" @size="4rem" class="me-2" />
        <div>
          <UlxSkeleton @width="10rem" class="mb-5" />
          <UlxSkeleton @width="5rem" class="mb-5" />
          <UlxSkeleton @height="0.5rem" class="mb-5" />
        </div>
      </div>
      <UlxSkeleton @width="100%" @height="150px" class="mb-4" />
      <div class="flex justify-between mt-5">
        <UlxSkeleton @width="4rem" @height="2rem" />
        <UlxSkeleton @width="4rem" @height="2rem" />
      </div>
    </div>
  </template>
}

`;
