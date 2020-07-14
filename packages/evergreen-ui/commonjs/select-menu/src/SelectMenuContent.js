"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layers = require("../../layers");

var _typography = require("../../typography");

var _buttons = require("../../buttons");

var _icons = require("../../icons");

var _OptionsList = _interopRequireDefault(require("./OptionsList"));

var _OptionShapePropType = _interopRequireDefault(require("./OptionShapePropType"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var DefaultTitleView = function DefaultTitleView(_ref) {
  var close = _ref.close,
      title = _ref.title,
      headerHeight = _ref.headerHeight;
  return _react["default"].createElement(_layers.Pane, {
    display: "flex",
    alignItems: "center",
    borderBottom: "default",
    padding: 8,
    height: headerHeight,
    boxSizing: "border-box"
  }, _react["default"].createElement(_layers.Pane, {
    flex: "1",
    display: "flex",
    alignItems: "center"
  }, _react["default"].createElement(_typography.Heading, {
    size: 400
  }, title)), _react["default"].createElement(_buttons.IconButton, {
    icon: _react["default"].createElement(_icons.CrossIcon, null),
    appearance: "minimal",
    height: 24,
    onClick: close
  }));
};

DefaultTitleView.displayName = "DefaultTitleView";
DefaultTitleView.propTypes = {
  close: _propTypes["default"].func,
  title: _propTypes["default"].string,
  headerHeight: _propTypes["default"].number
};

var SelectMenuContent = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(SelectMenuContent, _PureComponent);

  var _super = _createSuper(SelectMenuContent);

  function SelectMenuContent() {
    (0, _classCallCheck2["default"])(this, SelectMenuContent);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(SelectMenuContent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          width = _this$props.width,
          height = _this$props.height,
          options = _this$props.options,
          hasTitle = _this$props.hasTitle,
          hasFilter = _this$props.hasFilter,
          filterPlaceholder = _this$props.filterPlaceholder,
          filterIcon = _this$props.filterIcon,
          close = _this$props.close,
          listProps = _this$props.listProps,
          titleView = _this$props.titleView,
          detailView = _this$props.detailView,
          emptyView = _this$props.emptyView,
          isMultiSelect = _this$props.isMultiSelect,
          closeOnSelect = _this$props.closeOnSelect;
      var headerHeight = 40;
      var optionsListHeight = hasTitle ? height - headerHeight : height;
      var hasDetailView = Boolean(detailView);
      var hasEmptyView = Boolean(emptyView);
      return _react["default"].createElement(_layers.Pane, {
        display: "flex",
        height: height
      }, _react["default"].createElement(_layers.Pane, {
        width: width,
        height: height,
        display: "flex",
        flexDirection: "column",
        borderRight: hasDetailView ? 'muted' : null
      }, hasTitle && titleView({
        close: close,
        title: title,
        headerHeight: headerHeight
      }), options.length === 0 && hasEmptyView ? _react["default"].createElement(_layers.Pane, {
        height: optionsListHeight
      }, emptyView) : _react["default"].createElement(_OptionsList["default"], (0, _extends2["default"])({
        height: optionsListHeight,
        hasFilter: hasFilter,
        filterPlaceholder: filterPlaceholder,
        filterIcon: filterIcon,
        options: options,
        isMultiSelect: isMultiSelect,
        close: close,
        closeOnSelect: closeOnSelect
      }, listProps))), hasDetailView && detailView);
    }
  }]);
  return SelectMenuContent;
}(_react.PureComponent);

exports["default"] = SelectMenuContent;
SelectMenuContent.displayName = "SelectMenuContent";
(0, _defineProperty2["default"])(SelectMenuContent, "propTypes", {
  close: _propTypes["default"].func,
  title: _propTypes["default"].string,
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  headerHeight: _propTypes["default"].number,
  options: _propTypes["default"].arrayOf(_OptionShapePropType["default"]),
  hasTitle: _propTypes["default"].bool,
  hasFilter: _propTypes["default"].bool,
  filterPlaceholder: _propTypes["default"].string,
  filterIcon: _propTypes["default"].node,
  listProps: _propTypes["default"].shape(_OptionsList["default"].propTypes),

  /**
   * When true, multi select is accounted for.
   */
  isMultiSelect: _propTypes["default"].bool,

  /*
   * When true, menu closes on option selection.
   */
  closeOnSelect: _propTypes["default"].bool,

  /**
   * Node that is placed in the header section, above the options.
   */
  titleView: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].node]),

  /**
   * Node that is placed right next to the options.
   */
  detailView: _propTypes["default"].node,

  /**
   * Node that is displayed instead of options list when there are no options.
   */
  emptyView: _propTypes["default"].node
});
(0, _defineProperty2["default"])(SelectMenuContent, "defaultProps", {
  options: [],
  hasTitle: true,
  hasFilter: true,
  titleView: DefaultTitleView
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3QtbWVudS9zcmMvU2VsZWN0TWVudUNvbnRlbnQuanMiXSwibmFtZXMiOlsiRGVmYXVsdFRpdGxlVmlldyIsImNsb3NlIiwidGl0bGUiLCJoZWFkZXJIZWlnaHQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwic3RyaW5nIiwibnVtYmVyIiwiU2VsZWN0TWVudUNvbnRlbnQiLCJwcm9wcyIsIndpZHRoIiwiaGVpZ2h0Iiwib3B0aW9ucyIsImhhc1RpdGxlIiwiaGFzRmlsdGVyIiwiZmlsdGVyUGxhY2Vob2xkZXIiLCJmaWx0ZXJJY29uIiwibGlzdFByb3BzIiwidGl0bGVWaWV3IiwiZGV0YWlsVmlldyIsImVtcHR5VmlldyIsImlzTXVsdGlTZWxlY3QiLCJjbG9zZU9uU2VsZWN0Iiwib3B0aW9uc0xpc3RIZWlnaHQiLCJoYXNEZXRhaWxWaWV3IiwiQm9vbGVhbiIsImhhc0VtcHR5VmlldyIsImxlbmd0aCIsIlB1cmVDb21wb25lbnQiLCJvbmVPZlR5cGUiLCJhcnJheU9mIiwiT3B0aW9uU2hhcGVQcm9wVHlwZSIsImJvb2wiLCJub2RlIiwic2hhcGUiLCJPcHRpb25zTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLFlBQWpCLFFBQWlCQSxZQUFqQjtBQUFBLFNBQ3ZCLGdDQUFDLFlBQUQ7QUFDRSxJQUFBLE9BQU8sRUFBQyxNQURWO0FBRUUsSUFBQSxVQUFVLEVBQUMsUUFGYjtBQUdFLElBQUEsWUFBWSxFQUFDLFNBSGY7QUFJRSxJQUFBLE9BQU8sRUFBRSxDQUpYO0FBS0UsSUFBQSxNQUFNLEVBQUVBLFlB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LENBQXBCLENBMUJNOztBQTRCakI7OztBQUdBZCxFQUFBQSxVQUFVLEVBQUVmLHNCQUFVNkIsSUEvQkw7O0FBaUNqQjs7O0FBR0FiLEVBQUFBLFNBQVMsRUFBRWhCLHNCQUFVNkI7QUFwQ0osQztpQ0FEQXpCLGlCLGtCQXdDRztBQUNwQkksRUFBQUEsT0FBTyxFQUFFLEVBRFc7QUFFcEJDLEVBQUFBLFFBQVEsRUFBRSxJQUZVO0FBR3BCQyxFQUFBQSxTQUFTLEVBQUUsSUFIUztBQUlwQkksRUFBQUEsU0FBUyxFQUFFbkI7QUFKUyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBIZWFkaW5nIH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IEljb25CdXR0b24gfSBmcm9tICcuLi8uLi9idXR0b25zJ1xuaW1wb3J0IHsgQ3Jvc3NJY29uIH0gZnJvbSAnLi4vLi4vaWNvbnMnXG5pbXBvcnQgT3B0aW9uc0xpc3QgZnJvbSAnLi9PcHRpb25zTGlzdCdcbmltcG9ydCBPcHRpb25TaGFwZVByb3BUeXBlIGZyb20gJy4vT3B0aW9uU2hhcGVQcm9wVHlwZSdcblxuY29uc3QgRGVmYXVsdFRpdGxlVmlldyA9ICh7IGNsb3NlLCB0aXRsZSwgaGVhZGVySGVpZ2h0IH0pID0+IChcbiAgPFBhbmVcbiAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgYm9yZGVyQm90dG9tPVwiZGVmYXVsdFwiXG4gICAgcGFkZGluZz17OH1cbiAgICBoZWlnaHQ9e2hlYWRlckhlaWdodH1cbiAgICBib3hTaXppbmc9XCJib3JkZXItYm94XCJcbiAgPlxuICAgIDxQYW5lIGZsZXg9XCIxXCIgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICA8SGVhZGluZyBzaXplPXs0MDB9Pnt0aXRsZX08L0hlYWRpbmc+XG4gICAgPC9QYW5lPlxuICAgIDxJY29uQnV0dG9uXG4gICAgICBpY29uPXs8Q3Jvc3NJY29uIC8+fVxuICAgICAgYXBwZWFyYW5jZT1cIm1pbmltYWxcIlxuICAgICAgaGVpZ2h0PXsyNH1cbiAgICAgIG9uQ2xpY2s9e2Nsb3NlfVxuICAgIC8+XG4gIDwvUGFuZT5cbilcblxuRGVmYXVsdFRpdGxlVmlldy5wcm9wVHlwZXMgPSB7XG4gIGNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhlYWRlckhlaWdodDogUHJvcFR5cGVzLm51bWJlclxufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0TWVudUNvbnRlbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgICBoZWFkZXJIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoT3B0aW9uU2hhcGVQcm9wVHlwZSksXG4gICAgaGFzVGl0bGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGhhc0ZpbHRlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgZmlsdGVyUGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmlsdGVySWNvbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgbGlzdFByb3BzOiBQcm9wVHlwZXMuc2hhcGUoT3B0aW9uc0xpc3QucHJvcFR5cGVzKSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgbXVsdGkgc2VsZWN0IGlzIGFjY291bnRlZCBmb3IuXG4gICAgICovXG4gICAgaXNNdWx0aVNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKlxuICAgICAqIFdoZW4gdHJ1ZSwgbWVudSBjbG9zZXMgb24gb3B0aW9uIHNlbGVjdGlvbi5cbiAgICAgKi9cbiAgICBjbG9zZU9uU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIE5vZGUgdGhhdCBpcyBwbGFjZWQgaW4gdGhlIGhlYWRlciBzZWN0aW9uLCBhYm92ZSB0aGUgb3B0aW9ucy5cbiAgICAgKi9cbiAgICB0aXRsZVZpZXc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMubm9kZV0pLFxuXG4gICAgLyoqXG4gICAgICogTm9kZSB0aGF0IGlzIHBsYWNlZCByaWdodCBuZXh0IHRvIHRoZSBvcHRpb25zLlxuICAgICAqL1xuICAgIGRldGFpbFZpZXc6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogTm9kZSB0aGF0IGlzIGRpc3BsYXllZCBpbnN0ZWFkIG9mIG9wdGlvbnMgbGlzdCB3aGVuIHRoZXJlIGFyZSBubyBvcHRpb25zLlxuICAgICAqL1xuICAgIGVtcHR5VmlldzogUHJvcFR5cGVzLm5vZGVcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb3B0aW9uczogW10sXG4gICAgaGFzVGl0bGU6IHRydWUsXG4gICAgaGFzRmlsdGVyOiB0cnVlLFxuICAgIHRpdGxlVmlldzogRGVmYXVsdFRpdGxlVmlld1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRpdGxlLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICBvcHRpb25zLFxuICAgICAgaGFzVGl0bGUsXG4gICAgICBoYXNGaWx0ZXIsXG4gICAgICBmaWx0ZXJQbGFjZWhvbGRlcixcbiAgICAgIGZpbHRlckljb24sXG4gICAgICBjbG9zZSxcbiAgICAgIGxpc3RQcm9wcyxcbiAgICAgIHRpdGxlVmlldyxcbiAgICAgIGRldGFpbFZpZXcsXG4gICAgICBlbXB0eVZpZXcsXG4gICAgICBpc011bHRpU2VsZWN0LFxuICAgICAgY2xvc2VPblNlbGVjdFxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSA0MFxuICAgIGNvbnN0IG9wdGlvbnNMaXN0SGVpZ2h0ID0gaGFzVGl0bGUgPyBoZWlnaHQgLSBoZWFkZXJIZWlnaHQgOiBoZWlnaHRcblxuICAgIGNvbnN0IGhhc0RldGFpbFZpZXcgPSBCb29sZWFuKGRldGFpbFZpZXcpXG4gICAgY29uc3QgaGFzRW1wdHlWaWV3ID0gQm9vbGVhbihlbXB0eVZpZXcpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmUgZGlzcGxheT1cImZsZXhcIiBoZWlnaHQ9e2hlaWdodH0+XG4gICAgICAgIDxQYW5lXG4gICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICBib3JkZXJSaWdodD17aGFzRGV0YWlsVmlldyA/ICdtdXRlZCcgOiBudWxsfVxuICAgICAgICA+XG4gICAgICAgICAge2hhc1RpdGxlICYmIHRpdGxlVmlldyh7IGNsb3NlLCB0aXRsZSwgaGVhZGVySGVpZ2h0IH0pfVxuICAgICAgICAgIHtvcHRpb25zLmxlbmd0aCA9PT0gMCAmJiBoYXNFbXB0eVZpZXcgPyAoXG4gICAgICAgICAgICA8UGFuZSBoZWlnaHQ9e29wdGlvbnNMaXN0SGVpZ2h0fT57ZW1wdHlWaWV3fTwvUGFuZT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPE9wdGlvbnNMaXN0XG4gICAgICAgICAgICAgIGhlaWdodD17b3B0aW9uc0xpc3RIZWlnaHR9XG4gICAgICAgICAgICAgIGhhc0ZpbHRlcj17aGFzRmlsdGVyfVxuICAgICAgICAgICAgICBmaWx0ZXJQbGFjZWhvbGRlcj17ZmlsdGVyUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIGZpbHRlckljb249e2ZpbHRlckljb259XG4gICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgICAgIGlzTXVsdGlTZWxlY3Q9e2lzTXVsdGlTZWxlY3R9XG4gICAgICAgICAgICAgIGNsb3NlPXtjbG9zZX1cbiAgICAgICAgICAgICAgY2xvc2VPblNlbGVjdD17Y2xvc2VPblNlbGVjdH1cbiAgICAgICAgICAgICAgey4uLmxpc3RQcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9QYW5lPlxuICAgICAgICB7aGFzRGV0YWlsVmlldyAmJiBkZXRhaWxWaWV3fVxuICAgICAgPC9QYW5lPlxuICAgIClcbiAgfVxufVxuIl19