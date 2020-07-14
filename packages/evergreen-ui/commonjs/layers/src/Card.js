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

var _Pane = _interopRequireDefault(require("./Pane"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Card = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Card, _PureComponent);

  var _super = _createSuper(Card);

  function Card() {
    (0, _classCallCheck2["default"])(this, Card);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Card, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_Pane["default"], (0, _extends2["default"])({
        borderRadius: 5
      }, this.props));
    }
  }]);
  return Card;
}(_react.PureComponent);

exports["default"] = Card;
Card.displayName = "Card";
(0, _defineProperty2["default"])(Card, "propTypes", _objectSpread({}, _Pane["default"].propTypes));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvc3JjL0NhcmQuanMiXSwibmFtZXMiOlsiQ2FyZCIsInByb3BzIiwiUHVyZUNvbXBvbmVudCIsIlBhbmUiLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7OzZCQUtWO0FBQ1AsYUFBTyxnQ0FBQyxnQkFBRDtBQUFNLFFBQUEsWUFBWSxFQUFFO0FBQXBCLFNBQTJCLEtBQUtDLEtBQWhDLEVBQVA7QUFDRDs7O0VBUCtCQyxvQjs7O0FBQWJGLEk7aUNBQUFBLEksaUNBRWRHLGlCQUFLQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQYW5lIGZyb20gJy4vUGFuZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC4uLlBhbmUucHJvcFR5cGVzXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxQYW5lIGJvcmRlclJhZGl1cz17NX0gey4uLnRoaXMucHJvcHN9IC8+XG4gIH1cbn1cbiJdfQ==