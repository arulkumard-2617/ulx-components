export default `
import Component from '@glimmer/component';
import { UlxField, UlxInput } from 'ulx-components';

export default class MarkedListsTemplate extends Component {
  publishSteps = [
    {
      id: 1,
      title: 'Publish to App Store',
      description:
        'To make your app available for your attendees, you should publish the app to App Store.',
      linkText:
        'Steps to publish the attendee app in the App Store'
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

  <template>
    {{! Decimal (primary) — real-world App Store example }}
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

    {{! Decimal (default) }}
    <div class="ulx-ul decimal">
      <ul>
        <li>Set up your event basics.</li>
        <li>Customize the registration form.</li>
        <li>Invite attendees.</li>
      </ul>
    </div>

    {{! Bullet list — default }}
    <div class="ulx-ul bullet-list">
      <ul>
        {{#each this.bulletItems as |item|}}
          <li>{{item}}</li>
        {{/each}}
      </ul>
    </div>

    {{! Bullet list — s-size (smaller dot) }}
    <div class="ulx-ul bullet-list s-size">
      <ul>
        {{#each this.bulletItems as |item|}}
          <li>{{item}}</li>
        {{/each}}
      </ul>
    </div>

    {{! Number — browser default ordered list }}
    <div class="ulx-ul number">
      <ul>
        <li>Connect your payment gateway.</li>
        <li>Set ticket pricing and capacity.</li>
        <li>Enable promo codes.</li>
      </ul>
    </div>

    {{! Basic — minimal indent, no markers }}
    <div class="ulx-ul basic">
      <ul>
        <li>Plan your event timeline.</li>
        <li>Set up sessions and speakers.</li>
        <li>Launch ticket sales.</li>
      </ul>
    </div>

    {{! Diamond — default and primary }}
    <div class="ulx-ul diamond">
      <ul>
        {{#each this.diamondItems as |item|}}
          <li>{{item}}</li>
        {{/each}}
      </ul>
    </div>
    <div class="ulx-ul diamond primary">
      <ul>
        {{#each this.diamondItems as |item|}}
          <li>{{item}}</li>
        {{/each}}
      </ul>
    </div>

    {{! Diamond — size variants (s13 / s14) }}
    <div class="ulx-ul diamond s13">
      <ul>
        {{#each this.diamondItems as |item|}}
          <li>{{item}}</li>
        {{/each}}
      </ul>
    </div>
    <div class="ulx-ul diamond s14">
      <ul>
        {{#each this.diamondItems as |item|}}
          <li>{{item}}</li>
        {{/each}}
      </ul>
    </div>

    {{! Diamond-01 — alternate icon }}
    <div class="ulx-ul diamond-01">
      <ul>
        {{#each this.diamondItems as |item|}}
          <li>{{item}}</li>
        {{/each}}
      </ul>
    </div>
  </template>
}
`;
