import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
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
import { dimensions, spacing, position, layout } from 'ui-box';
import { IconWrapper } from '../../icons/src/IconWrapper';
import { CaretDownIcon } from '../../icons';
import { Text } from '../../typography';
import { Spinner } from '../../spinner';
import { withTheme } from '../../theme';

var TextDropdownButton = /*#__PURE__*/function (_PureComponent) {
  _inherits(TextDropdownButton, _PureComponent);

  var _super = _createSuper(TextDropdownButton);

  function TextDropdownButton() {
    _classCallCheck(this, TextDropdownButton);

    return _super.apply(this, arguments);
  }

  _createClass(TextDropdownButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          intent = _this$props.intent,
          height = _this$props.height,
          isActive = _this$props.isActive,
          children = _this$props.children,
          disabled = _this$props.disabled,
          appearance = _this$props.appearance,
          isLoading = _this$props.isLoading,
          paddingRight = _this$props.paddingRight,
          paddingLeft = _this$props.paddingLeft,
          paddingTop = _this$props.paddingTop,
          paddingBottom = _this$props.paddingBottom,
          icon = _this$props.icon,
          props = _objectWithoutProperties(_this$props, ["theme", "className", "intent", "height", "isActive", "children", "disabled", "appearance", "isLoading", "paddingRight", "paddingLeft", "paddingTop", "paddingBottom", "icon"]);

      var themedClassName = theme.getTextDropdownButtonClassName();
      return React.createElement(Text, _extends({
        is: "button",
        className: themedClassName,
        paddingX: 4,
        marginX: -4,
        paddingY: 2,
        marginY: -2,
        size: 300,
        "data-active": isActive
      }, TextDropdownButton.styles, props, {
        disabled: disabled
      }), isLoading && React.createElement(Spinner, {
        marginLeft: -Math.round(height / 8),
        marginRight: Math.round(height / 4),
        size: Math.round(height / 2)
      }), children, React.createElement(IconWrapper, {
        icon: icon,
        marginLeft: 2,
        color: "default",
        size: 12
      }));
    }
  }]);

  return TextDropdownButton;
}(PureComponent);

TextDropdownButton.displayName = "TextDropdownButton";

_defineProperty(TextDropdownButton, "propTypes", _objectSpread({}, dimensions.propTypes, {}, spacing.propTypes, {}, position.propTypes, {}, layout.propTypes, {
  /**
   * Forcefully set the active state of a button.
   * Useful in conjuction with a Popover.
   */
  isActive: PropTypes.bool,

  /**
   * When true, the button is disabled.
   * isLoading also sets the button to disabled.
   */
  disabled: PropTypes.bool,

  /**
   * An Evergreen icon or custom icon node. By default it uses <CaretDownIcon />
   */
  icon: PropTypes.node,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired,

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
}));

_defineProperty(TextDropdownButton, "defaultProps", {
  isActive: false,
  icon: React.createElement(CaretDownIcon, null)
});

_defineProperty(TextDropdownButton, "styles", {
  position: 'relative',
  fontFamily: 'ui',
  fontWeight: 500,
  display: 'inline-flex',
  alignItems: 'center',
  flexWrap: 'nowrap'
});

export default withTheme(TextDropdownButton);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idXR0b25zL3NyYy9UZXh0RHJvcGRvd25CdXR0b24uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiZGltZW5zaW9ucyIsInNwYWNpbmciLCJwb3NpdGlvbiIsImxheW91dCIsIkljb25XcmFwcGVyIiwiQ2FyZXREb3duSWNvbiIsIlRleHQiLCJTcGlubmVyIiwid2l0aFRoZW1lIiwiVGV4dERyb3Bkb3duQnV0dG9uIiwicHJvcHMiLCJ0aGVtZSIsImNsYXNzTmFtZSIsImludGVudCIsImhlaWdodCIsImlzQWN0aXZlIiwiY2hpbGRyZW4iLCJkaXNhYmxlZCIsImFwcGVhcmFuY2UiLCJpc0xvYWRpbmciLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiaWNvbiIsInRoZW1lZENsYXNzTmFtZSIsImdldFRleHREcm9wZG93bkJ1dHRvbkNsYXNzTmFtZSIsInN0eWxlcyIsIk1hdGgiLCJyb3VuZCIsInByb3BUeXBlcyIsImJvb2wiLCJub2RlIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJmbGV4V3JhcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxVQUFULEVBQXFCQyxPQUFyQixFQUE4QkMsUUFBOUIsRUFBd0NDLE1BQXhDLFFBQXNELFFBQXREO0FBQ0EsU0FBU0MsV0FBVCxRQUE0Qiw2QkFBNUI7QUFDQSxTQUFTQyxhQUFULFFBQThCLGFBQTlCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixrQkFBckI7QUFDQSxTQUFTQyxPQUFULFFBQXdCLGVBQXhCO0FBQ0EsU0FBU0MsU0FBVCxR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QUxFO0FBTWRDLEVBQUFBLFFBQVEsRUFBRTtBQU5JLEM7O0FBZ0VsQixlQUFlaEMsU0FBUyxDQUFDQyxrQkFBRCxDQUF4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBkaW1lbnNpb25zLCBzcGFjaW5nLCBwb3NpdGlvbiwgbGF5b3V0IH0gZnJvbSAndWktYm94J1xuaW1wb3J0IHsgSWNvbldyYXBwZXIgfSBmcm9tICcuLi8uLi9pY29ucy9zcmMvSWNvbldyYXBwZXInXG5pbXBvcnQgeyBDYXJldERvd25JY29uIH0gZnJvbSAnLi4vLi4vaWNvbnMnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICcuLi8uLi9zcGlubmVyJ1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNsYXNzIFRleHREcm9wZG93bkJ1dHRvbiBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBkaW1lbnNpb25zIHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2ZS5cbiAgICAgKi9cbiAgICAuLi5kaW1lbnNpb25zLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBzcGFjaW5nIHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2ZS5cbiAgICAgKi9cbiAgICAuLi5zcGFjaW5nLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBwb3NpdGlvbiBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAgICovXG4gICAgLi4ucG9zaXRpb24ucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIGxheW91dCBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAgICovXG4gICAgLi4ubGF5b3V0LnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIEZvcmNlZnVsbHkgc2V0IHRoZSBhY3RpdmUgc3RhdGUgb2YgYSBidXR0b24uXG4gICAgICogVXNlZnVsIGluIGNvbmp1Y3Rpb24gd2l0aCBhIFBvcG92ZXIuXG4gICAgICovXG4gICAgaXNBY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgYnV0dG9uIGlzIGRpc2FibGVkLlxuICAgICAqIGlzTG9hZGluZyBhbHNvIHNldHMgdGhlIGJ1dHRvbiB0byBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBBbiBFdmVyZ3JlZW4gaWNvbiBvciBjdXN0b20gaWNvbiBub2RlLiBCeSBkZWZhdWx0IGl0IHVzZXMgPENhcmV0RG93bkljb24gLz5cbiAgICAgKi9cbiAgICBpY29uOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIENsYXNzIG5hbWUgcGFzc2VkIHRvIHRoZSBidXR0b24uXG4gICAgICogT25seSB1c2UgaWYgeW91IGtub3cgd2hhdCB5b3UgYXJlIGRvaW5nLlxuICAgICAqL1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBpc0FjdGl2ZTogZmFsc2UsXG4gICAgaWNvbjogPENhcmV0RG93bkljb24gLz5cbiAgfVxuXG4gIHN0YXRpYyBzdHlsZXMgPSB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZm9udEZhbWlseTogJ3VpJyxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBmbGV4V3JhcDogJ25vd3JhcCdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aGVtZSxcbiAgICAgIGNsYXNzTmFtZSxcblxuICAgICAgaW50ZW50LFxuICAgICAgaGVpZ2h0LFxuICAgICAgaXNBY3RpdmUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgYXBwZWFyYW5jZSxcbiAgICAgIGlzTG9hZGluZyxcblxuICAgICAgLy8gUGFkZGluZ3NcbiAgICAgIHBhZGRpbmdSaWdodCxcbiAgICAgIHBhZGRpbmdMZWZ0LFxuICAgICAgcGFkZGluZ1RvcCxcbiAgICAgIHBhZGRpbmdCb3R0b20sXG5cbiAgICAgIC8vIEljb25zXG4gICAgICBpY29uLFxuXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB0aGVtZWRDbGFzc05hbWUgPSB0aGVtZS5nZXRUZXh0RHJvcGRvd25CdXR0b25DbGFzc05hbWUoKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXh0XG4gICAgICAgIGlzPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPXt0aGVtZWRDbGFzc05hbWV9XG4gICAgICAgIHBhZGRpbmdYPXs0fVxuICAgICAgICBtYXJnaW5YPXstNH1cbiAgICAgICAgcGFkZGluZ1k9ezJ9XG4gICAgICAgIG1hcmdpblk9ey0yfVxuICAgICAgICBzaXplPXszMDB9XG4gICAgICAgIGRhdGEtYWN0aXZlPXtpc0FjdGl2ZX1cbiAgICAgICAgey4uLlRleHREcm9wZG93bkJ1dHRvbi5zdHlsZXN9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgPlxuICAgICAgICB7aXNMb2FkaW5nICYmIChcbiAgICAgICAgICA8U3Bpbm5lclxuICAgICAgICAgICAgbWFyZ2luTGVmdD17LU1hdGgucm91bmQoaGVpZ2h0IC8gOCl9XG4gICAgICAgICAgICBtYXJnaW5SaWdodD17TWF0aC5yb3VuZChoZWlnaHQgLyA0KX1cbiAgICAgICAgICAgIHNpemU9e01hdGgucm91bmQoaGVpZ2h0IC8gMil9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8SWNvbldyYXBwZXIgaWNvbj17aWNvbn0gbWFyZ2luTGVmdD17Mn0gY29sb3I9XCJkZWZhdWx0XCIgc2l6ZT17MTJ9IC8+XG4gICAgICA8L1RleHQ+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShUZXh0RHJvcGRvd25CdXR0b24pXG4iXX0=