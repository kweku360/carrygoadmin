"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SortDescIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M5 12c-.28 0-.53.11-.71.29l-.29.3V9c0-.55-.45-1-1-1s-1 .45-1 1v3.59l-.29-.29A.965.965 0 001 12a1.003 1.003 0 00-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l2-2A1.003 1.003 0 005 12zm4 1H8c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1s-.45-1-1-1zm4-8H8c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1zm-2 4H8c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zm4-8H8c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1z'];
var svgPaths20 = ['M13 15h-3c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zm-6-1c-.28 0-.53.11-.71.29L5 15.59V10c0-.55-.45-1-1-1s-1 .45-1 1v5.59L1.71 14.3A.965.965 0 001 14a1.003 1.003 0 00-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 007 14zM19 0h-9c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-4 10h-5c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zm2-5h-7c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z'];
var SortDescIcon = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "sort-desc"
  }, props));
}));
exports.SortDescIcon = SortDescIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvU29ydERlc2NJY29uLmpzIl0sIm5hbWVzIjpbInN2Z1BhdGhzMTYiLCJzdmdQYXRoczIwIiwiU29ydERlc2NJY29uIiwicHJvcHMiLCJyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FDakIsdWJBRGlCLENBQW5CO0FBR0EsSUFBTUMsVUFBVSxHQUFHLENBQ2pCLDRmQURpQixDQUFuQjtBQUlPLElBQU1DLFlBQVksR0FBRyxpQkFDMUIsdUJBQVcsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSO0FBQUEsU0FDVCxnQ0FBQyxnQkFBRDtBQUNFLElBQUEsVUFBVSxFQUFFSixVQURkO0FBRUUsSUFBQSxVQUFVLEVBQUVDLFVBRmQ7QUFHRSxJQUFBLEdBQUcsRUFBRUcsR0FIUDtBQUlFLElBQUEsSUFBSSxFQUFDO0FBSlAsS0FLTUQsS0FMTixFQURTO0FBQUEsQ0FBWCxDQUQwQixDQUFyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9zcmMvSWNvbidcblxuY29uc3Qgc3ZnUGF0aHMxNiA9IFtcbiAgJ001IDEyYy0uMjggMC0uNTMuMTEtLjcxLjI5bC0uMjkuM1Y5YzAtLjU1LS40NS0xLTEtMXMtMSAuNDUtMSAxdjMuNTlsLS4yOS0uMjlBLjk2NS45NjUgMCAwMDEgMTJhMS4wMDMgMS4wMDMgMCAwMC0uNzEgMS43MWwyIDJjLjE4LjE4LjQzLjI5LjcxLjI5cy41My0uMTEuNzEtLjI5bDItMkExLjAwMyAxLjAwMyAwIDAwNSAxMnptNCAxSDhjLS41NSAwLTEgLjQ1LTEgMXMuNDUgMSAxIDFoMWMuNTUgMCAxLS40NSAxLTFzLS40NS0xLTEtMXptNC04SDhjLS41NSAwLTEgLjQ1LTEgMXMuNDUgMSAxIDFoNWMuNTUgMCAxLS40NSAxLTFzLS40NS0xLTEtMXptLTIgNEg4Yy0uNTUgMC0xIC40NS0xIDFzLjQ1IDEgMSAxaDNjLjU1IDAgMS0uNDUgMS0xcy0uNDUtMS0xLTF6bTQtOEg4Yy0uNTUgMC0xIC40NS0xIDFzLjQ1IDEgMSAxaDdjLjU1IDAgMS0uNDUgMS0xcy0uNDUtMS0xLTF6J1xuXVxuY29uc3Qgc3ZnUGF0aHMyMCA9IFtcbiAgJ00xMyAxNWgtM2MtLjU1IDAtMSAuNDUtMSAxdjFjMCAuNTUuNDUgMSAxIDFoM2MuNTUgMCAxLS40NSAxLTF2LTFjMC0uNTUtLjQ1LTEtMS0xem0tNi0xYy0uMjggMC0uNTMuMTEtLjcxLjI5TDUgMTUuNTlWMTBjMC0uNTUtLjQ1LTEtMS0xcy0xIC40NS0xIDF2NS41OUwxLjcxIDE0LjNBLjk2NS45NjUgMCAwMDEgMTRhMS4wMDMgMS4wMDMgMCAwMC0uNzEgMS43MWwzIDNjLjE4LjE4LjQzLjI5LjcxLjI5cy41My0uMTEuNzEtLjI5bDMtM0ExLjAwMyAxLjAwMyAwIDAwNyAxNHpNMTkgMGgtOWMtLjU1IDAtMSAuNDUtMSAxdjFjMCAuNTUuNDUgMSAxIDFoOWMuNTUgMCAxLS40NSAxLTFWMWMwLS41NS0uNDUtMS0xLTF6bS00IDEwaC01Yy0uNTUgMC0xIC40NS0xIDF2MWMwIC41NS40NSAxIDEgMWg1Yy41NSAwIDEtLjQ1IDEtMXYtMWMwLS41NS0uNDUtMS0xLTF6bTItNWgtN2MtLjU1IDAtMSAuNDUtMSAxdjFjMCAuNTUuNDUgMSAxIDFoN2MuNTUgMCAxLS40NSAxLTFWNmMwLS41NS0uNDUtMS0xLTF6J1xuXVxuXG5leHBvcnQgY29uc3QgU29ydERlc2NJY29uID0gbWVtbyhcbiAgZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4gKFxuICAgIDxJY29uXG4gICAgICBzdmdQYXRoczE2PXtzdmdQYXRoczE2fVxuICAgICAgc3ZnUGF0aHMyMD17c3ZnUGF0aHMyMH1cbiAgICAgIHJlZj17cmVmfVxuICAgICAgbmFtZT1cInNvcnQtZGVzY1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKSlcbilcbiJdfQ==