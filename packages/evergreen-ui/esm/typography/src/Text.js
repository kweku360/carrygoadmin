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

import cx from 'classnames';
import { css as glamorCss } from 'glamor';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import { withTheme } from '../../theme';

var Text = /*#__PURE__*/function (_PureComponent) {
  _inherits(Text, _PureComponent);

  var _super = _createSuper(Text);

  function Text() {
    _classCallCheck(this, Text);

    return _super.apply(this, arguments);
  }

  _createClass(Text, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          css = _this$props.css,
          theme = _this$props.theme,
          size = _this$props.size,
          color = _this$props.color,
          fontFamily = _this$props.fontFamily,
          marginTop = _this$props.marginTop,
          props = _objectWithoutProperties(_this$props, ["className", "css", "theme", "size", "color", "fontFamily", "marginTop"]);

      var _theme$getTextStyle = theme.getTextStyle(size),
          defaultMarginTop = _theme$getTextStyle.marginTop,
          textStyle = _objectWithoutProperties(_theme$getTextStyle, ["marginTop"]);

      var finalMarginTop = marginTop === 'default' ? defaultMarginTop : marginTop;
      return React.createElement(Box, _extends({
        is: "span",
        color: theme.getTextColor(color),
        fontFamily: theme.getFontFamily(fontFamily),
        marginTop: finalMarginTop
      }, textStyle, {
        className: cx(className, css ? glamorCss(css).toString() : undefined)
      }, props));
    }
  }]);

  return Text;
}(PureComponent);

Text.displayName = "Text";

_defineProperty(Text, "propTypes", _objectSpread({}, Box.propTypes, {
  /**
   * Size of the text style.
   * Can be: 300, 400, 500, 600.
   */
  size: PropTypes.oneOf([300, 400, 500, 600]).isRequired,

  /**
   * Font family.
   * Can be: `ui`, `display` or `mono` or a custom font family.
   */
  fontFamily: PropTypes.string.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
}));

_defineProperty(Text, "defaultProps", {
  size: 400,
  color: 'default',
  fontFamily: 'ui'
});

export default withTheme(Text);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9UZXh0LmpzIl0sIm5hbWVzIjpbImN4IiwiY3NzIiwiZ2xhbW9yQ3NzIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiQm94Iiwid2l0aFRoZW1lIiwiVGV4dCIsInByb3BzIiwiY2xhc3NOYW1lIiwidGhlbWUiLCJzaXplIiwiY29sb3IiLCJmb250RmFtaWx5IiwibWFyZ2luVG9wIiwiZ2V0VGV4dFN0eWxlIiwiZGVmYXVsdE1hcmdpblRvcCIsInRleHRTdHlsZSIsImZpbmFsTWFyZ2luVG9wIiwiZ2V0VGV4dENvbG9yIiwiZ2V0Rm9udEZhbWlseSIsInRvU3RyaW5nIiwidW5kZWZpbmVkIiwicHJvcFR5cGVzIiwib25lT2YiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEVBQVAsTUFBZSxZQUFmO0FBQ0EsU0FBU0MsR0FBRyxJQUFJQyxTQUFoQixRQUFpQyxRQUFqQztBQUNBLE9BQU9DLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsUUFBaEI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGFBQTFCOztJQUVNQyxJOzs7Ozs7Ozs7Ozs7OzZCQStCSztBQUFBLHdCQVVILEtBQUtDLEtBVkY7QUFBQSxVQUVMQyxTQUZLLGVBRUxBLFNBRks7QUFBQSxVQUdMVCxHQUhLLGVBR0xBLEdBSEs7QUFBQSxVQUlMVSxLQUpLLGVBSUxBLEtBSks7QUFBQSxVQUtMQyxJQUxLLGVBS0xBLElBTEs7QUFBQSxVQU1MQyxLQU5LLGVBTUxBLEtBTks7QUFBQSxVQU9MQyxVQVBLLGVBT0xBLFVBUEs7QUFBQSxVQVFMQyxTQVJLLGVBUUxBLFNBUks7QUFBQSxVQVNGTixLQVRFOztBQUFBLGdDQVkrQ0UsS0FBSyxDQUFDSyxZQUFOLENBQ3BESixJQURvRCxDQVovQztBQUFBLFVBWVlLLGdCQVpaLHVCQVlDRixTQVpEO0FBQUEsVUFZaUNHLFNBWmpDOztBQWdCUCxVQUFNQyxjQUFjLEdBQ2xCSixTQUFTLEtBQUssU0FBZCxHQUEwQkUsZ0JBQTFCLEdBQTZDRixTQUQvQztBQUdBLGFBQ0Usb0JBQUMsR0FBRDtBQUNFLFFBQUEsRUFBRSxFQUFDLE1BREw7QUFFRSxRQUFBLEtBQUssRUFBRUosS0FBSyxDQUFDUyxZQUFOLENBQW1CUCxLQUFuQixDQUZUO0FBR0UsUUFBQSxVQUFVLEVBQUVGLEtBQUssQ0FBQ1UsYUFBTixDQUFvQlAsVUFBcEIsQ0FIZDtBQUlFLFFBQUEsU0FBUyxFQUFFSztBQUpiLFNBS01ELFNBTE47QUFNRSxRQUFBLFNBQVMsRUFBRWxCLEVBQUUsQ0FBQ1UsU0FBRCxFQUFZVCxHQUFHLEdBQUdDLFNBQVMsQ0FBQ0QsR0FBRCxDQUFULENBQWVxQixRQUFmLEVBQUgsR0FBK0JDLFNBQTlDO0FBTmYsU0FPTWQsS0FQTixFQURGO0FBV0Q7Ozs7RUE3RGdCTCxhOztBQUFiSSxJOztnQkFBQUEsSSxpQ0FLQ0YsR0FBRyxDQUFDa0IsUztBQUVQOzs7O0FBSUFaLEVBQUFBLElBQUksRUFBRVAsU0FBUyxDQUFDb0IsS0FBVixDQUFnQixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixDQUFoQixFQUFzQ0MsVTs7QUFFNUM7Ozs7QUFJQVosRUFBQUEsVUFBVSxFQUFFVCxTQUFTLENBQUNzQixNQUFWLENBQWlCRCxVOztBQUU3Qjs7O0FBR0FmLEVBQUFBLEtBQUssRUFBRU4sU0FBUyxDQUFDdUIsTUFBVixDQUFpQkY7OztnQkF0QnRCbEIsSSxrQkF5QmtCO0FBQ3BCSSxFQUFBQSxJQUFJLEVBQUUsR0FEYztBQUVwQkMsRUFBQUEsS0FBSyxFQUFFLFNBRmE7QUFHcEJDLEVBQUFBLFVBQVUsRUFBRTtBQUhRLEM7O0FBdUN4QixlQUFlUCxTQUFTLENBQUNDLElBQUQsQ0FBeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IGNzcyBhcyBnbGFtb3JDc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuY2xhc3MgVGV4dCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBCb3ggY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLkJveC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBTaXplIG9mIHRoZSB0ZXh0IHN0eWxlLlxuICAgICAqIENhbiBiZTogMzAwLCA0MDAsIDUwMCwgNjAwLlxuICAgICAqL1xuICAgIHNpemU6IFByb3BUeXBlcy5vbmVPZihbMzAwLCA0MDAsIDUwMCwgNjAwXSkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZvbnQgZmFtaWx5LlxuICAgICAqIENhbiBiZTogYHVpYCwgYGRpc3BsYXlgIG9yIGBtb25vYCBvciBhIGN1c3RvbSBmb250IGZhbWlseS5cbiAgICAgKi9cbiAgICBmb250RmFtaWx5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc2l6ZTogNDAwLFxuICAgIGNvbG9yOiAnZGVmYXVsdCcsXG4gICAgZm9udEZhbWlseTogJ3VpJ1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNzcyxcbiAgICAgIHRoZW1lLFxuICAgICAgc2l6ZSxcbiAgICAgIGNvbG9yLFxuICAgICAgZm9udEZhbWlseSxcbiAgICAgIG1hcmdpblRvcCxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHsgbWFyZ2luVG9wOiBkZWZhdWx0TWFyZ2luVG9wLCAuLi50ZXh0U3R5bGUgfSA9IHRoZW1lLmdldFRleHRTdHlsZShcbiAgICAgIHNpemVcbiAgICApXG5cbiAgICBjb25zdCBmaW5hbE1hcmdpblRvcCA9XG4gICAgICBtYXJnaW5Ub3AgPT09ICdkZWZhdWx0JyA/IGRlZmF1bHRNYXJnaW5Ub3AgOiBtYXJnaW5Ub3BcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIGlzPVwic3BhblwiXG4gICAgICAgIGNvbG9yPXt0aGVtZS5nZXRUZXh0Q29sb3IoY29sb3IpfVxuICAgICAgICBmb250RmFtaWx5PXt0aGVtZS5nZXRGb250RmFtaWx5KGZvbnRGYW1pbHkpfVxuICAgICAgICBtYXJnaW5Ub3A9e2ZpbmFsTWFyZ2luVG9wfVxuICAgICAgICB7Li4udGV4dFN0eWxlfVxuICAgICAgICBjbGFzc05hbWU9e2N4KGNsYXNzTmFtZSwgY3NzID8gZ2xhbW9yQ3NzKGNzcykudG9TdHJpbmcoKSA6IHVuZGVmaW5lZCl9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShUZXh0KVxuIl19