import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
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
import debounce from 'lodash.debounce';
import { withTheme } from '../../theme';
import { SelectMenu } from '../../select-menu';
import { CaretDownIcon } from '../../icons';
import TextTableCell from './TextTableCell';
import TableCell from './TableCell';
var MIN_SELECT_MENU_WIDTH = 240;

var SelectMenuCell = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(SelectMenuCell, _React$PureComponent);

  var _super = _createSuper(SelectMenuCell);

  function SelectMenuCell(props) {
    var _this;

    _classCallCheck(this, SelectMenuCell);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      targetWidth: MIN_SELECT_MENU_WIDTH,
      shouldClickToggle: false,
      isFocused: false
    });

    _defineProperty(_assertThisInitialized(_this), "onResize", function () {
      _this.updateOnResize();
    });

    _defineProperty(_assertThisInitialized(_this), "updateOnResize", function () {
      if (!_this.mainRef) return;
      var targetWidth = _this.mainRef.offsetWidth;

      _this.setState({
        targetWidth: Math.max(MIN_SELECT_MENU_WIDTH, targetWidth)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMainRef", function (getRef, ref) {
      _this.mainRef = ref;
      getRef(ref);
    });

    _defineProperty(_assertThisInitialized(_this), "onOverlayRef", function (ref) {
      _this.overlayRef = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (toggle, isShown, e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();

        if (!isShown && _this.props.isSelectable && !_this.props.disabled) {
          toggle();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleDoubleClick", function (toggle, isShown) {
      if (!isShown && _this.props.isSelectable && !_this.props.disabled) {
        toggle();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (toggle, isShown) {
      var shouldClickToggle = _this.state.shouldClickToggle;

      if (!shouldClickToggle && !isShown) {
        _this.setState({
          shouldClickToggle: true
        });

        return;
      }

      if (_this.props.isSelectable && !_this.props.disabled) {
        toggle();

        _this.setState({
          shouldClickToggle: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function () {
      _this.setState({
        isFocused: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function () {
      _this.setState({
        shouldClickToggle: false,
        isFocused: false
      });
    });

    _this.onResize = debounce(_this.onResize, 200);
    return _this;
  }

  _createClass(SelectMenuCell, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Call this to initialize and set
      this.updateOnResize();
      window.addEventListener('resize', this.onResize, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          theme = _this$props.theme,
          size = _this$props.size,
          selectMenuProps = _this$props.selectMenuProps,
          disabled = _this$props.disabled,
          placeholder = _this$props.placeholder,
          isSelectable = _this$props.isSelectable,
          _this$props$textProps = _this$props.textProps,
          textProps = _this$props$textProps === void 0 ? {} : _this$props$textProps,
          props = _objectWithoutProperties(_this$props, ["children", "theme", "size", "selectMenuProps", "disabled", "placeholder", "isSelectable", "textProps"]);

      var _this$state = this.state,
          targetWidth = _this$state.targetWidth,
          isFocused = _this$state.isFocused;
      var cursor = 'default';

      if (disabled) {
        cursor = 'not-allowed';
      } else if (isSelectable) {
        if (isFocused) {
          cursor = 'pointer';
        } else {
          cursor = 'default';
        }
      } else {
        cursor = 'text';
      }

      return React.createElement(SelectMenu, _extends({
        width: targetWidth
      }, selectMenuProps), function (_ref) {
        var toggle = _ref.toggle,
            getRef = _ref.getRef,
            isShown = _ref.isShown;
        return React.createElement(TextTableCell, _extends({
          innerRef: _this2.onMainRef.bind(null, getRef),
          onClick: _this2.handleClick.bind(null, toggle, isShown),
          onFocus: _this2.handleFocus.bind(null, toggle, isShown),
          onBlur: _this2.handleBlur,
          isSelectable: isSelectable && !disabled,
          rightView: isSelectable ? React.createElement(CaretDownIcon, {
            color: "muted"
          }) : null,
          "aria-haspopup": true,
          "aria-expanded": isShown,
          cursor: isShown ? 'pointer' : cursor,
          textProps: _objectSpread({
            size: size,
            opacity: disabled || !children && placeholder ? 0.5 : 1
          }, textProps),
          onKeyDown: _this2.handleKeyDown.bind(null, toggle, isShown),
          onDoubleClick: _this2.handleDoubleClick.bind(null, toggle, isShown)
        }, props), children ? children : placeholder);
      });
    }
  }]);

  return SelectMenuCell;
}(React.PureComponent);

SelectMenuCell.displayName = "SelectMenuCell";

_defineProperty(SelectMenuCell, "propTypes", _objectSpread({}, TableCell.propTypes, {
  /*
   * Makes the TableCell focusable.
   * Will add tabIndex={-1 || this.props.tabIndex}.
   */
  isSelectable: PropTypes.bool.isRequired,

  /**
   * When true, the cell can't be edited.
   */
  disabled: PropTypes.bool,

  /**
   * Optional placeholder when children is falsy.
   */
  placeholder: PropTypes.node,

  /**
   * The size used for the TextTableCell and Textarea.
   */
  size: PropTypes.oneOf([300, 400]).isRequired,
  selectMenuProps: PropTypes.object
}));

_defineProperty(SelectMenuCell, "defaultProps", {
  size: 300,
  isSelectable: true
});

export default withTheme(SelectMenuCell);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvU2VsZWN0TWVudUNlbGwuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJkZWJvdW5jZSIsIndpdGhUaGVtZSIsIlNlbGVjdE1lbnUiLCJDYXJldERvd25JY29uIiwiVGV4dFRhYmxlQ2VsbCIsIlRhYmxlQ2VsbCIsIk1JTl9TRUxFQ1RfTUVOVV9XSURUSCIsIlNlbGVjdE1lbnVDZWxsIiwicHJvcHMiLCJ0YXJnZXRXaWR0aCIsInNob3VsZENsaWNrVG9nZ2xlIiwiaXNGb2N1c2VkIiwidXBkYXRlT25SZXNpemUiLCJtYWluUmVmIiwib2Zmc2V0V2lkdGgiLCJzZXRTdGF0ZSIsIk1hdGgiLCJtYXgiLCJnZXRSZWYiLCJyZWYiLCJvdmVybGF5UmVmIiwidG9nZ2xlIiwiaXNTaG93biIsImUiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImlzU2VsZWN0YWJsZSIsImRpc2FibGVkIiwic3RhdGUiLCJvblJlc2l6ZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2hpbGRyZW4iLCJ0aGVtZSIsInNpemUiLCJzZWxlY3RNZW51UHJvcHMiLCJwbGFjZWhvbGRlciIsInRleHRQcm9wcyIsImN1cnNvciIsIm9uTWFpblJlZiIsImJpbmQiLCJoYW5kbGVDbGljayIsImhhbmRsZUZvY3VzIiwiaGFuZGxlQmx1ciIsIm9wYWNpdHkiLCJoYW5kbGVLZXlEb3duIiwiaGFuZGxlRG91YmxlQ2xpY2siLCJQdXJlQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJub2RlIiwib25lT2YiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixpQkFBckI7QUFD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RUFBc0NDLE9BQXRDLENBZmI7QUFnQkUsVUFBQSxhQUFhLEVBQUUsTUFBSSxDQUFDMEIsaUJBQUwsQ0FBdUJOLElBQXZCLENBQTRCLElBQTVCLEVBQWtDckIsTUFBbEMsRUFBMENDLE9BQTFDO0FBaEJqQixXQWlCTWQsS0FqQk4sR0FtQkcwQixRQUFRLEdBQUdBLFFBQUgsR0FBY0ksV0FuQnpCLENBREY7QUF1QkQsT0F6QkgsQ0FERjtBQTZCRDs7OztFQXRMMEJ4QyxLQUFLLENBQUNtRCxhOztBQUE3QjFDLGM7O2dCQUFBQSxjLGlDQUtDRixTQUFTLENBQUM2QyxTO0FBRWI7Ozs7QUFJQXZCLEVBQUFBLFlBQVksRUFBRTVCLFNBQVMsQ0FBQ29ELElBQVYsQ0FBZUMsVTs7QUFFN0I7OztBQUdBeEIsRUFBQUEsUUFBUSxFQUFFN0IsU0FBUyxDQUFDb0QsSTs7QUFFcEI7OztBQUdBYixFQUFBQSxXQUFXLEVBQUV2QyxTQUFTLENBQUNzRCxJOztBQUV2Qjs7O0FBR0FqQixFQUFBQSxJQUFJLEVBQUVyQyxTQUFTLENBQUN1RCxLQUFWLENBQWdCLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBaEIsRUFBNEJGLFU7QUFFbENmLEVBQUFBLGVBQWUsRUFBRXRDLFNBQVMsQ0FBQ3dEOzs7Z0JBNUJ6QmhELGMsa0JBK0JrQjtBQUNwQjZCLEVBQUFBLElBQUksRUFBRSxHQURjO0FBRXBCVCxFQUFBQSxZQUFZLEVBQUU7QUFGTSxDOztBQTBKeEIsZUFBZTFCLFNBQVMsQ0FBQ00sY0FBRCxDQUF4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2guZGVib3VuY2UnXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCB7IFNlbGVjdE1lbnUgfSBmcm9tICcuLi8uLi9zZWxlY3QtbWVudSdcbmltcG9ydCB7IENhcmV0RG93bkljb24gfSBmcm9tICcuLi8uLi9pY29ucydcbmltcG9ydCBUZXh0VGFibGVDZWxsIGZyb20gJy4vVGV4dFRhYmxlQ2VsbCdcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnLi9UYWJsZUNlbGwnXG5cbmNvbnN0IE1JTl9TRUxFQ1RfTUVOVV9XSURUSCA9IDI0MFxuXG5jbGFzcyBTZWxlY3RNZW51Q2VsbCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBUYWJsZUNlbGwgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLlRhYmxlQ2VsbC5wcm9wVHlwZXMsXG5cbiAgICAvKlxuICAgICAqIE1ha2VzIHRoZSBUYWJsZUNlbGwgZm9jdXNhYmxlLlxuICAgICAqIFdpbGwgYWRkIHRhYkluZGV4PXstMSB8fCB0aGlzLnByb3BzLnRhYkluZGV4fS5cbiAgICAgKi9cbiAgICBpc1NlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBjZWxsIGNhbid0IGJlIGVkaXRlZC5cbiAgICAgKi9cbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBPcHRpb25hbCBwbGFjZWhvbGRlciB3aGVuIGNoaWxkcmVuIGlzIGZhbHN5LlxuICAgICAqL1xuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBzaXplIHVzZWQgZm9yIHRoZSBUZXh0VGFibGVDZWxsIGFuZCBUZXh0YXJlYS5cbiAgICAgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoWzMwMCwgNDAwXSkuaXNSZXF1aXJlZCxcblxuICAgIHNlbGVjdE1lbnVQcm9wczogUHJvcFR5cGVzLm9iamVjdFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzaXplOiAzMDAsXG4gICAgaXNTZWxlY3RhYmxlOiB0cnVlXG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICB0YXJnZXRXaWR0aDogTUlOX1NFTEVDVF9NRU5VX1dJRFRILFxuICAgIHNob3VsZENsaWNrVG9nZ2xlOiBmYWxzZSxcbiAgICBpc0ZvY3VzZWQ6IGZhbHNlXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMub25SZXNpemUgPSBkZWJvdW5jZSh0aGlzLm9uUmVzaXplLCAyMDApXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBDYWxsIHRoaXMgdG8gaW5pdGlhbGl6ZSBhbmQgc2V0XG4gICAgdGhpcy51cGRhdGVPblJlc2l6ZSgpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUsIGZhbHNlKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUpXG4gIH1cblxuICBvblJlc2l6ZSA9ICgpID0+IHtcbiAgICB0aGlzLnVwZGF0ZU9uUmVzaXplKClcbiAgfVxuXG4gIHVwZGF0ZU9uUmVzaXplID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5tYWluUmVmKSByZXR1cm5cbiAgICBjb25zdCB0YXJnZXRXaWR0aCA9IHRoaXMubWFpblJlZi5vZmZzZXRXaWR0aFxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGFyZ2V0V2lkdGg6IE1hdGgubWF4KE1JTl9TRUxFQ1RfTUVOVV9XSURUSCwgdGFyZ2V0V2lkdGgpXG4gICAgfSlcbiAgfVxuXG4gIG9uTWFpblJlZiA9IChnZXRSZWYsIHJlZikgPT4ge1xuICAgIHRoaXMubWFpblJlZiA9IHJlZlxuICAgIGdldFJlZihyZWYpXG4gIH1cblxuICBvbk92ZXJsYXlSZWYgPSByZWYgPT4ge1xuICAgIHRoaXMub3ZlcmxheVJlZiA9IHJlZlxuICB9XG5cbiAgaGFuZGxlS2V5RG93biA9ICh0b2dnbGUsIGlzU2hvd24sIGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICBpZiAoIWlzU2hvd24gJiYgdGhpcy5wcm9wcy5pc1NlbGVjdGFibGUgJiYgIXRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgdG9nZ2xlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVEb3VibGVDbGljayA9ICh0b2dnbGUsIGlzU2hvd24pID0+IHtcbiAgICBpZiAoIWlzU2hvd24gJiYgdGhpcy5wcm9wcy5pc1NlbGVjdGFibGUgJiYgIXRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIHRvZ2dsZSgpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2xpY2sgPSAodG9nZ2xlLCBpc1Nob3duKSA9PiB7XG4gICAgY29uc3QgeyBzaG91bGRDbGlja1RvZ2dsZSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgaWYgKCFzaG91bGRDbGlja1RvZ2dsZSAmJiAhaXNTaG93bikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3VsZENsaWNrVG9nZ2xlOiB0cnVlXG4gICAgICB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuaXNTZWxlY3RhYmxlICYmICF0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICB0b2dnbGUoKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3VsZENsaWNrVG9nZ2xlOiB0cnVlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUZvY3VzID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNGb2N1c2VkOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZUJsdXIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG91bGRDbGlja1RvZ2dsZTogZmFsc2UsXG4gICAgICBpc0ZvY3VzZWQ6IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIHRoZW1lLFxuICAgICAgc2l6ZSxcbiAgICAgIHNlbGVjdE1lbnVQcm9wcyxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICBpc1NlbGVjdGFibGUsXG4gICAgICB0ZXh0UHJvcHMgPSB7fSxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHRhcmdldFdpZHRoLCBpc0ZvY3VzZWQgfSA9IHRoaXMuc3RhdGVcblxuICAgIGxldCBjdXJzb3IgPSAnZGVmYXVsdCdcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIGN1cnNvciA9ICdub3QtYWxsb3dlZCdcbiAgICB9IGVsc2UgaWYgKGlzU2VsZWN0YWJsZSkge1xuICAgICAgaWYgKGlzRm9jdXNlZCkge1xuICAgICAgICBjdXJzb3IgPSAncG9pbnRlcidcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnNvciA9ICdkZWZhdWx0J1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjdXJzb3IgPSAndGV4dCdcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNlbGVjdE1lbnUgd2lkdGg9e3RhcmdldFdpZHRofSB7Li4uc2VsZWN0TWVudVByb3BzfT5cbiAgICAgICAgeyh7IHRvZ2dsZSwgZ2V0UmVmLCBpc1Nob3duIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRleHRUYWJsZUNlbGxcbiAgICAgICAgICAgICAgaW5uZXJSZWY9e3RoaXMub25NYWluUmVmLmJpbmQobnVsbCwgZ2V0UmVmKX1cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKG51bGwsIHRvZ2dsZSwgaXNTaG93bil9XG4gICAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXMuYmluZChudWxsLCB0b2dnbGUsIGlzU2hvd24pfVxuICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgaXNTZWxlY3RhYmxlPXtpc1NlbGVjdGFibGUgJiYgIWRpc2FibGVkfVxuICAgICAgICAgICAgICByaWdodFZpZXc9e2lzU2VsZWN0YWJsZSA/IDxDYXJldERvd25JY29uIGNvbG9yPVwibXV0ZWRcIiAvPiA6IG51bGx9XG4gICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXBcbiAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD17aXNTaG93bn1cbiAgICAgICAgICAgICAgY3Vyc29yPXtpc1Nob3duID8gJ3BvaW50ZXInIDogY3Vyc29yfVxuICAgICAgICAgICAgICB0ZXh0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaXplLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IGRpc2FibGVkIHx8ICghY2hpbGRyZW4gJiYgcGxhY2Vob2xkZXIpID8gMC41IDogMSxcbiAgICAgICAgICAgICAgICAuLi50ZXh0UHJvcHNcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd24uYmluZChudWxsLCB0b2dnbGUsIGlzU2hvd24pfVxuICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrPXt0aGlzLmhhbmRsZURvdWJsZUNsaWNrLmJpbmQobnVsbCwgdG9nZ2xlLCBpc1Nob3duKX1cbiAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Y2hpbGRyZW4gPyBjaGlsZHJlbiA6IHBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgPC9UZXh0VGFibGVDZWxsPlxuICAgICAgICAgIClcbiAgICAgICAgfX1cbiAgICAgIDwvU2VsZWN0TWVudT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFNlbGVjdE1lbnVDZWxsKVxuIl19