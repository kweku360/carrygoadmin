"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwapHorizontalIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M0 7.02L.05 7H0v.02zm2-2.03h9.57l-1.29 1.29A1.003 1.003 0 0011.7 7.7l2.99-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-2.99-3a1.07 1.07 0 00-.71-.28 1.003 1.003 0 00-.71 1.71L11.57 3H2c-.55 0-1 .45-1 1a1 1 0 001 .99zM15.96 9H16v-.02l-.04.02zM14 11.01H4.43l1.29-1.29A1.003 1.003 0 004.3 8.3l-2.99 3a.99.99 0 00-.29.7c0 .28.11.53.29.71l2.99 3a1.003 1.003 0 001.42-1.42L4.43 13H14c.55 0 1-.45 1-1s-.45-.99-1-.99z'];
var svgPaths20 = ['M16.02 10c-.01 0-.01 0 0 0H16h.02zM2 6h13.58l-2.29 2.29a1 1 0 00-.3.71 1.003 1.003 0 001.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-4-4a1.003 1.003 0 00-1.42 1.42L15.58 4H2c-.55 0-1 .45-1 1s.45 1 1 1zm2 4h-.02H4zm14 4H4.42l2.29-2.29a1 1 0 00.3-.71 1.003 1.003 0 00-1.71-.71l-4 4c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l4 4a1.003 1.003 0 001.42-1.42L4.42 16H18c.55 0 1-.45 1-1s-.45-1-1-1z'];
var SwapHorizontalIcon = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "swap-horizontal"
  }, props));
}));
exports.SwapHorizontalIcon = SwapHorizontalIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvU3dhcEhvcml6b250YWxJY29uLmpzIl0sIm5hbWVzIjpbInN2Z1BhdGhzMTYiLCJzdmdQYXRoczIwIiwiU3dhcEhvcml6b250YWxJY29uIiwicHJvcHMiLCJyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FDakIsNlpBRGlCLENBQW5CO0FBR0EsSUFBTUMsVUFBVSxHQUFHLENBQ2pCLGlaQURpQixDQUFuQjtBQUlPLElBQU1DLGtCQUFrQixHQUFHLGlCQUNoQyx1QkFBVyxVQUFDQyxLQUFELEVBQVFDLEdBQVI7QUFBQSxTQUNULGdDQUFDLGdCQUFEO0FBQ0UsSUFBQSxVQUFVLEVBQUVKLFVBRGQ7QUFFRSxJQUFBLFVBQVUsRUFBRUMsVUFGZDtBQUdFLElBQUEsR0FBRyxFQUFFRyxHQUhQO0FBSUUsSUFBQSxJQUFJLEVBQUM7QUFKUCxLQUtNRCxLQUxOLEVBRFM7QUFBQSxDQUFYLENBRGdDLENBQTNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJY29uIGZyb20gJy4uL3NyYy9JY29uJ1xuXG5jb25zdCBzdmdQYXRoczE2ID0gW1xuICAnTTAgNy4wMkwuMDUgN0gwdi4wMnptMi0yLjAzaDkuNTdsLTEuMjkgMS4yOUExLjAwMyAxLjAwMyAwIDAwMTEuNyA3LjdsMi45OS0zYy4xOC0uMTguMjktLjQzLjI5LS43MSAwLS4yOC0uMTEtLjUzLS4yOS0uNzFsLTIuOTktM2ExLjA3IDEuMDcgMCAwMC0uNzEtLjI4IDEuMDAzIDEuMDAzIDAgMDAtLjcxIDEuNzFMMTEuNTcgM0gyYy0uNTUgMC0xIC40NS0xIDFhMSAxIDAgMDAxIC45OXpNMTUuOTYgOUgxNnYtLjAybC0uMDQuMDJ6TTE0IDExLjAxSDQuNDNsMS4yOS0xLjI5QTEuMDAzIDEuMDAzIDAgMDA0LjMgOC4zbC0yLjk5IDNhLjk5Ljk5IDAgMDAtLjI5LjdjMCAuMjguMTEuNTMuMjkuNzFsMi45OSAzYTEuMDAzIDEuMDAzIDAgMDAxLjQyLTEuNDJMNC40MyAxM0gxNGMuNTUgMCAxLS40NSAxLTFzLS40NS0uOTktMS0uOTl6J1xuXVxuY29uc3Qgc3ZnUGF0aHMyMCA9IFtcbiAgJ00xNi4wMiAxMGMtLjAxIDAtLjAxIDAgMCAwSDE2aC4wMnpNMiA2aDEzLjU4bC0yLjI5IDIuMjlhMSAxIDAgMDAtLjMuNzEgMS4wMDMgMS4wMDMgMCAwMDEuNzEuNzFsNC00Yy4xOC0uMTguMjktLjQzLjI5LS43MSAwLS4yOC0uMTEtLjUzLS4yOS0uNzFsLTQtNGExLjAwMyAxLjAwMyAwIDAwLTEuNDIgMS40MkwxNS41OCA0SDJjLS41NSAwLTEgLjQ1LTEgMXMuNDUgMSAxIDF6bTIgNGgtLjAySDR6bTE0IDRINC40MmwyLjI5LTIuMjlhMSAxIDAgMDAuMy0uNzEgMS4wMDMgMS4wMDMgMCAwMC0xLjcxLS43MWwtNCA0Yy0uMTguMTgtLjI5LjQzLS4yOS43MSAwIC4yOC4xMS41My4yOS43MWw0IDRhMS4wMDMgMS4wMDMgMCAwMDEuNDItMS40Mkw0LjQyIDE2SDE4Yy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xeidcbl1cblxuZXhwb3J0IGNvbnN0IFN3YXBIb3Jpem9udGFsSWNvbiA9IG1lbW8oXG4gIGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IChcbiAgICA8SWNvblxuICAgICAgc3ZnUGF0aHMxNj17c3ZnUGF0aHMxNn1cbiAgICAgIHN2Z1BhdGhzMjA9e3N2Z1BhdGhzMjB9XG4gICAgICByZWY9e3JlZn1cbiAgICAgIG5hbWU9XCJzd2FwLWhvcml6b250YWxcIlxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICkpXG4pXG4iXX0=