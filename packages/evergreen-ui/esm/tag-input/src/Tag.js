import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @overview TagInput accepts multiple values that can be individually removed
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from '../../badges';
import { CrossIcon } from '../../icons';
import { minorScale } from '../../scales';

var Tag = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Tag, _React$PureComponent);

  var _super = _createSuper(Tag);

  function Tag() {
    _classCallCheck(this, Tag);

    return _super.apply(this, arguments);
  }

  _createClass(Tag, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          onRemove = _this$props.onRemove,
          isRemovable = _this$props.isRemovable,
          props = _objectWithoutProperties(_this$props, ["children", "onRemove", "isRemovable"]);

      var badgeStyles = {
        alignItems: 'center',
        display: 'inline-flex',
        fontWeight: 400,
        textTransform: 'none'
      };

      if (isRemovable) {
        badgeStyles.paddingRight = minorScale(1);
      }

      return React.createElement(Badge, _extends({
        isInteractive: true
      }, badgeStyles, props), children, isRemovable && React.createElement(CrossIcon, {
        marginLeft: minorScale(1),
        onClick: onRemove,
        size: minorScale(3)
      }));
    }
  }]);

  return Tag;
}(React.PureComponent);

Tag.displayName = "Tag";

_defineProperty(Tag, "propTypes", {
  /** The badge content */
  children: PropTypes.node,

  /**
   * Callback invoked when the removal icon is clicked.
   * (event) => void
   */
  onRemove: PropTypes.func,

  /** Whether or not the tag can be removed. */
  isRemovable: PropTypes.bool
});

export default Tag;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWctaW5wdXQvc3JjL1RhZy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkJhZGdlIiwiQ3Jvc3NJY29uIiwibWlub3JTY2FsZSIsIlRhZyIsInByb3BzIiwiY2hpbGRyZW4iLCJvblJlbW92ZSIsImlzUmVtb3ZhYmxlIiwiYmFkZ2VTdHlsZXMiLCJhbGlnbkl0ZW1zIiwiZGlzcGxheSIsImZvbnRXZWlnaHQiLCJ0ZXh0VHJhbnNmb3JtIiwicGFkZGluZ1JpZ2h0IiwiUHVyZUNvbXBvbmVudCIsIm5vZGUiLCJmdW5jIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFJQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLEtBQVQsUUFBc0IsY0FBdEI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGFBQTFCO0FBQ0EsU0FBU0MsVUFBVCxRQUEyQixjQUEzQjs7SUFFTUMsRzs7Ozs7Ozs7Ozs7Ozs2QkFhSztBQUFBLHdCQUMrQyxLQUFLQyxLQURwRDtBQUFBLFVBQ0NDLFFBREQsZUFDQ0EsUUFERDtBQUFBLFVBQ1dDLFFBRFgsZUFDV0EsUUFEWDtBQUFBLFVBQ3FCQyxXQURyQixlQUNxQkEsV0FEckI7QUFBQSxVQUNxQ0gsS0FEckM7O0FBR1AsVUFBTUksV0FBVyxHQUFHO0FBQ2xCQyxRQUFBQSxVQUFVLEVBQUUsUUFETTtBQUVsQkMsUUFBQUEsT0FBTyxFQUFFLGFBRlM7QUFHbEJDLFFBQUFBLFVBQVUsRUFBRSxHQUhNO0FBSWxCQyxRQUFBQSxhQUFhLEVBQUU7QUFKRyxPQUFwQjs7QUFPQSxVQUFJTCxXQUFKLEVBQWlCO0FBQ2ZDLFFBQUFBLFdBQVcsQ0FBQ0ssWUFBWixHQUEyQlgsVUFBVSxDQUFDLENBQUQsQ0FBckM7QUFDRDs7QUFFRCxhQUNFLG9CQUFDLEtBQUQ7QUFBTyxRQUFBLGFBQWE7QUFBcEIsU0FBeUJNLFdBQXpCLEVBQTBDSixLQUExQyxHQUNHQyxRQURILEVBRUdFLFdBQVcsSUFDVixvQkFBQyxTQUFEO0FBQ0UsUUFBQSxVQUFVLEVBQUVMLFVBQVUsQ0FBQyxDQUFELENBRHhCO0FBRUUsUUFBQSxPQUFPLEVBQUVJLFFBRlg7QUFHRSxRQUFBLElBQUksRUFBRUosVUFBVSxDQUFDLENBQUQ7QUFIbEIsUUFISixDQURGO0FBWUQ7Ozs7RUF2Q2VKLEtBQUssQ0FBQ2dCLGE7O0FBQWxCWCxHOztnQkFBQUEsRyxlQUNlO0FBQ2pCO0FBQ0FFLEVBQUFBLFFBQVEsRUFBRU4sU0FBUyxDQUFDZ0IsSUFGSDs7QUFHakI7Ozs7QUFJQVQsRUFBQUEsUUFBUSxFQUFFUCxTQUFTLENBQUNpQixJQVBIOztBQVFqQjtBQUNBVCxFQUFBQSxXQUFXLEVBQUVSLFNBQVMsQ0FBQ2tCO0FBVE4sQzs7QUF5Q3JCLGVBQWVkLEdBQWYiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBvdmVydmlldyBUYWdJbnB1dCBhY2NlcHRzIG11bHRpcGxlIHZhbHVlcyB0aGF0IGNhbiBiZSBpbmRpdmlkdWFsbHkgcmVtb3ZlZFxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IEJhZGdlIH0gZnJvbSAnLi4vLi4vYmFkZ2VzJ1xuaW1wb3J0IHsgQ3Jvc3NJY29uIH0gZnJvbSAnLi4vLi4vaWNvbnMnXG5pbXBvcnQgeyBtaW5vclNjYWxlIH0gZnJvbSAnLi4vLi4vc2NhbGVzJ1xuXG5jbGFzcyBUYWcgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKiogVGhlIGJhZGdlIGNvbnRlbnQgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgaW52b2tlZCB3aGVuIHRoZSByZW1vdmFsIGljb24gaXMgY2xpY2tlZC5cbiAgICAgKiAoZXZlbnQpID0+IHZvaWRcbiAgICAgKi9cbiAgICBvblJlbW92ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqIFdoZXRoZXIgb3Igbm90IHRoZSB0YWcgY2FuIGJlIHJlbW92ZWQuICovXG4gICAgaXNSZW1vdmFibGU6IFByb3BUeXBlcy5ib29sXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgb25SZW1vdmUsIGlzUmVtb3ZhYmxlLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgYmFkZ2VTdHlsZXMgPSB7XG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZSdcbiAgICB9XG5cbiAgICBpZiAoaXNSZW1vdmFibGUpIHtcbiAgICAgIGJhZGdlU3R5bGVzLnBhZGRpbmdSaWdodCA9IG1pbm9yU2NhbGUoMSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJhZGdlIGlzSW50ZXJhY3RpdmUgey4uLmJhZGdlU3R5bGVzfSB7Li4ucHJvcHN9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHtpc1JlbW92YWJsZSAmJiAoXG4gICAgICAgICAgPENyb3NzSWNvblxuICAgICAgICAgICAgbWFyZ2luTGVmdD17bWlub3JTY2FsZSgxKX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVtb3ZlfVxuICAgICAgICAgICAgc2l6ZT17bWlub3JTY2FsZSgzKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9CYWRnZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFnXG4iXX0=