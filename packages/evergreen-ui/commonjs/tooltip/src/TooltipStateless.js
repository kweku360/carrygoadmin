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

var _layers = require("../../layers");

var _typography = require("../../typography");

var _theme = require("../../theme");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TooltipStateless = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(TooltipStateless, _PureComponent);

  var _super = _createSuper(TooltipStateless);

  function TooltipStateless() {
    (0, _classCallCheck2["default"])(this, TooltipStateless);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(TooltipStateless, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          children = _this$props.children,
          appearance = _this$props.appearance,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["theme", "children", "appearance"]);

      var _theme$getTooltipProp = theme.getTooltipProps(appearance),
          color = _theme$getTooltipProp.color,
          themedProps = (0, _objectWithoutProperties2["default"])(_theme$getTooltipProp, ["color"]);

      var child;

      if (typeof children === 'string') {
        child = _react["default"].createElement(_typography.Paragraph, {
          color: color,
          size: 400
        }, children);
      } else {
        child = children;
      }

      return _react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
        borderRadius: 3,
        paddingX: 8,
        paddingY: 4,
        maxWidth: 240
      }, themedProps, props), child);
    }
  }]);
  return TooltipStateless;
}(_react.PureComponent);

TooltipStateless.displayName = "TooltipStateless";
(0, _defineProperty2["default"])(TooltipStateless, "propTypes", {
  children: _propTypes["default"].node,

  /**
   * The appearance of the tooltip.
   */
  appearance: _propTypes["default"].oneOf(['default', 'card']).isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired
});

var _default = (0, _theme.withTheme)(TooltipStateless);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b29sdGlwL3NyYy9Ub29sdGlwU3RhdGVsZXNzLmpzIl0sIm5hbWVzIjpbIlRvb2x0aXBTdGF0ZWxlc3MiLCJwcm9wcyIsInRoZW1lIiwiY2hpbGRyZW4iLCJhcHBlYXJhbmNlIiwiZ2V0VG9vbHRpcFByb3BzIiwiY29sb3IiLCJ0aGVtZWRQcm9wcyIsImNoaWxkIiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm5vZGUiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7SUFFTUEsZ0I7Ozs7Ozs7Ozs7Ozs2QkFlSztBQUFBLHdCQUMyQyxLQUFLQyxLQURoRDtBQUFBLFVBQ0NDLEtBREQsZUFDQ0EsS0FERDtBQUFBLFVBQ1FDLFFBRFIsZUFDUUEsUUFEUjtBQUFBLFVBQ2tCQyxVQURsQixlQUNrQkEsVUFEbEI7QUFBQSxVQUNpQ0gsS0FEakM7O0FBQUEsa0NBRTJCQyxLQUFLLENBQUNHLGVBQU4sQ0FBc0JELFVBQXRCLENBRjNCO0FBQUEsVUFFQ0UsS0FGRCx5QkFFQ0EsS0FGRDtBQUFBLFVBRVdDLFdBRlg7O0FBSVAsVUFBSUMsS0FBSjs7QUFDQSxVQUFJLE9BQU9MLFFBQVAsS0FBb0IsUUFBeEIsRUFBa0M7QUFDaENLLFFBQUFBLEtBQUssR0FDSCxnQ0FBQyxxQkFBRDtBQUFXLFVBQUEsS0FBSyxFQUFFRixLQUFsQjtBQUF5QixVQUFBLElBQUksRUFBRTtBQUEvQixXQUNHSCxRQURILENBREY7QUFLRCxPQU5ELE1BTU87QUFDTEssUUFBQUEsS0FBSyxHQUFHTCxRQUFSO0FBQ0Q7O0FBRUQsYUFDRSxnQ0FBQyxZQUFEO0FBQ0UsUUFBQSxZQUFZLEVBQUUsQ0FEaEI7QUFFRSxRQUFBLFFBQVEsRUFBRSxDQUZaO0FBR0UsUUFBQSxRQUFRLEVBQUUsQ0FIWjtBQUlFLFFBQUEsUUFBUSxFQUFFO0FBSlosU0FLTUksV0FMTixFQU1NTixLQU5OLEdBUUdPLEtBUkgsQ0FERjtBQVlEOzs7RUExQzRCQyxvQjs7QUFBekJULGdCO2lDQUFBQSxnQixlQUNlO0FBQ2pCRyxFQUFBQSxRQUFRLEVBQUVPLHNCQUFVQyxJQURIOztBQUdqQjs7O0FBR0FQLEVBQUFBLFVBQVUsRUFBRU0sc0JBQVVFLEtBQVYsQ0FBZ0IsQ0FBQyxTQUFELEVBQVksTUFBWixDQUFoQixFQUFxQ0MsVUFOaEM7O0FBUWpCOzs7QUFHQVgsRUFBQUEsS0FBSyxFQUFFUSxzQkFBVUksTUFBVixDQUFpQkQ7QUFYUCxDOztlQTRDTixzQkFBVWIsZ0JBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IHsgUGFyYWdyYXBoIH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jbGFzcyBUb29sdGlwU3RhdGVsZXNzIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIHRvb2x0aXAuXG4gICAgICovXG4gICAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLm9uZU9mKFsnZGVmYXVsdCcsICdjYXJkJ10pLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRoZW1lLCBjaGlsZHJlbiwgYXBwZWFyYW5jZSwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGNvbG9yLCAuLi50aGVtZWRQcm9wcyB9ID0gdGhlbWUuZ2V0VG9vbHRpcFByb3BzKGFwcGVhcmFuY2UpXG5cbiAgICBsZXQgY2hpbGRcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgY2hpbGQgPSAoXG4gICAgICAgIDxQYXJhZ3JhcGggY29sb3I9e2NvbG9yfSBzaXplPXs0MDB9PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkID0gY2hpbGRyZW5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmVcbiAgICAgICAgYm9yZGVyUmFkaXVzPXszfVxuICAgICAgICBwYWRkaW5nWD17OH1cbiAgICAgICAgcGFkZGluZ1k9ezR9XG4gICAgICAgIG1heFdpZHRoPXsyNDB9XG4gICAgICAgIHsuLi50aGVtZWRQcm9wc31cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGR9XG4gICAgICA8L1BhbmU+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShUb29sdGlwU3RhdGVsZXNzKVxuIl19