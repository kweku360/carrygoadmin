"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewLayerIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M13.982 6.272l1.518.868-.01.01c.3.17.51.48.51.85s-.21.68-.51.85l.01.01-7 4-.01-.01A.94.94 0 018 13a.94.94 0 01-.49-.15l-.01.01-7-4 .01-.01A.977.977 0 010 8c0-.37.21-.68.51-.86L.5 7.13l7-4 .01.02A.94.94 0 018 3c.086 0 .168.014.246.038a2 2 0 105.736 3.234zM14 3c.55 0 1 .45 1 1s-.45 1-1 1h-1v1c0 .55-.45 1-1 1s-1-.45-1-1V5h-1c-.55 0-1-.45-1-1s.45-1 1-1h1V2c0-.55.45-1 1-1s1 .45 1 1v1h1z'];
var svgPaths20 = ['M11.513 2.663A2 2 0 0013 6h1v1a2 2 0 104 0v-.733l1.5.833c.3.2.5.5.5.9s-.2.7-.5.9l-9 5c-.2.1-.3.1-.5.1s-.3 0-.5-.1l-9-5C.2 8.7 0 8.4 0 8s.2-.7.5-.9l9-5c.2-.1.3-.1.5-.1s.3 0 .5.1l1.013.563zM17 3h2a1 1 0 010 2h-2v2a1 1 0 01-2 0V5h-2a1 1 0 010-2h2V1a1 1 0 012 0v2z'];
var NewLayerIcon = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "new-layer"
  }, props));
}));
exports.NewLayerIcon = NewLayerIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvTmV3TGF5ZXJJY29uLmpzIl0sIm5hbWVzIjpbInN2Z1BhdGhzMTYiLCJzdmdQYXRoczIwIiwiTmV3TGF5ZXJJY29uIiwicHJvcHMiLCJyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FDakIsa1lBRGlCLENBQW5CO0FBR0EsSUFBTUMsVUFBVSxHQUFHLENBQ2pCLHNRQURpQixDQUFuQjtBQUlPLElBQU1DLFlBQVksR0FBRyxpQkFDMUIsdUJBQVcsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSO0FBQUEsU0FDVCxnQ0FBQyxnQkFBRDtBQUNFLElBQUEsVUFBVSxFQUFFSixVQURkO0FBRUUsSUFBQSxVQUFVLEVBQUVDLFVBRmQ7QUFHRSxJQUFBLEdBQUcsRUFBRUcsR0FIUDtBQUlFLElBQUEsSUFBSSxFQUFDO0FBSlAsS0FLTUQsS0FMTixFQURTO0FBQUEsQ0FBWCxDQUQwQixDQUFyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9zcmMvSWNvbidcblxuY29uc3Qgc3ZnUGF0aHMxNiA9IFtcbiAgJ00xMy45ODIgNi4yNzJsMS41MTguODY4LS4wMS4wMWMuMy4xNy41MS40OC41MS44NXMtLjIxLjY4LS41MS44NWwuMDEuMDEtNyA0LS4wMS0uMDFBLjk0Ljk0IDAgMDE4IDEzYS45NC45NCAwIDAxLS40OS0uMTVsLS4wMS4wMS03LTQgLjAxLS4wMUEuOTc3Ljk3NyAwIDAxMCA4YzAtLjM3LjIxLS42OC41MS0uODZMLjUgNy4xM2w3LTQgLjAxLjAyQS45NC45NCAwIDAxOCAzYy4wODYgMCAuMTY4LjAxNC4yNDYuMDM4YTIgMiAwIDEwNS43MzYgMy4yMzR6TTE0IDNjLjU1IDAgMSAuNDUgMSAxcy0uNDUgMS0xIDFoLTF2MWMwIC41NS0uNDUgMS0xIDFzLTEtLjQ1LTEtMVY1aC0xYy0uNTUgMC0xLS40NS0xLTFzLjQ1LTEgMS0xaDFWMmMwLS41NS40NS0xIDEtMXMxIC40NSAxIDF2MWgxeidcbl1cbmNvbnN0IHN2Z1BhdGhzMjAgPSBbXG4gICdNMTEuNTEzIDIuNjYzQTIgMiAwIDAwMTMgNmgxdjFhMiAyIDAgMTA0IDB2LS43MzNsMS41LjgzM2MuMy4yLjUuNS41LjlzLS4yLjctLjUuOWwtOSA1Yy0uMi4xLS4zLjEtLjUuMXMtLjMgMC0uNS0uMWwtOS01Qy4yIDguNyAwIDguNCAwIDhzLjItLjcuNS0uOWw5LTVjLjItLjEuMy0uMS41LS4xcy4zIDAgLjUuMWwxLjAxMy41NjN6TTE3IDNoMmExIDEgMCAwMTAgMmgtMnYyYTEgMSAwIDAxLTIgMFY1aC0yYTEgMSAwIDAxMC0yaDJWMWExIDEgMCAwMTIgMHYyeidcbl1cblxuZXhwb3J0IGNvbnN0IE5ld0xheWVySWNvbiA9IG1lbW8oXG4gIGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IChcbiAgICA8SWNvblxuICAgICAgc3ZnUGF0aHMxNj17c3ZnUGF0aHMxNn1cbiAgICAgIHN2Z1BhdGhzMjA9e3N2Z1BhdGhzMjB9XG4gICAgICByZWY9e3JlZn1cbiAgICAgIG5hbWU9XCJuZXctbGF5ZXJcIlxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICkpXG4pXG4iXX0=