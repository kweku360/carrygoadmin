"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _TableCell = _interopRequireDefault(require("./TableCell"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TableHeaderCell = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(TableHeaderCell, _PureComponent);

  var _super = _createSuper(TableHeaderCell);

  function TableHeaderCell() {
    (0, _classCallCheck2["default"])(this, TableHeaderCell);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(TableHeaderCell, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_TableCell["default"], (0, _extends2["default"])({
        overflow: "visible",
        borderBottom: null
      }, this.props));
    }
  }]);
  return TableHeaderCell;
}(_react.PureComponent);

exports["default"] = TableHeaderCell;
TableHeaderCell.displayName = "TableHeaderCell";
(0, _defineProperty2["default"])(TableHeaderCell, "propTypes", _objectSpread({}, _TableCell["default"].propTypes));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGVIZWFkZXJDZWxsLmpzIl0sIm5hbWVzIjpbIlRhYmxlSGVhZGVyQ2VsbCIsInByb3BzIiwiUHVyZUNvbXBvbmVudCIsIlRhYmxlQ2VsbCIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxlOzs7Ozs7Ozs7Ozs7NkJBUVY7QUFDUCxhQUFPLGdDQUFDLHFCQUFEO0FBQVcsUUFBQSxRQUFRLEVBQUMsU0FBcEI7QUFBOEIsUUFBQSxZQUFZLEVBQUU7QUFBNUMsU0FBc0QsS0FBS0MsS0FBM0QsRUFBUDtBQUNEOzs7RUFWMENDLG9COzs7QUFBeEJGLGU7aUNBQUFBLGUsaUNBS2RHLHNCQUFVQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnLi9UYWJsZUNlbGwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlSGVhZGVyQ2VsbCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBUYWJsZUNlbGwgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLlRhYmxlQ2VsbC5wcm9wVHlwZXNcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPFRhYmxlQ2VsbCBvdmVyZmxvdz1cInZpc2libGVcIiBib3JkZXJCb3R0b209e251bGx9IHsuLi50aGlzLnByb3BzfSAvPlxuICB9XG59XG4iXX0=