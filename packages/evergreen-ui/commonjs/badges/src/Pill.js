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

var _Badge = _interopRequireDefault(require("./Badge"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Pill = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Pill, _PureComponent);

  var _super = _createSuper(Pill);

  function Pill() {
    (0, _classCallCheck2["default"])(this, Pill);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Pill, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_Badge["default"], (0, _extends2["default"])({
        borderRadius: 999
      }, this.props));
    }
  }]);
  return Pill;
}(_react.PureComponent);

exports["default"] = Pill;
Pill.displayName = "Pill";
(0, _defineProperty2["default"])(Pill, "propTypes", _objectSpread({}, _Badge["default"].propTypes));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iYWRnZXMvc3JjL1BpbGwuanMiXSwibmFtZXMiOlsiUGlsbCIsInByb3BzIiwiUHVyZUNvbXBvbmVudCIsIkJhZGdlIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs2QkFLVjtBQUNQLGFBQU8sZ0NBQUMsaUJBQUQ7QUFBTyxRQUFBLFlBQVksRUFBRTtBQUFyQixTQUE4QixLQUFLQyxLQUFuQyxFQUFQO0FBQ0Q7OztFQVArQkMsb0I7OztBQUFiRixJO2lDQUFBQSxJLGlDQUVkRyxrQkFBTUMsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFkZ2UgZnJvbSAnLi9CYWRnZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlsbCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC4uLkJhZGdlLnByb3BUeXBlc1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8QmFkZ2UgYm9yZGVyUmFkaXVzPXs5OTl9IHsuLi50aGlzLnByb3BzfSAvPlxuICB9XG59XG4iXX0=