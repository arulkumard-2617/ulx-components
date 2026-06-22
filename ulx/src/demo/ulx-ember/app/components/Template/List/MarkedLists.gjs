import Component from '@glimmer/component';
import { UlxField, UlxInput } from 'ulx-components';

const SectionTitle = <template>
  <h6 class="m-0 bold-font text-secondary text-uppercase text-12">{{@label}}</h6>
</template>;

export default class MarkedListsTemplate extends Component {
  publishSteps = [
    {
      id: 1,
      title: 'Publish to App Store',
      description:
        'To make your app available for your attendees, you should publish the app to App Store.',
      linkText: 'Steps to publish the attendee app in the App Store'
    },
    {
      id: 2,
      title: 'Update the live app link',
      description:
        'Once your app is published on the App Store, enter your attendee app link here.',
      hasInput: true
    }
  ];

  bulletItems = [
    'Configure your event details and ticket types.',
    'Invite collaborators to manage the event.',
    'Publish the event when you are ready to go live.'
  ];

  diamondItems = [
    'Real-time analytics dashboard.',
    'Branded mobile event app.',
    'Automated email and WhatsApp triggers.'
  ];

  basicItems = [
    'Plan your event timeline.',
    'Set up sessions and speakers.',
    'Launch ticket sales.'
  ];

  <template>
    <div class="flex flex-col gap-8">

      {{! ----- Decimal (Primary, real-world example) ----- }}
      <div class="flex flex-col gap-3">
        <SectionTitle @label="Decimal — primary" />
        <div class="ulx-ul decimal primary">
          <ul class="gp0">
            {{#each this.publishSteps key="id" as |step|}}
              <li>
                <h5 class="m-0 bold-font">{{step.title}}</h5>
                <div class="text-secondary mt-1">
                  {{step.description}}
                  {{#if step.linkText}}
                    <a href="#">{{step.linkText}}</a>
                  {{/if}}
                </div>
                {{#if step.hasInput}}
                  <div class="mt-2">
                    <UlxField>
                      <UlxInput
                        @placeholder="Ex: https://itunes.apple.com/in/app/zohobackstage/id123456"
                      />
                    </UlxField>
                  </div>
                {{/if}}
              </li>
            {{/each}}
          </ul>
        </div>
      </div>

      {{! ----- Decimal (default) ----- }}
      <div class="flex flex-col gap-3">
        <SectionTitle @label="Decimal — default" />
        <div class="ulx-ul decimal">
          <ul>
            <li>Set up your event basics.</li>
            <li>Customize the registration form.</li>
            <li>Invite attendees.</li>
          </ul>
        </div>
      </div>

      {{! ----- Bullet list (default) ----- }}
      <div class="flex flex-col gap-3">
        <SectionTitle @label="Bullet list — default" />
        <div class="ulx-ul bullet-list">
          <ul>
            {{#each this.bulletItems as |item index|}}
              <li>{{item}}</li>
            {{/each}}
          </ul>
        </div>
      </div>

      {{! ----- Bullet list small ----- }}
      <div class="flex flex-col gap-3">
        <SectionTitle @label="Bullet list — s-size" />
        <div class="ulx-ul bullet-list s-size">
          <ul>
            {{#each this.bulletItems as |item index|}}
              <li>{{item}}</li>
            {{/each}}
          </ul>
        </div>
      </div>

      {{! ----- Number (browser default) ----- }}
      <div class="flex flex-col gap-3">
        <SectionTitle @label="Number" />
        <div class="ulx-ul number">
          <ul>
            <li>Connect your payment gateway.</li>
            <li>Set ticket pricing and capacity.</li>
            <li>Enable promo codes.</li>
          </ul>
        </div>
      </div>

      {{! ----- Basic ----- }}
      <div class="flex flex-col gap-3">
        <SectionTitle @label="Basic" />
        <div class="ulx-ul basic">
          <ul>
            {{#each this.basicItems as |item index|}}
              <li>{{item}}</li>
            {{/each}}
          </ul>
        </div>
      </div>

      {{! ----- Diamond default + primary ----- }}
      <div class="flex flex-col gap-3">
        <SectionTitle @label="Diamond — default & primary" />
        <div class="flex gap-8">
          <div class="ulx-ul diamond grow">
            <ul>
              {{#each this.diamondItems as |item index|}}
                <li>{{item}}</li>
              {{/each}}
            </ul>
          </div>
          <div class="ulx-ul diamond primary grow">
            <ul>
              {{#each this.diamondItems as |item index|}}
                <li>{{item}}</li>
              {{/each}}
            </ul>
          </div>
        </div>
      </div>

      {{! ----- Diamond size variants ----- }}
      <div class="flex flex-col gap-3">
        <SectionTitle @label="Diamond — size variants (s13 / s14)" />
        <div class="flex gap-8">
          <div class="ulx-ul diamond s13 grow">
            <ul>
              {{#each this.diamondItems as |item index|}}
                <li>{{item}}</li>
              {{/each}}
            </ul>
          </div>
          <div class="ulx-ul diamond s14 grow">
            <ul>
              {{#each this.diamondItems as |item index|}}
                <li>{{item}}</li>
              {{/each}}
            </ul>
          </div>
        </div>
      </div>

      {{! ----- Diamond-01 ----- }}
      <div class="flex flex-col gap-3">
        <SectionTitle @label="Diamond-01" />
        <div class="ulx-ul diamond-01">
          <ul>
            {{#each this.diamondItems as |item index|}}
              <li>{{item}}</li>
            {{/each}}
          </ul>
        </div>
      </div>

    </div>
  </template>
}
