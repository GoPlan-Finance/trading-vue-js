/*!
 * TradingVue.JS - v1.0.1 - Tue Mar 23 2021
 *     https://github.com/tvjsx/trading-vue-js
 *     Copyright (c) 2019 C451 Code's All Right;
 *     Licensed under the MIT license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TradingVueJs"] = factory();
	else
		root["TradingVueJs"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EMPTY_ARR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EMPTY_OBJ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NOOP; });
/* unused harmony export PatchFlagNames */
/* unused harmony export babelParserDefaultPlugins */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return camelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return def; });
/* unused harmony export escapeHtml */
/* unused harmony export escapeHtmlComment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return extend; });
/* unused harmony export generateCodeFrame */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getGlobalThis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return hasChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return hasOwn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return hyphenate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return invokeArrayFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return isArray; });
/* unused harmony export isBooleanAttr */
/* unused harmony export isDate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return isGloballyWhitelisted; });
/* unused harmony export isHTMLTag */
/* unused harmony export isIntegerKey */
/* unused harmony export isKnownAttr */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return isMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return isModelListener; });
/* unused harmony export isNoUnitNumericStyleProp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return isOn; });
/* unused harmony export isPlainObject */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return isPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return isReservedProp; });
/* unused harmony export isSSRSafeAttrName */
/* unused harmony export isSVGTag */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return isSet; });
/* unused harmony export isSpecialBooleanAttr */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return isString; });
/* unused harmony export isSymbol */
/* unused harmony export isVoidTag */
/* unused harmony export looseEqual */
/* unused harmony export looseIndexOf */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return makeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return normalizeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return normalizeStyle; });
/* unused harmony export objectToString */
/* unused harmony export parseStringStyle */
/* unused harmony export propsToAttrMap */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return remove; });
/* unused harmony export slotFlagsText */
/* unused harmony export stringifyStyle */
/* unused harmony export toDisplayString */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return toHandlerKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return toRawType; });
/* unused harmony export toTypeString */
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(',');
    for (let i = 0; i < list.length; i++) {
        map[list[i]] = true;
    }
    return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val];
}

/**
 * dev only flag -> name mapping
 */
const PatchFlagNames = {
    [1 /* TEXT */]: `TEXT`,
    [2 /* CLASS */]: `CLASS`,
    [4 /* STYLE */]: `STYLE`,
    [8 /* PROPS */]: `PROPS`,
    [16 /* FULL_PROPS */]: `FULL_PROPS`,
    [32 /* HYDRATE_EVENTS */]: `HYDRATE_EVENTS`,
    [64 /* STABLE_FRAGMENT */]: `STABLE_FRAGMENT`,
    [128 /* KEYED_FRAGMENT */]: `KEYED_FRAGMENT`,
    [256 /* UNKEYED_FRAGMENT */]: `UNKEYED_FRAGMENT`,
    [512 /* NEED_PATCH */]: `NEED_PATCH`,
    [1024 /* DYNAMIC_SLOTS */]: `DYNAMIC_SLOTS`,
    [2048 /* DEV_ROOT_FRAGMENT */]: `DEV_ROOT_FRAGMENT`,
    [-1 /* HOISTED */]: `HOISTED`,
    [-2 /* BAIL */]: `BAIL`
};

/**
 * Dev only
 */
const slotFlagsText = {
    [1 /* STABLE */]: 'STABLE',
    [2 /* DYNAMIC */]: 'DYNAMIC',
    [3 /* FORWARDED */]: 'FORWARDED'
};

const GLOBALS_WHITE_LISTED = 'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' +
    'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' +
    'Object,Boolean,String,RegExp,Map,Set,JSON,Intl';
const isGloballyWhitelisted = /*#__PURE__*/ makeMap(GLOBALS_WHITE_LISTED);

const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
    const lines = source.split(/\r?\n/);
    let count = 0;
    const res = [];
    for (let i = 0; i < lines.length; i++) {
        count += lines[i].length + 1;
        if (count >= start) {
            for (let j = i - range; j <= i + range || end > count; j++) {
                if (j < 0 || j >= lines.length)
                    continue;
                const line = j + 1;
                res.push(`${line}${' '.repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
                const lineLength = lines[j].length;
                if (j === i) {
                    // push underline
                    const pad = start - (count - lineLength) + 1;
                    const length = Math.max(1, end > count ? lineLength - pad : end - start);
                    res.push(`   |  ` + ' '.repeat(pad) + '^'.repeat(length));
                }
                else if (j > i) {
                    if (end > count) {
                        const length = Math.max(Math.min(end - count, lineLength), 1);
                        res.push(`   |  ` + '^'.repeat(length));
                    }
                    count += lineLength + 1;
                }
            }
            break;
        }
    }
    return res.join('\n');
}

/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs);
/**
 * The full list is needed during SSR to produce the correct initial markup.
 */
const isBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs +
    `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,` +
    `loop,open,required,reversed,scoped,seamless,` +
    `checked,muted,multiple,selected`);
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
    if (attrValidationCache.hasOwnProperty(name)) {
        return attrValidationCache[name];
    }
    const isUnsafe = unsafeAttrCharRE.test(name);
    if (isUnsafe) {
        console.error(`unsafe attribute name: ${name}`);
    }
    return (attrValidationCache[name] = !isUnsafe);
}
const propsToAttrMap = {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv'
};
/**
 * CSS properties that accept plain numbers
 */
const isNoUnitNumericStyleProp = /*#__PURE__*/ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,` +
    `border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,` +
    `columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,` +
    `grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,` +
    `grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,` +
    `line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,` +
    // SVG
    `fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,` +
    `stroke-miterlimit,stroke-opacity,stroke-width`);
/**
 * Known attributes, this is used for stringification of runtime static nodes
 * so that we don't stringify bindings that cannot be set from HTML.
 * Don't also forget to allow `data-*` and `aria-*`!
 * Generated from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */
const isKnownAttr = /*#__PURE__*/ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,` +
    `autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,` +
    `border,buffered,capture,challenge,charset,checked,cite,class,code,` +
    `codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,` +
    `coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,` +
    `disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,` +
    `formaction,formenctype,formmethod,formnovalidate,formtarget,headers,` +
    `height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,` +
    `ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,` +
    `manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,` +
    `open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,` +
    `referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,` +
    `selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,` +
    `start,step,style,summary,tabindex,target,title,translate,type,usemap,` +
    `value,width,wrap`);

function normalizeStyle(value) {
    if (isArray(value)) {
        const res = {};
        for (let i = 0; i < value.length; i++) {
            const item = value[i];
            const normalized = normalizeStyle(isString(item) ? parseStringStyle(item) : item);
            if (normalized) {
                for (const key in normalized) {
                    res[key] = normalized[key];
                }
            }
        }
        return res;
    }
    else if (isObject(value)) {
        return value;
    }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
    const ret = {};
    cssText.split(listDelimiterRE).forEach(item => {
        if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return ret;
}
function stringifyStyle(styles) {
    let ret = '';
    if (!styles) {
        return ret;
    }
    for (const key in styles) {
        const value = styles[key];
        const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
        if (isString(value) ||
            (typeof value === 'number' && isNoUnitNumericStyleProp(normalizedKey))) {
            // only render valid values
            ret += `${normalizedKey}:${value};`;
        }
    }
    return ret;
}
function normalizeClass(value) {
    let res = '';
    if (isString(value)) {
        res = value;
    }
    else if (isArray(value)) {
        for (let i = 0; i < value.length; i++) {
            res += normalizeClass(value[i]) + ' ';
        }
    }
    else if (isObject(value)) {
        for (const name in value) {
            if (value[name]) {
                res += name + ' ';
            }
        }
    }
    return res.trim();
}

// These tag configs are shared between compiler-dom and runtime-dom, so they
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element
const HTML_TAGS = 'html,body,base,head,link,meta,style,title,address,article,aside,footer,' +
    'header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,' +
    'figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,' +
    'data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,' +
    'time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,' +
    'canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,' +
    'th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,' +
    'option,output,progress,select,textarea,details,dialog,menu,' +
    'summary,template,blockquote,iframe,tfoot';
// https://developer.mozilla.org/en-US/docs/Web/SVG/Element
const SVG_TAGS = 'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,' +
    'defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,' +
    'feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,' +
    'feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,' +
    'feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,' +
    'fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,' +
    'foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,' +
    'mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,' +
    'polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,' +
    'text,textPath,title,tspan,unknown,use,view';
const VOID_TAGS = 'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr';
const isHTMLTag = /*#__PURE__*/ makeMap(HTML_TAGS);
const isSVGTag = /*#__PURE__*/ makeMap(SVG_TAGS);
const isVoidTag = /*#__PURE__*/ makeMap(VOID_TAGS);

const escapeRE = /["'&<>]/;
function escapeHtml(string) {
    const str = '' + string;
    const match = escapeRE.exec(str);
    if (!match) {
        return str;
    }
    let html = '';
    let escaped;
    let index;
    let lastIndex = 0;
    for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
            case 34: // "
                escaped = '&quot;';
                break;
            case 38: // &
                escaped = '&amp;';
                break;
            case 39: // '
                escaped = '&#39;';
                break;
            case 60: // <
                escaped = '&lt;';
                break;
            case 62: // >
                escaped = '&gt;';
                break;
            default:
                continue;
        }
        if (lastIndex !== index) {
            html += str.substring(lastIndex, index);
        }
        lastIndex = index + 1;
        html += escaped;
    }
    return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}
// https://www.w3.org/TR/html52/syntax.html#comments
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
    return src.replace(commentStripRE, '');
}

function looseCompareArrays(a, b) {
    if (a.length !== b.length)
        return false;
    let equal = true;
    for (let i = 0; equal && i < a.length; i++) {
        equal = looseEqual(a[i], b[i]);
    }
    return equal;
}
function looseEqual(a, b) {
    if (a === b)
        return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) {
        return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    }
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) {
        return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    }
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
        /* istanbul ignore if: this if will probably never be called */
        if (!aValidType || !bValidType) {
            return false;
        }
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) {
            return false;
        }
        for (const key in a) {
            const aHasKey = a.hasOwnProperty(key);
            const bHasKey = b.hasOwnProperty(key);
            if ((aHasKey && !bHasKey) ||
                (!aHasKey && bHasKey) ||
                !looseEqual(a[key], b[key])) {
                return false;
            }
        }
    }
    return String(a) === String(b);
}
function looseIndexOf(arr, val) {
    return arr.findIndex(item => looseEqual(item, val));
}

/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */
const toDisplayString = (val) => {
    return val == null
        ? ''
        : isObject(val)
            ? JSON.stringify(val, replacer, 2)
            : String(val);
};
const replacer = (_key, val) => {
    if (isMap(val)) {
        return {
            [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val]) => {
                entries[`${key} =>`] = val;
                return entries;
            }, {})
        };
    }
    else if (isSet(val)) {
        return {
            [`Set(${val.size})`]: [...val.values()]
        };
    }
    else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
        return String(val);
    }
    return val;
};

/**
 * List of @babel/parser plugins that are used for template expression
 * transforms and SFC script transforms. By default we enable proposals slated
 * for ES2020. This will need to be updated as the spec moves forward.
 * Full list at https://babeljs.io/docs/en/next/babel-parser#plugins
 */
const babelParserDefaultPlugins = [
    'bigInt',
    'optionalChaining',
    'nullishCoalescingOperator'
];
const EMPTY_OBJ = ( false)
    ? undefined
    : {};
const EMPTY_ARR = ( false) ? undefined : [];
const NOOP = () => { };
/**
 * Always return false.
 */
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith('onUpdate:');
const extend = Object.assign;
const remove = (arr, el) => {
    const i = arr.indexOf(el);
    if (i > -1) {
        arr.splice(i, 1);
    }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === '[object Map]';
const isSet = (val) => toTypeString(val) === '[object Set]';
const isDate = (val) => val instanceof Date;
const isFunction = (val) => typeof val === 'function';
const isString = (val) => typeof val === 'string';
const isSymbol = (val) => typeof val === 'symbol';
const isObject = (val) => val !== null && typeof val === 'object';
const isPromise = (val) => {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
    // extract "RawType" from strings like "[object RawType]"
    return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === '[object Object]';
const isIntegerKey = (key) => isString(key) &&
    key !== 'NaN' &&
    key[0] !== '-' &&
    '' + parseInt(key, 10) === key;
const isReservedProp = /*#__PURE__*/ makeMap(
// the leading comma is intentional so empty string "" is also included
',key,ref,' +
    'onVnodeBeforeMount,onVnodeMounted,' +
    'onVnodeBeforeUpdate,onVnodeUpdated,' +
    'onVnodeBeforeUnmount,onVnodeUnmounted');
const cacheStringFunction = (fn) => {
    const cache = Object.create(null);
    return ((str) => {
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    });
};
const camelizeRE = /-(\w)/g;
/**
 * @private
 */
const camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
});
const hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, '-$1').toLowerCase());
/**
 * @private
 */
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
/**
 * @private
 */
const toHandlerKey = cacheStringFunction((str) => (str ? `on${capitalize(str)}` : ``));
// compare whether a value has changed, accounting for NaN.
const hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
const invokeArrayFns = (fns, arg) => {
    for (let i = 0; i < fns.length; i++) {
        fns[i](arg);
    }
};
const def = (obj, key, value) => {
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value
    });
};
const toNumber = (val) => {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
    return (_globalThis ||
        (_globalThis =
            typeof globalThis !== 'undefined'
                ? globalThis
                : typeof self !== 'undefined'
                    ? self
                    : typeof window !== 'undefined'
                        ? window
                        : typeof global !== 'undefined'
                            ? global
                            : {}));
};



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)))

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export EMPTY_ARR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EMPTY_OBJ; });
/* unused harmony export NO */
/* unused harmony export NOOP */
/* unused harmony export PatchFlagNames */
/* unused harmony export babelParserDefaultPlugins */
/* unused harmony export camelize */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return capitalize; });
/* unused harmony export def */
/* unused harmony export escapeHtml */
/* unused harmony export escapeHtmlComment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return extend; });
/* unused harmony export generateCodeFrame */
/* unused harmony export getGlobalThis */
/* unused harmony export hasChanged */
/* unused harmony export hasOwn */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hyphenate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return invokeArrayFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isArray; });
/* unused harmony export isBooleanAttr */
/* unused harmony export isDate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isFunction; });
/* unused harmony export isGloballyWhitelisted */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isHTMLTag; });
/* unused harmony export isIntegerKey */
/* unused harmony export isKnownAttr */
/* unused harmony export isMap */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isModelListener; });
/* unused harmony export isNoUnitNumericStyleProp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return isOn; });
/* unused harmony export isPlainObject */
/* unused harmony export isPromise */
/* unused harmony export isReservedProp */
/* unused harmony export isSSRSafeAttrName */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return isSVGTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return isSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return isSpecialBooleanAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return isString; });
/* unused harmony export isSymbol */
/* unused harmony export isVoidTag */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return looseEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return looseIndexOf; });
/* unused harmony export makeMap */
/* unused harmony export normalizeClass */
/* unused harmony export normalizeStyle */
/* unused harmony export objectToString */
/* unused harmony export parseStringStyle */
/* unused harmony export propsToAttrMap */
/* unused harmony export remove */
/* unused harmony export slotFlagsText */
/* unused harmony export stringifyStyle */
/* unused harmony export toDisplayString */
/* unused harmony export toHandlerKey */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return toNumber; });
/* unused harmony export toRawType */
/* unused harmony export toTypeString */
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(',');
    for (let i = 0; i < list.length; i++) {
        map[list[i]] = true;
    }
    return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val];
}

/**
 * dev only flag -> name mapping
 */
const PatchFlagNames = {
    [1 /* TEXT */]: `TEXT`,
    [2 /* CLASS */]: `CLASS`,
    [4 /* STYLE */]: `STYLE`,
    [8 /* PROPS */]: `PROPS`,
    [16 /* FULL_PROPS */]: `FULL_PROPS`,
    [32 /* HYDRATE_EVENTS */]: `HYDRATE_EVENTS`,
    [64 /* STABLE_FRAGMENT */]: `STABLE_FRAGMENT`,
    [128 /* KEYED_FRAGMENT */]: `KEYED_FRAGMENT`,
    [256 /* UNKEYED_FRAGMENT */]: `UNKEYED_FRAGMENT`,
    [512 /* NEED_PATCH */]: `NEED_PATCH`,
    [1024 /* DYNAMIC_SLOTS */]: `DYNAMIC_SLOTS`,
    [2048 /* DEV_ROOT_FRAGMENT */]: `DEV_ROOT_FRAGMENT`,
    [-1 /* HOISTED */]: `HOISTED`,
    [-2 /* BAIL */]: `BAIL`
};

/**
 * Dev only
 */
const slotFlagsText = {
    [1 /* STABLE */]: 'STABLE',
    [2 /* DYNAMIC */]: 'DYNAMIC',
    [3 /* FORWARDED */]: 'FORWARDED'
};

const GLOBALS_WHITE_LISTED = 'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' +
    'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' +
    'Object,Boolean,String,RegExp,Map,Set,JSON,Intl';
const isGloballyWhitelisted = /*#__PURE__*/ makeMap(GLOBALS_WHITE_LISTED);

const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
    const lines = source.split(/\r?\n/);
    let count = 0;
    const res = [];
    for (let i = 0; i < lines.length; i++) {
        count += lines[i].length + 1;
        if (count >= start) {
            for (let j = i - range; j <= i + range || end > count; j++) {
                if (j < 0 || j >= lines.length)
                    continue;
                const line = j + 1;
                res.push(`${line}${' '.repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
                const lineLength = lines[j].length;
                if (j === i) {
                    // push underline
                    const pad = start - (count - lineLength) + 1;
                    const length = Math.max(1, end > count ? lineLength - pad : end - start);
                    res.push(`   |  ` + ' '.repeat(pad) + '^'.repeat(length));
                }
                else if (j > i) {
                    if (end > count) {
                        const length = Math.max(Math.min(end - count, lineLength), 1);
                        res.push(`   |  ` + '^'.repeat(length));
                    }
                    count += lineLength + 1;
                }
            }
            break;
        }
    }
    return res.join('\n');
}

/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs);
/**
 * The full list is needed during SSR to produce the correct initial markup.
 */
const isBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs +
    `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,` +
    `loop,open,required,reversed,scoped,seamless,` +
    `checked,muted,multiple,selected`);
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
    if (attrValidationCache.hasOwnProperty(name)) {
        return attrValidationCache[name];
    }
    const isUnsafe = unsafeAttrCharRE.test(name);
    if (isUnsafe) {
        console.error(`unsafe attribute name: ${name}`);
    }
    return (attrValidationCache[name] = !isUnsafe);
}
const propsToAttrMap = {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv'
};
/**
 * CSS properties that accept plain numbers
 */
const isNoUnitNumericStyleProp = /*#__PURE__*/ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,` +
    `border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,` +
    `columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,` +
    `grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,` +
    `grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,` +
    `line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,` +
    // SVG
    `fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,` +
    `stroke-miterlimit,stroke-opacity,stroke-width`);
/**
 * Known attributes, this is used for stringification of runtime static nodes
 * so that we don't stringify bindings that cannot be set from HTML.
 * Don't also forget to allow `data-*` and `aria-*`!
 * Generated from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */
const isKnownAttr = /*#__PURE__*/ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,` +
    `autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,` +
    `border,buffered,capture,challenge,charset,checked,cite,class,code,` +
    `codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,` +
    `coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,` +
    `disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,` +
    `formaction,formenctype,formmethod,formnovalidate,formtarget,headers,` +
    `height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,` +
    `ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,` +
    `manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,` +
    `open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,` +
    `referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,` +
    `selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,` +
    `start,step,style,summary,tabindex,target,title,translate,type,usemap,` +
    `value,width,wrap`);

function normalizeStyle(value) {
    if (isArray(value)) {
        const res = {};
        for (let i = 0; i < value.length; i++) {
            const item = value[i];
            const normalized = normalizeStyle(isString(item) ? parseStringStyle(item) : item);
            if (normalized) {
                for (const key in normalized) {
                    res[key] = normalized[key];
                }
            }
        }
        return res;
    }
    else if (isObject(value)) {
        return value;
    }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
    const ret = {};
    cssText.split(listDelimiterRE).forEach(item => {
        if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return ret;
}
function stringifyStyle(styles) {
    let ret = '';
    if (!styles) {
        return ret;
    }
    for (const key in styles) {
        const value = styles[key];
        const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
        if (isString(value) ||
            (typeof value === 'number' && isNoUnitNumericStyleProp(normalizedKey))) {
            // only render valid values
            ret += `${normalizedKey}:${value};`;
        }
    }
    return ret;
}
function normalizeClass(value) {
    let res = '';
    if (isString(value)) {
        res = value;
    }
    else if (isArray(value)) {
        for (let i = 0; i < value.length; i++) {
            res += normalizeClass(value[i]) + ' ';
        }
    }
    else if (isObject(value)) {
        for (const name in value) {
            if (value[name]) {
                res += name + ' ';
            }
        }
    }
    return res.trim();
}

// These tag configs are shared between compiler-dom and runtime-dom, so they
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element
const HTML_TAGS = 'html,body,base,head,link,meta,style,title,address,article,aside,footer,' +
    'header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,' +
    'figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,' +
    'data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,' +
    'time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,' +
    'canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,' +
    'th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,' +
    'option,output,progress,select,textarea,details,dialog,menu,' +
    'summary,template,blockquote,iframe,tfoot';
// https://developer.mozilla.org/en-US/docs/Web/SVG/Element
const SVG_TAGS = 'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,' +
    'defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,' +
    'feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,' +
    'feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,' +
    'feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,' +
    'fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,' +
    'foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,' +
    'mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,' +
    'polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,' +
    'text,textPath,title,tspan,unknown,use,view';
const VOID_TAGS = 'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr';
const isHTMLTag = /*#__PURE__*/ makeMap(HTML_TAGS);
const isSVGTag = /*#__PURE__*/ makeMap(SVG_TAGS);
const isVoidTag = /*#__PURE__*/ makeMap(VOID_TAGS);

const escapeRE = /["'&<>]/;
function escapeHtml(string) {
    const str = '' + string;
    const match = escapeRE.exec(str);
    if (!match) {
        return str;
    }
    let html = '';
    let escaped;
    let index;
    let lastIndex = 0;
    for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
            case 34: // "
                escaped = '&quot;';
                break;
            case 38: // &
                escaped = '&amp;';
                break;
            case 39: // '
                escaped = '&#39;';
                break;
            case 60: // <
                escaped = '&lt;';
                break;
            case 62: // >
                escaped = '&gt;';
                break;
            default:
                continue;
        }
        if (lastIndex !== index) {
            html += str.substring(lastIndex, index);
        }
        lastIndex = index + 1;
        html += escaped;
    }
    return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}
// https://www.w3.org/TR/html52/syntax.html#comments
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
    return src.replace(commentStripRE, '');
}

function looseCompareArrays(a, b) {
    if (a.length !== b.length)
        return false;
    let equal = true;
    for (let i = 0; equal && i < a.length; i++) {
        equal = looseEqual(a[i], b[i]);
    }
    return equal;
}
function looseEqual(a, b) {
    if (a === b)
        return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) {
        return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    }
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) {
        return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    }
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
        /* istanbul ignore if: this if will probably never be called */
        if (!aValidType || !bValidType) {
            return false;
        }
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) {
            return false;
        }
        for (const key in a) {
            const aHasKey = a.hasOwnProperty(key);
            const bHasKey = b.hasOwnProperty(key);
            if ((aHasKey && !bHasKey) ||
                (!aHasKey && bHasKey) ||
                !looseEqual(a[key], b[key])) {
                return false;
            }
        }
    }
    return String(a) === String(b);
}
function looseIndexOf(arr, val) {
    return arr.findIndex(item => looseEqual(item, val));
}

/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */
const toDisplayString = (val) => {
    return val == null
        ? ''
        : isObject(val)
            ? JSON.stringify(val, replacer, 2)
            : String(val);
};
const replacer = (_key, val) => {
    if (isMap(val)) {
        return {
            [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val]) => {
                entries[`${key} =>`] = val;
                return entries;
            }, {})
        };
    }
    else if (isSet(val)) {
        return {
            [`Set(${val.size})`]: [...val.values()]
        };
    }
    else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
        return String(val);
    }
    return val;
};

/**
 * List of @babel/parser plugins that are used for template expression
 * transforms and SFC script transforms. By default we enable proposals slated
 * for ES2020. This will need to be updated as the spec moves forward.
 * Full list at https://babeljs.io/docs/en/next/babel-parser#plugins
 */
const babelParserDefaultPlugins = [
    'bigInt',
    'optionalChaining',
    'nullishCoalescingOperator'
];
const EMPTY_OBJ = ( false)
    ? undefined
    : {};
const EMPTY_ARR = ( false) ? undefined : [];
const NOOP = () => { };
/**
 * Always return false.
 */
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith('onUpdate:');
const extend = Object.assign;
const remove = (arr, el) => {
    const i = arr.indexOf(el);
    if (i > -1) {
        arr.splice(i, 1);
    }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === '[object Map]';
const isSet = (val) => toTypeString(val) === '[object Set]';
const isDate = (val) => val instanceof Date;
const isFunction = (val) => typeof val === 'function';
const isString = (val) => typeof val === 'string';
const isSymbol = (val) => typeof val === 'symbol';
const isObject = (val) => val !== null && typeof val === 'object';
const isPromise = (val) => {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
    // extract "RawType" from strings like "[object RawType]"
    return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === '[object Object]';
const isIntegerKey = (key) => isString(key) &&
    key !== 'NaN' &&
    key[0] !== '-' &&
    '' + parseInt(key, 10) === key;
const isReservedProp = /*#__PURE__*/ makeMap(
// the leading comma is intentional so empty string "" is also included
',key,ref,' +
    'onVnodeBeforeMount,onVnodeMounted,' +
    'onVnodeBeforeUpdate,onVnodeUpdated,' +
    'onVnodeBeforeUnmount,onVnodeUnmounted');
const cacheStringFunction = (fn) => {
    const cache = Object.create(null);
    return ((str) => {
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    });
};
const camelizeRE = /-(\w)/g;
/**
 * @private
 */
const camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
});
const hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, '-$1').toLowerCase());
/**
 * @private
 */
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
/**
 * @private
 */
const toHandlerKey = cacheStringFunction((str) => (str ? `on${capitalize(str)}` : ``));
// compare whether a value has changed, accounting for NaN.
const hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
const invokeArrayFns = (fns, arg) => {
    for (let i = 0; i < fns.length; i++) {
        fns[i](arg);
    }
};
const def = (obj, key, value) => {
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value
    });
};
const toNumber = (val) => {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
    return (_globalThis ||
        (_globalThis =
            typeof globalThis !== 'undefined'
                ? globalThis
                : typeof self !== 'undefined'
                    ? self
                    : typeof window !== 'undefined'
                        ? window
                        : typeof global !== 'undefined'
                            ? global
                            : {}));
};



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)))

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export EMPTY_ARR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EMPTY_OBJ; });
/* unused harmony export NO */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NOOP; });
/* unused harmony export PatchFlagNames */
/* unused harmony export babelParserDefaultPlugins */
/* unused harmony export camelize */
/* unused harmony export capitalize */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return def; });
/* unused harmony export escapeHtml */
/* unused harmony export escapeHtmlComment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return extend; });
/* unused harmony export generateCodeFrame */
/* unused harmony export getGlobalThis */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return hasChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return hasOwn; });
/* unused harmony export hyphenate */
/* unused harmony export invokeArrayFns */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isArray; });
/* unused harmony export isBooleanAttr */
/* unused harmony export isDate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isFunction; });
/* unused harmony export isGloballyWhitelisted */
/* unused harmony export isHTMLTag */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isIntegerKey; });
/* unused harmony export isKnownAttr */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return isMap; });
/* unused harmony export isModelListener */
/* unused harmony export isNoUnitNumericStyleProp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return isObject; });
/* unused harmony export isOn */
/* unused harmony export isPlainObject */
/* unused harmony export isPromise */
/* unused harmony export isReservedProp */
/* unused harmony export isSSRSafeAttrName */
/* unused harmony export isSVGTag */
/* unused harmony export isSet */
/* unused harmony export isSpecialBooleanAttr */
/* unused harmony export isString */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return isSymbol; });
/* unused harmony export isVoidTag */
/* unused harmony export looseEqual */
/* unused harmony export looseIndexOf */
/* unused harmony export makeMap */
/* unused harmony export normalizeClass */
/* unused harmony export normalizeStyle */
/* unused harmony export objectToString */
/* unused harmony export parseStringStyle */
/* unused harmony export propsToAttrMap */
/* unused harmony export remove */
/* unused harmony export slotFlagsText */
/* unused harmony export stringifyStyle */
/* unused harmony export toDisplayString */
/* unused harmony export toHandlerKey */
/* unused harmony export toNumber */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return toRawType; });
/* unused harmony export toTypeString */
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(',');
    for (let i = 0; i < list.length; i++) {
        map[list[i]] = true;
    }
    return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val];
}

/**
 * dev only flag -> name mapping
 */
const PatchFlagNames = {
    [1 /* TEXT */]: `TEXT`,
    [2 /* CLASS */]: `CLASS`,
    [4 /* STYLE */]: `STYLE`,
    [8 /* PROPS */]: `PROPS`,
    [16 /* FULL_PROPS */]: `FULL_PROPS`,
    [32 /* HYDRATE_EVENTS */]: `HYDRATE_EVENTS`,
    [64 /* STABLE_FRAGMENT */]: `STABLE_FRAGMENT`,
    [128 /* KEYED_FRAGMENT */]: `KEYED_FRAGMENT`,
    [256 /* UNKEYED_FRAGMENT */]: `UNKEYED_FRAGMENT`,
    [512 /* NEED_PATCH */]: `NEED_PATCH`,
    [1024 /* DYNAMIC_SLOTS */]: `DYNAMIC_SLOTS`,
    [2048 /* DEV_ROOT_FRAGMENT */]: `DEV_ROOT_FRAGMENT`,
    [-1 /* HOISTED */]: `HOISTED`,
    [-2 /* BAIL */]: `BAIL`
};

/**
 * Dev only
 */
const slotFlagsText = {
    [1 /* STABLE */]: 'STABLE',
    [2 /* DYNAMIC */]: 'DYNAMIC',
    [3 /* FORWARDED */]: 'FORWARDED'
};

const GLOBALS_WHITE_LISTED = 'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' +
    'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' +
    'Object,Boolean,String,RegExp,Map,Set,JSON,Intl';
const isGloballyWhitelisted = /*#__PURE__*/ makeMap(GLOBALS_WHITE_LISTED);

const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
    const lines = source.split(/\r?\n/);
    let count = 0;
    const res = [];
    for (let i = 0; i < lines.length; i++) {
        count += lines[i].length + 1;
        if (count >= start) {
            for (let j = i - range; j <= i + range || end > count; j++) {
                if (j < 0 || j >= lines.length)
                    continue;
                const line = j + 1;
                res.push(`${line}${' '.repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
                const lineLength = lines[j].length;
                if (j === i) {
                    // push underline
                    const pad = start - (count - lineLength) + 1;
                    const length = Math.max(1, end > count ? lineLength - pad : end - start);
                    res.push(`   |  ` + ' '.repeat(pad) + '^'.repeat(length));
                }
                else if (j > i) {
                    if (end > count) {
                        const length = Math.max(Math.min(end - count, lineLength), 1);
                        res.push(`   |  ` + '^'.repeat(length));
                    }
                    count += lineLength + 1;
                }
            }
            break;
        }
    }
    return res.join('\n');
}

/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs);
/**
 * The full list is needed during SSR to produce the correct initial markup.
 */
const isBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs +
    `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,` +
    `loop,open,required,reversed,scoped,seamless,` +
    `checked,muted,multiple,selected`);
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
    if (attrValidationCache.hasOwnProperty(name)) {
        return attrValidationCache[name];
    }
    const isUnsafe = unsafeAttrCharRE.test(name);
    if (isUnsafe) {
        console.error(`unsafe attribute name: ${name}`);
    }
    return (attrValidationCache[name] = !isUnsafe);
}
const propsToAttrMap = {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv'
};
/**
 * CSS properties that accept plain numbers
 */
const isNoUnitNumericStyleProp = /*#__PURE__*/ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,` +
    `border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,` +
    `columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,` +
    `grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,` +
    `grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,` +
    `line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,` +
    // SVG
    `fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,` +
    `stroke-miterlimit,stroke-opacity,stroke-width`);
/**
 * Known attributes, this is used for stringification of runtime static nodes
 * so that we don't stringify bindings that cannot be set from HTML.
 * Don't also forget to allow `data-*` and `aria-*`!
 * Generated from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */
const isKnownAttr = /*#__PURE__*/ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,` +
    `autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,` +
    `border,buffered,capture,challenge,charset,checked,cite,class,code,` +
    `codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,` +
    `coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,` +
    `disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,` +
    `formaction,formenctype,formmethod,formnovalidate,formtarget,headers,` +
    `height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,` +
    `ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,` +
    `manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,` +
    `open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,` +
    `referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,` +
    `selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,` +
    `start,step,style,summary,tabindex,target,title,translate,type,usemap,` +
    `value,width,wrap`);

function normalizeStyle(value) {
    if (isArray(value)) {
        const res = {};
        for (let i = 0; i < value.length; i++) {
            const item = value[i];
            const normalized = normalizeStyle(isString(item) ? parseStringStyle(item) : item);
            if (normalized) {
                for (const key in normalized) {
                    res[key] = normalized[key];
                }
            }
        }
        return res;
    }
    else if (isObject(value)) {
        return value;
    }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
    const ret = {};
    cssText.split(listDelimiterRE).forEach(item => {
        if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return ret;
}
function stringifyStyle(styles) {
    let ret = '';
    if (!styles) {
        return ret;
    }
    for (const key in styles) {
        const value = styles[key];
        const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
        if (isString(value) ||
            (typeof value === 'number' && isNoUnitNumericStyleProp(normalizedKey))) {
            // only render valid values
            ret += `${normalizedKey}:${value};`;
        }
    }
    return ret;
}
function normalizeClass(value) {
    let res = '';
    if (isString(value)) {
        res = value;
    }
    else if (isArray(value)) {
        for (let i = 0; i < value.length; i++) {
            res += normalizeClass(value[i]) + ' ';
        }
    }
    else if (isObject(value)) {
        for (const name in value) {
            if (value[name]) {
                res += name + ' ';
            }
        }
    }
    return res.trim();
}

// These tag configs are shared between compiler-dom and runtime-dom, so they
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element
const HTML_TAGS = 'html,body,base,head,link,meta,style,title,address,article,aside,footer,' +
    'header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,' +
    'figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,' +
    'data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,' +
    'time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,' +
    'canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,' +
    'th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,' +
    'option,output,progress,select,textarea,details,dialog,menu,' +
    'summary,template,blockquote,iframe,tfoot';
// https://developer.mozilla.org/en-US/docs/Web/SVG/Element
const SVG_TAGS = 'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,' +
    'defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,' +
    'feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,' +
    'feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,' +
    'feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,' +
    'fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,' +
    'foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,' +
    'mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,' +
    'polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,' +
    'text,textPath,title,tspan,unknown,use,view';
const VOID_TAGS = 'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr';
const isHTMLTag = /*#__PURE__*/ makeMap(HTML_TAGS);
const isSVGTag = /*#__PURE__*/ makeMap(SVG_TAGS);
const isVoidTag = /*#__PURE__*/ makeMap(VOID_TAGS);

const escapeRE = /["'&<>]/;
function escapeHtml(string) {
    const str = '' + string;
    const match = escapeRE.exec(str);
    if (!match) {
        return str;
    }
    let html = '';
    let escaped;
    let index;
    let lastIndex = 0;
    for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
            case 34: // "
                escaped = '&quot;';
                break;
            case 38: // &
                escaped = '&amp;';
                break;
            case 39: // '
                escaped = '&#39;';
                break;
            case 60: // <
                escaped = '&lt;';
                break;
            case 62: // >
                escaped = '&gt;';
                break;
            default:
                continue;
        }
        if (lastIndex !== index) {
            html += str.substring(lastIndex, index);
        }
        lastIndex = index + 1;
        html += escaped;
    }
    return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}
// https://www.w3.org/TR/html52/syntax.html#comments
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
    return src.replace(commentStripRE, '');
}

function looseCompareArrays(a, b) {
    if (a.length !== b.length)
        return false;
    let equal = true;
    for (let i = 0; equal && i < a.length; i++) {
        equal = looseEqual(a[i], b[i]);
    }
    return equal;
}
function looseEqual(a, b) {
    if (a === b)
        return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) {
        return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    }
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) {
        return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    }
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
        /* istanbul ignore if: this if will probably never be called */
        if (!aValidType || !bValidType) {
            return false;
        }
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) {
            return false;
        }
        for (const key in a) {
            const aHasKey = a.hasOwnProperty(key);
            const bHasKey = b.hasOwnProperty(key);
            if ((aHasKey && !bHasKey) ||
                (!aHasKey && bHasKey) ||
                !looseEqual(a[key], b[key])) {
                return false;
            }
        }
    }
    return String(a) === String(b);
}
function looseIndexOf(arr, val) {
    return arr.findIndex(item => looseEqual(item, val));
}

/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */
const toDisplayString = (val) => {
    return val == null
        ? ''
        : isObject(val)
            ? JSON.stringify(val, replacer, 2)
            : String(val);
};
const replacer = (_key, val) => {
    if (isMap(val)) {
        return {
            [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val]) => {
                entries[`${key} =>`] = val;
                return entries;
            }, {})
        };
    }
    else if (isSet(val)) {
        return {
            [`Set(${val.size})`]: [...val.values()]
        };
    }
    else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
        return String(val);
    }
    return val;
};

/**
 * List of @babel/parser plugins that are used for template expression
 * transforms and SFC script transforms. By default we enable proposals slated
 * for ES2020. This will need to be updated as the spec moves forward.
 * Full list at https://babeljs.io/docs/en/next/babel-parser#plugins
 */
const babelParserDefaultPlugins = [
    'bigInt',
    'optionalChaining',
    'nullishCoalescingOperator'
];
const EMPTY_OBJ = ( false)
    ? undefined
    : {};
const EMPTY_ARR = ( false) ? undefined : [];
const NOOP = () => { };
/**
 * Always return false.
 */
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith('onUpdate:');
const extend = Object.assign;
const remove = (arr, el) => {
    const i = arr.indexOf(el);
    if (i > -1) {
        arr.splice(i, 1);
    }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === '[object Map]';
const isSet = (val) => toTypeString(val) === '[object Set]';
const isDate = (val) => val instanceof Date;
const isFunction = (val) => typeof val === 'function';
const isString = (val) => typeof val === 'string';
const isSymbol = (val) => typeof val === 'symbol';
const isObject = (val) => val !== null && typeof val === 'object';
const isPromise = (val) => {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
    // extract "RawType" from strings like "[object RawType]"
    return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === '[object Object]';
const isIntegerKey = (key) => isString(key) &&
    key !== 'NaN' &&
    key[0] !== '-' &&
    '' + parseInt(key, 10) === key;
const isReservedProp = /*#__PURE__*/ makeMap(
// the leading comma is intentional so empty string "" is also included
',key,ref,' +
    'onVnodeBeforeMount,onVnodeMounted,' +
    'onVnodeBeforeUpdate,onVnodeUpdated,' +
    'onVnodeBeforeUnmount,onVnodeUnmounted');
const cacheStringFunction = (fn) => {
    const cache = Object.create(null);
    return ((str) => {
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    });
};
const camelizeRE = /-(\w)/g;
/**
 * @private
 */
const camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
});
const hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, '-$1').toLowerCase());
/**
 * @private
 */
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
/**
 * @private
 */
const toHandlerKey = cacheStringFunction((str) => (str ? `on${capitalize(str)}` : ``));
// compare whether a value has changed, accounting for NaN.
const hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
const invokeArrayFns = (fns, arg) => {
    for (let i = 0; i < fns.length; i++) {
        fns[i](arg);
    }
};
const def = (obj, key, value) => {
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value
    });
};
const toNumber = (val) => {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
    return (_globalThis ||
        (_globalThis =
            typeof globalThis !== 'undefined'
                ? globalThis
                : typeof self !== 'undefined'
                    ? self
                    : typeof window !== 'undefined'
                        ? window
                        : typeof global !== 'undefined'
                            ? global
                            : {}));
};



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(24);

var iterableToArray = __webpack_require__(25);

var unsupportedIterableToArray = __webpack_require__(19);

var nonIterableSpread = __webpack_require__(26);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(30);


/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(23);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(8);

var assertThisInitialized = __webpack_require__(14);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

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

module.exports = _defineProperty;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Indexed Array Binary Search module
 */

/**
 * Dependencies
 */
var util = __webpack_require__(27),
    cmp = __webpack_require__(28),
    bin = __webpack_require__(29);

/**
 * Module interface definition
 */
module.exports = IndexedArray;

/**
 * Indexed Array constructor
 *
 * It loads the array data, defines the index field and the comparison function
 * to be used.
 *
 * @param {Array} data is an array of objects
 * @param {String} index is the object's property used to search the array
 */
function IndexedArray(data, index) {

    // is data sortable array or array-like object?
    if (!util.isSortableArrayLike(data))
        throw new Error("Invalid data");

    // is index a valid property?
    if (!index || data.length > 0 && !(index in data[0]))
        throw new Error("Invalid index");

    // data array
    this.data = data;

    // name of the index property
    this.index = index;

    // set index boundary values
    this.setBoundaries();

    // default comparison function
    this.compare = typeof this.minv === "number" ? cmp.numcmp : cmp.strcmp;

    // default search function
    this.search = bin.search;

    // cache of index values to array positions
    // each value stores an object as { found: true|false, index: array-index }
    this.valpos = {};

    // cursor and adjacent positions
    this.cursor = null;
    this.nextlow = null;
    this.nexthigh = null;
}

/**
 * Set the comparison function
 *
 * @param {Function} fn to compare index values that returnes 1, 0, -1
 */
IndexedArray.prototype.setCompare = function (fn) {
    if (typeof fn !== "function")
        throw new Error("Invalid argument");

    this.compare = fn;
    return this;
};

/**
 * Set the search function
 *
 * @param {Function} fn to search index values in the array of objects
 */
IndexedArray.prototype.setSearch = function (fn) {
    if (typeof fn !== "function")
        throw new Error("Invalid argument");

    this.search = fn;
    return this;
};

/**
 * Sort the data array by its index property
 */
IndexedArray.prototype.sort = function () {
    var self = this,
        index = this.index;

    // sort the array
    this.data.sort(function (a, b) {
        return self.compare(a[index], b[index]);
    });

    // recalculate boundary values
    this.setBoundaries();

    return this;
};

/**
 * Inspect and set the boundaries of the internal data array
 */
IndexedArray.prototype.setBoundaries = function () {
    var data = this.data,
        index = this.index;

    this.minv = data.length && data[0][index];
    this.maxv = data.length && data[data.length - 1][index];

    return this;
};

/**
 * Get the position of the object corresponding to the given index
 *
 * @param {Number|String} index is the id of the requested object
 * @returns {Number} the position of the object in the array
 */
IndexedArray.prototype.fetch = function (value) {
    // check data has objects
    if (this.data.length === 0) {
        this.cursor = null;
        this.nextlow = null;
        this.nexthigh = null;
        return this;
    }

    // check the request is within range
    if (this.compare(value, this.minv) === -1) {
        this.cursor = null;
        this.nextlow = null;
        this.nexthigh = 0;
        return this;
    }
    if (this.compare(value, this.maxv) === 1) {
        this.cursor = null;
        this.nextlow = this.data.length - 1;
        this.nexthigh = null;
        return this;
    }

    var valpos = this.valpos,
        pos = valpos[value];

    // if the request is memorized, just give it back
    if (pos) {
        if (pos.found) {
            this.cursor = pos.index;
            this.nextlow = null;
            this.nexthigh = null;
        } else {
            this.cursor = null;
            this.nextlow = pos.prev;
            this.nexthigh = pos.next;
        }
        return this;
    }

    // if not, do the search
    var result = this.search.call(this, value);
    this.cursor = result.index;
    this.nextlow = result.prev;
    this.nexthigh = result.next;
    return this;
};

/**
 * Get the object corresponding to the given index
 *
 * When no value is given, the function will default to the last fetched item.
 *
 * @param {Number|String} [optional] index is the id of the requested object
 * @returns {Object} the found object or null
 */
IndexedArray.prototype.get = function (value) {
    if (value)
        this.fetch(value);

    var pos = this.cursor;
    return pos !== null ? this.data[pos] : null;
};

/**
 * Get an slice of the data array
 *
 * Boundaries have to be in order.
 *
 * @param {Number|String} begin index is the id of the requested object
 * @param {Number|String} end index is the id of the requested object
 * @returns {Object} the slice of data array or []
 */
IndexedArray.prototype.getRange = function (begin, end) {
    // check if boundaries are in order
    if (this.compare(begin, end) === 1) {
        return [];
    }

    // fetch start and default to the next index above
    this.fetch(begin);
    var start = this.cursor || this.nexthigh;

    // fetch finish and default to the next index below
    this.fetch(end);
    var finish = this.cursor || this.nextlow;

    // if any boundary is not set, return no range
    if (start === null || finish === null) {
        return [];
    }

    // return range
    return this.data.slice(start, finish + 1);
};


/***/ }),
/* 16 */
/***/ (function(module) {

module.exports = JSON.parse("{\"extended.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAQMAAAD+JxcgAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAATU1NkJ+rOQAAAAJ0Uk5TAP9bkSK1AAAANElEQVR4nGNggABGEMEEIlhABAeI+AASF0AlHmAqA4kzKAAx8wGQuAMKwd6AoYzBAWonAwAcLwTgNfJ3RQAAAABJRU5ErkJggg==\",\"ray.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAQMAAAD+JxcgAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAATU1NkJ+rOQAAAAJ0Uk5TAP9bkSK1AAAAMklEQVR4nGNgQAJMIIIFRHCACAEQoQAiHICYvQEkjkrwYypjAIkzwk2zAREuqIQFzD4AE3kE4BEmGggAAAAASUVORK5CYII=\",\"segment.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAgMAAAC5h23wAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAlQTFRFAAAATU1NJCQkCxcHIQAAAAN0Uk5TAP8SmutI5AAAACxJREFUeJxjYMACGAMgNAsLdpoVKi8AVe8A1QblQlWRKt0AoULw2w1zGxoAABdiAviQhF/mAAAAAElFTkSuQmCC\",\"add.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAH5QTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAACgoKBgYGGxsbKioqPz8/Pj4+BQUFCQkJAQEBZGRkh4eHAgICEBAQNjY2g4ODgYGBAAAAAwMDeXl5d3d3GBgYERERgICAgICANDQ0PDw8Y2NjCAgIhYWFGhoaJycnOjo6YWFhgICAdXV14Y16sQAAACp0Uk5TAAILDxIKESEnJiYoKCgTKSkpKCAnKSkFKCkpJiDl/ycpKSA2JyYpKSkpOkQ+xgAAARdJREFUeJzllNt2gyAQRTWiRsHLoDU0GpPYmMv//2BMS+sgl6Z9bM8bi73gnJkBz/sn8lcBIUHofwtG8TpJKUuTLI6cYF7QEqRKynP71VX9AkhNXVlsbMQrLLQVGyPZLsGHWgPrCxMJwHUPlXa79NBp2et5d9f3u3m1XxatQNn7SagOXCUjCjYUDuqxcWlHj4MSfw12FDJchFViRN8+1qcQoUH6lR1L1mEMEErofB6WzEUwylzomfzOQGiOJdXiWH7mQoUyMa4WXJQWOBvLFvPCGxt6FSr5kyH0qi0YddNG2/pgCsOjff4ZTizXPNwKIzl56OoGg9d9Z/+5cs6On+CFCfevFQ3ZaTycx1YMbvDdRvjkp/lHdAcPXzokxcwfDwAAAABJRU5ErkJggg==\",\"cursor.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAgMAAAC5h23wAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAxQTFRFAAAATU1NTU1NTU1NwlMHHwAAAAR0Uk5TAOvhxbpPrUkAAAAkSURBVHicY2BgYHBggAByabxg1WoGBq2pRCk9AKUbcND43AEAufYHlSuusE4AAAAASUVORK5CYII=\",\"display_off.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAU1QTFRFAAAAh4eHh4eHAAAAAAAAAAAAAwMDAAAAAAAAhoaGGBgYgYGBAAAAPz8/AgICg4ODCQkJhISEh4eHh4eHPj4+NjY2gYGBg4ODgYGBgYGBgoKCAQEBJycngoKChYWFEBAQg4ODCAgIKioqZGRkCgoKBQUFERERd3d3gYGBGxsbNDQ0hISEgYGBPDw8gYGBgYGBh4eHh4eHhYWFh4eHgoKChYWFgYGBgYGBg4ODhoaGg4ODYWFhgoKCBgYGdXV1goKCg4ODgYGBgICAgYGBAAAAg4ODhYWFhISEh4eHgoKChYWFOjo6goKCGhoah4eHh4eHh4eHgoKCh4eHeXl5hoaGgoKChISEgYGBgYGBgoKCY2NjgYGBgoKCh4eHgoKCgYGBhoaGg4ODhoaGhYWFh4eHgYGBhoaGhoaGhoaGg4ODgoKChISEgoKChYWFh4eHfKktUwAAAG90Uk5TACn/AhEFKA8SLCbxCigoVBNKUTYoJ/lh3PyAKSaTNiBtICYpISggKSkmJ0LEKef3lGxA8rn//+pcMSkpnCcptHPJKe0LUjnx5LzKKaMnX73hl64pLnhkzNSgKeLv17LQ+liIzaLe7PfTw5tFpz3K1fXR/gAAAgBJREFUeJzllNdXwjAUxknB0lIoCKVsGTIFQRAZ7r333nuv///R3LZ4mlDQZ/0ekp7b37n5bnITk+mfyDxv5Tir3fwjaElO5BIOKZFLJS1dQVfI0Y809TtEV+elo95RpFPWG+1go4fdQ5QybI8haaNBkM2ANbM09bnrwaPY7iFKrz7EMBdu7CHdVruXIt0M1hb+GKA3LTRKkp5lTA6Dg6xIkhaHhvQ1IlW/UCouQdJNJTRIpk1qO7+wUpcfpl537oBc7VNip3Gi/AmVPBAC1UrL6HXtSGVT+k2Yz0Focad07OMRf3P5BEbd63PFQx7HN+w61JoAm+uBlV48O/0jkLSMmtPCmQ8HwlYdykFV4/LJPp7e3hVyFdapHNehLk6PSjhSkBvwu/cFyJGIYvOyhoc1jjYQFGbygD4CWjoAMla/og3YoSw+KPhjPNoFcim4iFD+pFYA8zZ9WeYU5OBjZ3ORWyCfG03E+47kKpCIJTpGO4KP8XMgtw990xG/PBNTgmPEEXwf7P42oOdFIRAoBCtqTKL6Rcwq4Xsgh5xYC/mmSs6yJKk1YbnVeTq1NaEpmlHbmVn2EORkW2trF2ZzmHGTSUMGl1a9hp4ySRpdQ8yKGURpMmRIYg9pb1YPzg6kO79cLlE6bYFjEtv91bLEUxvhwbWwjY13BxUb9l8+mn9EX8x3Nki8ff5wAAAAAElFTkSuQmCC\",\"display_on.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAR1QTFRFAAAAh4eHgYGBAAAAAAAAgYGBAAAAAwMDAAAAAAAAgYGBg4ODGBgYgYGBhISEAAAAPz8/AgIChoaGCQkJhYWFPj4+NjY2goKCgYGBAQEBJycngYGBgoKCEBAQCAgIhISEKioqZGRkCgoKBQUFERERd3d3gYGBg4ODgYGBGxsbNDQ0hISEgoKCgoKChYWFPDw8gYGBgYGBhoaGgoKCg4ODgoKCgYGBgoKCgoKCgoKCg4ODgoKChoaGgoKCgYGBhoaGg4ODYWFhBgYGdXV1gYGBg4ODgoKCgICAg4ODg4ODhISEAAAAg4ODOjo6gYGBGhoaeXl5goKCgYGBgoKChYWFgoKChISEgoKCY2NjgYGBg4ODgYGBgYGBg4ODgYGBo8n54AAAAF90Uk5TACn/AhH3BSgPEuhUJvFACigoLBM2KCeA6ykm+pMgIEkmKSEoICn9XCkmJ0u6nDop4sUypGuEzLZ6vmCYLZ/dLykpJynUYa8pcllCC1Ip2ycpisl1PadFsintbsPQZdi/bTW7AAAB4UlEQVR4nOWUZ1fCMBSGSSGWFiq0UDbIkr2XbBwMxS0b1P//M0xK9XSiftX7oel585zkvfcmMRj+SRhvzRRlthm/BU3Ry3TYzofTsajpIOjw2iNAjIiddehvHXSdA0mkXEEdG0fkE1DEKXmkSVqVIA6rBmsktUgAWLWHoGp30UNclbtLmwQgoyya91wPTbFy0mQXJ5zJQO6BgXRjfH0iSkX5stHIXr5r0bB/lu8syjR8rzsFbR2SpX+5J2eMP3csLtYsEY2K8BeTFuE2jaVCBw7bHOBuxq16AXmpbui3LtIfbRLUHMY2q4lcFo2WB4KA1SUAlWumNEKCzyxBKZxVHvYGaFguCBx1vM/x0IPzoqQoj5SdP4mns2cCGhBsrgj0uaeUBtzMyxQN8w4mYROTW8+r0oANp8W5mf6WQw5aCYJ2o7ymPaKMi2uVpmWM4TW6tdImgGo1bT4nK6DbbsCc0AZSdmLEFszzHrh6riVvRrNA3/9SE8QLWQu+Gjto9+gE9NBMwr9zi83gFeeFTe11zpm1CHE3HeyVCSknf3MIDcFTbfJKdbR1L4xX49L+/BoillV5uPJqkshD3JWSgpNMXP/lcrD8+hO84MnDr5YpFHv0Fe99VjJ0GBRs2H74aP6R+ACr+TFvZNAQ1wAAAABJRU5ErkJggg==\",\"down.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IB2cksfwAAAKVQTFRFAAAAg4ODgICAAAAAAAAAAAAACAgIAAAAAAAAAAAAAAAAOTk5hYWFEBAQfHx8ODg4dnZ2NDQ0XV1dGxsbKCgogICAFBQUIiIiZGRkgICAgICAFRUVAAAAgICAgICAgICAf39/Li4ugICAcHBwgoKCgICAgoKCgICAg4ODgYGBPj4+goKCgICAhISEgYGBgICAgoKCgICAgYGBgYGBf39/gICAgICAIdPQHAAAADd0Uk5TACn/KAIRIBMFDwooKyApKSknKSYmzCcmKfL7JRCUi2L3J7IpcLUrr0VbKXntNEnkMbxrUcG56CMpi50AAAFZSURBVHic5ZRpf4MgDIeFKFatWm/tfW091u7evv9Hm1Acoujm2y0vFPH5Jf+EEE37J6bblmlatv4jaBCI4rMfR0CMXtAEJ0fccgfM7tAkQHXzArdDxggmqGETGCnJWROkNlOwOqhIhKCtgbSicw1uK/dATSK0aRatIzytA8ik4XSiyJnLSm+VPxULgeyLI3uHRJH+qcB4WZGrKb4c20WwI7b3iUt74OS6XD+xZWrXUCtme0uKTvfcJ65CZFa9VOebqwXmft+oT8yF+/VymT4XeGB+Xx8L+j4gBcoFIDT+oMz6Qp93Y74pCeBpUXaLuW0rUk6r1iv3nP322ewYkgv2nZIvgpSPQDrY5wTjRJDNg9XAE/+uSXIVX812GdKEmtvR2rtWaw+5MAOuofJy79SXu9TgBl4d9DZdI0NjgyiswNCB/qk1J5Bmvp+lQOa9IJNhW4bxm6H5R+wLQYMSQXZNzbcAAAAASUVORK5CYII=\",\"price_range.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAQMAAAD+JxcgAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAATU1NkJ+rOQAAAAJ0Uk5TAP9bkSK1AAAAIUlEQVR4nGNggAPm/w9gTA4QIQMitECEJ1yMEgLNDiAAADfgBMRu78GgAAAAAElFTkSuQmCC\",\"price_time.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAQMAAAD+JxcgAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAATU1NkJ+rOQAAAAJ0Uk5TAP9bkSK1AAAAOklEQVR4nGNggAPm/w9gTA4QIQPEClpMQMITRHCACScQoQQihBgY9P//grKgYk5wdTACYhQHFjuAAABZFAlc4e1fcQAAAABJRU5ErkJggg==\",\"remove.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAK5QTFRFAAAAh4eHgICAAAAAAAAAh4eHAAAAAwMDAAAAAAAAgICAGBgYAAAAPz8/AgICgICACQkJhoaGhoaGgICAPj4+NjY2gYGBg4ODgYGBAQEBJycngoKCEBAQgICAgICACAgIKioqZGRkCgoKBQUFERERd3d3gYGBGxsbNDQ0gICAPDw8YWFhBgYGdXV1gICAg4ODgICAAAAAOjo6GhoaeXl5gICAhYWFY2NjhYWFgICA9O0oCgAAADp0Uk5TACn/AhErBSgPEvEmCigowxMuMcgoJ7hWrCkmdCD6vSAmKSEoICkpJie6KSknKSkp0wspJynCMik11rrLte8AAAFwSURBVHic5ZTXkoIwFIZNAAPSpKkoRQV7Wcva3v/FFiRmEwise7t7bs7MP98k/ylJq/VPQjjKiiJrwo+gON0uxro7XiRTsRHs+voE4JjoRrf+6sD7AFTMvaDGRht9glLMUJtLqmUwD5XDCohHAmBUPQSV27GHtFK7xycBWJab5uPaR+Hlmue7GfZxHwyWFHVMQghXFgD2A8IOZtfssdNJIXcyFEaSfchzp9BuMVP+Fhvr5Qh0nGfqYTGhm3BcYFUaQBKOhMWzRqHyGFRY03ppQ5lCFZ30RloVZGQTaa3QqEt0OyrQnkSkk8I1YJkvAwPCMgY0UpbzXRZhVbosIWGbZTLNQszGMCM42FJEjWDDjIAMtp+xj6x2K+/DqNDc0r4Yc8yGl3uer2aIyT1iyd8sYSuY8cldZbVrH4zPebTvP8OMNSoedj6XzDyk3pwG98u0/ufqGu7tBW5c1PxriXFyHq5PQxXFzeDThvbmp/lH4gt6WxfZ03H8DwAAAABJRU5ErkJggg==\",\"settings.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAW5QTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAACgoKBgYGGxsbKioqQEBAPj4+BQUFCAgIAQEBPz8/ZWVlh4eHZGRkAgICCQkJDw8PNjY2g4ODgoKCNTU1EBAQAAAAAwMDeXl5d3d3AAAAGBgYAAAAERERioqKgoKCgoKCgoKCgYGBgoKChISEhoaGNDQ0g4ODgICAgICAgICAgYGBgYGBhYWFgICAgICAPT09AAAAgYGBgICAgICAgICAgICAY2NjCAgIgICAgICAhYWFhYWFgYGBHBwcgICAhYWFGhoagYGBgYGBg4ODhoaGJycnAAAAhISEgICAg4ODPDw8AAAAgoKCgICAhISEOjo6h4eHgoKCgYGBgICAf39/gYGBgoKCgICAGBgYgYGBg4ODg4ODgICACwsLgYGBgICAgYGBgYGBgYGBgICAgYGBYWFhf39/g4ODPj4+gYGBg4ODgICAhYWFgoKCgYGBgICAgYGBgoKCdXV1T0kC9QAAAHp0Uk5TAAILDxMKESEnJiYpKSgTKSgpKSkoEyAnKSknIAYoKSkFJQEgKl94jYVvVC4nU9f/+K8pOu71KBCi3NPq/ikg0e01Nokm1UUnsZVqQSYOT9lrKRJz5lIpK12jyu+sesgnhGVLxCG55a6Um+GaKfJCKKRgKUt8ocergymDQ9knAAABsElEQVR4nOWUV1vCMBSGg1AQpBZrcVdE3KJxo4LgnuCoe4F7orjHv7doTk3bgF7rd5OnX94nZ+SkCP0TWQqsNpuVs/wI2h2FTleR2+XkHfa8YLHgKRGJSj2SN3fosvIKkVJlVXWONGrkWtEgn1zHJP1GMCs/g7XILFIUpXoTWmaKTnIImGovh72Gxqbmlta2dvgOGpsmQO0dnfhTXd3E6JH0pN1DNnr7MFE/HDsQ0qEO6Pxg9sCh4XDkGx2J6sovBD+G8eiYuo5PxLTKeLoJBZNgT2EcnjY0YYajUKsL7Fk1gcjU3PwChcYTFGorAnsRqlpa1tAVhUbdmr+6RtjIOlgbCjMBUdzc2t7ZzbJ7zAQ4p6GSfRVNwkeKLsvCg31w2JBdjlT0GDxZNzEnpcQ+xWfnFxeXVyp6Tay07gq+L/YUOoBvbomV0V8skiq//DutWfeEfJD1JPLCED4+Pb8kX986tApNQ4iqfSJT76bRzvlgBPODQXW/foYqK5lyeBeYJEL1gaoeGnwIBhjRoQ9SZgTAdEbO/9cKRfmZ+MpGPCVHQ3nBzzS4hKIkuNyh/5g+ALiAXSSas9hwAAAAAElFTkSuQmCC\",\"time_range.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAQMAAAD+JxcgAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAATU1NkJ+rOQAAAAJ0Uk5TAP9bkSK1AAAAJElEQVR4nGNgwAsUGJhQCScQoQQihBgY9P//grKgYk4YOvACACOpBKG6Svj+AAAAAElFTkSuQmCC\",\"trash.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAQMAAAD+JxcgAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAATU1NkJ+rOQAAAAJ0Uk5TAP9bkSK1AAAALUlEQVR4nGNgAIN6ENHQACX4//9gYBBgYIESYC4LkA0lPEkmGFAI5v8PILYCAHygDJxlK0RUAAAAAElFTkSuQmCC\",\"up.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAMZQTFRFAAAAh4eHgICAAAAAAAAAAAAAAwMDAAAAAAAAGBgYAAAAPz8/AgICCQkJgICAh4eHPj4+NjY2AQEBJycnEBAQgICAgICACAgIKioqZGRkCgoKBQUFgYGBERERd3d3gYGBGxsbNDQ0gICAgYGBPDw8gYGBh4eHgICAYWFhBgYGgYGBdXV1goKCg4ODhYWFgICAgoKCAAAAhISEOjo6gICAGhoagYGBeXl5hoaGgICAY2Njg4ODgoKCgoKCgYGBgoKCg4ODgoKC64uw1gAAAEJ0Uk5TACn/AhEFKA8SJgooKBP7KignKSYg9c0gJikhKLQgKSkmJ7ywKY8s5SknlClxKTMpXwtFKe0neiku8ClKWmSbbFFjM5GHSgAAAW5JREFUeJzllGd/gjAQxk3AMFWWOHDvVa2rVbu//5cqhJWQQO3b9nkVjv/v7rnLKJX+iYS9JMuSKvwIiu3loKkZzYHXFgvBiqW1QKSWplfySzvmAyDUN50cG2X0DDLqoTKXVLJgIIXDCohHAqCzHhymeuShy/Ru8kkAhtmhWUTvW9fdEnPQaVLU0n8XF0L3kn5P6LTtZPKgNoK+RrUkcGtQ7S9TsgOxxinrkUPYD+LwLCIh7CTsWSVQqRmTuPqpitlZFLQlApXjrsYBc335wOw47ksmUSMMrgKi/gnAE/awCqNHmTUwDf5X34LlBuedsgbUsK15kPMxTIXzzvFSIdsSPBw7nGD1K+7bL3F9xStEnZhoCw71TbpL71GBBbUF1MZmZWTOi97PI3eIJn9zCEtOj0+umaOde2EszqW9/xr6rM54WFtc0vfQNak57Ibd/Jerohu3GFwYqPjVEhve2Z4cbQU1ikFsQ73z0fwj+ga3VBezGuggFQAAAABJRU5ErkJggg==\"}");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(32);

var iterableToArrayLimit = __webpack_require__(33);

var unsupportedIterableToArray = __webpack_require__(19);

var nonIterableRest = __webpack_require__(34);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(18);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export EMPTY_ARR */
/* unused harmony export EMPTY_OBJ */
/* unused harmony export NO */
/* unused harmony export NOOP */
/* unused harmony export PatchFlagNames */
/* unused harmony export babelParserDefaultPlugins */
/* unused harmony export camelize */
/* unused harmony export capitalize */
/* unused harmony export def */
/* unused harmony export escapeHtml */
/* unused harmony export escapeHtmlComment */
/* unused harmony export extend */
/* unused harmony export generateCodeFrame */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getGlobalThis; });
/* unused harmony export hasChanged */
/* unused harmony export hasOwn */
/* unused harmony export hyphenate */
/* unused harmony export invokeArrayFns */
/* unused harmony export isArray */
/* unused harmony export isBooleanAttr */
/* unused harmony export isDate */
/* unused harmony export isFunction */
/* unused harmony export isGloballyWhitelisted */
/* unused harmony export isHTMLTag */
/* unused harmony export isIntegerKey */
/* unused harmony export isKnownAttr */
/* unused harmony export isMap */
/* unused harmony export isModelListener */
/* unused harmony export isNoUnitNumericStyleProp */
/* unused harmony export isObject */
/* unused harmony export isOn */
/* unused harmony export isPlainObject */
/* unused harmony export isPromise */
/* unused harmony export isReservedProp */
/* unused harmony export isSSRSafeAttrName */
/* unused harmony export isSVGTag */
/* unused harmony export isSet */
/* unused harmony export isSpecialBooleanAttr */
/* unused harmony export isString */
/* unused harmony export isSymbol */
/* unused harmony export isVoidTag */
/* unused harmony export looseEqual */
/* unused harmony export looseIndexOf */
/* unused harmony export makeMap */
/* unused harmony export normalizeClass */
/* unused harmony export normalizeStyle */
/* unused harmony export objectToString */
/* unused harmony export parseStringStyle */
/* unused harmony export propsToAttrMap */
/* unused harmony export remove */
/* unused harmony export slotFlagsText */
/* unused harmony export stringifyStyle */
/* unused harmony export toDisplayString */
/* unused harmony export toHandlerKey */
/* unused harmony export toNumber */
/* unused harmony export toRawType */
/* unused harmony export toTypeString */
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(',');
    for (let i = 0; i < list.length; i++) {
        map[list[i]] = true;
    }
    return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val];
}

/**
 * dev only flag -> name mapping
 */
const PatchFlagNames = {
    [1 /* TEXT */]: `TEXT`,
    [2 /* CLASS */]: `CLASS`,
    [4 /* STYLE */]: `STYLE`,
    [8 /* PROPS */]: `PROPS`,
    [16 /* FULL_PROPS */]: `FULL_PROPS`,
    [32 /* HYDRATE_EVENTS */]: `HYDRATE_EVENTS`,
    [64 /* STABLE_FRAGMENT */]: `STABLE_FRAGMENT`,
    [128 /* KEYED_FRAGMENT */]: `KEYED_FRAGMENT`,
    [256 /* UNKEYED_FRAGMENT */]: `UNKEYED_FRAGMENT`,
    [512 /* NEED_PATCH */]: `NEED_PATCH`,
    [1024 /* DYNAMIC_SLOTS */]: `DYNAMIC_SLOTS`,
    [2048 /* DEV_ROOT_FRAGMENT */]: `DEV_ROOT_FRAGMENT`,
    [-1 /* HOISTED */]: `HOISTED`,
    [-2 /* BAIL */]: `BAIL`
};

/**
 * Dev only
 */
const slotFlagsText = {
    [1 /* STABLE */]: 'STABLE',
    [2 /* DYNAMIC */]: 'DYNAMIC',
    [3 /* FORWARDED */]: 'FORWARDED'
};

const GLOBALS_WHITE_LISTED = 'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' +
    'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' +
    'Object,Boolean,String,RegExp,Map,Set,JSON,Intl';
const isGloballyWhitelisted = /*#__PURE__*/ makeMap(GLOBALS_WHITE_LISTED);

const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
    const lines = source.split(/\r?\n/);
    let count = 0;
    const res = [];
    for (let i = 0; i < lines.length; i++) {
        count += lines[i].length + 1;
        if (count >= start) {
            for (let j = i - range; j <= i + range || end > count; j++) {
                if (j < 0 || j >= lines.length)
                    continue;
                const line = j + 1;
                res.push(`${line}${' '.repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
                const lineLength = lines[j].length;
                if (j === i) {
                    // push underline
                    const pad = start - (count - lineLength) + 1;
                    const length = Math.max(1, end > count ? lineLength - pad : end - start);
                    res.push(`   |  ` + ' '.repeat(pad) + '^'.repeat(length));
                }
                else if (j > i) {
                    if (end > count) {
                        const length = Math.max(Math.min(end - count, lineLength), 1);
                        res.push(`   |  ` + '^'.repeat(length));
                    }
                    count += lineLength + 1;
                }
            }
            break;
        }
    }
    return res.join('\n');
}

/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs);
/**
 * The full list is needed during SSR to produce the correct initial markup.
 */
const isBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs +
    `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,` +
    `loop,open,required,reversed,scoped,seamless,` +
    `checked,muted,multiple,selected`);
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
    if (attrValidationCache.hasOwnProperty(name)) {
        return attrValidationCache[name];
    }
    const isUnsafe = unsafeAttrCharRE.test(name);
    if (isUnsafe) {
        console.error(`unsafe attribute name: ${name}`);
    }
    return (attrValidationCache[name] = !isUnsafe);
}
const propsToAttrMap = {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv'
};
/**
 * CSS properties that accept plain numbers
 */
const isNoUnitNumericStyleProp = /*#__PURE__*/ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,` +
    `border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,` +
    `columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,` +
    `grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,` +
    `grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,` +
    `line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,` +
    // SVG
    `fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,` +
    `stroke-miterlimit,stroke-opacity,stroke-width`);
/**
 * Known attributes, this is used for stringification of runtime static nodes
 * so that we don't stringify bindings that cannot be set from HTML.
 * Don't also forget to allow `data-*` and `aria-*`!
 * Generated from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */
const isKnownAttr = /*#__PURE__*/ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,` +
    `autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,` +
    `border,buffered,capture,challenge,charset,checked,cite,class,code,` +
    `codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,` +
    `coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,` +
    `disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,` +
    `formaction,formenctype,formmethod,formnovalidate,formtarget,headers,` +
    `height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,` +
    `ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,` +
    `manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,` +
    `open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,` +
    `referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,` +
    `selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,` +
    `start,step,style,summary,tabindex,target,title,translate,type,usemap,` +
    `value,width,wrap`);

function normalizeStyle(value) {
    if (isArray(value)) {
        const res = {};
        for (let i = 0; i < value.length; i++) {
            const item = value[i];
            const normalized = normalizeStyle(isString(item) ? parseStringStyle(item) : item);
            if (normalized) {
                for (const key in normalized) {
                    res[key] = normalized[key];
                }
            }
        }
        return res;
    }
    else if (isObject(value)) {
        return value;
    }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
    const ret = {};
    cssText.split(listDelimiterRE).forEach(item => {
        if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return ret;
}
function stringifyStyle(styles) {
    let ret = '';
    if (!styles) {
        return ret;
    }
    for (const key in styles) {
        const value = styles[key];
        const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
        if (isString(value) ||
            (typeof value === 'number' && isNoUnitNumericStyleProp(normalizedKey))) {
            // only render valid values
            ret += `${normalizedKey}:${value};`;
        }
    }
    return ret;
}
function normalizeClass(value) {
    let res = '';
    if (isString(value)) {
        res = value;
    }
    else if (isArray(value)) {
        for (let i = 0; i < value.length; i++) {
            res += normalizeClass(value[i]) + ' ';
        }
    }
    else if (isObject(value)) {
        for (const name in value) {
            if (value[name]) {
                res += name + ' ';
            }
        }
    }
    return res.trim();
}

// These tag configs are shared between compiler-dom and runtime-dom, so they
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element
const HTML_TAGS = 'html,body,base,head,link,meta,style,title,address,article,aside,footer,' +
    'header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,' +
    'figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,' +
    'data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,' +
    'time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,' +
    'canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,' +
    'th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,' +
    'option,output,progress,select,textarea,details,dialog,menu,' +
    'summary,template,blockquote,iframe,tfoot';
// https://developer.mozilla.org/en-US/docs/Web/SVG/Element
const SVG_TAGS = 'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,' +
    'defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,' +
    'feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,' +
    'feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,' +
    'feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,' +
    'fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,' +
    'foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,' +
    'mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,' +
    'polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,' +
    'text,textPath,title,tspan,unknown,use,view';
const VOID_TAGS = 'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr';
const isHTMLTag = /*#__PURE__*/ makeMap(HTML_TAGS);
const isSVGTag = /*#__PURE__*/ makeMap(SVG_TAGS);
const isVoidTag = /*#__PURE__*/ makeMap(VOID_TAGS);

const escapeRE = /["'&<>]/;
function escapeHtml(string) {
    const str = '' + string;
    const match = escapeRE.exec(str);
    if (!match) {
        return str;
    }
    let html = '';
    let escaped;
    let index;
    let lastIndex = 0;
    for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
            case 34: // "
                escaped = '&quot;';
                break;
            case 38: // &
                escaped = '&amp;';
                break;
            case 39: // '
                escaped = '&#39;';
                break;
            case 60: // <
                escaped = '&lt;';
                break;
            case 62: // >
                escaped = '&gt;';
                break;
            default:
                continue;
        }
        if (lastIndex !== index) {
            html += str.substring(lastIndex, index);
        }
        lastIndex = index + 1;
        html += escaped;
    }
    return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}
// https://www.w3.org/TR/html52/syntax.html#comments
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
    return src.replace(commentStripRE, '');
}

function looseCompareArrays(a, b) {
    if (a.length !== b.length)
        return false;
    let equal = true;
    for (let i = 0; equal && i < a.length; i++) {
        equal = looseEqual(a[i], b[i]);
    }
    return equal;
}
function looseEqual(a, b) {
    if (a === b)
        return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) {
        return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    }
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) {
        return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    }
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
        /* istanbul ignore if: this if will probably never be called */
        if (!aValidType || !bValidType) {
            return false;
        }
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) {
            return false;
        }
        for (const key in a) {
            const aHasKey = a.hasOwnProperty(key);
            const bHasKey = b.hasOwnProperty(key);
            if ((aHasKey && !bHasKey) ||
                (!aHasKey && bHasKey) ||
                !looseEqual(a[key], b[key])) {
                return false;
            }
        }
    }
    return String(a) === String(b);
}
function looseIndexOf(arr, val) {
    return arr.findIndex(item => looseEqual(item, val));
}

/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */
const toDisplayString = (val) => {
    return val == null
        ? ''
        : isObject(val)
            ? JSON.stringify(val, replacer, 2)
            : String(val);
};
const replacer = (_key, val) => {
    if (isMap(val)) {
        return {
            [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val]) => {
                entries[`${key} =>`] = val;
                return entries;
            }, {})
        };
    }
    else if (isSet(val)) {
        return {
            [`Set(${val.size})`]: [...val.values()]
        };
    }
    else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
        return String(val);
    }
    return val;
};

/**
 * List of @babel/parser plugins that are used for template expression
 * transforms and SFC script transforms. By default we enable proposals slated
 * for ES2020. This will need to be updated as the spec moves forward.
 * Full list at https://babeljs.io/docs/en/next/babel-parser#plugins
 */
const babelParserDefaultPlugins = [
    'bigInt',
    'optionalChaining',
    'nullishCoalescingOperator'
];
const EMPTY_OBJ = ( false)
    ? undefined
    : {};
const EMPTY_ARR = ( false) ? undefined : [];
const NOOP = () => { };
/**
 * Always return false.
 */
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith('onUpdate:');
const extend = Object.assign;
const remove = (arr, el) => {
    const i = arr.indexOf(el);
    if (i > -1) {
        arr.splice(i, 1);
    }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === '[object Map]';
const isSet = (val) => toTypeString(val) === '[object Set]';
const isDate = (val) => val instanceof Date;
const isFunction = (val) => typeof val === 'function';
const isString = (val) => typeof val === 'string';
const isSymbol = (val) => typeof val === 'symbol';
const isObject = (val) => val !== null && typeof val === 'object';
const isPromise = (val) => {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
    // extract "RawType" from strings like "[object RawType]"
    return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === '[object Object]';
const isIntegerKey = (key) => isString(key) &&
    key !== 'NaN' &&
    key[0] !== '-' &&
    '' + parseInt(key, 10) === key;
const isReservedProp = /*#__PURE__*/ makeMap(
// the leading comma is intentional so empty string "" is also included
',key,ref,' +
    'onVnodeBeforeMount,onVnodeMounted,' +
    'onVnodeBeforeUpdate,onVnodeUpdated,' +
    'onVnodeBeforeUnmount,onVnodeUnmounted');
const cacheStringFunction = (fn) => {
    const cache = Object.create(null);
    return ((str) => {
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    });
};
const camelizeRE = /-(\w)/g;
/**
 * @private
 */
const camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
});
const hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, '-$1').toLowerCase());
/**
 * @private
 */
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
/**
 * @private
 */
const toHandlerKey = cacheStringFunction((str) => (str ? `on${capitalize(str)}` : ``));
// compare whether a value has changed, accounting for NaN.
const hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
const invokeArrayFns = (fns, arg) => {
    for (let i = 0; i < fns.length; i++) {
        fns[i](arg);
    }
};
const def = (obj, key, value) => {
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value
    });
};
const toNumber = (val) => {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
    return (_globalThis ||
        (_globalThis =
            typeof globalThis !== 'undefined'
                ? globalThis
                : typeof self !== 'undefined'
                    ? self
                    : typeof window !== 'undefined'
                        ? window
                        : typeof global !== 'undefined'
                            ? global
                            : {}));
};



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)))

/***/ }),
/* 21 */
/***/ (function(module) {

module.exports = JSON.parse("[\"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=\"]");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// Copyright (c) 2013 Pieroxy <pieroxy@pieroxy.net>
// This work is free. You can redistribute it and/or modify it
// under the terms of the WTFPL, Version 2
// For more information see LICENSE.txt or http://www.wtfpl.net/
//
// For more information, the home page:
// http://pieroxy.net/blog/pages/lz-string/testing.html
//
// LZ-based compression algorithm, version 1.4.4
var LZString = (function() {

// private property
var f = String.fromCharCode;
var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
var baseReverseDic = {};

function getBaseValue(alphabet, character) {
  if (!baseReverseDic[alphabet]) {
    baseReverseDic[alphabet] = {};
    for (var i=0 ; i<alphabet.length ; i++) {
      baseReverseDic[alphabet][alphabet.charAt(i)] = i;
    }
  }
  return baseReverseDic[alphabet][character];
}

var LZString = {
  compressToBase64 : function (input) {
    if (input == null) return "";
    var res = LZString._compress(input, 6, function(a){return keyStrBase64.charAt(a);});
    switch (res.length % 4) { // To produce valid Base64
    default: // When could this happen ?
    case 0 : return res;
    case 1 : return res+"===";
    case 2 : return res+"==";
    case 3 : return res+"=";
    }
  },

  decompressFromBase64 : function (input) {
    if (input == null) return "";
    if (input == "") return null;
    return LZString._decompress(input.length, 32, function(index) { return getBaseValue(keyStrBase64, input.charAt(index)); });
  },

  compressToUTF16 : function (input) {
    if (input == null) return "";
    return LZString._compress(input, 15, function(a){return f(a+32);}) + " ";
  },

  decompressFromUTF16: function (compressed) {
    if (compressed == null) return "";
    if (compressed == "") return null;
    return LZString._decompress(compressed.length, 16384, function(index) { return compressed.charCodeAt(index) - 32; });
  },

  //compress into uint8array (UCS-2 big endian format)
  compressToUint8Array: function (uncompressed) {
    var compressed = LZString.compress(uncompressed);
    var buf=new Uint8Array(compressed.length*2); // 2 bytes per character

    for (var i=0, TotalLen=compressed.length; i<TotalLen; i++) {
      var current_value = compressed.charCodeAt(i);
      buf[i*2] = current_value >>> 8;
      buf[i*2+1] = current_value % 256;
    }
    return buf;
  },

  //decompress from uint8array (UCS-2 big endian format)
  decompressFromUint8Array:function (compressed) {
    if (compressed===null || compressed===undefined){
        return LZString.decompress(compressed);
    } else {
        var buf=new Array(compressed.length/2); // 2 bytes per character
        for (var i=0, TotalLen=buf.length; i<TotalLen; i++) {
          buf[i]=compressed[i*2]*256+compressed[i*2+1];
        }

        var result = [];
        buf.forEach(function (c) {
          result.push(f(c));
        });
        return LZString.decompress(result.join(''));

    }

  },


  //compress into a string that is already URI encoded
  compressToEncodedURIComponent: function (input) {
    if (input == null) return "";
    return LZString._compress(input, 6, function(a){return keyStrUriSafe.charAt(a);});
  },

  //decompress from an output of compressToEncodedURIComponent
  decompressFromEncodedURIComponent:function (input) {
    if (input == null) return "";
    if (input == "") return null;
    input = input.replace(/ /g, "+");
    return LZString._decompress(input.length, 32, function(index) { return getBaseValue(keyStrUriSafe, input.charAt(index)); });
  },

  compress: function (uncompressed) {
    return LZString._compress(uncompressed, 16, function(a){return f(a);});
  },
  _compress: function (uncompressed, bitsPerChar, getCharFromInt) {
    if (uncompressed == null) return "";
    var i, value,
        context_dictionary= {},
        context_dictionaryToCreate= {},
        context_c="",
        context_wc="",
        context_w="",
        context_enlargeIn= 2, // Compensate for the first entry which should not count
        context_dictSize= 3,
        context_numBits= 2,
        context_data=[],
        context_data_val=0,
        context_data_position=0,
        ii;

    for (ii = 0; ii < uncompressed.length; ii += 1) {
      context_c = uncompressed.charAt(ii);
      if (!Object.prototype.hasOwnProperty.call(context_dictionary,context_c)) {
        context_dictionary[context_c] = context_dictSize++;
        context_dictionaryToCreate[context_c] = true;
      }

      context_wc = context_w + context_c;
      if (Object.prototype.hasOwnProperty.call(context_dictionary,context_wc)) {
        context_w = context_wc;
      } else {
        if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {
          if (context_w.charCodeAt(0)<256) {
            for (i=0 ; i<context_numBits ; i++) {
              context_data_val = (context_data_val << 1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
            }
            value = context_w.charCodeAt(0);
            for (i=0 ; i<8 ; i++) {
              context_data_val = (context_data_val << 1) | (value&1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          } else {
            value = 1;
            for (i=0 ; i<context_numBits ; i++) {
              context_data_val = (context_data_val << 1) | value;
              if (context_data_position ==bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = 0;
            }
            value = context_w.charCodeAt(0);
            for (i=0 ; i<16 ; i++) {
              context_data_val = (context_data_val << 1) | (value&1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          }
          context_enlargeIn--;
          if (context_enlargeIn == 0) {
            context_enlargeIn = Math.pow(2, context_numBits);
            context_numBits++;
          }
          delete context_dictionaryToCreate[context_w];
        } else {
          value = context_dictionary[context_w];
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }


        }
        context_enlargeIn--;
        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
        // Add wc to the dictionary.
        context_dictionary[context_wc] = context_dictSize++;
        context_w = String(context_c);
      }
    }

    // Output the code for w.
    if (context_w !== "") {
      if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {
        if (context_w.charCodeAt(0)<256) {
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
          }
          value = context_w.charCodeAt(0);
          for (i=0 ; i<8 ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
        } else {
          value = 1;
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1) | value;
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = 0;
          }
          value = context_w.charCodeAt(0);
          for (i=0 ; i<16 ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
        }
        context_enlargeIn--;
        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
        delete context_dictionaryToCreate[context_w];
      } else {
        value = context_dictionary[context_w];
        for (i=0 ; i<context_numBits ; i++) {
          context_data_val = (context_data_val << 1) | (value&1);
          if (context_data_position == bitsPerChar-1) {
            context_data_position = 0;
            context_data.push(getCharFromInt(context_data_val));
            context_data_val = 0;
          } else {
            context_data_position++;
          }
          value = value >> 1;
        }


      }
      context_enlargeIn--;
      if (context_enlargeIn == 0) {
        context_enlargeIn = Math.pow(2, context_numBits);
        context_numBits++;
      }
    }

    // Mark the end of the stream
    value = 2;
    for (i=0 ; i<context_numBits ; i++) {
      context_data_val = (context_data_val << 1) | (value&1);
      if (context_data_position == bitsPerChar-1) {
        context_data_position = 0;
        context_data.push(getCharFromInt(context_data_val));
        context_data_val = 0;
      } else {
        context_data_position++;
      }
      value = value >> 1;
    }

    // Flush the last char
    while (true) {
      context_data_val = (context_data_val << 1);
      if (context_data_position == bitsPerChar-1) {
        context_data.push(getCharFromInt(context_data_val));
        break;
      }
      else context_data_position++;
    }
    return context_data.join('');
  },

  decompress: function (compressed) {
    if (compressed == null) return "";
    if (compressed == "") return null;
    return LZString._decompress(compressed.length, 32768, function(index) { return compressed.charCodeAt(index); });
  },

  _decompress: function (length, resetValue, getNextValue) {
    var dictionary = [],
        next,
        enlargeIn = 4,
        dictSize = 4,
        numBits = 3,
        entry = "",
        result = [],
        i,
        w,
        bits, resb, maxpower, power,
        c,
        data = {val:getNextValue(0), position:resetValue, index:1};

    for (i = 0; i < 3; i += 1) {
      dictionary[i] = i;
    }

    bits = 0;
    maxpower = Math.pow(2,2);
    power=1;
    while (power!=maxpower) {
      resb = data.val & data.position;
      data.position >>= 1;
      if (data.position == 0) {
        data.position = resetValue;
        data.val = getNextValue(data.index++);
      }
      bits |= (resb>0 ? 1 : 0) * power;
      power <<= 1;
    }

    switch (next = bits) {
      case 0:
          bits = 0;
          maxpower = Math.pow(2,8);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
        c = f(bits);
        break;
      case 1:
          bits = 0;
          maxpower = Math.pow(2,16);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
        c = f(bits);
        break;
      case 2:
        return "";
    }
    dictionary[3] = c;
    w = c;
    result.push(c);
    while (true) {
      if (data.index > length) {
        return "";
      }

      bits = 0;
      maxpower = Math.pow(2,numBits);
      power=1;
      while (power!=maxpower) {
        resb = data.val & data.position;
        data.position >>= 1;
        if (data.position == 0) {
          data.position = resetValue;
          data.val = getNextValue(data.index++);
        }
        bits |= (resb>0 ? 1 : 0) * power;
        power <<= 1;
      }

      switch (c = bits) {
        case 0:
          bits = 0;
          maxpower = Math.pow(2,8);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }

          dictionary[dictSize++] = f(bits);
          c = dictSize-1;
          enlargeIn--;
          break;
        case 1:
          bits = 0;
          maxpower = Math.pow(2,16);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
          dictionary[dictSize++] = f(bits);
          c = dictSize-1;
          enlargeIn--;
          break;
        case 2:
          return result.join('');
      }

      if (enlargeIn == 0) {
        enlargeIn = Math.pow(2, numBits);
        numBits++;
      }

      if (dictionary[c]) {
        entry = dictionary[c];
      } else {
        if (c === dictSize) {
          entry = w + w.charAt(0);
        } else {
          return null;
        }
      }
      result.push(entry);

      // Add w+entry[0] to the dictionary.
      dictionary[dictSize++] = w + entry.charAt(0);
      enlargeIn--;

      w = entry;

      if (enlargeIn == 0) {
        enlargeIn = Math.pow(2, numBits);
        numBits++;
      }

    }
  }
};
  return LZString;
})();

if (true) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () { return LZString; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}


/***/ }),
/* 23 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(18);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

/**
 * Utils module
 */

/**
 * Check if an object is an array-like object
 *
 * @credit Javascript: The Definitive Guide, O'Reilly, 2011
 */
function isArrayLike(o) {
    if (o &&                                 // o is not null, undefined, etc.
        typeof o === "object" &&             // o is an object
        isFinite(o.length) &&                // o.length is a finite number
        o.length >= 0 &&                     // o.length is non-negative
        o.length === Math.floor(o.length) && // o.length is an integer
        o.length < 4294967296)               // o.length < 2^32
        return true;                         // Then o is array-like
    else
        return false;                        // Otherwise it is not
}

/**
 * Check for the existence of the sort function in the object
 */
function isSortable(o) {
    if (o &&                                 // o is not null, undefined, etc.
        typeof o === "object" &&             // o is an object
        typeof o.sort === "function")        // o.sort is a function
        return true;                         // Then o is array-like
    else
        return false;                        // Otherwise it is not
}

/**
 * Check for sortable-array-like objects
 */
module.exports.isSortableArrayLike = function (o) {
    return isArrayLike(o) && isSortable(o);
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

/**
 * Utility compare functions
 */

module.exports = {

    /**
     * Compare two numbers.
     *
     * @param {Number} a
     * @param {Number} b
     * @returns {Number} 1 if a > b, 0 if a = b, -1 if a < b
     */
    numcmp: function (a, b) {
        return a - b;
    },

    /**
     * Compare two strings.
     *
     * @param {Number|String} a
     * @param {Number|String} b
     * @returns {Number} 1 if a > b, 0 if a = b, -1 if a < b
     */
    strcmp: function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
    }

};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

/**
 * Binary search implementation
 */

/**
 * Main search recursive function
 */
function loop(data, min, max, index, valpos) {

    // set current position as the middle point between min and max
    var curr = (max + min) >>> 1;

    // compare current index value with the one we are looking for
    var diff = this.compare(data[curr][this.index], index);

    // found?
    if (!diff) {
        return valpos[index] = {
            "found": true,
            "index": curr,
            "prev": null,
            "next": null
        };
    }

    // no more positions available?
    if (min >= max) {
        return valpos[index] = {
            "found": false,
            "index": null,
            "prev": (diff < 0) ? max : max - 1,
            "next": (diff < 0) ? max + 1 : max
        };
    }

    // continue looking for index in one of the remaining array halves
    // current position can be skept as index is not there...
    if (diff > 0)
        return loop.call(this, data, min, curr - 1, index, valpos);
    else
        return loop.call(this, data, curr + 1, max, index, valpos);
}

/**
 * Search bootstrap
 * The function has to be executed in the context of the IndexedArray object
 */
function search(index) {
    var data = this.data;
    return loop.call(this, data, 0, data.length - 1, index, this.valpos);
}

/**
 * Export search function
 */
module.exports.search = search;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 31 */
/***/ (function(module, exports) {



/***/ }),
/* 32 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

module.exports = _iterableToArrayLimit;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "TradingVue", function() { return /* reexport */ TradingVue; });
__webpack_require__.d(__webpack_exports__, "Overlay", function() { return /* reexport */ mixins_overlay; });
__webpack_require__.d(__webpack_exports__, "Utils", function() { return /* reexport */ utils; });
__webpack_require__.d(__webpack_exports__, "Constants", function() { return /* reexport */ constants; });
__webpack_require__.d(__webpack_exports__, "Candle", function() { return /* reexport */ candle_CandleExt; });
__webpack_require__.d(__webpack_exports__, "Volbar", function() { return /* reexport */ volbar_VolbarExt; });
__webpack_require__.d(__webpack_exports__, "layout_cnv", function() { return /* reexport */ layout_cnv; });
__webpack_require__.d(__webpack_exports__, "layout_vol", function() { return /* reexport */ layout_vol; });
__webpack_require__.d(__webpack_exports__, "DataCube", function() { return /* reexport */ datacube_DataCube; });
__webpack_require__.d(__webpack_exports__, "Tool", function() { return /* reexport */ mixins_tool; });
__webpack_require__.d(__webpack_exports__, "Interface", function() { return /* reexport */ mixins_interface; });
__webpack_require__.d(__webpack_exports__, "primitives", function() { return /* binding */ primitives; });

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js


const targetMap = new WeakMap();
const effectStack = [];
let activeEffect;
const ITERATE_KEY = Symbol(( false) ? undefined : '');
const MAP_KEY_ITERATE_KEY = Symbol(( false) ? undefined : '');
function isEffect(fn) {
    return fn && fn._isEffect === true;
}
function reactivity_esm_bundler_effect(fn, options = shared_esm_bundler["a" /* EMPTY_OBJ */]) {
    if (isEffect(fn)) {
        fn = fn.raw;
    }
    const effect = createReactiveEffect(fn, options);
    if (!options.lazy) {
        effect();
    }
    return effect;
}
function stop(effect) {
    if (effect.active) {
        reactivity_esm_bundler_cleanup(effect);
        if (effect.options.onStop) {
            effect.options.onStop();
        }
        effect.active = false;
    }
}
let uid = 0;
function createReactiveEffect(fn, options) {
    const effect = function reactiveEffect() {
        if (!effect.active) {
            return options.scheduler ? undefined : fn();
        }
        if (!effectStack.includes(effect)) {
            reactivity_esm_bundler_cleanup(effect);
            try {
                enableTracking();
                effectStack.push(effect);
                activeEffect = effect;
                return fn();
            }
            finally {
                effectStack.pop();
                resetTracking();
                activeEffect = effectStack[effectStack.length - 1];
            }
        }
    };
    effect.id = uid++;
    effect.allowRecurse = !!options.allowRecurse;
    effect._isEffect = true;
    effect.active = true;
    effect.raw = fn;
    effect.deps = [];
    effect.options = options;
    return effect;
}
function reactivity_esm_bundler_cleanup(effect) {
    const { deps } = effect;
    if (deps.length) {
        for (let i = 0; i < deps.length; i++) {
            deps[i].delete(effect);
        }
        deps.length = 0;
    }
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
}
function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
}
function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === undefined ? true : last;
}
function track(target, type, key) {
    if (!shouldTrack || activeEffect === undefined) {
        return;
    }
    let depsMap = targetMap.get(target);
    if (!depsMap) {
        targetMap.set(target, (depsMap = new Map()));
    }
    let dep = depsMap.get(key);
    if (!dep) {
        depsMap.set(key, (dep = new Set()));
    }
    if (!dep.has(activeEffect)) {
        dep.add(activeEffect);
        activeEffect.deps.push(dep);
        if (false) {}
    }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
        // never been tracked
        return;
    }
    const effects = new Set();
    const add = (effectsToAdd) => {
        if (effectsToAdd) {
            effectsToAdd.forEach(effect => {
                if (effect !== activeEffect || effect.allowRecurse) {
                    effects.add(effect);
                }
            });
        }
    };
    if (type === "clear" /* CLEAR */) {
        // collection being cleared
        // trigger all effects for target
        depsMap.forEach(add);
    }
    else if (key === 'length' && Object(shared_esm_bundler["g" /* isArray */])(target)) {
        depsMap.forEach((dep, key) => {
            if (key === 'length' || key >= newValue) {
                add(dep);
            }
        });
    }
    else {
        // schedule runs for SET | ADD | DELETE
        if (key !== void 0) {
            add(depsMap.get(key));
        }
        // also run for iteration key on ADD | DELETE | Map.SET
        switch (type) {
            case "add" /* ADD */:
                if (!Object(shared_esm_bundler["g" /* isArray */])(target)) {
                    add(depsMap.get(ITERATE_KEY));
                    if (Object(shared_esm_bundler["j" /* isMap */])(target)) {
                        add(depsMap.get(MAP_KEY_ITERATE_KEY));
                    }
                }
                else if (Object(shared_esm_bundler["i" /* isIntegerKey */])(key)) {
                    // new index added to array -> length changes
                    add(depsMap.get('length'));
                }
                break;
            case "delete" /* DELETE */:
                if (!Object(shared_esm_bundler["g" /* isArray */])(target)) {
                    add(depsMap.get(ITERATE_KEY));
                    if (Object(shared_esm_bundler["j" /* isMap */])(target)) {
                        add(depsMap.get(MAP_KEY_ITERATE_KEY));
                    }
                }
                break;
            case "set" /* SET */:
                if (Object(shared_esm_bundler["j" /* isMap */])(target)) {
                    add(depsMap.get(ITERATE_KEY));
                }
                break;
        }
    }
    const run = (effect) => {
        if (false) {}
        if (effect.options.scheduler) {
            effect.options.scheduler(effect);
        }
        else {
            effect();
        }
    };
    effects.forEach(run);
}

const builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol)
    .map(key => Symbol[key])
    .filter(shared_esm_bundler["l" /* isSymbol */]));
const reactivity_esm_bundler_get = /*#__PURE__*/ createGetter();
const shallowGet = /*#__PURE__*/ createGetter(false, true);
const readonlyGet = /*#__PURE__*/ createGetter(true);
const shallowReadonlyGet = /*#__PURE__*/ createGetter(true, true);
const arrayInstrumentations = {};
['includes', 'indexOf', 'lastIndexOf'].forEach(key => {
    const method = Array.prototype[key];
    arrayInstrumentations[key] = function (...args) {
        const arr = toRaw(this);
        for (let i = 0, l = this.length; i < l; i++) {
            track(arr, "get" /* GET */, i + '');
        }
        // we run the method using the original args first (which may be reactive)
        const res = method.apply(arr, args);
        if (res === -1 || res === false) {
            // if that didn't work, run it again using raw values.
            return method.apply(arr, args.map(toRaw));
        }
        else {
            return res;
        }
    };
});
['push', 'pop', 'shift', 'unshift', 'splice'].forEach(key => {
    const method = Array.prototype[key];
    arrayInstrumentations[key] = function (...args) {
        pauseTracking();
        const res = method.apply(this, args);
        resetTracking();
        return res;
    };
});
function createGetter(isReadonly = false, shallow = false) {
    return function get(target, key, receiver) {
        if (key === "__v_isReactive" /* IS_REACTIVE */) {
            return !isReadonly;
        }
        else if (key === "__v_isReadonly" /* IS_READONLY */) {
            return isReadonly;
        }
        else if (key === "__v_raw" /* RAW */ &&
            receiver === (isReadonly ? readonlyMap : reactiveMap).get(target)) {
            return target;
        }
        const targetIsArray = Object(shared_esm_bundler["g" /* isArray */])(target);
        if (!isReadonly && targetIsArray && Object(shared_esm_bundler["f" /* hasOwn */])(arrayInstrumentations, key)) {
            return Reflect.get(arrayInstrumentations, key, receiver);
        }
        const res = Reflect.get(target, key, receiver);
        if (Object(shared_esm_bundler["l" /* isSymbol */])(key)
            ? builtInSymbols.has(key)
            : key === `__proto__` || key === `__v_isRef`) {
            return res;
        }
        if (!isReadonly) {
            track(target, "get" /* GET */, key);
        }
        if (shallow) {
            return res;
        }
        if (isRef(res)) {
            // ref unwrapping - does not apply for Array + integer key.
            const shouldUnwrap = !targetIsArray || !Object(shared_esm_bundler["i" /* isIntegerKey */])(key);
            return shouldUnwrap ? res.value : res;
        }
        if (Object(shared_esm_bundler["k" /* isObject */])(res)) {
            // Convert returned value into a proxy as well. we do the isObject check
            // here to avoid invalid value warning. Also need to lazy access readonly
            // and reactive here to avoid circular dependency.
            return isReadonly ? readonly(res) : reactive(res);
        }
        return res;
    };
}
const reactivity_esm_bundler_set = /*#__PURE__*/ createSetter();
const shallowSet = /*#__PURE__*/ createSetter(true);
function createSetter(shallow = false) {
    return function set(target, key, value, receiver) {
        const oldValue = target[key];
        if (!shallow) {
            value = toRaw(value);
            if (!Object(shared_esm_bundler["g" /* isArray */])(target) && isRef(oldValue) && !isRef(value)) {
                oldValue.value = value;
                return true;
            }
        }
        const hadKey = Object(shared_esm_bundler["g" /* isArray */])(target) && Object(shared_esm_bundler["i" /* isIntegerKey */])(key)
            ? Number(key) < target.length
            : Object(shared_esm_bundler["f" /* hasOwn */])(target, key);
        const result = Reflect.set(target, key, value, receiver);
        // don't trigger if target is something up in the prototype chain of original
        if (target === toRaw(receiver)) {
            if (!hadKey) {
                trigger(target, "add" /* ADD */, key, value);
            }
            else if (Object(shared_esm_bundler["e" /* hasChanged */])(value, oldValue)) {
                trigger(target, "set" /* SET */, key, value, oldValue);
            }
        }
        return result;
    };
}
function deleteProperty(target, key) {
    const hadKey = Object(shared_esm_bundler["f" /* hasOwn */])(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
        trigger(target, "delete" /* DELETE */, key, undefined, oldValue);
    }
    return result;
}
function reactivity_esm_bundler_has(target, key) {
    const result = Reflect.has(target, key);
    if (!Object(shared_esm_bundler["l" /* isSymbol */])(key) || !builtInSymbols.has(key)) {
        track(target, "has" /* HAS */, key);
    }
    return result;
}
function ownKeys(target) {
    track(target, "iterate" /* ITERATE */, Object(shared_esm_bundler["g" /* isArray */])(target) ? 'length' : ITERATE_KEY);
    return Reflect.ownKeys(target);
}
const mutableHandlers = {
    get: reactivity_esm_bundler_get,
    set: reactivity_esm_bundler_set,
    deleteProperty,
    has: reactivity_esm_bundler_has,
    ownKeys
};
const readonlyHandlers = {
    get: readonlyGet,
    set(target, key) {
        if ((false)) {}
        return true;
    },
    deleteProperty(target, key) {
        if ((false)) {}
        return true;
    }
};
const shallowReactiveHandlers = Object(shared_esm_bundler["d" /* extend */])({}, mutableHandlers, {
    get: shallowGet,
    set: shallowSet
});
// Props handlers are special in the sense that it should not unwrap top-level
// refs (in order to allow refs to be explicitly passed down), but should
// retain the reactivity of the normal readonly object.
const shallowReadonlyHandlers = Object(shared_esm_bundler["d" /* extend */])({}, readonlyHandlers, {
    get: shallowReadonlyGet
});

const toReactive = (value) => Object(shared_esm_bundler["k" /* isObject */])(value) ? reactive(value) : value;
const toReadonly = (value) => Object(shared_esm_bundler["k" /* isObject */])(value) ? readonly(value) : value;
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly = false, isShallow = false) {
    // #1772: readonly(reactive(Map)) should return readonly + reactive version
    // of the value
    target = target["__v_raw" /* RAW */];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
        !isReadonly && track(rawTarget, "get" /* GET */, key);
    }
    !isReadonly && track(rawTarget, "get" /* GET */, rawKey);
    const { has } = getProto(rawTarget);
    const wrap = isReadonly ? toReadonly : isShallow ? toShallow : toReactive;
    if (has.call(rawTarget, key)) {
        return wrap(target.get(key));
    }
    else if (has.call(rawTarget, rawKey)) {
        return wrap(target.get(rawKey));
    }
}
function has$1(key, isReadonly = false) {
    const target = this["__v_raw" /* RAW */];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
        !isReadonly && track(rawTarget, "has" /* HAS */, key);
    }
    !isReadonly && track(rawTarget, "has" /* HAS */, rawKey);
    return key === rawKey
        ? target.has(key)
        : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly = false) {
    target = target["__v_raw" /* RAW */];
    !isReadonly && track(toRaw(target), "iterate" /* ITERATE */, ITERATE_KEY);
    return Reflect.get(target, 'size', target);
}
function reactivity_esm_bundler_add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    target.add(value);
    if (!hadKey) {
        trigger(target, "add" /* ADD */, value, value);
    }
    return this;
}
function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has, get } = getProto(target);
    let hadKey = has.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has.call(target, key);
    }
    else if ((false)) {}
    const oldValue = get.call(target, key);
    target.set(key, value);
    if (!hadKey) {
        trigger(target, "add" /* ADD */, key, value);
    }
    else if (Object(shared_esm_bundler["e" /* hasChanged */])(value, oldValue)) {
        trigger(target, "set" /* SET */, key, value, oldValue);
    }
    return this;
}
function deleteEntry(key) {
    const target = toRaw(this);
    const { has, get } = getProto(target);
    let hadKey = has.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has.call(target, key);
    }
    else if ((false)) {}
    const oldValue = get ? get.call(target, key) : undefined;
    // forward the operation before queueing reactions
    const result = target.delete(key);
    if (hadKey) {
        trigger(target, "delete" /* DELETE */, key, undefined, oldValue);
    }
    return result;
}
function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = ( false)
        ? undefined
        : undefined;
    // forward the operation before queueing reactions
    const result = target.clear();
    if (hadItems) {
        trigger(target, "clear" /* CLEAR */, undefined, undefined, oldTarget);
    }
    return result;
}
function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
        const observed = this;
        const target = observed["__v_raw" /* RAW */];
        const rawTarget = toRaw(target);
        const wrap = isReadonly ? toReadonly : isShallow ? toShallow : toReactive;
        !isReadonly && track(rawTarget, "iterate" /* ITERATE */, ITERATE_KEY);
        return target.forEach((value, key) => {
            // important: make sure the callback is
            // 1. invoked with the reactive map as `this` and 3rd arg
            // 2. the value received should be a corresponding reactive/readonly.
            return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
    };
}
function createIterableMethod(method, isReadonly, isShallow) {
    return function (...args) {
        const target = this["__v_raw" /* RAW */];
        const rawTarget = toRaw(target);
        const targetIsMap = Object(shared_esm_bundler["j" /* isMap */])(rawTarget);
        const isPair = method === 'entries' || (method === Symbol.iterator && targetIsMap);
        const isKeyOnly = method === 'keys' && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isReadonly ? toReadonly : isShallow ? toShallow : toReactive;
        !isReadonly &&
            track(rawTarget, "iterate" /* ITERATE */, isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        // return a wrapped iterator which returns observed versions of the
        // values emitted from the real iterator
        return {
            // iterator protocol
            next() {
                const { value, done } = innerIterator.next();
                return done
                    ? { value, done }
                    : {
                        value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
                        done
                    };
            },
            // iterable protocol
            [Symbol.iterator]() {
                return this;
            }
        };
    };
}
function createReadonlyMethod(type) {
    return function (...args) {
        if ((false)) {}
        return type === "delete" /* DELETE */ ? false : this;
    };
}
const mutableInstrumentations = {
    get(key) {
        return get$1(this, key);
    },
    get size() {
        return size(this);
    },
    has: has$1,
    add: reactivity_esm_bundler_add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
};
const shallowInstrumentations = {
    get(key) {
        return get$1(this, key, false, true);
    },
    get size() {
        return size(this);
    },
    has: has$1,
    add: reactivity_esm_bundler_add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
};
const readonlyInstrumentations = {
    get(key) {
        return get$1(this, key, true);
    },
    get size() {
        return size(this, true);
    },
    has(key) {
        return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add" /* ADD */),
    set: createReadonlyMethod("set" /* SET */),
    delete: createReadonlyMethod("delete" /* DELETE */),
    clear: createReadonlyMethod("clear" /* CLEAR */),
    forEach: createForEach(true, false)
};
const iteratorMethods = ['keys', 'values', 'entries', Symbol.iterator];
iteratorMethods.forEach(method => {
    mutableInstrumentations[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations[method] = createIterableMethod(method, true, false);
    shallowInstrumentations[method] = createIterableMethod(method, false, true);
});
function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow
        ? shallowInstrumentations
        : isReadonly
            ? readonlyInstrumentations
            : mutableInstrumentations;
    return (target, key, receiver) => {
        if (key === "__v_isReactive" /* IS_REACTIVE */) {
            return !isReadonly;
        }
        else if (key === "__v_isReadonly" /* IS_READONLY */) {
            return isReadonly;
        }
        else if (key === "__v_raw" /* RAW */) {
            return target;
        }
        return Reflect.get(Object(shared_esm_bundler["f" /* hasOwn */])(instrumentations, key) && key in target
            ? instrumentations
            : target, key, receiver);
    };
}
const mutableCollectionHandlers = {
    get: createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
    get: createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
    get: createInstrumentationGetter(true, false)
};
function checkIdentityKeys(target, has, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has.call(target, rawKey)) {
        const type = Object(shared_esm_bundler["m" /* toRawType */])(target);
        console.warn(`Reactive ${type} contains both the raw and reactive ` +
            `versions of the same object${type === `Map` ? ` as keys` : ``}, ` +
            `which can lead to inconsistencies. ` +
            `Avoid differentiating between the raw and reactive versions ` +
            `of an object and only use the reactive version if possible.`);
    }
}

const reactiveMap = new WeakMap();
const readonlyMap = new WeakMap();
function targetTypeMap(rawType) {
    switch (rawType) {
        case 'Object':
        case 'Array':
            return 1 /* COMMON */;
        case 'Map':
        case 'Set':
        case 'WeakMap':
        case 'WeakSet':
            return 2 /* COLLECTION */;
        default:
            return 0 /* INVALID */;
    }
}
function getTargetType(value) {
    return value["__v_skip" /* SKIP */] || !Object.isExtensible(value)
        ? 0 /* INVALID */
        : targetTypeMap(Object(shared_esm_bundler["m" /* toRawType */])(value));
}
function reactive(target) {
    // if trying to observe a readonly proxy, return the readonly version.
    if (target && target["__v_isReadonly" /* IS_READONLY */]) {
        return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers);
}
/**
 * Return a shallowly-reactive copy of the original object, where only the root
 * level properties are reactive. It also does not auto-unwrap refs (even at the
 * root level).
 */
function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers);
}
/**
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but `readonly` can be called on an already reactive object.
 */
function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers);
}
/**
 * Returns a reactive-copy of the original object, where only the root level
 * properties are readonly, and does NOT unwrap refs nor recursively convert
 * returned properties.
 * This is used for creating the props proxy object for stateful components.
 */
function shallowReadonly(target) {
    return createReactiveObject(target, true, shallowReadonlyHandlers, readonlyCollectionHandlers);
}
function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers) {
    if (!Object(shared_esm_bundler["k" /* isObject */])(target)) {
        if ((false)) {}
        return target;
    }
    // target is already a Proxy, return it.
    // exception: calling readonly() on a reactive object
    if (target["__v_raw" /* RAW */] &&
        !(isReadonly && target["__v_isReactive" /* IS_REACTIVE */])) {
        return target;
    }
    // target already has corresponding Proxy
    const proxyMap = isReadonly ? readonlyMap : reactiveMap;
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
        return existingProxy;
    }
    // only a whitelist of value types can be observed.
    const targetType = getTargetType(target);
    if (targetType === 0 /* INVALID */) {
        return target;
    }
    const proxy = new Proxy(target, targetType === 2 /* COLLECTION */ ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
}
function isReactive(value) {
    if (reactivity_esm_bundler_isReadonly(value)) {
        return isReactive(value["__v_raw" /* RAW */]);
    }
    return !!(value && value["__v_isReactive" /* IS_REACTIVE */]);
}
function reactivity_esm_bundler_isReadonly(value) {
    return !!(value && value["__v_isReadonly" /* IS_READONLY */]);
}
function isProxy(value) {
    return isReactive(value) || reactivity_esm_bundler_isReadonly(value);
}
function toRaw(observed) {
    return ((observed && toRaw(observed["__v_raw" /* RAW */])) || observed);
}
function markRaw(value) {
    Object(shared_esm_bundler["c" /* def */])(value, "__v_skip" /* SKIP */, true);
    return value;
}

const convert = (val) => Object(shared_esm_bundler["k" /* isObject */])(val) ? reactive(val) : val;
function isRef(r) {
    return Boolean(r && r.__v_isRef === true);
}
function reactivity_esm_bundler_ref(value) {
    return createRef(value);
}
function shallowRef(value) {
    return createRef(value, true);
}
class reactivity_esm_bundler_RefImpl {
    constructor(_rawValue, _shallow = false) {
        this._rawValue = _rawValue;
        this._shallow = _shallow;
        this.__v_isRef = true;
        this._value = _shallow ? _rawValue : convert(_rawValue);
    }
    get value() {
        track(toRaw(this), "get" /* GET */, 'value');
        return this._value;
    }
    set value(newVal) {
        if (Object(shared_esm_bundler["e" /* hasChanged */])(toRaw(newVal), this._rawValue)) {
            this._rawValue = newVal;
            this._value = this._shallow ? newVal : convert(newVal);
            trigger(toRaw(this), "set" /* SET */, 'value', newVal);
        }
    }
}
function createRef(rawValue, shallow = false) {
    if (isRef(rawValue)) {
        return rawValue;
    }
    return new reactivity_esm_bundler_RefImpl(rawValue, shallow);
}
function triggerRef(ref) {
    trigger(toRaw(ref), "set" /* SET */, 'value', ( false) ? undefined : void 0);
}
function unref(ref) {
    return isRef(ref) ? ref.value : ref;
}
const shallowUnwrapHandlers = {
    get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver) => {
        const oldValue = target[key];
        if (isRef(oldValue) && !isRef(value)) {
            oldValue.value = value;
            return true;
        }
        else {
            return Reflect.set(target, key, value, receiver);
        }
    }
};
function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs)
        ? objectWithRefs
        : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class CustomRefImpl {
    constructor(factory) {
        this.__v_isRef = true;
        const { get, set } = factory(() => track(this, "get" /* GET */, 'value'), () => trigger(this, "set" /* SET */, 'value'));
        this._get = get;
        this._set = set;
    }
    get value() {
        return this._get();
    }
    set value(newVal) {
        this._set(newVal);
    }
}
function customRef(factory) {
    return new CustomRefImpl(factory);
}
function toRefs(object) {
    if (false) {}
    const ret = Object(shared_esm_bundler["g" /* isArray */])(object) ? new Array(object.length) : {};
    for (const key in object) {
        ret[key] = toRef(object, key);
    }
    return ret;
}
class ObjectRefImpl {
    constructor(_object, _key) {
        this._object = _object;
        this._key = _key;
        this.__v_isRef = true;
    }
    get value() {
        return this._object[this._key];
    }
    set value(newVal) {
        this._object[this._key] = newVal;
    }
}
function toRef(object, key) {
    return isRef(object[key])
        ? object[key]
        : new ObjectRefImpl(object, key);
}

class ComputedRefImpl {
    constructor(getter, _setter, isReadonly) {
        this._setter = _setter;
        this._dirty = true;
        this.__v_isRef = true;
        this.effect = reactivity_esm_bundler_effect(getter, {
            lazy: true,
            scheduler: () => {
                if (!this._dirty) {
                    this._dirty = true;
                    trigger(toRaw(this), "set" /* SET */, 'value');
                }
            }
        });
        this["__v_isReadonly" /* IS_READONLY */] = isReadonly;
    }
    get value() {
        if (this._dirty) {
            this._value = this.effect();
            this._dirty = false;
        }
        track(toRaw(this), "get" /* GET */, 'value');
        return this._value;
    }
    set value(newValue) {
        this._setter(newValue);
    }
}
function reactivity_esm_bundler_computed(getterOrOptions) {
    let getter;
    let setter;
    if (Object(shared_esm_bundler["h" /* isFunction */])(getterOrOptions)) {
        getter = getterOrOptions;
        setter = ( false)
            ? undefined
            : shared_esm_bundler["b" /* NOOP */];
    }
    else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    return new ComputedRefImpl(getter, setter, Object(shared_esm_bundler["h" /* isFunction */])(getterOrOptions) || !getterOrOptions.set);
}



// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.js
var dist_shared_esm_bundler = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js





const runtime_core_esm_bundler_stack = [];
function pushWarningContext(vnode) {
    runtime_core_esm_bundler_stack.push(vnode);
}
function popWarningContext() {
    runtime_core_esm_bundler_stack.pop();
}
function warn(msg, ...args) {
    // avoid props formatting or warn handler tracking deps that might be mutated
    // during patch, leading to infinite recursion.
    pauseTracking();
    const instance = runtime_core_esm_bundler_stack.length ? runtime_core_esm_bundler_stack[runtime_core_esm_bundler_stack.length - 1].component : null;
    const appWarnHandler = instance && instance.appContext.config.warnHandler;
    const trace = getComponentTrace();
    if (appWarnHandler) {
        callWithErrorHandling(appWarnHandler, instance, 11 /* APP_WARN_HANDLER */, [
            msg + args.join(''),
            instance && instance.proxy,
            trace
                .map(({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`)
                .join('\n'),
            trace
        ]);
    }
    else {
        const warnArgs = [`[Vue warn]: ${msg}`, ...args];
        /* istanbul ignore if */
        if (trace.length &&
            // avoid spamming console during tests
            !false) {
            warnArgs.push(`\n`, ...formatTrace(trace));
        }
        console.warn(...warnArgs);
    }
    resetTracking();
}
function getComponentTrace() {
    let currentVNode = runtime_core_esm_bundler_stack[runtime_core_esm_bundler_stack.length - 1];
    if (!currentVNode) {
        return [];
    }
    // we can't just use the stack because it will be incomplete during updates
    // that did not start from the root. Re-construct the parent chain using
    // instance parent pointers.
    const normalizedStack = [];
    while (currentVNode) {
        const last = normalizedStack[0];
        if (last && last.vnode === currentVNode) {
            last.recurseCount++;
        }
        else {
            normalizedStack.push({
                vnode: currentVNode,
                recurseCount: 0
            });
        }
        const parentInstance = currentVNode.component && currentVNode.component.parent;
        currentVNode = parentInstance && parentInstance.vnode;
    }
    return normalizedStack;
}
/* istanbul ignore next */
function formatTrace(trace) {
    const logs = [];
    trace.forEach((entry, i) => {
        logs.push(...(i === 0 ? [] : [`\n`]), ...formatTraceEntry(entry));
    });
    return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
    const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
    const isRoot = vnode.component ? vnode.component.parent == null : false;
    const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
    const close = `>` + postfix;
    return vnode.props
        ? [open, ...formatProps(vnode.props), close]
        : [open + close];
}
/* istanbul ignore next */
function formatProps(props) {
    const res = [];
    const keys = Object.keys(props);
    keys.slice(0, 3).forEach(key => {
        res.push(...formatProp(key, props[key]));
    });
    if (keys.length > 3) {
        res.push(` ...`);
    }
    return res;
}
/* istanbul ignore next */
function formatProp(key, value, raw) {
    if (Object(dist_shared_esm_bundler["x" /* isString */])(value)) {
        value = JSON.stringify(value);
        return raw ? value : [`${key}=${value}`];
    }
    else if (typeof value === 'number' ||
        typeof value === 'boolean' ||
        value == null) {
        return raw ? value : [`${key}=${value}`];
    }
    else if (isRef(value)) {
        value = formatProp(key, toRaw(value.value), true);
        return raw ? value : [`${key}=Ref<`, value, `>`];
    }
    else if (Object(dist_shared_esm_bundler["o" /* isFunction */])(value)) {
        return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
    }
    else {
        value = toRaw(value);
        return raw ? value : [`${key}=`, value];
    }
}

const ErrorTypeStrings = {
    ["bc" /* BEFORE_CREATE */]: 'beforeCreate hook',
    ["c" /* CREATED */]: 'created hook',
    ["bm" /* BEFORE_MOUNT */]: 'beforeMount hook',
    ["m" /* MOUNTED */]: 'mounted hook',
    ["bu" /* BEFORE_UPDATE */]: 'beforeUpdate hook',
    ["u" /* UPDATED */]: 'updated',
    ["bum" /* BEFORE_UNMOUNT */]: 'beforeUnmount hook',
    ["um" /* UNMOUNTED */]: 'unmounted hook',
    ["a" /* ACTIVATED */]: 'activated hook',
    ["da" /* DEACTIVATED */]: 'deactivated hook',
    ["ec" /* ERROR_CAPTURED */]: 'errorCaptured hook',
    ["rtc" /* RENDER_TRACKED */]: 'renderTracked hook',
    ["rtg" /* RENDER_TRIGGERED */]: 'renderTriggered hook',
    [0 /* SETUP_FUNCTION */]: 'setup function',
    [1 /* RENDER_FUNCTION */]: 'render function',
    [2 /* WATCH_GETTER */]: 'watcher getter',
    [3 /* WATCH_CALLBACK */]: 'watcher callback',
    [4 /* WATCH_CLEANUP */]: 'watcher cleanup function',
    [5 /* NATIVE_EVENT_HANDLER */]: 'native event handler',
    [6 /* COMPONENT_EVENT_HANDLER */]: 'component event handler',
    [7 /* VNODE_HOOK */]: 'vnode hook',
    [8 /* DIRECTIVE_HOOK */]: 'directive hook',
    [9 /* TRANSITION_HOOK */]: 'transition hook',
    [10 /* APP_ERROR_HANDLER */]: 'app errorHandler',
    [11 /* APP_WARN_HANDLER */]: 'app warnHandler',
    [12 /* FUNCTION_REF */]: 'ref function',
    [13 /* ASYNC_COMPONENT_LOADER */]: 'async component loader',
    [14 /* SCHEDULER */]: 'scheduler flush. This is likely a Vue internals bug. ' +
        'Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/vue-next'
};
function callWithErrorHandling(fn, instance, type, args) {
    let res;
    try {
        res = args ? fn(...args) : fn();
    }
    catch (err) {
        handleError(err, instance, type);
    }
    return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
    if (Object(dist_shared_esm_bundler["o" /* isFunction */])(fn)) {
        const res = callWithErrorHandling(fn, instance, type, args);
        if (res && Object(dist_shared_esm_bundler["u" /* isPromise */])(res)) {
            res.catch(err => {
                handleError(err, instance, type);
            });
        }
        return res;
    }
    const values = [];
    for (let i = 0; i < fn.length; i++) {
        values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
    }
    return values;
}
function handleError(err, instance, type, throwInDev = true) {
    const contextVNode = instance ? instance.vnode : null;
    if (instance) {
        let cur = instance.parent;
        // the exposed instance is the render proxy to keep it consistent with 2.x
        const exposedInstance = instance.proxy;
        // in production the hook receives only the error code
        const errorInfo = ( false) ? undefined : type;
        while (cur) {
            const errorCapturedHooks = cur.ec;
            if (errorCapturedHooks) {
                for (let i = 0; i < errorCapturedHooks.length; i++) {
                    if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
                        return;
                    }
                }
            }
            cur = cur.parent;
        }
        // app-level handling
        const appErrorHandler = instance.appContext.config.errorHandler;
        if (appErrorHandler) {
            callWithErrorHandling(appErrorHandler, null, 10 /* APP_ERROR_HANDLER */, [err, exposedInstance, errorInfo]);
            return;
        }
    }
    logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
    if ((false)) {}
    else {
        // recover in prod to reduce the impact on end-user
        console.error(err);
    }
}

let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPreFlushCbs = [];
let activePreFlushCbs = null;
let preFlushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = Promise.resolve();
let currentFlushPromise = null;
let currentPreFlushParentJob = null;
const RECURSION_LIMIT = 100;
function nextTick(fn) {
    const p = currentFlushPromise || resolvedPromise;
    return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
function queueJob(job) {
    // the dedupe search uses the startIndex argument of Array.includes()
    // by default the search index includes the current job that is being run
    // so it cannot recursively trigger itself again.
    // if the job is a watch() callback, the search will start with a +1 index to
    // allow it recursively trigger itself - it is the user's responsibility to
    // ensure it doesn't end up in an infinite loop.
    if ((!queue.length ||
        !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) &&
        job !== currentPreFlushParentJob) {
        queue.push(job);
        queueFlush();
    }
}
function queueFlush() {
    if (!isFlushing && !isFlushPending) {
        isFlushPending = true;
        currentFlushPromise = resolvedPromise.then(flushJobs);
    }
}
function invalidateJob(job) {
    const i = queue.indexOf(job);
    if (i > -1) {
        queue.splice(i, 1);
    }
}
function queueCb(cb, activeQueue, pendingQueue, index) {
    if (!Object(dist_shared_esm_bundler["n" /* isArray */])(cb)) {
        if (!activeQueue ||
            !activeQueue.includes(cb, cb.allowRecurse ? index + 1 : index)) {
            pendingQueue.push(cb);
        }
    }
    else {
        // if cb is an array, it is a component lifecycle hook which can only be
        // triggered by a job, which is already deduped in the main queue, so
        // we can skip duplicate check here to improve perf
        pendingQueue.push(...cb);
    }
    queueFlush();
}
function queuePreFlushCb(cb) {
    queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
}
function queuePostFlushCb(cb) {
    queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
}
function flushPreFlushCbs(seen, parentJob = null) {
    if (pendingPreFlushCbs.length) {
        currentPreFlushParentJob = parentJob;
        activePreFlushCbs = [...new Set(pendingPreFlushCbs)];
        pendingPreFlushCbs.length = 0;
        if ((false)) {}
        for (preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++) {
            if ((false)) {}
            activePreFlushCbs[preFlushIndex]();
        }
        activePreFlushCbs = null;
        preFlushIndex = 0;
        currentPreFlushParentJob = null;
        // recursively flush until it drains
        flushPreFlushCbs(seen, parentJob);
    }
}
function flushPostFlushCbs(seen) {
    if (pendingPostFlushCbs.length) {
        const deduped = [...new Set(pendingPostFlushCbs)];
        pendingPostFlushCbs.length = 0;
        // #1947 already has active queue, nested flushPostFlushCbs call
        if (activePostFlushCbs) {
            activePostFlushCbs.push(...deduped);
            return;
        }
        activePostFlushCbs = deduped;
        if ((false)) {}
        activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
        for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
            if ((false)) {}
            activePostFlushCbs[postFlushIndex]();
        }
        activePostFlushCbs = null;
        postFlushIndex = 0;
    }
}
const getId = (job) => job.id == null ? Infinity : job.id;
function flushJobs(seen) {
    isFlushPending = false;
    isFlushing = true;
    if ((false)) {}
    flushPreFlushCbs(seen);
    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child so its render effect will have smaller
    //    priority number)
    // 2. If a component is unmounted during a parent component's update,
    //    its update can be skipped.
    queue.sort((a, b) => getId(a) - getId(b));
    try {
        for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
            const job = queue[flushIndex];
            if (job) {
                if ((false)) {}
                callWithErrorHandling(job, null, 14 /* SCHEDULER */);
            }
        }
    }
    finally {
        flushIndex = 0;
        queue.length = 0;
        flushPostFlushCbs(seen);
        isFlushing = false;
        currentFlushPromise = null;
        // some postFlushCb queued jobs!
        // keep flushing until it drains.
        if (queue.length || pendingPostFlushCbs.length) {
            flushJobs(seen);
        }
    }
}
function checkRecursiveUpdates(seen, fn) {
    if (!seen.has(fn)) {
        seen.set(fn, 1);
    }
    else {
        const count = seen.get(fn);
        if (count > RECURSION_LIMIT) {
            throw new Error(`Maximum recursive updates exceeded. ` +
                `This means you have a reactive effect that is mutating its own ` +
                `dependencies and thus recursively triggering itself. Possible sources ` +
                `include component template, render function, updated hook or ` +
                `watcher source function.`);
        }
        else {
            seen.set(fn, count + 1);
        }
    }
}

/* eslint-disable no-restricted-globals */
let isHmrUpdating = false;
const hmrDirtyComponents = new Set();
// Expose the HMR runtime on the global object
// This makes it entirely tree-shakable without polluting the exports and makes
// it easier to be used in toolings like vue-loader
// Note: for a component to be eligible for HMR it also needs the __hmrId option
// to be set so that its instances can be registered / removed.
if ((false)) {}
const map = new Map();
function registerHMR(instance) {
    const id = instance.type.__hmrId;
    let record = map.get(id);
    if (!record) {
        createRecord(id, instance.type);
        record = map.get(id);
    }
    record.instances.add(instance);
}
function unregisterHMR(instance) {
    map.get(instance.type.__hmrId).instances.delete(instance);
}
function createRecord(id, component) {
    if (!component) {
        warn(`HMR API usage is out of date.\n` +
            `Please upgrade vue-loader/vite/rollup-plugin-vue or other relevant ` +
            `depdendency that handles Vue SFC compilation.`);
        component = {};
    }
    if (map.has(id)) {
        return false;
    }
    map.set(id, {
        component: isClassComponent(component) ? component.__vccOpts : component,
        instances: new Set()
    });
    return true;
}
function rerender(id, newRender) {
    const record = map.get(id);
    if (!record)
        return;
    if (newRender)
        record.component.render = newRender;
    // Array.from creates a snapshot which avoids the set being mutated during
    // updates
    Array.from(record.instances).forEach(instance => {
        if (newRender) {
            instance.render = newRender;
        }
        instance.renderCache = [];
        // this flag forces child components with slot content to update
        isHmrUpdating = true;
        instance.update();
        isHmrUpdating = false;
    });
}
function reload(id, newComp) {
    const record = map.get(id);
    if (!record)
        return;
    // Array.from creates a snapshot which avoids the set being mutated during
    // updates
    const { component, instances } = record;
    if (!hmrDirtyComponents.has(component)) {
        // 1. Update existing comp definition to match new one
        newComp = isClassComponent(newComp) ? newComp.__vccOpts : newComp;
        Object(dist_shared_esm_bundler["h" /* extend */])(component, newComp);
        for (const key in component) {
            if (!(key in newComp)) {
                delete component[key];
            }
        }
        // 2. Mark component dirty. This forces the renderer to replace the component
        // on patch.
        hmrDirtyComponents.add(component);
        // 3. Make sure to unmark the component after the reload.
        queuePostFlushCb(() => {
            hmrDirtyComponents.delete(component);
        });
    }
    Array.from(instances).forEach(instance => {
        if (instance.parent) {
            // 4. Force the parent instance to re-render. This will cause all updated
            // components to be unmounted and re-mounted. Queue the update so that we
            // don't end up forcing the same parent to re-render multiple times.
            queueJob(instance.parent.update);
        }
        else if (instance.appContext.reload) {
            // root instance mounted via createApp() has a reload method
            instance.appContext.reload();
        }
        else if (typeof window !== 'undefined') {
            // root instance inside tree created via raw render(). Force reload.
            window.location.reload();
        }
        else {
            console.warn('[HMR] Root or manually mounted instance modified. Full reload required.');
        }
    });
}
function tryWrap(fn) {
    return (id, arg) => {
        try {
            return fn(id, arg);
        }
        catch (e) {
            console.error(e);
            console.warn(`[HMR] Something went wrong during Vue component hot-reload. ` +
                `Full reload required.`);
        }
    };
}

let devtools;
function setDevtoolsHook(hook) {
    devtools = hook;
}
function devtoolsInitApp(app, version) {
    // TODO queue if devtools is undefined
    if (!devtools)
        return;
    devtools.emit("app:init" /* APP_INIT */, app, version, {
        Fragment,
        Text,
        Comment,
        Static
    });
}
function devtoolsUnmountApp(app) {
    if (!devtools)
        return;
    devtools.emit("app:unmount" /* APP_UNMOUNT */, app);
}
const devtoolsComponentAdded = /*#__PURE__*/ createDevtoolsComponentHook("component:added" /* COMPONENT_ADDED */);
const devtoolsComponentUpdated = /*#__PURE__*/ createDevtoolsComponentHook("component:updated" /* COMPONENT_UPDATED */);
const devtoolsComponentRemoved = /*#__PURE__*/ createDevtoolsComponentHook("component:removed" /* COMPONENT_REMOVED */);
function createDevtoolsComponentHook(hook) {
    return (component) => {
        if (!devtools)
            return;
        devtools.emit(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : undefined, component);
    };
}
function devtoolsComponentEmit(component, event, params) {
    if (!devtools)
        return;
    devtools.emit("component:emit" /* COMPONENT_EMIT */, component.appContext.app, component, event, params);
}

function runtime_core_esm_bundler_emit(instance, event, ...rawArgs) {
    const props = instance.vnode.props || dist_shared_esm_bundler["b" /* EMPTY_OBJ */];
    if ((false)) {}
    let args = rawArgs;
    const isModelListener = event.startsWith('update:');
    // for v-model update:xxx events, apply modifiers on args
    const modelArg = isModelListener && event.slice(7);
    if (modelArg && modelArg in props) {
        const modifiersKey = `${modelArg === 'modelValue' ? 'model' : modelArg}Modifiers`;
        const { number, trim } = props[modifiersKey] || dist_shared_esm_bundler["b" /* EMPTY_OBJ */];
        if (trim) {
            args = rawArgs.map(a => a.trim());
        }
        else if (number) {
            args = rawArgs.map(dist_shared_esm_bundler["D" /* toNumber */]);
        }
    }
    if (( false) || __VUE_PROD_DEVTOOLS__) {
        devtoolsComponentEmit(instance, event, args);
    }
    if ((false)) {}
    // convert handler name to camelCase. See issue #2249
    let handlerName = Object(dist_shared_esm_bundler["C" /* toHandlerKey */])(Object(dist_shared_esm_bundler["e" /* camelize */])(event));
    let handler = props[handlerName];
    // for v-model update:xxx events, also trigger kebab-case equivalent
    // for props passed via kebab-case
    if (!handler && isModelListener) {
        handlerName = Object(dist_shared_esm_bundler["C" /* toHandlerKey */])(Object(dist_shared_esm_bundler["l" /* hyphenate */])(event));
        handler = props[handlerName];
    }
    if (handler) {
        callWithAsyncErrorHandling(handler, instance, 6 /* COMPONENT_EVENT_HANDLER */, args);
    }
    const onceHandler = props[handlerName + `Once`];
    if (onceHandler) {
        if (!instance.emitted) {
            (instance.emitted = {})[handlerName] = true;
        }
        else if (instance.emitted[handlerName]) {
            return;
        }
        callWithAsyncErrorHandling(onceHandler, instance, 6 /* COMPONENT_EVENT_HANDLER */, args);
    }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
    if (!appContext.deopt && comp.__emits !== undefined) {
        return comp.__emits;
    }
    const raw = comp.emits;
    let normalized = {};
    // apply mixin/extends props
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !Object(dist_shared_esm_bundler["o" /* isFunction */])(comp)) {
        const extendEmits = (raw) => {
            hasExtends = true;
            Object(dist_shared_esm_bundler["h" /* extend */])(normalized, normalizeEmitsOptions(raw, appContext, true));
        };
        if (!asMixin && appContext.mixins.length) {
            appContext.mixins.forEach(extendEmits);
        }
        if (comp.extends) {
            extendEmits(comp.extends);
        }
        if (comp.mixins) {
            comp.mixins.forEach(extendEmits);
        }
    }
    if (!raw && !hasExtends) {
        return (comp.__emits = null);
    }
    if (Object(dist_shared_esm_bundler["n" /* isArray */])(raw)) {
        raw.forEach(key => (normalized[key] = null));
    }
    else {
        Object(dist_shared_esm_bundler["h" /* extend */])(normalized, raw);
    }
    return (comp.__emits = normalized);
}
// Check if an incoming prop key is a declared emit event listener.
// e.g. With `emits: { click: null }`, props named `onClick` and `onclick` are
// both considered matched listeners.
function isEmitListener(options, key) {
    if (!options || !Object(dist_shared_esm_bundler["t" /* isOn */])(key)) {
        return false;
    }
    key = key.slice(2).replace(/Once$/, '');
    return (Object(dist_shared_esm_bundler["k" /* hasOwn */])(options, key[0].toLowerCase() + key.slice(1)) ||
        Object(dist_shared_esm_bundler["k" /* hasOwn */])(options, Object(dist_shared_esm_bundler["l" /* hyphenate */])(key)) ||
        Object(dist_shared_esm_bundler["k" /* hasOwn */])(options, key));
}

/**
 * mark the current rendering instance for asset resolution (e.g.
 * resolveComponent, resolveDirective) during render
 */
let currentRenderingInstance = null;
function setCurrentRenderingInstance(instance) {
    currentRenderingInstance = instance;
}
/**
 * dev only flag to track whether $attrs was used during render.
 * If $attrs was used during render then the warning for failed attrs
 * fallthrough can be suppressed.
 */
let accessedAttrs = false;
function markAttrsAccessed() {
    accessedAttrs = true;
}
function renderComponentRoot(instance) {
    const { type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit, render, renderCache, data, setupState, ctx } = instance;
    let result;
    currentRenderingInstance = instance;
    if ((false)) {}
    try {
        let fallthroughAttrs;
        if (vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */) {
            // withProxy is a proxy with a different `has` trap only for
            // runtime-compiled render functions using `with` block.
            const proxyToUse = withProxy || proxy;
            result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
            fallthroughAttrs = attrs;
        }
        else {
            // functional
            const render = Component;
            // in dev, mark attrs accessed if optional props (attrs === props)
            if (false) {}
            result = normalizeVNode(render.length > 1
                ? render(props, ( false)
                    ? undefined
                    : { attrs, slots, emit })
                : render(props, null /* we know it doesn't need it */));
            fallthroughAttrs = Component.props
                ? attrs
                : getFunctionalFallthrough(attrs);
        }
        // attr merging
        // in dev mode, comments are preserved, and it's possible for a template
        // to have comments along side the root element which makes it a fragment
        let root = result;
        let setRoot = undefined;
        if (false /* DEV_ROOT_FRAGMENT */) {}
        if (Component.inheritAttrs !== false && fallthroughAttrs) {
            const keys = Object.keys(fallthroughAttrs);
            const { shapeFlag } = root;
            if (keys.length) {
                if (shapeFlag & 1 /* ELEMENT */ ||
                    shapeFlag & 6 /* COMPONENT */) {
                    if (propsOptions && keys.some(dist_shared_esm_bundler["r" /* isModelListener */])) {
                        // If a v-model listener (onUpdate:xxx) has a corresponding declared
                        // prop, it indicates this component expects to handle v-model and
                        // it should not fallthrough.
                        // related: #1543, #1643, #1989
                        fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
                    }
                    root = cloneVNode(root, fallthroughAttrs);
                }
                else if (false) {}
            }
        }
        // inherit directives
        if (vnode.dirs) {
            if (false) {}
            root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
        }
        // inherit transition data
        if (vnode.transition) {
            if (false) {}
            root.transition = vnode.transition;
        }
        if (false) {}
        else {
            result = root;
        }
    }
    catch (err) {
        handleError(err, instance, 1 /* RENDER_FUNCTION */);
        result = createVNode(Comment);
    }
    currentRenderingInstance = null;
    return result;
}
/**
 * dev only
 * In dev mode, template root level comments are rendered, which turns the
 * template into a fragment root, but we need to locate the single element
 * root for attrs and scope id processing.
 */
const getChildRoot = (vnode) => {
    const rawChildren = vnode.children;
    const dynamicChildren = vnode.dynamicChildren;
    const childRoot = filterSingleRoot(rawChildren);
    if (!childRoot) {
        return [vnode, undefined];
    }
    const index = rawChildren.indexOf(childRoot);
    const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
    const setRoot = (updatedRoot) => {
        rawChildren[index] = updatedRoot;
        if (dynamicChildren) {
            if (dynamicIndex > -1) {
                dynamicChildren[dynamicIndex] = updatedRoot;
            }
            else if (updatedRoot.patchFlag > 0) {
                vnode.dynamicChildren = [...dynamicChildren, updatedRoot];
            }
        }
    };
    return [normalizeVNode(childRoot), setRoot];
};
function filterSingleRoot(children) {
    let singleRoot;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (isVNode(child)) {
            // ignore user comment
            if (child.type !== Comment || child.children === 'v-if') {
                if (singleRoot) {
                    // has more than 1 non-comment child, return now
                    return;
                }
                else {
                    singleRoot = child;
                }
            }
        }
        else {
            return;
        }
    }
    return singleRoot;
}
const getFunctionalFallthrough = (attrs) => {
    let res;
    for (const key in attrs) {
        if (key === 'class' || key === 'style' || Object(dist_shared_esm_bundler["t" /* isOn */])(key)) {
            (res || (res = {}))[key] = attrs[key];
        }
    }
    return res;
};
const filterModelListeners = (attrs, props) => {
    const res = {};
    for (const key in attrs) {
        if (!Object(dist_shared_esm_bundler["r" /* isModelListener */])(key) || !(key.slice(9) in props)) {
            res[key] = attrs[key];
        }
    }
    return res;
};
const isElementRoot = (vnode) => {
    return (vnode.shapeFlag & 6 /* COMPONENT */ ||
        vnode.shapeFlag & 1 /* ELEMENT */ ||
        vnode.type === Comment // potential v-if branch switch
    );
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
    const { props: prevProps, children: prevChildren, component } = prevVNode;
    const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
    const emits = component.emitsOptions;
    // Parent component's render function was hot-updated. Since this may have
    // caused the child component's slots content to have changed, we need to
    // force the child to update as well.
    if (false) {}
    // force child update for runtime directive or transition on component vnode.
    if (nextVNode.dirs || nextVNode.transition) {
        return true;
    }
    if (optimized && patchFlag >= 0) {
        if (patchFlag & 1024 /* DYNAMIC_SLOTS */) {
            // slot content that references values that might have changed,
            // e.g. in a v-for
            return true;
        }
        if (patchFlag & 16 /* FULL_PROPS */) {
            if (!prevProps) {
                return !!nextProps;
            }
            // presence of this flag indicates props are always non-null
            return hasPropsChanged(prevProps, nextProps, emits);
        }
        else if (patchFlag & 8 /* PROPS */) {
            const dynamicProps = nextVNode.dynamicProps;
            for (let i = 0; i < dynamicProps.length; i++) {
                const key = dynamicProps[i];
                if (nextProps[key] !== prevProps[key] &&
                    !isEmitListener(emits, key)) {
                    return true;
                }
            }
        }
    }
    else {
        // this path is only taken by manually written render functions
        // so presence of any children leads to a forced update
        if (prevChildren || nextChildren) {
            if (!nextChildren || !nextChildren.$stable) {
                return true;
            }
        }
        if (prevProps === nextProps) {
            return false;
        }
        if (!prevProps) {
            return !!nextProps;
        }
        if (!nextProps) {
            return true;
        }
        return hasPropsChanged(prevProps, nextProps, emits);
    }
    return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
    const nextKeys = Object.keys(nextProps);
    if (nextKeys.length !== Object.keys(prevProps).length) {
        return true;
    }
    for (let i = 0; i < nextKeys.length; i++) {
        const key = nextKeys[i];
        if (nextProps[key] !== prevProps[key] &&
            !isEmitListener(emitsOptions, key)) {
            return true;
        }
    }
    return false;
}
function updateHOCHostEl({ vnode, parent }, el // HostNode
) {
    while (parent && parent.subTree === vnode) {
        (vnode = parent.vnode).el = el;
        parent = parent.parent;
    }
}

const isSuspense = (type) => type.__isSuspense;
// Suspense exposes a component-like API, and is treated like a component
// in the compiler, but internally it's a special built-in type that hooks
// directly into the renderer.
const SuspenseImpl = {
    // In order to make Suspense tree-shakable, we need to avoid importing it
    // directly in the renderer. The renderer checks for the __isSuspense flag
    // on a vnode's type and calls the `process` method, passing in renderer
    // internals.
    __isSuspense: true,
    process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, 
    // platform-specific impl passed from renderer
    rendererInternals) {
        if (n1 == null) {
            mountSuspense(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, rendererInternals);
        }
        else {
            patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, rendererInternals);
        }
    },
    hydrate: hydrateSuspense,
    create: createSuspenseBoundary
};
// Force-casted public typing for h and TSX props inference
const Suspense = ( SuspenseImpl
    );
function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, isSVG, optimized, rendererInternals) {
    const { p: patch, o: { createElement } } = rendererInternals;
    const hiddenContainer = createElement('div');
    const suspense = (vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, isSVG, optimized, rendererInternals));
    // start mounting the content subtree in an off-dom container
    patch(null, (suspense.pendingBranch = vnode.ssContent), hiddenContainer, null, parentComponent, suspense, isSVG);
    // now check if we have encountered any async deps
    if (suspense.deps > 0) {
        // has async
        // mount the fallback tree
        patch(null, vnode.ssFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
        isSVG);
        setActiveBranch(suspense, vnode.ssFallback);
    }
    else {
        // Suspense has no async deps. Just resolve.
        suspense.resolve();
    }
}
function patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, { p: patch, um: unmount, o: { createElement } }) {
    const suspense = (n2.suspense = n1.suspense);
    suspense.vnode = n2;
    n2.el = n1.el;
    const newBranch = n2.ssContent;
    const newFallback = n2.ssFallback;
    const { activeBranch, pendingBranch, isInFallback, isHydrating } = suspense;
    if (pendingBranch) {
        suspense.pendingBranch = newBranch;
        if (isSameVNodeType(newBranch, pendingBranch)) {
            // same root type but content may have changed.
            patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG);
            if (suspense.deps <= 0) {
                suspense.resolve();
            }
            else if (isInFallback) {
                patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                isSVG);
                setActiveBranch(suspense, newFallback);
            }
        }
        else {
            // toggled before pending tree is resolved
            suspense.pendingId++;
            if (isHydrating) {
                // if toggled before hydration is finished, the current DOM tree is
                // no longer valid. set it as the active branch so it will be unmounted
                // when resolved
                suspense.isHydrating = false;
                suspense.activeBranch = pendingBranch;
            }
            else {
                unmount(pendingBranch, parentComponent, suspense);
            }
            // increment pending ID. this is used to invalidate async callbacks
            // reset suspense state
            suspense.deps = 0;
            // discard effects from pending branch
            suspense.effects.length = 0;
            // discard previous container
            suspense.hiddenContainer = createElement('div');
            if (isInFallback) {
                // already in fallback state
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG);
                if (suspense.deps <= 0) {
                    suspense.resolve();
                }
                else {
                    patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                    isSVG);
                    setActiveBranch(suspense, newFallback);
                }
            }
            else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
                // toggled "back" to current active branch
                patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG);
                // force resolve
                suspense.resolve(true);
            }
            else {
                // switched to a 3rd branch
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG);
                if (suspense.deps <= 0) {
                    suspense.resolve();
                }
            }
        }
    }
    else {
        if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
            // root did not change, just normal patch
            patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG);
            setActiveBranch(suspense, newBranch);
        }
        else {
            // root node toggled
            // invoke @pending event
            const onPending = n2.props && n2.props.onPending;
            if (Object(dist_shared_esm_bundler["o" /* isFunction */])(onPending)) {
                onPending();
            }
            // mount pending branch in off-dom container
            suspense.pendingBranch = newBranch;
            suspense.pendingId++;
            patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG);
            if (suspense.deps <= 0) {
                // incoming branch has no async deps, resolve now.
                suspense.resolve();
            }
            else {
                const { timeout, pendingId } = suspense;
                if (timeout > 0) {
                    setTimeout(() => {
                        if (suspense.pendingId === pendingId) {
                            suspense.fallback(newFallback);
                        }
                    }, timeout);
                }
                else if (timeout === 0) {
                    suspense.fallback(newFallback);
                }
            }
        }
    }
}
let hasWarned = false;
function createSuspenseBoundary(vnode, parent, parentComponent, container, hiddenContainer, anchor, isSVG, optimized, rendererInternals, isHydrating = false) {
    /* istanbul ignore if */
    if (false) {}
    const { p: patch, m: move, um: unmount, n: next, o: { parentNode, remove } } = rendererInternals;
    const timeout = Object(dist_shared_esm_bundler["D" /* toNumber */])(vnode.props && vnode.props.timeout);
    const suspense = {
        vnode,
        parent,
        parentComponent,
        isSVG,
        container,
        hiddenContainer,
        anchor,
        deps: 0,
        pendingId: 0,
        timeout: typeof timeout === 'number' ? timeout : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: true,
        isHydrating,
        isUnmounted: false,
        effects: [],
        resolve(resume = false) {
            if ((false)) {}
            const { vnode, activeBranch, pendingBranch, pendingId, effects, parentComponent, container } = suspense;
            if (suspense.isHydrating) {
                suspense.isHydrating = false;
            }
            else if (!resume) {
                const delayEnter = activeBranch &&
                    pendingBranch.transition &&
                    pendingBranch.transition.mode === 'out-in';
                if (delayEnter) {
                    activeBranch.transition.afterLeave = () => {
                        if (pendingId === suspense.pendingId) {
                            move(pendingBranch, container, anchor, 0 /* ENTER */);
                        }
                    };
                }
                // this is initial anchor on mount
                let { anchor } = suspense;
                // unmount current active tree
                if (activeBranch) {
                    // if the fallback tree was mounted, it may have been moved
                    // as part of a parent suspense. get the latest anchor for insertion
                    anchor = next(activeBranch);
                    unmount(activeBranch, parentComponent, suspense, true);
                }
                if (!delayEnter) {
                    // move content from off-dom container to actual container
                    move(pendingBranch, container, anchor, 0 /* ENTER */);
                }
            }
            setActiveBranch(suspense, pendingBranch);
            suspense.pendingBranch = null;
            suspense.isInFallback = false;
            // flush buffered effects
            // check if there is a pending parent suspense
            let parent = suspense.parent;
            let hasUnresolvedAncestor = false;
            while (parent) {
                if (parent.pendingBranch) {
                    // found a pending parent suspense, merge buffered post jobs
                    // into that parent
                    parent.effects.push(...effects);
                    hasUnresolvedAncestor = true;
                    break;
                }
                parent = parent.parent;
            }
            // no pending parent suspense, flush all jobs
            if (!hasUnresolvedAncestor) {
                queuePostFlushCb(effects);
            }
            suspense.effects = [];
            // invoke @resolve event
            const onResolve = vnode.props && vnode.props.onResolve;
            if (Object(dist_shared_esm_bundler["o" /* isFunction */])(onResolve)) {
                onResolve();
            }
        },
        fallback(fallbackVNode) {
            if (!suspense.pendingBranch) {
                return;
            }
            const { vnode, activeBranch, parentComponent, container, isSVG } = suspense;
            // invoke @fallback event
            const onFallback = vnode.props && vnode.props.onFallback;
            if (Object(dist_shared_esm_bundler["o" /* isFunction */])(onFallback)) {
                onFallback();
            }
            const anchor = next(activeBranch);
            const mountFallback = () => {
                if (!suspense.isInFallback) {
                    return;
                }
                // mount the fallback tree
                patch(null, fallbackVNode, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                isSVG);
                setActiveBranch(suspense, fallbackVNode);
            };
            const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === 'out-in';
            if (delayEnter) {
                activeBranch.transition.afterLeave = mountFallback;
            }
            // unmount current active branch
            unmount(activeBranch, parentComponent, null, // no suspense so unmount hooks fire now
            true // shouldRemove
            );
            suspense.isInFallback = true;
            if (!delayEnter) {
                mountFallback();
            }
        },
        move(container, anchor, type) {
            suspense.activeBranch &&
                move(suspense.activeBranch, container, anchor, type);
            suspense.container = container;
        },
        next() {
            return suspense.activeBranch && next(suspense.activeBranch);
        },
        registerDep(instance, setupRenderEffect) {
            const isInPendingSuspense = !!suspense.pendingBranch;
            if (isInPendingSuspense) {
                suspense.deps++;
            }
            const hydratedEl = instance.vnode.el;
            instance
                .asyncDep.catch(err => {
                handleError(err, instance, 0 /* SETUP_FUNCTION */);
            })
                .then(asyncSetupResult => {
                // retry when the setup() promise resolves.
                // component may have been unmounted before resolve.
                if (instance.isUnmounted ||
                    suspense.isUnmounted ||
                    suspense.pendingId !== instance.suspenseId) {
                    return;
                }
                // retry from this component
                instance.asyncResolved = true;
                const { vnode } = instance;
                if ((false)) {}
                handleSetupResult(instance, asyncSetupResult);
                if (hydratedEl) {
                    // vnode may have been replaced if an update happened before the
                    // async dep is resolved.
                    vnode.el = hydratedEl;
                }
                const placeholder = !hydratedEl && instance.subTree.el;
                setupRenderEffect(instance, vnode, 
                // component may have been moved before resolve.
                // if this is not a hydration, instance.subTree will be the comment
                // placeholder.
                parentNode(hydratedEl || instance.subTree.el), 
                // anchor will not be used if this is hydration, so only need to
                // consider the comment placeholder case.
                hydratedEl ? null : next(instance.subTree), suspense, isSVG, optimized);
                if (placeholder) {
                    remove(placeholder);
                }
                updateHOCHostEl(instance, vnode.el);
                if ((false)) {}
                // only decrease deps count if suspense is not already resolved
                if (isInPendingSuspense && --suspense.deps === 0) {
                    suspense.resolve();
                }
            });
        },
        unmount(parentSuspense, doRemove) {
            suspense.isUnmounted = true;
            if (suspense.activeBranch) {
                unmount(suspense.activeBranch, parentComponent, parentSuspense, doRemove);
            }
            if (suspense.pendingBranch) {
                unmount(suspense.pendingBranch, parentComponent, parentSuspense, doRemove);
            }
        }
    };
    return suspense;
}
function hydrateSuspense(node, vnode, parentComponent, parentSuspense, isSVG, optimized, rendererInternals, hydrateNode) {
    /* eslint-disable no-restricted-globals */
    const suspense = (vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, node.parentNode, document.createElement('div'), null, isSVG, optimized, rendererInternals, true /* hydrating */));
    // there are two possible scenarios for server-rendered suspense:
    // - success: ssr content should be fully resolved
    // - failure: ssr content should be the fallback branch.
    // however, on the client we don't really know if it has failed or not
    // attempt to hydrate the DOM assuming it has succeeded, but we still
    // need to construct a suspense boundary first
    const result = hydrateNode(node, (suspense.pendingBranch = vnode.ssContent), parentComponent, suspense, optimized);
    if (suspense.deps === 0) {
        suspense.resolve();
    }
    return result;
    /* eslint-enable no-restricted-globals */
}
function normalizeSuspenseChildren(vnode) {
    const { shapeFlag, children } = vnode;
    let content;
    let fallback;
    if (shapeFlag & 32 /* SLOTS_CHILDREN */) {
        content = normalizeSuspenseSlot(children.default);
        fallback = normalizeSuspenseSlot(children.fallback);
    }
    else {
        content = normalizeSuspenseSlot(children);
        fallback = normalizeVNode(null);
    }
    return {
        content,
        fallback
    };
}
function normalizeSuspenseSlot(s) {
    if (Object(dist_shared_esm_bundler["o" /* isFunction */])(s)) {
        s = s();
    }
    if (Object(dist_shared_esm_bundler["n" /* isArray */])(s)) {
        const singleChild = filterSingleRoot(s);
        if (false) {}
        s = singleChild;
    }
    return normalizeVNode(s);
}
function queueEffectWithSuspense(fn, suspense) {
    if (suspense && suspense.pendingBranch) {
        if (Object(dist_shared_esm_bundler["n" /* isArray */])(fn)) {
            suspense.effects.push(...fn);
        }
        else {
            suspense.effects.push(fn);
        }
    }
    else {
        queuePostFlushCb(fn);
    }
}
function setActiveBranch(suspense, branch) {
    suspense.activeBranch = branch;
    const { vnode, parentComponent } = suspense;
    const el = (vnode.el = branch.el);
    // in case suspense is the root node of a component,
    // recursively update the HOC el
    if (parentComponent && parentComponent.subTree === vnode) {
        parentComponent.vnode.el = el;
        updateHOCHostEl(parentComponent, el);
    }
}

let isRenderingCompiledSlot = 0;
const setCompiledSlotRendering = (n) => (isRenderingCompiledSlot += n);
/**
 * Compiler runtime helper for rendering `<slot/>`
 * @private
 */
function renderSlot(slots, name, props = {}, 
// this is not a user-facing function, so the fallback is always generated by
// the compiler and guaranteed to be a function returning an array
fallback) {
    let slot = slots[name];
    if (false) {}
    // a compiled slot disables block tracking by default to avoid manual
    // invocation interfering with template-based block tracking, but in
    // `renderSlot` we can be sure that it's template-based so we can force
    // enable it.
    isRenderingCompiledSlot++;
    openBlock();
    const validSlotContent = slot && ensureValidVNode(slot(props));
    const rendered = createBlock(Fragment, { key: props.key || `_${name}` }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 /* STABLE */
        ? 64 /* STABLE_FRAGMENT */
        : -2 /* BAIL */);
    isRenderingCompiledSlot--;
    return rendered;
}
function ensureValidVNode(vnodes) {
    return vnodes.some(child => {
        if (!isVNode(child))
            return true;
        if (child.type === Comment)
            return false;
        if (child.type === Fragment &&
            !ensureValidVNode(child.children))
            return false;
        return true;
    })
        ? vnodes
        : null;
}

/**
 * Wrap a slot function to memoize current rendering instance
 * @private
 */
function withCtx(fn, ctx = currentRenderingInstance) {
    if (!ctx)
        return fn;
    const renderFnWithContext = (...args) => {
        // If a user calls a compiled slot inside a template expression (#1745), it
        // can mess up block tracking, so by default we need to push a null block to
        // avoid that. This isn't necessary if rendering a compiled `<slot>`.
        if (!isRenderingCompiledSlot) {
            openBlock(true /* null block that disables tracking */);
        }
        const owner = currentRenderingInstance;
        setCurrentRenderingInstance(ctx);
        const res = fn(...args);
        setCurrentRenderingInstance(owner);
        if (!isRenderingCompiledSlot) {
            closeBlock();
        }
        return res;
    };
    renderFnWithContext._c = true;
    return renderFnWithContext;
}

// SFC scoped style ID management.
let currentScopeId = null;
const scopeIdStack = [];
/**
 * @private
 */
function pushScopeId(id) {
    scopeIdStack.push((currentScopeId = id));
}
/**
 * @private
 */
function popScopeId() {
    scopeIdStack.pop();
    currentScopeId = scopeIdStack[scopeIdStack.length - 1] || null;
}
/**
 * @private
 */
function withScopeId(id) {
    return ((fn) => withCtx(function () {
        pushScopeId(id);
        const res = fn.apply(this, arguments);
        popScopeId();
        return res;
    }));
}

function initProps(instance, rawProps, isStateful, // result of bitwise flag comparison
isSSR = false) {
    const props = {};
    const attrs = {};
    Object(dist_shared_esm_bundler["g" /* def */])(attrs, InternalObjectKey, 1);
    setFullProps(instance, rawProps, props, attrs);
    // validation
    if ((false)) {}
    if (isStateful) {
        // stateful
        instance.props = isSSR ? props : shallowReactive(props);
    }
    else {
        if (!instance.type.props) {
            // functional w/ optional props, props === attrs
            instance.props = attrs;
        }
        else {
            // functional w/ declared props
            instance.props = props;
        }
    }
    instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
    const { props, attrs, vnode: { patchFlag } } = instance;
    const rawCurrentProps = toRaw(props);
    const [options] = instance.propsOptions;
    if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
     true &&
        (optimized || patchFlag > 0) &&
        !(patchFlag & 16 /* FULL_PROPS */)) {
        if (patchFlag & 8 /* PROPS */) {
            // Compiler-generated props & no keys change, just set the updated
            // the props.
            const propsToUpdate = instance.vnode.dynamicProps;
            for (let i = 0; i < propsToUpdate.length; i++) {
                const key = propsToUpdate[i];
                // PROPS flag guarantees rawProps to be non-null
                const value = rawProps[key];
                if (options) {
                    // attr / props separation was done on init and will be consistent
                    // in this code path, so just check if attrs have it.
                    if (Object(dist_shared_esm_bundler["k" /* hasOwn */])(attrs, key)) {
                        attrs[key] = value;
                    }
                    else {
                        const camelizedKey = Object(dist_shared_esm_bundler["e" /* camelize */])(key);
                        props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance);
                    }
                }
                else {
                    attrs[key] = value;
                }
            }
        }
    }
    else {
        // full props update.
        setFullProps(instance, rawProps, props, attrs);
        // in case of dynamic props, check if we need to delete keys from
        // the props object
        let kebabKey;
        for (const key in rawCurrentProps) {
            if (!rawProps ||
                // for camelCase
                (!Object(dist_shared_esm_bundler["k" /* hasOwn */])(rawProps, key) &&
                    // it's possible the original props was passed in as kebab-case
                    // and converted to camelCase (#955)
                    ((kebabKey = Object(dist_shared_esm_bundler["l" /* hyphenate */])(key)) === key || !Object(dist_shared_esm_bundler["k" /* hasOwn */])(rawProps, kebabKey)))) {
                if (options) {
                    if (rawPrevProps &&
                        // for camelCase
                        (rawPrevProps[key] !== undefined ||
                            // for kebab-case
                            rawPrevProps[kebabKey] !== undefined)) {
                        props[key] = resolvePropValue(options, rawProps || dist_shared_esm_bundler["b" /* EMPTY_OBJ */], key, undefined, instance);
                    }
                }
                else {
                    delete props[key];
                }
            }
        }
        // in the case of functional component w/o props declaration, props and
        // attrs point to the same object so it should already have been updated.
        if (attrs !== rawCurrentProps) {
            for (const key in attrs) {
                if (!rawProps || !Object(dist_shared_esm_bundler["k" /* hasOwn */])(rawProps, key)) {
                    delete attrs[key];
                }
            }
        }
    }
    // trigger updates for $attrs in case it's used in component slots
    trigger(instance, "set" /* SET */, '$attrs');
    if (false) {}
}
function setFullProps(instance, rawProps, props, attrs) {
    const [options, needCastKeys] = instance.propsOptions;
    if (rawProps) {
        for (const key in rawProps) {
            const value = rawProps[key];
            // key, ref are reserved and never passed down
            if (Object(dist_shared_esm_bundler["v" /* isReservedProp */])(key)) {
                continue;
            }
            // prop option names are camelized during normalization, so to support
            // kebab -> camel conversion here we need to camelize the key.
            let camelKey;
            if (options && Object(dist_shared_esm_bundler["k" /* hasOwn */])(options, (camelKey = Object(dist_shared_esm_bundler["e" /* camelize */])(key)))) {
                props[camelKey] = value;
            }
            else if (!isEmitListener(instance.emitsOptions, key)) {
                // Any non-declared (either as a prop or an emitted event) props are put
                // into a separate `attrs` object for spreading. Make sure to preserve
                // original key casing
                attrs[key] = value;
            }
        }
    }
    if (needCastKeys) {
        const rawCurrentProps = toRaw(props);
        for (let i = 0; i < needCastKeys.length; i++) {
            const key = needCastKeys[i];
            props[key] = resolvePropValue(options, rawCurrentProps, key, rawCurrentProps[key], instance);
        }
    }
}
function resolvePropValue(options, props, key, value, instance) {
    const opt = options[key];
    if (opt != null) {
        const hasDefault = Object(dist_shared_esm_bundler["k" /* hasOwn */])(opt, 'default');
        // default values
        if (hasDefault && value === undefined) {
            const defaultValue = opt.default;
            if (opt.type !== Function && Object(dist_shared_esm_bundler["o" /* isFunction */])(defaultValue)) {
                setCurrentInstance(instance);
                value = defaultValue(props);
                setCurrentInstance(null);
            }
            else {
                value = defaultValue;
            }
        }
        // boolean casting
        if (opt[0 /* shouldCast */]) {
            if (!Object(dist_shared_esm_bundler["k" /* hasOwn */])(props, key) && !hasDefault) {
                value = false;
            }
            else if (opt[1 /* shouldCastTrue */] &&
                (value === '' || value === Object(dist_shared_esm_bundler["l" /* hyphenate */])(key))) {
                value = true;
            }
        }
    }
    return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
    if (!appContext.deopt && comp.__props) {
        return comp.__props;
    }
    const raw = comp.props;
    const normalized = {};
    const needCastKeys = [];
    // apply mixin/extends props
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !Object(dist_shared_esm_bundler["o" /* isFunction */])(comp)) {
        const extendProps = (raw) => {
            hasExtends = true;
            const [props, keys] = normalizePropsOptions(raw, appContext, true);
            Object(dist_shared_esm_bundler["h" /* extend */])(normalized, props);
            if (keys)
                needCastKeys.push(...keys);
        };
        if (!asMixin && appContext.mixins.length) {
            appContext.mixins.forEach(extendProps);
        }
        if (comp.extends) {
            extendProps(comp.extends);
        }
        if (comp.mixins) {
            comp.mixins.forEach(extendProps);
        }
    }
    if (!raw && !hasExtends) {
        return (comp.__props = dist_shared_esm_bundler["a" /* EMPTY_ARR */]);
    }
    if (Object(dist_shared_esm_bundler["n" /* isArray */])(raw)) {
        for (let i = 0; i < raw.length; i++) {
            if (false) {}
            const normalizedKey = Object(dist_shared_esm_bundler["e" /* camelize */])(raw[i]);
            if (validatePropName(normalizedKey)) {
                normalized[normalizedKey] = dist_shared_esm_bundler["b" /* EMPTY_OBJ */];
            }
        }
    }
    else if (raw) {
        if (false) {}
        for (const key in raw) {
            const normalizedKey = Object(dist_shared_esm_bundler["e" /* camelize */])(key);
            if (validatePropName(normalizedKey)) {
                const opt = raw[key];
                const prop = (normalized[normalizedKey] =
                    Object(dist_shared_esm_bundler["n" /* isArray */])(opt) || Object(dist_shared_esm_bundler["o" /* isFunction */])(opt) ? { type: opt } : opt);
                if (prop) {
                    const booleanIndex = getTypeIndex(Boolean, prop.type);
                    const stringIndex = getTypeIndex(String, prop.type);
                    prop[0 /* shouldCast */] = booleanIndex > -1;
                    prop[1 /* shouldCastTrue */] =
                        stringIndex < 0 || booleanIndex < stringIndex;
                    // if the prop needs boolean casting or default value
                    if (booleanIndex > -1 || Object(dist_shared_esm_bundler["k" /* hasOwn */])(prop, 'default')) {
                        needCastKeys.push(normalizedKey);
                    }
                }
            }
        }
    }
    return (comp.__props = [normalized, needCastKeys]);
}
function validatePropName(key) {
    if (key[0] !== '$') {
        return true;
    }
    else if ((false)) {}
    return false;
}
// use function string name to check type constructors
// so that it works across vms / iframes.
function getType(ctor) {
    const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : '';
}
function isSameType(a, b) {
    return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
    if (Object(dist_shared_esm_bundler["n" /* isArray */])(expectedTypes)) {
        for (let i = 0, len = expectedTypes.length; i < len; i++) {
            if (isSameType(expectedTypes[i], type)) {
                return i;
            }
        }
    }
    else if (Object(dist_shared_esm_bundler["o" /* isFunction */])(expectedTypes)) {
        return isSameType(expectedTypes, type) ? 0 : -1;
    }
    return -1;
}
/**
 * dev only
 */
function validateProps(props, instance) {
    const rawValues = toRaw(props);
    const options = instance.propsOptions[0];
    for (const key in options) {
        let opt = options[key];
        if (opt == null)
            continue;
        validateProp(key, rawValues[key], opt, !Object(dist_shared_esm_bundler["k" /* hasOwn */])(rawValues, key));
    }
}
/**
 * dev only
 */
function validateProp(name, value, prop, isAbsent) {
    const { type, required, validator } = prop;
    // required!
    if (required && isAbsent) {
        warn('Missing required prop: "' + name + '"');
        return;
    }
    // missing but optional
    if (value == null && !prop.required) {
        return;
    }
    // type check
    if (type != null && type !== true) {
        let isValid = false;
        const types = Object(dist_shared_esm_bundler["n" /* isArray */])(type) ? type : [type];
        const expectedTypes = [];
        // value is valid as long as one of the specified types match
        for (let i = 0; i < types.length && !isValid; i++) {
            const { valid, expectedType } = assertType(value, types[i]);
            expectedTypes.push(expectedType || '');
            isValid = valid;
        }
        if (!isValid) {
            warn(getInvalidTypeMessage(name, value, expectedTypes));
            return;
        }
    }
    // custom validator
    if (validator && !validator(value)) {
        warn('Invalid prop: custom validator check failed for prop "' + name + '".');
    }
}
const isSimpleType = /*#__PURE__*/ Object(dist_shared_esm_bundler["y" /* makeMap */])('String,Number,Boolean,Function,Symbol');
/**
 * dev only
 */
function assertType(value, type) {
    let valid;
    const expectedType = getType(type);
    if (isSimpleType(expectedType)) {
        const t = typeof value;
        valid = t === expectedType.toLowerCase();
        // for primitive wrapper objects
        if (!valid && t === 'object') {
            valid = value instanceof type;
        }
    }
    else if (expectedType === 'Object') {
        valid = Object(dist_shared_esm_bundler["s" /* isObject */])(value);
    }
    else if (expectedType === 'Array') {
        valid = Object(dist_shared_esm_bundler["n" /* isArray */])(value);
    }
    else {
        valid = value instanceof type;
    }
    return {
        valid,
        expectedType
    };
}
/**
 * dev only
 */
function getInvalidTypeMessage(name, value, expectedTypes) {
    let message = `Invalid prop: type check failed for prop "${name}".` +
        ` Expected ${expectedTypes.map(dist_shared_esm_bundler["f" /* capitalize */]).join(', ')}`;
    const expectedType = expectedTypes[0];
    const receivedType = Object(dist_shared_esm_bundler["E" /* toRawType */])(value);
    const expectedValue = styleValue(value, expectedType);
    const receivedValue = styleValue(value, receivedType);
    // check if we need to specify expected value
    if (expectedTypes.length === 1 &&
        isExplicable(expectedType) &&
        !runtime_core_esm_bundler_isBoolean(expectedType, receivedType)) {
        message += ` with value ${expectedValue}`;
    }
    message += `, got ${receivedType} `;
    // check if we need to specify received value
    if (isExplicable(receivedType)) {
        message += `with value ${receivedValue}.`;
    }
    return message;
}
/**
 * dev only
 */
function styleValue(value, type) {
    if (type === 'String') {
        return `"${value}"`;
    }
    else if (type === 'Number') {
        return `${Number(value)}`;
    }
    else {
        return `${value}`;
    }
}
/**
 * dev only
 */
function isExplicable(type) {
    const explicitTypes = ['string', 'number', 'boolean'];
    return explicitTypes.some(elem => type.toLowerCase() === elem);
}
/**
 * dev only
 */
function runtime_core_esm_bundler_isBoolean(...args) {
    return args.some(elem => elem.toLowerCase() === 'boolean');
}

function injectHook(type, hook, target = currentInstance, prepend = false) {
    if (target) {
        const hooks = target[type] || (target[type] = []);
        // cache the error handling wrapper for injected hooks so the same hook
        // can be properly deduped by the scheduler. "__weh" stands for "with error
        // handling".
        const wrappedHook = hook.__weh ||
            (hook.__weh = (...args) => {
                if (target.isUnmounted) {
                    return;
                }
                // disable tracking inside all lifecycle hooks
                // since they can potentially be called inside effects.
                pauseTracking();
                // Set currentInstance during hook invocation.
                // This assumes the hook does not synchronously trigger other hooks, which
                // can only be false when the user does something really funky.
                setCurrentInstance(target);
                const res = callWithAsyncErrorHandling(hook, target, type, args);
                setCurrentInstance(null);
                resetTracking();
                return res;
            });
        if (prepend) {
            hooks.unshift(wrappedHook);
        }
        else {
            hooks.push(wrappedHook);
        }
        return wrappedHook;
    }
    else if ((false)) {}
}
const createHook = (lifecycle) => (hook, target = currentInstance) => 
// post-create lifecycle registrations are noops during SSR
!isInSSRComponentSetup && injectHook(lifecycle, hook, target);
const onBeforeMount = createHook("bm" /* BEFORE_MOUNT */);
const onMounted = createHook("m" /* MOUNTED */);
const onBeforeUpdate = createHook("bu" /* BEFORE_UPDATE */);
const onUpdated = createHook("u" /* UPDATED */);
const onBeforeUnmount = createHook("bum" /* BEFORE_UNMOUNT */);
const onUnmounted = createHook("um" /* UNMOUNTED */);
const onRenderTriggered = createHook("rtg" /* RENDER_TRIGGERED */);
const onRenderTracked = createHook("rtc" /* RENDER_TRACKED */);
const onErrorCaptured = (hook, target = currentInstance) => {
    injectHook("ec" /* ERROR_CAPTURED */, hook, target);
};

// Simple effect.
function watchEffect(effect, options) {
    return doWatch(effect, null, options);
}
// initial value for watchers to trigger on undefined initial values
const INITIAL_WATCHER_VALUE = {};
// implementation
function watch(source, cb, options) {
    if (false) {}
    return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = dist_shared_esm_bundler["b" /* EMPTY_OBJ */], instance = currentInstance) {
    if (false) {}
    const warnInvalidSource = (s) => {
        warn(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, ` +
            `a reactive object, or an array of these types.`);
    };
    let getter;
    let forceTrigger = false;
    if (isRef(source)) {
        getter = () => source.value;
        forceTrigger = !!source._shallow;
    }
    else if (isReactive(source)) {
        getter = () => source;
        deep = true;
    }
    else if (Object(dist_shared_esm_bundler["n" /* isArray */])(source)) {
        getter = () => source.map(s => {
            if (isRef(s)) {
                return s.value;
            }
            else if (isReactive(s)) {
                return traverse(s);
            }
            else if (Object(dist_shared_esm_bundler["o" /* isFunction */])(s)) {
                return callWithErrorHandling(s, instance, 2 /* WATCH_GETTER */);
            }
            else {
                ( false) && false;
            }
        });
    }
    else if (Object(dist_shared_esm_bundler["o" /* isFunction */])(source)) {
        if (cb) {
            // getter with cb
            getter = () => callWithErrorHandling(source, instance, 2 /* WATCH_GETTER */);
        }
        else {
            // no cb -> simple effect
            getter = () => {
                if (instance && instance.isUnmounted) {
                    return;
                }
                if (cleanup) {
                    cleanup();
                }
                return callWithErrorHandling(source, instance, 3 /* WATCH_CALLBACK */, [onInvalidate]);
            };
        }
    }
    else {
        getter = dist_shared_esm_bundler["d" /* NOOP */];
        ( false) && false;
    }
    if (cb && deep) {
        const baseGetter = getter;
        getter = () => traverse(baseGetter());
    }
    let cleanup;
    const onInvalidate = (fn) => {
        cleanup = runner.options.onStop = () => {
            callWithErrorHandling(fn, instance, 4 /* WATCH_CLEANUP */);
        };
    };
    let oldValue = Object(dist_shared_esm_bundler["n" /* isArray */])(source) ? [] : INITIAL_WATCHER_VALUE;
    const job = () => {
        if (!runner.active) {
            return;
        }
        if (cb) {
            // watch(source, cb)
            const newValue = runner();
            if (deep || forceTrigger || Object(dist_shared_esm_bundler["j" /* hasChanged */])(newValue, oldValue)) {
                // cleanup before running cb again
                if (cleanup) {
                    cleanup();
                }
                callWithAsyncErrorHandling(cb, instance, 3 /* WATCH_CALLBACK */, [
                    newValue,
                    // pass undefined as the old value when it's changed for the first time
                    oldValue === INITIAL_WATCHER_VALUE ? undefined : oldValue,
                    onInvalidate
                ]);
                oldValue = newValue;
            }
        }
        else {
            // watchEffect
            runner();
        }
    };
    // important: mark the job as a watcher callback so that scheduler knows
    // it is allowed to self-trigger (#1727)
    job.allowRecurse = !!cb;
    let scheduler;
    if (flush === 'sync') {
        scheduler = job;
    }
    else if (flush === 'post') {
        scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
    }
    else {
        // default: 'pre'
        scheduler = () => {
            if (!instance || instance.isMounted) {
                queuePreFlushCb(job);
            }
            else {
                // with 'pre' option, the first call must happen before
                // the component is mounted so it is called synchronously.
                job();
            }
        };
    }
    const runner = reactivity_esm_bundler_effect(getter, {
        lazy: true,
        onTrack,
        onTrigger,
        scheduler
    });
    recordInstanceBoundEffect(runner, instance);
    // initial run
    if (cb) {
        if (immediate) {
            job();
        }
        else {
            oldValue = runner();
        }
    }
    else if (flush === 'post') {
        queuePostRenderEffect(runner, instance && instance.suspense);
    }
    else {
        runner();
    }
    return () => {
        stop(runner);
        if (instance) {
            Object(dist_shared_esm_bundler["B" /* remove */])(instance.effects, runner);
        }
    };
}
// this.$watch
function instanceWatch(source, cb, options) {
    const publicThis = this.proxy;
    const getter = Object(dist_shared_esm_bundler["x" /* isString */])(source)
        ? () => publicThis[source]
        : source.bind(publicThis);
    return doWatch(getter, cb.bind(publicThis), options, this);
}
function traverse(value, seen = new Set()) {
    if (!Object(dist_shared_esm_bundler["s" /* isObject */])(value) || seen.has(value)) {
        return value;
    }
    seen.add(value);
    if (isRef(value)) {
        traverse(value.value, seen);
    }
    else if (Object(dist_shared_esm_bundler["n" /* isArray */])(value)) {
        for (let i = 0; i < value.length; i++) {
            traverse(value[i], seen);
        }
    }
    else if (Object(dist_shared_esm_bundler["w" /* isSet */])(value) || Object(dist_shared_esm_bundler["q" /* isMap */])(value)) {
        value.forEach((v) => {
            traverse(v, seen);
        });
    }
    else {
        for (const key in value) {
            traverse(value[key], seen);
        }
    }
    return value;
}

function useTransitionState() {
    const state = {
        isMounted: false,
        isLeaving: false,
        isUnmounting: false,
        leavingVNodes: new Map()
    };
    onMounted(() => {
        state.isMounted = true;
    });
    onBeforeUnmount(() => {
        state.isUnmounting = true;
    });
    return state;
}
const TransitionHookValidator = [Function, Array];
const BaseTransitionImpl = {
    name: `BaseTransition`,
    props: {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        // enter
        onBeforeEnter: TransitionHookValidator,
        onEnter: TransitionHookValidator,
        onAfterEnter: TransitionHookValidator,
        onEnterCancelled: TransitionHookValidator,
        // leave
        onBeforeLeave: TransitionHookValidator,
        onLeave: TransitionHookValidator,
        onAfterLeave: TransitionHookValidator,
        onLeaveCancelled: TransitionHookValidator,
        // appear
        onBeforeAppear: TransitionHookValidator,
        onAppear: TransitionHookValidator,
        onAfterAppear: TransitionHookValidator,
        onAppearCancelled: TransitionHookValidator
    },
    setup(props, { slots }) {
        const instance = getCurrentInstance();
        const state = useTransitionState();
        let prevTransitionKey;
        return () => {
            const children = slots.default && getTransitionRawChildren(slots.default(), true);
            if (!children || !children.length) {
                return;
            }
            // warn multiple elements
            if (false) {}
            // there's no need to track reactivity for these props so use the raw
            // props for a bit better perf
            const rawProps = toRaw(props);
            const { mode } = rawProps;
            // check mode
            if (false) {}
            // at this point children has a guaranteed length of 1.
            const child = children[0];
            if (state.isLeaving) {
                return emptyPlaceholder(child);
            }
            // in the case of <transition><keep-alive/></transition>, we need to
            // compare the type of the kept-alive children.
            const innerChild = getKeepAliveChild(child);
            if (!innerChild) {
                return emptyPlaceholder(child);
            }
            const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
            setTransitionHooks(innerChild, enterHooks);
            const oldChild = instance.subTree;
            const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
            let transitionKeyChanged = false;
            const { getTransitionKey } = innerChild.type;
            if (getTransitionKey) {
                const key = getTransitionKey();
                if (prevTransitionKey === undefined) {
                    prevTransitionKey = key;
                }
                else if (key !== prevTransitionKey) {
                    prevTransitionKey = key;
                    transitionKeyChanged = true;
                }
            }
            // handle mode
            if (oldInnerChild &&
                oldInnerChild.type !== Comment &&
                (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
                const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
                // update old tree's hooks in case of dynamic transition
                setTransitionHooks(oldInnerChild, leavingHooks);
                // switching between different views
                if (mode === 'out-in') {
                    state.isLeaving = true;
                    // return placeholder node and queue update when leave finishes
                    leavingHooks.afterLeave = () => {
                        state.isLeaving = false;
                        instance.update();
                    };
                    return emptyPlaceholder(child);
                }
                else if (mode === 'in-out') {
                    leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
                        const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
                        leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
                        // early removal callback
                        el._leaveCb = () => {
                            earlyRemove();
                            el._leaveCb = undefined;
                            delete enterHooks.delayedLeave;
                        };
                        enterHooks.delayedLeave = delayedLeave;
                    };
                }
            }
            return child;
        };
    }
};
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
    const { leavingVNodes } = state;
    let leavingVNodesCache = leavingVNodes.get(vnode.type);
    if (!leavingVNodesCache) {
        leavingVNodesCache = Object.create(null);
        leavingVNodes.set(vnode.type, leavingVNodesCache);
    }
    return leavingVNodesCache;
}
// The transition hooks are attached to the vnode as vnode.transition
// and will be called at appropriate timing in the renderer.
function resolveTransitionHooks(vnode, props, state, instance) {
    const { appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props;
    const key = String(vnode.key);
    const leavingVNodesCache = getLeavingNodesForType(state, vnode);
    const callHook = (hook, args) => {
        hook &&
            callWithAsyncErrorHandling(hook, instance, 9 /* TRANSITION_HOOK */, args);
    };
    const hooks = {
        mode,
        persisted,
        beforeEnter(el) {
            let hook = onBeforeEnter;
            if (!state.isMounted) {
                if (appear) {
                    hook = onBeforeAppear || onBeforeEnter;
                }
                else {
                    return;
                }
            }
            // for same element (v-show)
            if (el._leaveCb) {
                el._leaveCb(true /* cancelled */);
            }
            // for toggled element with same key (v-if)
            const leavingVNode = leavingVNodesCache[key];
            if (leavingVNode &&
                isSameVNodeType(vnode, leavingVNode) &&
                leavingVNode.el._leaveCb) {
                // force early removal (not cancelled)
                leavingVNode.el._leaveCb();
            }
            callHook(hook, [el]);
        },
        enter(el) {
            let hook = onEnter;
            let afterHook = onAfterEnter;
            let cancelHook = onEnterCancelled;
            if (!state.isMounted) {
                if (appear) {
                    hook = onAppear || onEnter;
                    afterHook = onAfterAppear || onAfterEnter;
                    cancelHook = onAppearCancelled || onEnterCancelled;
                }
                else {
                    return;
                }
            }
            let called = false;
            const done = (el._enterCb = (cancelled) => {
                if (called)
                    return;
                called = true;
                if (cancelled) {
                    callHook(cancelHook, [el]);
                }
                else {
                    callHook(afterHook, [el]);
                }
                if (hooks.delayedLeave) {
                    hooks.delayedLeave();
                }
                el._enterCb = undefined;
            });
            if (hook) {
                hook(el, done);
                if (hook.length <= 1) {
                    done();
                }
            }
            else {
                done();
            }
        },
        leave(el, remove) {
            const key = String(vnode.key);
            if (el._enterCb) {
                el._enterCb(true /* cancelled */);
            }
            if (state.isUnmounting) {
                return remove();
            }
            callHook(onBeforeLeave, [el]);
            let called = false;
            const done = (el._leaveCb = (cancelled) => {
                if (called)
                    return;
                called = true;
                remove();
                if (cancelled) {
                    callHook(onLeaveCancelled, [el]);
                }
                else {
                    callHook(onAfterLeave, [el]);
                }
                el._leaveCb = undefined;
                if (leavingVNodesCache[key] === vnode) {
                    delete leavingVNodesCache[key];
                }
            });
            leavingVNodesCache[key] = vnode;
            if (onLeave) {
                onLeave(el, done);
                if (onLeave.length <= 1) {
                    done();
                }
            }
            else {
                done();
            }
        },
        clone(vnode) {
            return resolveTransitionHooks(vnode, props, state, instance);
        }
    };
    return hooks;
}
// the placeholder really only handles one special case: KeepAlive
// in the case of a KeepAlive in a leave phase we need to return a KeepAlive
// placeholder with empty content to avoid the KeepAlive instance from being
// unmounted.
function emptyPlaceholder(vnode) {
    if (isKeepAlive(vnode)) {
        vnode = cloneVNode(vnode);
        vnode.children = null;
        return vnode;
    }
}
function getKeepAliveChild(vnode) {
    return isKeepAlive(vnode)
        ? vnode.children
            ? vnode.children[0]
            : undefined
        : vnode;
}
function setTransitionHooks(vnode, hooks) {
    if (vnode.shapeFlag & 6 /* COMPONENT */ && vnode.component) {
        setTransitionHooks(vnode.component.subTree, hooks);
    }
    else if ( vnode.shapeFlag & 128 /* SUSPENSE */) {
        vnode.ssContent.transition = hooks.clone(vnode.ssContent);
        vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
    }
    else {
        vnode.transition = hooks;
    }
}
function getTransitionRawChildren(children, keepComment = false) {
    let ret = [];
    let keyedFragmentCount = 0;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        // handle fragment children case, e.g. v-for
        if (child.type === Fragment) {
            if (child.patchFlag & 128 /* KEYED_FRAGMENT */)
                keyedFragmentCount++;
            ret = ret.concat(getTransitionRawChildren(child.children, keepComment));
        }
        // comment placeholders should be skipped, e.g. v-if
        else if (keepComment || child.type !== Comment) {
            ret.push(child);
        }
    }
    // #1126 if a transition children list contains multiple sub fragments, these
    // fragments will be merged into a flat children array. Since each v-for
    // fragment may contain different static bindings inside, we need to de-op
    // these children to force full diffs to ensure correct behavior.
    if (keyedFragmentCount > 1) {
        for (let i = 0; i < ret.length; i++) {
            ret[i].patchFlag = -2 /* BAIL */;
        }
    }
    return ret;
}

const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
const KeepAliveImpl = {
    name: `KeepAlive`,
    // Marker for special handling inside the renderer. We are not using a ===
    // check directly on KeepAlive in the renderer, because importing it directly
    // would prevent it from being tree-shaken.
    __isKeepAlive: true,
    inheritRef: true,
    props: {
        include: [String, RegExp, Array],
        exclude: [String, RegExp, Array],
        max: [String, Number]
    },
    setup(props, { slots }) {
        const cache = new Map();
        const keys = new Set();
        let current = null;
        const instance = getCurrentInstance();
        const parentSuspense = instance.suspense;
        // KeepAlive communicates with the instantiated renderer via the
        // ctx where the renderer passes in its internals,
        // and the KeepAlive instance exposes activate/deactivate implementations.
        // The whole point of this is to avoid importing KeepAlive directly in the
        // renderer to facilitate tree-shaking.
        const sharedContext = instance.ctx;
        const { renderer: { p: patch, m: move, um: _unmount, o: { createElement } } } = sharedContext;
        const storageContainer = createElement('div');
        sharedContext.activate = (vnode, container, anchor, isSVG, optimized) => {
            const instance = vnode.component;
            move(vnode, container, anchor, 0 /* ENTER */, parentSuspense);
            // in case props have changed
            patch(instance.vnode, vnode, container, anchor, instance, parentSuspense, isSVG, optimized);
            queuePostRenderEffect(() => {
                instance.isDeactivated = false;
                if (instance.a) {
                    Object(dist_shared_esm_bundler["m" /* invokeArrayFns */])(instance.a);
                }
                const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
                if (vnodeHook) {
                    invokeVNodeHook(vnodeHook, instance.parent, vnode);
                }
            }, parentSuspense);
        };
        sharedContext.deactivate = (vnode) => {
            const instance = vnode.component;
            move(vnode, storageContainer, null, 1 /* LEAVE */, parentSuspense);
            queuePostRenderEffect(() => {
                if (instance.da) {
                    Object(dist_shared_esm_bundler["m" /* invokeArrayFns */])(instance.da);
                }
                const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
                if (vnodeHook) {
                    invokeVNodeHook(vnodeHook, instance.parent, vnode);
                }
                instance.isDeactivated = true;
            }, parentSuspense);
        };
        function unmount(vnode) {
            // reset the shapeFlag so it can be properly unmounted
            resetShapeFlag(vnode);
            _unmount(vnode, instance, parentSuspense);
        }
        function pruneCache(filter) {
            cache.forEach((vnode, key) => {
                const name = getComponentName(vnode.type);
                if (name && (!filter || !filter(name))) {
                    pruneCacheEntry(key);
                }
            });
        }
        function pruneCacheEntry(key) {
            const cached = cache.get(key);
            if (!current || cached.type !== current.type) {
                unmount(cached);
            }
            else if (current) {
                // current active instance should no longer be kept-alive.
                // we can't unmount it now but it might be later, so reset its flag now.
                resetShapeFlag(current);
            }
            cache.delete(key);
            keys.delete(key);
        }
        // prune cache on include/exclude prop change
        watch(() => [props.include, props.exclude], ([include, exclude]) => {
            include && pruneCache(name => matches(include, name));
            exclude && pruneCache(name => !matches(exclude, name));
        }, 
        // prune post-render after `current` has been updated
        { flush: 'post', deep: true });
        // cache sub tree after render
        let pendingCacheKey = null;
        const cacheSubtree = () => {
            // fix #1621, the pendingCacheKey could be 0
            if (pendingCacheKey != null) {
                cache.set(pendingCacheKey, getInnerChild(instance.subTree));
            }
        };
        onMounted(cacheSubtree);
        onUpdated(cacheSubtree);
        onBeforeUnmount(() => {
            cache.forEach(cached => {
                const { subTree, suspense } = instance;
                const vnode = getInnerChild(subTree);
                if (cached.type === vnode.type) {
                    // current instance will be unmounted as part of keep-alive's unmount
                    resetShapeFlag(vnode);
                    // but invoke its deactivated hook here
                    const da = vnode.component.da;
                    da && queuePostRenderEffect(da, suspense);
                    return;
                }
                unmount(cached);
            });
        });
        return () => {
            pendingCacheKey = null;
            if (!slots.default) {
                return null;
            }
            const children = slots.default();
            const rawVNode = children[0];
            if (children.length > 1) {
                if ((false)) {}
                current = null;
                return children;
            }
            else if (!isVNode(rawVNode) ||
                (!(rawVNode.shapeFlag & 4 /* STATEFUL_COMPONENT */) &&
                    !(rawVNode.shapeFlag & 128 /* SUSPENSE */))) {
                current = null;
                return rawVNode;
            }
            let vnode = getInnerChild(rawVNode);
            const comp = vnode.type;
            const name = getComponentName(comp);
            const { include, exclude, max } = props;
            if ((include && (!name || !matches(include, name))) ||
                (exclude && name && matches(exclude, name))) {
                current = vnode;
                return rawVNode;
            }
            const key = vnode.key == null ? comp : vnode.key;
            const cachedVNode = cache.get(key);
            // clone vnode if it's reused because we are going to mutate it
            if (vnode.el) {
                vnode = cloneVNode(vnode);
                if (rawVNode.shapeFlag & 128 /* SUSPENSE */) {
                    rawVNode.ssContent = vnode;
                }
            }
            // #1513 it's possible for the returned vnode to be cloned due to attr
            // fallthrough or scopeId, so the vnode here may not be the final vnode
            // that is mounted. Instead of caching it directly, we store the pending
            // key and cache `instance.subTree` (the normalized vnode) in
            // beforeMount/beforeUpdate hooks.
            pendingCacheKey = key;
            if (cachedVNode) {
                // copy over mounted state
                vnode.el = cachedVNode.el;
                vnode.component = cachedVNode.component;
                if (vnode.transition) {
                    // recursively update transition hooks on subTree
                    setTransitionHooks(vnode, vnode.transition);
                }
                // avoid vnode being mounted as fresh
                vnode.shapeFlag |= 512 /* COMPONENT_KEPT_ALIVE */;
                // make this key the freshest
                keys.delete(key);
                keys.add(key);
            }
            else {
                keys.add(key);
                // prune oldest entry
                if (max && keys.size > parseInt(max, 10)) {
                    pruneCacheEntry(keys.values().next().value);
                }
            }
            // avoid vnode being unmounted
            vnode.shapeFlag |= 256 /* COMPONENT_SHOULD_KEEP_ALIVE */;
            current = vnode;
            return rawVNode;
        };
    }
};
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
const KeepAlive = KeepAliveImpl;
function matches(pattern, name) {
    if (Object(dist_shared_esm_bundler["n" /* isArray */])(pattern)) {
        return pattern.some((p) => matches(p, name));
    }
    else if (Object(dist_shared_esm_bundler["x" /* isString */])(pattern)) {
        return pattern.split(',').indexOf(name) > -1;
    }
    else if (pattern.test) {
        return pattern.test(name);
    }
    /* istanbul ignore next */
    return false;
}
function onActivated(hook, target) {
    registerKeepAliveHook(hook, "a" /* ACTIVATED */, target);
}
function onDeactivated(hook, target) {
    registerKeepAliveHook(hook, "da" /* DEACTIVATED */, target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
    // cache the deactivate branch check wrapper for injected hooks so the same
    // hook can be properly deduped by the scheduler. "__wdc" stands for "with
    // deactivation check".
    const wrappedHook = hook.__wdc ||
        (hook.__wdc = () => {
            // only fire the hook if the target instance is NOT in a deactivated branch.
            let current = target;
            while (current) {
                if (current.isDeactivated) {
                    return;
                }
                current = current.parent;
            }
            hook();
        });
    injectHook(type, wrappedHook, target);
    // In addition to registering it on the target instance, we walk up the parent
    // chain and register it on all ancestor instances that are keep-alive roots.
    // This avoids the need to walk the entire component tree when invoking these
    // hooks, and more importantly, avoids the need to track child components in
    // arrays.
    if (target) {
        let current = target.parent;
        while (current && current.parent) {
            if (isKeepAlive(current.parent.vnode)) {
                injectToKeepAliveRoot(wrappedHook, type, target, current);
            }
            current = current.parent;
        }
    }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
    // injectHook wraps the original for error handling, so make sure to remove
    // the wrapped version.
    const injected = injectHook(type, hook, keepAliveRoot, true /* prepend */);
    onUnmounted(() => {
        Object(dist_shared_esm_bundler["B" /* remove */])(keepAliveRoot[type], injected);
    }, target);
}
function resetShapeFlag(vnode) {
    let shapeFlag = vnode.shapeFlag;
    if (shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */) {
        shapeFlag -= 256 /* COMPONENT_SHOULD_KEEP_ALIVE */;
    }
    if (shapeFlag & 512 /* COMPONENT_KEPT_ALIVE */) {
        shapeFlag -= 512 /* COMPONENT_KEPT_ALIVE */;
    }
    vnode.shapeFlag = shapeFlag;
}
function getInnerChild(vnode) {
    return vnode.shapeFlag & 128 /* SUSPENSE */ ? vnode.ssContent : vnode;
}

const isInternalKey = (key) => key[0] === '_' || key === '$stable';
const normalizeSlotValue = (value) => Object(dist_shared_esm_bundler["n" /* isArray */])(value)
    ? value.map(normalizeVNode)
    : [normalizeVNode(value)];
const normalizeSlot = (key, rawSlot, ctx) => withCtx((props) => {
    if (false) {}
    return normalizeSlotValue(rawSlot(props));
}, ctx);
const normalizeObjectSlots = (rawSlots, slots) => {
    const ctx = rawSlots._ctx;
    for (const key in rawSlots) {
        if (isInternalKey(key))
            continue;
        const value = rawSlots[key];
        if (Object(dist_shared_esm_bundler["o" /* isFunction */])(value)) {
            slots[key] = normalizeSlot(key, value, ctx);
        }
        else if (value != null) {
            if ((false)) {}
            const normalized = normalizeSlotValue(value);
            slots[key] = () => normalized;
        }
    }
};
const normalizeVNodeSlots = (instance, children) => {
    if (false) {}
    const normalized = normalizeSlotValue(children);
    instance.slots.default = () => normalized;
};
const initSlots = (instance, children) => {
    if (instance.vnode.shapeFlag & 32 /* SLOTS_CHILDREN */) {
        const type = children._;
        if (type) {
            instance.slots = children;
            // make compiler marker non-enumerable
            Object(dist_shared_esm_bundler["g" /* def */])(children, '_', type);
        }
        else {
            normalizeObjectSlots(children, (instance.slots = {}));
        }
    }
    else {
        instance.slots = {};
        if (children) {
            normalizeVNodeSlots(instance, children);
        }
    }
    Object(dist_shared_esm_bundler["g" /* def */])(instance.slots, InternalObjectKey, 1);
};
const updateSlots = (instance, children) => {
    const { vnode, slots } = instance;
    let needDeletionCheck = true;
    let deletionComparisonTarget = dist_shared_esm_bundler["b" /* EMPTY_OBJ */];
    if (vnode.shapeFlag & 32 /* SLOTS_CHILDREN */) {
        const type = children._;
        if (type) {
            // compiled slots.
            if (false) {}
            else if (type === 1 /* STABLE */) {
                // compiled AND stable.
                // no need to update, and skip stale slots removal.
                needDeletionCheck = false;
            }
            else {
                // compiled but dynamic (v-if/v-for on slots) - update slots, but skip
                // normalization.
                Object(dist_shared_esm_bundler["h" /* extend */])(slots, children);
            }
        }
        else {
            needDeletionCheck = !children.$stable;
            normalizeObjectSlots(children, slots);
        }
        deletionComparisonTarget = children;
    }
    else if (children) {
        // non slot object children (direct value) passed to a component
        normalizeVNodeSlots(instance, children);
        deletionComparisonTarget = { default: 1 };
    }
    // delete stale slots
    if (needDeletionCheck) {
        for (const key in slots) {
            if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
                delete slots[key];
            }
        }
    }
};

/**
Runtime helper for applying directives to a vnode. Example usage:

const comp = resolveComponent('comp')
const foo = resolveDirective('foo')
const bar = resolveDirective('bar')

return withDirectives(h(comp), [
  [foo, this.x],
  [bar, this.y]
])
*/
const isBuiltInDirective = /*#__PURE__*/ Object(dist_shared_esm_bundler["y" /* makeMap */])('bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text');
function validateDirectiveName(name) {
    if (isBuiltInDirective(name)) {
        warn('Do not use built-in directive ids as custom directive id: ' + name);
    }
}
/**
 * Adds directives to a VNode.
 */
function withDirectives(vnode, directives) {
    const internalInstance = currentRenderingInstance;
    if (internalInstance === null) {
        ( false) && false;
        return vnode;
    }
    const instance = internalInstance.proxy;
    const bindings = vnode.dirs || (vnode.dirs = []);
    for (let i = 0; i < directives.length; i++) {
        let [dir, value, arg, modifiers = dist_shared_esm_bundler["b" /* EMPTY_OBJ */]] = directives[i];
        if (Object(dist_shared_esm_bundler["o" /* isFunction */])(dir)) {
            dir = {
                mounted: dir,
                updated: dir
            };
        }
        bindings.push({
            dir,
            instance,
            value,
            oldValue: void 0,
            arg,
            modifiers
        });
    }
    return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
    const bindings = vnode.dirs;
    const oldBindings = prevVNode && prevVNode.dirs;
    for (let i = 0; i < bindings.length; i++) {
        const binding = bindings[i];
        if (oldBindings) {
            binding.oldValue = oldBindings[i].value;
        }
        const hook = binding.dir[name];
        if (hook) {
            callWithAsyncErrorHandling(hook, instance, 8 /* DIRECTIVE_HOOK */, [
                vnode.el,
                binding,
                vnode,
                prevVNode
            ]);
        }
    }
}

function createAppContext() {
    return {
        app: null,
        config: {
            isNativeTag: dist_shared_esm_bundler["c" /* NO */],
            performance: false,
            globalProperties: {},
            optionMergeStrategies: {},
            isCustomElement: dist_shared_esm_bundler["c" /* NO */],
            errorHandler: undefined,
            warnHandler: undefined
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null)
    };
}
let runtime_core_esm_bundler_uid = 0;
function createAppAPI(render, hydrate) {
    return function createApp(rootComponent, rootProps = null) {
        if (rootProps != null && !Object(dist_shared_esm_bundler["s" /* isObject */])(rootProps)) {
            ( false) && false;
            rootProps = null;
        }
        const context = createAppContext();
        const installedPlugins = new Set();
        let isMounted = false;
        const app = (context.app = {
            _uid: runtime_core_esm_bundler_uid++,
            _component: rootComponent,
            _props: rootProps,
            _container: null,
            _context: context,
            version,
            get config() {
                return context.config;
            },
            set config(v) {
                if ((false)) {}
            },
            use(plugin, ...options) {
                if (installedPlugins.has(plugin)) {
                    ( false) && false;
                }
                else if (plugin && Object(dist_shared_esm_bundler["o" /* isFunction */])(plugin.install)) {
                    installedPlugins.add(plugin);
                    plugin.install(app, ...options);
                }
                else if (Object(dist_shared_esm_bundler["o" /* isFunction */])(plugin)) {
                    installedPlugins.add(plugin);
                    plugin(app, ...options);
                }
                else if ((false)) {}
                return app;
            },
            mixin(mixin) {
                if (__VUE_OPTIONS_API__) {
                    if (!context.mixins.includes(mixin)) {
                        context.mixins.push(mixin);
                        // global mixin with props/emits de-optimizes props/emits
                        // normalization caching.
                        if (mixin.props || mixin.emits) {
                            context.deopt = true;
                        }
                    }
                    else if ((false)) {}
                }
                else if ((false)) {}
                return app;
            },
            component(name, component) {
                if ((false)) {}
                if (!component) {
                    return context.components[name];
                }
                if (false) {}
                context.components[name] = component;
                return app;
            },
            directive(name, directive) {
                if ((false)) {}
                if (!directive) {
                    return context.directives[name];
                }
                if (false) {}
                context.directives[name] = directive;
                return app;
            },
            mount(rootContainer, isHydrate) {
                if (!isMounted) {
                    const vnode = createVNode(rootComponent, rootProps);
                    // store app context on the root VNode.
                    // this will be set on the root instance on initial mount.
                    vnode.appContext = context;
                    // HMR root reload
                    if ((false)) {}
                    if (isHydrate && hydrate) {
                        hydrate(vnode, rootContainer);
                    }
                    else {
                        render(vnode, rootContainer);
                    }
                    isMounted = true;
                    app._container = rootContainer;
                    rootContainer.__vue_app__ = app;
                    if (( false) || __VUE_PROD_DEVTOOLS__) {
                        devtoolsInitApp(app, version);
                    }
                    return vnode.component.proxy;
                }
                else if ((false)) {}
            },
            unmount() {
                if (isMounted) {
                    render(null, app._container);
                    if (( false) || __VUE_PROD_DEVTOOLS__) {
                        devtoolsUnmountApp(app);
                    }
                }
                else if ((false)) {}
            },
            provide(key, value) {
                if (false) {}
                // TypeScript doesn't allow symbols as index type
                // https://github.com/Microsoft/TypeScript/issues/24587
                context.provides[key] = value;
                return app;
            }
        });
        return app;
    };
}

let hasMismatch = false;
const isSVGContainer = (container) => /svg/.test(container.namespaceURI) && container.tagName !== 'foreignObject';
const isComment = (node) => node.nodeType === 8 /* COMMENT */;
// Note: hydration is DOM-specific
// But we have to place it in core due to tight coupling with core - splitting
// it out creates a ton of unnecessary complexity.
// Hydration also depends on some renderer internal logic which needs to be
// passed in via arguments.
function createHydrationFunctions(rendererInternals) {
    const { mt: mountComponent, p: patch, o: { patchProp, nextSibling, parentNode, remove, insert, createComment } } = rendererInternals;
    const hydrate = (vnode, container) => {
        if (false) {}
        hasMismatch = false;
        hydrateNode(container.firstChild, vnode, null, null);
        flushPostFlushCbs();
        if (hasMismatch && !false) {
            // this error should show up in production
            console.error(`Hydration completed but contains mismatches.`);
        }
    };
    const hydrateNode = (node, vnode, parentComponent, parentSuspense, optimized = false) => {
        const isFragmentStart = isComment(node) && node.data === '[';
        const onMismatch = () => handleMismatch(node, vnode, parentComponent, parentSuspense, isFragmentStart);
        const { type, ref, shapeFlag } = vnode;
        const domType = node.nodeType;
        vnode.el = node;
        let nextNode = null;
        switch (type) {
            case Text:
                if (domType !== 3 /* TEXT */) {
                    nextNode = onMismatch();
                }
                else {
                    if (node.data !== vnode.children) {
                        hasMismatch = true;
                        ( false) &&
                            false;
                        node.data = vnode.children;
                    }
                    nextNode = nextSibling(node);
                }
                break;
            case Comment:
                if (domType !== 8 /* COMMENT */ || isFragmentStart) {
                    nextNode = onMismatch();
                }
                else {
                    nextNode = nextSibling(node);
                }
                break;
            case Static:
                if (domType !== 1 /* ELEMENT */) {
                    nextNode = onMismatch();
                }
                else {
                    // determine anchor, adopt content
                    nextNode = node;
                    // if the static vnode has its content stripped during build,
                    // adopt it from the server-rendered HTML.
                    const needToAdoptContent = !vnode.children.length;
                    for (let i = 0; i < vnode.staticCount; i++) {
                        if (needToAdoptContent)
                            vnode.children += nextNode.outerHTML;
                        if (i === vnode.staticCount - 1) {
                            vnode.anchor = nextNode;
                        }
                        nextNode = nextSibling(nextNode);
                    }
                    return nextNode;
                }
                break;
            case Fragment:
                if (!isFragmentStart) {
                    nextNode = onMismatch();
                }
                else {
                    nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, optimized);
                }
                break;
            default:
                if (shapeFlag & 1 /* ELEMENT */) {
                    if (domType !== 1 /* ELEMENT */ ||
                        vnode.type !== node.tagName.toLowerCase()) {
                        nextNode = onMismatch();
                    }
                    else {
                        nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, optimized);
                    }
                }
                else if (shapeFlag & 6 /* COMPONENT */) {
                    // when setting up the render effect, if the initial vnode already
                    // has .el set, the component will perform hydration instead of mount
                    // on its sub-tree.
                    const container = parentNode(node);
                    const hydrateComponent = () => {
                        mountComponent(vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), optimized);
                    };
                    // async component
                    const loadAsync = vnode.type.__asyncLoader;
                    if (loadAsync) {
                        loadAsync().then(hydrateComponent);
                    }
                    else {
                        hydrateComponent();
                    }
                    // component may be async, so in the case of fragments we cannot rely
                    // on component's rendered output to determine the end of the fragment
                    // instead, we do a lookahead to find the end anchor node.
                    nextNode = isFragmentStart
                        ? locateClosingAsyncAnchor(node)
                        : nextSibling(node);
                }
                else if (shapeFlag & 64 /* TELEPORT */) {
                    if (domType !== 8 /* COMMENT */) {
                        nextNode = onMismatch();
                    }
                    else {
                        nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, optimized, rendererInternals, hydrateChildren);
                    }
                }
                else if ( shapeFlag & 128 /* SUSPENSE */) {
                    nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, isSVGContainer(parentNode(node)), optimized, rendererInternals, hydrateNode);
                }
                else if ((false)) {}
        }
        if (ref != null) {
            setRef(ref, null, parentSuspense, vnode);
        }
        return nextNode;
    };
    const hydrateElement = (el, vnode, parentComponent, parentSuspense, optimized) => {
        optimized = optimized || !!vnode.dynamicChildren;
        const { props, patchFlag, shapeFlag, dirs } = vnode;
        // skip props & children if this is hoisted static nodes
        if (patchFlag !== -1 /* HOISTED */) {
            if (dirs) {
                invokeDirectiveHook(vnode, null, parentComponent, 'created');
            }
            // props
            if (props) {
                if (!optimized ||
                    (patchFlag & 16 /* FULL_PROPS */ ||
                        patchFlag & 32 /* HYDRATE_EVENTS */)) {
                    for (const key in props) {
                        if (!Object(dist_shared_esm_bundler["v" /* isReservedProp */])(key) && Object(dist_shared_esm_bundler["t" /* isOn */])(key)) {
                            patchProp(el, key, null, props[key]);
                        }
                    }
                }
                else if (props.onClick) {
                    // Fast path for click listeners (which is most often) to avoid
                    // iterating through props.
                    patchProp(el, 'onClick', null, props.onClick);
                }
            }
            // vnode / directive hooks
            let vnodeHooks;
            if ((vnodeHooks = props && props.onVnodeBeforeMount)) {
                invokeVNodeHook(vnodeHooks, parentComponent, vnode);
            }
            if (dirs) {
                invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
            }
            if ((vnodeHooks = props && props.onVnodeMounted) || dirs) {
                queueEffectWithSuspense(() => {
                    vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
                    dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
                }, parentSuspense);
            }
            // children
            if (shapeFlag & 16 /* ARRAY_CHILDREN */ &&
                // skip if element has innerHTML / textContent
                !(props && (props.innerHTML || props.textContent))) {
                let next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, optimized);
                let hasWarned = false;
                while (next) {
                    hasMismatch = true;
                    if (false) {}
                    // The SSRed DOM contains more nodes than it should. Remove them.
                    const cur = next;
                    next = next.nextSibling;
                    remove(cur);
                }
            }
            else if (shapeFlag & 8 /* TEXT_CHILDREN */) {
                if (el.textContent !== vnode.children) {
                    hasMismatch = true;
                    ( false) &&
                        false;
                    el.textContent = vnode.children;
                }
            }
        }
        return el.nextSibling;
    };
    const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, optimized) => {
        optimized = optimized || !!parentVNode.dynamicChildren;
        const children = parentVNode.children;
        const l = children.length;
        let hasWarned = false;
        for (let i = 0; i < l; i++) {
            const vnode = optimized
                ? children[i]
                : (children[i] = normalizeVNode(children[i]));
            if (node) {
                node = hydrateNode(node, vnode, parentComponent, parentSuspense, optimized);
            }
            else {
                hasMismatch = true;
                if (false) {}
                // the SSRed DOM didn't contain enough nodes. Mount the missing ones.
                patch(null, vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container));
            }
        }
        return node;
    };
    const hydrateFragment = (node, vnode, parentComponent, parentSuspense, optimized) => {
        const container = parentNode(node);
        const next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, optimized);
        if (next && isComment(next) && next.data === ']') {
            return nextSibling((vnode.anchor = next));
        }
        else {
            // fragment didn't hydrate successfully, since we didn't get a end anchor
            // back. This should have led to node/children mismatch warnings.
            hasMismatch = true;
            // since the anchor is missing, we need to create one and insert it
            insert((vnode.anchor = createComment(`]`)), container, next);
            return next;
        }
    };
    const handleMismatch = (node, vnode, parentComponent, parentSuspense, isFragment) => {
        hasMismatch = true;
        ( false) &&
            false;
        vnode.el = null;
        if (isFragment) {
            // remove excessive fragment nodes
            const end = locateClosingAsyncAnchor(node);
            while (true) {
                const next = nextSibling(node);
                if (next && next !== end) {
                    remove(next);
                }
                else {
                    break;
                }
            }
        }
        const next = nextSibling(node);
        const container = parentNode(node);
        remove(node);
        patch(null, vnode, container, next, parentComponent, parentSuspense, isSVGContainer(container));
        return next;
    };
    const locateClosingAsyncAnchor = (node) => {
        let match = 0;
        while (node) {
            node = nextSibling(node);
            if (node && isComment(node)) {
                if (node.data === '[')
                    match++;
                if (node.data === ']') {
                    if (match === 0) {
                        return nextSibling(node);
                    }
                    else {
                        match--;
                    }
                }
            }
        }
        return node;
    };
    return [hydrate, hydrateNode];
}

let supported;
let perf;
function startMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
        perf.mark(`vue-${type}-${instance.uid}`);
    }
}
function endMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
        const startTag = `vue-${type}-${instance.uid}`;
        const endTag = startTag + `:end`;
        perf.mark(endTag);
        perf.measure(`<${formatComponentName(instance, instance.type)}> ${type}`, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
    }
}
function isSupported() {
    if (supported !== undefined) {
        return supported;
    }
    /* eslint-disable no-restricted-globals */
    if (typeof window !== 'undefined' && window.performance) {
        supported = true;
        perf = window.performance;
    }
    else {
        supported = false;
    }
    /* eslint-enable no-restricted-globals */
    return supported;
}

/**
 * This is only called in esm-bundler builds.
 * It is called when a renderer is created, in `baseCreateRenderer` so that
 * importing runtime-core is side-effects free.
 *
 * istanbul-ignore-next
 */
function initFeatureFlags() {
    let needWarn = false;
    if (typeof __VUE_OPTIONS_API__ !== 'boolean') {
        needWarn = true;
        Object(dist_shared_esm_bundler["i" /* getGlobalThis */])().__VUE_OPTIONS_API__ = true;
    }
    if (typeof __VUE_PROD_DEVTOOLS__ !== 'boolean') {
        needWarn = true;
        Object(dist_shared_esm_bundler["i" /* getGlobalThis */])().__VUE_PROD_DEVTOOLS__ = false;
    }
    if (false) {}
}

// implementation, close to no-op
function defineComponent(options) {
    return Object(dist_shared_esm_bundler["o" /* isFunction */])(options) ? { setup: options, name: options.name } : options;
}

const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
function defineAsyncComponent(source) {
    if (Object(dist_shared_esm_bundler["o" /* isFunction */])(source)) {
        source = { loader: source };
    }
    const { loader, loadingComponent: loadingComponent, errorComponent: errorComponent, delay = 200, timeout, // undefined = never times out
    suspensible = true, onError: userOnError } = source;
    let pendingRequest = null;
    let resolvedComp;
    let retries = 0;
    const retry = () => {
        retries++;
        pendingRequest = null;
        return load();
    };
    const load = () => {
        let thisRequest;
        return (pendingRequest ||
            (thisRequest = pendingRequest = loader()
                .catch(err => {
                err = err instanceof Error ? err : new Error(String(err));
                if (userOnError) {
                    return new Promise((resolve, reject) => {
                        const userRetry = () => resolve(retry());
                        const userFail = () => reject(err);
                        userOnError(err, userRetry, userFail, retries + 1);
                    });
                }
                else {
                    throw err;
                }
            })
                .then((comp) => {
                if (thisRequest !== pendingRequest && pendingRequest) {
                    return pendingRequest;
                }
                if (false) {}
                // interop module default
                if (comp &&
                    (comp.__esModule || comp[Symbol.toStringTag] === 'Module')) {
                    comp = comp.default;
                }
                if (false) {}
                resolvedComp = comp;
                return comp;
            })));
    };
    return defineComponent({
        __asyncLoader: load,
        name: 'AsyncComponentWrapper',
        setup() {
            const instance = currentInstance;
            // already resolved
            if (resolvedComp) {
                return () => createInnerComp(resolvedComp, instance);
            }
            const onError = (err) => {
                pendingRequest = null;
                handleError(err, instance, 13 /* ASYNC_COMPONENT_LOADER */, !errorComponent /* do not throw in dev if user provided error component */);
            };
            // suspense-controlled or SSR.
            if (( suspensible && instance.suspense) ||
                (false )) {
                return load()
                    .then(comp => {
                    return () => createInnerComp(comp, instance);
                })
                    .catch(err => {
                    onError(err);
                    return () => errorComponent
                        ? createVNode(errorComponent, {
                            error: err
                        })
                        : null;
                });
            }
            const loaded = reactivity_esm_bundler_ref(false);
            const error = reactivity_esm_bundler_ref();
            const delayed = reactivity_esm_bundler_ref(!!delay);
            if (delay) {
                setTimeout(() => {
                    delayed.value = false;
                }, delay);
            }
            if (timeout != null) {
                setTimeout(() => {
                    if (!loaded.value && !error.value) {
                        const err = new Error(`Async component timed out after ${timeout}ms.`);
                        onError(err);
                        error.value = err;
                    }
                }, timeout);
            }
            load()
                .then(() => {
                loaded.value = true;
            })
                .catch(err => {
                onError(err);
                error.value = err;
            });
            return () => {
                if (loaded.value && resolvedComp) {
                    return createInnerComp(resolvedComp, instance);
                }
                else if (error.value && errorComponent) {
                    return createVNode(errorComponent, {
                        error: error.value
                    });
                }
                else if (loadingComponent && !delayed.value) {
                    return createVNode(loadingComponent);
                }
            };
        }
    });
}
function createInnerComp(comp, { vnode: { ref, props, children } }) {
    const vnode = createVNode(comp, props, children);
    // ensure inner component inherits the async wrapper's ref owner
    vnode.ref = ref;
    return vnode;
}

const prodEffectOptions = {
    scheduler: queueJob,
    // #1801, #2043 component render effects should allow recursive updates
    allowRecurse: true
};
function createDevEffectOptions(instance) {
    return {
        scheduler: queueJob,
        allowRecurse: true,
        onTrack: instance.rtc ? e => Object(dist_shared_esm_bundler["m" /* invokeArrayFns */])(instance.rtc, e) : void 0,
        onTrigger: instance.rtg ? e => Object(dist_shared_esm_bundler["m" /* invokeArrayFns */])(instance.rtg, e) : void 0
    };
}
const queuePostRenderEffect =  queueEffectWithSuspense
    ;
const setRef = (rawRef, oldRawRef, parentSuspense, vnode) => {
    if (Object(dist_shared_esm_bundler["n" /* isArray */])(rawRef)) {
        rawRef.forEach((r, i) => setRef(r, oldRawRef && (Object(dist_shared_esm_bundler["n" /* isArray */])(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode));
        return;
    }
    let value;
    if (!vnode || isAsyncWrapper(vnode)) {
        value = null;
    }
    else {
        if (vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */) {
            value = vnode.component.exposed || vnode.component.proxy;
        }
        else {
            value = vnode.el;
        }
    }
    const { i: owner, r: ref } = rawRef;
    if (false) {}
    const oldRef = oldRawRef && oldRawRef.r;
    const refs = owner.refs === dist_shared_esm_bundler["b" /* EMPTY_OBJ */] ? (owner.refs = {}) : owner.refs;
    const setupState = owner.setupState;
    // unset old ref
    if (oldRef != null && oldRef !== ref) {
        if (Object(dist_shared_esm_bundler["x" /* isString */])(oldRef)) {
            refs[oldRef] = null;
            if (Object(dist_shared_esm_bundler["k" /* hasOwn */])(setupState, oldRef)) {
                setupState[oldRef] = null;
            }
        }
        else if (isRef(oldRef)) {
            oldRef.value = null;
        }
    }
    if (Object(dist_shared_esm_bundler["x" /* isString */])(ref)) {
        const doSet = () => {
            refs[ref] = value;
            if (Object(dist_shared_esm_bundler["k" /* hasOwn */])(setupState, ref)) {
                setupState[ref] = value;
            }
        };
        // #1789: for non-null values, set them after render
        // null values means this is unmount and it should not overwrite another
        // ref with the same key
        if (value) {
            doSet.id = -1;
            queuePostRenderEffect(doSet, parentSuspense);
        }
        else {
            doSet();
        }
    }
    else if (isRef(ref)) {
        const doSet = () => {
            ref.value = value;
        };
        if (value) {
            doSet.id = -1;
            queuePostRenderEffect(doSet, parentSuspense);
        }
        else {
            doSet();
        }
    }
    else if (Object(dist_shared_esm_bundler["o" /* isFunction */])(ref)) {
        callWithErrorHandling(ref, owner, 12 /* FUNCTION_REF */, [value, refs]);
    }
    else if ((false)) {}
};
/**
 * The createRenderer function accepts two generic arguments:
 * HostNode and HostElement, corresponding to Node and Element types in the
 * host environment. For example, for runtime-dom, HostNode would be the DOM
 * `Node` interface and HostElement would be the DOM `Element` interface.
 *
 * Custom renderers can pass in the platform specific types like this:
 *
 * ``` js
 * const { render, createApp } = createRenderer<Node, Element>({
 *   patchProp,
 *   ...nodeOps
 * })
 * ```
 */
function createRenderer(options) {
    return baseCreateRenderer(options);
}
// Separate API for creating hydration-enabled renderer.
// Hydration logic is only used when calling this function, making it
// tree-shakable.
function createHydrationRenderer(options) {
    return baseCreateRenderer(options, createHydrationFunctions);
}
// implementation
function baseCreateRenderer(options, createHydrationFns) {
    // compile-time feature flags check
    {
        initFeatureFlags();
    }
    const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, forcePatchProp: hostForcePatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = dist_shared_esm_bundler["d" /* NOOP */], cloneNode: hostCloneNode, insertStaticContent: hostInsertStaticContent } = options;
    // Note: functions inside this closure should use `const xxx = () => {}`
    // style in order to prevent being inlined by minifiers.
    const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, optimized = false) => {
        // patching & not same type, unmount old tree
        if (n1 && !isSameVNodeType(n1, n2)) {
            anchor = getNextHostNode(n1);
            unmount(n1, parentComponent, parentSuspense, true);
            n1 = null;
        }
        if (n2.patchFlag === -2 /* BAIL */) {
            optimized = false;
            n2.dynamicChildren = null;
        }
        const { type, ref, shapeFlag } = n2;
        switch (type) {
            case Text:
                processText(n1, n2, container, anchor);
                break;
            case Comment:
                processCommentNode(n1, n2, container, anchor);
                break;
            case Static:
                if (n1 == null) {
                    mountStaticNode(n2, container, anchor, isSVG);
                }
                else if ((false)) {}
                break;
            case Fragment:
                processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                break;
            default:
                if (shapeFlag & 1 /* ELEMENT */) {
                    processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                }
                else if (shapeFlag & 6 /* COMPONENT */) {
                    processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                }
                else if (shapeFlag & 64 /* TELEPORT */) {
                    type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, internals);
                }
                else if ( shapeFlag & 128 /* SUSPENSE */) {
                    type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, internals);
                }
                else if ((false)) {}
        }
        // set ref
        if (ref != null && parentComponent) {
            setRef(ref, n1 && n1.ref, parentSuspense, n2);
        }
    };
    const processText = (n1, n2, container, anchor) => {
        if (n1 == null) {
            hostInsert((n2.el = hostCreateText(n2.children)), container, anchor);
        }
        else {
            const el = (n2.el = n1.el);
            if (n2.children !== n1.children) {
                hostSetText(el, n2.children);
            }
        }
    };
    const processCommentNode = (n1, n2, container, anchor) => {
        if (n1 == null) {
            hostInsert((n2.el = hostCreateComment(n2.children || '')), container, anchor);
        }
        else {
            // there's no support for dynamic comments
            n2.el = n1.el;
        }
    };
    const mountStaticNode = (n2, container, anchor, isSVG) => {
        [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
    };
    /**
     * Dev / HMR only
     */
    const patchStaticNode = (n1, n2, container, isSVG) => {
        // static nodes are only patched during dev for HMR
        if (n2.children !== n1.children) {
            const anchor = hostNextSibling(n1.anchor);
            // remove existing
            removeStaticNode(n1);
            [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
        }
        else {
            n2.el = n1.el;
            n2.anchor = n1.anchor;
        }
    };
    const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
        let next;
        while (el && el !== anchor) {
            next = hostNextSibling(el);
            hostInsert(el, container, nextSibling);
            el = next;
        }
        hostInsert(anchor, container, nextSibling);
    };
    const removeStaticNode = ({ el, anchor }) => {
        let next;
        while (el && el !== anchor) {
            next = hostNextSibling(el);
            hostRemove(el);
            el = next;
        }
        hostRemove(anchor);
    };
    const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
        isSVG = isSVG || n2.type === 'svg';
        if (n1 == null) {
            mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
        }
        else {
            patchElement(n1, n2, parentComponent, parentSuspense, isSVG, optimized);
        }
    };
    const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
        let el;
        let vnodeHook;
        const { type, props, shapeFlag, transition, scopeId, patchFlag, dirs } = vnode;
        if ( true &&
            vnode.el &&
            hostCloneNode !== undefined &&
            patchFlag === -1 /* HOISTED */) {
            // If a vnode has non-null el, it means it's being reused.
            // Only static vnodes can be reused, so its mounted DOM nodes should be
            // exactly the same, and we can simply do a clone here.
            // only do this in production since cloned trees cannot be HMR updated.
            el = vnode.el = hostCloneNode(vnode.el);
        }
        else {
            el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is);
            // mount children first, since some props may rely on child content
            // being already rendered, e.g. `<select value>`
            if (shapeFlag & 8 /* TEXT_CHILDREN */) {
                hostSetElementText(el, vnode.children);
            }
            else if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== 'foreignObject', optimized || !!vnode.dynamicChildren);
            }
            if (dirs) {
                invokeDirectiveHook(vnode, null, parentComponent, 'created');
            }
            // props
            if (props) {
                for (const key in props) {
                    if (!Object(dist_shared_esm_bundler["v" /* isReservedProp */])(key)) {
                        hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                    }
                }
                if ((vnodeHook = props.onVnodeBeforeMount)) {
                    invokeVNodeHook(vnodeHook, parentComponent, vnode);
                }
            }
            // scopeId
            setScopeId(el, scopeId, vnode, parentComponent);
        }
        if (( false) || __VUE_PROD_DEVTOOLS__) {
            Object.defineProperty(el, '__vnode', {
                value: vnode,
                enumerable: false
            });
            Object.defineProperty(el, '__vueParentComponent', {
                value: parentComponent,
                enumerable: false
            });
        }
        if (dirs) {
            invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
        }
        // #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved
        // #1689 For inside suspense + suspense resolved case, just call it
        const needCallTransitionHooks = (!parentSuspense || (parentSuspense && !parentSuspense.pendingBranch)) &&
            transition &&
            !transition.persisted;
        if (needCallTransitionHooks) {
            transition.beforeEnter(el);
        }
        hostInsert(el, container, anchor);
        if ((vnodeHook = props && props.onVnodeMounted) ||
            needCallTransitionHooks ||
            dirs) {
            queuePostRenderEffect(() => {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
                needCallTransitionHooks && transition.enter(el);
                dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
            }, parentSuspense);
        }
    };
    const setScopeId = (el, scopeId, vnode, parentComponent) => {
        if (scopeId) {
            hostSetScopeId(el, scopeId);
        }
        if (parentComponent) {
            const treeOwnerId = parentComponent.type.__scopeId;
            // vnode's own scopeId and the current patched component's scopeId is
            // different - this is a slot content node.
            if (treeOwnerId && treeOwnerId !== scopeId) {
                hostSetScopeId(el, treeOwnerId + '-s');
            }
            let subTree = parentComponent.subTree;
            if (false) {}
            if (vnode === subTree) {
                setScopeId(el, parentComponent.vnode.scopeId, parentComponent.vnode, parentComponent.parent);
            }
        }
    };
    const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, optimized, start = 0) => {
        for (let i = start; i < children.length; i++) {
            const child = (children[i] = optimized
                ? cloneIfMounted(children[i])
                : normalizeVNode(children[i]));
            patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
        }
    };
    const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, optimized) => {
        const el = (n2.el = n1.el);
        let { patchFlag, dynamicChildren, dirs } = n2;
        // #1426 take the old vnode's patch flag into account since user may clone a
        // compiler-generated vnode, which de-opts to FULL_PROPS
        patchFlag |= n1.patchFlag & 16 /* FULL_PROPS */;
        const oldProps = n1.props || dist_shared_esm_bundler["b" /* EMPTY_OBJ */];
        const newProps = n2.props || dist_shared_esm_bundler["b" /* EMPTY_OBJ */];
        let vnodeHook;
        if ((vnodeHook = newProps.onVnodeBeforeUpdate)) {
            invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        }
        if (dirs) {
            invokeDirectiveHook(n2, n1, parentComponent, 'beforeUpdate');
        }
        if (false) {}
        if (patchFlag > 0) {
            // the presence of a patchFlag means this element's render code was
            // generated by the compiler and can take the fast path.
            // in this path old node and new node are guaranteed to have the same shape
            // (i.e. at the exact same position in the source template)
            if (patchFlag & 16 /* FULL_PROPS */) {
                // element props contain dynamic keys, full diff needed
                patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
            }
            else {
                // class
                // this flag is matched when the element has dynamic class bindings.
                if (patchFlag & 2 /* CLASS */) {
                    if (oldProps.class !== newProps.class) {
                        hostPatchProp(el, 'class', null, newProps.class, isSVG);
                    }
                }
                // style
                // this flag is matched when the element has dynamic style bindings
                if (patchFlag & 4 /* STYLE */) {
                    hostPatchProp(el, 'style', oldProps.style, newProps.style, isSVG);
                }
                // props
                // This flag is matched when the element has dynamic prop/attr bindings
                // other than class and style. The keys of dynamic prop/attrs are saved for
                // faster iteration.
                // Note dynamic keys like :[foo]="bar" will cause this optimization to
                // bail out and go through a full diff because we need to unset the old key
                if (patchFlag & 8 /* PROPS */) {
                    // if the flag is present then dynamicProps must be non-null
                    const propsToUpdate = n2.dynamicProps;
                    for (let i = 0; i < propsToUpdate.length; i++) {
                        const key = propsToUpdate[i];
                        const prev = oldProps[key];
                        const next = newProps[key];
                        if (next !== prev ||
                            (hostForcePatchProp && hostForcePatchProp(el, key))) {
                            hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
                        }
                    }
                }
            }
            // text
            // This flag is matched when the element has only dynamic text children.
            if (patchFlag & 1 /* TEXT */) {
                if (n1.children !== n2.children) {
                    hostSetElementText(el, n2.children);
                }
            }
        }
        else if (!optimized && dynamicChildren == null) {
            // unoptimized, full diff
            patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
        }
        const areChildrenSVG = isSVG && n2.type !== 'foreignObject';
        if (dynamicChildren) {
            patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG);
            if (false) {}
        }
        else if (!optimized) {
            // full diff
            patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG);
        }
        if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
            queuePostRenderEffect(() => {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
                dirs && invokeDirectiveHook(n2, n1, parentComponent, 'updated');
            }, parentSuspense);
        }
    };
    // The fast path for blocks.
    const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG) => {
        for (let i = 0; i < newChildren.length; i++) {
            const oldVNode = oldChildren[i];
            const newVNode = newChildren[i];
            // Determine the container (parent element) for the patch.
            const container = 
            // - In the case of a Fragment, we need to provide the actual parent
            // of the Fragment itself so it can move its children.
            oldVNode.type === Fragment ||
                // - In the case of different nodes, there is going to be a replacement
                // which also requires the correct parent container
                !isSameVNodeType(oldVNode, newVNode) ||
                // - In the case of a component, it could contain anything.
                oldVNode.shapeFlag & 6 /* COMPONENT */ ||
                oldVNode.shapeFlag & 64 /* TELEPORT */
                ? hostParentNode(oldVNode.el)
                : // In other cases, the parent container is not actually used so we
                    // just pass the block element here to avoid a DOM parentNode call.
                    fallbackContainer;
            patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, true);
        }
    };
    const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
        if (oldProps !== newProps) {
            for (const key in newProps) {
                // empty string is not valid prop
                if (Object(dist_shared_esm_bundler["v" /* isReservedProp */])(key))
                    continue;
                const next = newProps[key];
                const prev = oldProps[key];
                if (next !== prev ||
                    (hostForcePatchProp && hostForcePatchProp(el, key))) {
                    hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                }
            }
            if (oldProps !== dist_shared_esm_bundler["b" /* EMPTY_OBJ */]) {
                for (const key in oldProps) {
                    if (!Object(dist_shared_esm_bundler["v" /* isReservedProp */])(key) && !(key in newProps)) {
                        hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                    }
                }
            }
        }
    };
    const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
        const fragmentStartAnchor = (n2.el = n1 ? n1.el : hostCreateText(''));
        const fragmentEndAnchor = (n2.anchor = n1 ? n1.anchor : hostCreateText(''));
        let { patchFlag, dynamicChildren } = n2;
        if (patchFlag > 0) {
            optimized = true;
        }
        if (false) {}
        if (n1 == null) {
            hostInsert(fragmentStartAnchor, container, anchor);
            hostInsert(fragmentEndAnchor, container, anchor);
            // a fragment can only have array children
            // since they are either generated by the compiler, or implicitly created
            // from arrays.
            mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, optimized);
        }
        else {
            if (patchFlag > 0 &&
                patchFlag & 64 /* STABLE_FRAGMENT */ &&
                dynamicChildren &&
                // #2715 the previous fragment could've been a BAILed one as a result
                // of renderSlot() with no valid children
                n1.dynamicChildren) {
                // a stable fragment (template root or <template v-for>) doesn't need to
                // patch children order, but it may contain dynamicChildren.
                patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG);
                if (false) {}
                else if (
                // #2080 if the stable fragment has a key, it's a <template v-for> that may
                //  get moved around. Make sure all root level vnodes inherit el.
                // #2134 or if it's a component root, it may also get moved around
                // as the component is being moved.
                n2.key != null ||
                    (parentComponent && n2 === parentComponent.subTree)) {
                    traverseStaticChildren(n1, n2, true /* shallow */);
                }
            }
            else {
                // keyed / unkeyed, or manual fragments.
                // for keyed & unkeyed, since they are compiler generated from v-for,
                // each child is guaranteed to be a block so the fragment will never
                // have dynamicChildren.
                patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, optimized);
            }
        }
    };
    const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
        if (n1 == null) {
            if (n2.shapeFlag & 512 /* COMPONENT_KEPT_ALIVE */) {
                parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
            }
            else {
                mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
            }
        }
        else {
            updateComponent(n1, n2, optimized);
        }
    };
    const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
        const instance = (initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense));
        if (false) {}
        if ((false)) {}
        // inject renderer internals for keepAlive
        if (isKeepAlive(initialVNode)) {
            instance.ctx.renderer = internals;
        }
        // resolve props and slots for setup context
        if ((false)) {}
        setupComponent(instance);
        if ((false)) {}
        // setup() is async. This component relies on async logic to be resolved
        // before proceeding
        if ( instance.asyncDep) {
            parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
            // Give it a placeholder if this is not hydration
            // TODO handle self-defined fallback
            if (!initialVNode.el) {
                const placeholder = (instance.subTree = createVNode(Comment));
                processCommentNode(null, placeholder, container, anchor);
            }
            return;
        }
        setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
        if ((false)) {}
    };
    const updateComponent = (n1, n2, optimized) => {
        const instance = (n2.component = n1.component);
        if (shouldUpdateComponent(n1, n2, optimized)) {
            if (
                instance.asyncDep &&
                !instance.asyncResolved) {
                // async & still pending - just update props and slots
                // since the component's reactive effect for render isn't set-up yet
                if ((false)) {}
                updateComponentPreRender(instance, n2, optimized);
                if ((false)) {}
                return;
            }
            else {
                // normal update
                instance.next = n2;
                // in case the child component is also queued, remove it to avoid
                // double updating the same child component in the same flush.
                invalidateJob(instance.update);
                // instance.update is the reactive effect runner.
                instance.update();
            }
        }
        else {
            // no update needed. just copy over properties
            n2.component = n1.component;
            n2.el = n1.el;
            instance.vnode = n2;
        }
    };
    const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
        // create reactive effect for rendering
        instance.update = reactivity_esm_bundler_effect(function componentEffect() {
            if (!instance.isMounted) {
                let vnodeHook;
                const { el, props } = initialVNode;
                const { bm, m, parent } = instance;
                // beforeMount hook
                if (bm) {
                    Object(dist_shared_esm_bundler["m" /* invokeArrayFns */])(bm);
                }
                // onVnodeBeforeMount
                if ((vnodeHook = props && props.onVnodeBeforeMount)) {
                    invokeVNodeHook(vnodeHook, parent, initialVNode);
                }
                // render
                if ((false)) {}
                const subTree = (instance.subTree = renderComponentRoot(instance));
                if ((false)) {}
                if (el && hydrateNode) {
                    if ((false)) {}
                    // vnode has adopted host node - perform hydration instead of mount.
                    hydrateNode(initialVNode.el, subTree, instance, parentSuspense);
                    if ((false)) {}
                }
                else {
                    if ((false)) {}
                    patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
                    if ((false)) {}
                    initialVNode.el = subTree.el;
                }
                // mounted hook
                if (m) {
                    queuePostRenderEffect(m, parentSuspense);
                }
                // onVnodeMounted
                if ((vnodeHook = props && props.onVnodeMounted)) {
                    const scopedInitialVNode = initialVNode;
                    queuePostRenderEffect(() => {
                        invokeVNodeHook(vnodeHook, parent, scopedInitialVNode);
                    }, parentSuspense);
                }
                // activated hook for keep-alive roots.
                // #1742 activated hook must be accessed after first render
                // since the hook may be injected by a child keep-alive
                const { a } = instance;
                if (a &&
                    initialVNode.shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */) {
                    queuePostRenderEffect(a, parentSuspense);
                }
                instance.isMounted = true;
                // #2458: deference mount-only object parameters to prevent memleaks
                initialVNode = container = anchor = null;
            }
            else {
                // updateComponent
                // This is triggered by mutation of component's own state (next: null)
                // OR parent calling processComponent (next: VNode)
                let { next, bu, u, parent, vnode } = instance;
                let originNext = next;
                let vnodeHook;
                if ((false)) {}
                if (next) {
                    next.el = vnode.el;
                    updateComponentPreRender(instance, next, optimized);
                }
                else {
                    next = vnode;
                }
                // beforeUpdate hook
                if (bu) {
                    Object(dist_shared_esm_bundler["m" /* invokeArrayFns */])(bu);
                }
                // onVnodeBeforeUpdate
                if ((vnodeHook = next.props && next.props.onVnodeBeforeUpdate)) {
                    invokeVNodeHook(vnodeHook, parent, next, vnode);
                }
                // render
                if ((false)) {}
                const nextTree = renderComponentRoot(instance);
                if ((false)) {}
                const prevTree = instance.subTree;
                instance.subTree = nextTree;
                if ((false)) {}
                patch(prevTree, nextTree, 
                // parent may have changed if it's in a teleport
                hostParentNode(prevTree.el), 
                // anchor may have changed if it's in a fragment
                getNextHostNode(prevTree), instance, parentSuspense, isSVG);
                if ((false)) {}
                next.el = nextTree.el;
                if (originNext === null) {
                    // self-triggered update. In case of HOC, update parent component
                    // vnode el. HOC is indicated by parent instance's subTree pointing
                    // to child component's vnode
                    updateHOCHostEl(instance, nextTree.el);
                }
                // updated hook
                if (u) {
                    queuePostRenderEffect(u, parentSuspense);
                }
                // onVnodeUpdated
                if ((vnodeHook = next.props && next.props.onVnodeUpdated)) {
                    queuePostRenderEffect(() => {
                        invokeVNodeHook(vnodeHook, parent, next, vnode);
                    }, parentSuspense);
                }
                if (( false) || __VUE_PROD_DEVTOOLS__) {
                    devtoolsComponentUpdated(instance);
                }
                if ((false)) {}
            }
        }, ( false) ? undefined : prodEffectOptions);
    };
    const updateComponentPreRender = (instance, nextVNode, optimized) => {
        nextVNode.component = instance;
        const prevProps = instance.vnode.props;
        instance.vnode = nextVNode;
        instance.next = null;
        updateProps(instance, nextVNode.props, prevProps, optimized);
        updateSlots(instance, nextVNode.children);
        // props update may have triggered pre-flush watchers.
        // flush them before the render update.
        flushPreFlushCbs(undefined, instance.update);
    };
    const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized = false) => {
        const c1 = n1 && n1.children;
        const prevShapeFlag = n1 ? n1.shapeFlag : 0;
        const c2 = n2.children;
        const { patchFlag, shapeFlag } = n2;
        // fast path
        if (patchFlag > 0) {
            if (patchFlag & 128 /* KEYED_FRAGMENT */) {
                // this could be either fully-keyed or mixed (some keyed some not)
                // presence of patchFlag means children are guaranteed to be arrays
                patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                return;
            }
            else if (patchFlag & 256 /* UNKEYED_FRAGMENT */) {
                // unkeyed
                patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                return;
            }
        }
        // children has 3 possibilities: text, array or no children.
        if (shapeFlag & 8 /* TEXT_CHILDREN */) {
            // text children fast path
            if (prevShapeFlag & 16 /* ARRAY_CHILDREN */) {
                unmountChildren(c1, parentComponent, parentSuspense);
            }
            if (c2 !== c1) {
                hostSetElementText(container, c2);
            }
        }
        else {
            if (prevShapeFlag & 16 /* ARRAY_CHILDREN */) {
                // prev children was array
                if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                    // two arrays, cannot assume anything, do full diff
                    patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                }
                else {
                    // no new children, just unmount old
                    unmountChildren(c1, parentComponent, parentSuspense, true);
                }
            }
            else {
                // prev children was text OR null
                // new children is array OR null
                if (prevShapeFlag & 8 /* TEXT_CHILDREN */) {
                    hostSetElementText(container, '');
                }
                // mount new if array
                if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                    mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                }
            }
        }
    };
    const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
        c1 = c1 || dist_shared_esm_bundler["a" /* EMPTY_ARR */];
        c2 = c2 || dist_shared_esm_bundler["a" /* EMPTY_ARR */];
        const oldLength = c1.length;
        const newLength = c2.length;
        const commonLength = Math.min(oldLength, newLength);
        let i;
        for (i = 0; i < commonLength; i++) {
            const nextChild = (c2[i] = optimized
                ? cloneIfMounted(c2[i])
                : normalizeVNode(c2[i]));
            patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, optimized);
        }
        if (oldLength > newLength) {
            // remove old
            unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
        }
        else {
            // mount new
            mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, commonLength);
        }
    };
    // can be all-keyed or mixed
    const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, optimized) => {
        let i = 0;
        const l2 = c2.length;
        let e1 = c1.length - 1; // prev ending index
        let e2 = l2 - 1; // next ending index
        // 1. sync from start
        // (a b) c
        // (a b) d e
        while (i <= e1 && i <= e2) {
            const n1 = c1[i];
            const n2 = (c2[i] = optimized
                ? cloneIfMounted(c2[i])
                : normalizeVNode(c2[i]));
            if (isSameVNodeType(n1, n2)) {
                patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, optimized);
            }
            else {
                break;
            }
            i++;
        }
        // 2. sync from end
        // a (b c)
        // d e (b c)
        while (i <= e1 && i <= e2) {
            const n1 = c1[e1];
            const n2 = (c2[e2] = optimized
                ? cloneIfMounted(c2[e2])
                : normalizeVNode(c2[e2]));
            if (isSameVNodeType(n1, n2)) {
                patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, optimized);
            }
            else {
                break;
            }
            e1--;
            e2--;
        }
        // 3. common sequence + mount
        // (a b)
        // (a b) c
        // i = 2, e1 = 1, e2 = 2
        // (a b)
        // c (a b)
        // i = 0, e1 = -1, e2 = 0
        if (i > e1) {
            if (i <= e2) {
                const nextPos = e2 + 1;
                const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
                while (i <= e2) {
                    patch(null, (c2[i] = optimized
                        ? cloneIfMounted(c2[i])
                        : normalizeVNode(c2[i])), container, anchor, parentComponent, parentSuspense, isSVG);
                    i++;
                }
            }
        }
        // 4. common sequence + unmount
        // (a b) c
        // (a b)
        // i = 2, e1 = 2, e2 = 1
        // a (b c)
        // (b c)
        // i = 0, e1 = 0, e2 = -1
        else if (i > e2) {
            while (i <= e1) {
                unmount(c1[i], parentComponent, parentSuspense, true);
                i++;
            }
        }
        // 5. unknown sequence
        // [i ... e1 + 1]: a b [c d e] f g
        // [i ... e2 + 1]: a b [e d c h] f g
        // i = 2, e1 = 4, e2 = 5
        else {
            const s1 = i; // prev starting index
            const s2 = i; // next starting index
            // 5.1 build key:index map for newChildren
            const keyToNewIndexMap = new Map();
            for (i = s2; i <= e2; i++) {
                const nextChild = (c2[i] = optimized
                    ? cloneIfMounted(c2[i])
                    : normalizeVNode(c2[i]));
                if (nextChild.key != null) {
                    if (false) {}
                    keyToNewIndexMap.set(nextChild.key, i);
                }
            }
            // 5.2 loop through old children left to be patched and try to patch
            // matching nodes & remove nodes that are no longer present
            let j;
            let patched = 0;
            const toBePatched = e2 - s2 + 1;
            let moved = false;
            // used to track whether any node has moved
            let maxNewIndexSoFar = 0;
            // works as Map<newIndex, oldIndex>
            // Note that oldIndex is offset by +1
            // and oldIndex = 0 is a special value indicating the new node has
            // no corresponding old node.
            // used for determining longest stable subsequence
            const newIndexToOldIndexMap = new Array(toBePatched);
            for (i = 0; i < toBePatched; i++)
                newIndexToOldIndexMap[i] = 0;
            for (i = s1; i <= e1; i++) {
                const prevChild = c1[i];
                if (patched >= toBePatched) {
                    // all new children have been patched so this can only be a removal
                    unmount(prevChild, parentComponent, parentSuspense, true);
                    continue;
                }
                let newIndex;
                if (prevChild.key != null) {
                    newIndex = keyToNewIndexMap.get(prevChild.key);
                }
                else {
                    // key-less node, try to locate a key-less node of the same type
                    for (j = s2; j <= e2; j++) {
                        if (newIndexToOldIndexMap[j - s2] === 0 &&
                            isSameVNodeType(prevChild, c2[j])) {
                            newIndex = j;
                            break;
                        }
                    }
                }
                if (newIndex === undefined) {
                    unmount(prevChild, parentComponent, parentSuspense, true);
                }
                else {
                    newIndexToOldIndexMap[newIndex - s2] = i + 1;
                    if (newIndex >= maxNewIndexSoFar) {
                        maxNewIndexSoFar = newIndex;
                    }
                    else {
                        moved = true;
                    }
                    patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, optimized);
                    patched++;
                }
            }
            // 5.3 move and mount
            // generate longest stable subsequence only when nodes have moved
            const increasingNewIndexSequence = moved
                ? getSequence(newIndexToOldIndexMap)
                : dist_shared_esm_bundler["a" /* EMPTY_ARR */];
            j = increasingNewIndexSequence.length - 1;
            // looping backwards so that we can use last patched node as anchor
            for (i = toBePatched - 1; i >= 0; i--) {
                const nextIndex = s2 + i;
                const nextChild = c2[nextIndex];
                const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
                if (newIndexToOldIndexMap[i] === 0) {
                    // mount new
                    patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG);
                }
                else if (moved) {
                    // move if:
                    // There is no stable subsequence (e.g. a reverse)
                    // OR current node is not among the stable sequence
                    if (j < 0 || i !== increasingNewIndexSequence[j]) {
                        move(nextChild, container, anchor, 2 /* REORDER */);
                    }
                    else {
                        j--;
                    }
                }
            }
        }
    };
    const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
        const { el, type, transition, children, shapeFlag } = vnode;
        if (shapeFlag & 6 /* COMPONENT */) {
            move(vnode.component.subTree, container, anchor, moveType);
            return;
        }
        if ( shapeFlag & 128 /* SUSPENSE */) {
            vnode.suspense.move(container, anchor, moveType);
            return;
        }
        if (shapeFlag & 64 /* TELEPORT */) {
            type.move(vnode, container, anchor, internals);
            return;
        }
        if (type === Fragment) {
            hostInsert(el, container, anchor);
            for (let i = 0; i < children.length; i++) {
                move(children[i], container, anchor, moveType);
            }
            hostInsert(vnode.anchor, container, anchor);
            return;
        }
        if (type === Static) {
            moveStaticNode(vnode, container, anchor);
            return;
        }
        // single nodes
        const needTransition = moveType !== 2 /* REORDER */ &&
            shapeFlag & 1 /* ELEMENT */ &&
            transition;
        if (needTransition) {
            if (moveType === 0 /* ENTER */) {
                transition.beforeEnter(el);
                hostInsert(el, container, anchor);
                queuePostRenderEffect(() => transition.enter(el), parentSuspense);
            }
            else {
                const { leave, delayLeave, afterLeave } = transition;
                const remove = () => hostInsert(el, container, anchor);
                const performLeave = () => {
                    leave(el, () => {
                        remove();
                        afterLeave && afterLeave();
                    });
                };
                if (delayLeave) {
                    delayLeave(el, remove, performLeave);
                }
                else {
                    performLeave();
                }
            }
        }
        else {
            hostInsert(el, container, anchor);
        }
    };
    const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
        const { type, props, ref, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
        // unset ref
        if (ref != null) {
            setRef(ref, null, parentSuspense, null);
        }
        if (shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */) {
            parentComponent.ctx.deactivate(vnode);
            return;
        }
        const shouldInvokeDirs = shapeFlag & 1 /* ELEMENT */ && dirs;
        let vnodeHook;
        if ((vnodeHook = props && props.onVnodeBeforeUnmount)) {
            invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
        if (shapeFlag & 6 /* COMPONENT */) {
            unmountComponent(vnode.component, parentSuspense, doRemove);
        }
        else {
            if ( shapeFlag & 128 /* SUSPENSE */) {
                vnode.suspense.unmount(parentSuspense, doRemove);
                return;
            }
            if (shouldInvokeDirs) {
                invokeDirectiveHook(vnode, null, parentComponent, 'beforeUnmount');
            }
            if (dynamicChildren &&
                // #1153: fast path should not be taken for non-stable (v-for) fragments
                (type !== Fragment ||
                    (patchFlag > 0 && patchFlag & 64 /* STABLE_FRAGMENT */))) {
                // fast path for block nodes: only need to unmount dynamic children.
                unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
            }
            else if ((type === Fragment &&
                (patchFlag & 128 /* KEYED_FRAGMENT */ ||
                    patchFlag & 256 /* UNKEYED_FRAGMENT */)) ||
                (!optimized && shapeFlag & 16 /* ARRAY_CHILDREN */)) {
                unmountChildren(children, parentComponent, parentSuspense);
            }
            // an unmounted teleport should always remove its children if not disabled
            if (shapeFlag & 64 /* TELEPORT */ &&
                (doRemove || !isTeleportDisabled(vnode.props))) {
                vnode.type.remove(vnode, internals);
            }
            if (doRemove) {
                remove(vnode);
            }
        }
        if ((vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
            queuePostRenderEffect(() => {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
                shouldInvokeDirs &&
                    invokeDirectiveHook(vnode, null, parentComponent, 'unmounted');
            }, parentSuspense);
        }
    };
    const remove = vnode => {
        const { type, el, anchor, transition } = vnode;
        if (type === Fragment) {
            removeFragment(el, anchor);
            return;
        }
        if (type === Static) {
            removeStaticNode(vnode);
            return;
        }
        const performRemove = () => {
            hostRemove(el);
            if (transition && !transition.persisted && transition.afterLeave) {
                transition.afterLeave();
            }
        };
        if (vnode.shapeFlag & 1 /* ELEMENT */ &&
            transition &&
            !transition.persisted) {
            const { leave, delayLeave } = transition;
            const performLeave = () => leave(el, performRemove);
            if (delayLeave) {
                delayLeave(vnode.el, performRemove, performLeave);
            }
            else {
                performLeave();
            }
        }
        else {
            performRemove();
        }
    };
    const removeFragment = (cur, end) => {
        // For fragments, directly remove all contained DOM nodes.
        // (fragment child nodes cannot have transition)
        let next;
        while (cur !== end) {
            next = hostNextSibling(cur);
            hostRemove(cur);
            cur = next;
        }
        hostRemove(end);
    };
    const unmountComponent = (instance, parentSuspense, doRemove) => {
        if (false) {}
        const { bum, effects, update, subTree, um } = instance;
        // beforeUnmount hook
        if (bum) {
            Object(dist_shared_esm_bundler["m" /* invokeArrayFns */])(bum);
        }
        if (effects) {
            for (let i = 0; i < effects.length; i++) {
                stop(effects[i]);
            }
        }
        // update may be null if a component is unmounted before its async
        // setup has resolved.
        if (update) {
            stop(update);
            unmount(subTree, instance, parentSuspense, doRemove);
        }
        // unmounted hook
        if (um) {
            queuePostRenderEffect(um, parentSuspense);
        }
        queuePostRenderEffect(() => {
            instance.isUnmounted = true;
        }, parentSuspense);
        // A component with async dep inside a pending suspense is unmounted before
        // its async dep resolves. This should remove the dep from the suspense, and
        // cause the suspense to resolve immediately if that was the last dep.
        if (
            parentSuspense &&
            parentSuspense.pendingBranch &&
            !parentSuspense.isUnmounted &&
            instance.asyncDep &&
            !instance.asyncResolved &&
            instance.suspenseId === parentSuspense.pendingId) {
            parentSuspense.deps--;
            if (parentSuspense.deps === 0) {
                parentSuspense.resolve();
            }
        }
        if (( false) || __VUE_PROD_DEVTOOLS__) {
            devtoolsComponentRemoved(instance);
        }
    };
    const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
        for (let i = start; i < children.length; i++) {
            unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
        }
    };
    const getNextHostNode = vnode => {
        if (vnode.shapeFlag & 6 /* COMPONENT */) {
            return getNextHostNode(vnode.component.subTree);
        }
        if ( vnode.shapeFlag & 128 /* SUSPENSE */) {
            return vnode.suspense.next();
        }
        return hostNextSibling((vnode.anchor || vnode.el));
    };
    const render = (vnode, container) => {
        if (vnode == null) {
            if (container._vnode) {
                unmount(container._vnode, null, null, true);
            }
        }
        else {
            patch(container._vnode || null, vnode, container);
        }
        flushPostFlushCbs();
        container._vnode = vnode;
    };
    const internals = {
        p: patch,
        um: unmount,
        m: move,
        r: remove,
        mt: mountComponent,
        mc: mountChildren,
        pc: patchChildren,
        pbc: patchBlockChildren,
        n: getNextHostNode,
        o: options
    };
    let hydrate;
    let hydrateNode;
    if (createHydrationFns) {
        [hydrate, hydrateNode] = createHydrationFns(internals);
    }
    return {
        render,
        hydrate,
        createApp: createAppAPI(render, hydrate)
    };
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
    callWithAsyncErrorHandling(hook, instance, 7 /* VNODE_HOOK */, [
        vnode,
        prevVNode
    ]);
}
/**
 * #1156
 * When a component is HMR-enabled, we need to make sure that all static nodes
 * inside a block also inherit the DOM element from the previous tree so that
 * HMR updates (which are full updates) can retrieve the element for patching.
 *
 * #2080
 * Inside keyed `template` fragment static children, if a fragment is moved,
 * the children will always moved so that need inherit el form previous nodes
 * to ensure correct moved position.
 */
function traverseStaticChildren(n1, n2, shallow = false) {
    const ch1 = n1.children;
    const ch2 = n2.children;
    if (Object(dist_shared_esm_bundler["n" /* isArray */])(ch1) && Object(dist_shared_esm_bundler["n" /* isArray */])(ch2)) {
        for (let i = 0; i < ch1.length; i++) {
            // this is only called in the optimized path so array children are
            // guaranteed to be vnodes
            const c1 = ch1[i];
            let c2 = ch2[i];
            if (c2.shapeFlag & 1 /* ELEMENT */ && !c2.dynamicChildren) {
                if (c2.patchFlag <= 0 || c2.patchFlag === 32 /* HYDRATE_EVENTS */) {
                    c2 = ch2[i] = cloneIfMounted(ch2[i]);
                    c2.el = c1.el;
                }
                if (!shallow)
                    traverseStaticChildren(c1, c2);
            }
            // also inherit for comment nodes, but not placeholders (e.g. v-if which
            // would have received .el during block patch)
            if (false) {}
        }
    }
}
// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function getSequence(arr) {
    const p = arr.slice();
    const result = [0];
    let i, j, u, v, c;
    const len = arr.length;
    for (i = 0; i < len; i++) {
        const arrI = arr[i];
        if (arrI !== 0) {
            j = result[result.length - 1];
            if (arr[j] < arrI) {
                p[i] = j;
                result.push(i);
                continue;
            }
            u = 0;
            v = result.length - 1;
            while (u < v) {
                c = ((u + v) / 2) | 0;
                if (arr[result[c]] < arrI) {
                    u = c + 1;
                }
                else {
                    v = c;
                }
            }
            if (arrI < arr[result[u]]) {
                if (u > 0) {
                    p[i] = result[u - 1];
                }
                result[u] = i;
            }
        }
    }
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
        result[u] = v;
        v = p[v];
    }
    return result;
}

const isTeleport = (type) => type.__isTeleport;
const isTeleportDisabled = (props) => props && (props.disabled || props.disabled === '');
const isTargetSVG = (target) => typeof SVGElement !== 'undefined' && target instanceof SVGElement;
const resolveTarget = (props, select) => {
    const targetSelector = props && props.to;
    if (Object(dist_shared_esm_bundler["x" /* isString */])(targetSelector)) {
        if (!select) {
            ( false) &&
                false;
            return null;
        }
        else {
            const target = select(targetSelector);
            if (!target) {
                ( false) &&
                    false;
            }
            return target;
        }
    }
    else {
        if (false) {}
        return targetSelector;
    }
};
const TeleportImpl = {
    __isTeleport: true,
    process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, internals) {
        const { mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, o: { insert, querySelector, createText, createComment } } = internals;
        const disabled = isTeleportDisabled(n2.props);
        const { shapeFlag, children } = n2;
        if (n1 == null) {
            // insert anchors in the main view
            const placeholder = (n2.el = ( false)
                ? undefined
                : createText(''));
            const mainAnchor = (n2.anchor = ( false)
                ? undefined
                : createText(''));
            insert(placeholder, container, anchor);
            insert(mainAnchor, container, anchor);
            const target = (n2.target = resolveTarget(n2.props, querySelector));
            const targetAnchor = (n2.targetAnchor = createText(''));
            if (target) {
                insert(targetAnchor, target);
                // #2652 we could be teleporting from a non-SVG tree into an SVG tree
                isSVG = isSVG || isTargetSVG(target);
            }
            else if (false) {}
            const mount = (container, anchor) => {
                // Teleport *always* has Array children. This is enforced in both the
                // compiler and vnode children normalization.
                if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                    mountChildren(children, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                }
            };
            if (disabled) {
                mount(container, mainAnchor);
            }
            else if (target) {
                mount(target, targetAnchor);
            }
        }
        else {
            // update content
            n2.el = n1.el;
            const mainAnchor = (n2.anchor = n1.anchor);
            const target = (n2.target = n1.target);
            const targetAnchor = (n2.targetAnchor = n1.targetAnchor);
            const wasDisabled = isTeleportDisabled(n1.props);
            const currentContainer = wasDisabled ? container : target;
            const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
            isSVG = isSVG || isTargetSVG(target);
            if (n2.dynamicChildren) {
                // fast path when the teleport happens to be a block root
                patchBlockChildren(n1.dynamicChildren, n2.dynamicChildren, currentContainer, parentComponent, parentSuspense, isSVG);
                // even in block tree mode we need to make sure all root-level nodes
                // in the teleport inherit previous DOM references so that they can
                // be moved in future patches.
                traverseStaticChildren(n1, n2, true);
            }
            else if (!optimized) {
                patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, isSVG);
            }
            if (disabled) {
                if (!wasDisabled) {
                    // enabled -> disabled
                    // move into main container
                    moveTeleport(n2, container, mainAnchor, internals, 1 /* TOGGLE */);
                }
            }
            else {
                // target changed
                if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
                    const nextTarget = (n2.target = resolveTarget(n2.props, querySelector));
                    if (nextTarget) {
                        moveTeleport(n2, nextTarget, null, internals, 0 /* TARGET_CHANGE */);
                    }
                    else if ((false)) {}
                }
                else if (wasDisabled) {
                    // disabled -> enabled
                    // move into teleport target
                    moveTeleport(n2, target, targetAnchor, internals, 1 /* TOGGLE */);
                }
            }
        }
    },
    remove(vnode, { r: remove, o: { remove: hostRemove } }) {
        const { shapeFlag, children, anchor } = vnode;
        hostRemove(anchor);
        if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
            for (let i = 0; i < children.length; i++) {
                remove(children[i]);
            }
        }
    },
    move: moveTeleport,
    hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2 /* REORDER */) {
    // move target anchor if this is a target change.
    if (moveType === 0 /* TARGET_CHANGE */) {
        insert(vnode.targetAnchor, container, parentAnchor);
    }
    const { el, anchor, shapeFlag, children, props } = vnode;
    const isReorder = moveType === 2 /* REORDER */;
    // move main view anchor if this is a re-order.
    if (isReorder) {
        insert(el, container, parentAnchor);
    }
    // if this is a re-order and teleport is enabled (content is in target)
    // do not move children. So the opposite is: only move children if this
    // is not a reorder, or the teleport is disabled
    if (!isReorder || isTeleportDisabled(props)) {
        // Teleport has either Array children or no children.
        if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
            for (let i = 0; i < children.length; i++) {
                move(children[i], container, parentAnchor, 2 /* REORDER */);
            }
        }
    }
    // move main view anchor if this is a re-order.
    if (isReorder) {
        insert(anchor, container, parentAnchor);
    }
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, optimized, { o: { nextSibling, parentNode, querySelector } }, hydrateChildren) {
    const target = (vnode.target = resolveTarget(vnode.props, querySelector));
    if (target) {
        // if multiple teleports rendered to the same target element, we need to
        // pick up from where the last teleport finished instead of the first node
        const targetNode = target._lpa || target.firstChild;
        if (vnode.shapeFlag & 16 /* ARRAY_CHILDREN */) {
            if (isTeleportDisabled(vnode.props)) {
                vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, optimized);
                vnode.targetAnchor = targetNode;
            }
            else {
                vnode.anchor = nextSibling(node);
                vnode.targetAnchor = hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, optimized);
            }
            target._lpa =
                vnode.targetAnchor && nextSibling(vnode.targetAnchor);
        }
    }
    return vnode.anchor && nextSibling(vnode.anchor);
}
// Force-casted public typing for h and TSX props inference
const Teleport = TeleportImpl;

const COMPONENTS = 'components';
const DIRECTIVES = 'directives';
/**
 * @private
 */
function resolveComponent(name) {
    return resolveAsset(COMPONENTS, name) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol();
/**
 * @private
 */
function resolveDynamicComponent(component) {
    if (Object(dist_shared_esm_bundler["x" /* isString */])(component)) {
        return resolveAsset(COMPONENTS, component, false) || component;
    }
    else {
        // invalid types will fallthrough to createVNode and raise warning
        return (component || NULL_DYNAMIC_COMPONENT);
    }
}
/**
 * @private
 */
function resolveDirective(name) {
    return resolveAsset(DIRECTIVES, name);
}
// implementation
function resolveAsset(type, name, warnMissing = true) {
    const instance = currentRenderingInstance || currentInstance;
    if (instance) {
        const Component = instance.type;
        // self name has highest priority
        if (type === COMPONENTS) {
            // special self referencing call generated by compiler
            // inferred from SFC filename
            if (name === `_self`) {
                return Component;
            }
            const selfName = getComponentName(Component);
            if (selfName &&
                (selfName === name ||
                    selfName === Object(dist_shared_esm_bundler["e" /* camelize */])(name) ||
                    selfName === Object(dist_shared_esm_bundler["f" /* capitalize */])(Object(dist_shared_esm_bundler["e" /* camelize */])(name)))) {
                return Component;
            }
        }
        const res = 
        // local registration
        // check instance[type] first for components with mixin or extends.
        resolve(instance[type] || Component[type], name) ||
            // global registration
            resolve(instance.appContext[type], name);
        if (false) {}
        return res;
    }
    else if ((false)) {}
}
function resolve(registry, name) {
    return (registry &&
        (registry[name] ||
            registry[Object(dist_shared_esm_bundler["e" /* camelize */])(name)] ||
            registry[Object(dist_shared_esm_bundler["f" /* capitalize */])(Object(dist_shared_esm_bundler["e" /* camelize */])(name))]));
}

const Fragment = Symbol(( false) ? undefined : undefined);
const Text = Symbol(( false) ? undefined : undefined);
const Comment = Symbol(( false) ? undefined : undefined);
const Static = Symbol(( false) ? undefined : undefined);
// Since v-if and v-for are the two possible ways node structure can dynamically
// change, once we consider v-if branches and each v-for fragment a block, we
// can divide a template into nested blocks, and within each block the node
// structure would be stable. This allows us to skip most children diffing
// and only worry about the dynamic nodes (indicated by patch flags).
const blockStack = [];
let currentBlock = null;
/**
 * Open a block.
 * This must be called before `createBlock`. It cannot be part of `createBlock`
 * because the children of the block are evaluated before `createBlock` itself
 * is called. The generated code typically looks like this:
 *
 * ```js
 * function render() {
 *   return (openBlock(),createBlock('div', null, [...]))
 * }
 * ```
 * disableTracking is true when creating a v-for fragment block, since a v-for
 * fragment always diffs its children.
 *
 * @private
 */
function openBlock(disableTracking = false) {
    blockStack.push((currentBlock = disableTracking ? null : []));
}
function closeBlock() {
    blockStack.pop();
    currentBlock = blockStack[blockStack.length - 1] || null;
}
// Whether we should be tracking dynamic child nodes inside a block.
// Only tracks when this value is > 0
// We are not using a simple boolean because this value may need to be
// incremented/decremented by nested usage of v-once (see below)
let runtime_core_esm_bundler_shouldTrack = 1;
/**
 * Block tracking sometimes needs to be disabled, for example during the
 * creation of a tree that needs to be cached by v-once. The compiler generates
 * code like this:
 *
 * ``` js
 * _cache[1] || (
 *   setBlockTracking(-1),
 *   _cache[1] = createVNode(...),
 *   setBlockTracking(1),
 *   _cache[1]
 * )
 * ```
 *
 * @private
 */
function setBlockTracking(value) {
    runtime_core_esm_bundler_shouldTrack += value;
}
/**
 * Create a block root vnode. Takes the same exact arguments as `createVNode`.
 * A block root keeps track of dynamic nodes within the block in the
 * `dynamicChildren` array.
 *
 * @private
 */
function createBlock(type, props, children, patchFlag, dynamicProps) {
    const vnode = createVNode(type, props, children, patchFlag, dynamicProps, true /* isBlock: prevent a block from tracking itself */);
    // save current block children on the block vnode
    vnode.dynamicChildren = currentBlock || dist_shared_esm_bundler["a" /* EMPTY_ARR */];
    // close block
    closeBlock();
    // a block is always going to be patched, so track it as a child of its
    // parent block
    if (runtime_core_esm_bundler_shouldTrack > 0 && currentBlock) {
        currentBlock.push(vnode);
    }
    return vnode;
}
function isVNode(value) {
    return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
    if (false) {}
    return n1.type === n2.type && n1.key === n2.key;
}
let vnodeArgsTransformer;
/**
 * Internal API for registering an arguments transform for createVNode
 * used for creating stubs in the test-utils
 * It is *internal* but needs to be exposed for test-utils to pick up proper
 * typings
 */
function transformVNodeArgs(transformer) {
    vnodeArgsTransformer = transformer;
}
const createVNodeWithArgsTransform = (...args) => {
    return _createVNode(...(vnodeArgsTransformer
        ? vnodeArgsTransformer(args, currentRenderingInstance)
        : args));
};
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({ ref }) => {
    return (ref != null
        ? Object(dist_shared_esm_bundler["x" /* isString */])(ref) || isRef(ref) || Object(dist_shared_esm_bundler["o" /* isFunction */])(ref)
            ? { i: currentRenderingInstance, r: ref }
            : ref
        : null);
};
const createVNode = (( false)
    ? undefined
    : _createVNode);
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
    if (!type || type === NULL_DYNAMIC_COMPONENT) {
        if (false) {}
        type = Comment;
    }
    if (isVNode(type)) {
        // createVNode receiving an existing vnode. This happens in cases like
        // <component :is="vnode"/>
        // #2078 make sure to merge refs during the clone instead of overwriting it
        const cloned = cloneVNode(type, props, true /* mergeRef: true */);
        if (children) {
            normalizeChildren(cloned, children);
        }
        return cloned;
    }
    // class component normalization.
    if (isClassComponent(type)) {
        type = type.__vccOpts;
    }
    // class & style normalization.
    if (props) {
        // for reactive or proxy objects, we need to clone it to enable mutation.
        if (isProxy(props) || InternalObjectKey in props) {
            props = Object(dist_shared_esm_bundler["h" /* extend */])({}, props);
        }
        let { class: klass, style } = props;
        if (klass && !Object(dist_shared_esm_bundler["x" /* isString */])(klass)) {
            props.class = Object(dist_shared_esm_bundler["z" /* normalizeClass */])(klass);
        }
        if (Object(dist_shared_esm_bundler["s" /* isObject */])(style)) {
            // reactive state objects need to be cloned since they are likely to be
            // mutated
            if (isProxy(style) && !Object(dist_shared_esm_bundler["n" /* isArray */])(style)) {
                style = Object(dist_shared_esm_bundler["h" /* extend */])({}, style);
            }
            props.style = Object(dist_shared_esm_bundler["A" /* normalizeStyle */])(style);
        }
    }
    // encode the vnode type information into a bitmap
    const shapeFlag = Object(dist_shared_esm_bundler["x" /* isString */])(type)
        ? 1 /* ELEMENT */
        :  isSuspense(type)
            ? 128 /* SUSPENSE */
            : isTeleport(type)
                ? 64 /* TELEPORT */
                : Object(dist_shared_esm_bundler["s" /* isObject */])(type)
                    ? 4 /* STATEFUL_COMPONENT */
                    : Object(dist_shared_esm_bundler["o" /* isFunction */])(type)
                        ? 2 /* FUNCTIONAL_COMPONENT */
                        : 0;
    if (false) {}
    const vnode = {
        __v_isVNode: true,
        ["__v_skip" /* SKIP */]: true,
        type,
        props,
        key: props && normalizeKey(props),
        ref: props && normalizeRef(props),
        scopeId: currentScopeId,
        children: null,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag,
        patchFlag,
        dynamicProps,
        dynamicChildren: null,
        appContext: null
    };
    // validate key
    if (false) {}
    normalizeChildren(vnode, children);
    // normalize suspense children
    if ( shapeFlag & 128 /* SUSPENSE */) {
        const { content, fallback } = normalizeSuspenseChildren(vnode);
        vnode.ssContent = content;
        vnode.ssFallback = fallback;
    }
    if (runtime_core_esm_bundler_shouldTrack > 0 &&
        // avoid a block node from tracking itself
        !isBlockNode &&
        // has current parent block
        currentBlock &&
        // presence of a patch flag indicates this node needs patching on updates.
        // component nodes also should always be patched, because even if the
        // component doesn't need to update, it needs to persist the instance on to
        // the next vnode so that it can be properly unmounted later.
        (patchFlag > 0 || shapeFlag & 6 /* COMPONENT */) &&
        // the EVENTS flag is only for hydration and if it is the only flag, the
        // vnode should not be considered dynamic due to handler caching.
        patchFlag !== 32 /* HYDRATE_EVENTS */) {
        currentBlock.push(vnode);
    }
    return vnode;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
    // This is intentionally NOT using spread or extend to avoid the runtime
    // key enumeration cost.
    const { props, ref, patchFlag } = vnode;
    const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
    return {
        __v_isVNode: true,
        ["__v_skip" /* SKIP */]: true,
        type: vnode.type,
        props: mergedProps,
        key: mergedProps && normalizeKey(mergedProps),
        ref: extraProps && extraProps.ref
            ? // #2078 in the case of <component :is="vnode" ref="extra"/>
                // if the vnode itself already has a ref, cloneVNode will need to merge
                // the refs so the single vnode can be set on multiple refs
                mergeRef && ref
                    ? Object(dist_shared_esm_bundler["n" /* isArray */])(ref)
                        ? ref.concat(normalizeRef(extraProps))
                        : [ref, normalizeRef(extraProps)]
                    : normalizeRef(extraProps)
            : ref,
        scopeId: vnode.scopeId,
        children: vnode.children,
        target: vnode.target,
        targetAnchor: vnode.targetAnchor,
        staticCount: vnode.staticCount,
        shapeFlag: vnode.shapeFlag,
        // if the vnode is cloned with extra props, we can no longer assume its
        // existing patch flag to be reliable and need to add the FULL_PROPS flag.
        // note: perserve flag for fragments since they use the flag for children
        // fast paths only.
        patchFlag: extraProps && vnode.type !== Fragment
            ? patchFlag === -1 // hoisted node
                ? 16 /* FULL_PROPS */
                : patchFlag | 16 /* FULL_PROPS */
            : patchFlag,
        dynamicProps: vnode.dynamicProps,
        dynamicChildren: vnode.dynamicChildren,
        appContext: vnode.appContext,
        dirs: vnode.dirs,
        transition: vnode.transition,
        // These should technically only be non-null on mounted VNodes. However,
        // they *should* be copied for kept-alive vnodes. So we just always copy
        // them since them being non-null during a mount doesn't affect the logic as
        // they will simply be overwritten.
        component: vnode.component,
        suspense: vnode.suspense,
        ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
        ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
        el: vnode.el,
        anchor: vnode.anchor
    };
}
/**
 * @private
 */
function createTextVNode(text = ' ', flag = 0) {
    return createVNode(Text, null, text, flag);
}
/**
 * @private
 */
function createStaticVNode(content, numberOfNodes) {
    // A static vnode can contain multiple stringified elements, and the number
    // of elements is necessary for hydration.
    const vnode = createVNode(Static, null, content);
    vnode.staticCount = numberOfNodes;
    return vnode;
}
/**
 * @private
 */
function createCommentVNode(text = '', 
// when used as the v-else branch, the comment node must be created as a
// block to ensure correct updates.
asBlock = false) {
    return asBlock
        ? (openBlock(), createBlock(Comment, null, text))
        : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
    if (child == null || typeof child === 'boolean') {
        // empty placeholder
        return createVNode(Comment);
    }
    else if (Object(dist_shared_esm_bundler["n" /* isArray */])(child)) {
        // fragment
        return createVNode(Fragment, null, child);
    }
    else if (typeof child === 'object') {
        // already vnode, this should be the most common since compiled templates
        // always produce all-vnode children arrays
        return child.el === null ? child : cloneVNode(child);
    }
    else {
        // strings and numbers
        return createVNode(Text, null, String(child));
    }
}
// optimized normalization for template-compiled render fns
function cloneIfMounted(child) {
    return child.el === null ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
    let type = 0;
    const { shapeFlag } = vnode;
    if (children == null) {
        children = null;
    }
    else if (Object(dist_shared_esm_bundler["n" /* isArray */])(children)) {
        type = 16 /* ARRAY_CHILDREN */;
    }
    else if (typeof children === 'object') {
        if (shapeFlag & 1 /* ELEMENT */ || shapeFlag & 64 /* TELEPORT */) {
            // Normalize slot to plain children for plain element and Teleport
            const slot = children.default;
            if (slot) {
                // _c marker is added by withCtx() indicating this is a compiled slot
                slot._c && setCompiledSlotRendering(1);
                normalizeChildren(vnode, slot());
                slot._c && setCompiledSlotRendering(-1);
            }
            return;
        }
        else {
            type = 32 /* SLOTS_CHILDREN */;
            const slotFlag = children._;
            if (!slotFlag && !(InternalObjectKey in children)) {
                children._ctx = currentRenderingInstance;
            }
            else if (slotFlag === 3 /* FORWARDED */ && currentRenderingInstance) {
                // a child component receives forwarded slots from the parent.
                // its slot type is determined by its parent's slot type.
                if (currentRenderingInstance.vnode.patchFlag & 1024 /* DYNAMIC_SLOTS */) {
                    children._ = 2 /* DYNAMIC */;
                    vnode.patchFlag |= 1024 /* DYNAMIC_SLOTS */;
                }
                else {
                    children._ = 1 /* STABLE */;
                }
            }
        }
    }
    else if (Object(dist_shared_esm_bundler["o" /* isFunction */])(children)) {
        children = { default: children, _ctx: currentRenderingInstance };
        type = 32 /* SLOTS_CHILDREN */;
    }
    else {
        children = String(children);
        // force teleport children to array so it can be moved around
        if (shapeFlag & 64 /* TELEPORT */) {
            type = 16 /* ARRAY_CHILDREN */;
            children = [createTextVNode(children)];
        }
        else {
            type = 8 /* TEXT_CHILDREN */;
        }
    }
    vnode.children = children;
    vnode.shapeFlag |= type;
}
function mergeProps(...args) {
    const ret = Object(dist_shared_esm_bundler["h" /* extend */])({}, args[0]);
    for (let i = 1; i < args.length; i++) {
        const toMerge = args[i];
        for (const key in toMerge) {
            if (key === 'class') {
                if (ret.class !== toMerge.class) {
                    ret.class = Object(dist_shared_esm_bundler["z" /* normalizeClass */])([ret.class, toMerge.class]);
                }
            }
            else if (key === 'style') {
                ret.style = Object(dist_shared_esm_bundler["A" /* normalizeStyle */])([ret.style, toMerge.style]);
            }
            else if (Object(dist_shared_esm_bundler["t" /* isOn */])(key)) {
                const existing = ret[key];
                const incoming = toMerge[key];
                if (existing !== incoming) {
                    ret[key] = existing
                        ? [].concat(existing, toMerge[key])
                        : incoming;
                }
            }
            else if (key !== '') {
                ret[key] = toMerge[key];
            }
        }
    }
    return ret;
}

function provide(key, value) {
    if (!currentInstance) {
        if ((false)) {}
    }
    else {
        let provides = currentInstance.provides;
        // by default an instance inherits its parent's provides object
        // but when it needs to provide values of its own, it creates its
        // own provides object using parent provides object as prototype.
        // this way in `inject` we can simply look up injections from direct
        // parent and let the prototype chain do the work.
        const parentProvides = currentInstance.parent && currentInstance.parent.provides;
        if (parentProvides === provides) {
            provides = currentInstance.provides = Object.create(parentProvides);
        }
        // TS doesn't allow symbol as index type
        provides[key] = value;
    }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
    // fallback to `currentRenderingInstance` so that this can be called in
    // a functional component
    const instance = currentInstance || currentRenderingInstance;
    if (instance) {
        // #2400
        // to support `app.use` plugins,
        // fallback to appContext's `provides` if the intance is at root
        const provides = instance.parent == null
            ? instance.vnode.appContext && instance.vnode.appContext.provides
            : instance.parent.provides;
        if (provides && key in provides) {
            // TS doesn't allow symbol as index type
            return provides[key];
        }
        else if (arguments.length > 1) {
            return treatDefaultAsFactory && Object(dist_shared_esm_bundler["o" /* isFunction */])(defaultValue)
                ? defaultValue()
                : defaultValue;
        }
        else if ((false)) {}
    }
    else if ((false)) {}
}

function createDuplicateChecker() {
    const cache = Object.create(null);
    return (type, key) => {
        if (cache[key]) {
            warn(`${type} property "${key}" is already defined in ${cache[key]}.`);
        }
        else {
            cache[key] = type;
        }
    };
}
let isInBeforeCreate = false;
function applyOptions(instance, options, deferredData = [], deferredWatch = [], deferredProvide = [], asMixin = false) {
    const { 
    // composition
    mixins, extends: extendsOptions, 
    // state
    data: dataOptions, computed: computedOptions, methods, watch: watchOptions, provide: provideOptions, inject: injectOptions, 
    // assets
    components, directives, 
    // lifecycle
    beforeMount, mounted, beforeUpdate, updated, activated, deactivated, beforeDestroy, beforeUnmount, destroyed, unmounted, render, renderTracked, renderTriggered, errorCaptured, 
    // public API
    expose } = options;
    const publicThis = instance.proxy;
    const ctx = instance.ctx;
    const globalMixins = instance.appContext.mixins;
    if (asMixin && render && instance.render === dist_shared_esm_bundler["d" /* NOOP */]) {
        instance.render = render;
    }
    // applyOptions is called non-as-mixin once per instance
    if (!asMixin) {
        isInBeforeCreate = true;
        callSyncHook('beforeCreate', "bc" /* BEFORE_CREATE */, options, instance, globalMixins);
        isInBeforeCreate = false;
        // global mixins are applied first
        applyMixins(instance, globalMixins, deferredData, deferredWatch, deferredProvide);
    }
    // extending a base component...
    if (extendsOptions) {
        applyOptions(instance, extendsOptions, deferredData, deferredWatch, deferredProvide, true);
    }
    // local mixins
    if (mixins) {
        applyMixins(instance, mixins, deferredData, deferredWatch, deferredProvide);
    }
    const checkDuplicateProperties = ( false) ? undefined : null;
    if ((false)) {}
    // options initialization order (to be consistent with Vue 2):
    // - props (already done outside of this function)
    // - inject
    // - methods
    // - data (deferred since it relies on `this` access)
    // - computed
    // - watch (deferred since it relies on `this` access)
    if (injectOptions) {
        if (Object(dist_shared_esm_bundler["n" /* isArray */])(injectOptions)) {
            for (let i = 0; i < injectOptions.length; i++) {
                const key = injectOptions[i];
                ctx[key] = inject(key);
                if ((false)) {}
            }
        }
        else {
            for (const key in injectOptions) {
                const opt = injectOptions[key];
                if (Object(dist_shared_esm_bundler["s" /* isObject */])(opt)) {
                    ctx[key] = inject(opt.from || key, opt.default, true /* treat default function as factory */);
                }
                else {
                    ctx[key] = inject(opt);
                }
                if ((false)) {}
            }
        }
    }
    if (methods) {
        for (const key in methods) {
            const methodHandler = methods[key];
            if (Object(dist_shared_esm_bundler["o" /* isFunction */])(methodHandler)) {
                ctx[key] = methodHandler.bind(publicThis);
                if ((false)) {}
            }
            else if ((false)) {}
        }
    }
    if (!asMixin) {
        if (deferredData.length) {
            deferredData.forEach(dataFn => resolveData(instance, dataFn, publicThis));
        }
        if (dataOptions) {
            // @ts-ignore dataOptions is not fully type safe
            resolveData(instance, dataOptions, publicThis);
        }
        if ((false)) {}
    }
    else if (dataOptions) {
        deferredData.push(dataOptions);
    }
    if (computedOptions) {
        for (const key in computedOptions) {
            const opt = computedOptions[key];
            const get = Object(dist_shared_esm_bundler["o" /* isFunction */])(opt)
                ? opt.bind(publicThis, publicThis)
                : Object(dist_shared_esm_bundler["o" /* isFunction */])(opt.get)
                    ? opt.get.bind(publicThis, publicThis)
                    : dist_shared_esm_bundler["d" /* NOOP */];
            if (false) {}
            const set = !Object(dist_shared_esm_bundler["o" /* isFunction */])(opt) && Object(dist_shared_esm_bundler["o" /* isFunction */])(opt.set)
                ? opt.set.bind(publicThis)
                : ( false)
                    ? undefined
                    : dist_shared_esm_bundler["d" /* NOOP */];
            const c = runtime_core_esm_bundler_computed({
                get,
                set
            });
            Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: () => c.value,
                set: v => (c.value = v)
            });
            if ((false)) {}
        }
    }
    if (watchOptions) {
        deferredWatch.push(watchOptions);
    }
    if (!asMixin && deferredWatch.length) {
        deferredWatch.forEach(watchOptions => {
            for (const key in watchOptions) {
                createWatcher(watchOptions[key], ctx, publicThis, key);
            }
        });
    }
    if (provideOptions) {
        deferredProvide.push(provideOptions);
    }
    if (!asMixin && deferredProvide.length) {
        deferredProvide.forEach(provideOptions => {
            const provides = Object(dist_shared_esm_bundler["o" /* isFunction */])(provideOptions)
                ? provideOptions.call(publicThis)
                : provideOptions;
            Reflect.ownKeys(provides).forEach(key => {
                provide(key, provides[key]);
            });
        });
    }
    // asset options.
    // To reduce memory usage, only components with mixins or extends will have
    // resolved asset registry attached to instance.
    if (asMixin) {
        if (components) {
            Object(dist_shared_esm_bundler["h" /* extend */])(instance.components ||
                (instance.components = Object(dist_shared_esm_bundler["h" /* extend */])({}, instance.type.components)), components);
        }
        if (directives) {
            Object(dist_shared_esm_bundler["h" /* extend */])(instance.directives ||
                (instance.directives = Object(dist_shared_esm_bundler["h" /* extend */])({}, instance.type.directives)), directives);
        }
    }
    // lifecycle options
    if (!asMixin) {
        callSyncHook('created', "c" /* CREATED */, options, instance, globalMixins);
    }
    if (beforeMount) {
        onBeforeMount(beforeMount.bind(publicThis));
    }
    if (mounted) {
        onMounted(mounted.bind(publicThis));
    }
    if (beforeUpdate) {
        onBeforeUpdate(beforeUpdate.bind(publicThis));
    }
    if (updated) {
        onUpdated(updated.bind(publicThis));
    }
    if (activated) {
        onActivated(activated.bind(publicThis));
    }
    if (deactivated) {
        onDeactivated(deactivated.bind(publicThis));
    }
    if (errorCaptured) {
        onErrorCaptured(errorCaptured.bind(publicThis));
    }
    if (renderTracked) {
        onRenderTracked(renderTracked.bind(publicThis));
    }
    if (renderTriggered) {
        onRenderTriggered(renderTriggered.bind(publicThis));
    }
    if (false) {}
    if (beforeUnmount) {
        onBeforeUnmount(beforeUnmount.bind(publicThis));
    }
    if (false) {}
    if (unmounted) {
        onUnmounted(unmounted.bind(publicThis));
    }
    if (Object(dist_shared_esm_bundler["n" /* isArray */])(expose)) {
        if (!asMixin) {
            if (expose.length) {
                const exposed = instance.exposed || (instance.exposed = proxyRefs({}));
                expose.forEach(key => {
                    exposed[key] = toRef(publicThis, key);
                });
            }
            else if (!instance.exposed) {
                instance.exposed = dist_shared_esm_bundler["b" /* EMPTY_OBJ */];
            }
        }
        else if ((false)) {}
    }
}
function callSyncHook(name, type, options, instance, globalMixins) {
    callHookFromMixins(name, type, globalMixins, instance);
    const { extends: base, mixins } = options;
    if (base) {
        callHookFromExtends(name, type, base, instance);
    }
    if (mixins) {
        callHookFromMixins(name, type, mixins, instance);
    }
    const selfHook = options[name];
    if (selfHook) {
        callWithAsyncErrorHandling(selfHook.bind(instance.proxy), instance, type);
    }
}
function callHookFromExtends(name, type, base, instance) {
    if (base.extends) {
        callHookFromExtends(name, type, base.extends, instance);
    }
    const baseHook = base[name];
    if (baseHook) {
        callWithAsyncErrorHandling(baseHook.bind(instance.proxy), instance, type);
    }
}
function callHookFromMixins(name, type, mixins, instance) {
    for (let i = 0; i < mixins.length; i++) {
        const chainedMixins = mixins[i].mixins;
        if (chainedMixins) {
            callHookFromMixins(name, type, chainedMixins, instance);
        }
        const fn = mixins[i][name];
        if (fn) {
            callWithAsyncErrorHandling(fn.bind(instance.proxy), instance, type);
        }
    }
}
function applyMixins(instance, mixins, deferredData, deferredWatch, deferredProvide) {
    for (let i = 0; i < mixins.length; i++) {
        applyOptions(instance, mixins[i], deferredData, deferredWatch, deferredProvide, true);
    }
}
function resolveData(instance, dataFn, publicThis) {
    if (false) {}
    const data = dataFn.call(publicThis, publicThis);
    if (false) {}
    if (!Object(dist_shared_esm_bundler["s" /* isObject */])(data)) {
        ( false) && false;
    }
    else if (instance.data === dist_shared_esm_bundler["b" /* EMPTY_OBJ */]) {
        instance.data = reactive(data);
    }
    else {
        // existing data: this is a mixin or extends.
        Object(dist_shared_esm_bundler["h" /* extend */])(instance.data, data);
    }
}
function createWatcher(raw, ctx, publicThis, key) {
    const getter = key.includes('.')
        ? createPathGetter(publicThis, key)
        : () => publicThis[key];
    if (Object(dist_shared_esm_bundler["x" /* isString */])(raw)) {
        const handler = ctx[raw];
        if (Object(dist_shared_esm_bundler["o" /* isFunction */])(handler)) {
            watch(getter, handler);
        }
        else if ((false)) {}
    }
    else if (Object(dist_shared_esm_bundler["o" /* isFunction */])(raw)) {
        watch(getter, raw.bind(publicThis));
    }
    else if (Object(dist_shared_esm_bundler["s" /* isObject */])(raw)) {
        if (Object(dist_shared_esm_bundler["n" /* isArray */])(raw)) {
            raw.forEach(r => createWatcher(r, ctx, publicThis, key));
        }
        else {
            const handler = Object(dist_shared_esm_bundler["o" /* isFunction */])(raw.handler)
                ? raw.handler.bind(publicThis)
                : ctx[raw.handler];
            if (Object(dist_shared_esm_bundler["o" /* isFunction */])(handler)) {
                watch(getter, handler, raw);
            }
            else if ((false)) {}
        }
    }
    else if ((false)) {}
}
function createPathGetter(ctx, path) {
    const segments = path.split('.');
    return () => {
        let cur = ctx;
        for (let i = 0; i < segments.length && cur; i++) {
            cur = cur[segments[i]];
        }
        return cur;
    };
}
function resolveMergedOptions(instance) {
    const raw = instance.type;
    const { __merged, mixins, extends: extendsOptions } = raw;
    if (__merged)
        return __merged;
    const globalMixins = instance.appContext.mixins;
    if (!globalMixins.length && !mixins && !extendsOptions)
        return raw;
    const options = {};
    globalMixins.forEach(m => mergeOptions(options, m, instance));
    mergeOptions(options, raw, instance);
    return (raw.__merged = options);
}
function mergeOptions(to, from, instance) {
    const strats = instance.appContext.config.optionMergeStrategies;
    const { mixins, extends: extendsOptions } = from;
    extendsOptions && mergeOptions(to, extendsOptions, instance);
    mixins &&
        mixins.forEach((m) => mergeOptions(to, m, instance));
    for (const key in from) {
        if (strats && Object(dist_shared_esm_bundler["k" /* hasOwn */])(strats, key)) {
            to[key] = strats[key](to[key], from[key], instance.proxy, key);
        }
        else {
            to[key] = from[key];
        }
    }
}

/**
 * #2437 In Vue 3, functional components do not have a public instance proxy but
 * they exist in the internal parent chain. For code that relies on traversing
 * public $parent chains, skip functional ones and go to the parent instead.
 */
const getPublicInstance = (i) => i && (i.proxy ? i.proxy : getPublicInstance(i.parent));
const publicPropertiesMap = Object(dist_shared_esm_bundler["h" /* extend */])(Object.create(null), {
    $: i => i,
    $el: i => i.vnode.el,
    $data: i => i.data,
    $props: i => (( false) ? undefined : i.props),
    $attrs: i => (( false) ? undefined : i.attrs),
    $slots: i => (( false) ? undefined : i.slots),
    $refs: i => (( false) ? undefined : i.refs),
    $parent: i => getPublicInstance(i.parent),
    $root: i => i.root && i.root.proxy,
    $emit: i => i.emit,
    $options: i => (__VUE_OPTIONS_API__ ? resolveMergedOptions(i) : i.type),
    $forceUpdate: i => () => queueJob(i.update),
    $nextTick: i => nextTick.bind(i.proxy),
    $watch: i => (__VUE_OPTIONS_API__ ? instanceWatch.bind(i) : dist_shared_esm_bundler["d" /* NOOP */])
});
const PublicInstanceProxyHandlers = {
    get({ _: instance }, key) {
        const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
        // let @vue/reactivity know it should never observe Vue public instances.
        if (key === "__v_skip" /* SKIP */) {
            return true;
        }
        // for internal formatters to know that this is a Vue instance
        if (false) {}
        // data / props / ctx
        // This getter gets called for every property access on the render context
        // during render and is a major hotspot. The most expensive part of this
        // is the multiple hasOwn() calls. It's much faster to do a simple property
        // access on a plain object, so we use an accessCache object (with null
        // prototype) to memoize what access type a key corresponds to.
        let normalizedProps;
        if (key[0] !== '$') {
            const n = accessCache[key];
            if (n !== undefined) {
                switch (n) {
                    case 0 /* SETUP */:
                        return setupState[key];
                    case 1 /* DATA */:
                        return data[key];
                    case 3 /* CONTEXT */:
                        return ctx[key];
                    case 2 /* PROPS */:
                        return props[key];
                    // default: just fallthrough
                }
            }
            else if (setupState !== dist_shared_esm_bundler["b" /* EMPTY_OBJ */] && Object(dist_shared_esm_bundler["k" /* hasOwn */])(setupState, key)) {
                accessCache[key] = 0 /* SETUP */;
                return setupState[key];
            }
            else if (data !== dist_shared_esm_bundler["b" /* EMPTY_OBJ */] && Object(dist_shared_esm_bundler["k" /* hasOwn */])(data, key)) {
                accessCache[key] = 1 /* DATA */;
                return data[key];
            }
            else if (
            // only cache other properties when instance has declared (thus stable)
            // props
            (normalizedProps = instance.propsOptions[0]) &&
                Object(dist_shared_esm_bundler["k" /* hasOwn */])(normalizedProps, key)) {
                accessCache[key] = 2 /* PROPS */;
                return props[key];
            }
            else if (ctx !== dist_shared_esm_bundler["b" /* EMPTY_OBJ */] && Object(dist_shared_esm_bundler["k" /* hasOwn */])(ctx, key)) {
                accessCache[key] = 3 /* CONTEXT */;
                return ctx[key];
            }
            else if (!__VUE_OPTIONS_API__ || !isInBeforeCreate) {
                accessCache[key] = 4 /* OTHER */;
            }
        }
        const publicGetter = publicPropertiesMap[key];
        let cssModule, globalProperties;
        // public $xxx properties
        if (publicGetter) {
            if (key === '$attrs') {
                track(instance, "get" /* GET */, key);
                ( false) && false;
            }
            return publicGetter(instance);
        }
        else if (
        // css module (injected by vue-loader)
        (cssModule = type.__cssModules) &&
            (cssModule = cssModule[key])) {
            return cssModule;
        }
        else if (ctx !== dist_shared_esm_bundler["b" /* EMPTY_OBJ */] && Object(dist_shared_esm_bundler["k" /* hasOwn */])(ctx, key)) {
            // user may set custom properties to `this` that start with `$`
            accessCache[key] = 3 /* CONTEXT */;
            return ctx[key];
        }
        else if (
        // global properties
        ((globalProperties = appContext.config.globalProperties),
            Object(dist_shared_esm_bundler["k" /* hasOwn */])(globalProperties, key))) {
            return globalProperties[key];
        }
        else if (false) {}
    },
    set({ _: instance }, key, value) {
        const { data, setupState, ctx } = instance;
        if (setupState !== dist_shared_esm_bundler["b" /* EMPTY_OBJ */] && Object(dist_shared_esm_bundler["k" /* hasOwn */])(setupState, key)) {
            setupState[key] = value;
        }
        else if (data !== dist_shared_esm_bundler["b" /* EMPTY_OBJ */] && Object(dist_shared_esm_bundler["k" /* hasOwn */])(data, key)) {
            data[key] = value;
        }
        else if (key in instance.props) {
            ( false) &&
                false;
            return false;
        }
        if (key[0] === '$' && key.slice(1) in instance) {
            ( false) &&
                false;
            return false;
        }
        else {
            if (false) {}
            else {
                ctx[key] = value;
            }
        }
        return true;
    },
    has({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
        let normalizedProps;
        return (accessCache[key] !== undefined ||
            (data !== dist_shared_esm_bundler["b" /* EMPTY_OBJ */] && Object(dist_shared_esm_bundler["k" /* hasOwn */])(data, key)) ||
            (setupState !== dist_shared_esm_bundler["b" /* EMPTY_OBJ */] && Object(dist_shared_esm_bundler["k" /* hasOwn */])(setupState, key)) ||
            ((normalizedProps = propsOptions[0]) && Object(dist_shared_esm_bundler["k" /* hasOwn */])(normalizedProps, key)) ||
            Object(dist_shared_esm_bundler["k" /* hasOwn */])(ctx, key) ||
            Object(dist_shared_esm_bundler["k" /* hasOwn */])(publicPropertiesMap, key) ||
            Object(dist_shared_esm_bundler["k" /* hasOwn */])(appContext.config.globalProperties, key));
    }
};
if (false) {}
const RuntimeCompiledPublicInstanceProxyHandlers = Object(dist_shared_esm_bundler["h" /* extend */])({}, PublicInstanceProxyHandlers, {
    get(target, key) {
        // fast path for unscopables when using `with` block
        if (key === Symbol.unscopables) {
            return;
        }
        return PublicInstanceProxyHandlers.get(target, key, target);
    },
    has(_, key) {
        const has = key[0] !== '_' && !Object(dist_shared_esm_bundler["p" /* isGloballyWhitelisted */])(key);
        if (false) {}
        return has;
    }
});
// In dev mode, the proxy target exposes the same properties as seen on `this`
// for easier console inspection. In prod mode it will be an empty object so
// these properties definitions can be skipped.
function createRenderContext(instance) {
    const target = {};
    // expose internal instance for proxy handlers
    Object.defineProperty(target, `_`, {
        configurable: true,
        enumerable: false,
        get: () => instance
    });
    // expose public properties
    Object.keys(publicPropertiesMap).forEach(key => {
        Object.defineProperty(target, key, {
            configurable: true,
            enumerable: false,
            get: () => publicPropertiesMap[key](instance),
            // intercepted by the proxy so no need for implementation,
            // but needed to prevent set errors
            set: dist_shared_esm_bundler["d" /* NOOP */]
        });
    });
    // expose global properties
    const { globalProperties } = instance.appContext.config;
    Object.keys(globalProperties).forEach(key => {
        Object.defineProperty(target, key, {
            configurable: true,
            enumerable: false,
            get: () => globalProperties[key],
            set: dist_shared_esm_bundler["d" /* NOOP */]
        });
    });
    return target;
}
// dev only
function exposePropsOnRenderContext(instance) {
    const { ctx, propsOptions: [propsOptions] } = instance;
    if (propsOptions) {
        Object.keys(propsOptions).forEach(key => {
            Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: () => instance.props[key],
                set: dist_shared_esm_bundler["d" /* NOOP */]
            });
        });
    }
}
// dev only
function exposeSetupStateOnRenderContext(instance) {
    const { ctx, setupState } = instance;
    Object.keys(toRaw(setupState)).forEach(key => {
        if (key[0] === '$' || key[0] === '_') {
            warn(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" ` +
                `which are reserved prefixes for Vue internals.`);
            return;
        }
        Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: () => setupState[key],
            set: dist_shared_esm_bundler["d" /* NOOP */]
        });
    });
}

const emptyAppContext = createAppContext();
let uid$1 = 0;
function createComponentInstance(vnode, parent, suspense) {
    const type = vnode.type;
    // inherit parent app context - or - if root, adopt from root vnode
    const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
    const instance = {
        uid: uid$1++,
        vnode,
        type,
        parent,
        appContext,
        root: null,
        next: null,
        subTree: null,
        update: null,
        render: null,
        proxy: null,
        exposed: null,
        withProxy: null,
        effects: null,
        provides: parent ? parent.provides : Object.create(appContext.provides),
        accessCache: null,
        renderCache: [],
        // local resovled assets
        components: null,
        directives: null,
        // resolved props and emits options
        propsOptions: normalizePropsOptions(type, appContext),
        emitsOptions: normalizeEmitsOptions(type, appContext),
        // emit
        emit: null,
        emitted: null,
        // state
        ctx: dist_shared_esm_bundler["b" /* EMPTY_OBJ */],
        data: dist_shared_esm_bundler["b" /* EMPTY_OBJ */],
        props: dist_shared_esm_bundler["b" /* EMPTY_OBJ */],
        attrs: dist_shared_esm_bundler["b" /* EMPTY_OBJ */],
        slots: dist_shared_esm_bundler["b" /* EMPTY_OBJ */],
        refs: dist_shared_esm_bundler["b" /* EMPTY_OBJ */],
        setupState: dist_shared_esm_bundler["b" /* EMPTY_OBJ */],
        setupContext: null,
        // suspense related
        suspense,
        suspenseId: suspense ? suspense.pendingId : 0,
        asyncDep: null,
        asyncResolved: false,
        // lifecycle hooks
        // not using enums here because it results in computed properties
        isMounted: false,
        isUnmounted: false,
        isDeactivated: false,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null
    };
    if ((false)) {}
    else {
        instance.ctx = { _: instance };
    }
    instance.root = parent ? parent.root : instance;
    instance.emit = runtime_core_esm_bundler_emit.bind(null, instance);
    if (( false) || __VUE_PROD_DEVTOOLS__) {
        devtoolsComponentAdded(instance);
    }
    return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
const setCurrentInstance = (instance) => {
    currentInstance = instance;
};
const isBuiltInTag = /*#__PURE__*/ Object(dist_shared_esm_bundler["y" /* makeMap */])('slot,component');
function validateComponentName(name, config) {
    const appIsNativeTag = config.isNativeTag || dist_shared_esm_bundler["c" /* NO */];
    if (isBuiltInTag(name) || appIsNativeTag(name)) {
        warn('Do not use built-in or reserved HTML elements as component id: ' + name);
    }
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
    isInSSRComponentSetup = isSSR;
    const { props, children, shapeFlag } = instance.vnode;
    const isStateful = shapeFlag & 4 /* STATEFUL_COMPONENT */;
    initProps(instance, props, isStateful, isSSR);
    initSlots(instance, children);
    const setupResult = isStateful
        ? setupStatefulComponent(instance, isSSR)
        : undefined;
    isInSSRComponentSetup = false;
    return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
    const Component = instance.type;
    if ((false)) {}
    // 0. create render proxy property access cache
    instance.accessCache = Object.create(null);
    // 1. create public instance / render proxy
    // also mark it raw so it's never observed
    instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
    if ((false)) {}
    // 2. call setup()
    const { setup } = Component;
    if (setup) {
        const setupContext = (instance.setupContext =
            setup.length > 1 ? createSetupContext(instance) : null);
        currentInstance = instance;
        pauseTracking();
        const setupResult = callWithErrorHandling(setup, instance, 0 /* SETUP_FUNCTION */, [( false) ? undefined : instance.props, setupContext]);
        resetTracking();
        currentInstance = null;
        if (Object(dist_shared_esm_bundler["u" /* isPromise */])(setupResult)) {
            if (isSSR) {
                // return the promise so server-renderer can wait on it
                return setupResult.then((resolvedResult) => {
                    handleSetupResult(instance, resolvedResult);
                });
            }
            else {
                // async setup returned Promise.
                // bail here and wait for re-entry.
                instance.asyncDep = setupResult;
            }
        }
        else {
            handleSetupResult(instance, setupResult);
        }
    }
    else {
        finishComponentSetup(instance);
    }
}
function handleSetupResult(instance, setupResult, isSSR) {
    if (Object(dist_shared_esm_bundler["o" /* isFunction */])(setupResult)) {
        // setup returned an inline render function
        {
            instance.render = setupResult;
        }
    }
    else if (Object(dist_shared_esm_bundler["s" /* isObject */])(setupResult)) {
        if (false) {}
        // setup returned bindings.
        // assuming a render function compiled from template is present.
        if (( false) || __VUE_PROD_DEVTOOLS__) {
            instance.devtoolsRawSetupState = setupResult;
        }
        instance.setupState = proxyRefs(setupResult);
        if ((false)) {}
    }
    else if (false) {}
    finishComponentSetup(instance);
}
let compile;
/**
 * For runtime-dom to register the compiler.
 * Note the exported method uses any to avoid d.ts relying on the compiler types.
 */
function registerRuntimeCompiler(_compile) {
    compile = _compile;
}
function finishComponentSetup(instance, isSSR) {
    const Component = instance.type;
    // template / render function normalization
    if (!instance.render) {
        // could be set from setup()
        if (compile && Component.template && !Component.render) {
            if ((false)) {}
            Component.render = compile(Component.template, {
                isCustomElement: instance.appContext.config.isCustomElement,
                delimiters: Component.delimiters
            });
            if ((false)) {}
        }
        instance.render = (Component.render || dist_shared_esm_bundler["d" /* NOOP */]);
        // for runtime-compiled render functions using `with` blocks, the render
        // proxy used needs a different `has` handler which is more performant and
        // also only allows a whitelist of globals to fallthrough.
        if (instance.render._rc) {
            instance.withProxy = new Proxy(instance.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
        }
    }
    // support for 2.x options
    if (__VUE_OPTIONS_API__) {
        currentInstance = instance;
        pauseTracking();
        applyOptions(instance, Component);
        resetTracking();
        currentInstance = null;
    }
    // warn missing template/render
    if (false) {}
}
const attrHandlers = {
    get: (target, key) => {
        if ((false)) {}
        return target[key];
    },
    set: () => {
        warn(`setupContext.attrs is readonly.`);
        return false;
    },
    deleteProperty: () => {
        warn(`setupContext.attrs is readonly.`);
        return false;
    }
};
function createSetupContext(instance) {
    const expose = exposed => {
        if (false) {}
        instance.exposed = proxyRefs(exposed);
    };
    if ((false)) {}
    else {
        return {
            attrs: instance.attrs,
            slots: instance.slots,
            emit: instance.emit,
            expose
        };
    }
}
// record effects created during a component's setup() so that they can be
// stopped when the component unmounts
function recordInstanceBoundEffect(effect, instance = currentInstance) {
    if (instance) {
        (instance.effects || (instance.effects = [])).push(effect);
    }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, c => c.toUpperCase()).replace(/[-_]/g, '');
function getComponentName(Component) {
    return Object(dist_shared_esm_bundler["o" /* isFunction */])(Component)
        ? Component.displayName || Component.name
        : Component.name;
}
/* istanbul ignore next */
function formatComponentName(instance, Component, isRoot = false) {
    let name = getComponentName(Component);
    if (!name && Component.__file) {
        const match = Component.__file.match(/([^/\\]+)\.\w+$/);
        if (match) {
            name = match[1];
        }
    }
    if (!name && instance && instance.parent) {
        // try to infer the name based on reverse resolution
        const inferFromRegistry = (registry) => {
            for (const key in registry) {
                if (registry[key] === Component) {
                    return key;
                }
            }
        };
        name =
            inferFromRegistry(instance.components ||
                instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
    }
    return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
    return Object(dist_shared_esm_bundler["o" /* isFunction */])(value) && '__vccOpts' in value;
}

function runtime_core_esm_bundler_computed(getterOrOptions) {
    const c = reactivity_esm_bundler_computed(getterOrOptions);
    recordInstanceBoundEffect(c.effect);
    return c;
}

// implementation
function defineProps() {
    if ((false)) {}
    return null;
}
// implementation
function defineEmit() {
    if ((false)) {}
    return null;
}
function useContext() {
    const i = getCurrentInstance();
    if (false) {}
    return i.setupContext || (i.setupContext = createSetupContext(i));
}

// Actual implementation
function h(type, propsOrChildren, children) {
    const l = arguments.length;
    if (l === 2) {
        if (Object(dist_shared_esm_bundler["s" /* isObject */])(propsOrChildren) && !Object(dist_shared_esm_bundler["n" /* isArray */])(propsOrChildren)) {
            // single vnode without props
            if (isVNode(propsOrChildren)) {
                return createVNode(type, null, [propsOrChildren]);
            }
            // props without children
            return createVNode(type, propsOrChildren);
        }
        else {
            // omit props
            return createVNode(type, null, propsOrChildren);
        }
    }
    else {
        if (l > 3) {
            children = Array.prototype.slice.call(arguments, 2);
        }
        else if (l === 3 && isVNode(children)) {
            children = [children];
        }
        return createVNode(type, propsOrChildren, children);
    }
}

const ssrContextKey = Symbol(( false) ? undefined : ``);
const useSSRContext = () => {
    {
        const ctx = inject(ssrContextKey);
        if (!ctx) {
            warn(`Server rendering context not provided. Make sure to only call ` +
                `useSsrContext() conditionally in the server build.`);
        }
        return ctx;
    }
};

function initCustomFormatter() {
    /* eslint-disable no-restricted-globals */
    if (true) {
        return;
    }
    const vueStyle = { style: 'color:#3ba776' };
    const numberStyle = { style: 'color:#0b1bc9' };
    const stringStyle = { style: 'color:#b62e24' };
    const keywordStyle = { style: 'color:#9d288c' };
    // custom formatter for Chrome
    // https://www.mattzeunert.com/2016/02/19/custom-chrome-devtools-object-formatters.html
    const formatter = {
        header(obj) {
            // TODO also format ComponentPublicInstance & ctx.slots/attrs in setup
            if (!Object(dist_shared_esm_bundler["s" /* isObject */])(obj)) {
                return null;
            }
            if (obj.__isVue) {
                return ['div', vueStyle, `VueInstance`];
            }
            else if (isRef(obj)) {
                return [
                    'div',
                    {},
                    ['span', vueStyle, genRefFlag(obj)],
                    '<',
                    formatValue(obj.value),
                    `>`
                ];
            }
            else if (isReactive(obj)) {
                return [
                    'div',
                    {},
                    ['span', vueStyle, 'Reactive'],
                    '<',
                    formatValue(obj),
                    `>${reactivity_esm_bundler_isReadonly(obj) ? ` (readonly)` : ``}`
                ];
            }
            else if (reactivity_esm_bundler_isReadonly(obj)) {
                return [
                    'div',
                    {},
                    ['span', vueStyle, 'Readonly'],
                    '<',
                    formatValue(obj),
                    '>'
                ];
            }
            return null;
        },
        hasBody(obj) {
            return obj && obj.__isVue;
        },
        body(obj) {
            if (obj && obj.__isVue) {
                return [
                    'div',
                    {},
                    ...formatInstance(obj.$)
                ];
            }
        }
    };
    function formatInstance(instance) {
        const blocks = [];
        if (instance.type.props && instance.props) {
            blocks.push(createInstanceBlock('props', toRaw(instance.props)));
        }
        if (instance.setupState !== dist_shared_esm_bundler["b" /* EMPTY_OBJ */]) {
            blocks.push(createInstanceBlock('setup', instance.setupState));
        }
        if (instance.data !== dist_shared_esm_bundler["b" /* EMPTY_OBJ */]) {
            blocks.push(createInstanceBlock('data', toRaw(instance.data)));
        }
        const computed = extractKeys(instance, 'computed');
        if (computed) {
            blocks.push(createInstanceBlock('computed', computed));
        }
        const injected = extractKeys(instance, 'inject');
        if (injected) {
            blocks.push(createInstanceBlock('injected', injected));
        }
        blocks.push([
            'div',
            {},
            [
                'span',
                {
                    style: keywordStyle.style + ';opacity:0.66'
                },
                '$ (internal): '
            ],
            ['object', { object: instance }]
        ]);
        return blocks;
    }
    function createInstanceBlock(type, target) {
        target = Object(dist_shared_esm_bundler["h" /* extend */])({}, target);
        if (!Object.keys(target).length) {
            return ['span', {}];
        }
        return [
            'div',
            { style: 'line-height:1.25em;margin-bottom:0.6em' },
            [
                'div',
                {
                    style: 'color:#476582'
                },
                type
            ],
            [
                'div',
                {
                    style: 'padding-left:1.25em'
                },
                ...Object.keys(target).map(key => {
                    return [
                        'div',
                        {},
                        ['span', keywordStyle, key + ': '],
                        formatValue(target[key], false)
                    ];
                })
            ]
        ];
    }
    function formatValue(v, asRaw = true) {
        if (typeof v === 'number') {
            return ['span', numberStyle, v];
        }
        else if (typeof v === 'string') {
            return ['span', stringStyle, JSON.stringify(v)];
        }
        else if (typeof v === 'boolean') {
            return ['span', keywordStyle, v];
        }
        else if (Object(dist_shared_esm_bundler["s" /* isObject */])(v)) {
            return ['object', { object: asRaw ? toRaw(v) : v }];
        }
        else {
            return ['span', stringStyle, String(v)];
        }
    }
    function extractKeys(instance, type) {
        const Comp = instance.type;
        if (Object(dist_shared_esm_bundler["o" /* isFunction */])(Comp)) {
            return;
        }
        const extracted = {};
        for (const key in instance.ctx) {
            if (isKeyOfType(Comp, key, type)) {
                extracted[key] = instance.ctx[key];
            }
        }
        return extracted;
    }
    function isKeyOfType(Comp, key, type) {
        const opts = Comp[type];
        if ((Object(dist_shared_esm_bundler["n" /* isArray */])(opts) && opts.includes(key)) ||
            (Object(dist_shared_esm_bundler["s" /* isObject */])(opts) && key in opts)) {
            return true;
        }
        if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
            return true;
        }
        if (Comp.mixins && Comp.mixins.some(m => isKeyOfType(m, key, type))) {
            return true;
        }
    }
    function genRefFlag(v) {
        if (v._shallow) {
            return `ShallowRef`;
        }
        if (v.effect) {
            return `ComputedRef`;
        }
        return `Ref`;
    }
    if (window.devtoolsFormatters) {
        window.devtoolsFormatters.push(formatter);
    }
    else {
        window.devtoolsFormatters = [formatter];
    }
}

/**
 * Actual implementation
 */
function renderList(source, renderItem) {
    let ret;
    if (Object(dist_shared_esm_bundler["n" /* isArray */])(source) || Object(dist_shared_esm_bundler["x" /* isString */])(source)) {
        ret = new Array(source.length);
        for (let i = 0, l = source.length; i < l; i++) {
            ret[i] = renderItem(source[i], i);
        }
    }
    else if (typeof source === 'number') {
        if (false) {}
        ret = new Array(source);
        for (let i = 0; i < source; i++) {
            ret[i] = renderItem(i + 1, i);
        }
    }
    else if (Object(dist_shared_esm_bundler["s" /* isObject */])(source)) {
        if (source[Symbol.iterator]) {
            ret = Array.from(source, renderItem);
        }
        else {
            const keys = Object.keys(source);
            ret = new Array(keys.length);
            for (let i = 0, l = keys.length; i < l; i++) {
                const key = keys[i];
                ret[i] = renderItem(source[key], key, i);
            }
        }
    }
    else {
        ret = [];
    }
    return ret;
}

/**
 * For prefixing keys in v-on="obj" with "on"
 * @private
 */
function toHandlers(obj) {
    const ret = {};
    if (false) {}
    for (const key in obj) {
        ret[Object(dist_shared_esm_bundler["C" /* toHandlerKey */])(key)] = obj[key];
    }
    return ret;
}

/**
 * Compiler runtime helper for creating dynamic slots object
 * @private
 */
function createSlots(slots, dynamicSlots) {
    for (let i = 0; i < dynamicSlots.length; i++) {
        const slot = dynamicSlots[i];
        // array of dynamic slot generated by <template v-for="..." #[...]>
        if (Object(dist_shared_esm_bundler["n" /* isArray */])(slot)) {
            for (let j = 0; j < slot.length; j++) {
                slots[slot[j].name] = slot[j].fn;
            }
        }
        else if (slot) {
            // conditional single slot generated by <template v-if="..." #foo>
            slots[slot.name] = slot.fn;
        }
    }
    return slots;
}

// Core API ------------------------------------------------------------------
const version = "3.0.5";
/**
 * SSR utils for \@vue/server-renderer. Only exposed in cjs builds.
 * @internal
 */
const ssrUtils = ( null);



// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_dist_shared_esm_bundler = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js




const svgNS = 'http://www.w3.org/2000/svg';
const doc = (typeof document !== 'undefined' ? document : null);
let tempContainer;
let tempSVGContainer;
const nodeOps = {
    insert: (child, parent, anchor) => {
        parent.insertBefore(child, anchor || null);
    },
    remove: child => {
        const parent = child.parentNode;
        if (parent) {
            parent.removeChild(child);
        }
    },
    createElement: (tag, isSVG, is) => isSVG
        ? doc.createElementNS(svgNS, tag)
        : doc.createElement(tag, is ? { is } : undefined),
    createText: text => doc.createTextNode(text),
    createComment: text => doc.createComment(text),
    setText: (node, text) => {
        node.nodeValue = text;
    },
    setElementText: (el, text) => {
        el.textContent = text;
    },
    parentNode: node => node.parentNode,
    nextSibling: node => node.nextSibling,
    querySelector: selector => doc.querySelector(selector),
    setScopeId(el, id) {
        el.setAttribute(id, '');
    },
    cloneNode(el) {
        return el.cloneNode(true);
    },
    // __UNSAFE__
    // Reason: innerHTML.
    // Static content here can only come from compiled templates.
    // As long as the user only uses trusted templates, this is safe.
    insertStaticContent(content, parent, anchor, isSVG) {
        const temp = isSVG
            ? tempSVGContainer ||
                (tempSVGContainer = doc.createElementNS(svgNS, 'svg'))
            : tempContainer || (tempContainer = doc.createElement('div'));
        temp.innerHTML = content;
        const first = temp.firstChild;
        let node = first;
        let last = node;
        while (node) {
            last = node;
            nodeOps.insert(node, parent, anchor);
            node = temp.firstChild;
        }
        return [first, last];
    }
};

// compiler should normalize class + :class bindings on the same element
// into a single binding ['staticClass', dynamic]
function patchClass(el, value, isSVG) {
    if (value == null) {
        value = '';
    }
    if (isSVG) {
        el.setAttribute('class', value);
    }
    else {
        // directly setting className should be faster than setAttribute in theory
        // if this is an element during a transition, take the temporary transition
        // classes into account.
        const transitionClasses = el._vtc;
        if (transitionClasses) {
            value = (value
                ? [value, ...transitionClasses]
                : [...transitionClasses]).join(' ');
        }
        el.className = value;
    }
}

function patchStyle(el, prev, next) {
    const style = el.style;
    if (!next) {
        el.removeAttribute('style');
    }
    else if (Object(shared_dist_shared_esm_bundler["o" /* isString */])(next)) {
        if (prev !== next) {
            style.cssText = next;
        }
    }
    else {
        for (const key in next) {
            setStyle(style, key, next[key]);
        }
        if (prev && !Object(shared_dist_shared_esm_bundler["o" /* isString */])(prev)) {
            for (const key in prev) {
                if (next[key] == null) {
                    setStyle(style, key, '');
                }
            }
        }
    }
}
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
    if (Object(shared_dist_shared_esm_bundler["f" /* isArray */])(val)) {
        val.forEach(v => setStyle(style, name, v));
    }
    else {
        if (name.startsWith('--')) {
            // custom property definition
            style.setProperty(name, val);
        }
        else {
            const prefixed = autoPrefix(style, name);
            if (importantRE.test(val)) {
                // !important
                style.setProperty(Object(shared_dist_shared_esm_bundler["d" /* hyphenate */])(prefixed), val.replace(importantRE, ''), 'important');
            }
            else {
                style[prefixed] = val;
            }
        }
    }
}
const prefixes = ['Webkit', 'Moz', 'ms'];
const prefixCache = {};
function autoPrefix(style, rawName) {
    const cached = prefixCache[rawName];
    if (cached) {
        return cached;
    }
    let name = Object(dist_shared_esm_bundler["e" /* camelize */])(rawName);
    if (name !== 'filter' && name in style) {
        return (prefixCache[rawName] = name);
    }
    name = Object(shared_dist_shared_esm_bundler["b" /* capitalize */])(name);
    for (let i = 0; i < prefixes.length; i++) {
        const prefixed = prefixes[i] + name;
        if (prefixed in style) {
            return (prefixCache[rawName] = prefixed);
        }
    }
    return rawName;
}

const xlinkNS = 'http://www.w3.org/1999/xlink';
function patchAttr(el, key, value, isSVG) {
    if (isSVG && key.startsWith('xlink:')) {
        if (value == null) {
            el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
        }
        else {
            el.setAttributeNS(xlinkNS, key, value);
        }
    }
    else {
        // note we are only checking boolean attributes that don't have a
        // corresponding dom prop of the same name here.
        const isBoolean = Object(shared_dist_shared_esm_bundler["n" /* isSpecialBooleanAttr */])(key);
        if (value == null || (isBoolean && value === false)) {
            el.removeAttribute(key);
        }
        else {
            el.setAttribute(key, isBoolean ? '' : value);
        }
    }
}

// __UNSAFE__
// functions. The user is responsible for using them with only trusted content.
function patchDOMProp(el, key, value, 
// the following args are passed only due to potential innerHTML/textContent
// overriding existing VNodes, in which case the old tree must be properly
// unmounted.
prevChildren, parentComponent, parentSuspense, unmountChildren) {
    if (key === 'innerHTML' || key === 'textContent') {
        if (prevChildren) {
            unmountChildren(prevChildren, parentComponent, parentSuspense);
        }
        el[key] = value == null ? '' : value;
        return;
    }
    if (key === 'value' && el.tagName !== 'PROGRESS') {
        // store value as _value as well since
        // non-string values will be stringified.
        el._value = value;
        const newValue = value == null ? '' : value;
        if (el.value !== newValue) {
            el.value = newValue;
        }
        return;
    }
    if (value === '' || value == null) {
        const type = typeof el[key];
        if (value === '' && type === 'boolean') {
            // e.g. <select multiple> compiles to { multiple: '' }
            el[key] = true;
            return;
        }
        else if (value == null && type === 'string') {
            // e.g. <div :id="null">
            el[key] = '';
            el.removeAttribute(key);
            return;
        }
        else if (type === 'number') {
            // e.g. <img :width="null">
            el[key] = 0;
            el.removeAttribute(key);
            return;
        }
    }
    // some properties perform value validation and throw
    try {
        el[key] = value;
    }
    catch (e) {
        if ((false)) {}
    }
}

// Async edge case fix requires storing an event listener's attach timestamp.
let _getNow = Date.now;
// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
if (typeof document !== 'undefined' &&
    _getNow() > document.createEvent('Event').timeStamp) {
    // if the low-res timestamp which is bigger than the event timestamp
    // (which is evaluated AFTER) it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listeners as well.
    _getNow = () => performance.now();
}
// To avoid the overhead of repeatedly calling performance.now(), we cache
// and use the same timestamp for all event listeners attached in the same tick.
let cachedNow = 0;
const runtime_dom_esm_bundler_p = Promise.resolve();
const runtime_dom_esm_bundler_reset = () => {
    cachedNow = 0;
};
const getNow = () => cachedNow || (runtime_dom_esm_bundler_p.then(runtime_dom_esm_bundler_reset), (cachedNow = _getNow()));
function addEventListener(el, event, handler, options) {
    el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
    el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
    // vei = vue event invokers
    const invokers = el._vei || (el._vei = {});
    const existingInvoker = invokers[rawName];
    if (nextValue && existingInvoker) {
        // patch
        existingInvoker.value = nextValue;
    }
    else {
        const [name, options] = parseName(rawName);
        if (nextValue) {
            // add
            const invoker = (invokers[rawName] = createInvoker(nextValue, instance));
            addEventListener(el, name, invoker, options);
        }
        else if (existingInvoker) {
            // remove
            removeEventListener(el, name, existingInvoker, options);
            invokers[rawName] = undefined;
        }
    }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
    let options;
    if (optionsModifierRE.test(name)) {
        options = {};
        let m;
        while ((m = name.match(optionsModifierRE))) {
            name = name.slice(0, name.length - m[0].length);
            options[m[0].toLowerCase()] = true;
        }
    }
    return [name.slice(2).toLowerCase(), options];
}
function createInvoker(initialValue, instance) {
    const invoker = (e) => {
        // async edge case #6566: inner click event triggers patch, event handler
        // attached to outer element during patch, and triggered again. This
        // happens because browsers fire microtask ticks between event propagation.
        // the solution is simple: we save the timestamp when a handler is attached,
        // and the handler would only fire if the event passed to it was fired
        // AFTER it was attached.
        const timeStamp = e.timeStamp || _getNow();
        if (timeStamp >= invoker.attached - 1) {
            callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5 /* NATIVE_EVENT_HANDLER */, [e]);
        }
    };
    invoker.value = initialValue;
    invoker.attached = getNow();
    return invoker;
}
function patchStopImmediatePropagation(e, value) {
    if (Object(shared_dist_shared_esm_bundler["f" /* isArray */])(value)) {
        const originalStop = e.stopImmediatePropagation;
        e.stopImmediatePropagation = () => {
            originalStop.call(e);
            e._stopped = true;
        };
        return value.map(fn => (e) => !e._stopped && fn(e));
    }
    else {
        return value;
    }
}

const nativeOnRE = /^on[a-z]/;
const forcePatchProp = (_, key) => key === 'value';
const runtime_dom_esm_bundler_patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
    switch (key) {
        // special
        case 'class':
            patchClass(el, nextValue, isSVG);
            break;
        case 'style':
            patchStyle(el, prevValue, nextValue);
            break;
        default:
            if (Object(shared_dist_shared_esm_bundler["k" /* isOn */])(key)) {
                // ignore v-model listeners
                if (!Object(shared_dist_shared_esm_bundler["i" /* isModelListener */])(key)) {
                    patchEvent(el, key, prevValue, nextValue, parentComponent);
                }
            }
            else if (shouldSetAsProp(el, key, nextValue, isSVG)) {
                patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
            }
            else {
                // special case for <input v-model type="checkbox"> with
                // :true-value & :false-value
                // store value as dom properties since non-string values will be
                // stringified.
                if (key === 'true-value') {
                    el._trueValue = nextValue;
                }
                else if (key === 'false-value') {
                    el._falseValue = nextValue;
                }
                patchAttr(el, key, nextValue, isSVG);
            }
            break;
    }
};
function shouldSetAsProp(el, key, value, isSVG) {
    if (isSVG) {
        // most keys must be set as attribute on svg elements to work
        // ...except innerHTML
        if (key === 'innerHTML') {
            return true;
        }
        // or native onclick with function values
        if (key in el && nativeOnRE.test(key) && Object(shared_dist_shared_esm_bundler["g" /* isFunction */])(value)) {
            return true;
        }
        return false;
    }
    // spellcheck and draggable are numerated attrs, however their
    // corresponding DOM properties are actually booleans - this leads to
    // setting it with a string "false" value leading it to be coerced to
    // `true`, so we need to always treat them as attributes.
    // Note that `contentEditable` doesn't have this problem: its DOM
    // property is also enumerated string values.
    if (key === 'spellcheck' || key === 'draggable') {
        return false;
    }
    // #1787 form as an attribute must be a string, while it accepts an Element as
    // a prop
    if (key === 'form' && typeof value === 'string') {
        return false;
    }
    // #1526 <input list> must be set as attribute
    if (key === 'list' && el.tagName === 'INPUT') {
        return false;
    }
    // native onclick with string value, must be set as attribute
    if (nativeOnRE.test(key) && Object(shared_dist_shared_esm_bundler["o" /* isString */])(value)) {
        return false;
    }
    return key in el;
}

function useCssModule(name = '$style') {
    /* istanbul ignore else */
    {
        const instance = getCurrentInstance();
        if (!instance) {
            ( false) && false;
            return shared_dist_shared_esm_bundler["a" /* EMPTY_OBJ */];
        }
        const modules = instance.type.__cssModules;
        if (!modules) {
            ( false) && false;
            return shared_dist_shared_esm_bundler["a" /* EMPTY_OBJ */];
        }
        const mod = modules[name];
        if (!mod) {
            ( false) &&
                false;
            return shared_dist_shared_esm_bundler["a" /* EMPTY_OBJ */];
        }
        return mod;
    }
}

/**
 * Runtime helper for SFC's CSS variable injection feature.
 * @private
 */
function useCssVars(getter) {
    const instance = getCurrentInstance();
    /* istanbul ignore next */
    if (!instance) {
        ( false) &&
            false;
        return;
    }
    const setVars = () => setVarsOnVNode(instance.subTree, getter(instance.proxy));
    onMounted(() => watchEffect(setVars, { flush: 'post' }));
    onUpdated(setVars);
}
function setVarsOnVNode(vnode, vars) {
    if ( vnode.shapeFlag & 128 /* SUSPENSE */) {
        const suspense = vnode.suspense;
        vnode = suspense.activeBranch;
        if (suspense.pendingBranch && !suspense.isHydrating) {
            suspense.effects.push(() => {
                setVarsOnVNode(suspense.activeBranch, vars);
            });
        }
    }
    // drill down HOCs until it's a non-component vnode
    while (vnode.component) {
        vnode = vnode.component.subTree;
    }
    if (vnode.shapeFlag & 1 /* ELEMENT */ && vnode.el) {
        const style = vnode.el.style;
        for (const key in vars) {
            style.setProperty(`--${key}`, vars[key]);
        }
    }
    else if (vnode.type === Fragment) {
        vnode.children.forEach(c => setVarsOnVNode(c, vars));
    }
}

const TRANSITION = 'transition';
const ANIMATION = 'animation';
// DOM Transition is a higher-order-component based on the platform-agnostic
// base Transition component, with DOM-specific logic.
const Transition = (props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots);
Transition.displayName = 'Transition';
const DOMTransitionPropsValidators = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: true
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
const TransitionPropsValidators = (Transition.props = /*#__PURE__*/ Object(shared_dist_shared_esm_bundler["c" /* extend */])({}, BaseTransition.props, DOMTransitionPropsValidators));
function resolveTransitionProps(rawProps) {
    let { name = 'v', type, css = true, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
    const baseProps = {};
    for (const key in rawProps) {
        if (!(key in DOMTransitionPropsValidators)) {
            baseProps[key] = rawProps[key];
        }
    }
    if (!css) {
        return baseProps;
    }
    const durations = normalizeDuration(duration);
    const enterDuration = durations && durations[0];
    const leaveDuration = durations && durations[1];
    const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
    const finishEnter = (el, isAppear, done) => {
        removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
        removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
        done && done();
    };
    const finishLeave = (el, done) => {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
        done && done();
    };
    const makeEnterHook = (isAppear) => {
        return (el, done) => {
            const hook = isAppear ? onAppear : onEnter;
            const resolve = () => finishEnter(el, isAppear, done);
            hook && hook(el, resolve);
            nextFrame(() => {
                removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
                addTransitionClass(el, isAppear ? appearToClass : enterToClass);
                if (!(hook && hook.length > 1)) {
                    whenTransitionEnds(el, type, enterDuration, resolve);
                }
            });
        };
    };
    return Object(shared_dist_shared_esm_bundler["c" /* extend */])(baseProps, {
        onBeforeEnter(el) {
            onBeforeEnter && onBeforeEnter(el);
            addTransitionClass(el, enterFromClass);
            addTransitionClass(el, enterActiveClass);
        },
        onBeforeAppear(el) {
            onBeforeAppear && onBeforeAppear(el);
            addTransitionClass(el, appearFromClass);
            addTransitionClass(el, appearActiveClass);
        },
        onEnter: makeEnterHook(false),
        onAppear: makeEnterHook(true),
        onLeave(el, done) {
            const resolve = () => finishLeave(el, done);
            addTransitionClass(el, leaveFromClass);
            // force reflow so *-leave-from classes immediately take effect (#2593)
            forceReflow();
            addTransitionClass(el, leaveActiveClass);
            nextFrame(() => {
                removeTransitionClass(el, leaveFromClass);
                addTransitionClass(el, leaveToClass);
                if (!(onLeave && onLeave.length > 1)) {
                    whenTransitionEnds(el, type, leaveDuration, resolve);
                }
            });
            onLeave && onLeave(el, resolve);
        },
        onEnterCancelled(el) {
            finishEnter(el, false);
            onEnterCancelled && onEnterCancelled(el);
        },
        onAppearCancelled(el) {
            finishEnter(el, true);
            onAppearCancelled && onAppearCancelled(el);
        },
        onLeaveCancelled(el) {
            finishLeave(el);
            onLeaveCancelled && onLeaveCancelled(el);
        }
    });
}
function normalizeDuration(duration) {
    if (duration == null) {
        return null;
    }
    else if (Object(shared_dist_shared_esm_bundler["j" /* isObject */])(duration)) {
        return [NumberOf(duration.enter), NumberOf(duration.leave)];
    }
    else {
        const n = NumberOf(duration);
        return [n, n];
    }
}
function NumberOf(val) {
    const res = Object(shared_dist_shared_esm_bundler["r" /* toNumber */])(val);
    if ((false))
        {}
    return res;
}
function validateDuration(val) {
    if (typeof val !== 'number') {
        warn(`<transition> explicit duration is not a valid number - ` +
            `got ${JSON.stringify(val)}.`);
    }
    else if (isNaN(val)) {
        warn(`<transition> explicit duration is NaN - ` +
            'the duration expression might be incorrect.');
    }
}
function addTransitionClass(el, cls) {
    cls.split(/\s+/).forEach(c => c && el.classList.add(c));
    (el._vtc ||
        (el._vtc = new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
    cls.split(/\s+/).forEach(c => c && el.classList.remove(c));
    const { _vtc } = el;
    if (_vtc) {
        _vtc.delete(cls);
        if (!_vtc.size) {
            el._vtc = undefined;
        }
    }
}
function nextFrame(cb) {
    requestAnimationFrame(() => {
        requestAnimationFrame(cb);
    });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
    const id = (el._endId = ++endId);
    const resolveIfNotStale = () => {
        if (id === el._endId) {
            resolve();
        }
    };
    if (explicitTimeout) {
        return setTimeout(resolveIfNotStale, explicitTimeout);
    }
    const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
    if (!type) {
        return resolve();
    }
    const endEvent = type + 'end';
    let ended = 0;
    const end = () => {
        el.removeEventListener(endEvent, onEnd);
        resolveIfNotStale();
    };
    const onEnd = (e) => {
        if (e.target === el && ++ended >= propCount) {
            end();
        }
    };
    setTimeout(() => {
        if (ended < propCount) {
            end();
        }
    }, timeout + 1);
    el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
    const styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    const getStyleProperties = (key) => (styles[key] || '').split(', ');
    const transitionDelays = getStyleProperties(TRANSITION + 'Delay');
    const transitionDurations = getStyleProperties(TRANSITION + 'Duration');
    const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    const animationDelays = getStyleProperties(ANIMATION + 'Delay');
    const animationDurations = getStyleProperties(ANIMATION + 'Duration');
    const animationTimeout = getTimeout(animationDelays, animationDurations);
    let type = null;
    let timeout = 0;
    let propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
            type = TRANSITION;
            timeout = transitionTimeout;
            propCount = transitionDurations.length;
        }
    }
    else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
            type = ANIMATION;
            timeout = animationTimeout;
            propCount = animationDurations.length;
        }
    }
    else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type =
            timeout > 0
                ? transitionTimeout > animationTimeout
                    ? TRANSITION
                    : ANIMATION
                : null;
        propCount = type
            ? type === TRANSITION
                ? transitionDurations.length
                : animationDurations.length
            : 0;
    }
    const hasTransform = type === TRANSITION &&
        /\b(transform|all)(,|$)/.test(styles[TRANSITION + 'Property']);
    return {
        type,
        timeout,
        propCount,
        hasTransform
    };
}
function getTimeout(delays, durations) {
    while (delays.length < durations.length) {
        delays = delays.concat(delays);
    }
    return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}
// Old versions of Chromium (below 61.0.3163.100) formats floating pointer
// numbers in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down
// (i.e. acting as a floor function) causing unexpected behaviors
function toMs(s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000;
}
// synchronously force layout to put elements into a certain state
function forceReflow() {
    return document.body.offsetHeight;
}

const positionMap = new WeakMap();
const newPositionMap = new WeakMap();
const TransitionGroupImpl = {
    name: 'TransitionGroup',
    props: /*#__PURE__*/ Object(shared_dist_shared_esm_bundler["c" /* extend */])({}, TransitionPropsValidators, {
        tag: String,
        moveClass: String
    }),
    setup(props, { slots }) {
        const instance = getCurrentInstance();
        const state = useTransitionState();
        let prevChildren;
        let children;
        onUpdated(() => {
            // children is guaranteed to exist after initial render
            if (!prevChildren.length) {
                return;
            }
            const moveClass = props.moveClass || `${props.name || 'v'}-move`;
            if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
                return;
            }
            // we divide the work into three loops to avoid mixing DOM reads and writes
            // in each iteration - which helps prevent layout thrashing.
            prevChildren.forEach(callPendingCbs);
            prevChildren.forEach(recordPosition);
            const movedChildren = prevChildren.filter(applyTranslation);
            // force reflow to put everything in position
            forceReflow();
            movedChildren.forEach(c => {
                const el = c.el;
                const style = el.style;
                addTransitionClass(el, moveClass);
                style.transform = style.webkitTransform = style.transitionDuration = '';
                const cb = (el._moveCb = (e) => {
                    if (e && e.target !== el) {
                        return;
                    }
                    if (!e || /transform$/.test(e.propertyName)) {
                        el.removeEventListener('transitionend', cb);
                        el._moveCb = null;
                        removeTransitionClass(el, moveClass);
                    }
                });
                el.addEventListener('transitionend', cb);
            });
        });
        return () => {
            const rawProps = toRaw(props);
            const cssTransitionProps = resolveTransitionProps(rawProps);
            const tag = rawProps.tag || Fragment;
            prevChildren = children;
            children = slots.default ? getTransitionRawChildren(slots.default()) : [];
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                if (child.key != null) {
                    setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
                }
                else if ((false)) {}
            }
            if (prevChildren) {
                for (let i = 0; i < prevChildren.length; i++) {
                    const child = prevChildren[i];
                    setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
                    positionMap.set(child, child.el.getBoundingClientRect());
                }
            }
            return createVNode(tag, null, children);
        };
    }
};
const TransitionGroup = TransitionGroupImpl;
function callPendingCbs(c) {
    const el = c.el;
    if (el._moveCb) {
        el._moveCb();
    }
    if (el._enterCb) {
        el._enterCb();
    }
}
function recordPosition(c) {
    newPositionMap.set(c, c.el.getBoundingClientRect());
}
function applyTranslation(c) {
    const oldPos = positionMap.get(c);
    const newPos = newPositionMap.get(c);
    const dx = oldPos.left - newPos.left;
    const dy = oldPos.top - newPos.top;
    if (dx || dy) {
        const s = c.el.style;
        s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
        s.transitionDuration = '0s';
        return c;
    }
}
function hasCSSTransform(el, root, moveClass) {
    // Detect whether an element with the move class applied has
    // CSS transitions. Since the element may be inside an entering
    // transition at this very moment, we make a clone of it and remove
    // all other transition classes applied to ensure only the move class
    // is applied.
    const clone = el.cloneNode();
    if (el._vtc) {
        el._vtc.forEach(cls => {
            cls.split(/\s+/).forEach(c => c && clone.classList.remove(c));
        });
    }
    moveClass.split(/\s+/).forEach(c => c && clone.classList.add(c));
    clone.style.display = 'none';
    const container = (root.nodeType === 1
        ? root
        : root.parentNode);
    container.appendChild(clone);
    const { hasTransform } = getTransitionInfo(clone);
    container.removeChild(clone);
    return hasTransform;
}

const getModelAssigner = (vnode) => {
    const fn = vnode.props['onUpdate:modelValue'];
    return Object(shared_dist_shared_esm_bundler["f" /* isArray */])(fn) ? value => Object(shared_dist_shared_esm_bundler["e" /* invokeArrayFns */])(fn, value) : fn;
};
function onCompositionStart(e) {
    e.target.composing = true;
}
function onCompositionEnd(e) {
    const target = e.target;
    if (target.composing) {
        target.composing = false;
        runtime_dom_esm_bundler_trigger(target, 'input');
    }
}
function runtime_dom_esm_bundler_trigger(el, type) {
    const e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
}
// We are exporting the v-model runtime directly as vnode hooks so that it can
// be tree-shaken in case v-model is never used.
const vModelText = {
    created(el, { modifiers: { lazy, trim, number } }, vnode) {
        el._assign = getModelAssigner(vnode);
        const castToNumber = number || el.type === 'number';
        addEventListener(el, lazy ? 'change' : 'input', e => {
            if (e.target.composing)
                return;
            let domValue = el.value;
            if (trim) {
                domValue = domValue.trim();
            }
            else if (castToNumber) {
                domValue = Object(shared_dist_shared_esm_bundler["r" /* toNumber */])(domValue);
            }
            el._assign(domValue);
        });
        if (trim) {
            addEventListener(el, 'change', () => {
                el.value = el.value.trim();
            });
        }
        if (!lazy) {
            addEventListener(el, 'compositionstart', onCompositionStart);
            addEventListener(el, 'compositionend', onCompositionEnd);
            // Safari < 10.2 & UIWebView doesn't fire compositionend when
            // switching focus before confirming composition choice
            // this also fixes the issue where some browsers e.g. iOS Chrome
            // fires "change" instead of "input" on autocomplete.
            addEventListener(el, 'change', onCompositionEnd);
        }
    },
    // set value on mounted so it's after min/max for type="range"
    mounted(el, { value }) {
        el.value = value == null ? '' : value;
    },
    beforeUpdate(el, { value, modifiers: { trim, number } }, vnode) {
        el._assign = getModelAssigner(vnode);
        // avoid clearing unresolved text. #2302
        if (el.composing)
            return;
        if (document.activeElement === el) {
            if (trim && el.value.trim() === value) {
                return;
            }
            if ((number || el.type === 'number') && Object(shared_dist_shared_esm_bundler["r" /* toNumber */])(el.value) === value) {
                return;
            }
        }
        const newValue = value == null ? '' : value;
        if (el.value !== newValue) {
            el.value = newValue;
        }
    }
};
const vModelCheckbox = {
    created(el, _, vnode) {
        el._assign = getModelAssigner(vnode);
        addEventListener(el, 'change', () => {
            const modelValue = el._modelValue;
            const elementValue = getValue(el);
            const checked = el.checked;
            const assign = el._assign;
            if (Object(shared_dist_shared_esm_bundler["f" /* isArray */])(modelValue)) {
                const index = Object(shared_dist_shared_esm_bundler["q" /* looseIndexOf */])(modelValue, elementValue);
                const found = index !== -1;
                if (checked && !found) {
                    assign(modelValue.concat(elementValue));
                }
                else if (!checked && found) {
                    const filtered = [...modelValue];
                    filtered.splice(index, 1);
                    assign(filtered);
                }
            }
            else if (Object(shared_dist_shared_esm_bundler["m" /* isSet */])(modelValue)) {
                const cloned = new Set(modelValue);
                if (checked) {
                    cloned.add(elementValue);
                }
                else {
                    cloned.delete(elementValue);
                }
                assign(cloned);
            }
            else {
                assign(getCheckboxValue(el, checked));
            }
        });
    },
    // set initial checked on mount to wait for true-value/false-value
    mounted: setChecked,
    beforeUpdate(el, binding, vnode) {
        el._assign = getModelAssigner(vnode);
        setChecked(el, binding, vnode);
    }
};
function setChecked(el, { value, oldValue }, vnode) {
    el._modelValue = value;
    if (Object(shared_dist_shared_esm_bundler["f" /* isArray */])(value)) {
        el.checked = Object(shared_dist_shared_esm_bundler["q" /* looseIndexOf */])(value, vnode.props.value) > -1;
    }
    else if (Object(shared_dist_shared_esm_bundler["m" /* isSet */])(value)) {
        el.checked = value.has(vnode.props.value);
    }
    else if (value !== oldValue) {
        el.checked = Object(shared_dist_shared_esm_bundler["p" /* looseEqual */])(value, getCheckboxValue(el, true));
    }
}
const vModelRadio = {
    created(el, { value }, vnode) {
        el.checked = Object(shared_dist_shared_esm_bundler["p" /* looseEqual */])(value, vnode.props.value);
        el._assign = getModelAssigner(vnode);
        addEventListener(el, 'change', () => {
            el._assign(getValue(el));
        });
    },
    beforeUpdate(el, { value, oldValue }, vnode) {
        el._assign = getModelAssigner(vnode);
        if (value !== oldValue) {
            el.checked = Object(shared_dist_shared_esm_bundler["p" /* looseEqual */])(value, vnode.props.value);
        }
    }
};
const vModelSelect = {
    created(el, { value, modifiers: { number } }, vnode) {
        const isSetModel = Object(shared_dist_shared_esm_bundler["m" /* isSet */])(value);
        addEventListener(el, 'change', () => {
            const selectedVal = Array.prototype.filter
                .call(el.options, (o) => o.selected)
                .map((o) => number ? Object(shared_dist_shared_esm_bundler["r" /* toNumber */])(getValue(o)) : getValue(o));
            el._assign(el.multiple
                ? isSetModel
                    ? new Set(selectedVal)
                    : selectedVal
                : selectedVal[0]);
        });
        el._assign = getModelAssigner(vnode);
    },
    // set value in mounted & updated because <select> relies on its children
    // <option>s.
    mounted(el, { value }) {
        setSelected(el, value);
    },
    beforeUpdate(el, _binding, vnode) {
        el._assign = getModelAssigner(vnode);
    },
    updated(el, { value }) {
        setSelected(el, value);
    }
};
function setSelected(el, value) {
    const isMultiple = el.multiple;
    if (isMultiple && !Object(shared_dist_shared_esm_bundler["f" /* isArray */])(value) && !Object(shared_dist_shared_esm_bundler["m" /* isSet */])(value)) {
        ( false) &&
            false;
        return;
    }
    for (let i = 0, l = el.options.length; i < l; i++) {
        const option = el.options[i];
        const optionValue = getValue(option);
        if (isMultiple) {
            if (Object(shared_dist_shared_esm_bundler["f" /* isArray */])(value)) {
                option.selected = Object(shared_dist_shared_esm_bundler["q" /* looseIndexOf */])(value, optionValue) > -1;
            }
            else {
                option.selected = value.has(optionValue);
            }
        }
        else {
            if (Object(shared_dist_shared_esm_bundler["p" /* looseEqual */])(getValue(option), value)) {
                el.selectedIndex = i;
                return;
            }
        }
    }
    if (!isMultiple) {
        el.selectedIndex = -1;
    }
}
// retrieve raw value set via :value bindings
function getValue(el) {
    return '_value' in el ? el._value : el.value;
}
// retrieve raw value for true-value and false-value set via :true-value or :false-value bindings
function getCheckboxValue(el, checked) {
    const key = checked ? '_trueValue' : '_falseValue';
    return key in el ? el[key] : checked;
}
const vModelDynamic = {
    created(el, binding, vnode) {
        callModelHook(el, binding, vnode, null, 'created');
    },
    mounted(el, binding, vnode) {
        callModelHook(el, binding, vnode, null, 'mounted');
    },
    beforeUpdate(el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, 'beforeUpdate');
    },
    updated(el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, 'updated');
    }
};
function callModelHook(el, binding, vnode, prevVNode, hook) {
    let modelToUse;
    switch (el.tagName) {
        case 'SELECT':
            modelToUse = vModelSelect;
            break;
        case 'TEXTAREA':
            modelToUse = vModelText;
            break;
        default:
            switch (vnode.props && vnode.props.type) {
                case 'checkbox':
                    modelToUse = vModelCheckbox;
                    break;
                case 'radio':
                    modelToUse = vModelRadio;
                    break;
                default:
                    modelToUse = vModelText;
            }
    }
    const fn = modelToUse[hook];
    fn && fn(el, binding, vnode, prevVNode);
}

const systemModifiers = ['ctrl', 'shift', 'alt', 'meta'];
const modifierGuards = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => 'button' in e && e.button !== 0,
    middle: e => 'button' in e && e.button !== 1,
    right: e => 'button' in e && e.button !== 2,
    exact: (e, modifiers) => systemModifiers.some(m => e[`${m}Key`] && !modifiers.includes(m))
};
/**
 * @private
 */
const withModifiers = (fn, modifiers) => {
    return (event, ...args) => {
        for (let i = 0; i < modifiers.length; i++) {
            const guard = modifierGuards[modifiers[i]];
            if (guard && guard(event, modifiers))
                return;
        }
        return fn(event, ...args);
    };
};
// Kept for 2.x compat.
// Note: IE11 compat for `spacebar` and `del` is removed for now.
const keyNames = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace'
};
/**
 * @private
 */
const withKeys = (fn, modifiers) => {
    return (event) => {
        if (!('key' in event))
            return;
        const eventKey = Object(shared_dist_shared_esm_bundler["d" /* hyphenate */])(event.key);
        if (
        // None of the provided key modifiers match the current event key
        !modifiers.some(k => k === eventKey || keyNames[k] === eventKey)) {
            return;
        }
        return fn(event);
    };
};

const vShow = {
    beforeMount(el, { value }, { transition }) {
        el._vod = el.style.display === 'none' ? '' : el.style.display;
        if (transition && value) {
            transition.beforeEnter(el);
        }
        else {
            setDisplay(el, value);
        }
    },
    mounted(el, { value }, { transition }) {
        if (transition && value) {
            transition.enter(el);
        }
    },
    updated(el, { value, oldValue }, { transition }) {
        if (transition && value !== oldValue) {
            if (value) {
                transition.beforeEnter(el);
                setDisplay(el, true);
                transition.enter(el);
            }
            else {
                transition.leave(el, () => {
                    setDisplay(el, false);
                });
            }
        }
        else {
            setDisplay(el, value);
        }
    },
    beforeUnmount(el, { value }) {
        setDisplay(el, value);
    }
};
function setDisplay(el, value) {
    el.style.display = value ? el._vod : 'none';
}

const rendererOptions = Object(shared_dist_shared_esm_bundler["c" /* extend */])({ patchProp: runtime_dom_esm_bundler_patchProp, forcePatchProp }, nodeOps);
// lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.
let renderer;
let enabledHydration = false;
function ensureRenderer() {
    return renderer || (renderer = createRenderer(rendererOptions));
}
function ensureHydrationRenderer() {
    renderer = enabledHydration
        ? renderer
        : createHydrationRenderer(rendererOptions);
    enabledHydration = true;
    return renderer;
}
// use explicit type casts here to avoid import() calls in rolled-up d.ts
const runtime_dom_esm_bundler_render = ((...args) => {
    ensureRenderer().render(...args);
});
const runtime_dom_esm_bundler_hydrate = ((...args) => {
    ensureHydrationRenderer().hydrate(...args);
});
const runtime_dom_esm_bundler_createApp = ((...args) => {
    const app = ensureRenderer().createApp(...args);
    if ((false)) {}
    const { mount } = app;
    app.mount = (containerOrSelector) => {
        const container = normalizeContainer(containerOrSelector);
        if (!container)
            return;
        const component = app._component;
        if (!Object(shared_dist_shared_esm_bundler["g" /* isFunction */])(component) && !component.render && !component.template) {
            component.template = container.innerHTML;
        }
        // clear content before mounting
        container.innerHTML = '';
        const proxy = mount(container);
        if (container instanceof Element) {
            container.removeAttribute('v-cloak');
            container.setAttribute('data-v-app', '');
        }
        return proxy;
    };
    return app;
});
const createSSRApp = ((...args) => {
    const app = ensureHydrationRenderer().createApp(...args);
    if ((false)) {}
    const { mount } = app;
    app.mount = (containerOrSelector) => {
        const container = normalizeContainer(containerOrSelector);
        if (container) {
            return mount(container, true);
        }
    };
    return app;
});
function injectNativeTagCheck(app) {
    // Inject `isNativeTag`
    // this is used for component name validation (dev only)
    Object.defineProperty(app.config, 'isNativeTag', {
        value: (tag) => Object(shared_dist_shared_esm_bundler["h" /* isHTMLTag */])(tag) || Object(shared_dist_shared_esm_bundler["l" /* isSVGTag */])(tag),
        writable: false
    });
}
function normalizeContainer(container) {
    if (Object(shared_dist_shared_esm_bundler["o" /* isString */])(container)) {
        const res = document.querySelector(container);
        if (false) {}
        return res;
    }
    if (false) {}
    return container;
}



// EXTERNAL MODULE: ./node_modules/vue/node_modules/@vue/shared/dist/shared.esm-bundler.js
var _vue_shared_dist_shared_esm_bundler = __webpack_require__(20);

// CONCATENATED MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js




function initDev() {
    const target = Object(_vue_shared_dist_shared_esm_bundler["a" /* getGlobalThis */])();
    target.__VUE__ = true;
    setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__);
    {
        initCustomFormatter();
    }
}

// This entry exports the runtime only, and is built as
( false) && false;
const vue_runtime_esm_bundler_compile = () => {
    if ((false)) {}
};



// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--11-0!./src/TradingVue.vue?vue&type=template&id=0322baa3

function TradingVuevue_type_template_id_0322baa3_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", null, " asdfasdfasdfaf ");
}
// CONCATENATED MODULE: ./src/TradingVue.vue?vue&type=template&id=0322baa3

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--11-0!./src/TradingVue.vue?vue&type=script&lang=js
/* harmony default export */ var TradingVuevue_type_script_lang_js = ({
  name: 'Spinner',
  props: ['colors']
});
// CONCATENATED MODULE: ./src/TradingVue.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/TradingVue.vue



TradingVuevue_type_script_lang_js.render = TradingVuevue_type_template_id_0322baa3_render

/* harmony default export */ var TradingVue = (TradingVuevue_type_script_lang_js);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(8);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(3);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(4);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(14);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(10);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(11);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(5);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/arrayslicer/lib/index.js
var lib = __webpack_require__(15);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./src/stuff/constants.js
var SECOND = 1000;
var MINUTE = SECOND * 60;
var MINUTE3 = MINUTE * 3;
var MINUTE5 = MINUTE * 5;
var MINUTE15 = MINUTE * 15;
var MINUTE30 = MINUTE * 30;
var HOUR = MINUTE * 60;
var HOUR4 = HOUR * 4;
var HOUR12 = HOUR * 12;
var DAY = HOUR * 24;
var WEEK = DAY * 7;
var MONTH = WEEK * 4;
var YEAR = DAY * 365;
var MONTHMAP = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; // Grid time steps

var TIMESCALES = [YEAR * 10, YEAR * 5, YEAR * 3, YEAR * 2, YEAR, MONTH * 6, MONTH * 4, MONTH * 3, MONTH * 2, MONTH, DAY * 15, DAY * 10, DAY * 7, DAY * 5, DAY * 3, DAY * 2, DAY, HOUR * 12, HOUR * 6, HOUR * 3, HOUR * 1.5, HOUR, MINUTE30, MINUTE15, MINUTE * 10, MINUTE5, MINUTE * 2, MINUTE]; // Grid $ steps

var $SCALES = [0.05, 0.1, 0.2, 0.25, 0.5, 0.8, 1, 2, 5];
var ChartConfig = {
  SBMIN: 60,
  // Minimal sidebar px
  SBMAX: Infinity,
  // Max sidebar, px
  TOOLBAR: 57,
  // Toolbar width px
  TB_ICON: 25,
  // Toolbar icon size px
  TB_ITEM_M: 6,
  // Toolbar item margin px
  TB_ICON_BRI: 1,
  // Toolbar icon brightness
  TB_ICON_HOLD: 420,
  // ms, wait to expand
  TB_BORDER: 1,
  // Toolbar border px
  TB_B_STYLE: 'dotted',
  // Toolbar border style
  TOOL_COLL: 7,
  // Tool collision threshold
  EXPAND: 0.15,
  // %/100 of range
  CANDLEW: 0.6,
  // %/100 of step
  GRIDX: 100,
  // px
  GRIDY: 47,
  // px
  BOTBAR: 28,
  // px
  PANHEIGHT: 22,
  // px
  DEFAULT_LEN: 50,
  // candles
  MINIMUM_LEN: 5,
  // candles,
  MIN_ZOOM: 25,
  // candles
  MAX_ZOOM: 1000,
  // candles,
  VOLSCALE: 0.15,
  // %/100 of height
  UX_OPACITY: 0.9,
  // Ux background opacity
  ZOOM_MODE: 'tv',
  // 'tv' or 'tl'
  L_BTN_SIZE: 21,
  // Legend Button size, px
  L_BTN_MARGIN: '-6px 0 -6px 0',
  // css margin
  SCROLL_WHEEL: 'prevent' // 'pass', 'click'

};
ChartConfig.FONT = "11px -apple-system,BlinkMacSystemFont,\n    Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,\n    Fira Sans,Droid Sans,Helvetica Neue,\n    sans-serif";
var IB_TF_WARN = "When using IB mode you should specify " + "timeframe ('tf' filed in 'chart' object)," + "otherwise you can get an unexpected behaviour";
var MAP_UNIT = {
  "1s": SECOND,
  "5s": SECOND * 5,
  "10s": SECOND * 10,
  "20s": SECOND * 20,
  "30s": SECOND * 30,
  "1m": MINUTE,
  "3m": MINUTE3,
  "5m": MINUTE5,
  "15m": MINUTE15,
  "30m": MINUTE30,
  "1H": HOUR,
  "2H": HOUR * 2,
  "3H": HOUR * 3,
  "4H": HOUR4,
  "12H": HOUR12,
  "1D": DAY,
  "1W": WEEK,
  "1M": MONTH,
  "1Y": YEAR
};
/* harmony default export */ var constants = ({
  SECOND: SECOND,
  MINUTE: MINUTE,
  MINUTE5: MINUTE5,
  MINUTE15: MINUTE15,
  MINUTE30: MINUTE30,
  HOUR: HOUR,
  HOUR4: HOUR4,
  DAY: DAY,
  WEEK: WEEK,
  MONTH: MONTH,
  YEAR: YEAR,
  MONTHMAP: MONTHMAP,
  TIMESCALES: TIMESCALES,
  $SCALES: $SCALES,
  ChartConfig: ChartConfig,
  map_unit: MAP_UNIT,
  IB_TF_WARN: IB_TF_WARN
});
// CONCATENATED MODULE: ./src/stuff/utils.js



/* harmony default export */ var utils = ({
  clamp: function clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num;
  },
  add_zero: function add_zero(i) {
    if (i < 10) {
      i = "0" + i;
    }

    return i;
  },
  // Start of the day (zero millisecond)
  day_start: function day_start(t) {
    var start = new Date(t);
    return start.setUTCHours(0, 0, 0, 0);
  },
  // Start of the month
  month_start: function month_start(t) {
    var date = new Date(t);
    return Date.UTC(date.getFullYear(), date.getMonth(), 1);
  },
  // Start of the year
  year_start: function year_start(t) {
    return Date.UTC(new Date(t).getFullYear());
  },
  get_year: function get_year(t) {
    if (!t) return undefined;
    return new Date(t).getUTCFullYear();
  },
  get_month: function get_month(t) {
    if (!t) return undefined;
    return new Date(t).getUTCMonth();
  },
  // Nearest in array
  nearest_a: function nearest_a(x, array) {
    var dist = Infinity;
    var val = null;
    var index = -1;

    for (var i = 0; i < array.length; i++) {
      var xi = array[i];

      if (Math.abs(xi - x) < dist) {
        dist = Math.abs(xi - x);
        val = xi;
        index = i;
      }
    }

    return [index, val];
  },
  round: function round(num, decimals) {
    if (decimals === void 0) {
      decimals = 8;
    }

    return parseFloat(num.toFixed(decimals));
  },
  // Strip? No, it's ugly floats in js
  strip: function strip(number) {
    return parseFloat(parseFloat(number).toPrecision(12));
  },
  get_day: function get_day(t) {
    return t ? new Date(t).getDate() : null;
  },
  // Update array keeping the same reference
  overwrite: function overwrite(arr, new_arr) {
    arr.splice.apply(arr, [0, arr.length].concat(toConsumableArray_default()(new_arr)));
  },
  // Copy layout in reactive way
  copy_layout: function copy_layout(obj, new_obj) {
    for (var k in obj) {
      if (Array.isArray(obj[k])) {
        // (some offchart indicators are added/removed)
        // we need to update layout in a reactive way
        if (obj[k].length !== new_obj[k].length) {
          this.overwrite(obj[k], new_obj[k]);
          continue;
        }

        for (var m in obj[k]) {
          Object.assign(obj[k][m], new_obj[k][m]);
        }
      } else {
        Object.assign(obj[k], new_obj[k]);
      }
    }
  },
  // Detects candles interval
  detect_interval: function detect_interval(ohlcv) {
    var len = Math.min(ohlcv.length - 1, 99);
    var min = Infinity;
    ohlcv.slice(0, len).forEach(function (x, i) {
      var d = ohlcv[i + 1][0] - x[0];
      if (d === d && d < min) min = d;
    }); // This saves monthly chart from being awkward

    if (min >= constants.MONTH && min <= constants.DAY * 30) {
      return constants.DAY * 31;
    }

    return min;
  },
  // Gets numberic part of overlay id (e.g 'EMA_1' = > 1)
  get_num_id: function get_num_id(id) {
    return parseInt(id.split('_').pop());
  },
  // Fast filter. Really fast, like 10X
  fast_filter: function fast_filter(arr, t1, t2) {
    if (!arr.length) return [arr, undefined];

    try {
      var ia = new lib_default.a(arr, "0");
      var res = ia.getRange(t1, t2);
      var i0 = ia.valpos[t1].next;
      return [res, i0];
    } catch (e) {
      // Something wrong with fancy slice lib
      // Fast fix: fallback to filter
      return [arr.filter(function (x) {
        return x[0] >= t1 && x[0] <= t2;
      }), 0];
    }
  },
  // Fast filter (index-based)
  fast_filter_i: function fast_filter_i(arr, t1, t2) {
    if (!arr.length) return [arr, undefined];
    var i1 = Math.floor(t1);
    if (i1 < 0) i1 = 0;
    var i2 = Math.floor(t2 + 1);
    var res = arr.slice(i1, i2);
    return [res, i1];
  },
  // Nearest indexes (left and right)
  fast_nearest: function fast_nearest(arr, t1) {
    var ia = new lib_default.a(arr, "0");
    ia.fetch(t1);
    return [ia.nextlow, ia.nexthigh];
  },
  now: function now() {
    return new Date().getTime();
  },
  pause: function pause(delay) {
    return new Promise(function (rs, rj) {
      return setTimeout(rs, delay);
    });
  },
  // Limit crazy wheel delta values
  smart_wheel: function smart_wheel(delta) {
    var abs = Math.abs(delta);

    if (abs > 500) {
      return (200 + Math.log(abs)) * Math.sign(delta);
    }

    return delta;
  },
  // Parse the original mouse event to find deltaX
  get_deltaX: function get_deltaX(event) {
    return event.originalEvent.deltaX / 12;
  },
  // Parse the original mouse event to find deltaY
  get_deltaY: function get_deltaY(event) {
    return event.originalEvent.deltaY / 12;
  },
  // Apply opacity to a hex color
  apply_opacity: function apply_opacity(c, op) {
    if (c.length === 7) {
      var n = Math.floor(op * 255);
      n = this.clamp(n, 0, 255);
      c += n.toString(16);
    }

    return c;
  },
  // Parse timeframe or return value in ms
  parse_tf: function parse_tf(smth) {
    if (typeof smth === 'string') {
      return constants.map_unit[smth];
    } else {
      return smth;
    }
  },
  // Detect index shift between the main data sub
  // and the overlay's sub (for IB-mode)
  index_shift: function index_shift(sub, data) {
    // Find the second timestamp (by value)
    if (!data.length) return 0;
    var first = data[0][0];
    var second;

    for (var i = 1; i < data.length; i++) {
      if (data[i][0] !== first) {
        second = data[i][0];
        break;
      }
    }

    for (var j = 0; j < sub.length; j++) {
      if (sub[j][0] === second) {
        return j - i;
      }
    }

    return 0;
  },
  // Fallback fix for Brave browser
  // https://github.com/brave/brave-browser/issues/1738
  measureText: function measureText(ctx, text, tv_id) {
    var m = ctx.measureTextOrg(text);

    if (m.width === 0) {
      var doc = document;
      var id = 'tvjs-measure-text';
      var el = doc.getElementById(id);

      if (!el) {
        var base = doc.getElementById(tv_id);
        el = doc.createElement("div");
        el.id = id;
        el.style.position = 'absolute';
        el.style.top = '-1000px';
        base.appendChild(el);
      }

      if (ctx.font) el.style.font = ctx.font;
      el.innerText = text.replace(/ /g, '.');
      return {
        width: el.offsetWidth
      };
    } else {
      return m;
    }
  },
  uuid: function uuid(temp) {
    if (temp === void 0) {
      temp = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    }

    return temp.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
  },
  uuid2: function uuid2() {
    return this.uuid('xxxxxxxxxxxx');
  },
  // Delayed warning, f = condition lambda fn
  warn: function warn(f, text, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    setTimeout(function () {
      if (f()) console.warn(text);
    }, delay);
  },
  // Checks if script props updated
  // (and not style settings or something else)
  is_scr_props_upd: function is_scr_props_upd(n, prev) {
    var p = prev.find(function (x) {
      return x.v.$uuid === n.v.$uuid;
    });
    if (!p) return false;
    var props = n.p.settings.$props;
    if (!props) return false;
    return props.some(function (x) {
      return n.v[x] !== p.v[x];
    });
  },
  // Checks if it's time to make a script update
  // (based on execInterval in ms)
  delayed_exec: function delayed_exec(v) {
    if (!v.script || !v.script.execInterval) return true;
    var t = this.now();
    var dt = v.script.execInterval;

    if (!v.settings.$last_exec || t > v.settings.$last_exec + dt) {
      v.settings.$last_exec = t;
      return true;
    }

    return false;
  },
  // Format names such 'RSI, $length', where
  // length - is one of the settings
  format_name: function format_name(ov) {
    if (!ov.name) return undefined;
    var name = ov.name;

    for (var k in ov.settings || {}) {
      var val = ov.settings[k];
      var reg = new RegExp("\\$".concat(k), 'g');
      name = name.replace(reg, val);
    }

    return name;
  },
  // Default cursor mode
  xmode: function xmode() {
    return this.is_mobile ? 'explore' : 'default';
  },
  default_prevented: function default_prevented(event) {
    if (event.original) {
      return event.original.defaultPrevented;
    }

    return event.defaultPrevented;
  },
  // WTF with modern web development
  is_mobile: function (w) {
    return 'onorientationchange' in w && (!!navigator.maxTouchPoints || !!navigator.msMaxTouchPoints || 'ontouchstart' in w || w.DocumentTouch && document instanceof w.DocumentTouch);
  }(typeof window !== 'undefined' ? window : {})
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(6);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(9);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./src/stuff/icons.json
var icons = __webpack_require__(16);

// EXTERNAL MODULE: ./src/helpers/tmp/ww$$$.json
var ww$$$ = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/lz-string/libs/lz-string.js
var lz_string = __webpack_require__(22);
var lz_string_default = /*#__PURE__*/__webpack_require__.n(lz_string);

// EXTERNAL MODULE: ./src/helpers/script_ww.js
var script_ww = __webpack_require__(31);

// CONCATENATED MODULE: ./src/helpers/script_ww_api.js




// Webworker interface
// Compiled webworker (see webpack/ww_plugin.js)



 // For webworker-loader to find the ww

var script_ww_api_WebWork = /*#__PURE__*/function () {
  function WebWork(dc) {
    classCallCheck_default()(this, WebWork);

    this.dc = dc;
    this.tasks = {};

    this.onevent = function () {};

    this.start();
  }

  createClass_default()(WebWork, [{
    key: "start",
    value: function start() {
      var _this = this;

      if (this.worker) this.worker.terminate(); // URL.createObjectURL

      window.URL = window.URL || window.webkitURL;
      var data = lz_string_default.a.decompressFromBase64(ww$$$[0]);
      var blob;

      try {
        blob = new Blob([data], {
          type: 'application/javascript'
        });
      } catch (e) {
        // Backwards-compatibility
        window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder;
        blob = new BlobBuilder();
        blob.append(data);
        blob = blob.getBlob();
      }

      this.worker = new Worker(URL.createObjectURL(blob));

      this.worker.onmessage = function (e) {
        return _this.onmessage(e);
      };
    }
  }, {
    key: "start_socket",
    value: function start_socket() {
      var _this2 = this;

      if (!this.dc.sett.node_url) return;
      this.socket = new WebSocket(this.dc.sett.node_url);
      this.socket.addEventListener('message', function (e) {
        _this2.onmessage({
          data: JSON.parse(e.data)
        });
      });
      this.msg_queue = [];
    }
  }, {
    key: "send",
    value: function send(msg, tx_keys) {
      if (this.dc.sett.node_url) {
        return this.send_node(msg, tx_keys);
      }

      if (tx_keys) {
        var tx_objs = tx_keys.map(function (k) {
          return msg.data[k];
        });
        this.worker.postMessage(msg, tx_objs);
      } else {
        this.worker.postMessage(msg);
      }
    } // Send to node.js via websocket

  }, {
    key: "send_node",
    value: function send_node(msg, tx_keys) {
      if (!this.socket) this.start_socket();

      if (this.socket && this.socket.readyState) {
        // Send the old messages first
        while (this.msg_queue.length) {
          var m = this.msg_queue.shift();
          this.socket.send(JSON.stringify(m));
        }

        this.socket.send(JSON.stringify(msg));
      } else {
        this.msg_queue.push(msg);
      }
    }
  }, {
    key: "onmessage",
    value: function onmessage(e) {
      if (e.data.id in this.tasks) {
        this.tasks[e.data.id](e.data.data);
        delete this.tasks[e.data.id];
      } else {
        this.onevent(e);
      }
    } // Execute a task

  }, {
    key: "exec",
    value: function () {
      var _exec = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(type, data, tx_keys) {
        var _this3 = this;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (rs, rj) {
                  var id = utils.uuid();

                  _this3.send({
                    type: type,
                    id: id,
                    data: data
                  }, tx_keys);

                  _this3.tasks[id] = function (res) {
                    rs(res);
                  };
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function exec(_x, _x2, _x3) {
        return _exec.apply(this, arguments);
      }

      return exec;
    }() // Execute a task, but just fucking do it,
    // do not wait for the result

  }, {
    key: "just",
    value: function just(type, data, tx_keys) {
      var id = utils.uuid();
      this.send({
        type: type,
        id: id,
        data: data
      }, tx_keys);
    } // Relay an event from iframe postMessage
    // (for the future)

  }, {
    key: "relay",
    value: function () {
      var _relay = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2(event, just) {
        var _this4 = this;

        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (just === void 0) {
                  just = false;
                }

                return _context2.abrupt("return", new Promise(function (rs, rj) {
                  _this4.send(event, event.tx_keys);

                  if (!just) {
                    _this4.tasks[event.id] = function (res) {
                      rs(res);
                    };
                  }
                }));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function relay(_x4, _x5) {
        return _relay.apply(this, arguments);
      }

      return relay;
    }()
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.worker) this.worker.terminate();
    }
  }]);

  return WebWork;
}();

/* harmony default export */ var script_ww_api = (script_ww_api_WebWork);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(12);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./src/helpers/script_utils.js


var FDEFS = /(function |)([$A-Z_][0-9A-Z_$\.]*)[\s]*?\((.*?)\)/gmi;
var SBRACKETS = /([$A-Z_][0-9A-Z_$\.]*)[\s]*?\[([^"^\[^\]]+?)\]/gmi;
var TFSTR = /(\d+)(\w*)/gm;
var BUF_INC = 5;
var tf_cache = {};
function f_args(src) {
  FDEFS.lastIndex = 0;
  var m = FDEFS.exec(src);

  if (m) {
    var fkeyword = m[1].trim();
    var fname = m[2].trim();
    var fargs = m[3].trim();
    return fargs.split(',').map(function (x) {
      return x.trim();
    });
  }

  return [];
}
function f_body(src) {
  return src.slice(src.indexOf("{") + 1, src.lastIndexOf("}"));
}
function wrap_idxs(src, pre) {
  if (pre === void 0) {
    pre = '';
  }

  SBRACKETS.lastIndex = 0;
  var changed = false;

  do {
    var m = SBRACKETS.exec(src);

    if (m) {
      var vname = m[1].trim();
      var vindex = m[2].trim();

      if (vindex === '0' || parseInt(vindex) < BUF_INC) {
        continue;
      }

      switch (vname) {
        case 'let':
        case 'var':
        case 'return':
          continue;
      } //let wrap = `${pre}_v(${vname}, ${vindex})[${vindex}]`


      var wrap = "".concat(vname, "[").concat(pre, "_i(").concat(vindex, ", ").concat(vname, ")]");
      src = src.replace(m[0], wrap);
      changed = true;
    }
  } while (m);

  return changed ? src : src;
} // Get all module helper classes

function make_module_lib(mod) {
  var lib = {};

  for (var k in mod) {
    if (k === 'main' || k === 'id') continue;
    var a = f_args(mod[k]);
    lib[k] = new Function(a, f_body(mod[k]));
  }

  return lib;
}
function get_raw_src(f) {
  if (typeof f === 'string') return f;
  var src = f.toString();
  return src.slice(src.indexOf("{") + 1, src.lastIndexOf("}"));
} // Get tf in ms from pairs such (`15`, `m`)

function tf_from_pair(num, pf) {
  var mult = 1;

  switch (pf) {
    case 's':
      mult = constants.SECOND;
      break;

    case 'm':
      mult = constants.MINUTE;
      break;

    case 'H':
      mult = constants.HOUR;
      break;

    case 'D':
      mult = constants.DAY;
      break;

    case 'W':
      mult = constants.WEEK;
      break;

    case 'M':
      mult = constants.MONTH;
      break;

    case 'Y':
      mult = constants.YEAR;
      break;
  }

  return parseInt(num) * mult;
}
function tf_from_str(str) {
  if (typeof str === 'number') return str;
  if (tf_cache[str]) return tf_cache[str];
  TFSTR.lastIndex = 0;
  var m = TFSTR.exec(str);

  if (m) {
    tf_cache[str] = tf_from_pair(m[1], m[2]);
    return tf_cache[str];
  }

  return undefined;
}
function get_fn_id(pre, id) {
  return pre + '-' + id.split('<-').pop();
} // Apply filter for all new overlays

function ovf(obj, f) {
  var nw = {};

  for (var id in obj) {
    nw[id] = {};

    for (var k in obj[id]) {
      if (k === 'data') continue;
      nw[id][k] = obj[id][k];
    }

    nw[id].data = f(obj[id].data);
  }

  return nw;
} // Return index of the next element in
// dataset (since t). Impl: simple binary search
// TODO: optimize (remember the penultimate
// iteration and start from there)

function nextt(data, t, ti) {
  if (ti === void 0) {
    ti = 0;
  }

  var i0 = 0;
  var iN = data.length - 1;

  while (i0 <= iN) {
    var mid = Math.floor((i0 + iN) / 2);

    if (data[mid][ti] === t) {
      return mid;
    } else if (data[mid][ti] < t) {
      i0 = mid + 1;
    } else {
      iN = mid - 1;
    }
  }

  return t < data[mid][ti] ? mid : mid + 1;
} // Estimated size of datasets

function size_of_dss(data) {
  var bytes = 0;

  for (var id in data) {
    if (data[id].data && data[id].data[0]) {
      var s0 = size_of(data[id].data[0]);
      bytes += s0 * data[id].data.length;
    }
  }

  return bytes;
} // Used to measure the size of dataset

function size_of(object) {
  var list = [],
      stack = [object],
      bytes = 0;

  while (stack.length) {
    var value = stack.pop();

    var type = typeof_default()(value);

    if (type === 'boolean') {
      bytes += 4;
    } else if (type === 'string') {
      bytes += value.length * 2;
    } else if (type === 'number') {
      bytes += 8;
    } else if (type === 'object' && list.indexOf(value) === -1) {
      list.push(value);

      for (var i in value) {
        stack.push(value[i]);
      }
    }
  }

  return bytes;
} // Update onchart/offchart

function script_utils_update(data, val) {
  var i = data.length - 1;
  var last = data[i];

  if (!last || val[0] > last[0]) {
    data.push(val);
  } else {
    data[i] = val;
  }
}
function script_utils_now() {
  return new Date().getTime();
}
// CONCATENATED MODULE: ./src/helpers/dataset.js






function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Dataset proxy between vuejs & WebWorker


var dataset_Dataset = /*#__PURE__*/function () {
  function Dataset(dc, desc) {
    classCallCheck_default()(this, Dataset);

    // TODO: dataset url arrow fn tells WW
    // to load the ds directly from web
    this.type = desc.type;
    this.id = desc.id;
    this.dc = dc; // Send the data to WW

    if (desc.data) {
      this.dc.ww.just('upload-data', defineProperty_default()({}, this.id, desc)); // Remove the data from the descriptor

      delete desc.data;
    }

    var proto = Object.getPrototypeOf(this);
    Object.setPrototypeOf(desc, proto);
    Object.defineProperty(desc, 'dc', {
      get: function get() {
        return dc;
      }
    });
  } // Watch for the changes of descriptors


  createClass_default()(Dataset, [{
    key: "set",
    // Set data (overwrite the whole dataset)
    value: function set(data, exec) {
      if (exec === void 0) {
        exec = true;
      }

      this.dc.ww.just('dataset-op', {
        id: this.id,
        type: 'set',
        data: data,
        exec: exec
      });
    } // Update with new data (array of data points)

  }, {
    key: "update",
    value: function update(arr) {
      this.dc.ww.just('update-data', defineProperty_default()({}, this.id, arr));
    } // Send WW a chunk to merge. The merge algo
    // here is simpler than in DC. It just adds
    // data at the beginning or/and the end of ds

  }, {
    key: "merge",
    value: function merge(data, exec) {
      if (exec === void 0) {
        exec = true;
      }

      this.dc.ww.just('dataset-op', {
        id: this.id,
        type: 'mrg',
        data: data,
        exec: exec
      });
    } // Remove the ds from WW

  }, {
    key: "remove",
    value: function remove(exec) {
      if (exec === void 0) {
        exec = true;
      }

      this.dc.del("datasets.".concat(this.id));
      this.dc.ww.just('dataset-op', {
        id: this.id,
        type: 'del',
        exec: exec
      });
      delete this.dc.dss[this.id];
    } // Fetch data from WW

  }, {
    key: "data",
    value: function () {
      var _data = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var ds;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.dc.ww.exec('get-dataset', this.id);

              case 2:
                ds = _context.sent;

                if (ds) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                return _context.abrupt("return", ds.data);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function data() {
        return _data.apply(this, arguments);
      }

      return data;
    }()
  }], [{
    key: "watcher",
    value: function watcher(n, p) {
      var nids = n.map(function (x) {
        return x.id;
      });
      var pids = p.map(function (x) {
        return x.id;
      });

      var _iterator = _createForOfIteratorHelper(nids),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var id = _step.value;

          if (!pids.includes(id)) {
            var ds = n.filter(function (x) {
              return x.id === id;
            })[0];
            this.dss[id] = new Dataset(this, ds);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(pids),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var id = _step2.value;

          if (!nids.includes(id) && this.dss[id]) {
            this.dss[id].remove();
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    } // Make an object for data transfer

  }, {
    key: "make_tx",
    value: function make_tx(dc, types) {
      var main = dc.data.chart.data;
      var base = {};

      if (types.find(function (x) {
        return x.type === 'OHLCV';
      })) {
        base = {
          ohlcv: main
        };
      } // TODO: add more sophisticated search
      // (using 'script.datasets' paramerter)

      /*for (var req of types) {
          let ds = Object.values(dc.dss || {})
              .find(x => x.type === req.type)
          if (ds && ds.data) {
              base[ds.id] = {
                  id: ds.id,
                  type: ds.type,
                  data: ds.data
              }
          }
      }*/
      // TODO: Data request callback ?


      return base;
    }
  }]);

  return Dataset;
}(); // Dataset reciever (created on WW)



var dataset_DatasetWW = /*#__PURE__*/function () {
  function DatasetWW(id, data) {
    classCallCheck_default()(this, DatasetWW);

    this.last_upd = script_utils_now();
    this.id = id;

    if (Array.isArray(data)) {
      // Regular array
      this.data = data;
      if (id === 'ohlcv') this.type = 'OHLCV';
    } else {
      // Dataset descriptor
      this.data = data.data;
      this.type = data.type;
    }
  } // Update from 'update-data' event
  // TODO: ds size limit (in MB / data points)


  createClass_default()(DatasetWW, [{
    key: "merge",
    value: function merge(data) {
      var len = this.data.length;

      if (!len) {
        this.data = data;
        return;
      }

      var t0 = this.data[0][0];
      var tN = this.data[len - 1][0];
      var l = data.filter(function (x) {
        return x[0] < t0;
      });
      var r = data.filter(function (x) {
        return x[0] > tN;
      });
      this.data = l.concat(this.data, r);
    } // On dataset operation

  }, {
    key: "op",
    value: function op(se, _op) {
      this.last_upd = script_utils_now();

      switch (_op.type) {
        case 'set':
          this.data = _op.data;
          se.recalc_size();
          break;

        case 'del':
          delete se.data[this.id];
          se.recalc_size();
          break;

        case 'mrg':
          this.merge(_op.data);
          se.recalc_size();
          break;
      }
    }
  }], [{
    key: "update_all",
    value: function update_all(se, data) {
      for (var k in data) {
        if (k === 'ohlcv') continue;
        var id = k.split('.')[1] || k;
        if (!se.data[id]) continue;
        var arr = se.data[id].data;
        var iN = arr.length - 1;
        var last = arr[iN];

        var _iterator3 = _createForOfIteratorHelper(data[k]),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var dp = _step3.value;

            if (!last || dp[0] > last[0]) {
              arr.push(dp);
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        se.data[id].last_upd = script_utils_now();
      }
    }
  }]);

  return DatasetWW;
}();
// CONCATENATED MODULE: ./src/helpers/dc_events.js





function dc_events_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = dc_events_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function dc_events_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return dc_events_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dc_events_arrayLikeToArray(o, minLen); }

function dc_events_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// DataCube event handlers





var dc_events_DCEvents = /*#__PURE__*/function () {
  function DCEvents() {
    var _this = this;

    classCallCheck_default()(this, DCEvents);

    this.ww = new script_ww_api(this); // Listen to the web-worker events

    this.ww.onevent = function (e) {
      var _iterator = dc_events_createForOfIteratorHelper(_this.tv.controllers),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var ctrl = _step.value;
          if (ctrl.ww) ctrl.ww(e.data);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      switch (e.data.type) {
        case 'request-data':
          // TODO: DataTunnel class for smarter data transfer
          if (_this.ww._data_uploading) break;
          var data = dataset_Dataset.make_tx(_this, e.data.data);

          _this.send_meta_2_ww();

          _this.ww.just('upload-data', data);

          _this.ww._data_uploading = true;
          break;

        case 'overlay-data':
          _this.on_overlay_data(e.data.data);

          break;

        case 'overlay-update':
          _this.on_overlay_update(e.data.data);

          break;

        case 'data-uploaded':
          _this.ww._data_uploading = false;
          break;

        case 'engine-state':
          _this.se_state = Object.assign(_this.se_state || {}, e.data.data);
          break;

        case 'modify-overlay':
          _this.modify_overlay(e.data.data);

          break;

        case 'script-signal':
          _this.tv.$emit('signal', e.data.data);

          break;
      }

      var _iterator2 = dc_events_createForOfIteratorHelper(_this.tv.controllers),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var ctrl = _step2.value;
          if (ctrl.post_ww) ctrl.post_ww(e.data);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    };
  } // Called when overalay/tv emits 'custom-event'


  createClass_default()(DCEvents, [{
    key: "on_custom_event",
    value: function on_custom_event(event, args) {
      switch (event) {
        case 'register-tools':
          this.register_tools(args);
          break;

        case 'exec-script':
          this.exec_script(args);
          break;

        case 'exec-all-scripts':
          this.exec_all_scripts();
          break;

        case 'data-len-changed':
          this.data_changed(args);
          break;

        case 'tool-selected':
          if (!args[0]) break; // TODO: Quick fix, investigate

          if (args[0].split(':')[0] === 'System') {
            this.system_tool(args[0].split(':')[1]);
            break;
          }

          this.data.tool = args[0];

          if (args[0] === 'Cursor') {
            this.drawing_mode_off();
          }

          break;

        case 'grid-mousedown':
          this.grid_mousedown(args);
          break;

        case 'drawing-mode-off':
          this.drawing_mode_off();
          break;

        case 'change-settings':
          this.change_settings(args);
          break;

        case 'range-changed':
          this.scripts_onrange.apply(this, toConsumableArray_default()(args));
          break;

        case 'scroll-lock':
          this.on_scroll_lock(args[0]);
          break;

        case 'object-selected':
          this.object_selected(args);
          break;

        case 'remove-tool':
          this.system_tool('Remove');
          break;

        case 'before-destroy':
          this.before_destroy();
          break;
      }
    } // Triggered when one or multiple settings are changed
    // We select only the changed ones & re-exec them on the
    // web worker

  }, {
    key: "on_settings",
    value: function on_settings(values, prev) {
      if (!this.sett.scripts) return;
      var delta = {};
      var changed = false;

      var _loop = function _loop() {
        var n = values[i];
        var arr = prev.filter(function (x) {
          return x.v === n.v;
        });

        if (!arr.length && n.p.settings.$props) {
          var id = n.p.settings.$uuid;

          if (utils.is_scr_props_upd(n, prev) && utils.delayed_exec(n.p)) {
            delta[id] = n.v;
            changed = true;
            n.p.loading = true;
          }
        }
      };

      for (var i = 0; i < values.length; i++) {
        _loop();
      }

      if (changed && Object.keys(delta).length) {
        var tf = this.tv.$refs.chart.interval_ms || this.data.chart.tf;
        var range = this.tv.getRange();
        this.ww.just('update-ov-settings', {
          delta: delta,
          tf: tf,
          range: range
        });
      }
    } // When the set of $uuids is changed

  }, {
    key: "on_ids_changed",
    value: function on_ids_changed(values, prev) {
      var rem = prev.filter(function (x) {
        return x !== undefined && !values.includes(x);
      });

      if (rem.length) {
        this.ww.just('remove-scripts', rem);
      }
    } // Combine all tools and their mods

  }, {
    key: "register_tools",
    value: function register_tools(tools) {
      var preset = {};

      var _iterator3 = dc_events_createForOfIteratorHelper(this.data.tools || []),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var tool = _step3.value;
          preset[tool.type] = tool;
          delete tool.type;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      this.data.tools = [];
      var list = [{
        type: 'Cursor',
        icon: icons['cursor.png']
      }];

      var _iterator4 = dc_events_createForOfIteratorHelper(tools),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var tool = _step4.value;
          var proto = Object.assign({}, tool.info);
          var type = tool.info.type || 'Default';
          proto.type = "".concat(tool.use_for, ":").concat(type);
          this.merge_presets(proto, preset[tool.use_for]);
          this.merge_presets(proto, preset[proto.type]);
          delete proto.mods;
          list.push(proto);

          for (var mod in tool.info.mods) {
            var mp = Object.assign({}, proto);
            mp = Object.assign(mp, tool.info.mods[mod]);
            mp.type = "".concat(tool.use_for, ":").concat(mod);
            this.merge_presets(mp, preset[tool.use_for]);
            this.merge_presets(mp, preset[mp.type]);
            list.push(mp);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      this.data.tools = list;
      this.data.tool = 'Cursor';
    }
  }, {
    key: "exec_script",
    value: function exec_script(args) {
      if (args.length && this.sett.scripts) {
        var obj = this.get_overlay(args[0]);
        if (!obj || obj.scripts === false) return;

        if (obj.script && obj.script.src) {
          args[0].src = obj.script.src; // opt, override the src
        } // Parse script props & get the values from the ov
        // TODO: remove unnecessary script initializations


        var s = obj.settings;
        var props = args[0].src.props || {};
        if (!s.$uuid) s.$uuid = "".concat(obj.type, "-").concat(utils.uuid2());
        args[0].uuid = s.$uuid;
        args[0].sett = s;

        for (var k in props || {}) {
          var proto = props[k];

          if (s[k] !== undefined) {
            proto.val = s[k]; // use the existing val

            continue;
          }

          if (proto.def === undefined) {
            // TODO: add support of info / errors to the legend
            console.error("Overlay ".concat(obj.id, ": script prop '").concat(k, "' ") + "doesn't have a default value");
            return;
          }

          s[k] = proto.val = proto.def; // set the default
        } // Remove old props (dropped by the current exec)


        if (s.$props) {
          for (var k in s) {
            if (s.$props.includes(k) && !(k in props)) {
              delete s[k];
            }
          }
        }

        s.$props = Object.keys(args[0].src.props || {});
        obj.loading = true;
        var tf = this.tv.$refs.chart.interval_ms || this.data.chart.tf;
        var range = this.tv.getRange();

        if (obj.script && obj.script.output != null) {
          args[0].output = obj.script.output;
        }

        this.ww.just('exec-script', {
          s: args[0],
          tf: tf,
          range: range
        });
      }
    }
  }, {
    key: "exec_all_scripts",
    value: function exec_all_scripts() {
      if (!this.sett.scripts) return;
      this.set_loading(true);
      var tf = this.tv.$refs.chart.interval_ms || this.data.chart.tf;
      var range = this.tv.getRange();
      this.ww.just('exec-all-scripts', {
        tf: tf,
        range: range
      });
    }
  }, {
    key: "scripts_onrange",
    value: function scripts_onrange(r) {
      if (!this.sett.scripts) return;
      var delta = {};
      this.get('.').forEach(function (v) {
        if (v.script && v.script.execOnRange && v.settings.$uuid) {
          // TODO: execInterrupt flag?
          if (utils.delayed_exec(v)) {
            delta[v.settings.$uuid] = v.settings;
          }
        }
      });

      if (Object.keys(delta).length) {
        var tf = this.tv.$refs.chart.interval_ms || this.data.chart.tf;
        var range = this.tv.getRange();
        this.ww.just('update-ov-settings', {
          delta: delta,
          tf: tf,
          range: range
        });
      }
    } // Overlay modification from WW

  }, {
    key: "modify_overlay",
    value: function modify_overlay(upd) {
      var obj = this.get_overlay(upd);

      if (obj) {
        for (var k in upd.fields || {}) {
          if (typeof_default()(obj[k]) === 'object') {
            this.merge("".concat(upd.uuid, ".").concat(k), upd.fields[k]);
          } else {
            obj[k] = upd.fields[k];
          }
        }
      }
    }
  }, {
    key: "data_changed",
    value: function data_changed(args) {
      if (!this.sett.scripts) return;
      if (this.sett.data_change_exec === false) return;
      var main = this.data.chart.data;
      if (this.ww._data_uploading) return;
      if (!this.se_state.scripts) return;
      this.send_meta_2_ww();
      this.ww.just('upload-data', {
        ohlcv: main
      });
      this.ww._data_uploading = true;
      this.set_loading(true);
    }
  }, {
    key: "set_loading",
    value: function set_loading(flag) {
      var skrr = this.get('.').filter(function (x) {
        return x.settings.$props;
      });

      var _iterator5 = dc_events_createForOfIteratorHelper(skrr),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var s = _step5.value;
          this.merge("".concat(s.id), {
            loading: flag
          });
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  }, {
    key: "send_meta_2_ww",
    value: function send_meta_2_ww() {
      var tf = this.tv.$refs.chart.interval_ms || this.data.chart.tf;
      var range = this.tv.getRange();
      this.ww.just('send-meta-info', {
        tf: tf,
        range: range
      });
    }
  }, {
    key: "merge_presets",
    value: function merge_presets(proto, preset) {
      if (!preset) return;

      for (var k in preset) {
        if (k === 'settings') {
          Object.assign(proto[k], preset[k]);
        } else {
          proto[k] = preset[k];
        }
      }
    }
  }, {
    key: "grid_mousedown",
    value: function grid_mousedown(args) {
      var _this2 = this;

      // TODO: tool state finished?
      this.object_selected([]); // Remove the previous RangeTool

      var rem = function rem() {
        return _this2.get('RangeTool').filter(function (x) {
          return x.settings.shiftMode;
        }).forEach(function (x) {
          return _this2.del(x.id);
        });
      };

      if (this.data.tool && this.data.tool !== 'Cursor' && !this.data.drawingMode) {
        // Prevent from "null" tools (tool created with HODL)
        if (args[1].type !== 'tap') {
          this.tv.$set(this.data, 'drawingMode', true);
          this.build_tool(args[0]);
        } else {
          this.tv.showTheTip("<b>Hodl</b>+<b>Drug</b> to create, " + "<b>Tap</b> to finish a tool");
        }
      } else if (this.sett.shift_measure && args[1].shiftKey) {
        rem();
        this.tv.$nextTick(function () {
          return _this2.build_tool(args[0], 'RangeTool:ShiftMode');
        });
      } else {
        rem();
      }
    }
  }, {
    key: "drawing_mode_off",
    value: function drawing_mode_off() {
      this.data.drawingMode = false;
      this.data.tool = 'Cursor';
    } // Place a new tool

  }, {
    key: "build_tool",
    value: function build_tool(grid_id, type) {
      var list = this.data.tools;
      type = type || this.data.tool;
      var proto = list.find(function (x) {
        return x.type === type;
      });
      if (!proto) return;
      var sett = Object.assign({}, proto.settings || {});
      var data = (proto.data || []).slice();
      if (!('legend' in sett)) sett.legend = false;
      if (!('z-index' in sett)) sett['z-index'] = 100;
      sett.$selected = true;
      sett.$state = 'wip';
      var side = grid_id ? 'offchart' : 'onchart';
      var id = this.add(side, {
        name: proto.name,
        type: type.split(':')[0],
        settings: sett,
        data: data,
        grid: {
          id: grid_id
        }
      });
      sett.$uuid = "".concat(id, "-").concat(utils.now());
      this.data.selected = sett.$uuid;
      this.add_trash_icon();
    } // Remove selected / Remove all, etc

  }, {
    key: "system_tool",
    value: function system_tool(type) {
      switch (type) {
        case 'Remove':
          if (this.data.selected) {
            this.del(this.data.selected);
            this.remove_trash_icon();
            this.drawing_mode_off();
            this.on_scroll_lock(false);
          }

          break;
      }
    } // Apply new overlay settings

  }, {
    key: "change_settings",
    value: function change_settings(args) {
      var settings = args[0];
      delete settings.id;
      var grid_id = args[1];
      this.merge("".concat(args[3], ".settings"), settings);
    } // Lock the scrolling mechanism

  }, {
    key: "on_scroll_lock",
    value: function on_scroll_lock(flag) {
      this.data.scrollLock = flag;
    } // When new object is selected / unselected

  }, {
    key: "object_selected",
    value: function object_selected(args) {
      var q = this.data.selected;

      if (q) {
        // Check if current drawing is finished
        //let res = this.get_one(`${q}.settings`)
        //if (res && res.$state !== 'finished') return
        this.merge("".concat(q, ".settings"), {
          $selected: false
        });
        this.remove_trash_icon();
      }

      this.data.selected = null;
      if (!args.length) return;
      this.data.selected = args[2];
      this.merge("".concat(args[2], ".settings"), {
        $selected: true
      });
      this.add_trash_icon();
    }
  }, {
    key: "add_trash_icon",
    value: function add_trash_icon() {
      var type = 'System:Remove';

      if (this.data.tools.find(function (x) {
        return x.type === type;
      })) {
        return;
      }

      this.data.tools.push({
        type: type,
        icon: icons['trash.png']
      });
    }
  }, {
    key: "remove_trash_icon",
    value: function remove_trash_icon() {
      // TODO: Does not call Toolbar render (distr version)
      var type = 'System:Remove';
      utils.overwrite(this.data.tools, this.data.tools.filter(function (x) {
        return x.type !== type;
      }));
    } // Set overlay data from the web-worker

  }, {
    key: "on_overlay_data",
    value: function on_overlay_data(data) {
      var _this3 = this;

      this.get('.').forEach(function (x) {
        if (x.settings.$synth) _this3.del("".concat(x.id));
      });

      var _iterator6 = dc_events_createForOfIteratorHelper(data),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var ov = _step6.value;
          var obj = this.get_one("".concat(ov.id));

          if (obj) {
            obj.loading = false;
            if (!ov.data) continue;
            obj.data = ov.data;
          }

          if (!ov.new_ovs) continue;

          for (var id in ov.new_ovs.onchart) {
            if (!this.get_one("onchart.".concat(id))) {
              this.add('onchart', ov.new_ovs.onchart[id]);
            }
          }

          for (var id in ov.new_ovs.offchart) {
            if (!this.get_one("offchart.".concat(id))) {
              this.add('offchart', ov.new_ovs.offchart[id]);
            }
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    } // Push overlay updates from the web-worker

  }, {
    key: "on_overlay_update",
    value: function on_overlay_update(data) {
      var _iterator7 = dc_events_createForOfIteratorHelper(data),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var ov = _step7.value;
          if (!ov.data) continue;
          var obj = this.get_one("".concat(ov.id));

          if (obj) {
            this.fast_merge(obj.data, ov.data, false);
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    } // Clean-up unfinished business (tools)

  }, {
    key: "before_destroy",
    value: function before_destroy() {
      var f = function f(x) {
        return !x.settings.$state || x.settings.$state === 'finished';
      };

      this.data.onchart = this.data.onchart.filter(f);
      this.data.offchart = this.data.offchart.filter(f);
      this.drawing_mode_off();
      this.on_scroll_lock(false);
      this.object_selected([]);
      this.ww.destroy();
    } // Get overlay by grid-layer id

  }, {
    key: "get_overlay",
    value: function get_overlay(obj) {
      var id = obj.id || "g".concat(obj.grid_id, "_").concat(obj.layer_id);
      var dcid = obj.uuid || this.gldc[id];
      return this.get_one("".concat(dcid));
    }
  }]);

  return DCEvents;
}();


// CONCATENATED MODULE: ./src/helpers/dc_core.js









function dc_core_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = dc_core_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function dc_core_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return dc_core_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dc_core_arrayLikeToArray(o, minLen); }

function dc_core_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// DataCube "private" methods




var dc_core_DCCore = /*#__PURE__*/function (_DCEvents) {
  inherits_default()(DCCore, _DCEvents);

  var _super = _createSuper(DCCore);

  function DCCore() {
    classCallCheck_default()(this, DCCore);

    return _super.apply(this, arguments);
  }

  createClass_default()(DCCore, [{
    key: "init_tvjs",
    // Set TV instance (once). Called by TradingVue itself
    value: function init_tvjs($root) {
      var _this = this;

      if (!this.tv) {
        this.tv = $root;
        this.init_data();
        this.update_ids(); // Listen to all setting changes
        // TODO: works only with merge()

        this.tv.$watch(function () {
          return _this.get_by_query('.settings');
        }, function (n, p) {
          return _this.on_settings(n, p);
        }); // Listen to all indices changes

        this.tv.$watch(function () {
          return _this.get('.').map(function (x) {
            return x.settings.$uuid;
          });
        }, function (n, p) {
          return _this.on_ids_changed(n, p);
        }); // Watch for all 'datasets' changes

        this.tv.$watch(function () {
          return _this.get('datasets');
        }, dataset_Dataset.watcher.bind(this));
      }
    } // Init Data Structure v1.1

  }, {
    key: "init_data",
    value: function init_data($root) {
      if (!('chart' in this.data)) {
        this.data.chart = {
          type: 'Candles',
          data: this.data.ohlcv || []
        };
      }

      if (!('onchart' in this.data)) {
        this.data.onchart = [];
      }

      if (!('offchart' in this.data)) {
        this.data.offchart = [];
      }

      if (!this.data.chart.settings) {
        this.data.chart.settings = {};
      } // Remove ohlcv cuz we have Data v1.1^


      delete this.data.ohlcv;

      if (!('datasets' in this.data)) {
        this.data.datasets = [];
      } // Init dataset proxies


      var _iterator = dc_core_createForOfIteratorHelper(this.data.datasets),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var ds = _step.value;
          if (!this.dss) this.dss = {};
          this.dss[ds.id] = new dataset_Dataset(this, ds);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } // Range change callback (called by TradingVue)
    // TODO: improve (reliablity + chunk with limited size)

  }, {
    key: "range_changed",
    value: function () {
      var _range_changed = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(range, tf, check) {
        var _this2 = this;

        var first, prom;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (check === void 0) {
                  check = false;
                }

                if (this.loader) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                if (this.loading) {
                  _context.next = 19;
                  break;
                }

                first = this.data.chart.data[0][0];

                if (!(range[0] < first)) {
                  _context.next = 19;
                  break;
                }

                this.loading = true;
                _context.next = 9;
                return utils.pause(250);

              case 9:
                // Load bigger chunks
                range = range.slice(); // copy

                range[0] = Math.floor(range[0]);
                range[1] = Math.floor(first);
                prom = this.loader(range, tf, function (d) {
                  // Callback way
                  _this2.chunk_loaded(d);
                });

                if (!(prom && prom.then)) {
                  _context.next = 19;
                  break;
                }

                _context.t0 = this;
                _context.next = 17;
                return prom;

              case 17:
                _context.t1 = _context.sent;

                _context.t0.chunk_loaded.call(_context.t0, _context.t1);

              case 19:
                if (!check) this.last_chunk = [range, tf];

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function range_changed(_x, _x2, _x3) {
        return _range_changed.apply(this, arguments);
      }

      return range_changed;
    }() // A new chunk of data is loaded
    // TODO: bulletproof fetch

  }, {
    key: "chunk_loaded",
    value: function chunk_loaded(data) {
      // Updates only candlestick data, or
      if (Array.isArray(data)) {
        this.merge('chart.data', data);
      } else {
        // Bunch of overlays, including chart.data
        for (var k in data) {
          this.merge(k, data[k]);
        }
      }

      this.loading = false;

      if (this.last_chunk) {
        this.range_changed.apply(this, toConsumableArray_default()(this.last_chunk).concat([true]));
        this.last_chunk = null;
      }
    } // Update ids for all overlays

  }, {
    key: "update_ids",
    value: function update_ids() {
      this.data.chart.id = "chart.".concat(this.data.chart.type);
      var count = {}; // grid_id,layer_id => DC id mapping

      this.gldc = {}, this.dcgl = {};

      var _iterator2 = dc_core_createForOfIteratorHelper(this.data.onchart),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var ov = _step2.value;

          if (count[ov.type] === undefined) {
            count[ov.type] = 0;
          }

          var i = count[ov.type]++;
          ov.id = "onchart.".concat(ov.type).concat(i);
          if (!ov.name) ov.name = ov.type + " ".concat(i);
          if (!ov.settings) ov.settings = {}; // grid_id,layer_id => DC id mapping

          this.gldc["g0_".concat(ov.type, "_").concat(i)] = ov.id;
          this.dcgl[ov.id] = "g0_".concat(ov.type, "_").concat(i);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      count = {};
      var grids = [{}];
      var gid = 0;

      var _iterator3 = dc_core_createForOfIteratorHelper(this.data.offchart),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var ov = _step3.value;

          if (count[ov.type] === undefined) {
            count[ov.type] = 0;
          }

          var _i = count[ov.type]++;

          ov.id = "offchart.".concat(ov.type).concat(_i);
          if (!ov.name) ov.name = ov.type + " ".concat(_i);
          if (!ov.settings) ov.settings = {}; // grid_id,layer_id => DC id mapping

          gid++;
          var rgid = (ov.grid || {}).id || gid; // real grid_id
          // When we merge grid, skip ++

          if ((ov.grid || {}).id) gid--;
          if (!grids[rgid]) grids[rgid] = {};

          if (grids[rgid][ov.type] === undefined) {
            grids[rgid][ov.type] = 0;
          }

          var ri = grids[rgid][ov.type]++;
          this.gldc["g".concat(rgid, "_").concat(ov.type, "_").concat(ri)] = ov.id;
          this.dcgl[ov.id] = "g".concat(rgid, "_").concat(ov.type, "_").concat(ri);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    } // TODO: chart refine (from the exchange chart)

  }, {
    key: "update_candle",
    value: function update_candle(data) {
      var ohlcv = this.data.chart.data;
      var last = ohlcv[ohlcv.length - 1];
      var candle = data['candle'];
      var tf = this.tv.$refs.chart.interval_ms;
      var t_next = last[0] + tf;
      var now = data.t || utils.now();
      var t = now >= t_next ? now - now % tf : last[0]; // Update the entire candle

      if (candle.length >= 6) {
        t = candle[0];
      } else {
        candle = [t].concat(toConsumableArray_default()(candle));
      }

      this.agg.push('ohlcv', candle);
      this.update_overlays(data, t, tf);
      return t >= t_next;
    }
  }, {
    key: "update_tick",
    value: function update_tick(data) {
      var ohlcv = this.data.chart.data;
      var last = ohlcv[ohlcv.length - 1];
      var tick = data['price'];
      var volume = data['volume'] || 0;
      var tf = this.tv.$refs.chart.interval_ms;

      if (!tf) {
        return console.warn('Define the main timeframe');
      }

      var now = data.t || utils.now();
      if (!last) last = [now - now % tf];
      var t_next = last[0] + tf;
      var t = now >= t_next ? now - now % tf : last[0];

      if ((t >= t_next || !ohlcv.length) && tick !== undefined) {
        // And new zero-height candle
        var nc = [t, tick, tick, tick, tick, volume];
        this.agg.push('ohlcv', nc, tf);
        ohlcv.push(nc);
        this.scroll_to(t);
      } else if (tick !== undefined) {
        // Update an existing one
        // TODO: make a separate class Sampler
        last[2] = Math.max(tick, last[2]);
        last[3] = Math.min(tick, last[3]);
        last[4] = tick;
        last[5] += volume;
        this.agg.push('ohlcv', last, tf);
      }

      this.update_overlays(data, t, tf);
      return t >= t_next;
    } // Updates all overlays with given values.

  }, {
    key: "update_overlays",
    value: function update_overlays(data, t, tf) {
      for (var k in data) {
        if (k === 'price' || k === 'volume' || k === 'candle' || k === 't') {
          continue;
        }

        if (k.includes('datasets.')) {
          this.agg.push(k, data[k], tf);
          continue;
        }

        if (!Array.isArray(data[k])) {
          var val = [data[k]];
        } else {
          val = data[k];
        }

        if (!k.includes('.data')) k += '.data';
        this.agg.push(k, [t].concat(toConsumableArray_default()(val)), tf);
      }
    } // Returns array of objects matching query.
    // Object contains { parent, index, value }
    // TODO: query caching

  }, {
    key: "get_by_query",
    value: function get_by_query(query, chuck) {
      var tuple = query.split('.');

      switch (tuple[0]) {
        case 'chart':
          var result = this.chart_as_piv(tuple);
          break;

        case 'onchart':
        case 'offchart':
          result = this.query_search(query, tuple);
          break;

        case 'datasets':
          result = this.query_search(query, tuple);

          var _iterator4 = dc_core_createForOfIteratorHelper(result),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var r = _step4.value;

              if (r.i === 'data') {
                r.v = this.dss[r.p.id].data();
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          break;

        default:
          /* Should get('.') return also the chart? */

          /*let ch = this.chart_as_query([
              'chart',
              tuple[1]
          ])*/
          var on = this.query_search(query, ['onchart', tuple[0], tuple[1]]);
          var off = this.query_search(query, ['offchart', tuple[0], tuple[1]]);
          result = [].concat(toConsumableArray_default()(on), toConsumableArray_default()(off));
          break;
      }

      return result.filter(function (x) {
        return !(x.v || {}).locked || chuck;
      });
    }
  }, {
    key: "chart_as_piv",
    value: function chart_as_piv(tuple) {
      var field = tuple[1];
      if (field) return [{
        p: this.data.chart,
        i: field,
        v: this.data.chart[field]
      }];else return [{
        p: this.data,
        i: 'chart',
        v: this.data.chart
      }];
    }
  }, {
    key: "query_search",
    value: function query_search(query, tuple) {
      var _this3 = this;

      var side = tuple[0];
      var path = tuple[1] || '';
      var field = tuple[2];
      var arr = this.data[side].filter(function (x) {
        return x.id === query || x.id && x.id.includes(path) || x.name === query || x.name && x.name.includes(path) || query.includes((x.settings || {}).$uuid);
      });

      if (field) {
        return arr.map(function (x) {
          return {
            p: x,
            i: field,
            v: x[field]
          };
        });
      }

      return arr.map(function (x, i) {
        return {
          p: _this3.data[side],
          i: _this3.data[side].indexOf(x),
          v: x
        };
      });
    }
  }, {
    key: "merge_objects",
    value: function merge_objects(obj, data, new_obj) {
      if (new_obj === void 0) {
        new_obj = {};
      }

      // The only way to get Vue to update all stuff
      // reactively is to create a brand new object.
      // TODO: Is there a simpler approach?
      Object.assign(new_obj, obj.v);
      Object.assign(new_obj, data);
      obj.p[obj.i] = new_obj;
    } // Merge overlapping time series

  }, {
    key: "merge_ts",
    value: function merge_ts(obj, data) {
      // Assume that both arrays are pre-sorted
      if (!data.length) return obj.v;
      var r1 = [obj.v[0][0], obj.v[obj.v.length - 1][0]];
      var r2 = [data[0][0], data[data.length - 1][0]]; // Overlap

      var o = [Math.max(r1[0], r2[0]), Math.min(r1[1], r2[1])];

      if (o[1] >= o[0]) {
        var _obj$v, _data;

        var _this$ts_overlap = this.ts_overlap(obj.v, data, o),
            od = _this$ts_overlap.od,
            d1 = _this$ts_overlap.d1,
            d2 = _this$ts_overlap.d2;

        (_obj$v = obj.v).splice.apply(_obj$v, toConsumableArray_default()(d1));

        (_data = data).splice.apply(_data, toConsumableArray_default()(d2)); // Dst === Overlap === Src


        if (!obj.v.length && !data.length) {
          obj.p[obj.i] = od;
          return obj.v;
        } // If src is totally contained in dst


        if (!data.length) {
          data = obj.v.splice(d1[0]);
        } // If dst is totally contained in src


        if (!obj.v.length) {
          obj.v = data.splice(d2[0]);
        }

        obj.p[obj.i] = this.combine(obj.v, od, data);
      } else {
        obj.p[obj.i] = this.combine(obj.v, [], data);
      }

      return obj.v;
    } // TODO: review performance, move to worker

  }, {
    key: "ts_overlap",
    value: function ts_overlap(arr1, arr2, range) {
      var t1 = range[0];
      var t2 = range[1];
      var ts = {}; // timestamp map

      var a1 = arr1.filter(function (x) {
        return x[0] >= t1 && x[0] <= t2;
      });
      var a2 = arr2.filter(function (x) {
        return x[0] >= t1 && x[0] <= t2;
      }); // Indices of segments

      var id11 = arr1.indexOf(a1[0]);
      var id12 = arr1.indexOf(a1[a1.length - 1]);
      var id21 = arr2.indexOf(a2[0]);
      var id22 = arr2.indexOf(a2[a2.length - 1]);

      for (var i = 0; i < a1.length; i++) {
        ts[a1[i][0]] = a1[i];
      }

      for (var i = 0; i < a2.length; i++) {
        ts[a2[i][0]] = a2[i];
      }

      var ts_sorted = Object.keys(ts).sort();
      return {
        od: ts_sorted.map(function (x) {
          return ts[x];
        }),
        d1: [id11, id12 - id11 + 1],
        d2: [id21, id22 - id21 + 1]
      };
    } // Combine parts together:
    // (destination, overlap, source)

  }, {
    key: "combine",
    value: function combine(dst, o, src) {
      function last(arr) {
        return arr[arr.length - 1][0];
      }

      if (!dst.length) {
        dst = o;
        o = [];
      }

      if (!src.length) {
        src = o;
        o = [];
      } // The overlap right in the middle


      if (src[0][0] >= dst[0][0] && last(src) <= last(dst)) {
        return Object.assign(dst, o); // The overlap is on the right
      } else if (last(src) > last(dst)) {
        // Psh(...) is faster but can overflow the stack
        if (o.length < 100000 && src.length < 100000) {
          var _dst;

          (_dst = dst).push.apply(_dst, toConsumableArray_default()(o).concat(toConsumableArray_default()(src)));

          return dst;
        } else {
          return dst.concat(o, src);
        } // The overlap is on the left

      } else if (src[0][0] < dst[0][0]) {
        // Push(...) is faster but can overflow the stack
        if (o.length < 100000 && src.length < 100000) {
          var _src;

          (_src = src).push.apply(_src, toConsumableArray_default()(o).concat(toConsumableArray_default()(dst)));

          return src;
        } else {
          return src.concat(o, dst);
        }
      } else {
        return [];
      }
    } // Simple data-point merge (faster)

  }, {
    key: "fast_merge",
    value: function fast_merge(data, point, main) {
      if (main === void 0) {
        main = true;
      }

      if (!data) return;
      var last_t = (data[data.length - 1] || [])[0];
      var upd_t = point[0];

      if (!data.length || upd_t > last_t) {
        data.push(point);

        if (main && this.sett.auto_scroll) {
          this.scroll_to(upd_t);
        }
      } else if (upd_t === last_t) {
        data[data.length - 1] = point;
      }
    }
  }, {
    key: "scroll_to",
    value: function scroll_to(t) {
      if (this.tv.$refs.chart.cursor.locked) return;
      var last = this.tv.$refs.chart.last_candle;
      if (!last) return;
      var tl = last[0];
      var d = this.tv.getRange()[1] - tl;
      if (d > 0) this.tv["goto"](t + d);
    }
  }]);

  return DCCore;
}(dc_events_DCEvents);


// CONCATENATED MODULE: ./src/helpers/sett_proxy.js
// Sends all dc.sett changes to the web-worker
/* harmony default export */ var sett_proxy = (function (sett, ww) {
  var h = {
    get: function get(sett, k) {
      return sett[k];
    },
    set: function set(sett, k, v) {
      sett[k] = v;
      ww.just('update-dc-settings', sett);
      return true;
    }
  };
  ww.just('update-dc-settings', sett);
  return new Proxy(sett, h);
});
// CONCATENATED MODULE: ./src/helpers/agg_tool.js


// Tick aggregation


var agg_tool_AggTool = /*#__PURE__*/function () {
  function AggTool(dc, _int) {
    if (_int === void 0) {
      _int = 100;
    }

    classCallCheck_default()(this, AggTool);

    this.symbols = {};
    this["int"] = _int; // Itarval in ms

    this.dc = dc;
    this.st_id = null;
    this.data_changed = false;
  }

  createClass_default()(AggTool, [{
    key: "push",
    value: function push(sym, upd, tf) {
      var _this = this;

      // Start auto updates
      if (!this.st_id) {
        this.st_id = setTimeout(function () {
          return _this.update();
        });
      }

      tf = parseInt(tf);
      var old = this.symbols[sym];
      var t = utils.now();
      var isds = sym.includes('datasets.');
      this.data_changed = true;

      if (!old) {
        this.symbols[sym] = {
          upd: upd,
          t: t,
          data: []
        };
      } else if (upd[0] >= old.upd[0] + tf && !isds) {
        // Refine the previous data point
        this.refine(sym, old.upd.slice());
        this.symbols[sym] = {
          upd: upd,
          t: t,
          data: []
        };
      } else {
        // Tick updates the current
        this.symbols[sym].upd = upd;
        this.symbols[sym].t = t;
      }

      if (isds) {
        this.symbols[sym].data.push(upd);
      }
    }
  }, {
    key: "update",
    value: function update() {
      var _this2 = this;

      var out = {};

      for (var sym in this.symbols) {
        var upd = this.symbols[sym].upd;

        switch (sym) {
          case 'ohlcv':
            var data = this.dc.data.chart.data;
            this.dc.fast_merge(data, upd);
            out.ohlcv = data.slice(-2);
            break;

          default:
            if (sym.includes('datasets.')) {
              this.update_ds(sym, out);
              continue;
            }

            var data = this.dc.get_one("".concat(sym));
            if (!data) continue;
            this.dc.fast_merge(data, upd, false);
            break;
        }
      } // TODO: fill gaps


      if (this.data_changed) {
        this.dc.ww.just('update-data', out);
        this.data_changed = false;
      }

      setTimeout(function () {
        return _this2.update();
      }, this["int"]);
    }
  }, {
    key: "refine",
    value: function refine(sym, upd) {
      if (sym === 'ohlcv') {
        var data = this.dc.data.chart.data;
        this.dc.fast_merge(data, upd);
      } else {
        var data = this.dc.get_one("".concat(sym));
        if (!data) return;
        this.dc.fast_merge(data, upd, false);
      }
    }
  }, {
    key: "update_ds",
    value: function update_ds(sym, out) {
      var data = this.symbols[sym].data;

      if (data.length) {
        out[sym] = data;
        this.symbols[sym].data = [];
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this.symbols = {};
    }
  }]);

  return AggTool;
}();


// CONCATENATED MODULE: ./src/helpers/datacube.js








function datacube_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = datacube_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function datacube_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return datacube_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return datacube_arrayLikeToArray(o, minLen); }

function datacube_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function datacube_createSuper(Derived) { var hasNativeReflectConstruct = datacube_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function datacube_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// Main DataHelper class. A container for data,
// which works as a proxy and CRUD interface



 // Interface methods. Private methods in dc_core.js

var datacube_DataCube = /*#__PURE__*/function (_DCCore) {
  inherits_default()(DataCube, _DCCore);

  var _super = datacube_createSuper(DataCube);

  function DataCube(data, sett) {
    var _this;

    if (data === void 0) {
      data = {};
    }

    if (sett === void 0) {
      sett = {};
    }

    classCallCheck_default()(this, DataCube);

    var def_sett = {
      aggregation: 100,
      // Update aggregation interval
      script_depth: 0,
      // 0 === Exec on all data
      auto_scroll: true,
      // Auto scroll to a new candle
      scripts: true,
      // Enable overlays scripts,
      ww_ram_limit: 0,
      // WebWorker RAM limit (MB)
      node_url: null,
      // Use node.js instead of WW
      shift_measure: true // Draw measurment shift+click

    };
    sett = Object.assign(def_sett, sett);
    _this = _super.call(this);
    _this.sett = sett;
    _this.data = data;
    _this.sett = sett_proxy(sett, _this.ww);
    _this.agg = new agg_tool_AggTool(assertThisInitialized_default()(_this), sett.aggregation);
    _this.se_state = {}; //this.agg.update = this.agg_update.bind(this)

    return _this;
  } // Add new overlay


  createClass_default()(DataCube, [{
    key: "add",
    value: function add(side, overlay) {
      if (side !== 'onchart' && side !== 'offchart' && side !== 'datasets') {
        return;
      }

      this.data[side].push(overlay);
      this.update_ids();
      return overlay.id;
    } // Get all objects matching the query

  }, {
    key: "get",
    value: function get(query) {
      return this.get_by_query(query).map(function (x) {
        return x.v;
      });
    } // Get first object matching the query

  }, {
    key: "get_one",
    value: function get_one(query) {
      return this.get_by_query(query).map(function (x) {
        return x.v;
      })[0];
    } // Set data (reactively)

  }, {
    key: "set",
    value: function set(query, data) {
      var objects = this.get_by_query(query);

      var _iterator = datacube_createForOfIteratorHelper(objects),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var obj = _step.value;
          var i = obj.i !== undefined ? obj.i : obj.p.indexOf(obj.v);

          if (i !== -1) {
            obj.p[i] = data;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.update_ids();
    } // Merge object or array (reactively)

  }, {
    key: "merge",
    value: function merge(query, data) {
      var objects = this.get_by_query(query);

      var _iterator2 = datacube_createForOfIteratorHelper(objects),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var obj = _step2.value;

          if (Array.isArray(obj.v)) {
            if (!Array.isArray(data)) continue; // If array is a timeseries, merge it by timestamp
            // else merge by item index

            if (obj.v[0] && obj.v[0].length >= 2) {
              this.merge_ts(obj, data);
            } else {
              this.merge_objects(obj, data, []);
            }
          } else if (typeof_default()(obj.v) === 'object') {
            this.merge_objects(obj, data);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      this.update_ids();
    } // Remove an overlay by query (id/type/name/...)

  }, {
    key: "del",
    value: function del(query) {
      var objects = this.get_by_query(query);

      var _iterator3 = datacube_createForOfIteratorHelper(objects),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var obj = _step3.value;
          // Find current index of the field (if not defined)
          var i = typeof obj.i !== 'number' ? obj.i : obj.p.indexOf(obj.v);

          if (i !== -1) {
            this.tv.$delete(obj.p, i);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      this.update_ids();
    } // Update/append data point, depending on timestamp

  }, {
    key: "update",
    value: function update(data) {
      if (data['candle']) {
        return this.update_candle(data);
      } else {
        return this.update_tick(data);
      }
    } // Lock overlays from being pulled by query_search
    // TODO: subject to review

  }, {
    key: "lock",
    value: function lock(query) {
      var objects = this.get_by_query(query);
      objects.forEach(function (x) {
        if (x.v && x.v.id && x.v.type) {
          x.v.locked = true;
        }
      });
    } // Unlock overlays from being pulled by query_search
    //

  }, {
    key: "unlock",
    value: function unlock(query) {
      var objects = this.get_by_query(query, true);
      objects.forEach(function (x) {
        if (x.v && x.v.id && x.v.type) {
          x.v.locked = false;
        }
      });
    } // Show indicator

  }, {
    key: "show",
    value: function show(query) {
      if (query === 'offchart' || query === 'onchart') {
        query += '.';
      } else if (query === '.') {
        query = '';
      }

      this.merge(query + '.settings', {
        display: true
      });
    } // Hide indicator

  }, {
    key: "hide",
    value: function hide(query) {
      if (query === 'offchart' || query === 'onchart') {
        query += '.';
      } else if (query === '.') {
        query = '';
      }

      this.merge(query + '.settings', {
        display: false
      });
    } // Set data loader callback

  }, {
    key: "onrange",
    value: function onrange(callback) {
      var _this2 = this;

      this.loader = callback;
      setTimeout(function () {
        return _this2.tv.set_loader(callback ? _this2 : null);
      }, 0);
    }
  }]);

  return DataCube;
}(dc_core_DCCore);


// CONCATENATED MODULE: ./src/stuff/mouse.js



function mouse_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = mouse_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function mouse_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return mouse_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return mouse_arrayLikeToArray(o, minLen); }

function mouse_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Mouse event handler for overlay
var mouse_Mouse = /*#__PURE__*/function () {
  function Mouse(comp) {
    classCallCheck_default()(this, Mouse);

    this.comp = comp;
    this.map = {};
    this.listeners = 0;
    this.pressed = false;
    this.x = comp.$props.cursor.x;
    this.y = comp.$props.cursor.y;
    this.t = comp.$props.cursor.t;
    this.y$ = comp.$props.cursor.y$;
  } // You can choose where to place the handler
  // (beginning or end of the queue)


  createClass_default()(Mouse, [{
    key: "on",
    value: function on(name, handler, dir) {
      if (dir === void 0) {
        dir = "unshift";
      }

      if (!handler) return;
      this.map[name] = this.map[name] || [];
      this.map[name][dir](handler);
      this.listeners++;
    }
  }, {
    key: "off",
    value: function off(name, handler) {
      if (!this.map[name]) return;
      var i = this.map[name].indexOf(handler);
      if (i < 0) return;
      this.map[name].splice(i, 1);
      this.listeners--;
    } // Called by grid.js

  }, {
    key: "emit",
    value: function emit(name, event) {
      var l = this.comp.layout;

      if (name in this.map) {
        var _iterator = mouse_createForOfIteratorHelper(this.map[name]),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var f = _step.value;
            f(event);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      if (name === 'mousemove') {
        this.x = event.layerX;
        this.y = event.layerY;
        this.t = l.screen2t(this.x);
        this.y$ = l.screen2$(this.y);
      }

      if (name === 'mousedown') {
        this.pressed = true;
      }

      if (name === 'mouseup') {
        this.pressed = false;
      }
    }
  }]);

  return Mouse;
}();


// CONCATENATED MODULE: ./src/mixins/overlay.js
// Usuful stuff for creating overlays. Include as mixin

/* harmony default export */ var mixins_overlay = ({
  props: ['id', 'num', 'interval', 'cursor', 'colors', 'layout', 'sub', 'data', 'settings', 'grid_id', 'font', 'config', 'meta', 'tf', 'i0'],
  emits: ['new-grid-layer', 'layer-meta-props', 'delete-grid-layer', 'custom-event', 'show-grid-layer', 'drawing-mode-off', 'scroll-lock', 'change-settings', 'object-selected', 'new-shader', 'remove-tool', 'redraw-grid'],
  mounted: function mounted() {
    // TODO(1): when hot reloading, dynamicaly changed mixins
    // dissapear (cuz it's a hack), the only way for now
    // is to reload the browser
    if (!this.draw) {
      this.draw = function (ctx) {
        var text = 'EARLY ADOPTER BUG: reload the browser & enjoy';
        console.warn(text);
      };
    } // Main chart?


    var main = this.$props.sub === this.$props.data;
    this.meta_info();
    this.$emit('new-grid-layer', {
      name: this.$options.name,
      id: this.$props.id,
      renderer: this,
      display: 'display' in this.$props.settings ? this.$props.settings['display'] : true,
      z: this.$props.settings['z-index'] || this.$props.settings['zIndex'] || (main ? 0 : -1)
    }); // Overlay meta-props (adjusting behaviour)

    this.$emit('layer-meta-props', {
      grid_id: this.$props.grid_id,
      layer_id: this.$props.id,
      legend: this.legend,
      data_colors: this.data_colors,
      y_range: this.y_range
    });
    this.exec_script();
    this.mouse = new mouse_Mouse(this);
    if (this.init_tool) this.init_tool();
    if (this.init) this.init();
  },
  beforeUnmount: function beforeUnmount() {
    if (this.destroy) this.destroy();
    this.$emit('delete-grid-layer', this.$props.id);
  },
  methods: {
    use_for: function use_for() {
      /* override it (mandatory) */
      console.warn('use_for() should be implemented');
      console.warn("Format: use_for() {\n                  return ['type1', 'type2', ...]\n            }");
    },
    meta_info: function meta_info() {
      /* override it (optional) */
      var id = this.$props.id;
      console.warn("".concat(id, " meta_info() is req. for publishing"));
      console.warn("Format: meta_info() {\n                author: 'Satoshi Smith',\n                version: '1.0.0',\n                contact (opt) '<email>'\n                github: (opt) '<GitHub Page>',\n            }");
    },
    custom_event: function custom_event(event) {
      if (event.split(':')[0] === 'hook') return;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (event === 'change-settings' || event === 'object-selected' || event === 'new-shader' || event === 'new-interface' || event === 'remove-tool') {
        args.push(this.grid_id, this.id);

        if (this.$props.settings.$uuid) {
          args.push(this.$props.settings.$uuid);
        }
      }

      if (event === 'new-interface') {
        args[0].overlay = this;
        args[0].uuid = this.last_ux_id = "".concat(this.grid_id, "-").concat(this.id, "-").concat(this.uxs_count++);
      }

      this.$emit('custom-event', {
        event: event,
        args: args
      });
    },
    // TODO: the event is not firing when the same
    // overlay type is added to the offchart[]
    exec_script: function exec_script() {
      if (this.calc) this.$emit('exec-script', {
        grid_id: this.$props.grid_id,
        layer_id: this.$props.id,
        src: this.calc(),
        use_for: this.use_for()
      });
    }
  },
  watch: {
    settings: {
      handler: function handler(n, p) {
        if (this.watch_uuid) this.watch_uuid(n, p);
        this.$emit('show-grid-layer', {
          id: this.$props.id,
          display: 'display' in this.$props.settings ? this.$props.settings['display'] : true
        });
      },
      deep: true
    }
  },
  data: function data() {
    return {
      uxs_count: 0,
      last_ux_id: null
    };
  },
  render: function render() {
    return [];
  }
});
// CONCATENATED MODULE: ./src/stuff/keys.js



function keys_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = keys_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function keys_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return keys_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return keys_arrayLikeToArray(o, minLen); }

function keys_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Keyboard event handler for overlay
var keys_Keys = /*#__PURE__*/function () {
  function Keys(comp) {
    classCallCheck_default()(this, Keys);

    this.comp = comp;
    this.map = {};
    this.listeners = 0;
    this.keymap = {};
  }

  createClass_default()(Keys, [{
    key: "on",
    value: function on(name, handler) {
      if (!handler) return;
      this.map[name] = this.map[name] || [];
      this.map[name].push(handler);
      this.listeners++;
    } // Called by grid.js

  }, {
    key: "emit",
    value: function emit(name, event) {
      if (name in this.map) {
        var _iterator = keys_createForOfIteratorHelper(this.map[name]),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var f = _step.value;
            f(event);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      if (name === 'keydown') {
        if (!this.keymap[event.key]) {
          this.emit(event.key);
        }

        this.keymap[event.key] = true;
      }

      if (name === 'keyup') {
        this.keymap[event.key] = false;
      }
    }
  }, {
    key: "pressed",
    value: function pressed(key) {
      return this.keymap[key];
    }
  }]);

  return Keys;
}();


// CONCATENATED MODULE: ./src/mixins/tool.js
function tool_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = tool_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function tool_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return tool_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return tool_arrayLikeToArray(o, minLen); }

function tool_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Usuful stuff for creating tools. Include as mixin


/* harmony default export */ var mixins_tool = ({
  methods: {
    init_tool: function init_tool() {
      var _this = this;

      // Collision functions (float, float) => bool,
      this.collisions = [];
      this.pins = [];
      this.mouse.on('mousemove', function (e) {
        if (_this.collisions.some(function (f) {
          return f(_this.mouse.x, _this.mouse.y);
        })) {
          _this.show_pins = true;
        } else {
          _this.show_pins = false;
        }

        if (_this.drag) _this.drag_update();
      });
      this.mouse.on('mousedown', function (e) {
        if (utils.default_prevented(e)) return;

        if (_this.collisions.some(function (f) {
          return f(_this.mouse.x, _this.mouse.y);
        })) {
          if (!_this.selected) {
            _this.$emit('object-selected');
          }

          _this.start_drag();

          e.preventDefault();

          _this.pins.forEach(function (x) {
            return x.mousedown(e, true);
          });
        }
      });
      this.mouse.on('mouseup', function (e) {
        _this.drag = null;

        _this.$emit('scroll-lock', false);
      });
      this.keys = new keys_Keys(this);
      this.keys.on('Delete', this.remove_tool);
      this.keys.on('Backspace', this.remove_tool);
      this.show_pins = false;
      this.drag = null;
    },
    render_pins: function render_pins(ctx) {
      if (this.selected || this.show_pins) {
        this.pins.forEach(function (x) {
          return x.draw(ctx);
        });
      }
    },
    set_state: function set_state(name) {
      this.$emit('change-settings', {
        $state: name
      });
    },
    watch_uuid: function watch_uuid(n, p) {
      // If layer $uuid is changed, then re-init
      // pins & collisions
      if (n.$uuid !== p.$uuid) {
        var _iterator = tool_createForOfIteratorHelper(this.pins),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var p = _step.value;
            p.re_init();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        this.collisions = [];
        this.show_pins = false;
        this.drag = null;
      }
    },
    pre_draw: function pre_draw() {
      // Delete all collision functions before
      // the draw() call and let primitives set
      // them again
      this.collisions = [];
    },
    remove_tool: function remove_tool() {
      if (this.selected) this.$emit('remove-tool');
    },
    start_drag: function start_drag() {
      this.$emit('scroll-lock', true);
      var cursor = this.$props.cursor;
      this.drag = {
        t: cursor.t,
        y$: cursor.y$
      };
      this.pins.forEach(function (x) {
        return x.rec_position();
      });
    },
    drag_update: function drag_update() {
      var dt = this.$props.cursor.t - this.drag.t;
      var dy = this.$props.cursor.y$ - this.drag.y$;
      this.pins.forEach(function (x) {
        return x.update_from([x.t1 + dt, x.y$1 + dy], true);
      });
    }
  },
  computed: {
    // Settings starting with $ are reserved
    selected: function selected() {
      return this.$props.settings.$selected;
    },
    state: function state() {
      return this.$props.settings.$state;
    }
  }
});
// CONCATENATED MODULE: ./src/mixins/interface.js
// Html interface, shown on top of the grid.
// Can be static (a tooltip) or interactive,
// e.g. a control panel.
/* harmony default export */ var mixins_interface = ({
  props: ['ux', 'updater', 'colors', 'wrapper'],
  mounted: function mounted() {
    this._$emit = this.$emit;
    this.$emit = this.custom_event;
    if (this.init) this.init();
  },
  methods: {
    close: function close() {
      this.$emit('custom-event', {
        event: 'close-interface',
        args: [this.$props.ux.uuid]
      });
    },
    // TODO: emit all the way to the uxlist
    // add apply the changes there
    modify: function modify(obj) {
      this.$emit('custom-event', {
        event: 'modify-interface',
        args: [this.$props.ux.uuid, obj]
      });
    },
    custom_event: function custom_event(event) {
      if (event.split(':')[0] === 'hook') return;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      this._$emit('custom-event', {
        event: event,
        args: args
      });
    }
  },
  computed: {
    overlay: function overlay() {
      return this.$props.ux.overlay;
    },
    layout: function layout() {
      return this.overlay.layout;
    },
    uxr: function uxr() {
      return this.$props.ux;
    }
  },
  data: function data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/components/primitives/candle.js



// Candle object for Candles overlay
var candle_CandleExt = /*#__PURE__*/function () {
  function CandleExt(overlay, ctx, data) {
    classCallCheck_default()(this, CandleExt);

    this.ctx = ctx;
    this.self = overlay;
    this.style = data.raw[6] || this.self;
    this.draw(data);
  }

  createClass_default()(CandleExt, [{
    key: "draw",
    value: function draw(data) {
      var green = data.raw[4] >= data.raw[1];
      var body_color = green ? this.style.colorCandleUp : this.style.colorCandleDw;
      var wick_color = green ? this.style.colorWickUp : this.style.colorWickDw;
      var w = Math.max(data.w, 1);
      var hw = Math.max(Math.floor(w * 0.5), 1);
      var h = Math.abs(data.o - data.c);
      var max_h = data.c === data.o ? 1 : 2;
      var x05 = Math.floor(data.x) - 0.5;
      this.ctx.strokeStyle = wick_color;
      this.ctx.beginPath();
      this.ctx.moveTo(x05, Math.floor(data.h));
      this.ctx.lineTo(x05, Math.floor(data.l));
      this.ctx.stroke();

      if (data.w > 1.5) {
        this.ctx.fillStyle = body_color; // TODO: Move common calculations to layout.js

        var s = green ? 1 : -1;
        this.ctx.fillRect(Math.floor(data.x - hw - 1), data.c, Math.floor(hw * 2 + 1), s * Math.max(h, max_h));
      } else {
        this.ctx.strokeStyle = body_color;
        this.ctx.beginPath();
        this.ctx.moveTo(x05, Math.floor(Math.min(data.o, data.c)));
        this.ctx.lineTo(x05, Math.floor(Math.max(data.o, data.c)) + (data.o === data.c ? 1 : 0));
        this.ctx.stroke();
      }
    }
  }]);

  return CandleExt;
}();


// CONCATENATED MODULE: ./src/components/primitives/volbar.js



var volbar_VolbarExt = /*#__PURE__*/function () {
  function VolbarExt(overlay, ctx, data) {
    classCallCheck_default()(this, VolbarExt);

    this.ctx = ctx;
    this.$p = overlay.$props;
    this.self = overlay;
    this.style = data.raw[6] || this.self;
    this.draw(data);
  }

  createClass_default()(VolbarExt, [{
    key: "draw",
    value: function draw(data) {
      var y0 = this.$p.layout.height;
      var w = data.x2 - data.x1;
      var h = Math.floor(data.h);
      this.ctx.fillStyle = data.green ? this.style.colorVolUp : this.style.colorVolDw;
      this.ctx.fillRect(Math.floor(data.x1), Math.floor(y0 - h - 0.5), Math.floor(w), Math.floor(h + 1));
    }
  }]);

  return VolbarExt;
}();


// CONCATENATED MODULE: ./src/stuff/math.js
// Math/Geometry
/* harmony default export */ var math = ({
  // Distance from point to line
  // p1 = point, (p2, p3) = line
  point2line: function point2line(p1, p2, p3) {
    var _this$tri = this.tri(p1, p2, p3),
        area = _this$tri.area,
        base = _this$tri.base;

    return Math.abs(this.tri_h(area, base));
  },
  // Distance from point to segment
  // p1 = point, (p2, p3) = segment
  point2seg: function point2seg(p1, p2, p3) {
    var _this$tri2 = this.tri(p1, p2, p3),
        area = _this$tri2.area,
        base = _this$tri2.base; // Vector projection


    var proj = this.dot_prod(p1, p2, p3) / base; // Distance from left pin

    var l1 = Math.max(-proj, 0); // Distance from right pin

    var l2 = Math.max(proj - base, 0); // Normal

    var h = Math.abs(this.tri_h(area, base));
    return Math.max(h, l1, l2);
  },
  // Distance from point to ray
  // p1 = point, (p2, p3) = ray
  point2ray: function point2ray(p1, p2, p3) {
    var _this$tri3 = this.tri(p1, p2, p3),
        area = _this$tri3.area,
        base = _this$tri3.base; // Vector projection


    var proj = this.dot_prod(p1, p2, p3) / base; // Distance from left pin

    var l1 = Math.max(-proj, 0); // Normal

    var h = Math.abs(this.tri_h(area, base));
    return Math.max(h, l1);
  },
  tri: function tri(p1, p2, p3) {
    var area = this.area(p1, p2, p3);
    var dx = p3[0] - p2[0];
    var dy = p3[1] - p2[1];
    var base = Math.sqrt(dx * dx + dy * dy);
    return {
      area: area,
      base: base
    };
  },

  /* Area of triangle:
          p1
        /    \
      p2  _  p3
  */
  area: function area(p1, p2, p3) {
    return p1[0] * (p2[1] - p3[1]) + p2[0] * (p3[1] - p1[1]) + p3[0] * (p1[1] - p2[1]);
  },
  // Triangle height
  tri_h: function tri_h(area, base) {
    return area / base;
  },
  // Dot product of (p2, p3) and (p2, p1)
  dot_prod: function dot_prod(p1, p2, p3) {
    var v1 = [p3[0] - p2[0], p3[1] - p2[1]];
    var v2 = [p1[0] - p2[0], p1[1] - p2[1]];
    return v1[0] * v2[0] + v1[1] * v2[1];
  },
  // Symmetrical log
  log: function log(x) {
    // TODO: log for small values
    return Math.sign(x) * Math.log(Math.abs(x) + 1);
  },
  // Symmetrical exp
  exp: function exp(x) {
    return Math.sign(x) * (Math.exp(Math.abs(x)) - 1);
  },
  // Middle line on log scale based on range & px height
  log_mid: function log_mid(r, h) {
    var log_hi = this.log(r[0]);
    var log_lo = this.log(r[1]);
    var px = h / 2;
    var gx = log_hi - px * (log_hi - log_lo) / h;
    return this.exp(gx);
  },
  // Return new adjusted range, based on the previous
  // range, new $_hi, target middle line
  re_range: function re_range(r1, hi2, mid) {
    var log_hi1 = this.log(r1[0]);
    var log_lo1 = this.log(r1[1]);
    var log_hi2 = this.log(hi2);
    var log_$ = this.log(mid);
    var W = (log_hi2 - log_$) * (log_hi1 - log_lo1) / (log_hi1 - log_$);
    return this.exp(log_hi2 - W);
  } // Return new adjusted range, based on the previous
  // range, new $_hi, target middle line + dy (shift)
  // WASTE

  /*range_shift(r1, hi2, mid, dy, h) {
      let log_hi1 = this.log(r1[0])
      let log_lo1 = this.log(r1[1])
      let log_hi2 = this.log(hi2)
      let log_$ = this.log(mid)
       let W = h * (log_hi2 - log_$) /
              (h * (log_hi1 - log_$) / (log_hi1 - log_lo1) + dy)
       return this.exp(log_hi2 - W)
   }*/

});
// CONCATENATED MODULE: ./src/components/primitives/line.js


// Draws a line, adds corresponding collision f-n



var line_Line = /*#__PURE__*/function () {
  // Overlay ref, canvas ctx
  function Line(overlay, ctx) {
    classCallCheck_default()(this, Line);

    this.ctx = ctx;
    this.comp = overlay;
    this.T = overlay.$props.config.TOOL_COLL;
    if (utils.is_mobile) this.T *= 2;
  } // p1[t, $], p2[t, $] (time-price coordinates)


  createClass_default()(Line, [{
    key: "draw",
    value: function draw(p1, p2) {
      var layout = this.comp.$props.layout;
      var x1 = layout.t2screen(p1[0]);
      var y1 = layout.$2screen(p1[1]);
      var x2 = layout.t2screen(p2[0]);
      var y2 = layout.$2screen(p2[1]);
      this.ctx.moveTo(x1, y1);
      this.ctx.lineTo(x2, y2);
      var w = layout.width;
      var h = layout.height; // TODO: transform k (angle) to screen ratio
      // (this requires a new a2screen function)

      var k = (y2 - y1) / (x2 - x1);
      var s = Math.sign(x2 - x1 || y2 - y1);
      var dx = w * s * 2;
      var dy = w * k * s * 2;

      if (dy === Infinity) {
        dx = 0, dy = h * s;
      }

      this.ctx.moveTo(x2, y2);
      this.ctx.lineTo(x2 + dx, y2 + dy);

      if (!this.ray) {
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x1 - dx, y1 - dy);
      }

      this.comp.collisions.push(this.make([x1, y1], [x2, y2]));
    } // Collision function. x, y - mouse coord.

  }, {
    key: "make",
    value: function make(p1, p2) {
      var _this = this;

      var f = this.ray ? math.point2ray.bind(math) : math.point2line.bind(math);
      return function (x, y) {
        return f([x, y], p1, p2) < _this.T;
      };
    }
  }]);

  return Line;
}();


// CONCATENATED MODULE: ./src/components/primitives/pin.js



// Semi-automatic pin object. For stretching things.


var pin_Pin = /*#__PURE__*/function () {
  // (Comp reference, a name in overlay settings,
  // pin parameters)
  function Pin(comp, name, params) {
    var _this = this;

    if (params === void 0) {
      params = {};
    }

    classCallCheck_default()(this, Pin);

    this.RADIUS = comp.$props.config.PIN_RADIUS || 5.5;
    this.RADIUS_SQ = Math.pow(this.RADIUS + 7, 2);

    if (utils.is_mobile) {
      this.RADIUS += 2;
      this.RADIUS_SQ *= 2.5;
    }

    this.COLOR_BACK = comp.$props.colors.back;
    this.COLOR_BR = comp.$props.colors.text;
    this.comp = comp;
    this.layout = comp.layout;
    this.mouse = comp.mouse;
    this.name = name;
    this.state = params.state || 'settled';
    this.hidden = params.hidden || false;
    this.mouse.on('mousemove', function (e) {
      return _this.mousemove(e);
    });
    this.mouse.on('mousedown', function (e) {
      return _this.mousedown(e);
    });
    this.mouse.on('mouseup', function (e) {
      return _this.mouseup(e);
    });

    if (comp.state === 'finished') {
      this.state = 'settled';
      this.update_from(comp.$props.settings[name]);
    } else {
      this.update();
    }

    if (this.state !== 'settled') {
      this.comp.$emit('scroll-lock', true);
    }
  }

  createClass_default()(Pin, [{
    key: "re_init",
    value: function re_init() {
      this.update_from(this.comp.$props.settings[this.name]);
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      if (this.hidden) return;

      switch (this.state) {
        case 'tracking':
          break;

        case 'dragging':
          if (!this.moved) this.draw_circle(ctx);
          break;

        case 'settled':
          this.draw_circle(ctx);
          break;
      }
    }
  }, {
    key: "draw_circle",
    value: function draw_circle(ctx) {
      this.layout = this.comp.layout;

      if (this.comp.selected) {
        var r = this.RADIUS,
            lw = 1.5;
      } else {
        var r = this.RADIUS * 0.95,
            lw = 1;
      }

      ctx.lineWidth = lw;
      ctx.strokeStyle = this.COLOR_BR;
      ctx.fillStyle = this.COLOR_BACK;
      ctx.beginPath();
      ctx.arc(this.x = this.layout.t2screen(this.t), this.y = this.layout.$2screen(this.y$), r + 0.5, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.stroke();
    }
  }, {
    key: "update",
    value: function update() {
      this.y$ = this.comp.$props.cursor.y$;
      this.y = this.comp.$props.cursor.y;
      this.t = this.comp.$props.cursor.t;
      this.x = this.comp.$props.cursor.x; // Save pin as time in IB mode
      //if (this.layout.ti_map.ib) {
      //    this.t = this.layout.ti_map.i2t(this.t )
      //}
      // Reset the settings attahed to the pin (position)

      this.comp.$emit('change-settings', defineProperty_default()({}, this.name, [this.t, this.y$]));
    }
  }, {
    key: "update_from",
    value: function update_from(data, emit) {
      if (emit === void 0) {
        emit = false;
      }

      if (!data) return;
      this.layout = this.comp.layout;
      this.y$ = data[1];
      this.y = this.layout.$2screen(this.y$);
      this.t = data[0];
      this.x = this.layout.t2screen(this.t); // TODO: Save pin as time in IB mode
      //if (this.layout.ti_map.ib) {
      //    this.t = this.layout.ti_map.i2t(this.t )
      //}

      if (emit) this.comp.$emit('change-settings', defineProperty_default()({}, this.name, [this.t, this.y$]));
    }
  }, {
    key: "rec_position",
    value: function rec_position() {
      this.t1 = this.t;
      this.y$1 = this.y$;
    }
  }, {
    key: "mousemove",
    value: function mousemove(event) {
      switch (this.state) {
        case 'tracking':
        case 'dragging':
          this.moved = true;
          this.update();
          break;
      }
    }
  }, {
    key: "mousedown",
    value: function mousedown(event, force) {
      if (force === void 0) {
        force = false;
      }

      if (utils.default_prevented(event) && !force) return;

      switch (this.state) {
        case 'tracking':
          this.state = 'settled';
          if (this.on_settled) this.on_settled();
          this.comp.$emit('scroll-lock', false);
          break;

        case 'settled':
          if (this.hidden) return;

          if (this.hover()) {
            this.state = 'dragging';
            this.moved = false;
            this.comp.$emit('scroll-lock', true);
            this.comp.$emit('object-selected');
          }

          break;
      }

      if (this.hover()) {
        event.preventDefault();
      }
    }
  }, {
    key: "mouseup",
    value: function mouseup(event) {
      switch (this.state) {
        case 'dragging':
          this.state = 'settled';
          if (this.on_settled) this.on_settled();
          this.comp.$emit('scroll-lock', false);
          break;
      }
    }
  }, {
    key: "on",
    value: function on(name, handler) {
      switch (name) {
        case 'settled':
          this.on_settled = handler;
          break;
      }
    }
  }, {
    key: "hover",
    value: function hover() {
      var x = this.x;
      var y = this.y;
      return (x - this.mouse.x) * (x - this.mouse.x) + (y - this.mouse.y) * (y - this.mouse.y) < this.RADIUS_SQ;
    }
  }]);

  return Pin;
}();


// CONCATENATED MODULE: ./src/components/primitives/price.js



// Price bar & price line (shader)
var price_Price = /*#__PURE__*/function () {
  function Price(comp) {
    classCallCheck_default()(this, Price);

    this.comp = comp;
    this.data = comp.$props.data;
  } // Defines an inline shader (has access to both
  // target & overlay's contexts)


  createClass_default()(Price, [{
    key: "init_shader",
    value: function init_shader() {
      var _this = this;

      var layout = this.comp.$props.layout;
      var config = this.comp.$props.config;
      var comp = this.comp;

      var last_bar = function last_bar() {
        return _this.last_bar();
      };

      this.comp.$emit('new-shader', {
        target: 'sidebar',
        draw: function draw(ctx) {
          if (!last_bar()) return;
          var bar = last_bar();
          var w = ctx.canvas.width;
          var h = config.PANHEIGHT;
          var lbl = bar.price.toFixed(layout.prec);
          ctx.fillStyle = bar.color;
          var x = -0.5;
          var y = bar.y - h * 0.5 - 0.5;
          var a = 7;
          ctx.fillRect(x - 0.5, y, w + 1, h);
          ctx.fillStyle = comp.$props.colors.textHL;
          ctx.textAlign = 'left';
          ctx.fillText(lbl, a, y + 15);
        }
      });
      this.shader = true;
    } // Regular draw call for overaly

  }, {
    key: "draw",
    value: function draw(ctx) {
      if (!this.comp.$props.meta.last) return;
      if (!this.shader) this.init_shader();
      var layout = this.comp.$props.layout;
      var last = this.comp.$props.meta.last;
      var dir = last[4] >= last[1];
      var color = dir ? this.green() : this.red();
      var y = layout.$2screen(last[4]) + (dir ? 1 : 0);
      ctx.strokeStyle = color;
      ctx.setLineDash([1, 1]);
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(layout.width, y);
      ctx.stroke();
      ctx.setLineDash([]);
    }
  }, {
    key: "last_bar",
    value: function last_bar() {
      if (!this.data.length) return undefined;
      var layout = this.comp.$props.layout;
      var last = this.data[this.data.length - 1];
      var y = layout.$2screen(last[4]);
      var cndl = layout.c_magnet(last[0]);
      return {
        y: Math.floor(cndl.c) - 0.5,
        price: last[4],
        color: last[4] >= last[1] ? this.green() : this.red()
      };
    }
  }, {
    key: "last_price",
    value: function last_price() {
      return this.comp.$props.meta.last ? this.comp.$props.meta.last[4] : undefined;
    }
  }, {
    key: "green",
    value: function green() {
      return this.comp.colorCandleUp;
    }
  }, {
    key: "red",
    value: function red() {
      return this.comp.colorCandleDw;
    }
  }]);

  return Price;
}();


// CONCATENATED MODULE: ./src/components/primitives/ray.js





function ray_createSuper(Derived) { var hasNativeReflectConstruct = ray_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function ray_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// Draws a ray, adds corresponding collision f-n


var ray_Ray = /*#__PURE__*/function (_Line) {
  inherits_default()(Ray, _Line);

  var _super = ray_createSuper(Ray);

  function Ray(overlay, ctx) {
    var _this;

    classCallCheck_default()(this, Ray);

    _this = _super.call(this, overlay, ctx);
    _this.ray = true;
    return _this;
  }

  return Ray;
}(line_Line);


// CONCATENATED MODULE: ./src/components/primitives/seg.js


// Draws a segment, adds corresponding collision f-n



var seg_Seg = /*#__PURE__*/function () {
  // Overlay ref, canvas ctx
  function Seg(overlay, ctx) {
    classCallCheck_default()(this, Seg);

    this.ctx = ctx;
    this.comp = overlay;
    this.T = overlay.$props.config.TOOL_COLL;
    if (utils.is_mobile) this.T *= 2;
  } // p1[t, $], p2[t, $] (time-price coordinates)


  createClass_default()(Seg, [{
    key: "draw",
    value: function draw(p1, p2) {
      var layout = this.comp.$props.layout;
      var x1 = layout.t2screen(p1[0]);
      var y1 = layout.$2screen(p1[1]);
      var x2 = layout.t2screen(p2[0]);
      var y2 = layout.$2screen(p2[1]);
      this.ctx.moveTo(x1, y1);
      this.ctx.lineTo(x2, y2);
      this.comp.collisions.push(this.make([x1, y1], [x2, y2]));
    } // Collision function. x, y - mouse coord.

  }, {
    key: "make",
    value: function make(p1, p2) {
      var _this = this;

      return function (x, y) {
        return math.point2seg([x, y], p1, p2) < _this.T;
      };
    }
  }]);

  return Seg;
}();


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(17);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// CONCATENATED MODULE: ./src/components/js/layout_cnv.js


// Claculates postions and sizes for candlestick
// and volume bars for the given subset of data

function layout_cnv(self) {
  var $p = self.$props;
  var sub = $p.data;
  var t2screen = $p.layout.t2screen;
  var layout = $p.layout;
  var candles = [];
  var volume = []; // The volume bar height is determined as a percentage of
  // the chart's height (VOLSCALE)

  var maxv = Math.max.apply(Math, toConsumableArray_default()(sub.map(function (x) {
    return x[5];
  })));
  var vs = $p.config.VOLSCALE * layout.height / maxv;
  var x1,
      x2,
      w,
      avg_w,
      mid,
      prev = undefined; // Subset interval against main interval

  var _new_interval = new_interval(layout, $p, sub),
      _new_interval2 = slicedToArray_default()(_new_interval, 2),
      interval2 = _new_interval2[0],
      ratio = _new_interval2[1];

  var px_step2 = layout.px_step * ratio;
  var splitter = px_step2 > 5 ? 1 : 0; // A & B are current chart tranformations:
  // A === scale,  B === Y-axis shift

  for (var i = 0; i < sub.length; i++) {
    var p = sub[i];
    mid = t2screen(p[0]) + 1; // Clear volume bar if there is a time gap

    if (sub[i - 1] && p[0] - sub[i - 1][0] > interval2) {
      prev = null;
    }

    x1 = prev || Math.floor(mid - px_step2 * 0.5);
    x2 = Math.floor(mid + px_step2 * 0.5) - 0.5; // TODO: add log scale support

    candles.push({
      x: mid,
      w: layout.px_step * $p.config.CANDLEW * ratio,
      o: Math.floor(p[1] * layout.A + layout.B),
      h: Math.floor(p[2] * layout.A + layout.B),
      l: Math.floor(p[3] * layout.A + layout.B),
      c: Math.floor(p[4] * layout.A + layout.B),
      raw: p
    });
    volume.push({
      x1: x1,
      x2: x2,
      h: p[5] * vs,
      green: p[4] >= p[1],
      raw: p
    });
    prev = x2 + splitter;
  }

  return {
    candles: candles,
    volume: volume
  };
}
function layout_vol(self) {
  var $p = self.$props;
  var sub = $p.data;
  var t2screen = $p.layout.t2screen;
  var layout = $p.layout;
  var volume = []; // Detect data second dimention size:

  var dim = sub[0] ? sub[0].length : 0; // Support special volume data (see API book), or OHLCV
  // Data indices:

  self._i1 = dim < 6 ? 1 : 5;
  self._i2 = dim < 6 ? function (p) {
    return p[2];
  } : function (p) {
    return p[4] >= p[1];
  };
  var maxv = Math.max.apply(Math, toConsumableArray_default()(sub.map(function (x) {
    return x[self._i1];
  })));
  var volscale = self.volscale || $p.config.VOLSCALE;
  var vs = volscale * layout.height / maxv;
  var x1,
      x2,
      mid,
      prev = undefined; // Subset interval against main interval

  var _new_interval3 = new_interval(layout, $p, sub),
      _new_interval4 = slicedToArray_default()(_new_interval3, 2),
      interval2 = _new_interval4[0],
      ratio = _new_interval4[1];

  var px_step2 = layout.px_step * ratio;
  var splitter = px_step2 > 5 ? 1 : 0; // A & B are current chart tranformations:
  // A === scale,  B === Y-axis shift

  for (var i = 0; i < sub.length; i++) {
    var p = sub[i];
    mid = t2screen(p[0]) + 1; // Clear volume bar if there is a time gap

    if (sub[i - 1] && p[0] - sub[i - 1][0] > interval2) {
      prev = null;
    }

    x1 = prev || Math.floor(mid - px_step2 * 0.5);
    x2 = Math.floor(mid + px_step2 * 0.5) - 0.5;
    volume.push({
      x1: x1,
      x2: x2,
      h: p[self._i1] * vs,
      green: self._i2(p),
      raw: p
    });
    prev = x2 + splitter;
  }

  return volume;
}

function new_interval(layout, $p, sub) {
  // Subset interval against main interval
  if (!layout.ti_map.ib) {
    var interval2 = $p.tf || utils.detect_interval(sub);
    var ratio = interval2 / $p.interval;
  } else {
    if ($p.tf) {
      var ratio = $p.tf / layout.ti_map.tf;
      var interval2 = ratio;
    } else {
      var interval2 = utils.detect_interval(sub);
      var ratio = interval2 / $p.interval;
    }
  }

  return [interval2, ratio];
}
// CONCATENATED MODULE: ./src/index.js















var primitives = {
  Candle: candle_CandleExt,
  Volbar: volbar_VolbarExt,
  Line: line_Line,
  Pin: pin_Pin,
  Price: price_Price,
  Ray: ray_Ray,
  Seg: seg_Seg
};

TradingVue.install = function (Vue) {
  Vue.component(TradingVue.name, TradingVue);
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(TradingVue);
  window.TradingVueLib = {
    TradingVue: TradingVue,
    Overlay: mixins_overlay,
    Utils: utils,
    Constants: constants,
    Candle: candle_CandleExt,
    Volbar: volbar_VolbarExt,
    layout_cnv: layout_cnv,
    layout_vol: layout_vol,
    DataCube: datacube_DataCube,
    Tool: mixins_tool,
    Interface: mixins_interface,
    primitives: primitives
  };
}

/* harmony default export */ var src_0 = __webpack_exports__["default"] = (TradingVue);


/***/ })
/******/ ]);
});
//# sourceMappingURL=trading-vue.js.map