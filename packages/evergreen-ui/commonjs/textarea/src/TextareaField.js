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

var _Textarea = _interopRequireDefault(require("./Textarea"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var idCounter = 0;

var TextareaField = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(TextareaField, _PureComponent);

  var _super = _createSuper(TextareaField);

  function TextareaField() {
    var _this;

    (0, _classCallCheck2["default"])(this, TextareaField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      id: (_this.props.id || idCounter++).toString()
    });
    return _this;
  }

  (0, _createClass2["default"])(TextareaField, [{
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
          placeholder = _this$props.placeholder,
          spellCheck = _this$props.spellCheck,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["id", "hint", "label", "description", "validationMessage", "inputHeight", "inputWidth", "disabled", "required", "isInvalid", "appearance", "placeholder", "spellCheck"]);
      var id = "TextareaField-".concat(this.state.id);
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
      }, matchedProps), _react["default"].createElement(_Textarea["default"], (0, _extends2["default"])({
        id: id,
        width: inputWidth,
        height: inputHeight,
        disabled: disabled,
        required: required,
        isInvalid: isInvalid,
        appearance: appearance,
        placeholder: placeholder,
        spellCheck: spellCheck
      }, remainingProps)));
    }
  }]);
  return TextareaField;
}(_react.PureComponent);

exports["default"] = TextareaField;
TextareaField.displayName = "TextareaField";
(0, _defineProperty2["default"])(TextareaField, "propTypes", _objectSpread({}, _Textarea["default"].propTypes, {}, _formField.FormField.propTypes, {
  /**
   * The label used above the input element.
   */
  label: _propTypes["default"].node.isRequired,

  /**
   * Whether or not to show an asterix after the label.
   */
  required: _propTypes["default"].bool,

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
(0, _defineProperty2["default"])(TextareaField, "defaultProps", {
  /**
   * The input width should be as wide as the form field.
   */
  inputWidth: '100%',
  inputHeight: 80
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXh0YXJlYS9zcmMvVGV4dGFyZWFGaWVsZC5qcyJdLCJuYW1lcyI6WyJpZENvdW50ZXIiLCJUZXh0YXJlYUZpZWxkIiwiaWQiLCJwcm9wcyIsInRvU3RyaW5nIiwidW51c2VkSWQiLCJoaW50IiwibGFiZWwiLCJkZXNjcmlwdGlvbiIsInZhbGlkYXRpb25NZXNzYWdlIiwiaW5wdXRIZWlnaHQiLCJpbnB1dFdpZHRoIiwiZGlzYWJsZWQiLCJyZXF1aXJlZCIsImlzSW52YWxpZCIsImFwcGVhcmFuY2UiLCJwbGFjZWhvbGRlciIsInNwZWxsQ2hlY2siLCJzdGF0ZSIsIm1hdGNoZWRQcm9wcyIsInJlbWFpbmluZ1Byb3BzIiwiUHVyZUNvbXBvbmVudCIsIlRleHRhcmVhIiwicHJvcFR5cGVzIiwiRm9ybUZpZWxkIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJib29sIiwibnVtYmVyIiwib25lT2ZUeXBlIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsU0FBUyxHQUFHLENBQWhCOztJQUVxQkMsYTs7Ozs7Ozs7Ozs7Ozs7OzhGQXFEWDtBQUNOQyxNQUFBQSxFQUFFLEVBQUUsQ0FBQyxNQUFLQyxLQUFMLENBQVdELEVBQVgsSUFBaUJGLFNBQVMsRUFBM0IsRUFBK0JJLFFBQS9CO0FBREUsSzs7Ozs7OzZCQUlDO0FBQUEsd0JBdUJILEtBQUtELEtBdkJGO0FBQUEsVUFHREUsUUFIQyxlQUdMSCxFQUhLO0FBQUEsVUFNTEksSUFOSyxlQU1MQSxJQU5LO0FBQUEsVUFPTEMsS0FQSyxlQU9MQSxLQVBLO0FBQUEsVUFRTEMsV0FSSyxlQVFMQSxXQVJLO0FBQUEsVUFTTEMsaUJBVEssZUFTTEEsaUJBVEs7QUFBQSxVQVlMQyxXQVpLLGVBWUxBLFdBWks7QUFBQSxVQWFMQyxVQWJLLGVBYUxBLFVBYks7QUFBQSxVQWNMQyxRQWRLLGVBY0xBLFFBZEs7QUFBQSxVQWVMQyxRQWZLLGVBZUxBLFFBZks7QUFBQSxVQWdCTEMsU0FoQkssZUFnQkxBLFNBaEJLO0FBQUEsVUFpQkxDLFVBakJLLGVBaUJMQSxVQWpCSztBQUFBLFVBa0JMQyxXQWxCSyxlQWtCTEEsV0FsQks7QUFBQSxVQW1CTEMsVUFuQkssZUFtQkxBLFVBbkJLO0FBQUEsVUFzQkZkLEtBdEJFO0FBeUJQLFVBQU1ELEVBQUUsMkJBQW9CLEtBQUtnQixLQUFMLENBQVdoQixFQUEvQixDQUFSO0FBRUE7Ozs7QUEzQk8sMkJBOEJrQywwQkFBY0MsS0FBZCxDQTlCbEM7QUFBQSxVQThCQ2dCLFlBOUJELGtCQThCQ0EsWUE5QkQ7QUFBQSxVQThCZUMsY0E5QmYsa0JBOEJlQSxjQTlCZjs7QUFnQ1AsYUFDRSxnQ0FBQyxvQkFBRDtBQUNFLFFBQUEsWUFBWSxFQUFFLEVBRGhCO0FBRUUsUUFBQSxLQUFLLEVBQUViLEtBRlQ7QUFHRSxRQUFBLFVBQVUsRUFBRU0sUUFIZDtBQUlFLFFBQUEsSUFBSSxFQUFFUCxJQUpSO0FBS0UsUUFBQSxXQUFXLEVBQUVFLFdBTGY7QUFNRSxRQUFBLGlCQUFpQixFQUFFQyxpQkFOckI7QUFPRSxRQUFBLFFBQVEsRUFBRVA7QUFQWixTQVFNaUIsWUFSTixHQVVFLGdDQUFDLG9CQUFEO0FBQ0UsUUFBQSxFQUFFLEVBQUVqQixFQUROO0FBRUUsUUFBQSxLQUFLLEVBQUVTLFVBRlQ7QUFHRSxRQUFBLE1BQU0sRUFBRUQsV0FIVjtBQUlFLFFBQUEsUUFBUSxFQUFFRSxRQUpaO0FBS0UsUUFBQSxRQUFRLEVBQUVDLFFBTFo7QUFNRSxRQUFBLFNBQVMsRUFBRUMsU0FOYjtBQU9FLFFBQUEsVUFBVSxFQUFFQyxVQVBkO0FBUUUsUUFBQSxXQUFXLEVBQUVDLFdBUmY7QUFTRSxRQUFBLFVBQVUsRUFBRUM7QUFUZCxTQVVNRyxjQVZOLEVBVkYsQ0FERjtBQXlCRDs7O0VBbEh3Q0Msb0I7OztBQUF0QnBCLGE7aUNBQUFBLGEsaUNBS2RxQixxQkFBU0MsUyxNQUNUQyxxQkFBVUQsUztBQUViOzs7QUFHQWhCLEVBQUFBLEtBQUssRUFBRWtCLHNCQUFVQyxJQUFWLENBQWVDLFU7O0FBRXRCOzs7QUFHQWQsRUFBQUEsUUFBUSxFQUFFWSxzQkFBVUcsSTs7QUFFcEI7OztBQUdBcEIsRUFBQUEsV0FBVyxFQUFFaUIsc0JBQVVDLEk7O0FBRXZCOzs7QUFHQXBCLEVBQUFBLElBQUksRUFBRW1CLHNCQUFVQyxJOztBQUVoQjs7OztBQUlBakIsRUFBQUEsaUJBQWlCLEVBQUVnQixzQkFBVUMsSTs7QUFFN0I7OztBQUdBaEIsRUFBQUEsV0FBVyxFQUFFZSxzQkFBVUksTTs7QUFFdkI7OztBQUdBbEIsRUFBQUEsVUFBVSxFQUFFYyxzQkFBVUssU0FBVixDQUFvQixDQUFDTCxzQkFBVUksTUFBWCxFQUFtQkosc0JBQVVNLE1BQTdCLENBQXBCOztpQ0ExQ0s5QixhLGtCQTZDRztBQUNwQjs7O0FBR0FVLEVBQUFBLFVBQVUsRUFBRSxNQUpRO0FBS3BCRCxFQUFBQSxXQUFXLEVBQUU7QUFMTyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IHNwbGl0Qm94UHJvcHMgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBGb3JtRmllbGQgfSBmcm9tICcuLi8uLi9mb3JtLWZpZWxkJ1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vVGV4dGFyZWEnXG5cbmxldCBpZENvdW50ZXIgPSAwXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRhcmVhRmllbGQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgVGV4dGFyZWEgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLlRleHRhcmVhLnByb3BUeXBlcyxcbiAgICAuLi5Gb3JtRmllbGQucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHVzZWQgYWJvdmUgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAgICovXG4gICAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBzaG93IGFuIGFzdGVyaXggYWZ0ZXIgdGhlIGxhYmVsLlxuICAgICAqL1xuICAgIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEFuIG9wdGlvbmFsIGRlc2NyaXB0aW9uIG9mIHRoZSBmaWVsZCB1bmRlciB0aGUgbGFiZWwsIGFib3ZlIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIEFuIG9wdGlvbmFsIGhpbnQgdW5kZXIgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAgICovXG4gICAgaGludDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBJZiBhIHZhbGlkYXRpb24gbWVzc2FnZSBpcyBwYXNzZWQgaXQgaXMgc2hvd24gdW5kZXIgdGhlIGlucHV0IGVsZW1lbnRcbiAgICAgKiBhbmQgYWJvdmUgdGhlIGhpbnQuIFRoaXMgaXMgdW5hZmZlY3RlZCBieSBgaXNJbnZhbGlkYC5cbiAgICAgKi9cbiAgICB2YWxpZGF0aW9uTWVzc2FnZTogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAqL1xuICAgIGlucHV0SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHdpZHRoIG9mIHRoZSBpbnB1dCB3aWR0aC5cbiAgICAgKi9cbiAgICBpbnB1dFdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSlcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIGlucHV0IHdpZHRoIHNob3VsZCBiZSBhcyB3aWRlIGFzIHRoZSBmb3JtIGZpZWxkLlxuICAgICAqL1xuICAgIGlucHV0V2lkdGg6ICcxMDAlJyxcbiAgICBpbnB1dEhlaWdodDogODBcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIGlkOiAodGhpcy5wcm9wcy5pZCB8fCBpZENvdW50ZXIrKykudG9TdHJpbmcoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIC8vIFdlIGFyZSB1c2luZyB0aGUgaWQgZnJvbSB0aGUgc3RhdGVcbiAgICAgIGlkOiB1bnVzZWRJZCxcblxuICAgICAgLy8gRm9ybUZpZWxkIHByb3BzXG4gICAgICBoaW50LFxuICAgICAgbGFiZWwsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIHZhbGlkYXRpb25NZXNzYWdlLFxuXG4gICAgICAvLyBUZXh0YXJlYSBwcm9wc1xuICAgICAgaW5wdXRIZWlnaHQsXG4gICAgICBpbnB1dFdpZHRoLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICByZXF1aXJlZCxcbiAgICAgIGlzSW52YWxpZCxcbiAgICAgIGFwcGVhcmFuY2UsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHNwZWxsQ2hlY2ssXG5cbiAgICAgIC8vIFJlc3QgcHJvcHMgYXJlIHNwcmVhZCBvbiB0aGUgRm9ybUZpZWxkXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCBpZCA9IGBUZXh0YXJlYUZpZWxkLSR7dGhpcy5zdGF0ZS5pZH1gXG5cbiAgICAvKipcbiAgICAgKiBTcGxpdCB0aGUgd3JhcHBlciBwcm9wcyBmcm9tIHRoZSBpbnB1dCBwcm9wcy5cbiAgICAgKi9cbiAgICBjb25zdCB7IG1hdGNoZWRQcm9wcywgcmVtYWluaW5nUHJvcHMgfSA9IHNwbGl0Qm94UHJvcHMocHJvcHMpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1GaWVsZFxuICAgICAgICBtYXJnaW5Cb3R0b209ezI0fVxuICAgICAgICBsYWJlbD17bGFiZWx9XG4gICAgICAgIGlzUmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICBoaW50PXtoaW50fVxuICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlPXt2YWxpZGF0aW9uTWVzc2FnZX1cbiAgICAgICAgbGFiZWxGb3I9e2lkfVxuICAgICAgICB7Li4ubWF0Y2hlZFByb3BzfVxuICAgICAgPlxuICAgICAgICA8VGV4dGFyZWFcbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgd2lkdGg9e2lucHV0V2lkdGh9XG4gICAgICAgICAgaGVpZ2h0PXtpbnB1dEhlaWdodH1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICAgIGlzSW52YWxpZD17aXNJbnZhbGlkfVxuICAgICAgICAgIGFwcGVhcmFuY2U9e2FwcGVhcmFuY2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIHNwZWxsQ2hlY2s9e3NwZWxsQ2hlY2t9XG4gICAgICAgICAgey4uLnJlbWFpbmluZ1Byb3BzfVxuICAgICAgICAvPlxuICAgICAgPC9Gb3JtRmllbGQ+XG4gICAgKVxuICB9XG59XG4iXX0=