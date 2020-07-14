import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box, { dimensions, spacing, position, layout } from 'ui-box';
import { Autocomplete } from '../../autocomplete';
import { TextInput } from '../../text-input';
import { IconButton } from '../../buttons';
import { CaretDownIcon } from './CaretDownIcon';

var Combobox = /*#__PURE__*/function (_PureComponent) {
  _inherits(Combobox, _PureComponent);

  var _super = _createSuper(Combobox);

  function Combobox(props, context) {
    var _this;

    _classCallCheck(this, Combobox);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "handleStateChange", function (changes) {
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

  _createClass(Combobox, [{
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
          props = _objectWithoutProperties(_this$props, ["items", "selectedItem", "initialSelectedItem", "itemToString", "width", "height", "onChange", "placeholder", "inputProps", "buttonProps", "openOnFocus", "autocompleteProps", "isLoading"]);

      var disabled = props.disabled || isLoading;
      return React.createElement(Autocomplete, _extends({
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
        return React.createElement(Box, _extends({
          innerRef: function innerRef(ref) {
            return getRef(ref);
          },
          display: "inline-flex",
          width: width
        }, props), React.createElement(TextInput, _extends({
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
        })))), React.createElement(IconButton, _extends({
          color: "muted",
          icon: isLoading ? undefined : React.createElement(CaretDownIcon, null),
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
}(PureComponent);

Combobox.displayName = "Combobox";

_defineProperty(Combobox, "propTypes", _objectSpread({}, dimensions.propTypes, {}, spacing.propTypes, {}, position.propTypes, {}, layout.propTypes, {
  /**
   * The options to show in the menu.
   */
  items: PropTypes.array.isRequired,

  /**
   * The selected item when controlled.
   */
  selectedItem: PropTypes.any,

  /**
   * Function called when value changes.
   */
  onChange: PropTypes.func,

  /**
   * When true, open the autocomplete on focus.
   */
  openOnFocus: PropTypes.bool,

  /**
   * Default selected item when uncontrolled.
   */
  initialSelectedItem: PropTypes.any,

  /**
   * The placeholder text when there is no value present.
   */
  placeholder: PropTypes.string,

  /**
   * In case the array of items is not an array of strings,
   * this function is used on each item to return the string that will be shown on the filter
   */
  itemToString: PropTypes.func,

  /**
   * Properties forwarded to the input. Use with caution.
   */
  inputProps: PropTypes.object,

  /**
   * Properties forwarded to the button. Use with caution.
   */
  buttonProps: PropTypes.object,

  /**
   * Properties forwarded to the autocomplete component. Use with caution.
   */
  autocompleteProps: PropTypes.object,

  /**
   * Makes the input element disabled.
   */
  disabled: PropTypes.bool,

  /**
   * When true, show a loading spinner. This also disables the button.
   */
  isLoading: PropTypes.bool
}));

_defineProperty(Combobox, "defaultProps", {
  width: 240,
  openOnFocus: false,
  disabled: false,
  isLoading: false
});

export { Combobox as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21ib2JveC9zcmMvQ29tYm9ib3guanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiQm94IiwiZGltZW5zaW9ucyIsInNwYWNpbmciLCJwb3NpdGlvbiIsImxheW91dCIsIkF1dG9jb21wbGV0ZSIsIlRleHRJbnB1dCIsIkljb25CdXR0b24iLCJDYXJldERvd25JY29uIiwiQ29tYm9ib3giLCJwcm9wcyIsImNvbnRleHQiLCJjaGFuZ2VzIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaXNPcGVuIiwic2V0U3RhdGUiLCJpc09wZW5lZEJ5QnV0dG9uIiwic3RhdGUiLCJpdGVtcyIsInNlbGVjdGVkSXRlbSIsImluaXRpYWxTZWxlY3RlZEl0ZW0iLCJpdGVtVG9TdHJpbmciLCJ3aWR0aCIsImhlaWdodCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJpbnB1dFByb3BzIiwiYnV0dG9uUHJvcHMiLCJvcGVuT25Gb2N1cyIsImF1dG9jb21wbGV0ZVByb3BzIiwiaXNMb2FkaW5nIiwiZGlzYWJsZWQiLCJoYW5kbGVTdGF0ZUNoYW5nZSIsImdldFJlZiIsImlzU2hvd24iLCJvcGVuTWVudSIsImlucHV0VmFsdWUiLCJnZXRJbnB1dFByb3BzIiwiZ2V0VG9nZ2xlQnV0dG9uUHJvcHMiLCJjbGVhclNlbGVjdGlvbiIsInJlZiIsIm9uRm9jdXMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0cmltIiwidW5kZWZpbmVkIiwib25DbGljayIsInByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCIsImFueSIsImZ1bmMiLCJib29sIiwic3RyaW5nIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxHQUFQLElBQWNDLFVBQWQsRUFBMEJDLE9BQTFCLEVBQW1DQyxRQUFuQyxFQUE2Q0MsTUFBN0MsUUFBMkQsUUFBM0Q7QUFDQSxTQUFTQyxZQUFULFFBQTZCLG9CQUE3QjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsa0JBQTFCO0FBQ0EsU0FBU0MsVUFBVCxRQUEyQixlQUEzQjtBQUNBLFNBQVNDLGFBQVQsUUFBOEIsYUFBOUI7O0lBRXFCQyxROzs7OztBQStFbkIsb0JBQVlDLEtBQVosRUFBbUJDLE9BQW5CLEVBQTRCO0FBQUE7O0FBQUE7O0FBQzFCLDhCQUFNRCxLQUFOLEVBQWFDLE9BQWI7O0FBRDBCLHdFQU9SLFVBQUFDLE9BQU8sRUFBSTtBQUM3QixVQUFJQyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ0osT0FBckMsRUFBOEMsUUFBOUMsQ0FBSixFQUE2RDtBQUMzRCxZQUFJLENBQUNBLE9BQU8sQ0FBQ0ssTUFBYixFQUFxQjtBQUNuQixnQkFBS0MsUUFBTCxDQUFjO0FBQUVDLFlBQUFBLGdCQUFnQixFQUFFO0FBQXBCLFdBQWQ7QUFDRDtBQUNGO0FBQ0YsS0FiMkI7O0FBRTFCLFVBQUtDLEtBQUwsR0FBYTtBQUNYRCxNQUFBQSxnQkFBZ0IsRUFBRTtBQURQLEtBQWI7QUFGMEI7QUFLM0I7Ozs7NkJBVVE7QUFBQTs7QUFBQSx3QkFnQkgsS0FBS1QsS0FoQkY7QUFBQSxVQUVMVyxLQUZLLGVBRUxBLEtBRks7QUFBQSxVQUdMQyxZQUhLLGVBR0xBLFlBSEs7QUFBQSxVQUlMQyxtQkFKSyxlQUlMQSxtQkFKSztBQUFBLFVBS0xDLFlBTEssZUFLTEEsWUFMSztBQUFBLFVBTUxDLEtBTkssZUFNTEEsS0FOSztBQUFBLFVBT0xDLE1BUEssZUFPTEEsTUFQSztBQUFBLFVBUUxDLFFBUkssZUFRTEEsUUFSSztBQUFBLFVBU0xDLFdBVEssZUFTTEEsV0FUSztBQUFBLFVBVUxDLFVBVkssZUFVTEEsVUFWSztBQUFBLFVBV0xDLFdBWEssZUFXTEEsV0FYSztBQUFBLFVBWUxDLFdBWkssZUFZTEEsV0FaSztBQUFBLFVBYUxDLGlCQWJLLGVBYUxBLGlCQWJLO0FBQUEsVUFjTEMsU0FkSyxlQWNMQSxTQWRLO0FBQUEsVUFlRnZCLEtBZkU7O0FBa0JQLFVBQU13QixRQUFRLEdBQUd4QixLQUFLLENBQUN3QixRQUFOLElBQWtCRCxTQUFuQztBQUVBLGFBQ0Usb0JBQUMsWUFBRDtBQUNFLFFBQUEsS0FBSyxFQUFFWixLQURUO0FBRUUsUUFBQSxZQUFZLEVBQUVDLFlBRmhCO0FBR0UsUUFBQSxtQkFBbUIsRUFBRUMsbUJBSHZCO0FBSUUsUUFBQSxZQUFZLEVBQUVDLFlBSmhCO0FBS0UsUUFBQSxRQUFRLEVBQUVHLFFBTFo7QUFNRSxRQUFBLGFBQWEsRUFBRSxLQUFLUSxpQkFOdEI7QUFPRSxRQUFBLGdCQUFnQixFQUFFLEtBQUtmLEtBQUwsQ0FBV0Q7QUFQL0IsU0FRTWEsaUJBUk4sR0FVRztBQUFBLFlBQ0NJLE1BREQsUUFDQ0EsTUFERDtBQUFBLFlBRUNDLE9BRkQsUUFFQ0EsT0FGRDtBQUFBLFlBR0NDLFFBSEQsUUFHQ0EsUUFIRDtBQUFBLFlBSUNDLFVBSkQsUUFJQ0EsVUFKRDtBQUFBLFlBS0NDLGFBTEQsUUFLQ0EsYUFMRDtBQUFBLFlBTUNDLG9CQU5ELFFBTUNBLG9CQU5EO0FBQUEsWUFPQ0MsY0FQRCxRQU9DQSxjQVBEO0FBQUEsZUFTQyxvQkFBQyxHQUFEO0FBQ0UsVUFBQSxRQUFRLEVBQUUsa0JBQUFDLEdBQUc7QUFBQSxtQkFBSVAsTUFBTSxDQUFDTyxHQUFELENBQVY7QUFBQSxXQURmO0FBRUUsVUFBQSxPQUFPLEVBQUMsYUFGVjtBQUdFLFVBQUEsS0FBSyxFQUFFbEI7QUFIVCxXQUlNZixLQUpOLEdBTUUsb0JBQUMsU0FBRDtBQUNFLFVBQUEsS0FBSyxFQUFFLENBRFQ7QUFFRSxVQUFBLElBQUksRUFBRSxDQUZSO0FBR0UsVUFBQSxNQUFNLEVBQUVnQixNQUhWO0FBSUUsVUFBQSxLQUFLLEVBQUVhLFVBSlQ7QUFLRSxVQUFBLG9CQUFvQixFQUFFLENBTHhCO0FBTUUsVUFBQSx1QkFBdUIsRUFBRSxDQU4zQjtBQU9FLFVBQUEsUUFBUSxFQUFFTDtBQVBaLFdBUU1NLGFBQWEsbUJBQ1pYLFVBRFk7QUFFZkQsVUFBQUEsV0FBVyxFQUFYQSxXQUZlO0FBR2ZnQixVQUFBQSxPQUFPLEVBQUUsbUJBQU07QUFDYixnQkFBSWIsV0FBSixFQUFpQk8sUUFBUTtBQUMxQixXQUxjO0FBTWZYLFVBQUFBLFFBQVEsRUFBRSxrQkFBQWtCLENBQUMsRUFBSTtBQUNiLGdCQUFJLE1BQUksQ0FBQ3pCLEtBQUwsQ0FBV0QsZ0JBQWYsRUFBaUM7QUFDL0IsY0FBQSxNQUFJLENBQUNELFFBQUwsQ0FBYztBQUNaQyxnQkFBQUEsZ0JBQWdCLEVBQUU7QUFETixlQUFkO0FBR0Q7O0FBRUQsZ0JBQUkwQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlQyxJQUFmLE9BQTBCLEVBQTlCLEVBQWtDO0FBQ2hDO0FBQ0FOLGNBQUFBLGNBQWM7QUFDZjtBQUNGO0FBakJjLFdBUm5CLEVBTkYsRUFrQ0Usb0JBQUMsVUFBRDtBQUNFLFVBQUEsS0FBSyxFQUFDLE9BRFI7QUFFRSxVQUFBLElBQUksRUFBRVQsU0FBUyxHQUFHZ0IsU0FBSCxHQUFlLG9CQUFDLGFBQUQsT0FGaEM7QUFHRSxVQUFBLFVBQVUsRUFBQyxTQUhiO0FBSUUsVUFBQSxNQUFNLEVBQUV2QixNQUpWO0FBS0UsVUFBQSxVQUFVLEVBQUUsQ0FBQyxDQUxmO0FBTUUsVUFBQSxXQUFXLEVBQUVPLFNBQVMsR0FBRyxFQUFILEdBQVEsQ0FOaEM7QUFPRSxVQUFBLFlBQVksRUFBRSxDQVBoQjtBQVFFLFVBQUEsbUJBQW1CLEVBQUUsQ0FSdkI7QUFTRSxVQUFBLHNCQUFzQixFQUFFLENBVDFCO0FBVUUsVUFBQSxRQUFRLEVBQUVDLFFBVlo7QUFXRSxVQUFBLFNBQVMsRUFBRUQ7QUFYYixXQVlNUSxvQkFBb0IsbUJBQ25CWCxXQURtQjtBQUV0Qm9CLFVBQUFBLE9BQU8sRUFBRSxtQkFBTTtBQUNiLGdCQUFJLENBQUNiLE9BQUwsRUFBYztBQUNaLGNBQUEsTUFBSSxDQUFDbkIsUUFBTCxDQUFjO0FBQUVDLGdCQUFBQSxnQkFBZ0IsRUFBRTtBQUFwQixlQUFkO0FBQ0Q7QUFDRjtBQU5xQixXQVoxQixFQWxDRixDQVREO0FBQUEsT0FWSCxDQURGO0FBK0VEOzs7O0VBak1tQ3JCLGE7O0FBQWpCVyxROztnQkFBQUEsUSxpQ0FLZFIsVUFBVSxDQUFDa0QsUyxNQUNYakQsT0FBTyxDQUFDaUQsUyxNQUNSaEQsUUFBUSxDQUFDZ0QsUyxNQUNUL0MsTUFBTSxDQUFDK0MsUztBQUVWOzs7QUFHQTlCLEVBQUFBLEtBQUssRUFBRXRCLFNBQVMsQ0FBQ3FELEtBQVYsQ0FBZ0JDLFU7O0FBRXZCOzs7QUFHQS9CLEVBQUFBLFlBQVksRUFBRXZCLFNBQVMsQ0FBQ3VELEc7O0FBRXhCOzs7QUFHQTNCLEVBQUFBLFFBQVEsRUFBRTVCLFNBQVMsQ0FBQ3dELEk7O0FBRXBCOzs7QUFHQXhCLEVBQUFBLFdBQVcsRUFBRWhDLFNBQVMsQ0FBQ3lELEk7O0FBRXZCOzs7QUFHQWpDLEVBQUFBLG1CQUFtQixFQUFFeEIsU0FBUyxDQUFDdUQsRzs7QUFFL0I7OztBQUdBMUIsRUFBQUEsV0FBVyxFQUFFN0IsU0FBUyxDQUFDMEQsTTs7QUFFdkI7Ozs7QUFJQWpDLEVBQUFBLFlBQVksRUFBRXpCLFNBQVMsQ0FBQ3dELEk7O0FBRXhCOzs7QUFHQTFCLEVBQUFBLFVBQVUsRUFBRTlCLFNBQVMsQ0FBQzJELE07O0FBRXRCOzs7QUFHQTVCLEVBQUFBLFdBQVcsRUFBRS9CLFNBQVMsQ0FBQzJELE07O0FBRXZCOzs7QUFHQTFCLEVBQUFBLGlCQUFpQixFQUFFakMsU0FBUyxDQUFDMkQsTTs7QUFFN0I7OztBQUdBeEIsRUFBQUEsUUFBUSxFQUFFbkMsU0FBUyxDQUFDeUQsSTs7QUFFcEI7OztBQUdBdkIsRUFBQUEsU0FBUyxFQUFFbEMsU0FBUyxDQUFDeUQ7OztnQkFyRUovQyxRLGtCQXdFRztBQUNwQmdCLEVBQUFBLEtBQUssRUFBRSxHQURhO0FBRXBCTSxFQUFBQSxXQUFXLEVBQUUsS0FGTztBQUdwQkcsRUFBQUEsUUFBUSxFQUFFLEtBSFU7QUFJcEJELEVBQUFBLFNBQVMsRUFBRTtBQUpTLEM7O1NBeEVIeEIsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94LCB7IGRpbWVuc2lvbnMsIHNwYWNpbmcsIHBvc2l0aW9uLCBsYXlvdXQgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBBdXRvY29tcGxldGUgfSBmcm9tICcuLi8uLi9hdXRvY29tcGxldGUnXG5pbXBvcnQgeyBUZXh0SW5wdXQgfSBmcm9tICcuLi8uLi90ZXh0LWlucHV0J1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gJy4uLy4uL2J1dHRvbnMnXG5pbXBvcnQgeyBDYXJldERvd25JY29uIH0gZnJvbSAnLi4vLi4vaWNvbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbWJvYm94IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogSW1wbGVtZW50cyBzb21lIEFQSXMgZnJvbSB1aS1ib3guXG4gICAgICovXG4gICAgLi4uZGltZW5zaW9ucy5wcm9wVHlwZXMsXG4gICAgLi4uc3BhY2luZy5wcm9wVHlwZXMsXG4gICAgLi4ucG9zaXRpb24ucHJvcFR5cGVzLFxuICAgIC4uLmxheW91dC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9ucyB0byBzaG93IGluIHRoZSBtZW51LlxuICAgICAqL1xuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWxlY3RlZCBpdGVtIHdoZW4gY29udHJvbGxlZC5cbiAgICAgKi9cbiAgICBzZWxlY3RlZEl0ZW06IFByb3BUeXBlcy5hbnksXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiB2YWx1ZSBjaGFuZ2VzLlxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgb3BlbiB0aGUgYXV0b2NvbXBsZXRlIG9uIGZvY3VzLlxuICAgICAqL1xuICAgIG9wZW5PbkZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIERlZmF1bHQgc2VsZWN0ZWQgaXRlbSB3aGVuIHVuY29udHJvbGxlZC5cbiAgICAgKi9cbiAgICBpbml0aWFsU2VsZWN0ZWRJdGVtOiBQcm9wVHlwZXMuYW55LFxuXG4gICAgLyoqXG4gICAgICogVGhlIHBsYWNlaG9sZGVyIHRleHQgd2hlbiB0aGVyZSBpcyBubyB2YWx1ZSBwcmVzZW50LlxuICAgICAqL1xuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogSW4gY2FzZSB0aGUgYXJyYXkgb2YgaXRlbXMgaXMgbm90IGFuIGFycmF5IG9mIHN0cmluZ3MsXG4gICAgICogdGhpcyBmdW5jdGlvbiBpcyB1c2VkIG9uIGVhY2ggaXRlbSB0byByZXR1cm4gdGhlIHN0cmluZyB0aGF0IHdpbGwgYmUgc2hvd24gb24gdGhlIGZpbHRlclxuICAgICAqL1xuICAgIGl0ZW1Ub1N0cmluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0aWVzIGZvcndhcmRlZCB0byB0aGUgaW5wdXQuIFVzZSB3aXRoIGNhdXRpb24uXG4gICAgICovXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnRpZXMgZm9yd2FyZGVkIHRvIHRoZSBidXR0b24uIFVzZSB3aXRoIGNhdXRpb24uXG4gICAgICovXG4gICAgYnV0dG9uUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0aWVzIGZvcndhcmRlZCB0byB0aGUgYXV0b2NvbXBsZXRlIGNvbXBvbmVudC4gVXNlIHdpdGggY2F1dGlvbi5cbiAgICAgKi9cbiAgICBhdXRvY29tcGxldGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8qKlxuICAgICAqIE1ha2VzIHRoZSBpbnB1dCBlbGVtZW50IGRpc2FibGVkLlxuICAgICAqL1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgc2hvdyBhIGxvYWRpbmcgc3Bpbm5lci4gVGhpcyBhbHNvIGRpc2FibGVzIHRoZSBidXR0b24uXG4gICAgICovXG4gICAgaXNMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB3aWR0aDogMjQwLFxuICAgIG9wZW5PbkZvY3VzOiBmYWxzZSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaXNMb2FkaW5nOiBmYWxzZVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dClcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuZWRCeUJ1dHRvbjogZmFsc2VcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTdGF0ZUNoYW5nZSA9IGNoYW5nZXMgPT4ge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY2hhbmdlcywgJ2lzT3BlbicpKSB7XG4gICAgICBpZiAoIWNoYW5nZXMuaXNPcGVuKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW5lZEJ5QnV0dG9uOiBmYWxzZSB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpdGVtcyxcbiAgICAgIHNlbGVjdGVkSXRlbSxcbiAgICAgIGluaXRpYWxTZWxlY3RlZEl0ZW0sXG4gICAgICBpdGVtVG9TdHJpbmcsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICBpbnB1dFByb3BzLFxuICAgICAgYnV0dG9uUHJvcHMsXG4gICAgICBvcGVuT25Gb2N1cyxcbiAgICAgIGF1dG9jb21wbGV0ZVByb3BzLFxuICAgICAgaXNMb2FkaW5nLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCB8fCBpc0xvYWRpbmdcblxuICAgIHJldHVybiAoXG4gICAgICA8QXV0b2NvbXBsZXRlXG4gICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgc2VsZWN0ZWRJdGVtPXtzZWxlY3RlZEl0ZW19XG4gICAgICAgIGluaXRpYWxTZWxlY3RlZEl0ZW09e2luaXRpYWxTZWxlY3RlZEl0ZW19XG4gICAgICAgIGl0ZW1Ub1N0cmluZz17aXRlbVRvU3RyaW5nfVxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgIG9uU3RhdGVDaGFuZ2U9e3RoaXMuaGFuZGxlU3RhdGVDaGFuZ2V9XG4gICAgICAgIGlzRmlsdGVyRGlzYWJsZWQ9e3RoaXMuc3RhdGUuaXNPcGVuZWRCeUJ1dHRvbn1cbiAgICAgICAgey4uLmF1dG9jb21wbGV0ZVByb3BzfVxuICAgICAgPlxuICAgICAgICB7KHtcbiAgICAgICAgICBnZXRSZWYsXG4gICAgICAgICAgaXNTaG93bixcbiAgICAgICAgICBvcGVuTWVudSxcbiAgICAgICAgICBpbnB1dFZhbHVlLFxuICAgICAgICAgIGdldElucHV0UHJvcHMsXG4gICAgICAgICAgZ2V0VG9nZ2xlQnV0dG9uUHJvcHMsXG4gICAgICAgICAgY2xlYXJTZWxlY3Rpb25cbiAgICAgICAgfSkgPT4gKFxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGlubmVyUmVmPXtyZWYgPT4gZ2V0UmVmKHJlZil9XG4gICAgICAgICAgICBkaXNwbGF5PVwiaW5saW5lLWZsZXhcIlxuICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgICAgd2lkdGg9ezB9XG4gICAgICAgICAgICAgIGZsZXg9ezF9XG4gICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM9ezB9XG4gICAgICAgICAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzPXswfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICAgIHsuLi5nZXRJbnB1dFByb3BzKHtcbiAgICAgICAgICAgICAgICAuLi5pbnB1dFByb3BzLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICAgIG9uRm9jdXM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChvcGVuT25Gb2N1cykgb3Blbk1lbnUoKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IGUgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNPcGVuZWRCeUJ1dHRvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICBpc09wZW5lZEJ5QnV0dG9uOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IHRoZSBzZWxlY3RlZCBpdGVtIGZyb20gc3RpY2tpbmcgYXJvdW5kXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyU2VsZWN0aW9uKClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIGNvbG9yPVwibXV0ZWRcIlxuICAgICAgICAgICAgICBpY29uPXtpc0xvYWRpbmcgPyB1bmRlZmluZWQgOiA8Q2FyZXREb3duSWNvbiAvPn1cbiAgICAgICAgICAgICAgYXBwZWFyYW5jZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgICAgbWFyZ2luTGVmdD17LTF9XG4gICAgICAgICAgICAgIHBhZGRpbmdMZWZ0PXtpc0xvYWRpbmcgPyAxMiA6IDB9XG4gICAgICAgICAgICAgIHBhZGRpbmdSaWdodD17MH1cbiAgICAgICAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1cz17MH1cbiAgICAgICAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1cz17MH1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgICBpc0xvYWRpbmc9e2lzTG9hZGluZ31cbiAgICAgICAgICAgICAgey4uLmdldFRvZ2dsZUJ1dHRvblByb3BzKHtcbiAgICAgICAgICAgICAgICAuLi5idXR0b25Qcm9wcyxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoIWlzU2hvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbmVkQnlCdXR0b246IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgIDwvQXV0b2NvbXBsZXRlPlxuICAgIClcbiAgfVxufVxuIl19