import FocusVisibleMixin from "../node_modules/elix/src/base/FocusVisibleMixin.js";
import AriaListMixin from "../node_modules/elix/src/base/AriaListMixin.js";
import AttributeMarshallingMixin from "../node_modules/elix/src/core/AttributeMarshallingMixin.js";
import ChildrenContentMixin from "./ChildrenContentMixin.js";
import ContentItemsMixin from "../node_modules/elix/src/base/ContentItemsMixin.js";
import DirectionSelectionMixin from "../node_modules/elix/src/base/DirectionSelectionMixin.js";
import ItemsTextMixin from "../node_modules/elix/src/base/ItemsTextMixin.js";
import KeyboardDirectionMixin from "../node_modules/elix/src/base/KeyboardDirectionMixin.js";
import KeyboardMixin from "../node_modules/elix/src/base/KeyboardMixin.js";
import KeyboardPagedSelectionMixin from "../node_modules/elix/src/base/KeyboardPagedSelectionMixin.js";
import KeyboardPrefixSelectionMixin from "../node_modules/elix/src/base/KeyboardPrefixSelectionMixin.js";
import ReactiveMixin from "../node_modules/elix/src/core/ReactiveMixin.js";
import SelectedItemTextValueMixin from "../node_modules/elix/src/base/SelectedItemTextValueMixin.js";
import SelectionInViewMixin from "../node_modules/elix/src/base/SelectionInViewMixin.js";
import SingleSelectionMixin from "../node_modules/elix/src/base/SingleSelectionMixin.js";
import TapSelectionMixin from "../node_modules/elix/src/base/TapSelectionMixin.js";

const Base = AriaListMixin(
  AttributeMarshallingMixin(
    ChildrenContentMixin(
      ContentItemsMixin(
        DirectionSelectionMixin(
          FocusVisibleMixin(
            ItemsTextMixin(
              KeyboardMixin(
                KeyboardDirectionMixin(
                  KeyboardPagedSelectionMixin(
                    KeyboardPrefixSelectionMixin(
                      ReactiveMixin(
                        SelectedItemTextValueMixin(
                          SelectionInViewMixin(
                            SingleSelectionMixin(TapSelectionMixin(HTMLElement))
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  )
);

export default class LightListBox extends Base {}

customElements.define("light-list-box", LightListBox);
