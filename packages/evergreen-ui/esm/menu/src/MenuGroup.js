import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import PropTypes from 'prop-types';
import { Pane } from '../../layers';
import { Heading } from '../../typography';

var MenuGroup = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(MenuGroup, _React$PureComponent);

  var _super = _createSuper(MenuGroup);

  function MenuGroup() {
    _classCallCheck(this, MenuGroup);

    return _super.apply(this, arguments);
  }

  _createClass(MenuGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          children = _this$props.children;
      return React.createElement(Pane, {
        paddingY: 8
      }, title && React.createElement(Heading, {
        size: 100,
        marginX: 16,
        marginY: 8
      }, title), children);
    }
  }]);

  return MenuGroup;
}(React.PureComponent);

MenuGroup.displayName = "MenuGroup";

_defineProperty(MenuGroup, "propTypes", {
  /**
   * Title of the menu group.
   */
  title: PropTypes.node,

  /**
   * The children of the menu group.
   */
  children: PropTypes.node
});

export { MenuGroup as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tZW51L3NyYy9NZW51R3JvdXAuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJQYW5lIiwiSGVhZGluZyIsIk1lbnVHcm91cCIsInByb3BzIiwidGl0bGUiLCJjaGlsZHJlbiIsIlB1cmVDb21wb25lbnQiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixjQUFyQjtBQUNBLFNBQVNDLE9BQVQsUUFBd0Isa0JBQXhCOztJQUVxQkMsUzs7Ozs7Ozs7Ozs7Ozs2QkFhVjtBQUFBLHdCQUNxQixLQUFLQyxLQUQxQjtBQUFBLFVBQ0NDLEtBREQsZUFDQ0EsS0FERDtBQUFBLFVBQ1FDLFFBRFIsZUFDUUEsUUFEUjtBQUVQLGFBQ0Usb0JBQUMsSUFBRDtBQUFNLFFBQUEsUUFBUSxFQUFFO0FBQWhCLFNBQ0dELEtBQUssSUFDSixvQkFBQyxPQUFEO0FBQVMsUUFBQSxJQUFJLEVBQUUsR0FBZjtBQUFvQixRQUFBLE9BQU8sRUFBRSxFQUE3QjtBQUFpQyxRQUFBLE9BQU8sRUFBRTtBQUExQyxTQUNHQSxLQURILENBRkosRUFNR0MsUUFOSCxDQURGO0FBVUQ7Ozs7RUF6Qm9DUCxLQUFLLENBQUNRLGE7O0FBQXhCSixTOztnQkFBQUEsUyxlQUNBO0FBQ2pCOzs7QUFHQUUsRUFBQUEsS0FBSyxFQUFFTCxTQUFTLENBQUNRLElBSkE7O0FBTWpCOzs7QUFHQUYsRUFBQUEsUUFBUSxFQUFFTixTQUFTLENBQUNRO0FBVEgsQzs7U0FEQUwsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBIZWFkaW5nIH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudUdyb3VwIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGl0bGUgb2YgdGhlIG1lbnUgZ3JvdXAuXG4gICAgICovXG4gICAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNoaWxkcmVuIG9mIHRoZSBtZW51IGdyb3VwLlxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGl0bGUsIGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lIHBhZGRpbmdZPXs4fT5cbiAgICAgICAge3RpdGxlICYmIChcbiAgICAgICAgICA8SGVhZGluZyBzaXplPXsxMDB9IG1hcmdpblg9ezE2fSBtYXJnaW5ZPXs4fT5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICl9XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cbn1cbiJdfQ==