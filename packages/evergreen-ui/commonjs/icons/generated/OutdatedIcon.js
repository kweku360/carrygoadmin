"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OutdatedIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M8 0c4.42 0 8 3.58 8 8 0 4.06-3.02 7.4-6.94 7.92-.02 0-.04.01-.06.01-.33.04-.66.07-1 .07-4.42 0-8-3.58-8-8 0-.55.45-1 1-1s1 .45 1 1c0 3.31 2.69 6 6 6 .71 0 1.37-.15 2-.38v.01c2.33-.82 4-3.02 4-5.63 0-3.31-2.69-6-6-6-1.78 0-3.36.78-4.46 2H5c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1s1 .45 1 1v1.74A7.95 7.95 0 018 0zm1 12H7v-2h2v2zm0-3H7V4h2v5z'];
var svgPaths20 = ['M10 0c5.52 0 10 4.48 10 10s-4.48 10-10 10S0 15.52 0 10c0-.55.45-1 1-1s1 .45 1 1c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8C7.47 2 5.22 3.17 3.76 5H5c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1s1 .45 1 1v2.05C3.82 1.6 6.71 0 10 0zm1 16H9v-2h2v2zm0-3H9V4h2v9z'];
var OutdatedIcon = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "outdated"
  }, props));
}));
exports.OutdatedIcon = OutdatedIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvT3V0ZGF0ZWRJY29uLmpzIl0sIm5hbWVzIjpbInN2Z1BhdGhzMTYiLCJzdmdQYXRoczIwIiwiT3V0ZGF0ZWRJY29uIiwicHJvcHMiLCJyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FDakIsOFdBRGlCLENBQW5CO0FBR0EsSUFBTUMsVUFBVSxHQUFHLENBQ2pCLG1SQURpQixDQUFuQjtBQUlPLElBQU1DLFlBQVksR0FBRyxpQkFDMUIsdUJBQVcsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSO0FBQUEsU0FDVCxnQ0FBQyxnQkFBRDtBQUNFLElBQUEsVUFBVSxFQUFFSixVQURkO0FBRUUsSUFBQSxVQUFVLEVBQUVDLFVBRmQ7QUFHRSxJQUFBLEdBQUcsRUFBRUcsR0FIUDtBQUlFLElBQUEsSUFBSSxFQUFDO0FBSlAsS0FLTUQsS0FMTixFQURTO0FBQUEsQ0FBWCxDQUQwQixDQUFyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9zcmMvSWNvbidcblxuY29uc3Qgc3ZnUGF0aHMxNiA9IFtcbiAgJ004IDBjNC40MiAwIDggMy41OCA4IDggMCA0LjA2LTMuMDIgNy40LTYuOTQgNy45Mi0uMDIgMC0uMDQuMDEtLjA2LjAxLS4zMy4wNC0uNjYuMDctMSAuMDctNC40MiAwLTgtMy41OC04LTggMC0uNTUuNDUtMSAxLTFzMSAuNDUgMSAxYzAgMy4zMSAyLjY5IDYgNiA2IC43MSAwIDEuMzctLjE1IDItLjM4di4wMWMyLjMzLS44MiA0LTMuMDIgNC01LjYzIDAtMy4zMS0yLjY5LTYtNi02LTEuNzggMC0zLjM2Ljc4LTQuNDYgMkg1Yy41NSAwIDEgLjQ1IDEgMXMtLjQ1IDEtMSAxSDFjLS41NSAwLTEtLjQ1LTEtMVYxYzAtLjU1LjQ1LTEgMS0xczEgLjQ1IDEgMXYxLjc0QTcuOTUgNy45NSAwIDAxOCAwem0xIDEySDd2LTJoMnYyem0wLTNIN1Y0aDJ2NXonXG5dXG5jb25zdCBzdmdQYXRoczIwID0gW1xuICAnTTEwIDBjNS41MiAwIDEwIDQuNDggMTAgMTBzLTQuNDggMTAtMTAgMTBTMCAxNS41MiAwIDEwYzAtLjU1LjQ1LTEgMS0xczEgLjQ1IDEgMWMwIDQuNDIgMy41OCA4IDggOHM4LTMuNTggOC04LTMuNTgtOC04LThDNy40NyAyIDUuMjIgMy4xNyAzLjc2IDVINWMuNTUgMCAxIC40NSAxIDFzLS40NSAxLTEgMUgxYy0uNTUgMC0xLS40NS0xLTFWMmMwLS41NS40NS0xIDEtMXMxIC40NSAxIDF2Mi4wNUMzLjgyIDEuNiA2LjcxIDAgMTAgMHptMSAxNkg5di0yaDJ2MnptMC0zSDlWNGgydjl6J1xuXVxuXG5leHBvcnQgY29uc3QgT3V0ZGF0ZWRJY29uID0gbWVtbyhcbiAgZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4gKFxuICAgIDxJY29uXG4gICAgICBzdmdQYXRoczE2PXtzdmdQYXRoczE2fVxuICAgICAgc3ZnUGF0aHMyMD17c3ZnUGF0aHMyMH1cbiAgICAgIHJlZj17cmVmfVxuICAgICAgbmFtZT1cIm91dGRhdGVkXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApKVxuKVxuIl19