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
import { withTheme } from '../../theme';
import MenuOption from './MenuOption';

var MenuOptionsGroup = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(MenuOptionsGroup, _React$PureComponent);

  var _super = _createSuper(MenuOptionsGroup);

  function MenuOptionsGroup() {
    _classCallCheck(this, MenuOptionsGroup);

    return _super.apply(this, arguments);
  }

  _createClass(MenuOptionsGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          options = _this$props.options,
          selected = _this$props.selected,
          onChange = _this$props.onChange;
      return React.createElement(Pane, {
        paddingY: 8
      }, title && React.createElement(Heading, {
        size: 100,
        marginLeft: 44,
        marginRight: 16,
        marginY: 8
      }, title), React.createElement(Pane, null, options.map(function (option) {
        return React.createElement(MenuOption, {
          key: option.value,
          isSelected: option.value === selected,
          onSelect: function onSelect() {
            return onChange(option.value);
          }
        }, option.label);
      })));
    }
  }]);

  return MenuOptionsGroup;
}(React.PureComponent);

MenuOptionsGroup.displayName = "MenuOptionsGroup";

_defineProperty(MenuOptionsGroup, "propTypes", {
  /**
   * Title of the menu group.
   */
  title: PropTypes.node,

  /**
   * The current value of the option group.
   */
  selected: PropTypes.any,

  /**
   * Function called when selection changes.
   */
  onChange: PropTypes.func,

  /**
   * List of options rendered in the group.
   */
  options: PropTypes.array
});

export default withTheme(MenuOptionsGroup);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tZW51L3NyYy9NZW51T3B0aW9uc0dyb3VwLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiUGFuZSIsIkhlYWRpbmciLCJ3aXRoVGhlbWUiLCJNZW51T3B0aW9uIiwiTWVudU9wdGlvbnNHcm91cCIsInByb3BzIiwidGl0bGUiLCJvcHRpb25zIiwic2VsZWN0ZWQiLCJvbkNoYW5nZSIsIm1hcCIsIm9wdGlvbiIsInZhbHVlIiwibGFiZWwiLCJQdXJlQ29tcG9uZW50Iiwibm9kZSIsImFueSIsImZ1bmMiLCJhcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsY0FBckI7QUFDQSxTQUFTQyxPQUFULFFBQXdCLGtCQUF4QjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsYUFBMUI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLGNBQXZCOztJQUVNQyxnQjs7Ozs7Ozs7Ozs7Ozs2QkF1Qks7QUFBQSx3QkFDd0MsS0FBS0MsS0FEN0M7QUFBQSxVQUNDQyxLQURELGVBQ0NBLEtBREQ7QUFBQSxVQUNRQyxPQURSLGVBQ1FBLE9BRFI7QUFBQSxVQUNpQkMsUUFEakIsZUFDaUJBLFFBRGpCO0FBQUEsVUFDMkJDLFFBRDNCLGVBQzJCQSxRQUQzQjtBQUdQLGFBQ0Usb0JBQUMsSUFBRDtBQUFNLFFBQUEsUUFBUSxFQUFFO0FBQWhCLFNBQ0dILEtBQUssSUFDSixvQkFBQyxPQUFEO0FBQVMsUUFBQSxJQUFJLEVBQUUsR0FBZjtBQUFvQixRQUFBLFVBQVUsRUFBRSxFQUFoQztBQUFvQyxRQUFBLFdBQVcsRUFBRSxFQUFqRDtBQUFxRCxRQUFBLE9BQU8sRUFBRTtBQUE5RCxTQUNHQSxLQURILENBRkosRUFNRSxvQkFBQyxJQUFELFFBQ0dDLE9BQU8sQ0FBQ0csR0FBUixDQUFZLFVBQUNDLE1BQUQsRUFBWTtBQUN2QixlQUNFLG9CQUFDLFVBQUQ7QUFDRSxVQUFBLEdBQUcsRUFBRUEsTUFBTSxDQUFDQyxLQURkO0FBRUUsVUFBQSxVQUFVLEVBQUVELE1BQU0sQ0FBQ0MsS0FBUCxLQUFpQkosUUFGL0I7QUFHRSxVQUFBLFFBQVEsRUFBRTtBQUFBLG1CQUFNQyxRQUFRLENBQUNFLE1BQU0sQ0FBQ0MsS0FBUixDQUFkO0FBQUE7QUFIWixXQUtHRCxNQUFNLENBQUNFLEtBTFYsQ0FERjtBQVNELE9BVkEsQ0FESCxDQU5GLENBREY7QUFzQkQ7Ozs7RUFoRDRCZixLQUFLLENBQUNnQixhOztBQUEvQlYsZ0I7O2dCQUFBQSxnQixlQUNlO0FBQ2pCOzs7QUFHQUUsRUFBQUEsS0FBSyxFQUFFUCxTQUFTLENBQUNnQixJQUpBOztBQU1qQjs7O0FBR0FQLEVBQUFBLFFBQVEsRUFBRVQsU0FBUyxDQUFDaUIsR0FUSDs7QUFXakI7OztBQUdBUCxFQUFBQSxRQUFRLEVBQUVWLFNBQVMsQ0FBQ2tCLElBZEg7O0FBZ0JqQjs7O0FBR0FWLEVBQUFBLE9BQU8sRUFBRVIsU0FBUyxDQUFDbUI7QUFuQkYsQzs7QUFrRHJCLGVBQWVoQixTQUFTLENBQUNFLGdCQUFELENBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IEhlYWRpbmcgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5pbXBvcnQgTWVudU9wdGlvbiBmcm9tICcuL01lbnVPcHRpb24nXG5cbmNsYXNzIE1lbnVPcHRpb25zR3JvdXAgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaXRsZSBvZiB0aGUgbWVudSBncm91cC5cbiAgICAgKi9cbiAgICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgb3B0aW9uIGdyb3VwLlxuICAgICAqL1xuICAgIHNlbGVjdGVkOiBQcm9wVHlwZXMuYW55LFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHdoZW4gc2VsZWN0aW9uIGNoYW5nZXMuXG4gICAgICovXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogTGlzdCBvZiBvcHRpb25zIHJlbmRlcmVkIGluIHRoZSBncm91cC5cbiAgICAgKi9cbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRpdGxlLCBvcHRpb25zLCBzZWxlY3RlZCwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZSBwYWRkaW5nWT17OH0+XG4gICAgICAgIHt0aXRsZSAmJiAoXG4gICAgICAgICAgPEhlYWRpbmcgc2l6ZT17MTAwfSBtYXJnaW5MZWZ0PXs0NH0gbWFyZ2luUmlnaHQ9ezE2fSBtYXJnaW5ZPXs4fT5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICl9XG4gICAgICAgIDxQYW5lPlxuICAgICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8TWVudU9wdGlvblxuICAgICAgICAgICAgICAgIGtleT17b3B0aW9uLnZhbHVlfVxuICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e29wdGlvbi52YWx1ZSA9PT0gc2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgb25TZWxlY3Q9eygpID0+IG9uQ2hhbmdlKG9wdGlvbi52YWx1ZSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxuICAgICAgICAgICAgICA8L01lbnVPcHRpb24+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvUGFuZT5cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKE1lbnVPcHRpb25zR3JvdXApXG4iXX0=