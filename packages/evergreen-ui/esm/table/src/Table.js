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
import { Pane } from '../../layers';
import TableBody from './TableBody';
import TableVirtualBody from './TableVirtualBody';
import TableCell from './TableCell';
import TableHead from './TableHead';
import TableHeaderCell from './TableHeaderCell';
import TableRow from './TableRow';
import TextTableCell from './TextTableCell';
import TextTableHeaderCell from './TextTableHeaderCell';
import SearchTableHeaderCell from './SearchTableHeaderCell';
import EditableCell from './EditableCell';
import SelectMenuCell from './SelectMenuCell';

var Table = /*#__PURE__*/function (_PureComponent) {
  _inherits(Table, _PureComponent);

  var _super = _createSuper(Table);

  function Table() {
    _classCallCheck(this, Table);

    return _super.apply(this, arguments);
  }

  _createClass(Table, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["children"]);

      return React.createElement(Pane, props, children);
    }
  }]);

  return Table;
}(PureComponent);

Table.displayName = "Table";

_defineProperty(Table, "Body", TableBody);

_defineProperty(Table, "VirtualBody", TableVirtualBody);

_defineProperty(Table, "Head", TableHead);

_defineProperty(Table, "HeaderCell", TableHeaderCell);

_defineProperty(Table, "TextHeaderCell", TextTableHeaderCell);

_defineProperty(Table, "SearchHeaderCell", SearchTableHeaderCell);

_defineProperty(Table, "Row", TableRow);

_defineProperty(Table, "Cell", TableCell);

_defineProperty(Table, "TextCell", TextTableCell);

_defineProperty(Table, "EditableCell", EditableCell);

_defineProperty(Table, "SelectMenuCell", SelectMenuCell);

_defineProperty(Table, "propTypes", _objectSpread({}, Pane.propTypes));

export { Table as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUGFuZSIsIlRhYmxlQm9keSIsIlRhYmxlVmlydHVhbEJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUhlYWQiLCJUYWJsZUhlYWRlckNlbGwiLCJUYWJsZVJvdyIsIlRleHRUYWJsZUNlbGwiLCJUZXh0VGFibGVIZWFkZXJDZWxsIiwiU2VhcmNoVGFibGVIZWFkZXJDZWxsIiwiRWRpdGFibGVDZWxsIiwiU2VsZWN0TWVudUNlbGwiLCJUYWJsZSIsInByb3BzIiwiY2hpbGRyZW4iLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLFNBQVNDLElBQVQsUUFBcUIsY0FBckI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGFBQXRCO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIsb0JBQTdCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixhQUF0QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsYUFBdEI7QUFDQSxPQUFPQyxlQUFQLE1BQTRCLG1CQUE1QjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsWUFBckI7QUFDQSxPQUFPQyxhQUFQLE1BQTBCLGlCQUExQjtBQUNBLE9BQU9DLG1CQUFQLE1BQWdDLHVCQUFoQztBQUNBLE9BQU9DLHFCQUFQLE1BQWtDLHlCQUFsQztBQUNBLE9BQU9DLFlBQVAsTUFBeUIsZ0JBQXpCO0FBQ0EsT0FBT0MsY0FBUCxNQUEyQixrQkFBM0I7O0lBRXFCQyxLOzs7Ozs7Ozs7Ozs7OzZCQThCVjtBQUFBLHdCQUN3QixLQUFLQyxLQUQ3QjtBQUFBLFVBQ0NDLFFBREQsZUFDQ0EsUUFERDtBQUFBLFVBQ2NELEtBRGQ7O0FBRVAsYUFBTyxvQkFBQyxJQUFELEVBQVVBLEtBQVYsRUFBa0JDLFFBQWxCLENBQVA7QUFDRDs7OztFQWpDZ0NmLGE7O0FBQWRhLEs7O2dCQUFBQSxLLFVBQ0xYLFM7O2dCQURLVyxLLGlCQUdFVixnQjs7Z0JBSEZVLEssVUFLTFIsUzs7Z0JBTEtRLEssZ0JBT0NQLGU7O2dCQVBETyxLLG9CQVNLSixtQjs7Z0JBVExJLEssc0JBV09ILHFCOztnQkFYUEcsSyxTQWFOTixROztnQkFiTU0sSyxVQWVMVCxTOztnQkFmS1MsSyxjQWlCREwsYTs7Z0JBakJDSyxLLGtCQW1CR0YsWTs7Z0JBbkJIRSxLLG9CQXFCS0QsYzs7Z0JBckJMQyxLLGlDQTJCZFosSUFBSSxDQUFDZSxTOztTQTNCU0gsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICcuL1RhYmxlQm9keSdcbmltcG9ydCBUYWJsZVZpcnR1YWxCb2R5IGZyb20gJy4vVGFibGVWaXJ0dWFsQm9keSdcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnLi9UYWJsZUNlbGwnXG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJy4vVGFibGVIZWFkJ1xuaW1wb3J0IFRhYmxlSGVhZGVyQ2VsbCBmcm9tICcuL1RhYmxlSGVhZGVyQ2VsbCdcbmltcG9ydCBUYWJsZVJvdyBmcm9tICcuL1RhYmxlUm93J1xuaW1wb3J0IFRleHRUYWJsZUNlbGwgZnJvbSAnLi9UZXh0VGFibGVDZWxsJ1xuaW1wb3J0IFRleHRUYWJsZUhlYWRlckNlbGwgZnJvbSAnLi9UZXh0VGFibGVIZWFkZXJDZWxsJ1xuaW1wb3J0IFNlYXJjaFRhYmxlSGVhZGVyQ2VsbCBmcm9tICcuL1NlYXJjaFRhYmxlSGVhZGVyQ2VsbCdcbmltcG9ydCBFZGl0YWJsZUNlbGwgZnJvbSAnLi9FZGl0YWJsZUNlbGwnXG5pbXBvcnQgU2VsZWN0TWVudUNlbGwgZnJvbSAnLi9TZWxlY3RNZW51Q2VsbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIEJvZHkgPSBUYWJsZUJvZHlcblxuICBzdGF0aWMgVmlydHVhbEJvZHkgPSBUYWJsZVZpcnR1YWxCb2R5XG5cbiAgc3RhdGljIEhlYWQgPSBUYWJsZUhlYWRcblxuICBzdGF0aWMgSGVhZGVyQ2VsbCA9IFRhYmxlSGVhZGVyQ2VsbFxuXG4gIHN0YXRpYyBUZXh0SGVhZGVyQ2VsbCA9IFRleHRUYWJsZUhlYWRlckNlbGxcblxuICBzdGF0aWMgU2VhcmNoSGVhZGVyQ2VsbCA9IFNlYXJjaFRhYmxlSGVhZGVyQ2VsbFxuXG4gIHN0YXRpYyBSb3cgPSBUYWJsZVJvd1xuXG4gIHN0YXRpYyBDZWxsID0gVGFibGVDZWxsXG5cbiAgc3RhdGljIFRleHRDZWxsID0gVGV4dFRhYmxlQ2VsbFxuXG4gIHN0YXRpYyBFZGl0YWJsZUNlbGwgPSBFZGl0YWJsZUNlbGxcblxuICBzdGF0aWMgU2VsZWN0TWVudUNlbGwgPSBTZWxlY3RNZW51Q2VsbFxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIFBhbmUgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLlBhbmUucHJvcFR5cGVzXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gPFBhbmUgey4uLnByb3BzfT57Y2hpbGRyZW59PC9QYW5lPlxuICB9XG59XG4iXX0=