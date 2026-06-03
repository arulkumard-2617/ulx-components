export default `
import {
  UlxDivider,
  UlxForm,
  UlxField,
  UlxInput,
  UlxButton
} from 'ulx-components';

<template>
  <div class="ulx-grid items-center gap-4">
    <div class="col-5">
      <UlxForm
        @size="m-size"
        @customClass="flex flex-col items-center gap-4"
        aria-label="Login form"
      >
        <UlxField
          @label="Username"
          @fieldId="divider-login-username"
          @fieldClass="w200"
          as |field|
        >
          <UlxInput
            @field={{field}}
            @size="m-size"
            placeholder="Username"
            aria-label="Username"
          />
        </UlxField>

        <UlxField
          @label="Password"
          @fieldId="divider-login-password"
          @fieldClass="w200"
          as |field|
        >
          <UlxInput
            @field={{field}}
            @size="m-size"
            @type="password"
            placeholder="Password"
            aria-label="Password"
          />
        </UlxField>

        <UlxButton @label="Login" @variant="primary" />
      </UlxForm>
    </div>

    <div class="col-2 flex justify-center h-full">
      <UlxDivider @layout="vertical">
        <div class="bold-font">OR</div>
      </UlxDivider>
    </div>

    <div class="col-5 flex justify-center">
      <UlxButton @label="Sign Up" @variant="success" />
    </div>
  </div>
</template>

`;
