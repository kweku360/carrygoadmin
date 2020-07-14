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
import { Pane } from '../../layers';

var TableBody = /*#__PURE__*/function (_PureComponent) {
  _inherits(TableBody, _PureComponent);

  var _super = _createSuper(TableBody);

  function TableBody() {
    _classCallCheck(this, TableBody);

    return _super.apply(this, arguments);
  }

  _createClass(TableBody, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["children"]);

      return React.createElement(Pane, _extends({
        "data-evergreen-table-body": true,
        flex: "1",
        overflowY: "auto"
      }, props), children);
    }
  }]);

  return TableBody;
}(PureComponent);

TableBody.displayName = "TableBody";

_defineProperty(TableBody, "propTypes", _objectSpread({}, Pane.propTypes));

export { TableBody as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGVCb2R5LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlBhbmUiLCJUYWJsZUJvZHkiLCJwcm9wcyIsImNoaWxkcmVuIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixjQUFyQjs7SUFFcUJDLFM7Ozs7Ozs7Ozs7Ozs7NkJBUVY7QUFBQSx3QkFDd0IsS0FBS0MsS0FEN0I7QUFBQSxVQUNDQyxRQURELGVBQ0NBLFFBREQ7QUFBQSxVQUNjRCxLQURkOztBQUVQLGFBQ0Usb0JBQUMsSUFBRDtBQUFNLHlDQUFOO0FBQWdDLFFBQUEsSUFBSSxFQUFDLEdBQXJDO0FBQXlDLFFBQUEsU0FBUyxFQUFDO0FBQW5ELFNBQThEQSxLQUE5RCxHQUNHQyxRQURILENBREY7QUFLRDs7OztFQWZvQ0osYTs7QUFBbEJFLFM7O2dCQUFBQSxTLGlDQUtkRCxJQUFJLENBQUNJLFM7O1NBTFNILFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGVCb2R5IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIFBhbmUgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLlBhbmUucHJvcFR5cGVzXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmUgZGF0YS1ldmVyZ3JlZW4tdGFibGUtYm9keSBmbGV4PVwiMVwiIG92ZXJmbG93WT1cImF1dG9cIiB7Li4ucHJvcHN9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1BhbmU+XG4gICAgKVxuICB9XG59XG4iXX0=