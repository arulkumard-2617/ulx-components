import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxRichTextEditor } from 'ulx-components';

export default class DemoRichTextEditorBasic extends Component {
  @tracked value = '<p>Always bet on ULX!</p>';

  @action
  handleTextChange(event) {
    this.value = event.htmlValue ?? '';
  }

  @action
  openImagePicker() {
    return new Promise((resolve) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.multiple = true;
      input.style.position = 'fixed';
      input.style.left = '-9999px';
      document.body.appendChild(input);

      const cleanup = () => {
        input.removeEventListener('change', handleChange);
        input.remove();
      };

      const handleChange = async () => {
        try {
          const files = Array.from(input.files ?? []);
          const urls = await Promise.all(
            files.map(
              (file) =>
                new Promise((fileResolve) => {
                  const reader = new FileReader();
                  reader.onload = () => fileResolve(String(reader.result ?? ''));
                  reader.onerror = () => fileResolve('');
                  reader.readAsDataURL(file);
                })
            )
          );
          resolve(urls.filter(Boolean));
        } finally {
          cleanup();
        }
      };

      input.addEventListener('change', handleChange, { once: true });
      input.click();
    });
  }

  <template>
    <div class="flex flex-column gap-3">
      <UlxRichTextEditor
        @value={{this.value}}
        @onTextChange={{this.handleTextChange}}
        @toolbarType="prime"
        @openImagePicker={{this.openImagePicker}}
        @style="height: 320px"
      />
    </div>
  </template>
}
