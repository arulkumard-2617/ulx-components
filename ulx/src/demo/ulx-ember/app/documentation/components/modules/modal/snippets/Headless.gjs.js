export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxModal, UlxButton, UlxInput } from 'ulx-components';

export default class HeadlessModalDemo extends Component {
  @tracked isVisible = false;

  @action
  openModal() {
    this.isVisible = true;
  }

  @action
  closeModal() {
    this.isVisible = false;
  }

  <template>
    <UlxButton
      @label="Login"
      @icon="user-info-icon-01"
      @iconComponentClass="bs-icons1"
      @variant="primary"
      {{on "click" this.openModal}}
    />

    <UlxModal
      @visible={{this.isVisible}}
      @onHide={{this.closeModal}}
      @width="400px"
      @hideHeader={{true}}
      @hideFooter={{true}}
    >
      <:body>
        <div class="fxb column gp4 pd8">
          <div class="fxb column gp2 w-100p">
            <UlxInput
              id="headless-username"
              @label="Username"
              @placeholder="Username"
            />
          </div>

          <div class="fxb column gp2 w-100p">
            <UlxInput
              id="headless-password"
              @label="Password"
              @placeholder="Password"
              @type="password"
            />
          </div>

          <div class="fxb column gp2 w-100p">
            <UlxButton
              @label="Sign-In"
              @variant="primary"
              {{on "click" this.closeModal}}
            />
            <UlxButton
              @label="Cancel"
              @variant="secondary"
              @outlined={{true}}
              {{on "click" this.closeModal}}
            />
          </div>
        </div>
      </:body>
    </UlxModal>
  </template>
}

`;
