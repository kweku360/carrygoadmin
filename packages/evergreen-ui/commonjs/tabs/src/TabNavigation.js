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

var TabNavigation = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(TabNavigation, _PureComponent);

  var _super = _createSuper(TabNavigation);

  function TabNavigation() {
    (0, _classCallCheck2["default"])(this, TabNavigation);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(TabNavigation, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
        is: "nav",
        role: "navigation"
      }, this.props));
    }
  }]);
  return TabNavigation;
}(_react.PureComponent);

exports["default"] = TabNavigation;
TabNavigation.displayName = "TabNavigation";
(0, _defineProperty2["default"])(TabNavigation, "propTypes", _objectSpread({}, _uiBox["default"].propTypes));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJzL3NyYy9UYWJOYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIlRhYk5hdmlnYXRpb24iLCJwcm9wcyIsIlB1cmVDb21wb25lbnQiLCJCb3giLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsYTs7Ozs7Ozs7Ozs7OzZCQUtWO0FBQ1AsYUFBTyxnQ0FBQyxpQkFBRDtBQUFLLFFBQUEsRUFBRSxFQUFDLEtBQVI7QUFBYyxRQUFBLElBQUksRUFBQztBQUFuQixTQUFvQyxLQUFLQyxLQUF6QyxFQUFQO0FBQ0Q7OztFQVB3Q0Msb0I7OztBQUF0QkYsYTtpQ0FBQUEsYSxpQ0FFZEcsa0JBQUlDLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYk5hdmlnYXRpb24gZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAuLi5Cb3gucHJvcFR5cGVzXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxCb3ggaXM9XCJuYXZcIiByb2xlPVwibmF2aWdhdGlvblwiIHsuLi50aGlzLnByb3BzfSAvPlxuICB9XG59XG4iXX0=