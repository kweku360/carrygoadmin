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
import PropTypes from 'prop-types';
import { dimensions, spacing, position, layout } from 'ui-box';
import { withTheme } from '../../theme';
import Button from './Button';

var IconButton = /*#__PURE__*/function (_PureComponent) {
  _inherits(IconButton, _PureComponent);

  var _super = _createSuper(IconButton);

  function IconButton() {
    _classCallCheck(this, IconButton);

    return _super.apply(this, arguments);
  }

  _createClass(IconButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          icon = _this$props.icon,
          iconSize = _this$props.iconSize,
          height = _this$props.height,
          intent = _this$props.intent,
          props = _objectWithoutProperties(_this$props, ["theme", "icon", "iconSize", "height", "intent"]);

      var iconWithProps;

      if (icon && React.isValidElement(icon)) {
        iconWithProps = React.cloneElement(icon, _objectSpread({
          color: intent === 'none' ? 'default' : 'currentColor',
          size: iconSize || theme.getIconSizeForIconButton(height)
        }, icon.props));
      }

      return React.createElement(Button, _extends({
        intent: intent,
        height: height,
        width: height,
        paddingLeft: 0,
        paddingRight: 0,
        display: "flex",
        justifyContent: "center"
      }, props), iconWithProps);
    }
  }]);

  return IconButton;
}(PureComponent);

IconButton.displayName = "IconButton";

_defineProperty(IconButton, "propTypes", _objectSpread({}, dimensions.propTypes, {}, spacing.propTypes, {}, position.propTypes, {}, layout.propTypes, {
  /**
   * The Evergreen icon or custom icon to render
   */
  icon: PropTypes.node,

  /**
   * Specifies an explicit icon size instead of the default value
   */
  iconSize: PropTypes.number,

  /**
   * The intent of the button.
   */
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * The appearance of the button.
   */
  appearance: PropTypes.oneOf(['default', 'minimal', 'primary']).isRequired,

  /**
   * Forcefully set the active state of a button.
   * Useful in conjuction with a Popover.
   */
  isActive: PropTypes.bool,

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

_defineProperty(IconButton, "defaultProps", {
  intent: 'none',
  appearance: 'default',
  height: 32
});

export default withTheme(IconButton);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idXR0b25zL3NyYy9JY29uQnV0dG9uLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsImRpbWVuc2lvbnMiLCJzcGFjaW5nIiwicG9zaXRpb24iLCJsYXlvdXQiLCJ3aXRoVGhlbWUiLCJCdXR0b24iLCJJY29uQnV0dG9uIiwicHJvcHMiLCJ0aGVtZSIsImljb24iLCJpY29uU2l6ZSIsImhlaWdodCIsImludGVudCIsImljb25XaXRoUHJvcHMiLCJpc1ZhbGlkRWxlbWVudCIsImNsb25lRWxlbWVudCIsImNvbG9yIiwic2l6ZSIsImdldEljb25TaXplRm9ySWNvbkJ1dHRvbiIsInByb3BUeXBlcyIsIm5vZGUiLCJudW1iZXIiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJhcHBlYXJhbmNlIiwiaXNBY3RpdmUiLCJib29sIiwiZGlzYWJsZWQiLCJvYmplY3QiLCJjbGFzc05hbWUiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsVUFBVCxFQUFxQkMsT0FBckIsRUFBOEJDLFFBQTlCLEVBQXdDQyxNQUF4QyxRQUFzRCxRQUF0RDtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsYUFBMUI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFVBQW5COztJQUVNQyxVOzs7Ozs7Ozs7Ozs7OzZCQXlFSztBQUFBLHdCQUNxRCxLQUFLQyxLQUQxRDtBQUFBLFVBQ0NDLEtBREQsZUFDQ0EsS0FERDtBQUFBLFVBQ1FDLElBRFIsZUFDUUEsSUFEUjtBQUFBLFVBQ2NDLFFBRGQsZUFDY0EsUUFEZDtBQUFBLFVBQ3dCQyxNQUR4QixlQUN3QkEsTUFEeEI7QUFBQSxVQUNnQ0MsTUFEaEMsZUFDZ0NBLE1BRGhDO0FBQUEsVUFDMkNMLEtBRDNDOztBQUdQLFVBQUlNLGFBQUo7O0FBQ0EsVUFBSUosSUFBSSxJQUFJWixLQUFLLENBQUNpQixjQUFOLENBQXFCTCxJQUFyQixDQUFaLEVBQXdDO0FBQ3RDSSxRQUFBQSxhQUFhLEdBQUdoQixLQUFLLENBQUNrQixZQUFOLENBQW1CTixJQUFuQjtBQUNkTyxVQUFBQSxLQUFLLEVBQUVKLE1BQU0sS0FBSyxNQUFYLEdBQW9CLFNBQXBCLEdBQWdDLGNBRHpCO0FBRWRLLFVBQUFBLElBQUksRUFBRVAsUUFBUSxJQUFJRixLQUFLLENBQUNVLHdCQUFOLENBQStCUCxNQUEvQjtBQUZKLFdBR1hGLElBQUksQ0FBQ0YsS0FITSxFQUFoQjtBQUtEOztBQUVELGFBQ0Usb0JBQUMsTUFBRDtBQUNFLFFBQUEsTUFBTSxFQUFFSyxNQURWO0FBRUUsUUFBQSxNQUFNLEVBQUVELE1BRlY7QUFHRSxRQUFBLEtBQUssRUFBRUEsTUFIVDtBQUlFLFFBQUEsV0FBVyxFQUFFLENBSmY7QUFLRSxRQUFBLFlBQVksRUFBRSxDQUxoQjtBQU1FLFFBQUEsT0FBTyxFQUFDLE1BTlY7QUFPRSxRQUFBLGNBQWMsRUFBQztBQVBqQixTQVFNSixLQVJOLEdBVUdNLGFBVkgsQ0FERjtBQWNEOzs7O0VBbkdzQmYsYTs7QUFBbkJRLFU7O2dCQUFBQSxVLGlDQUtDTixVQUFVLENBQUNtQixTLE1BS1hsQixPQUFPLENBQUNrQixTLE1BS1JqQixRQUFRLENBQUNpQixTLE1BS1RoQixNQUFNLENBQUNnQixTO0FBRVY7OztBQUdBVixFQUFBQSxJQUFJLEVBQUVWLFNBQVMsQ0FBQ3FCLEk7O0FBRWhCOzs7QUFHQVYsRUFBQUEsUUFBUSxFQUFFWCxTQUFTLENBQUNzQixNOztBQUVwQjs7O0FBR0FULEVBQUFBLE1BQU0sRUFBRWIsU0FBUyxDQUFDdUIsS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxTQUFULEVBQW9CLFNBQXBCLEVBQStCLFFBQS9CLENBQWhCLEVBQ0xDLFU7O0FBRUg7OztBQUdBQyxFQUFBQSxVQUFVLEVBQUV6QixTQUFTLENBQUN1QixLQUFWLENBQWdCLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUIsU0FBdkIsQ0FBaEIsRUFBbURDLFU7O0FBRS9EOzs7O0FBSUFFLEVBQUFBLFFBQVEsRUFBRTFCLFNBQVMsQ0FBQzJCLEk7O0FBRXBCOzs7O0FBSUFDLEVBQUFBLFFBQVEsRUFBRTVCLFNBQVMsQ0FBQzJCLEk7O0FBRXBCOzs7QUFHQWxCLEVBQUFBLEtBQUssRUFBRVQsU0FBUyxDQUFDNkIsTUFBVixDQUFpQkwsVTs7QUFFeEI7Ozs7QUFJQU0sRUFBQUEsU0FBUyxFQUFFOUIsU0FBUyxDQUFDK0I7OztnQkFoRW5CeEIsVSxrQkFtRWtCO0FBQ3BCTSxFQUFBQSxNQUFNLEVBQUUsTUFEWTtBQUVwQlksRUFBQUEsVUFBVSxFQUFFLFNBRlE7QUFHcEJiLEVBQUFBLE1BQU0sRUFBRTtBQUhZLEM7O0FBbUN4QixlQUFlUCxTQUFTLENBQUNFLFVBQUQsQ0FBeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgZGltZW5zaW9ucywgc3BhY2luZywgcG9zaXRpb24sIGxheW91dCB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcblxuY2xhc3MgSWNvbkJ1dHRvbiBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBkaW1lbnNpb25zIHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2ZS5cbiAgICAgKi9cbiAgICAuLi5kaW1lbnNpb25zLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBzcGFjaW5nIHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2ZS5cbiAgICAgKi9cbiAgICAuLi5zcGFjaW5nLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBwb3NpdGlvbiBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAgICovXG4gICAgLi4ucG9zaXRpb24ucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIGxheW91dCBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAgICovXG4gICAgLi4ubGF5b3V0LnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBFdmVyZ3JlZW4gaWNvbiBvciBjdXN0b20gaWNvbiB0byByZW5kZXJcbiAgICAgKi9cbiAgICBpY29uOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyBhbiBleHBsaWNpdCBpY29uIHNpemUgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCB2YWx1ZVxuICAgICAqL1xuICAgIGljb25TaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGludGVudCBvZiB0aGUgYnV0dG9uLlxuICAgICAqL1xuICAgIGludGVudDogUHJvcFR5cGVzLm9uZU9mKFsnbm9uZScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ10pXG4gICAgICAuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSBidXR0b24uXG4gICAgICovXG4gICAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLm9uZU9mKFsnZGVmYXVsdCcsICdtaW5pbWFsJywgJ3ByaW1hcnknXSkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZvcmNlZnVsbHkgc2V0IHRoZSBhY3RpdmUgc3RhdGUgb2YgYSBidXR0b24uXG4gICAgICogVXNlZnVsIGluIGNvbmp1Y3Rpb24gd2l0aCBhIFBvcG92ZXIuXG4gICAgICovXG4gICAgaXNBY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgYnV0dG9uIGlzIGRpc2FibGVkLlxuICAgICAqIGlzTG9hZGluZyBhbHNvIHNldHMgdGhlIGJ1dHRvbiB0byBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBDbGFzcyBuYW1lIHBhc3NlZCB0byB0aGUgYnV0dG9uLlxuICAgICAqIE9ubHkgdXNlIGlmIHlvdSBrbm93IHdoYXQgeW91IGFyZSBkb2luZy5cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaW50ZW50OiAnbm9uZScsXG4gICAgYXBwZWFyYW5jZTogJ2RlZmF1bHQnLFxuICAgIGhlaWdodDogMzJcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRoZW1lLCBpY29uLCBpY29uU2l6ZSwgaGVpZ2h0LCBpbnRlbnQsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG5cbiAgICBsZXQgaWNvbldpdGhQcm9wc1xuICAgIGlmIChpY29uICYmIFJlYWN0LmlzVmFsaWRFbGVtZW50KGljb24pKSB7XG4gICAgICBpY29uV2l0aFByb3BzID0gUmVhY3QuY2xvbmVFbGVtZW50KGljb24sIHtcbiAgICAgICAgY29sb3I6IGludGVudCA9PT0gJ25vbmUnID8gJ2RlZmF1bHQnIDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgIHNpemU6IGljb25TaXplIHx8IHRoZW1lLmdldEljb25TaXplRm9ySWNvbkJ1dHRvbihoZWlnaHQpLFxuICAgICAgICAuLi5pY29uLnByb3BzXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8QnV0dG9uXG4gICAgICAgIGludGVudD17aW50ZW50fVxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgd2lkdGg9e2hlaWdodH1cbiAgICAgICAgcGFkZGluZ0xlZnQ9ezB9XG4gICAgICAgIHBhZGRpbmdSaWdodD17MH1cbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAge2ljb25XaXRoUHJvcHN9XG4gICAgICA8L0J1dHRvbj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKEljb25CdXR0b24pXG4iXX0=