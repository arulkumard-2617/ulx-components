export default `
<UlxTable
  @value={{this.products}}
  @columns={{this.columns}}
  @dataKey="id"
  @showToggleViews={{true}}
  @defaultView="table"
  @cardViewColumns={{this.cardViewColumns}}
  @showGlobalFilter={{true}}
>
  <:card as |row|>
    {{! Card layout — uses uls-grid col span from @cardViewColumns }}
    <div class="uls-column gap-2">...</div>
  </:card>
  <:detailed as |row|>
    {{! Detailed/list layout — full-width row (col-12) }}
    <div class="uls-column gap-3 items-center">...</div>
  </:detailed>
  <:customOptions>
    {{! Shared options (e.g. set card columns) }}
    <button type="button" {{on "click" (fn this.setCardColumns 3)}}>3 columns</button>
  </:customOptions>
</UlxTable>
`;
