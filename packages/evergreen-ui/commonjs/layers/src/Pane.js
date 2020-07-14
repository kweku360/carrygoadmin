"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _glamor = require("glamor");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _theme = require("../../theme");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var StringAndBoolPropType = _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].bool]);

var Pane = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
  var background = props.background,
      elevation = props.elevation,
      hoverElevation = props.hoverElevation,
      activeElevation = props.activeElevation,
      border = props.border,
      borderTop = props.borderTop,
      borderRight = props.borderRight,
      borderBottom = props.borderBottom,
      borderLeft = props.borderLeft,
      _props$css = props.css,
      css = _props$css === void 0 ? {} : _props$css,
      restProps = (0, _objectWithoutProperties2["default"])(props, ["background", "elevation", "hoverElevation", "activeElevation", "border", "borderTop", "borderRight", "borderBottom", "borderLeft", "css"]);
  var theme = (0, _theme.useTheme)();

  function getHoverElevationStyle(hoverElevation, css) {
    if (!Number.isInteger(hoverElevation)) return {};
    return {
      transitionDuration: '150ms',
      transitionProperty: 'box-shadow, transform',
      transitionTimingFunction: "cubic-bezier(0.0, 0.0, 0.2, 1)",
      ':hover': _objectSpread({}, css[':hover'] || {}, {
        transform: 'translateY(-2px)',
        boxShadow: theme.getElevation(hoverElevation)
      })
    };
  }

  function getActiveElevationStyle(activeElevation, css) {
    if (!Number.isInteger(activeElevation)) return {};
    return {
      ':active': _objectSpread({}, css[':active'] || {}, {
        transform: 'translateY(-1px)',
        boxShadow: theme.getElevation(activeElevation)
      })
    };
  }

  function getBorderSideProperty(_ref) {
    var borderSideProperty = _ref.borderSideProperty,
        border = _ref.border;

    if (Object.prototype.hasOwnProperty.call(theme.colors.border, borderSideProperty)) {
      return "1px solid ".concat(theme.colors.border[borderSideProperty]);
    }

    if (borderSideProperty === true) {
      return "1px solid ".concat(theme.colors.border["default"]);
    }

    if (borderSideProperty === false) {
      return null;
    }

    if (Object.prototype.hasOwnProperty.call(theme.colors.border, border)) {
      return "1px solid ".concat(theme.colors.border[border]);
    }

    if (border === true) {
      return "1px solid ".concat(theme.colors.border["default"]);
    }

    return borderSideProperty;
  }

  var elevationStyle = theme.getElevation(elevation);
  var hoverElevationStyle = getHoverElevationStyle(hoverElevation, css);
  var activeElevationStyle = getActiveElevationStyle(activeElevation, css);

  var _map = [borderTop, borderRight, borderBottom, borderLeft].map(function (borderSideProperty) {
    return getBorderSideProperty({
      borderSideProperty: borderSideProperty,
      border: border
    });
  }),
      _map2 = (0, _slicedToArray2["default"])(_map, 4),
      _borderTop = _map2[0],
      _borderRight = _map2[1],
      _borderBottom = _map2[2],
      _borderLeft = _map2[3];

  var className = (0, _classnames["default"])(props.className, (0, _glamor.css)(_objectSpread({}, css, {}, hoverElevationStyle, {}, activeElevationStyle)).toString());
  return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
    innerRef: ref,
    borderTop: _borderTop,
    borderRight: _borderRight,
    borderBottom: _borderBottom,
    borderLeft: _borderLeft,
    boxShadow: elevationStyle,
    background: theme.getBackground(background)
  }, restProps, {
    className: className
  }));
}));
Pane.propTypes = _objectSpread({}, _uiBox["default"].propTypes, {
  /**
   * Background property.
   * `tint1`, `tint2` etc. from `theme.colors.background` are available.
   */
  background: _propTypes["default"].string,

  /**
   * Elevation of the Pane.
   * Values: 0, 1, 2, 3, 4.
   */
  elevation: _propTypes["default"].oneOf([0, 1, 2, 3, 4]),

  /**
   * Elevation of the Pane on hover. Might get deprecated.
   * Values: 0, 1, 2, 3, 4.
   */
  hoverElevation: _propTypes["default"].oneOf([0, 1, 2, 3, 4]),

  /**
   * Elevation of the Pane on click. Might get deprecated.
   * Values: 0, 1, 2, 3, 4.
   */
  activeElevation: _propTypes["default"].oneOf([0, 1, 2, 3, 4]),

  /**
   * Can be a explicit border value or a boolean.
   * Values: true, muted, default.
   */
  border: StringAndBoolPropType,

  /**
   * Can be a explicit border value or a boolean.
   * Values: true, extraMuted, muted, default.
   */
  borderTop: StringAndBoolPropType,

  /**
   * Can be a explicit border value or a boolean.
   * Values: true, extraMuted, muted, default.
   */
  borderRight: StringAndBoolPropType,

  /**
   * Can be a explicit border value or a boolean.
   * Values: true, extraMuted, muted, default.
   */
  borderBottom: StringAndBoolPropType,

  /**
   * Can be a explicit border value or a boolean.
   * Values: true, extraMuted, muted, default.
   */
  borderLeft: StringAndBoolPropType
});
var _default = Pane;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvc3JjL1BhbmUuanMiXSwibmFtZXMiOlsiU3RyaW5nQW5kQm9vbFByb3BUeXBlIiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwiYm9vbCIsIlBhbmUiLCJwcm9wcyIsInJlZiIsImJhY2tncm91bmQiLCJlbGV2YXRpb24iLCJob3ZlckVsZXZhdGlvbiIsImFjdGl2ZUVsZXZhdGlvbiIsImJvcmRlciIsImJvcmRlclRvcCIsImJvcmRlclJpZ2h0IiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyTGVmdCIsImNzcyIsInJlc3RQcm9wcyIsInRoZW1lIiwiZ2V0SG92ZXJFbGV2YXRpb25TdHlsZSIsIk51bWJlciIsImlzSW50ZWdlciIsInRyYW5zaXRpb25EdXJhdGlvbiIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiIsInRyYW5zZm9ybSIsImJveFNoYWRvdyIsImdldEVsZXZhdGlvbiIsImdldEFjdGl2ZUVsZXZhdGlvblN0eWxlIiwiZ2V0Qm9yZGVyU2lkZVByb3BlcnR5IiwiYm9yZGVyU2lkZVByb3BlcnR5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiY29sb3JzIiwiZWxldmF0aW9uU3R5bGUiLCJob3ZlckVsZXZhdGlvblN0eWxlIiwiYWN0aXZlRWxldmF0aW9uU3R5bGUiLCJtYXAiLCJfYm9yZGVyVG9wIiwiX2JvcmRlclJpZ2h0IiwiX2JvcmRlckJvdHRvbSIsIl9ib3JkZXJMZWZ0IiwiY2xhc3NOYW1lIiwidG9TdHJpbmciLCJnZXRCYWNrZ3JvdW5kIiwicHJvcFR5cGVzIiwiQm94Iiwib25lT2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEscUJBQXFCLEdBQUdDLHNCQUFVQyxTQUFWLENBQW9CLENBQ2hERCxzQkFBVUUsTUFEc0MsRUFFaERGLHNCQUFVRyxJQUZzQyxDQUFwQixDQUE5Qjs7QUFLQSxJQUFNQyxJQUFJLEdBQUcsaUJBQ1gsdUJBQVcsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSLEVBQWdCO0FBQUEsTUFFdkJDLFVBRnVCLEdBZ0JyQkYsS0FoQnFCLENBRXZCRSxVQUZ1QjtBQUFBLE1BSXZCQyxTQUp1QixHQWdCckJILEtBaEJxQixDQUl2QkcsU0FKdUI7QUFBQSxNQUt2QkMsY0FMdUIsR0FnQnJCSixLQWhCcUIsQ0FLdkJJLGNBTHVCO0FBQUEsTUFNdkJDLGVBTnVCLEdBZ0JyQkwsS0FoQnFCLENBTXZCSyxlQU51QjtBQUFBLE1BUXZCQyxNQVJ1QixHQWdCckJOLEtBaEJxQixDQVF2Qk0sTUFSdUI7QUFBQSxNQVN2QkMsU0FUdUIsR0FnQnJCUCxLQWhCcUIsQ0FTdkJPLFNBVHVCO0FBQUEsTUFVdkJDLFdBVnVCLEdBZ0JyQlIsS0FoQnFCLENBVXZCUSxXQVZ1QjtBQUFBLE1BV3ZCQyxZQVh1QixHQWdCckJULEtBaEJxQixDQVd2QlMsWUFYdUI7QUFBQSxNQVl2QkMsVUFadUIsR0FnQnJCVixLQWhCcUIsQ0FZdkJVLFVBWnVCO0FBQUEsbUJBZ0JyQlYsS0FoQnFCLENBY3ZCVyxHQWR1QjtBQUFBLE1BY3ZCQSxHQWR1QiwyQkFjakIsRUFkaUI7QUFBQSxNQWVwQkMsU0Fmb0IsNkNBZ0JyQlosS0FoQnFCO0FBaUJ6QixNQUFNYSxLQUFLLEdBQUcsc0JBQWQ7O0FBRUEsV0FBU0Msc0JBQVQsQ0FBZ0NWLGNBQWhDLEVBQWdETyxHQUFoRCxFQUFxRDtBQUNuRCxRQUFJLENBQUNJLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQlosY0FBakIsQ0FBTCxFQUF1QyxPQUFPLEVBQVA7QUFFdkMsV0FBTztBQUNMYSxNQUFBQSxrQkFBa0IsRUFBRSxPQURmO0FBRUxDLE1BQUFBLGtCQUFrQixFQUFFLHVCQUZmO0FBR0xDLE1BQUFBLHdCQUF3QixrQ0FIbkI7QUFJTCxrQ0FDTVIsR0FBRyxDQUFDLFFBQUQsQ0FBSCxJQUFpQixFQUR2QjtBQUVFUyxRQUFBQSxTQUFTLEVBQUUsa0JBRmI7QUFHRUMsUUFBQUEsU0FBUyxFQUFFUixLQUFLLENBQUNTLFlBQU4sQ0FBbUJsQixjQUFuQjtBQUhiO0FBSkssS0FBUDtBQVVEOztBQUVELFdBQVNtQix1QkFBVCxDQUFpQ2xCLGVBQWpDLEVBQWtETSxHQUFsRCxFQUF1RDtBQUNyRCxRQUFJLENBQUNJLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQlgsZUFBakIsQ0FBTCxFQUF3QyxPQUFPLEVBQVA7QUFFeEMsV0FBTztBQUNMLG1DQUNNTSxHQUFHLENBQUMsU0FBRCxDQUFILElBQWtCLEVBRHhCO0FBRUVTLFFBQUFBLFNBQVMsRUFBRSxrQkFGYjtBQUdFQyxRQUFBQSxTQUFTLEVBQUVSLEtBQUssQ0FBQ1MsWUFBTixDQUFtQmpCLGVBQW5CO0FBSGI7QUFESyxLQUFQO0FBT0Q7O0FBRUQsV0FBU21CLHFCQUFULE9BQStEO0FBQUEsUUFBOUJDLGtCQUE4QixRQUE5QkEsa0JBQThCO0FBQUEsUUFBVm5CLE1BQVUsUUFBVkEsTUFBVTs7QUFDN0QsUUFDRW9CLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQ0VoQixLQUFLLENBQUNpQixNQUFOLENBQWF4QixNQURmLEVBRUVtQixrQkFGRixDQURGLEVBS0U7QUFDQSxpQ0FBb0JaLEtBQUssQ0FBQ2lCLE1BQU4sQ0FBYXhCLE1BQWIsQ0FBb0JtQixrQkFBcEIsQ0FBcEI7QUFDRDs7QUFFRCxRQUFJQSxrQkFBa0IsS0FBSyxJQUEzQixFQUFpQztBQUMvQixpQ0FBb0JaLEtBQUssQ0FBQ2lCLE1BQU4sQ0FBYXhCLE1BQWIsV0FBcEI7QUFDRDs7QUFFRCxRQUFJbUIsa0JBQWtCLEtBQUssS0FBM0IsRUFBa0M7QUFDaEMsYUFBTyxJQUFQO0FBQ0Q7O0FBRUQsUUFBSUMsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNoQixLQUFLLENBQUNpQixNQUFOLENBQWF4QixNQUFsRCxFQUEwREEsTUFBMUQsQ0FBSixFQUF1RTtBQUNyRSxpQ0FBb0JPLEtBQUssQ0FBQ2lCLE1BQU4sQ0FBYXhCLE1BQWIsQ0FBb0JBLE1BQXBCLENBQXBCO0FBQ0Q7O0FBRUQsUUFBSUEsTUFBTSxLQUFLLElBQWYsRUFBcUI7QUFDbkIsaUNBQW9CTyxLQUFLLENBQUNpQixNQUFOLENBQWF4QixNQUFiLFdBQXBCO0FBQ0Q7O0FBRUQsV0FBT21CLGtCQUFQO0FBQ0Q7O0FBRUQsTUFBTU0sY0FBYyxHQUFHbEIsS0FBSyxDQUFDUyxZQUFOLENBQW1CbkIsU0FBbkIsQ0FBdkI7QUFDQSxNQUFNNkIsbUJBQW1CLEdBQUdsQixzQkFBc0IsQ0FBQ1YsY0FBRCxFQUFpQk8sR0FBakIsQ0FBbEQ7QUFDQSxNQUFNc0Isb0JBQW9CLEdBQUdWLHVCQUF1QixDQUFDbEIsZUFBRCxFQUFrQk0sR0FBbEIsQ0FBcEQ7O0FBN0V5QixhQStFc0MsQ0FDN0RKLFNBRDZELEVBRTdEQyxXQUY2RCxFQUc3REMsWUFINkQsRUFJN0RDLFVBSjZELEVBSzdEd0IsR0FMNkQsQ0FLekQsVUFBQVQsa0JBQWtCO0FBQUEsV0FDdEJELHFCQUFxQixDQUFDO0FBQUVDLE1BQUFBLGtCQUFrQixFQUFsQkEsa0JBQUY7QUFBc0JuQixNQUFBQSxNQUFNLEVBQU5BO0FBQXRCLEtBQUQsQ0FEQztBQUFBLEdBTHVDLENBL0V0QztBQUFBO0FBQUEsTUErRWxCNkIsVUEvRWtCO0FBQUEsTUErRU5DLFlBL0VNO0FBQUEsTUErRVFDLGFBL0VSO0FBQUEsTUErRXVCQyxXQS9FdkI7O0FBd0Z6QixNQUFNQyxTQUFTLEdBQUcsNEJBQ2hCdkMsS0FBSyxDQUFDdUMsU0FEVSxFQUVoQixtQ0FDSzVCLEdBREwsTUFFS3FCLG1CQUZMLE1BR0tDLG9CQUhMLEdBSUdPLFFBSkgsRUFGZ0IsQ0FBbEI7QUFTQSxTQUNFLGdDQUFDLGlCQUFEO0FBQ0UsSUFBQSxRQUFRLEVBQUV2QyxHQURaO0FBRUUsSUFBQSxTQUFTLEVBQUVrQyxVQUZiO0FBR0UsSUFBQSxXQUFXLEVBQUVDLFlBSGY7QUFJRSxJQUFBLFlBQVksRUFBRUMsYUFKaEI7QUFLRSxJQUFBLFVBQVUsRUFBRUMsV0FMZDtBQU1FLElBQUEsU0FBUyxFQUFFUCxjQU5iO0FBT0UsSUFBQSxVQUFVLEVBQUVsQixLQUFLLENBQUM0QixhQUFOLENBQW9CdkMsVUFBcEI7QUFQZCxLQVFNVSxTQVJOO0FBU0UsSUFBQSxTQUFTLEVBQUUyQjtBQVRiLEtBREY7QUFhRCxDQTlHRCxDQURXLENBQWI7QUFrSEF4QyxJQUFJLENBQUMyQyxTQUFMLHFCQUlLQyxrQkFBSUQsU0FKVDtBQU1FOzs7O0FBSUF4QyxFQUFBQSxVQUFVLEVBQUVQLHNCQUFVRSxNQVZ4Qjs7QUFZRTs7OztBQUlBTSxFQUFBQSxTQUFTLEVBQUVSLHNCQUFVaUQsS0FBVixDQUFnQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLENBQWhCLENBaEJiOztBQWtCRTs7OztBQUlBeEMsRUFBQUEsY0FBYyxFQUFFVCxzQkFBVWlELEtBQVYsQ0FBZ0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixDQUFoQixDQXRCbEI7O0FBd0JFOzs7O0FBSUF2QyxFQUFBQSxlQUFlLEVBQUVWLHNCQUFVaUQsS0FBVixDQUFnQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLENBQWhCLENBNUJuQjs7QUE4QkU7Ozs7QUFJQXRDLEVBQUFBLE1BQU0sRUFBRVoscUJBbENWOztBQW9DRTs7OztBQUlBYSxFQUFBQSxTQUFTLEVBQUViLHFCQXhDYjs7QUEwQ0U7Ozs7QUFJQWMsRUFBQUEsV0FBVyxFQUFFZCxxQkE5Q2Y7O0FBZ0RFOzs7O0FBSUFlLEVBQUFBLFlBQVksRUFBRWYscUJBcERoQjs7QUFzREU7Ozs7QUFJQWdCLEVBQUFBLFVBQVUsRUFBRWhCO0FBMURkO2VBNkRlSyxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgY3NzIGFzIGdsYW1vckNzcyB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuY29uc3QgU3RyaW5nQW5kQm9vbFByb3BUeXBlID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gIFByb3BUeXBlcy5zdHJpbmcsXG4gIFByb3BUeXBlcy5ib29sXG5dKVxuXG5jb25zdCBQYW5lID0gbWVtbyhcbiAgZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGJhY2tncm91bmQsXG5cbiAgICAgIGVsZXZhdGlvbixcbiAgICAgIGhvdmVyRWxldmF0aW9uLFxuICAgICAgYWN0aXZlRWxldmF0aW9uLFxuXG4gICAgICBib3JkZXIsXG4gICAgICBib3JkZXJUb3AsXG4gICAgICBib3JkZXJSaWdodCxcbiAgICAgIGJvcmRlckJvdHRvbSxcbiAgICAgIGJvcmRlckxlZnQsXG5cbiAgICAgIGNzcyA9IHt9LFxuICAgICAgLi4ucmVzdFByb3BzXG4gICAgfSA9IHByb3BzXG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXG5cbiAgICBmdW5jdGlvbiBnZXRIb3ZlckVsZXZhdGlvblN0eWxlKGhvdmVyRWxldmF0aW9uLCBjc3MpIHtcbiAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihob3ZlckVsZXZhdGlvbikpIHJldHVybiB7fVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb246ICcxNTBtcycsXG4gICAgICAgIHRyYW5zaXRpb25Qcm9wZXJ0eTogJ2JveC1zaGFkb3csIHRyYW5zZm9ybScsXG4gICAgICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogYGN1YmljLWJlemllcigwLjAsIDAuMCwgMC4yLCAxKWAsXG4gICAgICAgICc6aG92ZXInOiB7XG4gICAgICAgICAgLi4uKGNzc1snOmhvdmVyJ10gfHwge30pLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTJweCknLFxuICAgICAgICAgIGJveFNoYWRvdzogdGhlbWUuZ2V0RWxldmF0aW9uKGhvdmVyRWxldmF0aW9uKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0QWN0aXZlRWxldmF0aW9uU3R5bGUoYWN0aXZlRWxldmF0aW9uLCBjc3MpIHtcbiAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihhY3RpdmVFbGV2YXRpb24pKSByZXR1cm4ge31cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJzphY3RpdmUnOiB7XG4gICAgICAgICAgLi4uKGNzc1snOmFjdGl2ZSddIHx8IHt9KSxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xcHgpJyxcbiAgICAgICAgICBib3hTaGFkb3c6IHRoZW1lLmdldEVsZXZhdGlvbihhY3RpdmVFbGV2YXRpb24pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRCb3JkZXJTaWRlUHJvcGVydHkoeyBib3JkZXJTaWRlUHJvcGVydHksIGJvcmRlciB9KSB7XG4gICAgICBpZiAoXG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChcbiAgICAgICAgICB0aGVtZS5jb2xvcnMuYm9yZGVyLFxuICAgICAgICAgIGJvcmRlclNpZGVQcm9wZXJ0eVxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyW2JvcmRlclNpZGVQcm9wZXJ0eV19YFxuICAgICAgfVxuXG4gICAgICBpZiAoYm9yZGVyU2lkZVByb3BlcnR5ID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJvcmRlci5kZWZhdWx0fWBcbiAgICAgIH1cblxuICAgICAgaWYgKGJvcmRlclNpZGVQcm9wZXJ0eSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGVtZS5jb2xvcnMuYm9yZGVyLCBib3JkZXIpKSB7XG4gICAgICAgIHJldHVybiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJvcmRlcltib3JkZXJdfWBcbiAgICAgIH1cblxuICAgICAgaWYgKGJvcmRlciA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gYDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXIuZGVmYXVsdH1gXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBib3JkZXJTaWRlUHJvcGVydHlcbiAgICB9XG5cbiAgICBjb25zdCBlbGV2YXRpb25TdHlsZSA9IHRoZW1lLmdldEVsZXZhdGlvbihlbGV2YXRpb24pXG4gICAgY29uc3QgaG92ZXJFbGV2YXRpb25TdHlsZSA9IGdldEhvdmVyRWxldmF0aW9uU3R5bGUoaG92ZXJFbGV2YXRpb24sIGNzcylcbiAgICBjb25zdCBhY3RpdmVFbGV2YXRpb25TdHlsZSA9IGdldEFjdGl2ZUVsZXZhdGlvblN0eWxlKGFjdGl2ZUVsZXZhdGlvbiwgY3NzKVxuXG4gICAgY29uc3QgW19ib3JkZXJUb3AsIF9ib3JkZXJSaWdodCwgX2JvcmRlckJvdHRvbSwgX2JvcmRlckxlZnRdID0gW1xuICAgICAgYm9yZGVyVG9wLFxuICAgICAgYm9yZGVyUmlnaHQsXG4gICAgICBib3JkZXJCb3R0b20sXG4gICAgICBib3JkZXJMZWZ0XG4gICAgXS5tYXAoYm9yZGVyU2lkZVByb3BlcnR5ID0+XG4gICAgICBnZXRCb3JkZXJTaWRlUHJvcGVydHkoeyBib3JkZXJTaWRlUHJvcGVydHksIGJvcmRlciB9KVxuICAgIClcblxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGN4KFxuICAgICAgcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgZ2xhbW9yQ3NzKHtcbiAgICAgICAgLi4uY3NzLFxuICAgICAgICAuLi5ob3ZlckVsZXZhdGlvblN0eWxlLFxuICAgICAgICAuLi5hY3RpdmVFbGV2YXRpb25TdHlsZVxuICAgICAgfSkudG9TdHJpbmcoKVxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIGlubmVyUmVmPXtyZWZ9XG4gICAgICAgIGJvcmRlclRvcD17X2JvcmRlclRvcH1cbiAgICAgICAgYm9yZGVyUmlnaHQ9e19ib3JkZXJSaWdodH1cbiAgICAgICAgYm9yZGVyQm90dG9tPXtfYm9yZGVyQm90dG9tfVxuICAgICAgICBib3JkZXJMZWZ0PXtfYm9yZGVyTGVmdH1cbiAgICAgICAgYm94U2hhZG93PXtlbGV2YXRpb25TdHlsZX1cbiAgICAgICAgYmFja2dyb3VuZD17dGhlbWUuZ2V0QmFja2dyb3VuZChiYWNrZ3JvdW5kKX1cbiAgICAgICAgey4uLnJlc3RQcm9wc31cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAvPlxuICAgIClcbiAgfSlcbilcblxuUGFuZS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBDb21wb3NlcyB0aGUgQm94IGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICovXG4gIC4uLkJveC5wcm9wVHlwZXMsXG5cbiAgLyoqXG4gICAqIEJhY2tncm91bmQgcHJvcGVydHkuXG4gICAqIGB0aW50MWAsIGB0aW50MmAgZXRjLiBmcm9tIGB0aGVtZS5jb2xvcnMuYmFja2dyb3VuZGAgYXJlIGF2YWlsYWJsZS5cbiAgICovXG4gIGJhY2tncm91bmQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEVsZXZhdGlvbiBvZiB0aGUgUGFuZS5cbiAgICogVmFsdWVzOiAwLCAxLCAyLCAzLCA0LlxuICAgKi9cbiAgZWxldmF0aW9uOiBQcm9wVHlwZXMub25lT2YoWzAsIDEsIDIsIDMsIDRdKSxcblxuICAvKipcbiAgICogRWxldmF0aW9uIG9mIHRoZSBQYW5lIG9uIGhvdmVyLiBNaWdodCBnZXQgZGVwcmVjYXRlZC5cbiAgICogVmFsdWVzOiAwLCAxLCAyLCAzLCA0LlxuICAgKi9cbiAgaG92ZXJFbGV2YXRpb246IFByb3BUeXBlcy5vbmVPZihbMCwgMSwgMiwgMywgNF0pLFxuXG4gIC8qKlxuICAgKiBFbGV2YXRpb24gb2YgdGhlIFBhbmUgb24gY2xpY2suIE1pZ2h0IGdldCBkZXByZWNhdGVkLlxuICAgKiBWYWx1ZXM6IDAsIDEsIDIsIDMsIDQuXG4gICAqL1xuICBhY3RpdmVFbGV2YXRpb246IFByb3BUeXBlcy5vbmVPZihbMCwgMSwgMiwgMywgNF0pLFxuXG4gIC8qKlxuICAgKiBDYW4gYmUgYSBleHBsaWNpdCBib3JkZXIgdmFsdWUgb3IgYSBib29sZWFuLlxuICAgKiBWYWx1ZXM6IHRydWUsIG11dGVkLCBkZWZhdWx0LlxuICAgKi9cbiAgYm9yZGVyOiBTdHJpbmdBbmRCb29sUHJvcFR5cGUsXG5cbiAgLyoqXG4gICAqIENhbiBiZSBhIGV4cGxpY2l0IGJvcmRlciB2YWx1ZSBvciBhIGJvb2xlYW4uXG4gICAqIFZhbHVlczogdHJ1ZSwgZXh0cmFNdXRlZCwgbXV0ZWQsIGRlZmF1bHQuXG4gICAqL1xuICBib3JkZXJUb3A6IFN0cmluZ0FuZEJvb2xQcm9wVHlwZSxcblxuICAvKipcbiAgICogQ2FuIGJlIGEgZXhwbGljaXQgYm9yZGVyIHZhbHVlIG9yIGEgYm9vbGVhbi5cbiAgICogVmFsdWVzOiB0cnVlLCBleHRyYU11dGVkLCBtdXRlZCwgZGVmYXVsdC5cbiAgICovXG4gIGJvcmRlclJpZ2h0OiBTdHJpbmdBbmRCb29sUHJvcFR5cGUsXG5cbiAgLyoqXG4gICAqIENhbiBiZSBhIGV4cGxpY2l0IGJvcmRlciB2YWx1ZSBvciBhIGJvb2xlYW4uXG4gICAqIFZhbHVlczogdHJ1ZSwgZXh0cmFNdXRlZCwgbXV0ZWQsIGRlZmF1bHQuXG4gICAqL1xuICBib3JkZXJCb3R0b206IFN0cmluZ0FuZEJvb2xQcm9wVHlwZSxcblxuICAvKipcbiAgICogQ2FuIGJlIGEgZXhwbGljaXQgYm9yZGVyIHZhbHVlIG9yIGEgYm9vbGVhbi5cbiAgICogVmFsdWVzOiB0cnVlLCBleHRyYU11dGVkLCBtdXRlZCwgZGVmYXVsdC5cbiAgICovXG4gIGJvcmRlckxlZnQ6IFN0cmluZ0FuZEJvb2xQcm9wVHlwZVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYW5lXG4iXX0=