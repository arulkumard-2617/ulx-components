import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxPaginator } from 'ulx-components';

export default class ImagesPaginatorDemo extends Component {
  @tracked first = 0;
  rows = 1;
  totalRecords = 12;
  imagesTemplate =
    'FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink';

  @action
  onPageChange(event) {
    this.first = event.first;
  }

  get currentImageIndex() {
    return this.first + 1;
  }

  get imageSrc() {
    return `https://primefaces.org/cdn/primereact/images/nature/nature${this.currentImageIndex}.jpg`;
  }

  get imageAlt() {
    return `Nature ${this.currentImageIndex}`;
  }

  <template>
    <div class="flex items-center gap-4 fxd-flex-col">
      <UlxPaginator
        @totalRecords={{this.totalRecords}}
        @rows={{this.rows}}
        @first={{this.first}}
        @template={{this.imagesTemplate}}
        @onPageChange={{this.onPageChange}}
      />
      <div class="text-center">
        <img alt={{this.imageAlt}} src={{this.imageSrc}} class="max-w-100" />
      </div>
    </div>
  </template>
}
