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

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Pane } from '../../layers';
import { withTheme } from '../../theme';
import safeInvoke from '../../lib/safe-invoke';
import { TableRowProvider } from './TableRowContext';
import manageTableRowFocusInteraction from './manageTableRowFocusInteraction';

var TableRow = /*#__PURE__*/function (_PureComponent) {
  _inherits(TableRow, _PureComponent);

  var _super = _createSuper(TableRow);

  function TableRow() {
    var _this;

    _classCallCheck(this, TableRow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      if (typeof _this.props.onClick === 'function') {
        _this.props.onClick(e);
      }

      if (_this.props.isSelectable) {
        if (_this.props.isSelected) {
          _this.props.onDeselect();
        } else {
          _this.props.onSelect();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (e) {
      if (_this.props.isSelectable) {
        var key = e.key;

        if (key === 'Enter' || key === ' ') {
          _this.props.onSelect();

          e.preventDefault();
        } else if (key === 'ArrowUp' || key === 'ArrowDown') {
          try {
            manageTableRowFocusInteraction(key, _this.mainRef);
          } catch (_) {}
        } else if (key === 'Escape') {
          if (_this.mainRef) _this.mainRef.blur();
        }
      }

      _this.props.onKeyPress(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onRef", function (ref) {
      _this.mainRef = ref;
      safeInvoke(_this.props.innerRef, ref);
    });

    return _this;
  }

  _createClass(TableRow, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          innerRef = _this$props.innerRef,
          theme = _this$props.theme,
          className = _this$props.className,
          height = _this$props.height,
          children = _this$props.children,
          intent = _this$props.intent,
          appearance = _this$props.appearance,
          _this$props$tabIndex = _this$props.tabIndex,
          tabIndex = _this$props$tabIndex === void 0 ? -1 : _this$props$tabIndex,
          onClick = _this$props.onClick,
          onKeyPress = _this$props.onKeyPress,
          onSelect = _this$props.onSelect,
          onDeselect = _this$props.onDeselect,
          isHighlighted = _this$props.isHighlighted,
          isSelectable = _this$props.isSelectable,
          isSelected = _this$props.isSelected,
          props = _objectWithoutProperties(_this$props, ["innerRef", "theme", "className", "height", "children", "intent", "appearance", "tabIndex", "onClick", "onKeyPress", "onSelect", "onDeselect", "isHighlighted", "isSelectable", "isSelected"]);

      var themedClassName = theme.getRowClassName(appearance, intent);
      return React.createElement(TableRowProvider, {
        height: height
      }, React.createElement(Pane, _extends({
        innerRef: this.onRef,
        className: cx(themedClassName, className),
        display: "flex",
        "aria-selected": isHighlighted,
        "aria-current": isSelected,
        "data-isselectable": isSelectable,
        tabIndex: isSelectable ? tabIndex : undefined,
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown,
        height: height,
        borderBottom: "muted"
      }, props), children));
    }
  }]);

  return TableRow;
}(PureComponent);

TableRow.displayName = "TableRow";

_defineProperty(TableRow, "propTypes", _objectSpread({}, Pane.propTypes, {
  /**
   * The height of the row. Remember to add paddings when using "auto".
   */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,

  /**
   * Function that is called on click and enter/space keypress.
   */
  onSelect: PropTypes.func,

  /**
   * Function that is called on click and enter/space keypress.
   */
  onDeselect: PropTypes.func,

  /**
   * Makes the TableRow selectable.
   */
  isSelectable: PropTypes.bool,

  /**
   * Makes the TableRow selected.
   */
  isSelected: PropTypes.bool,

  /**
   * Manually set the TableRow to be highlighted.
   */
  isHighlighted: PropTypes.bool,

  /**
   * The intent of the alert.
   */
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * The appearance of the table row. Default theme only support default.
   */
  appearance: PropTypes.string.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired,

  /**
   * Class name passed to the table row.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
}));

_defineProperty(TableRow, "defaultProps", {
  intent: 'none',
  appearance: 'default',
  height: 48,
  onSelect: function onSelect() {},
  onDeselect: function onDeselect() {},
  onKeyPress: function onKeyPress() {}
});

export default withTheme(TableRow);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGVSb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiY3giLCJQYW5lIiwid2l0aFRoZW1lIiwic2FmZUludm9rZSIsIlRhYmxlUm93UHJvdmlkZXIiLCJtYW5hZ2VUYWJsZVJvd0ZvY3VzSW50ZXJhY3Rpb24iLCJUYWJsZVJvdyIsImUiLCJwcm9wcyIsIm9uQ2xpY2siLCJpc1NlbGVjdGFibGUiLCJpc1NlbGVjdGVkIiwib25EZXNlbGVjdCIsIm9uU2VsZWN0Iiwia2V5IiwicHJldmVudERlZmF1bHQiLCJtYWluUmVmIiwiXyIsImJsdXIiLCJvbktleVByZXNzIiwicmVmIiwiaW5uZXJSZWYiLCJ0aGVtZSIsImNsYXNzTmFtZSIsImhlaWdodCIsImNoaWxkcmVuIiwiaW50ZW50IiwiYXBwZWFyYW5jZSIsInRhYkluZGV4IiwiaXNIaWdobGlnaHRlZCIsInRoZW1lZENsYXNzTmFtZSIsImdldFJvd0NsYXNzTmFtZSIsIm9uUmVmIiwidW5kZWZpbmVkIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVLZXlEb3duIiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwibnVtYmVyIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJib29sIiwib25lT2YiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEVBQVAsTUFBZSxZQUFmO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixjQUFyQjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsYUFBMUI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLHVCQUF2QjtBQUNBLFNBQVNDLGdCQUFULFFBQWlDLG1CQUFqQztBQUNBLE9BQU9DLDhCQUFQLE1BQTJDLGtDQUEzQzs7SUFFTUMsUTs7Ozs7Ozs7Ozs7Ozs7OztrRUFzRVUsVUFBQUMsQ0FBQyxFQUFJO0FBQ2pCLFVBQUksT0FBTyxNQUFLQyxLQUFMLENBQVdDLE9BQWxCLEtBQThCLFVBQWxDLEVBQThDO0FBQzVDLGNBQUtELEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkYsQ0FBbkI7QUFDRDs7QUFFRCxVQUFJLE1BQUtDLEtBQUwsQ0FBV0UsWUFBZixFQUE2QjtBQUMzQixZQUFJLE1BQUtGLEtBQUwsQ0FBV0csVUFBZixFQUEyQjtBQUN6QixnQkFBS0gsS0FBTCxDQUFXSSxVQUFYO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsZ0JBQUtKLEtBQUwsQ0FBV0ssUUFBWDtBQUNEO0FBQ0Y7QUFDRixLOztvRUFFZSxVQUFBTixDQUFDLEVBQUk7QUFDbkIsVUFBSSxNQUFLQyxLQUFMLENBQVdFLFlBQWYsRUFBNkI7QUFBQSxZQUNuQkksR0FEbUIsR0FDWFAsQ0FEVyxDQUNuQk8sR0FEbUI7O0FBRTNCLFlBQUlBLEdBQUcsS0FBSyxPQUFSLElBQW1CQSxHQUFHLEtBQUssR0FBL0IsRUFBb0M7QUFDbEMsZ0JBQUtOLEtBQUwsQ0FBV0ssUUFBWDs7QUFDQU4sVUFBQUEsQ0FBQyxDQUFDUSxjQUFGO0FBQ0QsU0FIRCxNQUdPLElBQUlELEdBQUcsS0FBSyxTQUFSLElBQXFCQSxHQUFHLEtBQUssV0FBakMsRUFBOEM7QUFDbkQsY0FBSTtBQUNGVCxZQUFBQSw4QkFBOEIsQ0FBQ1MsR0FBRCxFQUFNLE1BQUtFLE9BQVgsQ0FBOUI7QUFDRCxXQUZELENBRUUsT0FBT0MsQ0FBUCxFQUFVLENBQUU7QUFDZixTQUpNLE1BSUEsSUFBSUgsR0FBRyxLQUFLLFFBQVosRUFBc0I7QUFDM0IsY0FBSSxNQUFLRSxPQUFULEVBQWtCLE1BQUtBLE9BQUwsQ0FBYUUsSUFBYjtBQUNuQjtBQUNGOztBQUVELFlBQUtWLEtBQUwsQ0FBV1csVUFBWCxDQUFzQlosQ0FBdEI7QUFDRCxLOzs0REFFTyxVQUFBYSxHQUFHLEVBQUk7QUFDYixZQUFLSixPQUFMLEdBQWVJLEdBQWY7QUFDQWpCLE1BQUFBLFVBQVUsQ0FBQyxNQUFLSyxLQUFMLENBQVdhLFFBQVosRUFBc0JELEdBQXRCLENBQVY7QUFDRCxLOzs7Ozs7OzZCQUVRO0FBQUEsd0JBcUJILEtBQUtaLEtBckJGO0FBQUEsVUFFTGEsUUFGSyxlQUVMQSxRQUZLO0FBQUEsVUFHTEMsS0FISyxlQUdMQSxLQUhLO0FBQUEsVUFJTEMsU0FKSyxlQUlMQSxTQUpLO0FBQUEsVUFLTEMsTUFMSyxlQUtMQSxNQUxLO0FBQUEsVUFNTEMsUUFOSyxlQU1MQSxRQU5LO0FBQUEsVUFPTEMsTUFQSyxlQU9MQSxNQVBLO0FBQUEsVUFRTEMsVUFSSyxlQVFMQSxVQVJLO0FBQUEsNkNBU0xDLFFBVEs7QUFBQSxVQVNMQSxRQVRLLHFDQVNNLENBQUMsQ0FUUDtBQUFBLFVBWUxuQixPQVpLLGVBWUxBLE9BWks7QUFBQSxVQWFMVSxVQWJLLGVBYUxBLFVBYks7QUFBQSxVQWNMTixRQWRLLGVBY0xBLFFBZEs7QUFBQSxVQWVMRCxVQWZLLGVBZUxBLFVBZks7QUFBQSxVQWlCTGlCLGFBakJLLGVBaUJMQSxhQWpCSztBQUFBLFVBa0JMbkIsWUFsQkssZUFrQkxBLFlBbEJLO0FBQUEsVUFtQkxDLFVBbkJLLGVBbUJMQSxVQW5CSztBQUFBLFVBb0JGSCxLQXBCRTs7QUFzQlAsVUFBTXNCLGVBQWUsR0FBR1IsS0FBSyxDQUFDUyxlQUFOLENBQXNCSixVQUF0QixFQUFrQ0QsTUFBbEMsQ0FBeEI7QUFFQSxhQUNFLG9CQUFDLGdCQUFEO0FBQWtCLFFBQUEsTUFBTSxFQUFFRjtBQUExQixTQUNFLG9CQUFDLElBQUQ7QUFDRSxRQUFBLFFBQVEsRUFBRSxLQUFLUSxLQURqQjtBQUVFLFFBQUEsU0FBUyxFQUFFaEMsRUFBRSxDQUFDOEIsZUFBRCxFQUFrQlAsU0FBbEIsQ0FGZjtBQUdFLFFBQUEsT0FBTyxFQUFDLE1BSFY7QUFJRSx5QkFBZU0sYUFKakI7QUFLRSx3QkFBY2xCLFVBTGhCO0FBTUUsNkJBQW1CRCxZQU5yQjtBQU9FLFFBQUEsUUFBUSxFQUFFQSxZQUFZLEdBQUdrQixRQUFILEdBQWNLLFNBUHRDO0FBUUUsUUFBQSxPQUFPLEVBQUUsS0FBS0MsV0FSaEI7QUFTRSxRQUFBLFNBQVMsRUFBRSxLQUFLQyxhQVRsQjtBQVVFLFFBQUEsTUFBTSxFQUFFWCxNQVZWO0FBV0UsUUFBQSxZQUFZLEVBQUM7QUFYZixTQVlNaEIsS0FaTixHQWNHaUIsUUFkSCxDQURGLENBREY7QUFvQkQ7Ozs7RUF2Sm9CM0IsYTs7QUFBakJRLFE7O2dCQUFBQSxRLGlDQUtDTCxJQUFJLENBQUNtQyxTO0FBRVI7OztBQUdBWixFQUFBQSxNQUFNLEVBQUV6QixTQUFTLENBQUNzQyxTQUFWLENBQW9CLENBQUN0QyxTQUFTLENBQUN1QyxNQUFYLEVBQW1CdkMsU0FBUyxDQUFDd0MsTUFBN0IsQ0FBcEIsRUFDTEMsVTs7QUFFSDs7O0FBR0EzQixFQUFBQSxRQUFRLEVBQUVkLFNBQVMsQ0FBQzBDLEk7O0FBRXBCOzs7QUFHQTdCLEVBQUFBLFVBQVUsRUFBRWIsU0FBUyxDQUFDMEMsSTs7QUFFdEI7OztBQUdBL0IsRUFBQUEsWUFBWSxFQUFFWCxTQUFTLENBQUMyQyxJOztBQUV4Qjs7O0FBR0EvQixFQUFBQSxVQUFVLEVBQUVaLFNBQVMsQ0FBQzJDLEk7O0FBRXRCOzs7QUFHQWIsRUFBQUEsYUFBYSxFQUFFOUIsU0FBUyxDQUFDMkMsSTs7QUFFekI7OztBQUdBaEIsRUFBQUEsTUFBTSxFQUFFM0IsU0FBUyxDQUFDNEMsS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxTQUFULEVBQW9CLFNBQXBCLEVBQStCLFFBQS9CLENBQWhCLEVBQ0xILFU7O0FBRUg7OztBQUdBYixFQUFBQSxVQUFVLEVBQUU1QixTQUFTLENBQUN3QyxNQUFWLENBQWlCQyxVOztBQUU3Qjs7O0FBR0FsQixFQUFBQSxLQUFLLEVBQUV2QixTQUFTLENBQUM2QyxNQUFWLENBQWlCSixVOztBQUV4Qjs7OztBQUlBakIsRUFBQUEsU0FBUyxFQUFFeEIsU0FBUyxDQUFDd0M7OztnQkExRG5CakMsUSxrQkE2RGtCO0FBQ3BCb0IsRUFBQUEsTUFBTSxFQUFFLE1BRFk7QUFFcEJDLEVBQUFBLFVBQVUsRUFBRSxTQUZRO0FBR3BCSCxFQUFBQSxNQUFNLEVBQUUsRUFIWTtBQUlwQlgsRUFBQUEsUUFBUSxFQUFFLG9CQUFNLENBQUUsQ0FKRTtBQUtwQkQsRUFBQUEsVUFBVSxFQUFFLHNCQUFNLENBQUUsQ0FMQTtBQU1wQk8sRUFBQUEsVUFBVSxFQUFFLHNCQUFNLENBQUU7QUFOQSxDOztBQTZGeEIsZUFBZWpCLFNBQVMsQ0FBQ0ksUUFBRCxDQUF4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCBzYWZlSW52b2tlIGZyb20gJy4uLy4uL2xpYi9zYWZlLWludm9rZSdcbmltcG9ydCB7IFRhYmxlUm93UHJvdmlkZXIgfSBmcm9tICcuL1RhYmxlUm93Q29udGV4dCdcbmltcG9ydCBtYW5hZ2VUYWJsZVJvd0ZvY3VzSW50ZXJhY3Rpb24gZnJvbSAnLi9tYW5hZ2VUYWJsZVJvd0ZvY3VzSW50ZXJhY3Rpb24nXG5cbmNsYXNzIFRhYmxlUm93IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIFBhbmUgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLlBhbmUucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgcm93LiBSZW1lbWJlciB0byBhZGQgcGFkZGluZ3Mgd2hlbiB1c2luZyBcImF1dG9cIi5cbiAgICAgKi9cbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKVxuICAgICAgLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBvbiBjbGljayBhbmQgZW50ZXIvc3BhY2Uga2V5cHJlc3MuXG4gICAgICovXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgb24gY2xpY2sgYW5kIGVudGVyL3NwYWNlIGtleXByZXNzLlxuICAgICAqL1xuICAgIG9uRGVzZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogTWFrZXMgdGhlIFRhYmxlUm93IHNlbGVjdGFibGUuXG4gICAgICovXG4gICAgaXNTZWxlY3RhYmxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIE1ha2VzIHRoZSBUYWJsZVJvdyBzZWxlY3RlZC5cbiAgICAgKi9cbiAgICBpc1NlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIE1hbnVhbGx5IHNldCB0aGUgVGFibGVSb3cgdG8gYmUgaGlnaGxpZ2h0ZWQuXG4gICAgICovXG4gICAgaXNIaWdobGlnaHRlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW50ZW50IG9mIHRoZSBhbGVydC5cbiAgICAgKi9cbiAgICBpbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbJ25vbmUnLCAnc3VjY2VzcycsICd3YXJuaW5nJywgJ2RhbmdlciddKVxuICAgICAgLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgdGFibGUgcm93LiBEZWZhdWx0IHRoZW1lIG9ubHkgc3VwcG9ydCBkZWZhdWx0LlxuICAgICAqL1xuICAgIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIENsYXNzIG5hbWUgcGFzc2VkIHRvIHRoZSB0YWJsZSByb3cuXG4gICAgICogT25seSB1c2UgaWYgeW91IGtub3cgd2hhdCB5b3UgYXJlIGRvaW5nLlxuICAgICAqL1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBpbnRlbnQ6ICdub25lJyxcbiAgICBhcHBlYXJhbmNlOiAnZGVmYXVsdCcsXG4gICAgaGVpZ2h0OiA0OCxcbiAgICBvblNlbGVjdDogKCkgPT4ge30sXG4gICAgb25EZXNlbGVjdDogKCkgPT4ge30sXG4gICAgb25LZXlQcmVzczogKCkgPT4ge31cbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gZSA9PiB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMucHJvcHMub25DbGljayhlKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmlzU2VsZWN0YWJsZSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuaXNTZWxlY3RlZCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uRGVzZWxlY3QoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdCgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlS2V5RG93biA9IGUgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLmlzU2VsZWN0YWJsZSkge1xuICAgICAgY29uc3QgeyBrZXkgfSA9IGVcbiAgICAgIGlmIChrZXkgPT09ICdFbnRlcicgfHwga2V5ID09PSAnICcpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdCgpXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdBcnJvd1VwJyB8fCBrZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbWFuYWdlVGFibGVSb3dGb2N1c0ludGVyYWN0aW9uKGtleSwgdGhpcy5tYWluUmVmKVxuICAgICAgICB9IGNhdGNoIChfKSB7fVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgIGlmICh0aGlzLm1haW5SZWYpIHRoaXMubWFpblJlZi5ibHVyKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uS2V5UHJlc3MoZSlcbiAgfVxuXG4gIG9uUmVmID0gcmVmID0+IHtcbiAgICB0aGlzLm1haW5SZWYgPSByZWZcbiAgICBzYWZlSW52b2tlKHRoaXMucHJvcHMuaW5uZXJSZWYsIHJlZilcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpbm5lclJlZixcbiAgICAgIHRoZW1lLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgaGVpZ2h0LFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBpbnRlbnQsXG4gICAgICBhcHBlYXJhbmNlLFxuICAgICAgdGFiSW5kZXggPSAtMSxcblxuICAgICAgLy8gRmlsdGVyIG91dFxuICAgICAgb25DbGljayxcbiAgICAgIG9uS2V5UHJlc3MsXG4gICAgICBvblNlbGVjdCxcbiAgICAgIG9uRGVzZWxlY3QsXG5cbiAgICAgIGlzSGlnaGxpZ2h0ZWQsXG4gICAgICBpc1NlbGVjdGFibGUsXG4gICAgICBpc1NlbGVjdGVkLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHRoZW1lZENsYXNzTmFtZSA9IHRoZW1lLmdldFJvd0NsYXNzTmFtZShhcHBlYXJhbmNlLCBpbnRlbnQpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRhYmxlUm93UHJvdmlkZXIgaGVpZ2h0PXtoZWlnaHR9PlxuICAgICAgICA8UGFuZVxuICAgICAgICAgIGlubmVyUmVmPXt0aGlzLm9uUmVmfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y3godGhlbWVkQ2xhc3NOYW1lLCBjbGFzc05hbWUpfVxuICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICBhcmlhLXNlbGVjdGVkPXtpc0hpZ2hsaWdodGVkfVxuICAgICAgICAgIGFyaWEtY3VycmVudD17aXNTZWxlY3RlZH1cbiAgICAgICAgICBkYXRhLWlzc2VsZWN0YWJsZT17aXNTZWxlY3RhYmxlfVxuICAgICAgICAgIHRhYkluZGV4PXtpc1NlbGVjdGFibGUgPyB0YWJJbmRleCA6IHVuZGVmaW5lZH1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlEb3dufVxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIGJvcmRlckJvdHRvbT1cIm11dGVkXCJcbiAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvUGFuZT5cbiAgICAgIDwvVGFibGVSb3dQcm92aWRlcj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFRhYmxlUm93KVxuIl19