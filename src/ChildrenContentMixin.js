import * as internal from "../node_modules/elix/src/base/internal.js";

/**
 * Defines a component's `content` state as its light DOM children.
 *
 * This is a light DOM analogue of Elix's SlotContentMixin, which obtains
 * `content` state from the elements assigned to a Shadow DOM slot.
 *
 * If the component's children change dynamically, the mixin will update
 * the `content` state with new elements.
 *
 * This mixin is designed to work with ContentItemsMixin, which can convert a
 * raw set of elements into a set of items. For details on how items are a
 * subset of content, see https://component.kitchen/elix/ContentItemsMixin.
 */
export default function ChildrenContentMixin(base) {
  class ChildrenContent extends base {
    constructor() {
      super();
      // Use a MutationObserver to obtain new children if they change.
      const observer = new MutationObserver(() => {
        this[internal.setState]({
          content: [...this.children],
        });
      });
      observer.observe(this, {
        characterData: true,
        childList: true,
      });
    }

    connectedCallback() {
      // Obtain initial content before we render.
      this[internal.setState]({
        content: [...this.children],
      });
      super.connectedCallback();
    }

    get [internal.defaultState]() {
      return Object.assign(super[internal.defaultState] || {}, {
        content: null,
      });
    }
  }

  return ChildrenContent;
}
