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

var _layers = require("../../layers");

var _typography = require("../../typography");

var _buttons = require("../../buttons");

var _icons = require("../../icons");

var _getIconForIntent = require("./getIconForIntent");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Alert = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Alert, _PureComponent);

  var _super = _createSuper(Alert);

  function Alert() {
    (0, _classCallCheck2["default"])(this, Alert);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Alert, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          title = _this$props.title,
          intent = _this$props.intent,
          hasTrim = _this$props.hasTrim,
          hasIcon = _this$props.hasIcon,
          children = _this$props.children,
          appearance = _this$props.appearance,
          isRemoveable = _this$props.isRemoveable,
          onRemove = _this$props.onRemove,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["theme", "title", "intent", "hasTrim", "hasIcon", "children", "appearance", "isRemoveable", "onRemove"]);
      /**
       * Note that Alert return a className and additional properties.
       */

      var _theme$getAlertProps = theme.getAlertProps({
        appearance: appearance,
        intent: intent,
        hasTrim: hasTrim
      }),
          className = _theme$getAlertProps.className,
          themeProps = (0, _objectWithoutProperties2["default"])(_theme$getAlertProps, ["className"]);

      return _react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
        className: className,
        role: "alert",
        backgroundColor: "white",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        paddingY: 12,
        paddingX: 16
      }, themeProps, props), hasIcon && _react["default"].createElement(_layers.Pane, {
        marginRight: 10,
        marginLeft: 2,
        height: 20,
        display: "flex",
        alignItems: "center"
      }, (0, _getIconForIntent.getIconForIntent)(intent, {
        size: 14
      })), _react["default"].createElement(_layers.Pane, {
        display: "flex",
        width: "100%"
      }, _react["default"].createElement(_layers.Pane, {
        flex: 1
      }, _react["default"].createElement(_typography.Heading, {
        is: "h4",
        fontWeight: 600,
        size: 400,
        marginTop: 0,
        marginBottom: 0
      }, title), typeof children === 'string' ? _react["default"].createElement(_typography.Paragraph, {
        size: 400,
        color: "muted"
      }, children) : children), isRemoveable && _react["default"].createElement(_layers.Pane, {
        marginLeft: 24,
        flexShrink: 0,
        marginBottom: -2,
        marginTop: -2,
        marginRight: -2
      }, _react["default"].createElement(_buttons.IconButton, {
        icon: _react["default"].createElement(_icons.CrossIcon, null),
        appearance: "minimal",
        height: 24,
        onClick: onRemove
      }))));
    }
  }]);
  return Alert;
}(_react.PureComponent);

Alert.displayName = "Alert";
(0, _defineProperty2["default"])(Alert, "propTypes", _objectSpread({}, _uiBox.spacing.propTypes, {}, _uiBox.position.propTypes, {}, _uiBox.layout.propTypes, {}, _uiBox.dimensions.propTypes, {
  /**
   * The content of the alert. When a string is passed it is wrapped in a `<Text size={400} />` component.
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),

  /**
   * The intent of the alert.
   */
  intent: _propTypes["default"].oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * The title of the alert.
   */
  title: _propTypes["default"].node,

  /**
   * When true, show a border on the left matching the type.
   */
  hasTrim: _propTypes["default"].bool,

  /**
   * When true, show a icon on the left matching the type,
   */
  hasIcon: _propTypes["default"].bool,

  /**
   * When true, show a remove icon button.
   */
  isRemoveable: _propTypes["default"].bool,

  /**
   * Function called when the remove button is clicked.
   */
  onRemove: _propTypes["default"].func,

  /**
   * The appearance of the alert.
   */
  appearance: _propTypes["default"].oneOf(['default', 'card']),

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired
}));
(0, _defineProperty2["default"])(Alert, "defaultProps", {
  intent: 'none',
  hasTrim: true,
  hasIcon: true,
  isRemoveable: false,
  appearance: 'default'
});

var _default = (0, _theme.withTheme)(Alert);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbGVydC9zcmMvQWxlcnQuanMiXSwibmFtZXMiOlsiQWxlcnQiLCJwcm9wcyIsInRoZW1lIiwidGl0bGUiLCJpbnRlbnQiLCJoYXNUcmltIiwiaGFzSWNvbiIsImNoaWxkcmVuIiwiYXBwZWFyYW5jZSIsImlzUmVtb3ZlYWJsZSIsIm9uUmVtb3ZlIiwiZ2V0QWxlcnRQcm9wcyIsImNsYXNzTmFtZSIsInRoZW1lUHJvcHMiLCJzaXplIiwiUHVyZUNvbXBvbmVudCIsInNwYWNpbmciLCJwcm9wVHlwZXMiLCJwb3NpdGlvbiIsImxheW91dCIsImRpbWVuc2lvbnMiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJub2RlIiwib25lT2YiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImZ1bmMiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRU1BLEs7Ozs7Ozs7Ozs7Ozs2QkFpRUs7QUFBQSx3QkFhSCxLQUFLQyxLQWJGO0FBQUEsVUFFTEMsS0FGSyxlQUVMQSxLQUZLO0FBQUEsVUFJTEMsS0FKSyxlQUlMQSxLQUpLO0FBQUEsVUFLTEMsTUFMSyxlQUtMQSxNQUxLO0FBQUEsVUFNTEMsT0FOSyxlQU1MQSxPQU5LO0FBQUEsVUFPTEMsT0FQSyxlQU9MQSxPQVBLO0FBQUEsVUFRTEMsUUFSSyxlQVFMQSxRQVJLO0FBQUEsVUFTTEMsVUFUSyxlQVNMQSxVQVRLO0FBQUEsVUFVTEMsWUFWSyxlQVVMQSxZQVZLO0FBQUEsVUFXTEMsUUFYSyxlQVdMQSxRQVhLO0FBQUEsVUFZRlQsS0FaRTtBQWVQOzs7O0FBZk8saUNBa0I4QkMsS0FBSyxDQUFDUyxhQUFOLENBQW9CO0FBQ3ZESCxRQUFBQSxVQUFVLEVBQVZBLFVBRHVEO0FBRXZESixRQUFBQSxNQUFNLEVBQU5BLE1BRnVEO0FBR3ZE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cEIsRUFBQUEsVUFBVSxFQUFFYSxzQkFBVUksS0FBVixDQUFnQixDQUFDLFNBQUQsRUFBWSxNQUFaLENBQWhCLEM7O0FBRVo7OztBQUdBdkIsRUFBQUEsS0FBSyxFQUFFbUIsc0JBQVVRLE1BQVYsQ0FBaUJIOztpQ0F0RHRCMUIsSyxrQkF5RGtCO0FBQ3BCSSxFQUFBQSxNQUFNLEVBQUUsTUFEWTtBQUVwQkMsRUFBQUEsT0FBTyxFQUFFLElBRlc7QUFHcEJDLEVBQUFBLE9BQU8sRUFBRSxJQUhXO0FBSXBCRyxFQUFBQSxZQUFZLEVBQUUsS0FKTTtBQUtwQkQsRUFBQUEsVUFBVSxFQUFFO0FBTFEsQzs7ZUFpR1Qsc0JBQVVSLEtBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBzcGFjaW5nLCBkaW1lbnNpb25zLCBwb3NpdGlvbiwgbGF5b3V0IH0gZnJvbSAndWktYm94J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IHsgSGVhZGluZywgUGFyYWdyYXBoIH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IEljb25CdXR0b24gfSBmcm9tICcuLi8uLi9idXR0b25zJ1xuaW1wb3J0IHsgQ3Jvc3NJY29uIH0gZnJvbSAnLi4vLi4vaWNvbnMnXG5pbXBvcnQgeyBnZXRJY29uRm9ySW50ZW50IH0gZnJvbSAnLi9nZXRJY29uRm9ySW50ZW50J1xuXG5jbGFzcyBBbGVydCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHNvbWUgQm94IEFQSXMuXG4gICAgICovXG4gICAgLi4uc3BhY2luZy5wcm9wVHlwZXMsXG4gICAgLi4ucG9zaXRpb24ucHJvcFR5cGVzLFxuICAgIC4uLmxheW91dC5wcm9wVHlwZXMsXG4gICAgLi4uZGltZW5zaW9ucy5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29udGVudCBvZiB0aGUgYWxlcnQuIFdoZW4gYSBzdHJpbmcgaXMgcGFzc2VkIGl0IGlzIHdyYXBwZWQgaW4gYSBgPFRleHQgc2l6ZT17NDAwfSAvPmAgY29tcG9uZW50LlxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGludGVudCBvZiB0aGUgYWxlcnQuXG4gICAgICovXG4gICAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoWydub25lJywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInXSlcbiAgICAgIC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHRpdGxlIG9mIHRoZSBhbGVydC5cbiAgICAgKi9cbiAgICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHNob3cgYSBib3JkZXIgb24gdGhlIGxlZnQgbWF0Y2hpbmcgdGhlIHR5cGUuXG4gICAgICovXG4gICAgaGFzVHJpbTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHNob3cgYSBpY29uIG9uIHRoZSBsZWZ0IG1hdGNoaW5nIHRoZSB0eXBlLFxuICAgICAqL1xuICAgIGhhc0ljb246IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBzaG93IGEgcmVtb3ZlIGljb24gYnV0dG9uLlxuICAgICAqL1xuICAgIGlzUmVtb3ZlYWJsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgcmVtb3ZlIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgICAqL1xuICAgIG9uUmVtb3ZlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSBhbGVydC5cbiAgICAgKi9cbiAgICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ2NhcmQnXSksXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaW50ZW50OiAnbm9uZScsXG4gICAgaGFzVHJpbTogdHJ1ZSxcbiAgICBoYXNJY29uOiB0cnVlLFxuICAgIGlzUmVtb3ZlYWJsZTogZmFsc2UsXG4gICAgYXBwZWFyYW5jZTogJ2RlZmF1bHQnXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGhlbWUsXG5cbiAgICAgIHRpdGxlLFxuICAgICAgaW50ZW50LFxuICAgICAgaGFzVHJpbSxcbiAgICAgIGhhc0ljb24sXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGFwcGVhcmFuY2UsXG4gICAgICBpc1JlbW92ZWFibGUsXG4gICAgICBvblJlbW92ZSxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIC8qKlxuICAgICAqIE5vdGUgdGhhdCBBbGVydCByZXR1cm4gYSBjbGFzc05hbWUgYW5kIGFkZGl0aW9uYWwgcHJvcGVydGllcy5cbiAgICAgKi9cbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgLi4udGhlbWVQcm9wcyB9ID0gdGhlbWUuZ2V0QWxlcnRQcm9wcyh7XG4gICAgICBhcHBlYXJhbmNlLFxuICAgICAgaW50ZW50LFxuICAgICAgaGFzVHJpbVxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmVcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHJvbGU9XCJhbGVydFwiXG4gICAgICAgIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgb3ZlcmZsb3c9XCJoaWRkZW5cIlxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBwYWRkaW5nWT17MTJ9XG4gICAgICAgIHBhZGRpbmdYPXsxNn1cbiAgICAgICAgey4uLnRoZW1lUHJvcHN9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAge2hhc0ljb24gJiYgKFxuICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICBtYXJnaW5SaWdodD17MTB9XG4gICAgICAgICAgICBtYXJnaW5MZWZ0PXsyfVxuICAgICAgICAgICAgaGVpZ2h0PXsyMH1cbiAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtnZXRJY29uRm9ySW50ZW50KGludGVudCwgeyBzaXplOiAxNCB9KX1cbiAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICl9XG4gICAgICAgIDxQYW5lIGRpc3BsYXk9XCJmbGV4XCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgICAgPFBhbmUgZmxleD17MX0+XG4gICAgICAgICAgICA8SGVhZGluZ1xuICAgICAgICAgICAgICBpcz1cImg0XCJcbiAgICAgICAgICAgICAgZm9udFdlaWdodD17NjAwfVxuICAgICAgICAgICAgICBzaXplPXs0MDB9XG4gICAgICAgICAgICAgIG1hcmdpblRvcD17MH1cbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tPXswfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICB7dHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJyA/IChcbiAgICAgICAgICAgICAgPFBhcmFncmFwaCBzaXplPXs0MDB9IGNvbG9yPVwibXV0ZWRcIj5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgIHtpc1JlbW92ZWFibGUgJiYgKFxuICAgICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdD17MjR9XG4gICAgICAgICAgICAgIGZsZXhTaHJpbms9ezB9XG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbT17LTJ9XG4gICAgICAgICAgICAgIG1hcmdpblRvcD17LTJ9XG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0PXstMn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICBpY29uPXs8Q3Jvc3NJY29uIC8+fVxuICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJtaW5pbWFsXCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezI0fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVtb3ZlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvUGFuZT5cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKEFsZXJ0KVxuIl19