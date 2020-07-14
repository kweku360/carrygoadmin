"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _arrify = _interopRequireDefault(require("arrify"));

var _popover = require("../../popover");

var _constants = require("../../constants");

var _icons = require("../../icons");

var _SelectMenuContent = _interopRequireDefault(require("./SelectMenuContent"));

var _OptionShapePropType = _interopRequireDefault(require("./OptionShapePropType"));

var _SelectedPropType = _interopRequireDefault(require("./SelectedPropType"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var SelectMenu = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(SelectMenu, _PureComponent);

  var _super = _createSuper(SelectMenu);

  function SelectMenu() {
    var _this;

    (0, _classCallCheck2["default"])(this, SelectMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getDetailView", function (close, detailView) {
      if (typeof detailView === 'function') {
        return {
          detailView: detailView({
            close: close
          })
        };
      }

      if (detailView) {
        return {
          detailView: detailView
        };
      }

      return {};
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getEmptyView", function (close, emptyView) {
      if (typeof emptyView === 'function') {
        return {
          emptyView: emptyView({
            close: close
          })
        };
      }

      if (emptyView) {
        return {
          emptyView: emptyView
        };
      }

      return {};
    });
    return _this;
  }

  (0, _createClass2["default"])(SelectMenu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          title = _this$props.title,
          width = _this$props.width,
          height = _this$props.height,
          options = _this$props.options,
          selected = _this$props.selected,
          position = _this$props.position,
          hasTitle = _this$props.hasTitle,
          hasFilter = _this$props.hasFilter,
          filterPlaceholder = _this$props.filterPlaceholder,
          filterIcon = _this$props.filterIcon,
          detailView = _this$props.detailView,
          emptyView = _this$props.emptyView,
          titleView = _this$props.titleView,
          isMultiSelect = _this$props.isMultiSelect,
          closeOnSelect = _this$props.closeOnSelect,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["title", "width", "height", "options", "selected", "position", "hasTitle", "hasFilter", "filterPlaceholder", "filterIcon", "detailView", "emptyView", "titleView", "isMultiSelect", "closeOnSelect"]);
      return _react["default"].createElement(_popover.Popover, (0, _extends2["default"])({
        minWidth: width,
        position: position,
        minHeight: height,
        content: function content(_ref) {
          var close = _ref.close;
          return _react["default"].createElement(_SelectMenuContent["default"], (0, _extends2["default"])({
            width: width,
            height: height,
            options: options,
            title: title,
            hasFilter: hasFilter,
            filterPlaceholder: filterPlaceholder,
            filterIcon: filterIcon,
            hasTitle: hasTitle,
            isMultiSelect: isMultiSelect,
            titleView: titleView,
            listProps: {
              onSelect: function onSelect(item) {
                _this2.props.onSelect(item);
              },
              onDeselect: function onDeselect(item) {
                _this2.props.onDeselect(item);
              },
              onFilterChange: _this2.props.onFilterChange,
              selected: (0, _arrify["default"])(selected)
            },
            close: close
          }, _this2.getDetailView(close, detailView), _this2.getEmptyView(close, emptyView), {
            closeOnSelect: closeOnSelect
          }));
        }
      }, props));
    }
  }]);
  return SelectMenu;
}(_react.PureComponent);

exports["default"] = SelectMenu;
SelectMenu.displayName = "SelectMenu";
(0, _defineProperty2["default"])(SelectMenu, "propTypes", {
  /**
   * The title of the Select Menu.
   */
  title: _propTypes["default"].string,

  /**
   * The width of the Select Menu.
   */
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /**
   * The height of the Select Menu.
   */
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /**
   * The options to show in the menu.
   * [{ label: String, value: String | Number }]
   */
  options: _propTypes["default"].arrayOf(_OptionShapePropType["default"]),

  /**
   * Function that is called when an option is selected.
   */
  onSelect: _propTypes["default"].func,

  /**
   * Function that is called when an option is deselected.
   */
  onDeselect: _propTypes["default"].func,

  /**
   * The selected value/values.
   */
  selected: _SelectedPropType["default"],

  /**
   * When true, multi select is accounted for.
   */
  isMultiSelect: _propTypes["default"].bool,

  /**
   * When true, show the title.
   */
  hasTitle: _propTypes["default"].bool,

  /**
   * When true, show the filter.
   */
  hasFilter: _propTypes["default"].bool,

  /**
   * The placeholder of the search filter.
   */
  filterPlaceholder: _propTypes["default"].string,

  /**
   * The icon of the search filter.
   */
  filterIcon: _propTypes["default"].node,

  /**
   * Function that is called as the onChange() event for the filter.
   */
  onFilterChange: _propTypes["default"].func,

  /**
   * The position of the Select Menu.
   */
  position: _propTypes["default"].oneOf([_constants.Position.TOP, _constants.Position.TOP_LEFT, _constants.Position.TOP_RIGHT, _constants.Position.BOTTOM, _constants.Position.BOTTOM_LEFT, _constants.Position.BOTTOM_RIGHT]),

  /**
   * Can be a function that returns a node, or a node itself, that is
   * rendered on the right side of the Select Menu to give additional
   * information when an option is selected.
   */
  detailView: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].node]),

  /**
   * Can be a function that returns a node, or a node itself, that is
   * rendered in the header section of the Select Menu to customize
   * the header.
   */
  titleView: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].node]),

  /**
   * Can be a function that returns a node, or a node itself, that is
   * rendered instead of the options list when there are no options.
   */
  emptyView: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].node]),

  /*
   * When true, menu closes on option selection.
   */
  closeOnSelect: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(SelectMenu, "defaultProps", {
  onSelect: function onSelect() {},
  onDeselect: function onDeselect() {},
  width: 240,
  height: 248,
  position: _constants.Position.BOTTOM_LEFT,
  isMultiSelect: false,
  filterPlaceholder: 'Filter...',
  filterIcon: _react["default"].createElement(_icons.SearchIcon, null),
  closeOnSelect: false
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3QtbWVudS9zcmMvU2VsZWN0TWVudS5qcyJdLCJuYW1lcyI6WyJTZWxlY3RNZW51IiwiY2xvc2UiLCJkZXRhaWxWaWV3IiwiZW1wdHlWaWV3IiwicHJvcHMiLCJ0aXRsZSIsIndpZHRoIiwiaGVpZ2h0Iiwib3B0aW9ucyIsInNlbGVjdGVkIiwicG9zaXRpb24iLCJoYXNUaXRsZSIsImhhc0ZpbHRlciIsImZpbHRlclBsYWNlaG9sZGVyIiwiZmlsdGVySWNvbiIsInRpdGxlVmlldyIsImlzTXVsdGlTZWxlY3QiLCJjbG9zZU9uU2VsZWN0Iiwib25TZWxlY3QiLCJpdGVtIiwib25EZXNlbGVjdCIsIm9uRmlsdGVyQ2hhbmdlIiwiZ2V0RGV0YWlsVmlldyIsImdldEVtcHR5VmlldyIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJhcnJheU9mIiwiT3B0aW9uU2hhcGVQcm9wVHlwZSIsImZ1bmMiLCJTZWxlY3RlZFByb3BUeXBlIiwiYm9vbCIsIm5vZGUiLCJvbmVPZiIsIlBvc2l0aW9uIiwiVE9QIiwiVE9QX0xFRlQiLCJUT1BfUklHSFQiLCJCT1RUT00iLCJCT1RUT01fTEVGVCIsIkJPVFRPTV9SSUdIVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7Ozs7c0dBc0hILFVBQUNDLEtBQUQsRUFBUUMsVUFBUixFQUF1QjtBQUNyQyxVQUFJLE9BQU9BLFVBQVAsS0FBc0IsVUFBMUIsRUFBc0M7QUFDcEMsZUFBTztBQUNMQSxVQUFBQSxVQUFVLEVBQUVBLFVBQVUsQ0FBQztBQUFFRCxZQUFBQSxLQUFLLEVBQUxBO0FBQUYsV0FBRDtBQURqQixTQUFQO0FBR0Q7O0FBRUQsVUFBSUMsVUFBSixFQUFnQjtB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QWhCLENBdEVPOztBQStFakI7Ozs7O0FBS0F4QyxFQUFBQSxVQUFVLEVBQUV1QixzQkFBVUUsU0FBVixDQUFvQixDQUFDRixzQkFBVU0sSUFBWCxFQUFpQk4sc0JBQVVTLElBQTNCLENBQXBCLENBcEZLOztBQXNGakI7Ozs7O0FBS0FuQixFQUFBQSxTQUFTLEVBQUVVLHNCQUFVRSxTQUFWLENBQW9CLENBQUNGLHNCQUFVTSxJQUFYLEVBQWlCTixzQkFBVVMsSUFBM0IsQ0FBcEIsQ0EzRk07O0FBNkZqQjs7OztBQUlBL0IsRUFBQUEsU0FBUyxFQUFFc0Isc0JBQVVFLFNBQVYsQ0FBb0IsQ0FBQ0Ysc0JBQVVNLElBQVgsRUFBaUJOLHNCQUFVUyxJQUEzQixDQUFwQixDQWpHTTs7QUFtR2pCOzs7QUFHQWpCLEVBQUFBLGFBQWEsRUFBRVEsc0JBQVVRO0FBdEdSLEM7aUNBREFqQyxVLGtCQTBHRztBQUNwQmtCLEVBQUFBLFFBQVEsRUFBRSxvQkFBTSxDQUFFLENBREU7QUFFcEJFLEVBQUFBLFVBQVUsRUFBRSxzQkFBTSxDQUFFLENBRkE7QUFHcEJkLEVBQUFBLEtBQUssRUFBRSxHQUhhO0FBSXBCQyxFQUFBQSxNQUFNLEVBQUUsR0FKWTtBQUtwQkcsRUFBQUEsUUFBUSxFQUFFMEIsb0JBQVNLLFdBTEM7QUFNcEJ6QixFQUFBQSxhQUFhLEVBQUUsS0FOSztBQU9wQkgsRUFBQUEsaUJBQWlCLEVBQUUsV0FQQztBQVFwQkMsRUFBQUEsVUFBVSxFQUFFLGdDQUFDLGlCQUFELE9BUlE7QUFTcEJHLEVBQUFBLGFBQWEsRUFBRTtBQVRLLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGFycmlmeSBmcm9tICdhcnJpZnknXG5pbXBvcnQgeyBQb3BvdmVyIH0gZnJvbSAnLi4vLi4vcG9wb3ZlcidcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgU2VhcmNoSWNvbiB9IGZyb20gJy4uLy4uL2ljb25zJ1xuaW1wb3J0IFNlbGVjdE1lbnVDb250ZW50IGZyb20gJy4vU2VsZWN0TWVudUNvbnRlbnQnXG5pbXBvcnQgT3B0aW9uU2hhcGVQcm9wVHlwZSBmcm9tICcuL09wdGlvblNoYXBlUHJvcFR5cGUnXG5pbXBvcnQgU2VsZWN0ZWRQcm9wVHlwZSBmcm9tICcuL1NlbGVjdGVkUHJvcFR5cGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdE1lbnUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgb2YgdGhlIFNlbGVjdCBNZW51LlxuICAgICAqL1xuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHdpZHRoIG9mIHRoZSBTZWxlY3QgTWVudS5cbiAgICAgKi9cbiAgICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgU2VsZWN0IE1lbnUuXG4gICAgICovXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9ucyB0byBzaG93IGluIHRoZSBtZW51LlxuICAgICAqIFt7IGxhYmVsOiBTdHJpbmcsIHZhbHVlOiBTdHJpbmcgfCBOdW1iZXIgfV1cbiAgICAgKi9cbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihPcHRpb25TaGFwZVByb3BUeXBlKSxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4gYW4gb3B0aW9uIGlzIHNlbGVjdGVkLlxuICAgICAqL1xuICAgIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4gYW4gb3B0aW9uIGlzIGRlc2VsZWN0ZWQuXG4gICAgICovXG4gICAgb25EZXNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VsZWN0ZWQgdmFsdWUvdmFsdWVzLlxuICAgICAqL1xuICAgIHNlbGVjdGVkOiBTZWxlY3RlZFByb3BUeXBlLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBtdWx0aSBzZWxlY3QgaXMgYWNjb3VudGVkIGZvci5cbiAgICAgKi9cbiAgICBpc011bHRpU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgc2hvdyB0aGUgdGl0bGUuXG4gICAgICovXG4gICAgaGFzVGl0bGU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBzaG93IHRoZSBmaWx0ZXIuXG4gICAgICovXG4gICAgaGFzRmlsdGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBwbGFjZWhvbGRlciBvZiB0aGUgc2VhcmNoIGZpbHRlci5cbiAgICAgKi9cbiAgICBmaWx0ZXJQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBpY29uIG9mIHRoZSBzZWFyY2ggZmlsdGVyLlxuICAgICAqL1xuICAgIGZpbHRlckljb246IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgYXMgdGhlIG9uQ2hhbmdlKCkgZXZlbnQgZm9yIHRoZSBmaWx0ZXIuXG4gICAgICovXG4gICAgb25GaWx0ZXJDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHBvc2l0aW9uIG9mIHRoZSBTZWxlY3QgTWVudS5cbiAgICAgKi9cbiAgICBwb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgIFBvc2l0aW9uLlRPUCxcbiAgICAgIFBvc2l0aW9uLlRPUF9MRUZULFxuICAgICAgUG9zaXRpb24uVE9QX1JJR0hULFxuICAgICAgUG9zaXRpb24uQk9UVE9NLFxuICAgICAgUG9zaXRpb24uQk9UVE9NX0xFRlQsXG4gICAgICBQb3NpdGlvbi5CT1RUT01fUklHSFRcbiAgICBdKSxcblxuICAgIC8qKlxuICAgICAqIENhbiBiZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIG5vZGUsIG9yIGEgbm9kZSBpdHNlbGYsIHRoYXQgaXNcbiAgICAgKiByZW5kZXJlZCBvbiB0aGUgcmlnaHQgc2lkZSBvZiB0aGUgU2VsZWN0IE1lbnUgdG8gZ2l2ZSBhZGRpdGlvbmFsXG4gICAgICogaW5mb3JtYXRpb24gd2hlbiBhbiBvcHRpb24gaXMgc2VsZWN0ZWQuXG4gICAgICovXG4gICAgZGV0YWlsVmlldzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ub2RlXSksXG5cbiAgICAvKipcbiAgICAgKiBDYW4gYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBub2RlLCBvciBhIG5vZGUgaXRzZWxmLCB0aGF0IGlzXG4gICAgICogcmVuZGVyZWQgaW4gdGhlIGhlYWRlciBzZWN0aW9uIG9mIHRoZSBTZWxlY3QgTWVudSB0byBjdXN0b21pemVcbiAgICAgKiB0aGUgaGVhZGVyLlxuICAgICAqL1xuICAgIHRpdGxlVmlldzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ub2RlXSksXG5cbiAgICAvKipcbiAgICAgKiBDYW4gYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBub2RlLCBvciBhIG5vZGUgaXRzZWxmLCB0aGF0IGlzXG4gICAgICogcmVuZGVyZWQgaW5zdGVhZCBvZiB0aGUgb3B0aW9ucyBsaXN0IHdoZW4gdGhlcmUgYXJlIG5vIG9wdGlvbnMuXG4gICAgICovXG4gICAgZW1wdHlWaWV3OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm5vZGVdKSxcblxuICAgIC8qXG4gICAgICogV2hlbiB0cnVlLCBtZW51IGNsb3NlcyBvbiBvcHRpb24gc2VsZWN0aW9uLlxuICAgICAqL1xuICAgIGNsb3NlT25TZWxlY3Q6IFByb3BUeXBlcy5ib29sXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9uU2VsZWN0OiAoKSA9PiB7fSxcbiAgICBvbkRlc2VsZWN0OiAoKSA9PiB7fSxcbiAgICB3aWR0aDogMjQwLFxuICAgIGhlaWdodDogMjQ4LFxuICAgIHBvc2l0aW9uOiBQb3NpdGlvbi5CT1RUT01fTEVGVCxcbiAgICBpc011bHRpU2VsZWN0OiBmYWxzZSxcbiAgICBmaWx0ZXJQbGFjZWhvbGRlcjogJ0ZpbHRlci4uLicsXG4gICAgZmlsdGVySWNvbjogPFNlYXJjaEljb24gLz4sXG4gICAgY2xvc2VPblNlbGVjdDogZmFsc2VcbiAgfVxuXG4gIGdldERldGFpbFZpZXcgPSAoY2xvc2UsIGRldGFpbFZpZXcpID0+IHtcbiAgICBpZiAodHlwZW9mIGRldGFpbFZpZXcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRldGFpbFZpZXc6IGRldGFpbFZpZXcoeyBjbG9zZSB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkZXRhaWxWaWV3KSB7XG4gICAgICByZXR1cm4geyBkZXRhaWxWaWV3IH1cbiAgICB9XG5cbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIGdldEVtcHR5VmlldyA9IChjbG9zZSwgZW1wdHlWaWV3KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBlbXB0eVZpZXcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVtcHR5VmlldzogZW1wdHlWaWV3KHsgY2xvc2UgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZW1wdHlWaWV3KSB7XG4gICAgICByZXR1cm4geyBlbXB0eVZpZXcgfVxuICAgIH1cblxuICAgIHJldHVybiB7fVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRpdGxlLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICBvcHRpb25zLFxuICAgICAgc2VsZWN0ZWQsXG4gICAgICBwb3NpdGlvbixcbiAgICAgIGhhc1RpdGxlLFxuICAgICAgaGFzRmlsdGVyLFxuICAgICAgZmlsdGVyUGxhY2Vob2xkZXIsXG4gICAgICBmaWx0ZXJJY29uLFxuICAgICAgZGV0YWlsVmlldyxcbiAgICAgIGVtcHR5VmlldyxcbiAgICAgIHRpdGxlVmlldyxcbiAgICAgIGlzTXVsdGlTZWxlY3QsXG4gICAgICBjbG9zZU9uU2VsZWN0LFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3BvdmVyXG4gICAgICAgIG1pbldpZHRoPXt3aWR0aH1cbiAgICAgICAgcG9zaXRpb249e3Bvc2l0aW9ufVxuICAgICAgICBtaW5IZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgY29udGVudD17KHsgY2xvc2UgfSkgPT4gKFxuICAgICAgICAgIDxTZWxlY3RNZW51Q29udGVudFxuICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgICAgaGFzRmlsdGVyPXtoYXNGaWx0ZXJ9XG4gICAgICAgICAgICBmaWx0ZXJQbGFjZWhvbGRlcj17ZmlsdGVyUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICBmaWx0ZXJJY29uPXtmaWx0ZXJJY29ufVxuICAgICAgICAgICAgaGFzVGl0bGU9e2hhc1RpdGxlfVxuICAgICAgICAgICAgaXNNdWx0aVNlbGVjdD17aXNNdWx0aVNlbGVjdH1cbiAgICAgICAgICAgIHRpdGxlVmlldz17dGl0bGVWaWV3fVxuICAgICAgICAgICAgbGlzdFByb3BzPXt7XG4gICAgICAgICAgICAgIG9uU2VsZWN0OiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGl0ZW0pXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uRGVzZWxlY3Q6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25EZXNlbGVjdChpdGVtKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbkZpbHRlckNoYW5nZTogdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZSxcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGFycmlmeShzZWxlY3RlZClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbG9zZT17Y2xvc2V9XG4gICAgICAgICAgICB7Li4udGhpcy5nZXREZXRhaWxWaWV3KGNsb3NlLCBkZXRhaWxWaWV3KX1cbiAgICAgICAgICAgIHsuLi50aGlzLmdldEVtcHR5VmlldyhjbG9zZSwgZW1wdHlWaWV3KX1cbiAgICAgICAgICAgIGNsb3NlT25TZWxlY3Q9e2Nsb3NlT25TZWxlY3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cbiJdfQ==