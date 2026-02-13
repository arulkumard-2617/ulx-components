# ULX Services

## ModalStackService

The `ModalStackService` manages z-index stacking for modal components, ensuring modals are properly layered based on the order they are opened.

### Features

- **Automatic z-index management**: Assigns unique z-indexes based on open order
- **Proper cleanup**: Removes modals from stack when closed
- **No race conditions**: Eliminates the z-index calculation bug in previous implementation
- **Singleton pattern**: One service instance manages all modals in the app

### How It Works

1. **Registration**: When a modal becomes visible, it registers itself with the service
2. **Z-Index Assignment**: The service calculates z-index based on the modal's position in the stack
3. **Unregistration**: When a modal closes, it unregisters from the service
4. **Dynamic Updates**: As modals open/close, z-indexes are recalculated automatically

### Usage

The service is automatically injected into `UlxModal` components. No manual setup required.

```javascript
// UlxModal automatically uses the service
<UlxModal
  @visible={{this.showModal}}
  @zIndexBase={{1000}}
/>
```

### API

#### `registerModal(modalInstance)`
Registers a modal instance and returns its calculated z-index.
- **Parameters**: `modalInstance` - The modal component instance
- **Returns**: `number` - The calculated z-index

#### `unregisterModal(modalInstance)`
Removes a modal from the stack.
- **Parameters**: `modalInstance` - The modal component instance to remove

#### `getZIndex(modalInstance)`
Gets the z-index for a specific modal based on its position.
- **Parameters**: `modalInstance` - The modal component instance
- **Returns**: `number` - The calculated z-index

#### `modalCount` (getter)
Returns the total number of currently registered modals.
- **Returns**: `number`

#### `hasModals` (getter)
Checks if any modals are currently registered.
- **Returns**: `boolean`

#### `topModal` (getter)
Returns the topmost modal in the stack.
- **Returns**: `Object|null`

#### `clear()`
Clears all registered modals. Useful for testing/cleanup.

### Example: Custom Usage

If you need to check modal state in your app:

```javascript
import { inject as service } from '@ember/service';

export default class MyComponent extends Component {
  @service modalStack;

  get hasOpenModals() {
    return this.modalStack.hasModals;
  }

  get modalCount() {
    return this.modalStack.modalCount;
  }
}
```

### Z-Index Calculation

The service uses this formula:
```
z-index = baseZIndex + (stackPosition * 10)
```

**Example with 3 modals:**
- Modal 1: position 0 → z-index = 1000
- Modal 2: position 1 → z-index = 1010  
- Modal 3: position 2 → z-index = 1020

### Benefits Over Previous Implementation

**Before (Bug):**
- All modals recalculated z-index on every render
- Race condition caused same z-index for multiple modals
- No proper cleanup when modals closed

**After (Service):**
- Each modal gets unique z-index on open
- Position-based calculation ensures correct stacking
- Automatic cleanup maintains accurate stack
- Singleton service prevents conflicts
