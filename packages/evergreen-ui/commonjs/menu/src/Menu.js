"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layers = require("../../layers");

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

var _MenuDivider = _interopRequireDefault(require("./MenuDivider"));

var _MenuGroup = _interopRequireDefault(require("./MenuGroup"));

var _MenuOption = _interopRequireDefault(require("./MenuOption"));

var _MenuOptionsGroup = _interopRequireDefault(require("./MenuOptionsGroup"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Menu = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(Menu, _React$PureComponent);

  var _super = _createSuper(Menu);

  function Menu() {
    var _this;

    (0, _classCallCheck2["default"])(this, Menu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onMenuRef", function (ref) {
      _this.menuRef = ref;
    });
    return _this;
  }

  (0, _createClass2["default"])(Menu, [{
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
      return _react["default"].createElement(_layers.Pane, {
        is: "nav",
        innerRef: this.onMenuRef,
        role: "menu",
        outline: "none"
      }, children);
    }
  }]);
  return Menu;
}(_react["default"].PureComponent);

exports["default"] = Menu;
Menu.displayName = "Menu";
(0, _defineProperty2["default"])(Menu, "Item", _MenuItem["default"]);
(0, _defineProperty2["default"])(Menu, "Divider", _MenuDivider["default"]);
(0, _defineProperty2["default"])(Menu, "Group", _MenuGroup["default"]);
(0, _defineProperty2["default"])(Menu, "Option", _MenuOption["default"]);
(0, _defineProperty2["default"])(Menu, "OptionsGroup", _MenuOptionsGroup["default"]);
(0, _defineProperty2["default"])(Menu, "propTypes", {
  /**
   * The children of the component.
   */
  children: _propTypes["default"].node
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tZW51L3NyYy9NZW51LmpzIl0sIm5hbWVzIjpbIk1lbnUiLCJyZWYiLCJtZW51UmVmIiwibWVudUl0ZW1zIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsIkVycm9yIiwiZmlyc3RJdGVtIiwibGFzdEl0ZW0iLCJmb2N1c05leHQiLCJjdXJyZW50SXRlbSIsInN0YXJ0SXRlbSIsImdvaW5nRG93biIsIm1vdmUiLCJlbGVtIiwiaW5kZXhPZkl0ZW0iLCJpbmRleE9mIiwibmV4dEl0ZW0iLCJkaXNhYmxlZCIsImZvY3VzIiwiZm9yRWFjaCIsIm1lbnVJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsImNoaWxkcmVuIiwicHJvcHMiLCJvbk1lbnVSZWYiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJNZW51SXRlbSIsIk1lbnVEaXZpZGVyIiwiTWVudUdyb3VwIiwiTWVudU9wdGlvbiIsIk1lbnVPcHRpb25zR3JvdXAiLCJQcm9wVHlwZXMiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7OztrR0FnR1AsVUFBQUMsR0FBRyxFQUFJO0FBQ2pCLFlBQUtDLE9BQUwsR0FBZUQsR0FBZjtBQUNELEs7Ozs7Ozt3Q0FoRm1CO0FBQUE7O0FBQ2xCO0FBQ0E7QUFDQSxXQUFLRSxTQUFMLEdBQWlCQyxLQUFLLENBQUNDLElBQU4sQ0FDZixLQUFLSCxPQUFMLENBQWFJLGdCQUFiLENBQThCLDJDQUE5QixDQURlLENBQWpCOztBQUlBLFVBQUksS0FBS0gsU0FBTCxDQUFlSSxNQUFmLEtBQTBCLENBQTlCLEVBQWlDO0FBQy9CLGNBQU0sSUFBSUMsS0FBSixDQUFVLDRCQUFWLENBQU47QUFDRDs7QUFFRCxXQUFLQyxTQUFMLEdBQWlCLEtBQUtOLFNBQUwsQ0FBZSxDQUFmLENBQWpCO0FBQ0EsV0FBS08sUUFBTCxHQUFnQixLQUFLUCxTQUFMLENBQWUsS0FBS0EsU0FBTCxDQUFlSSxNQUFmLEdBQXdCLENBQXZDLENBQWhCOztBQUVBLFVBQU1JLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLFdBQUQsRUFBY0MsU0FBZCxFQUE0QjtBQUM1QztBQUNBLFlBQU1DLFNBQVMsR0FBR0QsU0FBUyxLQUFLLE1BQUksQ0FBQ0osU0FBckMsQ0FGNEMsQ0FJNUM7O0FBQ0EsWUFBTU0sSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQUMsSUFBSSxFQUFJO0FBQ25CLGNBQU1DLFdBQVcsR0FBRyxNQUFJLENBQUNkLFNBQUwsQ0FBZWUsT0FBZixDQUF1QkYsSUFBdkIsQ0FBcEI7O0FBRUEsY0FBSUYsU0FBSixFQUFlO0FBQ2IsZ0JBQUlHLFdBQVcsR0FBRyxNQUFJLENBQUNkLFNBQUwsQ0FBZUksTUFBZixHQUF3QixDQUExQyxFQUE2QztBQUMzQyxxQkFBTyxNQUFJLENBQUNKLFNBQUwsQ0FBZWMsV0FBVyxHQUFHLENBQTdCLENBQVA7QUFDRDs7QUFFRCxtQkFBT0osU0FBUDtBQUNEOztBQUVELGNBQUlJLFdBQVcsR0FBRyxDQUFkLEdBQWtCLENBQUMsQ0FBdkIsRUFBMEI7QUFDeEIsbUJBQU8sTUFBSSxDQUFDZCxTQUFMLENBQWVjLFdBQVcsR0FBRyxDQUE3QixDQUFQO0FBQ0Q7O0FBRUQsaUJBQU9KLFNBQVA7QUFDRCxTQWhCRCxDQUw0QyxDQXVCNUM7OztBQUNBLFlBQUlNLFFBQVEsR0FBR0osSUFBSSxDQUFDSCxXQUFELENBQW5CLENBeEI0QyxDQTBCNUM7O0FBQ0EsZUFBT08sUUFBUSxDQUFDQyxRQUFoQixFQUEwQjtBQUN4QkQsVUFBQUEsUUFBUSxHQUFHSixJQUFJLENBQUNJLFFBQUQsQ0FBZjtBQUNELFNBN0IyQyxDQStCNUM7OztBQUNBQSxRQUFBQSxRQUFRLENBQUNFLEtBQVQ7QUFDRCxPQWpDRDs7QUFtQ0EsV0FBS2xCLFNBQUwsQ0FBZW1CLE9BQWYsQ0FBdUIsVUFBQUMsUUFBUSxFQUFJO0FBQ2pDO0FBQ0FBLFFBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBQUMsQ0FBQyxFQUFJO0FBQ3hDO0FBQ0E7QUFFQSxjQUFJQSxDQUFDLENBQUNDLEdBQUYsS0FBVSxXQUFkLEVBQTJCO0FBQ3pCRCxZQUFBQSxDQUFDLENBQUNFLGNBQUY7QUFDQWhCLFlBQUFBLFNBQVMsQ0FBQ1ksUUFBRCxFQUFXLE1BQUksQ0FBQ2QsU0FBaEIsQ0FBVDtBQUNEOztBQUVELGNBQUlnQixDQUFDLENBQUNDLEdBQUYsS0FBVSxTQUFkLEVBQXlCO0FBQ3ZCRCxZQUFBQSxDQUFDLENBQUNFLGNBQUY7QUFDQWhCLFlBQUFBLFNBQVMsQ0FBQ1ksUUFBRCxFQUFXLE1BQUksQ0FBQ2IsUUFBaEIsQ0FBVDtBQUNEOztBQUVELGNBQUllLENBQUMsQ0FBQ0MsR0FBRixLQUFVLE1BQWQsRUFBc0I7QUFDcEJELFlBQUFBLENBQUMsQ0FBQ0UsY0FBRjs7QUFDQSxZQUFBLE1BQUksQ0FBQ2xCLFNBQUwsQ0FBZVksS0FBZjtBQUNEOztBQUVELGNBQUlJLENBQUMsQ0FBQ0MsR0FBRixLQUFVLEtBQWQsRUFBcUI7QUFDbkJELFlBQUFBLENBQUMsQ0FBQ0UsY0FBRjs7QUFDQSxZQUFBLE1BQUksQ0FBQ2pCLFFBQUwsQ0FBY1csS0FBZDtBQUNEO0FBQ0YsU0F2QkQ7QUF3QkQsT0ExQkQ7QUEyQkQ7Ozs2QkFNUTtBQUFBLFVBQ0NPLFFBREQsR0FDYyxLQUFLQyxLQURuQixDQUNDRCxRQUREO0FBRVAsYUFDRSxnQ0FBQyxZQUFEO0FBQU0sUUFBQSxFQUFFLEVBQUMsS0FBVDtBQUFlLFFBQUEsUUFBUSxFQUFFLEtBQUtFLFNBQTlCO0FBQXlDLFFBQUEsSUFBSSxFQUFDLE1BQTlDO0FBQXFELFFBQUEsT0FBTyxFQUFDO0FBQTdELFNBQ0dGLFFBREgsQ0FERjtBQUtEOzs7RUEzRytCRyxrQkFBTUMsYTs7O0FBQW5CaEMsSTtpQ0FBQUEsSSxVQUNMaUMsb0I7aUNBREtqQyxJLGFBR0ZrQyx1QjtpQ0FIRWxDLEksV0FLSm1DLHFCO2lDQUxJbkMsSSxZQU9Ib0Msc0I7aUNBUEdwQyxJLGtCQVNHcUMsNEI7aUNBVEhyQyxJLGVBV0E7QUFDakI7OztBQUdBNEIsRUFBQUEsUUFBUSxFQUFFVSxzQkFBVUM7QUFKSCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCBNZW51SXRlbSBmcm9tICcuL01lbnVJdGVtJ1xuaW1wb3J0IE1lbnVEaXZpZGVyIGZyb20gJy4vTWVudURpdmlkZXInXG5pbXBvcnQgTWVudUdyb3VwIGZyb20gJy4vTWVudUdyb3VwJ1xuaW1wb3J0IE1lbnVPcHRpb24gZnJvbSAnLi9NZW51T3B0aW9uJ1xuaW1wb3J0IE1lbnVPcHRpb25zR3JvdXAgZnJvbSAnLi9NZW51T3B0aW9uc0dyb3VwJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBJdGVtID0gTWVudUl0ZW1cblxuICBzdGF0aWMgRGl2aWRlciA9IE1lbnVEaXZpZGVyXG5cbiAgc3RhdGljIEdyb3VwID0gTWVudUdyb3VwXG5cbiAgc3RhdGljIE9wdGlvbiA9IE1lbnVPcHRpb25cblxuICBzdGF0aWMgT3B0aW9uc0dyb3VwID0gTWVudU9wdGlvbnNHcm91cFxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIGNoaWxkcmVuIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBHZXQgdGhlIG1lbnUgaXRlbSBidXR0b25zXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLXNwcmVhZFxuICAgIHRoaXMubWVudUl0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMubWVudVJlZi5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT1cIm1lbnVpdGVtcmFkaW9cIl0sIFtyb2xlPVwibWVudWl0ZW1cIl0nKVxuICAgIClcblxuICAgIGlmICh0aGlzLm1lbnVJdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIG1lbnUgaGFzIG5vIG1lbnUgaXRlbXMnKVxuICAgIH1cblxuICAgIHRoaXMuZmlyc3RJdGVtID0gdGhpcy5tZW51SXRlbXNbMF1cbiAgICB0aGlzLmxhc3RJdGVtID0gdGhpcy5tZW51SXRlbXNbdGhpcy5tZW51SXRlbXMubGVuZ3RoIC0gMV1cblxuICAgIGNvbnN0IGZvY3VzTmV4dCA9IChjdXJyZW50SXRlbSwgc3RhcnRJdGVtKSA9PiB7XG4gICAgICAvLyBEZXRlcm1pbmUgd2hpY2ggaXRlbSBpcyB0aGUgc3RhcnRJdGVtIChmaXJzdCBvciBsYXN0KVxuICAgICAgY29uc3QgZ29pbmdEb3duID0gc3RhcnRJdGVtID09PSB0aGlzLmZpcnN0SXRlbVxuXG4gICAgICAvLyBIZWxwZXIgZnVuY3Rpb24gZm9yIGdldHRpbmcgbmV4dCBsZWdpdGltYXRlIGVsZW1lbnRcbiAgICAgIGNvbnN0IG1vdmUgPSBlbGVtID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXhPZkl0ZW0gPSB0aGlzLm1lbnVJdGVtcy5pbmRleE9mKGVsZW0pXG5cbiAgICAgICAgaWYgKGdvaW5nRG93bikge1xuICAgICAgICAgIGlmIChpbmRleE9mSXRlbSA8IHRoaXMubWVudUl0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1lbnVJdGVtc1tpbmRleE9mSXRlbSArIDFdXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHN0YXJ0SXRlbVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4T2ZJdGVtIC0gMSA+IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubWVudUl0ZW1zW2luZGV4T2ZJdGVtIC0gMV1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGFydEl0ZW1cbiAgICAgIH1cblxuICAgICAgLy8gTWFrZSBmaXJzdCBtb3ZlXG4gICAgICBsZXQgbmV4dEl0ZW0gPSBtb3ZlKGN1cnJlbnRJdGVtKVxuXG4gICAgICAvLyBJZiB0aGUgbWVudWl0ZW0gaXMgZGlzYWJsZWQgbW92ZSBvblxuICAgICAgd2hpbGUgKG5leHRJdGVtLmRpc2FibGVkKSB7XG4gICAgICAgIG5leHRJdGVtID0gbW92ZShuZXh0SXRlbSlcbiAgICAgIH1cblxuICAgICAgLy8gRm9jdXMgdGhlIGZpcnN0IG9uZSB0aGF0J3Mgbm90IGRpc2FibGVkXG4gICAgICBuZXh0SXRlbS5mb2N1cygpXG4gICAgfVxuXG4gICAgdGhpcy5tZW51SXRlbXMuZm9yRWFjaChtZW51SXRlbSA9PiB7XG4gICAgICAvLyBIYW5kbGUga2V5IHByZXNzZXMgZm9yIG1lbnVJdGVtXG4gICAgICBtZW51SXRlbS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICAgIC8vIEdvIHRvIG5leHQvcHJldmlvdXMgaXRlbSBpZiBpdCBleGlzdHNcbiAgICAgICAgLy8gb3IgbG9vcCBhcm91bmRcblxuICAgICAgICBpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgZm9jdXNOZXh0KG1lbnVJdGVtLCB0aGlzLmZpcnN0SXRlbSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgZm9jdXNOZXh0KG1lbnVJdGVtLCB0aGlzLmxhc3RJdGVtKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUua2V5ID09PSAnSG9tZScpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB0aGlzLmZpcnN0SXRlbS5mb2N1cygpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbmQnKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgdGhpcy5sYXN0SXRlbS5mb2N1cygpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIG9uTWVudVJlZiA9IHJlZiA9PiB7XG4gICAgdGhpcy5tZW51UmVmID0gcmVmXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8UGFuZSBpcz1cIm5hdlwiIGlubmVyUmVmPXt0aGlzLm9uTWVudVJlZn0gcm9sZT1cIm1lbnVcIiBvdXRsaW5lPVwibm9uZVwiPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1BhbmU+XG4gICAgKVxuICB9XG59XG4iXX0=