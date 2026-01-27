export default `
import Component from '@glimmer/component';
import UlsButton from 'uls-ember/components/uls-button';

export default class BasicButtonDemo extends Component {
  <template>
    <div class="demo-section">
      <UlsButton 
        @label="Primary Button" 
        @variant="primary" 
        @size="m-size" 
      />
    </div>
  </template>
}
`;
