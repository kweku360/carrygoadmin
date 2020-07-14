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

var _classnames = _interopRequireDefault(require("classnames"));

var _theme = require("../../theme");

var _Text = _interopRequireDefault(require("./Text"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Link = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Link, _PureComponent);

  var _super = _createSuper(Link);

  function Link() {
    (0, _classCallCheck2["default"])(this, Link);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Link, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          color = _this$props.color,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["theme", "className", "color"]);
      var themedClassName = theme.getLinkClassName(color);
      return _react["default"].createElement(_Text["default"], (0, _extends2["default"])({
        is: "a",
        className: (0, _classnames["default"])(className, themedClassName),
        textDecoration: "underline",
        color: null
      }, props));
    }
  }]);
  return Link;
}(_react.PureComponent);

Link.displayName = "Link";
(0, _defineProperty2["default"])(Link, "propTypes", _objectSpread({}, _Text["default"].propTypes, {
  /**
   * This attribute names a relationship of the linked document to the current document.
   * Common use case is: rel="noopener noreferrer".
   */
  rel: _propTypes["default"].string,

  /**
   * Specifies the URL of the linked resource. A URL might be absolute or relative.
   */
  href: _propTypes["default"].string,

  /**
   * Target atrribute, common use case is target="_blank."
   */
  target: _propTypes["default"].string,

  /**
   * The color (and styling) of the Link. Can be default, blue, green or neutral.
   */
  color: _propTypes["default"].string.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired,

  /**
   * Class name passed to the link.
   * Only use if you know what you are doing.
   */
  className: _propTypes["default"].string
}));
(0, _defineProperty2["default"])(Link, "defaultProps", {
  color: 'default'
});

var _default = (0, _theme.withTheme)(Link);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9MaW5rLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJwcm9wcyIsInRoZW1lIiwiY2xhc3NOYW1lIiwiY29sb3IiLCJ0aGVtZWRDbGFzc05hbWUiLCJnZXRMaW5rQ2xhc3NOYW1lIiwiUHVyZUNvbXBvbmVudCIsIlRleHQiLCJwcm9wVHlwZXMiLCJyZWwiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJocmVmIiwidGFyZ2V0IiwiaXNSZXF1aXJlZCIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsSTs7Ozs7Ozs7Ozs7OzZCQXlDSztBQUFBLHdCQUN1QyxLQUFLQyxLQUQ1QztBQUFBLFVBQ0NDLEtBREQsZUFDQ0EsS0FERDtBQUFBLFVBQ1FDLFNBRFIsZUFDUUEsU0FEUjtBQUFBLFVBQ21CQyxLQURuQixlQUNtQkEsS0FEbkI7QUFBQSxVQUM2QkgsS0FEN0I7QUFHUCxVQUFNSSxlQUFlLEdBQUdILEtBQUssQ0FBQ0ksZ0JBQU4sQ0FBdUJGLEtBQXZCLENBQXhCO0FBRUEsYUFDRSxnQ0FBQyxnQkFBRDtBQUNFLFFBQUEsRUFBRSxFQUFDLEdBREw7QUFFRSxRQUFBLFNBQVMsRUFBRSw0QkFBR0QsU0FBSCxFQUFjRSxlQUFkLENBRmI7QUFHRSxRQUFBLGNBQWMsRUFBQyxXQUhqQjtBQUlFLFFBQUEsS0FBSyxFQUFFO0FBSlQsU0FLTUosS0FMTixFQURGO0FBU0Q7OztFQXZEZ0JNLG9COztBQUFiUCxJO2lDQUFBQSxJLGlDQUVDUSxpQkFBS0MsUztBQUVSOzs7O0FBSUFDLEVBQUFBLEdBQUcsRUFBRUMsc0JBQVVDLE07O0FBRWY7OztBQUdBQyxFQUFBQSxJQUFJLEVBQUVGLHNCQUFVQyxNOztBQUVoQjs7O0FBR0FFLEVBQUFBLE1BQU0sRUFBRUgsc0JBQVVDLE07O0FBRWxCOzs7QUFHQVIsRUFBQUEsS0FBSyxFQUFFTyxzQkFBVUMsTUFBVixDQUFpQkcsVTs7QUFFeEI7OztBQUdBYixFQUFBQSxLQUFLLEVBQUVTLHNCQUFVSyxNQUFWLENBQWlCRCxVOztBQUV4Qjs7OztBQUlBWixFQUFBQSxTQUFTLEVBQUVRLHNCQUFVQzs7aUNBbENuQlosSSxrQkFxQ2tCO0FBQ3BCSSxFQUFBQSxLQUFLLEVBQUU7QUFEYSxDOztlQXFCVCxzQkFBVUosSUFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQnXG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAuLi5UZXh0LnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgYXR0cmlidXRlIG5hbWVzIGEgcmVsYXRpb25zaGlwIG9mIHRoZSBsaW5rZWQgZG9jdW1lbnQgdG8gdGhlIGN1cnJlbnQgZG9jdW1lbnQuXG4gICAgICogQ29tbW9uIHVzZSBjYXNlIGlzOiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIuXG4gICAgICovXG4gICAgcmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIHRoZSBVUkwgb2YgdGhlIGxpbmtlZCByZXNvdXJjZS4gQSBVUkwgbWlnaHQgYmUgYWJzb2x1dGUgb3IgcmVsYXRpdmUuXG4gICAgICovXG4gICAgaHJlZjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRhcmdldCBhdHJyaWJ1dGUsIGNvbW1vbiB1c2UgY2FzZSBpcyB0YXJnZXQ9XCJfYmxhbmsuXCJcbiAgICAgKi9cbiAgICB0YXJnZXQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29sb3IgKGFuZCBzdHlsaW5nKSBvZiB0aGUgTGluay4gQ2FuIGJlIGRlZmF1bHQsIGJsdWUsIGdyZWVuIG9yIG5ldXRyYWwuXG4gICAgICovXG4gICAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIENsYXNzIG5hbWUgcGFzc2VkIHRvIHRoZSBsaW5rLlxuICAgICAqIE9ubHkgdXNlIGlmIHlvdSBrbm93IHdoYXQgeW91IGFyZSBkb2luZy5cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29sb3I6ICdkZWZhdWx0J1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGhlbWUsIGNsYXNzTmFtZSwgY29sb3IsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB0aGVtZWRDbGFzc05hbWUgPSB0aGVtZS5nZXRMaW5rQ2xhc3NOYW1lKGNvbG9yKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXh0XG4gICAgICAgIGlzPVwiYVwiXG4gICAgICAgIGNsYXNzTmFtZT17Y3goY2xhc3NOYW1lLCB0aGVtZWRDbGFzc05hbWUpfVxuICAgICAgICB0ZXh0RGVjb3JhdGlvbj1cInVuZGVybGluZVwiXG4gICAgICAgIGNvbG9yPXtudWxsfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoTGluaylcbiJdfQ==