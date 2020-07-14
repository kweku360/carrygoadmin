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

import React, { PureComponent } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Strong } from '../../typography';
import { withTheme } from '../../theme';

var Badge = /*#__PURE__*/function (_PureComponent) {
  _inherits(Badge, _PureComponent);

  var _super = _createSuper(Badge);

  function Badge() {
    _classCallCheck(this, Badge);

    return _super.apply(this, arguments);
  }

  _createClass(Badge, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          propsColor = _this$props.color,
          isInteractive = _this$props.isInteractive,
          isSolid = _this$props.isSolid,
          props = _objectWithoutProperties(_this$props, ["theme", "className", "color", "isInteractive", "isSolid"]);

      var _theme$getBadgeProps = theme.getBadgeProps({
        color: propsColor,
        isSolid: isSolid
      }),
          color = _theme$getBadgeProps.color,
          backgroundColor = _theme$getBadgeProps.backgroundColor;

      var appearance = isInteractive ? 'interactive' : 'default';
      var classNames = cx(className, theme.getBadgeClassName(appearance));
      return React.createElement(Strong, _extends({
        size: 300
      }, Badge.styles, {
        color: color,
        backgroundColor: backgroundColor
      }, props, {
        className: classNames
      }));
    }
  }]);

  return Badge;
}(PureComponent);

Badge.displayName = "Badge";

_defineProperty(Badge, "propTypes", _objectSpread({}, Strong.propTypes, {
  /**
   * The color used for the badge.
   */
  color: PropTypes.string.isRequired,

  /**
   * Whether or not to apply hover/focus/active styles
   */
  isInteractive: PropTypes.bool,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
}));

_defineProperty(Badge, "defaultProps", {
  color: 'neutral',
  isInteractive: false,
  isSolid: false
});

_defineProperty(Badge, "styles", {
  display: 'inline-block',
  boxSizing: 'border-box',
  height: 16,
  paddingTop: 0,
  paddingRight: 6,
  paddingBottom: 0,
  paddingLeft: 6,
  borderRadius: 2,
  textAlign: 'center',
  textDecoration: 'none',
  textTransform: 'uppercase'
});

export default withTheme(Badge);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iYWRnZXMvc3JjL0JhZGdlLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImN4IiwiUHJvcFR5cGVzIiwiU3Ryb25nIiwid2l0aFRoZW1lIiwiQmFkZ2UiLCJwcm9wcyIsInRoZW1lIiwiY2xhc3NOYW1lIiwicHJvcHNDb2xvciIsImNvbG9yIiwiaXNJbnRlcmFjdGl2ZSIsImlzU29saWQiLCJnZXRCYWRnZVByb3BzIiwiYmFja2dyb3VuZENvbG9yIiwiYXBwZWFyYW5jZSIsImNsYXNzTmFtZXMiLCJnZXRCYWRnZUNsYXNzTmFtZSIsInN0eWxlcyIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJib29sIiwib2JqZWN0IiwiZGlzcGxheSIsImJveFNpemluZyIsImhlaWdodCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ0xlZnQiLCJib3JkZXJSYWRpdXMiLCJ0ZXh0QWxpZ24iLCJ0ZXh0RGVjb3JhdGlvbiIsInRleHRUcmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxFQUFQLE1BQWUsWUFBZjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxNQUFULFFBQXVCLGtCQUF2QjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsYUFBMUI7O0lBRU1DLEs7Ozs7Ozs7Ozs7Ozs7NkJBd0NLO0FBQUEsd0JBUUgsS0FBS0MsS0FSRjtBQUFBLFVBRUxDLEtBRkssZUFFTEEsS0FGSztBQUFBLFVBR0xDLFNBSEssZUFHTEEsU0FISztBQUFBLFVBSUVDLFVBSkYsZUFJTEMsS0FKSztBQUFBLFVBS0xDLGFBTEssZUFLTEEsYUFMSztBQUFBLFVBTUxDLE9BTkssZUFNTEEsT0FOSztBQUFBLFVBT0ZOLEtBUEU7O0FBQUEsaUNBVTRCQyxLQUFLLENBQUNNLGFBQU4sQ0FBb0I7QUFDckRILFFBQUFBLEtBQUssRUFBRUQsVUFEOEM7QUFFckRHLFFBQUFBLE9BQU8sRUFBUEE7QUFGcUQsT0FBcEIsQ0FWNUI7QUFBQSxVQVVDRixLQVZELHdCQVVDQSxLQVZEO0FBQUEsVUFVUUksZUFWUix3QkFVUUEsZUFWUjs7QUFlUCxVQUFNQyxVQUFVLEdBQUdKLGFBQWEsR0FBRyxhQUFILEdBQW1CLFNBQW5EO0FBQ0EsVUFBTUssVUFBVSxHQUFHZixFQUFFLENBQUNPLFNBQUQsRUFBWUQsS0FBSyxDQUFDVSxpQkFBTixDQUF3QkYsVUFBeEIsQ0FBWixDQUFyQjtBQUVBLGFBQ0Usb0JBQUMsTUFBRDtBQUNFLFFBQUEsSUFBSSxFQUFFO0FBRFIsU0FFTVYsS0FBSyxDQUFDYSxNQUZaO0FBR0UsUUFBQSxLQUFLLEVBQUVSLEtBSFQ7QUFJRSxRQUFBLGVBQWUsRUFBRUk7QUFKbkIsU0FLTVIsS0FMTjtBQU1FLFFBQUEsU0FBUyxFQUFFVTtBQU5iLFNBREY7QUFVRDs7OztFQXBFaUJoQixhOztBQUFkSyxLOztnQkFBQUEsSyxpQ0FFQ0YsTUFBTSxDQUFDZ0IsUztBQUVWOzs7QUFHQVQsRUFBQUEsS0FBSyxFQUFFUixTQUFTLENBQUNrQixNQUFWLENBQWlCQyxVOztBQUV4Qjs7O0FBR0FWLEVBQUFBLGFBQWEsRUFBRVQsU0FBUyxDQUFDb0IsSTs7QUFFekI7OztBQUdBZixFQUFBQSxLQUFLLEVBQUVMLFNBQVMsQ0FBQ3FCLE1BQVYsQ0FBaUJGOzs7Z0JBakJ0QmhCLEssa0JBb0JrQjtBQUNwQkssRUFBQUEsS0FBSyxFQUFFLFNBRGE7QUFFcEJDLEVBQUFBLGFBQWEsRUFBRSxLQUZLO0FBR3BCQyxFQUFBQSxPQUFPLEVBQUU7QUFIVyxDOztnQkFwQmxCUCxLLFlBMEJZO0FBQ2RtQixFQUFBQSxPQUFPLEVBQUUsY0FESztBQUVkQyxFQUFBQSxTQUFTLEVBQUUsWUFGRztBQUdkQyxFQUFBQSxNQUFNLEVBQUUsRUFITTtBQUlkQyxFQUFBQSxVQUFVLEVBQUUsQ0FKRTtBQUtkQyxFQUFBQSxZQUFZLEVBQUUsQ0FMQTtBQU1kQyxFQUFBQSxhQUFhLEVBQUUsQ0FORDtBQU9kQyxFQUFBQSxXQUFXLEVBQUUsQ0FQQztBQVFkQyxFQUFBQSxZQUFZLEVBQUUsQ0FSQTtBQVNkQyxFQUFBQSxTQUFTLEVBQUUsUUFURztBQVVkQyxFQUFBQSxjQUFjLEVBQUUsTUFWRjtBQVdkQyxFQUFBQSxhQUFhLEVBQUU7QUFYRCxDOztBQTZDbEIsZUFBZTlCLFNBQVMsQ0FBQ0MsS0FBRCxDQUF4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFN0cm9uZyB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuY2xhc3MgQmFkZ2UgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAuLi5TdHJvbmcucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbG9yIHVzZWQgZm9yIHRoZSBiYWRnZS5cbiAgICAgKi9cbiAgICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdG8gYXBwbHkgaG92ZXIvZm9jdXMvYWN0aXZlIHN0eWxlc1xuICAgICAqL1xuICAgIGlzSW50ZXJhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbG9yOiAnbmV1dHJhbCcsXG4gICAgaXNJbnRlcmFjdGl2ZTogZmFsc2UsXG4gICAgaXNTb2xpZDogZmFsc2VcbiAgfVxuXG4gIHN0YXRpYyBzdHlsZXMgPSB7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgaGVpZ2h0OiAxNixcbiAgICBwYWRkaW5nVG9wOiAwLFxuICAgIHBhZGRpbmdSaWdodDogNixcbiAgICBwYWRkaW5nQm90dG9tOiAwLFxuICAgIHBhZGRpbmdMZWZ0OiA2LFxuICAgIGJvcmRlclJhZGl1czogMixcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aGVtZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNvbG9yOiBwcm9wc0NvbG9yLFxuICAgICAgaXNJbnRlcmFjdGl2ZSxcbiAgICAgIGlzU29saWQsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB7IGNvbG9yLCBiYWNrZ3JvdW5kQ29sb3IgfSA9IHRoZW1lLmdldEJhZGdlUHJvcHMoe1xuICAgICAgY29sb3I6IHByb3BzQ29sb3IsXG4gICAgICBpc1NvbGlkXG4gICAgfSlcblxuICAgIGNvbnN0IGFwcGVhcmFuY2UgPSBpc0ludGVyYWN0aXZlID8gJ2ludGVyYWN0aXZlJyA6ICdkZWZhdWx0J1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBjeChjbGFzc05hbWUsIHRoZW1lLmdldEJhZGdlQ2xhc3NOYW1lKGFwcGVhcmFuY2UpKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHJvbmdcbiAgICAgICAgc2l6ZT17MzAwfVxuICAgICAgICB7Li4uQmFkZ2Uuc3R5bGVzfVxuICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lc31cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShCYWRnZSlcbiJdfQ==