import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import PropTypes from 'prop-types';
import { Pane } from '../../layers';
import MenuItem from './MenuItem';
import MenuDivider from './MenuDivider';
import MenuGroup from './MenuGroup';
import MenuOption from './MenuOption';
import MenuOptionsGroup from './MenuOptionsGroup';

var Menu = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Menu, _React$PureComponent);

  var _super = _createSuper(Menu);

  function Menu() {
    var _this;

    _classCallCheck(this, Menu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onMenuRef", function (ref) {
      _this.menuRef = ref;
    });

    return _this;
  }

  _createClass(Menu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // Get the menu item buttons
      // eslint-disable-next-line unicorn/prefer-spread
      this.menuItems = Array.from(this.menuRef.querySelectorAll('[role="menuitemradio"], [role="menuitem"]'));

      if (this.menuItems.length === 0) {
        throw new Error('The menu has no menu items');
      }

      this.firstItem = this.menuItems[0];
      this.lastItem = this.menuItems[this.menuItems.length - 1];

      var focusNext = function focusNext(currentItem, startItem) {
        // Determine which item is the startItem (first or last)
        var goingDown = startItem === _this2.firstItem; // Helper function for getting next legitimate element

        var move = function move(elem) {
          var indexOfItem = _this2.menuItems.indexOf(elem);

          if (goingDown) {
            if (indexOfItem < _this2.menuItems.length - 1) {
              return _this2.menuItems[indexOfItem + 1];
            }

            return startItem;
          }

          if (indexOfItem - 1 > -1) {
            return _this2.menuItems[indexOfItem - 1];
          }

          return startItem;
        }; // Make first move


        var nextItem = move(currentItem); // If the menuitem is disabled move on

        while (nextItem.disabled) {
          nextItem = move(nextItem);
        } // Focus the first one that's not disabled


        nextItem.focus();
      };

      this.menuItems.forEach(function (menuItem) {
        // Handle key presses for menuItem
        menuItem.addEventListener('keydown', function (e) {
          // Go to next/previous item if it exists
          // or loop around
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            focusNext(menuItem, _this2.firstItem);
          }

          if (e.key === 'ArrowUp') {
            e.preventDefault();
            focusNext(menuItem, _this2.lastItem);
          }

          if (e.key === 'Home') {
            e.preventDefault();

            _this2.firstItem.focus();
          }

          if (e.key === 'End') {
            e.preventDefault();

            _this2.lastItem.focus();
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return React.createElement(Pane, {
        is: "nav",
        innerRef: this.onMenuRef,
        role: "menu",
        outline: "none"
      }, children);
    }
  }]);

  return Menu;
}(React.PureComponent);

Menu.displayName = "Menu";

_defineProperty(Menu, "Item", MenuItem);

_defineProperty(Menu, "Divider", MenuDivider);

_defineProperty(Menu, "Group", MenuGroup);

_defineProperty(Menu, "Option", MenuOption);

_defineProperty(Menu, "OptionsGroup", MenuOptionsGroup);

_defineProperty(Menu, "propTypes", {
  /**
   * The children of the component.
   */
  children: PropTypes.node
});

export { Menu as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tZW51L3NyYy9NZW51LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiUGFuZSIsIk1lbnVJdGVtIiwiTWVudURpdmlkZXIiLCJNZW51R3JvdXAiLCJNZW51T3B0aW9uIiwiTWVudU9wdGlvbnNHcm91cCIsIk1lbnUiLCJyZWYiLCJtZW51UmVmIiwibWVudUl0ZW1zIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsIkVycm9yIiwiZmlyc3RJdGVtIiwibGFzdEl0ZW0iLCJmb2N1c05leHQiLCJjdXJyZW50SXRlbSIsInN0YXJ0SXRlbSIsImdvaW5nRG93biIsIm1vdmUiLCJlbGVtIiwiaW5kZXhPZkl0ZW0iLCJpbmRleE9mIiwibmV4dEl0ZW0iLCJkaXNhYmxlZCIsImZvY3VzIiwiZm9yRWFjaCIsIm1lbnVJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsImNoaWxkcmVuIiwicHJvcHMiLCJvbk1lbnVSZWYiLCJQdXJlQ29tcG9uZW50Iiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGNBQXJCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixZQUFyQjtBQUNBLE9BQU9DLFdBQVAsTUFBd0IsZUFBeEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGFBQXRCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixjQUF2QjtBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLG9CQUE3Qjs7SUFFcUJDLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Z0VBZ0dQLFVBQUFDLEdBQUcsRUFBSTtBQUNqQixZQUFLQyxPQUFMLEdBQWVELEdBQWY7QUFDRCxLOzs7Ozs7O3dDQWhGbUI7QUFBQTs7QUFDbEI7QUFDQTtBQUNBLFdBQUtFLFNBQUwsR0FBaUJDLEtB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QUFBLEVBQUUsRUFBQyxLQUFUO0FBQWUsUUFBQSxRQUFRLEVBQUUsS0FBS0UsU0FBOUI7QUFBeUMsUUFBQSxJQUFJLEVBQUMsTUFBOUM7QUFBcUQsUUFBQSxPQUFPLEVBQUM7QUFBN0QsU0FDR0YsUUFESCxDQURGO0FBS0Q7Ozs7RUEzRytCcEMsS0FBSyxDQUFDdUMsYTs7QUFBbkIvQixJOztnQkFBQUEsSSxVQUNMTCxROztnQkFES0ssSSxhQUdGSixXOztnQkFIRUksSSxXQUtKSCxTOztnQkFMSUcsSSxZQU9IRixVOztnQkFQR0UsSSxrQkFTR0QsZ0I7O2dCQVRIQyxJLGVBV0E7QUFDakI7OztBQUdBNEIsRUFBQUEsUUFBUSxFQUFFbkMsU0FBUyxDQUFDdUM7QUFKSCxDOztTQVhBaEMsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnLi9NZW51SXRlbSdcbmltcG9ydCBNZW51RGl2aWRlciBmcm9tICcuL01lbnVEaXZpZGVyJ1xuaW1wb3J0IE1lbnVHcm91cCBmcm9tICcuL01lbnVHcm91cCdcbmltcG9ydCBNZW51T3B0aW9uIGZyb20gJy4vTWVudU9wdGlvbidcbmltcG9ydCBNZW51T3B0aW9uc0dyb3VwIGZyb20gJy4vTWVudU9wdGlvbnNHcm91cCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgSXRlbSA9IE1lbnVJdGVtXG5cbiAgc3RhdGljIERpdmlkZXIgPSBNZW51RGl2aWRlclxuXG4gIHN0YXRpYyBHcm91cCA9IE1lbnVHcm91cFxuXG4gIHN0YXRpYyBPcHRpb24gPSBNZW51T3B0aW9uXG5cbiAgc3RhdGljIE9wdGlvbnNHcm91cCA9IE1lbnVPcHRpb25zR3JvdXBcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBjaGlsZHJlbiBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gR2V0IHRoZSBtZW51IGl0ZW0gYnV0dG9uc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1zcHJlYWRcbiAgICB0aGlzLm1lbnVJdGVtcyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLm1lbnVSZWYucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJtZW51aXRlbXJhZGlvXCJdLCBbcm9sZT1cIm1lbnVpdGVtXCJdJylcbiAgICApXG5cbiAgICBpZiAodGhpcy5tZW51SXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBtZW51IGhhcyBubyBtZW51IGl0ZW1zJylcbiAgICB9XG5cbiAgICB0aGlzLmZpcnN0SXRlbSA9IHRoaXMubWVudUl0ZW1zWzBdXG4gICAgdGhpcy5sYXN0SXRlbSA9IHRoaXMubWVudUl0ZW1zW3RoaXMubWVudUl0ZW1zLmxlbmd0aCAtIDFdXG5cbiAgICBjb25zdCBmb2N1c05leHQgPSAoY3VycmVudEl0ZW0sIHN0YXJ0SXRlbSkgPT4ge1xuICAgICAgLy8gRGV0ZXJtaW5lIHdoaWNoIGl0ZW0gaXMgdGhlIHN0YXJ0SXRlbSAoZmlyc3Qgb3IgbGFzdClcbiAgICAgIGNvbnN0IGdvaW5nRG93biA9IHN0YXJ0SXRlbSA9PT0gdGhpcy5maXJzdEl0ZW1cblxuICAgICAgLy8gSGVscGVyIGZ1bmN0aW9uIGZvciBnZXR0aW5nIG5leHQgbGVnaXRpbWF0ZSBlbGVtZW50XG4gICAgICBjb25zdCBtb3ZlID0gZWxlbSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4T2ZJdGVtID0gdGhpcy5tZW51SXRlbXMuaW5kZXhPZihlbGVtKVxuXG4gICAgICAgIGlmIChnb2luZ0Rvd24pIHtcbiAgICAgICAgICBpZiAoaW5kZXhPZkl0ZW0gPCB0aGlzLm1lbnVJdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tZW51SXRlbXNbaW5kZXhPZkl0ZW0gKyAxXVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBzdGFydEl0ZW1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleE9mSXRlbSAtIDEgPiAtMSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLm1lbnVJdGVtc1tpbmRleE9mSXRlbSAtIDFdXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhcnRJdGVtXG4gICAgICB9XG5cbiAgICAgIC8vIE1ha2UgZmlyc3QgbW92ZVxuICAgICAgbGV0IG5leHRJdGVtID0gbW92ZShjdXJyZW50SXRlbSlcblxuICAgICAgLy8gSWYgdGhlIG1lbnVpdGVtIGlzIGRpc2FibGVkIG1vdmUgb25cbiAgICAgIHdoaWxlIChuZXh0SXRlbS5kaXNhYmxlZCkge1xuICAgICAgICBuZXh0SXRlbSA9IG1vdmUobmV4dEl0ZW0pXG4gICAgICB9XG5cbiAgICAgIC8vIEZvY3VzIHRoZSBmaXJzdCBvbmUgdGhhdCdzIG5vdCBkaXNhYmxlZFxuICAgICAgbmV4dEl0ZW0uZm9jdXMoKVxuICAgIH1cblxuICAgIHRoaXMubWVudUl0ZW1zLmZvckVhY2gobWVudUl0ZW0gPT4ge1xuICAgICAgLy8gSGFuZGxlIGtleSBwcmVzc2VzIGZvciBtZW51SXRlbVxuICAgICAgbWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgICAgICAvLyBHbyB0byBuZXh0L3ByZXZpb3VzIGl0ZW0gaWYgaXQgZXhpc3RzXG4gICAgICAgIC8vIG9yIGxvb3AgYXJvdW5kXG5cbiAgICAgICAgaWYgKGUua2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGZvY3VzTmV4dChtZW51SXRlbSwgdGhpcy5maXJzdEl0ZW0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS5rZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGZvY3VzTmV4dChtZW51SXRlbSwgdGhpcy5sYXN0SXRlbSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0hvbWUnKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgdGhpcy5maXJzdEl0ZW0uZm9jdXMoKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW5kJykge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHRoaXMubGFzdEl0ZW0uZm9jdXMoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBvbk1lbnVSZWYgPSByZWYgPT4ge1xuICAgIHRoaXMubWVudVJlZiA9IHJlZlxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmUgaXM9XCJuYXZcIiBpbm5lclJlZj17dGhpcy5vbk1lbnVSZWZ9IHJvbGU9XCJtZW51XCIgb3V0bGluZT1cIm5vbmVcIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9QYW5lPlxuICAgIClcbiAgfVxufVxuIl19