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

var _classnames = _interopRequireDefault(require("classnames"));

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _theme = require("../../theme");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Text = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Text, _PureComponent);

  var _super = _createSuper(Text);

  function Text() {
    (0, _classCallCheck2["default"])(this, Text);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Text, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          css = _this$props.css,
          theme = _this$props.theme,
          size = _this$props.size,
          color = _this$props.color,
          fontFamily = _this$props.fontFamily,
          marginTop = _this$props.marginTop,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "css", "theme", "size", "color", "fontFamily", "marginTop"]);

      var _theme$getTextStyle = theme.getTextStyle(size),
          defaultMarginTop = _theme$getTextStyle.marginTop,
          textStyle = (0, _objectWithoutProperties2["default"])(_theme$getTextStyle, ["marginTop"]);

      var finalMarginTop = marginTop === 'default' ? defaultMarginTop : marginTop;
      return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
        is: "span",
        color: theme.getTextColor(color),
        fontFamily: theme.getFontFamily(fontFamily),
        marginTop: finalMarginTop
      }, textStyle, {
        className: (0, _classnames["default"])(className, css ? (0, _glamor.css)(css).toString() : undefined)
      }, props));
    }
  }]);
  return Text;
}(_react.PureComponent);

Text.displayName = "Text";
(0, _defineProperty2["default"])(Text, "propTypes", _objectSpread({}, _uiBox["default"].propTypes, {
  /**
   * Size of the text style.
   * Can be: 300, 400, 500, 600.
   */
  size: _propTypes["default"].oneOf([300, 400, 500, 600]).isRequired,

  /**
   * Font family.
   * Can be: `ui`, `display` or `mono` or a custom font family.
   */
  fontFamily: _propTypes["default"].string.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired
}));
(0, _defineProperty2["default"])(Text, "defaultProps", {
  size: 400,
  color: 'default',
  fontFamily: 'ui'
});

var _default = (0, _theme.withTheme)(Text);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9UZXh0LmpzIl0sIm5hbWVzIjpbIlRleHQiLCJwcm9wcyIsImNsYXNzTmFtZSIsImNzcyIsInRoZW1lIiwic2l6ZSIsImNvbG9yIiwiZm9udEZhbWlseSIsIm1hcmdpblRvcCIsImdldFRleHRTdHlsZSIsImRlZmF1bHRNYXJnaW5Ub3AiLCJ0ZXh0U3R5bGUiLCJmaW5hbE1hcmdpblRvcCIsImdldFRleHRDb2xvciIsImdldEZvbnRGYW1pbHkiLCJ0b1N0cmluZyIsInVuZGVmaW5lZCIsIlB1cmVDb21wb25lbnQiLCJCb3giLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRU1BLEk7Ozs7Ozs7Ozs7Ozs2QkErQks7QUFBQSx3QkFVSCxLQUFLQyxLQVZGO0FBQUEsVUFFTEMsU0FGSyxlQUVMQSxTQUZLO0FBQUEsVUFHTEMsR0FISyxlQUdMQSxHQUhLO0FBQUEsVUFJTEMsS0FKSyxlQUlMQSxLQUpLO0FBQUEsVUFLTEMsSUFMSyxlQUtMQSxJQUxLO0FBQUEsVUFNTEMsS0FOSyxlQU1MQSxLQU5LO0FBQUEsVUFPTEMsVUFQSyxlQU9MQSxVQVBLO0FBQUEsVUFRTEMsU0FSSyxlQVFMQSxTQVJLO0FBQUEsVUFTRlAsS0FURTs7QUFBQSxnQ0FZK0NHLEtBQUssQ0FBQ0ssWUFBTixDQUNwREosSUFEb0QsQ0FaL0M7QUFBQSxVQVlZSyxnQkFaWix1QkFZQ0YsU0FaRDtBQUFBLFVBWWlDRyxTQVpqQzs7QUFnQlAsVUFBTUMsY0FBYyxHQUNsQkosU0FBUyxLQUFLLFNBQWQsR0FBMEJFLGdCQUExQixHQUE2Q0YsU0FEL0M7QUFHQSxhQUNFLGdDQUFDLGlCQUFEO0FBQ0UsUUFBQSxFQUFFLEVBQUMsTUFETDtBQUVFLFFBQUEsS0FBSyxFQUFFSixLQUFLLENBQUNTLFlBQU4sQ0FBbUJQLEtBQW5CLENBRlQ7QUFHRSxRQUFBLFVBQVUsRUFBRUYsS0FBSyxDQUFDVSxhQUFOLENBQW9CUCxVQUFwQixDQUhkO0FBSUUsUUFBQSxTQUFTLEVBQUVLO0FBSmIsU0FLTUQsU0FMTjtBQU1FLFFBQUEsU0FBUyxFQUFFLDRCQUFHVCxTQUFILEVBQWNDLEdBQUcsR0FBRyxpQkFBVUEsR0FBVixFQUFlWSxRQUFmLEVBQUgsR0FBK0JDLFNBQWhEO0FBTmIsU0FPTWYsS0FQTixFQURGO0FBV0Q7OztFQTdEZ0JnQixvQjs7QUFBYmpCLEk7aUNBQUFBLEksaUNBS0NrQixrQkFBSUMsUztBQUVQOzs7O0FBSUFkLEVBQUFBLElBQUksRUFBRWUsc0JBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsQ0FBaEIsRUFBc0NDLFU7O0FBRTVDOzs7O0FBSUFmLEVBQUFBLFVBQVUsRUFBRWEsc0JBQVVHLE1BQVYsQ0FBaUJELFU7O0FBRTdCOzs7QUFHQWxCLEVBQUFBLEtBQUssRUFBRWdCLHNCQUFVSSxNQUFWLENBQWlCRjs7aUNBdEJ0QnRCLEksa0JBeUJrQjtBQUNwQkssRUFBQUEsSUFBSSxFQUFFLEdBRGM7QUFFcEJDLEVBQUFBLEtBQUssRUFBRSxTQUZhO0FBR3BCQyxFQUFBQSxVQUFVLEVBQUU7QUFIUSxDOztlQXVDVCxzQkFBVVAsSUFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBjc3MgYXMgZ2xhbW9yQ3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNsYXNzIFRleHQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgQm94IGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5Cb3gucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogU2l6ZSBvZiB0aGUgdGV4dCBzdHlsZS5cbiAgICAgKiBDYW4gYmU6IDMwMCwgNDAwLCA1MDAsIDYwMC5cbiAgICAgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoWzMwMCwgNDAwLCA1MDAsIDYwMF0pLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBGb250IGZhbWlseS5cbiAgICAgKiBDYW4gYmU6IGB1aWAsIGBkaXNwbGF5YCBvciBgbW9ub2Agb3IgYSBjdXN0b20gZm9udCBmYW1pbHkuXG4gICAgICovXG4gICAgZm9udEZhbWlseTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNpemU6IDQwMCxcbiAgICBjb2xvcjogJ2RlZmF1bHQnLFxuICAgIGZvbnRGYW1pbHk6ICd1aSdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBjc3MsXG4gICAgICB0aGVtZSxcbiAgICAgIHNpemUsXG4gICAgICBjb2xvcixcbiAgICAgIGZvbnRGYW1pbHksXG4gICAgICBtYXJnaW5Ub3AsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB7IG1hcmdpblRvcDogZGVmYXVsdE1hcmdpblRvcCwgLi4udGV4dFN0eWxlIH0gPSB0aGVtZS5nZXRUZXh0U3R5bGUoXG4gICAgICBzaXplXG4gICAgKVxuXG4gICAgY29uc3QgZmluYWxNYXJnaW5Ub3AgPVxuICAgICAgbWFyZ2luVG9wID09PSAnZGVmYXVsdCcgPyBkZWZhdWx0TWFyZ2luVG9wIDogbWFyZ2luVG9wXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBpcz1cInNwYW5cIlxuICAgICAgICBjb2xvcj17dGhlbWUuZ2V0VGV4dENvbG9yKGNvbG9yKX1cbiAgICAgICAgZm9udEZhbWlseT17dGhlbWUuZ2V0Rm9udEZhbWlseShmb250RmFtaWx5KX1cbiAgICAgICAgbWFyZ2luVG9wPXtmaW5hbE1hcmdpblRvcH1cbiAgICAgICAgey4uLnRleHRTdHlsZX1cbiAgICAgICAgY2xhc3NOYW1lPXtjeChjbGFzc05hbWUsIGNzcyA/IGdsYW1vckNzcyhjc3MpLnRvU3RyaW5nKCkgOiB1bmRlZmluZWQpfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoVGV4dClcbiJdfQ==