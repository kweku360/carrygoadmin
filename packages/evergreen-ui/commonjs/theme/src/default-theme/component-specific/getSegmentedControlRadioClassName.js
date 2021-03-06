"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _themer = require("../../../../themer");

var _memoizeClassName = _interopRequireDefault(require("../utils/memoizeClassName"));

var _shared = require("../shared");

var defaultAppearance = _themer.Themer.createSegmentedControlRadioAppearance({
  base: _shared.defaultControlStyles.base,
  disabled: _shared.defaultControlStyles.disabled,
  hover: _shared.defaultControlStyles.hover,
  active: _shared.defaultControlStyles.active,
  focus: _shared.defaultControlStyles.focus
});
/**
 * Get the appearanece of a `SegmentedControlRadio`.
 * @param {string} appearance
 * @return {string} the appearance object.
 */


var getSegmentedControlRadioAppearance = function getSegmentedControlRadioAppearance() {
  return defaultAppearance;
};
/**
 * Get the className of a `SegmentedControlRadio`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */


var _default = (0, _memoizeClassName["default"])(getSegmentedControlRadioAppearance);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0U2VnbWVudGVkQ29udHJvbFJhZGlvQ2xhc3NOYW1lLmpzIl0sIm5hbWVzIjpbImRlZmF1bHRBcHBlYXJhbmNlIiwiVGhlbWVyIiwiY3JlYXRlU2VnbWVudGVkQ29udHJvbFJhZGlvQXBwZWFyYW5jZSIsImJhc2UiLCJkZWZhdWx0Q29udHJvbFN0eWxlcyIsImRpc2FibGVkIiwiaG92ZXIiLCJhY3RpdmUiLCJmb2N1cyIsImdldFNlZ21lbnRlZENvbnRyb2xSYWRpb0FwcGVhcmFuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHQyxlQUFPQyxxQ0FBUCxDQUE2QztBQUNyRUMsRUFBQUEsSUFBSSxFQUFFQyw2QkFBcUJELElBRDBDO0FBRXJFRSxFQUFBQSxRQUFRLEVBQUVELDZCQUFxQkMsUUFGc0M7QUFHckVDLEVBQUFBLEtBQUssRUFBRUYsNkJBQXFCRSxLQUh5QztBQUlyRUMsRUFBQUEsTUFBTSxFQUFFSCw2QkFBcUJHLE1BSndDO0FBS3JFQyxFQUFBQSxLQUFLLEVBQUVKLDZCQUFxQkk7QUFMeUMsQ0FBN0MsQ0FBMUI7QUFRQTs7Ozs7OztBQUtBLElBQU1DLGtDQUFrQyxHQUFHLFNBQXJDQSxrQ0FBcUMsR0FBTTtBQUMvQyxTQUFPVCxpQkFBUDtBQUNELENBRkQ7QUFJQTs7Ozs7OztlQUtlLGtDQUFpQlMsa0NBQWpCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZXIgfSBmcm9tICcuLi8uLi8uLi8uLi90aGVtZXInXG5pbXBvcnQgbWVtb2l6ZUNsYXNzTmFtZSBmcm9tICcuLi91dGlscy9tZW1vaXplQ2xhc3NOYW1lJ1xuaW1wb3J0IHsgZGVmYXVsdENvbnRyb2xTdHlsZXMgfSBmcm9tICcuLi9zaGFyZWQnXG5cbmNvbnN0IGRlZmF1bHRBcHBlYXJhbmNlID0gVGhlbWVyLmNyZWF0ZVNlZ21lbnRlZENvbnRyb2xSYWRpb0FwcGVhcmFuY2Uoe1xuICBiYXNlOiBkZWZhdWx0Q29udHJvbFN0eWxlcy5iYXNlLFxuICBkaXNhYmxlZDogZGVmYXVsdENvbnRyb2xTdHlsZXMuZGlzYWJsZWQsXG4gIGhvdmVyOiBkZWZhdWx0Q29udHJvbFN0eWxlcy5ob3ZlcixcbiAgYWN0aXZlOiBkZWZhdWx0Q29udHJvbFN0eWxlcy5hY3RpdmUsXG4gIGZvY3VzOiBkZWZhdWx0Q29udHJvbFN0eWxlcy5mb2N1c1xufSlcblxuLyoqXG4gKiBHZXQgdGhlIGFwcGVhcmFuZWNlIG9mIGEgYFNlZ21lbnRlZENvbnRyb2xSYWRpb2AuXG4gKiBAcGFyYW0ge3N0cmluZ30gYXBwZWFyYW5jZVxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgYXBwZWFyYW5jZSBvYmplY3QuXG4gKi9cbmNvbnN0IGdldFNlZ21lbnRlZENvbnRyb2xSYWRpb0FwcGVhcmFuY2UgPSAoKSA9PiB7XG4gIHJldHVybiBkZWZhdWx0QXBwZWFyYW5jZVxufVxuXG4vKipcbiAqIEdldCB0aGUgY2xhc3NOYW1lIG9mIGEgYFNlZ21lbnRlZENvbnRyb2xSYWRpb2AuXG4gKiBAcGFyYW0ge3N0cmluZ30gYXBwZWFyYW5jZVxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgYXBwZWFyYW5jZSBjbGFzcyBuYW1lLlxuICovXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplQ2xhc3NOYW1lKGdldFNlZ21lbnRlZENvbnRyb2xSYWRpb0FwcGVhcmFuY2UpXG4iXX0=