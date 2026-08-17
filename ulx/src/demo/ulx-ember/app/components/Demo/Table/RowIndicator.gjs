import Component from '@glimmer/component';
import { action } from '@ember/object';
import { fn } from '@ember/helper';
import { UlxTable, UlxTag, UlxActionMenu } from 'ulx-components';

const TOPICS = [
  {
    id: '1',
    title: 'Next-Gen Precision Medicine Powered by AI',
    types: ['Oral Presentation'],
    submitted: 20,
    total: 100,
    indicatorColor: 'var(--ulx-green-bg-color, #16A34A)'
  },
  {
    id: '2',
    title: 'Enhancing Tumor Detection Through Computational Pathology',
    types: ['Poster Presentation'],
    submitted: 20,
    total: 100,
    indicatorColor: '#6554C0'
  },
  {
    id: '3',
    title: 'Reimagining Clinical Trials with Digital Twins',
    types: ['Roundtable Discussion'],
    submitted: 20,
    total: 100,
    indicatorColor: 'var(--ulx-red-bg-color, #CF1322)'
  },
  {
    id: '4',
    title: 'Data Privacy in Multimodal Healthcare Systems',
    types: ['Workshop'],
    submitted: 20,
    total: 100,
    indicatorColor: 'var(--ulx-orange-bg-color, #FA8C16)'
  },
  {
    id: '5',
    title: 'Bridging Gaps with Federated Learning Across Institutions',
    types: ['Case Study', 'Technical Showcase'],
    submitted: 20,
    total: 100,
    indicatorColor: 'var(--ulx-blue-bg-color, #096DD9)'
  },
  {
    id: '6',
    title: 'Crowdsourcing Insights for Rare Disease Research',
    types: ['Oral Presentation', 'Poster Presentation', 'Workshop'],
    submitted: 20,
    total: 100,
    indicatorColor: 'var(--ulx-nightblue-bg-color, #3079ba)'
  }
];

class TopicTitleCell extends Component {
  <template>
    <span class="semibold-font">{{@row.title}}</span>
  </template>
}

class SubmissionTypesCell extends Component {
  get visibleTypes() {
    return (this.args.row.types ?? []).slice(0, 2);
  }

  get overflowCount() {
    const total = this.args.row.types?.length ?? 0;
    return total > 2 ? total - 2 : 0;
  }

  get overflowLabel() {
    return `+${this.overflowCount}`;
  }

  <template>
    <div class="flex flex-wrap items-center gap-2">
      {{#each this.visibleTypes as |type|}}
        <UlxTag
          @value={{type}}
          @variant="color-primary-layer2"
          @size="xs-size"
        />
      {{/each}}
      {{#if this.overflowCount}}
        <UlxTag
          @value={{this.overflowLabel}}
          @variant="color-primary-layer2"
          @size="xs-size"
        />
      {{/if}}
    </div>
  </template>
}

class SubmittedCell extends Component {
  <template>
    <span>
      <span class="semibold-font">{{@row.submitted}}</span>/{{@row.total}}
    </span>
  </template>
}

const columns = [
  {
    field: 'title',
    header: 'Topics',
    body: TopicTitleCell
  },
  {
    field: 'types',
    header: 'Submission Types',
    body: SubmissionTypesCell
  },
  {
    field: 'submitted',
    header: 'Submitted',
    body: SubmittedCell
  }
];

export default class DemoTableRowIndicator extends Component {
  topics = TOPICS;
  columns = columns;

  rowActionItems = [{ label: 'Edit' }, { label: 'Delete' }];

  @action
  colorForRow(row) {
    return row.indicatorColor;
  }

  @action
  handleRowAction() {
    // Demo only — no-op
  }

  <template>
    <div class="flex flex-col gap-2">
      <p class="text-13 fg-text-secondary">
        Rows with a leading color strip. Use
        <code>@customClass="row-indicator"</code>
        and
        <code>@rowIndicatorColor</code>
        (string or
        <code>fn(row, index) => color</code>) to set
        <code>--ulx-tr-indicator</code>
        on each body row.
      </p>
      <UlxTable
        @value={{this.topics}}
        @columns={{this.columns}}
        @dataKey="id"
        @customClass="row-indicator"
        @rowIndicatorColor={{this.colorForRow}}
      >
        <:optionCell as |row|>
          <div class="flex items-center justify-end w-160">
            <UlxActionMenu
              @label="Actions"
              @icon="session-settings-icon"
              @items={{this.rowActionItems}}
              @variant="secondary"
              @outlined={{true}}
              @onItemSelect={{fn this.handleRowAction row}}
              aria-label="Actions for {{row.title}}"
            />
          </div>
        </:optionCell>
      </UlxTable>
    </div>
  </template>
}
