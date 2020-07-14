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

var _react = _interopRequireWildcard(require("react"));

var _uiBox = _interopRequireDefault(require("ui-box"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Small can only be used inside of Text or Paragraph.
 */
var Small = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Small, _PureComponent);

  var _super = _createSuper(Small);

  function Small() {
    (0, _classCallCheck2["default"])(this, Small);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Small, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
        is: "small",
        fontSize: "85%"
      }, this.props));
    }
  }]);
  return Small;
}(_react.PureComponent);

exports["default"] = Small;
Small.displayName = "Small";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9TbWFsbC5qcyJdLCJuYW1lcyI6WyJTbWFsbCIsInByb3BzIiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRUE7OztJQUdxQkEsSzs7Ozs7Ozs7Ozs7OzZCQUNWO0FBQ1AsYUFBTyxnQ0FBQyxpQkFBRDtBQUFLLFFBQUEsRUFBRSxFQUFDLE9BQVI7QUFBZ0IsUUFBQSxRQUFRLEVBQUM7QUFBekIsU0FBbUMsS0FBS0MsS0FBeEMsRUFBUDtBQUNEOzs7RUFIZ0NDLG9COzs7QUFBZEYsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcblxuLyoqXG4gKiBTbWFsbCBjYW4gb25seSBiZSB1c2VkIGluc2lkZSBvZiBUZXh0IG9yIFBhcmFncmFwaC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU21hbGwgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Qm94IGlzPVwic21hbGxcIiBmb250U2l6ZT1cIjg1JVwiIHsuLi50aGlzLnByb3BzfSAvPlxuICB9XG59XG4iXX0=