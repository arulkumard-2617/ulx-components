import Component from '@glimmer/component';
import { UlxSkeleton, t } from 'ulx-components';

export default class DemoSkeletonShapes extends Component {
  <template>
    <div class="uls-grid col-2 gap-15">
      <div class="w-full py-3">
        <h6 class="mb-3 bold-font">{{t "lbl.doc.skeleton.rectangle"}}</h6>
        <UlxSkeleton class="mb-2" />
        <UlxSkeleton @width="10rem" class="mb-4" />
        <UlxSkeleton @width="5rem" class="mb-4" />
        <UlxSkeleton @height="2rem" class="mb-4" />
        <UlxSkeleton @width="10rem" @height="4rem" />
      </div>
      <div class="w-full py-3">
        <h6 class="mb-3 bold-font">{{t "lbl.doc.skeleton.rounded"}}</h6>
        <UlxSkeleton class="mb-2" @borderRadius="16px" />
        <UlxSkeleton @width="10rem" class="mb-4" @borderRadius="16px" />
        <UlxSkeleton @width="5rem" class="mb-4" @borderRadius="16px" />
        <UlxSkeleton @height="2rem" class="mb-2" @borderRadius="16px" />
        <UlxSkeleton @width="10rem" @height="4rem" @borderRadius="16px" />
      </div>
      <div class="w-full py-3">
        <h6 class="mb-3 bold-font">{{t "lbl.doc.skeleton.square"}}</h6>
        <div class="flex fve">
          <UlxSkeleton @size="2rem" class="me-2" />
          <UlxSkeleton @size="3rem" class="me-2" />
          <UlxSkeleton @size="4rem" class="me-2" />
          <UlxSkeleton @size="5rem" />
        </div>
      </div>
      <div class="w-full py-3">
        <h6 class="mb-3 bold-font">{{t "lbl.doc.skeleton.circle"}}</h6>
        <div class="flex fve">
          <UlxSkeleton @shape="circle" @size="2rem" class="me-2" />
          <UlxSkeleton @shape="circle" @size="3rem" class="me-2" />
          <UlxSkeleton @shape="circle" @size="4rem" class="me-2" />
          <UlxSkeleton @shape="circle" @size="5rem" />
        </div>
      </div>
    </div>
  </template>
}
