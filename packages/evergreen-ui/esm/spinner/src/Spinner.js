import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { useState, useEffect, forwardRef, memo } from 'react';
import { css } from 'glamor';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import { useTheme } from '../../theme';
var loadingKeyframes = css.keyframes('loading', {
  '0%': {
    transform: 'rotate(0)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
});
var loadingCircleKeyframes = css.keyframes('loading-circle', {
  '0%': {
    strokeDashoffset: 600
  },
  '100%': {
    strokeDashoffset: 0
  }
});
var outerClass = css({
  animation: "".concat(loadingKeyframes, " 2s linear infinite")
}).toString();

var innerClass = function innerClass(color) {
  return css({
    strokeDashoffset: 600,
    strokeDasharray: 300,
    strokeWidth: 12,
    strokeMiterlimit: 10,
    strokeLinecap: 'round',
    animation: "".concat(loadingCircleKeyframes, " 1.6s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite"),
    stroke: color,
    fill: 'transparent'
  }).toString();
};

var Spinner = memo(forwardRef(function (_ref, ref) {
  var _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 0 : _ref$delay,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 40 : _ref$size,
      props = _objectWithoutProperties(_ref, ["delay", "size"]);

  var theme = useTheme();

  var _useState = useState(delay === 0),
      _useState2 = _slicedToArray(_useState, 2),
      isVisible = _useState2[0],
      setIsVisible = _useState2[1];

  useEffect(function () {
    var delayTimer = null;

    if (delay > 0) {
      delayTimer = setTimeout(function () {
        setIsVisible(true);
      }, delay);
    }

    return function () {
      clearTimeout(delayTimer);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return React.createElement(Box, _extends({
    width: size,
    height: size,
    lineHeight: 0
  }, props, {
    innerRef: ref
  }), React.createElement(Box, {
    is: "svg",
    className: outerClass,
    x: "0px",
    y: "0px",
    viewBox: "0 0 150 150"
  }, React.createElement(Box, {
    is: "circle",
    className: innerClass(theme.spinnerColor),
    cx: "75",
    cy: "75",
    r: "60"
  })));
}));
Spinner.propTypes = _objectSpread({}, Box.propTypes, {
  /**
   * Delay after which spinner should be visible.
   */
  delay: PropTypes.number,

  /**
   * The size of the spinner.
   */
  size: PropTypes.number.isRequired
});
export default Spinner;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zcGlubmVyL3NyYy9TcGlubmVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJmb3J3YXJkUmVmIiwibWVtbyIsImNzcyIsIlByb3BUeXBlcyIsIkJveCIsInVzZVRoZW1lIiwibG9hZGluZ0tleWZyYW1lcyIsImtleWZyYW1lcyIsInRyYW5zZm9ybSIsImxvYWRpbmdDaXJjbGVLZXlmcmFtZXMiLCJzdHJva2VEYXNob2Zmc2V0Iiwib3V0ZXJDbGFzcyIsImFuaW1hdGlvbiIsInRvU3RyaW5nIiwiaW5uZXJDbGFzcyIsImNvbG9yIiwic3Ryb2tlRGFzaGFycmF5Iiwic3Ryb2tlV2lkdGgiLCJzdHJva2VNaXRlcmxpbWl0Iiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZSIsImZpbGwiLCJTcGlubmVyIiwicmVmIiwiZGVsYXkiLCJzaXplIiwicHJvcHMiLCJ0aGVtZSIsImlzVmlzaWJsZSIsInNldElzVmlzaWJsZSIsImRlbGF5VGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic3Bpbm5lckNvbG9yIiwicHJvcFR5cGVzIiwibnVtYmVyIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsUUFBaEIsRUFBMEJDLFNBQTFCLEVBQXFDQyxVQUFyQyxFQUFpREMsSUFBakQsUUFBNkQsT0FBN0Q7QUFDQSxTQUFTQyxHQUFULFFBQW9CLFFBQXBCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsUUFBaEI7QUFDQSxTQUFTQyxRQUFULFFBQXlCLGFBQXpCO0FBRUEsSUFBTUMsZ0JBQWdCLEdBQUdKLEdBQUcsQ0FBQ0ssU0FBSixDQUFjLFNBQWQsRUFBeUI7QUFDaEQsUUFBTTtBQUNKQyxJQUFBQSxTQUFTLEVBQUU7QUFEUCxHQUQwQztBQUloRCxVQUFRO0FBQ05BLElBQUFBLFNBQVMsRUFBRTtBQURM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R0FWLEVBQUFBLEtBQUssRUFBRXJCLFNBQVMsQ0FBQ2dDLE1BVG5COztBQVdFOzs7QUFHQVYsRUFBQUEsSUFBSSxFQUFFdEIsU0FBUyxDQUFDZ0MsTUFBVixDQUFpQkM7QUFkekI7QUFpQkEsZUFBZWQsT0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBmb3J3YXJkUmVmLCBtZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNvbnN0IGxvYWRpbmdLZXlmcmFtZXMgPSBjc3Mua2V5ZnJhbWVzKCdsb2FkaW5nJywge1xuICAnMCUnOiB7XG4gICAgdHJhbnNmb3JtOiAncm90YXRlKDApJ1xuICB9LFxuICAnMTAwJSc6IHtcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMzYwZGVnKSdcbiAgfVxufSlcblxuY29uc3QgbG9hZGluZ0NpcmNsZUtleWZyYW1lcyA9IGNzcy5rZXlmcmFtZXMoJ2xvYWRpbmctY2lyY2xlJywge1xuICAnMCUnOiB7XG4gICAgc3Ryb2tlRGFzaG9mZnNldDogNjAwXG4gIH0sXG4gICcxMDAlJzoge1xuICAgIHN0cm9rZURhc2hvZmZzZXQ6IDBcbiAgfVxufSlcblxuY29uc3Qgb3V0ZXJDbGFzcyA9IGNzcyh7XG4gIGFuaW1hdGlvbjogYCR7bG9hZGluZ0tleWZyYW1lc30gMnMgbGluZWFyIGluZmluaXRlYFxufSkudG9TdHJpbmcoKVxuXG5jb25zdCBpbm5lckNsYXNzID0gY29sb3IgPT5cbiAgY3NzKHtcbiAgICBzdHJva2VEYXNob2Zmc2V0OiA2MDAsXG4gICAgc3Ryb2tlRGFzaGFycmF5OiAzMDAsXG4gICAgc3Ryb2tlV2lkdGg6IDEyLFxuICAgIHN0cm9rZU1pdGVybGltaXQ6IDEwLFxuICAgIHN0cm9rZUxpbmVjYXA6ICdyb3VuZCcsXG4gICAgYW5pbWF0aW9uOiBgJHtsb2FkaW5nQ2lyY2xlS2V5ZnJhbWVzfSAxLjZzIGN1YmljLWJlemllcigwLjQsIDAuMTUsIDAuNiwgMC44NSkgaW5maW5pdGVgLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgZmlsbDogJ3RyYW5zcGFyZW50J1xuICB9KS50b1N0cmluZygpXG5cbmNvbnN0IFNwaW5uZXIgPSBtZW1vKFxuICBmb3J3YXJkUmVmKCh7IGRlbGF5ID0gMCwgc2l6ZSA9IDQwLCAuLi5wcm9wcyB9LCByZWYpID0+IHtcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcbiAgICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUoZGVsYXkgPT09IDApXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgbGV0IGRlbGF5VGltZXIgPSBudWxsXG4gICAgICBpZiAoZGVsYXkgPiAwKSB7XG4gICAgICAgIGRlbGF5VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzZXRJc1Zpc2libGUodHJ1ZSlcbiAgICAgICAgfSwgZGVsYXkpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGRlbGF5VGltZXIpXG4gICAgICB9XG4gICAgfSwgW10pXG5cbiAgICBpZiAoIWlzVmlzaWJsZSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveCB3aWR0aD17c2l6ZX0gaGVpZ2h0PXtzaXplfSBsaW5lSGVpZ2h0PXswfSB7Li4ucHJvcHN9IGlubmVyUmVmPXtyZWZ9PlxuICAgICAgICA8Qm94XG4gICAgICAgICAgaXM9XCJzdmdcIlxuICAgICAgICAgIGNsYXNzTmFtZT17b3V0ZXJDbGFzc31cbiAgICAgICAgICB4PVwiMHB4XCJcbiAgICAgICAgICB5PVwiMHB4XCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE1MCAxNTBcIlxuICAgICAgICA+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgaXM9XCJjaXJjbGVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtpbm5lckNsYXNzKHRoZW1lLnNwaW5uZXJDb2xvcil9XG4gICAgICAgICAgICBjeD1cIjc1XCJcbiAgICAgICAgICAgIGN5PVwiNzVcIlxuICAgICAgICAgICAgcj1cIjYwXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfSlcbilcblxuU3Bpbm5lci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBDb21wb3NlcyB0aGUgQm94IGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICovXG4gIC4uLkJveC5wcm9wVHlwZXMsXG5cbiAgLyoqXG4gICAqIERlbGF5IGFmdGVyIHdoaWNoIHNwaW5uZXIgc2hvdWxkIGJlIHZpc2libGUuXG4gICAqL1xuICBkZWxheTogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIHNwaW5uZXIuXG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5lclxuIl19