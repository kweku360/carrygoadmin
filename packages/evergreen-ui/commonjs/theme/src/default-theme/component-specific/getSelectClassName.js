"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _themer = require("../../../../themer");

var _memoizeClassName = _interopRequireDefault(require("../utils/memoizeClassName"));

var _shared = require("../shared");

var _scales = _interopRequireDefault(require("../foundational-styles/scales"));

var _palette = _interopRequireDefault(require("../foundational-styles/palette"));

var SelectAppearances = {};
SelectAppearances["default"] = _themer.Themer.createSelectAppearance({
  base: _shared.defaultControlStyles.base,
  disabled: _shared.defaultControlStyles.disabled,
  invalid: {
    boxShadow: "inset 0 0 0 1px ".concat(_palette["default"].red.base, ", inset 0 1px 2px ").concat(_scales["default"].neutral.N4A)
  },
  hover: _shared.defaultControlStyles.hover,
  focus: _shared.defaultControlStyles.focus,
  active: _shared.defaultControlStyles.active
});
/**
 * Get the appearance of a `Select`.
 * @param {string} appearance
 * @return {string} the appearance object.
 */

var getSelectAppearance = function getSelectAppearance() {
  return SelectAppearances["default"];
};
/**
 * Get the className of a `Select`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */


var _default = (0, _memoizeClassName["default"])(getSelectAppearance);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0U2VsZWN0Q2xhc3NOYW1lLmpzIl0sIm5hbWVzIjpbIlNlbGVjdEFwcGVhcmFuY2VzIiwiVGhlbWVyIiwiY3JlYXRlU2VsZWN0QXBwZWFyYW5jZSIsImJhc2UiLCJkZWZhdWx0Q29udHJvbFN0eWxlcyIsImRpc2FibGVkIiwiaW52YWxpZCIsImJveFNoYWRvdyIsInBhbGV0dGUiLCJyZWQiLCJzY2FsZXMiLCJuZXV0cmFsIiwiTjRBIiwiaG92ZXIiLCJmb2N1cyIsImFjdGl2ZSIsImdldFNlbGVjdEFwcGVhcmFuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLEVBQTFCO0FBRUFBLGlCQUFpQixXQUFqQixHQUE0QkMsZUFBT0Msc0JBQVAsQ0FBOEI7QUFDeERDLEVBQUFBLElBQUksRUFBRUMsNkJBQXFCRCxJQUQ2QjtBQUV4REUsRUFBQUEsUUFBUSxFQUFFRCw2QkFBcUJDLFFBRnlCO0FBR3hEQyxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsU0FBUyw0QkFBcUJDLG9CQUFRQyxHQUFSLENBQVlOLElBQWpDLCtCQUNQTyxtQkFBT0MsT0FBUCxDQUFlQyxHQURSO0FBREYsR0FIK0M7QUFReERDLEVBQUFBLEtBQUssRUFBRVQsNkJBQXFCUyxLQVI0QjtBQVN4REMsRUFBQUEsS0FBSyxFQUFFViw2QkFBcUJVLEtBVDRCO0FBVXhEQyxFQUFBQSxNQUFNLEVBQUVYLDZCQUFxQlc7QUFWMkIsQ0FBOUIsQ0FBNUI7QUFhQTs7Ozs7O0FBS0EsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ2hDLFNBQU9oQixpQkFBaUIsV0FBeEI7QUFDRCxDQUZEO0FBSUE7Ozs7Ozs7ZUFLZSxrQ0FBaUJnQixtQkFBakIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lciB9IGZyb20gJy4uLy4uLy4uLy4uL3RoZW1lcidcbmltcG9ydCBtZW1vaXplQ2xhc3NOYW1lIGZyb20gJy4uL3V0aWxzL21lbW9pemVDbGFzc05hbWUnXG5pbXBvcnQgeyBkZWZhdWx0Q29udHJvbFN0eWxlcyB9IGZyb20gJy4uL3NoYXJlZCdcbmltcG9ydCBzY2FsZXMgZnJvbSAnLi4vZm91bmRhdGlvbmFsLXN0eWxlcy9zY2FsZXMnXG5pbXBvcnQgcGFsZXR0ZSBmcm9tICcuLi9mb3VuZGF0aW9uYWwtc3R5bGVzL3BhbGV0dGUnXG5cbmNvbnN0IFNlbGVjdEFwcGVhcmFuY2VzID0ge31cblxuU2VsZWN0QXBwZWFyYW5jZXMuZGVmYXVsdCA9IFRoZW1lci5jcmVhdGVTZWxlY3RBcHBlYXJhbmNlKHtcbiAgYmFzZTogZGVmYXVsdENvbnRyb2xTdHlsZXMuYmFzZSxcbiAgZGlzYWJsZWQ6IGRlZmF1bHRDb250cm9sU3R5bGVzLmRpc2FibGVkLFxuICBpbnZhbGlkOiB7XG4gICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7cGFsZXR0ZS5yZWQuYmFzZX0sIGluc2V0IDAgMXB4IDJweCAke1xuICAgICAgc2NhbGVzLm5ldXRyYWwuTjRBXG4gICAgfWBcbiAgfSxcbiAgaG92ZXI6IGRlZmF1bHRDb250cm9sU3R5bGVzLmhvdmVyLFxuICBmb2N1czogZGVmYXVsdENvbnRyb2xTdHlsZXMuZm9jdXMsXG4gIGFjdGl2ZTogZGVmYXVsdENvbnRyb2xTdHlsZXMuYWN0aXZlXG59KVxuXG4vKipcbiAqIEdldCB0aGUgYXBwZWFyYW5jZSBvZiBhIGBTZWxlY3RgLlxuICogQHBhcmFtIHtzdHJpbmd9IGFwcGVhcmFuY2VcbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGFwcGVhcmFuY2Ugb2JqZWN0LlxuICovXG5jb25zdCBnZXRTZWxlY3RBcHBlYXJhbmNlID0gKCkgPT4ge1xuICByZXR1cm4gU2VsZWN0QXBwZWFyYW5jZXMuZGVmYXVsdFxufVxuXG4vKipcbiAqIEdldCB0aGUgY2xhc3NOYW1lIG9mIGEgYFNlbGVjdGAuXG4gKiBAcGFyYW0ge3N0cmluZ30gYXBwZWFyYW5jZVxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgYXBwZWFyYW5jZSBjbGFzcyBuYW1lLlxuICovXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplQ2xhc3NOYW1lKGdldFNlbGVjdEFwcGVhcmFuY2UpXG4iXX0=