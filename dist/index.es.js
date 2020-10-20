import{createElement as e,Fragment as t}from"react";import n from"@emotion/styled";import{keyframes as r}from"@emotion/core";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function o(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var i,s,l=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,d=(i=function(e){return l.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91},s={},function(e){return void 0===s[e]&&(s[e]=i(e)),s[e]});function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function g(e,t,n){return(g=m()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&u(a,n.prototype),a}).apply(null,arguments)}function h(e){var t="function"==typeof Map?new Map:void 0;return(h=function(e){if(null===e||!function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return g(e,arguments,f(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),u(n,e)})(e)}var b={1:"Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n",2:"Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n",3:"Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n",4:"Couldn't generate valid rgb string from %s, it returned %s.\n\n",5:"Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n",6:"Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n",7:"Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n",8:"Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n",9:"Please provide a number of steps to the modularScale helper.\n\n",10:"Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",11:'Invalid value passed as base to modularScale, expected number or em string but got "%s"\n\n',12:'Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.\n\n',13:'Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.\n\n',14:'Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',15:'Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',16:"You must provide a template to this method.\n\n",17:"You passed an unsupported selector state to this method.\n\n",18:"minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",19:"fromSize and toSize must be provided as stringified numbers with the same units.\n\n",20:"expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:"fontFace expects a name of a font-family.\n\n",24:"fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",25:"fontFace expects localFonts to be an array.\n\n",26:"fontFace expects fileFormats to be an array.\n\n",27:"radialGradient requries at least 2 color-stops to properly render.\n\n",28:"Please supply a filename to retinaImage() as the first argument.\n\n",29:"Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:"The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n",32:"To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n",33:"The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n",34:"borderRadius expects a radius value as a string or number as the second argument.\n\n",35:'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',36:"Property must be a string value.\n\n",37:"Syntax Error at %s.\n\n",38:"Formula contains a function that needs parentheses at %s.\n\n",39:"Formula is missing closing parenthesis at %s.\n\n",40:"Formula has too many closing parentheses at %s.\n\n",41:"All values in a formula must have the same unit or be unitless.\n\n",42:"Please provide a number of steps to the modularScale helper.\n\n",43:"Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",44:"Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n",45:"Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n",46:"Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n",47:"minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",48:"fromSize and toSize must be provided as stringified numbers with the same units.\n\n",49:"Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",50:"Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n",51:"Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n",52:"fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",53:"fontFace expects localFonts to be an array.\n\n",54:"fontFace expects fileFormats to be an array.\n\n",55:"fontFace expects a name of a font-family.\n\n",56:"linearGradient requries at least 2 color-stops to properly render.\n\n",57:"radialGradient requries at least 2 color-stops to properly render.\n\n",58:"Please supply a filename to retinaImage() as the first argument.\n\n",59:"Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:"Property must be a string value.\n\n",62:"borderRadius expects a radius value as a string or number as the second argument.\n\n",63:'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',64:"The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n",65:"To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n",66:"The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n",67:"You must provide a template to this method.\n\n",68:"You passed an unsupported selector state to this method.\n\n",69:'Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.\n\n',70:'Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.\n\n',71:'Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.\n\n',72:'Passed invalid base value %s to %s(), please pass a value like "12px" or 12.\n\n',73:"Please provide a valid CSS variable.\n\n",74:"CSS variable not found.\n"};function y(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r,a=t[0],o=[];for(r=1;r<t.length;r+=1)o.push(t[r]);return o.forEach((function(e){a=a.replace(/%[a-z]/,e)})),a}var v=function(e){var t,n;function r(t){var n;if("production"===process.env.NODE_ENV)n=e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this;else{for(var r=arguments.length,a=new Array(r>1?r-1:0),o=1;o<r;o++)a[o-1]=arguments[o];n=e.call(this,y.apply(void 0,[b[t]].concat(a)))||this}return c(n)}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r}(h(Error));function x(e,t){return e.substr(-t.length)===t}var w=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;function k(e,t){if("string"!=typeof e)return t?[e,void 0]:e;var n=e.match(w);return t?(console.warn("stripUnit's unitReturn functionality has been marked for deprecation in polished 4.0. It's functionality has been been moved to getValueAndUnit."),n?[parseFloat(e),n[2]]:[e,void 0]):n?parseFloat(e):e}var S=function(e){return function(t,n){void 0===n&&(n="16px");var r=t,a=n;if("string"==typeof t){if(!x(t,"px"))throw new v(69,e,t);r=k(t)}if("string"==typeof n){if(!x(n,"px"))throw new v(70,e,n);a=k(n)}if("string"==typeof r)throw new v(71,t,e);if("string"==typeof a)throw new v(72,n,e);return""+r/a+e}}("rem");function C(e){return Math.round(255*e)}function P(e,t,n){return C(e)+","+C(t)+","+C(n)}function I(e,t,n,r){if(void 0===r&&(r=P),0===t)return r(n,n,n);var a=(e%360+360)%360/60,o=(1-Math.abs(2*n-1))*t,i=o*(1-Math.abs(a%2-1)),s=0,l=0,d=0;a>=0&&a<1?(s=o,l=i):a>=1&&a<2?(s=i,l=o):a>=2&&a<3?(l=o,d=i):a>=3&&a<4?(l=i,d=o):a>=4&&a<5?(s=i,d=o):a>=5&&a<6&&(s=o,d=i);var p=n-o/2;return r(s+p,l+p,d+p)}var F={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};var T=/^#[a-fA-F0-9]{6}$/,z=/^#[a-fA-F0-9]{8}$/,A=/^#[a-fA-F0-9]{3}$/,R=/^#[a-fA-F0-9]{4}$/,j=/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i,E=/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i,O=/^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,D=/^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;function M(e){if("string"!=typeof e)throw new v(3);var t=function(e){if("string"!=typeof e)return e;var t=e.toLowerCase();return F[t]?"#"+F[t]:e}(e);if(t.match(T))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(z)){var n=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:n}}if(t.match(A))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(R)){var r=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:r}}var a=j.exec(t);if(a)return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10)};var o=E.exec(t);if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])};var i=O.exec(t);if(i){var s="rgb("+I(parseInt(""+i[1],10),parseInt(""+i[2],10)/100,parseInt(""+i[3],10)/100)+")",l=j.exec(s);if(!l)throw new v(4,t,s);return{red:parseInt(""+l[1],10),green:parseInt(""+l[2],10),blue:parseInt(""+l[3],10)}}var d=D.exec(t);if(d){var p="rgb("+I(parseInt(""+d[1],10),parseInt(""+d[2],10)/100,parseInt(""+d[3],10)/100)+")",c=j.exec(p);if(!c)throw new v(4,t,p);return{red:parseInt(""+c[1],10),green:parseInt(""+c[2],10),blue:parseInt(""+c[3],10),alpha:parseFloat(""+d[4])}}throw new v(5)}var B=function(e){return 7===e.length&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e};function _(e){var t=e.toString(16);return 1===t.length?"0"+t:t}function q(e,t,n){if("number"==typeof e&&"number"==typeof t&&"number"==typeof n)return B("#"+_(e)+_(t)+_(n));if("object"==typeof e&&void 0===t&&void 0===n)return B("#"+_(e.red)+_(e.green)+_(e.blue));throw new v(6)}function H(e,t,n){return function(){var r=n.concat(Array.prototype.slice.call(arguments));return r.length>=t?e.apply(this,r):H(e,t,r)}}function L(e){return H(e,e.length,[])}function U(e,t){if("transparent"===t)return t;var n,r,a,o=M(t),i="number"==typeof o.alpha?o.alpha:1;return function(e,t,n,r){if("string"==typeof e&&"number"==typeof t){var a=M(e);return"rgba("+a.red+","+a.green+","+a.blue+","+t+")"}if("number"==typeof e&&"number"==typeof t&&"number"==typeof n&&"number"==typeof r)return r>=1?q(e,t,n):"rgba("+e+","+t+","+n+","+r+")";if("object"==typeof e&&void 0===t&&void 0===n&&void 0===r)return e.alpha>=1?q(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")";throw new v(7)}(p({},o,{alpha:(n=0,r=1,a=(100*i-100*parseFloat(e))/100,Math.max(n,Math.min(r,a)))}))}var W=L(U),$={none:0,xxsmall:S("4px"),xsmall:S("8px"),small:S("12px"),medium:S("20px"),gutter:S("24px"),large:S("32px"),xlarge:S("48px"),xxlarge:S("96px")},Y="0.75rem",V="0.825rem",X="1rem",N=W(.75,"#fff"),G=W(.5,"#fff"),K=W(.25,"#fff"),Z={palette:{common:{white:N,white75:G,white50:K,yellow:"#F2CC23",yellowDarker:"#E3BF22",green:"#17A167",red:"#F96854",red75:"#F96854",redError:"#DB524E",black:"#111",blackDark:"#2D2F33",blackDarker:"#282A2E",blackDarkest:"#202225",black50:W(.75,"#000"),grey:"#B9B8B9",greyDark:"#494B50",grey10:"#B9B8B9",grey100:"#9E9E9E"},primary:{main:"#494B50",light:K,contrastText:"white"},secondary:{main:"#494B50",light:K,contrastText:"white"},error:{main:"#A51C30",light:"#A7333F",contrastText:N},grey:{100:"#EAEAEA",200:"#C9C5C5",300:"#888",400:"#666"},yellow:{main:"#F2CC23",light:"#FFF9C4",dark:"#E3BF22",contrastText:"#494B50"}},shadows:{0:"none",1:"0px 5px 10px rgba(0,0,0,0.12)",2:"0px 8px 30px rgba(0,0,0,0.24)",3:"0px 4px 15px rgba(0,0,0,0.25)"},typography:{fontFamily:"'Rubik', sans-serif"},shape:{borderRadius:$.xxsmall,borderRadius10:"10px",borderRadius5:"5px"}},J=r(Q||(Q=o(["\n0% { transform: rotate(0deg); }\n100% { transform: rotate(360deg); }\n"],["\n0% { transform: rotate(0deg); }\n100% { transform: rotate(360deg); }\n"])));var Q,ee,te=n((function(t){return e("svg",a({width:24,id:"loading_spinner_animated",height:24,viewBox:"0 0 24 24",fill:"none"},t),e("path",{d:"M21.477 11.424a.922.922 0 00-1.843.086 7.366 7.366 0 11-3.38-5.853.922.922 0 10.996-1.553 9.208 9.208 0 104.227 7.32z",fill:t.fillPath||"#fff"}))}))(ee||(ee=o(["\n    animation: "," 1s linear infinite;\n"],["\n    animation: "," 1s linear infinite;\n"])),J);function ne(t){return e("svg",a({id:"arrow_right",width:19,height:14,viewBox:"0 0 19 14",fill:"none"},t),e("path",{d:"M.4 6.991l16.298-.03m0 0L11.252 1.61m5.447 5.351l-5.416 5.907",stroke:"#fff",strokeWidth:2}))}var re,ae={small:{fontSize:Y,padding:$.xsmall+" "+$.small},medium:{fontSize:V,padding:$.small+" "+$.gutter},large:{fontSize:X,padding:$.medium+" "+$.large}},oe=n.span(re||(re=o(["\n  padding-left: ",";\n  padding-right: ",";\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n\n  @media (min-width: 600px) {\n    padding-left: ",";\n  }\n"],["\n  padding-left: ",";\n  padding-right: ",";\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n\n  @media (min-width: 600px) {\n    padding-left: ",";\n  }\n"])),(function(e){return e.leftSpacing?$.xsmall:0}),(function(e){return e.rightSpacing?$.xsmall:0}),(function(e){return e.leftSpacing?e.isSecondary?$.xlarge:$.xsmall:0})),ie=["color"],se=n("button",{shouldForwardProp:function(e){return d(e)&&!ie.includes(e)}})((function(e){var t,n,r,o=e.color,i=e.size,s=void 0===i?"medium":i,l=e.variant,d=void 0===l?"solid":l,p=e.enableElevation,c=void 0!==p&&p,f=e.disabled,u=void 0!==f&&f,m=e.theme;r=m,0===Object.keys(r).length&&(m=Z);var g=null===(t=ae[s])||void 0===t?void 0:t.fontSize,h=null===(n=ae[s])||void 0===n?void 0:n.padding,b=function(e){var t=e.variant,n=e.color,r=e.theme,o="secondary"===n,i=r.palette[n],s={main:{border:"2px solid "+r.palette.common.black,backgroundColor:r.palette.common.white,color:r.palette.common.black},hover:{border:"2px solid "+r.palette.common.black,backgroundColor:r.palette.common.white,color:r.palette.common.black}},l=i&&!o?{main:{border:"3px solid "+r.palette.yellow.main,backgroundColor:"transparent",color:r.palette.yellow.main,"& #loading_spinner_animated > path":{fill:i.main}},hover:{border:"3px solid "+i.main,color:i.main},active:{border:"3px solid "+r.palette.yellow.dark,color:r.palette.common.blackDark},focus:{border:"3px solid "+r.palette.grey[300],color:i.contrastText},disabled:{border:"3px solid "+r.palette.grey[300],color:r.palette.grey[300]}}:{main:{border:"2px solid "+r.palette.common.grey10,backgroundColor:"rgba(185, 184, 185, 0.1)",color:"white","& #arrow_right":{position:"relative",left:0,transition:"all ease-in 0.2s"}},hover:{border:"2px solid white",color:"white",backgroundColor:"#52565C","& #arrow_right":{left:8}}},d={main:{border:"1px solid "+r.palette.grey[100],backgroundColor:r.palette.grey[100],color:r.palette.common.black},hover:{border:"1px solid "+r.palette.grey[200],backgroundColor:r.palette.grey[200]}},p=i&&!o?{main:{border:"2px solid transparent",backgroundColor:i.main,color:i.contrastText},hover:{border:"2px solid transparent",backgroundColor:r.palette.yellow.main,color:r.palette.common.greyDark},active:{border:"2px solid transparent",backgroundColor:r.palette.yellow.dark,color:r.palette.common.blackDark},focus:{border:"2px solid "+r.palette.common.white50,backgroundColor:i.main,color:i.contrastText},disabled:{border:"2px solid transparent",backgroundColor:r.palette.grey[300],color:r.palette.common.white75}}:{main:{border:"2px solid transparent",backgroundColor:null==i?void 0:i.main,color:"white","& #arrow_right":{position:"relative",left:0,transition:"all ease-in 0.2s"}},hover:{border:"2px solid transparent",color:"white",backgroundColor:"rgba(255, 255, 255, 0.25)","& #arrow_right":{left:8}}},c={width:48,minWidth:48,padding:"0 !important",justifyContent:"center"},f=a(a({},c),{borderRadius:"50%"}),u=a(a({},p),{main:a(a({},null==p?void 0:p.main),c)}),m=a(a({},d),{main:a(a({},null==s?void 0:s.main),c)}),g=a(a({},p),{main:a(a({},null==p?void 0:p.main),f)}),h=a(a({},d),{main:a(a({},null==s?void 0:s.main),f)}),b={main:{color:r.palette.common.black,textDecoration:"underline",boxShadow:r.shadows[0],border:0,backgroundColor:"transparent",padding:$.xxsmall,height:"inherit",width:"inherit",minWidth:50},hover:{color:r.palette.grey[200]}},y={main:{color:r.palette.grey[300],textDecoration:"underline",boxShadow:r.shadows[0],border:0,backgroundColor:"transparent",padding:$.xxsmall+" "+$.xsmall,height:"inherit",width:"inherit",minWidth:50},hover:{color:r.palette.common.greyDark}},v={outline:i?l:s,solid:i?p:d,icon:i?u:m,"icon-circle":i?g:h,link:i?y:b};return v[t]||v.solid}({variant:d,theme:m,color:o});return a(a(a(a({minHeight:"secondary"===o?42:48,minWidth:96,fontWeight:500,cursor:"pointer",opacity:u&&.7,transition:"all 0.15s linear",letterSpacing:"0.6px",padding:ae.medium.padding,borderRadius:m.shape.borderRadius10,fontFamily:m.typography.fontFamily,outline:0,boxSizing:"border-box",display:"flex",justifyContent:"space-between",alignItems:"center",boxShadow:c?m.shadows[1]:m.shadows[3]},h&&{padding:h}),b&&b.main),g&&{fontSize:g}),{"&:hover":!u&&a({boxShadow:c&&m.shadows[2]},b&&b.hover),"&:active":!u&&a({boxShadow:c&&m.shadows[2]},b&&b.active),"&:focus":!u&&a({},b&&b.focus),"&:disabled":a({cursor:"not-allowed"},b&&b.disabled),"& > :first-of-type:last-of-type":{margin:"0 auto"},fontSize:Y,"@media (min-width: 600px)":a({minHeight:52,fontSize:V},(null==d?void 0:d.includes("icon"))&&{width:52,minWidth:52})})})),le=function(n){var r=function(){return n.startIcon?e(oe,{rightSpacing:!0},n.startIcon):null},o=function(){var t="secondary"===n.color&&!n.endIcon,r="secondary"===n.color&&!n.endIcon&&{};return n.endIcon||"secondary"===n.color?e(oe,{leftSpacing:!0,style:a({},r),isSecondary:t},n.endIcon||e(ne,null)):null},i=n.loading?e(te,null):e((function(){return e(t,null,e(r,null),n.children,e(o,null))}),null);return e(se,a({},n),i)};export{le as Button};
//# sourceMappingURL=index.es.js.map
