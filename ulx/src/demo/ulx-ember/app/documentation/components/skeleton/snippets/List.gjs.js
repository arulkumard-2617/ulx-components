export default `
import Component from '@glimmer/component';
import { UlxSkeleton } from 'ulx-components';

export default class DemoSkeletonList extends Component {
  <template>
    <div class="rounded border p-15">
      <ul class="m-0 p-0 list-none">
        <li class="mb-12">
          <div class="flex items-center">
            <UlxSkeleton @shape="circle" @size="4rem" class="me-4" />
            <div style="flex: 1">
              <UlxSkeleton @width="100%" class="mb-4" />
              <UlxSkeleton @width="75%" />
            </div>
          </div>
        </li>
        <li class="mb-12">
          <div class="flex items-center">
            <UlxSkeleton @shape="circle" @size="4rem" class="me-4" />
            <div style="flex: 1">
              <UlxSkeleton @width="100%" class="mb-4" />
              <UlxSkeleton @width="75%" />
            </div>
          </div>
        </li>
        <li class="mb-12">
          <div class="flex items-center">
            <UlxSkeleton @shape="circle" @size="4rem" class="me-4" />
            <div style="flex: 1">
              <UlxSkeleton @width="100%" class="mb-4" />
              <UlxSkeleton @width="75%" />
            </div>
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <UlxSkeleton @shape="circle" @size="4rem" class="me-4" />
            <div style="flex: 1">
              <UlxSkeleton @width="100%" class="mb-3" />
              <UlxSkeleton @width="75%" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </template>
}

`;
