import _extends from "@babel/runtime/helpers/esm/extends";
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

import { css } from 'glamor';
import React from 'react';
import PropTypes from 'prop-types';
import { Pane } from '../../layers';
import { Paragraph, Heading } from '../../typography';
import { Overlay } from '../../overlay';
import { Button, IconButton } from '../../buttons';
import { withTheme } from '../../theme';
import { CrossIcon } from './CrossIcon';
var animationEasing = {
  deceleration: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  acceleration: "cubic-bezier(0.4, 0.0, 1, 1)"
};
var ANIMATION_DURATION = 200;
var openAnimation = css.keyframes('openAnimation', {
  from: {
    transform: 'scale(0.8)',
    opacity: 0
  },
  to: {
    transform: 'scale(1)',
    opacity: 1
  }
});
var closeAnimation = css.keyframes('closeAnimation', {
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
  _inherits(Dialog, _React$Component);

  var _super = _createSuper(Dialog);

  function Dialog() {
    var _this;

    _classCallCheck(this, Dialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "renderNode", function (node, close) {
      if (typeof node === 'function') {
        return node({
          close: close
        });
      }

      return node;
    });

    _defineProperty(_assertThisInitialized(_this), "renderChildren", function (close) {
      var children = _this.props.children;

      if (typeof children === 'function') {
        return children({
          close: close
        });
      }

      if (typeof children === 'string') {
        return React.createElement(Paragraph, null, children);
      }

      return children;
    });

    return _this;
  }

  _createClass(Dialog, [{
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

        return React.createElement(Pane, {
          padding: 16,
          flexShrink: 0,
          borderBottom: "muted",
          display: "flex",
          alignItems: "center"
        }, header ? _this2.renderNode(header, close) : React.createElement(React.Fragment, null, React.createElement(Heading, {
          is: "h4",
          size: 600,
          flex: "1"
        }, title), hasClose && React.createElement(IconButton, {
          appearance: "minimal",
          icon: React.createElement(CrossIcon, null),
          onClick: function onClick() {
            return onCancel(close);
          }
        })));
      };

      var renderFooter = function renderFooter(close) {
        if (!footer && !hasFooter) {
          return undefined;
        }

        return React.createElement(Pane, {
          borderTop: "muted",
          clearfix: true
        }, React.createElement(Pane, {
          padding: 16,
          "float": "right"
        }, footer ? _this2.renderNode(footer, close) : React.createElement(React.Fragment, null, hasCancel && React.createElement(Button, {
          tabIndex: 0,
          onClick: function onClick() {
            return onCancel(close);
          }
        }, cancelLabel), React.createElement(Button, {
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

      return React.createElement(Overlay, {
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
        return React.createElement(Pane, _extends({
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
        }, containerProps), renderHeader(close), React.createElement(Pane, _extends({
          "data-state": state,
          display: "flex",
          overflow: "auto",
          padding: 16,
          flexDirection: "column",
          minHeight: minHeightContent
        }, contentContainerProps), React.createElement(Pane, null, _this2.renderChildren(close))), renderFooter(close));
      });
    }
  }]);

  return Dialog;
}(React.Component);

Dialog.displayName = "Dialog";

_defineProperty(Dialog, "propTypes", {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   * When passing a string, <Paragraph /> is used to wrap the string.
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

  /**
   * The intent of the Dialog. Used for the button.
   */
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * When true, the dialog is shown.
   */
  isShown: PropTypes.bool,

  /**
   * Title of the Dialog. Titles should use Title Case.
   */
  title: PropTypes.node,

  /**
   * When true, the header with the title and close icon button is shown.
   */
  hasHeader: PropTypes.bool,

  /**
   * You can override the default header with your own custom component.
   *
   * This is useful if you want to provide a custom header and footer, while
   * also enabling your Dialog's content to scroll.
   *
   * Header can either be a React node or a function accepting `({ close })`.
   */
  header: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * When true, the footer with the cancel and confirm button is shown.
   */
  hasFooter: PropTypes.bool,

  /**
   * You can override the default footer with your own custom component.
   *
   * This is useful if you want to provide a custom header and footer, while
   * also enabling your Dialog's content to scroll.
   *
   * Footer can either be a React node or a function accepting `({ close })`.
   */
  footer: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * When true, the cancel button is shown.
   */
  hasCancel: PropTypes.bool,

  /**
   * When true, the close button is shown
   */
  hasClose: PropTypes.bool,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: PropTypes.func,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: PropTypes.func,

  /**
   * Function that will be called when the confirm button is clicked.
   * This does not close the Dialog. A close function will be passed
   * as a paramater you can use to close the dialog.
   *
   * `onConfirm={(close) => close()}`
   */
  onConfirm: PropTypes.func,

  /**
   * Label of the confirm button.
   */
  confirmLabel: PropTypes.string,

  /**
   * When true, the confirm button is set to loading.
   */
  isConfirmLoading: PropTypes.bool,

  /**
   * When true, the confirm button is set to disabled.
   */
  isConfirmDisabled: PropTypes.bool,

  /**
   * Function that will be called when the cancel button is clicked.
   * This closes the Dialog by default.
   *
   * `onCancel={(close) => close()}`
   */
  onCancel: PropTypes.func,

  /**
   * Label of the cancel button.
   */
  cancelLabel: PropTypes.string,

  /**
   * Boolean indicating if clicking the overlay should close the overlay.
   */
  shouldCloseOnOverlayClick: PropTypes.bool,

  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   */
  shouldCloseOnEscapePress: PropTypes.bool,

  /**
   * Width of the Dialog.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The space above the dialog.
   * This offset is also used at the bottom when there is not enough vertical
   * space available on screen ??? and the dialog scrolls internally.
   */
  topOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The space on the left/right sides of the dialog when there isn't enough
   * horizontal space available on screen.
   */
  sideOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The min height of the body content.
   * Makes it less weird when only showing little content.
   */
  minHeightContent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Props that are passed to the dialog container.
   */
  containerProps: PropTypes.object,

  /**
   * Props that are passed to the content container.
   */
  contentContainerProps: PropTypes.object,

  /**
   * Whether or not to prevent scrolling in the outer body
   */
  preventBodyScrolling: PropTypes.bool,

  /**
   * Props that are passed to the Overlay component.
   */
  overlayProps: PropTypes.object
});

_defineProperty(Dialog, "defaultProps", {
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

export default withTheme(Dialog);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaWFsb2cvc3JjL0RpYWxvZy5qcyJdLCJuYW1lcyI6WyJjc3MiLCJSZWFjdCIsIlByb3BUeXBlcyIsIlBhbmUiLCJQYXJhZ3JhcGgiLCJIZWFkaW5nIiwiT3ZlcmxheSIsIkJ1dHRvbiIsIkljb25CdXR0b24iLCJ3aXRoVGhlbWUiLCJDcm9zc0ljb24iLCJhbmltYXRpb25FYXNpbmciLCJkZWNlbGVyYXRpb24iLCJhY2NlbGVyYXRpb24iLCJBTklNQVRJT05fRFVSQVRJT04iLCJvcGVuQW5pbWF0aW9uIiwia2V5ZnJhbWVzIiwiZnJvbSIsInRyYW5zZm9ybSIsIm9wYWNpdHkiLCJ0byIsImNsb3NlQW5pbWF0aW9uIiwiYW5pbWF0aW9uU3R5bGVzIiwiYW5pbWF0aW9uIiwiRGlhbG9nIiwibm9kZSIsImNsb3NlIiwiY2hpbGRyZW4iLCJwcm9wcyIsInRpdGxlIiwid2lkdGgiLCJpbnRlbnQiLCJpc1Nob3duIiwidG9wT2Zmc2V0Iiwic2lkZU9mZnNldCIsImhhc0hlYWRlciIsImhlYWRlciIsImhhc0Nsb3NlIiwiaGFzRm9vdGVyIiwiZm9vdGVyIiwiaGFzQ2FuY2VsIiwib25DbG9zZUNvbXBsZXRlIiwib25PcGVuQ29tcGxldGUiLCJvbkNhbmNlbCIsIm9uQ29uZmlybSIsImNvbmZpcm1MYWJlbCIsImlzQ29uZmlybUxvYWRpbmciLCJpc0NvbmZpcm1EaXNhYmxlZCIsImNhbmNlbExhYmVsIiwic2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljayIsInNob3VsZENsb3NlT25Fc2NhcGVQcmVzcyIsImNvbnRhaW5lclByb3BzIiwiY29udGVudENvbnRhaW5lclByb3BzIiwibWluSGVpZ2h0Q29udGVudCIsInByZXZlbnRCb2R5U2Nyb2xsaW5nIiwib3ZlcmxheVByb3BzIiwic2lkZU9mZnNldFdpdGhVbml0IiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwibWF4V2lkdGgiLCJ0b3BPZmZzZXRXaXRoVW5pdCIsIm1heEhlaWdodCIsInJlbmRlckhlYWRlciIsInVuZGVmaW5lZCIsInJlbmRlck5vZGUiLCJyZW5kZXJGb290ZXIiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Iiwic3RhdGUiLCJyZW5kZXJDaGlsZHJlbiIsIkNvbXBvbmVudCIsIm9uZU9mVHlwZSIsImZ1bmMiLCJpc1JlcXVpcmVkIiwib25lT2YiLCJib29sIiwic3RyaW5nIiwibnVtYmVyIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLEdBQVQsUUFBb0IsUUFBcEI7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsY0FBckI7QUFDQSxTQUFTQyxTQUFULEVBQW9CQyxPQUFwQixRQUFtQyxrQkFBbkM7QUFDQSxTQUFTQyxPQUFULFFBQXdCLGVBQXhCO0FBQ0EsU0FBU0MsTUFBVCxFQUFpQkMsVUFBakIsUUFBbUMsZUFBbkM7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGFBQTFCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixhQUExQjtBQUVBLElBQU1DLGVBQWUsR0FBRztBQUN0QkMsRUFBQUEsWUFBWSxrQ0FEVTtBQUV0QkMsRUFBQUEsWUFBWTtBQUZVLENBQXhCO0FBS0EsSUFBTUMsa0JBQWtCLEdBQUcsR0FBM0I7QUFFQSxJQUFNQyxhQUFhLEdBQUdmLEdBQUcsQ0FBQ2dCLFNBQUosQ0FBYyxlQUFkLEVBQStCO0FBQ25EQyxFQUFBQSxJQUFJLEVBQUU7QUFDSkMsSUFBQUEsU0FBUyxFQUFFLFlBRFA7QUFFSkMsSUFBQUEsT0FBTyxFQUFFO0FBRkwsR0FENkM7QUFLbkRDLEVBQUFBLEVBQUUsRUFBRTtBQUNGRixJQUFBQSxTQUFTLEVBQUUsVUFEVDtBQUVGQyxJQUFBQSxPQUFPLEVBQUU7QUFGUDtBQUwrQyxDQUEvQixDQUF0QjtBQVdBLElBQU1FLGNBQWMsR0FBR3JCLEdBQUcsQ0FBQ2dCLFNBQUosQ0FBYyxnQkFBZCxFQUFnQztB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LENBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IFBhcmFncmFwaCwgSGVhZGluZyB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnLi4vLi4vb3ZlcmxheSdcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbkJ1dHRvbiB9IGZyb20gJy4uLy4uL2J1dHRvbnMnXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCB7IENyb3NzSWNvbiB9IGZyb20gJy4uLy4uL2ljb25zJ1xuXG5jb25zdCBhbmltYXRpb25FYXNpbmcgPSB7XG4gIGRlY2VsZXJhdGlvbjogYGN1YmljLWJlemllcigwLjAsIDAuMCwgMC4yLCAxKWAsXG4gIGFjY2VsZXJhdGlvbjogYGN1YmljLWJlemllcigwLjQsIDAuMCwgMSwgMSlgXG59XG5cbmNvbnN0IEFOSU1BVElPTl9EVVJBVElPTiA9IDIwMFxuXG5jb25zdCBvcGVuQW5pbWF0aW9uID0gY3NzLmtleWZyYW1lcygnb3BlbkFuaW1hdGlvbicsIHtcbiAgZnJvbToge1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknLFxuICAgIG9wYWNpdHk6IDBcbiAgfSxcbiAgdG86IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKScsXG4gICAgb3BhY2l0eTogMVxuICB9XG59KVxuXG5jb25zdCBjbG9zZUFuaW1hdGlvbiA9IGNzcy5rZXlmcmFtZXMoJ2Nsb3NlQW5pbWF0aW9uJywge1xuICBmcm9tOiB7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknLFxuICAgIG9wYWNpdHk6IDFcbiAgfSxcbiAgdG86IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJyxcbiAgICBvcGFjaXR5OiAwXG4gIH1cbn0pXG5cbmNvbnN0IGFuaW1hdGlvblN0eWxlcyA9IHtcbiAgJyZbZGF0YS1zdGF0ZT1cImVudGVyaW5nXCJdLCAmW2RhdGEtc3RhdGU9XCJlbnRlcmVkXCJdJzoge1xuICAgIGFuaW1hdGlvbjogYCR7b3BlbkFuaW1hdGlvbn0gJHtBTklNQVRJT05fRFVSQVRJT059bXMgJHthbmltYXRpb25FYXNpbmcuZGVjZWxlcmF0aW9ufSBib3RoYFxuICB9LFxuICAnJltkYXRhLXN0YXRlPVwiZXhpdGluZ1wiXSc6IHtcbiAgICBhbmltYXRpb246IGAke2Nsb3NlQW5pbWF0aW9ufSAke0FOSU1BVElPTl9EVVJBVElPTn1tcyAke2FuaW1hdGlvbkVhc2luZy5hY2NlbGVyYXRpb259IGJvdGhgXG4gIH1cbn1cblxuY2xhc3MgRGlhbG9nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDaGlsZHJlbiBjYW4gYmUgYSBzdHJpbmcsIG5vZGUgb3IgYSBmdW5jdGlvbiBhY2NlcHRpbmcgYCh7IGNsb3NlIH0pYC5cbiAgICAgKiBXaGVuIHBhc3NpbmcgYSBzdHJpbmcsIDxQYXJhZ3JhcGggLz4gaXMgdXNlZCB0byB3cmFwIHRoZSBzdHJpbmcuXG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW50ZW50IG9mIHRoZSBEaWFsb2cuIFVzZWQgZm9yIHRoZSBidXR0b24uXG4gICAgICovXG4gICAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoWydub25lJywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInXSlcbiAgICAgIC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgZGlhbG9nIGlzIHNob3duLlxuICAgICAqL1xuICAgIGlzU2hvd246IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGl0bGUgb2YgdGhlIERpYWxvZy4gVGl0bGVzIHNob3VsZCB1c2UgVGl0bGUgQ2FzZS5cbiAgICAgKi9cbiAgICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBoZWFkZXIgd2l0aCB0aGUgdGl0bGUgYW5kIGNsb3NlIGljb24gYnV0dG9uIGlzIHNob3duLlxuICAgICAqL1xuICAgIGhhc0hlYWRlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBZb3UgY2FuIG92ZXJyaWRlIHRoZSBkZWZhdWx0IGhlYWRlciB3aXRoIHlvdXIgb3duIGN1c3RvbSBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIHVzZWZ1bCBpZiB5b3Ugd2FudCB0byBwcm92aWRlIGEgY3VzdG9tIGhlYWRlciBhbmQgZm9vdGVyLCB3aGlsZVxuICAgICAqIGFsc28gZW5hYmxpbmcgeW91ciBEaWFsb2cncyBjb250ZW50IHRvIHNjcm9sbC5cbiAgICAgKlxuICAgICAqIEhlYWRlciBjYW4gZWl0aGVyIGJlIGEgUmVhY3Qgbm9kZSBvciBhIGZ1bmN0aW9uIGFjY2VwdGluZyBgKHsgY2xvc2UgfSlgLlxuICAgICAqL1xuICAgIGhlYWRlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5mdW5jXSksXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBmb290ZXIgd2l0aCB0aGUgY2FuY2VsIGFuZCBjb25maXJtIGJ1dHRvbiBpcyBzaG93bi5cbiAgICAgKi9cbiAgICBoYXNGb290ZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogWW91IGNhbiBvdmVycmlkZSB0aGUgZGVmYXVsdCBmb290ZXIgd2l0aCB5b3VyIG93biBjdXN0b20gY29tcG9uZW50LlxuICAgICAqXG4gICAgICogVGhpcyBpcyB1c2VmdWwgaWYgeW91IHdhbnQgdG8gcHJvdmlkZSBhIGN1c3RvbSBoZWFkZXIgYW5kIGZvb3Rlciwgd2hpbGVcbiAgICAgKiBhbHNvIGVuYWJsaW5nIHlvdXIgRGlhbG9nJ3MgY29udGVudCB0byBzY3JvbGwuXG4gICAgICpcbiAgICAgKiBGb290ZXIgY2FuIGVpdGhlciBiZSBhIFJlYWN0IG5vZGUgb3IgYSBmdW5jdGlvbiBhY2NlcHRpbmcgYCh7IGNsb3NlIH0pYC5cbiAgICAgKi9cbiAgICBmb290ZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgY2FuY2VsIGJ1dHRvbiBpcyBzaG93bi5cbiAgICAgKi9cbiAgICBoYXNDYW5jZWw6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgY2xvc2UgYnV0dG9uIGlzIHNob3duXG4gICAgICovXG4gICAgaGFzQ2xvc2U6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBleGl0IHRyYW5zaXRpb24gaXMgY29tcGxldGUuXG4gICAgICovXG4gICAgb25DbG9zZUNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgZW50ZXIgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZS5cbiAgICAgKi9cbiAgICBvbk9wZW5Db21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGNvbmZpcm0gYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAgICogVGhpcyBkb2VzIG5vdCBjbG9zZSB0aGUgRGlhbG9nLiBBIGNsb3NlIGZ1bmN0aW9uIHdpbGwgYmUgcGFzc2VkXG4gICAgICogYXMgYSBwYXJhbWF0ZXIgeW91IGNhbiB1c2UgdG8gY2xvc2UgdGhlIGRpYWxvZy5cbiAgICAgKlxuICAgICAqIGBvbkNvbmZpcm09eyhjbG9zZSkgPT4gY2xvc2UoKX1gXG4gICAgICovXG4gICAgb25Db25maXJtOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIExhYmVsIG9mIHRoZSBjb25maXJtIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBjb25maXJtTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBjb25maXJtIGJ1dHRvbiBpcyBzZXQgdG8gbG9hZGluZy5cbiAgICAgKi9cbiAgICBpc0NvbmZpcm1Mb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGNvbmZpcm0gYnV0dG9uIGlzIHNldCB0byBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICBpc0NvbmZpcm1EaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGNhbmNlbCBidXR0b24gaXMgY2xpY2tlZC5cbiAgICAgKiBUaGlzIGNsb3NlcyB0aGUgRGlhbG9nIGJ5IGRlZmF1bHQuXG4gICAgICpcbiAgICAgKiBgb25DYW5jZWw9eyhjbG9zZSkgPT4gY2xvc2UoKX1gXG4gICAgICovXG4gICAgb25DYW5jZWw6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogTGFiZWwgb2YgdGhlIGNhbmNlbCBidXR0b24uXG4gICAgICovXG4gICAgY2FuY2VsTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBCb29sZWFuIGluZGljYXRpbmcgaWYgY2xpY2tpbmcgdGhlIG92ZXJsYXkgc2hvdWxkIGNsb3NlIHRoZSBvdmVybGF5LlxuICAgICAqL1xuICAgIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2s6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogQm9vbGVhbiBpbmRpY2F0aW5nIGlmIHByZXNzaW5nIHRoZSBlc2Mga2V5IHNob3VsZCBjbG9zZSB0aGUgb3ZlcmxheS5cbiAgICAgKi9cbiAgICBzaG91bGRDbG9zZU9uRXNjYXBlUHJlc3M6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2lkdGggb2YgdGhlIERpYWxvZy5cbiAgICAgKi9cbiAgICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNwYWNlIGFib3ZlIHRoZSBkaWFsb2cuXG4gICAgICogVGhpcyBvZmZzZXQgaXMgYWxzbyB1c2VkIGF0IHRoZSBib3R0b20gd2hlbiB0aGVyZSBpcyBub3QgZW5vdWdoIHZlcnRpY2FsXG4gICAgICogc3BhY2UgYXZhaWxhYmxlIG9uIHNjcmVlbiDigJQgYW5kIHRoZSBkaWFsb2cgc2Nyb2xscyBpbnRlcm5hbGx5LlxuICAgICAqL1xuICAgIHRvcE9mZnNldDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNwYWNlIG9uIHRoZSBsZWZ0L3JpZ2h0IHNpZGVzIG9mIHRoZSBkaWFsb2cgd2hlbiB0aGVyZSBpc24ndCBlbm91Z2hcbiAgICAgKiBob3Jpem9udGFsIHNwYWNlIGF2YWlsYWJsZSBvbiBzY3JlZW4uXG4gICAgICovXG4gICAgc2lkZU9mZnNldDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuXG4gICAgLyoqXG4gICAgICogVGhlIG1pbiBoZWlnaHQgb2YgdGhlIGJvZHkgY29udGVudC5cbiAgICAgKiBNYWtlcyBpdCBsZXNzIHdlaXJkIHdoZW4gb25seSBzaG93aW5nIGxpdHRsZSBjb250ZW50LlxuICAgICAqL1xuICAgIG1pbkhlaWdodENvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAgIC8qKlxuICAgICAqIFByb3BzIHRoYXQgYXJlIHBhc3NlZCB0byB0aGUgZGlhbG9nIGNvbnRhaW5lci5cbiAgICAgKi9cbiAgICBjb250YWluZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8qKlxuICAgICAqIFByb3BzIHRoYXQgYXJlIHBhc3NlZCB0byB0aGUgY29udGVudCBjb250YWluZXIuXG4gICAgICovXG4gICAgY29udGVudENvbnRhaW5lclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdG8gcHJldmVudCBzY3JvbGxpbmcgaW4gdGhlIG91dGVyIGJvZHlcbiAgICAgKi9cbiAgICBwcmV2ZW50Qm9keVNjcm9sbGluZzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBQcm9wcyB0aGF0IGFyZSBwYXNzZWQgdG8gdGhlIE92ZXJsYXkgY29tcG9uZW50LlxuICAgICAqL1xuICAgIG92ZXJsYXlQcm9wczogUHJvcFR5cGVzLm9iamVjdFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBpc1Nob3duOiBmYWxzZSxcbiAgICBoYXNIZWFkZXI6IHRydWUsXG4gICAgaGFzQ2xvc2U6IHRydWUsXG4gICAgaGFzRm9vdGVyOiB0cnVlLFxuICAgIGhhc0NhbmNlbDogdHJ1ZSxcbiAgICBpbnRlbnQ6ICdub25lJyxcbiAgICB3aWR0aDogNTYwLFxuICAgIHRvcE9mZnNldDogJzEydm1pbicsXG4gICAgc2lkZU9mZnNldDogJzE2cHgnLFxuICAgIG1pbkhlaWdodENvbnRlbnQ6IDgwLFxuICAgIGNvbmZpcm1MYWJlbDogJ0NvbmZpcm0nLFxuICAgIGlzQ29uZmlybUxvYWRpbmc6IGZhbHNlLFxuICAgIGlzQ29uZmlybURpc2FibGVkOiBmYWxzZSxcbiAgICBjYW5jZWxMYWJlbDogJ0NhbmNlbCcsXG4gICAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljazogdHJ1ZSxcbiAgICBzaG91bGRDbG9zZU9uRXNjYXBlUHJlc3M6IHRydWUsXG4gICAgb25DYW5jZWw6IGNsb3NlID0+IGNsb3NlKCksXG4gICAgb25Db25maXJtOiBjbG9zZSA9PiBjbG9zZSgpLFxuICAgIHByZXZlbnRCb2R5U2Nyb2xsaW5nOiBmYWxzZSxcbiAgICBvdmVybGF5UHJvcHM6IHt9XG4gIH1cblxuICByZW5kZXJOb2RlID0gKG5vZGUsIGNsb3NlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBub2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gbm9kZSh7IGNsb3NlIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIHJlbmRlckNoaWxkcmVuID0gY2xvc2UgPT4ge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcblxuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBjaGlsZHJlbih7IGNsb3NlIH0pXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiA8UGFyYWdyYXBoPntjaGlsZHJlbn08L1BhcmFncmFwaD5cbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRyZW5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aXRsZSxcbiAgICAgIHdpZHRoLFxuICAgICAgaW50ZW50LFxuICAgICAgaXNTaG93bixcbiAgICAgIHRvcE9mZnNldCxcbiAgICAgIHNpZGVPZmZzZXQsXG4gICAgICBoYXNIZWFkZXIsXG4gICAgICBoZWFkZXIsXG4gICAgICBoYXNDbG9zZSxcbiAgICAgIGhhc0Zvb3RlcixcbiAgICAgIGZvb3RlcixcbiAgICAgIGhhc0NhbmNlbCxcbiAgICAgIG9uQ2xvc2VDb21wbGV0ZSxcbiAgICAgIG9uT3BlbkNvbXBsZXRlLFxuICAgICAgb25DYW5jZWwsXG4gICAgICBvbkNvbmZpcm0sXG4gICAgICBjb25maXJtTGFiZWwsXG4gICAgICBpc0NvbmZpcm1Mb2FkaW5nLFxuICAgICAgaXNDb25maXJtRGlzYWJsZWQsXG4gICAgICBjYW5jZWxMYWJlbCxcbiAgICAgIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2ssXG4gICAgICBzaG91bGRDbG9zZU9uRXNjYXBlUHJlc3MsXG4gICAgICBjb250YWluZXJQcm9wcyA9IHt9LFxuICAgICAgY29udGVudENvbnRhaW5lclByb3BzLFxuICAgICAgbWluSGVpZ2h0Q29udGVudCxcbiAgICAgIHByZXZlbnRCb2R5U2Nyb2xsaW5nLFxuICAgICAgb3ZlcmxheVByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHNpZGVPZmZzZXRXaXRoVW5pdCA9IE51bWJlci5pc0ludGVnZXIoc2lkZU9mZnNldClcbiAgICAgID8gYCR7c2lkZU9mZnNldH1weGBcbiAgICAgIDogc2lkZU9mZnNldFxuICAgIGNvbnN0IG1heFdpZHRoID0gYGNhbGMoMTAwJSAtICR7c2lkZU9mZnNldFdpdGhVbml0fSAqIDIpYFxuXG4gICAgY29uc3QgdG9wT2Zmc2V0V2l0aFVuaXQgPSBOdW1iZXIuaXNJbnRlZ2VyKHRvcE9mZnNldClcbiAgICAgID8gYCR7dG9wT2Zmc2V0fXB4YFxuICAgICAgOiB0b3BPZmZzZXRcbiAgICBjb25zdCBtYXhIZWlnaHQgPSBgY2FsYygxMDAlIC0gJHt0b3BPZmZzZXRXaXRoVW5pdH0gKiAyKWBcblxuICAgIGNvbnN0IHJlbmRlckhlYWRlciA9IGNsb3NlID0+IHtcbiAgICAgIGlmICghaGVhZGVyICYmICFoYXNIZWFkZXIpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UGFuZVxuICAgICAgICAgIHBhZGRpbmc9ezE2fVxuICAgICAgICAgIGZsZXhTaHJpbms9ezB9XG4gICAgICAgICAgYm9yZGVyQm90dG9tPVwibXV0ZWRcIlxuICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtoZWFkZXIgPyAoXG4gICAgICAgICAgICB0aGlzLnJlbmRlck5vZGUoaGVhZGVyLCBjbG9zZSlcbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPEhlYWRpbmcgaXM9XCJoNFwiIHNpemU9ezYwMH0gZmxleD1cIjFcIj5cbiAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAge2hhc0Nsb3NlICYmIChcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgYXBwZWFyYW5jZT1cIm1pbmltYWxcIlxuICAgICAgICAgICAgICAgICAgaWNvbj17PENyb3NzSWNvbiAvPn1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2FuY2VsKGNsb3NlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9QYW5lPlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlckZvb3RlciA9IGNsb3NlID0+IHtcbiAgICAgIGlmICghZm9vdGVyICYmICFoYXNGb290ZXIpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UGFuZSBib3JkZXJUb3A9XCJtdXRlZFwiIGNsZWFyZml4PlxuICAgICAgICAgIDxQYW5lIHBhZGRpbmc9ezE2fSBmbG9hdD1cInJpZ2h0XCI+XG4gICAgICAgICAgICB7Zm9vdGVyID8gKFxuICAgICAgICAgICAgICB0aGlzLnJlbmRlck5vZGUoZm9vdGVyLCBjbG9zZSlcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgey8qIENhbmNlbCBzaG91bGQgYmUgZmlyc3QgdG8gbWFrZSBzdXJlIGZvY3VzIGdldHMgb24gaXQgZmlyc3QuICovfVxuICAgICAgICAgICAgICAgIHtoYXNDYW5jZWwgJiYgKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0YWJJbmRleD17MH0gb25DbGljaz17KCkgPT4gb25DYW5jZWwoY2xvc2UpfT5cbiAgICAgICAgICAgICAgICAgICAge2NhbmNlbExhYmVsfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdD17OH1cbiAgICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGlzTG9hZGluZz17aXNDb25maXJtTG9hZGluZ31cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0NvbmZpcm1EaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ29uZmlybShjbG9zZSl9XG4gICAgICAgICAgICAgICAgICBpbnRlbnQ9e2ludGVudH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Y29uZmlybUxhYmVsfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9QYW5lPlxuICAgICAgICA8L1BhbmU+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxPdmVybGF5XG4gICAgICAgIGlzU2hvd249e2lzU2hvd259XG4gICAgICAgIHNob3VsZENsb3NlT25DbGljaz17c2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGlja31cbiAgICAgICAgc2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzPXtzaG91bGRDbG9zZU9uRXNjYXBlUHJlc3N9XG4gICAgICAgIG9uRXhpdGVkPXtvbkNsb3NlQ29tcGxldGV9XG4gICAgICAgIG9uRW50ZXJlZD17b25PcGVuQ29tcGxldGV9XG4gICAgICAgIGNvbnRhaW5lclByb3BzPXt7XG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgLi4ub3ZlcmxheVByb3BzXG4gICAgICAgIH19XG4gICAgICAgIHByZXZlbnRCb2R5U2Nyb2xsaW5nPXtwcmV2ZW50Qm9keVNjcm9sbGluZ31cbiAgICAgID5cbiAgICAgICAgeyh7IHN0YXRlLCBjbG9zZSB9KSA9PiAoXG4gICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgIHJvbGU9XCJkaWFsb2dcIlxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgZWxldmF0aW9uPXs0fVxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXs4fVxuICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgbWF4V2lkdGg9e21heFdpZHRofVxuICAgICAgICAgICAgbWF4SGVpZ2h0PXttYXhIZWlnaHR9XG4gICAgICAgICAgICBtYXJnaW5YPXtzaWRlT2Zmc2V0V2l0aFVuaXR9XG4gICAgICAgICAgICBtYXJnaW5ZPXt0b3BPZmZzZXRXaXRoVW5pdH1cbiAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgY3NzPXthbmltYXRpb25TdHlsZXN9XG4gICAgICAgICAgICBkYXRhLXN0YXRlPXtzdGF0ZX1cbiAgICAgICAgICAgIHsuLi5jb250YWluZXJQcm9wc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cmVuZGVySGVhZGVyKGNsb3NlKX1cblxuICAgICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgICAgZGF0YS1zdGF0ZT17c3RhdGV9XG4gICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c9XCJhdXRvXCJcbiAgICAgICAgICAgICAgcGFkZGluZz17MTZ9XG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgICBtaW5IZWlnaHQ9e21pbkhlaWdodENvbnRlbnR9XG4gICAgICAgICAgICAgIHsuLi5jb250ZW50Q29udGFpbmVyUHJvcHN9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxQYW5lPnt0aGlzLnJlbmRlckNoaWxkcmVuKGNsb3NlKX08L1BhbmU+XG4gICAgICAgICAgICA8L1BhbmU+XG5cbiAgICAgICAgICAgIHtyZW5kZXJGb290ZXIoY2xvc2UpfVxuICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgKX1cbiAgICAgIDwvT3ZlcmxheT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKERpYWxvZylcbiJdfQ==