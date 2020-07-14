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

var Code = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Code, _PureComponent);

  var _super = _createSuper(Code);

  function Code() {
    (0, _classCallCheck2["default"])(this, Code);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Code, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          appearance = _this$props.appearance,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["theme", "className", "appearance"]);

      var _theme$getCodeProps = theme.getCodeProps(appearance),
          _theme$getCodeProps$c = _theme$getCodeProps.className,
          themedClassName = _theme$getCodeProps$c === void 0 ? '' : _theme$getCodeProps$c,
          themeProps = (0, _objectWithoutProperties2["default"])(_theme$getCodeProps, ["className"]);

      return _react["default"].createElement(_Text["default"], (0, _extends2["default"])({
        is: "code",
        className: (0, _classnames["default"])(className, themedClassName),
        fontFamily: "mono"
      }, themeProps, props));
    }
  }]);
  return Code;
}(_react.PureComponent);

Code.displayName = "Code";
(0, _defineProperty2["default"])(Code, "propTypes", _objectSpread({}, _Text["default"].propTypes, {
  /**
   * The appearance of the code.
   */
  appearance: _propTypes["default"].oneOf(['default', 'minimal']).isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired,

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: _propTypes["default"].string
}));
(0, _defineProperty2["default"])(Code, "defaultProps", {
  appearance: 'default'
});

var _default = (0, _theme.withTheme)(Code);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9Db2RlLmpzIl0sIm5hbWVzIjpbIkNvZGUiLCJwcm9wcyIsInRoZW1lIiwiY2xhc3NOYW1lIiwiYXBwZWFyYW5jZSIsImdldENvZGVQcm9wcyIsInRoZW1lZENsYXNzTmFtZSIsInRoZW1lUHJvcHMiLCJQdXJlQ29tcG9uZW50IiwiVGV4dCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mIiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsSTs7Ozs7Ozs7Ozs7OzZCQXlCSztBQUFBLHdCQUM0QyxLQUFLQyxLQURqRDtBQUFBLFVBQ0NDLEtBREQsZUFDQ0EsS0FERDtBQUFBLFVBQ1FDLFNBRFIsZUFDUUEsU0FEUjtBQUFBLFVBQ21CQyxVQURuQixlQUNtQkEsVUFEbkI7QUFBQSxVQUNrQ0gsS0FEbEM7O0FBQUEsZ0NBTUhDLEtBQUssQ0FBQ0csWUFBTixDQUFtQkQsVUFBbkIsQ0FORztBQUFBLHNEQUlMRCxTQUpLO0FBQUEsVUFJTUcsZUFKTixzQ0FJd0IsRUFKeEI7QUFBQSxVQUtGQyxVQUxFOztBQVFQLGFBQ0UsZ0NBQUMsZ0JBQUQ7QUFDRSxRQUFBLEVBQUUsRUFBQyxNQURMO0FBRUUsUUFBQSxTQUFTLEVBQUUsNEJBQUdKLFNBQUgsRUFBY0csZUFBZCxDQUZiO0FBR0UsUUFBQSxVQUFVLEVBQUM7QUFIYixTQUlNQyxVQUpOLEVBS01OLEtBTE4sRUFERjtBQVNEOzs7RUExQ2dCTyxvQjs7QUFBYlIsSTtpQ0FBQUEsSSxpQ0FFQ1MsaUJBQUtDLFM7QUFFUjs7O0FBR0FOLEVBQUFBLFVBQVUsRUFBRU8sc0JBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxTQUFELEVBQVksU0FBWixDQUFoQixFQUF3Q0MsVTs7QUFFcEQ7OztBQUdBWCxFQUFBQSxLQUFLLEVBQUVTLHNCQUFVRyxNQUFWLENBQWlCRCxVOztBQUV4Qjs7OztBQUlBVixFQUFBQSxTQUFTLEVBQUVRLHNCQUFVSTs7aUNBbEJuQmYsSSxrQkFxQmtCO0FBQ3BCSSxFQUFBQSxVQUFVLEVBQUU7QUFEUSxDOztlQXdCVCxzQkFBVUosSUFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQnXG5cbmNsYXNzIENvZGUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAuLi5UZXh0LnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSBjb2RlLlxuICAgICAqL1xuICAgIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAnbWluaW1hbCddKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogQ2xhc3MgbmFtZSBwYXNzZWQgdG8gdGhlIGJ1dHRvbi5cbiAgICAgKiBPbmx5IHVzZSBpZiB5b3Uga25vdyB3aGF0IHlvdSBhcmUgZG9pbmcuXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFwcGVhcmFuY2U6ICdkZWZhdWx0J1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGhlbWUsIGNsYXNzTmFtZSwgYXBwZWFyYW5jZSwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZTogdGhlbWVkQ2xhc3NOYW1lID0gJycsXG4gICAgICAuLi50aGVtZVByb3BzXG4gICAgfSA9IHRoZW1lLmdldENvZGVQcm9wcyhhcHBlYXJhbmNlKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXh0XG4gICAgICAgIGlzPVwiY29kZVwiXG4gICAgICAgIGNsYXNzTmFtZT17Y3goY2xhc3NOYW1lLCB0aGVtZWRDbGFzc05hbWUpfVxuICAgICAgICBmb250RmFtaWx5PVwibW9ub1wiXG4gICAgICAgIHsuLi50aGVtZVByb3BzfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoQ29kZSlcbiJdfQ==