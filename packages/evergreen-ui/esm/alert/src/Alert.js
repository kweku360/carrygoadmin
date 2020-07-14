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
import { spacing, dimensions, position, layout } from 'ui-box';
import { withTheme } from '../../theme';
import { Pane } from '../../layers';
import { Heading, Paragraph } from '../../typography';
import { IconButton } from '../../buttons';
import { CrossIcon } from '../../icons';
import { getIconForIntent } from './getIconForIntent';

var Alert = /*#__PURE__*/function (_PureComponent) {
  _inherits(Alert, _PureComponent);

  var _super = _createSuper(Alert);

  function Alert() {
    _classCallCheck(this, Alert);

    return _super.apply(this, arguments);
  }

  _createClass(Alert, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          title = _this$props.title,
          intent = _this$props.intent,
          hasTrim = _this$props.hasTrim,
          hasIcon = _this$props.hasIcon,
          children = _this$props.children,
          appearance = _this$props.appearance,
          isRemoveable = _this$props.isRemoveable,
          onRemove = _this$props.onRemove,
          props = _objectWithoutProperties(_this$props, ["theme", "title", "intent", "hasTrim", "hasIcon", "children", "appearance", "isRemoveable", "onRemove"]);
      /**
       * Note that Alert return a className and additional properties.
       */


      var _theme$getAlertProps = theme.getAlertProps({
        appearance: appearance,
        intent: intent,
        hasTrim: hasTrim
      }),
          className = _theme$getAlertProps.className,
          themeProps = _objectWithoutProperties(_theme$getAlertProps, ["className"]);

      return React.createElement(Pane, _extends({
        className: className,
        role: "alert",
        backgroundColor: "white",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        paddingY: 12,
        paddingX: 16
      }, themeProps, props), hasIcon && React.createElement(Pane, {
        marginRight: 10,
        marginLeft: 2,
        height: 20,
        display: "flex",
        alignItems: "center"
      }, getIconForIntent(intent, {
        size: 14
      })), React.createElement(Pane, {
        display: "flex",
        width: "100%"
      }, React.createElement(Pane, {
        flex: 1
      }, React.createElement(Heading, {
        is: "h4",
        fontWeight: 600,
        size: 400,
        marginTop: 0,
        marginBottom: 0
      }, title), typeof children === 'string' ? React.createElement(Paragraph, {
        size: 400,
        color: "muted"
      }, children) : children), isRemoveable && React.createElement(Pane, {
        marginLeft: 24,
        flexShrink: 0,
        marginBottom: -2,
        marginTop: -2,
        marginRight: -2
      }, React.createElement(IconButton, {
        icon: React.createElement(CrossIcon, null),
        appearance: "minimal",
        height: 24,
        onClick: onRemove
      }))));
    }
  }]);

  return Alert;
}(PureComponent);

Alert.displayName = "Alert";

_defineProperty(Alert, "propTypes", _objectSpread({}, spacing.propTypes, {}, position.propTypes, {}, layout.propTypes, {}, dimensions.propTypes, {
  /**
   * The content of the alert. When a string is passed it is wrapped in a `<Text size={400} />` component.
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * The intent of the alert.
   */
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * The title of the alert.
   */
  title: PropTypes.node,

  /**
   * When true, show a border on the left matching the type.
   */
  hasTrim: PropTypes.bool,

  /**
   * When true, show a icon on the left matching the type,
   */
  hasIcon: PropTypes.bool,

  /**
   * When true, show a remove icon button.
   */
  isRemoveable: PropTypes.bool,

  /**
   * Function called when the remove button is clicked.
   */
  onRemove: PropTypes.func,

  /**
   * The appearance of the alert.
   */
  appearance: PropTypes.oneOf(['default', 'card']),

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
}));

_defineProperty(Alert, "defaultProps", {
  intent: 'none',
  hasTrim: true,
  hasIcon: true,
  isRemoveable: false,
  appearance: 'default'
});

export default withTheme(Alert);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbGVydC9zcmMvQWxlcnQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwic3BhY2luZyIsImRpbWVuc2lvbnMiLCJwb3NpdGlvbiIsImxheW91dCIsIndpdGhUaGVtZSIsIlBhbmUiLCJIZWFkaW5nIiwiUGFyYWdyYXBoIiwiSWNvbkJ1dHRvbiIsIkNyb3NzSWNvbiIsImdldEljb25Gb3JJbnRlbnQiLCJBbGVydCIsInByb3BzIiwidGhlbWUiLCJ0aXRsZSIsImludGVudCIsImhhc1RyaW0iLCJoYXNJY29uIiwiY2hpbGRyZW4iLCJhcHBlYXJhbmNlIiwiaXNSZW1vdmVhYmxlIiwib25SZW1vdmUiLCJnZXRBbGVydFByb3BzIiwiY2xhc3NOYW1lIiwidGhlbWVQcm9wcyIsInNpemUiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJub2RlIiwib25lT2YiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImZ1bmMiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsT0FBVCxFQUFrQkMsVUFBbEIsRUFBOEJDLFFBQTlCLEVBQXdDQyxNQUF4QyxRQUFzRCxRQUF0RDtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsYUFBMUI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGNBQXJCO0FBQ0EsU0FBU0MsT0FBVCxFQUFrQkMsU0FBbEIsUUFBbUMsa0JBQW5DO0FBQ0EsU0FBU0MsVUFBVCxRQUEyQixlQUEzQjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsYUFBMUI7QUFDQSxTQUFTQyxnQkFBVCxRQUFpQyxvQkFBakM7O0lBRU1DLEs7Ozs7Ozs7Ozs7Ozs7NkJBaUVLO0FBQUEsd0JBYUgsS0FBS0MsS0FiRjtBQUFBLFVBRUxDLEtBRkssZUFFTEEsS0FG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QzVCLFNBQVMsQ0FBQzZCLE1BQVgsRUFBbUI3QixTQUFTLENBQUM4QixJQUE3QixDQUFwQixDOztBQUVWOzs7QUFHQWQsRUFBQUEsTUFBTSxFQUFFaEIsU0FBUyxDQUFDK0IsS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxTQUFULEVBQW9CLFNBQXBCLEVBQStCLFFBQS9CLENBQWhCLEVBQ0xDLFU7O0FBRUg7OztBQUdBakIsRUFBQUEsS0FBSyxFQUFFZixTQUFTLENBQUM4QixJOztBQUVqQjs7O0FBR0FiLEVBQUFBLE9BQU8sRUFBRWpCLFNBQVMsQ0FBQ2lDLEk7O0FBRW5COzs7QUFHQWYsRUFBQUEsT0FBTyxFQUFFbEIsU0FBUyxDQUFDaUMsSTs7QUFFbkI7OztBQUdBWixFQUFBQSxZQUFZLEVBQUVyQixTQUFTLENBQUNpQyxJOztBQUV4Qjs7O0FBR0FYLEVBQUFBLFFBQVEsRUFBRXRCLFNBQVMsQ0FBQ2tDLEk7O0FBRXBCOzs7QUFHQWQsRUFBQUEsVUFBVSxFQUFFcEIsU0FBUyxDQUFDK0IsS0FBVixDQUFnQixDQUFDLFNBQUQsRUFBWSxNQUFaLENBQWhCLEM7O0FBRVo7OztBQUdBakIsRUFBQUEsS0FBSyxFQUFFZCxTQUFTLENBQUNtQyxNQUFWLENBQWlCSDs7O2dCQXREdEJwQixLLGtCQXlEa0I7QUFDcEJJLEVBQUFBLE1BQU0sRUFBRSxNQURZO0FBRXBCQyxFQUFBQSxPQUFPLEVBQUUsSUFGVztBQUdwQkMsRUFBQUEsT0FBTyxFQUFFLElBSFc7QUFJcEJHLEVBQUFBLFlBQVksRUFBRSxLQUpNO0FBS3BCRCxFQUFBQSxVQUFVLEVBQUU7QUFMUSxDOztBQWlHeEIsZUFBZWYsU0FBUyxDQUFDTyxLQUFELENBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IHNwYWNpbmcsIGRpbWVuc2lvbnMsIHBvc2l0aW9uLCBsYXlvdXQgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBIZWFkaW5nLCBQYXJhZ3JhcGggfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gJy4uLy4uL2J1dHRvbnMnXG5pbXBvcnQgeyBDcm9zc0ljb24gfSBmcm9tICcuLi8uLi9pY29ucydcbmltcG9ydCB7IGdldEljb25Gb3JJbnRlbnQgfSBmcm9tICcuL2dldEljb25Gb3JJbnRlbnQnXG5cbmNsYXNzIEFsZXJ0IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgc29tZSBCb3ggQVBJcy5cbiAgICAgKi9cbiAgICAuLi5zcGFjaW5nLnByb3BUeXBlcyxcbiAgICAuLi5wb3NpdGlvbi5wcm9wVHlwZXMsXG4gICAgLi4ubGF5b3V0LnByb3BUeXBlcyxcbiAgICAuLi5kaW1lbnNpb25zLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb250ZW50IG9mIHRoZSBhbGVydC4gV2hlbiBhIHN0cmluZyBpcyBwYXNzZWQgaXQgaXMgd3JhcHBlZCBpbiBhIGA8VGV4dCBzaXplPXs0MDB9IC8+YCBjb21wb25lbnQuXG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSksXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW50ZW50IG9mIHRoZSBhbGVydC5cbiAgICAgKi9cbiAgICBpbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbJ25vbmUnLCAnc3VjY2VzcycsICd3YXJuaW5nJywgJ2RhbmdlciddKVxuICAgICAgLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgb2YgdGhlIGFsZXJ0LlxuICAgICAqL1xuICAgIHRpdGxlOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgc2hvdyBhIGJvcmRlciBvbiB0aGUgbGVmdCBtYXRjaGluZyB0aGUgdHlwZS5cbiAgICAgKi9cbiAgICBoYXNUcmltOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgc2hvdyBhIGljb24gb24gdGhlIGxlZnQgbWF0Y2hpbmcgdGhlIHR5cGUsXG4gICAgICovXG4gICAgaGFzSWNvbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHNob3cgYSByZW1vdmUgaWNvbiBidXR0b24uXG4gICAgICovXG4gICAgaXNSZW1vdmVhYmxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSByZW1vdmUgYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAgICovXG4gICAgb25SZW1vdmU6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGFsZXJ0LlxuICAgICAqL1xuICAgIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAnY2FyZCddKSxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBpbnRlbnQ6ICdub25lJyxcbiAgICBoYXNUcmltOiB0cnVlLFxuICAgIGhhc0ljb246IHRydWUsXG4gICAgaXNSZW1vdmVhYmxlOiBmYWxzZSxcbiAgICBhcHBlYXJhbmNlOiAnZGVmYXVsdCdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aGVtZSxcblxuICAgICAgdGl0bGUsXG4gICAgICBpbnRlbnQsXG4gICAgICBoYXNUcmltLFxuICAgICAgaGFzSWNvbixcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgYXBwZWFyYW5jZSxcbiAgICAgIGlzUmVtb3ZlYWJsZSxcbiAgICAgIG9uUmVtb3ZlLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgLyoqXG4gICAgICogTm90ZSB0aGF0IEFsZXJ0IHJldHVybiBhIGNsYXNzTmFtZSBhbmQgYWRkaXRpb25hbCBwcm9wZXJ0aWVzLlxuICAgICAqL1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi50aGVtZVByb3BzIH0gPSB0aGVtZS5nZXRBbGVydFByb3BzKHtcbiAgICAgIGFwcGVhcmFuY2UsXG4gICAgICBpbnRlbnQsXG4gICAgICBoYXNUcmltXG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgcm9sZT1cImFsZXJ0XCJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIlxuICAgICAgICBvdmVyZmxvdz1cImhpZGRlblwiXG4gICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIHBhZGRpbmdZPXsxMn1cbiAgICAgICAgcGFkZGluZ1g9ezE2fVxuICAgICAgICB7Li4udGhlbWVQcm9wc31cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICB7aGFzSWNvbiAmJiAoXG4gICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0PXsxMH1cbiAgICAgICAgICAgIG1hcmdpbkxlZnQ9ezJ9XG4gICAgICAgICAgICBoZWlnaHQ9ezIwfVxuICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2dldEljb25Gb3JJbnRlbnQoaW50ZW50LCB7IHNpemU6IDE0IH0pfVxuICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgKX1cbiAgICAgICAgPFBhbmUgZGlzcGxheT1cImZsZXhcIiB3aWR0aD1cIjEwMCVcIj5cbiAgICAgICAgICA8UGFuZSBmbGV4PXsxfT5cbiAgICAgICAgICAgIDxIZWFkaW5nXG4gICAgICAgICAgICAgIGlzPVwiaDRcIlxuICAgICAgICAgICAgICBmb250V2VpZ2h0PXs2MDB9XG4gICAgICAgICAgICAgIHNpemU9ezQwMH1cbiAgICAgICAgICAgICAgbWFyZ2luVG9wPXswfVxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b209ezB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgIHt0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnID8gKFxuICAgICAgICAgICAgICA8UGFyYWdyYXBoIHNpemU9ezQwMH0gY29sb3I9XCJtdXRlZFwiPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAge2lzUmVtb3ZlYWJsZSAmJiAoXG4gICAgICAgICAgICA8UGFuZVxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0PXsyNH1cbiAgICAgICAgICAgICAgZmxleFNocmluaz17MH1cbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tPXstMn1cbiAgICAgICAgICAgICAgbWFyZ2luVG9wPXstMn1cbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ9ey0yfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgIGljb249ezxDcm9zc0ljb24gLz59XG4gICAgICAgICAgICAgICAgYXBwZWFyYW5jZT1cIm1pbmltYWxcIlxuICAgICAgICAgICAgICAgIGhlaWdodD17MjR9XG4gICAgICAgICAgICAgICAgb25DbGljaz17b25SZW1vdmV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9QYW5lPlxuICAgICAgPC9QYW5lPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoQWxlcnQpXG4iXX0=