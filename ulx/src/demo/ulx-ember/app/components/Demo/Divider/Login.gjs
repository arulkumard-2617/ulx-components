import { UlxDivider, UlxInput, UlxButton } from 'ulx-components';

<template>
  <div class="card">
    <div class="fxb wrap">
      <div class="w-100p md-w-1-3 fxb column center-all gp3 pdy10">
        <div class="fxb wrap center-all gp2">
          <div class="w200">
            <UlxInput @label="Username" @size="m-size" placeholder="Username" aria-label="Username" />
          </div>
        </div>

        <div class="fxb wrap center-all gp2">
          <div class="w200">
            <UlxInput
              @label="Password"
              @size="m-size"
              @type="password"
              placeholder="Password"
              aria-label="Password"
            />
          </div>
        </div>

        <UlxButton @label="Login" @variant="primary" />
      </div>

      <div class="w-100p md-w-1-3 fxb center-all pdy10">
        <UlxDivider @layout="vertical">
          <div class="bold-font">OR</div>
        </UlxDivider>
      </div>

      <div class="w-100p md-w-1-3 fxb center-all pdy10">
        <UlxButton @label="Sign Up" @variant="success" />
      </div>
    </div>
  </div>
</template>

