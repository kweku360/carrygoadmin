"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SortIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M5 12c-.28 0-.53.11-.71.29l-.29.3V9c0-.55-.45-1-1-1s-1 .45-1 1v3.59l-.29-.29A.965.965 0 001 12a1.003 1.003 0 00-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l2-2A1.003 1.003 0 005 12zm3-9h7c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zm7 2H8c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1zm0 8H8c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1zm0-4H8c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1z'];
var svgPaths20 = ['M19 16h-9c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h9c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zm0-5h-9c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h9c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zM7 15c-.28 0-.53.11-.71.29L5 16.59V11c0-.55-.45-1-1-1s-1 .45-1 1v5.59L1.71 15.3A.965.965 0 001 15a1.003 1.003 0 00-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 007 15zM19 1h-9c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 5h-9c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1z'];
var SortIcon = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "sort"
  }, props));
}));
exports.SortIcon = SortIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvU29ydEljb24uanMiXSwibmFtZXMiOlsic3ZnUGF0aHMxNiIsInN2Z1BhdGhzMjAiLCJTb3J0SWNvbiIsInByb3BzIiwicmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQ2pCLHNiQURpQixDQUFuQjtBQUdBLElBQU1DLFVBQVUsR0FBRyxDQUNqQiwwZkFEaUIsQ0FBbkI7QUFJTyxJQUFNQyxRQUFRLEdBQUcsaUJBQ3RCLHVCQUFXLFVBQUNDLEtBQUQsRUFBUUMsR0FBUjtBQUFBLFNBQ1QsZ0NBQUMsZ0JBQUQ7QUFDRSxJQUFBLFVBQVUsRUFBRUosVUFEZDtBQUVFLElBQUEsVUFBVSxFQUFFQyxVQUZkO0FBR0UsSUFBQSxHQUFHLEVBQUVHLEdBSFA7QUFJRSxJQUFBLElBQUksRUFBQztBQUpQLEtBS01ELEtBTE4sRUFEUztBQUFBLENBQVgsQ0FEc0IsQ0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEljb24gZnJvbSAnLi4vc3JjL0ljb24nXG5cbmNvbnN0IHN2Z1BhdGhzMTYgPSBbXG4gICdNNSAxMmMtLjI4IDAtLjUzLjExLS43MS4yOWwtLjI5LjNWOWMwLS41NS0uNDUtMS0xLTFzLTEgLjQ1LTEgMXYzLjU5bC0uMjktLjI5QS45NjUuOTY1IDAgMDAxIDEyYTEuMDAzIDEuMDAzIDAgMDAtLjcxIDEuNzFsMiAyYy4xOC4xOC40My4yOS43MS4yOXMuNTMtLjExLjcxLS4yOWwyLTJBMS4wMDMgMS4wMDMgMCAwMDUgMTJ6bTMtOWg3Yy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xSDhjLS41NSAwLTEgLjQ1LTEgMXMuNDUgMSAxIDF6bTcgMkg4Yy0uNTUgMC0xIC40NS0xIDFzLjQ1IDEgMSAxaDdjLjU1IDAgMS0uNDUgMS0xcy0uNDUtMS0xLTF6bTAgOEg4Yy0uNTUgMC0xIC40NS0xIDFzLjQ1IDEgMSAxaDdjLjU1IDAgMS0uNDUgMS0xcy0uNDUtMS0xLTF6bTAtNEg4Yy0uNTUgMC0xIC40NS0xIDFzLjQ1IDEgMSAxaDdjLjU1IDAgMS0uNDUgMS0xcy0uNDUtMS0xLTF6J1xuXVxuY29uc3Qgc3ZnUGF0aHMyMCA9IFtcbiAgJ00xOSAxNmgtOWMtLjU1IDAtMSAuNDUtMSAxdjFjMCAuNTUuNDUgMSAxIDFoOWMuNTUgMCAxLS40NSAxLTF2LTFjMC0uNTUtLjQ1LTEtMS0xem0wLTVoLTljLS41NSAwLTEgLjQ1LTEgMXYxYzAgLjU1LjQ1IDEgMSAxaDljLjU1IDAgMS0uNDUgMS0xdi0xYzAtLjU1LS40NS0xLTEtMXpNNyAxNWMtLjI4IDAtLjUzLjExLS43MS4yOUw1IDE2LjU5VjExYzAtLjU1LS40NS0xLTEtMXMtMSAuNDUtMSAxdjUuNTlMMS43MSAxNS4zQS45NjUuOTY1IDAgMDAxIDE1YTEuMDAzIDEuMDAzIDAgMDAtLjcxIDEuNzFsMyAzYy4xOC4xOC40My4yOS43MS4yOXMuNTMtLjExLjcxLS4yOWwzLTNBMS4wMDMgMS4wMDMgMCAwMDcgMTV6TTE5IDFoLTljLS41NSAwLTEgLjQ1LTEgMXYxYzAgLjU1LjQ1IDEgMSAxaDljLjU1IDAgMS0uNDUgMS0xVjJjMC0uNTUtLjQ1LTEtMS0xem0wIDVoLTljLS41NSAwLTEgLjQ1LTEgMXYxYzAgLjU1LjQ1IDEgMSAxaDljLjU1IDAgMS0uNDUgMS0xVjdjMC0uNTUtLjQ1LTEtMS0xeidcbl1cblxuZXhwb3J0IGNvbnN0IFNvcnRJY29uID0gbWVtbyhcbiAgZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4gKFxuICAgIDxJY29uXG4gICAgICBzdmdQYXRoczE2PXtzdmdQYXRoczE2fVxuICAgICAgc3ZnUGF0aHMyMD17c3ZnUGF0aHMyMH1cbiAgICAgIHJlZj17cmVmfVxuICAgICAgbmFtZT1cInNvcnRcIlxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICkpXG4pXG4iXX0=