"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _theme = require("../../theme");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var loadingKeyframes = _glamor.css.keyframes('loading', {
  '0%': {
    transform: 'rotate(0)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
});

var loadingCircleKeyframes = _glamor.css.keyframes('loading-circle', {
  '0%': {
    strokeDashoffset: 600
  },
  '100%': {
    strokeDashoffset: 0
  }
});

var outerClass = (0, _glamor.css)({
  animation: "".concat(loadingKeyframes, " 2s linear infinite")
}).toString();

var innerClass = function innerClass(color) {
  return (0, _glamor.css)({
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

var Spinner = (0, _react.memo)((0, _react.forwardRef)(function (_ref, ref) {
  var _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 0 : _ref$delay,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 40 : _ref$size,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["delay", "size"]);
  var theme = (0, _theme.useTheme)();

  var _useState = (0, _react.useState)(delay === 0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isVisible = _useState2[0],
      setIsVisible = _useState2[1];

  (0, _react.useEffect)(function () {
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

  return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
    width: size,
    height: size,
    lineHeight: 0
  }, props, {
    innerRef: ref
  }), _react["default"].createElement(_uiBox["default"], {
    is: "svg",
    className: outerClass,
    x: "0px",
    y: "0px",
    viewBox: "0 0 150 150"
  }, _react["default"].createElement(_uiBox["default"], {
    is: "circle",
    className: innerClass(theme.spinnerColor),
    cx: "75",
    cy: "75",
    r: "60"
  })));
}));
Spinner.propTypes = _objectSpread({}, _uiBox["default"].propTypes, {
  /**
   * Delay after which spinner should be visible.
   */
  delay: _propTypes["default"].number,

  /**
   * The size of the spinner.
   */
  size: _propTypes["default"].number.isRequired
});
var _default = Spinner;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zcGlubmVyL3NyYy9TcGlubmVyLmpzIl0sIm5hbWVzIjpbImxvYWRpbmdLZXlmcmFtZXMiLCJjc3MiLCJrZXlmcmFtZXMiLCJ0cmFuc2Zvcm0iLCJsb2FkaW5nQ2lyY2xlS2V5ZnJhbWVzIiwic3Ryb2tlRGFzaG9mZnNldCIsIm91dGVyQ2xhc3MiLCJhbmltYXRpb24iLCJ0b1N0cmluZyIsImlubmVyQ2xhc3MiLCJjb2xvciIsInN0cm9rZURhc2hhcnJheSIsInN0cm9rZVdpZHRoIiwic3Ryb2tlTWl0ZXJsaW1pdCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2UiLCJmaWxsIiwiU3Bpbm5lciIsInJlZiIsImRlbGF5Iiwic2l6ZSIsInByb3BzIiwidGhlbWUiLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJkZWxheVRpbWVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInNwaW5uZXJDb2xvciIsInByb3BUeXBlcyIsIkJveCIsIlByb3BUeXBlcyIsIm51bWJlciIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUdDLFlBQUlDLFNBQUosQ0FBYyxTQUFkLEVBQXlCO0FBQ2hELFFBQU07QUFDSkMsSUFBQUEsU0FBUyxFQUFFO0FBRFAsR0FEMEM7QUFJaEQsVUFBUTtBQUNOQSxJQUFBQSxTQUFTLEVBQUU7QUFETDtBQUp3QyxDQUF6QixDQUF6Qjs7QUFTQSxJQUFNQyxzQkFBc0IsR0FBR0gsWUFBSUMsU0FBSixDQUFjLGdCQUFkLEVBQWdDO0FBQzdELFFBQU07QUFDSkcsSUFBQUEsZ0JBQWdCLEVBQUU7QUFEZCxHQUR1RDtBQUk3RCxVQUFRO0FBQ05BLElBQUFBLGdCQUFnQixFQUFFO0FBRFo7QUFKcUQsQ0FBaEMsQ0FBL0I7O0FBU0EsSUFBTUMsVUFBVSxHQUFHLGlCQUFJO0FBQ3JCQyxFQUFBQSxTQUFTLFlBQUtQLGdCQUFMO0FBRFksQ0FBSixFQUVoQlEsUUFGZ0IsRUFBbkI7O0FBSUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQUMsS0FBSztBQUFBLFNBQ3RCLGlCQUFJO0FBQ0ZMLElBQUFBLGdCQUFnQixFQUFFLEdBRGhCO0FBRUZNLElBQUFBLGVBQWUsRUFBRSxHQUZmO0FBR0ZDLElBQUFBLFdBQVcsRUFBRSxFQUhYO0FBSUZDLElBQUFBLGdCQUFnQixFQUFFLEVBSmhCO0FBS0ZDLElBQUFBLGFBQWEsRUFBRSxPQUxiO0FBTUZQLElBQUFBLFNBQVMsWUFBS0gsc0JBQUwsc0RBTlA7QUFPRlcsSUFBQUEsTUFBTSxFQUFFTCxLQVBOO0FBUUZNLElBQUFBLElBQUksRUFBRTtBQVJKLEdBQUosRUFTR1IsUUFUSCxFQURzQjtBQUFBLENBQXhCOztBQVlBLElBQU1TLE9BQU8sR0FBRyxpQkFDZCx1QkFBVyxnQkFBcUNDLEdBQXJDLEVBQTZDO0FBQUEsd0JBQTFDQyxLQUEwQztBQUFBLE1BQTFDQSxLQUEwQywyQkFBbEMsQ0FBa0M7QUFBQSx1QkFBL0JDLElBQStCO0FBQUEsTUFBL0JBLElBQStCLDBCQUF4QixFQUF3QjtBQUFBLE1BQWpCQyxLQUFpQjtBQUN0RCxNQUFNQyxLQUFLLEdBQUcsc0JBQWQ7O0FBRHNELGtCQUVwQixxQkFBU0gsS0FBSyxLQUFLLENBQW5CLENBRm9CO0FBQUE7QUFBQSxNQUUvQ0ksU0FGK0M7QUFBQSxNQUVwQ0MsWUFGb0M7O0FBSXRELHdCQUFVLFlBQU07QUFDZCxRQUFJQyxVQUFVLEdBQUcsSUFBakI7O0FBQ0EsUUFBSU4sS0FBSyxHQUFHLENBQVosRUFBZTtBQUNiTSxNQUFBQSxVQUFVLEdBQUdDLFVBQVUsQ0FBQyxZQUFNO0FBQzVCRixRQUFBQSxZQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0QsT0FGc0IsRUFFcEJMLEtBRm9CLENBQXZCO0FBR0Q7O0FBRUQsV0FBTyxZQUFXO0FBQ2hCUSxNQUFBQSxZQUFZLENBQUNGLFVBQUQsQ0FBWjtBQUNELEtBRkQ7QUFHRCxHQVhELEVBV0csRUFYSDs7QUFhQSxNQUFJLENBQUNGLFNBQUwsRUFBZ0I7QUFDZCxXQUFPLElBQVA7QUFDRDs7QUFFRCxTQUNFLGdDQUFDLGlCQUFEO0FBQUssSUFBQSxLQUFLLEVBQUVILElBQVo7QUFBa0IsSUFBQSxNQUFNLEVBQUVBLElBQTFCO0FBQWdDLElBQUEsVUFBVSxFQUFFO0FBQTVDLEtBQW1EQyxLQUFuRDtBQUEwRCxJQUFBLFFBQVEsRUFBRUg7QUFBcEUsTUFDRSxnQ0FBQyxpQkFBRDtBQUNFLElBQUEsRUFBRSxFQUFDLEtBREw7QUFFRSxJQUFBLFNBQVMsRUFBRVosVUFGYjtBQUdFLElBQUEsQ0FBQyxFQUFDLEtBSEo7QUFJRSxJQUFBLENBQUMsRUFBQyxLQUpKO0FBS0UsSUFBQSxPQUFPLEVBQUM7QUFMVixLQU9FLGdDQUFDLGlCQUFEO0FBQ0UsSUFBQSxFQUFFLEVBQUMsUUFETDtBQUVFLElBQUEsU0FBUyxFQUFFRyxVQUFVLENBQUNhLEtBQUssQ0FBQ00sWUFBUCxDQUZ2QjtBQUdFLElBQUEsRUFBRSxFQUFDLElBSEw7QUFJRSxJQUFBLEVBQUUsRUFBQyxJQUpMO0FBS0UsSUFBQSxDQUFDLEVBQUM7QUFMSixJQVBGLENBREYsQ0FERjtBQW1CRCxDQXhDRCxDQURjLENBQWhCO0FBNENBWCxPQUFPLENBQUNZLFNBQVIscUJBSUtDLGtCQUFJRCxTQUpUO0FBTUU7OztBQUdBVixFQUFBQSxLQUFLLEVBQUVZLHNCQUFVQyxNQVRuQjs7QUFXRTs7O0FBR0FaLEVBQUFBLElBQUksRUFBRVcsc0JBQVVDLE1BQVYsQ0FBaUJDO0FBZHpCO2VBaUJlaEIsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBmb3J3YXJkUmVmLCBtZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNvbnN0IGxvYWRpbmdLZXlmcmFtZXMgPSBjc3Mua2V5ZnJhbWVzKCdsb2FkaW5nJywge1xuICAnMCUnOiB7XG4gICAgdHJhbnNmb3JtOiAncm90YXRlKDApJ1xuICB9LFxuICAnMTAwJSc6IHtcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMzYwZGVnKSdcbiAgfVxufSlcblxuY29uc3QgbG9hZGluZ0NpcmNsZUtleWZyYW1lcyA9IGNzcy5rZXlmcmFtZXMoJ2xvYWRpbmctY2lyY2xlJywge1xuICAnMCUnOiB7XG4gICAgc3Ryb2tlRGFzaG9mZnNldDogNjAwXG4gIH0sXG4gICcxMDAlJzoge1xuICAgIHN0cm9rZURhc2hvZmZzZXQ6IDBcbiAgfVxufSlcblxuY29uc3Qgb3V0ZXJDbGFzcyA9IGNzcyh7XG4gIGFuaW1hdGlvbjogYCR7bG9hZGluZ0tleWZyYW1lc30gMnMgbGluZWFyIGluZmluaXRlYFxufSkudG9TdHJpbmcoKVxuXG5jb25zdCBpbm5lckNsYXNzID0gY29sb3IgPT5cbiAgY3NzKHtcbiAgICBzdHJva2VEYXNob2Zmc2V0OiA2MDAsXG4gICAgc3Ryb2tlRGFzaGFycmF5OiAzMDAsXG4gICAgc3Ryb2tlV2lkdGg6IDEyLFxuICAgIHN0cm9rZU1pdGVybGltaXQ6IDEwLFxuICAgIHN0cm9rZUxpbmVjYXA6ICdyb3VuZCcsXG4gICAgYW5pbWF0aW9uOiBgJHtsb2FkaW5nQ2lyY2xlS2V5ZnJhbWVzfSAxLjZzIGN1YmljLWJlemllcigwLjQsIDAuMTUsIDAuNiwgMC44NSkgaW5maW5pdGVgLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgZmlsbDogJ3RyYW5zcGFyZW50J1xuICB9KS50b1N0cmluZygpXG5cbmNvbnN0IFNwaW5uZXIgPSBtZW1vKFxuICBmb3J3YXJkUmVmKCh7IGRlbGF5ID0gMCwgc2l6ZSA9IDQwLCAuLi5wcm9wcyB9LCByZWYpID0+IHtcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcbiAgICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUoZGVsYXkgPT09IDApXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgbGV0IGRlbGF5VGltZXIgPSBudWxsXG4gICAgICBpZiAoZGVsYXkgPiAwKSB7XG4gICAgICAgIGRlbGF5VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzZXRJc1Zpc2libGUodHJ1ZSlcbiAgICAgICAgfSwgZGVsYXkpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGRlbGF5VGltZXIpXG4gICAgICB9XG4gICAgfSwgW10pXG5cbiAgICBpZiAoIWlzVmlzaWJsZSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveCB3aWR0aD17c2l6ZX0gaGVpZ2h0PXtzaXplfSBsaW5lSGVpZ2h0PXswfSB7Li4ucHJvcHN9IGlubmVyUmVmPXtyZWZ9PlxuICAgICAgICA8Qm94XG4gICAgICAgICAgaXM9XCJzdmdcIlxuICAgICAgICAgIGNsYXNzTmFtZT17b3V0ZXJDbGFzc31cbiAgICAgICAgICB4PVwiMHB4XCJcbiAgICAgICAgICB5PVwiMHB4XCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE1MCAxNTBcIlxuICAgICAgICA+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgaXM9XCJjaXJjbGVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtpbm5lckNsYXNzKHRoZW1lLnNwaW5uZXJDb2xvcil9XG4gICAgICAgICAgICBjeD1cIjc1XCJcbiAgICAgICAgICAgIGN5PVwiNzVcIlxuICAgICAgICAgICAgcj1cIjYwXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfSlcbilcblxuU3Bpbm5lci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBDb21wb3NlcyB0aGUgQm94IGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICovXG4gIC4uLkJveC5wcm9wVHlwZXMsXG5cbiAgLyoqXG4gICAqIERlbGF5IGFmdGVyIHdoaWNoIHNwaW5uZXIgc2hvdWxkIGJlIHZpc2libGUuXG4gICAqL1xuICBkZWxheTogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIHNwaW5uZXIuXG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5lclxuIl19