import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import { css } from 'glamor';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import { Pane, Card } from '../../layers';
import { Portal } from '../../portal';
import { Paragraph, Heading } from '../../typography';
import { Button, IconButton } from '../../buttons';
import absolutePositions from '../../constants/src/AbsolutePosition';
import positions from '../../constants/src/Position';
import { CrossIcon } from '../../icons';
var animationEasing = {
  deceleration: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  acceleration: "cubic-bezier(0.4, 0.0, 1, 1)",
  spring: "cubic-bezier(0.175, 0.885, 0.320, 1.175)"
};
var ANIMATION_DURATION = 240;
var openAnimation = css.keyframes('openAnimation', {
  from: {
    transform: 'translateY(100%)'
  },
  to: {
    transform: 'translateY(0)'
  }
});
var closeAnimation = css.keyframes('closeAnimation', {
  from: {
    transform: 'scale(1)',
    opacity: 1
  },
  to: {
    transform: 'scale(0.9)',
    opacity: 0
  }
});
var animationStyles = {
  '&[data-state="entering"], &[data-state="entered"]': {
    animation: "".concat(openAnimation, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.spring, " both")
  },
  '&[data-state="exiting"]': {
    animation: "".concat(closeAnimation, " 120ms ").concat(animationEasing.acceleration, " both")
  }
};

var CornerDialog = /*#__PURE__*/function (_PureComponent) {
  _inherits(CornerDialog, _PureComponent);

  var _super = _createSuper(CornerDialog);

  function CornerDialog(props) {
    var _this;

    _classCallCheck(this, CornerDialog);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleExited", function () {
      _this.setState({
        exiting: false,
        exited: true
      });

      _this.props.onCloseComplete();
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancel", function () {
      _this.props.onCancel(_this.handleClose);
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      _this.setState({
        exiting: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleConfirm", function () {
      _this.props.onConfirm(_this.handleClose);
    });

    _defineProperty(_assertThisInitialized(_this), "renderChildren", function () {
      var children = _this.props.children;

      if (typeof children === 'function') {
        return children({
          close: _this.handleClose
        });
      }

      if (typeof children === 'string') {
        return React.createElement(Paragraph, {
          size: 400,
          color: "muted"
        }, children);
      }

      return children;
    });

    _this.state = {
      exiting: false,
      exited: !props.isShown
    };
    return _this;
  }

  _createClass(CornerDialog, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.isShown && this.props.isShown) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          exited: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          title = _this$props.title,
          width = _this$props.width,
          intent = _this$props.intent,
          isShown = _this$props.isShown,
          hasFooter = _this$props.hasFooter,
          hasCancel = _this$props.hasCancel,
          hasClose = _this$props.hasClose,
          cancelLabel = _this$props.cancelLabel,
          confirmLabel = _this$props.confirmLabel,
          onOpenComplete = _this$props.onOpenComplete,
          _this$props$container = _this$props.containerProps,
          containerProps = _this$props$container === void 0 ? {} : _this$props$container,
          position = _this$props.position;
      var _this$state = this.state,
          exiting = _this$state.exiting,
          exited = _this$state.exited;
      if (exited) return null;
      return React.createElement(Portal, null, React.createElement(Transition, {
        appear: true,
        unmountOnExit: true,
        timeout: ANIMATION_DURATION,
        "in": isShown && !exiting,
        onExited: this.handleExited,
        onEntered: onOpenComplete
      }, function (state) {
        return React.createElement(Card, _extends({
          role: "dialog",
          backgroundColor: "white",
          elevation: 4,
          width: width,
          css: animationStyles,
          "data-state": state,
          padding: 32,
          position: "fixed"
        }, absolutePositions[Object.keys(absolutePositions).includes(position) ? position : positions.BOTTOM_RIGHT], containerProps), React.createElement(Pane, {
          display: "flex",
          alignItems: "center",
          marginBottom: 12
        }, React.createElement(Heading, {
          is: "h4",
          size: 600,
          flex: "1"
        }, title), hasClose && React.createElement(IconButton, {
          height: 32,
          icon: React.createElement(CrossIcon, null),
          appearance: "minimal",
          onClick: _this2.handleClose
        })), React.createElement(Pane, {
          overflowY: "auto",
          "data-state": state
        }, _this2.renderChildren()), hasFooter && React.createElement(Pane, {
          marginTop: 24,
          flexShrink: 0,
          display: "flex",
          flexDirection: "row-reverse"
        }, React.createElement(Button, {
          appearance: "primary",
          intent: intent,
          marginLeft: 8,
          onClick: _this2.handleConfirm
        }, confirmLabel), hasCancel && React.createElement(Button, {
          onClick: _this2.handleCancel
        }, cancelLabel)));
      }));
    }
  }]);

  return CornerDialog;
}(PureComponent);

CornerDialog.displayName = "CornerDialog";

_defineProperty(CornerDialog, "propTypes", {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   * When passing a string, <Paragraph size={400} color="muted" /> is used to wrap the string.
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

  /**
   * The intent of the CornerDialog. Used for the button.
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
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: PropTypes.func,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: PropTypes.func,

  /**
   * When true, the footer with the cancel and confirm button is shown.
   */
  hasFooter: PropTypes.bool,

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
   * When true, the cancel button is shown.
   */
  hasCancel: PropTypes.bool,

  /**
   * When true, the close button is shown.
   */
  hasClose: PropTypes.bool,

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
   * Width of the Dialog.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Props that are passed to the dialog container.
   */
  containerProps: PropTypes.object,

  /**
   * Props that will set position of corner dialog
   */
  position: PropTypes.oneOf([positions.TOP_LEFT, positions.TOP_RIGHT, positions.BOTTOM_LEFT, positions.BOTTOM_RIGHT])
});

_defineProperty(CornerDialog, "defaultProps", {
  width: 392,
  intent: 'none',
  hasFooter: true,
  confirmLabel: 'Learn More',
  hasCancel: true,
  hasClose: true,
  cancelLabel: 'Close',
  onCancel: function onCancel(close) {
    return close();
  },
  onConfirm: function onConfirm(close) {
    return close();
  },
  onCloseComplete: function onCloseComplete() {},
  position: positions.BOTTOM_RIGHT
});

export { CornerDialog as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JuZXItZGlhbG9nL3NyYy9Db3JuZXJEaWFsb2cuanMiXSwibmFtZXMiOlsiY3NzIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiVHJhbnNpdGlvbiIsIlBhbmUiLCJDYXJkIiwiUG9ydGFsIiwiUGFyYWdyYXBoIiwiSGVhZGluZyIsIkJ1dHRvbiIsIkljb25CdXR0b24iLCJhYnNvbHV0ZVBvc2l0aW9ucyIsInBvc2l0aW9ucyIsIkNyb3NzSWNvbiIsImFuaW1hdGlvbkVhc2luZyIsImRlY2VsZXJhdGlvbiIsImFjY2VsZXJhdGlvbiIsInNwcmluZyIsIkFOSU1BVElPTl9EVVJBVElPTiIsIm9wZW5BbmltYXRpb24iLCJrZXlmcmFtZXMiLCJmcm9tIiwidHJhbnNmb3JtIiwidG8iLCJjbG9zZUFuaW1hdGlvbiIsIm9wYWNpdHkiLCJhbmltYXRpb25TdHlsZXMiLCJhbmltYXRpb24iLCJDb3JuZXJEaWFsb2ciLCJwcm9wcyIsInNldFN0YXRlIiwiZXhpdGluZyIsImV4aXRlZCIsIm9uQ2xvc2VDb21wbGV0ZSIsIm9uQ2FuY2VsIiwiaGFuZGxlQ2xvc2UiLCJvbkNvbmZpcm0iLCJjaGlsZHJlbiIsImNsb3NlIiwic3RhdGUiLCJpc1Nob3duIiwicHJldlByb3BzIiwidGl0bGUiLCJ3aWR0aCIsImludGVudCIsImhhc0Zvb3RlciIsImhhc0NhbmNlbCIsImhhc0Nsb3NlIiwiY2FuY2VsTGFiZWwiLCJjb25maXJtTGFiZWwiLCJvbk9wZW5Db21wbGV0ZSIsImNvbnRhaW5lclByb3BzIiwicG9zaXRpb24iLCJoYW5kbGVFeGl0ZWQiLCJPYmplY3QiLCJrZXlzIiwiaW5jbHVkZXMiLCJCT1RUT01fUklHSFQiLCJyZW5kZXJDaGlsZHJlbiIsImhhbmRsZUNvbmZpcm0iLCJoYW5kbGVDYW5jZWwiLCJvbmVPZlR5cGUiLCJub2RlIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJvbmVPZiIsImJvb2wiLCJzdHJpbmciLCJudW1i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QURhO0FBRXBCQyxFQUFBQSxNQUFNLEVBQUUsTUFGWTtBQUdwQkMsRUFBQUEsU0FBUyxFQUFFLElBSFM7QUFJcEJJLEVBQUFBLFlBQVksRUFBRSxZQUpNO0FBS3BCSCxFQUFBQSxTQUFTLEVBQUUsSUFMUztBQU1wQkMsRUFBQUEsUUFBUSxFQUFFLElBTlU7QUFPcEJDLEVBQUFBLFdBQVcsRUFBRSxPQVBPO0FBUXBCZCxFQUFBQSxRQUFRLEVBQUUsa0JBQUFJLEtBQUs7QUFBQSxXQUFJQSxLQUFLLEVBQVQ7QUFBQSxHQVJLO0FBU3BCRixFQUFBQSxTQUFTLEVBQUUsbUJBQUFFLEtBQUs7QUFBQSxXQUFJQSxLQUFLLEVBQVQ7QUFBQSxHQVRJO0FBVXBCTCxFQUFBQSxlQUFlLEVBQUUsMkJBQU0sQ0FBRSxDQVZMO0FBV3BCbUIsRUFBQUEsUUFBUSxFQUFFeEMsU0FBUyxDQUFDNkM7QUFYQSxDOztTQWpHSDdCLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uJ1xuaW1wb3J0IHsgUGFuZSwgQ2FyZCB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IFBvcnRhbCB9IGZyb20gJy4uLy4uL3BvcnRhbCdcbmltcG9ydCB7IFBhcmFncmFwaCwgSGVhZGluZyB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyBCdXR0b24sIEljb25CdXR0b24gfSBmcm9tICcuLi8uLi9idXR0b25zJ1xuaW1wb3J0IGFic29sdXRlUG9zaXRpb25zIGZyb20gJy4uLy4uL2NvbnN0YW50cy9zcmMvQWJzb2x1dGVQb3NpdGlvbidcbmltcG9ydCBwb3NpdGlvbnMgZnJvbSAnLi4vLi4vY29uc3RhbnRzL3NyYy9Qb3NpdGlvbidcbmltcG9ydCB7IENyb3NzSWNvbiB9IGZyb20gJy4uLy4uL2ljb25zJ1xuXG5jb25zdCBhbmltYXRpb25FYXNpbmcgPSB7XG4gIGRlY2VsZXJhdGlvbjogYGN1YmljLWJlemllcigwLjAsIDAuMCwgMC4yLCAxKWAsXG4gIGFjY2VsZXJhdGlvbjogYGN1YmljLWJlemllcigwLjQsIDAuMCwgMSwgMSlgLFxuICBzcHJpbmc6IGBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyMCwgMS4xNzUpYFxufVxuXG5jb25zdCBBTklNQVRJT05fRFVSQVRJT04gPSAyNDBcblxuY29uc3Qgb3BlbkFuaW1hdGlvbiA9IGNzcy5rZXlmcmFtZXMoJ29wZW5BbmltYXRpb24nLCB7XG4gIGZyb206IHtcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJ1xuICB9LFxuICB0bzoge1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknXG4gIH1cbn0pXG5cbmNvbnN0IGNsb3NlQW5pbWF0aW9uID0gY3NzLmtleWZyYW1lcygnY2xvc2VBbmltYXRpb24nLCB7XG4gIGZyb206IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKScsXG4gICAgb3BhY2l0eTogMVxuICB9LFxuICB0bzoge1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOSknLFxuICAgIG9wYWNpdHk6IDBcbiAgfVxufSlcblxuY29uc3QgYW5pbWF0aW9uU3R5bGVzID0ge1xuICAnJltkYXRhLXN0YXRlPVwiZW50ZXJpbmdcIl0sICZbZGF0YS1zdGF0ZT1cImVudGVyZWRcIl0nOiB7XG4gICAgYW5pbWF0aW9uOiBgJHtvcGVuQW5pbWF0aW9ufSAke0FOSU1BVElPTl9EVVJBVElPTn1tcyAke2FuaW1hdGlvbkVhc2luZy5zcHJpbmd9IGJvdGhgXG4gIH0sXG4gICcmW2RhdGEtc3RhdGU9XCJleGl0aW5nXCJdJzoge1xuICAgIGFuaW1hdGlvbjogYCR7Y2xvc2VBbmltYXRpb259IDEyMG1zICR7YW5pbWF0aW9uRWFzaW5nLmFjY2VsZXJhdGlvbn0gYm90aGBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3JuZXJEaWFsb2cgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDaGlsZHJlbiBjYW4gYmUgYSBzdHJpbmcsIG5vZGUgb3IgYSBmdW5jdGlvbiBhY2NlcHRpbmcgYCh7IGNsb3NlIH0pYC5cbiAgICAgKiBXaGVuIHBhc3NpbmcgYSBzdHJpbmcsIDxQYXJhZ3JhcGggc2l6ZT17NDAwfSBjb2xvcj1cIm11dGVkXCIgLz4gaXMgdXNlZCB0byB3cmFwIHRoZSBzdHJpbmcuXG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW50ZW50IG9mIHRoZSBDb3JuZXJEaWFsb2cuIFVzZWQgZm9yIHRoZSBidXR0b24uXG4gICAgICovXG4gICAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoWydub25lJywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInXSlcbiAgICAgIC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgZGlhbG9nIGlzIHNob3duLlxuICAgICAqL1xuICAgIGlzU2hvd246IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGl0bGUgb2YgdGhlIERpYWxvZy4gVGl0bGVzIHNob3VsZCB1c2UgVGl0bGUgQ2FzZS5cbiAgICAgKi9cbiAgICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGV4aXQgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZS5cbiAgICAgKi9cbiAgICBvbkNsb3NlQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBlbnRlciB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlLlxuICAgICAqL1xuICAgIG9uT3BlbkNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGZvb3RlciB3aXRoIHRoZSBjYW5jZWwgYW5kIGNvbmZpcm0gYnV0dG9uIGlzIHNob3duLlxuICAgICAqL1xuICAgIGhhc0Zvb3RlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGNvbmZpcm0gYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAgICogVGhpcyBkb2VzIG5vdCBjbG9zZSB0aGUgRGlhbG9nLiBBIGNsb3NlIGZ1bmN0aW9uIHdpbGwgYmUgcGFzc2VkXG4gICAgICogYXMgYSBwYXJhbWF0ZXIgeW91IGNhbiB1c2UgdG8gY2xvc2UgdGhlIGRpYWxvZy5cbiAgICAgKlxuICAgICAqIGBvbkNvbmZpcm09eyhjbG9zZSkgPT4gY2xvc2UoKX1gXG4gICAgICovXG4gICAgb25Db25maXJtOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIExhYmVsIG9mIHRoZSBjb25maXJtIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBjb25maXJtTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBjYW5jZWwgYnV0dG9uIGlzIHNob3duLlxuICAgICAqL1xuICAgIGhhc0NhbmNlbDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBjbG9zZSBidXR0b24gaXMgc2hvd24uXG4gICAgICovXG4gICAgaGFzQ2xvc2U6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBjYW5jZWwgYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAgICogVGhpcyBjbG9zZXMgdGhlIERpYWxvZyBieSBkZWZhdWx0LlxuICAgICAqXG4gICAgICogYG9uQ2FuY2VsPXsoY2xvc2UpID0+IGNsb3NlKCl9YFxuICAgICAqL1xuICAgIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIExhYmVsIG9mIHRoZSBjYW5jZWwgYnV0dG9uLlxuICAgICAqL1xuICAgIGNhbmNlbExhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogV2lkdGggb2YgdGhlIERpYWxvZy5cbiAgICAgKi9cbiAgICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuXG4gICAgLyoqXG4gICAgICogUHJvcHMgdGhhdCBhcmUgcGFzc2VkIHRvIHRoZSBkaWFsb2cgY29udGFpbmVyLlxuICAgICAqL1xuICAgIGNvbnRhaW5lclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgLyoqXG4gICAgICogUHJvcHMgdGhhdCB3aWxsIHNldCBwb3NpdGlvbiBvZiBjb3JuZXIgZGlhbG9nXG4gICAgICovXG4gICAgcG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBwb3NpdGlvbnMuVE9QX0xFRlQsXG4gICAgICBwb3NpdGlvbnMuVE9QX1JJR0hULFxuICAgICAgcG9zaXRpb25zLkJPVFRPTV9MRUZULFxuICAgICAgcG9zaXRpb25zLkJPVFRPTV9SSUdIVFxuICAgIF0pXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHdpZHRoOiAzOTIsXG4gICAgaW50ZW50OiAnbm9uZScsXG4gICAgaGFzRm9vdGVyOiB0cnVlLFxuICAgIGNvbmZpcm1MYWJlbDogJ0xlYXJuIE1vcmUnLFxuICAgIGhhc0NhbmNlbDogdHJ1ZSxcbiAgICBoYXNDbG9zZTogdHJ1ZSxcbiAgICBjYW5jZWxMYWJlbDogJ0Nsb3NlJyxcbiAgICBvbkNhbmNlbDogY2xvc2UgPT4gY2xvc2UoKSxcbiAgICBvbkNvbmZpcm06IGNsb3NlID0+IGNsb3NlKCksXG4gICAgb25DbG9zZUNvbXBsZXRlOiAoKSA9PiB7fSxcbiAgICBwb3NpdGlvbjogcG9zaXRpb25zLkJPVFRPTV9SSUdIVFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBleGl0aW5nOiBmYWxzZSxcbiAgICAgIGV4aXRlZDogIXByb3BzLmlzU2hvd25cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKCFwcmV2UHJvcHMuaXNTaG93biAmJiB0aGlzLnByb3BzLmlzU2hvd24pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kaWQtdXBkYXRlLXNldC1zdGF0ZVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGV4aXRlZDogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRXhpdGVkID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBleGl0aW5nOiBmYWxzZSwgZXhpdGVkOiB0cnVlIH0pXG4gICAgdGhpcy5wcm9wcy5vbkNsb3NlQ29tcGxldGUoKVxuICB9XG5cbiAgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25DYW5jZWwodGhpcy5oYW5kbGVDbG9zZSlcbiAgfVxuXG4gIGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBleGl0aW5nOiB0cnVlIH0pXG4gIH1cblxuICBoYW5kbGVDb25maXJtID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25Db25maXJtKHRoaXMuaGFuZGxlQ2xvc2UpXG4gIH1cblxuICByZW5kZXJDaGlsZHJlbiA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuKHsgY2xvc2U6IHRoaXMuaGFuZGxlQ2xvc2UgfSlcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFBhcmFncmFwaCBzaXplPXs0MDB9IGNvbG9yPVwibXV0ZWRcIj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiBjaGlsZHJlblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRpdGxlLFxuICAgICAgd2lkdGgsXG4gICAgICBpbnRlbnQsXG4gICAgICBpc1Nob3duLFxuICAgICAgaGFzRm9vdGVyLFxuICAgICAgaGFzQ2FuY2VsLFxuICAgICAgaGFzQ2xvc2UsXG4gICAgICBjYW5jZWxMYWJlbCxcbiAgICAgIGNvbmZpcm1MYWJlbCxcbiAgICAgIG9uT3BlbkNvbXBsZXRlLFxuICAgICAgY29udGFpbmVyUHJvcHMgPSB7fSxcbiAgICAgIHBvc2l0aW9uXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHsgZXhpdGluZywgZXhpdGVkIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBpZiAoZXhpdGVkKSByZXR1cm4gbnVsbFxuICAgIHJldHVybiAoXG4gICAgICA8UG9ydGFsPlxuICAgICAgICA8VHJhbnNpdGlvblxuICAgICAgICAgIGFwcGVhclxuICAgICAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgICAgICB0aW1lb3V0PXtBTklNQVRJT05fRFVSQVRJT059XG4gICAgICAgICAgaW49e2lzU2hvd24gJiYgIWV4aXRpbmd9XG4gICAgICAgICAgb25FeGl0ZWQ9e3RoaXMuaGFuZGxlRXhpdGVkfVxuICAgICAgICAgIG9uRW50ZXJlZD17b25PcGVuQ29tcGxldGV9XG4gICAgICAgID5cbiAgICAgICAgICB7c3RhdGUgPT4gKFxuICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgZWxldmF0aW9uPXs0fVxuICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAgIGNzcz17YW5pbWF0aW9uU3R5bGVzfVxuICAgICAgICAgICAgICBkYXRhLXN0YXRlPXtzdGF0ZX1cbiAgICAgICAgICAgICAgcGFkZGluZz17MzJ9XG4gICAgICAgICAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxuICAgICAgICAgICAgICB7Li4uYWJzb2x1dGVQb3NpdGlvbnNbXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoYWJzb2x1dGVQb3NpdGlvbnMpLmluY2x1ZGVzKHBvc2l0aW9uKVxuICAgICAgICAgICAgICAgICAgPyBwb3NpdGlvblxuICAgICAgICAgICAgICAgICAgOiBwb3NpdGlvbnMuQk9UVE9NX1JJR0hUXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIHsuLi5jb250YWluZXJQcm9wc31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFBhbmUgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgbWFyZ2luQm90dG9tPXsxMn0+XG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgaXM9XCJoNFwiIHNpemU9ezYwMH0gZmxleD1cIjFcIj5cbiAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAge2hhc0Nsb3NlICYmIChcbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzJ9XG4gICAgICAgICAgICAgICAgICAgIGljb249ezxDcm9zc0ljb24gLz59XG4gICAgICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJtaW5pbWFsXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9QYW5lPlxuXG4gICAgICAgICAgICAgIDxQYW5lIG92ZXJmbG93WT1cImF1dG9cIiBkYXRhLXN0YXRlPXtzdGF0ZX0+XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ2hpbGRyZW4oKX1cbiAgICAgICAgICAgICAgPC9QYW5lPlxuXG4gICAgICAgICAgICAgIHtoYXNGb290ZXIgJiYgKFxuICAgICAgICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9ezI0fVxuICAgICAgICAgICAgICAgICAgZmxleFNocmluaz17MH1cbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3ctcmV2ZXJzZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGludGVudD17aW50ZW50fVxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0PXs4fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNvbmZpcm19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtjb25maXJtTGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIHtoYXNDYW5jZWwgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2FuY2VsfT57Y2FuY2VsTGFiZWx9PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICApfVxuICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICA8L1BvcnRhbD5cbiAgICApXG4gIH1cbn1cbiJdfQ==