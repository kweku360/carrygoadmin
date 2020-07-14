"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * This component is a utility component to manage state in stories and examples.
 */
var Manager = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Manager, _React$Component);

  var _super = _createSuper(Manager);

  function Manager(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Manager);
    _this = _super.call(this, props);
    _this.state = _objectSpread({}, props);
    return _this;
  }

  (0, _createClass2["default"])(Manager, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return this.props.children({
        setState: function setState() {
          _this2.setState.apply(_this2, arguments);
        },
        state: this.state
      });
    }
  }]);
  return Manager;
}(_react["default"].Component);

exports["default"] = Manager;
Manager.displayName = "Manager";
(0, _defineProperty2["default"])(Manager, "propTypes", {
  children: _propTypes["default"].func
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYW5hZ2VyL3NyYy9NYW5hZ2VyLmpzIl0sIm5hbWVzIjpbIk1hbmFnZXIiLCJwcm9wcyIsInN0YXRlIiwiY2hpbGRyZW4iLCJzZXRTdGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQTs7O0lBR3FCQSxPOzs7OztBQUtuQixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxxQkFDS0QsS0FETDtBQUZpQjtBQUtsQjs7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQU8sS0FBS0EsS0FBTCxDQUFXRSxRQUFYLENBQW9CO0FBQ3pCQyxRQUFBQSxRQUFRLEVBQUUsb0JBQWE7QUFDckIsVUFBQSxNQUFJLENBQUNBLFFBQUwsT0FBQSxNQUFJLFlBQUo7QUFDRCxTQUh3QjtBQUl6QkYsUUFBQUEsS0FBSyxFQUFFLEtBQUtBO0FBSmEsT0FBcEIsQ0FBUDtBQU1EOzs7RUFuQmtDRyxrQkFBTUMsUzs7O0FBQXRCTixPO2lDQUFBQSxPLGVBQ0E7QUFDakJHLEVBQUFBLFFBQVEsRUFBRUksc0JBQVVDO0FBREgsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBpcyBhIHV0aWxpdHkgY29tcG9uZW50IHRvIG1hbmFnZSBzdGF0ZSBpbiBzdG9yaWVzIGFuZCBleGFtcGxlcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFuYWdlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAuLi5wcm9wc1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbih7XG4gICAgICBzZXRTdGF0ZTogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSguLi5hcmdzKVxuICAgICAgfSxcbiAgICAgIHN0YXRlOiB0aGlzLnN0YXRlXG4gICAgfSlcbiAgfVxufVxuIl19