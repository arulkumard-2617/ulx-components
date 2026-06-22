export default `
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { inject as service } from '@ember/service';
import { UlxButton } from 'ulx-components';
import ConfirmationBodyTemplate from './ConfirmationServiceContentBodyTemplate';

export default class ConfirmationServiceContentDemo extends Component {
  @service modalManager;

  @action
  openPlainMessage() {
    this.modalManager.openModal({
      title: 'Plain message',
      message: 'This uses the default plain text message.',
      onConfirm: () => true,
      size: 'l-size'
    });
  }

  @action
  openHtmlMessage() {
    this.modalManager.openModal({
      title: 'HTML message',
      htmlMessage:
        '<div><p class="mb-0"><strong>Heads up.</strong> This is HTML content.</p></div>',
      onConfirm: () => true,
      size: 'l-size'
    });
  }

  @action
  openTemplateBody() {
    this.modalManager.openModal({
      title: 'Template body',
      template: ConfirmationBodyTemplate,
      templateArgs: { detail: 'This body is rendered via a Glimmer component template.' },
      onConfirm: () => true,
      size: 'l-size'
    });
  }

  @action
  openIconAndMessage() {
    this.modalManager.openModal({
      title: 'Icon + message',
      iconName: 'info-icon',
      iconType: 'font',
      iconComponentClass: 'bs-icons1',
      iconSize: 's48',
      message: 'Your event has some unpublished edits.',
      onConfirm: () => true,
      size: 'l-size'
    });
  }

  @action
  openSvgAndMessage() {
    this.modalManager.openModal({
      title: 'SVG illustration + message',
      iconHtml: \`
        <svg width="96" height="96" viewBox="0 0 96 96" aria-hidden="true" focusable="false">
          <circle cx="48" cy="48" r="46" fill="#F2F5FF" />
          <path d="M28 62h40a4 4 0 0 0 4-4V34a4 4 0 0 0-4-4H28a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4Z" fill="#3559E0" opacity="0.15"/>
          <path d="M34 40h28m-28 8h18" stroke="#3559E0" stroke-width="3" stroke-linecap="round"/>
          <path d="M60 58l6 6" stroke="#3559E0" stroke-width="3" stroke-linecap="round"/>
          <circle cx="58" cy="56" r="8" stroke="#3559E0" stroke-width="3" fill="none"/>
        </svg>
      \`,
      message: 'Your event has some unpublished edits.',
      onConfirm: () => true,
      size: 'l-size'
    });
  }

  <template>
    <div class="flex flex-wrap items-center gap-4">
      <UlxButton @label="Plain message" @variant="primary" {{on "click" this.openPlainMessage}} />
      <UlxButton @label="HTML message" @variant="secondary" {{on "click" this.openHtmlMessage}} />
      <UlxButton @label="Template body" @variant="secondary" {{on "click" this.openTemplateBody}} />
      <UlxButton @label="Icon + message" @variant="primary" {{on "click" this.openIconAndMessage}} />
      <UlxButton @label="SVG + message" @variant="primary" {{on "click" this.openSvgAndMessage}} />
    </div>
  </template>
}


`;
