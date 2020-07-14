import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import { useTheme } from '../../theme';
/**
 * This implementation is a remix of the Icon component in Blueprintjs:
 * https://github.com/palantir/blueprint/blob/813e93f2/packages/core/src/components/icon/icon.tsx#L15
 * Refer to the LICENSE for BlueprintJS here: https://github.com/palantir/blueprint/blob/develop/LICENSE
 */

var Icon = forwardRef(function (_ref, ref) {
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
      svgProps = _objectWithoutProperties(_ref, ["color", "size", "name", "title", "style", "svgPaths16", "svgPaths20"]);

  var theme = useTheme();
  var SIZE_STANDARD = 16;
  var SIZE_LARGE = 20; // Choose which pixel grid is most appropriate for given icon size

  var pixelGridSize = size >= SIZE_LARGE ? SIZE_LARGE : SIZE_STANDARD;
  var pathStrings = pixelGridSize === SIZE_STANDARD ? svgPaths16 : svgPaths20;
  var paths = pathStrings.map(function (d, i) {
    return (// eslint-disable-next-line react/no-array-index-key
      React.createElement("path", {
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

  return React.createElement(Box, _extends({
    is: "svg" // To allow innerRef to be passed from the consumer this needs to be before svgProps
    ,
    innerRef: ref
  }, svgProps, {
    "data-icon": name,
    style: style,
    width: size,
    height: size,
    viewBox: viewBox
  }), title && React.createElement("title", null, title), paths);
});
Icon.propTypes = {
  /**
   * Color of icon. Equivalent to setting CSS `fill` property.
   */
  color: PropTypes.string,

  /**
   * Size of the icon, in pixels.
   * Blueprint contains 16px and 20px SVG icon images,
   * and chooses the appropriate resolution based on this prop.
   */
  size: PropTypes.number,

  /**
   * Name of the icon
   */
  name: PropTypes.string,

  /**
   * Description string.
   * Browsers usually render this as a tooltip on hover, whereas screen
   * readers will use it for aural feedback.
   * By default, this is set to the icon's name for accessibility.
   */
  title: PropTypes.string,

  /**
   * CSS style properties.
   */
  style: PropTypes.object,
  svgPaths16: PropTypes.arrayOf(PropTypes.string).isRequired,
  svgPaths20: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default Icon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9zcmMvSWNvbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImZvcndhcmRSZWYiLCJQcm9wVHlwZXMiLCJCb3giLCJ1c2VUaGVtZSIsIkljb24iLCJyZWYiLCJjb2xvciIsInNpemUiLCJuYW1lIiwidGl0bGUiLCJzdHlsZSIsInN2Z1BhdGhzMTYiLCJzdmdQYXRoczIwIiwic3ZnUHJvcHMiLCJ0aGVtZSIsIlNJWkVfU1RBTkRBUkQiLCJTSVpFX0xBUkdFIiwicGl4ZWxHcmlkU2l6ZSIsInBhdGhTdHJpbmdzIiwicGF0aHMiLCJtYXAiLCJkIiwiaSIsInZpZXdCb3giLCJmaWxsIiwiZ2V0SWNvbkNvbG9yIiwicHJvcFR5cGVzIiwic3RyaW5nIiwibnVtYmVyIiwib2JqZWN0IiwiYXJyYXlPZiIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsVUFBaEIsUUFBa0MsT0FBbEM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixRQUFoQjtBQUNBLFNBQVNDLFFBQVQsUUFBeUIsYUFBekI7QUFFQTs7Ozs7O0FBTUEsSUFBTUMsSUFBSSxHQUFHSixVQUFVLENBQ3JCLGdCQVdFSyxHQVhGLEVBWUs7QUFBQSx3QkFWREMsS0FVQztBQUFBLE1BVkRBLEtBVUMsMkJBVk8sY0FVUDtBQUFBLHVCQVREQyxJQVNDO0FBQUEsTUFUREEsSUFTQywwQkFUTSxFQVNOO0FBQUEsTUFSREMsSUFRQyxRQVJEQSxJQVFDO0FBQUEsTUFQREMsS0FPQyxRQVBEQSxLQU9DO0FBQUEsd0JBTkRDLEtBTUM7QUFBQSxNQU5EQSxLQU1DLDJCQU5PLEVBTVA7QUFBQSxNQUxEQyxVQUtDLFFBTERBLFVBS0M7QUFBQSxNQUpEQyxVQUlDLFFBSkRBLFVBSUM7QUFBQSxNQUhFQyxRQUdGOztBQUNILE1BQU1DLEtBQUssR0FBR1gsUUFBUSxFQUF0QjtBQUNBLE1BQU1ZLGFBQWEsR0FBRyxFQUF0QjtBQUNBLE1BQU1DLFVBQVUsR0FBRyxFQUFuQixDQUhHLENBS0g7O0FBQ0EsTUFBTUMsYUFBYSxHQUFHVixJQUFJLElBQUlTLFVBQVIsR0FBcUJBLFVBQXJCLEdBQWtDRCxhQUF4RDtBQUNBLE1BQU1HLFdBQVcsR0FDZkQsYUFBYSxLQUFLRixhQUFsQixHQUFrQ0osVUFBbEMsR0FBK0NDLFVBRGpEO0FBRUEsTUFBTU8sS0FBSyxHQUFHRCxXQUFXLENBQUNFLEdBQVosQ0FBZ0IsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsV0FDNUI7QUFDQTtBQUFNLFFBQUEsR0FBRyxFQUFFQSxDQUFYO0FBQWMsUUFBQSxDQUFDLEVBQUVELENBQWpCO0FBQW9CLFFBQUEsUUFBUSxFQUFDO0FBQTdCO0FBRjRCO0FBQUEsR0FBaEIsQ0FBZDtBQUtBLE1BQU1FLE9BQU8saUJBQVVOLGFBQVYsY0FBMkJBLGFBQTNCLENBQWI7O0FBRUEsTUFBSVgsS0FBSixFQUFXO0FBQ1RJLElBQUFBLEtBQUsscUJBQVFBLEtBQVI7QUFBZWMsTUFBQUEsSUFBSSxFQUFFVixLQUFLLENBQUNXLFlBQU4sQ0FBbUJuQixLQUFuQjtBQUFyQixNQUFMO0FBQ0Q7O0FBRUQsU0FDRSxvQkFBQyxHQUFEO0FBQ0UsSUFBQSxFQUFFLEVBQUMsS0FETCxDQUVFO0FBRkY7QUFHRSxJQUFBLFFBQVEsRUFBRUQ7QUFIWixLQUlNUSxRQUpOO0FBS0UsaUJBQVdMLElBTGI7QUFNRSxJQUFBLEtBQUssRUFBRUUsS0FOVDtBQU9FLElBQUEsS0FBSyxFQUFFSCxJQVBUO0FBUUUsSUFBQSxNQUFNLEVBQUVBLElBUlY7QUFTRSxJQUFBLE9BQU8sRUFBRWdCO0FBVFgsTUFXR2QsS0FBSyxJQUFJLG1DQUFRQSxLQUFSLENBWFosRUFZR1UsS0FaSCxDQURGO0FBZ0JELENBakRvQixDQUF2QjtBQW9EQWYsSUFBSSxDQUFDc0IsU0FBTCxHQUFpQjtBQUNmOzs7QUFHQXBCLEVBQUFBLEtBQUssRUFBRUwsU0FBUyxDQUFDMEIsTUFKRjs7QUFNZjs7Ozs7QUFLQXBCLEVBQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDMkIsTUFYRDs7QUFhZjs7O0FBR0FwQixFQUFBQSxJQUFJLEVBQUVQLFNBQVMsQ0FBQzBCLE1BaEJEOztBQWtCZjs7Ozs7O0FBTUFsQixFQUFBQSxLQUFLLEVBQUVSLFNBQVMsQ0FBQzBCLE1BeEJGOztBQTBCZjs7O0FBR0FqQixFQUFBQSxLQUFLLEVBQUVULFNBQVMsQ0FBQzRCLE1BN0JGO0FBK0JmbEIsRUFBQUEsVUFBVSxFQUFFVixTQUFTLENBQUM2QixPQUFWLENBQWtCN0IsU0FBUyxDQUFDMEIsTUFBNUIsRUFBb0NJLFVBL0JqQztBQWlDZm5CLEVBQUFBLFVBQVUsRUFBRVgsU0FBUyxDQUFDNkIsT0FBVixDQUFrQjdCLFNBQVMsQ0FBQzBCLE1BQTVCLEVBQW9DSTtBQWpDakMsQ0FBakI7QUFvQ0EsZUFBZTNCLElBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG4vKipcbiAqIFRoaXMgaW1wbGVtZW50YXRpb24gaXMgYSByZW1peCBvZiB0aGUgSWNvbiBjb21wb25lbnQgaW4gQmx1ZXByaW50anM6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vcGFsYW50aXIvYmx1ZXByaW50L2Jsb2IvODEzZTkzZjIvcGFja2FnZXMvY29yZS9zcmMvY29tcG9uZW50cy9pY29uL2ljb24udHN4I0wxNVxuICogUmVmZXIgdG8gdGhlIExJQ0VOU0UgZm9yIEJsdWVwcmludEpTIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9wYWxhbnRpci9ibHVlcHJpbnQvYmxvYi9kZXZlbG9wL0xJQ0VOU0VcbiAqL1xuXG5jb25zdCBJY29uID0gZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGNvbG9yID0gJ2N1cnJlbnRDb2xvcicsXG4gICAgICBzaXplID0gMTYsXG4gICAgICBuYW1lLFxuICAgICAgdGl0bGUsXG4gICAgICBzdHlsZSA9IHt9LFxuICAgICAgc3ZnUGF0aHMxNixcbiAgICAgIHN2Z1BhdGhzMjAsXG4gICAgICAuLi5zdmdQcm9wc1xuICAgIH0sXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxuICAgIGNvbnN0IFNJWkVfU1RBTkRBUkQgPSAxNlxuICAgIGNvbnN0IFNJWkVfTEFSR0UgPSAyMFxuXG4gICAgLy8gQ2hvb3NlIHdoaWNoIHBpeGVsIGdyaWQgaXMgbW9zdCBhcHByb3ByaWF0ZSBmb3IgZ2l2ZW4gaWNvbiBzaXplXG4gICAgY29uc3QgcGl4ZWxHcmlkU2l6ZSA9IHNpemUgPj0gU0laRV9MQVJHRSA/IFNJWkVfTEFSR0UgOiBTSVpFX1NUQU5EQVJEXG4gICAgY29uc3QgcGF0aFN0cmluZ3MgPVxuICAgICAgcGl4ZWxHcmlkU2l6ZSA9PT0gU0laRV9TVEFOREFSRCA/IHN2Z1BhdGhzMTYgOiBzdmdQYXRoczIwXG4gICAgY29uc3QgcGF0aHMgPSBwYXRoU3RyaW5ncy5tYXAoKGQsIGkpID0+IChcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXlcbiAgICAgIDxwYXRoIGtleT17aX0gZD17ZH0gZmlsbFJ1bGU9XCJldmVub2RkXCIgLz5cbiAgICApKVxuXG4gICAgY29uc3Qgdmlld0JveCA9IGAwIDAgJHtwaXhlbEdyaWRTaXplfSAke3BpeGVsR3JpZFNpemV9YFxuXG4gICAgaWYgKGNvbG9yKSB7XG4gICAgICBzdHlsZSA9IHsgLi4uc3R5bGUsIGZpbGw6IHRoZW1lLmdldEljb25Db2xvcihjb2xvcikgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIGlzPVwic3ZnXCJcbiAgICAgICAgLy8gVG8gYWxsb3cgaW5uZXJSZWYgdG8gYmUgcGFzc2VkIGZyb20gdGhlIGNvbnN1bWVyIHRoaXMgbmVlZHMgdG8gYmUgYmVmb3JlIHN2Z1Byb3BzXG4gICAgICAgIGlubmVyUmVmPXtyZWZ9XG4gICAgICAgIHsuLi5zdmdQcm9wc31cbiAgICAgICAgZGF0YS1pY29uPXtuYW1lfVxuICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgIHdpZHRoPXtzaXplfVxuICAgICAgICBoZWlnaHQ9e3NpemV9XG4gICAgICAgIHZpZXdCb3g9e3ZpZXdCb3h9XG4gICAgICA+XG4gICAgICAgIHt0aXRsZSAmJiA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+fVxuICAgICAgICB7cGF0aHN9XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cbilcblxuSWNvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBDb2xvciBvZiBpY29uLiBFcXVpdmFsZW50IHRvIHNldHRpbmcgQ1NTIGBmaWxsYCBwcm9wZXJ0eS5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBTaXplIG9mIHRoZSBpY29uLCBpbiBwaXhlbHMuXG4gICAqIEJsdWVwcmludCBjb250YWlucyAxNnB4IGFuZCAyMHB4IFNWRyBpY29uIGltYWdlcyxcbiAgICogYW5kIGNob29zZXMgdGhlIGFwcHJvcHJpYXRlIHJlc29sdXRpb24gYmFzZWQgb24gdGhpcyBwcm9wLlxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogTmFtZSBvZiB0aGUgaWNvblxuICAgKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogRGVzY3JpcHRpb24gc3RyaW5nLlxuICAgKiBCcm93c2VycyB1c3VhbGx5IHJlbmRlciB0aGlzIGFzIGEgdG9vbHRpcCBvbiBob3Zlciwgd2hlcmVhcyBzY3JlZW5cbiAgICogcmVhZGVycyB3aWxsIHVzZSBpdCBmb3IgYXVyYWwgZmVlZGJhY2suXG4gICAqIEJ5IGRlZmF1bHQsIHRoaXMgaXMgc2V0IHRvIHRoZSBpY29uJ3MgbmFtZSBmb3IgYWNjZXNzaWJpbGl0eS5cbiAgICovXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBDU1Mgc3R5bGUgcHJvcGVydGllcy5cbiAgICovXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIHN2Z1BhdGhzMTY6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLmlzUmVxdWlyZWQsXG5cbiAgc3ZnUGF0aHMyMDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZykuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBJY29uXG4iXX0=