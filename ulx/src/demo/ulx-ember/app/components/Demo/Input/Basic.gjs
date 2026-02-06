import { UlxInput } from 'ulx-components';

const rules = {
  required: true,
  minLength: { value: 10 },
  maxLength: { value: 20 },
};

<template>
  <div class="ulx-form m-size ulx-grid gp12 mgb14">
    <UlxInput
      @label="Input"
      @rules={{rules}}
      @helpText="Use 3–20 characters. Letters and numbers only."
      @size="m-size"
      @error="Error message here"
      @fieldClass="col-12"
      placeholder="Enter username"
      aria-label="Username"
    />
  </div>
</template>
