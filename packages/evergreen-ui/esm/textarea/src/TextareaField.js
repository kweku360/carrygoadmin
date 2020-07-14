import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { splitBoxProps } from 'ui-box';
import { FormField } from '../../form-field';
import Textarea from './Textarea';
var idCounter = 0;

var TextareaField = /*#__PURE__*/function (_PureComponent) {
  _inherits(TextareaField, _PureComponent);

  var _super = _createSuper(TextareaField);

  function TextareaField() {
    var _this;

    _classCallCheck(this, TextareaField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      id: (_this.props.id || idCounter++).toString()
    });

    return _this;
  }

  _createClass(TextareaField, [{
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
          props = _objectWithoutProperties(_this$props, ["id", "hint", "label", "description", "validationMessage", "inputHeight", "inputWidth", "disabled", "required", "isInvalid", "appearance", "placeholder", "spellCheck"]);

      var id = "TextareaField-".concat(this.state.id);
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
      }, matchedProps), React.createElement(Textarea, _extends({
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
}(PureComponent);

TextareaField.displayName = "TextareaField";

_defineProperty(TextareaField, "propTypes", _objectSpread({}, Textarea.propTypes, {}, FormField.propTypes, {
  /**
   * The label used above the input element.
   */
  label: PropTypes.node.isRequired,

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
}));

_defineProperty(TextareaField, "defaultProps", {
  /**
   * The input width should be as wide as the form field.
   */
  inputWidth: '100%',
  inputHeight: 80
});

export { TextareaField as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXh0YXJlYS9zcmMvVGV4dGFyZWFGaWVsZC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzcGxpdEJveFByb3BzIiwiRm9ybUZpZWxkIiwiVGV4dGFyZWEiLCJpZENvdW50ZXIiLCJUZXh0YXJlYUZpZWxkIiwiaWQiLCJwcm9wcyIsInRvU3RyaW5nIiwidW51c2VkSWQiLCJoaW50IiwibGFiZWwiLCJkZXNjcmlwdGlvbiIsInZhbGlkYXRpb25NZXNzYWdlIiwiaW5wdXRIZWlnaHQiLCJpbnB1dFdpZHRoIiwiZGlzYWJsZWQiLCJyZXF1aXJlZCIsImlzSW52YWxpZCIsImFwcGVhcmFuY2UiLCJwbGFjZWhvbGRlciIsInNwZWxsQ2hlY2siLCJzdGF0ZSIsIm1hdGNoZWRQcm9wcyIsInJlbWFpbmluZ1Byb3BzIiwicHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJib29sIiwibnVtYmVyIiwib25lT2ZUeXBlIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxhQUFULFFBQThCLFFBQTlCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixrQkFBMUI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLFlBQXJCO0FBRUEsSUFBSUMsU0FBUyxHQUFHLENBQWhCOztJQUVxQkMsYTs7Ozs7Ozs7Ozs7Ozs7Ozs0REFxRFg7QUFDTkMsTUFBQUEsRUFBRSxFQUFFLENBQUMsTUFBS0MsS0FBTCxDQUFXRCxFQUFYLElBQWlCRixTQUFTLEVBQTNCLEVBQStCSSxRQUEvQjtBQURFLEs7Ozs7Ozs7NkJBSUM7QUFBQSx3QkF1QkgsS0FBS0QsS0F2QkY7QUFBQSxVQUdERSxRQUhDLGVBR0xILEVBSEs7QUFBQSxVQU1MSSxJQU5LLGVBTUxBLElBTks7QUFBQSxVQU9MQyxLQVBLLGVBT0xBLEtBUEs7QUFBQSxVQVFMQyxXQVJLLGVBUUxBLFdBUks7QUFBQSxVQVNMQyxpQkFUSyxlQVNMQSxpQkFUSztBQUFBLFVBWUxDLFdBWkssZUFZTEEsV0FaSztBQUFBLFVBYUxDLFVBYkssZUFhTEEsVUFiSztBQUFBLFVBY0xDLFFBZEssZUFjTEEsUUFkSztBQUFBLFVBZUxDLFFBZkssZUFlTEEsUUFmSztBQUFBLFVBZ0JMQyxTQWhCSyxlQWdCTEEsU0FoQks7QUFBQSxVQWlCTEMsVUFqQkssZUFpQkxBLFVBakJLO0FBQUEsVUFrQkxDLFdBbEJLLGVBa0JMQSxXQWxCSztBQUFBLFVBbUJMQyxVQW5CSyxlQW1CTEEsVUFuQks7QUFBQSxVQXNCRmQsS0F0QkU7O0FBeUJQLFVBQU1ELEVBQUUsMkJBQW9CLEtBQUtnQixLQUFMLENBQVdoQixFQUEvQixDQUFSO0FBRUE7Ozs7QUEzQk8sMkJBOEJrQ0wsYUFBYSxDQUFDTSxLQUFELENBOUIvQztBQUFBLFVBOEJDZ0IsWUE5QkQsa0JBOEJDQSxZQTlCRDtBQUFBLFVBOEJlQyxjQTlCZixrQkE4QmVBLGNBOUJmOztBQWdDUCxhQUNFLG9CQUFDLFNBQUQ7QUFDRSxRQUFBLFlBQVksRUFBRSxFQURoQjtBQUVFLFFBQUEsS0FBSyxFQUFFYixLQUZUO0FBR0UsUUFBQSxVQUFVLEVBQUVNLFFBSGQ7QUFJRSxRQUFBLElBQUksRUFBRVAsSUFKUjtBQUtFLFFBQUEsV0FBVyxFQUFFRSxXQUxmO0FBTUUsUUFBQSxpQkFBaUIsRUFBRUMsaUJBTnJCO0FBT0UsUUFBQSxRQUFRLEVBQUVQO0FBUFosU0FRTWlCLFlBUk4sR0FVRSxvQkFBQyxRQUFEO0FBQ0UsUUFBQSxFQUFFLEVBQUVqQixFQUROO0FBRUUsUUFBQSxLQUFLLEVBQUVTLFVBRlQ7QUFHRSxRQUFBLE1BQU0sRUFBRUQsV0FIVjtBQUlFLFFBQUEsUUFBUSxFQUFFRSxRQUpaO0FBS0UsUUFBQSxRQUFRLEVBQUVDLFFBTFo7QUFNRSxRQUFBLFNBQVMsRUFBRUMsU0FOYjtBQU9FLFFBQUEsVUFBVSxFQUFFQyxVQVBkO0FBUUUsUUFBQSxXQUFXLEVBQUVDLFdBUmY7QUFTRSxRQUFBLFVBQVUsRUFBRUM7QUFUZCxTQVVNRyxjQVZOLEVBVkYsQ0FERjtBQXlCRDs7OztFQWxId0N6QixhOztBQUF0Qk0sYTs7Z0JBQUFBLGEsaUNBS2RGLFFBQVEsQ0FBQ3NCLFMsTUFDVHZCLFNBQVMsQ0FBQ3VCLFM7QUFFYjs7O0FBR0FkLEVBQUFBLEtBQUssRUFBRVgsU0FBUyxDQUFDMEIsSUFBVixDQUFlQyxVOztBQUV0Qjs7O0FBR0FWLEVBQUFBLFFBQVEsRUFBRWpCLFNBQVMsQ0FBQzRCLEk7O0FBRXBCOzs7QUFHQWhCLEVBQUFBLFdBQVcsRUFBRVosU0FBUyxDQUFDMEIsSTs7QUFFdkI7OztBQUdBaEIsRUFBQUEsSUFBSSxFQUFFVixTQUFTLENBQUMwQixJOztBQUVoQjs7OztBQUlBYixFQUFBQSxpQkFBaUIsRUFBRWIsU0FBUyxDQUFDMEIsSTs7QUFFN0I7OztBQUdBWixFQUFBQSxXQUFXLEVBQUVkLFNBQVMsQ0FBQzZCLE07O0FBRXZCOzs7QUFHQWQsRUFBQUEsVUFBVSxFQUFFZixTQUFTLENBQUM4QixTQUFWLENBQW9CLENBQUM5QixTQUFTLENBQUM2QixNQUFYLEVBQW1CN0IsU0FBUyxDQUFDK0IsTUFBN0IsQ0FBcEI7OztnQkExQ0sxQixhLGtCQTZDRztBQUNwQjs7O0FBR0FVLEVBQUFBLFVBQVUsRUFBRSxNQUpRO0FBS3BCRCxFQUFBQSxXQUFXLEVBQUU7QUFMTyxDOztTQTdDSFQsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBzcGxpdEJveFByb3BzIH0gZnJvbSAndWktYm94J1xuaW1wb3J0IHsgRm9ybUZpZWxkIH0gZnJvbSAnLi4vLi4vZm9ybS1maWVsZCdcbmltcG9ydCBUZXh0YXJlYSBmcm9tICcuL1RleHRhcmVhJ1xuXG5sZXQgaWRDb3VudGVyID0gMFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0YXJlYUZpZWxkIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIFRleHRhcmVhIGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5UZXh0YXJlYS5wcm9wVHlwZXMsXG4gICAgLi4uRm9ybUZpZWxkLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCB1c2VkIGFib3ZlIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAqL1xuICAgIGxhYmVsOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdG8gc2hvdyBhbiBhc3Rlcml4IGFmdGVyIHRoZSBsYWJlbC5cbiAgICAgKi9cbiAgICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBBbiBvcHRpb25hbCBkZXNjcmlwdGlvbiBvZiB0aGUgZmllbGQgdW5kZXIgdGhlIGxhYmVsLCBhYm92ZSB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBBbiBvcHRpb25hbCBoaW50IHVuZGVyIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAqL1xuICAgIGhpbnQ6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogSWYgYSB2YWxpZGF0aW9uIG1lc3NhZ2UgaXMgcGFzc2VkIGl0IGlzIHNob3duIHVuZGVyIHRoZSBpbnB1dCBlbGVtZW50XG4gICAgICogYW5kIGFib3ZlIHRoZSBoaW50LiBUaGlzIGlzIHVuYWZmZWN0ZWQgYnkgYGlzSW52YWxpZGAuXG4gICAgICovXG4gICAgdmFsaWRhdGlvbk1lc3NhZ2U6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICAgKi9cbiAgICBpbnB1dEhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgaW5wdXQgd2lkdGguXG4gICAgICovXG4gICAgaW5wdXRXaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBpbnB1dCB3aWR0aCBzaG91bGQgYmUgYXMgd2lkZSBhcyB0aGUgZm9ybSBmaWVsZC5cbiAgICAgKi9cbiAgICBpbnB1dFdpZHRoOiAnMTAwJScsXG4gICAgaW5wdXRIZWlnaHQ6IDgwXG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICBpZDogKHRoaXMucHJvcHMuaWQgfHwgaWRDb3VudGVyKyspLnRvU3RyaW5nKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICAvLyBXZSBhcmUgdXNpbmcgdGhlIGlkIGZyb20gdGhlIHN0YXRlXG4gICAgICBpZDogdW51c2VkSWQsXG5cbiAgICAgIC8vIEZvcm1GaWVsZCBwcm9wc1xuICAgICAgaGludCxcbiAgICAgIGxhYmVsLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICB2YWxpZGF0aW9uTWVzc2FnZSxcblxuICAgICAgLy8gVGV4dGFyZWEgcHJvcHNcbiAgICAgIGlucHV0SGVpZ2h0LFxuICAgICAgaW5wdXRXaWR0aCxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgcmVxdWlyZWQsXG4gICAgICBpc0ludmFsaWQsXG4gICAgICBhcHBlYXJhbmNlLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICBzcGVsbENoZWNrLFxuXG4gICAgICAvLyBSZXN0IHByb3BzIGFyZSBzcHJlYWQgb24gdGhlIEZvcm1GaWVsZFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgaWQgPSBgVGV4dGFyZWFGaWVsZC0ke3RoaXMuc3RhdGUuaWR9YFxuXG4gICAgLyoqXG4gICAgICogU3BsaXQgdGhlIHdyYXBwZXIgcHJvcHMgZnJvbSB0aGUgaW5wdXQgcHJvcHMuXG4gICAgICovXG4gICAgY29uc3QgeyBtYXRjaGVkUHJvcHMsIHJlbWFpbmluZ1Byb3BzIH0gPSBzcGxpdEJveFByb3BzKHByb3BzKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgbWFyZ2luQm90dG9tPXsyNH1cbiAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICBpc1JlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgaGludD17aGludH1cbiAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZT17dmFsaWRhdGlvbk1lc3NhZ2V9XG4gICAgICAgIGxhYmVsRm9yPXtpZH1cbiAgICAgICAgey4uLm1hdGNoZWRQcm9wc31cbiAgICAgID5cbiAgICAgICAgPFRleHRhcmVhXG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIHdpZHRoPXtpbnB1dFdpZHRofVxuICAgICAgICAgIGhlaWdodD17aW5wdXRIZWlnaHR9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgICBpc0ludmFsaWQ9e2lzSW52YWxpZH1cbiAgICAgICAgICBhcHBlYXJhbmNlPXthcHBlYXJhbmNlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICBzcGVsbENoZWNrPXtzcGVsbENoZWNrfVxuICAgICAgICAgIHsuLi5yZW1haW5pbmdQcm9wc31cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybUZpZWxkPlxuICAgIClcbiAgfVxufVxuIl19