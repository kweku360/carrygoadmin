"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _glamor = require("glamor");

var _classnames = _interopRequireDefault(require("classnames"));

var _typography = require("../../typography");

var _theme = require("../../theme");

var _css;

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var labelClass = (0, _glamor.css)({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative'
});
var wrapperClass = (0, _glamor.css)((_css = {
  position: 'relative',
  display: 'flex',
  flex: 1,
  cursor: 'pointer',
  marginLeft: '-1px'
}, (0, _defineProperty2["default"])(_css, ":first-child .".concat(labelClass), {
  borderTopLeftRadius: 3,
  borderBottomLeftRadius: 3
}), (0, _defineProperty2["default"])(_css, ":last-child .".concat(labelClass), {
  borderTopRightRadius: 3,
  borderBottomRightRadius: 3
}), _css));
var offscreenCss = (0, _glamor.css)({
  overflow: 'hidden',
  position: 'absolute',
  height: '1px',
  width: '1px',
  padding: 0,
  margin: '-1px',
  border: 0,
  clip: 'rect(0 0 0 0)'
});

var SegmentedControlRadio = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(SegmentedControlRadio, _PureComponent);

  var _super = _createSuper(SegmentedControlRadio);

  function SegmentedControlRadio() {
    (0, _classCallCheck2["default"])(this, SegmentedControlRadio);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(SegmentedControlRadio, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          id = _this$props.id,
          name = _this$props.name,
          label = _this$props.label,
          value = _this$props.value,
          height = _this$props.height,
          checked = _this$props.checked,
          _onChange = _this$props.onChange,
          appearance = _this$props.appearance,
          isFirstItem = _this$props.isFirstItem,
          isLastItem = _this$props.isLastItem,
          disabled = _this$props.disabled;
      var themedClassName = theme.getSegmentedControlRadioClassName(appearance);
      var textSize = theme.getTextSizeForControlHeight(height);
      var borderRadius = theme.getBorderRadiusForControlHeight(height);
      return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
        className: (0, _classnames["default"])(wrapperClass.toString(), themedClassName),
        "data-active": checked
      }, isFirstItem ? {
        borderTopLeftRadius: borderRadius,
        borderBottomLeftRadius: borderRadius
      } : {}, isLastItem ? {
        borderTopRightRadius: borderRadius,
        borderBottomRightRadius: borderRadius
      } : {}), _react["default"].createElement("input", {
        type: "radio",
        id: id,
        className: "".concat(offscreenCss),
        name: name,
        value: value,
        checked: checked,
        onChange: function onChange(e) {
          return _onChange(e.target.value);
        },
        disabled: disabled
      }), _react["default"].createElement(_typography.Text, {
        is: "label",
        cursor: "pointer",
        htmlFor: id,
        fontWeight: 500,
        size: textSize,
        className: "".concat(labelClass),
        disabled: disabled
      }, label));
    }
  }]);
  return SegmentedControlRadio;
}(_react.PureComponent);

SegmentedControlRadio.displayName = "SegmentedControlRadio";
(0, _defineProperty2["default"])(SegmentedControlRadio, "propTypes", {
  /**
   * The name attribute of the radio input.
   */
  name: _propTypes["default"].string.isRequired,

  /**
   * The label used for the radio.
   */
  label: _propTypes["default"].node.isRequired,

  /**
   * The value attribute of the radio input.
   */
  value: _propTypes["default"].string.isRequired,

  /**
   * The height of the control.
   */
  height: _propTypes["default"].number.isRequired,

  /**
   * When true, the radio input is checked.
   */
  checked: _propTypes["default"].bool.isRequired,

  /**
   * Function called when the state changes.
   */
  onChange: _propTypes["default"].func.isRequired,

  /**
   * The appearance of the control. Currently only `default` is possible.
   */
  appearance: _propTypes["default"].string.isRequired,

  /**
   * When true, this item is the first item.
   */
  isFirstItem: _propTypes["default"].bool,

  /**
   * When true, this item is the last item.
   */
  isLastItem: _propTypes["default"].bool,

  /**
   * The unique id of the radio option.
   */
  id: _propTypes["default"].string,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired,

  /**
   * When true, the input is disabled.
   */
  disabled: _propTypes["default"].bool
});

var _default = (0, _theme.withTheme)(SegmentedControlRadio);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWdtZW50ZWQtY29udHJvbC9zcmMvU2VnbWVudGVkQ29udHJvbFJhZGlvLmpzIl0sIm5hbWVzIjpbImxhYmVsQ2xhc3MiLCJkaXNwbGF5IiwiZmxleCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBvc2l0aW9uIiwid3JhcHBlckNsYXNzIiwiY3Vyc29yIiwibWFyZ2luTGVmdCIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzIiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJib3JkZXJCb3R0b21SaWdodFJhZGl1cyIsIm9mZnNjcmVlbkNzcyIsIm92ZXJmbG93IiwiaGVpZ2h0Iiwid2lkdGgiLCJwYWRkaW5nIiwibWFyZ2luIiwiYm9yZGVyIiwiY2xpcCIsIlNlZ21lbnRlZENvbnRyb2xSYWRpbyIsInByb3BzIiwidGhlbWUiLCJpZCIsIm5hbWUiLCJsYWJlbCIsInZhbHVlIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwiYXBwZWFyYW5jZSIsImlzRmlyc3RJdGVtIiwiaXNMYXN0SXRlbSIsImRpc2FibGVkIiwidGhlbWVkQ2xhc3NOYW1lIiwiZ2V0U2VnbWVudGVkQ29udHJvbFJhZGlvQ2xhc3NOYW1lIiwidGV4dFNpemUiLCJnZXRUZXh0U2l6ZUZvckNvbnRyb2xIZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJnZXRCb3JkZXJSYWRpdXNGb3JDb250cm9sSGVpZ2h0IiwidG9TdHJpbmciLCJlIiwidGFyZ2V0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJub2RlIiwibnVtYmVyIiwiYm9vbCIsImZ1bmMiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsaUJBQUk7QUFDckJDLEVBQUFB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akRHOztBQW1EakI7OztBQUdBdEIsRUFBQUEsS0FBSyxFQUFFcUIsc0JBQVVPLE1BQVYsQ0FBaUJMLFVBdERQOztBQXdEakI7OztBQUdBYixFQUFBQSxRQUFRLEVBQUVXLHNCQUFVSztBQTNESCxDOztlQThITixzQkFBVTVCLHFCQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNvbnN0IGxhYmVsQ2xhc3MgPSBjc3Moe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXg6IDEsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnXG59KVxuXG5jb25zdCB3cmFwcGVyQ2xhc3MgPSBjc3Moe1xuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4OiAxLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgbWFyZ2luTGVmdDogJy0xcHgnLFxuICBbYDpmaXJzdC1jaGlsZCAuJHtsYWJlbENsYXNzfWBdOiB7XG4gICAgYm9yZGVyVG9wTGVmdFJhZGl1czogMyxcbiAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiAzXG4gIH0sXG4gIFtgOmxhc3QtY2hpbGQgLiR7bGFiZWxDbGFzc31gXToge1xuICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAzLFxuICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAzXG4gIH1cbn0pXG5cbmNvbnN0IG9mZnNjcmVlbkNzcyA9IGNzcyh7XG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIGhlaWdodDogJzFweCcsXG4gIHdpZHRoOiAnMXB4JyxcbiAgcGFkZGluZzogMCxcbiAgbWFyZ2luOiAnLTFweCcsXG4gIGJvcmRlcjogMCxcbiAgY2xpcDogJ3JlY3QoMCAwIDAgMCknXG59KVxuXG5jbGFzcyBTZWdtZW50ZWRDb250cm9sUmFkaW8gZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBhdHRyaWJ1dGUgb2YgdGhlIHJhZGlvIGlucHV0LlxuICAgICAqL1xuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCB1c2VkIGZvciB0aGUgcmFkaW8uXG4gICAgICovXG4gICAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgYXR0cmlidXRlIG9mIHRoZSByYWRpbyBpbnB1dC5cbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgY29udHJvbC5cbiAgICAgKi9cbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIHJhZGlvIGlucHV0IGlzIGNoZWNrZWQuXG4gICAgICovXG4gICAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBzdGF0ZSBjaGFuZ2VzLlxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGNvbnRyb2wuIEN1cnJlbnRseSBvbmx5IGBkZWZhdWx0YCBpcyBwb3NzaWJsZS5cbiAgICAgKi9cbiAgICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoaXMgaXRlbSBpcyB0aGUgZmlyc3QgaXRlbS5cbiAgICAgKi9cbiAgICBpc0ZpcnN0SXRlbTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoaXMgaXRlbSBpcyB0aGUgbGFzdCBpdGVtLlxuICAgICAqL1xuICAgIGlzTGFzdEl0ZW06IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHVuaXF1ZSBpZCBvZiB0aGUgcmFkaW8gb3B0aW9uLlxuICAgICAqL1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgaW5wdXQgaXMgZGlzYWJsZWQuXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGhlbWUsXG5cbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICAgIGxhYmVsLFxuICAgICAgdmFsdWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBjaGVja2VkLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBhcHBlYXJhbmNlLFxuICAgICAgaXNGaXJzdEl0ZW0sXG4gICAgICBpc0xhc3RJdGVtLFxuICAgICAgZGlzYWJsZWRcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgdGhlbWVkQ2xhc3NOYW1lID0gdGhlbWUuZ2V0U2VnbWVudGVkQ29udHJvbFJhZGlvQ2xhc3NOYW1lKGFwcGVhcmFuY2UpXG4gICAgY29uc3QgdGV4dFNpemUgPSB0aGVtZS5nZXRUZXh0U2l6ZUZvckNvbnRyb2xIZWlnaHQoaGVpZ2h0KVxuICAgIGNvbnN0IGJvcmRlclJhZGl1cyA9IHRoZW1lLmdldEJvcmRlclJhZGl1c0ZvckNvbnRyb2xIZWlnaHQoaGVpZ2h0KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgY2xhc3NOYW1lPXtjeCh3cmFwcGVyQ2xhc3MudG9TdHJpbmcoKSwgdGhlbWVkQ2xhc3NOYW1lKX1cbiAgICAgICAgZGF0YS1hY3RpdmU9e2NoZWNrZWR9XG4gICAgICAgIHsuLi4oaXNGaXJzdEl0ZW1cbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogYm9yZGVyUmFkaXVzLFxuICAgICAgICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiBib3JkZXJSYWRpdXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IHt9KX1cbiAgICAgICAgey4uLihpc0xhc3RJdGVtXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgICAgICAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiBib3JkZXJSYWRpdXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IHt9KX1cbiAgICAgID5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtvZmZzY3JlZW5Dc3N9YH1cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgaXM9XCJsYWJlbFwiXG4gICAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXG4gICAgICAgICAgaHRtbEZvcj17aWR9XG4gICAgICAgICAgZm9udFdlaWdodD17NTAwfVxuICAgICAgICAgIHNpemU9e3RleHRTaXplfVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7bGFiZWxDbGFzc31gfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgPlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShTZWdtZW50ZWRDb250cm9sUmFkaW8pXG4iXX0=