"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = require("ui-box");

var _formField = require("../../form-field");

var _TextInput = _interopRequireDefault(require("./TextInput"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var idCounter = 0;
var TextInputField = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
  var _useState = (0, _react.useState)(props.id || "TextInputField-".concat(idCounter++)),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 1),
      id = _useState2[0];

  var unusedId = props.id,
      hint = props.hint,
      label = props.label,
      description = props.description,
      validationMessage = props.validationMessage,
      disabled = props.disabled,
      required = props.required,
      isInvalid = props.isInvalid,
      appearance = props.appearance,
      placeholder = props.placeholder,
      spellCheck = props.spellCheck,
      _props$inputHeight = props.inputHeight,
      inputHeight = _props$inputHeight === void 0 ? 40 : _props$inputHeight,
      _props$inputWidth = props.inputWidth,
      inputWidth = _props$inputWidth === void 0 ? '100%' : _props$inputWidth,
      restProps = (0, _objectWithoutProperties2["default"])(props, ["id", "hint", "label", "description", "validationMessage", "disabled", "required", "isInvalid", "appearance", "placeholder", "spellCheck", "inputHeight", "inputWidth"]);
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
  }, matchedProps, restProps), _react["default"].createElement(_TextInput["default"], (0, _extends2["default"])({
    id: id,
    width: inputWidth,
    height: inputHeight,
    disabled: disabled,
    required: required,
    isInvalid: isInvalid,
    appearance: appearance,
    placeholder: placeholder,
    spellCheck: spellCheck,
    ref: ref
  }, remainingProps)));
}));
TextInputField.propTypes = _objectSpread({}, _TextInput["default"].propTypes, {}, _formField.FormField.propTypes, {
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
});
var _default = TextInputField;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXh0LWlucHV0L3NyYy9UZXh0SW5wdXRGaWVsZC5qcyJdLCJuYW1lcyI6WyJpZENvdW50ZXIiLCJUZXh0SW5wdXRGaWVsZCIsInByb3BzIiwicmVmIiwiaWQiLCJ1bnVzZWRJZCIsImhpbnQiLCJsYWJlbCIsImRlc2NyaXB0aW9uIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJkaXNhYmxlZCIsInJlcXVpcmVkIiwiaXNJbnZhbGlkIiwiYXBwZWFyYW5jZSIsInBsYWNlaG9sZGVyIiwic3BlbGxDaGVjayIsImlucHV0SGVpZ2h0IiwiaW5wdXRXaWR0aCIsInJlc3RQcm9wcyIsIm1hdGNoZWRQcm9wcyIsInJlbWFpbmluZ1Byb3BzIiwicHJvcFR5cGVzIiwiVGV4dElucHV0IiwiRm9ybUZpZWxkIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJsYWJlbEZvciIsInN0cmluZyIsImJvb2wiLCJudW1iZXIiLCJvbmVPZlR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBSUEsU0FBUyxHQUFHLENBQWhCO0FBRUEsSUFBTUMsY0FBYyxHQUFHLGlCQUNyQix1QkFBVyxVQUFDQyxLQUFELEVBQVFDLEdBQVIsRUFBZ0I7QUFBQSxrQkFDWixxQkFBU0QsS0FBSyxDQUFDRSxFQUFOLDZCQUE4QkosU0FBUyxFQUF2QyxDQUFULENBRFk7QUFBQTtBQUFBLE1BQ2xCSSxFQURrQjs7QUFBQSxNQUtuQkMsUUFMbUIsR0F5QnJCSCxLQXpCcUIsQ0FLdkJFLEVBTHVCO0FBQUEsTUFRdkJFLElBUnVCLEdBeUJyQkosS0F6QnFCLENBUXZCSSxJQVJ1QjtBQUFBLE1BU3ZCQyxLQVR1QixHQXlCckJMLEtBekJxQixDQVN2QkssS0FUdUI7QUFBQSxNQVV2QkMsV0FWdUIsR0F5QnJCTixLQXpCcUIsQ0FVdkJNLFdBVnVCO0FBQUEsTUFXdkJDLGlCQVh1QixHQXlCckJQLEtBekJxQixDQVd2Qk8saUJBWHVCO0FBQUEsTUFjdkJDLFFBZHVCLEdBeUJyQlIsS0F6QnFCLENBY3ZCUSxRQWR1QjtBQUFBLE1BZXZCQyxRQWZ1QixHQXlCckJULEtBekJxQixDQWV2QlMsUUFmdUI7QUFBQSxNQWdCdkJDLFNBaEJ1QixHQXlCckJWLEtBekJxQixDQWdCdkJVLFNBaEJ1QjtBQUFBLE1BaUJ2QkMsVUFqQnVCLEdBeUJyQlgsS0F6QnFCLENBaUJ2QlcsVUFqQnVCO0FBQUEsTUFrQnZCQyxXQWxCdUIsR0F5QnJCWixLQXpCcUIsQ0FrQnZCWSxXQWxCdUI7QUFBQSxNQW1CdkJDLFVBbkJ1QixHQXlCckJiLEtBekJxQixDQW1CdkJhLFVBbkJ1QjtBQUFBLDJCQXlCckJiLEtBekJxQixDQW9CdkJjLFdBcEJ1QjtBQUFBLE1Bb0J2QkEsV0FwQnVCLG1DQW9CVCxFQXBCUztBQUFBLDBCQXlCckJkLEtBekJxQixDQXFCdkJlLFVBckJ1QjtBQUFBLE1BcUJ2QkEsVUFyQnVCLGtDQXFCVixNQXJCVTtBQUFBLE1Bd0JwQkMsU0F4Qm9CLDZDQXlCckJoQixLQXpCcUI7QUEyQnpCOzs7O0FBM0J5Qix1QkE4QmdCLDBCQUFjQSxLQUFkLENBOUJoQjtBQUFBLE1BOEJqQmlCLFlBOUJpQixrQkE4QmpCQSxZQTlCaUI7QUFBQSxNQThCSEMsY0E5Qkcsa0JBOEJIQSxjQTlCRzs7QUFnQ3pCLFNBQ0UsZ0NBQUMsb0JBQUQ7QUFDRSxJQUFBLFlBQVksRUFBRSxFQURoQjtBQUVFLElBQUEsS0FBSyxFQUFFYixLQUZUO0FBR0UsSUFBQSxVQUFVLEVBQUVJLFFBSGQ7QUFJRSxJQUFBLElBQUksRUFBRUwsSUFKUjtBQUtFLElBQUEsV0FBVyxFQUFFRSxXQUxmO0FBTUUsSUFBQSxpQkFBaUIsRUFBRUMsaUJBTnJCO0FBT0UsSUFBQSxRQUFRLEVBQUVMO0FBUFosS0FRTWUsWUFSTixFQVNNRCxTQVROLEdBV0UsZ0NBQUMscUJBQUQ7QUFDRSxJQUFBLEVBQUUsRUFBRWQsRUFETjtBQUVFLElBQUEsS0FBSyxFQUFFYSxVQUZUO0FBR0UsSUFBQSxNQUFNLEVBQUVELFdBSFY7QUFJRSxJQUFBLFFBQVEsRUFBRU4sUUFKWjtBQUtFLElBQUEsUUFBUSxFQUFFQyxRQUxaO0FBTUUsSUFBQSxTQUFTLEVBQUVDLFNBTmI7QUFPRSxJQUFBLFVBQVUsRUFBRUMsVUFQZDtBQVFFLElBQUEsV0FBVyxFQUFFQyxXQVJmO0FBU0UsSUFBQSxVQUFVLEVBQUVDLFVBVGQ7QUFVRSxJQUFBLEdBQUcsRUFBRVo7QUFWUCxLQVdNaUIsY0FYTixFQVhGLENBREY7QUEyQkQsQ0EzREQsQ0FEcUIsQ0FBdkI7QUErREFuQixjQUFjLENBQUNvQixTQUFmLHFCQUlLQyxzQkFBVUQsU0FKZixNQUtLRSxxQkFBVUYsU0FMZjtBQU9FOzs7QUFHQWQsRUFBQUEsS0FBSyxFQUFFaUIsc0JBQVVDLElBQVYsQ0FBZUMsVUFWeEI7O0FBWUU7OztBQUdBQyxFQUFBQSxRQUFRLEVBQUVILHNCQUFVSSxNQWZ0Qjs7QUFpQkU7OztBQUdBakIsRUFBQUEsUUFBUSxFQUFFYSxzQkFBVUssSUFwQnRCOztBQXNCRTs7O0FBR0FyQixFQUFBQSxXQUFXLEVBQUVnQixzQkFBVUMsSUF6QnpCOztBQTJCRTs7O0FBR0FuQixFQUFBQSxJQUFJLEVBQUVrQixzQkFBVUMsSUE5QmxCOztBQWdDRTs7OztBQUlBaEIsRUFBQUEsaUJBQWlCLEVBQUVlLHNCQUFVQyxJQXBDL0I7O0FBc0NFOzs7QUFHQVQsRUFBQUEsV0FBVyxFQUFFUSxzQkFBVU0sTUF6Q3pCOztBQTJDRTs7O0FBR0FiLEVBQUFBLFVBQVUsRUFBRU8sc0JBQVVPLFNBQVYsQ0FBb0IsQ0FBQ1Asc0JBQVVNLE1BQVgsRUFBbUJOLHNCQUFVSSxNQUE3QixDQUFwQjtBQTlDZDtlQWlEZTNCLGMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIGZvcndhcmRSZWYsIG1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IHNwbGl0Qm94UHJvcHMgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBGb3JtRmllbGQgfSBmcm9tICcuLi8uLi9mb3JtLWZpZWxkJ1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tICcuL1RleHRJbnB1dCdcblxubGV0IGlkQ291bnRlciA9IDBcblxuY29uc3QgVGV4dElucHV0RmllbGQgPSBtZW1vKFxuICBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgY29uc3QgW2lkXSA9IHVzZVN0YXRlKHByb3BzLmlkIHx8IGBUZXh0SW5wdXRGaWVsZC0ke2lkQ291bnRlcisrfWApXG5cbiAgICBjb25zdCB7XG4gICAgICAvLyBXZSBhcmUgdXNpbmcgdGhlIGlkIGZyb20gdGhlIHN0YXRlXG4gICAgICBpZDogdW51c2VkSWQsXG5cbiAgICAgIC8vIEZvcm1GaWVsZCBwcm9wc1xuICAgICAgaGludCxcbiAgICAgIGxhYmVsLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICB2YWxpZGF0aW9uTWVzc2FnZSxcblxuICAgICAgLy8gVGV4dElucHV0IHByb3BzXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHJlcXVpcmVkLFxuICAgICAgaXNJbnZhbGlkLFxuICAgICAgYXBwZWFyYW5jZSxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgc3BlbGxDaGVjayxcbiAgICAgIGlucHV0SGVpZ2h0ID0gNDAsXG4gICAgICBpbnB1dFdpZHRoID0gJzEwMCUnLFxuXG4gICAgICAvLyBSZXN0IHByb3BzIGFyZSBzcHJlYWQgb24gdGhlIEZvcm1GaWVsZFxuICAgICAgLi4ucmVzdFByb3BzXG4gICAgfSA9IHByb3BzXG5cbiAgICAvKipcbiAgICAgKiBTcGxpdCB0aGUgd3JhcHBlciBwcm9wcyBmcm9tIHRoZSBpbnB1dCBwcm9wcy5cbiAgICAgKi9cbiAgICBjb25zdCB7IG1hdGNoZWRQcm9wcywgcmVtYWluaW5nUHJvcHMgfSA9IHNwbGl0Qm94UHJvcHMocHJvcHMpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1GaWVsZFxuICAgICAgICBtYXJnaW5Cb3R0b209ezI0fVxuICAgICAgICBsYWJlbD17bGFiZWx9XG4gICAgICAgIGlzUmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICBoaW50PXtoaW50fVxuICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlPXt2YWxpZGF0aW9uTWVzc2FnZX1cbiAgICAgICAgbGFiZWxGb3I9e2lkfVxuICAgICAgICB7Li4ubWF0Y2hlZFByb3BzfVxuICAgICAgICB7Li4ucmVzdFByb3BzfVxuICAgICAgPlxuICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIHdpZHRoPXtpbnB1dFdpZHRofVxuICAgICAgICAgIGhlaWdodD17aW5wdXRIZWlnaHR9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgICBpc0ludmFsaWQ9e2lzSW52YWxpZH1cbiAgICAgICAgICBhcHBlYXJhbmNlPXthcHBlYXJhbmNlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICBzcGVsbENoZWNrPXtzcGVsbENoZWNrfVxuICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgIHsuLi5yZW1haW5pbmdQcm9wc31cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybUZpZWxkPlxuICAgIClcbiAgfSlcbilcblxuVGV4dElucHV0RmllbGQucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ29tcG9zZXMgdGhlIFRleHRJbnB1dCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAqL1xuICAuLi5UZXh0SW5wdXQucHJvcFR5cGVzLFxuICAuLi5Gb3JtRmllbGQucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBUaGUgbGFiZWwgdXNlZCBhYm92ZSB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICovXG4gIGxhYmVsOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBQYXNzZWQgb24gdGhlIGxhYmVsIGFzIGEgaHRtbEZvciBwcm9wLlxuICAgKi9cbiAgbGFiZWxGb3I6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHRvIHNob3cgYW4gYXN0ZXJpeCBhZnRlciB0aGUgbGFiZWwuXG4gICAqL1xuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEFuIG9wdGlvbmFsIGRlc2NyaXB0aW9uIG9mIHRoZSBmaWVsZCB1bmRlciB0aGUgbGFiZWwsIGFib3ZlIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgKi9cbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBBbiBvcHRpb25hbCBoaW50IHVuZGVyIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgKi9cbiAgaGludDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIElmIGEgdmFsaWRhdGlvbiBtZXNzYWdlIGlzIHBhc3NlZCBpdCBpcyBzaG93biB1bmRlciB0aGUgaW5wdXQgZWxlbWVudFxuICAgKiBhbmQgYWJvdmUgdGhlIGhpbnQuIFRoaXMgaXMgdW5hZmZlY3RlZCBieSBgaXNJbnZhbGlkYC5cbiAgICovXG4gIHZhbGlkYXRpb25NZXNzYWdlOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogVGhlIGhlaWdodCBvZiB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICovXG4gIGlucHV0SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBUaGUgd2lkdGggb2YgdGhlIGlucHV0IHdpZHRoLlxuICAgKi9cbiAgaW5wdXRXaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRJbnB1dEZpZWxkXG4iXX0=