"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../constants");

var _StackingContext = _interopRequireDefault(require("./StackingContext"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Stack = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Stack, _PureComponent);

  var _super = _createSuper(Stack);

  function Stack() {
    (0, _classCallCheck2["default"])(this, Stack);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Stack, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          value = _this$props.value;
      return _react["default"].createElement(_StackingContext["default"].Consumer, null, function (previousValue) {
        var currentValue = Math.max(value, previousValue);
        var nextValue = currentValue + 1;
        return _react["default"].createElement(_StackingContext["default"].Provider, {
          value: nextValue
        }, children(currentValue));
      });
    }
  }]);
  return Stack;
}(_react.PureComponent);

exports["default"] = Stack;
Stack.displayName = "Stack";
(0, _defineProperty2["default"])(Stack, "propTypes", {
  /**
   * Function that takes the current z-index and returns a React Node.
   * (zIndex) => ReactNode.
   */
  children: _propTypes["default"].func.isRequired,

  /**
   * Set the value of the stack. This will increment for children.
   */
  value: _propTypes["default"].number
});
(0, _defineProperty2["default"])(Stack, "defaultProps", {
  value: _constants.StackingOrder.STACKING_CONTEXT
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGFjay9zcmMvU3RhY2suanMiXSwibmFtZXMiOlsiU3RhY2siLCJwcm9wcyIsImNoaWxkcmVuIiwidmFsdWUiLCJwcmV2aW91c1ZhbHVlIiwiY3VycmVudFZhbHVlIiwiTWF0aCIsIm1heCIsIm5leHRWYWx1ZSIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIm51bWJlciIsIlN0YWNraW5nT3JkZXIiLCJTVEFDS0lOR19DT05URVhUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs2QkFrQlY7QUFBQSx3QkFDcUIsS0FBS0MsS0FEMUI7QUFBQSxVQUNDQyxRQURELGVBQ0NBLFFBREQ7QUFBQSxVQUNXQyxLQURYLGVBQ1dBLEtBRFg7QUFFUCxhQUNFLGdDQUFDLDJCQUFELENBQWlCLFFBQWpCLFFBQ0csVUFBQUMsYUFBYSxFQUFJO0FBQ2hCLFlBQU1DLFlBQVksR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVNKLEtBQVQsRUFBZ0JDLGFBQWhCLENBQXJCO0FBQ0EsWUFBTUksU0FBUyxHQUFHSCxZQUFZLEdBQUcsQ0FBakM7QUFDQSxlQUNFLGdDQUFDLDJCQUFELENBQWlCLFFBQWpCO0FBQTBCLFVBQUEsS0FBSyxFQUFFRztBQUFqQyxXQUNHTixRQUFRLENBQUNHLFlBQUQsQ0FEWCxDQURGO0FBS0QsT0FUSCxDQURGO0FBYUQ7OztFQWpDZ0NJLG9COzs7QUFBZFQsSztpQ0FBQUEsSyxlQUNBO0FBQ2pCOzs7O0FBSUFFLEVBQUFBLFFBQVEsRUFBRVEsc0JBQVVDLElBQVYsQ0FBZUMsVUFMUjs7QUFPakI7OztBQUdBVCxFQUFBQSxLQUFLLEVBQUVPLHNCQUFVRztBQVZBLEM7aUNBREFiLEssa0JBY0c7QUFDcEJHLEVBQUFBLEtBQUssRUFBRVcseUJBQWNDO0FBREQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBTdGFja2luZ09yZGVyIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IFN0YWNraW5nQ29udGV4dCBmcm9tICcuL1N0YWNraW5nQ29udGV4dCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhY2sgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHRha2VzIHRoZSBjdXJyZW50IHotaW5kZXggYW5kIHJldHVybnMgYSBSZWFjdCBOb2RlLlxuICAgICAqICh6SW5kZXgpID0+IFJlYWN0Tm9kZS5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgdmFsdWUgb2YgdGhlIHN0YWNrLiBUaGlzIHdpbGwgaW5jcmVtZW50IGZvciBjaGlsZHJlbi5cbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLm51bWJlclxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB2YWx1ZTogU3RhY2tpbmdPcmRlci5TVEFDS0lOR19DT05URVhUXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgdmFsdWUgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPFN0YWNraW5nQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAge3ByZXZpb3VzVmFsdWUgPT4ge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IE1hdGgubWF4KHZhbHVlLCBwcmV2aW91c1ZhbHVlKVxuICAgICAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IGN1cnJlbnRWYWx1ZSArIDFcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFN0YWNraW5nQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17bmV4dFZhbHVlfT5cbiAgICAgICAgICAgICAge2NoaWxkcmVuKGN1cnJlbnRWYWx1ZSl9XG4gICAgICAgICAgICA8L1N0YWNraW5nQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgICApXG4gICAgICAgIH19XG4gICAgICA8L1N0YWNraW5nQ29udGV4dC5Db25zdW1lcj5cbiAgICApXG4gIH1cbn1cbiJdfQ==