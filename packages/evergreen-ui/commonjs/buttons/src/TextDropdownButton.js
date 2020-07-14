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

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = require("ui-box");

var _IconWrapper = require("../../icons/src/IconWrapper");

var _icons = require("../../icons");

var _typography = require("../../typography");

var _spinner = require("../../spinner");

var _theme = require("../../theme");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TextDropdownButton = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(TextDropdownButton, _PureComponent);

  var _super = _createSuper(TextDropdownButton);

  function TextDropdownButton() {
    (0, _classCallCheck2["default"])(this, TextDropdownButton);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(TextDropdownButton, [{
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
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["theme", "className", "intent", "height", "isActive", "children", "disabled", "appearance", "isLoading", "paddingRight", "paddingLeft", "paddingTop", "paddingBottom", "icon"]);
      var themedClassName = theme.getTextDropdownButtonClassName();
      return _react["default"].createElement(_typography.Text, (0, _extends2["default"])({
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
      }), isLoading && _react["default"].createElement(_spinner.Spinner, {
        marginLeft: -Math.round(height / 8),
        marginRight: Math.round(height / 4),
        size: Math.round(height / 2)
      }), children, _react["default"].createElement(_IconWrapper.IconWrapper, {
        icon: icon,
        marginLeft: 2,
        color: "default",
        size: 12
      }));
    }
  }]);
  return TextDropdownButton;
}(_react.PureComponent);

TextDropdownButton.displayName = "TextDropdownButton";
(0, _defineProperty2["default"])(TextDropdownButton, "propTypes", _objectSpread({}, _uiBox.dimensions.propTypes, {}, _uiBox.spacing.propTypes, {}, _uiBox.position.propTypes, {}, _uiBox.layout.propTypes, {
  /**
   * Forcefully set the active state of a button.
   * Useful in conjuction with a Popover.
   */
  isActive: _propTypes["default"].bool,

  /**
   * When true, the button is disabled.
   * isLoading also sets the button to disabled.
   */
  disabled: _propTypes["default"].bool,

  /**
   * An Evergreen icon or custom icon node. By default it uses <CaretDownIcon />
   */
  icon: _propTypes["default"].node,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired,

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: _propTypes["default"].string
}));
(0, _defineProperty2["default"])(TextDropdownButton, "defaultProps", {
  isActive: false,
  icon: _react["default"].createElement(_icons.CaretDownIcon, null)
});
(0, _defineProperty2["default"])(TextDropdownButton, "styles", {
  position: 'relative',
  fontFamily: 'ui',
  fontWeight: 500,
  display: 'inline-flex',
  alignItems: 'center',
  flexWrap: 'nowrap'
});

var _default = (0, _theme.withTheme)(TextDropdownButton);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idXR0b25zL3NyYy9UZXh0RHJvcGRvd25CdXR0b24uanMiXSwibmFtZXMiOlsiVGV4dERyb3Bkb3duQnV0dG9uIiwicHJvcHMiLCJ0aGVtZSIsImNsYXNzTmFtZSIsImludGVudCIsImhlaWdodCIsImlzQWN0aXZlIiwiY2hpbGRyZW4iLCJkaXNhYmxlZCIsImFwcGVhcmFuY2UiLCJpc0xvYWRpbmciLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiaWNvbiIsInRoZW1lZENsYXNzTmFtZSIsImdldFRleHREcm9wZG93bkJ1dHRvbkNsYXNzTmFtZSIsInN0eWxlcyIsIk1hdGgiLCJyb3VuZCIsIlB1cmVDb21wb25lbnQiLCJkaW1lbnNpb25zIiwicHJvcFR5cGVzIiwic3BhY2luZyIsInBvc2l0aW9uIiwibGF5b3V0IiwiUHJvcFR5cGVzIiwiYm9vbCIsIm5vZGUiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZsZXhXcmFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVNQSxrQjs7Ozs7Ozs7Ozs7OzZCQWlFSztBQUFBLHdCQXVCSCxLQUFLQyxLQXZCRjtBQUFBLFVBRUxDLEtBRkssZUFFTEEsS0FGSztBQUFBLFVBR0xDLFNBSEssZUFHTEEsU0FISztBQUFBLFVBS0xDLE1BTEssZUFLTEEsTUFMSztBQUFBLFVBTUxDLE1BTkssZUFNTEEsTUFOSztBQUFBLFVBT0xDLFFBUEssZUFPTEEsUUFQSztBQUFBLFVBUUxDLFFBUkssZUFRTEEsUUFSSztBQUFBLFVBU0xDLFFBVEssZUFTTEEsUUFUSztBQUFBLFVBVUxDLFVBVkssZUFVTEEsVUFWSztBQUFBLFVBV0xDLFNBWEssZUFXTEEsU0FYSztBQUFBLFVBY0xDLFlBZEssZUFjTEEsWUFkSztBQUFBLFVBZUxDLFdBZkssZUFlTEEsV0FmSztBQUFBLFVBZ0JMQyxVQWhCSyxlQWdCTEEsVUFoQks7QUFBQSxVQWlCTEMsYUFqQkssZUFpQkxBLGFBakJLO0FBQUEsVUFvQkxDLElBcEJLLGVBb0JMQSxJQXBCSztBQUFBLFVBc0JGZCxLQXRCRTtBQXlCUCxVQUFNZSxlQUFlLEdBQUdkLEtBQUssQ0FBQ2UsOEJBQU4sRUFBeEI7QUFFQSxhQUNFLGdDQUFDLGdCQUFEO0FBQ0UsUUFBQSxFQUFFLEVBQUMsUUFETDtBQUVFLFFBQUEsU0FBUyxFQUFFRCxlQUZiO0FBR0UsUUFBQSxRQUFRLEVBQUUsQ0FIWjtBQUlFLFFBQUEsT0FBTyxFQUFFLENBQUMsQ0FKWjtBQUtFLFFBQUEsUUFBUSxFQUFFLENBTFo7QUFNRSxRQUFBLE9BQU8sRUFBRSxDQUFDLENBTlo7QUFPRSxRQUFBLElBQUksRUFBRSxHQVBSO0FBUUUsdUJBQWFWO0FBUmYsU0FTTU4sa0JBQWtCLENBQUNrQixNQVR6QixFQVVNakIsS0FWTjtBQVdFLFFBQUEsUUFBUSxFQUFFTztBQVhaLFVBYUdFLFNBQVMsSUFDUixnQ0FBQyxnQkFBRDtBQUNFLFFBQUEsVUFBVSxFQUFFLENBQUNTLElBQUksQ0FBQ0MsS0FBTCxDQUFXZixNQUFNLEdBQUcsQ0FBcEIsQ0FEZjtBQUVFLFFBQUEsV0FBVyxFQUFFYyxJQUFJLENBQUNDLEtBQUwsQ0FBV2YsTUFBTSxHQUFHLENBQXBCLENBRmY7QUFHRSxRQUFBLElBQUksRUFBRWMsSUFBSSxDQUFDQyxLQUFMLENBQVdmLE1BQU0sR0FBRyxDQUFwQjtBQUhSLFFBZEosRUFvQkdFLFFBcEJILEVBcUJFLGdDQUFDLHdCQUFEO0FBQWEsUUFBQSxJQUFJLEVBQUVRLElBQW5CO0FBQXlCLFFBQUEsVUFBVSxFQUFFLENBQXJDO0FBQXdDLFFBQUEsS0FBSyxFQUFDLFNBQTlDO0FBQXdELFFBQUEsSUFBSSxFQUFFO0FBQTlELFFBckJGLENBREY7QUF5QkQ7OztFQXJIOEJNLG9COztBQUEzQnJCLGtCO2lDQUFBQSxrQixpQ0FLQ3NCLGtCQUFXQyxTLE1BS1hDLGVBQVFELFMsTUFLUkUsZ0JBQVNGLFMsTUFLVEcsY0FBT0gsUztBQUVWOzs7O0FBSUFqQixFQUFBQSxRQUFRLEVBQUVxQixzQkFBVUMsSTs7QUFFcEI7Ozs7QUFJQXBCLEVBQUFBLFFBQVEsRUFBRW1CLHNCQUFVQyxJOztBQUVwQjs7O0FBR0FiLEVBQUFBLElBQUksRUFBRVksc0JBQVVFLEk7O0FBRWhCOzs7QUFHQTNCLEVBQUFBLEtBQUssRUFBRXlCLHNCQUFVRyxNQUFWLENBQWlCQyxVOztBQUV4Qjs7OztBQUlBNUIsRUFBQUEsU0FBUyxFQUFFd0Isc0JBQVVLOztpQ0FoRG5CaEMsa0Isa0JBbURrQjtBQUNwQk0sRUFBQUEsUUFBUSxFQUFFLEtBRFU7QUFFcEJTLEVBQUFBLElBQUksRUFBRSxnQ0FBQyxvQkFBRDtBQUZjLEM7aUNBbkRsQmYsa0IsWUF3RFk7QUFDZHlCLEVBQUFBLFFBQVEsRUFBRSxVQURJO0FBRWRRLEVBQUFBLFVBQVUsRUFBRSxJQUZFO0FBR2RDLEVBQUFBLFVBQVUsRUFBRSxHQUhFO0FBSWRDLEVBQUFBLE9BQU8sRUFBRSxhQUpLO0FBS2RDLEVBQUFBLFVBQVUsRUFBRSxRQUxFO0FBTWRDLEVBQUFBLFFBQVEsRUFBRTtBQU5JLEM7O2VBZ0VILHNCQUFVckMsa0JBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBkaW1lbnNpb25zLCBzcGFjaW5nLCBwb3NpdGlvbiwgbGF5b3V0IH0gZnJvbSAndWktYm94J1xuaW1wb3J0IHsgSWNvbldyYXBwZXIgfSBmcm9tICcuLi8uLi9pY29ucy9zcmMvSWNvbldyYXBwZXInXG5pbXBvcnQgeyBDYXJldERvd25JY29uIH0gZnJvbSAnLi4vLi4vaWNvbnMnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICcuLi8uLi9zcGlubmVyJ1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNsYXNzIFRleHREcm9wZG93bkJ1dHRvbiBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBkaW1lbnNpb25zIHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2ZS5cbiAgICAgKi9cbiAgICAuLi5kaW1lbnNpb25zLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBzcGFjaW5nIHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2ZS5cbiAgICAgKi9cbiAgICAuLi5zcGFjaW5nLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBwb3NpdGlvbiBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAgICovXG4gICAgLi4ucG9zaXRpb24ucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIGxheW91dCBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAgICovXG4gICAgLi4ubGF5b3V0LnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIEZvcmNlZnVsbHkgc2V0IHRoZSBhY3RpdmUgc3RhdGUgb2YgYSBidXR0b24uXG4gICAgICogVXNlZnVsIGluIGNvbmp1Y3Rpb24gd2l0aCBhIFBvcG92ZXIuXG4gICAgICovXG4gICAgaXNBY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgYnV0dG9uIGlzIGRpc2FibGVkLlxuICAgICAqIGlzTG9hZGluZyBhbHNvIHNldHMgdGhlIGJ1dHRvbiB0byBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBBbiBFdmVyZ3JlZW4gaWNvbiBvciBjdXN0b20gaWNvbiBub2RlLiBCeSBkZWZhdWx0IGl0IHVzZXMgPENhcmV0RG93bkljb24gLz5cbiAgICAgKi9cbiAgICBpY29uOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIENsYXNzIG5hbWUgcGFzc2VkIHRvIHRoZSBidXR0b24uXG4gICAgICogT25seSB1c2UgaWYgeW91IGtub3cgd2hhdCB5b3UgYXJlIGRvaW5nLlxuICAgICAqL1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBpc0FjdGl2ZTogZmFsc2UsXG4gICAgaWNvbjogPENhcmV0RG93bkljb24gLz5cbiAgfVxuXG4gIHN0YXRpYyBzdHlsZXMgPSB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZm9udEZhbWlseTogJ3VpJyxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBmbGV4V3JhcDogJ25vd3JhcCdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aGVtZSxcbiAgICAgIGNsYXNzTmFtZSxcblxuICAgICAgaW50ZW50LFxuICAgICAgaGVpZ2h0LFxuICAgICAgaXNBY3RpdmUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgYXBwZWFyYW5jZSxcbiAgICAgIGlzTG9hZGluZyxcblxuICAgICAgLy8gUGFkZGluZ3NcbiAgICAgIHBhZGRpbmdSaWdodCxcbiAgICAgIHBhZGRpbmdMZWZ0LFxuICAgICAgcGFkZGluZ1RvcCxcbiAgICAgIHBhZGRpbmdCb3R0b20sXG5cbiAgICAgIC8vIEljb25zXG4gICAgICBpY29uLFxuXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB0aGVtZWRDbGFzc05hbWUgPSB0aGVtZS5nZXRUZXh0RHJvcGRvd25CdXR0b25DbGFzc05hbWUoKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXh0XG4gICAgICAgIGlzPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPXt0aGVtZWRDbGFzc05hbWV9XG4gICAgICAgIHBhZGRpbmdYPXs0fVxuICAgICAgICBtYXJnaW5YPXstNH1cbiAgICAgICAgcGFkZGluZ1k9ezJ9XG4gICAgICAgIG1hcmdpblk9ey0yfVxuICAgICAgICBzaXplPXszMDB9XG4gICAgICAgIGRhdGEtYWN0aXZlPXtpc0FjdGl2ZX1cbiAgICAgICAgey4uLlRleHREcm9wZG93bkJ1dHRvbi5zdHlsZXN9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgPlxuICAgICAgICB7aXNMb2FkaW5nICYmIChcbiAgICAgICAgICA8U3Bpbm5lclxuICAgICAgICAgICAgbWFyZ2luTGVmdD17LU1hdGgucm91bmQoaGVpZ2h0IC8gOCl9XG4gICAgICAgICAgICBtYXJnaW5SaWdodD17TWF0aC5yb3VuZChoZWlnaHQgLyA0KX1cbiAgICAgICAgICAgIHNpemU9e01hdGgucm91bmQoaGVpZ2h0IC8gMil9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8SWNvbldyYXBwZXIgaWNvbj17aWNvbn0gbWFyZ2luTGVmdD17Mn0gY29sb3I9XCJkZWZhdWx0XCIgc2l6ZT17MTJ9IC8+XG4gICAgICA8L1RleHQ+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShUZXh0RHJvcGRvd25CdXR0b24pXG4iXX0=