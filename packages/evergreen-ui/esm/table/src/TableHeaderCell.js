import _extends from "@babel/runtime/helpers/esm/extends";
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
import TableCell from './TableCell';

var TableHeaderCell = /*#__PURE__*/function (_PureComponent) {
  _inherits(TableHeaderCell, _PureComponent);

  var _super = _createSuper(TableHeaderCell);

  function TableHeaderCell() {
    _classCallCheck(this, TableHeaderCell);

    return _super.apply(this, arguments);
  }

  _createClass(TableHeaderCell, [{
    key: "render",
    value: function render() {
      return React.createElement(TableCell, _extends({
        overflow: "visible",
        borderBottom: null
      }, this.props));
    }
  }]);

  return TableHeaderCell;
}(PureComponent);

TableHeaderCell.displayName = "TableHeaderCell";

_defineProperty(TableHeaderCell, "propTypes", _objectSpread({}, TableCell.propTypes));

export { TableHeaderCell as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGVIZWFkZXJDZWxsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlRhYmxlQ2VsbCIsIlRhYmxlSGVhZGVyQ2VsbCIsInByb3BzIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGFBQXRCOztJQUVxQkMsZTs7Ozs7Ozs7Ozs7Ozs2QkFRVjtBQUNQLGFBQU8sb0JBQUMsU0FBRDtBQUFXLFFBQUEsUUFBUSxFQUFDLFNBQXBCO0FBQThCLFFBQUEsWUFBWSxFQUFFO0FBQTVDLFNBQXNELEtBQUtDLEtBQTNELEVBQVA7QUFDRDs7OztFQVYwQ0gsYTs7QUFBeEJFLGU7O2dCQUFBQSxlLGlDQUtkRCxTQUFTLENBQUNHLFM7O1NBTElGLGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICcuL1RhYmxlQ2VsbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGVIZWFkZXJDZWxsIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIFRhYmxlQ2VsbCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uVGFibGVDZWxsLnByb3BUeXBlc1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8VGFibGVDZWxsIG92ZXJmbG93PVwidmlzaWJsZVwiIGJvcmRlckJvdHRvbT17bnVsbH0gey4uLnRoaXMucHJvcHN9IC8+XG4gIH1cbn1cbiJdfQ==