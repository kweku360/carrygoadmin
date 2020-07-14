"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layers = require("../../layers");

var _typography = require("../../typography");

var _theme = require("../../theme");

var _MenuOption = _interopRequireDefault(require("./MenuOption"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var MenuOptionsGroup = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(MenuOptionsGroup, _React$PureComponent);

  var _super = _createSuper(MenuOptionsGroup);

  function MenuOptionsGroup() {
    (0, _classCallCheck2["default"])(this, MenuOptionsGroup);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(MenuOptionsGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          options = _this$props.options,
          selected = _this$props.selected,
          onChange = _this$props.onChange;
      return _react["default"].createElement(_layers.Pane, {
        paddingY: 8
      }, title && _react["default"].createElement(_typography.Heading, {
        size: 100,
        marginLeft: 44,
        marginRight: 16,
        marginY: 8
      }, title), _react["default"].createElement(_layers.Pane, null, options.map(function (option) {
        return _react["default"].createElement(_MenuOption["default"], {
          key: option.value,
          isSelected: option.value === selected,
          onSelect: function onSelect() {
            return onChange(option.value);
          }
        }, option.label);
      })));
    }
  }]);
  return MenuOptionsGroup;
}(_react["default"].PureComponent);

MenuOptionsGroup.displayName = "MenuOptionsGroup";
(0, _defineProperty2["default"])(MenuOptionsGroup, "propTypes", {
  /**
   * Title of the menu group.
   */
  title: _propTypes["default"].node,

  /**
   * The current value of the option group.
   */
  selected: _propTypes["default"].any,

  /**
   * Function called when selection changes.
   */
  onChange: _propTypes["default"].func,

  /**
   * List of options rendered in the group.
   */
  options: _propTypes["default"].array
});

var _default = (0, _theme.withTheme)(MenuOptionsGroup);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tZW51L3NyYy9NZW51T3B0aW9uc0dyb3VwLmpzIl0sIm5hbWVzIjpbIk1lbnVPcHRpb25zR3JvdXAiLCJwcm9wcyIsInRpdGxlIiwib3B0aW9ucyIsInNlbGVjdGVkIiwib25DaGFuZ2UiLCJtYXAiLCJvcHRpb24iLCJ2YWx1ZSIsImxhYmVsIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwibm9kZSIsImFueSIsImZ1bmMiLCJhcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztJQUVNQSxnQjs7Ozs7Ozs7Ozs7OzZCQXVCSztBQUFBLHdCQUN3QyxLQUFLQyxLQUQ3QztBQUFBLFVBQ0NDLEtBREQsZUFDQ0EsS0FERDtBQUFBLFVBQ1FDLE9BRFIsZUFDUUEsT0FEUjtBQUFBLFVBQ2lCQyxRQURqQixlQUNpQkEsUUFEakI7QUFBQSxVQUMyQkMsUUFEM0IsZUFDMkJBLFFBRDNCO0FBR1AsYUFDRSxnQ0FBQyxZQUFEO0FBQU0sUUFBQSxRQUFRLEVBQUU7QUFBaEIsU0FDR0gsS0FBSyxJQUNKLGdDQUFDLG1CQUFEO0FBQVMsUUFBQSxJQUFJLEVBQUUsR0FBZjtBQUFvQixRQUFBLFVBQVUsRUFBRSxFQUFoQztBQUFvQyxRQUFBLFdBQVcsRUFBRSxFQUFqRDtBQUFxRCxRQUFBLE9BQU8sRUFBRTtBQUE5RCxTQUNHQSxLQURILENBRkosRUFNRSxnQ0FBQyxZQUFELFFBQ0dDLE9BQU8sQ0FBQ0csR0FBUixDQUFZLFVBQUNDLE1BQUQsRUFBWTtBQUN2QixlQUNFLGdDQUFDLHNCQUFEO0FBQ0UsVUFBQSxHQUFHLEVBQUVBLE1BQU0sQ0FBQ0MsS0FEZDtBQUVFLFVBQUEsVUFBVSxFQUFFRCxNQUFNLENBQUNDLEtBQVAsS0FBaUJKLFFBRi9CO0FBR0UsVUFBQSxRQUFRLEVBQUU7QUFBQSxtQkFBTUMsUUFBUSxDQUFDRSxNQUFNLENBQUNDLEtBQVIsQ0FBZDtBQUFBO0FBSFosV0FLR0QsTUFBTSxDQUFDRSxLQUxWLENBREY7QUFTRCxPQVZBLENBREgsQ0FORixDQURGO0FBc0JEOzs7RUFoRDRCQyxrQkFBTUMsYTs7QUFBL0JYLGdCO2lDQUFBQSxnQixlQUNlO0FBQ2pCOzs7QUFHQUUsRUFBQUEsS0FBSyxFQUFFVSxzQkFBVUMsSUFKQTs7QUFNakI7OztBQUdBVCxFQUFBQSxRQUFRLEVBQUVRLHNCQUFVRSxHQVRIOztBQVdqQjs7O0FBR0FULEVBQUFBLFFBQVEsRUFBRU8sc0JBQVVHLElBZEg7O0FBZ0JqQjs7O0FBR0FaLEVBQUFBLE9BQU8sRUFBRVMsc0JBQVVJO0FBbkJGLEM7O2VBa0ROLHNCQUFVaEIsZ0JBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBIZWFkaW5nIH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuaW1wb3J0IE1lbnVPcHRpb24gZnJvbSAnLi9NZW51T3B0aW9uJ1xuXG5jbGFzcyBNZW51T3B0aW9uc0dyb3VwIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGl0bGUgb2YgdGhlIG1lbnUgZ3JvdXAuXG4gICAgICovXG4gICAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIG9wdGlvbiBncm91cC5cbiAgICAgKi9cbiAgICBzZWxlY3RlZDogUHJvcFR5cGVzLmFueSxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHNlbGVjdGlvbiBjaGFuZ2VzLlxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIExpc3Qgb2Ygb3B0aW9ucyByZW5kZXJlZCBpbiB0aGUgZ3JvdXAuXG4gICAgICovXG4gICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgb3B0aW9ucywgc2VsZWN0ZWQsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmUgcGFkZGluZ1k9ezh9PlxuICAgICAgICB7dGl0bGUgJiYgKFxuICAgICAgICAgIDxIZWFkaW5nIHNpemU9ezEwMH0gbWFyZ2luTGVmdD17NDR9IG1hcmdpblJpZ2h0PXsxNn0gbWFyZ2luWT17OH0+XG4gICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICApfVxuICAgICAgICA8UGFuZT5cbiAgICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPE1lbnVPcHRpb25cbiAgICAgICAgICAgICAgICBrZXk9e29wdGlvbi52YWx1ZX1cbiAgICAgICAgICAgICAgICBpc1NlbGVjdGVkPXtvcHRpb24udmFsdWUgPT09IHNlbGVjdGVkfVxuICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsoKSA9PiBvbkNoYW5nZShvcHRpb24udmFsdWUpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cbiAgICAgICAgICAgICAgPC9NZW51T3B0aW9uPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L1BhbmU+XG4gICAgICA8L1BhbmU+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShNZW51T3B0aW9uc0dyb3VwKVxuIl19