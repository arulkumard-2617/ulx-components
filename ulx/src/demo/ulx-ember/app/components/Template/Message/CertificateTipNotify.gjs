import Component from '@glimmer/component';

export default class CertificateTipNotifyTemplate extends Component {
  <template>
    <div class="ulx-message tip-notify">
      <div class="flex items-center gap-1 mb-2">
        <i class="bs-icons1 bulb-icon fg-primary s22"></i>
        <span class="bold-font fg-primary default-font">Certificate Tip!</span>
      </div>
      <div class="mini-font">
        <span class="bold-font">Share Certificates via Email</span><br />
        Include certificates as download links in scheduled emails.
      </div>
    </div>
  </template>
}
