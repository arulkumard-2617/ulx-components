import { UlxDivider, UlxInput, UlxButton } from 'ulx-components';

<template>
  <div class="card">
    <div class="flex wrap">
      <div class="w-full md-w-1-3 flex flex-col center-all gap-3 py-10">
        <div class="flex wrap center-all gap-2">
          <div class="w200">
            <UlxInput
              @label="Username"
              @size="m-size"
              placeholder="Username"
              aria-label="Username"
            />
          </div>
        </div>

        <div class="flex wrap center-all gap-2">
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

      <div class="w-full md-w-1-3 flex center-all py-10">
        <UlxDivider @layout="vertical">
          <div class="bold-font">OR</div>
        </UlxDivider>
      </div>

      <div class="w-full md-w-1-3 flex center-all py-10">
        <UlxButton @label="Sign Up" @variant="success" />
      </div>
    </div>
  </div>
</template>
