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
import { Text } from '../../typography';
import TableHeaderCell from './TableHeaderCell';

var TextTableHeaderCell = /*#__PURE__*/function (_PureComponent) {
  _inherits(TextTableHeaderCell, _PureComponent);

  var _super = _createSuper(TextTableHeaderCell);

  function TextTableHeaderCell() {
    _classCallCheck(this, TextTableHeaderCell);

    return _super.apply(this, arguments);
  }

  _createClass(TextTableHeaderCell, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          textProps = _this$props.textProps,
          isSortable = _this$props.isSortable,
          sortOrder = _this$props.sortOrder,
          props = _objectWithoutProperties(_this$props, ["children", "textProps", "isSortable", "sortOrder"]);

      return React.createElement(TableHeaderCell, props, React.createElement(Text, _extends({
        fontWeight: 500,
        size: 300,
        flex: "1"
      }, textProps), children, ' '));
    }
  }]);

  return TextTableHeaderCell;
}(PureComponent);

TextTableHeaderCell.displayName = "TextTableHeaderCell";

_defineProperty(TextTableHeaderCell, "propTypes", _objectSpread({}, TableHeaderCell.propTypes, {
  /**
   * Pass additional props to the Text component.
   */
  textProps: PropTypes.objectOf(PropTypes.string)
}));

export { TextTableHeaderCell as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGV4dFRhYmxlSGVhZGVyQ2VsbC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJUZXh0IiwiVGFibGVIZWFkZXJDZWxsIiwiVGV4dFRhYmxlSGVhZGVyQ2VsbCIsInByb3BzIiwiY2hpbGRyZW4iLCJ0ZXh0UHJvcHMiLCJpc1NvcnRhYmxlIiwic29ydE9yZGVyIiwicHJvcFR5cGVzIiwib2JqZWN0T2YiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixrQkFBckI7QUFDQSxPQUFPQyxlQUFQLE1BQTRCLG1CQUE1Qjs7SUFFcUJDLG1COzs7Ozs7Ozs7Ozs7OzZCQWFWO0FBQUEsd0JBQzBELEtBQUtDLEtBRC9EO0FBQUEsVUFDQ0MsUUFERCxlQUNDQSxRQUREO0FBQUEsVUFDV0MsU0FEWCxlQUNXQSxTQURYO0FBQUEsVUFDc0JDLFVBRHRCLGVBQ3NCQSxVQUR0QjtBQUFBLFVBQ2tDQyxTQURsQyxlQUNrQ0EsU0FEbEM7QUFBQSxVQUNnREosS0FEaEQ7O0FBRVAsYUFDRSxvQkFBQyxlQUFELEVBQXFCQSxLQUFyQixFQUNFLG9CQUFDLElBQUQ7QUFBTSxRQUFBLFVBQVUsRUFBRSxHQUFsQjtBQUF1QixRQUFBLElBQUksRUFBRSxHQUE3QjtBQUFrQyxRQUFBLElBQUksRUFBQztBQUF2QyxTQUErQ0UsU0FBL0MsR0FDR0QsUUFESCxFQUNhLEdBRGIsQ0FERixDQURGO0FBT0Q7Ozs7RUF0QjhDTixhOztBQUE1QkksbUI7O2dCQUFBQSxtQixpQ0FLZEQsZUFBZSxDQUFDTyxTO0FBRW5COzs7QUFHQUgsRUFBQUEsU0FBUyxFQUFFTixTQUFTLENBQUNVLFFBQVYsQ0FBbUJWLFNBQVMsQ0FBQ1csTUFBN0I7OztTQVZNUixtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCBUYWJsZUhlYWRlckNlbGwgZnJvbSAnLi9UYWJsZUhlYWRlckNlbGwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRUYWJsZUhlYWRlckNlbGwgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgVGFibGVIZWFkZXJDZWxsIGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5UYWJsZUhlYWRlckNlbGwucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogUGFzcyBhZGRpdGlvbmFsIHByb3BzIHRvIHRoZSBUZXh0IGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICB0ZXh0UHJvcHM6IFByb3BUeXBlcy5vYmplY3RPZihQcm9wVHlwZXMuc3RyaW5nKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHRleHRQcm9wcywgaXNTb3J0YWJsZSwgc29ydE9yZGVyLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8VGFibGVIZWFkZXJDZWxsIHsuLi5wcm9wc30+XG4gICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9ezUwMH0gc2l6ZT17MzAwfSBmbGV4PVwiMVwiIHsuLi50ZXh0UHJvcHN9PlxuICAgICAgICAgIHtjaGlsZHJlbn17JyAnfVxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L1RhYmxlSGVhZGVyQ2VsbD5cbiAgICApXG4gIH1cbn1cbiJdfQ==