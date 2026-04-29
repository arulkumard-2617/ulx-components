import Component from '@glimmer/component';
import FoundationSection from './foundation-section';

export default class WorkInProgressNoticeComponent extends Component {
  <template>
    <div class="doc-section">
      <FoundationSection
        @id="doc-tab-work-in-progress"
        @title="Work in progress"
      >
        <p class="fg-text-secondary mgt0 mb-0">
          {{"Documentation for this tab is not available yet and will be added in a future update."}}
        </p>
      </FoundationSection>
    </div>
  </template>
}
