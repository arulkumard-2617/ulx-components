# UlsTabMenu Component

## Location

- **Source**: `src/components/addon/components/collections/uls-tab-menu.gjs`
- **Public**: `addon/components/collections/uls-tab-menu.gjs` (after build)
- **Category**: Collections (Molecule)

## Component Overview

`uls-tab-menu` is a horizontal menu of tabs that supports multiple interaction modes:

1. **Basic Mode** - Internal state management
2. **Controlled Mode** - External state via `@activeIndex`
3. **Template Mode** - Named block customization via `<:tabItem>`
4. **Command Mode** - Execute functions on item click
5. **Router Mode** - Navigation-based tabs

## Usage Examples

### Basic Mode

```handlebars
<UlsTabMenu 
  @items={{this.menuItems}}
  @onChange={{this.handleTabChange}}
/>
```

### Controlled Mode

```handlebars
<UlsTabMenu 
  @items={{this.menuItems}}
  @activeIndex={{this.activeTabIndex}}
  @onTabChange={{this.handleTabChange}}
/>
```

### Template Mode (Custom Rendering)

```handlebars
<UlsTabMenu @items={{this.menuItems}}>
  <:tabItem as |item isActive index|>
    <button
      type="button"
      class={{if isActive "is-active"}}
      disabled={{item.disabled}}
    >
      {{item.label}}
    </button>
  </:tabItem>
</UlsTabMenu>
```

### Command Mode

```handlebars
<UlsTabMenu @items={{this.menuItemsWithCommands}} />
```

Where `menuItemsWithCommands` includes items with `command` functions:

```javascript
menuItemsWithCommands = [
  {
    label: 'Dashboard',
    icon: 'pi pi-home',
    command: (item, index, event) => {
      // Execute custom action
      this.showToast('Dashboard selected');
    }
  }
];
```

### Router Mode

```handlebars
<UlsTabMenu @items={{this.navigationItems}} />
```

Where `navigationItems` includes items with `route` or `externalUrl`:

```javascript
navigationItems = [
  {
    label: 'Home',
    route: 'index'
  },
  {
    label: 'About',
    route: 'about',
    models: [this.userId]
  },
  {
    label: 'External',
    externalUrl: 'https://example.com'
  }
];
```

## Menu Item Interface

Each menu item object may include:

```typescript
{
  label: string;        // Required: Display text
  icon?: string;       // Optional: Icon class name
  disabled?: boolean;  // Optional: Disable the item
  command?: Function;  // Optional: Function to execute
  route?: string;      // Optional: Ember route name
  models?: Array;      // Optional: Route models
  query?: Object;      // Optional: Query params
  externalUrl?: string;// Optional: External link URL
  className?: string;  // Optional: Additional CSS classes
}
```

## Accessibility

- **Keyboard Navigation**: ArrowLeft/Right, Enter/Space, Home/End
- **ARIA Roles**: `menubar`, `menuitem`, `presentation`
- **ARIA Attributes**: `aria-label`, `aria-disabled`, `aria-current`
- **Screen Reader Support**: Full semantic HTML structure

## Implementation Notes

- Single component handles all modes
- Uses `@tracked` only for internal state (basic mode)
- No inline styles - assumes external CSS
- Follows Ember 6.4 LTS best practices
- Fully documented with inline comments

