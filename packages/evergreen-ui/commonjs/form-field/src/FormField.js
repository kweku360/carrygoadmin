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

var _FormFieldLabel = _interopRequireDefault(require("./FormFieldLabel"));

var _FormFieldDescription = _interopRequireDefault(require("./FormFieldDescription"));

var _FormFieldValidationMessage = _interopRequireDefault(require("./FormFieldValidationMessage"));

var _FormFieldHint = _interopRequireDefault(require("./FormFieldHint"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var FormField = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(FormField, _PureComponent);

  var _super = _createSuper(FormField);

  function FormField() {
    (0, _classCallCheck2["default"])(this, FormField);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(FormField, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          hint = _this$props.hint,
          label = _this$props.label,
          labelFor = _this$props.labelFor,
          children = _this$props.children,
          isRequired = _this$props.isRequired,
          labelProps = _this$props.labelProps,
          description = _this$props.description,
          validationMessage = _this$props.validationMessage,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["hint", "label", "labelFor", "children", "isRequired", "labelProps", "description", "validationMessage"]);
      return _react["default"].createElement(_uiBox["default"], props, _react["default"].createElement(_FormFieldLabel["default"], (0, _extends2["default"])({
        htmlFor: labelFor,
        isAstrixShown: isRequired,
        marginBottom: description ? 0 : 4
      }, labelProps), label), typeof description === 'string' ? _react["default"].createElement(_FormFieldDescription["default"], {
        marginBottom: 4
      }, description) : description, children, typeof validationMessage === 'string' ? _react["default"].createElement(_FormFieldValidationMessage["default"], {
        marginTop: 8
      }, validationMessage) : validationMessage, typeof hint === 'string' ? _react["default"].createElement(_FormFieldHint["default"], {
        marginTop: 6
      }, hint) : hint);
    }
  }]);
  return FormField;
}(_react.PureComponent);

exports["default"] = FormField;
FormField.displayName = "FormField";
(0, _defineProperty2["default"])(FormField, "propTypes", _objectSpread({
  /**
   * The label used above the input element.
   */
  label: _propTypes["default"].node.isRequired,

  /**
   * Passed on the label as a htmlFor prop.
   */
  labelFor: _propTypes["default"].string,

  /**
   * Whether or not show an asterix after the label.
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
  validationMessage: _propTypes["default"].node
}, _uiBox.dimensions.propTypes, {}, _uiBox.spacing.propTypes, {}, _uiBox.position.propTypes, {}, _uiBox.layout.propTypes));
(0, _defineProperty2["default"])(FormField, "defaultProps", {
  labelProps: {
    size: 400
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mb3JtLWZpZWxkL3NyYy9Gb3JtRmllbGQuanMiXSwibmFtZXMiOlsiRm9ybUZpZWxkIiwicHJvcHMiLCJoaW50IiwibGFiZWwiLCJsYWJlbEZvciIsImNoaWxkcmVuIiwiaXNSZXF1aXJlZCIsImxhYmVsUHJvcHMiLCJkZXNjcmlwdGlvbiIsInZhbGlkYXRpb25NZXNzYWdlIiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm5vZGUiLCJzdHJpbmciLCJib29sIiwiZGltZW5zaW9ucyIsInByb3BUeXBlcyIsInNwYWNpbmciLCJwb3NpdGlvbiIsImxheW91dCIsInNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7NkJBNERWO0FBQUEsd0JBV0gsS0FBS0MsS0FYRjtBQUFBLFVBRUxDLElBRkssZUFFTEEsSUFGSztBQUFBLFVBR0xDLEtBSEssZUFHTEEsS0FISztBQUFBLFVBSUxDLFFBSkssZUFJTEEsUUFKSztBQUFBLFVBS0xDLFFBTEssZUFLTEEsUUFMSztBQUFBLFVBTUxDLFVBTkssZUFNTEEsVUFOSztBQUFBLFVBT0xDLFVBUEssZUFPTEEsVUFQSztBQUFBLFVBUUxDLFdBUkssZUFRTEEsV0FSSztBQUFBLFVBU0xDLGlCQVRLLGVBU0xBLGlCQVRLO0FBQUEsVUFVRlIsS0FWRTtBQWFQLGFBQ0UsZ0NBQUMsaUJBQUQsRUFBU0EsS0FBVCxFQUNFLGdDQUFDLDBCQUFEO0FBQ0UsUUFBQSxPQUFPLEVBQUVHLFFBRFg7QUFFRSxRQUFBLGFBQWEsRUFBRUUsVUFGakI7QUFHRSxRQUFBLFlBQVksRUFBRUUsV0FBVyxHQUFHLENBQUgsR0FBTztBQUhsQyxTQUlNRCxVQUpOLEdBTUdKLEtBTkgsQ0FERixFQVNHLE9BQU9LLFdBQVAsS0FBdUIsUUFBdkIsR0FDQyxnQ0FBQyxnQ0FBRDtBQUFzQixRQUFBLFlBQVksRUFBRTtBQUFwQyxTQUNHQSxXQURILENBREQsR0FLQ0EsV0FkSixFQWdCR0gsUUFoQkgsRUFpQkcsT0FBT0ksaUJBQVAsS0FBNkIsUUFBN0IsR0FDQyxnQ0FBQyxzQ0FBRDtBQUE0QixRQUFBLFNBQVMsRUFBRTtBQUF2QyxTQUNHQSxpQkFESCxDQURELEdBS0NBLGlCQXRCSixFQXdCRyxPQUFPUCxJQUFQLEtBQWdCLFFBQWhCLEdBQ0MsZ0NBQUMseUJBQUQ7QUFBZSxRQUFBLFNBQVMsRUFBRTtBQUExQixTQUE4QkEsSUFBOUIsQ0FERCxHQUdDQSxJQTNCSixDQURGO0FBZ0NEOzs7RUF6R29DUSxvQjs7O0FBQWxCVixTO2lDQUFBQSxTO0FBRWpCOzs7QUFHQUcsRUFBQUEsS0FBSyxFQUFFUSxzQkFBVUMsSUFBVixDQUFlTixVOztBQUV0Qjs7O0FBR0FGLEVBQUFBLFFBQVEsRUFBRU8sc0JBQVVFLE07O0FBRXBCOzs7QUFHQVAsRUFBQUEsVUFBVSxFQUFFSyxzQkFBVUcsSTs7QUFFdEI7OztBQUdBTixFQUFBQSxXQUFXLEVBQUVHLHNCQUFVQyxJOztBQUV2Qjs7O0FBR0FWLEVBQUFBLElBQUksRUFBRVMsc0JBQVVDLEk7O0FBRWhCOzs7O0FBSUFILEVBQUFBLGlCQUFpQixFQUFFRSxzQkFBVUM7R0FLMUJHLGtCQUFXQyxTLE1BS1hDLGVBQVFELFMsTUFLUkUsZ0JBQVNGLFMsTUFLVEcsY0FBT0gsUztpQ0FuRE9oQixTLGtCQXNERztBQUNwQk8sRUFBQUEsVUFBVSxFQUFFO0FBQ1ZhLElBQUFBLElBQUksRUFBRTtBQURJO0FBRFEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94LCB7IGRpbWVuc2lvbnMsIHNwYWNpbmcsIHBvc2l0aW9uLCBsYXlvdXQgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgRm9ybUZpZWxkTGFiZWwgZnJvbSAnLi9Gb3JtRmllbGRMYWJlbCdcbmltcG9ydCBGb3JtRmllbGREZXNjcmlwdGlvbiBmcm9tICcuL0Zvcm1GaWVsZERlc2NyaXB0aW9uJ1xuaW1wb3J0IEZvcm1GaWVsZFZhbGlkYXRpb25NZXNzYWdlIGZyb20gJy4vRm9ybUZpZWxkVmFsaWRhdGlvbk1lc3NhZ2UnXG5pbXBvcnQgRm9ybUZpZWxkSGludCBmcm9tICcuL0Zvcm1GaWVsZEhpbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1GaWVsZCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCB1c2VkIGFib3ZlIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAqL1xuICAgIGxhYmVsOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogUGFzc2VkIG9uIHRoZSBsYWJlbCBhcyBhIGh0bWxGb3IgcHJvcC5cbiAgICAgKi9cbiAgICBsYWJlbEZvcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgb3Igbm90IHNob3cgYW4gYXN0ZXJpeCBhZnRlciB0aGUgbGFiZWwuXG4gICAgICovXG4gICAgaXNSZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBBbiBvcHRpb25hbCBkZXNjcmlwdGlvbiBvZiB0aGUgZmllbGQgdW5kZXIgdGhlIGxhYmVsLCBhYm92ZSB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBBbiBvcHRpb25hbCBoaW50IHVuZGVyIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAqL1xuICAgIGhpbnQ6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogSWYgYSB2YWxpZGF0aW9uIG1lc3NhZ2UgaXMgcGFzc2VkIGl0IGlzIHNob3duIHVuZGVyIHRoZSBpbnB1dCBlbGVtZW50XG4gICAgICogYW5kIGFib3ZlIHRoZSBoaW50LiBUaGlzIGlzIHVuYWZmZWN0ZWQgYnkgYGlzSW52YWxpZGAuXG4gICAgICovXG4gICAgdmFsaWRhdGlvbk1lc3NhZ2U6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIGRpbWVuc2lvbnMgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgICAqL1xuICAgIC4uLmRpbWVuc2lvbnMucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIHNwYWNpbmcgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgICAqL1xuICAgIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIHBvc2l0aW9uIHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2ZS5cbiAgICAgKi9cbiAgICAuLi5wb3NpdGlvbi5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgbGF5b3V0IHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2ZS5cbiAgICAgKi9cbiAgICAuLi5sYXlvdXQucHJvcFR5cGVzXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGxhYmVsUHJvcHM6IHtcbiAgICAgIHNpemU6IDQwMFxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBoaW50LFxuICAgICAgbGFiZWwsXG4gICAgICBsYWJlbEZvcixcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgaXNSZXF1aXJlZCxcbiAgICAgIGxhYmVsUHJvcHMsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIHZhbGlkYXRpb25NZXNzYWdlLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggey4uLnByb3BzfT5cbiAgICAgICAgPEZvcm1GaWVsZExhYmVsXG4gICAgICAgICAgaHRtbEZvcj17bGFiZWxGb3J9XG4gICAgICAgICAgaXNBc3RyaXhTaG93bj17aXNSZXF1aXJlZH1cbiAgICAgICAgICBtYXJnaW5Cb3R0b209e2Rlc2NyaXB0aW9uID8gMCA6IDR9XG4gICAgICAgICAgey4uLmxhYmVsUHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgIDwvRm9ybUZpZWxkTGFiZWw+XG4gICAgICAgIHt0eXBlb2YgZGVzY3JpcHRpb24gPT09ICdzdHJpbmcnID8gKFxuICAgICAgICAgIDxGb3JtRmllbGREZXNjcmlwdGlvbiBtYXJnaW5Cb3R0b209ezR9PlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvRm9ybUZpZWxkRGVzY3JpcHRpb24+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgKX1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICB7dHlwZW9mIHZhbGlkYXRpb25NZXNzYWdlID09PSAnc3RyaW5nJyA/IChcbiAgICAgICAgICA8Rm9ybUZpZWxkVmFsaWRhdGlvbk1lc3NhZ2UgbWFyZ2luVG9wPXs4fT5cbiAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZX1cbiAgICAgICAgICA8L0Zvcm1GaWVsZFZhbGlkYXRpb25NZXNzYWdlPlxuICAgICAgICApIDogKFxuICAgICAgICAgIHZhbGlkYXRpb25NZXNzYWdlXG4gICAgICAgICl9XG4gICAgICAgIHt0eXBlb2YgaGludCA9PT0gJ3N0cmluZycgPyAoXG4gICAgICAgICAgPEZvcm1GaWVsZEhpbnQgbWFyZ2luVG9wPXs2fT57aGludH08L0Zvcm1GaWVsZEhpbnQ+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgaGludFxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG59XG4iXX0=