import { UlxInput, UlxField, UlxIconInput, t } from 'ulx-components';

<template>
  <div class="ulx-form m-size ulx-grid gap-12 mb-14">

    <UlxField @fieldId="search" @fieldClass="col-4">
      <:control as |field|>

        <UlxIconInput
          @iconName="search-icon"
          @iconType="font"
          @iconClass="bs-icons1"
          @iconPosition="left"
          @iconSize="s18"
        >
          <UlxInput
            @key={{field.key}}
            @ariaDescribedBy={{field.describedBy}}
            @ariaErrorMessage={{field.errorId}}
            placeholder={{t "lbl.search"}}
            aria-label={{t "lbl.search"}}
          />
        </UlxIconInput>
      </:control>
    </UlxField>

  </div>
</template>
