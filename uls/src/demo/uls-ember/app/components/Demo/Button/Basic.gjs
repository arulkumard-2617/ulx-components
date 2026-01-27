import Component from '@glimmer/component';
import UlsButton from 'uls-components/components/uls-button';

export default class BasicButtonDemo extends Component {
  <template>
    <div class="demo-section">
      <h3>Button Variants</h3>
      <div
        style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px;"
      >
        <UlsButton @label="Default" @variant="default" @size="m-size" />
        <UlsButton @label="Primary" @variant="primary" @size="m-size" />
        <UlsButton @label="Secondary" @variant="secondary" @size="m-size" />
        <UlsButton @label="Success" @variant="success" @size="m-size" />
        <UlsButton @label="Info" @variant="info" @size="m-size" />
        <UlsButton @label="Warning" @variant="warning" @size="m-size" />
        <UlsButton @label="Danger" @variant="danger" @size="m-size" />
      </div>

      <h3>Button Sizes</h3>
      <div
        style="display: flex; gap: 8px; align-items: center; margin-bottom: 24px;"
      >
        <UlsButton @label="Extra Small" @variant="primary" @size="xs-size" />
        <UlsButton @label="Small" @variant="primary" @size="s-size" />
        <UlsButton @label="Medium" @variant="primary" @size="m-size" />
        <UlsButton @label="Large" @variant="primary" @size="l-size" />
        <UlsButton @label="Extra Large" @variant="primary" @size="xl-size" />
      </div>

      <h3>Button States</h3>
      <div style="display: flex; gap: 8px; margin-bottom: 24px;">
        <UlsButton @label="Normal" @variant="primary" />
        <UlsButton @label="Disabled" @variant="primary" @disabled={{true}} />
        <UlsButton @label="Loading" @variant="primary" @loading={{true}} />
      </div>

      <h3>With Icons</h3>
      <div style="display: flex; gap: 8px; margin-bottom: 24px;">
        <UlsButton @label="Left Icon" @variant="primary" @iconLeft="←" />
        <UlsButton @label="Right Icon" @variant="primary" @iconRight="→" />
        <UlsButton
          @label="Both Icons"
          @variant="primary"
          @iconLeft="←"
          @iconRight="→"
        />
      </div>

      <h3>Named Blocks</h3>
      <div style="display: flex; gap: 8px; margin-bottom: 24px;">
        <UlsButton @variant="primary">
          <:label><strong>Bold Label</strong></:label>
        </UlsButton>

        <UlsButton @variant="success">
          <:iconLeft><span style="font-size: 20px;">✓</span></:iconLeft>
          <:label>Custom Content</:label>
        </UlsButton>
      </div>
    </div>
  </template>
}
