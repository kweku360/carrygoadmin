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

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _image = require("../../image");

var _typography = require("../../typography");

var _theme = require("../../theme");

var _getInitials = _interopRequireDefault(require("./utils/getInitials"));

var _hash = _interopRequireDefault(require("./utils/hash"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var isObjectFitSupported = typeof document !== 'undefined' && 'objectFit' in document.documentElement.style;
var initialsStyleClass = (0, _glamor.css)({
  top: 0,
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 1
}).toString();

var Avatar = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Avatar, _PureComponent);

  var _super = _createSuper(Avatar);

  function Avatar(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, Avatar);
    _this = _super.call(this, props, context);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleError", function () {
      _this.setState({
        imageHasFailedLoading: true
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getColorProps", function () {
      var _this$props = _this.props,
          isSolid = _this$props.isSolid,
          theme = _this$props.theme,
          color = _this$props.color,
          propsHashValue = _this$props.hashValue,
          name = _this$props.name;

      if (color === 'automatic') {
        var hashValue = (0, _hash["default"])(propsHashValue || name);
        return theme.getAvatarProps({
          isSolid: isSolid,
          color: color,
          hashValue: hashValue
        });
      }

      return theme.getAvatarProps({
        isSolid: isSolid,
        color: color
      });
    });
    _this.state = {
      imageHasFailedLoading: false
    };
    return _this;
  }

  (0, _createClass2["default"])(Avatar, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          theme = _this$props2.theme,
          src = _this$props2.src,
          size = _this$props2.size,
          name = _this$props2.name,
          isSolid = _this$props2.isSolid,
          propsHashValue = _this$props2.hashValue,
          getInitials = _this$props2.getInitials,
          propsColor = _this$props2.color,
          forceShowInitials = _this$props2.forceShowInitials,
          sizeLimitOneCharacter = _this$props2.sizeLimitOneCharacter,
          props = (0, _objectWithoutProperties2["default"])(_this$props2, ["theme", "src", "size", "name", "isSolid", "hashValue", "getInitials", "color", "forceShowInitials", "sizeLimitOneCharacter"]);
      var imageHasFailedLoading = this.state.imageHasFailedLoading;
      var imageUnavailable = !src || imageHasFailedLoading;
      var initialsFontSize = "".concat(theme.getAvatarInitialsFontSize(size, sizeLimitOneCharacter), "px");
      var initials = getInitials(name);

      if (size <= sizeLimitOneCharacter) {
        initials = initials.slice(0, 1);
      }

      var colorProps = this.getColorProps();
      return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
        width: size,
        height: size,
        overflow: "hidden",
        borderRadius: 9999,
        position: "relative",
        display: "inline-flex",
        flexShrink: 0,
        justifyContent: "center",
        backgroundColor: colorProps.backgroundColor,
        title: name
      }, props), (imageUnavailable || forceShowInitials) && _react["default"].createElement(_typography.Text, {
        className: initialsStyleClass,
        fontSize: initialsFontSize,
        lineHeight: initialsFontSize,
        width: size,
        height: size,
        color: colorProps.color
      }, initials), !imageUnavailable && _react["default"].createElement(_image.Image, {
        style: {
          objectFit: 'cover'
        } // Unsupported by ui-box directly
        ,
        width: isObjectFitSupported ? '100%' : 'auto' // Fallback to old behaviour on IE
        ,
        height: "100%",
        src: src,
        onError: this.handleError
      }));
    }
  }]);
  return Avatar;
}(_react.PureComponent);

Avatar.displayName = "Avatar";
(0, _defineProperty2["default"])(Avatar, "propTypes", {
  /**
   * The src attribute of the image.
   * When it's not available, render initials instead.
   */
  src: _propTypes["default"].string,

  /**
   * The size of the avatar.
   */
  size: _propTypes["default"].number,

  /**
   * The name used for the initials and title attribute.
   */
  name: _propTypes["default"].string,

  /**
   * The value used for the hash function.
   * The name is used as the hashValue by default.
   * When dealing with anonymous users you should use the id instead.
   */
  hashValue: _propTypes["default"].string,

  /**
   * When true, render a solid avatar.
   */
  isSolid: _propTypes["default"].bool,

  /**
   * The color used for the avatar.
   * When the value is `automatic`, use the hash function to determine the color.
   */
  color: _propTypes["default"].string.isRequired,

  /**
   * Function to get the initials based on the name.
   */
  getInitials: _propTypes["default"].func,

  /**
   * When true, force show the initials.
   * This is useful in some cases when using Gravatar and transparent pngs.
   */
  forceShowInitials: _propTypes["default"].bool,

  /**
   * When the size is smaller than this number, use a single initial for the avatar.
   */
  sizeLimitOneCharacter: _propTypes["default"].number,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired
});
(0, _defineProperty2["default"])(Avatar, "defaultProps", {
  color: 'automatic',
  size: 24,
  isSolid: false,
  getInitials: _getInitials["default"],
  forceShowInitials: false,
  sizeLimitOneCharacter: 20
});

var _default = (0, _theme.withTheme)(Avatar);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdmF0YXIvc3JjL0F2YXRhci5qcyJdLCJuYW1lcyI6WyJpc09iamVjdEZpdFN1cHBvcnRlZCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJpbml0aWFsc1N0eWxlQ2xhc3MiLCJ0b3AiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJsaW5lSGVpZ2h0IiwidG9TdHJpbmciLCJBdmF0YXIiLCJwcm9wcyIsImNvbnRleHQiLCJzZXRTdGF0ZSIsImltYWdlSGFzRmFpbGVkTG9hZGluZyIsImlzU29saWQiLCJ0aGVtZSIsImNvbG9yIiwicHJvcHNIYXNoVmFsdWUiLCJoYXNoVmFsdWUiLCJuYW1lIiwiZ2V0QXZhdGFyUHJvcHMiLCJzdGF0ZSIsInNyYyIsInNpemUiLCJnZXRJbml0aWFscyIsInByb3BzQ29sb3IiLCJmb3JjZVNob3dJbml0aWFscyIsInNpemVMaW1pdE9uZUNoYXJhY3RlciIsImltYWdlVW5hdmFpbGFibGUiLCJpbml0aWFsc0ZvbnRTaXplIiwiZ2V0QXZhdGFySW5pdGlhbHNGb250U2l6ZSIsImluaXRpYWxzIiwic2xpY2UiLCJjb2xvclByb3BzIiwiZ2V0Q29sb3JQcm9wcyIsImJhY2tncm91bmRDb2xvciIsIm9iamVjdEZpdCIsImhhbmRsZUVycm9yIiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN0cmluZyIsIm51bWJlciIsImJvb2wiLCJpc1JlcXVpcmVkIiwiZnVuYyIsIm9iamVjdCIsImdsb2JhbEdldEluaXRpYWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxvQkFBb0IsR0FDeEIsT0FBT0MsUUFBUCxLQUFvQixXQUFwQixJQUNBLGVBQWVBLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsS0FGMUM7QUFJQSxJQUFNQyxrQkFBa0IsR0FBRyxpQkFBSTtBQUM3QkMsRUFBQUEsR0FBRyxFQUFFLENBRHdCO0FBRTdCQyxFQUFBQSxRQUFRLEVBQUUsVUFGbUI7QUFHN0JDLEVBQUFBLE9BQU8sRUFBRSxNQUhvQjtBQUk3QkMsRUFBQUEsVUFBVSxFQUFFLFFBSmlCO0FBSzdCQyxFQUFBQSxjQUFjLEVBQUUsUUFMYTtBQU03QkMsRUFBQUEsVUFBVSxFQUFFO0FBTmlCLENBQUosRUFPeEJDLFFBUHdCLEVBQTNCOztJQVNNQyxNOzs7OztBQW1FSixrQkFBWUMsS0FBWixFQUFtQkMsT0FBbkIsRUFBNEI7QUFBQTs7QUFBQTtBQUMxQiw4QkFBTUQsS0FBTixFQUFhQyxPQUFiO0FBRDBCLG9HQUtkLFlBQU07QUFDbEIsWUFBS0MsUUFBTCxDQUFjO0FBQUVDLFFBQUFBLHFCQUFxQixFQUFFO0FBQXpCLE9BQWQ7QUFDRCxLQVAyQjtBQUFBLHNHQVNaLFlBQU07QUFBQSx3QkFPaEIsTUFBS0gsS0FQVztBQUFBLFVBRWxCSSxPQUZrQixlQUVsQkEsT0FGa0I7QUFBQSxVQUdsQkMsS0FIa0IsZUFHbEJBLEtBSGtCO0FBQUEsVUFJbEJDLEtBSmtCLGVBSWxCQSxLQUprQjtBQUFBLFVBS1BDLGNBTE8sZUFLbEJDLFNBTGtCO0FBQUEsVUFNbEJDLElBTmtCLGVBTWxCQSxJQU5rQjs7QUFTcEIsVUFBSUgsS0FBSyxLQUFLLFdBQWQsRUFBMkI7QUFDekIsWUFBTUUsU0FBUyxHQUFHLHNCQUFXRCxjQUFjLElBQUlFLElBQTdCLENBQWxCO0FBQ0EsZUFBT0osS0FBSyxDQUFDSyxjQUFOLENBQXFCO0FBQUVOLFVBQUFBLE9BQU8sRUFBUEEsT0FBRjtBQUFXRSxVQUFBQSxLQUFLLEVBQUxBLEtBQVg7QUFBa0JFLFVBQUFBLFNBQVMsRUFBVEE7QUFBbEIsU0FBckIsQ0FBUDtBQUNEOztBQUVELGFBQU9ILEtBQUssQ0FBQ0ssY0FBTixDQUFxQjtBQUFFTixRQUFBQSxPQUFPLEVBQVBBLE9BQUY7QUFBV0UsUUFBQUEsS0FBSyxFQUFMQTtBQUFYLE9BQXJCLENBQVA7QUFDRCxLQXhCMkI7QUFFMUIsVUFBS0ssS0FBTCxHQUFhO0FBQUVSLE1BQUFBLHFCQUFxQixFQUFFO0FBQXpCLEtBQWI7QUFGMEI7QUFHM0I7Ozs7NkJBdUJRO0FBQUEseUJBY0gsS0FBS0gsS0FkRjtBQUFBLFVBRUxLLEtBRkssZ0JBRUxBLEtBRks7QUFBQSxVQUlMTyxHQUpLLGdCQUlMQSxHQUpLO0FBQUEsVUFLTEMsSUFMSyxnQkFLTEEsSUFMSztBQUFBLFVBTUxKLElBTkssZ0JBTUxBLElBTks7QUFBQSxVQU9MTCxPQVBLLGdCQU9MQSxPQVBLO0FBQUEsVUFRTUcsY0FSTixnQkFRTEMsU0FSSztBQUFBLFVBU0xNLFdBVEssZ0JBU0xBLFdBVEs7QUFBQSxVQVVFQyxVQVZGLGdCQVVMVCxLQVZLO0FBQUEsVUFXTFUsaUJBWEssZ0JBV0xBLGlCQVhLO0FBQUEsVUFZTEMscUJBWkssZ0JBWUxBLHFCQVpLO0FBQUEsVUFhRmpCLEtBYkU7QUFBQSxVQWdCQ0cscUJBaEJELEdBZ0IyQixLQUFLUSxLQWhCaEMsQ0FnQkNSLHFCQWhCRDtBQWlCUCxVQUFNZSxnQkFBZ0IsR0FBRyxDQUFDTixHQUFELElBQVFULHFCQUFqQztBQUNBLFVBQU1nQixnQkFBZ0IsYUFBTWQsS0FBSyxDQUFDZSx5QkFBTixDQUMxQlAsSUFEMEIsRUFFMUJJLHFCQUYwQixDQUFOLE9BQXRCO0FBS0EsVUFBSUksUUFBUSxHQUFHUCxXQUFXLENBQUNMLElBQUQsQ0FBMUI7O0FBQ0EsVUFBSUksSUFBSSxJQUFJSSxxQkFBWixFQUFtQztBQUNqQ0ksUUFBQUEsUUFBUSxHQUFHQSxRQUFRLENBQUNDLEtBQVQsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLENBQVg7QUFDRDs7QUFFRCxVQUFNQyxVQUFVLEdBQUcsS0FBS0MsYUFBTCxFQUFuQjtBQUVBLGFBQ0UsZ0NBQUMsaUJBQUQ7QUFDRSxRQUFBLEtBQUssRUFBRVgsSUFEVDtBQUVFLFFBQUEsTUFBTSxFQUFFQSxJQUZWO0FBR0UsUUFBQSxRQUFRLEVBQUMsUUFIWDtBQUlFLFFBQUEsWUFBWSxFQUFFLElBSmhCO0FBS0UsUUFBQSxRQUFRLEVBQUMsVUFMWDtBQU1FLFFBQUEsT0FBTyxFQUFDLGFBTlY7QUFPRSxRQUFBLFVBQVUsRUFBRSxDQVBkO0FBUUUsUUFBQSxjQUFjLEVBQUMsUUFSakI7QUFTRSxRQUFBLGVBQWUsRUFBRVUsVUFBVSxDQUFDRSxlQVQ5QjtBQVVFLFFBQUEsS0FBSyxFQUFFaEI7QUFWVCxTQVdNVCxLQVhOLEdBYUcsQ0FBQ2tCLGdCQUFnQixJQUFJRixpQkFBckIsS0FDQyxnQ0FBQyxnQkFBRDtBQUNFLFFBQUEsU0FBUyxFQUFFekIsa0JBRGI7QUFFRSxRQUFBLFFBQVEsRUFBRTRCLGdCQUZaO0FBR0UsUUFBQSxVQUFVLEVBQUVBLGdCQUhkO0FBSUUsUUFBQSxLQUFLLEVBQUVOLElBSlQ7QUFLRSxRQUFBLE1BQU0sRUFBRUEsSUFMVjtBQU1FLFFBQUEsS0FBSyxFQUFFVSxVQUFVLENBQUNqQjtBQU5wQixTQVFHZSxRQVJILENBZEosRUF5QkcsQ0FBQ0gsZ0JBQUQsSUFDQyxnQ0FBQyxZQUFEO0FBQ0UsUUFBQSxLQUFLLEVBQUU7QUFBRVEsVUFBQUEsU0FBUyxFQUFFO0FBQWIsU0FEVCxDQUNpQztBQURqQztBQUVFLFFBQUEsS0FBSyxFQUFFdkMsb0JBQW9CLEdBQUcsTUFBSCxHQUFZLE1BRnpDLENBRWlEO0FBRmpEO0FBR0UsUUFBQSxNQUFNLEVBQUMsTUFIVDtBQUlFLFFBQUEsR0FBRyxFQUFFeUIsR0FKUDtBQUtFLFFBQUEsT0FBTyxFQUFFLEtBQUtlO0FBTGhCLFFBMUJKLENBREY7QUFxQ0Q7OztFQWhLa0JDLG9COztBQUFmN0IsTTtpQ0FBQUEsTSxlQUNlO0FBQ2pCOzs7O0FBSUFhLEVBQUFBLEdBQUcsRUFBRWlCLHNCQUFVQyxNQUxFOztBQU9qQjs7O0FBR0FqQixFQUFBQSxJQUFJLEVBQUVnQixzQkFBVUUsTUFWQzs7QUFZakI7OztBQUdBdEIsRUFBQUEsSUFBSSxFQUFFb0Isc0JBQVVDLE1BZkM7O0FBaUJqQjs7Ozs7QUFLQXRCLEVBQUFBLFNBQVMsRUFBRXFCLHNCQUFVQyxNQXRCSjs7QUF3QmpCOzs7QUFHQTFCLEVBQUFBLE9BQU8sRUFBRXlCLHNCQUFVRyxJQTNCRjs7QUE2QmpCOzs7O0FBSUExQixFQUFBQSxLQUFLLEVBQUV1QixzQkFBVUMsTUFBVixDQUFpQkcsVUFqQ1A7O0FBbUNqQjs7O0FBR0FuQixFQUFBQSxXQUFXLEVBQUVlLHNCQUFVSyxJQXRDTjs7QUF3Q2pCOzs7O0FBSUFsQixFQUFBQSxpQkFBaUIsRUFBRWEsc0JBQVVHLElBNUNaOztBQThDakI7OztBQUdBZixFQUFBQSxxQkFBcUIsRUFBRVksc0JBQVVFLE1BakRoQjs7QUFtRGpCOzs7QUFHQTFCLEVBQUFBLEtBQUssRUFBRXdCLHNCQUFVTSxNQUFWLENBQWlCRjtBQXREUCxDO2lDQURmbEMsTSxrQkEwRGtCO0FBQ3BCTyxFQUFBQSxLQUFLLEVBQUUsV0FEYTtBQUVwQk8sRUFBQUEsSUFBSSxFQUFFLEVBRmM7QUFHcEJULEVBQUFBLE9BQU8sRUFBRSxLQUhXO0FBSXBCVSxFQUFBQSxXQUFXLEVBQUVzQix1QkFKTztBQUtwQnBCLEVBQUFBLGlCQUFpQixFQUFFLEtBTEM7QUFNcEJDLEVBQUFBLHFCQUFxQixFQUFFO0FBTkgsQzs7ZUF5R1Qsc0JBQVVsQixNQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJy4uLy4uL2ltYWdlJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCBnbG9iYWxHZXRJbml0aWFscyBmcm9tICcuL3V0aWxzL2dldEluaXRpYWxzJ1xuaW1wb3J0IGdsb2JhbEhhc2ggZnJvbSAnLi91dGlscy9oYXNoJ1xuXG5jb25zdCBpc09iamVjdEZpdFN1cHBvcnRlZCA9XG4gIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ29iamVjdEZpdCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlXG5cbmNvbnN0IGluaXRpYWxzU3R5bGVDbGFzcyA9IGNzcyh7XG4gIHRvcDogMCxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgbGluZUhlaWdodDogMVxufSkudG9TdHJpbmcoKVxuXG5jbGFzcyBBdmF0YXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgc3JjIGF0dHJpYnV0ZSBvZiB0aGUgaW1hZ2UuXG4gICAgICogV2hlbiBpdCdzIG5vdCBhdmFpbGFibGUsIHJlbmRlciBpbml0aWFscyBpbnN0ZWFkLlxuICAgICAqL1xuICAgIHNyYzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBzaXplIG9mIHRoZSBhdmF0YXIuXG4gICAgICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIHVzZWQgZm9yIHRoZSBpbml0aWFscyBhbmQgdGl0bGUgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgdXNlZCBmb3IgdGhlIGhhc2ggZnVuY3Rpb24uXG4gICAgICogVGhlIG5hbWUgaXMgdXNlZCBhcyB0aGUgaGFzaFZhbHVlIGJ5IGRlZmF1bHQuXG4gICAgICogV2hlbiBkZWFsaW5nIHdpdGggYW5vbnltb3VzIHVzZXJzIHlvdSBzaG91bGQgdXNlIHRoZSBpZCBpbnN0ZWFkLlxuICAgICAqL1xuICAgIGhhc2hWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgcmVuZGVyIGEgc29saWQgYXZhdGFyLlxuICAgICAqL1xuICAgIGlzU29saWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbG9yIHVzZWQgZm9yIHRoZSBhdmF0YXIuXG4gICAgICogV2hlbiB0aGUgdmFsdWUgaXMgYGF1dG9tYXRpY2AsIHVzZSB0aGUgaGFzaCBmdW5jdGlvbiB0byBkZXRlcm1pbmUgdGhlIGNvbG9yLlxuICAgICAqL1xuICAgIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0byBnZXQgdGhlIGluaXRpYWxzIGJhc2VkIG9uIHRoZSBuYW1lLlxuICAgICAqL1xuICAgIGdldEluaXRpYWxzOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgZm9yY2Ugc2hvdyB0aGUgaW5pdGlhbHMuXG4gICAgICogVGhpcyBpcyB1c2VmdWwgaW4gc29tZSBjYXNlcyB3aGVuIHVzaW5nIEdyYXZhdGFyIGFuZCB0cmFuc3BhcmVudCBwbmdzLlxuICAgICAqL1xuICAgIGZvcmNlU2hvd0luaXRpYWxzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdGhlIHNpemUgaXMgc21hbGxlciB0aGFuIHRoaXMgbnVtYmVyLCB1c2UgYSBzaW5nbGUgaW5pdGlhbCBmb3IgdGhlIGF2YXRhci5cbiAgICAgKi9cbiAgICBzaXplTGltaXRPbmVDaGFyYWN0ZXI6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29sb3I6ICdhdXRvbWF0aWMnLFxuICAgIHNpemU6IDI0LFxuICAgIGlzU29saWQ6IGZhbHNlLFxuICAgIGdldEluaXRpYWxzOiBnbG9iYWxHZXRJbml0aWFscyxcbiAgICBmb3JjZVNob3dJbml0aWFsczogZmFsc2UsXG4gICAgc2l6ZUxpbWl0T25lQ2hhcmFjdGVyOiAyMFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dClcbiAgICB0aGlzLnN0YXRlID0geyBpbWFnZUhhc0ZhaWxlZExvYWRpbmc6IGZhbHNlIH1cbiAgfVxuXG4gIGhhbmRsZUVycm9yID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZUhhc0ZhaWxlZExvYWRpbmc6IHRydWUgfSlcbiAgfVxuXG4gIGdldENvbG9yUHJvcHMgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaXNTb2xpZCxcbiAgICAgIHRoZW1lLFxuICAgICAgY29sb3IsXG4gICAgICBoYXNoVmFsdWU6IHByb3BzSGFzaFZhbHVlLFxuICAgICAgbmFtZVxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAoY29sb3IgPT09ICdhdXRvbWF0aWMnKSB7XG4gICAgICBjb25zdCBoYXNoVmFsdWUgPSBnbG9iYWxIYXNoKHByb3BzSGFzaFZhbHVlIHx8IG5hbWUpXG4gICAgICByZXR1cm4gdGhlbWUuZ2V0QXZhdGFyUHJvcHMoeyBpc1NvbGlkLCBjb2xvciwgaGFzaFZhbHVlIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoZW1lLmdldEF2YXRhclByb3BzKHsgaXNTb2xpZCwgY29sb3IgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aGVtZSxcblxuICAgICAgc3JjLFxuICAgICAgc2l6ZSxcbiAgICAgIG5hbWUsXG4gICAgICBpc1NvbGlkLFxuICAgICAgaGFzaFZhbHVlOiBwcm9wc0hhc2hWYWx1ZSxcbiAgICAgIGdldEluaXRpYWxzLFxuICAgICAgY29sb3I6IHByb3BzQ29sb3IsXG4gICAgICBmb3JjZVNob3dJbml0aWFscyxcbiAgICAgIHNpemVMaW1pdE9uZUNoYXJhY3RlcixcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHsgaW1hZ2VIYXNGYWlsZWRMb2FkaW5nIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgaW1hZ2VVbmF2YWlsYWJsZSA9ICFzcmMgfHwgaW1hZ2VIYXNGYWlsZWRMb2FkaW5nXG4gICAgY29uc3QgaW5pdGlhbHNGb250U2l6ZSA9IGAke3RoZW1lLmdldEF2YXRhckluaXRpYWxzRm9udFNpemUoXG4gICAgICBzaXplLFxuICAgICAgc2l6ZUxpbWl0T25lQ2hhcmFjdGVyXG4gICAgKX1weGBcblxuICAgIGxldCBpbml0aWFscyA9IGdldEluaXRpYWxzKG5hbWUpXG4gICAgaWYgKHNpemUgPD0gc2l6ZUxpbWl0T25lQ2hhcmFjdGVyKSB7XG4gICAgICBpbml0aWFscyA9IGluaXRpYWxzLnNsaWNlKDAsIDEpXG4gICAgfVxuXG4gICAgY29uc3QgY29sb3JQcm9wcyA9IHRoaXMuZ2V0Q29sb3JQcm9wcygpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICB3aWR0aD17c2l6ZX1cbiAgICAgICAgaGVpZ2h0PXtzaXplfVxuICAgICAgICBvdmVyZmxvdz1cImhpZGRlblwiXG4gICAgICAgIGJvcmRlclJhZGl1cz17OTk5OX1cbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgIGRpc3BsYXk9XCJpbmxpbmUtZmxleFwiXG4gICAgICAgIGZsZXhTaHJpbms9ezB9XG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yPXtjb2xvclByb3BzLmJhY2tncm91bmRDb2xvcn1cbiAgICAgICAgdGl0bGU9e25hbWV9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAgeyhpbWFnZVVuYXZhaWxhYmxlIHx8IGZvcmNlU2hvd0luaXRpYWxzKSAmJiAoXG4gICAgICAgICAgPFRleHRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17aW5pdGlhbHNTdHlsZUNsYXNzfVxuICAgICAgICAgICAgZm9udFNpemU9e2luaXRpYWxzRm9udFNpemV9XG4gICAgICAgICAgICBsaW5lSGVpZ2h0PXtpbml0aWFsc0ZvbnRTaXplfVxuICAgICAgICAgICAgd2lkdGg9e3NpemV9XG4gICAgICAgICAgICBoZWlnaHQ9e3NpemV9XG4gICAgICAgICAgICBjb2xvcj17Y29sb3JQcm9wcy5jb2xvcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aW5pdGlhbHN9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICApfVxuICAgICAgICB7IWltYWdlVW5hdmFpbGFibGUgJiYgKFxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3R5bGU9e3sgb2JqZWN0Rml0OiAnY292ZXInIH19IC8vIFVuc3VwcG9ydGVkIGJ5IHVpLWJveCBkaXJlY3RseVxuICAgICAgICAgICAgd2lkdGg9e2lzT2JqZWN0Rml0U3VwcG9ydGVkID8gJzEwMCUnIDogJ2F1dG8nfSAvLyBGYWxsYmFjayB0byBvbGQgYmVoYXZpb3VyIG9uIElFXG4gICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgIHNyYz17c3JjfVxuICAgICAgICAgICAgb25FcnJvcj17dGhpcy5oYW5kbGVFcnJvcn1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShBdmF0YXIpXG4iXX0=