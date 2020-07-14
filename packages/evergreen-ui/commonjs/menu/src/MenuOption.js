"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

var _typography = require("../../typography");

var _icons = require("../../icons");

var _theme = require("../../theme");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var MenuOption = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(MenuOption, _React$PureComponent);

  var _super = _createSuper(MenuOption);

  function MenuOption() {
    var _this;

    (0, _classCallCheck2["default"])(this, MenuOption);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function () {
      _this.props.onSelect();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleKeyPress", function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        _this.props.onSelect();

        e.preventDefault();
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(MenuOption, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          children = _this$props.children,
          theme = _this$props.theme,
          appearance = _this$props.appearance,
          secondaryText = _this$props.secondaryText,
          isSelected = _this$props.isSelected;
      var themedClassName = theme.getMenuItemClassName(appearance, 'none');
      var textProps = isSelected ? {
        color: 'selected',
        fontWeight: 500,
        marginLeft: 16
      } : {
        marginLeft: 44
      };
      return _react["default"].createElement(_layers.Pane, {
        id: id,
        role: "menuitemradio",
        tabIndex: 0,
        className: themedClassName,
        onClick: this.handleClick,
        onKeyPress: this.handleKeyPress,
        "data-isselectable": "true",
        "aria-checked": isSelected,
        height: 40,
        display: "flex",
        alignItems: "center"
      }, isSelected && _react["default"].createElement(_icons.TickIcon, {
        "aria-hidden": true,
        color: "selected",
        marginLeft: 16,
        marginRight: -4,
        size: 16,
        flexShrink: 0
      }), _react["default"].createElement(_typography.Text, (0, _extends2["default"])({}, textProps, {
        marginRight: 16,
        flex: 1
      }), children), secondaryText && _react["default"].createElement(_typography.Text, {
        marginRight: 16,
        color: "muted"
      }, secondaryText));
    }
  }]);
  return MenuOption;
}(_react["default"].PureComponent);

MenuOption.displayName = "MenuOption";
(0, _defineProperty2["default"])(MenuOption, "propTypes", {
  /**
   * The id attribute of the menu option.
   */
  id: _propTypes["default"].string,

  /**
   * Function that is called on click and enter/space keypress.
   */
  onSelect: _propTypes["default"].func,

  /**
   * The icon before the label.
   */
  isSelected: _propTypes["default"].bool,

  /**
   * The children of the component.
   */
  children: _propTypes["default"].node,

  /**
   * Secondary text shown on the right.
   */
  secondaryText: _propTypes["default"].node,

  /**
   * The default theme only supports one default appearance.
   */
  appearance: _propTypes["default"].string.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired
});
(0, _defineProperty2["default"])(MenuOption, "defaultProps", {
  appearance: 'default',
  isSelected: false,
  onClick: function onClick() {},
  onSelect: function onSelect() {},
  onKeyPress: function onKeyPress() {}
});

var _default = (0, _theme.withTheme)(MenuOption);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tZW51L3NyYy9NZW51T3B0aW9uLmpzIl0sIm5hbWVzIjpbIk1lbnVPcHRpb24iLCJwcm9wcyIsIm9uU2VsZWN0IiwiZSIsImtleSIsInByZXZlbnREZWZhdWx0IiwiaWQiLCJjaGlsZHJlbiIsInRoZW1lIiwiYXBwZWFyYW5jZSIsInNlY29uZGFyeVRleHQiLCJpc1NlbGVjdGVkIiwidGhlbWVkQ2xhc3NOYW1lIiwiZ2V0TWVudUl0ZW1DbGFzc05hbWUiLCJ0ZXh0UHJvcHMiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJtYXJnaW5MZWZ0IiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVLZXlQcmVzcyIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJib29sIiwibm9kZSIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJvbkNsaWNrIiwib25LZXlQcmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7SUFFTUEsVTs7Ozs7Ozs7Ozs7Ozs7O29HQThDVSxZQUFNO0FBQ2xCLFlBQUtDLEtBQUwsQ0FBV0MsUUFBWDtBQUNELEs7dUdBRWdCLFVBQUFDLENBQUMsRUFBSTtBQUNwQixVQUFJQSxDQUFDLENBQUNDLEdBQUYsS0FBVSxPQUFWLElBQXFCRCxDQUFDLENBQUNDLEdBQUYsS0FBVSxHQUFuQyxFQUF3QztBQUN0QyxjQUFLSCxLQUFMLENBQVdDLFFBQVg7O0FBQ0FDLFFBQUFBLENBQUMsQ0FBQ0UsY0FBRjtBQUNEO0FBQ0YsSzs7Ozs7OzZCQUVRO0FBQUEsd0JBUUgsS0FBS0osS0FSRjtBQUFBLFVBRUxLLEVBRkssZUFFTEEsRUFGSztBQUFBLFVBR0xDLFFBSEssZUFHTEEsUUFISztBQUFBLFVBSUxDLEtBSkssZUFJTEEsS0FKSztBQUFBLFVBS0xDLFVBTEssZUFLTEEsVUFMSztBQUFBLFVBTUxDLGFBTkssZUFNTEEsYUFOSztBQUFBLFVBT0xDLFVBUEssZUFPTEEsVUFQSztBQVVQLFVBQU1DLGVBQWUsR0FBR0osS0FBSyxDQUFDSyxvQkFBTixDQUEyQkosVUFBM0IsRUFBdUMsTUFBdkMsQ0FBeEI7QUFFQSxVQUFNSyxTQUFTLEdBQUdILFVBQVUsR0FDeEI7QUFDRUksUUFBQUEsS0FBSyxFQUFFLFVBRFQ7QUFFRUMsUUFBQUEsVUFBVSxFQUFFLEdBRmQ7QUFHRUMsUUFBQUEsVUFBVSxFQUFFO0FBSGQsT0FEd0IsR0FNeEI7QUFBRUEsUUFBQUEsVUFBVSxFQUFFO0FBQWQsT0FOSjtBQVFBLGFBQ0UsZ0NBQUMsWUFBRDtBQUNFLFFBQUEsRUFBRSxFQUFFWCxFQUROO0FBRUUsUUFBQSxJQUFJLEVBQUMsZUFGUDtBQUdFLFFBQUEsUUFBUSxFQUFFLENBSFo7QUFJRSxRQUFBLFNBQVMsRUFBRU0sZUFKYjtBQUtFLFFBQUEsT0FBTyxFQUFFLEtBQUtNLFdBTGhCO0FBTUUsUUFBQSxVQUFVLEVBQUUsS0FBS0MsY0FObkI7QUFPRSw2QkFBa0IsTUFQcEI7QUFRRSx3QkFBY1IsVUFSaEI7QUFTRSxRQUFBLE1BQU0sRUFBRSxFQVRWO0FBVUUsUUFBQSxPQUFPLEVBQUMsTUFWVjtBQVdFLFFBQUEsVUFBVSxFQUFDO0FBWGIsU0FhR0EsVUFBVSxJQUNULGdDQUFDLGVBQUQ7QUFDRSwyQkFERjtBQUVFLFFBQUEsS0FBSyxFQUFDLFVBRlI7QUFHRSxRQUFBLFVBQVUsRUFBRSxFQUhkO0FBSUUsUUFBQSxXQUFXLEVBQUUsQ0FBQyxDQUpoQjtBQUtFLFFBQUEsSUFBSSxFQUFFLEVBTFI7QUFNRSxRQUFBLFVBQVUsRUFBRTtBQU5kLFFBZEosRUF1QkUsZ0NBQUMsZ0JBQUQsZ0NBQVVHLFNBQVY7QUFBcUIsUUFBQSxXQUFXLEVBQUUsRUFBbEM7QUFBc0MsUUFBQSxJQUFJLEVBQUU7QUFBNUMsVUFDR1AsUUFESCxDQXZCRixFQTBCR0csYUFBYSxJQUNaLGdDQUFDLGdCQUFEO0FBQU0sUUFBQSxXQUFXLEVBQUUsRUFBbkI7QUFBdUIsUUFBQSxLQUFLLEVBQUM7QUFBN0IsU0FDR0EsYUFESCxDQTNCSixDQURGO0FBa0NEOzs7RUEvR3NCVSxrQkFBTUMsYTs7QUFBekJyQixVO2lDQUFBQSxVLGVBQ2U7QUFDakI7OztBQUdBTSxFQUFBQSxFQUFFLEVBQUVnQixzQkFBVUMsTUFKRzs7QUFNakI7OztBQUdBckIsRUFBQUEsUUFBUSxFQUFFb0Isc0JBQVVFLElBVEg7O0FBV2pCOzs7QUFHQWIsRUFBQUEsVUFBVSxFQUFFVyxzQkFBVUcsSUFkTDs7QUFnQmpCOzs7QUFHQWxCLEVBQUFBLFFBQVEsRUFBRWUsc0JBQVVJLElBbkJIOztBQXFCakI7OztBQUdBaEIsRUFBQUEsYUFBYSxFQUFFWSxzQkFBVUksSUF4QlI7O0FBMEJqQjs7O0FBR0FqQixFQUFBQSxVQUFVLEVBQUVhLHNCQUFVQyxNQUFWLENBQWlCSSxVQTdCWjs7QUErQmpCOzs7QUFHQW5CLEVBQUFBLEtBQUssRUFBRWMsc0JBQVVNLE1BQVYsQ0FBaUJEO0FBbENQLEM7aUNBRGYzQixVLGtCQXNDa0I7QUFDcEJTLEVBQUFBLFVBQVUsRUFBRSxTQURRO0FBRXBCRSxFQUFBQSxVQUFVLEVBQUUsS0FGUTtBQUdwQmtCLEVBQUFBLE9BQU8sRUFBRSxtQkFBTSxDQUFFLENBSEc7QUFJcEIzQixFQUFBQSxRQUFRLEVBQUUsb0JBQU0sQ0FBRSxDQUpFO0FBS3BCNEIsRUFBQUEsVUFBVSxFQUFFLHNCQUFNLENBQUU7QUFMQSxDOztlQTRFVCxzQkFBVTlCLFVBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IFRpY2tJY29uIH0gZnJvbSAnLi4vLi4vaWNvbnMnXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuY2xhc3MgTWVudU9wdGlvbiBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBpZCBhdHRyaWJ1dGUgb2YgdGhlIG1lbnUgb3B0aW9uLlxuICAgICAqL1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgb24gY2xpY2sgYW5kIGVudGVyL3NwYWNlIGtleXByZXNzLlxuICAgICAqL1xuICAgIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBpY29uIGJlZm9yZSB0aGUgbGFiZWwuXG4gICAgICovXG4gICAgaXNTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2hpbGRyZW4gb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBTZWNvbmRhcnkgdGV4dCBzaG93biBvbiB0aGUgcmlnaHQuXG4gICAgICovXG4gICAgc2Vjb25kYXJ5VGV4dDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCB0aGVtZSBvbmx5IHN1cHBvcnRzIG9uZSBkZWZhdWx0IGFwcGVhcmFuY2UuXG4gICAgICovXG4gICAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFwcGVhcmFuY2U6ICdkZWZhdWx0JyxcbiAgICBpc1NlbGVjdGVkOiBmYWxzZSxcbiAgICBvbkNsaWNrOiAoKSA9PiB7fSxcbiAgICBvblNlbGVjdDogKCkgPT4ge30sXG4gICAgb25LZXlQcmVzczogKCkgPT4ge31cbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25TZWxlY3QoKVxuICB9XG5cbiAgaGFuZGxlS2V5UHJlc3MgPSBlID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicgfHwgZS5rZXkgPT09ICcgJykge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdCgpXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIHRoZW1lLFxuICAgICAgYXBwZWFyYW5jZSxcbiAgICAgIHNlY29uZGFyeVRleHQsXG4gICAgICBpc1NlbGVjdGVkXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHRoZW1lZENsYXNzTmFtZSA9IHRoZW1lLmdldE1lbnVJdGVtQ2xhc3NOYW1lKGFwcGVhcmFuY2UsICdub25lJylcblxuICAgIGNvbnN0IHRleHRQcm9wcyA9IGlzU2VsZWN0ZWRcbiAgICAgID8ge1xuICAgICAgICAgIGNvbG9yOiAnc2VsZWN0ZWQnLFxuICAgICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgICBtYXJnaW5MZWZ0OiAxNlxuICAgICAgICB9XG4gICAgICA6IHsgbWFyZ2luTGVmdDogNDQgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lXG4gICAgICAgIGlkPXtpZH1cbiAgICAgICAgcm9sZT1cIm1lbnVpdGVtcmFkaW9cIlxuICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgY2xhc3NOYW1lPXt0aGVtZWRDbGFzc05hbWV9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgIG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlS2V5UHJlc3N9XG4gICAgICAgIGRhdGEtaXNzZWxlY3RhYmxlPVwidHJ1ZVwiXG4gICAgICAgIGFyaWEtY2hlY2tlZD17aXNTZWxlY3RlZH1cbiAgICAgICAgaGVpZ2h0PXs0MH1cbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgID5cbiAgICAgICAge2lzU2VsZWN0ZWQgJiYgKFxuICAgICAgICAgIDxUaWNrSWNvblxuICAgICAgICAgICAgYXJpYS1oaWRkZW5cbiAgICAgICAgICAgIGNvbG9yPVwic2VsZWN0ZWRcIlxuICAgICAgICAgICAgbWFyZ2luTGVmdD17MTZ9XG4gICAgICAgICAgICBtYXJnaW5SaWdodD17LTR9XG4gICAgICAgICAgICBzaXplPXsxNn1cbiAgICAgICAgICAgIGZsZXhTaHJpbms9ezB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPFRleHQgey4uLnRleHRQcm9wc30gbWFyZ2luUmlnaHQ9ezE2fSBmbGV4PXsxfT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAge3NlY29uZGFyeVRleHQgJiYgKFxuICAgICAgICAgIDxUZXh0IG1hcmdpblJpZ2h0PXsxNn0gY29sb3I9XCJtdXRlZFwiPlxuICAgICAgICAgICAge3NlY29uZGFyeVRleHR9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICApfVxuICAgICAgPC9QYW5lPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoTWVudU9wdGlvbilcbiJdfQ==