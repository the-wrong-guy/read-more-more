import React, { useState, useRef, useEffect } from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

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
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

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
  var _ref2;

  var text = _ref.text,
      checkFor = _ref.checkFor,
      btnStyles = _ref.btnStyles,
      transDuration = _ref.transDuration,
      transType = _ref.transType,
      linesToShow = _ref.linesToShow,
      parseHtml = _ref.parseHtml,
      readMoreText = _ref.readMoreText,
      readLessText = _ref.readLessText,
      textStyles = _ref.textStyles;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      fullText = _useState2[0],
      setFullText = _useState2[1]; // const textDiv = useRef(null);
  // useEffect(() => {
  //   const height = textDiv.current.offsetHeight;
  // }, [fullText]);


  if ((_ref2 = (text === null || text === void 0 ? void 0 : text.length) > checkFor) !== null && _ref2 !== void 0 ? _ref2 : 300) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        margin: "0",
        padding: "0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: _objectSpread2({
        transition: "max-height ".concat(transDuration !== null && transDuration !== void 0 ? transDuration : "2s", " ").concat(transType !== null && transType !== void 0 ? transType : "linear"),
        overflow: "hidden",
        display: "block",
        lineHeight: "20px",
        maxHeight: fullText ? "1000px" : linesToShow ? "".concat(linesToShow * 20, "px") : "60px"
      }, textStyles)
    }, parseHtml ? parse(text) : text ? text : ""), fullText ? /*#__PURE__*/React.createElement("button", {
      style: btnStyles,
      className: styles.btn,
      onClick: function onClick() {
        return setFullText(false);
      }
    }, readLessText ? readLessText : "read less...") : /*#__PURE__*/React.createElement("button", {
      style: btnStyles,
      className: styles.btn,
      onClick: function onClick() {
        return setFullText(true);
      }
    }, readMoreText ? readMoreText : "read more..."));
  } else {
    return /*#__PURE__*/React.createElement("div", null, parseHtml ? parse(text) : text);
  }
};

ReadMoreMore.propTypes = {
  text: PropTypes.string.isRequired,
  textStyles: PropTypes.object,
  checkFor: PropTypes.number,
  btnStyles: PropTypes.object,
  transDuration: PropTypes.number,
  transType: PropTypes.string,
  linesToShow: PropTypes.number,
  parseHtml: PropTypes.bool,
  readMoreText: PropTypes.string,
  readLessText: PropTypes.string
};

var AdvReadMoreMore = function AdvReadMoreMore(_ref) {
  var _ref2;

  var text = _ref.text,
      checkFor = _ref.checkFor,
      btnStyles = _ref.btnStyles,
      transDuration = _ref.transDuration,
      transType = _ref.transType,
      linesToShow = _ref.linesToShow,
      parseHtml = _ref.parseHtml,
      readMoreText = _ref.readMoreText,
      readLessText = _ref.readLessText,
      lineHeight = _ref.lineHeight,
      fontSize = _ref.fontSize,
      color = _ref.color;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      clicked = _useState2[0],
      setClicked = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      divHeight = _useState4[0],
      setDivHeight = _useState4[1];

  var oneTime = useRef(false);
  var divRef = useRef(null);

  function settingHeightForTransition() {
    if (!oneTime.current) {
      oneTime.current = true;
      setDivHeight(divRef === null || divRef === void 0 ? void 0 : divRef.current.offsetHeight);
    }
  }

  window.addEventListener("resize", function () {
    setDivHeight(null);
    oneTime.current = false;
    setClicked(false);
  });
  useEffect(function () {
    var _divRef$current;

    divRef === null || divRef === void 0 ? void 0 : (_divRef$current = divRef.current) === null || _divRef$current === void 0 ? void 0 : _divRef$current.addEventListener("transitionend", settingHeightForTransition);
  }, []);

  var handleBtnClick = function handleBtnClick() {
    setClicked(!clicked);
  };

  var textStyles = {
    overflow: "hidden",
    maxHeight: clicked ? oneTime !== null && oneTime !== void 0 && oneTime.current ? "".concat(divHeight, "px") : "200px" : linesToShow ? "".concat(linesToShow * (lineHeight !== null && lineHeight !== void 0 ? lineHeight : 20), "px") : "60px",
    transition: "max-height ".concat(transDuration !== null && transDuration !== void 0 ? transDuration : "1s", " ").concat(transType !== null && transType !== void 0 ? transType : "ease-in-out"),
    textAlign: "justify",
    lineHeight: lineHeight ? "".concat(lineHeight, "px") : "20px",
    fontSize: fontSize ? "".concat(fontSize, "px") : "15px",
    color: color !== null && color !== void 0 ? color : "#000"
  };

  if ((_ref2 = (text === null || text === void 0 ? void 0 : text.length) > checkFor) !== null && _ref2 !== void 0 ? _ref2 : 300) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: textStyles,
      ref: divRef
    }, parseHtml ? parse(text) : text), clicked ? /*#__PURE__*/React.createElement("button", {
      style: btnStyles && btnStyles,
      className: styles.btn,
      onClick: handleBtnClick
    }, readLessText ? readLessText : "read less...") : /*#__PURE__*/React.createElement("button", {
      style: btnStyles,
      className: styles.btn,
      onClick: handleBtnClick
    }, readMoreText ? readMoreText : "read more..."));
  } else {
    return /*#__PURE__*/React.createElement("div", null, parseHtml ? parse(text) : text);
  }
};

AdvReadMoreMore.propTypes = {
  text: PropTypes.string.isRequired,
  checkFor: PropTypes.number,
  btnStyles: PropTypes.object,
  transDuration: PropTypes.number,
  transType: PropTypes.string,
  linesToShow: PropTypes.number,
  parseHtml: PropTypes.bool,
  readMoreText: PropTypes.string,
  readLessText: PropTypes.string,
  lineHeight: PropTypes.number,
  fontSize: PropTypes.number,
  color: PropTypes.string
};

export { AdvReadMoreMore, ReadMoreMore };
