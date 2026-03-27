export default `
import { UlxDivider, UlxTag, UlxButton } from 'ulx-components';

<template>
  <div class="flex flex-col gap-3">
    <p class="m-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>

    <UlxDivider @align="left">
      <div class="flex items-center gap-2">
        <b>Text</b>
      </div>
    </UlxDivider>

    <p class="m-0">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam.
    </p>

    <UlxDivider @align="center">
      <UlxTag @value="Badge" @variant="primary" @size="s-size" />
    </UlxDivider>

    <p class="m-0">
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
      praesentium voluptatum deleniti atque corrupti.
    </p>

    <UlxDivider @align="right">
      <UlxButton @label="Button" @outlined={{true}} />
    </UlxDivider>

    <p class="m-0">
      Temporibus autem quibusdam et aut officiis debitis aut rerum
      necessitatibus saepe eveniet ut et voluptates repudiandae sint.
    </p>
  </div>
</template>

`;
