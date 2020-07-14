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

var Pre = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Pre, _PureComponent);

  var _super = _createSuper(Pre);

  function Pre() {
    (0, _classCallCheck2["default"])(this, Pre);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Pre, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_Text["default"], (0, _extends2["default"])({
        is: "pre",
        marginTop: 0,
        marginBottom: 0
      }, this.props));
    }
  }]);
  return Pre;
}(_react.PureComponent);

exports["default"] = Pre;
Pre.displayName = "Pre";
(0, _defineProperty2["default"])(Pre, "propTypes", _objectSpread({}, _Text["default"].propTypes));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9QcmUuanMiXSwibmFtZXMiOlsiUHJlIiwicHJvcHMiLCJQdXJlQ29tcG9uZW50IiwiVGV4dCIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxHOzs7Ozs7Ozs7Ozs7NkJBS1Y7QUFDUCxhQUFPLGdDQUFDLGdCQUFEO0FBQU0sUUFBQSxFQUFFLEVBQUMsS0FBVDtBQUFlLFFBQUEsU0FBUyxFQUFFLENBQTFCO0FBQTZCLFFBQUEsWUFBWSxFQUFFO0FBQTNDLFNBQWtELEtBQUtDLEtBQXZELEVBQVA7QUFDRDs7O0VBUDhCQyxvQjs7O0FBQVpGLEc7aUNBQUFBLEcsaUNBRWRHLGlCQUFLQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLi4uVGV4dC5wcm9wVHlwZXNcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPFRleHQgaXM9XCJwcmVcIiBtYXJnaW5Ub3A9ezB9IG1hcmdpbkJvdHRvbT17MH0gey4uLnRoaXMucHJvcHN9IC8+XG4gIH1cbn1cbiJdfQ==