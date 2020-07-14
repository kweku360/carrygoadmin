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
import Box from 'ui-box';
import { withTheme } from '../../theme';

var Paragraph = /*#__PURE__*/function (_PureComponent) {
  _inherits(Paragraph, _PureComponent);

  var _super = _createSuper(Paragraph);

  function Paragraph() {
    _classCallCheck(this, Paragraph);

    return _super.apply(this, arguments);
  }

  _createClass(Paragraph, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          size = _this$props.size,
          color = _this$props.color,
          fontFamily = _this$props.fontFamily,
          marginTop = _this$props.marginTop,
          props = _objectWithoutProperties(_this$props, ["theme", "size", "color", "fontFamily", "marginTop"]);

      var _theme$getParagraphSt = theme.getParagraphStyle(size),
          defaultMarginTop = _theme$getParagraphSt.marginTop,
          textStyle = _objectWithoutProperties(_theme$getParagraphSt, ["marginTop"]);

      var finalMarginTop = marginTop === 'default' ? defaultMarginTop : marginTop;
      return React.createElement(Box, _extends({
        is: "p",
        color: theme.getTextColor(color),
        fontFamily: theme.getFontFamily(fontFamily),
        marginTop: finalMarginTop || 0,
        marginBottom: 0
      }, textStyle, props));
    }
  }]);

  return Paragraph;
}(PureComponent);

Paragraph.displayName = "Paragraph";

_defineProperty(Paragraph, "propTypes", _objectSpread({}, Box.propTypes, {
  /**
   * Size of the text style.
   * Can be: 300, 400, 500.
   */
  size: PropTypes.oneOf([300, 400, 500]).isRequired,

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

_defineProperty(Paragraph, "defaultProps", {
  size: 400,
  color: 'default',
  fontFamily: 'ui'
});

export default withTheme(Paragraph);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9QYXJhZ3JhcGguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiQm94Iiwid2l0aFRoZW1lIiwiUGFyYWdyYXBoIiwicHJvcHMiLCJ0aGVtZSIsInNpemUiLCJjb2xvciIsImZvbnRGYW1pbHkiLCJtYXJnaW5Ub3AiLCJnZXRQYXJhZ3JhcGhTdHlsZSIsImRlZmF1bHRNYXJnaW5Ub3AiLCJ0ZXh0U3R5bGUiLCJmaW5hbE1hcmdpblRvcCIsImdldFRleHRDb2xvciIsImdldEZvbnRGYW1pbHkiLCJwcm9wVHlwZXMiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixRQUFoQjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsYUFBMUI7O0lBRU1DLFM7Ozs7Ozs7Ozs7Ozs7NkJBK0JLO0FBQUEsd0JBQ3lELEtBQUtDLEtBRDlEO0FBQUEsVUFDQ0MsS0FERCxlQUNDQSxLQUREO0FBQUEsVUFDUUMsSUFEUixlQUNRQSxJQURSO0FBQUEsVUFDY0MsS0FEZCxlQUNjQSxLQURkO0FBQUEsVUFDcUJDLFVBRHJCLGVBQ3FCQSxVQURyQjtBQUFBLFVBQ2lDQyxTQURqQyxlQUNpQ0EsU0FEakM7QUFBQSxVQUMrQ0wsS0FEL0M7O0FBQUEsa0NBTUhDLEtBQUssQ0FBQ0ssaUJBQU4sQ0FBd0JKLElBQXhCLENBTkc7QUFBQSxVQUlNSyxnQkFKTix5QkFJTEYsU0FKSztBQUFBLFVBS0ZHLFNBTEU7O0FBUVAsVUFBTUMsY0FBYyxHQUNsQkosU0FBUyxLQUFLLFNBQWQsR0FBMEJFLGdCQUExQixHQUE2Q0YsU0FEL0M7QUFHQSxhQUNFLG9CQUFDLEdBQUQ7QUFDRSxRQUFBLEVBQUUsRUFBQyxHQURMO0FBRUUsUUFBQSxLQUFLLEVBQUVKLEtBQUssQ0FBQ1MsWUFBTixDQUFtQlAsS0FBbkIsQ0FGVDtBQUdFLFFBQUEsVUFBVSxFQUFFRixLQUFLLENBQUNVLGFBQU4sQ0FBb0JQLFVBQXBCLENBSGQ7QUFJRSxRQUFBLFNBQVMsRUFBRUssY0FBYyxJQUFJLENBSi9CO0FBS0UsUUFBQSxZQUFZLEVBQUU7QUFMaEIsU0FNTUQsU0FOTixFQU9NUixLQVBOLEVBREY7QUFXRDs7OztFQXJEcUJMLGE7O0FBQWxCSSxTOztnQkFBQUEsUyxpQ0FLQ0YsR0FBRyxDQUFDZSxTO0FBRVA7Ozs7QUFJQVYsRUFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNpQixLQUFWLENBQWdCLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBQWhCLEVBQWlDQyxVOztBQUV2Qzs7OztBQUlBVixFQUFBQSxVQUFVLEVBQUVSLFNBQVMsQ0FBQ21CLE1BQVYsQ0FBaUJELFU7O0FBRTdCOzs7QUFHQWIsRUFBQUEsS0FBSyxFQUFFTCxTQUFTLENBQUNvQixNQUFWLENBQWlCRjs7O2dCQXRCdEJmLFMsa0JBeUJrQjtBQUNwQkcsRUFBQUEsSUFBSSxFQUFFLEdBRGM7QUFFcEJDLEVBQUFBLEtBQUssRUFBRSxTQUZhO0FBR3BCQyxFQUFBQSxVQUFVLEVBQUU7QUFIUSxDOztBQStCeEIsZUFBZU4sU0FBUyxDQUFDQyxTQUFELENBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNsYXNzIFBhcmFncmFwaCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBCb3ggY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLkJveC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBTaXplIG9mIHRoZSB0ZXh0IHN0eWxlLlxuICAgICAqIENhbiBiZTogMzAwLCA0MDAsIDUwMC5cbiAgICAgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoWzMwMCwgNDAwLCA1MDBdKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogRm9udCBmYW1pbHkuXG4gICAgICogQ2FuIGJlOiBgdWlgLCBgZGlzcGxheWAgb3IgYG1vbm9gIG9yIGEgY3VzdG9tIGZvbnQgZmFtaWx5LlxuICAgICAqL1xuICAgIGZvbnRGYW1pbHk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzaXplOiA0MDAsXG4gICAgY29sb3I6ICdkZWZhdWx0JyxcbiAgICBmb250RmFtaWx5OiAndWknXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aGVtZSwgc2l6ZSwgY29sb3IsIGZvbnRGYW1pbHksIG1hcmdpblRvcCwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHtcbiAgICAgIG1hcmdpblRvcDogZGVmYXVsdE1hcmdpblRvcCxcbiAgICAgIC4uLnRleHRTdHlsZVxuICAgIH0gPSB0aGVtZS5nZXRQYXJhZ3JhcGhTdHlsZShzaXplKVxuXG4gICAgY29uc3QgZmluYWxNYXJnaW5Ub3AgPVxuICAgICAgbWFyZ2luVG9wID09PSAnZGVmYXVsdCcgPyBkZWZhdWx0TWFyZ2luVG9wIDogbWFyZ2luVG9wXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBpcz1cInBcIlxuICAgICAgICBjb2xvcj17dGhlbWUuZ2V0VGV4dENvbG9yKGNvbG9yKX1cbiAgICAgICAgZm9udEZhbWlseT17dGhlbWUuZ2V0Rm9udEZhbWlseShmb250RmFtaWx5KX1cbiAgICAgICAgbWFyZ2luVG9wPXtmaW5hbE1hcmdpblRvcCB8fCAwfVxuICAgICAgICBtYXJnaW5Cb3R0b209ezB9XG4gICAgICAgIHsuLi50ZXh0U3R5bGV9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShQYXJhZ3JhcGgpXG4iXX0=