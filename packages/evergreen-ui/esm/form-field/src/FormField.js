import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
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
import Box, { dimensions, spacing, position, layout } from 'ui-box';
import FormFieldLabel from './FormFieldLabel';
import FormFieldDescription from './FormFieldDescription';
import FormFieldValidationMessage from './FormFieldValidationMessage';
import FormFieldHint from './FormFieldHint';

var FormField = /*#__PURE__*/function (_PureComponent) {
  _inherits(FormField, _PureComponent);

  var _super = _createSuper(FormField);

  function FormField() {
    _classCallCheck(this, FormField);

    return _super.apply(this, arguments);
  }

  _createClass(FormField, [{
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
          props = _objectWithoutProperties(_this$props, ["hint", "label", "labelFor", "children", "isRequired", "labelProps", "description", "validationMessage"]);

      return React.createElement(Box, props, React.createElement(FormFieldLabel, _extends({
        htmlFor: labelFor,
        isAstrixShown: isRequired,
        marginBottom: description ? 0 : 4
      }, labelProps), label), typeof description === 'string' ? React.createElement(FormFieldDescription, {
        marginBottom: 4
      }, description) : description, children, typeof validationMessage === 'string' ? React.createElement(FormFieldValidationMessage, {
        marginTop: 8
      }, validationMessage) : validationMessage, typeof hint === 'string' ? React.createElement(FormFieldHint, {
        marginTop: 6
      }, hint) : hint);
    }
  }]);

  return FormField;
}(PureComponent);

FormField.displayName = "FormField";

_defineProperty(FormField, "propTypes", _objectSpread({
  /**
   * The label used above the input element.
   */
  label: PropTypes.node.isRequired,

  /**
   * Passed on the label as a htmlFor prop.
   */
  labelFor: PropTypes.string,

  /**
   * Whether or not show an asterix after the label.
   */
  isRequired: PropTypes.bool,

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
  validationMessage: PropTypes.node
}, dimensions.propTypes, {}, spacing.propTypes, {}, position.propTypes, {}, layout.propTypes));

_defineProperty(FormField, "defaultProps", {
  labelProps: {
    size: 400
  }
});

export { FormField as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mb3JtLWZpZWxkL3NyYy9Gb3JtRmllbGQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiQm94IiwiZGltZW5zaW9ucyIsInNwYWNpbmciLCJwb3NpdGlvbiIsImxheW91dCIsIkZvcm1GaWVsZExhYmVsIiwiRm9ybUZpZWxkRGVzY3JpcHRpb24iLCJGb3JtRmllbGRWYWxpZGF0aW9uTWVzc2FnZSIsIkZvcm1GaWVsZEhpbnQiLCJGb3JtRmllbGQiLCJwcm9wcyIsImhpbnQiLCJsYWJlbCIsImxhYmVsRm9yIiwiY2hpbGRyZW4iLCJpc1JlcXVpcmVkIiwibGFiZWxQcm9wcyIsImRlc2NyaXB0aW9uIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJub2RlIiwic3RyaW5nIiwiYm9vbCIsInByb3BUeXBlcyIsInNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsR0FBUCxJQUFjQyxVQUFkLEVBQTBCQyxPQUExQixFQUFtQ0MsUUFBbkMsRUFBNkNDLE1BQTdDLFFBQTJELFFBQTNEO0FBQ0EsT0FBT0MsY0FBUCxNQUEyQixrQkFBM0I7QUFDQSxPQUFPQyxvQkFBUCxNQUFpQyx3QkFBakM7QUFDQSxPQUFPQywwQkFBUCxNQUF1Qyw4QkFBdkM7QUFDQSxPQUFPQyxhQUFQLE1BQTBCLGlCQUExQjs7SUFFcUJDLFM7Ozs7Ozs7Ozs7Ozs7NkJBNERWO0FBQUEsd0JBV0gsS0FBS0MsS0FYRjtBQUFBLFVBRUxDLElBRkssZUFFTEEsSUFGSztBQUFBLFVBR0xDLEtBSEssZUFHTEEsS0FISztBQUFBLFVBSUxDLFFBSkssZUFJTEEsUUFKSztBQUFBLFVBS0xDLFFBTEssZUFLTEEsUUFMSztBQUFBLFVBTUxDLFVBTkssZUFNTEEsVUFOSztBQUFBLFVBT0xDLFVBUEssZUFPTEEsVUFQSztBQUFBLFVBUUxDLFdBUkssZUFRTEEsV0FSSztBQUFBLFVBU0xDLGlCQVRLLGVBU0xBLGlCQVRLO0FBQUEsVUFVRlIsS0FWRTs7QUFhUCxhQUNFLG9CQUFDLEdBQUQsRUFBU0EsS0FBVCxFQUNFLG9CQUFDLGNBQUQ7QUFDRSxRQUFBLE9BQU8sRUFBRUcsUUFEWDtBQUVFLFFBQUEsYUFBYSxFQUFFRSxVQUZqQjtBQUdFLFFBQUEsWUFBWSxFQUFFRSxXQUFXLEdBQUcsQ0FBSCxHQUFPO0FBSGxDLFNBSU1ELFVBSk4sR0FNR0osS0FOSCxDQURGLEVBU0csT0FBT0ssV0FBUCxLQUF1QixRQUF2QixHQUNDLG9CQUFDLG9CQUFEO0FBQXNCLFFBQUEsWUFBWSxFQUFFO0FBQXBDLFNBQ0dBLFdBREgsQ0FERCxHQUtDQSxXQWRKLEVBZ0JHSCxRQWhCSCxFQWlCRyxPQUFPSSxpQkFBUCxLQUE2QixRQUE3QixHQUNDLG9CQUFDLDBCQUFEO0FBQTRCLFFBQUEsU0FBUyxFQUFFO0FBQXZDLFNBQ0dBLGlCQURILENBREQsR0FLQ0EsaUJBdEJKLEVBd0JHLE9BQU9QLElBQVAsS0FBZ0IsUUFBaEIsR0FDQyxvQkFBQyxhQUFEO0FBQWUsUUFBQSxTQUFTLEVBQUU7QUFBMUIsU0FBOEJBLElBQTlCLENBREQsR0FHQ0EsSUEzQkosQ0FERjtBQWdDRDs7OztFQXpHb0NiLGE7O0FBQWxCVyxTOztnQkFBQUEsUztBQUVqQjs7O0FBR0FHLEVBQUFBLEtBQUssRUFBRWIsU0FBUyxDQUFDb0IsSUFBVixDQUFlSixVOztBQUV0Qjs7O0FBR0FGLEVBQUFBLFFBQVEsRUFBRWQsU0FBUyxDQUFDcUIsTTs7QUFFcEI7OztBQUdBTCxFQUFBQSxVQUFVLEVBQUVoQixTQUFTLENBQUNzQixJOztBQUV0Qjs7O0FBR0FKLEVBQUFBLFdBQVcsRUFBRWxCLFNBQVMsQ0FBQ29CLEk7O0FBRXZCOzs7QUFHQVIsRUFBQUEsSUFBSSxFQUFFWixTQUFTLENBQUNvQixJOztBQUVoQjs7OztBQUlBRCxFQUFBQSxpQkFBaUIsRUFBRW5CLFNBQVMsQ0FBQ29CO0dBSzFCbEIsVUFBVSxDQUFDcUIsUyxNQUtYcEIsT0FBTyxDQUFDb0IsUyxNQUtSbkIsUUFBUSxDQUFDbUIsUyxNQUtUbEIsTUFBTSxDQUFDa0IsUzs7Z0JBbkRPYixTLGtCQXNERztBQUNwQk8sRUFBQUEsVUFBVSxFQUFFO0FBQ1ZPLElBQUFBLElBQUksRUFBRTtBQURJO0FBRFEsQzs7U0F0REhkLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCwgeyBkaW1lbnNpb25zLCBzcGFjaW5nLCBwb3NpdGlvbiwgbGF5b3V0IH0gZnJvbSAndWktYm94J1xuaW1wb3J0IEZvcm1GaWVsZExhYmVsIGZyb20gJy4vRm9ybUZpZWxkTGFiZWwnXG5pbXBvcnQgRm9ybUZpZWxkRGVzY3JpcHRpb24gZnJvbSAnLi9Gb3JtRmllbGREZXNjcmlwdGlvbidcbmltcG9ydCBGb3JtRmllbGRWYWxpZGF0aW9uTWVzc2FnZSBmcm9tICcuL0Zvcm1GaWVsZFZhbGlkYXRpb25NZXNzYWdlJ1xuaW1wb3J0IEZvcm1GaWVsZEhpbnQgZnJvbSAnLi9Gb3JtRmllbGRIaW50J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtRmllbGQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdXNlZCBhYm92ZSB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICAgKi9cbiAgICBsYWJlbDogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFBhc3NlZCBvbiB0aGUgbGFiZWwgYXMgYSBodG1sRm9yIHByb3AuXG4gICAgICovXG4gICAgbGFiZWxGb3I6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIG9yIG5vdCBzaG93IGFuIGFzdGVyaXggYWZ0ZXIgdGhlIGxhYmVsLlxuICAgICAqL1xuICAgIGlzUmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogQW4gb3B0aW9uYWwgZGVzY3JpcHRpb24gb2YgdGhlIGZpZWxkIHVuZGVyIHRoZSBsYWJlbCwgYWJvdmUgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAgICovXG4gICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogQW4gb3B0aW9uYWwgaGludCB1bmRlciB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICAgKi9cbiAgICBoaW50OiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIElmIGEgdmFsaWRhdGlvbiBtZXNzYWdlIGlzIHBhc3NlZCBpdCBpcyBzaG93biB1bmRlciB0aGUgaW5wdXQgZWxlbWVudFxuICAgICAqIGFuZCBhYm92ZSB0aGUgaGludC4gVGhpcyBpcyB1bmFmZmVjdGVkIGJ5IGBpc0ludmFsaWRgLlxuICAgICAqL1xuICAgIHZhbGlkYXRpb25NZXNzYWdlOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBkaW1lbnNpb25zIHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2ZS5cbiAgICAgKi9cbiAgICAuLi5kaW1lbnNpb25zLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBzcGFjaW5nIHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2ZS5cbiAgICAgKi9cbiAgICAuLi5zcGFjaW5nLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBwb3NpdGlvbiBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAgICovXG4gICAgLi4ucG9zaXRpb24ucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIGxheW91dCBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAgICovXG4gICAgLi4ubGF5b3V0LnByb3BUeXBlc1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBsYWJlbFByb3BzOiB7XG4gICAgICBzaXplOiA0MDBcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaGludCxcbiAgICAgIGxhYmVsLFxuICAgICAgbGFiZWxGb3IsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGlzUmVxdWlyZWQsXG4gICAgICBsYWJlbFByb3BzLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICB2YWxpZGF0aW9uTWVzc2FnZSxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94IHsuLi5wcm9wc30+XG4gICAgICAgIDxGb3JtRmllbGRMYWJlbFxuICAgICAgICAgIGh0bWxGb3I9e2xhYmVsRm9yfVxuICAgICAgICAgIGlzQXN0cml4U2hvd249e2lzUmVxdWlyZWR9XG4gICAgICAgICAgbWFyZ2luQm90dG9tPXtkZXNjcmlwdGlvbiA/IDAgOiA0fVxuICAgICAgICAgIHsuLi5sYWJlbFByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICA8L0Zvcm1GaWVsZExhYmVsPlxuICAgICAgICB7dHlwZW9mIGRlc2NyaXB0aW9uID09PSAnc3RyaW5nJyA/IChcbiAgICAgICAgICA8Rm9ybUZpZWxkRGVzY3JpcHRpb24gbWFyZ2luQm90dG9tPXs0fT5cbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICA8L0Zvcm1GaWVsZERlc2NyaXB0aW9uPlxuICAgICAgICApIDogKFxuICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICl9XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAge3R5cGVvZiB2YWxpZGF0aW9uTWVzc2FnZSA9PT0gJ3N0cmluZycgPyAoXG4gICAgICAgICAgPEZvcm1GaWVsZFZhbGlkYXRpb25NZXNzYWdlIG1hcmdpblRvcD17OH0+XG4gICAgICAgICAgICB7dmFsaWRhdGlvbk1lc3NhZ2V9XG4gICAgICAgICAgPC9Gb3JtRmllbGRWYWxpZGF0aW9uTWVzc2FnZT5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZVxuICAgICAgICApfVxuICAgICAgICB7dHlwZW9mIGhpbnQgPT09ICdzdHJpbmcnID8gKFxuICAgICAgICAgIDxGb3JtRmllbGRIaW50IG1hcmdpblRvcD17Nn0+e2hpbnR9PC9Gb3JtRmllbGRIaW50PlxuICAgICAgICApIDogKFxuICAgICAgICAgIGhpbnRcbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxufVxuIl19