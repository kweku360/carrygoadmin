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

var FormFieldDescription = /*#__PURE__*/function (_PureComponent) {
  _inherits(FormFieldDescription, _PureComponent);

  var _super = _createSuper(FormFieldDescription);

  function FormFieldDescription() {
    _classCallCheck(this, FormFieldDescription);

    return _super.apply(this, arguments);
  }

  _createClass(FormFieldDescription, [{
    key: "render",
    value: function render() {
      return React.createElement(Paragraph, _extends({
        marginTop: 0,
        size: 400,
        color: "muted"
      }, this.props));
    }
  }]);

  return FormFieldDescription;
}(PureComponent);

FormFieldDescription.displayName = "FormFieldDescription";

_defineProperty(FormFieldDescription, "propTypes", _objectSpread({}, Paragraph.propTypes));

export { FormFieldDescription as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mb3JtLWZpZWxkL3NyYy9Gb3JtRmllbGREZXNjcmlwdGlvbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQYXJhZ3JhcGgiLCJGb3JtRmllbGREZXNjcmlwdGlvbiIsInByb3BzIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGtCQUExQjs7SUFFcUJDLG9COzs7Ozs7Ozs7Ozs7OzZCQVFWO0FBQ1AsYUFBTyxvQkFBQyxTQUFEO0FBQVcsUUFBQSxTQUFTLEVBQUUsQ0FBdEI7QUFBeUIsUUFBQSxJQUFJLEVBQUUsR0FBL0I7QUFBb0MsUUFBQSxLQUFLLEVBQUM7QUFBMUMsU0FBc0QsS0FBS0MsS0FBM0QsRUFBUDtBQUNEOzs7O0VBVitDSCxhOztBQUE3QkUsb0I7O2dCQUFBQSxvQixpQ0FLZEQsU0FBUyxDQUFDRyxTOztTQUxJRixvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQYXJhZ3JhcGggfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtRmllbGREZXNjcmlwdGlvbiBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBQYXJhZ3JhcGggY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLlBhcmFncmFwaC5wcm9wVHlwZXNcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPFBhcmFncmFwaCBtYXJnaW5Ub3A9ezB9IHNpemU9ezQwMH0gY29sb3I9XCJtdXRlZFwiIHsuLi50aGlzLnByb3BzfSAvPlxuICB9XG59XG4iXX0=