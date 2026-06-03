export default `
import { UlxChip, t } from 'ulx-components';

const AVATAR_IMAGE =
  'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png';

<template>
  <div class="flex flex-wrap gap-4">
    <UlxChip
      @label="Exhibitor Pro"
      @customClass="with-icon on-hover bg-goldLayer2"
    >
      <span class="chip-icon" data-qa="ulx-chip-icon">
        <svg aria-hidden="true">
          <use href="#plugin-medium"></use>
        </svg>
      </span>
      <span class="chip-label" data-qa="ulx-chip-label">
        Exhibitor Pro
      </span>
    </UlxChip>

    <UlxChip
      @label="With image"
      @image={{AVATAR_IMAGE}}
      @imageAlt={{t "lbl.image"}}
      @customClass="on-hover"
    />
  </div>
</template>

`;
