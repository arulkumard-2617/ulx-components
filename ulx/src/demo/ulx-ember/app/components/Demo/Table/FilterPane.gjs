import Component from '@glimmer/component';
import { UlxTable } from 'ulx-components';

const PRODUCTS = [
  {
    id: 1,
    name: 'Bamboo Watch',
    category: 'Accessories',
    price: 65,
    status: 'INSTOCK',
    tier: 'mid',
    region: 'US',
    channel: 'online',
  },
  {
    id: 2,
    name: 'Black Watch',
    category: 'Accessories',
    price: 72,
    status: 'INSTOCK',
    tier: 'mid',
    region: 'EU',
    channel: 'retail',
  },
  {
    id: 3,
    name: 'Blue Band',
    category: 'Fitness',
    price: 79,
    status: 'LOWSTOCK',
    tier: 'premium',
    region: 'APAC',
    channel: 'online',
  },
  {
    id: 4,
    name: 'Blue T-Shirt',
    category: 'Clothing',
    price: 29,
    status: 'INSTOCK',
    tier: 'budget',
    region: 'US',
    channel: 'wholesale',
  },
  {
    id: 5,
    name: 'Bracelet',
    category: 'Accessories',
    price: 15,
    status: 'INSTOCK',
    tier: 'budget',
    region: 'EU',
    channel: 'online',
  },
  {
    id: 6,
    name: 'Brown Purse',
    category: 'Accessories',
    price: 120,
    status: 'OUTOFSTOCK',
    tier: 'premium',
    region: 'US',
    channel: 'retail',
  },
  {
    id: 7,
    name: 'Chakra Bracelet',
    category: 'Accessories',
    price: 32,
    status: 'LOWSTOCK',
    tier: 'mid',
    region: 'APAC',
    channel: 'online',
  },
  {
    id: 8,
    name: 'Galaxy Earrings',
    category: 'Accessories',
    price: 34,
    status: 'INSTOCK',
    tier: 'mid',
    region: 'EU',
    channel: 'wholesale',
  },
  {
    id: 9,
    name: 'Gaming Mouse',
    category: 'Electronics',
    price: 49,
    status: 'INSTOCK',
    tier: 'mid',
    region: 'US',
    channel: 'online',
  },
  {
    id: 10,
    name: 'Desk Lamp',
    category: 'Home',
    price: 89,
    status: 'INSTOCK',
    tier: 'premium',
    region: 'APAC',
    channel: 'retail',
  },
  {
    id: 11,
    name: 'Trail Backpack',
    category: 'Outdoor',
    price: 95,
    status: 'LOWSTOCK',
    tier: 'premium',
    region: 'US',
    channel: 'online',
  },
  {
    id: 12,
    name: 'Cookbook Set',
    category: 'Books',
    price: 42,
    status: 'INSTOCK',
    tier: 'mid',
    region: 'EU',
    channel: 'retail',
  },
];

const columns = [
  { field: 'name', header: 'Name', sortable: true },
  { field: 'category', header: 'Category', sortable: true },
  { field: 'status', header: 'Status' },
  { field: 'tier', header: 'Tier' },
  { field: 'region', header: 'Region' },
  { field: 'channel', header: 'Channel' },
  { field: 'price', header: 'Price ($)', sortable: true },
];

const filterGroups = [
  {
    key: 'category',
    heading: 'Category',
    options: [
      { value: 'Accessories', label: 'Accessories' },
      { value: 'Fitness', label: 'Fitness' },
      { value: 'Clothing', label: 'Clothing' },
      { value: 'Electronics', label: 'Electronics' },
      { value: 'Home', label: 'Home' },
      { value: 'Books', label: 'Books' },
      { value: 'Games', label: 'Games' },
      { value: 'Outdoor', label: 'Outdoor' },
    ],
  },
  {
    key: 'status',
    heading: 'Status',
    checkbox: {
      items: [
        { value: 'INSTOCK', label: 'In stock' },
        { value: 'LOWSTOCK', label: 'Low stock' },
        { value: 'OUTOFSTOCK', label: 'Out of stock' },
      ],
    },
  },
  {
    key: 'tier',
    heading: 'Price tier',
    groupedRadioItems: {
      items: [
        {
          heading: 'Tier',
          values: [
            { key: 'budget', label: 'Budget (under $30)' },
            { key: 'mid', label: 'Mid-range ($30–$75)' },
            { key: 'premium', label: 'Premium (over $75)' },
          ],
        },
      ],
    },
  },
  {
    key: 'region',
    heading: 'Region',
    dropdown: {
      multiSelect: true,
      placeholder: 'Select regions',
      items: [
        { value: 'US', label: 'United States' },
        { value: 'EU', label: 'Europe' },
        { value: 'APAC', label: 'Asia Pacific' },
      ],
    },
  },
  {
    key: 'channel',
    heading: 'Sales channel',
    dropdown: {
      placeholder: 'Select channel',
      items: [
        { value: 'online', label: 'Online' },
        { value: 'retail', label: 'Retail' },
        { value: 'wholesale', label: 'Wholesale' },
      ],
    },
  },
];

export default class DemoTableFilterPane extends Component {
  products = PRODUCTS;
  columns = columns;
  filterGroups = filterGroups;

  <template>
    <UlxTable
      @value={{this.products}}
      @columns={{this.columns}}
      @dataKey="id"
      @filterGroups={{this.filterGroups}}
      @paginator={{true}}
      @rows={{5}}
      @showGridlines={{true}}
    />
  </template>
}
