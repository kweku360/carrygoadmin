import _extends from "@babel/runtime/helpers/esm/extends";
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
import { Text } from '../../typography';
import { TickIcon } from '../../icons';
import { withTheme } from '../../theme';

var MenuOption = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(MenuOption, _React$PureComponent);

  var _super = _createSuper(MenuOption);

  function MenuOption() {
    var _this;

    _classCallCheck(this, MenuOption);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      _this.props.onSelect();
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        _this.props.onSelect();

        e.preventDefault();
      }
    });

    return _this;
  }

  _createClass(MenuOption, [{
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
      return React.createElement(Pane, {
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
      }, isSelected && React.createElement(TickIcon, {
        "aria-hidden": true,
        color: "selected",
        marginLeft: 16,
        marginRight: -4,
        size: 16,
        flexShrink: 0
      }), React.createElement(Text, _extends({}, textProps, {
        marginRight: 16,
        flex: 1
      }), children), secondaryText && React.createElement(Text, {
        marginRight: 16,
        color: "muted"
      }, secondaryText));
    }
  }]);

  return MenuOption;
}(React.PureComponent);

MenuOption.displayName = "MenuOption";

_defineProperty(MenuOption, "propTypes", {
  /**
   * The id attribute of the menu option.
   */
  id: PropTypes.string,

  /**
   * Function that is called on click and enter/space keypress.
   */
  onSelect: PropTypes.func,

  /**
   * The icon before the label.
   */
  isSelected: PropTypes.bool,

  /**
   * The children of the component.
   */
  children: PropTypes.node,

  /**
   * Secondary text shown on the right.
   */
  secondaryText: PropTypes.node,

  /**
   * The default theme only supports one default appearance.
   */
  appearance: PropTypes.string.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
});

_defineProperty(MenuOption, "defaultProps", {
  appearance: 'default',
  isSelected: false,
  onClick: function onClick() {},
  onSelect: function onSelect() {},
  onKeyPress: function onKeyPress() {}
});

export default withTheme(MenuOption);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tZW51L3NyYy9NZW51T3B0aW9uLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiUGFuZSIsIlRleHQiLCJUaWNrSWNvbiIsIndpdGhUaGVtZSIsIk1lbnVPcHRpb24iLCJwcm9wcyIsIm9uU2VsZWN0IiwiZSIsImtleSIsInByZXZlbnREZWZhdWx0IiwiaWQiLCJjaGlsZHJlbiIsInRoZW1lIiwiYXBwZWFyYW5jZSIsInNlY29uZGFyeVRleHQiLCJpc1NlbGVjdGVkIiwidGhlbWVkQ2xhc3NOYW1lIiwiZ2V0TWVudUl0ZW1DbGFzc05hbWUiLCJ0ZXh0UHJvcHMiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJtYXJnaW5MZWZ0IiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVLZXlQcmVzcyIsIlB1cmVDb21wb25lbnQiLCJzdHJpbmciLCJmdW5jIiwiYm9vbCIsIm5vZGUiLCJpc1JlcXVpcmVkIiwib2JqZWN0Iiwib25DbGljayIsIm9uS2V5UHJlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsY0FBckI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGtCQUFyQjtBQUNBLFNBQVNDLFFBQVQsUUFBeUIsYUFBekI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGFBQTFCOztJQUVNQyxVOzs7Ozs7Ozs7Ozs7Ozs7O2tFQThDVSxZQUFNO0FBQ2xCLFlBQUtDLEtBQUwsQ0FBV0MsUUFBWDtBQUNELEs7O3FFQUVnQixVQUFBQyxDQUFDLEVBQUk7QUFDcEIsVUFBSUEsQ0FBQyxDQUFDQyxHQUFGLEtBQVUsT0FBVixJQUFxQkQsQ0FBQyxDQUFDQyxHQUFGLEtBQVUsR0FBbkMsRUFBd0M7QUFDdEMsY0FBS0gsS0FBTCxDQUFXQyxRQUFYOztBQUNBQyxRQUFBQSxDQUFDLENBQUNFLGNBQUY7QUFDRDtBQUNGLEs7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Y3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyBUaWNrSWNvbiB9IGZyb20gJy4uLy4uL2ljb25zJ1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNsYXNzIE1lbnVPcHRpb24gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgaWQgYXR0cmlidXRlIG9mIHRoZSBtZW51IG9wdGlvbi5cbiAgICAgKi9cbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIG9uIGNsaWNrIGFuZCBlbnRlci9zcGFjZSBrZXlwcmVzcy5cbiAgICAgKi9cbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaWNvbiBiZWZvcmUgdGhlIGxhYmVsLlxuICAgICAqL1xuICAgIGlzU2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNoaWxkcmVuIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogU2Vjb25kYXJ5IHRleHQgc2hvd24gb24gdGhlIHJpZ2h0LlxuICAgICAqL1xuICAgIHNlY29uZGFyeVRleHQ6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgdGhlbWUgb25seSBzdXBwb3J0cyBvbmUgZGVmYXVsdCBhcHBlYXJhbmNlLlxuICAgICAqL1xuICAgIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhcHBlYXJhbmNlOiAnZGVmYXVsdCcsXG4gICAgaXNTZWxlY3RlZDogZmFsc2UsXG4gICAgb25DbGljazogKCkgPT4ge30sXG4gICAgb25TZWxlY3Q6ICgpID0+IHt9LFxuICAgIG9uS2V5UHJlc3M6ICgpID0+IHt9XG4gIH1cblxuICBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2VsZWN0KClcbiAgfVxuXG4gIGhhbmRsZUtleVByZXNzID0gZSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInIHx8IGUua2V5ID09PSAnICcpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QoKVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICB0aGVtZSxcbiAgICAgIGFwcGVhcmFuY2UsXG4gICAgICBzZWNvbmRhcnlUZXh0LFxuICAgICAgaXNTZWxlY3RlZFxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB0aGVtZWRDbGFzc05hbWUgPSB0aGVtZS5nZXRNZW51SXRlbUNsYXNzTmFtZShhcHBlYXJhbmNlLCAnbm9uZScpXG5cbiAgICBjb25zdCB0ZXh0UHJvcHMgPSBpc1NlbGVjdGVkXG4gICAgICA/IHtcbiAgICAgICAgICBjb2xvcjogJ3NlbGVjdGVkJyxcbiAgICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgICAgbWFyZ2luTGVmdDogMTZcbiAgICAgICAgfVxuICAgICAgOiB7IG1hcmdpbkxlZnQ6IDQ0IH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZVxuICAgICAgICBpZD17aWR9XG4gICAgICAgIHJvbGU9XCJtZW51aXRlbXJhZGlvXCJcbiAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgIGNsYXNzTmFtZT17dGhlbWVkQ2xhc3NOYW1lfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICBvbktleVByZXNzPXt0aGlzLmhhbmRsZUtleVByZXNzfVxuICAgICAgICBkYXRhLWlzc2VsZWN0YWJsZT1cInRydWVcIlxuICAgICAgICBhcmlhLWNoZWNrZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgIGhlaWdodD17NDB9XG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICA+XG4gICAgICAgIHtpc1NlbGVjdGVkICYmIChcbiAgICAgICAgICA8VGlja0ljb25cbiAgICAgICAgICAgIGFyaWEtaGlkZGVuXG4gICAgICAgICAgICBjb2xvcj1cInNlbGVjdGVkXCJcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ9ezE2fVxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ9ey00fVxuICAgICAgICAgICAgc2l6ZT17MTZ9XG4gICAgICAgICAgICBmbGV4U2hyaW5rPXswfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxUZXh0IHsuLi50ZXh0UHJvcHN9IG1hcmdpblJpZ2h0PXsxNn0gZmxleD17MX0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIHtzZWNvbmRhcnlUZXh0ICYmIChcbiAgICAgICAgICA8VGV4dCBtYXJnaW5SaWdodD17MTZ9IGNvbG9yPVwibXV0ZWRcIj5cbiAgICAgICAgICAgIHtzZWNvbmRhcnlUZXh0fVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgKX1cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKE1lbnVPcHRpb24pXG4iXX0=