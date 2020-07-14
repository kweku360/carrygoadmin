import tinycolor from 'tinycolor2';
import { Themer } from '../../../../themer';
import memoizeClassName from '../utils/memoizeClassName';
import scales from '../foundational-styles/scales';
import palette from '../foundational-styles/palette';
var Appearances = {};
Appearances["default"] = Themer.createRowAppearance({
  base: {
    color: palette.neutral.base
  },
  hover: {
    backgroundColor: scales.neutral.N1A
  },
  focus: {
    backgroundColor: scales.blue.B1A
  },
  active: {
    backgroundColor: scales.blue.B2A
  },
  current: {}
});
Appearances.danger = Themer.createRowAppearance({
  base: {
    backgroundColor: palette.red.lightest
  },
  hover: {
    backgroundColor: tinycolor(palette.red.lightest).darken(1).toString()
  },
  focus: {
    backgroundColor: tinycolor(palette.red.lightest).darken(1.5).toString()
  },
  active: {
    backgroundColor: tinycolor(palette.red.lightest).darken(2.2).toString()
  },
  current: {}
});
Appearances.warning = Themer.createRowAppearance({
  base: {
    backgroundColor: palette.orange.lightest
  },
  hover: {
    backgroundColor: tinycolor(palette.orange.lightest).darken(1).toString()
  },
  focus: {
    backgroundColor: tinycolor(palette.orange.lightest).darken(1.5).toString()
  },
  active: {
    backgroundColor: tinycolor(palette.orange.lightest).darken(2.5).toString()
  },
  current: {}
});
Appearances.success = Themer.createRowAppearance({
  base: {
    backgroundColor: palette.green.lightest
  },
  hover: {
    backgroundColor: tinycolor(palette.green.lightest).darken(1).toString()
  },
  focus: {
    backgroundColor: tinycolor(palette.green.lightest).darken(2).toString()
  },
  active: {
    backgroundColor: tinycolor(palette.green.lightest).darken(3).toString()
  },
  current: {}
});
/**
 * Get the appearance of a `Row`.
 * @param {string} appearance — only one default appearance.
 * @param {string} intent - none, info, success, warning, danger.
 * @return {string} the appearance object.
 */

var getRowAppearance = function getRowAppearance(appearance, intent) {
  switch (intent) {
    case 'danger':
      return Appearances.danger;

    case 'warning':
      return Appearances.warning;

    case 'success':
      return Appearances.success;

    case 'none':
    default:
      return Appearances["default"];
  }
};
/**
 * Get the className of a `Row`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */


export default memoizeClassName(getRowAppearance);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0Um93Q2xhc3NOYW1lLmpzIl0sIm5hbWVzIjpbInRpbnljb2xvciIsIlRoZW1lciIsIm1lbW9pemVDbGFzc05hbWUiLCJzY2FsZXMiLCJwYWxldHRlIiwiQXBwZWFyYW5jZXMiLCJjcmVhdGVSb3dBcHBlYXJhbmNlIiwiYmFzZSIsImNvbG9yIiwibmV1dHJhbCIsImhvdmVyIiwiYmFja2dyb3VuZENvbG9yIiwiTjFBIiwiZm9jdXMiLCJibHVlIiwiQjFBIiwiYWN0aXZlIiwiQjJBIiwiY3VycmVudCIsImRhbmdlciIsInJlZCIsImxpZ2h0ZXN0IiwiZGFya2VuIiwidG9TdHJpbmciLCJ3YXJuaW5nIiwib3JhbmdlIiwic3VjY2VzcyIsImdyZWVuIiwiZ2V0Um93QXBwZWFyYW5jZSIsImFwcGVhcmFuY2UiLCJpbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxNQUFULFFBQXVCLG9CQUF2QjtBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLDJCQUE3QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsK0JBQW5CO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQixnQ0FBcEI7QUFFQSxJQUFNQyxXQUFXLEdBQUcsRUFBcEI7QUFFQUEsV0FBVyxXQUFYLEdBQXNCSixNQUFNLENBQUNLLG1CQUFQLENBQTJCO0FBQy9DQyxFQUFBQSxJQUFJLEVBQUU7QUFDSkMsSUFBQUEsS0FBSyxFQUFFSixPQUFPLENBQUNLLE9BQVIsQ0FBZ0JGO0FBRG5CLEdBRHlDO0FBSy9DRyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsZUFBZSxFQUFFUixNQUFNLENBQUNNLE9BQVAsQ0FBZUc7QUFEM0IsR0FMd0M7QUFTL0NDLEVBQUFBLEtBQUssRUFBRTtBQUNMRixJQUFBQSxlQUFlLEVBQUVSLE1BQU0sQ0FBQ1csSUFBUCxDQUFZQztB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Q0FDUCxDQURPLEVBRWRDLFFBRmM7QUFEWCxHQWpCdUM7QUF1Qi9DTCxFQUFBQSxPQUFPLEVBQUU7QUF2QnNDLENBQTNCLENBQXRCO0FBMEJBOzs7Ozs7O0FBTUEsSUFBTVUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxVQUFELEVBQWFDLE1BQWIsRUFBd0I7QUFDL0MsVUFBUUEsTUFBUjtBQUNFLFNBQUssUUFBTDtBQUNFLGFBQU96QixXQUFXLENBQUNjLE1BQW5COztBQUNGLFNBQUssU0FBTDtBQUNFLGFBQU9kLFdBQVcsQ0FBQ21CLE9BQW5COztBQUNGLFNBQUssU0FBTDtBQUNFLGFBQU9uQixXQUFXLENBQUNxQixPQUFuQjs7QUFDRixTQUFLLE1BQUw7QUFDQTtBQUNFLGFBQU9yQixXQUFXLFdBQWxCO0FBVEo7QUFXRCxDQVpEO0FBY0E7Ozs7Ozs7QUFLQSxlQUFlSCxnQkFBZ0IsQ0FBQzBCLGdCQUFELENBQS9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRpbnljb2xvciBmcm9tICd0aW55Y29sb3IyJ1xuaW1wb3J0IHsgVGhlbWVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdGhlbWVyJ1xuaW1wb3J0IG1lbW9pemVDbGFzc05hbWUgZnJvbSAnLi4vdXRpbHMvbWVtb2l6ZUNsYXNzTmFtZSdcbmltcG9ydCBzY2FsZXMgZnJvbSAnLi4vZm91bmRhdGlvbmFsLXN0eWxlcy9zY2FsZXMnXG5pbXBvcnQgcGFsZXR0ZSBmcm9tICcuLi9mb3VuZGF0aW9uYWwtc3R5bGVzL3BhbGV0dGUnXG5cbmNvbnN0IEFwcGVhcmFuY2VzID0ge31cblxuQXBwZWFyYW5jZXMuZGVmYXVsdCA9IFRoZW1lci5jcmVhdGVSb3dBcHBlYXJhbmNlKHtcbiAgYmFzZToge1xuICAgIGNvbG9yOiBwYWxldHRlLm5ldXRyYWwuYmFzZVxuICB9LFxuXG4gIGhvdmVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBzY2FsZXMubmV1dHJhbC5OMUFcbiAgfSxcblxuICBmb2N1czoge1xuICAgIGJhY2tncm91bmRDb2xvcjogc2NhbGVzLmJsdWUuQjFBXG4gIH0sXG5cbiAgYWN0aXZlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBzY2FsZXMuYmx1ZS5CMkFcbiAgfSxcblxuICBjdXJyZW50OiB7fVxufSlcblxuQXBwZWFyYW5jZXMuZGFuZ2VyID0gVGhlbWVyLmNyZWF0ZVJvd0FwcGVhcmFuY2Uoe1xuICBiYXNlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBwYWxldHRlLnJlZC5saWdodGVzdFxuICB9LFxuXG4gIGhvdmVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aW55Y29sb3IocGFsZXR0ZS5yZWQubGlnaHRlc3QpXG4gICAgICAuZGFya2VuKDEpXG4gICAgICAudG9TdHJpbmcoKVxuICB9LFxuXG4gIGZvY3VzOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aW55Y29sb3IocGFsZXR0ZS5yZWQubGlnaHRlc3QpXG4gICAgICAuZGFya2VuKDEuNSlcbiAgICAgIC50b1N0cmluZygpXG4gIH0sXG5cbiAgYWN0aXZlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aW55Y29sb3IocGFsZXR0ZS5yZWQubGlnaHRlc3QpXG4gICAgICAuZGFya2VuKDIuMilcbiAgICAgIC50b1N0cmluZygpXG4gIH0sXG5cbiAgY3VycmVudDoge31cbn0pXG5cbkFwcGVhcmFuY2VzLndhcm5pbmcgPSBUaGVtZXIuY3JlYXRlUm93QXBwZWFyYW5jZSh7XG4gIGJhc2U6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhbGV0dGUub3JhbmdlLmxpZ2h0ZXN0XG4gIH0sXG5cbiAgaG92ZXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRpbnljb2xvcihwYWxldHRlLm9yYW5nZS5saWdodGVzdClcbiAgICAgIC5kYXJrZW4oMSlcbiAgICAgIC50b1N0cmluZygpXG4gIH0sXG5cbiAgZm9jdXM6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRpbnljb2xvcihwYWxldHRlLm9yYW5nZS5saWdodGVzdClcbiAgICAgIC5kYXJrZW4oMS41KVxuICAgICAgLnRvU3RyaW5nKClcbiAgfSxcblxuICBhY3RpdmU6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRpbnljb2xvcihwYWxldHRlLm9yYW5nZS5saWdodGVzdClcbiAgICAgIC5kYXJrZW4oMi41KVxuICAgICAgLnRvU3RyaW5nKClcbiAgfSxcblxuICBjdXJyZW50OiB7fVxufSlcblxuQXBwZWFyYW5jZXMuc3VjY2VzcyA9IFRoZW1lci5jcmVhdGVSb3dBcHBlYXJhbmNlKHtcbiAgYmFzZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogcGFsZXR0ZS5ncmVlbi5saWdodGVzdFxuICB9LFxuXG4gIGhvdmVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aW55Y29sb3IocGFsZXR0ZS5ncmVlbi5saWdodGVzdClcbiAgICAgIC5kYXJrZW4oMSlcbiAgICAgIC50b1N0cmluZygpXG4gIH0sXG5cbiAgZm9jdXM6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRpbnljb2xvcihwYWxldHRlLmdyZWVuLmxpZ2h0ZXN0KVxuICAgICAgLmRhcmtlbigyKVxuICAgICAgLnRvU3RyaW5nKClcbiAgfSxcblxuICBhY3RpdmU6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRpbnljb2xvcihwYWxldHRlLmdyZWVuLmxpZ2h0ZXN0KVxuICAgICAgLmRhcmtlbigzKVxuICAgICAgLnRvU3RyaW5nKClcbiAgfSxcblxuICBjdXJyZW50OiB7fVxufSlcblxuLyoqXG4gKiBHZXQgdGhlIGFwcGVhcmFuY2Ugb2YgYSBgUm93YC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhcHBlYXJhbmNlIOKAlCBvbmx5IG9uZSBkZWZhdWx0IGFwcGVhcmFuY2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gaW50ZW50IC0gbm9uZSwgaW5mbywgc3VjY2Vzcywgd2FybmluZywgZGFuZ2VyLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgYXBwZWFyYW5jZSBvYmplY3QuXG4gKi9cbmNvbnN0IGdldFJvd0FwcGVhcmFuY2UgPSAoYXBwZWFyYW5jZSwgaW50ZW50KSA9PiB7XG4gIHN3aXRjaCAoaW50ZW50KSB7XG4gICAgY2FzZSAnZGFuZ2VyJzpcbiAgICAgIHJldHVybiBBcHBlYXJhbmNlcy5kYW5nZXJcbiAgICBjYXNlICd3YXJuaW5nJzpcbiAgICAgIHJldHVybiBBcHBlYXJhbmNlcy53YXJuaW5nXG4gICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICByZXR1cm4gQXBwZWFyYW5jZXMuc3VjY2Vzc1xuICAgIGNhc2UgJ25vbmUnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gQXBwZWFyYW5jZXMuZGVmYXVsdFxuICB9XG59XG5cbi8qKlxuICogR2V0IHRoZSBjbGFzc05hbWUgb2YgYSBgUm93YC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhcHBlYXJhbmNlXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBhcHBlYXJhbmNlIGNsYXNzIG5hbWUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemVDbGFzc05hbWUoZ2V0Um93QXBwZWFyYW5jZSlcbiJdfQ==