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
import TableCell from './TableCell';
var ellipsis = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
};

var TextTableCell = /*#__PURE__*/function (_PureComponent) {
  _inherits(TextTableCell, _PureComponent);

  var _super = _createSuper(TextTableCell);

  function TextTableCell() {
    _classCallCheck(this, TextTableCell);

    return _super.apply(this, arguments);
  }

  _createClass(TextTableCell, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          textProps = _this$props.textProps,
          isNumber = _this$props.isNumber,
          placeholder = _this$props.placeholder,
          props = _objectWithoutProperties(_this$props, ["children", "textProps", "isNumber", "placeholder"]);

      return React.createElement(TableCell, props, React.createElement(Text, _extends({
        size: 300,
        flex: "1"
      }, ellipsis, isNumber ? {
        fontFamily: 'mono'
      } : {}, textProps), children));
    }
  }]);

  return TextTableCell;
}(PureComponent);

TextTableCell.displayName = "TextTableCell";

_defineProperty(TextTableCell, "propTypes", _objectSpread({}, TableCell.propTypes, {
  /**
   * Adds fontFamily: mono.
   */
  isNumber: PropTypes.bool.isRequired,

  /**
   * Pass additional props to the Text component.
   */
  textProps: PropTypes.object
}));

_defineProperty(TextTableCell, "defaultProps", {
  isNumber: false
});

export { TextTableCell as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGV4dFRhYmxlQ2VsbC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJUZXh0IiwiVGFibGVDZWxsIiwiZWxsaXBzaXMiLCJvdmVyZmxvdyIsInRleHRPdmVyZmxvdyIsIndoaXRlU3BhY2UiLCJUZXh0VGFibGVDZWxsIiwicHJvcHMiLCJjaGlsZHJlbiIsInRleHRQcm9wcyIsImlzTnVtYmVyIiwicGxhY2Vob2xkZXIiLCJmb250RmFtaWx5IiwicHJvcFR5cGVzIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixrQkFBckI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGFBQXRCO0FBRUEsSUFBTUMsUUFBUSxHQUFHO0FBQ2ZDLEVBQUFBLFFBQVEsRUFBRSxRQURLO0FBRWZDLEVBQUFBLFlBQVksRUFBRSxVQUZDO0FBR2ZDLEVBQUFBLFVBQVUsRUFBRTtBQUhHLENBQWpCOztJQU1xQkMsYTs7Ozs7Ozs7Ozs7Ozs2QkFzQlY7QUFBQSx3QkFDMEQsS0FBS0MsS0FEL0Q7QUFBQSxVQUNDQyxRQURELGVBQ0NBLFFBREQ7QUFBQSxVQUNXQyxTQURYLGVBQ1dBLFNBRFg7QUFBQSxVQUNzQkMsUUFEdEIsZUFDc0JBLFFBRHRCO0FBQUEsVUFDZ0NDLFdBRGhDLGVBQ2dDQSxXQURoQztBQUFBLFVBQ2dESixLQURoRDs7QUFHUCxhQUNFLG9CQUFDLFNBQUQsRUFBZUEsS0FBZixFQUNFLG9CQUFDLElBQUQ7QUFDRSxRQUFBLElBQUksRUFBRSxHQURSO0FBRUUsUUFBQSxJQUFJLEVBQUM7QUFGUCxTQUdNTCxRQUhOLEVBSU9RLFFBQVEsR0FBRztBQUFFRSxRQUFBQSxVQUFVLEVBQUU7QUFBZCxPQUFILEdBQTRCLEVBSjNDLEVBS01ILFNBTE4sR0FPR0QsUUFQSCxDQURGLENBREY7QUFhRDs7OztFQXRDd0NWLGE7O0FBQXRCUSxhOztnQkFBQUEsYSxpQ0FLZEwsU0FBUyxDQUFDWSxTO0FBRWI7OztBQUdBSCxFQUFBQSxRQUFRLEVBQUVYLFNBQVMsQ0FBQ2UsSUFBVixDQUFlQyxVOztBQUV6Qjs7O0FBR0FOLEVBQUFBLFNBQVMsRUFBRVYsU0FBUyxDQUFDaUI7OztnQkFmSlYsYSxrQkFrQkc7QUFDcEJJLEVBQUFBLFFBQVEsRUFBRTtBQURVLEM7O1NBbEJISixhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICcuL1RhYmxlQ2VsbCdcblxuY29uc3QgZWxsaXBzaXMgPSB7XG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0VGFibGVDZWxsIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIFRhYmxlQ2VsbCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uVGFibGVDZWxsLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIEFkZHMgZm9udEZhbWlseTogbW9uby5cbiAgICAgKi9cbiAgICBpc051bWJlcjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFBhc3MgYWRkaXRpb25hbCBwcm9wcyB0byB0aGUgVGV4dCBjb21wb25lbnQuXG4gICAgICovXG4gICAgdGV4dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGlzTnVtYmVyOiBmYWxzZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHRleHRQcm9wcywgaXNOdW1iZXIsIHBsYWNlaG9sZGVyLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWJsZUNlbGwgey4uLnByb3BzfT5cbiAgICAgICAgPFRleHRcbiAgICAgICAgICBzaXplPXszMDB9XG4gICAgICAgICAgZmxleD1cIjFcIlxuICAgICAgICAgIHsuLi5lbGxpcHNpc31cbiAgICAgICAgICB7Li4uKGlzTnVtYmVyID8geyBmb250RmFtaWx5OiAnbW9ubycgfSA6IHt9KX1cbiAgICAgICAgICB7Li4udGV4dFByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L1RhYmxlQ2VsbD5cbiAgICApXG4gIH1cbn1cbiJdfQ==