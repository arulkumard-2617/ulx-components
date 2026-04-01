export default `
import { UlxEmptyState, UlxButton, t } from 'ulx-components';

<template>
  <UlxEmptyState
    @headerText="msg.empty.state.title"
    @subHeaderText="msg.empty.state.subtitle"
    @iconName="event-past-icon"
    @iconSize="s32"
  >
    <UlxButton @label={{t "lbl.show"}} />
  </UlxEmptyState>
</template>

`;
