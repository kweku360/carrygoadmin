"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WalkIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M13 8h-2c-.16 0-.31-.05-.44-.11v.01l-1.02-.51-.37 1.86 1.38.92-.01.02c.27.17.46.46.46.81v4c0 .55-.45 1-1 1s-1-.45-1-1v-3.46l-1.27-.85-1.8 4.67h-.01A.98.98 0 015 16c-.55 0-1-.45-1-1 0-.13.03-.25.07-.36h-.01L7.39 6H5.62l-.73 1.45h-.01C4.72 7.77 4.39 8 4 8c-.55 0-1-.45-1-1 0-.16.05-.31.11-.44H3.1l1-2h.01c.17-.33.5-.56.89-.56h3.16l.29-.75C8.17 2.9 8 2.47 8 2c0-1.1.9-2 2-2s2 .9 2 2c0 1-.73 1.82-1.69 1.97l-.5 1.32 1.43.71H13c.55 0 1 .45 1 1s-.45 1-1 1z'];
var svgPaths20 = ['M16 10h-2c-.23 0-.42-.09-.59-.21l-.01.01-1.69-1.27-.63 3.14 2.62 2.62c.19.18.3.43.3.71v4c0 .55-.45 1-1 1s-1-.45-1-1v-3.59L9.39 12.8l-2.45 6.55h-.01c-.14.38-.5.65-.93.65-.55 0-1-.45-1-1 0-.12.03-.24.07-.35h-.01L9.43 7h-2.9l-1.7 2.55-.01-.01c-.18.27-.47.46-.82.46-.55 0-1-.45-1-1 0-.21.08-.39.18-.54l-.01-.01 2-3 .02.01C5.36 5.19 5.65 5 6 5h4.18l.36-.96c-.33-.43-.54-.96-.54-1.54a2.5 2.5 0 015 0A2.5 2.5 0 0112.5 5c-.06 0-.12-.01-.18-.02l-.44 1.18L14.33 8H16c.55 0 1 .45 1 1s-.45 1-1 1z'];
var WalkIcon = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "walk"
  }, props));
}));
exports.WalkIcon = WalkIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvV2Fsa0ljb24uanMiXSwibmFtZXMiOlsic3ZnUGF0aHMxNiIsInN2Z1BhdGhzMjAiLCJXYWxrSWNvbiIsInByb3BzIiwicmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQ2pCLG9jQURpQixDQUFuQjtBQUdBLElBQU1DLFVBQVUsR0FBRyxDQUNqQixzZUFEaUIsQ0FBbkI7QUFJTyxJQUFNQyxRQUFRLEdBQUcsaUJBQ3RCLHVCQUFXLFVBQUNDLEtBQUQsRUFBUUMsR0FBUjtBQUFBLFNBQ1QsZ0NBQUMsZ0JBQUQ7QUFDRSxJQUFBLFVBQVUsRUFBRUosVUFEZDtBQUVFLElBQUEsVUFBVSxFQUFFQyxVQUZkO0FBR0UsSUFBQSxHQUFHLEVBQUVHLEdBSFA7QUFJRSxJQUFBLElBQUksRUFBQztBQUpQLEtBS01ELEtBTE4sRUFEUztBQUFBLENBQVgsQ0FEc0IsQ0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEljb24gZnJvbSAnLi4vc3JjL0ljb24nXG5cbmNvbnN0IHN2Z1BhdGhzMTYgPSBbXG4gICdNMTMgOGgtMmMtLjE2IDAtLjMxLS4wNS0uNDQtLjExdi4wMWwtMS4wMi0uNTEtLjM3IDEuODYgMS4zOC45Mi0uMDEuMDJjLjI3LjE3LjQ2LjQ2LjQ2LjgxdjRjMCAuNTUtLjQ1IDEtMSAxcy0xLS40NS0xLTF2LTMuNDZsLTEuMjctLjg1LTEuOCA0LjY3aC0uMDFBLjk4Ljk4IDAgMDE1IDE2Yy0uNTUgMC0xLS40NS0xLTEgMC0uMTMuMDMtLjI1LjA3LS4zNmgtLjAxTDcuMzkgNkg1LjYybC0uNzMgMS40NWgtLjAxQzQuNzIgNy43NyA0LjM5IDggNCA4Yy0uNTUgMC0xLS40NS0xLTEgMC0uMTYuMDUtLjMxLjExLS40NEgzLjFsMS0yaC4wMWMuMTctLjMzLjUtLjU2Ljg5LS41NmgzLjE2bC4yOS0uNzVDOC4xNyAyLjkgOCAyLjQ3IDggMmMwLTEuMS45LTIgMi0yczIgLjkgMiAyYzAgMS0uNzMgMS44Mi0xLjY5IDEuOTdsLS41IDEuMzIgMS40My43MUgxM2MuNTUgMCAxIC40NSAxIDFzLS40NSAxLTEgMXonXG5dXG5jb25zdCBzdmdQYXRoczIwID0gW1xuICAnTTE2IDEwaC0yYy0uMjMgMC0uNDItLjA5LS41OS0uMjFsLS4wMS4wMS0xLjY5LTEuMjctLjYzIDMuMTQgMi42MiAyLjYyYy4xOS4xOC4zLjQzLjMuNzF2NGMwIC41NS0uNDUgMS0xIDFzLTEtLjQ1LTEtMXYtMy41OUw5LjM5IDEyLjhsLTIuNDUgNi41NWgtLjAxYy0uMTQuMzgtLjUuNjUtLjkzLjY1LS41NSAwLTEtLjQ1LTEtMSAwLS4xMi4wMy0uMjQuMDctLjM1aC0uMDFMOS40MyA3aC0yLjlsLTEuNyAyLjU1LS4wMS0uMDFjLS4xOC4yNy0uNDcuNDYtLjgyLjQ2LS41NSAwLTEtLjQ1LTEtMSAwLS4yMS4wOC0uMzkuMTgtLjU0bC0uMDEtLjAxIDItMyAuMDIuMDFDNS4zNiA1LjE5IDUuNjUgNSA2IDVoNC4xOGwuMzYtLjk2Yy0uMzMtLjQzLS41NC0uOTYtLjU0LTEuNTRhMi41IDIuNSAwIDAxNSAwQTIuNSAyLjUgMCAwMTEyLjUgNWMtLjA2IDAtLjEyLS4wMS0uMTgtLjAybC0uNDQgMS4xOEwxNC4zMyA4SDE2Yy41NSAwIDEgLjQ1IDEgMXMtLjQ1IDEtMSAxeidcbl1cblxuZXhwb3J0IGNvbnN0IFdhbGtJY29uID0gbWVtbyhcbiAgZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4gKFxuICAgIDxJY29uXG4gICAgICBzdmdQYXRoczE2PXtzdmdQYXRoczE2fVxuICAgICAgc3ZnUGF0aHMyMD17c3ZnUGF0aHMyMH1cbiAgICAgIHJlZj17cmVmfVxuICAgICAgbmFtZT1cIndhbGtcIlxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICkpXG4pXG4iXX0=