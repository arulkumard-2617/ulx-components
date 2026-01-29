export default `
import { UlxInput } from 'uls-components';

const rules = {
  required: true,
  minLength: { value: 10 },
  maxLength: { value: 20 },
};

<template>
  <div class="ulx-form s-size ulx-grid gp12 mgb14">
    <UlxInput
      @label="Input"
      @rules={{rules}}
      @helpText="Use 3–20 characters. Letters and numbers only."
      @size="s-size"
      @errorMessage="error"
      @fieldClass="col-12"
      placeholder="Enter username"
      aria-label="Username"
    />
    <UlxInput
      @type="textarea"
      @label="textarea"
      @rules={{rules}}
      @helpText="Use 3–20 characters. Letters and numbers only."
      @size="s-size"
      @errorMessage="error"
      @fieldClass="col-12"
      placeholder="Enter username"
      aria-label="Username"
    />
  </div>
</template>

`;
