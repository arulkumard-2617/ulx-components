import Component from '@glimmer/component';
import FoundationSection from './foundation-section';

export default class DocBasicSectionComponent extends Component {
  <template>
    <FoundationSection 
      @id={{@id}}
      @title={{@title}}
      @subtitle={{@subtitle}}
    >
      {{yield}}
    </FoundationSection>
  </template>
}

