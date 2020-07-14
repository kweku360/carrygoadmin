"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HelpIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../src/Icon"));

var svgPaths16 = ['M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm1 13H7v-2h2v2zm1.93-6.52c-.14.32-.35.64-.62.97L9.25 8.83c-.12.15-.24.29-.28.42-.04.13-.09.3-.09.52V10H7.12V8.88s.05-.51.21-.71L8.4 6.73c.22-.26.35-.49.44-.68.09-.19.12-.38.12-.58 0-.3-.1-.55-.28-.75-.18-.19-.44-.28-.76-.28-.33 0-.59.1-.78.29-.19.19-.33.46-.4.81-.03.11-.1.15-.2.14l-1.7-.25c-.12-.01-.16-.08-.14-.19.12-.82.46-1.47 1.03-1.94.57-.48 1.32-.72 2.25-.72.47 0 .9.07 1.29.22s.72.34 1 .59c.28.25.49.55.65.89.15.35.22.72.22 1.12s-.07.75-.21 1.08z'];
var svgPaths20 = ['M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zM7.41 4.62c.65-.54 1.51-.82 2.56-.82.54 0 1.03.08 1.48.25.44.17.83.39 1.14.68.32.29.56.63.74 1.02.17.39.26.82.26 1.27s-.08.87-.24 1.23c-.16.37-.4.73-.71 1.11l-1.21 1.58c-.14.17-.28.33-.32.48-.05.15-.11.35-.11.6v.97H9v-2s.06-.58.24-.81l1.21-1.64c.25-.3.41-.56.51-.77s.14-.44.14-.67c0-.35-.11-.63-.32-.85s-.5-.33-.88-.33c-.37 0-.67.11-.89.33-.22.23-.37.54-.46.94-.03.12-.11.17-.23.16l-1.95-.29c-.12-.01-.16-.08-.14-.22.13-.93.52-1.67 1.18-2.22zM9 14h2.02L11 16H9v-2z'];
var HelpIcon = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
  return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
    svgPaths16: svgPaths16,
    svgPaths20: svgPaths20,
    ref: ref,
    name: "help"
  }, props));
}));
exports.HelpIcon = HelpIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9nZW5lcmF0ZWQvSGVscEljb24uanMiXSwibmFtZXMiOlsic3ZnUGF0aHMxNiIsInN2Z1BhdGhzMjAiLCJIZWxwSWNvbiIsInByb3BzIiwicmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQ2pCLGdnQkFEaUIsQ0FBbkI7QUFHQSxJQUFNQyxVQUFVLEdBQUcsQ0FDakIsb2hCQURpQixDQUFuQjtBQUlPLElBQU1DLFFBQVEsR0FBRyxpQkFDdEIsdUJBQVcsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSO0FBQUEsU0FDVCxnQ0FBQyxnQkFBRDtBQUNFLElBQUEsVUFBVSxFQUFFSixVQURkO0FBRUUsSUFBQSxVQUFVLEVBQUVDLFVBRmQ7QUFHRSxJQUFBLEdBQUcsRUFBRUcsR0FIUDtBQUlFLElBQUEsSUFBSSxFQUFDO0FBSlAsS0FLTUQsS0FMTixFQURTO0FBQUEsQ0FBWCxDQURzQixDQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9zcmMvSWNvbidcblxuY29uc3Qgc3ZnUGF0aHMxNiA9IFtcbiAgJ004IDBDMy41OCAwIDAgMy41OCAwIDhzMy41OCA4IDggOCA4LTMuNTggOC04LTMuNTgtOC04LTh6bTEgMTNIN3YtMmgydjJ6bTEuOTMtNi41MmMtLjE0LjMyLS4zNS42NC0uNjIuOTdMOS4yNSA4LjgzYy0uMTIuMTUtLjI0LjI5LS4yOC40Mi0uMDQuMTMtLjA5LjMtLjA5LjUyVjEwSDcuMTJWOC44OHMuMDUtLjUxLjIxLS43MUw4LjQgNi43M2MuMjItLjI2LjM1LS40OS40NC0uNjguMDktLjE5LjEyLS4zOC4xMi0uNTggMC0uMy0uMS0uNTUtLjI4LS43NS0uMTgtLjE5LS40NC0uMjgtLjc2LS4yOC0uMzMgMC0uNTkuMS0uNzguMjktLjE5LjE5LS4zMy40Ni0uNC44MS0uMDMuMTEtLjEuMTUtLjIuMTRsLTEuNy0uMjVjLS4xMi0uMDEtLjE2LS4wOC0uMTQtLjE5LjEyLS44Mi40Ni0xLjQ3IDEuMDMtMS45NC41Ny0uNDggMS4zMi0uNzIgMi4yNS0uNzIuNDcgMCAuOS4wNyAxLjI5LjIycy43Mi4zNCAxIC41OWMuMjguMjUuNDkuNTUuNjUuODkuMTUuMzUuMjIuNzIuMjIgMS4xMnMtLjA3Ljc1LS4yMSAxLjA4eidcbl1cbmNvbnN0IHN2Z1BhdGhzMjAgPSBbXG4gICdNMTAgMEM0LjQ4IDAgMCA0LjQ4IDAgMTBzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE1LjUyIDAgMTAgMHpNNy40MSA0LjYyYy42NS0uNTQgMS41MS0uODIgMi41Ni0uODIuNTQgMCAxLjAzLjA4IDEuNDguMjUuNDQuMTcuODMuMzkgMS4xNC42OC4zMi4yOS41Ni42My43NCAxLjAyLjE3LjM5LjI2LjgyLjI2IDEuMjdzLS4wOC44Ny0uMjQgMS4yM2MtLjE2LjM3LS40LjczLS43MSAxLjExbC0xLjIxIDEuNThjLS4xNC4xNy0uMjguMzMtLjMyLjQ4LS4wNS4xNS0uMTEuMzUtLjExLjZ2Ljk3SDl2LTJzLjA2LS41OC4yNC0uODFsMS4yMS0xLjY0Yy4yNS0uMy40MS0uNTYuNTEtLjc3cy4xNC0uNDQuMTQtLjY3YzAtLjM1LS4xMS0uNjMtLjMyLS44NXMtLjUtLjMzLS44OC0uMzNjLS4zNyAwLS42Ny4xMS0uODkuMzMtLjIyLjIzLS4zNy41NC0uNDYuOTQtLjAzLjEyLS4xMS4xNy0uMjMuMTZsLTEuOTUtLjI5Yy0uMTItLjAxLS4xNi0uMDgtLjE0LS4yMi4xMy0uOTMuNTItMS42NyAxLjE4LTIuMjJ6TTkgMTRoMi4wMkwxMSAxNkg5di0yeidcbl1cblxuZXhwb3J0IGNvbnN0IEhlbHBJY29uID0gbWVtbyhcbiAgZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4gKFxuICAgIDxJY29uXG4gICAgICBzdmdQYXRoczE2PXtzdmdQYXRoczE2fVxuICAgICAgc3ZnUGF0aHMyMD17c3ZnUGF0aHMyMH1cbiAgICAgIHJlZj17cmVmfVxuICAgICAgbmFtZT1cImhlbHBcIlxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICkpXG4pXG4iXX0=