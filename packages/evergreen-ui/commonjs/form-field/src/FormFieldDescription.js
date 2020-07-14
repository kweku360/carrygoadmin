"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _typography = require("../../typography");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var FormFieldDescription = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(FormFieldDescription, _PureComponent);

  var _super = _createSuper(FormFieldDescription);

  function FormFieldDescription() {
    (0, _classCallCheck2["default"])(this, FormFieldDescription);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(FormFieldDescription, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_typography.Paragraph, (0, _extends2["default"])({
        marginTop: 0,
        size: 400,
        color: "muted"
      }, this.props));
    }
  }]);
  return FormFieldDescription;
}(_react.PureComponent);

exports["default"] = FormFieldDescription;
FormFieldDescription.displayName = "FormFieldDescription";
(0, _defineProperty2["default"])(FormFieldDescription, "propTypes", _objectSpread({}, _typography.Paragraph.propTypes));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mb3JtLWZpZWxkL3NyYy9Gb3JtRmllbGREZXNjcmlwdGlvbi5qcyJdLCJuYW1lcyI6WyJGb3JtRmllbGREZXNjcmlwdGlvbiIsInByb3BzIiwiUHVyZUNvbXBvbmVudCIsIlBhcmFncmFwaCIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxvQjs7Ozs7Ozs7Ozs7OzZCQVFWO0FBQ1AsYUFBTyxnQ0FBQyxxQkFBRDtBQUFXLFFBQUEsU0FBUyxFQUFFLENBQXRCO0FBQXlCLFFBQUEsSUFBSSxFQUFFLEdBQS9CO0FBQW9DLFFBQUEsS0FBSyxFQUFDO0FBQTFDLFNBQXNELEtBQUtDLEtBQTNELEVBQVA7QUFDRDs7O0VBVitDQyxvQjs7O0FBQTdCRixvQjtpQ0FBQUEsb0IsaUNBS2RHLHNCQUFVQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFBhcmFncmFwaCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1GaWVsZERlc2NyaXB0aW9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIFBhcmFncmFwaCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uUGFyYWdyYXBoLnByb3BUeXBlc1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8UGFyYWdyYXBoIG1hcmdpblRvcD17MH0gc2l6ZT17NDAwfSBjb2xvcj1cIm11dGVkXCIgey4uLnRoaXMucHJvcHN9IC8+XG4gIH1cbn1cbiJdfQ==