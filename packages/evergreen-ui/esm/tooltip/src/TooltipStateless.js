import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Pane } from '../../layers';
import { Paragraph } from '../../typography';
import { withTheme } from '../../theme';

var TooltipStateless = /*#__PURE__*/function (_PureComponent) {
  _inherits(TooltipStateless, _PureComponent);

  var _super = _createSuper(TooltipStateless);

  function TooltipStateless() {
    _classCallCheck(this, TooltipStateless);

    return _super.apply(this, arguments);
  }

  _createClass(TooltipStateless, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          children = _this$props.children,
          appearance = _this$props.appearance,
          props = _objectWithoutProperties(_this$props, ["theme", "children", "appearance"]);

      var _theme$getTooltipProp = theme.getTooltipProps(appearance),
          color = _theme$getTooltipProp.color,
          themedProps = _objectWithoutProperties(_theme$getTooltipProp, ["color"]);

      var child;

      if (typeof children === 'string') {
        child = React.createElement(Paragraph, {
          color: color,
          size: 400
        }, children);
      } else {
        child = children;
      }

      return React.createElement(Pane, _extends({
        borderRadius: 3,
        paddingX: 8,
        paddingY: 4,
        maxWidth: 240
      }, themedProps, props), child);
    }
  }]);

  return TooltipStateless;
}(PureComponent);

TooltipStateless.displayName = "TooltipStateless";

_defineProperty(TooltipStateless, "propTypes", {
  children: PropTypes.node,

  /**
   * The appearance of the tooltip.
   */
  appearance: PropTypes.oneOf(['default', 'card']).isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
});

export default withTheme(TooltipStateless);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b29sdGlwL3NyYy9Ub29sdGlwU3RhdGVsZXNzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIlBhbmUiLCJQYXJhZ3JhcGgiLCJ3aXRoVGhlbWUiLCJUb29sdGlwU3RhdGVsZXNzIiwicHJvcHMiLCJ0aGVtZSIsImNoaWxkcmVuIiwiYXBwZWFyYW5jZSIsImdldFRvb2x0aXBQcm9wcyIsImNvbG9yIiwidGhlbWVkUHJvcHMiLCJjaGlsZCIsIm5vZGUiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGNBQXJCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixrQkFBMUI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGFBQTFCOztJQUVNQyxnQjs7Ozs7Ozs7Ozs7Ozs2QkFlSztBQUFBLHdCQUMyQyxLQUFLQyxLQURoRDtBQUFBLFVBQ0NDLEtBREQsZUFDQ0EsS0FERDtBQUFBLFVBQ1FDLFFBRFIsZUFDUUEsUUFEUjtBQUFBLFVBQ2tCQyxVQURsQixlQUNrQkEsVUFEbEI7QUFBQSxVQUNpQ0gsS0FEakM7O0FBQUEsa0NBRTJCQyxLQUFLLENBQUNHLGVBQU4sQ0FBc0JELFVBQXRCLENBRjNCO0FBQUEsVUFFQ0UsS0FGRCx5QkFFQ0EsS0FGRDtBQUFBLFVBRVdDLFdBRlg7O0FBSVAsVUFBSUMsS0FBSjs7QUFDQSxVQUFJLE9BQU9MLFFBQVAsS0FBb0IsUUFBeEIsRUFBa0M7QUFDaENLLFFBQUFBLEtBQUssR0FDSCxvQkFBQyxTQUFEO0FBQVcsVUFBQSxLQUFLLEVBQUVGLEtBQWxCO0FBQXlCLFVBQUEsSUFBSSxFQUFFO0FBQS9CLFdBQ0dILFFBREgsQ0FERjtBQUtELE9BTkQsTUFNTztBQUNMSyxRQUFBQSxLQUFLLEdBQUdMLFFBQVI7QUFDRDs7QUFFRCxhQUNFLG9CQUFDLElBQUQ7QUFDRSxRQUFBLFlBQVksRUFBRSxDQURoQjtBQUVFLFFBQUEsUUFBUSxFQUFFLENBRlo7QUFHRSxRQUFBLFFBQVEsRUFBRSxDQUhaO0FBSUUsUUFBQSxRQUFRLEVBQUU7QUFKWixTQUtNSSxXQUxOLEVBTU1OLEtBTk4sR0FRR08sS0FSSCxDQURGO0FBWUQ7Ozs7RUExQzRCYixhOztBQUF6QkssZ0I7O2dCQUFBQSxnQixlQUNlO0FBQ2pCRyxFQUFBQSxRQUFRLEVBQUVQLFNBQVMsQ0FBQ2EsSUFESDs7QUFHakI7OztBQUdBTCxFQUFBQSxVQUFVLEVBQUVSLFNBQVMsQ0FBQ2MsS0FBVixDQUFnQixDQUFDLFNBQUQsRUFBWSxNQUFaLENBQWhCLEVBQXFDQyxVQU5oQzs7QUFRakI7OztBQUdBVCxFQUFBQSxLQUFLLEVBQUVOLFNBQVMsQ0FBQ2dCLE1BQVYsQ0FBaUJEO0FBWFAsQzs7QUE0Q3JCLGVBQWVaLFNBQVMsQ0FBQ0MsZ0JBQUQsQ0FBeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IFBhcmFncmFwaCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuY2xhc3MgVG9vbHRpcFN0YXRlbGVzcyBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSB0b29sdGlwLlxuICAgICAqL1xuICAgIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAnY2FyZCddKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aGVtZSwgY2hpbGRyZW4sIGFwcGVhcmFuY2UsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBjb2xvciwgLi4udGhlbWVkUHJvcHMgfSA9IHRoZW1lLmdldFRvb2x0aXBQcm9wcyhhcHBlYXJhbmNlKVxuXG4gICAgbGV0IGNoaWxkXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNoaWxkID0gKFxuICAgICAgICA8UGFyYWdyYXBoIGNvbG9yPXtjb2xvcn0gc2l6ZT17NDAwfT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lXG4gICAgICAgIGJvcmRlclJhZGl1cz17M31cbiAgICAgICAgcGFkZGluZ1g9ezh9XG4gICAgICAgIHBhZGRpbmdZPXs0fVxuICAgICAgICBtYXhXaWR0aD17MjQwfVxuICAgICAgICB7Li4udGhlbWVkUHJvcHN9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAge2NoaWxkfVxuICAgICAgPC9QYW5lPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoVG9vbHRpcFN0YXRlbGVzcylcbiJdfQ==