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

var _classnames = _interopRequireDefault(require("classnames"));

var _uiBox = require("ui-box");

var _IconWrapper = require("../../icons/src/IconWrapper");

var _typography = require("../../typography");

var _spinner = require("../../spinner");

var _theme = require("../../theme");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/* eslint-disable-next-line react/prop-types */
var Icon = (0, _react.memo)(function (_ref) {
  var icon = _ref.icon,
      size = _ref.size,
      spacing = _ref.spacing,
      edge = _ref.edge;
  var edgeMargin = -Math.round(spacing * 0.2);
  var innerMargin = Math.round(size * 0.7);
  var marginLeft = edge === 'start' ? edgeMargin : innerMargin;
  var marginRight = edge === 'end' ? edgeMargin : innerMargin;
  return _react["default"].createElement(_IconWrapper.IconWrapper, {
    icon: icon,
    size: size,
    marginLeft: marginLeft,
    marginRight: marginRight
  });
});

var Button = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Button, _PureComponent);

  var _super = _createSuper(Button);

  function Button() {
    (0, _classCallCheck2["default"])(this, Button);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Button, [{
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
          iconBefore = _this$props.iconBefore,
          iconAfter = _this$props.iconAfter,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["theme", "className", "intent", "height", "isActive", "children", "disabled", "appearance", "isLoading", "paddingRight", "paddingLeft", "paddingTop", "paddingBottom", "iconBefore", "iconAfter"]);
      var themedClassName = theme.getButtonClassName(appearance, intent);
      var textSize = theme.getTextSizeForControlHeight(height);
      var borderRadius = theme.getBorderRadiusForControlHeight(height);
      var iconSize = theme.getIconSizeForButton(height);
      var padding = Math.round(height / 2);
      var pr = paddingRight !== undefined ? paddingRight : padding; // eslint-disable-line no-negated-condition

      var pl = paddingLeft !== undefined ? paddingLeft : padding; // eslint-disable-line no-negated-condition

      return _react["default"].createElement(_typography.Text, (0, _extends2["default"])({
        is: "button",
        className: (0, _classnames["default"])(themedClassName, className),
        borderTopRightRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
        borderTopLeftRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
        paddingRight: pr,
        paddingLeft: pl,
        marginLeft: 0 // Removes weird margins in Safari
        ,
        marginRight: 0 // Removes weird margins in Safari
        ,
        marginTop: 0 // Removes weird margins in Safari
        ,
        marginBottom: 0 // Removes weird margins in Safari
        ,
        size: textSize,
        color: null // Prevent the Text color overriding the glamor appearanceStyle color
        ,
        height: height,
        lineHeight: "".concat(height, "px")
      }, isActive ? {
        'data-active': true
      } : {}, Button.styles, props, {
        disabled: disabled || isLoading
      }), isLoading && _react["default"].createElement(_spinner.Spinner, {
        marginLeft: -Math.round(height / 8),
        marginRight: Math.round(height / 4),
        size: Math.round(height / 2)
      }), _react["default"].createElement(Icon, {
        icon: iconBefore,
        size: iconSize,
        spacing: pl,
        edge: "start"
      }), children, _react["default"].createElement(Icon, {
        icon: iconAfter,
        size: iconSize,
        spacing: pr,
        edge: "end"
      }));
    }
  }]);
  return Button;
}(_react.PureComponent);

Button.displayName = "Button";
(0, _defineProperty2["default"])(Button, "propTypes", _objectSpread({}, _uiBox.dimensions.propTypes, {}, _uiBox.spacing.propTypes, {}, _uiBox.position.propTypes, {}, _uiBox.layout.propTypes, {
  /**
   * The intent of the button.
   */
  intent: _propTypes["default"].oneOf(['none', 'success', 'warning', 'danger']),

  /**
   * The appearance of the button.
   */
  appearance: _propTypes["default"].oneOf(['default', 'minimal', 'primary']).isRequired,

  /**
   * When true, show a loading spinner before the children.
   * This also disables the button.
   */
  isLoading: _propTypes["default"].bool,

  /**
   * Forcefully set the active state of a button.
   * Useful in conjuction with a Popover.
   */
  isActive: _propTypes["default"].bool,

  /**
   * Sets an icon before the text. Can be any icon from Evergreen or a custom element.
   */
  iconBefore: _propTypes["default"].node,

  /**
   * Sets an icon after the text. Can be any icon from Evergreen or a custom element.
   */
  iconAfter: _propTypes["default"].node,

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
(0, _defineProperty2["default"])(Button, "defaultProps", {
  appearance: 'default',
  height: 32,
  intent: 'none',
  isActive: false,
  paddingBottom: 0,
  paddingTop: 0
});
(0, _defineProperty2["default"])(Button, "styles", {
  position: 'relative',
  fontFamily: 'ui',
  fontWeight: 500,
  display: 'inline-flex',
  alignItems: 'center',
  flexWrap: 'nowrap'
});

var _default = (0, _theme.withTheme)(Button);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idXR0b25zL3NyYy9CdXR0b24uanMiXSwibmFtZXMiOlsiSWNvbiIsImljb24iLCJzaXplIiwic3BhY2luZyIsImVkZ2UiLCJlZGdlTWFyZ2luIiwiTWF0aCIsInJvdW5kIiwiaW5uZXJNYXJnaW4iLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJCdXR0b24iLCJwcm9wcyIsInRoZW1lIiwiY2xhc3NOYW1lIiwiaW50ZW50IiwiaGVpZ2h0IiwiaXNBY3RpdmUiLCJjaGlsZHJlbiIsImRpc2FibGVkIiwiYXBwZWFyYW5jZSIsImlzTG9hZGluZyIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJpY29uQmVmb3JlIiwiaWNvbkFmdGVyIiwidGhlbWVkQ2xhc3NOYW1lIiwiZ2V0QnV0dG9uQ2xhc3NOYW1lIiwidGV4dFNpemUiLCJnZXRUZXh0U2l6ZUZvckNvbnRyb2xIZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJnZXRCb3JkZXJSYWRpdXNGb3JDb250cm9sSGVpZ2h0IiwiaWNvblNpemUiLCJnZXRJY29uU2l6ZUZvckJ1dHRvbiIsInBhZGRpbmciLCJwciIsInVuZGVmaW5lZCIsInBsIiwic3R5bGVzIiwiUHVyZUNvbXBvbmVudCIsImRpbWVuc2lvbnMiLCJwcm9wVHlwZXMiLCJwb3NpdGlvbiIsImxheW91dCIsIlByb3BUeXBlcyIsIm9uZU9mIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJub2RlIiwib2JqZWN0Iiwic3RyaW5nIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZsZXhXcmFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBO0FBQ0EsSUFBTUEsSUFBSSxHQUFHLGlCQUFLLGdCQUFtQztB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STtBQUVkUyxFQUFBQSxVQUFVLEVBQUUsSUFGRTtBQUdkQyxFQUFBQSxVQUFVLEVBQUUsR0FIRTtBQUlkQyxFQUFBQSxPQUFPLEVBQUUsYUFKSztBQUtkQyxFQUFBQSxVQUFVLEVBQUUsUUFMRTtBQU1kQyxFQUFBQSxRQUFRLEVBQUU7QUFOSSxDOztlQXFGSCxzQkFBVTlDLE1BQVYsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50LCBtZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IGRpbWVuc2lvbnMsIHNwYWNpbmcsIHBvc2l0aW9uLCBsYXlvdXQgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBJY29uV3JhcHBlciB9IGZyb20gJy4uLy4uL2ljb25zL3NyYy9JY29uV3JhcHBlcidcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJy4uLy4uL3NwaW5uZXInXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXMgKi9cbmNvbnN0IEljb24gPSBtZW1vKCh7IGljb24sIHNpemUsIHNwYWNpbmcsIGVkZ2UgfSkgPT4ge1xuICBjb25zdCBlZGdlTWFyZ2luID0gLU1hdGgucm91bmQoc3BhY2luZyAqIDAuMilcbiAgY29uc3QgaW5uZXJNYXJnaW4gPSBNYXRoLnJvdW5kKHNpemUgKiAwLjcpXG4gIGNvbnN0IG1hcmdpbkxlZnQgPSBlZGdlID09PSAnc3RhcnQnID8gZWRnZU1hcmdpbiA6IGlubmVyTWFyZ2luXG4gIGNvbnN0IG1hcmdpblJpZ2h0ID0gZWRnZSA9PT0gJ2VuZCcgPyBlZGdlTWFyZ2luIDogaW5uZXJNYXJnaW5cblxuICByZXR1cm4gKFxuICAgIDxJY29uV3JhcHBlclxuICAgICAgaWNvbj17aWNvbn1cbiAgICAgIHNpemU9e3NpemV9XG4gICAgICBtYXJnaW5MZWZ0PXttYXJnaW5MZWZ0fVxuICAgICAgbWFyZ2luUmlnaHQ9e21hcmdpblJpZ2h0fVxuICAgIC8+XG4gIClcbn0pXG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBkaW1lbnNpb25zIHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2ZS5cbiAgICAgKi9cbiAgICAuLi5kaW1lbnNpb25zLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBzcGFjaW5nIHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2ZS5cbiAgICAgKi9cbiAgICAuLi5zcGFjaW5nLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBwb3NpdGlvbiBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAgICovXG4gICAgLi4ucG9zaXRpb24ucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIGxheW91dCBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAgICovXG4gICAgLi4ubGF5b3V0LnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnRlbnQgb2YgdGhlIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBpbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbJ25vbmUnLCAnc3VjY2VzcycsICd3YXJuaW5nJywgJ2RhbmdlciddKSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSBidXR0b24uXG4gICAgICovXG4gICAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLm9uZU9mKFsnZGVmYXVsdCcsICdtaW5pbWFsJywgJ3ByaW1hcnknXSkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgc2hvdyBhIGxvYWRpbmcgc3Bpbm5lciBiZWZvcmUgdGhlIGNoaWxkcmVuLlxuICAgICAqIFRoaXMgYWxzbyBkaXNhYmxlcyB0aGUgYnV0dG9uLlxuICAgICAqL1xuICAgIGlzTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBGb3JjZWZ1bGx5IHNldCB0aGUgYWN0aXZlIHN0YXRlIG9mIGEgYnV0dG9uLlxuICAgICAqIFVzZWZ1bCBpbiBjb25qdWN0aW9uIHdpdGggYSBQb3BvdmVyLlxuICAgICAqL1xuICAgIGlzQWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFNldHMgYW4gaWNvbiBiZWZvcmUgdGhlIHRleHQuIENhbiBiZSBhbnkgaWNvbiBmcm9tIEV2ZXJncmVlbiBvciBhIGN1c3RvbSBlbGVtZW50LlxuICAgICAqL1xuICAgIGljb25CZWZvcmU6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogU2V0cyBhbiBpY29uIGFmdGVyIHRoZSB0ZXh0LiBDYW4gYmUgYW55IGljb24gZnJvbSBFdmVyZ3JlZW4gb3IgYSBjdXN0b20gZWxlbWVudC5cbiAgICAgKi9cbiAgICBpY29uQWZ0ZXI6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgYnV0dG9uIGlzIGRpc2FibGVkLlxuICAgICAqIGlzTG9hZGluZyBhbHNvIHNldHMgdGhlIGJ1dHRvbiB0byBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBDbGFzcyBuYW1lIHBhc3NlZCB0byB0aGUgYnV0dG9uLlxuICAgICAqIE9ubHkgdXNlIGlmIHlvdSBrbm93IHdoYXQgeW91IGFyZSBkb2luZy5cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYXBwZWFyYW5jZTogJ2RlZmF1bHQnLFxuICAgIGhlaWdodDogMzIsXG4gICAgaW50ZW50OiAnbm9uZScsXG4gICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgIHBhZGRpbmdCb3R0b206IDAsXG4gICAgcGFkZGluZ1RvcDogMFxuICB9XG5cbiAgc3RhdGljIHN0eWxlcyA9IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBmb250RmFtaWx5OiAndWknLFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGZsZXhXcmFwOiAnbm93cmFwJ1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRoZW1lLFxuICAgICAgY2xhc3NOYW1lLFxuXG4gICAgICBpbnRlbnQsXG4gICAgICBoZWlnaHQsXG4gICAgICBpc0FjdGl2ZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBhcHBlYXJhbmNlLFxuICAgICAgaXNMb2FkaW5nLFxuXG4gICAgICAvLyBQYWRkaW5nc1xuICAgICAgcGFkZGluZ1JpZ2h0LFxuICAgICAgcGFkZGluZ0xlZnQsXG4gICAgICBwYWRkaW5nVG9wLFxuICAgICAgcGFkZGluZ0JvdHRvbSxcblxuICAgICAgLy8gSWNvbnNcbiAgICAgIGljb25CZWZvcmUsXG4gICAgICBpY29uQWZ0ZXIsXG5cbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHRoZW1lZENsYXNzTmFtZSA9IHRoZW1lLmdldEJ1dHRvbkNsYXNzTmFtZShhcHBlYXJhbmNlLCBpbnRlbnQpXG4gICAgY29uc3QgdGV4dFNpemUgPSB0aGVtZS5nZXRUZXh0U2l6ZUZvckNvbnRyb2xIZWlnaHQoaGVpZ2h0KVxuXG4gICAgY29uc3QgYm9yZGVyUmFkaXVzID0gdGhlbWUuZ2V0Qm9yZGVyUmFkaXVzRm9yQ29udHJvbEhlaWdodChoZWlnaHQpXG4gICAgY29uc3QgaWNvblNpemUgPSB0aGVtZS5nZXRJY29uU2l6ZUZvckJ1dHRvbihoZWlnaHQpXG5cbiAgICBjb25zdCBwYWRkaW5nID0gTWF0aC5yb3VuZChoZWlnaHQgLyAyKVxuICAgIGNvbnN0IHByID0gcGFkZGluZ1JpZ2h0ICE9PSB1bmRlZmluZWQgPyBwYWRkaW5nUmlnaHQgOiBwYWRkaW5nIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmVnYXRlZC1jb25kaXRpb25cbiAgICBjb25zdCBwbCA9IHBhZGRpbmdMZWZ0ICE9PSB1bmRlZmluZWQgPyBwYWRkaW5nTGVmdCA6IHBhZGRpbmcgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZWdhdGVkLWNvbmRpdGlvblxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXh0XG4gICAgICAgIGlzPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjeCh0aGVtZWRDbGFzc05hbWUsIGNsYXNzTmFtZSl9XG4gICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzPXtib3JkZXJSYWRpdXN9XG4gICAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzPXtib3JkZXJSYWRpdXN9XG4gICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM9e2JvcmRlclJhZGl1c31cbiAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1cz17Ym9yZGVyUmFkaXVzfVxuICAgICAgICBwYWRkaW5nVG9wPXtwYWRkaW5nVG9wfVxuICAgICAgICBwYWRkaW5nQm90dG9tPXtwYWRkaW5nQm90dG9tfVxuICAgICAgICBwYWRkaW5nUmlnaHQ9e3ByfVxuICAgICAgICBwYWRkaW5nTGVmdD17cGx9XG4gICAgICAgIG1hcmdpbkxlZnQ9ezB9IC8vIFJlbW92ZXMgd2VpcmQgbWFyZ2lucyBpbiBTYWZhcmlcbiAgICAgICAgbWFyZ2luUmlnaHQ9ezB9IC8vIFJlbW92ZXMgd2VpcmQgbWFyZ2lucyBpbiBTYWZhcmlcbiAgICAgICAgbWFyZ2luVG9wPXswfSAvLyBSZW1vdmVzIHdlaXJkIG1hcmdpbnMgaW4gU2FmYXJpXG4gICAgICAgIG1hcmdpbkJvdHRvbT17MH0gLy8gUmVtb3ZlcyB3ZWlyZCBtYXJnaW5zIGluIFNhZmFyaVxuICAgICAgICBzaXplPXt0ZXh0U2l6ZX1cbiAgICAgICAgY29sb3I9e251bGx9IC8vIFByZXZlbnQgdGhlIFRleHQgY29sb3Igb3ZlcnJpZGluZyB0aGUgZ2xhbW9yIGFwcGVhcmFuY2VTdHlsZSBjb2xvclxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgbGluZUhlaWdodD17YCR7aGVpZ2h0fXB4YH1cbiAgICAgICAgey4uLihpc0FjdGl2ZSA/IHsgJ2RhdGEtYWN0aXZlJzogdHJ1ZSB9IDoge30pfVxuICAgICAgICB7Li4uQnV0dG9uLnN0eWxlc31cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWQgfHwgaXNMb2FkaW5nfVxuICAgICAgPlxuICAgICAgICB7aXNMb2FkaW5nICYmIChcbiAgICAgICAgICA8U3Bpbm5lclxuICAgICAgICAgICAgbWFyZ2luTGVmdD17LU1hdGgucm91bmQoaGVpZ2h0IC8gOCl9XG4gICAgICAgICAgICBtYXJnaW5SaWdodD17TWF0aC5yb3VuZChoZWlnaHQgLyA0KX1cbiAgICAgICAgICAgIHNpemU9e01hdGgucm91bmQoaGVpZ2h0IC8gMil9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPEljb24gaWNvbj17aWNvbkJlZm9yZX0gc2l6ZT17aWNvblNpemV9IHNwYWNpbmc9e3BsfSBlZGdlPVwic3RhcnRcIiAvPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxJY29uIGljb249e2ljb25BZnRlcn0gc2l6ZT17aWNvblNpemV9IHNwYWNpbmc9e3ByfSBlZGdlPVwiZW5kXCIgLz5cbiAgICAgIDwvVGV4dD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKEJ1dHRvbilcbiJdfQ==