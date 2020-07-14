import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StackingOrder } from '../../constants';
import StackingContext from './StackingContext';

var Stack = /*#__PURE__*/function (_PureComponent) {
  _inherits(Stack, _PureComponent);

  var _super = _createSuper(Stack);

  function Stack() {
    _classCallCheck(this, Stack);

    return _super.apply(this, arguments);
  }

  _createClass(Stack, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          value = _this$props.value;
      return React.createElement(StackingContext.Consumer, null, function (previousValue) {
        var currentValue = Math.max(value, previousValue);
        var nextValue = currentValue + 1;
        return React.createElement(StackingContext.Provider, {
          value: nextValue
        }, children(currentValue));
      });
    }
  }]);

  return Stack;
}(PureComponent);

Stack.displayName = "Stack";

_defineProperty(Stack, "propTypes", {
  /**
   * Function that takes the current z-index and returns a React Node.
   * (zIndex) => ReactNode.
   */
  children: PropTypes.func.isRequired,

  /**
   * Set the value of the stack. This will increment for children.
   */
  value: PropTypes.number
});

_defineProperty(Stack, "defaultProps", {
  value: StackingOrder.STACKING_CONTEXT
});

export { Stack as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGFjay9zcmMvU3RhY2suanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiU3RhY2tpbmdPcmRlciIsIlN0YWNraW5nQ29udGV4dCIsIlN0YWNrIiwicHJvcHMiLCJjaGlsZHJlbiIsInZhbHVlIiwicHJldmlvdXNWYWx1ZSIsImN1cnJlbnRWYWx1ZSIsIk1hdGgiLCJtYXgiLCJuZXh0VmFsdWUiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIm51bWJlciIsIlNUQUNLSU5HX0NPTlRFWFQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsYUFBVCxRQUE4QixpQkFBOUI7QUFDQSxPQUFPQyxlQUFQLE1BQTRCLG1CQUE1Qjs7SUFFcUJDLEs7Ozs7Ozs7Ozs7Ozs7NkJBa0JWO0FBQUEsd0JBQ3FCLEtBQUtDLEtBRDFCO0FBQUEsVUFDQ0MsUUFERCxlQUNDQSxRQUREO0FBQUEsVUFDV0MsS0FEWCxlQUNXQSxLQURYO0FBRVAsYUFDRSxvQkFBQyxlQUFELENBQWlCLFFBQWpCLFFBQ0csVUFBQUMsYUFBYSxFQUFJO0FBQ2hCLFlBQU1DLFlBQVksR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVNKLEtBQVQsRUFBZ0JDLGFBQWhCLENBQXJCO0FBQ0EsWUFBTUksU0FBUyxHQUFHSCxZQUFZLEdBQUcsQ0FBakM7QUFDQSxlQUNFLG9CQUFDLGVBQUQsQ0FBaUIsUUFBakI7QUFBMEIsVUFBQSxLQUFLLEVBQUVHO0FBQWpDLFdBQ0dOLFFBQVEsQ0FBQ0csWUFBRCxDQURYLENBREY7QUFLRCxPQVRILENBREY7QUFhRDs7OztFQWpDZ0NULGE7O0FBQWRJLEs7O2dCQUFBQSxLLGVBQ0E7QUFDakI7Ozs7QUFJQUUsRUFBQUEsUUFBUSxFQUFFTCxTQUFTLENBQUNZLElBQVYsQ0FBZUMsVUFMUjs7QUFPakI7OztBQUdBUCxFQUFBQSxLQUFLLEVBQUVOLFNBQVMsQ0FBQ2M7QUFWQSxDOztnQkFEQVgsSyxrQkFjRztBQUNwQkcsRUFBQUEsS0FBSyxFQUFFTCxhQUFhLENBQUNjO0FBREQsQzs7U0FkSFosSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBTdGFja2luZ09yZGVyIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IFN0YWNraW5nQ29udGV4dCBmcm9tICcuL1N0YWNraW5nQ29udGV4dCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhY2sgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHRha2VzIHRoZSBjdXJyZW50IHotaW5kZXggYW5kIHJldHVybnMgYSBSZWFjdCBOb2RlLlxuICAgICAqICh6SW5kZXgpID0+IFJlYWN0Tm9kZS5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgdmFsdWUgb2YgdGhlIHN0YWNrLiBUaGlzIHdpbGwgaW5jcmVtZW50IGZvciBjaGlsZHJlbi5cbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLm51bWJlclxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB2YWx1ZTogU3RhY2tpbmdPcmRlci5TVEFDS0lOR19DT05URVhUXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgdmFsdWUgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPFN0YWNraW5nQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAge3ByZXZpb3VzVmFsdWUgPT4ge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IE1hdGgubWF4KHZhbHVlLCBwcmV2aW91c1ZhbHVlKVxuICAgICAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IGN1cnJlbnRWYWx1ZSArIDFcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFN0YWNraW5nQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17bmV4dFZhbHVlfT5cbiAgICAgICAgICAgICAge2NoaWxkcmVuKGN1cnJlbnRWYWx1ZSl9XG4gICAgICAgICAgICA8L1N0YWNraW5nQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgICApXG4gICAgICAgIH19XG4gICAgICA8L1N0YWNraW5nQ29udGV4dC5Db25zdW1lcj5cbiAgICApXG4gIH1cbn1cbiJdfQ==