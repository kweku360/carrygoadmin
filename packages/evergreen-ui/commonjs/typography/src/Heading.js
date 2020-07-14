"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _theme = require("../../theme");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Heading = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Heading, _PureComponent);

  var _super = _createSuper(Heading);

  function Heading() {
    (0, _classCallCheck2["default"])(this, Heading);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Heading, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          marginTop = _this$props.marginTop,
          size = _this$props.size,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["theme", "marginTop", "size"]);

      var _theme$getHeadingStyl = theme.getHeadingStyle(size),
          defaultMarginTop = _theme$getHeadingStyl.marginTop,
          headingStyle = (0, _objectWithoutProperties2["default"])(_theme$getHeadingStyl, ["marginTop"]);

      var finalMarginTop = marginTop;

      if (marginTop === 'default') {
        finalMarginTop = defaultMarginTop;
      }

      return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
        is: "h2",
        marginTop: finalMarginTop || 0,
        marginBottom: 0
      }, headingStyle, props));
    }
  }]);
  return Heading;
}(_react.PureComponent);

Heading.displayName = "Heading";
(0, _defineProperty2["default"])(Heading, "propTypes", _objectSpread({}, _uiBox["default"].propTypes, {
  /**
   * The size of the heading.
   */
  size: _propTypes["default"].oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900]).isRequired,

  /**
   * Pass `default` to use the default margin top for that size.
   */
  marginTop: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].number, _propTypes["default"].string]),

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired
}));
(0, _defineProperty2["default"])(Heading, "defaultProps", {
  size: 500
});

var _default = (0, _theme.withTheme)(Heading);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9IZWFkaW5nLmpzIl0sIm5hbWVzIjpbIkhlYWRpbmciLCJwcm9wcyIsInRoZW1lIiwibWFyZ2luVG9wIiwic2l6ZSIsImdldEhlYWRpbmdTdHlsZSIsImRlZmF1bHRNYXJnaW5Ub3AiLCJoZWFkaW5nU3R5bGUiLCJmaW5hbE1hcmdpblRvcCIsIlB1cmVDb21wb25lbnQiLCJCb3giLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJvbmVPZlR5cGUiLCJib29sIiwibnVtYmVyIiwic3RyaW5nIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVNQSxPOzs7Ozs7Ozs7Ozs7NkJBZ0NLO0FBQUEsd0JBQ3NDLEtBQUtDLEtBRDNDO0FBQUEsVUFDQ0MsS0FERCxlQUNDQSxLQUREO0FBQUEsVUFDUUMsU0FEUixlQUNRQSxTQURSO0FBQUEsVUFDbUJDLElBRG5CLGVBQ21CQSxJQURuQjtBQUFBLFVBQzRCSCxLQUQ1Qjs7QUFBQSxrQ0FLSEMsS0FBSyxDQUFDRyxlQUFOLENBQXNCRCxJQUF0QixDQUxHO0FBQUEsVUFHTUUsZ0JBSE4seUJBR0xILFNBSEs7QUFBQSxVQUlGSSxZQUpFOztBQU9QLFVBQUlDLGNBQWMsR0FBR0wsU0FBckI7O0FBQ0EsVUFBSUEsU0FBUyxLQUFLLFNBQWxCLEVBQTZCO0FBQzNCSyxRQUFBQSxjQUFjLEdBQUdGLGdCQUFqQjtBQUNEOztBQUVELGFBQ0UsZ0NBQUMsaUJBQUQ7QUFDRSxRQUFBLEVBQUUsRUFBQyxJQURMO0FBRUUsUUFBQSxTQUFTLEVBQUVFLGNBQWMsSUFBSSxDQUYvQjtBQUdFLFFBQUEsWUFBWSxFQUFFO0FBSGhCLFNBSU1ELFlBSk4sRUFLTU4sS0FMTixFQURGO0FBU0Q7OztFQXJEbUJRLG9COztBQUFoQlQsTztpQ0FBQUEsTyxpQ0FLQ1Usa0JBQUlDLFM7QUFFUDs7O0FBR0FQLEVBQUFBLElBQUksRUFBRVEsc0JBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsRUFBb0MsR0FBcEMsRUFBeUMsR0FBekMsQ0FBaEIsRUFDSEMsVTs7QUFFSDs7O0FBR0FYLEVBQUFBLFNBQVMsRUFBRVMsc0JBQVVHLFNBQVYsQ0FBb0IsQ0FDN0JILHNCQUFVSSxJQURtQixFQUU3Qkosc0JBQVVLLE1BRm1CLEVBRzdCTCxzQkFBVU0sTUFIbUIsQ0FBcEIsQzs7QUFNWDs7O0FBR0FoQixFQUFBQSxLQUFLLEVBQUVVLHNCQUFVTyxNQUFWLENBQWlCTDs7aUNBekJ0QmQsTyxrQkE0QmtCO0FBQ3BCSSxFQUFBQSxJQUFJLEVBQUU7QUFEYyxDOztlQTRCVCxzQkFBVUosT0FBVixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNsYXNzIEhlYWRpbmcgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBIZWFkaW5nIGNvbXBvc2VzIEJveCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5Cb3gucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNpemUgb2YgdGhlIGhlYWRpbmcuXG4gICAgICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsxMDAsIDIwMCwgMzAwLCA0MDAsIDUwMCwgNjAwLCA3MDAsIDgwMCwgOTAwXSlcbiAgICAgIC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogUGFzcyBgZGVmYXVsdGAgdG8gdXNlIHRoZSBkZWZhdWx0IG1hcmdpbiB0b3AgZm9yIHRoYXQgc2l6ZS5cbiAgICAgKi9cbiAgICBtYXJnaW5Ub3A6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLnN0cmluZ1xuICAgIF0pLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNpemU6IDUwMFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGhlbWUsIG1hcmdpblRvcCwgc2l6ZSwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7XG4gICAgICBtYXJnaW5Ub3A6IGRlZmF1bHRNYXJnaW5Ub3AsXG4gICAgICAuLi5oZWFkaW5nU3R5bGVcbiAgICB9ID0gdGhlbWUuZ2V0SGVhZGluZ1N0eWxlKHNpemUpXG5cbiAgICBsZXQgZmluYWxNYXJnaW5Ub3AgPSBtYXJnaW5Ub3BcbiAgICBpZiAobWFyZ2luVG9wID09PSAnZGVmYXVsdCcpIHtcbiAgICAgIGZpbmFsTWFyZ2luVG9wID0gZGVmYXVsdE1hcmdpblRvcFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIGlzPVwiaDJcIlxuICAgICAgICBtYXJnaW5Ub3A9e2ZpbmFsTWFyZ2luVG9wIHx8IDB9XG4gICAgICAgIG1hcmdpbkJvdHRvbT17MH1cbiAgICAgICAgey4uLmhlYWRpbmdTdHlsZX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKEhlYWRpbmcpXG4iXX0=