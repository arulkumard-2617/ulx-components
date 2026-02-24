import { UlxIconInput, t } from 'ulx-components';

<template>
  <div class="ulx-form m-size ulx-grid gap-12 mb-14">
    <UlxIconInput
      @iconName="search-icon"
      @iconType="font"
      @iconClass="bs-icons1"
      @iconPosition="left"
      @iconSize="s18"
      @fieldClass="col-4"
      placeholder={{t "lbl.search"}}
      aria-label={{t "lbl.search"}}
    />
  </div>
</template>
