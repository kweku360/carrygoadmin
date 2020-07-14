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

var _layers = require("../../layers");

var _typography = require("../../typography");

var _getIconForIntent = require("./getIconForIntent");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var InlineAlert = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(InlineAlert, _PureComponent);

  var _super = _createSuper(InlineAlert);

  function InlineAlert() {
    (0, _classCallCheck2["default"])(this, InlineAlert);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(InlineAlert, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          intent = _this$props.intent,
          hasIcon = _this$props.hasIcon,
          size = _this$props.size,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["children", "intent", "hasIcon", "size"]);
      return _react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
        alignItems: "center",
        display: "flex"
      }, props), hasIcon && _react["default"].createElement(_layers.Pane, {
        display: "inline",
        marginRight: 8
      }, (0, _getIconForIntent.getIconForIntent)(intent, {
        size: 14,
        marginTop: 2
      })), _react["default"].createElement(_typography.Text, {
        size: size,
        fontWeight: 500
      }, children));
    }
  }]);
  return InlineAlert;
}(_react.PureComponent);

InlineAlert.displayName = "InlineAlert";
(0, _defineProperty2["default"])(InlineAlert, "propTypes", _objectSpread({}, _uiBox.spacing.propTypes, {}, _uiBox.position.propTypes, {}, _uiBox.layout.propTypes, {}, _uiBox.dimensions.propTypes, {
  /**
   * The content of the alert.
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),

  /**
   * The intent of the alert. This should always be set explicitly.
   */
  intent: _propTypes["default"].oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * When true, show a icon on the left matching the type.
   * There is no point not showing this.
   */
  hasIcon: _propTypes["default"].bool,

  /**
   * The size of the Text.
   */
  size: _propTypes["default"].number
}));
(0, _defineProperty2["default"])(InlineAlert, "defaultProps", {
  intent: 'none',
  hasIcon: true,
  size: 400
});
var _default = InlineAlert;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbGVydC9zcmMvSW5saW5lQWxlcnQuanMiXSwibmFtZXMiOlsiSW5saW5lQWxlcnQiLCJwcm9wcyIsImNoaWxkcmVuIiwiaW50ZW50IiwiaGFzSWNvbiIsInNpemUiLCJtYXJnaW5Ub3AiLCJQdXJlQ29tcG9uZW50Iiwic3BhY2luZyIsInByb3BUeXBlcyIsInBvc2l0aW9uIiwibGF5b3V0IiwiZGltZW5zaW9ucyIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm5vZGUiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJib29sIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVNQSxXOzs7Ozs7Ozs7Ozs7NkJBdUNLO0FBQUEsd0JBQytDLEtBQUtDLEtBRHBEO0FBQUEsVUFDQ0MsUUFERCxlQUNDQSxRQUREO0FBQUEsVUFDV0MsTUFEWCxlQUNXQSxNQURYO0FBQUEsVUFDbUJDLE9BRG5CLGVBQ21CQSxPQURuQjtBQUFBLFVBQzRCQyxJQUQ1QixlQUM0QkEsSUFENUI7QUFBQSxVQUNxQ0osS0FEckM7QUFHUCxhQUNFLGdDQUFDLFlBQUQ7QUFBTSxRQUFBLFVBQVUsRUFBQyxRQUFqQjtBQUEwQixRQUFBLE9BQU8sRUFBQztBQUFsQyxTQUE2Q0EsS0FBN0MsR0FDR0csT0FBTyxJQUNOLGdDQUFDLFlBQUQ7QUFBTSxRQUFBLE9BQU8sRUFBQyxRQUFkO0FBQXVCLFFBQUEsV0FBVyxFQUFFO0FBQXBDLFNBQ0csd0NBQWlCRCxNQUFqQixFQUF5QjtBQUFFRSxRQUFBQSxJQUFJLEVBQUUsRUFBUjtBQUFZQyxRQUFBQSxTQUFTLEVBQUU7QUFBdkIsT0FBekIsQ0FESCxDQUZKLEVBTUUsZ0NBQUMsZ0JBQUQ7QUFBTSxRQUFBLElBQUksRUFBRUQsSUFBWjtBQUFrQixRQUFBLFVBQVUsRUFBRTtBQUE5QixTQUNHSCxRQURILENBTkYsQ0FERjtBQVlEOzs7RUF0RHVCSyxvQjs7QUFBcEJQLFc7aUNBQUFBLFcsaUNBS0NRLGVBQVFDLFMsTUFDUkMsZ0JBQVNELFMsTUFDVEUsY0FBT0YsUyxNQUNQRyxrQkFBV0gsUztBQUVkOzs7QUFHQVAsRUFBQUEsUUFBUSxFQUFFVyxzQkFBVUMsU0FBVixDQUFvQixDQUFDRCxzQkFBVUUsTUFBWCxFQUFtQkYsc0JBQVVHLElBQTdCLENBQXBCLEM7O0FBRVY7OztBQUdBYixFQUFBQSxNQUFNLEVBQUVVLHNCQUFVSSxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLFNBQVQsRUFBb0IsU0FBcEIsRUFBK0IsUUFBL0IsQ0FBaEIsRUFDTEMsVTs7QUFFSDs7OztBQUlBZCxFQUFBQSxPQUFPLEVBQUVTLHNCQUFVTSxJOztBQUVuQjs7O0FBR0FkLEVBQUFBLElBQUksRUFBRVEsc0JBQVVPOztpQ0E5QmRwQixXLGtCQWlDa0I7QUFDcEJHLEVBQUFBLE1BQU0sRUFBRSxNQURZO0FBRXBCQyxFQUFBQSxPQUFPLEVBQUUsSUFGVztBQUdwQkMsRUFBQUEsSUFBSSxFQUFFO0FBSGMsQztlQXdCVEwsVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBzcGFjaW5nLCBkaW1lbnNpb25zLCBwb3NpdGlvbiwgbGF5b3V0IH0gZnJvbSAndWktYm94J1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgZ2V0SWNvbkZvckludGVudCB9IGZyb20gJy4vZ2V0SWNvbkZvckludGVudCdcblxuY2xhc3MgSW5saW5lQWxlcnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyBzb21lIEJveCBBUElzLlxuICAgICAqL1xuICAgIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuICAgIC4uLnBvc2l0aW9uLnByb3BUeXBlcyxcbiAgICAuLi5sYXlvdXQucHJvcFR5cGVzLFxuICAgIC4uLmRpbWVuc2lvbnMucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGFsZXJ0LlxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGludGVudCBvZiB0aGUgYWxlcnQuIFRoaXMgc2hvdWxkIGFsd2F5cyBiZSBzZXQgZXhwbGljaXRseS5cbiAgICAgKi9cbiAgICBpbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbJ25vbmUnLCAnc3VjY2VzcycsICd3YXJuaW5nJywgJ2RhbmdlciddKVxuICAgICAgLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHNob3cgYSBpY29uIG9uIHRoZSBsZWZ0IG1hdGNoaW5nIHRoZSB0eXBlLlxuICAgICAqIFRoZXJlIGlzIG5vIHBvaW50IG5vdCBzaG93aW5nIHRoaXMuXG4gICAgICovXG4gICAgaGFzSWNvbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2l6ZSBvZiB0aGUgVGV4dC5cbiAgICAgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMubnVtYmVyXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGludGVudDogJ25vbmUnLFxuICAgIGhhc0ljb246IHRydWUsXG4gICAgc2l6ZTogNDAwXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgaW50ZW50LCBoYXNJY29uLCBzaXplLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBkaXNwbGF5PVwiZmxleFwiIHsuLi5wcm9wc30+XG4gICAgICAgIHtoYXNJY29uICYmIChcbiAgICAgICAgICA8UGFuZSBkaXNwbGF5PVwiaW5saW5lXCIgbWFyZ2luUmlnaHQ9ezh9PlxuICAgICAgICAgICAge2dldEljb25Gb3JJbnRlbnQoaW50ZW50LCB7IHNpemU6IDE0LCBtYXJnaW5Ub3A6IDIgfSl9XG4gICAgICAgICAgPC9QYW5lPlxuICAgICAgICApfVxuICAgICAgICA8VGV4dCBzaXplPXtzaXplfSBmb250V2VpZ2h0PXs1MDB9PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9QYW5lPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmxpbmVBbGVydFxuIl19