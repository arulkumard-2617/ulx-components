export default `
<UlxTable
  @value={{this.members}}
  @columns={{this.columns}}
  @dataKey="id"
  @showGlobalFilter={{true}}
  @globalFilterPlaceholder={{t "lbl.search"}}
  @sortOptions={{this.sortOptions}}
  @sortBy={{this.sortBy}}
  @onSortByChange={{this.handleSortByChange}}
  @filterGroups={{this.filterGroups}}
  @showManageColumns={{true}}
>
  <:postRightMenu>
    <UlxButton
      @variant="primary"
      @icon="add-bounded-icon"
      @iconComponentClass="bs-icons1"
      @label="Invite Portal Members"
      {{on "click" this.invitePortalMembers}}
    />
  </:postRightMenu>
  <:optionCell as |member|>
    <UlxSplitButton
      @label="Delete"
      @variant="text"
      @size="s-size"
      @model={{this.getRowActionModel member}}
      @onClick={{fn this.deleteMember member}}
    />
  </:optionCell>
</UlxTable>
`;
