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

var _fuzzaldrinPlus = _interopRequireDefault(require("fuzzaldrin-plus"));

var _reactTinyVirtualList = _interopRequireDefault(require("react-tiny-virtual-list"));

var _layers = require("../../layers");

var _icons = require("../../icons");

var _table = require("../../table");

var _OptionShapePropType = _interopRequireDefault(require("./OptionShapePropType"));

var _Option = _interopRequireDefault(require("./Option"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Fuzzaldrin-plus is the default filter, but you can use your own
 * as long as they follow the following signature:
 * @param options <Array[String]> - ['label', 'label2', ...]
 * @param input <String>
 */
var fuzzyFilter = function fuzzyFilter(options, input, _ref) {
  var key = _ref.key;
  return _fuzzaldrinPlus["default"].filter(options, input, {
    key: key
  });
};
/**
 * This is the default item renderer of options
 * you can pass custom renderers as long as they work the same as the Option
 */


var itemRenderer = function itemRenderer(props) {
  return _react["default"].createElement(_Option["default"], props);
};

itemRenderer.displayName = "itemRenderer";

var OptionsList = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(OptionsList, _PureComponent);

  var _super = _createSuper(OptionsList);

  function OptionsList(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, OptionsList);
    _this = _super.call(this, props, context);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "isSelected", function (item) {
      var selected = _this.state.selected;
      return Boolean(selected.find(function (selectedItem) {
        return selectedItem === item.value;
      }));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "search", function (options) {
      var optionsFilter = _this.props.optionsFilter;
      var searchValue = _this.state.searchValue;

      if (searchValue.trim() === '') {
        return options;
      } // Preserve backwards compatibility with allowing custom filters, which accept array of strings


      if (typeof optionsFilter === 'function') {
        return optionsFilter(options.map(function (item) {
          return item.label;
        }), searchValue).map(function (name) {
          return options.find(function (item) {
            return item.label === name;
          });
        });
      }

      return fuzzyFilter(options, searchValue, {
        key: 'label'
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getCurrentIndex", function () {
      var selected = _this.props.selected;

      var options = _this.getFilteredOptions();

      return options.findIndex(function (option) {
        return option.value === selected[selected.length - 1];
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleKeyDown", function (e) {
      if (e.key === 'ArrowUp') {
        _this.handleArrowUp();
      }

      if (e.key === 'ArrowDown') {
        _this.handleArrowDown();
      }

      if (e.key === 'Enter') {
        _this.handleEnter();
      }

      if (e.key === 'Escape') {
        _this.props.close();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleArrowUp", function () {
      var onSelect = _this.props.onSelect;

      var options = _this.getFilteredOptions();

      var nextIndex = _this.getCurrentIndex() - 1;

      if (nextIndex < 0) {
        nextIndex = options.length - 1;
      }

      if (_this.isSelected(options[nextIndex])) {
        return;
      }

      onSelect(options[nextIndex]);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleArrowDown", function () {
      var onSelect = _this.props.onSelect;

      var options = _this.getFilteredOptions();

      var nextIndex = _this.getCurrentIndex() + 1;

      if (nextIndex === options.length) {
        nextIndex = 0;
      }

      if (!_this.isSelected(options[nextIndex])) {
        onSelect(options[nextIndex]);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleEnter", function () {
      var isSelected = _this.getCurrentIndex() !== -1;

      if (isSelected) {
        if (!_this.props.isMultiSelect && _this.props.closeOnSelect) {
          _this.props.close();
        }
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (searchValue) {
      _this.setState({
        searchValue: searchValue
      });

      _this.props.onFilterChange(searchValue);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleSelect", function (item) {
      if (_this.isSelected(item)) {
        _this.props.onDeselect(item);
      } else {
        _this.props.onSelect(item);
      }

      if (!_this.props.isMultiSelect && _this.props.closeOnSelect) {
        _this.props.close();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleDeselect", function (item) {
      _this.props.onDeselect(item);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "assignSearchRef", function (ref) {
      _this.searchRef = ref;
    });
    _this.state = {
      searchValue: props.defaultSearchValue,
      selected: props.selected
    };
    return _this;
  }

  (0, _createClass2["default"])(OptionsList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var hasFilter = this.props.hasFilter;
      if (!hasFilter) return;
      /**
       * Hacky solution for broken autoFocus
       * https://github.com/segmentio/evergreen/issues/90
       */

      this.requestId = requestAnimationFrame(function () {
        _this2.searchRef.querySelector('input').focus();
      });
      window.addEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      cancelAnimationFrame(this.requestId);
      window.removeEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.selected !== this.props.selected) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          selected: this.props.selected
        });
      }
    }
  }, {
    key: "getFilteredOptions",
    value: function getFilteredOptions() {
      var options = this.props.options;
      return this.search(options);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          originalOptions = _this$props.options,
          close = _this$props.close,
          closeOnSelect = _this$props.closeOnSelect,
          width = _this$props.width,
          height = _this$props.height,
          onSelect = _this$props.onSelect,
          onDeselect = _this$props.onDeselect,
          onFilterChange = _this$props.onFilterChange,
          selected = _this$props.selected,
          hasFilter = _this$props.hasFilter,
          filterPlaceholder = _this$props.filterPlaceholder,
          filterIcon = _this$props.filterIcon,
          optionSize = _this$props.optionSize,
          _renderItem = _this$props.renderItem,
          optionsFilter = _this$props.optionsFilter,
          isMultiSelect = _this$props.isMultiSelect,
          defaultSearchValue = _this$props.defaultSearchValue,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["options", "close", "closeOnSelect", "width", "height", "onSelect", "onDeselect", "onFilterChange", "selected", "hasFilter", "filterPlaceholder", "filterIcon", "optionSize", "renderItem", "optionsFilter", "isMultiSelect", "defaultSearchValue"]);
      var options = this.search(originalOptions);
      var listHeight = height - (hasFilter ? 32 : 0);
      var currentIndex = this.getCurrentIndex();
      var scrollToIndex = currentIndex === -1 ? 0 : currentIndex;
      return _react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
        height: height,
        width: width,
        display: "flex",
        flexDirection: "column"
      }, props), hasFilter && _react["default"].createElement(_table.TableHead, null, _react["default"].createElement(_table.SearchTableHeaderCell, {
        onChange: this.handleChange,
        innerRef: this.assignSearchRef,
        borderRight: null,
        height: 32,
        placeholder: filterPlaceholder,
        icon: filterIcon
      })), _react["default"].createElement(_layers.Pane, {
        flex: 1
      }, _react["default"].createElement(_reactTinyVirtualList["default"], {
        height: listHeight,
        width: "100%",
        itemSize: optionSize,
        itemCount: options.length,
        overscanCount: 20,
        scrollToAlignment: "auto",
        scrollToIndex: scrollToIndex || undefined,
        renderItem: function renderItem(_ref2) {
          var index = _ref2.index,
              style = _ref2.style;
          var item = options[index];

          var isSelected = _this3.isSelected(item);

          return _renderItem({
            key: item.value,
            label: item.label,
            icon: item.icon,
            style: style,
            height: optionSize,
            onSelect: function onSelect() {
              return _this3.handleSelect(item);
            },
            onDeselect: function onDeselect() {
              return _this3.handleDeselect(item);
            },
            isSelectable: !isSelected || isMultiSelect,
            isSelected: isSelected,
            disabled: item.disabled,
            tabIndex: 0
          });
        }
      })));
    }
  }]);
  return OptionsList;
}(_react.PureComponent);

exports["default"] = OptionsList;
OptionsList.displayName = "OptionsList";
(0, _defineProperty2["default"])(OptionsList, "propTypes", {
  options: _propTypes["default"].arrayOf(_OptionShapePropType["default"]),
  close: _propTypes["default"].func,
  height: _propTypes["default"].number,
  width: _propTypes["default"].number,

  /**
   * When true, multi select is accounted for.
   */
  isMultiSelect: _propTypes["default"].bool,

  /**
   * When true, menu closes on option selection.
   */
  closeOnSelect: _propTypes["default"].bool,

  /**
   * This holds the values of the options
   */
  selected: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])),
  onSelect: _propTypes["default"].func,
  onDeselect: _propTypes["default"].func,
  onFilterChange: _propTypes["default"].func,
  hasFilter: _propTypes["default"].bool,
  optionSize: _propTypes["default"].number,
  renderItem: _propTypes["default"].func,
  filterPlaceholder: _propTypes["default"].string,
  filterIcon: _propTypes["default"].node,
  optionsFilter: _propTypes["default"].func,
  defaultSearchValue: _propTypes["default"].string
});
(0, _defineProperty2["default"])(OptionsList, "defaultProps", {
  options: [],

  /**
   * Including border bottom
   * For some reason passing height to TableRow doesn't work
   * TODO: fix hacky solution
   */
  optionSize: 33,
  onSelect: function onSelect() {},
  onDeselect: function onDeselect() {},
  onFilterChange: function onFilterChange() {},
  selected: [],
  renderItem: itemRenderer,
  filterPlaceholder: 'Filter...',
  filterIcon: _react["default"].createElement(_icons.SearchIcon, null),
  defaultSearchValue: ''
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3QtbWVudS9zcmMvT3B0aW9uc0xpc3QuanMiXSwibmFtZXMiOlsiZnV6enlGaWx0ZXIiLCJvcHRpb25zIiwiaW5wdXQiLCJrZXkiLCJmdXp6YWxkcmluIiwiZmlsdGVyIiwiaXRlbVJlbmRlcmVyIiwicHJvcHMiLCJPcHRpb25zTGlzdCIsImNvbnRleHQiLCJpdGVtIiwic2VsZWN0ZWQiLCJzdGF0ZSIsIkJvb2xlYW4iLCJmaW5kIiwic2VsZWN0ZWRJdGVtIiwidmFsdWUiLCJvcHRpb25zRmlsdGVyIiwic2VhcmNoVmFsdWUiLCJ0cmltIiwibWFwIiwibGFiZWwiLCJuYW1lIiwiZ2V0RmlsdGVyZWRPcHRpb25zIiwiZmluZEluZGV4Iiwib3B0aW9uIiwibGVuZ3RoIiwiZSIsImhhbmRsZUFycm93VXAiLCJoYW5kbGVBcnJvd0Rvd24iLCJoYW5kbGVFbnRlciIsImNsb3NlIiwib25TZWxlY3QiLCJuZXh0SW5kZXgiLCJnZXRDdXJyZW50SW5kZXgiLCJpc1NlbGVjdGVkIiwiaXNNdWx0aVNlbGVjdCIsImNsb3NlT25TZWxlY3QiLCJzZXRTdGF0ZSIsIm9uRmlsdGVyQ2hhbmdlIiwib25EZXNlbGVjdCIsInJlZiIsInNlYXJjaFJlZiIsImRlZmF1bHRTZWFyY2hWYWx1ZSIsImhhc0ZpbHRlciIsInJlcXVlc3RJZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInF1ZXJ5U2VsZWN0b3IiLCJmb2N1cyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVLZXlEb3duIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicHJldlByb3BzIiwic2VhcmNoIiwib3JpZ2luYWxPcHRpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJmaWx0ZXJQbGFjZWhvbGRlciIsImZpbHRlckljb24iLCJvcHRpb25TaXplIiwicmVuZGVySXRlbSIsImxpc3RIZWlnaHQiLCJjdXJyZW50SW5kZXgiLCJzY3JvbGxUb0luZGV4IiwiaGFuZGxlQ2hhbmdlIiwiYXNzaWduU2VhcmNoUmVmIiwidW5kZWZpbmVkIiwiaW5kZXgiLCJzdHlsZSIsImljb24iLCJoYW5kbGVTZWxlY3QiLCJoYW5kbGVEZXNlbGVjdCIsImlzU2VsZWN0YWJsZSIsImRpc2FibGVkIiwidGFiSW5kZXgiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsIk9wdGlvblNoYXBlUHJvcFR5cGUiLCJmdW5jIiwibnVtYmVyIiwiYm9vbCIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBOzs7Ozs7QUFNQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxPQUFELEVBQVVDLEtBQVYsUUFBNkI7QUFBQSxNQUFWQyxHQUFVLFFBQVZBLEdBQVU7QUFDL0MsU0FBT0MsMkJBQVdDLE1BQVgsQ0FBa0JKLE9BQWxCLEVBQTJCQyxLQUEzQixFQUFrQztBQUFFQyxJQUFBQSxHQUFHLEVBQUhBO0FBQUYsR0FBbEMsQ0FBUDtBQUNELENBRkQ7QUFJQTs7Ozs7O0FBSUEsSUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsS0FBSztBQUFBLFNBQUksZ0NBQUMsa0JBQUQsRUFBWUEsS0FBWixDQUFKO0FBQUEsQ0FBMUI7O0FBQU1ELFk7O0lBRWVFLFc7Ozs7O0FBcURuQix1QkFBWUQsS0FBWixFQUFtQkUsT0FBbkIsRUFBNEI7QUFBQTs7QUFBQTtBQUMxQiw4QkFBTUYsS0FBTixFQUFhRSxPQUFiO0FBRDBCLG1HQXFDZixVQUFBQyxJQUFJLEVBQUk7QUFBQSxVQUNYQyxRQURXLEdBQ0UsTUFBS0MsS0FEUCxDQUNYRCxRQURXO0FBR25CLGFBQU9FLE9BQU8sQ0FBQ0YsUUFBUSxDQUFDRyxJQUFULENBQWMsVUFBQUMsWUFBWTtBQUFBLGVBQUlBLFlB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ckMsRUFBQUEsU0FBUyxFQUFFa0Msc0JBQVVLLElBekJKO0FBMEJqQnRCLEVBQUFBLFVBQVUsRUFBRWlCLHNCQUFVSSxNQTFCTDtBQTJCakJwQixFQUFBQSxVQUFVLEVBQUVnQixzQkFBVUcsSUEzQkw7QUE0QmpCdEIsRUFBQUEsaUJBQWlCLEVBQUVtQixzQkFBVU8sTUE1Qlo7QUE2QmpCekIsRUFBQUEsVUFBVSxFQUFFa0Isc0JBQVVRLElBN0JMO0FBOEJqQnJFLEVBQUFBLGFBQWEsRUFBRTZELHNCQUFVRyxJQTlCUjtBQStCakJ0QyxFQUFBQSxrQkFBa0IsRUFBRW1DLHNCQUFVTztBQS9CYixDO2lDQURBN0UsVyxrQkFtQ0c7QUFDcEJQLEVBQUFBLE9BQU8sRUFBRSxFQURXOztBQUVwQjs7Ozs7QUFLQTRELEVBQUFBLFVBQVUsRUFBRSxFQVBRO0FBUXBCN0IsRUFBQUEsUUFBUSxFQUFFLG9CQUFNLENBQUUsQ0FSRTtBQVNwQlEsRUFBQUEsVUFBVSxFQUFFLHNCQUFNLENBQUUsQ0FUQTtBQVVwQkQsRUFBQUEsY0FBYyxFQUFFLDBCQUFNLENBQUUsQ0FWSjtBQVdwQjVCLEVBQUFBLFFBQVEsRUFBRSxFQVhVO0FBWXBCbUQsRUFBQUEsVUFBVSxFQUFFeEQsWUFaUTtBQWFwQnFELEVBQUFBLGlCQUFpQixFQUFFLFdBYkM7QUFjcEJDLEVBQUFBLFVBQVUsRUFBRSxnQ0FBQyxpQkFBRCxPQWRRO0FBZXBCakIsRUFBQUEsa0JBQWtCLEVBQUU7QUFmQSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBmdXp6YWxkcmluIGZyb20gJ2Z1enphbGRyaW4tcGx1cydcbmltcG9ydCBWaXJ0dWFsTGlzdCBmcm9tICdyZWFjdC10aW55LXZpcnR1YWwtbGlzdCdcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBTZWFyY2hJY29uIH0gZnJvbSAnLi4vLi4vaWNvbnMnXG5pbXBvcnQgeyBUYWJsZUhlYWQsIFNlYXJjaFRhYmxlSGVhZGVyQ2VsbCB9IGZyb20gJy4uLy4uL3RhYmxlJ1xuaW1wb3J0IE9wdGlvblNoYXBlUHJvcFR5cGUgZnJvbSAnLi9PcHRpb25TaGFwZVByb3BUeXBlJ1xuaW1wb3J0IE9wdGlvbiBmcm9tICcuL09wdGlvbidcblxuLyoqXG4gKiBGdXp6YWxkcmluLXBsdXMgaXMgdGhlIGRlZmF1bHQgZmlsdGVyLCBidXQgeW91IGNhbiB1c2UgeW91ciBvd25cbiAqIGFzIGxvbmcgYXMgdGhleSBmb2xsb3cgdGhlIGZvbGxvd2luZyBzaWduYXR1cmU6XG4gKiBAcGFyYW0gb3B0aW9ucyA8QXJyYXlbU3RyaW5nXT4gLSBbJ2xhYmVsJywgJ2xhYmVsMicsIC4uLl1cbiAqIEBwYXJhbSBpbnB1dCA8U3RyaW5nPlxuICovXG5jb25zdCBmdXp6eUZpbHRlciA9IChvcHRpb25zLCBpbnB1dCwgeyBrZXkgfSkgPT4ge1xuICByZXR1cm4gZnV6emFsZHJpbi5maWx0ZXIob3B0aW9ucywgaW5wdXQsIHsga2V5IH0pXG59XG5cbi8qKlxuICogVGhpcyBpcyB0aGUgZGVmYXVsdCBpdGVtIHJlbmRlcmVyIG9mIG9wdGlvbnNcbiAqIHlvdSBjYW4gcGFzcyBjdXN0b20gcmVuZGVyZXJzIGFzIGxvbmcgYXMgdGhleSB3b3JrIHRoZSBzYW1lIGFzIHRoZSBPcHRpb25cbiAqL1xuY29uc3QgaXRlbVJlbmRlcmVyID0gcHJvcHMgPT4gPE9wdGlvbiB7Li4ucHJvcHN9IC8+XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbnNMaXN0IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoT3B0aW9uU2hhcGVQcm9wVHlwZSksXG4gICAgY2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgbXVsdGkgc2VsZWN0IGlzIGFjY291bnRlZCBmb3IuXG4gICAgICovXG4gICAgaXNNdWx0aVNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIG1lbnUgY2xvc2VzIG9uIG9wdGlvbiBzZWxlY3Rpb24uXG4gICAgICovXG4gICAgY2xvc2VPblNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGhvbGRzIHRoZSB2YWx1ZXMgb2YgdGhlIG9wdGlvbnNcbiAgICAgKi9cbiAgICBzZWxlY3RlZDogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICAgIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkRlc2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkZpbHRlckNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaGFzRmlsdGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvcHRpb25TaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHJlbmRlckl0ZW06IFByb3BUeXBlcy5mdW5jLFxuICAgIGZpbHRlclBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZpbHRlckljb246IFByb3BUeXBlcy5ub2RlLFxuICAgIG9wdGlvbnNGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRlZmF1bHRTZWFyY2hWYWx1ZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvcHRpb25zOiBbXSxcbiAgICAvKipcbiAgICAgKiBJbmNsdWRpbmcgYm9yZGVyIGJvdHRvbVxuICAgICAqIEZvciBzb21lIHJlYXNvbiBwYXNzaW5nIGhlaWdodCB0byBUYWJsZVJvdyBkb2Vzbid0IHdvcmtcbiAgICAgKiBUT0RPOiBmaXggaGFja3kgc29sdXRpb25cbiAgICAgKi9cbiAgICBvcHRpb25TaXplOiAzMyxcbiAgICBvblNlbGVjdDogKCkgPT4ge30sXG4gICAgb25EZXNlbGVjdDogKCkgPT4ge30sXG4gICAgb25GaWx0ZXJDaGFuZ2U6ICgpID0+IHt9LFxuICAgIHNlbGVjdGVkOiBbXSxcbiAgICByZW5kZXJJdGVtOiBpdGVtUmVuZGVyZXIsXG4gICAgZmlsdGVyUGxhY2Vob2xkZXI6ICdGaWx0ZXIuLi4nLFxuICAgIGZpbHRlckljb246IDxTZWFyY2hJY29uIC8+LFxuICAgIGRlZmF1bHRTZWFyY2hWYWx1ZTogJydcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoVmFsdWU6IHByb3BzLmRlZmF1bHRTZWFyY2hWYWx1ZSxcbiAgICAgIHNlbGVjdGVkOiBwcm9wcy5zZWxlY3RlZFxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgaGFzRmlsdGVyIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKCFoYXNGaWx0ZXIpIHJldHVyblxuICAgIC8qKlxuICAgICAqIEhhY2t5IHNvbHV0aW9uIGZvciBicm9rZW4gYXV0b0ZvY3VzXG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL3NlZ21lbnRpby9ldmVyZ3JlZW4vaXNzdWVzLzkwXG4gICAgICovXG4gICAgdGhpcy5yZXF1ZXN0SWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5zZWFyY2hSZWYucXVlcnlTZWxlY3RvcignaW5wdXQnKS5mb2N1cygpXG4gICAgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yZXF1ZXN0SWQpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd24pXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKHByZXZQcm9wcy5zZWxlY3RlZCAhPT0gdGhpcy5wcm9wcy5zZWxlY3RlZCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRpZC11cGRhdGUtc2V0LXN0YXRlXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2VsZWN0ZWQ6IHRoaXMucHJvcHMuc2VsZWN0ZWRcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaXNTZWxlY3RlZCA9IGl0ZW0gPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHRoaXMuc3RhdGVcblxuICAgIHJldHVybiBCb29sZWFuKHNlbGVjdGVkLmZpbmQoc2VsZWN0ZWRJdGVtID0+IHNlbGVjdGVkSXRlbSA9PT0gaXRlbS52YWx1ZSkpXG4gIH1cblxuICBzZWFyY2ggPSBvcHRpb25zID0+IHtcbiAgICBjb25zdCB7IG9wdGlvbnNGaWx0ZXIgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHNlYXJjaFZhbHVlIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBpZiAoc2VhcmNoVmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgcmV0dXJuIG9wdGlvbnNcbiAgICB9XG5cbiAgICAvLyBQcmVzZXJ2ZSBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSB3aXRoIGFsbG93aW5nIGN1c3RvbSBmaWx0ZXJzLCB3aGljaCBhY2NlcHQgYXJyYXkgb2Ygc3RyaW5nc1xuICAgIGlmICh0eXBlb2Ygb3B0aW9uc0ZpbHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIG9wdGlvbnNGaWx0ZXIoXG4gICAgICAgIG9wdGlvbnMubWFwKGl0ZW0gPT4gaXRlbS5sYWJlbCksXG4gICAgICAgIHNlYXJjaFZhbHVlXG4gICAgICApLm1hcChuYW1lID0+IG9wdGlvbnMuZmluZChpdGVtID0+IGl0ZW0ubGFiZWwgPT09IG5hbWUpKVxuICAgIH1cblxuICAgIHJldHVybiBmdXp6eUZpbHRlcihvcHRpb25zLCBzZWFyY2hWYWx1ZSwgeyBrZXk6ICdsYWJlbCcgfSlcbiAgfVxuXG4gIGdldEN1cnJlbnRJbmRleCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdGVkIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0RmlsdGVyZWRPcHRpb25zKClcblxuICAgIHJldHVybiBvcHRpb25zLmZpbmRJbmRleChcbiAgICAgIG9wdGlvbiA9PiBvcHRpb24udmFsdWUgPT09IHNlbGVjdGVkW3NlbGVjdGVkLmxlbmd0aCAtIDFdXG4gICAgKVxuICB9XG5cbiAgZ2V0RmlsdGVyZWRPcHRpb25zKCkge1xuICAgIGNvbnN0IHsgb3B0aW9ucyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoKG9wdGlvbnMpXG4gIH1cblxuICBoYW5kbGVLZXlEb3duID0gZSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgIHRoaXMuaGFuZGxlQXJyb3dVcCgpXG4gICAgfVxuXG4gICAgaWYgKGUua2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgdGhpcy5oYW5kbGVBcnJvd0Rvd24oKVxuICAgIH1cblxuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgdGhpcy5oYW5kbGVFbnRlcigpXG4gICAgfVxuXG4gICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgdGhpcy5wcm9wcy5jbG9zZSgpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQXJyb3dVcCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uU2VsZWN0IH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0RmlsdGVyZWRPcHRpb25zKClcblxuICAgIGxldCBuZXh0SW5kZXggPSB0aGlzLmdldEN1cnJlbnRJbmRleCgpIC0gMVxuXG4gICAgaWYgKG5leHRJbmRleCA8IDApIHtcbiAgICAgIG5leHRJbmRleCA9IG9wdGlvbnMubGVuZ3RoIC0gMVxuICAgIH1cblxuICAgIGlmICh0aGlzLmlzU2VsZWN0ZWQob3B0aW9uc1tuZXh0SW5kZXhdKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgb25TZWxlY3Qob3B0aW9uc1tuZXh0SW5kZXhdKVxuICB9XG5cbiAgaGFuZGxlQXJyb3dEb3duID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25TZWxlY3QgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRGaWx0ZXJlZE9wdGlvbnMoKVxuXG4gICAgbGV0IG5leHRJbmRleCA9IHRoaXMuZ2V0Q3VycmVudEluZGV4KCkgKyAxXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSBvcHRpb25zLmxlbmd0aCkge1xuICAgICAgbmV4dEluZGV4ID0gMFxuICAgIH1cblxuICAgIGlmICghdGhpcy5pc1NlbGVjdGVkKG9wdGlvbnNbbmV4dEluZGV4XSkpIHtcbiAgICAgIG9uU2VsZWN0KG9wdGlvbnNbbmV4dEluZGV4XSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVFbnRlciA9ICgpID0+IHtcbiAgICBjb25zdCBpc1NlbGVjdGVkID0gdGhpcy5nZXRDdXJyZW50SW5kZXgoKSAhPT0gLTFcblxuICAgIGlmIChpc1NlbGVjdGVkKSB7XG4gICAgICBpZiAoIXRoaXMucHJvcHMuaXNNdWx0aVNlbGVjdCAmJiB0aGlzLnByb3BzLmNsb3NlT25TZWxlY3QpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5jbG9zZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gc2VhcmNoVmFsdWUgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VhcmNoVmFsdWVcbiAgICB9KVxuICAgIHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2Uoc2VhcmNoVmFsdWUpXG4gIH1cblxuICBoYW5kbGVTZWxlY3QgPSBpdGVtID0+IHtcbiAgICBpZiAodGhpcy5pc1NlbGVjdGVkKGl0ZW0pKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRGVzZWxlY3QoaXRlbSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChpdGVtKVxuICAgIH1cblxuICAgIGlmICghdGhpcy5wcm9wcy5pc011bHRpU2VsZWN0ICYmIHRoaXMucHJvcHMuY2xvc2VPblNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5jbG9zZSgpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRGVzZWxlY3QgPSBpdGVtID0+IHtcbiAgICB0aGlzLnByb3BzLm9uRGVzZWxlY3QoaXRlbSlcbiAgfVxuXG4gIGFzc2lnblNlYXJjaFJlZiA9IHJlZiA9PiB7XG4gICAgdGhpcy5zZWFyY2hSZWYgPSByZWZcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBvcHRpb25zOiBvcmlnaW5hbE9wdGlvbnMsXG4gICAgICBjbG9zZSxcbiAgICAgIGNsb3NlT25TZWxlY3QsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIG9uU2VsZWN0LFxuICAgICAgb25EZXNlbGVjdCxcbiAgICAgIG9uRmlsdGVyQ2hhbmdlLFxuICAgICAgc2VsZWN0ZWQsXG4gICAgICBoYXNGaWx0ZXIsXG4gICAgICBmaWx0ZXJQbGFjZWhvbGRlcixcbiAgICAgIGZpbHRlckljb24sXG4gICAgICBvcHRpb25TaXplLFxuICAgICAgcmVuZGVySXRlbSxcbiAgICAgIG9wdGlvbnNGaWx0ZXIsXG4gICAgICBpc011bHRpU2VsZWN0LFxuICAgICAgZGVmYXVsdFNlYXJjaFZhbHVlLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnNlYXJjaChvcmlnaW5hbE9wdGlvbnMpXG4gICAgY29uc3QgbGlzdEhlaWdodCA9IGhlaWdodCAtIChoYXNGaWx0ZXIgPyAzMiA6IDApXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gdGhpcy5nZXRDdXJyZW50SW5kZXgoKVxuICAgIGNvbnN0IHNjcm9sbFRvSW5kZXggPSBjdXJyZW50SW5kZXggPT09IC0xID8gMCA6IGN1cnJlbnRJbmRleFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lXG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAge2hhc0ZpbHRlciAmJiAoXG4gICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgIDxTZWFyY2hUYWJsZUhlYWRlckNlbGxcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBpbm5lclJlZj17dGhpcy5hc3NpZ25TZWFyY2hSZWZ9XG4gICAgICAgICAgICAgIGJvcmRlclJpZ2h0PXtudWxsfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezMyfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17ZmlsdGVyUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIGljb249e2ZpbHRlckljb259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICApfVxuICAgICAgICA8UGFuZSBmbGV4PXsxfT5cbiAgICAgICAgICA8VmlydHVhbExpc3RcbiAgICAgICAgICAgIGhlaWdodD17bGlzdEhlaWdodH1cbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICBpdGVtU2l6ZT17b3B0aW9uU2l6ZX1cbiAgICAgICAgICAgIGl0ZW1Db3VudD17b3B0aW9ucy5sZW5ndGh9XG4gICAgICAgICAgICBvdmVyc2NhbkNvdW50PXsyMH1cbiAgICAgICAgICAgIHNjcm9sbFRvQWxpZ25tZW50PVwiYXV0b1wiXG4gICAgICAgICAgICBzY3JvbGxUb0luZGV4PXtzY3JvbGxUb0luZGV4IHx8IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIHJlbmRlckl0ZW09eyh7IGluZGV4LCBzdHlsZSB9KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBvcHRpb25zW2luZGV4XVxuICAgICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gdGhpcy5pc1NlbGVjdGVkKGl0ZW0pXG4gICAgICAgICAgICAgIHJldHVybiByZW5kZXJJdGVtKHtcbiAgICAgICAgICAgICAgICBrZXk6IGl0ZW0udmFsdWUsXG4gICAgICAgICAgICAgICAgbGFiZWw6IGl0ZW0ubGFiZWwsXG4gICAgICAgICAgICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgICAgICAgICAgIHN0eWxlLFxuICAgICAgICAgICAgICAgIGhlaWdodDogb3B0aW9uU2l6ZSxcbiAgICAgICAgICAgICAgICBvblNlbGVjdDogKCkgPT4gdGhpcy5oYW5kbGVTZWxlY3QoaXRlbSksXG4gICAgICAgICAgICAgICAgb25EZXNlbGVjdDogKCkgPT4gdGhpcy5oYW5kbGVEZXNlbGVjdChpdGVtKSxcbiAgICAgICAgICAgICAgICBpc1NlbGVjdGFibGU6ICFpc1NlbGVjdGVkIHx8IGlzTXVsdGlTZWxlY3QsXG4gICAgICAgICAgICAgICAgaXNTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogaXRlbS5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICB0YWJJbmRleDogMFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1BhbmU+XG4gICAgICA8L1BhbmU+XG4gICAgKVxuICB9XG59XG4iXX0=