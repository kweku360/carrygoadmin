"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _theme = require("../../theme");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * This implementation is a remix of the Icon component in Blueprintjs:
 * https://github.com/palantir/blueprint/blob/813e93f2/packages/core/src/components/icon/icon.tsx#L15
 * Refer to the LICENSE for BlueprintJS here: https://github.com/palantir/blueprint/blob/develop/LICENSE
 */
var Icon = (0, _react.forwardRef)(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 16 : _ref$size,
      name = _ref.name,
      title = _ref.title,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      svgPaths16 = _ref.svgPaths16,
      svgPaths20 = _ref.svgPaths20,
      svgProps = (0, _objectWithoutProperties2["default"])(_ref, ["color", "size", "name", "title", "style", "svgPaths16", "svgPaths20"]);
  var theme = (0, _theme.useTheme)();
  var SIZE_STANDARD = 16;
  var SIZE_LARGE = 20; // Choose which pixel grid is most appropriate for given icon size

  var pixelGridSize = size >= SIZE_LARGE ? SIZE_LARGE : SIZE_STANDARD;
  var pathStrings = pixelGridSize === SIZE_STANDARD ? svgPaths16 : svgPaths20;
  var paths = pathStrings.map(function (d, i) {
    return (// eslint-disable-next-line react/no-array-index-key
      _react["default"].createElement("path", {
        key: i,
        d: d,
        fillRule: "evenodd"
      })
    );
  });
  var viewBox = "0 0 ".concat(pixelGridSize, " ").concat(pixelGridSize);

  if (color) {
    style = _objectSpread({}, style, {
      fill: theme.getIconColor(color)
    });
  }

  return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
    is: "svg" // To allow innerRef to be passed from the consumer this needs to be before svgProps
    ,
    innerRef: ref
  }, svgProps, {
    "data-icon": name,
    style: style,
    width: size,
    height: size,
    viewBox: viewBox
  }), title && _react["default"].createElement("title", null, title), paths);
});
Icon.propTypes = {
  /**
   * Color of icon. Equivalent to setting CSS `fill` property.
   */
  color: _propTypes["default"].string,

  /**
   * Size of the icon, in pixels.
   * Blueprint contains 16px and 20px SVG icon images,
   * and chooses the appropriate resolution based on this prop.
   */
  size: _propTypes["default"].number,

  /**
   * Name of the icon
   */
  name: _propTypes["default"].string,

  /**
   * Description string.
   * Browsers usually render this as a tooltip on hover, whereas screen
   * readers will use it for aural feedback.
   * By default, this is set to the icon's name for accessibility.
   */
  title: _propTypes["default"].string,

  /**
   * CSS style properties.
   */
  style: _propTypes["default"].object,
  svgPaths16: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
  svgPaths20: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired
};
var _default = Icon;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9zcmMvSWNvbi5qcyJdLCJuYW1lcyI6WyJJY29uIiwicmVmIiwiY29sb3IiLCJzaXplIiwibmFtZSIsInRpdGxlIiwic3R5bGUiLCJzdmdQYXRoczE2Iiwic3ZnUGF0aHMyMCIsInN2Z1Byb3BzIiwidGhlbWUiLCJTSVpFX1NUQU5EQVJEIiwiU0laRV9MQVJHRSIsInBpeGVsR3JpZFNpemUiLCJwYXRoU3RyaW5ncyIsInBhdGhzIiwibWFwIiwiZCIsImkiLCJ2aWV3Qm94IiwiZmlsbCIsImdldEljb25Db2xvciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm51bWJlciIsIm9iamVjdCIsImFycmF5T2YiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQTs7Ozs7QUFNQSxJQUFNQSxJQUFJLEdBQUcsdUJBQ1gsZ0JBV0VDLEdBWEYsRUFZSztBQUFBLHdCQVZEQyxLQVVDO0FBQUEsTUFWREEsS0FVQywyQkFWTyxjQVVQO0FBQUEsdUJBVERDLElBU0M7QUFBQSxNQVREQSxJQVNDLDBCQVRNLEVBU047QUFBQSxNQVJEQyxJQVFDLFFBUkRBLElBUUM7QUFBQSxNQVBEQyxLQU9DLFFBUERBLEtBT0M7QUFBQSx3QkFOREMsS0FNQztBQUFBLE1BTkRBLEtBTUMsMkJBTk8sRUFNUDtBQUFBLE1BTERDLFVBS0MsUUFMREEsVUFLQztBQUFBLE1BSkRDLFVBSUMsUUFKREEsVUFJQztBQUFBLE1BSEVDLFFBR0Y7QUFDSCxNQUFNQyxLQUFLLEdBQUcsc0JBQWQ7QUFDQSxNQUFNQyxhQUFhLEdBQUcsRUFBdEI7QUFDQSxNQUFNQyxVQUFVLEdBQUcsRUFBbkIsQ0FIRyxDQUtIOztBQUNBLE1BQU1DLGFBQWEsR0FBR1YsSUFBSSxJQUFJUyxVQUFSLEdBQXFCQSxVQUFyQixHQUFrQ0QsYUFBeEQ7QUFDQSxNQUFNRyxXQUFXLEdBQ2ZELGFBQWEsS0FBS0YsYUFBbEIsR0FBa0NKLFVBQWxDLEdBQStDQyxVQURqRDtBQUVBLE1BQU1PLEtBQUssR0FBR0QsV0FBVyxDQUFDRSxHQUFaLENBQWdCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQzVCO0FBQ0E7QUFBTSxRQUFBLEdBQUcsRUFBRUEsQ0FBWDtBQUFjLFFBQUEsQ0FBQyxFQUFFRCxDQUFqQjtBQUFvQixRQUFBLFFBQVEsRUFBQztBQUE3QjtBQUY0QjtBQUFBLEdBQWhCLENBQWQ7QUFLQSxNQUFNRSxPQUFPLGlCQUFVTixhQUFWLGNBQTJCQSxhQUEzQixDQUFiOztBQUVBLE1BQUlYLEtBQUosRUFBVztBQUNUSSxJQUFBQSxLQUFLLHFCQUFRQSxLQUFSO0FBQWVjLE1BQUFBLElBQUksRUFBRVYsS0FBSyxDQUFDVyxZQUFOLENBQW1CbkIsS0FBbkI7QUFBckIsTUFBTDtBQUNEOztBQUVELFNBQ0UsZ0NBQUMsaUJBQUQ7QUFDRSxJQUFBLEVBQUUsRUFBQyxLQURMLENBRUU7QUFGRjtBQUdFLElBQUEsUUFBUSxFQUFFRDtBQUhaLEtBSU1RLFFBSk47QUFLRSxpQkFBV0wsSUFMYjtBQU1FLElBQUEsS0FBSyxFQUFFRSxLQU5UO0FBT0UsSUFBQSxLQUFLLEVBQUVILElBUFQ7QUFRRSxJQUFBLE1BQU0sRUFBRUEsSUFSVjtBQVNFLElBQUEsT0FBTyxFQUFFZ0I7QUFUWCxNQVdHZCxLQUFLLElBQUksK0NBQVFBLEtBQVIsQ0FYWixFQVlHVSxLQVpILENBREY7QUFnQkQsQ0FqRFUsQ0FBYjtBQW9EQWYsSUFBSSxDQUFDc0IsU0FBTCxHQUFpQjtBQUNmOzs7QUFHQXBCLEVBQUFBLEtBQUssRUFBRXFCLHNCQUFVQyxNQUpGOztBQU1mOzs7OztBQUtBckIsRUFBQUEsSUFBSSxFQUFFb0Isc0JBQVVFLE1BWEQ7O0FBYWY7OztBQUdBckIsRUFBQUEsSUFBSSxFQUFFbUIsc0JBQVVDLE1BaEJEOztBQWtCZjs7Ozs7O0FBTUFuQixFQUFBQSxLQUFLLEVBQUVrQixzQkFBVUMsTUF4QkY7O0FBMEJmOzs7QUFHQWxCLEVBQUFBLEtBQUssRUFBRWlCLHNCQUFVRyxNQTdCRjtBQStCZm5CLEVBQUFBLFVBQVUsRUFBRWdCLHNCQUFVSSxPQUFWLENBQWtCSixzQkFBVUMsTUFBNUIsRUFBb0NJLFVBL0JqQztBQWlDZnBCLEVBQUFBLFVBQVUsRUFBRWUsc0JBQVVJLE9BQVYsQ0FBa0JKLHNCQUFVQyxNQUE1QixFQUFvQ0k7QUFqQ2pDLENBQWpCO2VBb0NlNUIsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbi8qKlxuICogVGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBhIHJlbWl4IG9mIHRoZSBJY29uIGNvbXBvbmVudCBpbiBCbHVlcHJpbnRqczpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9wYWxhbnRpci9ibHVlcHJpbnQvYmxvYi84MTNlOTNmMi9wYWNrYWdlcy9jb3JlL3NyYy9jb21wb25lbnRzL2ljb24vaWNvbi50c3gjTDE1XG4gKiBSZWZlciB0byB0aGUgTElDRU5TRSBmb3IgQmx1ZXByaW50SlMgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL3BhbGFudGlyL2JsdWVwcmludC9ibG9iL2RldmVsb3AvTElDRU5TRVxuICovXG5cbmNvbnN0IEljb24gPSBmb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgY29sb3IgPSAnY3VycmVudENvbG9yJyxcbiAgICAgIHNpemUgPSAxNixcbiAgICAgIG5hbWUsXG4gICAgICB0aXRsZSxcbiAgICAgIHN0eWxlID0ge30sXG4gICAgICBzdmdQYXRoczE2LFxuICAgICAgc3ZnUGF0aHMyMCxcbiAgICAgIC4uLnN2Z1Byb3BzXG4gICAgfSxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXG4gICAgY29uc3QgU0laRV9TVEFOREFSRCA9IDE2XG4gICAgY29uc3QgU0laRV9MQVJHRSA9IDIwXG5cbiAgICAvLyBDaG9vc2Ugd2hpY2ggcGl4ZWwgZ3JpZCBpcyBtb3N0IGFwcHJvcHJpYXRlIGZvciBnaXZlbiBpY29uIHNpemVcbiAgICBjb25zdCBwaXhlbEdyaWRTaXplID0gc2l6ZSA+PSBTSVpFX0xBUkdFID8gU0laRV9MQVJHRSA6IFNJWkVfU1RBTkRBUkRcbiAgICBjb25zdCBwYXRoU3RyaW5ncyA9XG4gICAgICBwaXhlbEdyaWRTaXplID09PSBTSVpFX1NUQU5EQVJEID8gc3ZnUGF0aHMxNiA6IHN2Z1BhdGhzMjBcbiAgICBjb25zdCBwYXRocyA9IHBhdGhTdHJpbmdzLm1hcCgoZCwgaSkgPT4gKFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWFycmF5LWluZGV4LWtleVxuICAgICAgPHBhdGgga2V5PXtpfSBkPXtkfSBmaWxsUnVsZT1cImV2ZW5vZGRcIiAvPlxuICAgICkpXG5cbiAgICBjb25zdCB2aWV3Qm94ID0gYDAgMCAke3BpeGVsR3JpZFNpemV9ICR7cGl4ZWxHcmlkU2l6ZX1gXG5cbiAgICBpZiAoY29sb3IpIHtcbiAgICAgIHN0eWxlID0geyAuLi5zdHlsZSwgZmlsbDogdGhlbWUuZ2V0SWNvbkNvbG9yKGNvbG9yKSB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgaXM9XCJzdmdcIlxuICAgICAgICAvLyBUbyBhbGxvdyBpbm5lclJlZiB0byBiZSBwYXNzZWQgZnJvbSB0aGUgY29uc3VtZXIgdGhpcyBuZWVkcyB0byBiZSBiZWZvcmUgc3ZnUHJvcHNcbiAgICAgICAgaW5uZXJSZWY9e3JlZn1cbiAgICAgICAgey4uLnN2Z1Byb3BzfVxuICAgICAgICBkYXRhLWljb249e25hbWV9XG4gICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgd2lkdGg9e3NpemV9XG4gICAgICAgIGhlaWdodD17c2l6ZX1cbiAgICAgICAgdmlld0JveD17dmlld0JveH1cbiAgICAgID5cbiAgICAgICAge3RpdGxlICYmIDx0aXRsZT57dGl0bGV9PC90aXRsZT59XG4gICAgICAgIHtwYXRoc31cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxuKVxuXG5JY29uLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIENvbG9yIG9mIGljb24uIEVxdWl2YWxlbnQgdG8gc2V0dGluZyBDU1MgYGZpbGxgIHByb3BlcnR5LlxuICAgKi9cbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFNpemUgb2YgdGhlIGljb24sIGluIHBpeGVscy5cbiAgICogQmx1ZXByaW50IGNvbnRhaW5zIDE2cHggYW5kIDIwcHggU1ZHIGljb24gaW1hZ2VzLFxuICAgKiBhbmQgY2hvb3NlcyB0aGUgYXBwcm9wcmlhdGUgcmVzb2x1dGlvbiBiYXNlZCBvbiB0aGlzIHByb3AuXG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoZSBpY29uXG4gICAqL1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBEZXNjcmlwdGlvbiBzdHJpbmcuXG4gICAqIEJyb3dzZXJzIHVzdWFsbHkgcmVuZGVyIHRoaXMgYXMgYSB0b29sdGlwIG9uIGhvdmVyLCB3aGVyZWFzIHNjcmVlblxuICAgKiByZWFkZXJzIHdpbGwgdXNlIGl0IGZvciBhdXJhbCBmZWVkYmFjay5cbiAgICogQnkgZGVmYXVsdCwgdGhpcyBpcyBzZXQgdG8gdGhlIGljb24ncyBuYW1lIGZvciBhY2Nlc3NpYmlsaXR5LlxuICAgKi9cbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIENTUyBzdHlsZSBwcm9wZXJ0aWVzLlxuICAgKi9cbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgc3ZnUGF0aHMxNjogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZykuaXNSZXF1aXJlZCxcblxuICBzdmdQYXRoczIwOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKS5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IEljb25cbiJdfQ==