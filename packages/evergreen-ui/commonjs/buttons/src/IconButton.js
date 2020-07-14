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

var _theme = require("../../theme");

var _Button = _interopRequireDefault(require("./Button"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var IconButton = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(IconButton, _PureComponent);

  var _super = _createSuper(IconButton);

  function IconButton() {
    (0, _classCallCheck2["default"])(this, IconButton);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(IconButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          icon = _this$props.icon,
          iconSize = _this$props.iconSize,
          height = _this$props.height,
          intent = _this$props.intent,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["theme", "icon", "iconSize", "height", "intent"]);
      var iconWithProps;

      if (icon && _react["default"].isValidElement(icon)) {
        iconWithProps = _react["default"].cloneElement(icon, _objectSpread({
          color: intent === 'none' ? 'default' : 'currentColor',
          size: iconSize || theme.getIconSizeForIconButton(height)
        }, icon.props));
      }

      return _react["default"].createElement(_Button["default"], (0, _extends2["default"])({
        intent: intent,
        height: height,
        width: height,
        paddingLeft: 0,
        paddingRight: 0,
        display: "flex",
        justifyContent: "center"
      }, props), iconWithProps);
    }
  }]);
  return IconButton;
}(_react.PureComponent);

IconButton.displayName = "IconButton";
(0, _defineProperty2["default"])(IconButton, "propTypes", _objectSpread({}, _uiBox.dimensions.propTypes, {}, _uiBox.spacing.propTypes, {}, _uiBox.position.propTypes, {}, _uiBox.layout.propTypes, {
  /**
   * The Evergreen icon or custom icon to render
   */
  icon: _propTypes["default"].node,

  /**
   * Specifies an explicit icon size instead of the default value
   */
  iconSize: _propTypes["default"].number,

  /**
   * The intent of the button.
   */
  intent: _propTypes["default"].oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * The appearance of the button.
   */
  appearance: _propTypes["default"].oneOf(['default', 'minimal', 'primary']).isRequired,

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
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired,

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: _propTypes["default"].string
}));
(0, _defineProperty2["default"])(IconButton, "defaultProps", {
  intent: 'none',
  appearance: 'default',
  height: 32
});

var _default = (0, _theme.withTheme)(IconButton);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idXR0b25zL3NyYy9JY29uQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkljb25CdXR0b24iLCJwcm9wcyIsInRoZW1lIiwiaWNvbiIsImljb25TaXplIiwiaGVpZ2h0IiwiaW50ZW50IiwiaWNvbldpdGhQcm9wcyIsIlJlYWN0IiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJjb2xvciIsInNpemUiLCJnZXRJY29uU2l6ZUZvckljb25CdXR0b24iLCJQdXJlQ29tcG9uZW50IiwiZGltZW5zaW9ucyIsInByb3BUeXBlcyIsInNwYWNpbmciLCJwb3NpdGlvbiIsImxheW91dCIsIlByb3BUeXBlcyIsIm5vZGUiLCJudW1iZXIiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJhcHBlYXJhbmNlIiwiaXNBY3RpdmUiLCJib29sIiwiZGlzYWJsZWQiLCJvYmplY3QiLCJjbGFzc05hbWUiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRU1BLFU7Ozs7Ozs7Ozs7Ozs2QkF5RUs7QUFBQSx3QkFDcUQsS0FBS0MsS0FEMUQ7QUFBQSxVQUNDQyxLQURELGVBQ0NBLEtBREQ7QUFBQSxVQUNRQyxJQURSLGVBQ1FBLElBRFI7QUFBQSxVQUNjQyxRQURkLGVBQ2NBLFFBRGQ7QUFBQSxVQUN3QkMsTUFEeEIsZUFDd0JBLE1BRHhCO0FBQUEsVUFDZ0NDLE1BRGhDLGVBQ2dDQSxNQURoQztBQUFBLFVBQzJDTCxLQUQzQztBQUdQLFVBQUlNLGFBQUo7O0FBQ0EsVUFBSUosSUFBSSxJQUFJSyxrQkFBTUMsY0FBTixDQUFxQk4sSUFBckIsQ0FBWixFQUF3QztBQUN0Q0ksUUFBQUEsYUFBYSxHQUFHQyxrQkFBTUUsWUFBTixDQUFtQlAsSUFBbkI7QUFDZFEsVUFBQUEsS0FBSyxFQUFFTCxNQUFNLEtBQUssTUFBWCxHQUFvQixTQUFwQixHQUFnQyxjQUR6QjtBQUVkTSxVQUFBQSxJQUFJLEVBQUVSLFFBQVEsSUFBSUYsS0FBSyxDQUFDVyx3QkFBTixDQUErQlIsTUFBL0I7QUFGSixXQUdYRixJQUFJLENBQUNGLEtBSE0sRUFBaEI7QUFLRDs7QUFFRCxhQUNFLGdDQUFDLGtCQUFEO0FBQ0UsUUFBQSxNQUFNLEVBQUVLLE1BRFY7QUFFRSxRQUFBLE1BQU0sRUFBRUQsTUFGVjtBQUdFLFFBQUEsS0FBSyxFQUFFQSxNQUhUO0FBSUUsUUFBQSxXQUFXLEVBQUUsQ0FKZjtBQUtFLFFBQUEsWUFBWSxFQUFFLENBTGhCO0FBTUUsUUFBQSxPQUFPLEVBQUMsTUFOVjtBQU9FLFFBQUEsY0FBYyxFQUFDO0FBUGpCLFNBUU1KLEtBUk4sR0FVR00sYUFWSCxDQURGO0FBY0Q7OztFQW5Hc0JPLG9COztBQUFuQmQsVTtpQ0FBQUEsVSxpQ0FLQ2Usa0JBQVdDLFMsTUFLWEMsZUFBUUQsUyxNQUtSRSxnQkFBU0YsUyxNQUtURyxjQUFPSCxTO0FBRVY7OztBQUdBYixFQUFBQSxJQUFJLEVBQUVpQixzQkFBVUMsSTs7QUFFaEI7OztBQUdBakIsRUFBQUEsUUFBUSxFQUFFZ0Isc0JBQVVFLE07O0FBRXBCOzs7QUFHQWhCLEVBQUFBLE1BQU0sRUFBRWMsc0JBQVVHLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsU0FBVCxFQUFvQixTQUFwQixFQUErQixRQUEvQixDQUFoQixFQUNMQyxVOztBQUVIOzs7QUFHQUMsRUFBQUEsVUFBVSxFQUFFTCxzQkFBVUcsS0FBVixDQUFnQixDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFNBQXZCLENBQWhCLEVBQW1EQyxVOztBQUUvRDs7OztBQUlBRSxFQUFBQSxRQUFRLEVBQUVOLHNCQUFVTyxJOztBQUVwQjs7OztBQUlBQyxFQUFBQSxRQUFRLEVBQUVSLHNCQUFVTyxJOztBQUVwQjs7O0FBR0F6QixFQUFBQSxLQUFLLEVBQUVrQixzQkFBVVMsTUFBVixDQUFpQkwsVTs7QUFFeEI7Ozs7QUFJQU0sRUFBQUEsU0FBUyxFQUFFVixzQkFBVVc7O2lDQWhFbkIvQixVLGtCQW1Fa0I7QUFDcEJNLEVBQUFBLE1BQU0sRUFBRSxNQURZO0FBRXBCbUIsRUFBQUEsVUFBVSxFQUFFLFNBRlE7QUFHcEJwQixFQUFBQSxNQUFNLEVBQUU7QUFIWSxDOztlQW1DVCxzQkFBVUwsVUFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGRpbWVuc2lvbnMsIHNwYWNpbmcsIHBvc2l0aW9uLCBsYXlvdXQgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5cbmNsYXNzIEljb25CdXR0b24gZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgZGltZW5zaW9ucyBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAgICovXG4gICAgLi4uZGltZW5zaW9ucy5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgc3BhY2luZyBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAgICovXG4gICAgLi4uc3BhY2luZy5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgcG9zaXRpb24gc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgICAqL1xuICAgIC4uLnBvc2l0aW9uLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBsYXlvdXQgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgICAqL1xuICAgIC4uLmxheW91dC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgRXZlcmdyZWVuIGljb24gb3IgY3VzdG9tIGljb24gdG8gcmVuZGVyXG4gICAgICovXG4gICAgaWNvbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgYW4gZXhwbGljaXQgaWNvbiBzaXplIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgdmFsdWVcbiAgICAgKi9cbiAgICBpY29uU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnRlbnQgb2YgdGhlIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBpbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbJ25vbmUnLCAnc3VjY2VzcycsICd3YXJuaW5nJywgJ2RhbmdlciddKVxuICAgICAgLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgYnV0dG9uLlxuICAgICAqL1xuICAgIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAnbWluaW1hbCcsICdwcmltYXJ5J10pLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBGb3JjZWZ1bGx5IHNldCB0aGUgYWN0aXZlIHN0YXRlIG9mIGEgYnV0dG9uLlxuICAgICAqIFVzZWZ1bCBpbiBjb25qdWN0aW9uIHdpdGggYSBQb3BvdmVyLlxuICAgICAqL1xuICAgIGlzQWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGJ1dHRvbiBpcyBkaXNhYmxlZC5cbiAgICAgKiBpc0xvYWRpbmcgYWxzbyBzZXRzIHRoZSBidXR0b24gdG8gZGlzYWJsZWQuXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogQ2xhc3MgbmFtZSBwYXNzZWQgdG8gdGhlIGJ1dHRvbi5cbiAgICAgKiBPbmx5IHVzZSBpZiB5b3Uga25vdyB3aGF0IHlvdSBhcmUgZG9pbmcuXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGludGVudDogJ25vbmUnLFxuICAgIGFwcGVhcmFuY2U6ICdkZWZhdWx0JyxcbiAgICBoZWlnaHQ6IDMyXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aGVtZSwgaWNvbiwgaWNvblNpemUsIGhlaWdodCwgaW50ZW50LCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IGljb25XaXRoUHJvcHNcbiAgICBpZiAoaWNvbiAmJiBSZWFjdC5pc1ZhbGlkRWxlbWVudChpY29uKSkge1xuICAgICAgaWNvbldpdGhQcm9wcyA9IFJlYWN0LmNsb25lRWxlbWVudChpY29uLCB7XG4gICAgICAgIGNvbG9yOiBpbnRlbnQgPT09ICdub25lJyA/ICdkZWZhdWx0JyA6ICdjdXJyZW50Q29sb3InLFxuICAgICAgICBzaXplOiBpY29uU2l6ZSB8fCB0aGVtZS5nZXRJY29uU2l6ZUZvckljb25CdXR0b24oaGVpZ2h0KSxcbiAgICAgICAgLi4uaWNvbi5wcm9wc1xuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJ1dHRvblxuICAgICAgICBpbnRlbnQ9e2ludGVudH1cbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIHdpZHRoPXtoZWlnaHR9XG4gICAgICAgIHBhZGRpbmdMZWZ0PXswfVxuICAgICAgICBwYWRkaW5nUmlnaHQ9ezB9XG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtpY29uV2l0aFByb3BzfVxuICAgICAgPC9CdXR0b24+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShJY29uQnV0dG9uKVxuIl19