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

var _icons = require("../../icons");

var _Button = _interopRequireDefault(require("./Button"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var BackButton = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(BackButton, _PureComponent);

  var _super = _createSuper(BackButton);

  function BackButton() {
    (0, _classCallCheck2["default"])(this, BackButton);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(BackButton, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_Button["default"], (0, _extends2["default"])({
        iconBefore: _react["default"].createElement(_icons.ArrowLeftIcon, null)
      }, this.props));
    }
  }]);
  return BackButton;
}(_react.PureComponent);

exports["default"] = BackButton;
BackButton.displayName = "BackButton";
(0, _defineProperty2["default"])(BackButton, "propTypes", _objectSpread({}, _Button["default"].propTypes));
(0, _defineProperty2["default"])(BackButton, "defaultProps", _objectSpread({}, _Button["default"].defaultProps, {
  children: 'Back'
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idXR0b25zL3NyYy9CYWNrQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkJhY2tCdXR0b24iLCJwcm9wcyIsIlB1cmVDb21wb25lbnQiLCJCdXR0b24iLCJwcm9wVHlwZXMiLCJkZWZhdWx0UHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7NkJBYVY7QUFDUCxhQUFPLGdDQUFDLGtCQUFEO0FBQVEsUUFBQSxVQUFVLEVBQUUsZ0NBQUMsb0JBQUQ7QUFBcEIsU0FBMkMsS0FBS0MsS0FBaEQsRUFBUDtBQUNEOzs7RUFmcUNDLG9COzs7QUFBbkJGLFU7aUNBQUFBLFUsaUNBS2RHLG1CQUFPQyxTO2lDQUxPSixVLG9DQVNkRyxtQkFBT0UsWTtBQUNWQyxFQUFBQSxRQUFRLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQXJyb3dMZWZ0SWNvbiB9IGZyb20gJy4uLy4uL2ljb25zJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja0J1dHRvbiBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBCdXR0b24gY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLkJ1dHRvbi5wcm9wVHlwZXNcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgLi4uQnV0dG9uLmRlZmF1bHRQcm9wcyxcbiAgICBjaGlsZHJlbjogJ0JhY2snXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxCdXR0b24gaWNvbkJlZm9yZT17PEFycm93TGVmdEljb24gLz59IHsuLi50aGlzLnByb3BzfSAvPlxuICB9XG59XG4iXX0=