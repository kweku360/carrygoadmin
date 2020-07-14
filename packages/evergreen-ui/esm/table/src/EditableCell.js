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
import { withTheme } from '../../theme';
import { Portal } from '../../portal';
import { Stack } from '../../stack';
import safeInvoke from '../../lib/safe-invoke';
import TextTableCell from './TextTableCell';
import TableCell from './TableCell';
import EditableCellField from './EditableCellField';

var EditableCell = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(EditableCell, _React$PureComponent);

  var _super = _createSuper(EditableCell);

  function EditableCell() {
    var _this;

    _classCallCheck(this, EditableCell);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: _this.props.children,
      isEditing: _this.props.autoFocus
    });

    _defineProperty(_assertThisInitialized(_this), "onMainRef", function (ref) {
      _this.mainRef = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "onOverlayRef", function (ref) {
      _this.overlayRef = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "handleDoubleClick", function () {
      if (_this.props.disabled || !_this.props.isSelectable) return;

      _this.setState({
        isEditing: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (e) {
      if (_this.props.disabled) return;
      var key = e.key;
      /**
       * When the user presses a character on the keyboard, use that character
       * as the value in the text field.
       */

      if (key === 'Enter' || key === 'Shift') {
        _this.setState({
          isEditing: true
        });
      } else if (key.match(/^[a-z]{0,10}$/) && !e.metaKey && !e.ctrlKey && !e.altKey) {
        _this.setState(function (prevState) {
          return {
            isEditing: true,
            value: prevState.value + key
          };
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleFieldChangeComplete", function (value) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          isSelectable = _this$props.isSelectable;

      _this.setState({
        isEditing: false,
        value: value
      });

      safeInvoke(onChange, value);

      if (_this.mainRef && isSelectable) {
        _this.mainRef.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleFieldCancel", function () {
      _this.setState({
        isEditing: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      _this.mainRef.focus();
    });

    return _this;
  }

  _createClass(EditableCell, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          theme = _this$props2.theme,
          size = _this$props2.size,
          disabled = _this$props2.disabled,
          placeholder = _this$props2.placeholder,
          isSelectable = _this$props2.isSelectable,
          _this$props2$textProp = _this$props2.textProps,
          textProps = _this$props2$textProp === void 0 ? {} : _this$props2$textProp,
          props = _objectWithoutProperties(_this$props2, ["children", "theme", "size", "disabled", "placeholder", "isSelectable", "textProps"]);

      var _this$state = this.state,
          isEditing = _this$state.isEditing,
          value = _this$state.value;
      var cursor = 'text';

      if (disabled) {
        cursor = 'not-allowed';
      } else if (isSelectable) {
        cursor = 'default';
      }

      return React.createElement(React.Fragment, null, React.createElement(TextTableCell, _extends({
        innerRef: this.onMainRef,
        isSelectable: isSelectable,
        onClick: this.handleClick,
        onDoubleClick: this.handleDoubleClick,
        onKeyDown: this.handleKeyDown,
        cursor: cursor,
        textProps: _objectSpread({
          size: size,
          opacity: disabled || !children && placeholder ? 0.5 : 1
        }, textProps)
      }, props), children ? children : placeholder), isEditing && React.createElement(Portal, null, React.createElement(Stack, null, function (zIndex) {
        return React.createElement(EditableCellField, {
          zIndex: zIndex,
          getTargetRef: function getTargetRef() {
            return _this2.mainRef;
          },
          value: value,
          onEscape: _this2.handleFieldEscape,
          onChangeComplete: _this2.handleFieldChangeComplete,
          onCancel: _this2.handleFieldCancel,
          size: size
        });
      })));
    }
  }]);

  return EditableCell;
}(React.PureComponent);

EditableCell.displayName = "EditableCell";

_defineProperty(EditableCell, "propTypes", _objectSpread({}, TableCell.propTypes, {
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

  /**
   * This is the value of the cell.
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Function called when value changes. (value: string) => void.
   */
  onChange: PropTypes.func,

  /**
   * When true, the cell will initialize in the editing state.
   */
  autoFocus: PropTypes.bool
}));

_defineProperty(EditableCell, "defaultProps", {
  size: 300,
  isSelectable: true,
  autoFocus: false
});

export default withTheme(EditableCell);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvRWRpdGFibGVDZWxsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwid2l0aFRoZW1lIiwiUG9ydGFsIiwiU3RhY2siLCJzYWZlSW52b2tlIiwiVGV4dFRhYmxlQ2VsbCIsIlRhYmxlQ2VsbCIsIkVkaXRhYmxlQ2VsbEZpZWxkIiwiRWRpdGFibGVDZWxsIiwidmFsdWUiLCJwcm9wcyIsImNoaWxkcmVuIiwiaXNFZGl0aW5nIiwiYXV0b0ZvY3VzIiwicmVmIiwibWFpblJlZiIsIm92ZXJsYXlSZWYiLCJkaXNhYmxlZCIsImlzU2VsZWN0YWJsZSIsInNldFN0YXRlIiwiZSIsImtleSIsIm1hdGNoIiwibWV0YUtleSIsImN0cmxLZXkiLCJhbHRLZXkiLCJwcmV2U3RhdGUiLCJvbkNoYW5nZSIsImZvY3VzIiwidGhlbWUiLCJzaXplIiwicGxhY2Vob2xkZXIiLCJ0ZXh0UHJvcHMiLCJzdGF0ZSIsImN1cnNvciIsIm9uTWFpblJlZiIsImhhbmRsZUNsaWNrIiwiaGFuZGxlRG91YmxlQ2xpY2siLCJoYW5kbGVLZXlEb3duIiwib3BhY2l0eSIsInpJbmRleCIsImhhbmRsZUZpZWxkRXNjYXBlIiwiaGFuZGxlRmllbGRDaGFuZ2VDb21wbGV0ZSIsImhhbmRsZUZpZWxkQ2FuY2VsIiwiUHVyZUNvbXBvbmVudCIsInByb3BUeXBlcyIsImJvb2wiLCJpc1JlcXVpcmVkIiwibm9kZSIsIm9uZU9mIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibnVtYmVyIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGFBQTFCO0FBQ0EsU0FBU0MsTUFBVCxRQUF1QixjQUF2QjtBQUNBLFNBQVNDLEtBQVQsUUFBc0IsYUFBdEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLHVCQUF2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REYsQ0FsQkosQ0FERjtBQXFDRDs7OztFQWhMd0IvQixLQUFLLENBQUM2QyxhOztBQUEzQnBDLFk7O2dCQUFBQSxZLGlDQUtDRixTQUFTLENBQUN1QyxTO0FBRWI7Ozs7QUFJQTNCLEVBQUFBLFlBQVksRUFBRWxCLFNBQVMsQ0FBQzhDLElBQVYsQ0FBZUMsVTs7QUFFN0I7OztBQUdBOUIsRUFBQUEsUUFBUSxFQUFFakIsU0FBUyxDQUFDOEMsSTs7QUFFcEI7OztBQUdBZixFQUFBQSxXQUFXLEVBQUUvQixTQUFTLENBQUNnRCxJOztBQUV2Qjs7O0FBR0FsQixFQUFBQSxJQUFJLEVBQUU5QixTQUFTLENBQUNpRCxLQUFWLENBQWdCLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBaEIsRUFBNEJGLFU7O0FBRWxDOzs7QUFHQXBDLEVBQUFBLFFBQVEsRUFBRVgsU0FBUyxDQUFDa0QsU0FBVixDQUFvQixDQUFDbEQsU0FBUyxDQUFDbUQsTUFBWCxFQUFtQm5ELFNBQVMsQ0FBQ29ELE1BQTdCLENBQXBCLEM7O0FBRVY7OztBQUdBekIsRUFBQUEsUUFBUSxFQUFFM0IsU0FBUyxDQUFDcUQsSTs7QUFFcEI7OztBQUdBeEMsRUFBQUEsU0FBUyxFQUFFYixTQUFTLENBQUM4Qzs7O2dCQXpDbkJ0QyxZLGtCQTRDa0I7QUFDcEJzQixFQUFBQSxJQUFJLEVBQUUsR0FEYztBQUVwQlosRUFBQUEsWUFBWSxFQUFFLElBRk07QUFHcEJMLEVBQUFBLFNBQVMsRUFBRTtBQUhTLEM7O0FBdUl4QixlQUFlWixTQUFTLENBQUNPLFlBQUQsQ0FBeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCB7IFBvcnRhbCB9IGZyb20gJy4uLy4uL3BvcnRhbCdcbmltcG9ydCB7IFN0YWNrIH0gZnJvbSAnLi4vLi4vc3RhY2snXG5pbXBvcnQgc2FmZUludm9rZSBmcm9tICcuLi8uLi9saWIvc2FmZS1pbnZva2UnXG5pbXBvcnQgVGV4dFRhYmxlQ2VsbCBmcm9tICcuL1RleHRUYWJsZUNlbGwnXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJy4vVGFibGVDZWxsJ1xuaW1wb3J0IEVkaXRhYmxlQ2VsbEZpZWxkIGZyb20gJy4vRWRpdGFibGVDZWxsRmllbGQnXG5cbmNsYXNzIEVkaXRhYmxlQ2VsbCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBUYWJsZUNlbGwgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLlRhYmxlQ2VsbC5wcm9wVHlwZXMsXG5cbiAgICAvKlxuICAgICAqIE1ha2VzIHRoZSBUYWJsZUNlbGwgZm9jdXNhYmxlLlxuICAgICAqIFdpbGwgYWRkIHRhYkluZGV4PXstMSB8fCB0aGlzLnByb3BzLnRhYkluZGV4fS5cbiAgICAgKi9cbiAgICBpc1NlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBjZWxsIGNhbid0IGJlIGVkaXRlZC5cbiAgICAgKi9cbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBPcHRpb25hbCBwbGFjZWhvbGRlciB3aGVuIGNoaWxkcmVuIGlzIGZhbHN5LlxuICAgICAqL1xuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBzaXplIHVzZWQgZm9yIHRoZSBUZXh0VGFibGVDZWxsIGFuZCBUZXh0YXJlYS5cbiAgICAgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoWzMwMCwgNDAwXSkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgdGhlIHZhbHVlIG9mIHRoZSBjZWxsLlxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiB2YWx1ZSBjaGFuZ2VzLiAodmFsdWU6IHN0cmluZykgPT4gdm9pZC5cbiAgICAgKi9cbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBjZWxsIHdpbGwgaW5pdGlhbGl6ZSBpbiB0aGUgZWRpdGluZyBzdGF0ZS5cbiAgICAgKi9cbiAgICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNpemU6IDMwMCxcbiAgICBpc1NlbGVjdGFibGU6IHRydWUsXG4gICAgYXV0b0ZvY3VzOiBmYWxzZVxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgdmFsdWU6IHRoaXMucHJvcHMuY2hpbGRyZW4sXG4gICAgaXNFZGl0aW5nOiB0aGlzLnByb3BzLmF1dG9Gb2N1c1xuICB9XG5cbiAgb25NYWluUmVmID0gcmVmID0+IHtcbiAgICB0aGlzLm1haW5SZWYgPSByZWZcbiAgfVxuXG4gIG9uT3ZlcmxheVJlZiA9IHJlZiA9PiB7XG4gICAgdGhpcy5vdmVybGF5UmVmID0gcmVmXG4gIH1cblxuICBoYW5kbGVEb3VibGVDbGljayA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCB8fCAhdGhpcy5wcm9wcy5pc1NlbGVjdGFibGUpIHJldHVyblxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0VkaXRpbmc6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlS2V5RG93biA9IGUgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkKSByZXR1cm5cbiAgICBjb25zdCB7IGtleSB9ID0gZVxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0aGUgdXNlciBwcmVzc2VzIGEgY2hhcmFjdGVyIG9uIHRoZSBrZXlib2FyZCwgdXNlIHRoYXQgY2hhcmFjdGVyXG4gICAgICogYXMgdGhlIHZhbHVlIGluIHRoZSB0ZXh0IGZpZWxkLlxuICAgICAqL1xuICAgIGlmIChrZXkgPT09ICdFbnRlcicgfHwga2V5ID09PSAnU2hpZnQnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNFZGl0aW5nOiB0cnVlXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICBrZXkubWF0Y2goL15bYS16XXswLDEwfSQvKSAmJlxuICAgICAgIWUubWV0YUtleSAmJlxuICAgICAgIWUuY3RybEtleSAmJlxuICAgICAgIWUuYWx0S2V5XG4gICAgKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgICBpc0VkaXRpbmc6IHRydWUsXG4gICAgICAgIHZhbHVlOiBwcmV2U3RhdGUudmFsdWUgKyBrZXlcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUZpZWxkQ2hhbmdlQ29tcGxldGUgPSB2YWx1ZSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgaXNTZWxlY3RhYmxlIH0gPSB0aGlzLnByb3BzXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzRWRpdGluZzogZmFsc2UsXG4gICAgICB2YWx1ZVxuICAgIH0pXG5cbiAgICBzYWZlSW52b2tlKG9uQ2hhbmdlLCB2YWx1ZSlcblxuICAgIGlmICh0aGlzLm1haW5SZWYgJiYgaXNTZWxlY3RhYmxlKSB7XG4gICAgICB0aGlzLm1haW5SZWYuZm9jdXMoKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUZpZWxkQ2FuY2VsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0VkaXRpbmc6IGZhbHNlIH0pXG4gIH1cblxuICBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLm1haW5SZWYuZm9jdXMoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgdGhlbWUsXG4gICAgICBzaXplLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIGlzU2VsZWN0YWJsZSxcbiAgICAgIHRleHRQcm9wcyA9IHt9LFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgaXNFZGl0aW5nLCB2YWx1ZSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgbGV0IGN1cnNvciA9ICd0ZXh0J1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgY3Vyc29yID0gJ25vdC1hbGxvd2VkJ1xuICAgIH0gZWxzZSBpZiAoaXNTZWxlY3RhYmxlKSB7XG4gICAgICBjdXJzb3IgPSAnZGVmYXVsdCdcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8VGV4dFRhYmxlQ2VsbFxuICAgICAgICAgIGlubmVyUmVmPXt0aGlzLm9uTWFpblJlZn1cbiAgICAgICAgICBpc1NlbGVjdGFibGU9e2lzU2VsZWN0YWJsZX1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAgIG9uRG91YmxlQ2xpY2s9e3RoaXMuaGFuZGxlRG91YmxlQ2xpY2t9XG4gICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd259XG4gICAgICAgICAgY3Vyc29yPXtjdXJzb3J9XG4gICAgICAgICAgdGV4dFByb3BzPXt7XG4gICAgICAgICAgICBzaXplLFxuICAgICAgICAgICAgb3BhY2l0eTogZGlzYWJsZWQgfHwgKCFjaGlsZHJlbiAmJiBwbGFjZWhvbGRlcikgPyAwLjUgOiAxLFxuICAgICAgICAgICAgLi4udGV4dFByb3BzXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW4gPyBjaGlsZHJlbiA6IHBsYWNlaG9sZGVyfVxuICAgICAgICA8L1RleHRUYWJsZUNlbGw+XG4gICAgICAgIHtpc0VkaXRpbmcgJiYgKFxuICAgICAgICAgIDxQb3J0YWw+XG4gICAgICAgICAgICA8U3RhY2s+XG4gICAgICAgICAgICAgIHt6SW5kZXggPT4gKFxuICAgICAgICAgICAgICAgIDxFZGl0YWJsZUNlbGxGaWVsZFxuICAgICAgICAgICAgICAgICAgekluZGV4PXt6SW5kZXh9XG4gICAgICAgICAgICAgICAgICBnZXRUYXJnZXRSZWY9eygpID0+IHRoaXMubWFpblJlZn1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgIG9uRXNjYXBlPXt0aGlzLmhhbmRsZUZpZWxkRXNjYXBlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2VDb21wbGV0ZT17dGhpcy5oYW5kbGVGaWVsZENoYW5nZUNvbXBsZXRlfVxuICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMuaGFuZGxlRmllbGRDYW5jZWx9XG4gICAgICAgICAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDwvUG9ydGFsPlxuICAgICAgICApfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKEVkaXRhYmxlQ2VsbClcbiJdfQ==