import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { useState, forwardRef, memo } from 'react';
import PropTypes from 'prop-types';
import { splitBoxProps } from 'ui-box';
import { FormField } from '../../form-field';
import TextInput from './TextInput';
var idCounter = 0;
var TextInputField = memo(forwardRef(function (props, ref) {
  var _useState = useState(props.id || "TextInputField-".concat(idCounter++)),
      _useState2 = _slicedToArray(_useState, 1),
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
      restProps = _objectWithoutProperties(props, ["id", "hint", "label", "description", "validationMessage", "disabled", "required", "isInvalid", "appearance", "placeholder", "spellCheck", "inputHeight", "inputWidth"]);
  /**
   * Split the wrapper props from the input props.
   */


  var _splitBoxProps = splitBoxProps(props),
      matchedProps = _splitBoxProps.matchedProps,
      remainingProps = _splitBoxProps.remainingProps;

  return React.createElement(FormField, _extends({
    marginBottom: 24,
    label: label,
    isRequired: required,
    hint: hint,
    description: description,
    validationMessage: validationMessage,
    labelFor: id
  }, matchedProps, restProps), React.createElement(TextInput, _extends({
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
TextInputField.propTypes = _objectSpread({}, TextInput.propTypes, {}, FormField.propTypes, {
  /**
   * The label used above the input element.
   */
  label: PropTypes.node.isRequired,

  /**
   * Passed on the label as a htmlFor prop.
   */
  labelFor: PropTypes.string,

  /**
   * Whether or not to show an asterix after the label.
   */
  required: PropTypes.bool,

  /**
   * An optional description of the field under the label, above the input element.
   */
  description: PropTypes.node,

  /**
   * An optional hint under the input element.
   */
  hint: PropTypes.node,

  /**
   * If a validation message is passed it is shown under the input element
   * and above the hint. This is unaffected by `isInvalid`.
   */
  validationMessage: PropTypes.node,

  /**
   * The height of the input element.
   */
  inputHeight: PropTypes.number,

  /**
   * The width of the input width.
   */
  inputWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
});
export default TextInputField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXh0LWlucHV0L3NyYy9UZXh0SW5wdXRGaWVsZC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiZm9yd2FyZFJlZiIsIm1lbW8iLCJQcm9wVHlwZXMiLCJzcGxpdEJveFByb3BzIiwiRm9ybUZpZWxkIiwiVGV4dElucHV0IiwiaWRDb3VudGVyIiwiVGV4dElucHV0RmllbGQiLCJwcm9wcyIsInJlZiIsImlkIiwidW51c2VkSWQiLCJoaW50IiwibGFiZWwiLCJkZXNjcmlwdGlvbiIsInZhbGlkYXRpb25NZXNzYWdlIiwiZGlzYWJsZWQiLCJyZXF1aXJlZCIsImlzSW52YWxpZCIsImFwcGVhcmFuY2UiLCJwbGFjZWhvbGRlciIsInNwZWxsQ2hlY2siLCJpbnB1dEhlaWdodCIsImlucHV0V2lkdGgiLCJyZXN0UHJvcHMiLCJtYXRjaGVkUHJvcHMiLCJyZW1haW5pbmdQcm9wcyIsInByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwibGFiZWxGb3IiLCJzdHJpbmciLCJib29sIiwibnVtYmVyIiwib25lT2ZUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxRQUFoQixFQUEwQkMsVUFBMUIsRUFBc0NDLElBQXRDLFFBQWtELE9BQWxEO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLGFBQVQsUUFBOEIsUUFBOUI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGtCQUExQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsYUFBdEI7QUFFQSxJQUFJQyxTQUFTLEdBQUcsQ0FBaEI7QUFFQSxJQUFNQyxjQUFjLEdBQUdOLElBQUksQ0FDekJELFVBQVUsQ0FBQyxVQUFDUSxLQUFELEVBQVFDLEdBQVIsRUFBZ0I7QUFBQSxrQkFDWlYsUUFBUSxDQUFDUyxLQUFLLENBQUNFLEVBQU4sNkJBQThCSixTQUFTLEVBQXZDLENBQUQsQ0FESTtBQUFBO0FBQUEsTUFDbEJJLEVBRGtCOztB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Q0FBQytCLE1BekN6Qjs7QUEyQ0U7OztBQUdBVixFQUFBQSxVQUFVLEVBQUVyQixTQUFTLENBQUNnQyxTQUFWLENBQW9CLENBQUNoQyxTQUFTLENBQUMrQixNQUFYLEVBQW1CL0IsU0FBUyxDQUFDNkIsTUFBN0IsQ0FBcEI7QUE5Q2Q7QUFpREEsZUFBZXhCLGNBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIGZvcndhcmRSZWYsIG1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IHNwbGl0Qm94UHJvcHMgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBGb3JtRmllbGQgfSBmcm9tICcuLi8uLi9mb3JtLWZpZWxkJ1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tICcuL1RleHRJbnB1dCdcblxubGV0IGlkQ291bnRlciA9IDBcblxuY29uc3QgVGV4dElucHV0RmllbGQgPSBtZW1vKFxuICBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgY29uc3QgW2lkXSA9IHVzZVN0YXRlKHByb3BzLmlkIHx8IGBUZXh0SW5wdXRGaWVsZC0ke2lkQ291bnRlcisrfWApXG5cbiAgICBjb25zdCB7XG4gICAgICAvLyBXZSBhcmUgdXNpbmcgdGhlIGlkIGZyb20gdGhlIHN0YXRlXG4gICAgICBpZDogdW51c2VkSWQsXG5cbiAgICAgIC8vIEZvcm1GaWVsZCBwcm9wc1xuICAgICAgaGludCxcbiAgICAgIGxhYmVsLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICB2YWxpZGF0aW9uTWVzc2FnZSxcblxuICAgICAgLy8gVGV4dElucHV0IHByb3BzXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHJlcXVpcmVkLFxuICAgICAgaXNJbnZhbGlkLFxuICAgICAgYXBwZWFyYW5jZSxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgc3BlbGxDaGVjayxcbiAgICAgIGlucHV0SGVpZ2h0ID0gNDAsXG4gICAgICBpbnB1dFdpZHRoID0gJzEwMCUnLFxuXG4gICAgICAvLyBSZXN0IHByb3BzIGFyZSBzcHJlYWQgb24gdGhlIEZvcm1GaWVsZFxuICAgICAgLi4ucmVzdFByb3BzXG4gICAgfSA9IHByb3BzXG5cbiAgICAvKipcbiAgICAgKiBTcGxpdCB0aGUgd3JhcHBlciBwcm9wcyBmcm9tIHRoZSBpbnB1dCBwcm9wcy5cbiAgICAgKi9cbiAgICBjb25zdCB7IG1hdGNoZWRQcm9wcywgcmVtYWluaW5nUHJvcHMgfSA9IHNwbGl0Qm94UHJvcHMocHJvcHMpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1GaWVsZFxuICAgICAgICBtYXJnaW5Cb3R0b209ezI0fVxuICAgICAgICBsYWJlbD17bGFiZWx9XG4gICAgICAgIGlzUmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICBoaW50PXtoaW50fVxuICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlPXt2YWxpZGF0aW9uTWVzc2FnZX1cbiAgICAgICAgbGFiZWxGb3I9e2lkfVxuICAgICAgICB7Li4ubWF0Y2hlZFByb3BzfVxuICAgICAgICB7Li4ucmVzdFByb3BzfVxuICAgICAgPlxuICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIHdpZHRoPXtpbnB1dFdpZHRofVxuICAgICAgICAgIGhlaWdodD17aW5wdXRIZWlnaHR9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgICBpc0ludmFsaWQ9e2lzSW52YWxpZH1cbiAgICAgICAgICBhcHBlYXJhbmNlPXthcHBlYXJhbmNlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICBzcGVsbENoZWNrPXtzcGVsbENoZWNrfVxuICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgIHsuLi5yZW1haW5pbmdQcm9wc31cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybUZpZWxkPlxuICAgIClcbiAgfSlcbilcblxuVGV4dElucHV0RmllbGQucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ29tcG9zZXMgdGhlIFRleHRJbnB1dCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAqL1xuICAuLi5UZXh0SW5wdXQucHJvcFR5cGVzLFxuICAuLi5Gb3JtRmllbGQucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBUaGUgbGFiZWwgdXNlZCBhYm92ZSB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICovXG4gIGxhYmVsOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBQYXNzZWQgb24gdGhlIGxhYmVsIGFzIGEgaHRtbEZvciBwcm9wLlxuICAgKi9cbiAgbGFiZWxGb3I6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHRvIHNob3cgYW4gYXN0ZXJpeCBhZnRlciB0aGUgbGFiZWwuXG4gICAqL1xuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEFuIG9wdGlvbmFsIGRlc2NyaXB0aW9uIG9mIHRoZSBmaWVsZCB1bmRlciB0aGUgbGFiZWwsIGFib3ZlIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgKi9cbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBBbiBvcHRpb25hbCBoaW50IHVuZGVyIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgKi9cbiAgaGludDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIElmIGEgdmFsaWRhdGlvbiBtZXNzYWdlIGlzIHBhc3NlZCBpdCBpcyBzaG93biB1bmRlciB0aGUgaW5wdXQgZWxlbWVudFxuICAgKiBhbmQgYWJvdmUgdGhlIGhpbnQuIFRoaXMgaXMgdW5hZmZlY3RlZCBieSBgaXNJbnZhbGlkYC5cbiAgICovXG4gIHZhbGlkYXRpb25NZXNzYWdlOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogVGhlIGhlaWdodCBvZiB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICovXG4gIGlucHV0SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBUaGUgd2lkdGggb2YgdGhlIGlucHV0IHdpZHRoLlxuICAgKi9cbiAgaW5wdXRXaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRJbnB1dEZpZWxkXG4iXX0=