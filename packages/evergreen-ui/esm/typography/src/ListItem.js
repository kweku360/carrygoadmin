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
import { IconWrapper } from '../../icons/src/IconWrapper';
import { majorScale } from '../../scales';
import Text from './Text';

var ListItem = /*#__PURE__*/function (_PureComponent) {
  _inherits(ListItem, _PureComponent);

  var _super = _createSuper(ListItem);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _super.apply(this, arguments);
  }

  _createClass(ListItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          size = _this$props.size,
          icon = _this$props.icon,
          props = _objectWithoutProperties(_this$props, ["children", "size", "icon"]);

      var paddingLeft;
      if (size === 300) paddingLeft = 4;
      if (size === 400) paddingLeft = 8;
      if (size === 500) paddingLeft = 8;
      if (size === 600) paddingLeft = 12;
      var iconTop;
      if (size === 300) iconTop = 1;
      if (size === 400) iconTop = 3;
      if (size === 500) iconTop = 3;
      if (size === 600) iconTop = 4;
      return React.createElement(Text, _extends({
        is: "li",
        position: "relative",
        marginY: "0.5em",
        size: size,
        listStyleType: icon ? 'none' : undefined,
        paddingLeft: icon ? paddingLeft : undefined
      }, props), icon && React.createElement(IconWrapper, {
        icon: icon,
        position: "absolute",
        left: majorScale(-2),
        top: iconTop
      }), children);
    }
  }]);

  return ListItem;
}(PureComponent);

ListItem.displayName = "ListItem";

_defineProperty(ListItem, "propTypes", _objectSpread({}, Text.propTypes, {
  /**
   * When provided, adds a icon before the list item.
   */
  icon: PropTypes.node
}));

export { ListItem as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9MaXN0SXRlbS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJJY29uV3JhcHBlciIsIm1ham9yU2NhbGUiLCJUZXh0IiwiTGlzdEl0ZW0iLCJwcm9wcyIsImNoaWxkcmVuIiwic2l6ZSIsImljb24iLCJwYWRkaW5nTGVmdCIsImljb25Ub3AiLCJ1bmRlZmluZWQiLCJwcm9wVHlwZXMiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLFdBQVQsUUFBNEIsNkJBQTVCO0FBQ0EsU0FBU0MsVUFBVCxRQUEyQixjQUEzQjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsUUFBakI7O0lBRXFCQyxROzs7Ozs7Ozs7Ozs7OzZCQVVWO0FBQUEsd0JBQ29DLEtBQUtDLEtBRHpDO0FBQUEsVUFDQ0MsUUFERCxlQUNDQSxRQUREO0FBQUEsVUFDV0MsSUFEWCxlQUNXQSxJQURYO0FBQUEsVUFDaUJDLElBRGpCLGVBQ2lCQSxJQURqQjtBQUFBLFVBQzBCSCxLQUQxQjs7QUFHUCxVQUFJSSxXQUFKO0FBQ0EsVUFBSUYsSUFBSSxLQUFLLEdBQWIsRUFBa0JFLFdBQVcsR0FBRyxDQUFkO0FBQ2xCLFVBQUlGLElBQUksS0FBSyxHQUFiLEVBQWtCRSxXQUFXLEdBQUcsQ0FBZDtBQUNsQixVQUFJRixJQUFJLEtBQUssR0FBYixFQUFrQkUsV0FBVyxHQUFHLENBQWQ7QUFDbEIsVUFBSUYsSUFBSSxLQUFLLEdBQWIsRUFBa0JFLFdBQVcsR0FBRyxFQUFkO0FBRWxCLFVBQUlDLE9BQUo7QUFDQSxVQUFJSCxJQUFJLEtBQUssR0FBYixFQUFrQkcsT0FBTyxHQUFHLENBQVY7QUFDbEIsVUFBSUgsSUFBSSxLQUFLLEdBQWIsRUFBa0JHLE9BQU8sR0FBRyxDQUFWO0FBQ2xCLFVBQUlILElBQUksS0FBSyxHQUFiLEVBQWtCRyxPQUFPLEdBQUcsQ0FBVjtBQUNsQixVQUFJSCxJQUFJLEtBQUssR0FBYixFQUFrQkcsT0FBTyxHQUFHLENBQVY7QUFFbEIsYUFDRSxvQkFBQyxJQUFEO0FBQ0UsUUFBQSxFQUFFLEVBQUMsSUFETDtBQUVFLFFBQUEsUUFBUSxFQUFDLFVBRlg7QUFHRSxRQUFBLE9BQU8sRUFBQyxPQUhWO0FBSUUsUUFBQSxJQUFJLEVBQUVILElBSlI7QUFLRSxRQUFBLGFBQWEsRUFBRUMsSUFBSSxHQUFHLE1BQUgsR0FBWUcsU0FMakM7QUFNRSxRQUFBLFdBQVcsRUFBRUgsSUFBSSxHQUFHQyxXQUFILEdBQWlCRTtBQU5wQyxTQU9NTixLQVBOLEdBU0dHLElBQUksSUFDSCxvQkFBQyxXQUFEO0FBQ0UsUUFBQSxJQUFJLEVBQUVBLElBRFI7QUFFRSxRQUFBLFFBQVEsRUFBQyxVQUZYO0FBR0UsUUFBQSxJQUFJLEVBQUVOLFVBQVUsQ0FBQyxDQUFDLENBQUYsQ0FIbEI7QUFJRSxRQUFBLEdBQUcsRUFBRVE7QUFKUCxRQVZKLEVBaUJHSixRQWpCSCxDQURGO0FBcUJEOzs7O0VBOUNtQ1AsYTs7QUFBakJLLFE7O2dCQUFBQSxRLGlDQUVkRCxJQUFJLENBQUNTLFM7QUFFUjs7O0FBR0FKLEVBQUFBLElBQUksRUFBRVIsU0FBUyxDQUFDYTs7O1NBUENULFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgSWNvbldyYXBwZXIgfSBmcm9tICcuLi8uLi9pY29ucy9zcmMvSWNvbldyYXBwZXInXG5pbXBvcnQgeyBtYWpvclNjYWxlIH0gZnJvbSAnLi4vLi4vc2NhbGVzJ1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0SXRlbSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC4uLlRleHQucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiBwcm92aWRlZCwgYWRkcyBhIGljb24gYmVmb3JlIHRoZSBsaXN0IGl0ZW0uXG4gICAgICovXG4gICAgaWNvbjogUHJvcFR5cGVzLm5vZGVcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBzaXplLCBpY29uLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IHBhZGRpbmdMZWZ0XG4gICAgaWYgKHNpemUgPT09IDMwMCkgcGFkZGluZ0xlZnQgPSA0XG4gICAgaWYgKHNpemUgPT09IDQwMCkgcGFkZGluZ0xlZnQgPSA4XG4gICAgaWYgKHNpemUgPT09IDUwMCkgcGFkZGluZ0xlZnQgPSA4XG4gICAgaWYgKHNpemUgPT09IDYwMCkgcGFkZGluZ0xlZnQgPSAxMlxuXG4gICAgbGV0IGljb25Ub3BcbiAgICBpZiAoc2l6ZSA9PT0gMzAwKSBpY29uVG9wID0gMVxuICAgIGlmIChzaXplID09PSA0MDApIGljb25Ub3AgPSAzXG4gICAgaWYgKHNpemUgPT09IDUwMCkgaWNvblRvcCA9IDNcbiAgICBpZiAoc2l6ZSA9PT0gNjAwKSBpY29uVG9wID0gNFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXh0XG4gICAgICAgIGlzPVwibGlcIlxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgbWFyZ2luWT1cIjAuNWVtXCJcbiAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgbGlzdFN0eWxlVHlwZT17aWNvbiA/ICdub25lJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgcGFkZGluZ0xlZnQ9e2ljb24gPyBwYWRkaW5nTGVmdCA6IHVuZGVmaW5lZH1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICB7aWNvbiAmJiAoXG4gICAgICAgICAgPEljb25XcmFwcGVyXG4gICAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgICBsZWZ0PXttYWpvclNjYWxlKC0yKX1cbiAgICAgICAgICAgIHRvcD17aWNvblRvcH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1RleHQ+XG4gICAgKVxuICB9XG59XG4iXX0=