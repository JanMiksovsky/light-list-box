This repository explores recreating the Elix [ListBox](http://elix.org/documentation/ListBox) component without using Shadow DOM.

[Demo](https://janmiksovsky.github.io/light-list-box/)

This `LightListBox` component was quite easy to rebuild from existing Elix mixins. Given the separation of concerns in Elix mixins, only two mixins used by the main `ListBox` had any connection to Shadow DOM. One of those, [SlotContentMixin](http://elix.org/documentation/SlotContentMixin), handled the primary responsibility of defining an element's `content` state, which ultimately defines the set of list items the other mixins are aware of. That mixin defines `content` as coming from the nodes assigned to a slot in an element's shadow tree.

It was relatively easy to create a new mixin, [ChildrenContentMixin](./src/ChildrenContentMixin.js), which obtains `content` instead from an element's light DOM children. That mixin also handles dynamic changes to children — if you programmatically add or remove light DOM children from the list box, it will respond to changes to ensure a consistent state. E.g., if you delete the selected item, it will leave the next item in the list selected.

The other Elix mixins all provide their normal services without modification:

- AriaListMixin. Applies ARIA list semantics for accessibility.
- AttributeMarshallingMixin. Lets you set all properties like `selectedIndex` via attributes like `selected-index`.
- ContentItemsMixin. Filters the set of content elements (defined by `ChildrenContentMixin`, above) to exclude elements that shouldn't be treated as list items. E.g., you can place a `<style>` or `<link>` element inside a list — which are valid essentially anywhere in HTML — and the list box will safely ignore those.
- DirectionSelectionMixin. Lets you move up and down in the list (here, using the keyboard via `KeyboardDirectionMixin`).
- FocusVisibleMixin. Shows the focus when you're using the keyboard; hides it when you're using the mouse.
- ItemsTextMixin. Extracts the text content of items for use by `KeyboardPrefixSelectionMixin`.
- KeyboardDirectionMixin. Lets you navigate with the Up and Down arrow keys and Home/End.
- KeyboardMixin. General keyboard support for the other mixins.
- KeyboardPagedSelectionMixin. Lets you navigate via Page Up/Down.
- KeyboardPrefixSelectionMixin. Lets you navigate by typing the beginning of an item's text.
- ReactiveMixin. Core functional-reactive services for the component.
- SelectedItemTextValueMixin. Defines the component's `value` property as the text of the currently-selected item. Among other things you can set `list.value = "Apple"` to programmatically select the corresponding item.
- SelectionInViewMixin. Ensures the list selection is brought into view when navigating with the keyboard.
- SingleSelectionMixin. Handles basic single-selection semantics.
- TapSelectionMixin. Lets you tap/click to select a list item.

Significantly, this `LightListBox` is built _without_ using the standard Elix [ReactiveElement](http://elix.org/documentation/ReactiveElement) base class. That class includes `ShadowTemplateMixin`, which isn't wanted by this component. Instead, the `LightListBox` code just applies the other two mixins that make up `ReactiveElement`: `AttributeMarshallingMixin` and `ReactiveMixin`.
