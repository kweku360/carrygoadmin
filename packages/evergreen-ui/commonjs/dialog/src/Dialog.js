"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _glamor = require("glamor");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layers = require("../../layers");

var _typography = require("../../typography");

var _overlay = require("../../overlay");

var _buttons = require("../../buttons");

var _theme = require("../../theme");

var _icons = require("../../icons");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var animationEasing = {
  deceleration: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  acceleration: "cubic-bezier(0.4, 0.0, 1, 1)"
};
var ANIMATION_DURATION = 200;

var openAnimation = _glamor.css.keyframes('openAnimation', {
  from: {
    transform: 'scale(0.8)',
    opacity: 0
  },
  to: {
    transform: 'scale(1)',
    opacity: 1
  }
});

var closeAnimation = _glamor.css.keyframes('closeAnimation', {
  from: {
    transform: 'scale(1)',
    opacity: 1
  },
  to: {
    transform: 'scale(0.8)',
    opacity: 0
  }
});

var animationStyles = {
  '&[data-state="entering"], &[data-state="entered"]': {
    animation: "".concat(openAnimation, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.deceleration, " both")
  },
  '&[data-state="exiting"]': {
    animation: "".concat(closeAnimation, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.acceleration, " both")
  }
};

var Dialog = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Dialog, _React$Component);

  var _super = _createSuper(Dialog);

  function Dialog() {
    var _this;

    (0, _classCallCheck2["default"])(this, Dialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderNode", function (node, close) {
      if (typeof node === 'function') {
        return node({
          close: close
        });
      }

      return node;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderChildren", function (close) {
      var children = _this.props.children;

      if (typeof children === 'function') {
        return children({
          close: close
        });
      }

      if (typeof children === 'string') {
        return _react["default"].createElement(_typography.Paragraph, null, children);
      }

      return children;
    });
    return _this;
  }

  (0, _createClass2["default"])(Dialog, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          title = _this$props.title,
          width = _this$props.width,
          intent = _this$props.intent,
          isShown = _this$props.isShown,
          topOffset = _this$props.topOffset,
          sideOffset = _this$props.sideOffset,
          hasHeader = _this$props.hasHeader,
          header = _this$props.header,
          hasClose = _this$props.hasClose,
          hasFooter = _this$props.hasFooter,
          footer = _this$props.footer,
          hasCancel = _this$props.hasCancel,
          onCloseComplete = _this$props.onCloseComplete,
          onOpenComplete = _this$props.onOpenComplete,
          onCancel = _this$props.onCancel,
          onConfirm = _this$props.onConfirm,
          confirmLabel = _this$props.confirmLabel,
          isConfirmLoading = _this$props.isConfirmLoading,
          isConfirmDisabled = _this$props.isConfirmDisabled,
          cancelLabel = _this$props.cancelLabel,
          shouldCloseOnOverlayClick = _this$props.shouldCloseOnOverlayClick,
          shouldCloseOnEscapePress = _this$props.shouldCloseOnEscapePress,
          _this$props$container = _this$props.containerProps,
          containerProps = _this$props$container === void 0 ? {} : _this$props$container,
          contentContainerProps = _this$props.contentContainerProps,
          minHeightContent = _this$props.minHeightContent,
          preventBodyScrolling = _this$props.preventBodyScrolling,
          overlayProps = _this$props.overlayProps;
      var sideOffsetWithUnit = Number.isInteger(sideOffset) ? "".concat(sideOffset, "px") : sideOffset;
      var maxWidth = "calc(100% - ".concat(sideOffsetWithUnit, " * 2)");
      var topOffsetWithUnit = Number.isInteger(topOffset) ? "".concat(topOffset, "px") : topOffset;
      var maxHeight = "calc(100% - ".concat(topOffsetWithUnit, " * 2)");

      var renderHeader = function renderHeader(close) {
        if (!header && !hasHeader) {
          return undefined;
        }

        return _react["default"].createElement(_layers.Pane, {
          padding: 16,
          flexShrink: 0,
          borderBottom: "muted",
          display: "flex",
          alignItems: "center"
        }, header ? _this2.renderNode(header, close) : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_typography.Heading, {
          is: "h4",
          size: 600,
          flex: "1"
        }, title), hasClose && _react["default"].createElement(_buttons.IconButton, {
          appearance: "minimal",
          icon: _react["default"].createElement(_icons.CrossIcon, null),
          onClick: function onClick() {
            return onCancel(close);
          }
        })));
      };

      var renderFooter = function renderFooter(close) {
        if (!footer && !hasFooter) {
          return undefined;
        }

        return _react["default"].createElement(_layers.Pane, {
          borderTop: "muted",
          clearfix: true
        }, _react["default"].createElement(_layers.Pane, {
          padding: 16,
          "float": "right"
        }, footer ? _this2.renderNode(footer, close) : _react["default"].createElement(_react["default"].Fragment, null, hasCancel && _react["default"].createElement(_buttons.Button, {
          tabIndex: 0,
          onClick: function onClick() {
            return onCancel(close);
          }
        }, cancelLabel), _react["default"].createElement(_buttons.Button, {
          tabIndex: 0,
          marginLeft: 8,
          appearance: "primary",
          isLoading: isConfirmLoading,
          disabled: isConfirmDisabled,
          onClick: function onClick() {
            return onConfirm(close);
          },
          intent: intent
        }, confirmLabel))));
      };

      return _react["default"].createElement(_overlay.Overlay, {
        isShown: isShown,
        shouldCloseOnClick: shouldCloseOnOverlayClick,
        shouldCloseOnEscapePress: shouldCloseOnEscapePress,
        onExited: onCloseComplete,
        onEntered: onOpenComplete,
        containerProps: _objectSpread({
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center'
        }, overlayProps),
        preventBodyScrolling: preventBodyScrolling
      }, function (_ref) {
        var state = _ref.state,
            close = _ref.close;
        return _react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
          role: "dialog",
          backgroundColor: "white",
          elevation: 4,
          borderRadius: 8,
          width: width,
          maxWidth: maxWidth,
          maxHeight: maxHeight,
          marginX: sideOffsetWithUnit,
          marginY: topOffsetWithUnit,
          display: "flex",
          flexDirection: "column",
          css: animationStyles,
          "data-state": state
        }, containerProps), renderHeader(close), _react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
          "data-state": state,
          display: "flex",
          overflow: "auto",
          padding: 16,
          flexDirection: "column",
          minHeight: minHeightContent
        }, contentContainerProps), _react["default"].createElement(_layers.Pane, null, _this2.renderChildren(close))), renderFooter(close));
      });
    }
  }]);
  return Dialog;
}(_react["default"].Component);

Dialog.displayName = "Dialog";
(0, _defineProperty2["default"])(Dialog, "propTypes", {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   * When passing a string, <Paragraph /> is used to wrap the string.
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]).isRequired,

  /**
   * The intent of the Dialog. Used for the button.
   */
  intent: _propTypes["default"].oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * When true, the dialog is shown.
   */
  isShown: _propTypes["default"].bool,

  /**
   * Title of the Dialog. Titles should use Title Case.
   */
  title: _propTypes["default"].node,

  /**
   * When true, the header with the title and close icon button is shown.
   */
  hasHeader: _propTypes["default"].bool,

  /**
   * You can override the default header with your own custom component.
   *
   * This is useful if you want to provide a custom header and footer, while
   * also enabling your Dialog's content to scroll.
   *
   * Header can either be a React node or a function accepting `({ close })`.
   */
  header: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]),

  /**
   * When true, the footer with the cancel and confirm button is shown.
   */
  hasFooter: _propTypes["default"].bool,

  /**
   * You can override the default footer with your own custom component.
   *
   * This is useful if you want to provide a custom header and footer, while
   * also enabling your Dialog's content to scroll.
   *
   * Footer can either be a React node or a function accepting `({ close })`.
   */
  footer: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]),

  /**
   * When true, the cancel button is shown.
   */
  hasCancel: _propTypes["default"].bool,

  /**
   * When true, the close button is shown
   */
  hasClose: _propTypes["default"].bool,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: _propTypes["default"].func,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: _propTypes["default"].func,

  /**
   * Function that will be called when the confirm button is clicked.
   * This does not close the Dialog. A close function will be passed
   * as a paramater you can use to close the dialog.
   *
   * `onConfirm={(close) => close()}`
   */
  onConfirm: _propTypes["default"].func,

  /**
   * Label of the confirm button.
   */
  confirmLabel: _propTypes["default"].string,

  /**
   * When true, the confirm button is set to loading.
   */
  isConfirmLoading: _propTypes["default"].bool,

  /**
   * When true, the confirm button is set to disabled.
   */
  isConfirmDisabled: _propTypes["default"].bool,

  /**
   * Function that will be called when the cancel button is clicked.
   * This closes the Dialog by default.
   *
   * `onCancel={(close) => close()}`
   */
  onCancel: _propTypes["default"].func,

  /**
   * Label of the cancel button.
   */
  cancelLabel: _propTypes["default"].string,

  /**
   * Boolean indicating if clicking the overlay should close the overlay.
   */
  shouldCloseOnOverlayClick: _propTypes["default"].bool,

  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   */
  shouldCloseOnEscapePress: _propTypes["default"].bool,

  /**
   * Width of the Dialog.
   */
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /**
   * The space above the dialog.
   * This offset is also used at the bottom when there is not enough vertical
   * space available on screen — and the dialog scrolls internally.
   */
  topOffset: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /**
   * The space on the left/right sides of the dialog when there isn't enough
   * horizontal space available on screen.
   */
  sideOffset: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /**
   * The min height of the body content.
   * Makes it less weird when only showing little content.
   */
  minHeightContent: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /**
   * Props that are passed to the dialog container.
   */
  containerProps: _propTypes["default"].object,

  /**
   * Props that are passed to the content container.
   */
  contentContainerProps: _propTypes["default"].object,

  /**
   * Whether or not to prevent scrolling in the outer body
   */
  preventBodyScrolling: _propTypes["default"].bool,

  /**
   * Props that are passed to the Overlay component.
   */
  overlayProps: _propTypes["default"].object
});
(0, _defineProperty2["default"])(Dialog, "defaultProps", {
  isShown: false,
  hasHeader: true,
  hasClose: true,
  hasFooter: true,
  hasCancel: true,
  intent: 'none',
  width: 560,
  topOffset: '12vmin',
  sideOffset: '16px',
  minHeightContent: 80,
  confirmLabel: 'Confirm',
  isConfirmLoading: false,
  isConfirmDisabled: false,
  cancelLabel: 'Cancel',
  shouldCloseOnOverlayClick: true,
  shouldCloseOnEscapePress: true,
  onCancel: function onCancel(close) {
    return close();
  },
  onConfirm: function onConfirm(close) {
    return close();
  },
  preventBodyScrolling: false,
  overlayProps: {}
});

var _default = (0, _theme.withTheme)(Dialog);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaWFsb2cvc3JjL0RpYWxvZy5qcyJdLCJuYW1lcyI6WyJhbmltYXRpb25FYXNpbmciLCJkZWNlbGVyYXRpb24iLCJhY2NlbGVyYXRpb24iLCJBTklNQVRJT05fRFVSQVRJT04iLCJvcGVuQW5pbWF0aW9uIiwiY3NzIiwia2V5ZnJhbWVzIiwiZnJvbSIsInRyYW5zZm9ybSIsIm9wYWNpdHkiLCJ0byIsImNsb3NlQW5pbWF0aW9uIiwiYW5pbWF0aW9uU3R5bGVzIiwiYW5pbWF0aW9uIiwiRGlhbG9nIiwibm9kZSIsImNsb3NlIiwiY2hpbGRyZW4iLCJwcm9wcyIsInRpdGxlIiwid2lkdGgiLCJpbnRlbnQiLCJpc1Nob3duIiwidG9wT2Zmc2V0Iiwic2lkZU9mZnNldCIsImhhc0hlYWRlciIsImhlYWRlciIsImhhc0Nsb3NlIiwiaGFzRm9vdGVyIiwiZm9vdGVyIiwiaGFzQ2FuY2VsIiwib25DbG9zZUNvbXBsZXRlIiwib25PcGVuQ29tcGxldGUiLCJvbkNhbmNlbCIsIm9uQ29uZmlybSIsImNvbmZpcm1MYWJlbCIsImlzQ29uZmlybUxvYWRpbmciLCJpc0NvbmZpcm1EaXNhYmxlZCIsImNhbmNlbExhYmVsIiwic2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljayIsInNob3VsZENsb3NlT25Fc2NhcGVQcmVzcyIsImNvbnRhaW5lclByb3BzIiwiY29udGVudENvbnRhaW5lclByb3BzIiwibWluSGVpZ2h0Q29udGVudCIsInByZXZlbnRCb2R5U2Nyb2xsaW5nIiwib3ZlcmxheVByb3BzIiwic2lkZU9mZnNldFdpdGhVbml0IiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwibWF4V2lkdGgiLCJ0b3BPZmZzZXRXaXRoVW5pdCIsIm1heEhlaWdodCIsInJlbmRlckhlYWRlciIsInVuZGVmaW5lZCIsInJlbmRlck5vZGUiLCJyZW5kZXJGb290ZXIiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Iiwic3RhdGUiLCJyZW5kZXJDaGlsZHJlbiIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJvbmVPZiIsImJvb2wiLCJzdHJpbmciLCJudW1iZXIiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWUsR0FBRztBQUN0QkMsRUFBQUEsWUFBWSxrQ0FEVTtBQUV0QkMsRUFBQUEsWUFBWTtBQUZVLENBQXhCO0FBS0EsSUFBTUMsa0JBQWtCLEdBQUcsR0FBM0I7O0FBRUEsSUFBTUMsYUFBYSxHQUFHQyxZQUFJQyxTQUFKLENBQWMsZUFBZCxFQUErQjtBQUNuREMsRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLFNBQVMsRUFBRSxZQURQO0FBRUpDLElBQUFBLE9BQU8sRUFBRTtBQUZMLEdBRDZDO0FBS25EQyxFQUFBQSxFQUFFLEVBQUU7QUFDRkYsSUFBQUEsU0FBUyxFQUFFLFVBRFQ7QUFFRkMsSUFBQUEsT0FBTyxFQUFFO0FBRlA7QUFMK0MsQ0FBL0IsQ0FBdEI7O0FBV0EsSUFBTUUsY0FBYyxHQUFHTixZQUFJQyxTQUFKLENBQWMsZ0JBQWQsRUFBZ0M7QUFDckRDLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxTQUFTLEVBQUUsVUFEUDtBQUVKQyxJQUFBQSxPQUFPLEVBQUU7QUFGTCxHQUQrQztBQUtyREMsRUFBQUEsRUFBRSxFQUFFO0FBQ0ZGLElBQUFBLFNBQVMsRUFBRSxZQURUO0FBRUZDLElBQUFBLE9BQU8sRUFBRTtBQUZQO0FBTGlELENBQWhDLENBQXZCOztBQVdBLElBQU1HLGVBQWUsR0FBRztBQUN0Qix1REFBcUQ7QUFDbkRDLElBQUFBLFNBQVMsWUFBS1QsYUFBTCxjQUFzQkQsa0JBQXRCLGdCQUE4Q0gsZUFBZSxDQUFDQyxZQUE5RDtBQUQwQyxHQUQvQjtBQUl0Qiw2QkFBMkI7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QSxnQkFBZ0IsRUFBRSxLQVpFO0FBYXBCQyxFQUFBQSxpQkFBaUIsRUFBRSxLQWJDO0FBY3BCQyxFQUFBQSxXQUFXLEVBQUUsUUFkTztBQWVwQkMsRUFBQUEseUJBQXlCLEVBQUUsSUFmUDtBQWdCcEJDLEVBQUFBLHdCQUF3QixFQUFFLElBaEJOO0FBaUJwQlAsRUFBQUEsUUFBUSxFQUFFLGtCQUFBakIsS0FBSztBQUFBLFdBQUlBLEtBQUssRUFBVDtBQUFBLEdBakJLO0FBa0JwQmtCLEVBQUFBLFNBQVMsRUFBRSxtQkFBQWxCLEtBQUs7QUFBQSxXQUFJQSxLQUFLLEVBQVQ7QUFBQSxHQWxCSTtBQW1CcEI0QixFQUFBQSxvQkFBb0IsRUFBRSxLQW5CRjtBQW9CcEJDLEVBQUFBLFlBQVksRUFBRTtBQXBCTSxDOztlQWtOVCxzQkFBVS9CLE1BQVYsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBQYXJhZ3JhcGgsIEhlYWRpbmcgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJy4uLy4uL292ZXJsYXknXG5pbXBvcnQgeyBCdXR0b24sIEljb25CdXR0b24gfSBmcm9tICcuLi8uLi9idXR0b25zJ1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5pbXBvcnQgeyBDcm9zc0ljb24gfSBmcm9tICcuLi8uLi9pY29ucydcblxuY29uc3QgYW5pbWF0aW9uRWFzaW5nID0ge1xuICBkZWNlbGVyYXRpb246IGBjdWJpYy1iZXppZXIoMC4wLCAwLjAsIDAuMiwgMSlgLFxuICBhY2NlbGVyYXRpb246IGBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDEsIDEpYFxufVxuXG5jb25zdCBBTklNQVRJT05fRFVSQVRJT04gPSAyMDBcblxuY29uc3Qgb3BlbkFuaW1hdGlvbiA9IGNzcy5rZXlmcmFtZXMoJ29wZW5BbmltYXRpb24nLCB7XG4gIGZyb206IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJyxcbiAgICBvcGFjaXR5OiAwXG4gIH0sXG4gIHRvOiB7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknLFxuICAgIG9wYWNpdHk6IDFcbiAgfVxufSlcblxuY29uc3QgY2xvc2VBbmltYXRpb24gPSBjc3Mua2V5ZnJhbWVzKCdjbG9zZUFuaW1hdGlvbicsIHtcbiAgZnJvbToge1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyxcbiAgICBvcGFjaXR5OiAxXG4gIH0sXG4gIHRvOiB7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMC44KScsXG4gICAgb3BhY2l0eTogMFxuICB9XG59KVxuXG5jb25zdCBhbmltYXRpb25TdHlsZXMgPSB7XG4gICcmW2RhdGEtc3RhdGU9XCJlbnRlcmluZ1wiXSwgJltkYXRhLXN0YXRlPVwiZW50ZXJlZFwiXSc6IHtcbiAgICBhbmltYXRpb246IGAke29wZW5BbmltYXRpb259ICR7QU5JTUFUSU9OX0RVUkFUSU9OfW1zICR7YW5pbWF0aW9uRWFzaW5nLmRlY2VsZXJhdGlvbn0gYm90aGBcbiAgfSxcbiAgJyZbZGF0YS1zdGF0ZT1cImV4aXRpbmdcIl0nOiB7XG4gICAgYW5pbWF0aW9uOiBgJHtjbG9zZUFuaW1hdGlvbn0gJHtBTklNQVRJT05fRFVSQVRJT059bXMgJHthbmltYXRpb25FYXNpbmcuYWNjZWxlcmF0aW9ufSBib3RoYFxuICB9XG59XG5cbmNsYXNzIERpYWxvZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ2hpbGRyZW4gY2FuIGJlIGEgc3RyaW5nLCBub2RlIG9yIGEgZnVuY3Rpb24gYWNjZXB0aW5nIGAoeyBjbG9zZSB9KWAuXG4gICAgICogV2hlbiBwYXNzaW5nIGEgc3RyaW5nLCA8UGFyYWdyYXBoIC8+IGlzIHVzZWQgdG8gd3JhcCB0aGUgc3RyaW5nLlxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmZ1bmNdKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGludGVudCBvZiB0aGUgRGlhbG9nLiBVc2VkIGZvciB0aGUgYnV0dG9uLlxuICAgICAqL1xuICAgIGludGVudDogUHJvcFR5cGVzLm9uZU9mKFsnbm9uZScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ10pXG4gICAgICAuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGRpYWxvZyBpcyBzaG93bi5cbiAgICAgKi9cbiAgICBpc1Nob3duOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRpdGxlIG9mIHRoZSBEaWFsb2cuIFRpdGxlcyBzaG91bGQgdXNlIFRpdGxlIENhc2UuXG4gICAgICovXG4gICAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgaGVhZGVyIHdpdGggdGhlIHRpdGxlIGFuZCBjbG9zZSBpY29uIGJ1dHRvbiBpcyBzaG93bi5cbiAgICAgKi9cbiAgICBoYXNIZWFkZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogWW91IGNhbiBvdmVycmlkZSB0aGUgZGVmYXVsdCBoZWFkZXIgd2l0aCB5b3VyIG93biBjdXN0b20gY29tcG9uZW50LlxuICAgICAqXG4gICAgICogVGhpcyBpcyB1c2VmdWwgaWYgeW91IHdhbnQgdG8gcHJvdmlkZSBhIGN1c3RvbSBoZWFkZXIgYW5kIGZvb3Rlciwgd2hpbGVcbiAgICAgKiBhbHNvIGVuYWJsaW5nIHlvdXIgRGlhbG9nJ3MgY29udGVudCB0byBzY3JvbGwuXG4gICAgICpcbiAgICAgKiBIZWFkZXIgY2FuIGVpdGhlciBiZSBhIFJlYWN0IG5vZGUgb3IgYSBmdW5jdGlvbiBhY2NlcHRpbmcgYCh7IGNsb3NlIH0pYC5cbiAgICAgKi9cbiAgICBoZWFkZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgZm9vdGVyIHdpdGggdGhlIGNhbmNlbCBhbmQgY29uZmlybSBidXR0b24gaXMgc2hvd24uXG4gICAgICovXG4gICAgaGFzRm9vdGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFlvdSBjYW4gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgZm9vdGVyIHdpdGggeW91ciBvd24gY3VzdG9tIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgdXNlZnVsIGlmIHlvdSB3YW50IHRvIHByb3ZpZGUgYSBjdXN0b20gaGVhZGVyIGFuZCBmb290ZXIsIHdoaWxlXG4gICAgICogYWxzbyBlbmFibGluZyB5b3VyIERpYWxvZydzIGNvbnRlbnQgdG8gc2Nyb2xsLlxuICAgICAqXG4gICAgICogRm9vdGVyIGNhbiBlaXRoZXIgYmUgYSBSZWFjdCBub2RlIG9yIGEgZnVuY3Rpb24gYWNjZXB0aW5nIGAoeyBjbG9zZSB9KWAuXG4gICAgICovXG4gICAgZm9vdGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmZ1bmNdKSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGNhbmNlbCBidXR0b24gaXMgc2hvd24uXG4gICAgICovXG4gICAgaGFzQ2FuY2VsOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGNsb3NlIGJ1dHRvbiBpcyBzaG93blxuICAgICAqL1xuICAgIGhhc0Nsb3NlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgZXhpdCB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlLlxuICAgICAqL1xuICAgIG9uQ2xvc2VDb21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGVudGVyIHRyYW5zaXRpb24gaXMgY29tcGxldGUuXG4gICAgICovXG4gICAgb25PcGVuQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBjb25maXJtIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgICAqIFRoaXMgZG9lcyBub3QgY2xvc2UgdGhlIERpYWxvZy4gQSBjbG9zZSBmdW5jdGlvbiB3aWxsIGJlIHBhc3NlZFxuICAgICAqIGFzIGEgcGFyYW1hdGVyIHlvdSBjYW4gdXNlIHRvIGNsb3NlIHRoZSBkaWFsb2cuXG4gICAgICpcbiAgICAgKiBgb25Db25maXJtPXsoY2xvc2UpID0+IGNsb3NlKCl9YFxuICAgICAqL1xuICAgIG9uQ29uZmlybTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBMYWJlbCBvZiB0aGUgY29uZmlybSBidXR0b24uXG4gICAgICovXG4gICAgY29uZmlybUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgY29uZmlybSBidXR0b24gaXMgc2V0IHRvIGxvYWRpbmcuXG4gICAgICovXG4gICAgaXNDb25maXJtTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBjb25maXJtIGJ1dHRvbiBpcyBzZXQgdG8gZGlzYWJsZWQuXG4gICAgICovXG4gICAgaXNDb25maXJtRGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBjYW5jZWwgYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAgICogVGhpcyBjbG9zZXMgdGhlIERpYWxvZyBieSBkZWZhdWx0LlxuICAgICAqXG4gICAgICogYG9uQ2FuY2VsPXsoY2xvc2UpID0+IGNsb3NlKCl9YFxuICAgICAqL1xuICAgIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIExhYmVsIG9mIHRoZSBjYW5jZWwgYnV0dG9uLlxuICAgICAqL1xuICAgIGNhbmNlbExhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogQm9vbGVhbiBpbmRpY2F0aW5nIGlmIGNsaWNraW5nIHRoZSBvdmVybGF5IHNob3VsZCBjbG9zZSB0aGUgb3ZlcmxheS5cbiAgICAgKi9cbiAgICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEJvb2xlYW4gaW5kaWNhdGluZyBpZiBwcmVzc2luZyB0aGUgZXNjIGtleSBzaG91bGQgY2xvc2UgdGhlIG92ZXJsYXkuXG4gICAgICovXG4gICAgc2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdpZHRoIG9mIHRoZSBEaWFsb2cuXG4gICAgICovXG4gICAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBzcGFjZSBhYm92ZSB0aGUgZGlhbG9nLlxuICAgICAqIFRoaXMgb2Zmc2V0IGlzIGFsc28gdXNlZCBhdCB0aGUgYm90dG9tIHdoZW4gdGhlcmUgaXMgbm90IGVub3VnaCB2ZXJ0aWNhbFxuICAgICAqIHNwYWNlIGF2YWlsYWJsZSBvbiBzY3JlZW4g4oCUIGFuZCB0aGUgZGlhbG9nIHNjcm9sbHMgaW50ZXJuYWxseS5cbiAgICAgKi9cbiAgICB0b3BPZmZzZXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBzcGFjZSBvbiB0aGUgbGVmdC9yaWdodCBzaWRlcyBvZiB0aGUgZGlhbG9nIHdoZW4gdGhlcmUgaXNuJ3QgZW5vdWdoXG4gICAgICogaG9yaXpvbnRhbCBzcGFjZSBhdmFpbGFibGUgb24gc2NyZWVuLlxuICAgICAqL1xuICAgIHNpZGVPZmZzZXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBtaW4gaGVpZ2h0IG9mIHRoZSBib2R5IGNvbnRlbnQuXG4gICAgICogTWFrZXMgaXQgbGVzcyB3ZWlyZCB3aGVuIG9ubHkgc2hvd2luZyBsaXR0bGUgY29udGVudC5cbiAgICAgKi9cbiAgICBtaW5IZWlnaHRDb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgICAvKipcbiAgICAgKiBQcm9wcyB0aGF0IGFyZSBwYXNzZWQgdG8gdGhlIGRpYWxvZyBjb250YWluZXIuXG4gICAgICovXG4gICAgY29udGFpbmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvKipcbiAgICAgKiBQcm9wcyB0aGF0IGFyZSBwYXNzZWQgdG8gdGhlIGNvbnRlbnQgY29udGFpbmVyLlxuICAgICAqL1xuICAgIGNvbnRlbnRDb250YWluZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgb3Igbm90IHRvIHByZXZlbnQgc2Nyb2xsaW5nIGluIHRoZSBvdXRlciBib2R5XG4gICAgICovXG4gICAgcHJldmVudEJvZHlTY3JvbGxpbmc6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogUHJvcHMgdGhhdCBhcmUgcGFzc2VkIHRvIHRoZSBPdmVybGF5IGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBvdmVybGF5UHJvcHM6IFByb3BUeXBlcy5vYmplY3RcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaXNTaG93bjogZmFsc2UsXG4gICAgaGFzSGVhZGVyOiB0cnVlLFxuICAgIGhhc0Nsb3NlOiB0cnVlLFxuICAgIGhhc0Zvb3RlcjogdHJ1ZSxcbiAgICBoYXNDYW5jZWw6IHRydWUsXG4gICAgaW50ZW50OiAnbm9uZScsXG4gICAgd2lkdGg6IDU2MCxcbiAgICB0b3BPZmZzZXQ6ICcxMnZtaW4nLFxuICAgIHNpZGVPZmZzZXQ6ICcxNnB4JyxcbiAgICBtaW5IZWlnaHRDb250ZW50OiA4MCxcbiAgICBjb25maXJtTGFiZWw6ICdDb25maXJtJyxcbiAgICBpc0NvbmZpcm1Mb2FkaW5nOiBmYWxzZSxcbiAgICBpc0NvbmZpcm1EaXNhYmxlZDogZmFsc2UsXG4gICAgY2FuY2VsTGFiZWw6ICdDYW5jZWwnLFxuICAgIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2s6IHRydWUsXG4gICAgc2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzOiB0cnVlLFxuICAgIG9uQ2FuY2VsOiBjbG9zZSA9PiBjbG9zZSgpLFxuICAgIG9uQ29uZmlybTogY2xvc2UgPT4gY2xvc2UoKSxcbiAgICBwcmV2ZW50Qm9keVNjcm9sbGluZzogZmFsc2UsXG4gICAgb3ZlcmxheVByb3BzOiB7fVxuICB9XG5cbiAgcmVuZGVyTm9kZSA9IChub2RlLCBjbG9zZSkgPT4ge1xuICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIG5vZGUoeyBjbG9zZSB9KVxuICAgIH1cblxuICAgIHJldHVybiBub2RlXG4gIH1cblxuICByZW5kZXJDaGlsZHJlbiA9IGNsb3NlID0+IHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gY2hpbGRyZW4oeyBjbG9zZSB9KVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gPFBhcmFncmFwaD57Y2hpbGRyZW59PC9QYXJhZ3JhcGg+XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkcmVuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGl0bGUsXG4gICAgICB3aWR0aCxcbiAgICAgIGludGVudCxcbiAgICAgIGlzU2hvd24sXG4gICAgICB0b3BPZmZzZXQsXG4gICAgICBzaWRlT2Zmc2V0LFxuICAgICAgaGFzSGVhZGVyLFxuICAgICAgaGVhZGVyLFxuICAgICAgaGFzQ2xvc2UsXG4gICAgICBoYXNGb290ZXIsXG4gICAgICBmb290ZXIsXG4gICAgICBoYXNDYW5jZWwsXG4gICAgICBvbkNsb3NlQ29tcGxldGUsXG4gICAgICBvbk9wZW5Db21wbGV0ZSxcbiAgICAgIG9uQ2FuY2VsLFxuICAgICAgb25Db25maXJtLFxuICAgICAgY29uZmlybUxhYmVsLFxuICAgICAgaXNDb25maXJtTG9hZGluZyxcbiAgICAgIGlzQ29uZmlybURpc2FibGVkLFxuICAgICAgY2FuY2VsTGFiZWwsXG4gICAgICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrLFxuICAgICAgc2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzLFxuICAgICAgY29udGFpbmVyUHJvcHMgPSB7fSxcbiAgICAgIGNvbnRlbnRDb250YWluZXJQcm9wcyxcbiAgICAgIG1pbkhlaWdodENvbnRlbnQsXG4gICAgICBwcmV2ZW50Qm9keVNjcm9sbGluZyxcbiAgICAgIG92ZXJsYXlQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCBzaWRlT2Zmc2V0V2l0aFVuaXQgPSBOdW1iZXIuaXNJbnRlZ2VyKHNpZGVPZmZzZXQpXG4gICAgICA/IGAke3NpZGVPZmZzZXR9cHhgXG4gICAgICA6IHNpZGVPZmZzZXRcbiAgICBjb25zdCBtYXhXaWR0aCA9IGBjYWxjKDEwMCUgLSAke3NpZGVPZmZzZXRXaXRoVW5pdH0gKiAyKWBcblxuICAgIGNvbnN0IHRvcE9mZnNldFdpdGhVbml0ID0gTnVtYmVyLmlzSW50ZWdlcih0b3BPZmZzZXQpXG4gICAgICA/IGAke3RvcE9mZnNldH1weGBcbiAgICAgIDogdG9wT2Zmc2V0XG4gICAgY29uc3QgbWF4SGVpZ2h0ID0gYGNhbGMoMTAwJSAtICR7dG9wT2Zmc2V0V2l0aFVuaXR9ICogMilgXG5cbiAgICBjb25zdCByZW5kZXJIZWFkZXIgPSBjbG9zZSA9PiB7XG4gICAgICBpZiAoIWhlYWRlciAmJiAhaGFzSGVhZGVyKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFBhbmVcbiAgICAgICAgICBwYWRkaW5nPXsxNn1cbiAgICAgICAgICBmbGV4U2hyaW5rPXswfVxuICAgICAgICAgIGJvcmRlckJvdHRvbT1cIm11dGVkXCJcbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICB7aGVhZGVyID8gKFxuICAgICAgICAgICAgdGhpcy5yZW5kZXJOb2RlKGhlYWRlciwgY2xvc2UpXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxIZWFkaW5nIGlzPVwiaDRcIiBzaXplPXs2MDB9IGZsZXg9XCIxXCI+XG4gICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgIHtoYXNDbG9zZSAmJiAoXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJtaW5pbWFsXCJcbiAgICAgICAgICAgICAgICAgIGljb249ezxDcm9zc0ljb24gLz59XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNhbmNlbChjbG9zZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvUGFuZT5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJGb290ZXIgPSBjbG9zZSA9PiB7XG4gICAgICBpZiAoIWZvb3RlciAmJiAhaGFzRm9vdGVyKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFBhbmUgYm9yZGVyVG9wPVwibXV0ZWRcIiBjbGVhcmZpeD5cbiAgICAgICAgICA8UGFuZSBwYWRkaW5nPXsxNn0gZmxvYXQ9XCJyaWdodFwiPlxuICAgICAgICAgICAge2Zvb3RlciA/IChcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJOb2RlKGZvb3RlciwgY2xvc2UpXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIHsvKiBDYW5jZWwgc2hvdWxkIGJlIGZpcnN0IHRvIG1ha2Ugc3VyZSBmb2N1cyBnZXRzIG9uIGl0IGZpcnN0LiAqL31cbiAgICAgICAgICAgICAgICB7aGFzQ2FuY2VsICYmIChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGFiSW5kZXg9ezB9IG9uQ2xpY2s9eygpID0+IG9uQ2FuY2VsKGNsb3NlKX0+XG4gICAgICAgICAgICAgICAgICAgIHtjYW5jZWxMYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ9ezh9XG4gICAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICBpc0xvYWRpbmc9e2lzQ29uZmlybUxvYWRpbmd9XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNDb25maXJtRGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNvbmZpcm0oY2xvc2UpfVxuICAgICAgICAgICAgICAgICAgaW50ZW50PXtpbnRlbnR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2NvbmZpcm1MYWJlbH1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgPC9QYW5lPlxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8T3ZlcmxheVxuICAgICAgICBpc1Nob3duPXtpc1Nob3dufVxuICAgICAgICBzaG91bGRDbG9zZU9uQ2xpY2s9e3Nob3VsZENsb3NlT25PdmVybGF5Q2xpY2t9XG4gICAgICAgIHNob3VsZENsb3NlT25Fc2NhcGVQcmVzcz17c2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzfVxuICAgICAgICBvbkV4aXRlZD17b25DbG9zZUNvbXBsZXRlfVxuICAgICAgICBvbkVudGVyZWQ9e29uT3BlbkNvbXBsZXRlfVxuICAgICAgICBjb250YWluZXJQcm9wcz17e1xuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgIC4uLm92ZXJsYXlQcm9wc1xuICAgICAgICB9fVxuICAgICAgICBwcmV2ZW50Qm9keVNjcm9sbGluZz17cHJldmVudEJvZHlTY3JvbGxpbmd9XG4gICAgICA+XG4gICAgICAgIHsoeyBzdGF0ZSwgY2xvc2UgfSkgPT4gKFxuICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICByb2xlPVwiZGlhbG9nXCJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgIGVsZXZhdGlvbj17NH1cbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz17OH1cbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgIG1heFdpZHRoPXttYXhXaWR0aH1cbiAgICAgICAgICAgIG1heEhlaWdodD17bWF4SGVpZ2h0fVxuICAgICAgICAgICAgbWFyZ2luWD17c2lkZU9mZnNldFdpdGhVbml0fVxuICAgICAgICAgICAgbWFyZ2luWT17dG9wT2Zmc2V0V2l0aFVuaXR9XG4gICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgIGNzcz17YW5pbWF0aW9uU3R5bGVzfVxuICAgICAgICAgICAgZGF0YS1zdGF0ZT17c3RhdGV9XG4gICAgICAgICAgICB7Li4uY29udGFpbmVyUHJvcHN9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3JlbmRlckhlYWRlcihjbG9zZSl9XG5cbiAgICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICAgIGRhdGEtc3RhdGU9e3N0YXRlfVxuICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgIG92ZXJmbG93PVwiYXV0b1wiXG4gICAgICAgICAgICAgIHBhZGRpbmc9ezE2fVxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgbWluSGVpZ2h0PXttaW5IZWlnaHRDb250ZW50fVxuICAgICAgICAgICAgICB7Li4uY29udGVudENvbnRhaW5lclByb3BzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8UGFuZT57dGhpcy5yZW5kZXJDaGlsZHJlbihjbG9zZSl9PC9QYW5lPlxuICAgICAgICAgICAgPC9QYW5lPlxuXG4gICAgICAgICAgICB7cmVuZGVyRm9vdGVyKGNsb3NlKX1cbiAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICl9XG4gICAgICA8L092ZXJsYXk+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShEaWFsb2cpXG4iXX0=