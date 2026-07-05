import Component from '@glimmer/component';
import { UlxIcon, UlxImage } from 'ulx-components';

export default class ExhibitorOrderCardTemplate extends Component {
  <template>
    <div class="border border-primary rounded-md overflow-hidden bg-default shrink-0">
      <div class="flex border-b border-primary p-4 bg-primaryLayer1">
        <div class="flex flex-col gap-2 border-e pe-4 w-252">
          <div class="flex items-center gap-1">
            <UlxIcon
              @iconName="bs-icons1 company-icon"
              @type="font"
              @size="s16"
              @customClass="fg-primary"
              aria-hidden="true"
            />
            <span class="text-12">Exhibitor Company</span>
          </div>
          <div class="flex items-center gap-2">
            <UlxImage
              @src="/images/faces/face5.jpg"
              @alt="Amazon"
              @size="m-size"
              @shape="rounded"
            />
            <div class="flex flex-col gap-1 min-w-0">
              <span class="text-18 semibold-font">Amazon</span>
              <a href="#" class="text-13 fg-primary flex items-center gap-1 w-fit">
                Exhibitor Profile
                <UlxIcon
                  @iconName="bs-icons1 link-external-icon"
                  @type="font"
                  @size="s12"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-2 border-e px-4">
          <div class="flex items-center gap-1">
            <UlxIcon
              @iconName="bs-icons1 email-icon"
              @type="font"
              @size="s16"
              @customClass="fg-purple"
              aria-hidden="true"
            />
            <span class="text-12">Exhibitor Contact</span>
          </div>
          <span class="text-18 semibold-font">Jeff Bezos</span>
          <a href="mailto:jeffbezos@amazon.com" class="text-13 fg-primary w-fit">
            jeffbezos@amazon.com
          </a>
        </div>

        <div class="flex flex-col gap-2 border-e px-4 w-180">
          <div class="flex items-center gap-1">
            <UlxIcon
              @iconName="bs-icons1 list-view-icon"
              @type="font"
              @size="s16"
              @customClass="fg-green"
              aria-hidden="true"
            />
            <span class="text-12">Booth Type</span>
          </div>
          <div class="text-18 semibold-font">Silver</div>
          <div class="text-13 medium-font">$2,999.00</div>
        </div>

        <div class="flex flex-col gap-2 ps-4 w-180">
          <div class="flex items-center gap-1">
            <UlxIcon
              @iconName="bs-icons1 number-icon"
              @type="font"
              @size="s16"
              @customClass="fg-primary"
              aria-hidden="true"
            />
            <span class="text-12">Booth ID</span>
            <svg class="s20" aria-hidden="true">
              <use href="#plugin-medium"></use>
            </svg>
          </div>
          <span class="text-18 semibold-font">104</span>
          <div class="text-13 medium-font">12ft X 12ft</div>
        </div>
      </div>

      <div class="flex justify-between p-4 gap-4">
        <div class="flex flex-col gap-1 pe-4">
          <div class="flex items-center gap-1">
            <UlxIcon
              @iconName="bs-icons1 total-sales-icon"
              @type="font"
              @size="s16"
              @customClass="fg-green"
              aria-hidden="true"
            />
            <span class="text-12 medium-font fg-secondary">Order Total</span>
          </div>
          <span class="text-h4 bold-font">$1,019.20</span>
        </div>

        <div class="flex items-stretch gap-15 ps-4 pe-4 border-x">
          <div class="flex flex-col gap-1 items-start text-start">
            <span class="text-12 medium-font fg-secondary">Net Amount</span>
            <span class="text-14 semibold-font fg-green">$997.60</span>
          </div>
          <div class="flex flex-col gap-1 items-start text-start">
            <span class="text-12 medium-font fg-secondary">Outstanding</span>
            <span class="text-14 semibold-font fg-orange opacity-50">$0.00</span>
          </div>
          <div class="flex flex-col gap-1 items-start text-start">
            <span class="text-12 medium-font fg-secondary">Refunded</span>
            <span class="text-14 semibold-font fg-secondary opacity-50">$0.00</span>
          </div>
        </div>

        <div class="flex flex-col gap-1 items-end text-end">
          <span class="text-12 medium-font fg-secondary">Source</span>
          <span class="text-14 medium-font">Exhibitor Request</span>
        </div>
      </div>
    </div>
  </template>
}
