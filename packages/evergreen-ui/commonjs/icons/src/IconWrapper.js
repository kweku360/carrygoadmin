"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconWrapper = void 0;

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * This is an internal helper component for rendering custom or Evergreen icons
 * Box props are applied to the outer Box container, and Evergreen icon-specific props are added to the icon element.
 */
var IconWrapper = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(IconWrapper, _PureComponent);

  var _super = _createSuper(IconWrapper);

  function IconWrapper() {
    (0, _classCallCheck2["default"])(this, IconWrapper);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(IconWrapper, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          icon = _this$props.icon,
          size = _this$props.size,
          title = _this$props.title,
          color = _this$props.color,
          boxProps = (0, _objectWithoutProperties2["default"])(_this$props, ["icon", "size", "title", "color"]);

      if (!icon || typeof icon === 'string' || !_react["default"].isValidElement(icon)) {
        return null;
      } // Used as a short-hand to add props to an icon component. This component should not be used externally.


      var iconWithProps = _react["default"].cloneElement(icon, _objectSpread({
        size: size,
        title: title,
        color: color
      }, icon.props));

      return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
        display: "inline-flex"
      }, boxProps), iconWithProps);
    }
  }]);
  return IconWrapper;
}(_react.PureComponent);

exports.IconWrapper = IconWrapper;
IconWrapper.displayName = "IconWrapper";
(0, _defineProperty2["default"])(IconWrapper, "propTypes", {
  /**
   * Color of icon. Equivalent to setting CSS `fill` property.
   */
  color: _propTypes["default"].string,

  /**
   * The icon component - whether an Evergreen icon or a custom icon node:
   *
   * - If `null` or `undefined` or `false`, this component will render nothing.
   * - If given a `JSX.Element`, that element will be rendered, with size/color/title props cloned into it
   *
   *   As a consumer, you should never use `<IconWrapper icon={<element />}` directly; simply render `<element />` instead.
   */
  icon: _propTypes["default"].node,

  /**
   * Size of the icon, in pixels.
   * Icons contains 16px and 20px SVG icon paths,
   * and chooses the appropriate resolution based on this prop.
   */
  size: _propTypes["default"].number,

  /**
   * Description string.
   * Browsers usually render this as a tooltip on hover, whereas screen
   * readers will use it for aural feedback.
   * By default, this is set to the icon's name for accessibility.
   */
  title: _propTypes["default"].string
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9zcmMvSWNvbldyYXBwZXIuanMiXSwibmFtZXMiOlsiSWNvbldyYXBwZXIiLCJwcm9wcyIsImljb24iLCJzaXplIiwidGl0bGUiLCJjb2xvciIsImJveFByb3BzIiwiUmVhY3QiLCJpc1ZhbGlkRWxlbWVudCIsImljb25XaXRoUHJvcHMiLCJjbG9uZUVsZW1lbnQiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibm9kZSIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQTs7OztJQUlhQSxXOzs7Ozs7Ozs7Ozs7NkJBaUNGO0FBQUEsd0JBQzJDLEtBQUtDLEtBRGhEO0FBQUEsVUFDQ0MsSUFERCxlQUNDQSxJQUREO0FBQUEsVUFDT0MsSUFEUCxlQUNPQSxJQURQO0FBQUEsVUFDYUMsS0FEYixlQUNhQSxLQURiO0FBQUEsVUFDb0JDLEtBRHBCLGVBQ29CQSxLQURwQjtBQUFBLFVBQzhCQyxRQUQ5Qjs7QUFHUCxVQUFJLENBQUNKLElBQUQsSUFBUyxPQUFPQSxJQUFQLEtBQWdCLFFBQXpCLElBQXFDLENBQUNLLGtCQUFNQyxjQUFOLENBQXFCTixJQUFyQixDQUExQyxFQUFzRTtBQUNwRSxlQUFPLElBQVA7QUFDRCxPQUxNLENBT1A7OztBQUNBLFVBQU1PLGFBQWEsR0FBR0Ysa0JBQU1HLFlBQU4sQ0FBbUJSLElBQW5CO0FBQ3BCQyxRQUFBQSxJQUFJLEVBQUpBLElBRG9CO0FBRXBCQyxRQUFBQSxLQUFLLEVBQUxBLEtBRm9CO0FBR3BCQyxRQUFBQSxLQUFLLEVBQUxBO0FBSG9CLFNBSWpCSCxJQUFJLENBQUNELEtBSlksRUFBdEI7O0FBT0EsYUFDRSxnQ0FBQyxpQkFBRDtBQUFLLFFBQUEsT0FBTyxFQUFDO0FBQWIsU0FBK0JLLFFBQS9CLEdBQ0dHLGFBREgsQ0FERjtBQUtEOzs7RUFyRDhCRSxvQjs7O0FBQXBCWCxXO2lDQUFBQSxXLGVBQ1E7QUFDakI7OztBQUdBSyxFQUFBQSxLQUFLLEVBQUVPLHNCQUFVQyxNQUpBOztBQU1qQjs7Ozs7Ozs7QUFRQVgsRUFBQUEsSUFBSSxFQUFFVSxzQkFBVUUsSUFkQzs7QUFnQmpCOzs7OztBQUtBWCxFQUFBQSxJQUFJLEVBQUVTLHNCQUFVRyxNQXJCQzs7QUF1QmpCOzs7Ozs7QUFNQVgsRUFBQUEsS0FBSyxFQUFFUSxzQkFBVUM7QUE3QkEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcblxuLyoqXG4gKiBUaGlzIGlzIGFuIGludGVybmFsIGhlbHBlciBjb21wb25lbnQgZm9yIHJlbmRlcmluZyBjdXN0b20gb3IgRXZlcmdyZWVuIGljb25zXG4gKiBCb3ggcHJvcHMgYXJlIGFwcGxpZWQgdG8gdGhlIG91dGVyIEJveCBjb250YWluZXIsIGFuZCBFdmVyZ3JlZW4gaWNvbi1zcGVjaWZpYyBwcm9wcyBhcmUgYWRkZWQgdG8gdGhlIGljb24gZWxlbWVudC5cbiAqL1xuZXhwb3J0IGNsYXNzIEljb25XcmFwcGVyIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29sb3Igb2YgaWNvbi4gRXF1aXZhbGVudCB0byBzZXR0aW5nIENTUyBgZmlsbGAgcHJvcGVydHkuXG4gICAgICovXG4gICAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaWNvbiBjb21wb25lbnQgLSB3aGV0aGVyIGFuIEV2ZXJncmVlbiBpY29uIG9yIGEgY3VzdG9tIGljb24gbm9kZTpcbiAgICAgKlxuICAgICAqIC0gSWYgYG51bGxgIG9yIGB1bmRlZmluZWRgIG9yIGBmYWxzZWAsIHRoaXMgY29tcG9uZW50IHdpbGwgcmVuZGVyIG5vdGhpbmcuXG4gICAgICogLSBJZiBnaXZlbiBhIGBKU1guRWxlbWVudGAsIHRoYXQgZWxlbWVudCB3aWxsIGJlIHJlbmRlcmVkLCB3aXRoIHNpemUvY29sb3IvdGl0bGUgcHJvcHMgY2xvbmVkIGludG8gaXRcbiAgICAgKlxuICAgICAqICAgQXMgYSBjb25zdW1lciwgeW91IHNob3VsZCBuZXZlciB1c2UgYDxJY29uV3JhcHBlciBpY29uPXs8ZWxlbWVudCAvPn1gIGRpcmVjdGx5OyBzaW1wbHkgcmVuZGVyIGA8ZWxlbWVudCAvPmAgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBpY29uOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFNpemUgb2YgdGhlIGljb24sIGluIHBpeGVscy5cbiAgICAgKiBJY29ucyBjb250YWlucyAxNnB4IGFuZCAyMHB4IFNWRyBpY29uIHBhdGhzLFxuICAgICAqIGFuZCBjaG9vc2VzIHRoZSBhcHByb3ByaWF0ZSByZXNvbHV0aW9uIGJhc2VkIG9uIHRoaXMgcHJvcC5cbiAgICAgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogRGVzY3JpcHRpb24gc3RyaW5nLlxuICAgICAqIEJyb3dzZXJzIHVzdWFsbHkgcmVuZGVyIHRoaXMgYXMgYSB0b29sdGlwIG9uIGhvdmVyLCB3aGVyZWFzIHNjcmVlblxuICAgICAqIHJlYWRlcnMgd2lsbCB1c2UgaXQgZm9yIGF1cmFsIGZlZWRiYWNrLlxuICAgICAqIEJ5IGRlZmF1bHQsIHRoaXMgaXMgc2V0IHRvIHRoZSBpY29uJ3MgbmFtZSBmb3IgYWNjZXNzaWJpbGl0eS5cbiAgICAgKi9cbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaWNvbiwgc2l6ZSwgdGl0bGUsIGNvbG9yLCAuLi5ib3hQcm9wcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKCFpY29uIHx8IHR5cGVvZiBpY29uID09PSAnc3RyaW5nJyB8fCAhUmVhY3QuaXNWYWxpZEVsZW1lbnQoaWNvbikpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgLy8gVXNlZCBhcyBhIHNob3J0LWhhbmQgdG8gYWRkIHByb3BzIHRvIGFuIGljb24gY29tcG9uZW50LiBUaGlzIGNvbXBvbmVudCBzaG91bGQgbm90IGJlIHVzZWQgZXh0ZXJuYWxseS5cbiAgICBjb25zdCBpY29uV2l0aFByb3BzID0gUmVhY3QuY2xvbmVFbGVtZW50KGljb24sIHtcbiAgICAgIHNpemUsXG4gICAgICB0aXRsZSxcbiAgICAgIGNvbG9yLFxuICAgICAgLi4uaWNvbi5wcm9wc1xuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBkaXNwbGF5PVwiaW5saW5lLWZsZXhcIiB7Li4uYm94UHJvcHN9PlxuICAgICAgICB7aWNvbldpdGhQcm9wc31cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxufVxuIl19