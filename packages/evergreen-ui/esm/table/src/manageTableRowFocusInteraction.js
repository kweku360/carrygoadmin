/**
 * Function to help with focus management for selectable table rows.
 * @param {Object} key - React `event.key`.
 * @param {Element} ref - the cell to manage focus interaction for.
 */
export default function manageTableRowFocusInteraction(key, ref) {
  var nextItemToFocus; // eslint-disable-next-line unicorn/prefer-spread

  var tableBodyChildren = Array.from(ref.parentElement.children);
  var rowIndex = tableBodyChildren.indexOf(ref);

  if (key === 'ArrowUp' && rowIndex - 1 >= 0) {
    nextItemToFocus = tableBodyChildren[rowIndex - 1];
  } else if (key === 'ArrowDown' && rowIndex + 1 < tableBodyChildren.length) {
    nextItemToFocus = tableBodyChildren[rowIndex + 1];
  }

  if (nextItemToFocus && nextItemToFocus.hasAttribute('tabindex')) {
    nextItemToFocus.focus();
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvbWFuYWdlVGFibGVSb3dGb2N1c0ludGVyYWN0aW9uLmpzIl0sIm5hbWVzIjpbIm1hbmFnZVRhYmxlUm93Rm9jdXNJbnRlcmFjdGlvbiIsImtleSIsInJlZiIsIm5leHRJdGVtVG9Gb2N1cyIsInRhYmxlQm9keUNoaWxkcmVuIiwiQXJyYXkiLCJmcm9tIiwicGFyZW50RWxlbWVudCIsImNoaWxkcmVuIiwicm93SW5kZXgiLCJpbmRleE9mIiwibGVuZ3RoIiwiaGFzQXR0cmlidXRlIiwiZm9jdXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBLGVBQWUsU0FBU0EsOEJBQVQsQ0FBd0NDLEdBQXhDLEVBQTZDQyxHQUE3QyxFQUFrRDtBQUMvRCxNQUFJQyxlQUFKLENBRCtELENBRS9EOztBQUNBLE1BQU1DLGlCQUFpQixHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FBV0osR0FBRyxDQUFDSyxhQUFKLENBQWtCQyxRQUE3QixDQUExQjtBQUNBLE1BQU1DLFFBQVEsR0FBR0wsaUJBQWlCLENBQUNNLE9BQWxCLENBQTBCUixHQUExQixDQUFqQjs7QUFFQSxNQUFJRCxHQUFHLEtBQUssU0FBUixJQUFxQlEsUUFBUSxHQUFHLENBQVgsSUFBZ0IsQ0FBekMsRUFBNEM7QUFDMUNOLElBQUFBLGVBQWUsR0FBR0MsaUJBQWlCLENBQUNLLFFBQVEsR0FBRyxDQUFaLENBQW5DO0FBQ0QsR0FGRCxNQUVPLElBQUlSLEdBQUcsS0FBSyxXQUFSLElBQXVCUSxRQUFRLEdBQUcsQ0FBWCxHQUFlTCxpQkFBaUIsQ0FBQ08sTUFBNUQsRUFBb0U7QUFDekVSLElBQUFBLGVBQWUsR0FBR0MsaUJBQWlCLENBQUNLLFFBQVEsR0FBRyxDQUFaLENBQW5DO0FBQ0Q7O0FBRUQsTUFBSU4sZUFBZSxJQUFJQSxlQUFlLENBQUNTLFlBQWhCLENBQTZCLFVBQTdCLENBQXZCLEVBQWlFO0FBQy9EVCxJQUFBQSxlQUFlLENBQUNVLEtBQWhCO0FBQ0Q7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRnVuY3Rpb24gdG8gaGVscCB3aXRoIGZvY3VzIG1hbmFnZW1lbnQgZm9yIHNlbGVjdGFibGUgdGFibGUgcm93cy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBrZXkgLSBSZWFjdCBgZXZlbnQua2V5YC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gcmVmIC0gdGhlIGNlbGwgdG8gbWFuYWdlIGZvY3VzIGludGVyYWN0aW9uIGZvci5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFuYWdlVGFibGVSb3dGb2N1c0ludGVyYWN0aW9uKGtleSwgcmVmKSB7XG4gIGxldCBuZXh0SXRlbVRvRm9jdXNcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLXNwcmVhZFxuICBjb25zdCB0YWJsZUJvZHlDaGlsZHJlbiA9IEFycmF5LmZyb20ocmVmLnBhcmVudEVsZW1lbnQuY2hpbGRyZW4pXG4gIGNvbnN0IHJvd0luZGV4ID0gdGFibGVCb2R5Q2hpbGRyZW4uaW5kZXhPZihyZWYpXG5cbiAgaWYgKGtleSA9PT0gJ0Fycm93VXAnICYmIHJvd0luZGV4IC0gMSA+PSAwKSB7XG4gICAgbmV4dEl0ZW1Ub0ZvY3VzID0gdGFibGVCb2R5Q2hpbGRyZW5bcm93SW5kZXggLSAxXVxuICB9IGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93RG93bicgJiYgcm93SW5kZXggKyAxIDwgdGFibGVCb2R5Q2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgbmV4dEl0ZW1Ub0ZvY3VzID0gdGFibGVCb2R5Q2hpbGRyZW5bcm93SW5kZXggKyAxXVxuICB9XG5cbiAgaWYgKG5leHRJdGVtVG9Gb2N1cyAmJiBuZXh0SXRlbVRvRm9jdXMuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgbmV4dEl0ZW1Ub0ZvY3VzLmZvY3VzKClcbiAgfVxufVxuIl19