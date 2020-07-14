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
import cx from 'classnames';
import { withTheme } from '../../theme';
import Text from './Text';

var Link = /*#__PURE__*/function (_PureComponent) {
  _inherits(Link, _PureComponent);

  var _super = _createSuper(Link);

  function Link() {
    _classCallCheck(this, Link);

    return _super.apply(this, arguments);
  }

  _createClass(Link, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          color = _this$props.color,
          props = _objectWithoutProperties(_this$props, ["theme", "className", "color"]);

      var themedClassName = theme.getLinkClassName(color);
      return React.createElement(Text, _extends({
        is: "a",
        className: cx(className, themedClassName),
        textDecoration: "underline",
        color: null
      }, props));
    }
  }]);

  return Link;
}(PureComponent);

Link.displayName = "Link";

_defineProperty(Link, "propTypes", _objectSpread({}, Text.propTypes, {
  /**
   * This attribute names a relationship of the linked document to the current document.
   * Common use case is: rel="noopener noreferrer".
   */
  rel: PropTypes.string,

  /**
   * Specifies the URL of the linked resource. A URL might be absolute or relative.
   */
  href: PropTypes.string,

  /**
   * Target atrribute, common use case is target="_blank."
   */
  target: PropTypes.string,

  /**
   * The color (and styling) of the Link. Can be default, blue, green or neutral.
   */
  color: PropTypes.string.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired,

  /**
   * Class name passed to the link.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
}));

_defineProperty(Link, "defaultProps", {
  color: 'default'
});

export default withTheme(Link);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9MaW5rLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsImN4Iiwid2l0aFRoZW1lIiwiVGV4dCIsIkxpbmsiLCJwcm9wcyIsInRoZW1lIiwiY2xhc3NOYW1lIiwiY29sb3IiLCJ0aGVtZWRDbGFzc05hbWUiLCJnZXRMaW5rQ2xhc3NOYW1lIiwicHJvcFR5cGVzIiwicmVsIiwic3RyaW5nIiwiaHJlZiIsInRhcmdldCIsImlzUmVxdWlyZWQiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsRUFBUCxNQUFlLFlBQWY7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGFBQTFCO0FBQ0EsT0FBT0MsSUFBUCxNQUFpQixRQUFqQjs7SUFFTUMsSTs7Ozs7Ozs7Ozs7Ozs2QkF5Q0s7QUFBQSx3QkFDdUMsS0FBS0MsS0FENUM7QUFBQSxVQUNDQyxLQURELGVBQ0NBLEtBREQ7QUFBQSxVQUNRQyxTQURSLGVBQ1FBLFNBRFI7QUFBQSxVQUNtQkMsS0FEbkIsZUFDbUJBLEtBRG5CO0FBQUEsVUFDNkJILEtBRDdCOztBQUdQLFVBQU1JLGVBQWUsR0FBR0gsS0FBSyxDQUFDSSxnQkFBTixDQUF1QkYsS0FBdkIsQ0FBeEI7QUFFQSxhQUNFLG9CQUFDLElBQUQ7QUFDRSxRQUFBLEVBQUUsRUFBQyxHQURMO0FBRUUsUUFBQSxTQUFTLEVBQUVQLEVBQUUsQ0FBQ00sU0FBRCxFQUFZRSxlQUFaLENBRmY7QUFHRSxRQUFBLGNBQWMsRUFBQyxXQUhqQjtBQUlFLFFBQUEsS0FBSyxFQUFFO0FBSlQsU0FLTUosS0FMTixFQURGO0FBU0Q7Ozs7RUF2RGdCTixhOztBQUFiSyxJOztnQkFBQUEsSSxpQ0FFQ0QsSUFBSSxDQUFDUSxTO0FBRVI7Ozs7QUFJQUMsRUFBQUEsR0FBRyxFQUFFWixTQUFTLENBQUNhLE07O0FBRWY7OztBQUdBQyxFQUFBQSxJQUFJLEVBQUVkLFNBQVMsQ0FBQ2EsTTs7QUFFaEI7OztBQUdBRSxFQUFBQSxNQUFNLEVBQUVmLFNBQVMsQ0FBQ2EsTTs7QUFFbEI7OztBQUdBTCxFQUFBQSxLQUFLLEVBQUVSLFNBQVMsQ0FBQ2EsTUFBVixDQUFpQkcsVTs7QUFFeEI7OztBQUdBVixFQUFBQSxLQUFLLEVBQUVOLFNBQVMsQ0FBQ2lCLE1BQVYsQ0FBaUJELFU7O0FBRXhCOzs7O0FBSUFULEVBQUFBLFNBQVMsRUFBRVAsU0FBUyxDQUFDYTs7O2dCQWxDbkJULEksa0JBcUNrQjtBQUNwQkksRUFBQUEsS0FBSyxFQUFFO0FBRGEsQzs7QUFxQnhCLGVBQWVOLFNBQVMsQ0FBQ0UsSUFBRCxDQUF4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0J1xuXG5jbGFzcyBMaW5rIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLi4uVGV4dC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGF0dHJpYnV0ZSBuYW1lcyBhIHJlbGF0aW9uc2hpcCBvZiB0aGUgbGlua2VkIGRvY3VtZW50IHRvIHRoZSBjdXJyZW50IGRvY3VtZW50LlxuICAgICAqIENvbW1vbiB1c2UgY2FzZSBpczogcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiLlxuICAgICAqL1xuICAgIHJlbDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyB0aGUgVVJMIG9mIHRoZSBsaW5rZWQgcmVzb3VyY2UuIEEgVVJMIG1pZ2h0IGJlIGFic29sdXRlIG9yIHJlbGF0aXZlLlxuICAgICAqL1xuICAgIGhyZWY6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUYXJnZXQgYXRycmlidXRlLCBjb21tb24gdXNlIGNhc2UgaXMgdGFyZ2V0PVwiX2JsYW5rLlwiXG4gICAgICovXG4gICAgdGFyZ2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbG9yIChhbmQgc3R5bGluZykgb2YgdGhlIExpbmsuIENhbiBiZSBkZWZhdWx0LCBibHVlLCBncmVlbiBvciBuZXV0cmFsLlxuICAgICAqL1xuICAgIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBDbGFzcyBuYW1lIHBhc3NlZCB0byB0aGUgbGluay5cbiAgICAgKiBPbmx5IHVzZSBpZiB5b3Uga25vdyB3aGF0IHlvdSBhcmUgZG9pbmcuXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbG9yOiAnZGVmYXVsdCdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRoZW1lLCBjbGFzc05hbWUsIGNvbG9yLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgdGhlbWVkQ2xhc3NOYW1lID0gdGhlbWUuZ2V0TGlua0NsYXNzTmFtZShjb2xvcilcblxuICAgIHJldHVybiAoXG4gICAgICA8VGV4dFxuICAgICAgICBpcz1cImFcIlxuICAgICAgICBjbGFzc05hbWU9e2N4KGNsYXNzTmFtZSwgdGhlbWVkQ2xhc3NOYW1lKX1cbiAgICAgICAgdGV4dERlY29yYXRpb249XCJ1bmRlcmxpbmVcIlxuICAgICAgICBjb2xvcj17bnVsbH1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKExpbmspXG4iXX0=