import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
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
import Box from 'ui-box';
import { IconWrapper } from '../../icons/src/IconWrapper';
import { Pane } from '../../layers';
import { Text } from '../../typography';
import { withTheme } from '../../theme';
import safeInvoke from '../../lib/safe-invoke';
import warning from '../../lib/warning';

var MenuItem = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(MenuItem, _React$PureComponent);

  var _super = _createSuper(MenuItem);

  function MenuItem() {
    var _this;

    _classCallCheck(this, MenuItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      _this.props.onSelect(event);
      /* eslint-disable react/prop-types */


      safeInvoke(_this.props.onClick, event);
      /* eslint-enable react/prop-types */
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        _this.props.onSelect(event);

        event.preventDefault();
      }
      /* eslint-disable react/prop-types */


      safeInvoke(_this.props.onKeyPress, event);
      /* eslint-enable react/prop-types */
    });

    return _this;
  }

  _createClass(MenuItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          is = _this$props.is,
          children = _this$props.children,
          theme = _this$props.theme,
          appearance = _this$props.appearance,
          secondaryText = _this$props.secondaryText,
          intent = _this$props.intent,
          icon = _this$props.icon,
          passthroughProps = _objectWithoutProperties(_this$props, ["is", "children", "theme", "appearance", "secondaryText", "intent", "icon"]);

      if (process.env.NODE_ENV !== 'production') {
        warning('onClick' in this.props, '<Menu.Item> expects `onSelect` prop, but you passed `onClick`.');
      }

      var themedClassName = theme.getMenuItemClassName(appearance, 'none');
      return React.createElement(Pane, _extends({
        is: is,
        role: "menuitem",
        className: themedClassName,
        onClick: this.handleClick,
        onKeyPress: this.handleKeyPress,
        height: icon ? 40 : 32,
        tabIndex: 0,
        "data-isselectable": "true",
        display: "flex",
        alignItems: "center"
      }, passthroughProps), React.createElement(IconWrapper, {
        icon: icon,
        color: intent === 'none' ? 'default' : intent,
        marginLeft: 16,
        marginRight: -4,
        size: 16,
        flexShrink: 0
      }), React.createElement(Text, {
        color: intent,
        marginLeft: 16,
        marginRight: 16,
        flex: 1
      }, children), secondaryText && React.createElement(Text, {
        marginRight: 16,
        color: "muted"
      }, secondaryText));
    }
  }]);

  return MenuItem;
}(React.PureComponent);

MenuItem.displayName = "MenuItem";

_defineProperty(MenuItem, "propTypes", {
  /**
   * Element type to use for the menu item.
   * For example: `<MenuItem is={ReactRouterLink}>...</MenuItem>`
   */
  is: Box.propTypes.is,

  /**
   * Function that is called on click and enter/space keypress.
   */
  onSelect: PropTypes.func,

  /**
   * The Evergreen or custom icon before the label.
   */
  icon: PropTypes.node,

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
   * The intent of the menu item.
   */
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
});

_defineProperty(MenuItem, "defaultProps", {
  is: 'div',
  intent: 'none',
  appearance: 'default',
  onSelect: function onSelect() {}
});

export default withTheme(MenuItem);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tZW51L3NyYy9NZW51SXRlbS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkJveCIsIkljb25XcmFwcGVyIiwiUGFuZSIsIlRleHQiLCJ3aXRoVGhlbWUiLCJzYWZlSW52b2tlIiwid2FybmluZyIsIk1lbnVJdGVtIiwiZXZlbnQiLCJwcm9wcyIsIm9uU2VsZWN0Iiwib25DbGljayIsImtleSIsInByZXZlbnREZWZhdWx0Iiwib25LZXlQcmVzcyIsImlzIiwiY2hpbGRyZW4iLCJ0aGVtZSIsImFwcGVhcmFuY2UiLCJzZWNvbmRhcnlUZXh0IiwiaW50ZW50IiwiaWNvbiIsInBhc3N0aHJvdWdoUHJvcHMiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJ0aGVtZWRDbGFzc05hbWUiLCJnZXRNZW51SXRlbUNsYXNzTmFtZSIsImhhbmRsZUNsaWNrIiwiaGFuZGxlS2V5UHJlc3MiLCJQdXJlQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiZnVuYyIsIm5vZGUiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwib25lT2YiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxHQUFQLE1BQWdCLFFBQWhCO0FBQ0EsU0FBU0MsV0FBVCxRQUE0Qiw2QkFBNUI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGNBQXJCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixrQkFBckI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGFBQTFCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1Qix1QkFBdkI7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLG1CQUFwQjs7SUFFTUMsUTs7Ozs7Ozs7Ozs7Ozs7OztrRUFvRFUsVUFBQUMsS0FBSyxFQUFJO0FBQ3JCLFlBQUtDLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkYsS0FBcEI7QUFFQTs7O0FBQ0FILE1BQUFB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Qjs7O0FBR0FkLEVBQUFBLGFBQWEsRUFBRXBCLFNBQVMsQ0FBQ2tDLElBekJSOztBQTJCakI7OztBQUdBZixFQUFBQSxVQUFVLEVBQUVuQixTQUFTLENBQUNtQyxNQUFWLENBQWlCQyxVQTlCWjs7QUFnQ2pCOzs7QUFHQWYsRUFBQUEsTUFBTSxFQUFFckIsU0FBUyxDQUFDcUMsS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxTQUFULEVBQW9CLFNBQXBCLEVBQStCLFFBQS9CLENBQWhCLEVBQ0xELFVBcENjOztBQXNDakI7OztBQUdBbEIsRUFBQUEsS0FBSyxFQUFFbEIsU0FBUyxDQUFDc0MsTUFBVixDQUFpQkY7QUF6Q1AsQzs7Z0JBRGY1QixRLGtCQTZDa0I7QUFDcEJRLEVBQUFBLEVBQUUsRUFBRSxLQURnQjtBQUVwQkssRUFBQUEsTUFBTSxFQUFFLE1BRlk7QUFHcEJGLEVBQUFBLFVBQVUsRUFBRSxTQUhRO0FBSXBCUixFQUFBQSxRQUFRLEVBQUUsb0JBQU0sQ0FBRTtBQUpFLEM7O0FBa0Z4QixlQUFlTixTQUFTLENBQUNHLFFBQUQsQ0FBeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IEljb25XcmFwcGVyIH0gZnJvbSAnLi4vLi4vaWNvbnMvc3JjL0ljb25XcmFwcGVyJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5pbXBvcnQgc2FmZUludm9rZSBmcm9tICcuLi8uLi9saWIvc2FmZS1pbnZva2UnXG5pbXBvcnQgd2FybmluZyBmcm9tICcuLi8uLi9saWIvd2FybmluZydcblxuY2xhc3MgTWVudUl0ZW0gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBFbGVtZW50IHR5cGUgdG8gdXNlIGZvciB0aGUgbWVudSBpdGVtLlxuICAgICAqIEZvciBleGFtcGxlOiBgPE1lbnVJdGVtIGlzPXtSZWFjdFJvdXRlckxpbmt9Pi4uLjwvTWVudUl0ZW0+YFxuICAgICAqL1xuICAgIGlzOiBCb3gucHJvcFR5cGVzLmlzLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgb24gY2xpY2sgYW5kIGVudGVyL3NwYWNlIGtleXByZXNzLlxuICAgICAqL1xuICAgIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBFdmVyZ3JlZW4gb3IgY3VzdG9tIGljb24gYmVmb3JlIHRoZSBsYWJlbC5cbiAgICAgKi9cbiAgICBpY29uOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjaGlsZHJlbiBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFNlY29uZGFyeSB0ZXh0IHNob3duIG9uIHRoZSByaWdodC5cbiAgICAgKi9cbiAgICBzZWNvbmRhcnlUZXh0OiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IHRoZW1lIG9ubHkgc3VwcG9ydHMgb25lIGRlZmF1bHQgYXBwZWFyYW5jZS5cbiAgICAgKi9cbiAgICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW50ZW50IG9mIHRoZSBtZW51IGl0ZW0uXG4gICAgICovXG4gICAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoWydub25lJywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInXSlcbiAgICAgIC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGlzOiAnZGl2JyxcbiAgICBpbnRlbnQ6ICdub25lJyxcbiAgICBhcHBlYXJhbmNlOiAnZGVmYXVsdCcsXG4gICAgb25TZWxlY3Q6ICgpID0+IHt9XG4gIH1cblxuICBoYW5kbGVDbGljayA9IGV2ZW50ID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGV2ZW50KVxuXG4gICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xuICAgIHNhZmVJbnZva2UodGhpcy5wcm9wcy5vbkNsaWNrLCBldmVudClcbiAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cbiAgfVxuXG4gIGhhbmRsZUtleVByZXNzID0gZXZlbnQgPT4ge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicgfHwgZXZlbnQua2V5ID09PSAnICcpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QoZXZlbnQpXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xuICAgIHNhZmVJbnZva2UodGhpcy5wcm9wcy5vbktleVByZXNzLCBldmVudClcbiAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpcyxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgdGhlbWUsXG4gICAgICBhcHBlYXJhbmNlLFxuICAgICAgc2Vjb25kYXJ5VGV4dCxcbiAgICAgIGludGVudCxcbiAgICAgIGljb24sXG4gICAgICAuLi5wYXNzdGhyb3VnaFByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB3YXJuaW5nKFxuICAgICAgICAnb25DbGljaycgaW4gdGhpcy5wcm9wcyxcbiAgICAgICAgJzxNZW51Lkl0ZW0+IGV4cGVjdHMgYG9uU2VsZWN0YCBwcm9wLCBidXQgeW91IHBhc3NlZCBgb25DbGlja2AuJ1xuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IHRoZW1lZENsYXNzTmFtZSA9IHRoZW1lLmdldE1lbnVJdGVtQ2xhc3NOYW1lKGFwcGVhcmFuY2UsICdub25lJylcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZVxuICAgICAgICBpcz17aXN9XG4gICAgICAgIHJvbGU9XCJtZW51aXRlbVwiXG4gICAgICAgIGNsYXNzTmFtZT17dGhlbWVkQ2xhc3NOYW1lfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICBvbktleVByZXNzPXt0aGlzLmhhbmRsZUtleVByZXNzfVxuICAgICAgICBoZWlnaHQ9e2ljb24gPyA0MCA6IDMyfVxuICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgZGF0YS1pc3NlbGVjdGFibGU9XCJ0cnVlXCJcbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgey4uLnBhc3N0aHJvdWdoUHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxJY29uV3JhcHBlclxuICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgY29sb3I9e2ludGVudCA9PT0gJ25vbmUnID8gJ2RlZmF1bHQnIDogaW50ZW50fVxuICAgICAgICAgIG1hcmdpbkxlZnQ9ezE2fVxuICAgICAgICAgIG1hcmdpblJpZ2h0PXstNH1cbiAgICAgICAgICBzaXplPXsxNn1cbiAgICAgICAgICBmbGV4U2hyaW5rPXswfVxuICAgICAgICAvPlxuICAgICAgICA8VGV4dCBjb2xvcj17aW50ZW50fSBtYXJnaW5MZWZ0PXsxNn0gbWFyZ2luUmlnaHQ9ezE2fSBmbGV4PXsxfT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAge3NlY29uZGFyeVRleHQgJiYgKFxuICAgICAgICAgIDxUZXh0IG1hcmdpblJpZ2h0PXsxNn0gY29sb3I9XCJtdXRlZFwiPlxuICAgICAgICAgICAge3NlY29uZGFyeVRleHR9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICApfVxuICAgICAgPC9QYW5lPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoTWVudUl0ZW0pXG4iXX0=