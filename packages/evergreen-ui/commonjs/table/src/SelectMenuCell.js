"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash.debounce"));

var _theme = require("../../theme");

var _selectMenu = require("../../select-menu");

var _icons = require("../../icons");

var _TextTableCell = _interopRequireDefault(require("./TextTableCell"));

var _TableCell = _interopRequireDefault(require("./TableCell"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var MIN_SELECT_MENU_WIDTH = 240;

var SelectMenuCell = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(SelectMenuCell, _React$PureComponent);

  var _super = _createSuper(SelectMenuCell);

  function SelectMenuCell(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, SelectMenuCell);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      targetWidth: MIN_SELECT_MENU_WIDTH,
      shouldClickToggle: false,
      isFocused: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onResize", function () {
      _this.updateOnResize();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateOnResize", function () {
      if (!_this.mainRef) return;
      var targetWidth = _this.mainRef.offsetWidth;

      _this.setState({
        targetWidth: Math.max(MIN_SELECT_MENU_WIDTH, targetWidth)
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onMainRef", function (getRef, ref) {
      _this.mainRef = ref;
      getRef(ref);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onOverlayRef", function (ref) {
      _this.overlayRef = ref;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleKeyDown", function (toggle, isShown, e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();

        if (!isShown && _this.props.isSelectable && !_this.props.disabled) {
          toggle();
        }
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleDoubleClick", function (toggle, isShown) {
      if (!isShown && _this.props.isSelectable && !_this.props.disabled) {
        toggle();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function (toggle, isShown) {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleFocus", function () {
      _this.setState({
        isFocused: true
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleBlur", function () {
      _this.setState({
        shouldClickToggle: false,
        isFocused: false
      });
    });
    _this.onResize = (0, _lodash["default"])(_this.onResize, 200);
    return _this;
  }

  (0, _createClass2["default"])(SelectMenuCell, [{
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
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["children", "theme", "size", "selectMenuProps", "disabled", "placeholder", "isSelectable", "textProps"]);
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

      return _react["default"].createElement(_selectMenu.SelectMenu, (0, _extends2["default"])({
        width: targetWidth
      }, selectMenuProps), function (_ref) {
        var toggle = _ref.toggle,
            getRef = _ref.getRef,
            isShown = _ref.isShown;
        return _react["default"].createElement(_TextTableCell["default"], (0, _extends2["default"])({
          innerRef: _this2.onMainRef.bind(null, getRef),
          onClick: _this2.handleClick.bind(null, toggle, isShown),
          onFocus: _this2.handleFocus.bind(null, toggle, isShown),
          onBlur: _this2.handleBlur,
          isSelectable: isSelectable && !disabled,
          rightView: isSelectable ? _react["default"].createElement(_icons.CaretDownIcon, {
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
}(_react["default"].PureComponent);

SelectMenuCell.displayName = "SelectMenuCell";
(0, _defineProperty2["default"])(SelectMenuCell, "propTypes", _objectSpread({}, _TableCell["default"].propTypes, {
  /*
   * Makes the TableCell focusable.
   * Will add tabIndex={-1 || this.props.tabIndex}.
   */
  isSelectable: _propTypes["default"].bool.isRequired,

  /**
   * When true, the cell can't be edited.
   */
  disabled: _propTypes["default"].bool,

  /**
   * Optional placeholder when children is falsy.
   */
  placeholder: _propTypes["default"].node,

  /**
   * The size used for the TextTableCell and Textarea.
   */
  size: _propTypes["default"].oneOf([300, 400]).isRequired,
  selectMenuProps: _propTypes["default"].object
}));
(0, _defineProperty2["default"])(SelectMenuCell, "defaultProps", {
  size: 300,
  isSelectable: true
});

var _default = (0, _theme.withTheme)(SelectMenuCell);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvU2VsZWN0TWVudUNlbGwuanMiXSwibmFtZXMiOlsiTUlOX1NFTEVDVF9NRU5VX1dJRFRIIiwiU2VsZWN0TWVudUNlbGwiLCJwcm9wcyIsInRhcmdldFdpZHRoIiwic2hvdWxkQ2xpY2tUb2dnbGUiLCJpc0ZvY3VzZWQiLCJ1cGRhdGVPblJlc2l6ZSIsIm1haW5SZWYiLCJvZmZzZXRXaWR0aCIsInNldFN0YXRlIiwiTWF0aCIsIm1heCIsImdldFJlZiIsInJlZiIsIm92ZXJsYXlSZWYiLCJ0b2dnbGUiLCJpc1Nob3duIiwiZSIsImtleSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaXNTZWxlY3RhYmxlIiwiZGlzYWJsZWQiLCJzdGF0ZSIsIm9uUmVzaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjaGlsZHJlbiIsInRoZW1lIiwic2l6ZSIsInNlbGVjdE1lbnVQcm9wcyIsInBsYWNlaG9sZGVyIiwidGV4dFByb3BzIiwiY3Vyc29yIiwib25NYWluUmVmIiwiYmluZCIsImhhbmRsZUNsaWNrIiwiaGFuZGxlRm9jdXMiLCJoYW5kbGVCbHVyIiwib3BhY2l0eSIsImhhbmRsZUtleURvd24iLCJoYW5kbGVEb3VibGVDbGljayIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlRhYmxlQ2VsbCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJpc1JlcXVpcmVkIiwibm9kZSIsIm9uZU9mIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLHFCQUFxQixHQUFHLEdBQTlCOztJQUVNQyxjOzs7OztBQTBDSiwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLDhCQUFNQSxL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LFM7QUFFYjs7OztBQUlBekIsRUFBQUEsWUFBWSxFQUFFMEIsc0JBQVVDLElBQVYsQ0FBZUMsVTs7QUFFN0I7OztBQUdBM0IsRUFBQUEsUUFBUSxFQUFFeUIsc0JBQVVDLEk7O0FBRXBCOzs7QUFHQWhCLEVBQUFBLFdBQVcsRUFBRWUsc0JBQVVHLEk7O0FBRXZCOzs7QUFHQXBCLEVBQUFBLElBQUksRUFBRWlCLHNCQUFVSSxLQUFWLENBQWdCLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBaEIsRUFBNEJGLFU7QUFFbENsQixFQUFBQSxlQUFlLEVBQUVnQixzQkFBVUs7O2lDQTVCekJuRCxjLGtCQStCa0I7QUFDcEI2QixFQUFBQSxJQUFJLEVBQUUsR0FEYztBQUVwQlQsRUFBQUEsWUFBWSxFQUFFO0FBRk0sQzs7ZUEwSlQsc0JBQVVwQixjQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoLmRlYm91bmNlJ1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5pbXBvcnQgeyBTZWxlY3RNZW51IH0gZnJvbSAnLi4vLi4vc2VsZWN0LW1lbnUnXG5pbXBvcnQgeyBDYXJldERvd25JY29uIH0gZnJvbSAnLi4vLi4vaWNvbnMnXG5pbXBvcnQgVGV4dFRhYmxlQ2VsbCBmcm9tICcuL1RleHRUYWJsZUNlbGwnXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJy4vVGFibGVDZWxsJ1xuXG5jb25zdCBNSU5fU0VMRUNUX01FTlVfV0lEVEggPSAyNDBcblxuY2xhc3MgU2VsZWN0TWVudUNlbGwgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgVGFibGVDZWxsIGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5UYWJsZUNlbGwucHJvcFR5cGVzLFxuXG4gICAgLypcbiAgICAgKiBNYWtlcyB0aGUgVGFibGVDZWxsIGZvY3VzYWJsZS5cbiAgICAgKiBXaWxsIGFkZCB0YWJJbmRleD17LTEgfHwgdGhpcy5wcm9wcy50YWJJbmRleH0uXG4gICAgICovXG4gICAgaXNTZWxlY3RhYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgY2VsbCBjYW4ndCBiZSBlZGl0ZWQuXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogT3B0aW9uYWwgcGxhY2Vob2xkZXIgd2hlbiBjaGlsZHJlbiBpcyBmYWxzeS5cbiAgICAgKi9cbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2l6ZSB1c2VkIGZvciB0aGUgVGV4dFRhYmxlQ2VsbCBhbmQgVGV4dGFyZWEuXG4gICAgICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFszMDAsIDQwMF0pLmlzUmVxdWlyZWQsXG5cbiAgICBzZWxlY3RNZW51UHJvcHM6IFByb3BUeXBlcy5vYmplY3RcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc2l6ZTogMzAwLFxuICAgIGlzU2VsZWN0YWJsZTogdHJ1ZVxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgdGFyZ2V0V2lkdGg6IE1JTl9TRUxFQ1RfTUVOVV9XSURUSCxcbiAgICBzaG91bGRDbGlja1RvZ2dsZTogZmFsc2UsXG4gICAgaXNGb2N1c2VkOiBmYWxzZVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLm9uUmVzaXplID0gZGVib3VuY2UodGhpcy5vblJlc2l6ZSwgMjAwKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gQ2FsbCB0aGlzIHRvIGluaXRpYWxpemUgYW5kIHNldFxuICAgIHRoaXMudXBkYXRlT25SZXNpemUoKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplLCBmYWxzZSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplKVxuICB9XG5cbiAgb25SZXNpemUgPSAoKSA9PiB7XG4gICAgdGhpcy51cGRhdGVPblJlc2l6ZSgpXG4gIH1cblxuICB1cGRhdGVPblJlc2l6ZSA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMubWFpblJlZikgcmV0dXJuXG4gICAgY29uc3QgdGFyZ2V0V2lkdGggPSB0aGlzLm1haW5SZWYub2Zmc2V0V2lkdGhcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRhcmdldFdpZHRoOiBNYXRoLm1heChNSU5fU0VMRUNUX01FTlVfV0lEVEgsIHRhcmdldFdpZHRoKVxuICAgIH0pXG4gIH1cblxuICBvbk1haW5SZWYgPSAoZ2V0UmVmLCByZWYpID0+IHtcbiAgICB0aGlzLm1haW5SZWYgPSByZWZcbiAgICBnZXRSZWYocmVmKVxuICB9XG5cbiAgb25PdmVybGF5UmVmID0gcmVmID0+IHtcbiAgICB0aGlzLm92ZXJsYXlSZWYgPSByZWZcbiAgfVxuXG4gIGhhbmRsZUtleURvd24gPSAodG9nZ2xlLCBpc1Nob3duLCBlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgaWYgKCFpc1Nob3duICYmIHRoaXMucHJvcHMuaXNTZWxlY3RhYmxlICYmICF0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIHRvZ2dsZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRG91YmxlQ2xpY2sgPSAodG9nZ2xlLCBpc1Nob3duKSA9PiB7XG4gICAgaWYgKCFpc1Nob3duICYmIHRoaXMucHJvcHMuaXNTZWxlY3RhYmxlICYmICF0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICB0b2dnbGUoKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gKHRvZ2dsZSwgaXNTaG93bikgPT4ge1xuICAgIGNvbnN0IHsgc2hvdWxkQ2xpY2tUb2dnbGUgfSA9IHRoaXMuc3RhdGVcblxuICAgIGlmICghc2hvdWxkQ2xpY2tUb2dnbGUgJiYgIWlzU2hvd24pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzaG91bGRDbGlja1RvZ2dsZTogdHJ1ZVxuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmlzU2VsZWN0YWJsZSAmJiAhdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgdG9nZ2xlKClcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzaG91bGRDbGlja1RvZ2dsZTogdHJ1ZVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVGb2N1cyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzRm9jdXNlZDogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVCbHVyID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvdWxkQ2xpY2tUb2dnbGU6IGZhbHNlLFxuICAgICAgaXNGb2N1c2VkOiBmYWxzZVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICB0aGVtZSxcbiAgICAgIHNpemUsXG4gICAgICBzZWxlY3RNZW51UHJvcHMsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgaXNTZWxlY3RhYmxlLFxuICAgICAgdGV4dFByb3BzID0ge30sXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyB0YXJnZXRXaWR0aCwgaXNGb2N1c2VkIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBsZXQgY3Vyc29yID0gJ2RlZmF1bHQnXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICBjdXJzb3IgPSAnbm90LWFsbG93ZWQnXG4gICAgfSBlbHNlIGlmIChpc1NlbGVjdGFibGUpIHtcbiAgICAgIGlmIChpc0ZvY3VzZWQpIHtcbiAgICAgICAgY3Vyc29yID0gJ3BvaW50ZXInXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJzb3IgPSAnZGVmYXVsdCdcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY3Vyc29yID0gJ3RleHQnXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWxlY3RNZW51IHdpZHRoPXt0YXJnZXRXaWR0aH0gey4uLnNlbGVjdE1lbnVQcm9wc30+XG4gICAgICAgIHsoeyB0b2dnbGUsIGdldFJlZiwgaXNTaG93biB9KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUZXh0VGFibGVDZWxsXG4gICAgICAgICAgICAgIGlubmVyUmVmPXt0aGlzLm9uTWFpblJlZi5iaW5kKG51bGwsIGdldFJlZil9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZChudWxsLCB0b2dnbGUsIGlzU2hvd24pfVxuICAgICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUZvY3VzLmJpbmQobnVsbCwgdG9nZ2xlLCBpc1Nob3duKX1cbiAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgIGlzU2VsZWN0YWJsZT17aXNTZWxlY3RhYmxlICYmICFkaXNhYmxlZH1cbiAgICAgICAgICAgICAgcmlnaHRWaWV3PXtpc1NlbGVjdGFibGUgPyA8Q2FyZXREb3duSWNvbiBjb2xvcj1cIm11dGVkXCIgLz4gOiBudWxsfVxuICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwXG4gICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e2lzU2hvd259XG4gICAgICAgICAgICAgIGN1cnNvcj17aXNTaG93biA/ICdwb2ludGVyJyA6IGN1cnNvcn1cbiAgICAgICAgICAgICAgdGV4dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2l6ZSxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBkaXNhYmxlZCB8fCAoIWNoaWxkcmVuICYmIHBsYWNlaG9sZGVyKSA/IDAuNSA6IDEsXG4gICAgICAgICAgICAgICAgLi4udGV4dFByb3BzXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlEb3duLmJpbmQobnVsbCwgdG9nZ2xlLCBpc1Nob3duKX1cbiAgICAgICAgICAgICAgb25Eb3VibGVDbGljaz17dGhpcy5oYW5kbGVEb3VibGVDbGljay5iaW5kKG51bGwsIHRvZ2dsZSwgaXNTaG93bil9XG4gICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2NoaWxkcmVuID8gY2hpbGRyZW4gOiBwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgIDwvVGV4dFRhYmxlQ2VsbD5cbiAgICAgICAgICApXG4gICAgICAgIH19XG4gICAgICA8L1NlbGVjdE1lbnU+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShTZWxlY3RNZW51Q2VsbClcbiJdfQ==