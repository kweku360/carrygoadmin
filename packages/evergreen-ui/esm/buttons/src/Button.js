import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent, memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { dimensions, spacing, position, layout } from 'ui-box';
import { IconWrapper } from '../../icons/src/IconWrapper';
import { Text } from '../../typography';
import { Spinner } from '../../spinner';
import { withTheme } from '../../theme';
/* eslint-disable-next-line react/prop-types */

var Icon = memo(function (_ref) {
  var icon = _ref.icon,
      size = _ref.size,
      spacing = _ref.spacing,
      edge = _ref.edge;
  var edgeMargin = -Math.round(spacing * 0.2);
  var innerMargin = Math.round(size * 0.7);
  var marginLeft = edge === 'start' ? edgeMargin : innerMargin;
  var marginRight = edge === 'end' ? edgeMargin : innerMargin;
  return React.createElement(IconWrapper, {
    icon: icon,
    size: size,
    marginLeft: marginLeft,
    marginRight: marginRight
  });
});

var Button = /*#__PURE__*/function (_PureComponent) {
  _inherits(Button, _PureComponent);

  var _super = _createSuper(Button);

  function Button() {
    _classCallCheck(this, Button);

    return _super.apply(this, arguments);
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          intent = _this$props.intent,
          height = _this$props.height,
          isActive = _this$props.isActive,
          children = _this$props.children,
          disabled = _this$props.disabled,
          appearance = _this$props.appearance,
          isLoading = _this$props.isLoading,
          paddingRight = _this$props.paddingRight,
          paddingLeft = _this$props.paddingLeft,
          paddingTop = _this$props.paddingTop,
          paddingBottom = _this$props.paddingBottom,
          iconBefore = _this$props.iconBefore,
          iconAfter = _this$props.iconAfter,
          props = _objectWithoutProperties(_this$props, ["theme", "className", "intent", "height", "isActive", "children", "disabled", "appearance", "isLoading", "paddingRight", "paddingLeft", "paddingTop", "paddingBottom", "iconBefore", "iconAfter"]);

      var themedClassName = theme.getButtonClassName(appearance, intent);
      var textSize = theme.getTextSizeForControlHeight(height);
      var borderRadius = theme.getBorderRadiusForControlHeight(height);
      var iconSize = theme.getIconSizeForButton(height);
      var padding = Math.round(height / 2);
      var pr = paddingRight !== undefined ? paddingRight : padding; // eslint-disable-line no-negated-condition

      var pl = paddingLeft !== undefined ? paddingLeft : padding; // eslint-disable-line no-negated-condition

      return React.createElement(Text, _extends({
        is: "button",
        className: cx(themedClassName, className),
        borderTopRightRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
        borderTopLeftRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
        paddingRight: pr,
        paddingLeft: pl,
        marginLeft: 0 // Removes weird margins in Safari
        ,
        marginRight: 0 // Removes weird margins in Safari
        ,
        marginTop: 0 // Removes weird margins in Safari
        ,
        marginBottom: 0 // Removes weird margins in Safari
        ,
        size: textSize,
        color: null // Prevent the Text color overriding the glamor appearanceStyle color
        ,
        height: height,
        lineHeight: "".concat(height, "px")
      }, isActive ? {
        'data-active': true
      } : {}, Button.styles, props, {
        disabled: disabled || isLoading
      }), isLoading && React.createElement(Spinner, {
        marginLeft: -Math.round(height / 8),
        marginRight: Math.round(height / 4),
        size: Math.round(height / 2)
      }), React.createElement(Icon, {
        icon: iconBefore,
        size: iconSize,
        spacing: pl,
        edge: "start"
      }), children, React.createElement(Icon, {
        icon: iconAfter,
        size: iconSize,
        spacing: pr,
        edge: "end"
      }));
    }
  }]);

  return Button;
}(PureComponent);

Button.displayName = "Button";

_defineProperty(Button, "propTypes", _objectSpread({}, dimensions.propTypes, {}, spacing.propTypes, {}, position.propTypes, {}, layout.propTypes, {
  /**
   * The intent of the button.
   */
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']),

  /**
   * The appearance of the button.
   */
  appearance: PropTypes.oneOf(['default', 'minimal', 'primary']).isRequired,

  /**
   * When true, show a loading spinner before the children.
   * This also disables the button.
   */
  isLoading: PropTypes.bool,

  /**
   * Forcefully set the active state of a button.
   * Useful in conjuction with a Popover.
   */
  isActive: PropTypes.bool,

  /**
   * Sets an icon before the text. Can be any icon from Evergreen or a custom element.
   */
  iconBefore: PropTypes.node,

  /**
   * Sets an icon after the text. Can be any icon from Evergreen or a custom element.
   */
  iconAfter: PropTypes.node,

  /**
   * When true, the button is disabled.
   * isLoading also sets the button to disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired,

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
}));

_defineProperty(Button, "defaultProps", {
  appearance: 'default',
  height: 32,
  intent: 'none',
  isActive: false,
  paddingBottom: 0,
  paddingTop: 0
});

_defineProperty(Button, "styles", {
  position: 'relative',
  fontFamily: 'ui',
  fontWeight: 500,
  display: 'inline-flex',
  alignItems: 'center',
  flexWrap: 'nowrap'
});

export default withTheme(Button);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idXR0b25zL3NyYy9CdXR0b24uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwibWVtbyIsIlByb3BUeXBlcyIsImN4IiwiZGltZW5zaW9ucyIsInNwYWNpbmciLCJwb3NpdGlvbiIsImxheW91dCIsIkljb25XcmFwcGVyIiwiVGV4dCIsIlNwaW5uZXIiLCJ3aXRoVGhlbWUiLCJJY29uIiwiaWNvbiIsInNpemUiLCJlZGdlIiwiZWRnZU1hcmdpbiIsIk1hdGgiLCJyb3VuZCIsImlubmVyTWFyZ2luIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiQnV0dG9uIiwicHJvcHMiLCJ0aGVtZSIsImNsYXNzTmFtZSIsImludGVudCIsImhlaWdodCIsImlzQWN0aXZlIiwiY2hpbGRyZW4iLCJkaXNhYmxlZCIsImFwcGVhcmFuY2UiLCJpc0xvYWRpbmciLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiaWNvbkJlZm9yZSIsImljb25BZnRlciIsInRoZW1lZENsYXNzTmFtZSIsImdldEJ1dHRvbkNsYXNzTmFtZSIsInRleHRTaXplIiwiZ2V0VGV4dFNpemVGb3JDb250cm9sSGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiZ2V0Qm9yZGVyUmFkaXVzRm9yQ29udHJvbEhlaWdodCIsImljb25TaXplIiwiZ2V0SWNvblNpemVGb3JCdXR0b24iLCJwYWRkaW5nIiwicHIiLCJ1bmRlZmluZWQiLCJwbCIsInN0eWxlcyIsInByb3BUeXBlcyIsIm9uZU9mIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJub2RlIiwib2JqZWN0Iiwic3RyaW5nIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZsZXhXcmFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLEVBQStCQyxJQUEvQixR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QUEsUUFBUSxFQUFFNUIsU0FBUyxDQUFDcUQsSTs7QUFFcEI7OztBQUdBL0IsRUFBQUEsS0FBSyxFQUFFdEIsU0FBUyxDQUFDdUQsTUFBVixDQUFpQkgsVTs7QUFFeEI7Ozs7QUFJQTdCLEVBQUFBLFNBQVMsRUFBRXZCLFNBQVMsQ0FBQ3dEOzs7Z0JBckVuQnBDLE0sa0JBd0VrQjtBQUNwQlMsRUFBQUEsVUFBVSxFQUFFLFNBRFE7QUFFcEJKLEVBQUFBLE1BQU0sRUFBRSxFQUZZO0FBR3BCRCxFQUFBQSxNQUFNLEVBQUUsTUFIWTtBQUlwQkUsRUFBQUEsUUFBUSxFQUFFLEtBSlU7QUFLcEJRLEVBQUFBLGFBQWEsRUFBRSxDQUxLO0FBTXBCRCxFQUFBQSxVQUFVLEVBQUU7QUFOUSxDOztnQkF4RWxCYixNLFlBaUZZO0FBQ2RoQixFQUFBQSxRQUFRLEVBQUUsVUFESTtBQUVkcUQsRUFBQUEsVUFBVSxFQUFFLElBRkU7QUFHZEMsRUFBQUEsVUFBVSxFQUFFLEdBSEU7QUFJZEMsRUFBQUEsT0FBTyxFQUFFLGFBSks7QUFLZEMsRUFBQUEsVUFBVSxFQUFFLFFBTEU7QUFNZEMsRUFBQUEsUUFBUSxFQUFFO0FBTkksQzs7QUFxRmxCLGVBQWVwRCxTQUFTLENBQUNXLE1BQUQsQ0FBeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgbWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBkaW1lbnNpb25zLCBzcGFjaW5nLCBwb3NpdGlvbiwgbGF5b3V0IH0gZnJvbSAndWktYm94J1xuaW1wb3J0IHsgSWNvbldyYXBwZXIgfSBmcm9tICcuLi8uLi9pY29ucy9zcmMvSWNvbldyYXBwZXInXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICcuLi8uLi9zcGlubmVyJ1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzICovXG5jb25zdCBJY29uID0gbWVtbygoeyBpY29uLCBzaXplLCBzcGFjaW5nLCBlZGdlIH0pID0+IHtcbiAgY29uc3QgZWRnZU1hcmdpbiA9IC1NYXRoLnJvdW5kKHNwYWNpbmcgKiAwLjIpXG4gIGNvbnN0IGlubmVyTWFyZ2luID0gTWF0aC5yb3VuZChzaXplICogMC43KVxuICBjb25zdCBtYXJnaW5MZWZ0ID0gZWRnZSA9PT0gJ3N0YXJ0JyA/IGVkZ2VNYXJnaW4gOiBpbm5lck1hcmdpblxuICBjb25zdCBtYXJnaW5SaWdodCA9IGVkZ2UgPT09ICdlbmQnID8gZWRnZU1hcmdpbiA6IGlubmVyTWFyZ2luXG5cbiAgcmV0dXJuIChcbiAgICA8SWNvbldyYXBwZXJcbiAgICAgIGljb249e2ljb259XG4gICAgICBzaXplPXtzaXplfVxuICAgICAgbWFyZ2luTGVmdD17bWFyZ2luTGVmdH1cbiAgICAgIG1hcmdpblJpZ2h0PXttYXJnaW5SaWdodH1cbiAgICAvPlxuICApXG59KVxuXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgZGltZW5zaW9ucyBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAgICovXG4gICAgLi4uZGltZW5zaW9ucy5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgc3BhY2luZyBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAgICovXG4gICAgLi4uc3BhY2luZy5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgcG9zaXRpb24gc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgICAqL1xuICAgIC4uLnBvc2l0aW9uLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBsYXlvdXQgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgICAqL1xuICAgIC4uLmxheW91dC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW50ZW50IG9mIHRoZSBidXR0b24uXG4gICAgICovXG4gICAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoWydub25lJywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInXSksXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgYnV0dG9uLlxuICAgICAqL1xuICAgIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAnbWluaW1hbCcsICdwcmltYXJ5J10pLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHNob3cgYSBsb2FkaW5nIHNwaW5uZXIgYmVmb3JlIHRoZSBjaGlsZHJlbi5cbiAgICAgKiBUaGlzIGFsc28gZGlzYWJsZXMgdGhlIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBpc0xvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRm9yY2VmdWxseSBzZXQgdGhlIGFjdGl2ZSBzdGF0ZSBvZiBhIGJ1dHRvbi5cbiAgICAgKiBVc2VmdWwgaW4gY29uanVjdGlvbiB3aXRoIGEgUG9wb3Zlci5cbiAgICAgKi9cbiAgICBpc0FjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGFuIGljb24gYmVmb3JlIHRoZSB0ZXh0LiBDYW4gYmUgYW55IGljb24gZnJvbSBFdmVyZ3JlZW4gb3IgYSBjdXN0b20gZWxlbWVudC5cbiAgICAgKi9cbiAgICBpY29uQmVmb3JlOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgYW4gaWNvbiBhZnRlciB0aGUgdGV4dC4gQ2FuIGJlIGFueSBpY29uIGZyb20gRXZlcmdyZWVuIG9yIGEgY3VzdG9tIGVsZW1lbnQuXG4gICAgICovXG4gICAgaWNvbkFmdGVyOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGJ1dHRvbiBpcyBkaXNhYmxlZC5cbiAgICAgKiBpc0xvYWRpbmcgYWxzbyBzZXRzIHRoZSBidXR0b24gdG8gZGlzYWJsZWQuXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogQ2xhc3MgbmFtZSBwYXNzZWQgdG8gdGhlIGJ1dHRvbi5cbiAgICAgKiBPbmx5IHVzZSBpZiB5b3Uga25vdyB3aGF0IHlvdSBhcmUgZG9pbmcuXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFwcGVhcmFuY2U6ICdkZWZhdWx0JyxcbiAgICBoZWlnaHQ6IDMyLFxuICAgIGludGVudDogJ25vbmUnLFxuICAgIGlzQWN0aXZlOiBmYWxzZSxcbiAgICBwYWRkaW5nQm90dG9tOiAwLFxuICAgIHBhZGRpbmdUb3A6IDBcbiAgfVxuXG4gIHN0YXRpYyBzdHlsZXMgPSB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZm9udEZhbWlseTogJ3VpJyxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBmbGV4V3JhcDogJ25vd3JhcCdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aGVtZSxcbiAgICAgIGNsYXNzTmFtZSxcblxuICAgICAgaW50ZW50LFxuICAgICAgaGVpZ2h0LFxuICAgICAgaXNBY3RpdmUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgYXBwZWFyYW5jZSxcbiAgICAgIGlzTG9hZGluZyxcblxuICAgICAgLy8gUGFkZGluZ3NcbiAgICAgIHBhZGRpbmdSaWdodCxcbiAgICAgIHBhZGRpbmdMZWZ0LFxuICAgICAgcGFkZGluZ1RvcCxcbiAgICAgIHBhZGRpbmdCb3R0b20sXG5cbiAgICAgIC8vIEljb25zXG4gICAgICBpY29uQmVmb3JlLFxuICAgICAgaWNvbkFmdGVyLFxuXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB0aGVtZWRDbGFzc05hbWUgPSB0aGVtZS5nZXRCdXR0b25DbGFzc05hbWUoYXBwZWFyYW5jZSwgaW50ZW50KVxuICAgIGNvbnN0IHRleHRTaXplID0gdGhlbWUuZ2V0VGV4dFNpemVGb3JDb250cm9sSGVpZ2h0KGhlaWdodClcblxuICAgIGNvbnN0IGJvcmRlclJhZGl1cyA9IHRoZW1lLmdldEJvcmRlclJhZGl1c0ZvckNvbnRyb2xIZWlnaHQoaGVpZ2h0KVxuICAgIGNvbnN0IGljb25TaXplID0gdGhlbWUuZ2V0SWNvblNpemVGb3JCdXR0b24oaGVpZ2h0KVxuXG4gICAgY29uc3QgcGFkZGluZyA9IE1hdGgucm91bmQoaGVpZ2h0IC8gMilcbiAgICBjb25zdCBwciA9IHBhZGRpbmdSaWdodCAhPT0gdW5kZWZpbmVkID8gcGFkZGluZ1JpZ2h0IDogcGFkZGluZyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5lZ2F0ZWQtY29uZGl0aW9uXG4gICAgY29uc3QgcGwgPSBwYWRkaW5nTGVmdCAhPT0gdW5kZWZpbmVkID8gcGFkZGluZ0xlZnQgOiBwYWRkaW5nIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmVnYXRlZC1jb25kaXRpb25cblxuICAgIHJldHVybiAoXG4gICAgICA8VGV4dFxuICAgICAgICBpcz1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT17Y3godGhlbWVkQ2xhc3NOYW1lLCBjbGFzc05hbWUpfVxuICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1cz17Ym9yZGVyUmFkaXVzfVxuICAgICAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1cz17Ym9yZGVyUmFkaXVzfVxuICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzPXtib3JkZXJSYWRpdXN9XG4gICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM9e2JvcmRlclJhZGl1c31cbiAgICAgICAgcGFkZGluZ1RvcD17cGFkZGluZ1RvcH1cbiAgICAgICAgcGFkZGluZ0JvdHRvbT17cGFkZGluZ0JvdHRvbX1cbiAgICAgICAgcGFkZGluZ1JpZ2h0PXtwcn1cbiAgICAgICAgcGFkZGluZ0xlZnQ9e3BsfVxuICAgICAgICBtYXJnaW5MZWZ0PXswfSAvLyBSZW1vdmVzIHdlaXJkIG1hcmdpbnMgaW4gU2FmYXJpXG4gICAgICAgIG1hcmdpblJpZ2h0PXswfSAvLyBSZW1vdmVzIHdlaXJkIG1hcmdpbnMgaW4gU2FmYXJpXG4gICAgICAgIG1hcmdpblRvcD17MH0gLy8gUmVtb3ZlcyB3ZWlyZCBtYXJnaW5zIGluIFNhZmFyaVxuICAgICAgICBtYXJnaW5Cb3R0b209ezB9IC8vIFJlbW92ZXMgd2VpcmQgbWFyZ2lucyBpbiBTYWZhcmlcbiAgICAgICAgc2l6ZT17dGV4dFNpemV9XG4gICAgICAgIGNvbG9yPXtudWxsfSAvLyBQcmV2ZW50IHRoZSBUZXh0IGNvbG9yIG92ZXJyaWRpbmcgdGhlIGdsYW1vciBhcHBlYXJhbmNlU3R5bGUgY29sb3JcbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIGxpbmVIZWlnaHQ9e2Ake2hlaWdodH1weGB9XG4gICAgICAgIHsuLi4oaXNBY3RpdmUgPyB7ICdkYXRhLWFjdGl2ZSc6IHRydWUgfSA6IHt9KX1cbiAgICAgICAgey4uLkJ1dHRvbi5zdHlsZXN9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkIHx8IGlzTG9hZGluZ31cbiAgICAgID5cbiAgICAgICAge2lzTG9hZGluZyAmJiAoXG4gICAgICAgICAgPFNwaW5uZXJcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ9ey1NYXRoLnJvdW5kKGhlaWdodCAvIDgpfVxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ9e01hdGgucm91bmQoaGVpZ2h0IC8gNCl9XG4gICAgICAgICAgICBzaXplPXtNYXRoLnJvdW5kKGhlaWdodCAvIDIpfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxJY29uIGljb249e2ljb25CZWZvcmV9IHNpemU9e2ljb25TaXplfSBzcGFjaW5nPXtwbH0gZWRnZT1cInN0YXJ0XCIgLz5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8SWNvbiBpY29uPXtpY29uQWZ0ZXJ9IHNpemU9e2ljb25TaXplfSBzcGFjaW5nPXtwcn0gZWRnZT1cImVuZFwiIC8+XG4gICAgICA8L1RleHQ+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShCdXR0b24pXG4iXX0=