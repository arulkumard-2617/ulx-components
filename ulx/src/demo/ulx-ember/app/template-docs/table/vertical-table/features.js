import RichText from '../../../components/doc-shared/doc-main/rich-text';
import { VerticalTableDemo, VerticalTableSource } from './imports';

export const VerticalTableFeatureItems = [
  {
    id: 'vertical-table',
    sectionNav: 'Vertical Table',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          '<code>UlxTable</code> with <code>@layout="vertical"</code> and a single data record for label-and-value rows. Add <code>@customClass="variant-yellow"</code> for the yellow <code>datatable-vertical-row-header</code> label column. Use column <code>body</code> templates for numeric values or included-state icons.'
      }
    },
    demo: {
      component: VerticalTableDemo,
      props: {
        source: VerticalTableSource,
        snippetName: 'vertical-table',
        language: 'handlebars'
      }
    }
  }
];
