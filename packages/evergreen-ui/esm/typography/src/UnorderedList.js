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

var UnorderedList = /*#__PURE__*/function (_PureComponent) {
  _inherits(UnorderedList, _PureComponent);

  var _super = _createSuper(UnorderedList);

  function UnorderedList() {
    _classCallCheck(this, UnorderedList);

    return _super.apply(this, arguments);
  }

  _createClass(UnorderedList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          size = _this$props.size,
          icon = _this$props.icon,
          props = _objectWithoutProperties(_this$props, ["children", "size", "icon"]);

      var enrichedChildren = React.Children.map(children, function (child) {
        if (!React.isValidElement(child)) {
          return child;
        }

        return React.cloneElement(child, _objectSpread({
          icon: icon,
          size: size
        }, child.props));
      });
      return React.createElement(Box, _extends({}, UnorderedList.styles, props), enrichedChildren);
    }
  }]);

  return UnorderedList;
}(PureComponent);

UnorderedList.displayName = "UnorderedList";

_defineProperty(UnorderedList, "propTypes", _objectSpread({}, Box.propTypes, {
  /**
   * Size of the text used in a list item.
   * Can be: 300, 400, 500, 600.
   */
  size: PropTypes.oneOf([300, 400, 500, 600]).isRequired,

  /**
   * When passed, adds a icon before each list item in the list
   * You can override this on a individual list item.
   */
  icon: PropTypes.node
}));

_defineProperty(UnorderedList, "defaultProps", {
  size: 400
});

_defineProperty(UnorderedList, "styles", {
  is: 'ul',
  margin: 0,
  marginLeft: '1.1em',
  padding: 0,
  listStyle: 'disc'
});

export { UnorderedList as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9Vbm9yZGVyZWRMaXN0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIkJveCIsIlVub3JkZXJlZExpc3QiLCJwcm9wcyIsImNoaWxkcmVuIiwic2l6ZSIsImljb24iLCJlbnJpY2hlZENoaWxkcmVuIiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImlzVmFsaWRFbGVtZW50IiwiY2xvbmVFbGVtZW50Iiwic3R5bGVzIiwicHJvcFR5cGVzIiwib25lT2YiLCJpc1JlcXVpcmVkIiwibm9kZSIsImlzIiwibWFyZ2luIiwibWFyZ2luTGVmdCIsInBhZGRpbmciLCJsaXN0U3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixRQUFoQjs7SUFFcUJDLGE7Ozs7Ozs7Ozs7Ozs7NkJBNkJWO0FBQUEsd0JBQ29DLEtBQUtDLEtBRHpDO0FBQUEsVUFDQ0MsUUFERCxlQUNDQSxRQUREO0FBQUEsVUFDV0MsSUFEWCxlQUNXQSxJQURYO0FBQUEsVUFDaUJDLElBRGpCLGVBQ2lCQSxJQURqQjtBQUFBLFVBQzBCSCxLQUQxQjs7QUFHUCxVQUFNSSxnQkFBZ0IsR0FBR1QsS0FBSyxDQUFDVSxRQUFOLENBQWVDLEdBQWYsQ0FBbUJMLFFBQW5CLEVBQTZCLFVBQUFNLEtBQUssRUFBSTtBQUM3RCxZQUFJLENBQUNaLEtBQUssQ0FBQ2EsY0FBTixDQUFxQkQsS0FBckIsQ0FBTCxFQUFrQztBQUNoQyxpQkFBT0EsS0FBUDtBQUNEOztBQUVELGVBQU9aLEtBQUssQ0FBQ2MsWUFBTixDQUFtQkYsS0FBbkI7QUFDTEosVUFBQUEsSUFBSSxFQUFKQSxJQURLO0FBRUxELFVBQUFBLElBQUksRUFBSkE7QUFGSyxXQUlGSyxLQUFLLENBQUNQLEtBSkosRUFBUDtBQU1ELE9BWHdCLENBQXpCO0FBYUEsYUFDRSxvQkFBQyxHQUFELGVBQVNELGFBQWEsQ0FBQ1csTUFBdkIsRUFBbUNWLEtBQW5DLEdBQ0dJLGdCQURILENBREY7QUFLRDs7OztFQWxEd0NSLGE7O0FBQXRCRyxhOztnQkFBQUEsYSxpQ0FFZEQsR0FBRyxDQUFDYSxTO0FBRVA7Ozs7QUFJQVQsRUFBQUEsSUFBSSxFQUFFTCxTQUFTLENBQUNlLEtBQVYsQ0FBZ0IsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsQ0FBaEIsRUFBc0NDLFU7O0FBRTVDOzs7O0FBSUFWLEVBQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDaUI7OztnQkFkQ2YsYSxrQkFpQkc7QUFDcEJHLEVBQUFBLElBQUksRUFBRTtBQURjLEM7O2dCQWpCSEgsYSxZQXFCSDtBQUNkZ0IsRUFBQUEsRUFBRSxFQUFFLElBRFU7QUFFZEMsRUFBQUEsTUFBTSxFQUFFLENBRk07QUFHZEMsRUFBQUEsVUFBVSxFQUFFLE9BSEU7QUFJZEMsRUFBQUEsT0FBTyxFQUFFLENBSks7QUFLZEMsRUFBQUEsU0FBUyxFQUFFO0FBTEcsQzs7U0FyQkdwQixhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbm9yZGVyZWRMaXN0IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLi4uQm94LnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFNpemUgb2YgdGhlIHRleHQgdXNlZCBpbiBhIGxpc3QgaXRlbS5cbiAgICAgKiBDYW4gYmU6IDMwMCwgNDAwLCA1MDAsIDYwMC5cbiAgICAgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoWzMwMCwgNDAwLCA1MDAsIDYwMF0pLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHBhc3NlZCwgYWRkcyBhIGljb24gYmVmb3JlIGVhY2ggbGlzdCBpdGVtIGluIHRoZSBsaXN0XG4gICAgICogWW91IGNhbiBvdmVycmlkZSB0aGlzIG9uIGEgaW5kaXZpZHVhbCBsaXN0IGl0ZW0uXG4gICAgICovXG4gICAgaWNvbjogUHJvcFR5cGVzLm5vZGVcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc2l6ZTogNDAwXG4gIH1cblxuICBzdGF0aWMgc3R5bGVzID0ge1xuICAgIGlzOiAndWwnLFxuICAgIG1hcmdpbjogMCxcbiAgICBtYXJnaW5MZWZ0OiAnMS4xZW0nLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgbGlzdFN0eWxlOiAnZGlzYydcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBzaXplLCBpY29uLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgZW5yaWNoZWRDaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT4ge1xuICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgaWNvbixcbiAgICAgICAgc2l6ZSxcbiAgICAgICAgLy8gUHJlZmVyIG1vcmUgZ3JhbnVsYXJseSBkZWZpbmVkIHByb3BzIGlmIHByZXNlbnRcbiAgICAgICAgLi4uY2hpbGQucHJvcHNcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94IHsuLi5Vbm9yZGVyZWRMaXN0LnN0eWxlc30gey4uLnByb3BzfT5cbiAgICAgICAge2VucmljaGVkQ2hpbGRyZW59XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cbn1cbiJdfQ==