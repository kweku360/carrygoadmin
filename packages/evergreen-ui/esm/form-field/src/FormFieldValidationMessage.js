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
import { Paragraph } from '../../typography';
import { withTheme } from '../../theme';
import { ErrorIcon } from '../../icons';
import { Pane } from '../../layers';

var FormFieldValidationMessage = /*#__PURE__*/function (_PureComponent) {
  _inherits(FormFieldValidationMessage, _PureComponent);

  var _super = _createSuper(FormFieldValidationMessage);

  function FormFieldValidationMessage() {
    _classCallCheck(this, FormFieldValidationMessage);

    return _super.apply(this, arguments);
  }

  _createClass(FormFieldValidationMessage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["theme", "children"]);

      return React.createElement(Pane, _extends({
        display: "flex"
      }, props), React.createElement(ErrorIcon, {
        color: "danger",
        marginTop: 1,
        size: 14,
        marginRight: 8
      }), React.createElement(Paragraph, {
        marginTop: 0,
        size: 300,
        color: "danger",
        role: "alert"
      }, children));
    }
  }]);

  return FormFieldValidationMessage;
}(PureComponent);

FormFieldValidationMessage.displayName = "FormFieldValidationMessage";

_defineProperty(FormFieldValidationMessage, "propTypes", _objectSpread({}, Pane.propTypes, {
  /**
   * The contents of the validation message.
   * This is wrapped in a paragraph, use a string.
   */
  children: PropTypes.node,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
}));

export default withTheme(FormFieldValidationMessage);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mb3JtLWZpZWxkL3NyYy9Gb3JtRmllbGRWYWxpZGF0aW9uTWVzc2FnZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJQYXJhZ3JhcGgiLCJ3aXRoVGhlbWUiLCJFcnJvckljb24iLCJQYW5lIiwiRm9ybUZpZWxkVmFsaWRhdGlvbk1lc3NhZ2UiLCJwcm9wcyIsInRoZW1lIiwiY2hpbGRyZW4iLCJwcm9wVHlwZXMiLCJub2RlIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGtCQUExQjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsYUFBMUI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGFBQTFCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixjQUFyQjs7SUFFTUMsMEI7Ozs7Ozs7Ozs7Ozs7NkJBbUJLO0FBQUEsd0JBQytCLEtBQUtDLEtBRHBDO0FBQUEsVUFDQ0MsS0FERCxlQUNDQSxLQUREO0FBQUEsVUFDUUMsUUFEUixlQUNRQSxRQURSO0FBQUEsVUFDcUJGLEtBRHJCOztBQUVQLGFBQ0Usb0JBQUMsSUFBRDtBQUFNLFFBQUEsT0FBTyxFQUFDO0FBQWQsU0FBeUJBLEtBQXpCLEdBQ0Usb0JBQUMsU0FBRDtBQUFXLFFBQUEsS0FBSyxFQUFDLFFBQWpCO0FBQTBCLFFBQUEsU0FBUyxFQUFFLENBQXJDO0FBQXdDLFFBQUEsSUFBSSxFQUFFLEVBQTlDO0FBQWtELFFBQUEsV0FBVyxFQUFFO0FBQS9ELFFBREYsRUFFRSxvQkFBQyxTQUFEO0FBQVcsUUFBQSxTQUFTLEVBQUUsQ0FBdEI7QUFBeUIsUUFBQSxJQUFJLEVBQUUsR0FBL0I7QUFBb0MsUUFBQSxLQUFLLEVBQUMsUUFBMUM7QUFBbUQsUUFBQSxJQUFJLEVBQUM7QUFBeEQsU0FDR0UsUUFESCxDQUZGLENBREY7QUFRRDs7OztFQTdCc0NULGE7O0FBQW5DTSwwQjs7Z0JBQUFBLDBCLGlDQUtDRCxJQUFJLENBQUNLLFM7QUFFUjs7OztBQUlBRCxFQUFBQSxRQUFRLEVBQUVSLFNBQVMsQ0FBQ1UsSTs7QUFFcEI7OztBQUdBSCxFQUFBQSxLQUFLLEVBQUVQLFNBQVMsQ0FBQ1csTUFBVixDQUFpQkM7OztBQWdCNUIsZUFBZVYsU0FBUyxDQUFDRywwQkFBRCxDQUF4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBQYXJhZ3JhcGggfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5pbXBvcnQgeyBFcnJvckljb24gfSBmcm9tICcuLi8uLi9pY29ucydcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5cbmNsYXNzIEZvcm1GaWVsZFZhbGlkYXRpb25NZXNzYWdlIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIFBhbmUgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLlBhbmUucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbnRlbnRzIG9mIHRoZSB2YWxpZGF0aW9uIG1lc3NhZ2UuXG4gICAgICogVGhpcyBpcyB3cmFwcGVkIGluIGEgcGFyYWdyYXBoLCB1c2UgYSBzdHJpbmcuXG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aGVtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lIGRpc3BsYXk9XCJmbGV4XCIgey4uLnByb3BzfT5cbiAgICAgICAgPEVycm9ySWNvbiBjb2xvcj1cImRhbmdlclwiIG1hcmdpblRvcD17MX0gc2l6ZT17MTR9IG1hcmdpblJpZ2h0PXs4fSAvPlxuICAgICAgICA8UGFyYWdyYXBoIG1hcmdpblRvcD17MH0gc2l6ZT17MzAwfSBjb2xvcj1cImRhbmdlclwiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICA8L1BhbmU+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShGb3JtRmllbGRWYWxpZGF0aW9uTWVzc2FnZSlcbiJdfQ==