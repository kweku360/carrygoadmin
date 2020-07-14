"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MinimizeIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M15.99.99a1.003 1.003 0 00-1.71-.71l-3.29 3.29V1.99c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1H12.4l3.3-3.29c.18-.18.29-.43.29-.71zm-10 8h-4c-.55 0-1 .45-1 1s.45 1 1 1h1.59L.29 14.28a1.003 1.003 0 001.42 1.42L5 12.41V14c0 .55.45 1 1 1s1-.45 1-1v-4a1.02 1.02 0 00-1.01-1.01z'];
var svgPaths20 = ['M8 11H3c-.55 0-1 .45-1 1s.45 1 1 1h2.59L.3 18.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L7 14.41V17c0 .55.45 1 1 1s1-.45 1-1v-5c0-.55-.45-1-1-1zM20 1a1.003 1.003 0 00-1.71-.71L13 5.59V3c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1h-2.59l5.29-5.29c.19-.18.3-.43.3-.71z'];
var MinimizeIcon = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "minimize"
  }, props));
}));
exports.MinimizeIcon = MinimizeIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvTWluaW1pemVJY29uLmpzIl0sIm5hbWVzIjpbInN2Z1BhdGhzMTYiLCJzdmdQYXRoczIwIiwiTWluaW1pemVJY29uIiwicHJvcHMiLCJyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FDakIsaVRBRGlCLENBQW5CO0FBR0EsSUFBTUMsVUFBVSxHQUFHLENBQ2pCLDZTQURpQixDQUFuQjtBQUlPLElBQU1DLFlBQVksR0FBRyxpQkFDMUIsdUJBQVcsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSO0FBQUEsU0FDVCxnQ0FBQyxnQkFBRDtBQUNFLElBQUEsVUFBVSxFQUFFSixVQURkO0FBRUUsSUFBQSxVQUFVLEVBQUVDLFVBRmQ7QUFHRSxJQUFBLEdBQUcsRUFBRUcsR0FIUDtBQUlFLElBQUEsSUFBSSxFQUFDO0FBSlAsS0FLTUQsS0FMTixFQURTO0FBQUEsQ0FBWCxDQUQwQixDQUFyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9zcmMvSWNvbidcblxuY29uc3Qgc3ZnUGF0aHMxNiA9IFtcbiAgJ00xNS45OS45OWExLjAwMyAxLjAwMyAwIDAwLTEuNzEtLjcxbC0zLjI5IDMuMjlWMS45OWMwLS41NS0uNDUtMS0xLTFzLTEgLjQ1LTEgMXY0YzAgLjU1LjQ1IDEgMSAxaDRjLjU1IDAgMS0uNDUgMS0xcy0uNDUtMS0xLTFIMTIuNGwzLjMtMy4yOWMuMTgtLjE4LjI5LS40My4yOS0uNzF6bS0xMCA4aC00Yy0uNTUgMC0xIC40NS0xIDFzLjQ1IDEgMSAxaDEuNTlMLjI5IDE0LjI4YTEuMDAzIDEuMDAzIDAgMDAxLjQyIDEuNDJMNSAxMi40MVYxNGMwIC41NS40NSAxIDEgMXMxLS40NSAxLTF2LTRhMS4wMiAxLjAyIDAgMDAtMS4wMS0xLjAxeidcbl1cbmNvbnN0IHN2Z1BhdGhzMjAgPSBbXG4gICdNOCAxMUgzYy0uNTUgMC0xIC40NS0xIDFzLjQ1IDEgMSAxaDIuNTlMLjMgMTguMjljLS4xOS4xOC0uMy40My0uMy43MWExLjAwMyAxLjAwMyAwIDAwMS43MS43MUw3IDE0LjQxVjE3YzAgLjU1LjQ1IDEgMSAxczEtLjQ1IDEtMXYtNWMwLS41NS0uNDUtMS0xLTF6TTIwIDFhMS4wMDMgMS4wMDMgMCAwMC0xLjcxLS43MUwxMyA1LjU5VjNjMC0uNTUtLjQ1LTEtMS0xcy0xIC40NS0xIDF2NWMwIC41NS40NSAxIDEgMWg1Yy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xaC0yLjU5bDUuMjktNS4yOWMuMTktLjE4LjMtLjQzLjMtLjcxeidcbl1cblxuZXhwb3J0IGNvbnN0IE1pbmltaXplSWNvbiA9IG1lbW8oXG4gIGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IChcbiAgICA8SWNvblxuICAgICAgc3ZnUGF0aHMxNj17c3ZnUGF0aHMxNn1cbiAgICAgIHN2Z1BhdGhzMjA9e3N2Z1BhdGhzMjB9XG4gICAgICByZWY9e3JlZn1cbiAgICAgIG5hbWU9XCJtaW5pbWl6ZVwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKSlcbilcbiJdfQ==