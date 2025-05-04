# @cohostvip/cohost-node

## 0.0.10

### Patch Changes

- Add `events.attendees()` to fetch attendees for event.

## 0.0.9

### Patch Changes

- feat: support fetching order details

## 0.0.6

### Patch Changes

- Add `updateCartSession` method to `CohostCheckoutContext` for updating general `CartSession` fields.

## 0.0.5

### Patch Changes

- feat(cart): add updateItem and deleteItem methods to CartSession API

## 0.0.4

### Patch Changes

- Added cart sessions endpoints

## 0.0.3

### Patch Changes

- Add `requestWithOverrides()` to `CohostClient` for scoped request customization without affecting global client behavior.
- Add `requestWithOverrides()` method to `CohostClient` to support scoped header and base URL overrides, useful for mocking or testing environments.
