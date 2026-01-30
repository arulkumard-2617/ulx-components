import { UlxIconInput } from 'uls-components';

<template>
  <div class="ulx-form m-size ulx-grid gp12 mgb14">
    <UlxIconInput
      @iconName="search-icon"
      @iconType="font"
      @iconClass="bs-icons1"
      @iconPosition="left"
      @iconSize="s18"
      @fieldClass="col-4"
      placeholder="Search"
      aria-label="Search"
    />
  </div>
</template>
