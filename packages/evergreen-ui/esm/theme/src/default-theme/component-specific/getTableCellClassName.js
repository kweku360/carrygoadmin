import { Themer } from '../../../../themer';
import memoizeClassName from '../utils/memoizeClassName';
import scales from '../foundational-styles/scales';
var Appearances = {};
Appearances["default"] = Themer.createTableCellAppearance({
  focus: {
    outline: 'none',
    backgroundColor: scales.blue.B2A,
    boxShadow: "inset 0 0 0 1px ".concat(scales.blue.B7A)
  }
});
/**
 * Get the appearance of a `TableCell`.
 * @param {string} appearance
 * @return {string} the appearance object.
 */

var getAppearance = function getAppearance() {
  return Appearances["default"];
};
/**
 * Get the className of a `Table.EditableCell`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */


export default memoizeClassName(getAppearance);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0VGFibGVDZWxsQ2xhc3NOYW1lLmpzIl0sIm5hbWVzIjpbIlRoZW1lciIsIm1lbW9pemVDbGFzc05hbWUiLCJzY2FsZXMiLCJBcHBlYXJhbmNlcyIsImNyZWF0ZVRhYmxlQ2VsbEFwcGVhcmFuY2UiLCJmb2N1cyIsIm91dGxpbmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJibHVlIiwiQjJBIiwiYm94U2hhZG93IiwiQjdBIiwiZ2V0QXBwZWFyYW5jZSJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsTUFBVCxRQUF1QixvQkFBdkI7QUFDQSxPQUFPQyxnQkFBUCxNQUE2QiwyQkFBN0I7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLCtCQUFuQjtBQUVBLElBQU1DLFdBQVcsR0FBRyxFQUFwQjtBQUVBQSxXQUFXLFdBQVgsR0FBc0JILE1BQU0sQ0FBQ0kseUJBQVAsQ0FBaUM7QUFDckRDLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxPQUFPLEVBQUUsTUFESjtBQUVMQyxJQUFBQSxlQUFlLEVBQUVMLE1BQU0sQ0FBQ00sSUFBUCxDQUFZQyxHQUZ4QjtBQUdMQyxJQUFBQSxTQUFTLDRCQUFxQlIsTUFBTSxDQUFDTSxJQUFQLENBQVlHLEdBQWpDO0FBSEo7QUFEOEMsQ0FBakMsQ0FBdEI7QUFRQTs7Ozs7O0FBS0EsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCLFNBQU9ULFdBQVcsV0FBbEI7QUFDRCxDQUZEO0FBSUE7Ozs7Ozs7QUFLQSxlQUFlRixnQkFBZ0IsQ0FBQ1csYUFBRCxDQUEvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lciB9IGZyb20gJy4uLy4uLy4uLy4uL3RoZW1lcidcbmltcG9ydCBtZW1vaXplQ2xhc3NOYW1lIGZyb20gJy4uL3V0aWxzL21lbW9pemVDbGFzc05hbWUnXG5pbXBvcnQgc2NhbGVzIGZyb20gJy4uL2ZvdW5kYXRpb25hbC1zdHlsZXMvc2NhbGVzJ1xuXG5jb25zdCBBcHBlYXJhbmNlcyA9IHt9XG5cbkFwcGVhcmFuY2VzLmRlZmF1bHQgPSBUaGVtZXIuY3JlYXRlVGFibGVDZWxsQXBwZWFyYW5jZSh7XG4gIGZvY3VzOiB7XG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogc2NhbGVzLmJsdWUuQjJBLFxuICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke3NjYWxlcy5ibHVlLkI3QX1gXG4gIH1cbn0pXG5cbi8qKlxuICogR2V0IHRoZSBhcHBlYXJhbmNlIG9mIGEgYFRhYmxlQ2VsbGAuXG4gKiBAcGFyYW0ge3N0cmluZ30gYXBwZWFyYW5jZVxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgYXBwZWFyYW5jZSBvYmplY3QuXG4gKi9cbmNvbnN0IGdldEFwcGVhcmFuY2UgPSAoKSA9PiB7XG4gIHJldHVybiBBcHBlYXJhbmNlcy5kZWZhdWx0XG59XG5cbi8qKlxuICogR2V0IHRoZSBjbGFzc05hbWUgb2YgYSBgVGFibGUuRWRpdGFibGVDZWxsYC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhcHBlYXJhbmNlXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBhcHBlYXJhbmNlIGNsYXNzIG5hbWUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemVDbGFzc05hbWUoZ2V0QXBwZWFyYW5jZSlcbiJdfQ==