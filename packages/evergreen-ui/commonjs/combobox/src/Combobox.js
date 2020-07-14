"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireWildcard(require("ui-box"));

var _autocomplete = require("../../autocomplete");

var _textInput = require("../../text-input");

var _buttons = require("../../buttons");

var _icons = require("../../icons");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Combobox = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Combobox, _PureComponent);

  var _super = _createSuper(Combobox);

  function Combobox(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, Combobox);
    _this = _super.call(this, props, context);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleStateChange", function (changes) {
      if (Object.prototype.hasOwnProperty.call(changes, 'isOpen')) {
        if (!changes.isOpen) {
          _this.setState({
            isOpenedByButton: false
          });
        }
      }
    });
    _this.state = {
      isOpenedByButton: false
    };
    return _this;
  }

  (0, _createClass2["default"])(Combobox, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          items = _this$props.items,
          selectedItem = _this$props.selectedItem,
          initialSelectedItem = _this$props.initialSelectedItem,
          itemToString = _this$props.itemToString,
          width = _this$props.width,
          height = _this$props.height,
          onChange = _this$props.onChange,
          placeholder = _this$props.placeholder,
          inputProps = _this$props.inputProps,
          buttonProps = _this$props.buttonProps,
          openOnFocus = _this$props.openOnFocus,
          autocompleteProps = _this$props.autocompleteProps,
          isLoading = _this$props.isLoading,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["items", "selectedItem", "initialSelectedItem", "itemToString", "width", "height", "onChange", "placeholder", "inputProps", "buttonProps", "openOnFocus", "autocompleteProps", "isLoading"]);
      var disabled = props.disabled || isLoading;
      return _react["default"].createElement(_autocomplete.Autocomplete, (0, _extends2["default"])({
        items: items,
        selectedItem: selectedItem,
        initialSelectedItem: initialSelectedItem,
        itemToString: itemToString,
        onChange: onChange,
        onStateChange: this.handleStateChange,
        isFilterDisabled: this.state.isOpenedByButton
      }, autocompleteProps), function (_ref) {
        var getRef = _ref.getRef,
            isShown = _ref.isShown,
            openMenu = _ref.openMenu,
            inputValue = _ref.inputValue,
            getInputProps = _ref.getInputProps,
            getToggleButtonProps = _ref.getToggleButtonProps,
            clearSelection = _ref.clearSelection;
        return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
          innerRef: function innerRef(ref) {
            return getRef(ref);
          },
          display: "inline-flex",
          width: width
        }, props), _react["default"].createElement(_textInput.TextInput, (0, _extends2["default"])({
          width: 0,
          flex: 1,
          height: height,
          value: inputValue,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          disabled: disabled
        }, getInputProps(_objectSpread({}, inputProps, {
          placeholder: placeholder,
          onFocus: function onFocus() {
            if (openOnFocus) openMenu();
          },
          onChange: function onChange(e) {
            if (_this2.state.isOpenedByButton) {
              _this2.setState({
                isOpenedByButton: false
              });
            }

            if (e.target.value.trim() === '') {
              // Prevent the selected item from sticking around
              clearSelection();
            }
          }
        })))), _react["default"].createElement(_buttons.IconButton, (0, _extends2["default"])({
          color: "muted",
          icon: isLoading ? undefined : _react["default"].createElement(_icons.CaretDownIcon, null),
          appearance: "default",
          height: height,
          marginLeft: -1,
          paddingLeft: isLoading ? 12 : 0,
          paddingRight: 0,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          disabled: disabled,
          isLoading: isLoading
        }, getToggleButtonProps(_objectSpread({}, buttonProps, {
          onClick: function onClick() {
            if (!isShown) {
              _this2.setState({
                isOpenedByButton: true
              });
            }
          }
        })))));
      });
    }
  }]);
  return Combobox;
}(_react.PureComponent);

exports["default"] = Combobox;
Combobox.displayName = "Combobox";
(0, _defineProperty2["default"])(Combobox, "propTypes", _objectSpread({}, _uiBox.dimensions.propTypes, {}, _uiBox.spacing.propTypes, {}, _uiBox.position.propTypes, {}, _uiBox.layout.propTypes, {
  /**
   * The options to show in the menu.
   */
  items: _propTypes["default"].array.isRequired,

  /**
   * The selected item when controlled.
   */
  selectedItem: _propTypes["default"].any,

  /**
   * Function called when value changes.
   */
  onChange: _propTypes["default"].func,

  /**
   * When true, open the autocomplete on focus.
   */
  openOnFocus: _propTypes["default"].bool,

  /**
   * Default selected item when uncontrolled.
   */
  initialSelectedItem: _propTypes["default"].any,

  /**
   * The placeholder text when there is no value present.
   */
  placeholder: _propTypes["default"].string,

  /**
   * In case the array of items is not an array of strings,
   * this function is used on each item to return the string that will be shown on the filter
   */
  itemToString: _propTypes["default"].func,

  /**
   * Properties forwarded to the input. Use with caution.
   */
  inputProps: _propTypes["default"].object,

  /**
   * Properties forwarded to the button. Use with caution.
   */
  buttonProps: _propTypes["default"].object,

  /**
   * Properties forwarded to the autocomplete component. Use with caution.
   */
  autocompleteProps: _propTypes["default"].object,

  /**
   * Makes the input element disabled.
   */
  disabled: _propTypes["default"].bool,

  /**
   * When true, show a loading spinner. This also disables the button.
   */
  isLoading: _propTypes["default"].bool
}));
(0, _defineProperty2["default"])(Combobox, "defaultProps", {
  width: 240,
  openOnFocus: false,
  disabled: false,
  isLoading: false
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21ib2JveC9zcmMvQ29tYm9ib3guanMiXSwibmFtZXMiOlsiQ29tYm9ib3giLCJwcm9wcyIsImNvbnRleHQiLCJjaGFuZ2VzIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaXNPcGVuIiwic2V0U3RhdGUiLCJpc09wZW5lZEJ5QnV0dG9uIiwic3RhdGUiLCJpdGVtcyIsInNlbGVjdGVkSXRlbSIsImluaXRpYWxTZWxlY3RlZEl0ZW0iLCJpdGVtVG9TdHJpbmciLCJ3aWR0aCIsImhlaWdodCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJpbnB1dFByb3BzIiwiYnV0dG9uUHJvcHMiLCJvcGVuT25Gb2N1cyIsImF1dG9jb21wbGV0ZVByb3BzIiwiaXNMb2FkaW5nIiwiZGlzYWJsZWQiLCJoYW5kbGVTdGF0ZUNoYW5nZSIsImdldFJlZiIsImlzU2hvd24iLCJvcGVuTWVudSIsImlucHV0VmFsdWUiLCJnZXRJbnB1dFByb3BzIiwiZ2V0VG9nZ2xlQnV0dG9uUHJvcHMiLCJjbGVhclNlbGVjdGlvbiIsInJlZiIsIm9uRm9jdXMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0cmltIiwidW5kZWZpbmVkIiwib25DbGljayIsIlB1cmVDb21wb25lbnQiLCJkaW1lbnNpb25zIiwicHJvcFR5cGVzIiwic3BhY2luZyIsInBvc2l0aW9uIiwibGF5b3V0IiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwiYW55IiwiZnVuYyIsImJvb2wiLCJzdHJpbmciLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7O0FBK0VuQixvQkFBWUMsS0FBWixFQUFtQkMsT0FBbkIsRUFBNEI7QUFBQTs7QUFBQTtBQUMxQiw4QkFBTUQsS0FBTixFQUFhQyxPQUFi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dkI7OztBQUdBckMsRUFBQUEsWUFBWSxFQUFFbUMsc0JBQVVHLEc7O0FBRXhCOzs7QUFHQWpDLEVBQUFBLFFBQVEsRUFBRThCLHNCQUFVSSxJOztBQUVwQjs7O0FBR0E5QixFQUFBQSxXQUFXLEVBQUUwQixzQkFBVUssSTs7QUFFdkI7OztBQUdBdkMsRUFBQUEsbUJBQW1CLEVBQUVrQyxzQkFBVUcsRzs7QUFFL0I7OztBQUdBaEMsRUFBQUEsV0FBVyxFQUFFNkIsc0JBQVVNLE07O0FBRXZCOzs7O0FBSUF2QyxFQUFBQSxZQUFZLEVBQUVpQyxzQkFBVUksSTs7QUFFeEI7OztBQUdBaEMsRUFBQUEsVUFBVSxFQUFFNEIsc0JBQVVPLE07O0FBRXRCOzs7QUFHQWxDLEVBQUFBLFdBQVcsRUFBRTJCLHNCQUFVTyxNOztBQUV2Qjs7O0FBR0FoQyxFQUFBQSxpQkFBaUIsRUFBRXlCLHNCQUFVTyxNOztBQUU3Qjs7O0FBR0E5QixFQUFBQSxRQUFRLEVBQUV1QixzQkFBVUssSTs7QUFFcEI7OztBQUdBN0IsRUFBQUEsU0FBUyxFQUFFd0Isc0JBQVVLOztpQ0FyRUpyRCxRLGtCQXdFRztBQUNwQmdCLEVBQUFBLEtBQUssRUFBRSxHQURhO0FBRXBCTSxFQUFBQSxXQUFXLEVBQUUsS0FGTztBQUdwQkcsRUFBQUEsUUFBUSxFQUFFLEtBSFU7QUFJcEJELEVBQUFBLFNBQVMsRUFBRTtBQUpTLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCwgeyBkaW1lbnNpb25zLCBzcGFjaW5nLCBwb3NpdGlvbiwgbGF5b3V0IH0gZnJvbSAndWktYm94J1xuaW1wb3J0IHsgQXV0b2NvbXBsZXRlIH0gZnJvbSAnLi4vLi4vYXV0b2NvbXBsZXRlJ1xuaW1wb3J0IHsgVGV4dElucHV0IH0gZnJvbSAnLi4vLi4vdGV4dC1pbnB1dCdcbmltcG9ydCB7IEljb25CdXR0b24gfSBmcm9tICcuLi8uLi9idXR0b25zJ1xuaW1wb3J0IHsgQ2FyZXREb3duSWNvbiB9IGZyb20gJy4uLy4uL2ljb25zJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21ib2JveCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIEltcGxlbWVudHMgc29tZSBBUElzIGZyb20gdWktYm94LlxuICAgICAqL1xuICAgIC4uLmRpbWVuc2lvbnMucHJvcFR5cGVzLFxuICAgIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuICAgIC4uLnBvc2l0aW9uLnByb3BUeXBlcyxcbiAgICAuLi5sYXlvdXQucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbnMgdG8gc2hvdyBpbiB0aGUgbWVudS5cbiAgICAgKi9cbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VsZWN0ZWQgaXRlbSB3aGVuIGNvbnRyb2xsZWQuXG4gICAgICovXG4gICAgc2VsZWN0ZWRJdGVtOiBQcm9wVHlwZXMuYW55LFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHdoZW4gdmFsdWUgY2hhbmdlcy5cbiAgICAgKi9cbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIG9wZW4gdGhlIGF1dG9jb21wbGV0ZSBvbiBmb2N1cy5cbiAgICAgKi9cbiAgICBvcGVuT25Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBEZWZhdWx0IHNlbGVjdGVkIGl0ZW0gd2hlbiB1bmNvbnRyb2xsZWQuXG4gICAgICovXG4gICAgaW5pdGlhbFNlbGVjdGVkSXRlbTogUHJvcFR5cGVzLmFueSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBwbGFjZWhvbGRlciB0ZXh0IHdoZW4gdGhlcmUgaXMgbm8gdmFsdWUgcHJlc2VudC5cbiAgICAgKi9cbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEluIGNhc2UgdGhlIGFycmF5IG9mIGl0ZW1zIGlzIG5vdCBhbiBhcnJheSBvZiBzdHJpbmdzLFxuICAgICAqIHRoaXMgZnVuY3Rpb24gaXMgdXNlZCBvbiBlYWNoIGl0ZW0gdG8gcmV0dXJuIHRoZSBzdHJpbmcgdGhhdCB3aWxsIGJlIHNob3duIG9uIHRoZSBmaWx0ZXJcbiAgICAgKi9cbiAgICBpdGVtVG9TdHJpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogUHJvcGVydGllcyBmb3J3YXJkZWQgdG8gdGhlIGlucHV0LiBVc2Ugd2l0aCBjYXV0aW9uLlxuICAgICAqL1xuICAgIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0aWVzIGZvcndhcmRlZCB0byB0aGUgYnV0dG9uLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICAgICAqL1xuICAgIGJ1dHRvblByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgLyoqXG4gICAgICogUHJvcGVydGllcyBmb3J3YXJkZWQgdG8gdGhlIGF1dG9jb21wbGV0ZSBjb21wb25lbnQuIFVzZSB3aXRoIGNhdXRpb24uXG4gICAgICovXG4gICAgYXV0b2NvbXBsZXRlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvKipcbiAgICAgKiBNYWtlcyB0aGUgaW5wdXQgZWxlbWVudCBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHNob3cgYSBsb2FkaW5nIHNwaW5uZXIuIFRoaXMgYWxzbyBkaXNhYmxlcyB0aGUgYnV0dG9uLlxuICAgICAqL1xuICAgIGlzTG9hZGluZzogUHJvcFR5cGVzLmJvb2xcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgd2lkdGg6IDI0MCxcbiAgICBvcGVuT25Gb2N1czogZmFsc2UsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGlzTG9hZGluZzogZmFsc2VcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzT3BlbmVkQnlCdXR0b246IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU3RhdGVDaGFuZ2UgPSBjaGFuZ2VzID0+IHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNoYW5nZXMsICdpc09wZW4nKSkge1xuICAgICAgaWYgKCFjaGFuZ2VzLmlzT3Blbikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuZWRCeUJ1dHRvbjogZmFsc2UgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaXRlbXMsXG4gICAgICBzZWxlY3RlZEl0ZW0sXG4gICAgICBpbml0aWFsU2VsZWN0ZWRJdGVtLFxuICAgICAgaXRlbVRvU3RyaW5nLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgaW5wdXRQcm9wcyxcbiAgICAgIGJ1dHRvblByb3BzLFxuICAgICAgb3Blbk9uRm9jdXMsXG4gICAgICBhdXRvY29tcGxldGVQcm9wcyxcbiAgICAgIGlzTG9hZGluZyxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQgfHwgaXNMb2FkaW5nXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEF1dG9jb21wbGV0ZVxuICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgIHNlbGVjdGVkSXRlbT17c2VsZWN0ZWRJdGVtfVxuICAgICAgICBpbml0aWFsU2VsZWN0ZWRJdGVtPXtpbml0aWFsU2VsZWN0ZWRJdGVtfVxuICAgICAgICBpdGVtVG9TdHJpbmc9e2l0ZW1Ub1N0cmluZ31cbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICBvblN0YXRlQ2hhbmdlPXt0aGlzLmhhbmRsZVN0YXRlQ2hhbmdlfVxuICAgICAgICBpc0ZpbHRlckRpc2FibGVkPXt0aGlzLnN0YXRlLmlzT3BlbmVkQnlCdXR0b259XG4gICAgICAgIHsuLi5hdXRvY29tcGxldGVQcm9wc31cbiAgICAgID5cbiAgICAgICAgeyh7XG4gICAgICAgICAgZ2V0UmVmLFxuICAgICAgICAgIGlzU2hvd24sXG4gICAgICAgICAgb3Blbk1lbnUsXG4gICAgICAgICAgaW5wdXRWYWx1ZSxcbiAgICAgICAgICBnZXRJbnB1dFByb3BzLFxuICAgICAgICAgIGdldFRvZ2dsZUJ1dHRvblByb3BzLFxuICAgICAgICAgIGNsZWFyU2VsZWN0aW9uXG4gICAgICAgIH0pID0+IChcbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBpbm5lclJlZj17cmVmID0+IGdldFJlZihyZWYpfVxuICAgICAgICAgICAgZGlzcGxheT1cImlubGluZS1mbGV4XCJcbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgIHdpZHRoPXswfVxuICAgICAgICAgICAgICBmbGV4PXsxfVxuICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzPXswfVxuICAgICAgICAgICAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1cz17MH1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgICB7Li4uZ2V0SW5wdXRQcm9wcyh7XG4gICAgICAgICAgICAgICAgLi4uaW5wdXRQcm9wcyxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcixcbiAgICAgICAgICAgICAgICBvbkZvY3VzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAob3Blbk9uRm9jdXMpIG9wZW5NZW51KClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBlID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmlzT3BlbmVkQnlCdXR0b24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgaXNPcGVuZWRCeUJ1dHRvbjogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUHJldmVudCB0aGUgc2VsZWN0ZWQgaXRlbSBmcm9tIHN0aWNraW5nIGFyb3VuZFxuICAgICAgICAgICAgICAgICAgICBjbGVhclNlbGVjdGlvbigpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICBjb2xvcj1cIm11dGVkXCJcbiAgICAgICAgICAgICAgaWNvbj17aXNMb2FkaW5nID8gdW5kZWZpbmVkIDogPENhcmV0RG93bkljb24gLz59XG4gICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ9ey0xfVxuICAgICAgICAgICAgICBwYWRkaW5nTGVmdD17aXNMb2FkaW5nID8gMTIgOiAwfVxuICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ9ezB9XG4gICAgICAgICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM9ezB9XG4gICAgICAgICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM9ezB9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9XG4gICAgICAgICAgICAgIHsuLi5nZXRUb2dnbGVCdXR0b25Qcm9wcyh7XG4gICAgICAgICAgICAgICAgLi4uYnV0dG9uUHJvcHMsXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKCFpc1Nob3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW5lZEJ5QnV0dG9uOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICA8L0F1dG9jb21wbGV0ZT5cbiAgICApXG4gIH1cbn1cbiJdfQ==