import { UlxMessage } from 'ulx-components';
import { t } from 'ulx-components';

<template>
  <UlxMessage @variant="info" @icon="info-icon">
    <strong>{{"Message"}}:</strong>
    {{"Custom content via default block."}}
  </UlxMessage>
</template>
