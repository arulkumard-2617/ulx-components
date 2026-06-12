import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import {
  UlxForm,
  UlxFieldSet,
  UlxField,
  UlxInput,
  UlxTextarea,
  UlxDropdown,
  UlxButton,
  UlxCard,
  UlxImage,
  UlxIcon,
  UlxOptionSegment,
  UlxInputGroup
} from 'ulx-components';

const APP_ICON_SRC =
  'https://i0.wp.com/www.commercialphotographynorthwestblog.co.uk/wp-content/uploads/2020/10/MDH_8729webqualitysquare.jpg?resize=560%2C560&ssl=1';

const APP_NAME_MIN_LEN = 23;
const APP_NAME_MAX_LEN = 30;
const APP_DESC_MIN_LEN = 90;
const APP_DESC_MAX_LEN = 500;

const ACCENT_COLOR_SWATCHES = Object.freeze([
  { value: '#15136f', colorCode: '#15136f' },
  { value: '#4757f2', colorCode: '#4757f2' },
  { value: '#21b382', colorCode: '#21b382' },
  { value: '#f2a100', colorCode: '#f2a100' },
  { value: '#ef4444', colorCode: '#ef4444' },
  { value: '#8b5cf6', colorCode: '#8b5cf6' },
  { value: '#06b6d4', colorCode: '#06b6d4' },
  { value: '#84cc16', colorCode: '#84cc16' }
]);

const FONT_FAMILY_OPTIONS = Object.freeze([
  { label: 'SF Pro Display', value: 'sf-pro-display' },
  { label: 'Helvetica Neue', value: 'helvetica-neue' },
  { label: 'Roboto', value: 'roboto' },
  { label: 'Inter', value: 'inter' }
]);

const APP_NAME_INITIAL = 'Zylker Developer App 01';
const APP_DESCRIPTION_INITIAL =
  'Join us for the annual developer summit featuring the latest in technology and innovation.';

export default class DemoFieldsetTemplate extends Component {
  fontFamilyOptions = FONT_FAMILY_OPTIONS;

  @tracked appName = APP_NAME_INITIAL;
  @tracked appDescription = APP_DESCRIPTION_INITIAL;
  @tracked appDesign = 'native';
  @tracked appEnvironment = 'light';
  @tracked accentColor = '#4757f2';
  @tracked fontFamily = 'sf-pro-display';

  get appNameRules() {
    return {
      required: true,
      minLength: { value: APP_NAME_MIN_LEN },
      maxLength: { value: APP_NAME_MAX_LEN }
    };
  }

  get appDescriptionRules() {
    return {
      minLength: { value: APP_DESC_MIN_LEN },
      maxLength: { value: APP_DESC_MAX_LEN }
    };
  }

  get appDesignItems() {
    return [
      {
        value: 'native',
        label: 'Native Mobile App',
        symbolId: 'fieldset-template-mobile-light',
        selected: this.appDesign === 'native',
        itemClass: 'relative p-2 w-124'
      },
      {
        value: 'web',
        label: 'Mobile Web View',
        symbolId: 'fieldset-template-mobile-web',
        selected: this.appDesign === 'web',
        itemClass: 'relative p-2 w-124'
      }
    ];
  }

  get appEnvironmentItems() {
    return [
      {
        value: 'light',
        label: 'Light',
        symbolId: 'fieldset-template-mobile-light',
        selected: this.appEnvironment === 'light',
        itemClass: 'relative p-2 w-124'
      },
      {
        value: 'dark',
        label: 'Dark',
        symbolId: 'fieldset-template-mobile-dark',
        selected: this.appEnvironment === 'dark',
        itemClass: 'relative p-2 w-124'
      },
      {
        value: 'auto',
        label: 'Auto',
        symbolId: 'fieldset-template-mobile-system',
        selected: this.appEnvironment === 'auto',
        itemClass: 'relative p-2 w-124'
      }
    ];
  }

  get accentColorItems() {
    return ACCENT_COLOR_SWATCHES.map(({ value, colorCode }) => ({
      value,
      colorCode,
      selected: this.accentColor === value
    }));
  }

  @action
  handleAppNameInput(value) {
    this.appName = value;
  }

  @action
  handleAppDescriptionInput(value) {
    this.appDescription = value;
  }

  @action
  handleAppDesignSelect(_selected, value) {
    this.appDesign = value;
  }

  @action
  handleAppEnvironmentSelect(_selected, value) {
    this.appEnvironment = value;
  }

  @action
  handleAccentColorSelect(_selected, value) {
    this.accentColor = value;
  }

  @action
  handleAccentColorInput(value) {
    this.accentColor = value;
  }

  @action
  handleFontFamilyChange(value) {
    this.fontFamily = value;
  }

  get appIconSrc() {
    return APP_ICON_SRC;
  }

  get accentColorPreviewStyle() {
    return `background-color: ${this.accentColor};`;
  }

  <template>
    <svg class="hidden" aria-hidden="true" focusable="false">
      <symbol id="fieldset-template-mobile-light" viewBox="0 0 64 120">
        <rect
          x="10"
          y="4"
          width="44"
          height="112"
          rx="10"
          fill="#f4f4f5"
          stroke="#d4d4d8"
        />
        <rect x="16" y="18" width="32" height="78" rx="4" fill="#ffffff" />
        <circle cx="32" cy="104" r="4" fill="#d4d4d8" />
      </symbol>
      <symbol id="fieldset-template-mobile-web" viewBox="0 0 64 120">
        <rect
          x="10"
          y="4"
          width="44"
          height="112"
          rx="10"
          fill="#eef2ff"
          stroke="#a5b4fc"
        />
        <rect x="16" y="18" width="32" height="78" rx="4" fill="#ffffff" />
        <rect x="20" y="24" width="24" height="6" rx="2" fill="#c7d2fe" />
        <circle cx="32" cy="104" r="4" fill="#a5b4fc" />
      </symbol>
      <symbol id="fieldset-template-mobile-dark" viewBox="0 0 64 120">
        <rect
          x="10"
          y="4"
          width="44"
          height="112"
          rx="10"
          fill="#27272a"
          stroke="#52525b"
        />
        <rect x="16" y="18" width="32" height="78" rx="4" fill="#18181b" />
        <circle cx="32" cy="104" r="4" fill="#71717a" />
      </symbol>
      <symbol id="fieldset-template-mobile-system" viewBox="0 0 64 120">
        <rect
          x="10"
          y="4"
          width="44"
          height="112"
          rx="10"
          fill="#f4f4f5"
          stroke="#d4d4d8"
        />
        <rect x="16" y="18" width="32" height="39" rx="4" fill="#ffffff" />
        <rect x="16" y="57" width="32" height="39" rx="4" fill="#18181b" />
        <circle cx="32" cy="104" r="4" fill="#a1a1aa" />
      </symbol>
    </svg>

    <UlxForm @size="m-size" @customClass="mt-4">
      <UlxFieldSet
        @legend="Basic Information"
        @customClass="flex flex-col gap-6"
      >
        <UlxField
          @fieldId="mobile-app-name"
          @rules={{this.appNameRules}}
          @showCharacterCount={{true}}
          @value={{this.appName}}
          @tooltipMessage="The public name shown to users when they install or open your app."
        >
          <:label>App Name</:label>
          <:default as |field|>
            <UlxInput
              @field={{field}}
              @value={{this.appName}}
              @onInput={{this.handleAppNameInput}}
              @size="l-size"
            />
          </:default>
        </UlxField>

        <UlxField
          @fieldId="mobile-app-description"
          @rules={{this.appDescriptionRules}}
          @showCharacterCount={{true}}
          @value={{this.appDescription}}
        >
          <:label>App Description</:label>
          <:default as |field|>
            <UlxTextarea
              @field={{field}}
              @value={{this.appDescription}}
              @onInput={{this.handleAppDescriptionInput}}
              @size="m-size"
              class="w-full"
            />
          </:default>
        </UlxField>
      </UlxFieldSet>

      <UlxFieldSet @legend="App Assets" @customClass="flex flex-col gap-6">
        <UlxField
          @fieldId="mobile-app-icon"
          @tooltipMessage="Upload a square app icon for home screen and store listings."
        >
          <:label>App Icon</:label>
          <:default>
            <UlxCard
              @appearance="outlined"
              @customClass="bg-layer1"
              id="mobile-app-icon"
            >
              <:content>
                <div class="flex gap-2 align-center">
                  <UlxImage
                    @src={{this.appIconSrc}}
                    @alt="App Icon"
                    @customClass="w-60 h-60 bg-default flex items-center justify-center border border-default"
                    @size="img-size-100"
                    @objectFit="contain"
                  />

                  <div class="content">
                    <div class="flex items-center gap-2">
                      <UlxButton
                        @label="Change"
                        @text={{true}}
                        @customClass="link"
                        @size="m-size"
                        @type="button"
                      >
                        <:prefix>
                          <UlxIcon
                            @type="font"
                            @iconName="progress-icon"
                            @componentClass="bs-icons1"
                            @size="s16"
                            @customClass="icon left"
                            aria-hidden="true"
                          />
                        </:prefix>
                      </UlxButton>

                      <UlxButton
                        @label="Delete"
                        @variant="danger"
                        @text={{true}}
                        @customClass="link"
                        @size="m-size"
                        @type="button"
                      >
                        <:prefix>
                          <UlxIcon
                            @type="font"
                            @iconName="delete-icon"
                            @componentClass="bs-icons1"
                            @size="s16"
                            @customClass="icon left"
                            aria-hidden="true"
                          />
                        </:prefix>
                      </UlxButton>
                    </div>
                    <div class="fg-secondary text-sm medium-font">
                      Required dimension: 1024x1024
                    </div>
                    <div class="fg-secondary text-sm medium-font">
                      Supported file types: .png
                    </div>
                  </div>
                </div>
              </:content>
            </UlxCard>
          </:default>
        </UlxField>

        <UlxField
          @fieldId="mobile-app-splash"
          @tooltipMessage="Upload a splash screen shown while the app loads."
        >
          <:label>Splash Screen</:label>
          <:default>
            <div
              class="border-dashed border-default border-2 rounded p-5"
              id="mobile-app-splash"
            >
              <div class="flex flex-col items-center gap-2 text-center">
                <UlxIcon
                  @type="font"
                  @iconName="download-icon"
                  @componentClass="bs-icons1"
                  @size="s32"
                  @customClass="fg-primary"
                  aria-hidden="true"
                />
                <div class="medium-font fg-primary text-h6">
                  Drop or upload your image here
                </div>
                <div class="fg-secondary">
                  Only .png images with a resolution of 1242x2436px are
                  supported.
                </div>
              </div>
            </div>
          </:default>
        </UlxField>
      </UlxFieldSet>

      <UlxFieldSet
        @legend="Visual Customization"
        @customClass="flex flex-col gap-6"
      >
        <div class="field">
          <div class="flex gap-6 overflow-x-auto">
            <div>
              <div class="bold-font">App Design</div>
              <UlxOptionSegment
                @type="basic"
                @layout="stacked"
                @selection="corner"
                @items={{this.appDesignItems}}
                @onSelect={{this.handleAppDesignSelect}}
                @ariaLabel="App design options"
                @customClass="flex gap-2 mt-1 flex-row"
              >
                <:content as |item|>
                  <div class="flex flex-col gap-2 items-center">
                    <svg
                      class="w-64 h-120"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#{{item.symbolId}}" />
                    </svg>
                    <div class="text-tiny medium-font">{{item.label}}</div>
                  </div>
                </:content>
              </UlxOptionSegment>
            </div>

            <div>
              <div class="bold-font">App Environment</div>
              <UlxOptionSegment
                @type="basic"
                @layout="stacked"
                @selection="corner"
                @items={{this.appEnvironmentItems}}
                @onSelect={{this.handleAppEnvironmentSelect}}
                @ariaLabel="App Environment"
                @customClass="flex gap-2 mt-1 flex-row"
              >
                <:content as |item|>
                  <div class="flex flex-col gap-2 items-center">
                    <svg
                      class="w-64 h-120"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#{{item.symbolId}}" />
                    </svg>
                    <div class="text-tiny medium-font">{{item.label}}</div>
                  </div>
                </:content>
              </UlxOptionSegment>
            </div>
          </div>
        </div>

        <UlxField @fieldId="mobile-app-accent-color">
          <:label>Accent Color</:label>
          <:default as |field|>
            <div class="flex flex-col gap-3">
              <UlxOptionSegment
                @type="color-swatch"
                @items={{this.accentColorItems}}
                @onSelect={{this.handleAccentColorSelect}}
                @ariaLabel="Accent color presets"
                @customClass="flex gap-2 flex-row"
                @itemClass="w-28 h-28"
              />

              <UlxInputGroup
                @size="m-size"
                @outlined={{true}}
                @startAddonClass="icon-addon"
              >
                <:start>
                  <div class="flex items-center w-full h-full">
                    <div
                      class="w-full h-full rounded-sm"
                      style={{this.accentColorPreviewStyle}}
                      aria-hidden="true"
                    ></div>
                  </div>
                </:start>
                <:input>
                  <UlxInput
                    @field={{field}}
                    @value={{this.accentColor}}
                    @onInput={{this.handleAccentColorInput}}
                    @size="m-size"
                  />
                </:input>
              </UlxInputGroup>
            </div>
          </:default>
        </UlxField>

        <UlxField
          @label="Font Family"
          @fieldId="mobile-app-font-family"
          as |field|
        >
          <UlxDropdown
            @field={{field}}
            @options={{this.fontFamilyOptions}}
            @value={{this.fontFamily}}
            @onChange={{this.handleFontFamilyChange}}
            @size="m-size"
          />
        </UlxField>
      </UlxFieldSet>
    </UlxForm>
  </template>
}
