"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DrawIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M14.9 11c-.3 0-.5.1-.7.3l-3 3c-.2.2-.3.4-.3.7 0 .6.5 1 1 1 .3 0 .5-.1.7-.3l3-3c.2-.2.3-.4.3-.7 0-.5-.4-1-1-1zm-1-1v-.2l-1-5c-.1-.3-.3-.6-.6-.7l-11-4-.3.3 5.8 5.8c.2-.1.4-.2.6-.2.8 0 1.5.7 1.5 1.5S8.3 9 7.4 9s-1.5-.7-1.5-1.5c0-.2.1-.4.2-.6L.3 1.1l-.3.3 4 11c.1.3.4.6.7.6l5 1h.2c.3 0 .5-.1.7-.3l3-3c.2-.2.3-.4.3-.7z'];
var svgPaths20 = ['M17.7 12.7c0-.1 0-.2-.1-.3l-2-7c-.1-.3-.3-.6-.6-.7L1.8 0l-.6.5L7.7 7c.3-.2.6-.3 1-.3 1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2c0-.4.1-.7.3-1L.5 1.2l-.5.6L4.7 15c.1.3.4.5.7.6l7 2c.1 0 .2.1.3.1.3 0 .5-.1.7-.3l4-4c.2-.2.3-.5.3-.7zm1 1c-.3 0-.5.1-.7.3l-4 4c-.2.2-.3.4-.3.7 0 .5.4 1 1 1 .3 0 .5-.1.7-.3l4-4c.2-.2.3-.4.3-.7 0-.6-.5-1-1-1z'];
var DrawIcon = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "draw"
  }, props));
}));
exports.DrawIcon = DrawIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvRHJhd0ljb24uanMiXSwibmFtZXMiOlsic3ZnUGF0aHMxNiIsInN2Z1BhdGhzMjAiLCJEcmF3SWNvbiIsInByb3BzIiwicmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQ2pCLDJUQURpQixDQUFuQjtBQUdBLElBQU1DLFVBQVUsR0FBRyxDQUNqQixzVUFEaUIsQ0FBbkI7QUFJTyxJQUFNQyxRQUFRLEdBQUcsaUJBQ3RCLHVCQUFXLFVBQUNDLEtBQUQsRUFBUUMsR0FBUjtBQUFBLFNBQ1QsZ0NBQUMsZ0JBQUQ7QUFDRSxJQUFBLFVBQVUsRUFBRUosVUFEZDtBQUVFLElBQUEsVUFBVSxFQUFFQyxVQUZkO0FBR0UsSUFBQSxHQUFHLEVBQUVHLEdBSFA7QUFJRSxJQUFBLElBQUksRUFBQztBQUpQLEtBS01ELEtBTE4sRUFEUztBQUFBLENBQVgsQ0FEc0IsQ0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEljb24gZnJvbSAnLi4vc3JjL0ljb24nXG5cbmNvbnN0IHN2Z1BhdGhzMTYgPSBbXG4gICdNMTQuOSAxMWMtLjMgMC0uNS4xLS43LjNsLTMgM2MtLjIuMi0uMy40LS4zLjcgMCAuNi41IDEgMSAxIC4zIDAgLjUtLjEuNy0uM2wzLTNjLjItLjIuMy0uNC4zLS43IDAtLjUtLjQtMS0xLTF6bS0xLTF2LS4ybC0xLTVjLS4xLS4zLS4zLS42LS42LS43bC0xMS00LS4zLjMgNS44IDUuOGMuMi0uMS40LS4yLjYtLjIuOCAwIDEuNS43IDEuNSAxLjVTOC4zIDkgNy40IDlzLTEuNS0uNy0xLjUtMS41YzAtLjIuMS0uNC4yLS42TC4zIDEuMWwtLjMuMyA0IDExYy4xLjMuNC42LjcuNmw1IDFoLjJjLjMgMCAuNS0uMS43LS4zbDMtM2MuMi0uMi4zLS40LjMtLjd6J1xuXVxuY29uc3Qgc3ZnUGF0aHMyMCA9IFtcbiAgJ00xNy43IDEyLjdjMC0uMSAwLS4yLS4xLS4zbC0yLTdjLS4xLS4zLS4zLS42LS42LS43TDEuOCAwbC0uNi41TDcuNyA3Yy4zLS4yLjYtLjMgMS0uMyAxLjEgMCAyIC45IDIgMnMtLjkgMi0yIDItMi0uOS0yLTJjMC0uNC4xLS43LjMtMUwuNSAxLjJsLS41LjZMNC43IDE1Yy4xLjMuNC41LjcuNmw3IDJjLjEgMCAuMi4xLjMuMS4zIDAgLjUtLjEuNy0uM2w0LTRjLjItLjIuMy0uNS4zLS43em0xIDFjLS4zIDAtLjUuMS0uNy4zbC00IDRjLS4yLjItLjMuNC0uMy43IDAgLjUuNCAxIDEgMSAuMyAwIC41LS4xLjctLjNsNC00Yy4yLS4yLjMtLjQuMy0uNyAwLS42LS41LTEtMS0xeidcbl1cblxuZXhwb3J0IGNvbnN0IERyYXdJY29uID0gbWVtbyhcbiAgZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4gKFxuICAgIDxJY29uXG4gICAgICBzdmdQYXRoczE2PXtzdmdQYXRoczE2fVxuICAgICAgc3ZnUGF0aHMyMD17c3ZnUGF0aHMyMH1cbiAgICAgIHJlZj17cmVmfVxuICAgICAgbmFtZT1cImRyYXdcIlxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICkpXG4pXG4iXX0=