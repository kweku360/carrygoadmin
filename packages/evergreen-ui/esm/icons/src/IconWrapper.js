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
import Box from 'ui-box';
/**
 * This is an internal helper component for rendering custom or Evergreen icons
 * Box props are applied to the outer Box container, and Evergreen icon-specific props are added to the icon element.
 */

export var IconWrapper = /*#__PURE__*/function (_PureComponent) {
  _inherits(IconWrapper, _PureComponent);

  var _super = _createSuper(IconWrapper);

  function IconWrapper() {
    _classCallCheck(this, IconWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(IconWrapper, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          icon = _this$props.icon,
          size = _this$props.size,
          title = _this$props.title,
          color = _this$props.color,
          boxProps = _objectWithoutProperties(_this$props, ["icon", "size", "title", "color"]);

      if (!icon || typeof icon === 'string' || !React.isValidElement(icon)) {
        return null;
      } // Used as a short-hand to add props to an icon component. This component should not be used externally.


      var iconWithProps = React.cloneElement(icon, _objectSpread({
        size: size,
        title: title,
        color: color
      }, icon.props));
      return React.createElement(Box, _extends({
        display: "inline-flex"
      }, boxProps), iconWithProps);
    }
  }]);

  return IconWrapper;
}(PureComponent);
IconWrapper.displayName = "IconWrapper";

_defineProperty(IconWrapper, "propTypes", {
  /**
   * Color of icon. Equivalent to setting CSS `fill` property.
   */
  color: PropTypes.string,

  /**
   * The icon component - whether an Evergreen icon or a custom icon node:
   *
   * - If `null` or `undefined` or `false`, this component will render nothing.
   * - If given a `JSX.Element`, that element will be rendered, with size/color/title props cloned into it
   *
   *   As a consumer, you should never use `<IconWrapper icon={<element />}` directly; simply render `<element />` instead.
   */
  icon: PropTypes.node,

  /**
   * Size of the icon, in pixels.
   * Icons contains 16px and 20px SVG icon paths,
   * and chooses the appropriate resolution based on this prop.
   */
  size: PropTypes.number,

  /**
   * Description string.
   * Browsers usually render this as a tooltip on hover, whereas screen
   * readers will use it for aural feedback.
   * By default, this is set to the icon's name for accessibility.
   */
  title: PropTypes.string
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9zcmMvSWNvbldyYXBwZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiQm94IiwiSWNvbldyYXBwZXIiLCJwcm9wcyIsImljb24iLCJzaXplIiwidGl0bGUiLCJjb2xvciIsImJveFByb3BzIiwiaXNWYWxpZEVsZW1lbnQiLCJpY29uV2l0aFByb3BzIiwiY2xvbmVFbGVtZW50Iiwic3RyaW5nIiwibm9kZSIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxHQUFQLE1BQWdCLFFBQWhCO0FBRUE7Ozs7O0FBSUEsV0FBYUMsV0FBYjtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsNkJBaUNXO0FBQUEsd0JBQzJDLEtBQUtDLEtBRGhEO0FBQUEsVUFDQ0MsSUFERCxlQUNDQSxJQUREO0FBQUEsVUFDT0MsSUFEUCxlQUNPQSxJQURQO0FBQUEsVUFDYUMsS0FEYixlQUNhQSxLQURiO0FBQUEsVUFDb0JDLEtBRHBCLGVBQ29CQSxLQURwQjtBQUFBLFVBQzhCQyxRQUQ5Qjs7QUFHUCxVQUFJLENBQUNKLElBQUQsSUFBUyxPQUFPQSxJQUFQLEtBQWdCLFFBQXpCLElBQXFDLENBQUNOLEtBQUssQ0FBQ1csY0FBTixDQUFxQkwsSUFBckIsQ0FBMUMsRUFBc0U7QUFDcEUsZUFBTyxJQUFQO0FBQ0QsT0FMTSxDQU9QOzs7QUFDQSxVQUFNTSxhQUFhLEdBQUdaLEtBQUssQ0FBQ2EsWUFBTixDQUFtQlAsSUFBbkI7QUFDcEJDLFFBQUFBLElBQUksRUFBSkEsSUFEb0I7QUFFcEJDLFFBQUFBLEtBQUssRUFBTEEsS0FGb0I7QUFHcEJDLFFBQUFBLEtBQUssRUFBTEE7QUFIb0IsU0FJakJILElBQUksQ0FBQ0QsS0FKWSxFQUF0QjtBQU9BLGFBQ0Usb0JBQUMsR0FBRDtBQUFLLFFBQUEsT0FBTyxFQUFDO0FBQWIsU0FBK0JLLFFBQS9CLEdBQ0dFLGFBREgsQ0FERjtBQUtEO0FBckRIOztBQUFBO0FBQUEsRUFBaUNYLGFBQWpDO0FBQWFHLFc7O2dCQUFBQSxXLGVBQ1E7QUFDakI7OztBQUdBSyxFQUFBQSxLQUFLLEVBQUVQLFNBQVMsQ0FBQ1ksTUFKQTs7QUFNakI7Ozs7Ozs7O0FBUUFSLEVBQUFBLElBQUksRUFBRUosU0FBUyxDQUFDYSxJQWRDOztBQWdCakI7Ozs7O0FBS0FSLEVBQUFBLElBQUksRUFBRUwsU0FBUyxDQUFDYyxNQXJCQzs7QUF1QmpCOzs7Ozs7QUFNQVIsRUFBQUEsS0FBSyxFQUFFTixTQUFTLENBQUNZO0FBN0JBLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5cbi8qKlxuICogVGhpcyBpcyBhbiBpbnRlcm5hbCBoZWxwZXIgY29tcG9uZW50IGZvciByZW5kZXJpbmcgY3VzdG9tIG9yIEV2ZXJncmVlbiBpY29uc1xuICogQm94IHByb3BzIGFyZSBhcHBsaWVkIHRvIHRoZSBvdXRlciBCb3ggY29udGFpbmVyLCBhbmQgRXZlcmdyZWVuIGljb24tc3BlY2lmaWMgcHJvcHMgYXJlIGFkZGVkIHRvIHRoZSBpY29uIGVsZW1lbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBJY29uV3JhcHBlciBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbG9yIG9mIGljb24uIEVxdWl2YWxlbnQgdG8gc2V0dGluZyBDU1MgYGZpbGxgIHByb3BlcnR5LlxuICAgICAqL1xuICAgIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGljb24gY29tcG9uZW50IC0gd2hldGhlciBhbiBFdmVyZ3JlZW4gaWNvbiBvciBhIGN1c3RvbSBpY29uIG5vZGU6XG4gICAgICpcbiAgICAgKiAtIElmIGBudWxsYCBvciBgdW5kZWZpbmVkYCBvciBgZmFsc2VgLCB0aGlzIGNvbXBvbmVudCB3aWxsIHJlbmRlciBub3RoaW5nLlxuICAgICAqIC0gSWYgZ2l2ZW4gYSBgSlNYLkVsZW1lbnRgLCB0aGF0IGVsZW1lbnQgd2lsbCBiZSByZW5kZXJlZCwgd2l0aCBzaXplL2NvbG9yL3RpdGxlIHByb3BzIGNsb25lZCBpbnRvIGl0XG4gICAgICpcbiAgICAgKiAgIEFzIGEgY29uc3VtZXIsIHlvdSBzaG91bGQgbmV2ZXIgdXNlIGA8SWNvbldyYXBwZXIgaWNvbj17PGVsZW1lbnQgLz59YCBkaXJlY3RseTsgc2ltcGx5IHJlbmRlciBgPGVsZW1lbnQgLz5gIGluc3RlYWQuXG4gICAgICovXG4gICAgaWNvbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBTaXplIG9mIHRoZSBpY29uLCBpbiBwaXhlbHMuXG4gICAgICogSWNvbnMgY29udGFpbnMgMTZweCBhbmQgMjBweCBTVkcgaWNvbiBwYXRocyxcbiAgICAgKiBhbmQgY2hvb3NlcyB0aGUgYXBwcm9wcmlhdGUgcmVzb2x1dGlvbiBiYXNlZCBvbiB0aGlzIHByb3AuXG4gICAgICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIERlc2NyaXB0aW9uIHN0cmluZy5cbiAgICAgKiBCcm93c2VycyB1c3VhbGx5IHJlbmRlciB0aGlzIGFzIGEgdG9vbHRpcCBvbiBob3Zlciwgd2hlcmVhcyBzY3JlZW5cbiAgICAgKiByZWFkZXJzIHdpbGwgdXNlIGl0IGZvciBhdXJhbCBmZWVkYmFjay5cbiAgICAgKiBCeSBkZWZhdWx0LCB0aGlzIGlzIHNldCB0byB0aGUgaWNvbidzIG5hbWUgZm9yIGFjY2Vzc2liaWxpdHkuXG4gICAgICovXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGljb24sIHNpemUsIHRpdGxlLCBjb2xvciwgLi4uYm94UHJvcHMgfSA9IHRoaXMucHJvcHNcblxuICAgIGlmICghaWNvbiB8fCB0eXBlb2YgaWNvbiA9PT0gJ3N0cmluZycgfHwgIVJlYWN0LmlzVmFsaWRFbGVtZW50KGljb24pKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8vIFVzZWQgYXMgYSBzaG9ydC1oYW5kIHRvIGFkZCBwcm9wcyB0byBhbiBpY29uIGNvbXBvbmVudC4gVGhpcyBjb21wb25lbnQgc2hvdWxkIG5vdCBiZSB1c2VkIGV4dGVybmFsbHkuXG4gICAgY29uc3QgaWNvbldpdGhQcm9wcyA9IFJlYWN0LmNsb25lRWxlbWVudChpY29uLCB7XG4gICAgICBzaXplLFxuICAgICAgdGl0bGUsXG4gICAgICBjb2xvcixcbiAgICAgIC4uLmljb24ucHJvcHNcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggZGlzcGxheT1cImlubGluZS1mbGV4XCIgey4uLmJveFByb3BzfT5cbiAgICAgICAge2ljb25XaXRoUHJvcHN9XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cbn1cbiJdfQ==