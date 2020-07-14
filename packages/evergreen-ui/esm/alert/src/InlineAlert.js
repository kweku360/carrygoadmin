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
import { Pane } from '../../layers';
import { Text } from '../../typography';
import { getIconForIntent } from './getIconForIntent';

var InlineAlert = /*#__PURE__*/function (_PureComponent) {
  _inherits(InlineAlert, _PureComponent);

  var _super = _createSuper(InlineAlert);

  function InlineAlert() {
    _classCallCheck(this, InlineAlert);

    return _super.apply(this, arguments);
  }

  _createClass(InlineAlert, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          intent = _this$props.intent,
          hasIcon = _this$props.hasIcon,
          size = _this$props.size,
          props = _objectWithoutProperties(_this$props, ["children", "intent", "hasIcon", "size"]);

      return React.createElement(Pane, _extends({
        alignItems: "center",
        display: "flex"
      }, props), hasIcon && React.createElement(Pane, {
        display: "inline",
        marginRight: 8
      }, getIconForIntent(intent, {
        size: 14,
        marginTop: 2
      })), React.createElement(Text, {
        size: size,
        fontWeight: 500
      }, children));
    }
  }]);

  return InlineAlert;
}(PureComponent);

InlineAlert.displayName = "InlineAlert";

_defineProperty(InlineAlert, "propTypes", _objectSpread({}, spacing.propTypes, {}, position.propTypes, {}, layout.propTypes, {}, dimensions.propTypes, {
  /**
   * The content of the alert.
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * The intent of the alert. This should always be set explicitly.
   */
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * When true, show a icon on the left matching the type.
   * There is no point not showing this.
   */
  hasIcon: PropTypes.bool,

  /**
   * The size of the Text.
   */
  size: PropTypes.number
}));

_defineProperty(InlineAlert, "defaultProps", {
  intent: 'none',
  hasIcon: true,
  size: 400
});

export default InlineAlert;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbGVydC9zcmMvSW5saW5lQWxlcnQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwic3BhY2luZyIsImRpbWVuc2lvbnMiLCJwb3NpdGlvbiIsImxheW91dCIsIlBhbmUiLCJUZXh0IiwiZ2V0SWNvbkZvckludGVudCIsIklubGluZUFsZXJ0IiwicHJvcHMiLCJjaGlsZHJlbiIsImludGVudCIsImhhc0ljb24iLCJzaXplIiwibWFyZ2luVG9wIiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibm9kZSIsIm9uZU9mIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsT0FBVCxFQUFrQkMsVUFBbEIsRUFBOEJDLFFBQTlCLEVBQXdDQyxNQUF4QyxRQUFzRCxRQUF0RDtBQUNBLFNBQVNDLElBQVQsUUFBcUIsY0FBckI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGtCQUFyQjtBQUNBLFNBQVNDLGdCQUFULFFBQWlDLG9CQUFqQzs7SUFFTUMsVzs7Ozs7Ozs7Ozs7Ozs2QkF1Q0s7QUFBQSx3QkFDK0MsS0FBS0MsS0FEcEQ7QUFBQSxVQUNDQyxRQURELGVBQ0NBLFFBREQ7QUFBQSxVQUNXQyxNQURYLGVBQ1dBLE1BRFg7QUFBQSxVQUNtQkMsT0FEbkIsZUFDbUJBLE9BRG5CO0FBQUEsVUFDNEJDLElBRDVCLGVBQzRCQSxJQUQ1QjtBQUFBLFVBQ3FDSixLQURyQzs7QUFHUCxhQUNFLG9CQUFDLElBQUQ7QUFBTSxRQUFBLFVBQVUsRUFBQyxRQUFqQjtBQUEwQixRQUFBLE9BQU8sRUFBQztBQUFsQyxTQUE2Q0EsS0FBN0MsR0FDR0csT0FBTyxJQUNOLG9CQUFDLElBQUQ7QUFBTSxRQUFBLE9BQU8sRUFBQyxRQUFkO0FBQXVCLFFBQUEsV0FBVyxFQUFFO0FBQXBDLFNBQ0dMLGdCQUFnQixDQUFDSSxNQUFELEVBQVM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFLEVBQVI7QUFBWUMsUUFBQUEsU0FBUyxFQUFFO0FBQXZCLE9BQVQsQ0FEbkIsQ0FGSixFQU1FLG9CQUFDLElBQUQ7QUFBTSxRQUFBLElBQUksRUFBRUQsSUFBWjtBQUFrQixRQUFBLFVBQVUsRUFBRTtBQUE5QixTQUNHSCxRQURILENBTkYsQ0FERjtBQVlEOzs7O0VBdER1QlgsYTs7QUFBcEJTLFc7O2dCQUFBQSxXLGlDQUtDUCxPQUFPLENBQUNjLFMsTUFDUlosUUFBUSxDQUFDWSxTLE1BQ1RYLE1BQU0sQ0FBQ1csUyxNQUNQYixVQUFVLENBQUNhLFM7QUFFZDs7O0FBR0FMLEVBQUFBLFFBQVEsRUFBRVYsU0FBUyxDQUFDZ0IsU0FBVixDQUFvQixDQUFDaEIsU0FBUyxDQUFDaUIsTUFBWCxFQUFtQmpCLFNBQVMsQ0FBQ2tCLElBQTdCLENBQXBCLEM7O0FBRVY7OztBQUdBUCxFQUFBQSxNQUFNLEVBQUVYLFNBQVMsQ0FBQ21CLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsU0FBVCxFQUFvQixTQUFwQixFQUErQixRQUEvQixDQUFoQixFQUNMQyxVOztBQUVIOzs7O0FBSUFSLEVBQUFBLE9BQU8sRUFBRVosU0FBUyxDQUFDcUIsSTs7QUFFbkI7OztBQUdBUixFQUFBQSxJQUFJLEVBQUViLFNBQVMsQ0FBQ3NCOzs7Z0JBOUJkZCxXLGtCQWlDa0I7QUFDcEJHLEVBQUFBLE1BQU0sRUFBRSxNQURZO0FBRXBCQyxFQUFBQSxPQUFPLEVBQUUsSUFGVztBQUdwQkMsRUFBQUEsSUFBSSxFQUFFO0FBSGMsQzs7QUF3QnhCLGVBQWVMLFdBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgc3BhY2luZywgZGltZW5zaW9ucywgcG9zaXRpb24sIGxheW91dCB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IGdldEljb25Gb3JJbnRlbnQgfSBmcm9tICcuL2dldEljb25Gb3JJbnRlbnQnXG5cbmNsYXNzIElubGluZUFsZXJ0IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgc29tZSBCb3ggQVBJcy5cbiAgICAgKi9cbiAgICAuLi5zcGFjaW5nLnByb3BUeXBlcyxcbiAgICAuLi5wb3NpdGlvbi5wcm9wVHlwZXMsXG4gICAgLi4ubGF5b3V0LnByb3BUeXBlcyxcbiAgICAuLi5kaW1lbnNpb25zLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb250ZW50IG9mIHRoZSBhbGVydC5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnRlbnQgb2YgdGhlIGFsZXJ0LiBUaGlzIHNob3VsZCBhbHdheXMgYmUgc2V0IGV4cGxpY2l0bHkuXG4gICAgICovXG4gICAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoWydub25lJywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInXSlcbiAgICAgIC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBzaG93IGEgaWNvbiBvbiB0aGUgbGVmdCBtYXRjaGluZyB0aGUgdHlwZS5cbiAgICAgKiBUaGVyZSBpcyBubyBwb2ludCBub3Qgc2hvd2luZyB0aGlzLlxuICAgICAqL1xuICAgIGhhc0ljb246IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNpemUgb2YgdGhlIFRleHQuXG4gICAgICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLm51bWJlclxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBpbnRlbnQ6ICdub25lJyxcbiAgICBoYXNJY29uOiB0cnVlLFxuICAgIHNpemU6IDQwMFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGludGVudCwgaGFzSWNvbiwgc2l6ZSwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZGlzcGxheT1cImZsZXhcIiB7Li4ucHJvcHN9PlxuICAgICAgICB7aGFzSWNvbiAmJiAoXG4gICAgICAgICAgPFBhbmUgZGlzcGxheT1cImlubGluZVwiIG1hcmdpblJpZ2h0PXs4fT5cbiAgICAgICAgICAgIHtnZXRJY29uRm9ySW50ZW50KGludGVudCwgeyBzaXplOiAxNCwgbWFyZ2luVG9wOiAyIH0pfVxuICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgKX1cbiAgICAgICAgPFRleHQgc2l6ZT17c2l6ZX0gZm9udFdlaWdodD17NTAwfT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5saW5lQWxlcnRcbiJdfQ==