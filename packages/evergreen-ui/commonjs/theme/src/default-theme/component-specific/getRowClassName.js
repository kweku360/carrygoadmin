"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _tinycolor = _interopRequireDefault(require("tinycolor2"));

var _themer = require("../../../../themer");

var _memoizeClassName = _interopRequireDefault(require("../utils/memoizeClassName"));

var _scales = _interopRequireDefault(require("../foundational-styles/scales"));

var _palette = _interopRequireDefault(require("../foundational-styles/palette"));

var Appearances = {};
Appearances["default"] = _themer.Themer.createRowAppearance({
  base: {
    color: _palette["default"].neutral.base
  },
  hover: {
    backgroundColor: _scales["default"].neutral.N1A
  },
  focus: {
    backgroundColor: _scales["default"].blue.B1A
  },
  active: {
    backgroundColor: _scales["default"].blue.B2A
  },
  current: {}
});
Appearances.danger = _themer.Themer.createRowAppearance({
  base: {
    backgroundColor: _palette["default"].red.lightest
  },
  hover: {
    backgroundColor: (0, _tinycolor["default"])(_palette["default"].red.lightest).darken(1).toString()
  },
  focus: {
    backgroundColor: (0, _tinycolor["default"])(_palette["default"].red.lightest).darken(1.5).toString()
  },
  active: {
    backgroundColor: (0, _tinycolor["default"])(_palette["default"].red.lightest).darken(2.2).toString()
  },
  current: {}
});
Appearances.warning = _themer.Themer.createRowAppearance({
  base: {
    backgroundColor: _palette["default"].orange.lightest
  },
  hover: {
    backgroundColor: (0, _tinycolor["default"])(_palette["default"].orange.lightest).darken(1).toString()
  },
  focus: {
    backgroundColor: (0, _tinycolor["default"])(_palette["default"].orange.lightest).darken(1.5).toString()
  },
  active: {
    backgroundColor: (0, _tinycolor["default"])(_palette["default"].orange.lightest).darken(2.5).toString()
  },
  current: {}
});
Appearances.success = _themer.Themer.createRowAppearance({
  base: {
    backgroundColor: _palette["default"].green.lightest
  },
  hover: {
    backgroundColor: (0, _tinycolor["default"])(_palette["default"].green.lightest).darken(1).toString()
  },
  focus: {
    backgroundColor: (0, _tinycolor["default"])(_palette["default"].green.lightest).darken(2).toString()
  },
  active: {
    backgroundColor: (0, _tinycolor["default"])(_palette["default"].green.lightest).darken(3).toString()
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


var _default = (0, _memoizeClassName["default"])(getRowAppearance);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0Um93Q2xhc3NOYW1lLmpzIl0sIm5hbWVzIjpbIkFwcGVhcmFuY2VzIiwiVGhlbWVyIiwiY3JlYXRlUm93QXBwZWFyYW5jZSIsImJhc2UiLCJjb2xvciIsInBhbGV0dGUiLCJuZXV0cmFsIiwiaG92ZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzY2FsZXMiLCJOMUEiLCJmb2N1cyIsImJsdWUiLCJCMUEiLCJhY3RpdmUiLCJCMkEiLCJjdXJyZW50IiwiZGFuZ2VyIiwicmVkIiwibGlnaHRlc3QiLCJkYXJrZW4iLCJ0b1N0cmluZyIsIndhcm5pbmciLCJvcmFuZ2UiLCJzdWNjZXNzIiwiZ3JlZW4iLCJnZXRSb3dBcHBlYXJhbmNlIiwiYXBwZWFyYW5jZSIsImludGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLEVBQXBCO0FBRUFBLFdBQVcsV0FBWCxHQUFzQkMsZUFBT0MsbUJBQVAsQ0FBMkI7QUFDL0NDLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxLQUFLLEVBQUVDLG9CQUFRQyxPQUFSLENBQWdCSDtBQURuQixHQUR5QztBQUsvQ0ksRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLGVBQWUsRUFBRUMsbUJBQU9ILE9BQVAsQ0FBZUk7QUFEM0IsR0FMd0M7QUFTL0NDLEVBQUFBLEtBQUssRUFBRTtBQUNMSCxJQUFBQSxlQUFlLEVBQUVDLG1CQUFPRyxJQUFQLENBQVlDO0FBRHhCLEdBVHdDO0FBYS9DQyxFQUFBQSxNQUFNLEVBQUU7QUFDTk4sSUFBQUEsZUFBZSxFQUFFQyxtQkFBT0csSUFBUCxDQUFZRztBQUR2QixHQWJ1QztBQWlCL0NDLEVBQUFBLE9BQU8sRUFBRTtBQWpCc0MsQ0FBM0IsQ0FBdEI7QUFvQkFoQixXQUFXLENBQUNpQixNQUFa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Qjs7QUFDRixTQUFLLE1BQUw7QUFDQTtBQUNFLGFBQU94QixXQUFXLFdBQWxCO0FBVEo7QUFXRCxDQVpEO0FBY0E7Ozs7Ozs7ZUFLZSxrQ0FBaUIwQixnQkFBakIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0aW55Y29sb3IgZnJvbSAndGlueWNvbG9yMidcbmltcG9ydCB7IFRoZW1lciB9IGZyb20gJy4uLy4uLy4uLy4uL3RoZW1lcidcbmltcG9ydCBtZW1vaXplQ2xhc3NOYW1lIGZyb20gJy4uL3V0aWxzL21lbW9pemVDbGFzc05hbWUnXG5pbXBvcnQgc2NhbGVzIGZyb20gJy4uL2ZvdW5kYXRpb25hbC1zdHlsZXMvc2NhbGVzJ1xuaW1wb3J0IHBhbGV0dGUgZnJvbSAnLi4vZm91bmRhdGlvbmFsLXN0eWxlcy9wYWxldHRlJ1xuXG5jb25zdCBBcHBlYXJhbmNlcyA9IHt9XG5cbkFwcGVhcmFuY2VzLmRlZmF1bHQgPSBUaGVtZXIuY3JlYXRlUm93QXBwZWFyYW5jZSh7XG4gIGJhc2U6IHtcbiAgICBjb2xvcjogcGFsZXR0ZS5uZXV0cmFsLmJhc2VcbiAgfSxcblxuICBob3Zlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogc2NhbGVzLm5ldXRyYWwuTjFBXG4gIH0sXG5cbiAgZm9jdXM6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHNjYWxlcy5ibHVlLkIxQVxuICB9LFxuXG4gIGFjdGl2ZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogc2NhbGVzLmJsdWUuQjJBXG4gIH0sXG5cbiAgY3VycmVudDoge31cbn0pXG5cbkFwcGVhcmFuY2VzLmRhbmdlciA9IFRoZW1lci5jcmVhdGVSb3dBcHBlYXJhbmNlKHtcbiAgYmFzZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogcGFsZXR0ZS5yZWQubGlnaHRlc3RcbiAgfSxcblxuICBob3Zlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGlueWNvbG9yKHBhbGV0dGUucmVkLmxpZ2h0ZXN0KVxuICAgICAgLmRhcmtlbigxKVxuICAgICAgLnRvU3RyaW5nKClcbiAgfSxcblxuICBmb2N1czoge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGlueWNvbG9yKHBhbGV0dGUucmVkLmxpZ2h0ZXN0KVxuICAgICAgLmRhcmtlbigxLjUpXG4gICAgICAudG9TdHJpbmcoKVxuICB9LFxuXG4gIGFjdGl2ZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGlueWNvbG9yKHBhbGV0dGUucmVkLmxpZ2h0ZXN0KVxuICAgICAgLmRhcmtlbigyLjIpXG4gICAgICAudG9TdHJpbmcoKVxuICB9LFxuXG4gIGN1cnJlbnQ6IHt9XG59KVxuXG5BcHBlYXJhbmNlcy53YXJuaW5nID0gVGhlbWVyLmNyZWF0ZVJvd0FwcGVhcmFuY2Uoe1xuICBiYXNlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBwYWxldHRlLm9yYW5nZS5saWdodGVzdFxuICB9LFxuXG4gIGhvdmVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aW55Y29sb3IocGFsZXR0ZS5vcmFuZ2UubGlnaHRlc3QpXG4gICAgICAuZGFya2VuKDEpXG4gICAgICAudG9TdHJpbmcoKVxuICB9LFxuXG4gIGZvY3VzOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aW55Y29sb3IocGFsZXR0ZS5vcmFuZ2UubGlnaHRlc3QpXG4gICAgICAuZGFya2VuKDEuNSlcbiAgICAgIC50b1N0cmluZygpXG4gIH0sXG5cbiAgYWN0aXZlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aW55Y29sb3IocGFsZXR0ZS5vcmFuZ2UubGlnaHRlc3QpXG4gICAgICAuZGFya2VuKDIuNSlcbiAgICAgIC50b1N0cmluZygpXG4gIH0sXG5cbiAgY3VycmVudDoge31cbn0pXG5cbkFwcGVhcmFuY2VzLnN1Y2Nlc3MgPSBUaGVtZXIuY3JlYXRlUm93QXBwZWFyYW5jZSh7XG4gIGJhc2U6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhbGV0dGUuZ3JlZW4ubGlnaHRlc3RcbiAgfSxcblxuICBob3Zlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGlueWNvbG9yKHBhbGV0dGUuZ3JlZW4ubGlnaHRlc3QpXG4gICAgICAuZGFya2VuKDEpXG4gICAgICAudG9TdHJpbmcoKVxuICB9LFxuXG4gIGZvY3VzOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aW55Y29sb3IocGFsZXR0ZS5ncmVlbi5saWdodGVzdClcbiAgICAgIC5kYXJrZW4oMilcbiAgICAgIC50b1N0cmluZygpXG4gIH0sXG5cbiAgYWN0aXZlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aW55Y29sb3IocGFsZXR0ZS5ncmVlbi5saWdodGVzdClcbiAgICAgIC5kYXJrZW4oMylcbiAgICAgIC50b1N0cmluZygpXG4gIH0sXG5cbiAgY3VycmVudDoge31cbn0pXG5cbi8qKlxuICogR2V0IHRoZSBhcHBlYXJhbmNlIG9mIGEgYFJvd2AuXG4gKiBAcGFyYW0ge3N0cmluZ30gYXBwZWFyYW5jZSDigJQgb25seSBvbmUgZGVmYXVsdCBhcHBlYXJhbmNlLlxuICogQHBhcmFtIHtzdHJpbmd9IGludGVudCAtIG5vbmUsIGluZm8sIHN1Y2Nlc3MsIHdhcm5pbmcsIGRhbmdlci5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGFwcGVhcmFuY2Ugb2JqZWN0LlxuICovXG5jb25zdCBnZXRSb3dBcHBlYXJhbmNlID0gKGFwcGVhcmFuY2UsIGludGVudCkgPT4ge1xuICBzd2l0Y2ggKGludGVudCkge1xuICAgIGNhc2UgJ2Rhbmdlcic6XG4gICAgICByZXR1cm4gQXBwZWFyYW5jZXMuZGFuZ2VyXG4gICAgY2FzZSAnd2FybmluZyc6XG4gICAgICByZXR1cm4gQXBwZWFyYW5jZXMud2FybmluZ1xuICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgcmV0dXJuIEFwcGVhcmFuY2VzLnN1Y2Nlc3NcbiAgICBjYXNlICdub25lJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIEFwcGVhcmFuY2VzLmRlZmF1bHRcbiAgfVxufVxuXG4vKipcbiAqIEdldCB0aGUgY2xhc3NOYW1lIG9mIGEgYFJvd2AuXG4gKiBAcGFyYW0ge3N0cmluZ30gYXBwZWFyYW5jZVxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgYXBwZWFyYW5jZSBjbGFzcyBuYW1lLlxuICovXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplQ2xhc3NOYW1lKGdldFJvd0FwcGVhcmFuY2UpXG4iXX0=