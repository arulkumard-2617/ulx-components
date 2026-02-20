export default `
import { UlxDivider } from 'ulx-components';

<template>
  <div class="fxb column gp3">
    <p class="mg0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </p>

    <UlxDivider @type="solid" />

    <p class="mg0">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
      laudantium, totam rem aperiam.
    </p>

    <UlxDivider @type="dashed" />

    <p class="mg0">
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
      voluptatum deleniti atque corrupti.
    </p>

    <UlxDivider @type="dotted" />

    <p class="mg0">
      Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut
      et voluptates repudiandae sint.
    </p>
  </div>
</template>

`;

