"use strict";

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

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _IconWrapper = require("../../icons/src/IconWrapper");

var _layers = require("../../layers");

var _typography = require("../../typography");

var _theme = require("../../theme");

var _safeInvoke = _interopRequireDefault(require("../../lib/safe-invoke"));

var _warning = _interopRequireDefault(require("../../lib/warning"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var MenuItem = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(MenuItem, _React$PureComponent);

  var _super = _createSuper(MenuItem);

  function MenuItem() {
    var _this;

    (0, _classCallCheck2["default"])(this, MenuItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function (event) {
      _this.props.onSelect(event);
      /* eslint-disable react/prop-types */


      (0, _safeInvoke["default"])(_this.props.onClick, event);
      /* eslint-enable react/prop-types */
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleKeyPress", function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        _this.props.onSelect(event);

        event.preventDefault();
      }
      /* eslint-disable react/prop-types */


      (0, _safeInvoke["default"])(_this.props.onKeyPress, event);
      /* eslint-enable react/prop-types */
    });
    return _this;
  }

  (0, _createClass2["default"])(MenuItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          is = _this$props.is,
          children = _this$props.children,
          theme = _this$props.theme,
          appearance = _this$props.appearance,
          secondaryText = _this$props.secondaryText,
          intent = _this$props.intent,
          icon = _this$props.icon,
          passthroughProps = (0, _objectWithoutProperties2["default"])(_this$props, ["is", "children", "theme", "appearance", "secondaryText", "intent", "icon"]);

      if (process.env.NODE_ENV !== 'production') {
        (0, _warning["default"])('onClick' in this.props, '<Menu.Item> expects `onSelect` prop, but you passed `onClick`.');
      }

      var themedClassName = theme.getMenuItemClassName(appearance, 'none');
      return _react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
        is: is,
        role: "menuitem",
        className: themedClassName,
        onClick: this.handleClick,
        onKeyPress: this.handleKeyPress,
        height: icon ? 40 : 32,
        tabIndex: 0,
        "data-isselectable": "true",
        display: "flex",
        alignItems: "center"
      }, passthroughProps), _react["default"].createElement(_IconWrapper.IconWrapper, {
        icon: icon,
        color: intent === 'none' ? 'default' : intent,
        marginLeft: 16,
        marginRight: -4,
        size: 16,
        flexShrink: 0
      }), _react["default"].createElement(_typography.Text, {
        color: intent,
        marginLeft: 16,
        marginRight: 16,
        flex: 1
      }, children), secondaryText && _react["default"].createElement(_typography.Text, {
        marginRight: 16,
        color: "muted"
      }, secondaryText));
    }
  }]);
  return MenuItem;
}(_react["default"].PureComponent);

MenuItem.displayName = "MenuItem";
(0, _defineProperty2["default"])(MenuItem, "propTypes", {
  /**
   * Element type to use for the menu item.
   * For example: `<MenuItem is={ReactRouterLink}>...</MenuItem>`
   */
  is: _uiBox["default"].propTypes.is,

  /**
   * Function that is called on click and enter/space keypress.
   */
  onSelect: _propTypes["default"].func,

  /**
   * The Evergreen or custom icon before the label.
   */
  icon: _propTypes["default"].node,

  /**
   * The children of the component.
   */
  children: _propTypes["default"].node,

  /**
   * Secondary text shown on the right.
   */
  secondaryText: _propTypes["default"].node,

  /**
   * The default theme only supports one default appearance.
   */
  appearance: _propTypes["default"].string.isRequired,

  /**
   * The intent of the menu item.
   */
  intent: _propTypes["default"].oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired
});
(0, _defineProperty2["default"])(MenuItem, "defaultProps", {
  is: 'div',
  intent: 'none',
  appearance: 'default',
  onSelect: function onSelect() {}
});

var _default = (0, _theme.withTheme)(MenuItem);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tZW51L3NyYy9NZW51SXRlbS5qcyJdLCJuYW1lcyI6WyJNZW51SXRlbSIsImV2ZW50IiwicHJvcHMiLCJvblNlbGVjdCIsIm9uQ2xpY2siLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsIm9uS2V5UHJlc3MiLCJpcyIsImNoaWxkcmVuIiwidGhlbWUiLCJhcHBlYXJhbmNlIiwic2Vjb25kYXJ5VGV4dCIsImludGVudCIsImljb24iLCJwYXNzdGhyb3VnaFByb3BzIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwidGhlbWVkQ2xhc3NOYW1lIiwiZ2V0TWVudUl0ZW1DbGFzc05hbWUiLCJoYW5kbGVDbGljayIsImhhbmRsZUtleVByZXNzIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiQm94IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsIm5vZGUiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwib25lT2YiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7SUFFTUEsUTs7Ozs7Ozs7Ozs7Ozs7O29HQW9EVSxVQUFBQyxLQUFLLEVBQUk7QUFDckIsWUFBS0MsS0FBTCxDQUFXQyxRQUFYLENBQW9CRixLQUFwQjtBQUVBOzs7QUFDQSxrQ0FBVyxNQUFLQyxLQUFMLENBQVdFLE9BQXRCLEVBQStCSCxLQUEvQjtBQUNBO0FBQ0QsSzt1R0FFZ0IsVUFBQUEsS0FBSyxFQUFJO0FBQ3hCLFVBQUlBLEtBQUssQ0FBQ0ksR0FBTixLQUFjLE9BQWQsSUFBeUJKLEtBQUssQ0FBQ0ksR0FBTixLQUFjLEdBQTNDLEVBQWdEO0FBQzlDLGNBQUtILEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkYsS0FBcEI7O0FBQ0FBLFFBQUFBLEtBQUssQ0FBQ0ssY0FBTjtBQUNEO0FBRUQ7OztBQUNBLGtDQUFXLE1BQUtKLEtB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Z0I7QUFFcEJLLEVBQUFBLE1BQU0sRUFBRSxNQUZZO0FBR3BCRixFQUFBQSxVQUFVLEVBQUUsU0FIUTtBQUlwQlIsRUFBQUEsUUFBUSxFQUFFLG9CQUFNLENBQUU7QUFKRSxDOztlQWtGVCxzQkFBVUgsUUFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBJY29uV3JhcHBlciB9IGZyb20gJy4uLy4uL2ljb25zL3NyYy9JY29uV3JhcHBlcidcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuaW1wb3J0IHNhZmVJbnZva2UgZnJvbSAnLi4vLi4vbGliL3NhZmUtaW52b2tlJ1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi4vLi4vbGliL3dhcm5pbmcnXG5cbmNsYXNzIE1lbnVJdGVtIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogRWxlbWVudCB0eXBlIHRvIHVzZSBmb3IgdGhlIG1lbnUgaXRlbS5cbiAgICAgKiBGb3IgZXhhbXBsZTogYDxNZW51SXRlbSBpcz17UmVhY3RSb3V0ZXJMaW5rfT4uLi48L01lbnVJdGVtPmBcbiAgICAgKi9cbiAgICBpczogQm94LnByb3BUeXBlcy5pcyxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIG9uIGNsaWNrIGFuZCBlbnRlci9zcGFjZSBrZXlwcmVzcy5cbiAgICAgKi9cbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgRXZlcmdyZWVuIG9yIGN1c3RvbSBpY29uIGJlZm9yZSB0aGUgbGFiZWwuXG4gICAgICovXG4gICAgaWNvbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2hpbGRyZW4gb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBTZWNvbmRhcnkgdGV4dCBzaG93biBvbiB0aGUgcmlnaHQuXG4gICAgICovXG4gICAgc2Vjb25kYXJ5VGV4dDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCB0aGVtZSBvbmx5IHN1cHBvcnRzIG9uZSBkZWZhdWx0IGFwcGVhcmFuY2UuXG4gICAgICovXG4gICAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGludGVudCBvZiB0aGUgbWVudSBpdGVtLlxuICAgICAqL1xuICAgIGludGVudDogUHJvcFR5cGVzLm9uZU9mKFsnbm9uZScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ10pXG4gICAgICAuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBpczogJ2RpdicsXG4gICAgaW50ZW50OiAnbm9uZScsXG4gICAgYXBwZWFyYW5jZTogJ2RlZmF1bHQnLFxuICAgIG9uU2VsZWN0OiAoKSA9PiB7fVxuICB9XG5cbiAgaGFuZGxlQ2xpY2sgPSBldmVudCA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblNlbGVjdChldmVudClcblxuICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cbiAgICBzYWZlSW52b2tlKHRoaXMucHJvcHMub25DbGljaywgZXZlbnQpXG4gICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG4gIH1cblxuICBoYW5kbGVLZXlQcmVzcyA9IGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInIHx8IGV2ZW50LmtleSA9PT0gJyAnKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGV2ZW50KVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cbiAgICBzYWZlSW52b2tlKHRoaXMucHJvcHMub25LZXlQcmVzcywgZXZlbnQpXG4gICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaXMsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIHRoZW1lLFxuICAgICAgYXBwZWFyYW5jZSxcbiAgICAgIHNlY29uZGFyeVRleHQsXG4gICAgICBpbnRlbnQsXG4gICAgICBpY29uLFxuICAgICAgLi4ucGFzc3Rocm91Z2hQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgd2FybmluZyhcbiAgICAgICAgJ29uQ2xpY2snIGluIHRoaXMucHJvcHMsXG4gICAgICAgICc8TWVudS5JdGVtPiBleHBlY3RzIGBvblNlbGVjdGAgcHJvcCwgYnV0IHlvdSBwYXNzZWQgYG9uQ2xpY2tgLidcbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCB0aGVtZWRDbGFzc05hbWUgPSB0aGVtZS5nZXRNZW51SXRlbUNsYXNzTmFtZShhcHBlYXJhbmNlLCAnbm9uZScpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmVcbiAgICAgICAgaXM9e2lzfVxuICAgICAgICByb2xlPVwibWVudWl0ZW1cIlxuICAgICAgICBjbGFzc05hbWU9e3RoZW1lZENsYXNzTmFtZX1cbiAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgb25LZXlQcmVzcz17dGhpcy5oYW5kbGVLZXlQcmVzc31cbiAgICAgICAgaGVpZ2h0PXtpY29uID8gNDAgOiAzMn1cbiAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgIGRhdGEtaXNzZWxlY3RhYmxlPVwidHJ1ZVwiXG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgIHsuLi5wYXNzdGhyb3VnaFByb3BzfVxuICAgICAgPlxuICAgICAgICA8SWNvbldyYXBwZXJcbiAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgIGNvbG9yPXtpbnRlbnQgPT09ICdub25lJyA/ICdkZWZhdWx0JyA6IGludGVudH1cbiAgICAgICAgICBtYXJnaW5MZWZ0PXsxNn1cbiAgICAgICAgICBtYXJnaW5SaWdodD17LTR9XG4gICAgICAgICAgc2l6ZT17MTZ9XG4gICAgICAgICAgZmxleFNocmluaz17MH1cbiAgICAgICAgLz5cbiAgICAgICAgPFRleHQgY29sb3I9e2ludGVudH0gbWFyZ2luTGVmdD17MTZ9IG1hcmdpblJpZ2h0PXsxNn0gZmxleD17MX0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIHtzZWNvbmRhcnlUZXh0ICYmIChcbiAgICAgICAgICA8VGV4dCBtYXJnaW5SaWdodD17MTZ9IGNvbG9yPVwibXV0ZWRcIj5cbiAgICAgICAgICAgIHtzZWNvbmRhcnlUZXh0fVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgKX1cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKE1lbnVJdGVtKVxuIl19