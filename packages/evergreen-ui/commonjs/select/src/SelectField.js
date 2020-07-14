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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = require("ui-box");

var _formField = require("../../form-field");

var _Select = _interopRequireDefault(require("./Select"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var idCounter = 0;

var TextInputField = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(TextInputField, _PureComponent);

  var _super = _createSuper(TextInputField);

  function TextInputField() {
    var _this;

    (0, _classCallCheck2["default"])(this, TextInputField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      id: (_this.props.id || idCounter++).toString()
    });
    return _this;
  }

  (0, _createClass2["default"])(TextInputField, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          unusedId = _this$props.id,
          hint = _this$props.hint,
          label = _this$props.label,
          description = _this$props.description,
          validationMessage = _this$props.validationMessage,
          inputHeight = _this$props.inputHeight,
          inputWidth = _this$props.inputWidth,
          disabled = _this$props.disabled,
          required = _this$props.required,
          isInvalid = _this$props.isInvalid,
          appearance = _this$props.appearance,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["id", "hint", "label", "description", "validationMessage", "inputHeight", "inputWidth", "disabled", "required", "isInvalid", "appearance"]);
      var id = "SelectField-".concat(this.state.id);
      /**
       * Split the wrapper props from the input props.
       */

      var _splitBoxProps = (0, _uiBox.splitBoxProps)(props),
          matchedProps = _splitBoxProps.matchedProps,
          remainingProps = _splitBoxProps.remainingProps;

      return _react["default"].createElement(_formField.FormField, (0, _extends2["default"])({
        marginBottom: 24,
        label: label,
        isRequired: required,
        hint: hint,
        description: description,
        validationMessage: validationMessage,
        labelFor: id
      }, matchedProps), _react["default"].createElement(_Select["default"], (0, _extends2["default"])({
        id: id,
        width: inputWidth,
        height: inputHeight,
        disabled: disabled,
        required: required,
        isInvalid: isInvalid,
        appearance: appearance
      }, remainingProps)));
    }
  }]);
  return TextInputField;
}(_react.PureComponent);

exports["default"] = TextInputField;
TextInputField.displayName = "TextInputField";
(0, _defineProperty2["default"])(TextInputField, "propTypes", _objectSpread({}, _Select["default"].propTypes, {}, _formField.FormField.propTypes, {
  /**
   * The label used above the input element.
   */
  label: _propTypes["default"].node.isRequired,

  /**
   * Passed on the label as a htmlFor prop.
   */
  labelFor: _propTypes["default"].string,

  /**
   * Whether or not to show an asterix after the label.
   */
  isRequired: _propTypes["default"].bool,

  /**
   * An optional description of the field under the label, above the input element.
   */
  description: _propTypes["default"].node,

  /**
   * An optional hint under the input element.
   */
  hint: _propTypes["default"].node,

  /**
   * If a validation message is passed it is shown under the input element
   * and above the hint. This is unaffected by `isInvalid`.
   */
  validationMessage: _propTypes["default"].node,

  /**
   * The height of the input element.
   */
  inputHeight: _propTypes["default"].number,

  /**
   * The width of the input width.
   */
  inputWidth: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])
}));
(0, _defineProperty2["default"])(TextInputField, "defaultProps", {
  /**
   * The input width should be as wide as the form field.
   */
  inputWidth: '100%',
  inputHeight: 32
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3Qvc3JjL1NlbGVjdEZpZWxkLmpzIl0sIm5hbWVzIjpbImlkQ291bnRlciIsIlRleHRJbnB1dEZpZWxkIiwiaWQiLCJwcm9wcyIsInRvU3RyaW5nIiwidW51c2VkSWQiLCJoaW50IiwibGFiZWwiLCJkZXNjcmlwdGlvbiIsInZhbGlkYXRpb25NZXNzYWdlIiwiaW5wdXRIZWlnaHQiLCJpbnB1dFdpZHRoIiwiZGlzYWJsZWQiLCJyZXF1aXJlZCIsImlzSW52YWxpZCIsImFwcGVhcmFuY2UiLCJzdGF0ZSIsIm1hdGNoZWRQcm9wcyIsInJlbWFpbmluZ1Byb3BzIiwiUHVyZUNvbXBvbmVudCIsIlNlbGVjdCIsInByb3BUeXBlcyIsIkZvcm1GaWVsZCIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwibGFiZWxGb3IiLCJzdHJpbmciLCJib29sIiwibnVtYmVyIiwib25lT2ZUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsU0FBUyxHQUFHLENBQWhCOztJQUVxQkMsYzs7Ozs7Ozs7Ozs7Ozs7OzhGQTBEWDtBQUNOQyxNQUFBQSxFQUFFLEVBQUUsQ0FBQyxNQUFLQyxLQUFMLENBQVdELEVBQVgsSUFBaUJGLFNBQVMsRUFBM0IsRUFBK0JJLFFBQS9CO0FBREUsSzs7Ozs7OzZCQUlDO0FBQUEsd0JBcUJILEtBQUtELEtBckJGO0FBQUEsVUFHREUsUUFIQyxlQUdMSCxFQUhLO0FBQUEsVUFNTEksSUFOSyxlQU1MQSxJQU5LO0FBQUEsVUFPTEMsS0FQSyxlQU9MQSxLQVBLO0FBQUEsVUFRTEMsV0FSSyxlQVFMQSxXQVJLO0FBQUEsVUFTTEMsaUJBVEssZUFTTEEsaUJBVEs7QUFBQSxVQVlMQyxXQVpLLGVBWUxBLFdBWks7QUFBQSxVQWFMQyxVQWJLLGVBYUxBLFVBYks7QUFBQSxVQWNMQyxRQWRLLGVBY0xBLFFBZEs7QUFBQSxVQWVMQyxRQWZLLGVBZUxBLFFBZks7QUFBQSxVQWdCTEMsU0FoQkssZUFnQkxBLFNBaEJLO0FBQUEsVUFpQkxDLFVBakJLLGVBaUJMQSxVQWpCSztBQUFBLFVBb0JGWixLQXBCRTtBQXVCUCxVQUFNRCxFQUFFLHlCQUFrQixLQUFLYyxLQUFMLENBQVdkLEVBQTdCLENBQVI7QUFFQTs7OztBQXpCTywyQkE0QmtDLDBCQUFjQyxLQUFkLENBNUJsQztBQUFBLFVBNEJDYyxZQTVCRCxrQkE0QkNBLFlBNUJEO0FBQUEsVUE0QmVDLGNBNUJmLGtCQTRCZUEsY0E1QmY7O0FBOEJQLGFBQ0UsZ0NBQUMsb0JBQUQ7QUFDRSxRQUFBLFlBQVksRUFBRSxFQURoQjtBQUVFLFFBQUEsS0FBSyxFQUFFWCxLQUZUO0FBR0UsUUFBQSxVQUFVLEVBQUVNLFFBSGQ7QUFJRSxRQUFBLElBQUksRUFBRVAsSUFKUjtBQUtFLFFBQUEsV0FBVyxFQUFFRSxXQUxmO0FBTUUsUUFBQSxpQkFBaUIsRUFBRUMsaUJBTnJCO0FBT0UsUUFBQSxRQUFRLEVBQUVQO0FBUFosU0FRTWUsWUFSTixHQVVFLGdDQUFDLGtCQUFEO0FBQ0UsUUFBQSxFQUFFLEVBQUVmLEVBRE47QUFFRSxRQUFBLEtBQUssRUFBRVMsVUFGVDtBQUdFLFFBQUEsTUFBTSxFQUFFRCxXQUhWO0FBSUUsUUFBQSxRQUFRLEVBQUVFLFFBSlo7QUFLRSxRQUFBLFFBQVEsRUFBRUMsUUFMWjtBQU1FLFFBQUEsU0FBUyxFQUFFQyxTQU5iO0FBT0UsUUFBQSxVQUFVLEVBQUVDO0FBUGQsU0FRTUcsY0FSTixFQVZGLENBREY7QUF1QkQ7OztFQW5IeUNDLG9COzs7QUFBdkJsQixjO2lDQUFBQSxjLGlDQUtkbUIsbUJBQU9DLFMsTUFDUEMscUJBQVVELFM7QUFFYjs7O0FBR0FkLEVBQUFBLEtBQUssRUFBRWdCLHNCQUFVQyxJQUFWLENBQWVDLFU7O0FBRXRCOzs7QUFHQUMsRUFBQUEsUUFBUSxFQUFFSCxzQkFBVUksTTs7QUFFcEI7OztBQUdBRixFQUFBQSxVQUFVLEVBQUVGLHNCQUFVSyxJOztBQUV0Qjs7O0FBR0FwQixFQUFBQSxXQUFXLEVBQUVlLHNCQUFVQyxJOztBQUV2Qjs7O0FBR0FsQixFQUFBQSxJQUFJLEVBQUVpQixzQkFBVUMsSTs7QUFFaEI7Ozs7QUFJQWYsRUFBQUEsaUJBQWlCLEVBQUVjLHNCQUFVQyxJOztBQUU3Qjs7O0FBR0FkLEVBQUFBLFdBQVcsRUFBRWEsc0JBQVVNLE07O0FBRXZCOzs7QUFHQWxCLEVBQUFBLFVBQVUsRUFBRVksc0JBQVVPLFNBQVYsQ0FBb0IsQ0FBQ1Asc0JBQVVNLE1BQVgsRUFBbUJOLHNCQUFVSSxNQUE3QixDQUFwQjs7aUNBL0NLMUIsYyxrQkFrREc7QUFDcEI7OztBQUdBVSxFQUFBQSxVQUFVLEVBQUUsTUFKUTtBQUtwQkQsRUFBQUEsV0FBVyxFQUFFO0FBTE8sQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBzcGxpdEJveFByb3BzIH0gZnJvbSAndWktYm94J1xuaW1wb3J0IHsgRm9ybUZpZWxkIH0gZnJvbSAnLi4vLi4vZm9ybS1maWVsZCdcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9TZWxlY3QnXG5cbmxldCBpZENvdW50ZXIgPSAwXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRJbnB1dEZpZWxkIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIFNlbGVjdCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uU2VsZWN0LnByb3BUeXBlcyxcbiAgICAuLi5Gb3JtRmllbGQucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHVzZWQgYWJvdmUgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAgICovXG4gICAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBQYXNzZWQgb24gdGhlIGxhYmVsIGFzIGEgaHRtbEZvciBwcm9wLlxuICAgICAqL1xuICAgIGxhYmVsRm9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdG8gc2hvdyBhbiBhc3Rlcml4IGFmdGVyIHRoZSBsYWJlbC5cbiAgICAgKi9cbiAgICBpc1JlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEFuIG9wdGlvbmFsIGRlc2NyaXB0aW9uIG9mIHRoZSBmaWVsZCB1bmRlciB0aGUgbGFiZWwsIGFib3ZlIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIEFuIG9wdGlvbmFsIGhpbnQgdW5kZXIgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAgICovXG4gICAgaGludDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBJZiBhIHZhbGlkYXRpb24gbWVzc2FnZSBpcyBwYXNzZWQgaXQgaXMgc2hvd24gdW5kZXIgdGhlIGlucHV0IGVsZW1lbnRcbiAgICAgKiBhbmQgYWJvdmUgdGhlIGhpbnQuIFRoaXMgaXMgdW5hZmZlY3RlZCBieSBgaXNJbnZhbGlkYC5cbiAgICAgKi9cbiAgICB2YWxpZGF0aW9uTWVzc2FnZTogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAqL1xuICAgIGlucHV0SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHdpZHRoIG9mIHRoZSBpbnB1dCB3aWR0aC5cbiAgICAgKi9cbiAgICBpbnB1dFdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSlcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIGlucHV0IHdpZHRoIHNob3VsZCBiZSBhcyB3aWRlIGFzIHRoZSBmb3JtIGZpZWxkLlxuICAgICAqL1xuICAgIGlucHV0V2lkdGg6ICcxMDAlJyxcbiAgICBpbnB1dEhlaWdodDogMzJcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIGlkOiAodGhpcy5wcm9wcy5pZCB8fCBpZENvdW50ZXIrKykudG9TdHJpbmcoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIC8vIFdlIGFyZSB1c2luZyB0aGUgaWQgZnJvbSB0aGUgc3RhdGVcbiAgICAgIGlkOiB1bnVzZWRJZCxcblxuICAgICAgLy8gRm9ybUZpZWxkIHByb3BzXG4gICAgICBoaW50LFxuICAgICAgbGFiZWwsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIHZhbGlkYXRpb25NZXNzYWdlLFxuXG4gICAgICAvLyBUZXh0SW5wdXQgcHJvcHNcbiAgICAgIGlucHV0SGVpZ2h0LFxuICAgICAgaW5wdXRXaWR0aCxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgcmVxdWlyZWQsXG4gICAgICBpc0ludmFsaWQsXG4gICAgICBhcHBlYXJhbmNlLFxuXG4gICAgICAvLyBSZXN0IHByb3BzIGFyZSBzcHJlYWQgb24gdGhlIEZvcm1GaWVsZFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgaWQgPSBgU2VsZWN0RmllbGQtJHt0aGlzLnN0YXRlLmlkfWBcblxuICAgIC8qKlxuICAgICAqIFNwbGl0IHRoZSB3cmFwcGVyIHByb3BzIGZyb20gdGhlIGlucHV0IHByb3BzLlxuICAgICAqL1xuICAgIGNvbnN0IHsgbWF0Y2hlZFByb3BzLCByZW1haW5pbmdQcm9wcyB9ID0gc3BsaXRCb3hQcm9wcyhwcm9wcylcblxuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUZpZWxkXG4gICAgICAgIG1hcmdpbkJvdHRvbT17MjR9XG4gICAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgICAgaXNSZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgIGhpbnQ9e2hpbnR9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2U9e3ZhbGlkYXRpb25NZXNzYWdlfVxuICAgICAgICBsYWJlbEZvcj17aWR9XG4gICAgICAgIHsuLi5tYXRjaGVkUHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgd2lkdGg9e2lucHV0V2lkdGh9XG4gICAgICAgICAgaGVpZ2h0PXtpbnB1dEhlaWdodH1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICAgIGlzSW52YWxpZD17aXNJbnZhbGlkfVxuICAgICAgICAgIGFwcGVhcmFuY2U9e2FwcGVhcmFuY2V9XG4gICAgICAgICAgey4uLnJlbWFpbmluZ1Byb3BzfVxuICAgICAgICAvPlxuICAgICAgPC9Gb3JtRmllbGQ+XG4gICAgKVxuICB9XG59XG4iXX0=