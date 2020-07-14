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
import PropTypes from 'prop-types';
import Box from 'ui-box';

var Image = /*#__PURE__*/function (_PureComponent) {
  _inherits(Image, _PureComponent);

  var _super = _createSuper(Image);

  function Image() {
    _classCallCheck(this, Image);

    return _super.apply(this, arguments);
  }

  _createClass(Image, [{
    key: "render",
    value: function render() {
      return React.createElement(Box, _extends({
        is: "img"
      }, this.props));
    }
  }]);

  return Image;
}(PureComponent);

Image.displayName = "Image";

_defineProperty(Image, "propTypes", _objectSpread({}, Box.propTypes, {
  src: PropTypes.string
}));

export { Image as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbWFnZS9zcmMvSW1hZ2UuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiQm94IiwiSW1hZ2UiLCJwcm9wcyIsInByb3BUeXBlcyIsInNyYyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsUUFBaEI7O0lBRXFCQyxLOzs7Ozs7Ozs7Ozs7OzZCQU1WO0FBQ1AsYUFBTyxvQkFBQyxHQUFEO0FBQUssUUFBQSxFQUFFLEVBQUM7QUFBUixTQUFrQixLQUFLQyxLQUF2QixFQUFQO0FBQ0Q7Ozs7RUFSZ0NKLGE7O0FBQWRHLEs7O2dCQUFBQSxLLGlDQUVkRCxHQUFHLENBQUNHLFM7QUFDUEMsRUFBQUEsR0FBRyxFQUFFTCxTQUFTLENBQUNNOzs7U0FIRUosSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2UgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAuLi5Cb3gucHJvcFR5cGVzLFxuICAgIHNyYzogUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Qm94IGlzPVwiaW1nXCIgey4uLnRoaXMucHJvcHN9IC8+XG4gIH1cbn1cbiJdfQ==