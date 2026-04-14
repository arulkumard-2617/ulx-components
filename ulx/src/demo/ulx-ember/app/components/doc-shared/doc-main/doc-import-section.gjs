import Component from '@glimmer/component';
import FoundationSection from './foundation-section';

export default class DocImportSectionComponent extends Component {
  <template>
    <FoundationSection @id={{@id}} @title="import" @subtitle={{@subtitle}}>
      <div class="relative mb-4 overflow-auto">
        <pre><code>{{@code}}</code></pre>
      </div>
    </FoundationSection>
  </template>
}
