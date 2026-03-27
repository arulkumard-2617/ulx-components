import Component from '@glimmer/component';
import { t } from 'ulx-components';
import FoundationSection from './foundation-section';

export default class WorkInProgressNoticeComponent extends Component {
  <template>
    <div class="doc-section">
      <FoundationSection
        @id="doc-tab-work-in-progress"
        @title={{t "msg.doc.section.work.in.progress.title"}}
      >
        <p class="fg-text-secondary mgt0 mb-0">
          {{t "msg.doc.section.work.in.progress.body"}}
        </p>
      </FoundationSection>
    </div>
  </template>
}
