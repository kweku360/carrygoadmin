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
import Box, { splitBoxProps } from 'ui-box';
import { SearchIcon } from '../../icons';
import { TextInput } from '../../text-input';
import { withTheme } from '../../theme';
import { StackingOrder } from '../../constants';

var SearchInput = /*#__PURE__*/function (_PureComponent) {
  _inherits(SearchInput, _PureComponent);

  var _super = _createSuper(SearchInput);

  function SearchInput() {
    _classCallCheck(this, SearchInput);

    return _super.apply(this, arguments);
  }

  _createClass(SearchInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          appearance = _this$props.appearance,
          disabled = _this$props.disabled,
          height = _this$props.height,
          props = _objectWithoutProperties(_this$props, ["theme", "appearance", "disabled", "height"]);

      var _splitBoxProps = splitBoxProps(props),
          matchedProps = _splitBoxProps.matchedProps,
          remainingProps = _splitBoxProps.remainingProps;

      var width = matchedProps.width;
      var iconSize = theme.getIconSizeForInput(height);
      return React.createElement(Box, _extends({
        position: "relative",
        display: "inline-flex",
        height: height
      }, matchedProps), React.createElement(Box, {
        height: height,
        width: height,
        pointerEvents: "none",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }, React.createElement(SearchIcon, {
        color: "default",
        zIndex: StackingOrder.FOCUSED + 1,
        size: iconSize
      })), React.createElement(TextInput, _extends({
        height: height,
        paddingLeft: height,
        appearance: appearance,
        disabled: disabled,
        width: width,
        type: "search"
      }, remainingProps)));
    }
  }]);

  return SearchInput;
}(PureComponent);

SearchInput.displayName = "SearchInput";

_defineProperty(SearchInput, "propTypes", _objectSpread({}, TextInput.propTypes));

_defineProperty(SearchInput, "defaultProps", {
  height: 32,
  appearance: 'default'
});

export default withTheme(SearchInput);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWFyY2gtaW5wdXQvc3JjL1NlYXJjaElucHV0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIkJveCIsInNwbGl0Qm94UHJvcHMiLCJTZWFyY2hJY29uIiwiVGV4dElucHV0Iiwid2l0aFRoZW1lIiwiU3RhY2tpbmdPcmRlciIsIlNlYXJjaElucHV0IiwicHJvcHMiLCJ0aGVtZSIsImFwcGVhcmFuY2UiLCJkaXNhYmxlZCIsImhlaWdodCIsIm1hdGNoZWRQcm9wcyIsInJlbWFpbmluZ1Byb3BzIiwid2lkdGgiLCJpY29uU2l6ZSIsImdldEljb25TaXplRm9ySW5wdXQiLCJGT0NVU0VEIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsR0FBUCxJQUFjQyxhQUFkLFFBQW1DLFFBQW5DO0FBQ0EsU0FBU0MsVUFBVCxRQUEyQixhQUEzQjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsa0JBQTFCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixhQUExQjtBQUNBLFNBQVNDLGFBQVQsUUFBOEIsaUJBQTlCOztJQUVNQyxXOzs7Ozs7Ozs7Ozs7OzZCQWFLO0FBQUEsd0JBQ21ELEtBQUtDLEtBRHhEO0FBQUEsVUFDQ0MsS0FERCxlQUNDQSxLQUREO0FBQUEsVUFDUUMsVUFEUixlQUNRQSxVQURSO0FBQUEsVUFDb0JDLFFBRHBCLGVBQ29CQSxRQURwQjtBQUFBLFVBQzhCQyxNQUQ5QixlQUM4QkEsTUFEOUI7QUFBQSxVQUN5Q0osS0FEekM7O0FBQUEsMkJBRWtDTixhQUFhLENBQUNNLEtBQUQsQ0FGL0M7QUFBQSxVQUVDSyxZQUZELGtCQUVDQSxZQUZEO0FBQUEsVUFFZUMsY0FGZixrQkFFZUEsY0FGZjs7QUFBQSxVQUdDQyxLQUhELEdBR1dGLFlBSFgsQ0FHQ0UsS0FIRDtBQUlQLFVBQU1DLFFBQVEsR0FBR1AsS0FBSyxDQUFDUSxtQkFBTixDQUEwQkwsTUFBMUIsQ0FBakI7QUFFQSxhQUNFLG9CQUFDLEdBQUQ7QUFDRSxRQUFBLFFBQVEsRUFBQyxVQURYO0FBRUUsUUFBQSxPQUFPLEVBQUMsYUFGVjtBQUdFLFFBQUEsTUFBTSxFQUFFQTtBQUhWLFNBSU1DLFlBSk4sR0FNRSxvQkFBQyxHQUFEO0FBQ0UsUUFBQSxNQUFNLEVBQUVELE1BRFY7QUFFRSxRQUFBLEtBQUssRUFBRUEsTUFGVDtBQUdFLFFBQUEsYUFBYSxFQUFDLE1BSGhCO0FBSUUsUUFBQSxRQUFRLEVBQUMsVUFKWDtBQUtFLFFBQUEsT0FBTyxFQUFDLE1BTFY7QUFNRSxRQUFBLGNBQWMsRUFBQyxRQU5qQjtBQU9FLFFBQUEsVUFBVSxFQUFDO0FBUGIsU0FTRSxvQkFBQyxVQUFEO0FBQ0UsUUFBQSxLQUFLLEVBQUMsU0FEUjtBQUVFLFFBQUEsTUFBTSxFQUFFTixhQUFhLENBQUNZLE9BQWQsR0FBd0IsQ0FGbEM7QUFHRSxRQUFBLElBQUksRUFBRUY7QUFIUixRQVRGLENBTkYsRUFxQkUsb0JBQUMsU0FBRDtBQUNFLFFBQUEsTUFBTSxFQUFFSixNQURWO0FBRUUsUUFBQSxXQUFXLEVBQUVBLE1BRmY7QUFHRSxRQUFBLFVBQVUsRUFBRUYsVUFIZDtBQUlFLFFBQUEsUUFBUSxFQUFFQyxRQUpaO0FBS0UsUUFBQSxLQUFLLEVBQUVJLEtBTFQ7QUFNRSxRQUFBLElBQUksRUFBQztBQU5QLFNBT01ELGNBUE4sRUFyQkYsQ0FERjtBQWlDRDs7OztFQXBEdUJkLGE7O0FBQXBCTyxXOztnQkFBQUEsVyxpQ0FLQ0gsU0FBUyxDQUFDZSxTOztnQkFMWFosVyxrQkFRa0I7QUFDcEJLLEVBQUFBLE1BQU0sRUFBRSxFQURZO0FBRXBCRixFQUFBQSxVQUFVLEVBQUU7QUFGUSxDOztBQStDeEIsZUFBZUwsU0FBUyxDQUFDRSxXQUFELENBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBCb3gsIHsgc3BsaXRCb3hQcm9wcyB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IFNlYXJjaEljb24gfSBmcm9tICcuLi8uLi9pY29ucydcbmltcG9ydCB7IFRleHRJbnB1dCB9IGZyb20gJy4uLy4uL3RleHQtaW5wdXQnXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCB7IFN0YWNraW5nT3JkZXIgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5cbmNsYXNzIFNlYXJjaElucHV0IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIFRleHRJbnB1dCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uVGV4dElucHV0LnByb3BUeXBlc1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6IDMyLFxuICAgIGFwcGVhcmFuY2U6ICdkZWZhdWx0J1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGhlbWUsIGFwcGVhcmFuY2UsIGRpc2FibGVkLCBoZWlnaHQsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBtYXRjaGVkUHJvcHMsIHJlbWFpbmluZ1Byb3BzIH0gPSBzcGxpdEJveFByb3BzKHByb3BzKVxuICAgIGNvbnN0IHsgd2lkdGggfSA9IG1hdGNoZWRQcm9wc1xuICAgIGNvbnN0IGljb25TaXplID0gdGhlbWUuZ2V0SWNvblNpemVGb3JJbnB1dChoZWlnaHQpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgZGlzcGxheT1cImlubGluZS1mbGV4XCJcbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIHsuLi5tYXRjaGVkUHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICB3aWR0aD17aGVpZ2h0fVxuICAgICAgICAgIHBvaW50ZXJFdmVudHM9XCJub25lXCJcbiAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPFNlYXJjaEljb25cbiAgICAgICAgICAgIGNvbG9yPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICB6SW5kZXg9e1N0YWNraW5nT3JkZXIuRk9DVVNFRCArIDF9XG4gICAgICAgICAgICBzaXplPXtpY29uU2l6ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIHBhZGRpbmdMZWZ0PXtoZWlnaHR9XG4gICAgICAgICAgYXBwZWFyYW5jZT17YXBwZWFyYW5jZX1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgIHsuLi5yZW1haW5pbmdQcm9wc31cbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoU2VhcmNoSW5wdXQpXG4iXX0=