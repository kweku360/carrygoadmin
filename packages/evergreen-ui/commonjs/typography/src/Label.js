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

var _Text = _interopRequireDefault(require("./Text"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Label = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Label, _PureComponent);

  var _super = _createSuper(Label);

  function Label() {
    (0, _classCallCheck2["default"])(this, Label);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Label, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_Text["default"], (0, _extends2["default"])({
        is: "label",
        fontWeight: 500
      }, this.props));
    }
  }]);
  return Label;
}(_react.PureComponent);

exports["default"] = Label;
Label.displayName = "Label";
(0, _defineProperty2["default"])(Label, "propTypes", _objectSpread({}, _Text["default"].propTypes));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9MYWJlbC5qcyJdLCJuYW1lcyI6WyJMYWJlbCIsInByb3BzIiwiUHVyZUNvbXBvbmVudCIsIlRleHQiLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7OzZCQUtWO0FBQ1AsYUFBTyxnQ0FBQyxnQkFBRDtBQUFNLFFBQUEsRUFBRSxFQUFDLE9BQVQ7QUFBaUIsUUFBQSxVQUFVLEVBQUU7QUFBN0IsU0FBc0MsS0FBS0MsS0FBM0MsRUFBUDtBQUNEOzs7RUFQZ0NDLG9COzs7QUFBZEYsSztpQ0FBQUEsSyxpQ0FFZEcsaUJBQUtDLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYWJlbCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC4uLlRleHQucHJvcFR5cGVzXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxUZXh0IGlzPVwibGFiZWxcIiBmb250V2VpZ2h0PXs1MDB9IHsuLi50aGlzLnByb3BzfSAvPlxuICB9XG59XG4iXX0=