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

var Heading = /*#__PURE__*/function (_PureComponent) {
  _inherits(Heading, _PureComponent);

  var _super = _createSuper(Heading);

  function Heading() {
    _classCallCheck(this, Heading);

    return _super.apply(this, arguments);
  }

  _createClass(Heading, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          marginTop = _this$props.marginTop,
          size = _this$props.size,
          props = _objectWithoutProperties(_this$props, ["theme", "marginTop", "size"]);

      var _theme$getHeadingStyl = theme.getHeadingStyle(size),
          defaultMarginTop = _theme$getHeadingStyl.marginTop,
          headingStyle = _objectWithoutProperties(_theme$getHeadingStyl, ["marginTop"]);

      var finalMarginTop = marginTop;

      if (marginTop === 'default') {
        finalMarginTop = defaultMarginTop;
      }

      return React.createElement(Box, _extends({
        is: "h2",
        marginTop: finalMarginTop || 0,
        marginBottom: 0
      }, headingStyle, props));
    }
  }]);

  return Heading;
}(PureComponent);

Heading.displayName = "Heading";

_defineProperty(Heading, "propTypes", _objectSpread({}, Box.propTypes, {
  /**
   * The size of the heading.
   */
  size: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900]).isRequired,

  /**
   * Pass `default` to use the default margin top for that size.
   */
  marginTop: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
}));

_defineProperty(Heading, "defaultProps", {
  size: 500
});

export default withTheme(Heading);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9IZWFkaW5nLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIkJveCIsIndpdGhUaGVtZSIsIkhlYWRpbmciLCJwcm9wcyIsInRoZW1lIiwibWFyZ2luVG9wIiwic2l6ZSIsImdldEhlYWRpbmdTdHlsZSIsImRlZmF1bHRNYXJnaW5Ub3AiLCJoZWFkaW5nU3R5bGUiLCJmaW5hbE1hcmdpblRvcCIsInByb3BUeXBlcyIsIm9uZU9mIiwiaXNSZXF1aXJlZCIsIm9uZU9mVHlwZSIsImJvb2wiLCJudW1iZXIiLCJzdHJpbmciLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixRQUFoQjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsYUFBMUI7O0lBRU1DLE87Ozs7Ozs7Ozs7Ozs7NkJBZ0NLO0FBQUEsd0JBQ3NDLEtBQUtDLEtBRDNDO0FBQUEsVUFDQ0MsS0FERCxlQUNDQSxLQUREO0FBQUEsVUFDUUMsU0FEUixlQUNRQSxTQURSO0FBQUEsVUFDbUJDLElBRG5CLGVBQ21CQSxJQURuQjtBQUFBLFVBQzRCSCxLQUQ1Qjs7QUFBQSxrQ0FLSEMsS0FBSyxDQUFDRyxlQUFOLENBQXNCRCxJQUF0QixDQUxHO0FBQUEsVUFHTUUsZ0JBSE4seUJBR0xILFNBSEs7QUFBQSxVQUlGSSxZQUpFOztBQU9QLFVBQUlDLGNBQWMsR0FBR0wsU0FBckI7O0FBQ0EsVUFBSUEsU0FBUyxLQUFLLFNBQWxCLEVBQTZCO0FBQzNCSyxRQUFBQSxjQUFjLEdBQUdGLGdCQUFqQjtBQUNEOztBQUVELGFBQ0Usb0JBQUMsR0FBRDtBQUNFLFFBQUEsRUFBRSxFQUFDLElBREw7QUFFRSxRQUFBLFNBQVMsRUFBRUUsY0FBYyxJQUFJLENBRi9CO0FBR0UsUUFBQSxZQUFZLEVBQUU7QUFIaEIsU0FJTUQsWUFKTixFQUtNTixLQUxOLEVBREY7QUFTRDs7OztFQXJEbUJMLGE7O0FBQWhCSSxPOztnQkFBQUEsTyxpQ0FLQ0YsR0FBRyxDQUFDVyxTO0FBRVA7OztBQUdBTCxFQUFBQSxJQUFJLEVBQUVQLFNBQVMsQ0FBQ2EsS0FBVixDQUFnQixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixHQUFyQixFQUEwQixHQUExQixFQUErQixHQUEvQixFQUFvQyxHQUFwQyxFQUF5QyxHQUF6QyxDQUFoQixFQUNIQyxVOztBQUVIOzs7QUFHQVIsRUFBQUEsU0FBUyxFQUFFTixTQUFTLENBQUNlLFNBQVYsQ0FBb0IsQ0FDN0JmLFNBQVMsQ0FBQ2dCLElBRG1CLEVBRTdCaEIsU0FBUyxDQUFDaUIsTUFGbUIsRUFHN0JqQixTQUFTLENBQUNrQixNQUhtQixDQUFwQixDOztBQU1YOzs7QUFHQWIsRUFBQUEsS0FBSyxFQUFFTCxTQUFTLENBQUNtQixNQUFWLENBQWlCTDs7O2dCQXpCdEJYLE8sa0JBNEJrQjtBQUNwQkksRUFBQUEsSUFBSSxFQUFFO0FBRGMsQzs7QUE0QnhCLGVBQWVMLFNBQVMsQ0FBQ0MsT0FBRCxDQUF4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jbGFzcyBIZWFkaW5nIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogSGVhZGluZyBjb21wb3NlcyBCb3ggYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uQm94LnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBzaXplIG9mIHRoZSBoZWFkaW5nLlxuICAgICAqL1xuICAgIHNpemU6IFByb3BUeXBlcy5vbmVPZihbMTAwLCAyMDAsIDMwMCwgNDAwLCA1MDAsIDYwMCwgNzAwLCA4MDAsIDkwMF0pXG4gICAgICAuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFBhc3MgYGRlZmF1bHRgIHRvIHVzZSB0aGUgZGVmYXVsdCBtYXJnaW4gdG9wIGZvciB0aGF0IHNpemUuXG4gICAgICovXG4gICAgbWFyZ2luVG9wOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5zdHJpbmdcbiAgICBdKSxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzaXplOiA1MDBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRoZW1lLCBtYXJnaW5Ub3AsIHNpemUsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qge1xuICAgICAgbWFyZ2luVG9wOiBkZWZhdWx0TWFyZ2luVG9wLFxuICAgICAgLi4uaGVhZGluZ1N0eWxlXG4gICAgfSA9IHRoZW1lLmdldEhlYWRpbmdTdHlsZShzaXplKVxuXG4gICAgbGV0IGZpbmFsTWFyZ2luVG9wID0gbWFyZ2luVG9wXG4gICAgaWYgKG1hcmdpblRvcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICBmaW5hbE1hcmdpblRvcCA9IGRlZmF1bHRNYXJnaW5Ub3BcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBpcz1cImgyXCJcbiAgICAgICAgbWFyZ2luVG9wPXtmaW5hbE1hcmdpblRvcCB8fCAwfVxuICAgICAgICBtYXJnaW5Cb3R0b209ezB9XG4gICAgICAgIHsuLi5oZWFkaW5nU3R5bGV9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShIZWFkaW5nKVxuIl19