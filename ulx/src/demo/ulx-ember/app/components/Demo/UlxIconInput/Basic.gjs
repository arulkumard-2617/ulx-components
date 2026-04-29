import { UlxInput, UlxIconInput, t } from 'ulx-components';

<template>
  <div class="ulx-form m-size ulx-grid gap-12 mb-14">

    <div class="col-6">
      <UlxIconInput
        @iconLeft="search-icon"
        @iconType="font"
        @iconSize="s18"
        @size="m-size"
      >
        <UlxInput
          @key="demo-icon-input-search"
          placeholder={{t "lbl.search"}}
          aria-label={{t "lbl.search"}}
        />
      </UlxIconInput>
    </div>

    <div class="col-6">
      <UlxIconInput
        @iconRight="calendar-icon02"
        @iconType="font"
        @iconClass="bs-icons1"
        @iconSize="s18"
        @size="m-size"
      >
        <UlxInput
          @key="demo-icon-input-email"
          type="email"
          placeholder={{"Enter email address"}}
          aria-label={{"Email"}}
        />
      </UlxIconInput>
    </div>

  </div>
</template>
