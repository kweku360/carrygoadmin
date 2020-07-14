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

import React from 'react';
import PropTypes from 'prop-types';
/**
 * This component is a utility component to manage state in stories and examples.
 */

var Manager = /*#__PURE__*/function (_React$Component) {
  _inherits(Manager, _React$Component);

  var _super = _createSuper(Manager);

  function Manager(props) {
    var _this;

    _classCallCheck(this, Manager);

    _this = _super.call(this, props);
    _this.state = _objectSpread({}, props);
    return _this;
  }

  _createClass(Manager, [{
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
}(React.Component);

Manager.displayName = "Manager";

_defineProperty(Manager, "propTypes", {
  children: PropTypes.func
});

export { Manager as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYW5hZ2VyL3NyYy9NYW5hZ2VyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiTWFuYWdlciIsInByb3BzIiwic3RhdGUiLCJjaGlsZHJlbiIsInNldFN0YXRlIiwiQ29tcG9uZW50IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFFQTs7OztJQUdxQkMsTzs7Ozs7QUFLbkIsbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLHFCQUNLRCxLQURMO0FBRmlCO0FBS2xCOzs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFBTyxLQUFLQSxLQUFMLENBQVdFLFFBQVgsQ0FBb0I7QUFDekJDLFFBQUFBLFFBQVEsRUFBRSxvQkFBYTtBQUNyQixVQUFBLE1BQUksQ0FBQ0EsUUFBTCxPQUFBLE1BQUksWUFBSjtBQUNELFNBSHdCO0FBSXpCRixRQUFBQSxLQUFLLEVBQUUsS0FBS0E7QUFKYSxPQUFwQixDQUFQO0FBTUQ7Ozs7RUFuQmtDSixLQUFLLENBQUNPLFM7O0FBQXRCTCxPOztnQkFBQUEsTyxlQUNBO0FBQ2pCRyxFQUFBQSxRQUFRLEVBQUVKLFNBQVMsQ0FBQ087QUFESCxDOztTQURBTixPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGlzIGEgdXRpbGl0eSBjb21wb25lbnQgdG8gbWFuYWdlIHN0YXRlIGluIHN0b3JpZXMgYW5kIGV4YW1wbGVzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYW5hZ2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC4uLnByb3BzXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuKHtcbiAgICAgIHNldFN0YXRlOiAoLi4uYXJncykgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKC4uLmFyZ3MpXG4gICAgICB9LFxuICAgICAgc3RhdGU6IHRoaXMuc3RhdGVcbiAgICB9KVxuICB9XG59XG4iXX0=