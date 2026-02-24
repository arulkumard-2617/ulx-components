export default `
import { UlxChip } from 'ulx-components';

<template>
  <UlxChip
    @label="Removable chip"
    @removable={{true}}
    @onRemove={{this.handleRemove}}
  />
</template>

`;
