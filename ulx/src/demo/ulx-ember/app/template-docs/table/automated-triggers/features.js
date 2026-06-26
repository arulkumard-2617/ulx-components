import RichText from '../../../components/doc-shared/doc-main/rich-text';
import { AutomatedTriggersDemo, AutomatedTriggersSource } from './imports';

export const AutomatedTriggersFeatureItems = [
  {
    id: 'automated-triggers',
    sectionNav: 'Automated Triggers',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          '<code>UlxTable</code> with custom body cells (<code>UlxToggle</code>, <code>UlxTag</code>, <code>UlxSplitButton</code>) for trigger management. Demonstrates row-level <code>alert-row</code> banner via <code>UlxMessage.tr-notify</code> using <code>@rowClassName</code>, plus a search input and <strong>Create Trigger</strong> action above the table.'
      }
    },
    demo: {
      component: AutomatedTriggersDemo,
      props: {
        source: AutomatedTriggersSource,
        snippetName: 'automated-triggers',
        language: 'handlebars'
      }
    }
  }
];
