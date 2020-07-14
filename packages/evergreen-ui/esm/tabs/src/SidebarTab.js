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
import Box from 'ui-box';
import Tab from './Tab';

var SidebarTab = /*#__PURE__*/function (_PureComponent) {
  _inherits(SidebarTab, _PureComponent);

  var _super = _createSuper(SidebarTab);

  function SidebarTab() {
    _classCallCheck(this, SidebarTab);

    return _super.apply(this, arguments);
  }

  _createClass(SidebarTab, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          height = _this$props.height,
          isSelected = _this$props.isSelected,
          props = _objectWithoutProperties(_this$props, ["children", "height", "isSelected"]);

      return React.createElement(Tab, _extends({
        isSelected: isSelected,
        height: height
      }, SidebarTab.styles, props, {
        display: "flex"
      }), React.createElement(Box, {
        is: "span",
        flex: "1"
      }, children));
    }
  }]);

  return SidebarTab;
}(PureComponent);

SidebarTab.displayName = "SidebarTab";

_defineProperty(SidebarTab, "propTypes", _objectSpread({}, Tab.propTypes));

_defineProperty(SidebarTab, "defaultProps", {
  height: 32
});

_defineProperty(SidebarTab, "styles", {
  width: '100%',
  paddingX: 0,
  paddingLeft: 8,
  marginX: 0,
  marginBottom: 4,
  justifyContent: 'auto'
});

export { SidebarTab as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJzL3NyYy9TaWRlYmFyVGFiLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIkJveCIsIlRhYiIsIlNpZGViYXJUYWIiLCJwcm9wcyIsImNoaWxkcmVuIiwiaGVpZ2h0IiwiaXNTZWxlY3RlZCIsInN0eWxlcyIsInByb3BUeXBlcyIsIndpZHRoIiwicGFkZGluZ1giLCJwYWRkaW5nTGVmdCIsIm1hcmdpblgiLCJtYXJnaW5Cb3R0b20iLCJqdXN0aWZ5Q29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsUUFBaEI7QUFDQSxPQUFPQyxHQUFQLE1BQWdCLE9BQWhCOztJQUVxQkMsVTs7Ozs7Ozs7Ozs7Ozs2QkFrQlY7QUFBQSx3QkFDNEMsS0FBS0MsS0FEakQ7QUFBQSxVQUNDQyxRQURELGVBQ0NBLFFBREQ7QUFBQSxVQUNXQyxNQURYLGVBQ1dBLE1BRFg7QUFBQSxVQUNtQkMsVUFEbkIsZUFDbUJBLFVBRG5CO0FBQUEsVUFDa0NILEtBRGxDOztBQUVQLGFBQ0Usb0JBQUMsR0FBRDtBQUNFLFFBQUEsVUFBVSxFQUFFRyxVQURkO0FBRUUsUUFBQSxNQUFNLEVBQUVEO0FBRlYsU0FHTUgsVUFBVSxDQUFDSyxNQUhqQixFQUlNSixLQUpOO0FBS0UsUUFBQSxPQUFPLEVBQUM7QUFMVixVQU9FLG9CQUFDLEdBQUQ7QUFBSyxRQUFBLEVBQUUsRUFBQyxNQUFSO0FBQWUsUUFBQSxJQUFJLEVBQUM7QUFBcEIsU0FDR0MsUUFESCxDQVBGLENBREY7QUFhRDs7OztFQWpDcUNMLGE7O0FBQW5CRyxVOztnQkFBQUEsVSxpQ0FFZEQsR0FBRyxDQUFDTyxTOztnQkFGVU4sVSxrQkFLRztBQUNwQkcsRUFBQUEsTUFBTSxFQUFFO0FBRFksQzs7Z0JBTEhILFUsWUFTSDtBQUNkTyxFQUFBQSxLQUFLLEVBQUUsTUFETztBQUVkQyxFQUFBQSxRQUFRLEVBQUUsQ0FGSTtBQUdkQyxFQUFBQSxXQUFXLEVBQUUsQ0FIQztBQUlkQyxFQUFBQSxPQUFPLEVBQUUsQ0FKSztBQUtkQyxFQUFBQSxZQUFZLEVBQUUsQ0FMQTtBQU1kQyxFQUFBQSxjQUFjLEVBQUU7QUFORixDOztTQVRHWixVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuaW1wb3J0IFRhYiBmcm9tICcuL1RhYidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZWJhclRhYiBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC4uLlRhYi5wcm9wVHlwZXNcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaGVpZ2h0OiAzMlxuICB9XG5cbiAgc3RhdGljIHN0eWxlcyA9IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHBhZGRpbmdYOiAwLFxuICAgIHBhZGRpbmdMZWZ0OiA4LFxuICAgIG1hcmdpblg6IDAsXG4gICAgbWFyZ2luQm90dG9tOiA0LFxuICAgIGp1c3RpZnlDb250ZW50OiAnYXV0bydcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBoZWlnaHQsIGlzU2VsZWN0ZWQsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWJcbiAgICAgICAgaXNTZWxlY3RlZD17aXNTZWxlY3RlZH1cbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIHsuLi5TaWRlYmFyVGFiLnN0eWxlc31cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICA+XG4gICAgICAgIDxCb3ggaXM9XCJzcGFuXCIgZmxleD1cIjFcIj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9UYWI+XG4gICAgKVxuICB9XG59XG4iXX0=