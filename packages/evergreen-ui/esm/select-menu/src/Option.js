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
import { TickIcon } from '../../icons';
import { Image } from '../../image';
import { TableRow, TextTableCell } from '../../table';

var Option = /*#__PURE__*/function (_PureComponent) {
  _inherits(Option, _PureComponent);

  var _super = _createSuper(Option);

  function Option() {
    _classCallCheck(this, Option);

    return _super.apply(this, arguments);
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          onSelect = _this$props.onSelect,
          onDeselect = _this$props.onDeselect,
          isHighlighted = _this$props.isHighlighted,
          isSelected = _this$props.isSelected,
          isSelectable = _this$props.isSelectable,
          disabled = _this$props.disabled,
          style = _this$props.style,
          height = _this$props.height,
          icon = _this$props.icon,
          props = _objectWithoutProperties(_this$props, ["label", "onSelect", "onDeselect", "isHighlighted", "isSelected", "isSelectable", "disabled", "style", "height", "icon"]);

      var textProps = {};

      if (disabled) {
        textProps.color = 'muted';
      }

      if (isSelected) {
        textProps.color = 'selected';
      }

      return React.createElement(TableRow, _extends({
        isSelectable: isSelectable && !disabled,
        isHighlighted: isHighlighted,
        onSelect: onSelect,
        onDeselect: onDeselect,
        isSelected: isSelected,
        style: style,
        display: "flex",
        alignItems: "center",
        borderBottom: false
      }, props), React.createElement(Pane, {
        paddingLeft: 12,
        paddingRight: 8,
        opacity: isSelected ? 1 : 0,
        flexGrow: 0,
        paddingTop: 4
      }, React.createElement(TickIcon, {
        color: "selected",
        size: 14
      })), React.createElement(TextTableCell, {
        height: height,
        borderBottom: "muted",
        textProps: textProps,
        paddingLeft: 0,
        borderRight: null,
        flex: 1,
        alignSelf: "stretch",
        cursor: disabled ? 'default' : 'pointer'
      }, React.createElement(Pane, {
        alignItems: "center",
        display: "flex"
      }, icon && React.createElement(Image, {
        src: icon,
        width: 24,
        marginRight: 8
      }), label)));
    }
  }]);

  return Option;
}(PureComponent);

Option.displayName = "Option";

_defineProperty(Option, "propTypes", {
  label: PropTypes.string,
  icon: PropTypes.string,
  style: PropTypes.any,
  height: PropTypes.number,
  onSelect: PropTypes.func,
  onDeselect: PropTypes.func,
  isHighlighted: PropTypes.bool,
  isSelected: PropTypes.bool,
  isSelectable: PropTypes.bool,
  disabled: PropTypes.bool
});

export { Option as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3QtbWVudS9zcmMvT3B0aW9uLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIlBhbmUiLCJUaWNrSWNvbiIsIkltYWdlIiwiVGFibGVSb3ciLCJUZXh0VGFibGVDZWxsIiwiT3B0aW9uIiwicHJvcHMiLCJsYWJlbCIsIm9uU2VsZWN0Iiwib25EZXNlbGVjdCIsImlzSGlnaGxpZ2h0ZWQiLCJpc1NlbGVjdGVkIiwiaXNTZWxlY3RhYmxlIiwiZGlzYWJsZWQiLCJzdHlsZSIsImhlaWdodCIsImljb24iLCJ0ZXh0UHJvcHMiLCJjb2xvciIsInN0cmluZyIsImFueSIsIm51bWJlciIsImZ1bmMiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixjQUFyQjtBQUNBLFNBQVNDLFFBQVQsUUFBeUIsYUFBekI7QUFDQSxTQUFTQyxLQUFULFFBQXNCLGFBQXRCO0FBQ0EsU0FBU0MsUUFBVCxFQUFtQkMsYUFBbkIsUUFBd0MsYUFBeEM7O0lBRXFCQyxNOzs7Ozs7Ozs7Ozs7OzZCQWNWO0FBQUEsd0JBYUgsS0FBS0MsS0FiRjtBQUFBLFVBRUxDLEtBRkssZUFFTEEsS0FGSztBQUFBLFVBR0xDLFFBSEssZUFHTEEsUUFISztBQUFBLFVBSUxDLFVBSkssZUFJTEEsVUFKSztBQUFBLFVBS0xDLGFBTEssZUFLTEEsYUFMSztBQUFBLFVBTUxDLFVBTkssZUFNTEEsVUFOSztBQUFBLFVBT0xDLFlBUEssZUFPTEEsWUFQSztBQUFBLFVBUUxDLFFBUkssZUFRTEEsUUFSSztBQUFBLFVBU0xDLEtBVEssZUFTTEEsS0FUSztBQUFBLFVBVUxDLE1BVkssZUFVTEEsTUFWSztBQUFBLFVBV0xDLElBWEssZUFXTEEsSUFYSztBQUFBLFVBWUZWLEtBWkU7O0FBZVAsVUFBTVcsU0FBUyxHQUFHLEVBQWxCOztBQUNBLFVBQUlKLFFBQUosRUFBYztBQUNaSSxRQUFBQSxTQUFTLENBQUNDLEtBQVYsR0FBa0IsT0FBbEI7QUFDRDs7QUFFRCxVQUFJUCxVQUFKLEVBQWdCO0FBQ2RNLFFBQUFBLFNBQVMsQ0FBQ0MsS0FBVixHQUFrQixVQUFsQjtBQUNEOztBQUVELGFBQ0Usb0JBQUMsUUFBRDtBQUNFLFFBQUEsWUFBWSxFQUFFTixZQUFZLElBQUksQ0FBQ0MsUUFEakM7QUFFRSxRQUFBLGFBQWEsRUFBRUgsYUFGakI7QUFHRSxRQUFBLFFBQVEsRUFBRUYsUUFIWjtBQUlFLFFBQUEsVUFBVSxFQUFFQyxVQUpkO0FBS0UsUUFBQSxVQUFVLEVBQUVFLFVBTGQ7QUFNRSxRQUFBLEtBQUssRUFBRUcsS0FOVDtBQU9FLFFBQUEsT0FBTyxFQUFDLE1BUFY7QUFRRSxRQUFBLFVBQVUsRUFBQyxRQVJiO0FBU0UsUUFBQSxZQUFZLEVBQUU7QUFUaEIsU0FVTVIsS0FWTixHQVlFLG9CQUFDLElBQUQ7QUFDRSxRQUFBLFdBQVcsRUFBRSxFQURmO0FBRUUsUUFBQSxZQUFZLEVBQUUsQ0FGaEI7QUFHRSxRQUFBLE9BQU8sRUFBRUssVUFBVSxHQUFHLENBQUgsR0FBTyxDQUg1QjtBQUlFLFFBQUEsUUFBUSxFQUFFLENBSlo7QUFLRSxRQUFBLFVBQVUsRUFBRTtBQUxkLFNBT0Usb0JBQUMsUUFBRDtBQUFVLFFBQUEsS0FBSyxFQUFDLFVBQWhCO0FBQTJCLFFBQUEsSUFBSSxFQUFFO0FBQWpDLFFBUEYsQ0FaRixFQXFCRSxvQkFBQyxhQUFEO0FBQ0UsUUFBQSxNQUFNLEVBQUVJLE1BRFY7QUFFRSxRQUFBLFlBQVksRUFBQyxPQUZmO0FBR0UsUUFBQSxTQUFTLEVBQUVFLFNBSGI7QUFJRSxRQUFBLFdBQVcsRUFBRSxDQUpmO0FBS0UsUUFBQSxXQUFXLEVBQUUsSUFMZjtBQU1FLFFBQUEsSUFBSSxFQUFFLENBTlI7QUFPRSxRQUFBLFNBQVMsRUFBQyxTQVBaO0FBUUUsUUFBQSxNQUFNLEVBQUVKLFFBQVEsR0FBRyxTQUFILEdBQWU7QUFSakMsU0FVRSxvQkFBQyxJQUFEO0FBQU0sUUFBQSxVQUFVLEVBQUMsUUFBakI7QUFBMEIsUUFBQSxPQUFPLEVBQUM7QUFBbEMsU0FDR0csSUFBSSxJQUFJLG9CQUFDLEtBQUQ7QUFBTyxRQUFBLEdBQUcsRUFBRUEsSUFBWjtBQUFrQixRQUFBLEtBQUssRUFBRSxFQUF6QjtBQUE2QixRQUFBLFdBQVcsRUFBRTtBQUExQyxRQURYLEVBRUdULEtBRkgsQ0FWRixDQXJCRixDQURGO0FBdUNEOzs7O0VBN0VpQ1QsYTs7QUFBZk8sTTs7Z0JBQUFBLE0sZUFDQTtBQUNqQkUsRUFBQUEsS0FBSyxFQUFFUixTQUFTLENBQUNvQixNQURBO0FBRWpCSCxFQUFBQSxJQUFJLEVBQUVqQixTQUFTLENBQUNvQixNQUZDO0FBR2pCTCxFQUFBQSxLQUFLLEVBQUVmLFNBQVMsQ0FBQ3FCLEdBSEE7QUFJakJMLEVBQUFBLE1BQU0sRUFBRWhCLFNBQVMsQ0FBQ3NCLE1BSkQ7QUFLakJiLEVBQUFBLFFBQVEsRUFBRVQsU0FBUyxDQUFDdUIsSUFMSDtBQU1qQmIsRUFBQUEsVUFBVSxFQUFFVixTQUFTLENBQUN1QixJQU5MO0FBT2pCWixFQUFBQSxhQUFhLEVBQUVYLFNBQVMsQ0FBQ3dCLElBUFI7QUFRakJaLEVBQUFBLFVBQVUsRUFBRVosU0FBUyxDQUFDd0IsSUFSTDtBQVNqQlgsRUFBQUEsWUFBWSxFQUFFYixTQUFTLENBQUN3QixJQVRQO0FBVWpCVixFQUFBQSxRQUFRLEVBQUVkLFNBQVMsQ0FBQ3dCO0FBVkgsQzs7U0FEQWxCLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IFRpY2tJY29uIH0gZnJvbSAnLi4vLi4vaWNvbnMnXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJy4uLy4uL2ltYWdlJ1xuaW1wb3J0IHsgVGFibGVSb3csIFRleHRUYWJsZUNlbGwgfSBmcm9tICcuLi8uLi90YWJsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdHlsZTogUHJvcFR5cGVzLmFueSxcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRGVzZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIGlzSGlnaGxpZ2h0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzU2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzU2VsZWN0YWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbGFiZWwsXG4gICAgICBvblNlbGVjdCxcbiAgICAgIG9uRGVzZWxlY3QsXG4gICAgICBpc0hpZ2hsaWdodGVkLFxuICAgICAgaXNTZWxlY3RlZCxcbiAgICAgIGlzU2VsZWN0YWJsZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgc3R5bGUsXG4gICAgICBoZWlnaHQsXG4gICAgICBpY29uLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgdGV4dFByb3BzID0ge31cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRleHRQcm9wcy5jb2xvciA9ICdtdXRlZCdcbiAgICB9XG5cbiAgICBpZiAoaXNTZWxlY3RlZCkge1xuICAgICAgdGV4dFByb3BzLmNvbG9yID0gJ3NlbGVjdGVkJ1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8VGFibGVSb3dcbiAgICAgICAgaXNTZWxlY3RhYmxlPXtpc1NlbGVjdGFibGUgJiYgIWRpc2FibGVkfVxuICAgICAgICBpc0hpZ2hsaWdodGVkPXtpc0hpZ2hsaWdodGVkfVxuICAgICAgICBvblNlbGVjdD17b25TZWxlY3R9XG4gICAgICAgIG9uRGVzZWxlY3Q9e29uRGVzZWxlY3R9XG4gICAgICAgIGlzU2VsZWN0ZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgYm9yZGVyQm90dG9tPXtmYWxzZX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICA8UGFuZVxuICAgICAgICAgIHBhZGRpbmdMZWZ0PXsxMn1cbiAgICAgICAgICBwYWRkaW5nUmlnaHQ9ezh9XG4gICAgICAgICAgb3BhY2l0eT17aXNTZWxlY3RlZCA/IDEgOiAwfVxuICAgICAgICAgIGZsZXhHcm93PXswfVxuICAgICAgICAgIHBhZGRpbmdUb3A9ezR9XG4gICAgICAgID5cbiAgICAgICAgICA8VGlja0ljb24gY29sb3I9XCJzZWxlY3RlZFwiIHNpemU9ezE0fSAvPlxuICAgICAgICA8L1BhbmU+XG4gICAgICAgIDxUZXh0VGFibGVDZWxsXG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgYm9yZGVyQm90dG9tPVwibXV0ZWRcIlxuICAgICAgICAgIHRleHRQcm9wcz17dGV4dFByb3BzfVxuICAgICAgICAgIHBhZGRpbmdMZWZ0PXswfVxuICAgICAgICAgIGJvcmRlclJpZ2h0PXtudWxsfVxuICAgICAgICAgIGZsZXg9ezF9XG4gICAgICAgICAgYWxpZ25TZWxmPVwic3RyZXRjaFwiXG4gICAgICAgICAgY3Vyc29yPXtkaXNhYmxlZCA/ICdkZWZhdWx0JyA6ICdwb2ludGVyJ31cbiAgICAgICAgPlxuICAgICAgICAgIDxQYW5lIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBkaXNwbGF5PVwiZmxleFwiPlxuICAgICAgICAgICAge2ljb24gJiYgPEltYWdlIHNyYz17aWNvbn0gd2lkdGg9ezI0fSBtYXJnaW5SaWdodD17OH0gLz59XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9QYW5lPlxuICAgICAgICA8L1RleHRUYWJsZUNlbGw+XG4gICAgICA8L1RhYmxlUm93PlxuICAgIClcbiAgfVxufVxuIl19