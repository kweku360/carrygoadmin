"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BuildIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M15.39 12.41L7.7 6l1.07-1.1c.34-.34-.12-.63.12-1.26.88-2.17 3.41-2.35 3.41-2.35s.36-.37.71-.72C9.74-.81 7.53.53 6.54 1.4L3.12 4.9l-.71.72c-.39.4-.39 1.05 0 1.45l-.7.72c-.39-.4-1.02-.4-1.41 0s-.39 1.05 0 1.45l1.41 1.45c.39.4 1.02.4 1.41 0s.39-1.05 0-1.45l.71-.72c.39.4 1.02.4 1.41 0l.8-.82 6.39 7.67c.82.82 2.14.82 2.96 0 .81-.82.81-2.15 0-2.96z'];
var svgPaths20 = ['M19.43 16.67L9.31 7.81l1.47-1.56c.41-.44-.15-.8.15-1.6 1.08-2.76 4.19-2.99 4.19-2.99s.45-.47.87-.92C11.98-1 9.26.7 8.04 1.8L3.83 6.25l-.86.92c-.48.51-.48 1.33 0 1.84l-.87.92c-.48-.51-1.26-.51-1.74 0s-.48 1.33 0 1.84l1.74 1.84c.48.51 1.26.51 1.74 0s.48-1.33 0-1.84l.87-.92c.48.51 1.26.51 1.74 0l1.41-1.49 8.81 10.07c.76.76 2 .76 2.76 0 .76-.76.76-2 0-2.76z'];
var BuildIcon = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "build"
  }, props));
}));
exports.BuildIcon = BuildIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvQnVpbGRJY29uLmpzIl0sIm5hbWVzIjpbInN2Z1BhdGhzMTYiLCJzdmdQYXRoczIwIiwiQnVpbGRJY29uIiwicHJvcHMiLCJyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FDakIsMFZBRGlCLENBQW5CO0FBR0EsSUFBTUMsVUFBVSxHQUFHLENBQ2pCLHFXQURpQixDQUFuQjtBQUlPLElBQU1DLFNBQVMsR0FBRyxpQkFDdkIsdUJBQVcsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSO0FBQUEsU0FDVCxnQ0FBQyxnQkFBRDtBQUNFLElBQUEsVUFBVSxFQUFFSixVQURkO0FBRUUsSUFBQSxVQUFVLEVBQUVDLFVBRmQ7QUFHRSxJQUFBLEdBQUcsRUFBRUcsR0FIUDtBQUlFLElBQUEsSUFBSSxFQUFDO0FBSlAsS0FLTUQsS0FMTixFQURTO0FBQUEsQ0FBWCxDQUR1QixDQUFsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9zcmMvSWNvbidcblxuY29uc3Qgc3ZnUGF0aHMxNiA9IFtcbiAgJ00xNS4zOSAxMi40MUw3LjcgNmwxLjA3LTEuMWMuMzQtLjM0LS4xMi0uNjMuMTItMS4yNi44OC0yLjE3IDMuNDEtMi4zNSAzLjQxLTIuMzVzLjM2LS4zNy43MS0uNzJDOS43NC0uODEgNy41My41MyA2LjU0IDEuNEwzLjEyIDQuOWwtLjcxLjcyYy0uMzkuNC0uMzkgMS4wNSAwIDEuNDVsLS43LjcyYy0uMzktLjQtMS4wMi0uNC0xLjQxIDBzLS4zOSAxLjA1IDAgMS40NWwxLjQxIDEuNDVjLjM5LjQgMS4wMi40IDEuNDEgMHMuMzktMS4wNSAwLTEuNDVsLjcxLS43MmMuMzkuNCAxLjAyLjQgMS40MSAwbC44LS44MiA2LjM5IDcuNjdjLjgyLjgyIDIuMTQuODIgMi45NiAwIC44MS0uODIuODEtMi4xNSAwLTIuOTZ6J1xuXVxuY29uc3Qgc3ZnUGF0aHMyMCA9IFtcbiAgJ00xOS40MyAxNi42N0w5LjMxIDcuODFsMS40Ny0xLjU2Yy40MS0uNDQtLjE1LS44LjE1LTEuNiAxLjA4LTIuNzYgNC4xOS0yLjk5IDQuMTktMi45OXMuNDUtLjQ3Ljg3LS45MkMxMS45OC0xIDkuMjYuNyA4LjA0IDEuOEwzLjgzIDYuMjVsLS44Ni45MmMtLjQ4LjUxLS40OCAxLjMzIDAgMS44NGwtLjg3LjkyYy0uNDgtLjUxLTEuMjYtLjUxLTEuNzQgMHMtLjQ4IDEuMzMgMCAxLjg0bDEuNzQgMS44NGMuNDguNTEgMS4yNi41MSAxLjc0IDBzLjQ4LTEuMzMgMC0xLjg0bC44Ny0uOTJjLjQ4LjUxIDEuMjYuNTEgMS43NCAwbDEuNDEtMS40OSA4LjgxIDEwLjA3Yy43Ni43NiAyIC43NiAyLjc2IDAgLjc2LS43Ni43Ni0yIDAtMi43NnonXG5dXG5cbmV4cG9ydCBjb25zdCBCdWlsZEljb24gPSBtZW1vKFxuICBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiAoXG4gICAgPEljb25cbiAgICAgIHN2Z1BhdGhzMTY9e3N2Z1BhdGhzMTZ9XG4gICAgICBzdmdQYXRoczIwPXtzdmdQYXRoczIwfVxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBuYW1lPVwiYnVpbGRcIlxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICkpXG4pXG4iXX0=