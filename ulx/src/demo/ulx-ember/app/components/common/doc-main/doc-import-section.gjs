import Component from '@glimmer/component';
import FoundationSection from './foundation-section';

export default class DocImportSectionComponent extends Component {
  <template>
    <FoundationSection 
      @id={{@id}}
      @title="import"
      @subtitle={{@subtitle}}
    >
      <div class="code-preview-container mgb4">
        <div class="code-block">
          <pre><code>{{@code}}</code></pre>
        </div>
      </div>
    </FoundationSection>
  </template>
}

