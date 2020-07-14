"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

var _downshift = _interopRequireDefault(require("downshift"));

var _reactTinyVirtualList = _interopRequireDefault(require("react-tiny-virtual-list"));

var _popover = require("../../popover");

var _constants = require("../../constants");

var _typography = require("../../typography");

var _layers = require("../../layers");

var _AutocompleteItem = _interopRequireDefault(require("./AutocompleteItem"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var fuzzyFilter = function fuzzyFilter(itemToString) {
  if (itemToString) {
    return function (items, input) {
      var wrappedItems = items.map(function (item) {
        return {
          key: itemToString(item),
          item: item
        };
      });
      return _fuzzaldrinPlus["default"].filter(wrappedItems, input, {
        key: 'key'
      }).map(function (_ref) {
        var item = _ref.item;
        return item;
      });
    };
  }

  return function (items, input) {
    return _fuzzaldrinPlus["default"].filter(items, input);
  };
};

var noop = function noop() {};

var autocompleteItemRenderer = function autocompleteItemRenderer(props) {
  return _react["default"].createElement(_AutocompleteItem["default"], props);
};

autocompleteItemRenderer.displayName = "autocompleteItemRenderer";

// https://github.com/paypal/downshift/issues/164
var Autocomplete = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Autocomplete, _PureComponent);

  var _super = _createSuper(Autocomplete);

  function Autocomplete() {
    var _this;

    (0, _classCallCheck2["default"])(this, Autocomplete);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      targetWidth: 0
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "stateReducer", function (state, changes) {
      var items = _this.props.items;

      if (Object.prototype.hasOwnProperty.call(changes, 'isOpen') && changes.isOpen) {
        return _objectSpread({}, changes, {
          highlightedIndex: items.indexOf(state.selectedItem)
        });
      }

      return changes;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderResults", function (_ref2) {
      var width = _ref2.width,
          inputValue = _ref2.inputValue,
          highlightedIndex = _ref2.highlightedIndex,
          selectedItem = _ref2.selectedItem,
          getItemProps = _ref2.getItemProps,
          getMenuProps = _ref2.getMenuProps;
      var _this$props = _this.props,
          title = _this$props.title,
          itemSize = _this$props.itemSize,
          itemsFilter = _this$props.itemsFilter,
          originalItems = _this$props.items,
          itemToString = _this$props.itemToString,
          _renderItem = _this$props.renderItem,
          popoverMaxHeight = _this$props.popoverMaxHeight,
          isFilterDisabled = _this$props.isFilterDisabled;
      var filter = itemsFilter || fuzzyFilter(itemToString);
      var items = isFilterDisabled || inputValue.trim() === '' ? originalItems : filter(originalItems, inputValue);
      if (items.length === 0) return null; // Pass the actual DOM ref to downshift, this fixes touch support

      var menuProps = getMenuProps();
      menuProps.innerRef = menuProps.ref;
      delete menuProps.ref;
      return _react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
        width: width
      }, menuProps), title && _react["default"].createElement(_layers.Pane, {
        padding: 8,
        borderBottom: "muted"
      }, _react["default"].createElement(_typography.Heading, {
        size: 100
      }, title)), items.length > 0 && _react["default"].createElement(_reactTinyVirtualList["default"], {
        width: "100%",
        height: Math.min(items.length * itemSize, popoverMaxHeight),
        itemSize: itemSize,
        itemCount: items.length,
        scrollToIndex: highlightedIndex || 0,
        overscanCount: 3,
        scrollToAlignment: "auto",
        renderItem: function renderItem(_ref3) {
          var index = _ref3.index,
              style = _ref3.style;
          var item = items[index];
          var itemString = itemToString(item);
          return _renderItem(getItemProps({
            item: item,
            key: itemString,
            index: index,
            style: style,
            children: itemString,
            isSelected: itemToString(selectedItem) === itemString,
            isHighlighted: highlightedIndex === index
          }));
        }
      }));
    });
    return _this;
  }

  (0, _createClass2["default"])(Autocomplete, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        targetWidth: this.targetRef.getBoundingClientRect().width
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          itemSize = _this$props2.itemSize,
          position = _this$props2.position,
          renderItem = _this$props2.renderItem,
          itemsFilter = _this$props2.itemsFilter,
          popoverMaxHeight = _this$props2.popoverMaxHeight,
          popoverMinWidth = _this$props2.popoverMinWidth,
          props = (0, _objectWithoutProperties2["default"])(_this$props2, ["children", "itemSize", "position", "renderItem", "itemsFilter", "popoverMaxHeight", "popoverMinWidth"]);
      return _react["default"].createElement(_downshift["default"], (0, _extends2["default"])({
        stateReducer: this.stateReducer,
        scrollIntoView: noop
      }, props), function (_ref4) {
        var isShown = _ref4.isOpen,
            inputValue = _ref4.inputValue,
            getItemProps = _ref4.getItemProps,
            getMenuProps = _ref4.getMenuProps,
            selectedItem = _ref4.selectedItem,
            highlightedIndex = _ref4.highlightedIndex,
            getRootProps = _ref4.getRootProps,
            restDownshiftProps = (0, _objectWithoutProperties2["default"])(_ref4, ["isOpen", "inputValue", "getItemProps", "getMenuProps", "selectedItem", "highlightedIndex", "getRootProps"]);
        return _react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
          width: "100%"
        }, getRootProps({
          refKey: 'innerRef'
        })), _react["default"].createElement(_popover.Popover, {
          bringFocusInside: false,
          isShown: isShown,
          minWidth: popoverMinWidth,
          position: position || (_this2.state.targetWidth < popoverMinWidth ? _constants.Position.BOTTOM_LEFT : _constants.Position.BOTTOM),
          content: function content() {
            return _this2.renderResults({
              width: Math.max(_this2.state.targetWidth, popoverMinWidth),
              inputValue: inputValue,
              getItemProps: getItemProps,
              getMenuProps: getMenuProps,
              selectedItem: selectedItem,
              highlightedIndex: highlightedIndex
            });
          },
          minHeight: 0,
          animationDuration: 0
        }, function (_ref5) {
          var isShownPopover = _ref5.isShown,
              toggle = _ref5.toggle,
              _getRef = _ref5.getRef;
          return children(_objectSpread({
            isShown: isShownPopover,
            toggle: toggle,
            getRef: function getRef(ref) {
              // Use the ref internally to determine the width
              _this2.targetRef = ref;

              _getRef(ref);
            },
            inputValue: inputValue,
            selectedItem: selectedItem,
            highlightedIndex: highlightedIndex
          }, restDownshiftProps));
        }));
      });
    }
  }]);
  return Autocomplete;
}(_react.PureComponent);

exports["default"] = Autocomplete;
Autocomplete.displayName = "Autocomplete";
(0, _defineProperty2["default"])(Autocomplete, "propTypes", _objectSpread({
  /**
   * This prop can be either a string or a Node.
   * It will provide a title for the items
   */
  title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),

  /**
   * An array of items to be used as options for the select
   */
  items: _propTypes["default"].array.isRequired,

  /**
   * The selected Item to be shown on the autocomplete
   */
  selectedItem: _propTypes["default"].any,

  /**
   * In case the array of items is not an array of strings,
   * this function is used on each item to return the string that will be shown on the filter
   */
  itemToString: _propTypes["default"].func.isRequired,

  /**
   * Function that will render the 'filter' component.
   */
  children: _propTypes["default"].func.isRequired,

  /**
   * The height of each item in the list
   * Because the list is virtualized this is required beforehand.
   */
  itemSize: _propTypes["default"].number,

  /**
   * Function that returns a component to render the item
   */
  renderItem: _propTypes["default"].func,

  /**
   * The position of the Popover the Autocomplete is rendered in.
   */
  position: _propTypes["default"].oneOf([_constants.Position.TOP, _constants.Position.TOP_LEFT, _constants.Position.TOP_RIGHT, _constants.Position.BOTTOM, _constants.Position.BOTTOM_LEFT, _constants.Position.BOTTOM_RIGHT, _constants.Position.LEFT, _constants.Position.RIGHT]),

  /**
   * A function that is used to filter the items.
   * It should return a subset of the initial items.
   * By default the "fuzzaldrin-plus" package is used.
   */
  itemsFilter: _propTypes["default"].func,

  /**
   * Prop that enables and disables filtering
   * True: Enables Filtering
   * False: Disables Filtering
   */
  isFilterDisabled: _propTypes["default"].bool,

  /**
   * Defines the minimum height the results container will be
   */
  popoverMinWidth: _propTypes["default"].number,

  /**
   * Defines the maximum height the results container will be
   */
  popoverMaxHeight: _propTypes["default"].number
}, _downshift["default"].propTypes));
(0, _defineProperty2["default"])(Autocomplete, "defaultProps", {
  itemToString: function itemToString(i) {
    return i ? String(i) : '';
  },
  itemSize: 32,
  isFilterDisabled: false,
  popoverMinWidth: 240,
  popoverMaxHeight: 240,
  renderItem: autocompleteItemRenderer
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRvY29tcGxldGUvc3JjL0F1dG9jb21wbGV0ZS5qcyJdLCJuYW1lcyI6WyJmdXp6eUZpbHRlciIsIml0ZW1Ub1N0cmluZyIsIml0ZW1zIiwiaW5wdXQiLCJ3cmFwcGVkSXRlbXMiLCJtYXAiLCJpdGVtIiwia2V5IiwiZnV6emFsZHJpbiIsImZpbHRlciIsIm5vb3AiLCJhdXRvY29tcGxldGVJdGVtUmVuZGVyZXIiLCJwcm9wcyIsIkF1dG9jb21wbGV0ZSIsInRhcmdldFdpZHRoIiwic3RhdGUiLCJjaGFuZ2VzIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaXNPcGVuIiwiaGlnaGxpZ2h0ZWRJbmRleCIsImluZGV4T2YiLCJzZWxlY3RlZEl0ZW0iLCJ3aWR0aCIsImlucHV0VmFsdWUiLCJnZXRJdGVtUHJvcHMiLCJnZXRNZW51UHJvcHMiLCJ0aXRsZSIsIml0ZW1TaXplIiwiaXRlbXNGaWx0ZXIiLCJvcmlnaW5hbEl0ZW1zIiwicmVuZGVySXRlbSIsInBvcG92ZXJNYXhIZWlnaHQiLCJpc0ZpbHRlckRpc2FibGVkIiwidHJpbSIsImxlbmd0aCIsIm1lbnVQcm9wcyIsImlubmVyUmVmIiwicmVmIiwiTWF0aCIsIm1pbiIsImluZGV4Iiwic3R5bGUiLCJpdGVtU3RyaW5nIiwiY2hpbGRyZW4iLCJpc1NlbGVjdGVkIiwiaXNIaWdobGlnaHRlZCIsInNldFN0YXRlIiwidGFyZ2V0UmVmIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicG9zaXRpb24iLCJwb3BvdmVyTWluV2lkdGgiLCJzdGF0ZVJlZHVjZXIiLCJpc1Nob3duIiwiZ2V0Um9vdFByb3BzIiwicmVzdERvd25zaGlmdFByb3BzIiwicmVmS2V5IiwiUG9zaXRpb24iLCJCT1RUT01fTEVGVCIsIkJPVFRPTSIsInJlbmRlclJlc3VsdHMiLCJtYXgiLCJpc1Nob3duUG9wb3ZlciIsInRvZ2dsZSIsImdldFJlZiIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJub2RlIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwiYW55IiwiZnVuYyIsIm51bWJlciIsIm9uZU9mIiwiVE9QIiwiVE9QX0xFRlQiLCJUT1BfUklHSFQiLCJCT1RUT01fUklHSFQiLCJMRUZUIiwiUklHSFQiLCJib29sIiwiRG93bnNoaWZ0IiwicHJvcFR5cGVzIiwiaSIsIlN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLFlBQVksRUFBSTtBQUNsQyxNQUFJQSxZQUFKLEVBQWtCO0FBQ2hCLFdBQU8sVUFBQ0MsS0FBRCxFQUFRQyxLQUFSLEVBQWtCO0FBQ3ZCLFVBQU1DLFlBQVksR0FBR0YsS0FBSyxDQUFDRyxHQUFOLENBQVUsVUFBQUMsSUFBSTtBQUFBLGVBQUs7QUFDdENDLFVBQUFBLEdBQUcsRUFBRU4sWUFBWSxDQUFDSyxJQUFELENBRHFCO0FBRXRDQSxVQUFBQSxJQUFJLEVBQUpBO0FBRnNDLFNBQUw7QUFBQSxPQUFkLENBQXJCO0FBS0EsYUFBT0UsMkJBQ0pDLE1BREksQ0FDR0wsWUFESCxFQUNpQkQsS0FEakIsRUFDd0I7QUFBRUksUUFBQUEsR0FBRyxFQUFFO0FBQVAsT0FEeEIsRUFFSkYsR0FGSSxDQUVBO0FBQUEsWUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsZUFBY0EsSUFBZDtBQUFBLE9BRkEsQ0FBUDtBQUdELEtBVEQ7QUFVRDs7QUFFRCxTQUFPLFVBQUNKLEtBQUQsRUFBUUMsS0FBUjtBQUFBLFdBQWtCSywyQkFBV0MsTUFBWCxDQUFrQlAsS0FBbEIsRUFBeUJDLEtBQXpCLENBQWxCO0FBQUEsR0FBUDtBQUNELENBZkQ7O0FBaUJBLElBQU1PLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU0sQ0FBRSxDQUFyQjs7QUFFQSxJQUFNQyx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLENBQUFDLEtBQUs7QUFBQSxTQUFJLGdDQUFDLDRCQUFELEVBQXNCQSxLQUF0QixDQUFKO0FBQUEsQ0FBdEM7O0FBQU1ELHdCOztBQUVOO0lBQ3FCRSxZOzs7Ozs7Ozs7Ozs7Ozs7OEZBaUZYO0FBQ05DLE1BQUFBLFdBQVcsRUFBRTtBQURQLEs7cUdBbUJPLFVBQUNDLEtBQUQsRUFBUUMsT0FBUixFQUFvQjtBQUFBLFVBQ3pCZCxLQUR5QixHQUNmLE1BQUtVLEtBRFUsQ0FDekJWLEtBRHlCOztBQUdqQyxVQUNFZSxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ0osT0FBckMsRUFBOEMsUUFBOUMsS0FDQUEsT0FBTyxDQUFDSyxNQUZWLEVBR0U7QUFDQSxpQ0FDS0wsT0FETDtBQUVFTSxVQUFBQSxnQkFBZ0IsRUFBRXBCLEtBQUssQ0FBQ3FCLE9BQU4sQ0FBY1IsS0FBSyxDQUFDUyxZQUFwQjtBQUZwQjtBQUlEOztBQUVELGFBQU9SLE9BQVA7QUFDRCxLO3NHQUVlLGlCQU9WO0FBQUEsVUFOSlMsS0FNSSxTQU5KQSxLQU1JO0FBQUEsVUFMSkMsVUFLSSxTQUxKQSxVQUtJO0FBQUEsVUFKSkosZ0JBSUksU0FKSkEsZ0JBSUk7QUFBQSxVQUhKRSxZQUdJLFNBSEpBLFlBR0k7QUFBQSxVQUZKRyxZQUVJLFNBRkpBLFlBRUk7QUFBQSxVQURKQyxZQUNJLFNBREpBLFlBQ0k7QUFBQSx3QkFVQSxNQUFLaEIsS0FWTDtBQUFBLFVBRUZpQixLQUZFLGVBRUZBLEtBRkU7QUFBQSxVQUdGQyxRQUhFLGVBR0ZBLFFBSEU7QUFBQSxVQUlGQyxXQUpFLGVBSUZBLFdBSkU7QUFBQSxVQUtLQyxhQUxMLGVBS0Y5QixLQUxFO0FBQUEsVUFNRkQsWUFORSxlQU1GQSxZQU5FO0FBQUEsVUFPRmdDLFdBUEUsZUFPRkEsVUFQRTtBQUFBLFVBUUZDLGdCQVJFLGVBUUZBLGdCQVJFO0FBQUEsVUFTRkMsZ0JBVEUsZUFTRkEsZ0JBVEU7QUFZSixVQUFNMUIsTUFBTSxHQUFHc0IsV0FBVyxJQUFJL0IsV0FBVyxDQUFDQyxZQUFELENBQXpDO0FBQ0EsVUFBTUMsS0FBSyxHQUNUaUMsZ0JBQWdCLElBQUlULFVBQVUsQ0FBQ1UsSUFBWCxPQUFzQixFQUExQyxHQUNJSixhQURKLEdBRUl2QixNQUFNLENBQUN1QixhQUFELEVBQWdCTixVQUFoQixDQUhaO0FBS0EsVUFBSXhCLEtBQUssQ0FBQ21DLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0IsT0FBTyxJQUFQLENBbEJwQixDQW9CSjs7QUFDQSxVQUFNQyxTQUFTLEdBQUdWLFlBQVksRUFBOUI7QUFDQVUsTUFBQUEsU0FBUyxDQUFDQyxRQUFWLEdBQXFCRCxTQUFTLENBQUNFLEdBQS9CO0FBQ0EsYUFBT0YsU0FBUyxDQUFDRSxHQUFqQjtBQUVBLGFBQ0UsZ0NBQUMsWUFBRDtBQUFNLFFBQUEsS0FBSyxFQUFFZjtBQUFiLFNBQXdCYSxTQUF4QixHQUNHVCxLQUFLLElBQ0osZ0NBQUMsWUFBRDtBQUFNLFFBQUEsT0FBTyxFQUFFLENBQWY7QUFBa0IsUUFBQSxZQUFZLEVBQUM7QUFBL0IsU0FDRSxnQ0FBQyxtQkFBRDtBQUFTLFFBQUEsSUFBSSxFQUFFO0FBQWYsU0FBcUJBLEtBQXJCLENBREYsQ0FGSixFQU1HM0IsS0FBSyxDQUFDbUMsTUFBTixHQUFlLENBQWYsSUFDQyxnQ0FBQyxnQ0FBRDtBQUNFLFFBQUEsS0FBSyxFQUFDLE1BRFI7QUFFRSxRQUFBLE1BQU0sRUFBRUksSUFBSSxDQUFDQyxHQUFMLENBQVN4QyxLQUFLLENBQUNtQyxNQUFOLEdBQWVQLFFBQXhCLEVBQWtDSSxnQkFBbEMsQ0FGVjtBQUdFLFFBQUEsUUFBUSxFQUFFSixRQUhaO0FBSUUsUUFBQSxTQUFTLEVBQUU1QixLQUFLLENBQUNtQyxNQUpuQjtBQUtFLFFBQUEsYUFBYSxFQUFFZixnQkFBZ0IsSUFBSSxDQUxyQztBQU1FLFFBQUEsYUFBYSxFQUFFLENBTmpCO0FBT0UsUUFBQSxpQkFBaUIsRUFBQyxNQVBwQjtBQVFFLFFBQUEsVUFBVSxFQUFFLDJCQUFzQjtBQUFBLGNBQW5CcUIsS0FBbUIsU0FBbkJBLEtBQW1CO0FBQUEsY0FBWkMsS0FBWSxTQUFaQSxLQUFZO0FBQ2hDLGNBQU10QyxJQUFJLEdBQUdKLEtBQUssQ0FBQ3lDLEtBQUQsQ0FBbEI7QUFDQSxjQUFNRSxVQUFVLEdBQUc1QyxZQUFZLENBQUNLLElBQUQsQ0FBL0I7QUFFQSxpQkFBTzJCLFdBQVUsQ0FDZk4sWUFBWSxDQUFDO0FBQ1hyQixZQUFBQSxJQUFJLEVBQUpBLElBRFc7QUFFWEMsWUFBQUEsR0FBRyxFQUFFc0MsVUFGTTtBQUdYRixZQUFBQSxLQUFLLEVBQUxBLEtBSFc7QUFJWEMsWUFBQUEsS0FBSyxFQUFMQSxLQUpXO0FBS1hFLFlBQUFBLFFBQVEsRUFBRUQsVUFMQztBQU1YRSxZQUFBQSxVQUFVLEVBQUU5QyxZQUFZLENBQUN1QixZQUFELENBQVosS0FBK0JxQixVQU5oQztBQU9YRyxZQUFBQSxhQUFhLEVBQUUxQixnQkFBZ0IsS0FBS3FCO0FBUHpCLFdBQUQsQ0FERyxDQUFqQjtBQVdEO0FBdkJILFFBUEosQ0FERjtBQW9DRCxLOzs7Ozs7d0NBMUZtQjtBQUNsQixXQUFLTSxRQUFMLENBQWM7QUFDWm5DLFFBQUFBLFdBQVcsRUFBRSxLQUFLb0MsU0FBTCxDQUFlQyxxQkFBZixHQUF1QzFCO0FBRHhDLE9BQWQ7QUFHRDs7OzZCQXdGUTtBQUFBOztBQUFBLHlCQVVILEtBQUtiLEtBVkY7QUFBQSxVQUVMa0MsUUFGSyxnQkFFTEEsUUFGSztBQUFBLFVBR0xoQixRQUhLLGdCQUdMQSxRQUhLO0FBQUEsVUFJTHNCLFFBSkssZ0JBSUxBLFFBSks7QUFBQSxVQUtMbkIsVUFMSyxnQkFLTEEsVUFMSztBQUFBLFVBTUxGLFdBTkssZ0JBTUxBLFdBTks7QUFBQSxVQU9MRyxnQkFQSyxnQkFPTEEsZ0JBUEs7QUFBQSxVQVFMbUIsZUFSSyxnQkFRTEEsZUFSSztBQUFBLFVBU0Z6QyxLQVRFO0FBWVAsYUFDRSxnQ0FBQyxxQkFBRDtBQUNFLFFBQUEsWUFBWSxFQUFFLEtBQUswQyxZQURyQjtBQUVFLFFBQUEsY0FBYyxFQUFFNUM7QUFGbEIsU0FHTUUsS0FITixHQUtHO0FBQUEsWUFDUzJDLE9BRFQsU0FDQ2xDLE1BREQ7QUFBQSxZQUVDSyxVQUZELFNBRUNBLFVBRkQ7QUFBQSxZQUdDQyxZQUhELFNBR0NBLFlBSEQ7QUFBQSxZQUlDQyxZQUpELFNBSUNBLFlBSkQ7QUFBQSxZQUtDSixZQUxELFNBS0NBLFlBTEQ7QUFBQSxZQU1DRixnQkFORCxTQU1DQSxnQkFORDtBQUFBLFlBT0NrQyxZQVBELFNBT0NBLFlBUEQ7QUFBQSxZQVFJQyxrQkFSSjtBQUFBLGVBVUMsZ0NBQUMsWUFBRDtBQUFNLFVBQUEsS0FBSyxFQUFDO0FBQVosV0FBdUJELFlBQVksQ0FBQztBQUFFRSxVQUFBQSxNQUFNLEVBQUU7QUFBVixTQUFELENBQW5DLEdBQ0UsZ0NBQUMsZ0JBQUQ7QUFDRSxVQUFBLGdCQUFnQixFQUFFLEtBRHBCO0FBRUUsVUFBQSxPQUFPLEVBQUVILE9BRlg7QUFHRSxVQUFBLFFBQVEsRUFBRUYsZUFIWjtBQUlFLFVBQUEsUUFBUSxFQUNORCxRQUFRLEtBQ1AsTUFBSSxDQUFDckMsS0FBTCxDQUFXRCxXQUFYLEdBQXlCdUMsZUFBekIsR0FDR00sb0JBQVNDLFdBRFosR0FFR0Qsb0JBQVNFLE1BSEwsQ0FMWjtBQVVFLFVBQUEsT0FBTyxFQUFFLG1CQUFNO0FBQ2IsbUJBQU8sTUFBSSxDQUFDQyxhQUFMLENBQW1CO0FBQ3hCckMsY0FBQUEsS0FBSyxFQUFFZ0IsSUFBSSxDQUFDc0IsR0FBTCxDQUFTLE1BQUksQ0FBQ2hELEtBQUwsQ0FBV0QsV0FBcEIsRUFBaUN1QyxlQUFqQyxDQURpQjtBQUV4QjNCLGNBQUFBLFVBQVUsRUFBVkEsVUFGd0I7QUFHeEJDLGNBQUFBLFlBQVksRUFBWkEsWUFId0I7QUFJeEJDLGNBQUFBLFlBQVksRUFBWkEsWUFKd0I7QUFLeEJKLGNBQUFBLFlBQVksRUFBWkEsWUFMd0I7QUFNeEJGLGNBQUFBLGdCQUFnQixFQUFoQkE7QUFOd0IsYUFBbkIsQ0FBUDtBQVFELFdBbkJIO0FBb0JFLFVBQUEsU0FBUyxFQUFFLENBcEJiO0FBcUJFLFVBQUEsaUJBQWlCLEVBQUU7QUFyQnJCLFdBdUJHO0FBQUEsY0FBWTBDLGNBQVosU0FBR1QsT0FBSDtBQUFBLGNBQTRCVSxNQUE1QixTQUE0QkEsTUFBNUI7QUFBQSxjQUFvQ0MsT0FBcEMsU0FBb0NBLE1BQXBDO0FBQUEsaUJBQ0NwQixRQUFRO0FBQ05TLFlBQUFBLE9BQU8sRUFBRVMsY0FESDtBQUVOQyxZQUFBQSxNQUFNLEVBQU5BLE1BRk07QUFHTkMsWUFBQUEsTUFBTSxFQUFFLGdCQUFBMUIsR0FBRyxFQUFJO0FBQ2I7QUFDQSxjQUFBLE1BQUksQ0FBQ1UsU0FBTCxHQUFpQlYsR0FBakI7O0FBQ0EwQixjQUFBQSxPQUFNLENBQUMxQixHQUFELENBQU47QUFDRCxhQVBLO0FBUU5kLFlBQUFBLFVBQVUsRUFBVkEsVUFSTTtBQVNORixZQUFBQSxZQUFZLEVBQVpBLFlBVE07QUFVTkYsWUFBQUEsZ0JBQWdCLEVBQWhCQTtBQVZNLGFBV0htQyxrQkFYRyxFQURUO0FBQUEsU0F2QkgsQ0FERixDQVZEO0FBQUEsT0FMSCxDQURGO0FBNEREOzs7RUFsUXVDVSxvQjs7O0FBQXJCdEQsWTtpQ0FBQUEsWTtBQUVqQjs7OztBQUlBZ0IsRUFBQUEsS0FBSyxFQUFFdUMsc0JBQVVDLFNBQVYsQ0FBb0IsQ0FBQ0Qsc0JBQVVFLE1BQVgsRUFBbUJGLHNCQUFVRyxJQUE3QixDQUFwQixDOztBQUVQOzs7QUFHQXJFLEVBQUFBLEtBQUssRUFBRWtFLHNCQUFVSSxLQUFWLENBQWdCQyxVOztBQUV2Qjs7O0FBR0FqRCxFQUFBQSxZQUFZLEVBQUU0QyxzQkFBVU0sRzs7QUFFeEI7Ozs7QUFJQXpFLEVBQUFBLFlBQVksRUFBRW1FLHNCQUFVTyxJQUFWLENBQWVGLFU7O0FBRTdCOzs7QUFHQTNCLEVBQUFBLFFBQVEsRUFBRXNCLHNCQUFVTyxJQUFWLENBQWVGLFU7O0FBRXpCOzs7O0FBSUEzQyxFQUFBQSxRQUFRLEVBQUVzQyxzQkFBVVEsTTs7QUFFcEI7OztBQUdBM0MsRUFBQUEsVUFBVSxFQUFFbUMsc0JBQVVPLEk7O0FBRXRCOzs7QUFHQXZCLEVBQUFBLFFBQVEsRUFBRWdCLHNCQUFVUyxLQUFWLENBQWdCLENBQ3hCbEIsb0JBQVNtQixHQURlLEVBRXhCbkIsb0JBQVNvQixRQUZlLEVBR3hCcEIsb0JBQVNxQixTQUhlLEVBSXhCckIsb0JBQVNFLE1BSmUsRUFLeEJGLG9CQUFTQyxXQUxlLEVBTXhCRCxvQkFBU3NCLFlBTmUsRUFPeEJ0QixvQkFBU3VCLElBUGUsRUFReEJ2QixvQkFBU3dCLEtBUmUsQ0FBaEIsQzs7QUFXVjs7Ozs7QUFLQXBELEVBQUFBLFdBQVcsRUFBRXFDLHNCQUFVTyxJOztBQUV2Qjs7Ozs7QUFLQXhDLEVBQUFBLGdCQUFnQixFQUFFaUMsc0JBQVVnQixJOztBQUU1Qjs7O0FBR0EvQixFQUFBQSxlQUFlLEVBQUVlLHNCQUFVUSxNOztBQUUzQjs7O0FBR0ExQyxFQUFBQSxnQkFBZ0IsRUFBRWtDLHNCQUFVUTtHQUV6QlMsc0JBQVVDLFM7aUNBOUVJekUsWSxrQkFxRkc7QUFDcEJaLEVBQUFBLFlBQVksRUFBRSxzQkFBQXNGLENBQUM7QUFBQSxXQUFLQSxDQUFDLEdBQUdDLE1BQU0sQ0FBQ0QsQ0FBRCxDQUFULEdBQWUsRUFBckI7QUFBQSxHQURLO0FBRXBCekQsRUFBQUEsUUFBUSxFQUFFLEVBRlU7QUFHcEJLLEVBQUFBLGdCQUFnQixFQUFFLEtBSEU7QUFJcEJrQixFQUFBQSxlQUFlLEVBQUUsR0FKRztBQUtwQm5CLEVBQUFBLGdCQUFnQixFQUFFLEdBTEU7QUFNcEJELEVBQUFBLFVBQVUsRUFBRXRCO0FBTlEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgZnV6emFsZHJpbiBmcm9tICdmdXp6YWxkcmluLXBsdXMnXG5pbXBvcnQgRG93bnNoaWZ0IGZyb20gJ2Rvd25zaGlmdCdcbmltcG9ydCBWaXJ0dWFsTGlzdCBmcm9tICdyZWFjdC10aW55LXZpcnR1YWwtbGlzdCdcbmltcG9ydCB7IFBvcG92ZXIgfSBmcm9tICcuLi8uLi9wb3BvdmVyJ1xuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgeyBIZWFkaW5nIH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgQXV0b2NvbXBsZXRlSXRlbSBmcm9tICcuL0F1dG9jb21wbGV0ZUl0ZW0nXG5cbmNvbnN0IGZ1enp5RmlsdGVyID0gaXRlbVRvU3RyaW5nID0+IHtcbiAgaWYgKGl0ZW1Ub1N0cmluZykge1xuICAgIHJldHVybiAoaXRlbXMsIGlucHV0KSA9PiB7XG4gICAgICBjb25zdCB3cmFwcGVkSXRlbXMgPSBpdGVtcy5tYXAoaXRlbSA9PiAoe1xuICAgICAgICBrZXk6IGl0ZW1Ub1N0cmluZyhpdGVtKSxcbiAgICAgICAgaXRlbVxuICAgICAgfSkpXG5cbiAgICAgIHJldHVybiBmdXp6YWxkcmluXG4gICAgICAgIC5maWx0ZXIod3JhcHBlZEl0ZW1zLCBpbnB1dCwgeyBrZXk6ICdrZXknIH0pXG4gICAgICAgIC5tYXAoKHsgaXRlbSB9KSA9PiBpdGVtKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoaXRlbXMsIGlucHV0KSA9PiBmdXp6YWxkcmluLmZpbHRlcihpdGVtcywgaW5wdXQpXG59XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG5jb25zdCBhdXRvY29tcGxldGVJdGVtUmVuZGVyZXIgPSBwcm9wcyA9PiA8QXV0b2NvbXBsZXRlSXRlbSB7Li4ucHJvcHN9IC8+XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wYXlwYWwvZG93bnNoaWZ0L2lzc3Vlcy8xNjRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9jb21wbGV0ZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRoaXMgcHJvcCBjYW4gYmUgZWl0aGVyIGEgc3RyaW5nIG9yIGEgTm9kZS5cbiAgICAgKiBJdCB3aWxsIHByb3ZpZGUgYSB0aXRsZSBmb3IgdGhlIGl0ZW1zXG4gICAgICovXG4gICAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSksXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBpdGVtcyB0byBiZSB1c2VkIGFzIG9wdGlvbnMgZm9yIHRoZSBzZWxlY3RcbiAgICAgKi9cbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VsZWN0ZWQgSXRlbSB0byBiZSBzaG93biBvbiB0aGUgYXV0b2NvbXBsZXRlXG4gICAgICovXG4gICAgc2VsZWN0ZWRJdGVtOiBQcm9wVHlwZXMuYW55LFxuXG4gICAgLyoqXG4gICAgICogSW4gY2FzZSB0aGUgYXJyYXkgb2YgaXRlbXMgaXMgbm90IGFuIGFycmF5IG9mIHN0cmluZ3MsXG4gICAgICogdGhpcyBmdW5jdGlvbiBpcyB1c2VkIG9uIGVhY2ggaXRlbSB0byByZXR1cm4gdGhlIHN0cmluZyB0aGF0IHdpbGwgYmUgc2hvd24gb24gdGhlIGZpbHRlclxuICAgICAqL1xuICAgIGl0ZW1Ub1N0cmluZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCByZW5kZXIgdGhlICdmaWx0ZXInIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgZWFjaCBpdGVtIGluIHRoZSBsaXN0XG4gICAgICogQmVjYXVzZSB0aGUgbGlzdCBpcyB2aXJ0dWFsaXplZCB0aGlzIGlzIHJlcXVpcmVkIGJlZm9yZWhhbmQuXG4gICAgICovXG4gICAgaXRlbVNpemU6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHJldHVybnMgYSBjb21wb25lbnQgdG8gcmVuZGVyIHRoZSBpdGVtXG4gICAgICovXG4gICAgcmVuZGVySXRlbTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcG9zaXRpb24gb2YgdGhlIFBvcG92ZXIgdGhlIEF1dG9jb21wbGV0ZSBpcyByZW5kZXJlZCBpbi5cbiAgICAgKi9cbiAgICBwb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgIFBvc2l0aW9uLlRPUCxcbiAgICAgIFBvc2l0aW9uLlRPUF9MRUZULFxuICAgICAgUG9zaXRpb24uVE9QX1JJR0hULFxuICAgICAgUG9zaXRpb24uQk9UVE9NLFxuICAgICAgUG9zaXRpb24uQk9UVE9NX0xFRlQsXG4gICAgICBQb3NpdGlvbi5CT1RUT01fUklHSFQsXG4gICAgICBQb3NpdGlvbi5MRUZULFxuICAgICAgUG9zaXRpb24uUklHSFRcbiAgICBdKSxcblxuICAgIC8qKlxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyB1c2VkIHRvIGZpbHRlciB0aGUgaXRlbXMuXG4gICAgICogSXQgc2hvdWxkIHJldHVybiBhIHN1YnNldCBvZiB0aGUgaW5pdGlhbCBpdGVtcy5cbiAgICAgKiBCeSBkZWZhdWx0IHRoZSBcImZ1enphbGRyaW4tcGx1c1wiIHBhY2thZ2UgaXMgdXNlZC5cbiAgICAgKi9cbiAgICBpdGVtc0ZpbHRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBQcm9wIHRoYXQgZW5hYmxlcyBhbmQgZGlzYWJsZXMgZmlsdGVyaW5nXG4gICAgICogVHJ1ZTogRW5hYmxlcyBGaWx0ZXJpbmdcbiAgICAgKiBGYWxzZTogRGlzYWJsZXMgRmlsdGVyaW5nXG4gICAgICovXG4gICAgaXNGaWx0ZXJEaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSBtaW5pbXVtIGhlaWdodCB0aGUgcmVzdWx0cyBjb250YWluZXIgd2lsbCBiZVxuICAgICAqL1xuICAgIHBvcG92ZXJNaW5XaWR0aDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgdGhlIG1heGltdW0gaGVpZ2h0IHRoZSByZXN1bHRzIGNvbnRhaW5lciB3aWxsIGJlXG4gICAgICovXG4gICAgcG9wb3Zlck1heEhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC4uLkRvd25zaGlmdC5wcm9wVHlwZXNcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIHRhcmdldFdpZHRoOiAwXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGl0ZW1Ub1N0cmluZzogaSA9PiAoaSA/IFN0cmluZyhpKSA6ICcnKSxcbiAgICBpdGVtU2l6ZTogMzIsXG4gICAgaXNGaWx0ZXJEaXNhYmxlZDogZmFsc2UsXG4gICAgcG9wb3Zlck1pbldpZHRoOiAyNDAsXG4gICAgcG9wb3Zlck1heEhlaWdodDogMjQwLFxuICAgIHJlbmRlckl0ZW06IGF1dG9jb21wbGV0ZUl0ZW1SZW5kZXJlclxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0YXJnZXRXaWR0aDogdGhpcy50YXJnZXRSZWYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGhcbiAgICB9KVxuICB9XG5cbiAgc3RhdGVSZWR1Y2VyID0gKHN0YXRlLCBjaGFuZ2VzKSA9PiB7XG4gICAgY29uc3QgeyBpdGVtcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKFxuICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNoYW5nZXMsICdpc09wZW4nKSAmJlxuICAgICAgY2hhbmdlcy5pc09wZW5cbiAgICApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmNoYW5nZXMsXG4gICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IGl0ZW1zLmluZGV4T2Yoc3RhdGUuc2VsZWN0ZWRJdGVtKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjaGFuZ2VzXG4gIH1cblxuICByZW5kZXJSZXN1bHRzID0gKHtcbiAgICB3aWR0aCxcbiAgICBpbnB1dFZhbHVlLFxuICAgIGhpZ2hsaWdodGVkSW5kZXgsXG4gICAgc2VsZWN0ZWRJdGVtLFxuICAgIGdldEl0ZW1Qcm9wcyxcbiAgICBnZXRNZW51UHJvcHNcbiAgfSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHRpdGxlLFxuICAgICAgaXRlbVNpemUsXG4gICAgICBpdGVtc0ZpbHRlcixcbiAgICAgIGl0ZW1zOiBvcmlnaW5hbEl0ZW1zLFxuICAgICAgaXRlbVRvU3RyaW5nLFxuICAgICAgcmVuZGVySXRlbSxcbiAgICAgIHBvcG92ZXJNYXhIZWlnaHQsXG4gICAgICBpc0ZpbHRlckRpc2FibGVkXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IGZpbHRlciA9IGl0ZW1zRmlsdGVyIHx8IGZ1enp5RmlsdGVyKGl0ZW1Ub1N0cmluZylcbiAgICBjb25zdCBpdGVtcyA9XG4gICAgICBpc0ZpbHRlckRpc2FibGVkIHx8IGlucHV0VmFsdWUudHJpbSgpID09PSAnJ1xuICAgICAgICA/IG9yaWdpbmFsSXRlbXNcbiAgICAgICAgOiBmaWx0ZXIob3JpZ2luYWxJdGVtcywgaW5wdXRWYWx1ZSlcblxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHJldHVybiBudWxsXG5cbiAgICAvLyBQYXNzIHRoZSBhY3R1YWwgRE9NIHJlZiB0byBkb3duc2hpZnQsIHRoaXMgZml4ZXMgdG91Y2ggc3VwcG9ydFxuICAgIGNvbnN0IG1lbnVQcm9wcyA9IGdldE1lbnVQcm9wcygpXG4gICAgbWVudVByb3BzLmlubmVyUmVmID0gbWVudVByb3BzLnJlZlxuICAgIGRlbGV0ZSBtZW51UHJvcHMucmVmXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmUgd2lkdGg9e3dpZHRofSB7Li4ubWVudVByb3BzfT5cbiAgICAgICAge3RpdGxlICYmIChcbiAgICAgICAgICA8UGFuZSBwYWRkaW5nPXs4fSBib3JkZXJCb3R0b209XCJtdXRlZFwiPlxuICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT17MTAwfT57dGl0bGV9PC9IZWFkaW5nPlxuICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgKX1cbiAgICAgICAge2l0ZW1zLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxWaXJ0dWFsTGlzdFxuICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgIGhlaWdodD17TWF0aC5taW4oaXRlbXMubGVuZ3RoICogaXRlbVNpemUsIHBvcG92ZXJNYXhIZWlnaHQpfVxuICAgICAgICAgICAgaXRlbVNpemU9e2l0ZW1TaXplfVxuICAgICAgICAgICAgaXRlbUNvdW50PXtpdGVtcy5sZW5ndGh9XG4gICAgICAgICAgICBzY3JvbGxUb0luZGV4PXtoaWdobGlnaHRlZEluZGV4IHx8IDB9XG4gICAgICAgICAgICBvdmVyc2NhbkNvdW50PXszfVxuICAgICAgICAgICAgc2Nyb2xsVG9BbGlnbm1lbnQ9XCJhdXRvXCJcbiAgICAgICAgICAgIHJlbmRlckl0ZW09eyh7IGluZGV4LCBzdHlsZSB9KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tpbmRleF1cbiAgICAgICAgICAgICAgY29uc3QgaXRlbVN0cmluZyA9IGl0ZW1Ub1N0cmluZyhpdGVtKVxuXG4gICAgICAgICAgICAgIHJldHVybiByZW5kZXJJdGVtKFxuICAgICAgICAgICAgICAgIGdldEl0ZW1Qcm9wcyh7XG4gICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAga2V5OiBpdGVtU3RyaW5nLFxuICAgICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgICBzdHlsZSxcbiAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBpdGVtU3RyaW5nLFxuICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZDogaXRlbVRvU3RyaW5nKHNlbGVjdGVkSXRlbSkgPT09IGl0ZW1TdHJpbmcsXG4gICAgICAgICAgICAgICAgICBpc0hpZ2hsaWdodGVkOiBoaWdobGlnaHRlZEluZGV4ID09PSBpbmRleFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBpdGVtU2l6ZSxcbiAgICAgIHBvc2l0aW9uLFxuICAgICAgcmVuZGVySXRlbSxcbiAgICAgIGl0ZW1zRmlsdGVyLFxuICAgICAgcG9wb3Zlck1heEhlaWdodCxcbiAgICAgIHBvcG92ZXJNaW5XaWR0aCxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8RG93bnNoaWZ0XG4gICAgICAgIHN0YXRlUmVkdWNlcj17dGhpcy5zdGF0ZVJlZHVjZXJ9XG4gICAgICAgIHNjcm9sbEludG9WaWV3PXtub29wfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHsoe1xuICAgICAgICAgIGlzT3BlbjogaXNTaG93bixcbiAgICAgICAgICBpbnB1dFZhbHVlLFxuICAgICAgICAgIGdldEl0ZW1Qcm9wcyxcbiAgICAgICAgICBnZXRNZW51UHJvcHMsXG4gICAgICAgICAgc2VsZWN0ZWRJdGVtLFxuICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXgsXG4gICAgICAgICAgZ2V0Um9vdFByb3BzLFxuICAgICAgICAgIC4uLnJlc3REb3duc2hpZnRQcm9wc1xuICAgICAgICB9KSA9PiAoXG4gICAgICAgICAgPFBhbmUgd2lkdGg9XCIxMDAlXCIgey4uLmdldFJvb3RQcm9wcyh7IHJlZktleTogJ2lubmVyUmVmJyB9KX0+XG4gICAgICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgICAgICBicmluZ0ZvY3VzSW5zaWRlPXtmYWxzZX1cbiAgICAgICAgICAgICAgaXNTaG93bj17aXNTaG93bn1cbiAgICAgICAgICAgICAgbWluV2lkdGg9e3BvcG92ZXJNaW5XaWR0aH1cbiAgICAgICAgICAgICAgcG9zaXRpb249e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uIHx8XG4gICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUudGFyZ2V0V2lkdGggPCBwb3BvdmVyTWluV2lkdGhcbiAgICAgICAgICAgICAgICAgID8gUG9zaXRpb24uQk9UVE9NX0xFRlRcbiAgICAgICAgICAgICAgICAgIDogUG9zaXRpb24uQk9UVE9NKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRlbnQ9eygpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJSZXN1bHRzKHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBNYXRoLm1heCh0aGlzLnN0YXRlLnRhcmdldFdpZHRoLCBwb3BvdmVyTWluV2lkdGgpLFxuICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgIGdldEl0ZW1Qcm9wcyxcbiAgICAgICAgICAgICAgICAgIGdldE1lbnVQcm9wcyxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSxcbiAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXhcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBtaW5IZWlnaHQ9ezB9XG4gICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uPXswfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7KHsgaXNTaG93bjogaXNTaG93blBvcG92ZXIsIHRvZ2dsZSwgZ2V0UmVmIH0pID0+XG4gICAgICAgICAgICAgICAgY2hpbGRyZW4oe1xuICAgICAgICAgICAgICAgICAgaXNTaG93bjogaXNTaG93blBvcG92ZXIsXG4gICAgICAgICAgICAgICAgICB0b2dnbGUsXG4gICAgICAgICAgICAgICAgICBnZXRSZWY6IHJlZiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVzZSB0aGUgcmVmIGludGVybmFsbHkgdG8gZGV0ZXJtaW5lIHRoZSB3aWR0aFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFJlZiA9IHJlZlxuICAgICAgICAgICAgICAgICAgICBnZXRSZWYocmVmKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWUsXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0sXG4gICAgICAgICAgICAgICAgICBoaWdobGlnaHRlZEluZGV4LFxuICAgICAgICAgICAgICAgICAgLi4ucmVzdERvd25zaGlmdFByb3BzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgKX1cbiAgICAgIDwvRG93bnNoaWZ0PlxuICAgIClcbiAgfVxufVxuIl19