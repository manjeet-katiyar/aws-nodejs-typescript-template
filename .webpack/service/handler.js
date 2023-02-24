(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./handler.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./handler.ts":
/*!********************!*\
  !*** ./handler.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.handle = void 0;
const constants_1 = __webpack_require__(/*! ./utils/constants */ "./utils/constants.ts");
const errorHandlers_1 = __webpack_require__(/*! ./utils/errorHandlers */ "./utils/errorHandlers.ts");
const logger_1 = __webpack_require__(/*! ./utils/logger */ "./utils/logger.ts");
exports.handle = async (event, _context) => {
    const eventBody = JSON.parse(event.body);
    try {
        logger_1.logger.debug('Transaction is successfull:', eventBody);
        return constants_1.successMessages.TRANSACTION_SUCCESSFULL(eventBody);
    }
    catch (error) {
        logger_1.logger.error(error.message);
        return errorHandlers_1.errorHandler(error);
    }
};


/***/ }),

/***/ "./utils/constants.ts":
/*!****************************!*\
  !*** ./utils/constants.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.successMessages = exports.errorMessages = void 0;
exports.errorMessages = {
    INVALID_PAYLOAD: () => ({
        status: 400,
        error_code: 'INVALID_PAYLOAD',
        message: "Please provide correct payload."
    }),
};
exports.successMessages = {
    TRANSACTION_SUCCESSFULL: (details) => ({
        statusCode: 200,
        body: JSON.stringify({ details: details }, null, 4),
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
    })
};


/***/ }),

/***/ "./utils/errorHandlers.ts":
/*!********************************!*\
  !*** ./utils/errorHandlers.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errors_1 = __webpack_require__(/*! ./errors */ "./utils/errors.ts");
exports.errorHandler = (errorObject) => {
    if (errorObject instanceof errors_1.HttpError) {
        return {
            statusCode: errorObject.status,
            body: JSON.stringify({
                errorCode: errorObject.errorCode,
                message: errorObject.message
            }, null, 4),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true
            },
        };
    }
    return {
        statusCode: 500,
        body: JSON.stringify({ message: errorObject.message }, null, 4),
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
    };
};


/***/ }),

/***/ "./utils/errors.ts":
/*!*************************!*\
  !*** ./utils/errors.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpError = void 0;
class HttpError extends Error {
    constructor(error) {
        super(error.message);
        this.type = "httpError";
        this.status = error.status;
        this.errorCode = error.error_code;
    }
}
exports.HttpError = HttpError;
;


/***/ }),

/***/ "./utils/logger.ts":
/*!*************************!*\
  !*** ./utils/logger.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = __webpack_require__(/*! winston */ "winston");
const { combine, timestamp, label, printf } = winston_1.format;
const customFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} - [${label}] - ${level}: ${message}`;
});
exports.logger = winston_1.createLogger({
    level: 'debug',
    format: combine(label({ label: __webpack_require__.c[__webpack_require__.s].filename }), timestamp({ format: 'DD-MM-YYYY | HH:mm:ss' }), customFormat),
    transports: [new winston_1.transports.Console()]
});


/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ })

/******/ })));
//# sourceMappingURL=handler.js.map