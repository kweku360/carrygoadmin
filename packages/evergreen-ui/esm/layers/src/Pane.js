import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import cx from 'classnames';
import { css as glamorCss } from 'glamor';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import { useTheme } from '../../theme';
var StringAndBoolPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.bool]);
var Pane = memo(forwardRef(function (props, ref) {
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
      restProps = _objectWithoutProperties(props, ["background", "elevation", "hoverElevation", "activeElevation", "border", "borderTop", "borderRight", "borderBottom", "borderLeft", "css"]);

  var theme = useTheme();

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
      _map2 = _slicedToArray(_map, 4),
      _borderTop = _map2[0],
      _borderRight = _map2[1],
      _borderBottom = _map2[2],
      _borderLeft = _map2[3];

  var className = cx(props.className, glamorCss(_objectSpread({}, css, {}, hoverElevationStyle, {}, activeElevationStyle)).toString());
  return React.createElement(Box, _extends({
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
Pane.propTypes = _objectSpread({}, Box.propTypes, {
  /**
   * Background property.
   * `tint1`, `tint2` etc. from `theme.colors.background` are available.
   */
  background: PropTypes.string,

  /**
   * Elevation of the Pane.
   * Values: 0, 1, 2, 3, 4.
   */
  elevation: PropTypes.oneOf([0, 1, 2, 3, 4]),

  /**
   * Elevation of the Pane on hover. Might get deprecated.
   * Values: 0, 1, 2, 3, 4.
   */
  hoverElevation: PropTypes.oneOf([0, 1, 2, 3, 4]),

  /**
   * Elevation of the Pane on click. Might get deprecated.
   * Values: 0, 1, 2, 3, 4.
   */
  activeElevation: PropTypes.oneOf([0, 1, 2, 3, 4]),

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
export default Pane;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvc3JjL1BhbmUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJtZW1vIiwiZm9yd2FyZFJlZiIsImN4IiwiY3NzIiwiZ2xhbW9yQ3NzIiwiUHJvcFR5cGVzIiwiQm94IiwidXNlVGhlbWUiLCJTdHJpbmdBbmRCb29sUHJvcFR5cGUiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJib29sIiwiUGFuZSIsInByb3BzIiwicmVmIiwiYmFja2dyb3VuZCIsImVsZXZhdGlvbiIsImhvdmVyRWxldmF0aW9uIiwiYWN0aXZlRWxldmF0aW9uIiwiYm9yZGVyIiwiYm9yZGVyVG9wIiwiYm9yZGVyUmlnaHQiLCJib3JkZXJCb3R0b20iLCJib3JkZXJMZWZ0IiwicmVzdFByb3BzIiwidGhlbWUiLCJnZXRIb3ZlckVsZXZhdGlvblN0eWxlIiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidHJhbnNpdGlvblByb3BlcnR5IiwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uIiwidHJhbnNmb3JtIiwiYm94U2hhZG93IiwiZ2V0RWxldmF0aW9uIiwiZ2V0QWN0aXZlRWxldmF0aW9uU3R5bGUiLCJnZXRCb3JkZXJTaWRlUHJvcGVydHkiLCJib3JkZXJTaWRlUHJvcGVydHkiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJjb2xvcnMiLCJlbGV2YXRpb25TdHlsZSIsImhvdmVyRWxldmF0aW9uU3R5bGUiLCJhY3RpdmVFbGV2YXRpb25TdHlsZSIsIm1hcCIsIl9ib3JkZXJUb3AiLCJfYm9yZGVyUmlnaHQiLCJfYm9yZGVyQm90dG9tIiwiX2JvcmRlckxlZnQiLCJjbGFzc05hbWUiLCJ0b1N0cmluZyIsImdldEJhY2tncm91bmQiLCJwcm9wVHlwZXMiLCJvbmVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsSUFBaEIsRUFBc0JDLFVBQXRCLFFBQXdDLE9BQXhDO0FBQ0EsT0FBT0MsRUFBUCxNQUFlLFlBQWY7QUFDQSxTQUFTQyxHQUFHLElBQUlDLFNBQWhCLFFBQWlDLFFBQWpDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsUUFBaEI7QUFDQSxTQUFTQyxRQUFULFFBQXlCLGFBQXpCO0FBRUEsSUFBTUMscUJBQXFCLEdBQUdILFNBQVMsQ0FBQ0ksU0FBVixDQUFvQixDQUNoREosU0FBUyxDQUFDSyxNQURzQyxFQUVoREwsU0FBUyxDQUFDTSxJQUZzQyxDQUFwQixDQUE5QjtBQUtBLElBQU1DLElBQUksR0FBR1osSUFBSSxDQUNmQyxVQUFVLENBQUMsVUFBQ1ksS0FBRCxFQUFRQyxHQUFSLEVBQWdCO0FBQUEsTUFFdkJDLFVBRnVCLEdBZ0JyQkYsS0FoQnFCLENBRXZCRSxVQUZ1QjtBQUFBLE1BSXZCQyxTQUp1QixHQWdCckJILEtBaEJxQixDQUl2QkcsU0FKdUI7QUFBQSxNQUt2QkMsY0FMdUIsR0FnQnJCSixLQWhCcUIsQ0FLdkJJLGNBTHVCO0FBQUEsTUFNdkJDLGVBTnVCLEdBZ0JyQkwsS0FoQnFCLENBTXZCSyxlQU51QjtBQUFBLE1BUXZCQyxNQVJ1QixHQWdCckJOLEtBaEJxQixDQVF2Qk0sTUFSdUI7QUFBQSxNQVN2QkMsU0FUdUIsR0FnQnJCUCxLQWhCcUIsQ0FTdkJPLFNBVHVCO0FBQUEsTUFVdkJDLFdBVnVCLEdBZ0JyQlIsS0FoQnFCLENBVXZCUSxXQVZ1QjtBQUFBLE1BV3ZCQyxZQVh1QixHQWdCckJULEtBaEJxQixDQVd2QlMsWUFYdUI7QUFBQSxNQVl2QkMsVUFadUIsR0FnQnJCVixLQWhCcUIsQ0FZdkJVLFVBWnVCO0FBQUEsbUJBZ0JyQlYsS0FoQnFCLENBY3ZCVixHQWR1QjtBQUFBLE1BY3ZCQSxHQWR1QiwyQkFjakIsRUFkaUI7QUFBQSxNQWVwQnFCLFNBZm9CLDRCQWdCckJYLEtBaEJxQjs7QUFpQnpCLE1BQU1ZLEtBQUssR0FBR2xCLFFBQVEsRUFBdEI7O0FBRUEsV0FBU21CLHNCQUFULENBQWdDVCxjQUFoQyxFQUFnRGQsR0FBaEQsRUFBcUQ7QUFDbkQsUUFBSSxDQUFDd0IsTUFBTSxDQUFDQyxTQUFQLENBQWlCWCxjQUFqQixDQUFMLEVBQXVDLE9BQU8sRUFBUDtBQUV2QyxXQUFPO0FBQ0xZLE1BQUFBLGtCQUFrQixFQUFFLE9BRGY7QUFFTEMsTUFBQUEsa0JBQWtCLEVBQUUsdUJBRmY7QUFHTEMsTUFBQUEsd0JBQXdCLGtDQUhuQjtBQUlMLGtDQUNNNUIsR0FBRyxDQUFDLFFBQUQsQ0FBSCxJQUFpQixFQUR2QjtBQUVFNkIsUUFBQUEsU0FBUyxFQUFFLGtCQUZiO0FBR0VDLFFBQUFBLFNBQVMsRUFBRVIsS0FBSyxDQUFDUyxZQUFOLENBQW1CakIsY0FBbkI7QUFIYjtBQUpLLEtBQVA7QUFVRDs7QUFFRCxXQUFTa0IsdUJBQVQsQ0FBaUNqQixlQUFqQyxFQUFrRGYsR0FBbEQsRUFBdUQ7QUFDckQsUUFBSSxDQUFDd0IsTUFBTSxDQUFDQyxTQUFQLENBQWlCVixlQUFqQixDQUFMLEVBQXdDLE9BQU8sRUFBUDtBQUV4QyxXQUFPO0FBQ0wsbUNBQ01mLEdBQUcsQ0FBQyxTQUFELENBQUgsSUFBa0IsRUFEeEI7QUFFRTZCLFFBQUFBLFNBQVMsRUFBRSxrQkFGYjtBQUdFQyxRQUFBQSxTQUFTLEVBQUVSLEtBQUssQ0FBQ1MsWUFBTixDQUFtQmhCLGVBQW5CO0FBSGI7QUFESyxLQUFQO0FBT0Q7O0FBRUQsV0FBU2tCLHFCQUFULE9BQStEO0FBQUEsUUFBOUJDLGtCQUE4QixRQUE5QkEsa0JBQThCO0FBQUEsUUFBVmxCLE1BQVUsUUFBVkEsTUFBVTs7QUFDN0QsUUFDRW1CLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQ0VoQixLQUFLLENBQUNpQixNQUFOLENBQWF2QixNQURmLEVBRUVrQixrQkFGRixDQURGLEVBS0U7QUFDQSxpQ0FBb0JaLEtBQUssQ0FBQ2lCLE1BQU4sQ0FBYXZCLE1BQWIsQ0FBb0JrQixrQkFBcEIsQ0FBcEI7QUFDRDs7QUFFRCxRQUFJQSxrQkFBa0IsS0FBSyxJQUEzQixFQUFpQztBQUMvQixpQ0FBb0JaLEtBQUssQ0FBQ2lCLE1BQU4sQ0FBYXZCLE1BQWIsV0FBcEI7QUFDRDs7QUFFRCxRQUFJa0Isa0JBQWtCLEtBQUssS0FBM0IsRUFBa0M7QUFDaEMsYUFBTyxJQUFQO0FBQ0Q7O0FBRUQsUUFBSUMsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNoQixLQUFLLENBQUNpQixNQUFOLENBQWF2QixNQUFsRCxFQUEwREEsTUFBMUQsQ0FBSixFQUF1RTtBQUNyRSxpQ0FBb0JNLEtBQUssQ0FBQ2lCLE1BQU4sQ0FBYXZCLE1BQWIsQ0FBb0JBLE1BQXBCLENBQXBCO0FBQ0Q7O0FBRUQsUUFBSUEsTUFBTSxLQUFLLElBQWYsRUFBcUI7QUFDbkIsaUNBQW9CTSxLQUFLLENBQUNpQixNQUFOLENBQWF2QixNQUFiLFdBQXBCO0FBQ0Q7O0FBRUQsV0FBT2tCLGtCQUFQO0FBQ0Q7O0FBRUQsTUFBTU0sY0FBYyxHQUFHbEIsS0FBSyxDQUFDUyxZQUFOLENBQW1CbEIsU0FBbkIsQ0FBdkI7QUFDQSxNQUFNNEIsbUJBQW1CLEdBQUdsQixzQkFBc0IsQ0FBQ1QsY0FBRCxFQUFpQmQsR0FBakIsQ0FBbEQ7QUFDQSxNQUFNMEMsb0JBQW9CLEdBQUdWLHVCQUF1QixDQUFDakIsZUFBRCxFQUFrQmYsR0FBbEIsQ0FBcEQ7O0FBN0V5QixhQStFc0MsQ0FDN0RpQixTQUQ2RCxFQUU3REMsV0FGNkQsRUFHN0RDLFlBSDZELEVBSTdEQyxVQUo2RCxFQUs3RHVCLEdBTDZELENBS3pELFVBQUFULGtCQUFrQjtBQUFBLFdBQ3RCRCxxQkFBcUIsQ0FBQztBQUFFQyxNQUFBQSxrQkFBa0IsRUFBbEJBLGtCQUFGO0FBQXNCbEIsTUFBQUEsTUFBTSxFQUFOQTtBQUF0QixLQUFELENBREM7QUFBQSxHQUx1QyxDQS9FdEM7QUFBQTtBQUFBLE1BK0VsQjRCLFVBL0VrQjtBQUFBLE1BK0VOQyxZQS9FTTtBQUFBLE1BK0VRQyxhQS9FUjtBQUFBLE1BK0V1QkMsV0EvRXZCOztBQXdGekIsTUFBTUMsU0FBUyxHQUFHakQsRUFBRSxDQUNsQlcsS0FBSyxDQUFDc0MsU0FEWSxFQUVsQi9DLFNBQVMsbUJBQ0pELEdBREksTUFFSnlDLG1CQUZJLE1BR0pDLG9CQUhJLEVBQVQsQ0FJR08sUUFKSCxFQUZrQixDQUFwQjtBQVNBLFNBQ0Usb0JBQUMsR0FBRDtBQUNFLElBQUEsUUFBUSxFQUFFdEMsR0FEWjtBQUVFLElBQUEsU0FBUyxFQUFFaUMsVUFGYjtBQUdFLElBQUEsV0FBVyxFQUFFQyxZQUhmO0FBSUUsSUFBQSxZQUFZLEVBQUVDLGFBSmhCO0FBS0UsSUFBQSxVQUFVLEVBQUVDLFdBTGQ7QUFNRSxJQUFBLFNBQVMsRUFBRVAsY0FOYjtBQU9FLElBQUEsVUFBVSxFQUFFbEIsS0FBSyxDQUFDNEIsYUFBTixDQUFvQnRDLFVBQXBCO0FBUGQsS0FRTVMsU0FSTjtBQVNFLElBQUEsU0FBUyxFQUFFMkI7QUFUYixLQURGO0FBYUQsQ0E5R1MsQ0FESyxDQUFqQjtBQWtIQXZDLElBQUksQ0FBQzBDLFNBQUwscUJBSUtoRCxHQUFHLENBQUNnRCxTQUpUO0FBTUU7Ozs7QUFJQXZDLEVBQUFBLFVBQVUsRUFBRVYsU0FBUyxDQUFDSyxNQVZ4Qjs7QUFZRTs7OztBQUlBTSxFQUFBQSxTQUFTLEVBQUVYLFNBQVMsQ0FBQ2tELEtBQVYsQ0FBZ0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixDQUFoQixDQWhCYjs7QUFrQkU7Ozs7QUFJQXRDLEVBQUFBLGNBQWMsRUFBRVosU0FBUyxDQUFDa0QsS0FBVixDQUFnQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLENBQWhCLENBdEJsQjs7QUF3QkU7Ozs7QUFJQXJDLEVBQUFBLGVBQWUsRUFBRWIsU0FBUyxDQUFDa0QsS0FBVixDQUFnQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLENBQWhCLENBNUJuQjs7QUE4QkU7Ozs7QUFJQXBDLEVBQUFBLE1BQU0sRUFBRVgscUJBbENWOztBQW9DRTs7OztBQUlBWSxFQUFBQSxTQUFTLEVBQUVaLHFCQXhDYjs7QUEwQ0U7Ozs7QUFJQWEsRUFBQUEsV0FBVyxFQUFFYixxQkE5Q2Y7O0FBZ0RFOzs7O0FBSUFjLEVBQUFBLFlBQVksRUFBRWQscUJBcERoQjs7QUFzREU7Ozs7QUFJQWUsRUFBQUEsVUFBVSxFQUFFZjtBQTFEZDtBQTZEQSxlQUFlSSxJQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgY3NzIGFzIGdsYW1vckNzcyB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuY29uc3QgU3RyaW5nQW5kQm9vbFByb3BUeXBlID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gIFByb3BUeXBlcy5zdHJpbmcsXG4gIFByb3BUeXBlcy5ib29sXG5dKVxuXG5jb25zdCBQYW5lID0gbWVtbyhcbiAgZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGJhY2tncm91bmQsXG5cbiAgICAgIGVsZXZhdGlvbixcbiAgICAgIGhvdmVyRWxldmF0aW9uLFxuICAgICAgYWN0aXZlRWxldmF0aW9uLFxuXG4gICAgICBib3JkZXIsXG4gICAgICBib3JkZXJUb3AsXG4gICAgICBib3JkZXJSaWdodCxcbiAgICAgIGJvcmRlckJvdHRvbSxcbiAgICAgIGJvcmRlckxlZnQsXG5cbiAgICAgIGNzcyA9IHt9LFxuICAgICAgLi4ucmVzdFByb3BzXG4gICAgfSA9IHByb3BzXG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXG5cbiAgICBmdW5jdGlvbiBnZXRIb3ZlckVsZXZhdGlvblN0eWxlKGhvdmVyRWxldmF0aW9uLCBjc3MpIHtcbiAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihob3ZlckVsZXZhdGlvbikpIHJldHVybiB7fVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb246ICcxNTBtcycsXG4gICAgICAgIHRyYW5zaXRpb25Qcm9wZXJ0eTogJ2JveC1zaGFkb3csIHRyYW5zZm9ybScsXG4gICAgICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogYGN1YmljLWJlemllcigwLjAsIDAuMCwgMC4yLCAxKWAsXG4gICAgICAgICc6aG92ZXInOiB7XG4gICAgICAgICAgLi4uKGNzc1snOmhvdmVyJ10gfHwge30pLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTJweCknLFxuICAgICAgICAgIGJveFNoYWRvdzogdGhlbWUuZ2V0RWxldmF0aW9uKGhvdmVyRWxldmF0aW9uKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0QWN0aXZlRWxldmF0aW9uU3R5bGUoYWN0aXZlRWxldmF0aW9uLCBjc3MpIHtcbiAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihhY3RpdmVFbGV2YXRpb24pKSByZXR1cm4ge31cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJzphY3RpdmUnOiB7XG4gICAgICAgICAgLi4uKGNzc1snOmFjdGl2ZSddIHx8IHt9KSxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xcHgpJyxcbiAgICAgICAgICBib3hTaGFkb3c6IHRoZW1lLmdldEVsZXZhdGlvbihhY3RpdmVFbGV2YXRpb24pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRCb3JkZXJTaWRlUHJvcGVydHkoeyBib3JkZXJTaWRlUHJvcGVydHksIGJvcmRlciB9KSB7XG4gICAgICBpZiAoXG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChcbiAgICAgICAgICB0aGVtZS5jb2xvcnMuYm9yZGVyLFxuICAgICAgICAgIGJvcmRlclNpZGVQcm9wZXJ0eVxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyW2JvcmRlclNpZGVQcm9wZXJ0eV19YFxuICAgICAgfVxuXG4gICAgICBpZiAoYm9yZGVyU2lkZVByb3BlcnR5ID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJvcmRlci5kZWZhdWx0fWBcbiAgICAgIH1cblxuICAgICAgaWYgKGJvcmRlclNpZGVQcm9wZXJ0eSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGVtZS5jb2xvcnMuYm9yZGVyLCBib3JkZXIpKSB7XG4gICAgICAgIHJldHVybiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJvcmRlcltib3JkZXJdfWBcbiAgICAgIH1cblxuICAgICAgaWYgKGJvcmRlciA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gYDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXIuZGVmYXVsdH1gXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBib3JkZXJTaWRlUHJvcGVydHlcbiAgICB9XG5cbiAgICBjb25zdCBlbGV2YXRpb25TdHlsZSA9IHRoZW1lLmdldEVsZXZhdGlvbihlbGV2YXRpb24pXG4gICAgY29uc3QgaG92ZXJFbGV2YXRpb25TdHlsZSA9IGdldEhvdmVyRWxldmF0aW9uU3R5bGUoaG92ZXJFbGV2YXRpb24sIGNzcylcbiAgICBjb25zdCBhY3RpdmVFbGV2YXRpb25TdHlsZSA9IGdldEFjdGl2ZUVsZXZhdGlvblN0eWxlKGFjdGl2ZUVsZXZhdGlvbiwgY3NzKVxuXG4gICAgY29uc3QgW19ib3JkZXJUb3AsIF9ib3JkZXJSaWdodCwgX2JvcmRlckJvdHRvbSwgX2JvcmRlckxlZnRdID0gW1xuICAgICAgYm9yZGVyVG9wLFxuICAgICAgYm9yZGVyUmlnaHQsXG4gICAgICBib3JkZXJCb3R0b20sXG4gICAgICBib3JkZXJMZWZ0XG4gICAgXS5tYXAoYm9yZGVyU2lkZVByb3BlcnR5ID0+XG4gICAgICBnZXRCb3JkZXJTaWRlUHJvcGVydHkoeyBib3JkZXJTaWRlUHJvcGVydHksIGJvcmRlciB9KVxuICAgIClcblxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGN4KFxuICAgICAgcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgZ2xhbW9yQ3NzKHtcbiAgICAgICAgLi4uY3NzLFxuICAgICAgICAuLi5ob3ZlckVsZXZhdGlvblN0eWxlLFxuICAgICAgICAuLi5hY3RpdmVFbGV2YXRpb25TdHlsZVxuICAgICAgfSkudG9TdHJpbmcoKVxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIGlubmVyUmVmPXtyZWZ9XG4gICAgICAgIGJvcmRlclRvcD17X2JvcmRlclRvcH1cbiAgICAgICAgYm9yZGVyUmlnaHQ9e19ib3JkZXJSaWdodH1cbiAgICAgICAgYm9yZGVyQm90dG9tPXtfYm9yZGVyQm90dG9tfVxuICAgICAgICBib3JkZXJMZWZ0PXtfYm9yZGVyTGVmdH1cbiAgICAgICAgYm94U2hhZG93PXtlbGV2YXRpb25TdHlsZX1cbiAgICAgICAgYmFja2dyb3VuZD17dGhlbWUuZ2V0QmFja2dyb3VuZChiYWNrZ3JvdW5kKX1cbiAgICAgICAgey4uLnJlc3RQcm9wc31cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAvPlxuICAgIClcbiAgfSlcbilcblxuUGFuZS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBDb21wb3NlcyB0aGUgQm94IGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICovXG4gIC4uLkJveC5wcm9wVHlwZXMsXG5cbiAgLyoqXG4gICAqIEJhY2tncm91bmQgcHJvcGVydHkuXG4gICAqIGB0aW50MWAsIGB0aW50MmAgZXRjLiBmcm9tIGB0aGVtZS5jb2xvcnMuYmFja2dyb3VuZGAgYXJlIGF2YWlsYWJsZS5cbiAgICovXG4gIGJhY2tncm91bmQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEVsZXZhdGlvbiBvZiB0aGUgUGFuZS5cbiAgICogVmFsdWVzOiAwLCAxLCAyLCAzLCA0LlxuICAgKi9cbiAgZWxldmF0aW9uOiBQcm9wVHlwZXMub25lT2YoWzAsIDEsIDIsIDMsIDRdKSxcblxuICAvKipcbiAgICogRWxldmF0aW9uIG9mIHRoZSBQYW5lIG9uIGhvdmVyLiBNaWdodCBnZXQgZGVwcmVjYXRlZC5cbiAgICogVmFsdWVzOiAwLCAxLCAyLCAzLCA0LlxuICAgKi9cbiAgaG92ZXJFbGV2YXRpb246IFByb3BUeXBlcy5vbmVPZihbMCwgMSwgMiwgMywgNF0pLFxuXG4gIC8qKlxuICAgKiBFbGV2YXRpb24gb2YgdGhlIFBhbmUgb24gY2xpY2suIE1pZ2h0IGdldCBkZXByZWNhdGVkLlxuICAgKiBWYWx1ZXM6IDAsIDEsIDIsIDMsIDQuXG4gICAqL1xuICBhY3RpdmVFbGV2YXRpb246IFByb3BUeXBlcy5vbmVPZihbMCwgMSwgMiwgMywgNF0pLFxuXG4gIC8qKlxuICAgKiBDYW4gYmUgYSBleHBsaWNpdCBib3JkZXIgdmFsdWUgb3IgYSBib29sZWFuLlxuICAgKiBWYWx1ZXM6IHRydWUsIG11dGVkLCBkZWZhdWx0LlxuICAgKi9cbiAgYm9yZGVyOiBTdHJpbmdBbmRCb29sUHJvcFR5cGUsXG5cbiAgLyoqXG4gICAqIENhbiBiZSBhIGV4cGxpY2l0IGJvcmRlciB2YWx1ZSBvciBhIGJvb2xlYW4uXG4gICAqIFZhbHVlczogdHJ1ZSwgZXh0cmFNdXRlZCwgbXV0ZWQsIGRlZmF1bHQuXG4gICAqL1xuICBib3JkZXJUb3A6IFN0cmluZ0FuZEJvb2xQcm9wVHlwZSxcblxuICAvKipcbiAgICogQ2FuIGJlIGEgZXhwbGljaXQgYm9yZGVyIHZhbHVlIG9yIGEgYm9vbGVhbi5cbiAgICogVmFsdWVzOiB0cnVlLCBleHRyYU11dGVkLCBtdXRlZCwgZGVmYXVsdC5cbiAgICovXG4gIGJvcmRlclJpZ2h0OiBTdHJpbmdBbmRCb29sUHJvcFR5cGUsXG5cbiAgLyoqXG4gICAqIENhbiBiZSBhIGV4cGxpY2l0IGJvcmRlciB2YWx1ZSBvciBhIGJvb2xlYW4uXG4gICAqIFZhbHVlczogdHJ1ZSwgZXh0cmFNdXRlZCwgbXV0ZWQsIGRlZmF1bHQuXG4gICAqL1xuICBib3JkZXJCb3R0b206IFN0cmluZ0FuZEJvb2xQcm9wVHlwZSxcblxuICAvKipcbiAgICogQ2FuIGJlIGEgZXhwbGljaXQgYm9yZGVyIHZhbHVlIG9yIGEgYm9vbGVhbi5cbiAgICogVmFsdWVzOiB0cnVlLCBleHRyYU11dGVkLCBtdXRlZCwgZGVmYXVsdC5cbiAgICovXG4gIGJvcmRlckxlZnQ6IFN0cmluZ0FuZEJvb2xQcm9wVHlwZVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYW5lXG4iXX0=