'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var parse = require('html-react-parser');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var parse__default = /*#__PURE__*/_interopDefaultLegacy(parse);

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".read-more-more-module_btn__33IaH {\n  border: none;\n  background: transparent;\n  outline: none;\n  cursor: pointer;\n  font-size: 1rem;\n  color: #0059ff;\n  padding: 0; }\n\n.read-more-more-module_btn__33IaH::after {\n  content: \"\";\n  display: block;\n  width: 0;\n  height: 2px;\n  background: #ffd000;\n  transition: width 0.3s; }\n\n.read-more-more-module_btn__33IaH:hover::after {\n  width: 100%; }\n\n.read-more-more-module_readMoreActive__2WQ45 {\n  max-height: 1000px; }\n\n.read-more-more-module_readMoreIdle__1vK4q {\n  max-height: 100px; }\n";
var styles = {"btn":"read-more-more-module_btn__33IaH","readMoreActive":"read-more-more-module_readMoreActive__2WQ45","readMoreIdle":"read-more-more-module_readMoreIdle__1vK4q"};
styleInject(css_248z);

var ReadMoreMore = function ReadMoreMore(_ref) {
  var text = _ref.text,
      checkFor = _ref.checkFor,
      btnStyles = _ref.btnStyles,
      transDuration = _ref.transDuration,
      transType = _ref.transType,
      linesToShow = _ref.linesToShow,
      parseHtml = _ref.parseHtml,
      readMoreText = _ref.readMoreText,
      readLessText = _ref.readLessText;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      fullText = _useState2[0],
      setFullText = _useState2[1];

  if ((text === null || text === void 0 ? void 0 : text.length) > checkFor || 300) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      style: {
        margin: "0",
        padding: "0"
      }
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      style: {
        transition: "max-height ".concat(transDuration || "2s", " ").concat(transType || "linear"),
        overflow: "hidden",
        display: "block",
        lineHeight: "20px",
        maxHeight: fullText ? "1000px" : "".concat(linesToShow ? "".concat(linesToShow * 20, "px") : "100px")
      }
    }, parseHtml ? parse__default['default'](text) : text ? text : ""), fullText ? /*#__PURE__*/React__default['default'].createElement("button", {
      style: btnStyles,
      className: styles.btn,
      onClick: function onClick() {
        return setFullText(false);
      }
    }, readLessText ? readLessText : "read less...") : /*#__PURE__*/React__default['default'].createElement("button", {
      style: btnStyles,
      className: styles.btn,
      onClick: function onClick() {
        return setFullText(true);
      }
    }, readMoreText ? readMoreText : "read more..."));
  } else {
    return /*#__PURE__*/React__default['default'].createElement("div", null, parseHtml ? parse__default['default'](text) : text);
  }
};

exports.ReadMoreMore = ReadMoreMore;
