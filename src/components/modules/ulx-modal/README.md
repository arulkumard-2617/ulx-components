# UlxModal Component

A comprehensive modal/dialog component for Ember applications with full WCAG compliance, keyboard support, and advanced features.

## Features

- ✅ **Portal Rendering**: Renders to `document.body` for proper z-index layering
- ✅ **Named Blocks**: Customize header, body, and footer via named blocks
- ✅ **Keyboard Support**: Full keyboard navigation (Tab, Shift+Tab, Escape, Enter, Space)
- ✅ **Focus Management**: Traps focus within modal and restores on close
- ✅ **Modal Stacking**: Proper z-index management for multiple modals
- ✅ **Scroll Blocking**: Blocks body scroll when modal is open
- ✅ **CSS Transitions**: Smooth enter/exit transitions (enter, enter-active, enter-done, exit, exit-active, exit-done)
- ✅ **Responsive**: Supports breakpoints for different screen sizes
- ✅ **Maximizable**: Optional maximize/minimize functionality
- ✅ **Animations**: Fade, zoom, and slide animations
- ✅ **Accessible**: WCAG 2.1 compliant with proper ARIA attributes
- ✅ **Customizable**: Extensive styling and behavior options

## Basic Usage

```gjs
import UlxModal from './components/modules/ulx-modal';

<template>
  <button {{on "click" this.showModal}}>Open Modal</button>

  <UlxModal
    @visible={{this.isModalVisible}}
    @title="Confirm Action"
    @onHide={{this.closeModal}}
    @showDefaultFooter={{true}}
    @onDone={{this.handleConfirm}}
  />
</template>
```

## Custom Content with Named Blocks

```gjs
<UlxModal
  @visible={{this.isModalVisible}}
  @onHide={{this.closeModal}}
  @width="600px"
  @position="center"
>
  <:head>
    <h2 class="dialog-title">Custom Header</h2>
  </:head>

  <:body>
    <p>Your custom modal content goes here.</p>
    <p>This can include any HTML or components.</p>
  </:body>

  <:footer>
    <button class="uls-button uls-button-secondary" {{on "click" this.closeModal}}>
      Cancel
    </button>
    <button class="uls-button uls-button-primary" {{on "click" this.save}}>
      Save Changes
    </button>
  </:footer>
</UlxModal>
```

## Default Content (No Named Blocks)

```gjs
<UlxModal
  @visible={{this.isModalVisible}}
  @title="Notification"
  @onHide={{this.closeModal}}
  @showDefaultFooter={{true}}
  @cancelButtonLabel="Close"
  @doneButtonLabel="OK"
  @onDone={{this.acknowledge}}
>
  <p>This is the modal body content.</p>
  <p>No need to use named blocks for simple cases.</p>
</UlxModal>
```

## API Reference

### Arguments

#### Display & Behavior

| Argument | Type | Default | Description |
|----------|------|---------|-------------|
| `@visible` | `boolean` | **Required** | Controls modal visibility |
| `@title` | `string` | - | Modal title (used when no `:head` block) |
| `@onHide` | `Function` | **Required** | Callback when modal closes |
| `@onShow` | `Function` | - | Callback when modal opens |
| `@onCancel` | `Function` | - | Callback when cancel action is triggered |
| `@onDone` | `Function` | - | Callback for primary action |
| `@onMaskClick` | `Function` | - | Callback when backdrop is clicked |

#### Positioning & Sizing

| Argument | Type | Default | Description |
|----------|------|---------|-------------|
| `@position` | `string` | `"center"` | Position: `"center"`, `"top"`, `"bottom"`, `"left"`, `"right"`, `"top-left"`, `"top-right"`, `"bottom-left"`, `"bottom-right"` |
| `@size` | `string` | `"m-size"` | Size: `"xs-size"`, `"s-size"`, `"m-size"`, `"l-size"`, `"xl-size"` |
| `@width` | `string` | - | Custom width (e.g., `"500px"`, `"50%"`) |
| `@breakpoints` | `Object` | - | Responsive breakpoints: `{"960px": "75vw", "640px": "90vw"}` |

#### Features

| Argument | Type | Default | Description |
|----------|------|---------|-------------|
| `@closeOnBackdrop` | `boolean` | `true` | Close when clicking backdrop |
| `@closeOnEscape` | `boolean` | `true` | Close on Escape key |
| `@blockScroll` | `boolean` | `true` | Block body scroll when open |
| `@scrollable` | `boolean` | `true` | Enable content scrolling |
| `@showCloseButton` | `boolean` | `true` | Show close button in header |
| `@maximizable` | `boolean` | `false` | Show maximize/minimize button |
| `@maximized` | `boolean` | `false` | Start in maximized state |
| `@draggable` | `boolean` | `false` | Enable dragging (future) |
| `@resizable` | `boolean` | `false` | Enable resizing (future) |
| `@keepInViewport` | `boolean` | `true` | Keep within viewport (future) |

#### Styling

| Argument | Type | Default | Description |
|----------|------|---------|-------------|
| `@variant` | `string` | - | Visual variant: `"elevated"`, `"flat"` |
| `@animationType` | `string` | `"fade"` | Animation: `"fade"`, `"zoom"`, `"slide"` |
| `@maskClassName` | `string` | - | Custom CSS class for backdrop |
| `@contentClassName` | `string` | - | Custom CSS class for content |
| `@headerClassName` | `string` | - | Custom CSS class for header |
| `@zIndexBase` | `number` | `1000` | Base z-index for stacking |

#### Default Footer

| Argument | Type | Default | Description |
|----------|------|---------|-------------|
| `@showDefaultFooter` | `boolean` | `false` | Show default footer buttons |
| `@cancelButtonLabel` | `string` | `"Cancel"` | Cancel button text |
| `@doneButtonLabel` | `string` | `"Confirm"` | Confirm button text |

### Named Blocks

The modal supports three named blocks for customization:

```gjs
<UlxModal @visible={{true}}>
  <:head>Custom header content</:head>
  <:body>Custom body content</:body>
  <:footer>Custom footer buttons</:footer>
</UlxModal>
```

- **`:head`** - Replaces the entire header
- **`:body`** - Replaces the body content
- **`:footer`** - Replaces the footer

If a block is not provided, the default content will be used.

## Keyboard Support

### Modal Overlay

| Key | Function |
|-----|----------|
| `Escape` | Closes the modal and returns focus to trigger |
| `Tab` | Moves focus to next focusable element within modal |
| `Shift + Tab` | Moves focus to previous focusable element within modal |

### Buttons

| Key | Function |
|-----|----------|
| `Enter` | Triggers the button action |
| `Space` | Triggers the button action |

## Accessibility (WCAG 2.1)

The UlxModal component is fully WCAG 2.1 compliant:

- ✅ **Focus Trap**: Focus is trapped within the modal when open
- ✅ **Focus Restoration**: Focus returns to trigger element on close
- ✅ **ARIA Attributes**: Proper `role="dialog"`, `aria-modal="true"`, `aria-labelledby`
- ✅ **Keyboard Navigation**: Full keyboard support
- ✅ **Screen Reader Support**: All interactive elements are properly labeled
- ✅ **Visual Focus Indicators**: Clear focus styles on all interactive elements

## Examples

### Confirmation Modal

```gjs
<UlxModal
  @visible={{this.showConfirm}}
  @title="Delete Item"
  @onHide={{this.cancelDelete}}
  @onCancel={{this.handleCancelDelete}}
  @showDefaultFooter={{true}}
  @cancelButtonLabel="Cancel"
  @doneButtonLabel="Delete"
  @onDone={{this.confirmDelete}}
  @size="s-size"
>
  <p>Are you sure you want to delete this item? This action cannot be undone.</p>
</UlxModal>
```

### Form Modal

```gjs
<UlxModal
  @visible={{this.showForm}}
  @title="Edit Profile"
  @onHide={{this.closeForm}}
  @width="600px"
  @scrollable={{true}}
>
  <:body>
    <form>
      <label>
        Name:
        <input type="text" value={{this.name}} />
      </label>
      <label>
        Email:
        <input type="email" value={{this.email}} />
      </label>
    </form>
  </:body>

  <:footer>
    <button class="uls-button uls-button-secondary" {{on "click" this.closeForm}}>
      Cancel
    </button>
    <button class="uls-button uls-button-primary" {{on "click" this.saveProfile}}>
      Save
    </button>
  </:footer>
</UlxModal>
```

### Maximizable Modal

```gjs
<UlxModal
  @visible={{this.showMaximizable}}
  @title="Large Content"
  @onHide={{this.closeModal}}
  @maximizable={{true}}
  @size="l-size"
  @scrollable={{true}}
>
  <p>This modal can be maximized to full screen.</p>
  <p>Click the maximize button in the header to expand.</p>
</UlxModal>
```

### Stacked Modals

```gjs
{{! First modal }}
<UlxModal
  @visible={{this.showFirstModal}}
  @title="First Modal"
  @onHide={{this.closeFirst}}
  @zIndexBase={{1000}}
>
  <button {{on "click" this.openSecondModal}}>
    Open Second Modal
  </button>
</UlxModal>

{{! Second modal will stack above first }}
<UlxModal
  @visible={{this.showSecondModal}}
  @title="Second Modal"
  @onHide={{this.closeSecond}}
  @zIndexBase={{1000}}
>
  <p>This modal is stacked above the first one.</p>
</UlxModal>
```

## Styling

The modal uses ULX CSS classes from `uls-v2/src/styles/uls-styles/less/modules/dialog.less`:

- `.uls-dialog` - Main dialog container
- `.dialog-mask` - Backdrop/overlay
- `.dialog-header` - Header section
- `.dialog-title` - Title text
- `.dialog-content` - Body content
- `.dialog-footer` - Footer section
- `.dialog-close-button` - Close button
- `.dialog-maximizable-button` - Maximize button

Position classes:
- `.position-center`
- `.position-top`, `.position-bottom`, `.position-left`, `.position-right`
- `.position-top-left`, `.position-top-right`, `.position-bottom-left`, `.position-bottom-right`

Size classes:
- `.xs-size`, `.s-size`, `.m-size`, `.l-size`, `.xl-size`

State classes:
- `.maximized` - When modal is maximized
- `.visible` - When modal is shown

Transition classes (applied automatically):
- `.enter` - Initial enter state (opacity: 0)
- `.enter-active` - Active enter transition (opacity: 1)
- `.enter-done` - Enter complete
- `.exit` - Initial exit state (opacity: 1)
- `.exit-active` - Active exit transition (opacity: 0)
- `.exit-done` - Exit complete (visibility: hidden)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Related Components

- `UlxModalHeader` - Header subcomponent
- `UlxModalBody` - Body subcomponent
- `UlxModalFooter` - Footer subcomponent
- `UlxIcon` - Icon component used for close/maximize buttons

## License

MIT
