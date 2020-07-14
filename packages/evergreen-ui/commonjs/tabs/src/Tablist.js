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

var _uiBox = _interopRequireDefault(require("ui-box"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Tablist = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Tablist, _PureComponent);

  var _super = _createSuper(Tablist);

  function Tablist() {
    (0, _classCallCheck2["default"])(this, Tablist);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Tablist, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
        role: "tablist"
      }, this.props));
    }
  }]);
  return Tablist;
}(_react.PureComponent);

exports["default"] = Tablist;
Tablist.displayName = "Tablist";
(0, _defineProperty2["default"])(Tablist, "propTypes", _objectSpread({}, _uiBox["default"].propTypes));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJzL3NyYy9UYWJsaXN0LmpzIl0sIm5hbWVzIjpbIlRhYmxpc3QiLCJwcm9wcyIsIlB1cmVDb21wb25lbnQiLCJCb3giLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7OzZCQUtWO0FBQ1AsYUFBTyxnQ0FBQyxpQkFBRDtBQUFLLFFBQUEsSUFBSSxFQUFDO0FBQVYsU0FBd0IsS0FBS0MsS0FBN0IsRUFBUDtBQUNEOzs7RUFQa0NDLG9COzs7QUFBaEJGLE87aUNBQUFBLE8saUNBRWRHLGtCQUFJQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsaXN0IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLi4uQm94LnByb3BUeXBlc1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Qm94IHJvbGU9XCJ0YWJsaXN0XCIgey4uLnRoaXMucHJvcHN9IC8+XG4gIH1cbn1cbiJdfQ==