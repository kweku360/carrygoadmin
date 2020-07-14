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

var _uiBox = _interopRequireWildcard(require("ui-box"));

var _typography = require("../../typography");

var _icons = require("../../icons");

var _theme = require("../../theme");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Select = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Select, _PureComponent);

  var _super = _createSuper(Select);

  function Select() {
    (0, _classCallCheck2["default"])(this, Select);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Select, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          id = _this$props.id,
          name = _this$props.name,
          height = _this$props.height,
          children = _this$props.children,
          defaultValue = _this$props.defaultValue,
          disabled = _this$props.disabled,
          onChange = _this$props.onChange,
          value = _this$props.value,
          required = _this$props.required,
          autoFocus = _this$props.autoFocus,
          isInvalid = _this$props.isInvalid,
          appearance = _this$props.appearance,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["theme", "id", "name", "height", "children", "defaultValue", "disabled", "onChange", "value", "required", "autoFocus", "isInvalid", "appearance"]);
      var themedClassName = theme.getSelectClassName(appearance);
      var textSize = theme.getTextSizeForControlHeight(height);
      var borderRadius = theme.getBorderRadiusForControlHeight(height);
      var iconSize = theme.getIconSizeForSelect(height);
      var iconMargin = height >= 36 ? 12 : 8;
      return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
        display: "inline-flex",
        flex: 1,
        position: "relative",
        width: "auto",
        height: height
      }, props), _react["default"].createElement(_typography.Text, {
        is: "select",
        className: themedClassName,
        id: id,
        name: name,
        onChange: onChange,
        defaultValue: defaultValue,
        value: value,
        required: required,
        autoFocus: autoFocus,
        disabled: disabled,
        "aria-invalid": String(isInvalid),
        size: textSize,
        borderRadius: borderRadius,
        textTransform: "default",
        paddingLeft: Math.round(height / 3.2) // Provide enough space for auto-sizing select including the icon
        ,
        paddingRight: iconMargin * 2 + iconSize
      }, children), _react["default"].createElement(_icons.CaretDownIcon, {
        color: "default",
        size: iconSize,
        position: "absolute",
        top: "50%",
        marginTop: -iconSize / 2,
        right: iconMargin,
        pointerEvents: "none"
      }));
    }
  }]);
  return Select;
}(_react.PureComponent);

Select.displayName = "Select";
(0, _defineProperty2["default"])(Select, "propTypes", _objectSpread({}, _uiBox.dimensions.propTypes, {}, _uiBox.spacing.propTypes, {}, _uiBox.position.propTypes, {}, _uiBox.layout.propTypes, {
  /**
   * The id attribute for the select.
   */
  id: _propTypes["default"].string,

  /**
   * The name attribute for the select.
   */
  name: _propTypes["default"].string,

  /**
   * The options that are passed to the select.
   */
  children: _propTypes["default"].node,

  /**
   * The initial value of an uncontrolled select
   */
  defaultValue: _propTypes["default"].any,

  /**
   * Function called when value changes.
   */
  onChange: _propTypes["default"].func,

  /**
   * The value of the select.
   */
  value: _propTypes["default"].any,

  /**
   * When true, the select is required.
   */
  required: _propTypes["default"].bool,

  /**
   * When true, the select should auto focus.
   */
  autoFocus: _propTypes["default"].bool,

  /**
   * When true, the select is invalid.
   */
  isInvalid: _propTypes["default"].bool,

  /**
   * The appearance of the select. The default theme only supports default.
   */
  appearance: _propTypes["default"].string.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired
}));
(0, _defineProperty2["default"])(Select, "defaultProps", {
  appearance: 'default',
  height: 32,
  isInvalid: false
});

var _default = (0, _theme.withTheme)(Select);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3Qvc3JjL1NlbGVjdC5qcyJdLCJuYW1lcyI6WyJTZWxlY3QiLCJwcm9wcyIsInRoZW1lIiwiaWQiLCJuYW1lIiwiaGVpZ2h0IiwiY2hpbGRyZW4iLCJkZWZhdWx0VmFsdWUiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwidmFsdWUiLCJyZXF1aXJlZCIsImF1dG9Gb2N1cyIsImlzSW52YWxpZCIsImFwcGVhcmFuY2UiLCJ0aGVtZWRDbGFzc05hbWUiLCJnZXRTZWxlY3RDbGFzc05hbWUiLCJ0ZXh0U2l6ZSIsImdldFRleHRTaXplRm9yQ29udHJvbEhlaWdodCIsImJvcmRlclJhZGl1cyIsImdldEJvcmRlclJhZGl1c0ZvckNvbnRyb2xIZWlnaHQiLCJpY29uU2l6ZSIsImdldEljb25TaXplRm9yU2VsZWN0IiwiaWNvbk1hcmdpbiIsIlN0cmluZyIsIk1hdGgiLCJyb3VuZCIsIlB1cmVDb21wb25lbnQiLCJkaW1lbnNpb25zIiwicHJvcFR5cGVzIiwic3BhY2luZyIsInBvc2l0aW9uIiwibGF5b3V0IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibm9kZSIsImFueSIsImZ1bmMiLCJib29sIiwiaXNSZXF1aXJlZCIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsTTs7Ozs7Ozs7Ozs7OzZCQW9GSztBQUFBLHdCQWlCSCxLQUFLQyxLQWpCRjtBQUFBLFVBRUxDLEtBRkssZUFFTEEsS0FGSztBQUFBLFVBSUxDLEVBSkssZUFJTEEsRUFKSztBQUFBLFVBS0xDLElBTEssZUFLTEEsSUFMSztBQUFBLFVBTUxDLE1BTkssZUFNTEEsTUFOSztBQUFBLFVBT0xDLFFBUEssZUFPTEEsUUFQSztBQUFBLFVBUUxDLFlBUkssZUFRTEEsWUFSSztBQUFBLFVBU0xDLFFBVEssZUFTTEEsUUFUSztBQUFBLFVBVUxDLFFBVkss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QUFBLFNBQVMsRUFBRXFCLHNCQUFVSyxJOztBQUVyQjs7O0FBR0F6QixFQUFBQSxTQUFTLEVBQUVvQixzQkFBVUssSTs7QUFFckI7OztBQUdBeEIsRUFBQUEsVUFBVSxFQUFFbUIsc0JBQVVDLE1BQVYsQ0FBaUJLLFU7O0FBRTdCOzs7QUFHQXJDLEVBQUFBLEtBQUssRUFBRStCLHNCQUFVTyxNQUFWLENBQWlCRDs7aUNBM0V0QnZDLE0sa0JBOEVrQjtBQUNwQmMsRUFBQUEsVUFBVSxFQUFFLFNBRFE7QUFFcEJULEVBQUFBLE1BQU0sRUFBRSxFQUZZO0FBR3BCUSxFQUFBQSxTQUFTLEVBQUU7QUFIUyxDOztlQTJFVCxzQkFBVWIsTUFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3gsIHsgZGltZW5zaW9ucywgc3BhY2luZywgcG9zaXRpb24sIGxheW91dCB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgQ2FyZXREb3duSWNvbiB9IGZyb20gJy4uLy4uL2ljb25zJ1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNsYXNzIFNlbGVjdCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBkaW1lbnNpb25zIHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2ZS5cbiAgICAgKi9cbiAgICAuLi5kaW1lbnNpb25zLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBzcGFjaW5nIHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2ZS5cbiAgICAgKi9cbiAgICAuLi5zcGFjaW5nLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBwb3NpdGlvbiBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAgICovXG4gICAgLi4ucG9zaXRpb24ucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIGxheW91dCBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAgICovXG4gICAgLi4ubGF5b3V0LnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBpZCBhdHRyaWJ1dGUgZm9yIHRoZSBzZWxlY3QuXG4gICAgICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBhdHRyaWJ1dGUgZm9yIHRoZSBzZWxlY3QuXG4gICAgICovXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25zIHRoYXQgYXJlIHBhc3NlZCB0byB0aGUgc2VsZWN0LlxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbml0aWFsIHZhbHVlIG9mIGFuIHVuY29udHJvbGxlZCBzZWxlY3RcbiAgICAgKi9cbiAgICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5hbnksXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiB2YWx1ZSBjaGFuZ2VzLlxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgc2VsZWN0LlxuICAgICAqL1xuICAgIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgc2VsZWN0IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIHNlbGVjdCBzaG91bGQgYXV0byBmb2N1cy5cbiAgICAgKi9cbiAgICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgc2VsZWN0IGlzIGludmFsaWQuXG4gICAgICovXG4gICAgaXNJbnZhbGlkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSBzZWxlY3QuIFRoZSBkZWZhdWx0IHRoZW1lIG9ubHkgc3VwcG9ydHMgZGVmYXVsdC5cbiAgICAgKi9cbiAgICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYXBwZWFyYW5jZTogJ2RlZmF1bHQnLFxuICAgIGhlaWdodDogMzIsXG4gICAgaXNJbnZhbGlkOiBmYWxzZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRoZW1lLFxuXG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICB2YWx1ZSxcbiAgICAgIHJlcXVpcmVkLFxuICAgICAgYXV0b0ZvY3VzLFxuICAgICAgaXNJbnZhbGlkLFxuICAgICAgYXBwZWFyYW5jZSxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHRoZW1lZENsYXNzTmFtZSA9IHRoZW1lLmdldFNlbGVjdENsYXNzTmFtZShhcHBlYXJhbmNlKVxuICAgIGNvbnN0IHRleHRTaXplID0gdGhlbWUuZ2V0VGV4dFNpemVGb3JDb250cm9sSGVpZ2h0KGhlaWdodClcbiAgICBjb25zdCBib3JkZXJSYWRpdXMgPSB0aGVtZS5nZXRCb3JkZXJSYWRpdXNGb3JDb250cm9sSGVpZ2h0KGhlaWdodClcbiAgICBjb25zdCBpY29uU2l6ZSA9IHRoZW1lLmdldEljb25TaXplRm9yU2VsZWN0KGhlaWdodClcbiAgICBjb25zdCBpY29uTWFyZ2luID0gaGVpZ2h0ID49IDM2ID8gMTIgOiA4XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBkaXNwbGF5PVwiaW5saW5lLWZsZXhcIlxuICAgICAgICBmbGV4PXsxfVxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgd2lkdGg9XCJhdXRvXCJcbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAgPFRleHRcbiAgICAgICAgICBpcz1cInNlbGVjdFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXt0aGVtZWRDbGFzc05hbWV9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgICAgYXV0b0ZvY3VzPXthdXRvRm9jdXN9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIGFyaWEtaW52YWxpZD17U3RyaW5nKGlzSW52YWxpZCl9XG4gICAgICAgICAgc2l6ZT17dGV4dFNpemV9XG4gICAgICAgICAgYm9yZGVyUmFkaXVzPXtib3JkZXJSYWRpdXN9XG4gICAgICAgICAgdGV4dFRyYW5zZm9ybT1cImRlZmF1bHRcIlxuICAgICAgICAgIHBhZGRpbmdMZWZ0PXtNYXRoLnJvdW5kKGhlaWdodCAvIDMuMil9XG4gICAgICAgICAgLy8gUHJvdmlkZSBlbm91Z2ggc3BhY2UgZm9yIGF1dG8tc2l6aW5nIHNlbGVjdCBpbmNsdWRpbmcgdGhlIGljb25cbiAgICAgICAgICBwYWRkaW5nUmlnaHQ9e2ljb25NYXJnaW4gKiAyICsgaWNvblNpemV9XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPENhcmV0RG93bkljb25cbiAgICAgICAgICBjb2xvcj1cImRlZmF1bHRcIlxuICAgICAgICAgIHNpemU9e2ljb25TaXplfVxuICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgIHRvcD1cIjUwJVwiXG4gICAgICAgICAgbWFyZ2luVG9wPXstaWNvblNpemUgLyAyfVxuICAgICAgICAgIHJpZ2h0PXtpY29uTWFyZ2lufVxuICAgICAgICAgIHBvaW50ZXJFdmVudHM9XCJub25lXCJcbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoU2VsZWN0KVxuIl19