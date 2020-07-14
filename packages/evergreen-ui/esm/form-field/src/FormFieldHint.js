import _extends from "@babel/runtime/helpers/esm/extends";
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
import { Paragraph } from '../../typography';

var FormFieldHint = /*#__PURE__*/function (_PureComponent) {
  _inherits(FormFieldHint, _PureComponent);

  var _super = _createSuper(FormFieldHint);

  function FormFieldHint() {
    _classCallCheck(this, FormFieldHint);

    return _super.apply(this, arguments);
  }

  _createClass(FormFieldHint, [{
    key: "render",
    value: function render() {
      return React.createElement(Paragraph, _extends({
        marginTop: 0,
        size: 300,
        color: "muted"
      }, this.props));
    }
  }]);

  return FormFieldHint;
}(PureComponent);

FormFieldHint.displayName = "FormFieldHint";

_defineProperty(FormFieldHint, "propTypes", _objectSpread({}, Paragraph.propTypes));

export { FormFieldHint as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mb3JtLWZpZWxkL3NyYy9Gb3JtRmllbGRIaW50LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlBhcmFncmFwaCIsIkZvcm1GaWVsZEhpbnQiLCJwcm9wcyIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixrQkFBMUI7O0lBRXFCQyxhOzs7Ozs7Ozs7Ozs7OzZCQVFWO0FBQ1AsYUFBTyxvQkFBQyxTQUFEO0FBQVcsUUFBQSxTQUFTLEVBQUUsQ0FBdEI7QUFBeUIsUUFBQSxJQUFJLEVBQUUsR0FBL0I7QUFBb0MsUUFBQSxLQUFLLEVBQUM7QUFBMUMsU0FBc0QsS0FBS0MsS0FBM0QsRUFBUDtBQUNEOzs7O0VBVndDSCxhOztBQUF0QkUsYTs7Z0JBQUFBLGEsaUNBS2RELFNBQVMsQ0FBQ0csUzs7U0FMSUYsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQYXJhZ3JhcGggfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtRmllbGRIaW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIFBhcmFncmFwaCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uUGFyYWdyYXBoLnByb3BUeXBlc1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8UGFyYWdyYXBoIG1hcmdpblRvcD17MH0gc2l6ZT17MzAwfSBjb2xvcj1cIm11dGVkXCIgey4uLnRoaXMucHJvcHN9IC8+XG4gIH1cbn1cbiJdfQ==