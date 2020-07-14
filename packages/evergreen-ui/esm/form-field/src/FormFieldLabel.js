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
import { Label } from '../../typography';

var FormFieldLabel = /*#__PURE__*/function (_PureComponent) {
  _inherits(FormFieldLabel, _PureComponent);

  var _super = _createSuper(FormFieldLabel);

  function FormFieldLabel() {
    _classCallCheck(this, FormFieldLabel);

    return _super.apply(this, arguments);
  }

  _createClass(FormFieldLabel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          isAstrixShown = _this$props.isAstrixShown,
          props = _objectWithoutProperties(_this$props, ["children", "isAstrixShown"]);

      return React.createElement(Label, _extends({
        display: "block"
      }, props), children, ' ', isAstrixShown && React.createElement("span", {
        title: "This field is required."
      }, "*"));
    }
  }]);

  return FormFieldLabel;
}(PureComponent);

FormFieldLabel.displayName = "FormFieldLabel";

_defineProperty(FormFieldLabel, "propTypes", _objectSpread({}, Label.propTypes, {
  /**
   * Whether or not to show an asterix after the label.
   */
  isAstrixShown: PropTypes.bool
}));

export { FormFieldLabel as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mb3JtLWZpZWxkL3NyYy9Gb3JtRmllbGRMYWJlbC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJMYWJlbCIsIkZvcm1GaWVsZExhYmVsIiwicHJvcHMiLCJjaGlsZHJlbiIsImlzQXN0cml4U2hvd24iLCJwcm9wVHlwZXMiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLEtBQVQsUUFBc0Isa0JBQXRCOztJQUVxQkMsYzs7Ozs7Ozs7Ozs7Ozs2QkFhVjtBQUFBLHdCQUN1QyxLQUFLQyxLQUQ1QztBQUFBLFVBQ0NDLFFBREQsZUFDQ0EsUUFERDtBQUFBLFVBQ1dDLGFBRFgsZUFDV0EsYUFEWDtBQUFBLFVBQzZCRixLQUQ3Qjs7QUFFUCxhQUNFLG9CQUFDLEtBQUQ7QUFBTyxRQUFBLE9BQU8sRUFBQztBQUFmLFNBQTJCQSxLQUEzQixHQUNHQyxRQURILEVBQ2EsR0FEYixFQUVHQyxhQUFhLElBQUk7QUFBTSxRQUFBLEtBQUssRUFBQztBQUFaLGFBRnBCLENBREY7QUFNRDs7OztFQXJCeUNOLGE7O0FBQXZCRyxjOztnQkFBQUEsYyxpQ0FLZEQsS0FBSyxDQUFDSyxTO0FBRVQ7OztBQUdBRCxFQUFBQSxhQUFhLEVBQUVMLFNBQVMsQ0FBQ087OztTQVZSTCxjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUZpZWxkTGFiZWwgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgTGFiZWwgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLkxhYmVsLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgb3Igbm90IHRvIHNob3cgYW4gYXN0ZXJpeCBhZnRlciB0aGUgbGFiZWwuXG4gICAgICovXG4gICAgaXNBc3RyaXhTaG93bjogUHJvcFR5cGVzLmJvb2xcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBpc0FzdHJpeFNob3duLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8TGFiZWwgZGlzcGxheT1cImJsb2NrXCIgey4uLnByb3BzfT5cbiAgICAgICAge2NoaWxkcmVufXsnICd9XG4gICAgICAgIHtpc0FzdHJpeFNob3duICYmIDxzcGFuIHRpdGxlPVwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZC5cIj4qPC9zcGFuPn1cbiAgICAgIDwvTGFiZWw+XG4gICAgKVxuICB9XG59XG4iXX0=