/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		13: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "../";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([547,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpUtil; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61);
/* harmony import */ var _extension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37);
/* harmony import */ var _extension__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_extension__WEBPACK_IMPORTED_MODULE_5__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



var timeout = 300000;
var HttpUtil = /*#__PURE__*/function () {
  function HttpUtil() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, HttpUtil);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(HttpUtil, null, [{
    key: "get",
    value:
    /**
     * get 请求
     * @param url
     * @param params
     * @param isHandleError
     * @param httpCustomerOpertion 使用者传递过来的参数, 用于以后的扩展用户自定义的行为
     * {
     *    isHandleResult: boolen    //是否需要处理错误结果   true 需要/false 不需要
     *    isShowLoading: boolen     //是否需要显示loading动画
     *    customHead: object        // 自定义的请求头
     *    timeout: int              //自定义接口超时的时间
     * }
     * @returns {Promise}
     */
    function get(url) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var httpCustomerOpertion = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        isHandleResult: true,
        isShowLoading: true
      };
      var method = "GET";
      if (!params.webMonitorId) {
        params.webMonitorId = window.localStorage.chooseWebMonitorId;
      }
      var fetchUrl = url + Common_utils__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].qs(params);
      var fetchParams = Object.assign({}, {
        method: method
      }, this.getHeaders());
      return HttpUtil.handleFetchData(fetchUrl, fetchParams, httpCustomerOpertion);
    }

    /**
     * post 请求
     * @param url
     * @param params
     * @param isHandleError
     * @param httpCustomerOpertion 使用者传递过来的参数, 用于以后的扩展用户自定义的行为
     * @returns {Promise}
     */
  }, {
    key: "post",
    value: function post(url) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var httpCustomerOpertion = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        isHandleResult: true,
        isShowLoading: true
      };
      var method = "POST";
      if (!params.webMonitorId) {
        params.webMonitorId = window.localStorage.chooseWebMonitorId;
      }
      var body = JSON.stringify(params);
      var fetchParams = Object.assign({}, {
        method: method,
        body: body
      }, this.getHeaders());
      return HttpUtil.handleFetchData(url, fetchParams, httpCustomerOpertion);
    }

    /**
     * put 请求
     * @param url
     * @param params
     * @param isHandleError
     * @param httpCustomerOpertion 使用者传递过来的参数, 用于以后的扩展用户自定义的行为
     * @returns {Promise}
     */
  }, {
    key: "put",
    value: function put(url) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var httpCustomerOpertion = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        isHandleResult: true,
        isShowLoading: true
      };
      var method = "PUT";
      params.webMonitorId = window.localStorage.chooseWebMonitorId;
      var body = JSON.stringify(params);
      var fetchParams = Object.assign({}, {
        method: method,
        body: body
      }, this.getHeaders());
      return HttpUtil.handleFetchData(url, fetchParams, httpCustomerOpertion);
    }

    /**
     * 发送fetch请求
     * @param fetchUrl
     * @param fetchParams
     * @returns {Promise}
     */
  }, {
    key: "handleFetchData",
    value: function handleFetchData(fetchUrl, fetchParams, httpCustomerOpertion) {
      // 如果是照片的base64数据，ios系统会卡死
      // TODO: debugPanel不使用react
      var logParams = _objectSpread({}, fetchParams);
      if (logParams.body && logParams.body.length > 1024) {
        logParams.body = logParams.body.substr(0, 1024) + "...";
      }
      var isShowLoading = httpCustomerOpertion.isShowLoading;
      if (isShowLoading) {
        HttpUtil.showLoading();
      }
      httpCustomerOpertion.isFetched = false;
      httpCustomerOpertion.isAbort = false;
      // 处理自定义的请求头
      if (httpCustomerOpertion.hasOwnProperty("customHead")) {
        var customHead = httpCustomerOpertion.customHead;
        fetchParams.headers = Object.assign({}, fetchParams.headers, customHead);
      }
      var fetchPromise = new Promise(function (resolve, reject) {
        fetch(fetchUrl, fetchParams).then(function (response) {
          if (httpCustomerOpertion.isAbort) {
            // 请求超时后，放弃迟到的响应
            return;
          }
          if (isShowLoading) {
            HttpUtil.hideLoading();
          }
          httpCustomerOpertion.isFetched = true;
          response.json().then(function (jsonBody) {
            if (response.ok) {
              if (jsonBody.status) {
                // 业务逻辑报错
                reject(HttpUtil.handleResult(jsonBody, httpCustomerOpertion));
              } else {
                resolve(HttpUtil.handleResult(jsonBody, httpCustomerOpertion));
              }
            } else {
              // http status header <200 || >299
              var msg = "当前服务繁忙，请稍后再试";
              if (response.status === 404) {
                msg = "您访问的内容走丢了…";
              }
              console.error(msg);
              reject(HttpUtil.handleResult({
                fetchStatus: "error",
                netStatus: response.status
              }, httpCustomerOpertion));
            }
          })["catch"](function (e) {
            var errMsg = e.name + " " + e.message;
            reject(HttpUtil.handleResult({
              fetchStatus: "error",
              error: errMsg,
              netStatus: response.status
            }, httpCustomerOpertion));
          });
        })["catch"](function (e) {
          var errMsg = e.name + " " + e.message;
          if (httpCustomerOpertion.isAbort) {
            // 请求超时后，放弃迟到的响应
            return;
          }
          if (isShowLoading) {
            HttpUtil.hideLoading();
          }
          httpCustomerOpertion.isFetched = true;
          if (httpCustomerOpertion.isHandleResult === true) {
            console.error("网络开小差了，稍后再试吧", 2);
          }
          reject(HttpUtil.handleResult({
            fetchStatus: "error",
            error: errMsg
          }, httpCustomerOpertion));
        });
      });
      return Promise.race([fetchPromise, HttpUtil.fetchTimeout(httpCustomerOpertion)]);
    }

    /**
     * 统一处理后台返回的错误结果
     * @param result
     * ps: 通过 this.isHandleError 来判断是否需要有fetch方法来统一处理错误信息
     */
  }, {
    key: "handleResult",
    value: function handleResult(result, httpCustomerOpertion) {
      if (result.status && httpCustomerOpertion.isHandleResult === true) {
        var errMsg = result.msg || result.message || "服务器开小差了，稍后再试吧";
        console.error("".concat(errMsg, "\uFF08").concat(result.status, "\uFF09"), 2);
      }
      return result;
    }
    /**
     * 控制Fetch请求是否超时
     * @returns {Promise}
     */
  }, {
    key: "fetchTimeout",
    value: function fetchTimeout(httpCustomerOpertion) {
      var isShowLoading = httpCustomerOpertion.isShowLoading;
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          if (!httpCustomerOpertion.isFetched) {
            // 还未收到响应，则开始超时逻辑，并标记fetch需要放弃
            httpCustomerOpertion.isAbort = true;
            if (isShowLoading) {
              HttpUtil.hideLoading();
            }
            console.error("网络开小差了，稍后再试吧", 2);
            reject({
              fetchStatus: "timeout"
            });
          }
        }, httpCustomerOpertion.timeout || timeout);
      });
    }

    /**
     * 获取请求头信息
     * @returns {{app-info: string, access-token: string}}
     */
  }, {
    key: "getHeaders",
    value: function getHeaders() {
      // 需要通过app来获取
      var fetchCommonParams = {
        // "mode": "cors",
        // "credentials": "same-origin"
      };
      var headers = {
        // "Accept": "*/*",
        // "Content-Type": "application/json;charset=utf-8",
      };
      return Object.assign({}, fetchCommonParams, {
        headers: headers
      });
    }

    /**
     * 添加loadding状态
     */
  }, {
    key: "showLoading",
    value: function showLoading() {
      // console.log("加载中...")
    }

    /**
     * 取消loadding状态
     */
  }, {
    key: "hideLoading",
    value: function hideLoading() {
      // console.log("加载中...")
    }

    // websocket 请求
  }, {
    key: "wsGet",
    value: function wsGet(url, send, onmessage, onopen, onclose, onerror) {
      window.WebSocket = window.WebSocket || window.MozWebSocket;
      // 检测浏览器支持情况
      if (!window.WebSocket) {
        console.error("错误: 浏览器不支持websocket");
        return;
      }
      var socket = new WebSocket(url); // 创建连接并注册响应函数
      socket.onmessage = function (e) {
        if (onmessage) onmessage(e);
      };
      socket.onopen = function (e) {
        console.log(url + " 连接成功");
        if (onopen) onopen(e);
        if (send) send(socket);
      };
      socket.onclose = function (e) {
        if (onclose) onclose(e);
        socket.close();
        socket = null; // 清理
        console.log(url + " 断开连接");
      };
      socket.onerror = function (e) {
        console.log(e);
        if (onerror) onerror(e);
      };
    }

    /**
       * ajax请求封装
       * @param method 请求类型
       * @param url 请求url
       * @param params 参数
       *        params.data.widthoutToken   true:请求不带token, false/undefined:请求带token, 默认带token
       *        params.failCallback  请求返回结果result.status == 1 时, 执行失败的回调方法
       *        params.errorCallback(errorType, xhr)  请求失败的回调方法,两个参数, 判断err的类型
       *        params.completeCallback(errorType, xhr)  请求完成后的回调方法,两个参数
       * @param successCallback  请求成功的回调函数
       * @param closeLoadingImmediate  立即关闭loading状态
       * @param showLoading 是否显示loadding状态
       */
  }, {
    key: "ajax",
    value: function ajax(method, url, params, successCallback, failCallback) {
      var param = {
        url: url,
        type: method,
        data: JSON.stringify(params),
        Accept: "*/*",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        traditional: true,
        timeout: 10000,
        success: function success(result, status, xhr) {
          try {
            successCallback(result, xhr);
          } catch (e) {
            console.error(e);
          }
        },
        error: function error(xhr, errorType) {
          var msg = "服务繁忙，稍后再试吧";
          var res;
          switch (xhr.status) {
            case 404:
              msg = "您访问的内容走丢了…";
              break;
            default:
              switch (errorType) {
                case "timeout":
                  msg = "网络开小差了，稍后再试吧";
                  break;
                case "abort":
                  msg = "服务繁忙，休息一下再说吧";
                  break;
                case "error":
                  msg = "当前服务繁忙，请稍后再试";
                  break;
                default:
                  res = xhr.responseText ? JSON.parse(xhr.responseText) : {};
                  msg = res.msg || (res.error || {}).message || "服务繁忙，稍后再试吧";
              }
          }
          //请求出错后执行的回调方法,用户自定义,可以根据xhr,errorType的值来判断这个方法里边要做什么
          if (failCallback && typeof failCallback === "function") {
            failCallback(msg);
          }
          console.error(msg);
        }
      };
      $.ajax(param);
    }

    /**
     * 获取缓存数据
     */
  }, {
    key: "getApiDataFromCache",
    value: function getApiDataFromCache(url) {
      if ("caches" in window) {
        console.log(window.caches);
        return caches.match(url).then(function (cache) {
          console.log(3, cache);
          if (!cache) {
            return null;
          }
          return cache.json();
        });
      }
      return Promise.resolve();
    }
  }]);
  return HttpUtil;
}();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(40)))

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _env_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _env_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_env_config__WEBPACK_IMPORTED_MODULE_1__);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var apiHost = _env_config__WEBPACK_IMPORTED_MODULE_1___default.a.getApiHost();
var wsApiHost = _env_config__WEBPACK_IMPORTED_MODULE_1___default.a.getWsApiHost();
var api = {
  // 对接后台服务的api
  // 统计UV
  "memberUvCount": apiHost + "/config/memberUvCount",
  "purchaseCustomers": apiHost + "/config/purchaseCustomers",
  "versionList": apiHost + "/config/versionList",
  "activeCreate": apiHost + "/config/activeCreate",
  "activeCreateWithEmail": apiHost + "/config/activeCreateWithEmail",
  "orderCreate": apiHost + "/config/orderCreate",
  //查询订单号
  "goAlipay": apiHost + "/config/goAlipay",
  //支付宝支付接口
  "goWxpay": apiHost + "/config/goWxpay",
  //微信支付接口
  "wxPayIsSuccess": apiHost + "/config/wxPayIsSuccess",
  "companyList": apiHost + "/config/companyList",
  // 获取企业用户logo列表
  //用户开具发票接口
  "invoiceSubmit": apiHost + "/config/invoiceSubmit",
  "productList": apiHost + "/config/productList",
  //获取产品价格列表, 要放出
  // "productList": apiHost +  "/webfunny_manage/api/product/list", //test获取产品价格列表
  "productListVip": apiHost + "/config/vipProductList",
  //获取VIP产品价格信息列表
  "apiOrderCreate": apiHost + "/config/apiOrderCreate",
  //专业版生成订单
  // "apiOrderCreate": apiHost + "/webfunny_manage/api/order/create", // test专业版生成订单
  "vipCreate": apiHost + "/config/apiOrderVipCreate",
  //VIP生成订单

  // "orderCreate": apiHost + "/webfunny_manage/order/create", //查询订单号
  // "goAlipay": apiHost + "/webfunny_manage/alipay/goAlipay", //支付宝支付接口
  // "goWxpay": apiHost + "/webfunny_manage/wxpay/goWxpay", //微信支付接口
  // "wxPayIsSuccess": apiHost + "/webfunny_manage/wxpay/wxPayIsSuccess",

  "upBp": "//monitor.webfunny.cn/server/upBp",
  "upBp1": "//monitor.webfunny.cn/server/upBp1",
  // 获取所有模块的js文件
  "jsList": "//www.webfunny.cn/webfunny/manifest.json",
  // 登录
  "login": "//www.webfunny.cn/server/user/login",
  // 注册
  "register": "//www.webfunny.cn/server/user",
  // 查询所有用户
  "userList": apiHost + "/server/user/list",
  // 查询所有项目列表
  "projectList": apiHost + "/server/project/list",
  // 查询项目详情
  "projectDetail": apiHost + "/server/project/detail",
  // 查询项目详情
  "updateStartList": apiHost + "/server/project/updateStartList",
  // 查询所有项目列表
  "allProjectList": apiHost + "/server/project/list/all",
  "getProjectDetailList": apiHost + "/server/project/detailList",
  // 立即刷新今天的流量数据
  "getTodayFlowDataByTenMin": apiHost + "/server/getTodayFlowDataByTenMin",
  // 获取今天的流量数据
  "getTodayFlowData": apiHost + "/server/getTodayFlowData",
  // 获取今天的错误总信息
  "getErrorInfo": apiHost + "/server/getErrorInfo",
  // 获取警报信息
  "getWarningMsg": apiHost + "/server/getWarningMsg",
  // 根据时间查询每天JS的错误量
  "getJsErrorCountByDay": apiHost + "/server/getJavascriptErrorInfoListByDay",
  // 根据时间查询每天自定义的错误量
  "getConsoleErrorCountByDay": apiHost + "/server/getConsoleErrorInfoListByDay",
  // 根据时间查询一天内js错误总量和最近24小时的错误量 (有具体错误)
  "getJavascriptErrorCountListByHour": apiHost + "/server/getJavascriptErrorCountListByHour",
  // 根据时间查询一天内js错误总量和最近24小时的错误量 (无具体错误）
  "getJsErrorCountByHour": apiHost + "/server/getJsErrorCountByHour",
  // 根据时间查询一天内自定义js错误总量和最近24小时的错误量
  "getJsConsoleErrorCountByHour": apiHost + "/server/getJavascriptConsoleErrorInfoListByHour",
  // 根据JS错误量进行排序
  "getJsErrorSort": apiHost + "/server/getJavascriptErrorSort",
  // 根据JS错误量进行排序
  "getJsErrorSortInfo": apiHost + "/server/getJavascriptErrorSortInfo",
  "getConsoleErrorSort": apiHost + "/server/getConsoleErrorSort",
  // 根据平台获取JS错误数量
  "getJavascriptErrorCountByOs": apiHost + "/server/getJavascriptErrorCountByOs",
  // 根据获取JS错误分类数量
  "getJavascriptErrorCountByType": apiHost + "/server/getJavascriptErrorCountByType",
  // errorMsg 获取js错误列表
  "getJavascriptErrorListByMsg": apiHost + "/server/getJavascriptErrorListByMsg",
  // 获取js错误相关信息
  "getJavascriptErrorAboutInfo": apiHost + "/server/getJavascriptErrorAboutInfo",
  // 获取js错误详情
  "getJavascriptErrorDetail": function getJavascriptErrorDetail(id) {
    return apiHost + "/server/javascriptErrorInfo/" + id;
  },
  // 获取js错误对应的code
  "getJavascriptErrorStackCode": apiHost + "/server/getJavascriptErrorStackCode",
  // 根据页面每天JS的错误量
  "getJavascriptErrorListByPage": apiHost + "/server/getJavascriptErrorListByPage",
  // 设置需要忽略的js错误
  "setIgnoreJavascriptError": apiHost + "/server/ignoreError",
  // 获取忽略的js错误列表
  "ignoreErrorByApplication": apiHost + "/server/ignoreErrorByApplication",
  // 查询用户的行为列表
  "searchUserBehaviors": apiHost + "/server/searchCustomerBehaviors",
  // 查询用户的基本信息
  "searchCustomerInfo": apiHost + "/server/searchCustomerInfo",
  // 查询用户的行为列表(示例)
  "searchUserBehaviorsForExample": "http://www.webfunny.cn/server/searchUserBehaviorsForExample",
  // 查询用户的基本信息(示例)
  "searchCustomerInfoForExample": "http://www.webfunny.cn/server/searchCustomerInfoForExample",
  // 获取截屏列表
  "getScreenShotInfoListByPage": apiHost + "/server/getScreenShotInfoListByPage",
  // 获取日活量数据
  "getCustomerCountByTime": apiHost + "/server/getCustomerCountByTime",
  // 获取当日页面加载平均时间
  "getPageLoadTimeByDate": apiHost + "/server/getPageLoadTimeByDate",
  // 获取静态资源加载失败列表
  "getResourceLoadInfoListByDay": apiHost + "/server/getResourceLoadInfoListByDay",
  // 获取每天静态资源加载失败数量列表
  "getResourceErrorCountByDay": apiHost + "/server/getResourceErrorCountByDay",
  // 获取一天内每小时报错数量
  "getResourceErrorCountByHour": apiHost + "/server/getResourceErrorCountByHour",
  // 获取一天内每小时接口请求报错数量
  "getHttpErrorCountByHour": apiHost + "/server/getHttpErrorCountByHour",
  // 获取每天接口请求失败数量列表
  "getHttpErrorCountByDay": apiHost + "/server/getHttpErrorCountByDay",
  // 获取每天接口请求失败数量列表
  "getHttpErrorListByDay": apiHost + "/server/getHttpErrorListByDay",
  // 根据url获取接口报错列表
  "getHttpErrorListByUrl": apiHost + "/server/getHttpErrorListByUrl",
  // 根据加载时间分类
  "getHttpCountForLoadTimeGroupByDay": apiHost + "/server/getHttpCountForLoadTimeGroupByDay",
  // 根据加载时间分类列表
  "getHttpUrlListForLoadTime": apiHost + "/server/getHttpUrlListForLoadTime",
  // 根据url获取影响人数
  "getHttpUrlUserCount": apiHost + "/server/getHttpUrlUserCount",
  // 获取24小时接口数量分布
  "getHttpUrlCountListByHour": apiHost + "/server/getHttpUrlCountListByHour",
  // 获取60分钟内接口数量分布
  "getHttpUrlCountForHourByMinutes": apiHost + "/server/getHttpUrlCountForHourByMinutes",
  /**
   * PV/UV相关
   */
  // 获取PV量数据
  "getPvCountByHour": apiHost + "/server/getPvCountByHour",
  // 获取每小时新增用户量
  "getNewCustomerCountByHour": apiHost + "/server/getNewCustomerCountByHour",
  // 获取每小时用户的平均安装量
  "getInstallCountByHour": apiHost + "/server/getInstallCountByHour",
  // 获取UV量数据
  "getUvCountByHour": apiHost + "/server/getUvCountByHour",
  // 获取User量数据
  "getUserCountByHour": apiHost + "/server/getUserCountByHour",
  // 获取应用版本top10数量列表
  "getVersionCountOrderByCount": apiHost + "/server/getVersionCountOrderByCount",
  // 获取城市top10数量列表
  "getCityCountOrderByCount": apiHost + "/server/getCityCountOrderByCount",
  // 获取设备top10数量列表
  "getDeviceCountOrderByCount": apiHost + "/server/getDeviceCountOrderByCount",
  // 获取每秒的pv/uv数量
  "getProvinceCountBySeconds": apiHost + "/server/getProvinceCountBySeconds",
  "getPvCountBySecond": apiHost + "/server/getPvUvCountBySecond",
  "getPvCountByMinute": apiHost + "/server/getPvCountByMinute",
  "getHttpCountByMinute": apiHost + "/server/getHttpCountByMinute",
  "getJavascriptErrorCountByMinute": apiHost + "/server/getJavascriptErrorCountByMinute",
  "getPvListByPage": apiHost + "/server/getPvListByPage",
  // 获取七天留存数量
  "getSevenDaysLeftCount": apiHost + "/server/getSevenDaysLeftCount",
  // 录屏相关
  "getVideosEvent": apiHost + "/server/getVideosEvent",
  // 创建新项目
  "createNewProject": apiHost + "/server/createNewProject",
  // 检查项目是否有数据
  "checkProjectCount": apiHost + "/server/checkProjectCount",
  // 删除项目
  "deleteProject": apiHost + "/server/deleteProject",
  // 发送邮箱验证码
  // "sendEmailCode": apiHost + "/server/sendEmailCode",
  "sendEmailCode": "//www.webfunny.cn/server/sendEmailCode",
  "getPurchaseCodeDetail": "//www.webfunny.cn/server/getPurchaseCodeDetail",
  // 连接线上用户
  "connectUser": apiHost + "/server/connectUser",
  // 获取连接线上用户已经产生的行为记录
  "connectUserRecord": apiHost + "/server/connectUserRecord",
  // 获取mysql的状态接口
  "mysqlStatus": apiHost + "/server/mysqlStatus",
  // 获取系统信息
  "getSysInfo": apiHost + "/server/getSysInfo",
  // 测试接口
  "testBehaviors": apiHost + "/server/testBehaviors",
  // 活动相关接口
  "getCouponInfo": apiHost + "/config/getCouponInfo",
  "sendCouponEmail": apiHost + "/config/sendCouponEmail",
  // 观纵活动相关接口
  "couponActivity": apiHost + "/config/couponActivity"
};
var nodeApi = {};

// 每个页面注册一个websocket server即可
var wsApi = {
  // 获取每秒的pv/uv数量
  "wsGetProvinceCountBySeconds": wsApiHost + "/socket/wsGetProvinceCountBySeconds",
  // 获取调试信息
  "wsGetDebugInfo": wsApiHost + "/socket/wsGetDebugInfo"
};
/* harmony default export */ __webpack_exports__["a"] = (_objectSpread(_objectSpread(_objectSpread({}, api), nodeApi), wsApi));

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

var envUrls = {
  local: {
    apiServerUrl: "http://www.webfunny.cn",
    //http://47.105.132.73/, https://www.webfunny.cn
    nodeApiServerUrl: "http://www.webfunny.cn",
    uri: "//localhost",
    wsApiServerUrl: (window.location.protocol === "http:" ? "ws://" : "wss://") + "localhost:8011"
  },
  dev: {
    apiServerUrl: "https://www.webfunny.cn",
    nodeApiServerUrl: "https://www.webfunny.cn",
    assetsUrl: "https://local.webfunny.cn",
    uri: "https://local.webfunny.cn:9100"
  },
  backup: {
    apiServerUrl: "http://www.webfunny.cn",
    nodeApiServerUrl: "http://www.webfunny.cn",
    assetsUrl: "",
    uri: ""
  },
  qa: {
    apiServerUrl: "https://www.webfunny.cn",
    assetsUrl: "https://www.webfunny.cn",
    nodeApiServerUrl: "https://www.webfunny.cn",
    uri: "https://www.webfunny.cn"
  },
  publish: {
    apiServerUrl: "default_api_server_url",
    nodeApiServerUrl: "default_api_server_url",
    assetsUrl: "default_assets_url",
    uri: "default_assets_url",
    wsApiServerUrl: (window.location.protocol === "http:" ? "ws://" : "wss://") + "default_api_server_url" // TODO: 这个地方不行，域名居然不行，需要处理
  },

  prod: {
    apiServerUrl: "https://www.webfunny.cn",
    assetsUrl: "https://www.webfunny.cn",
    nodeApiServerUrl: "https://www.webfunny.cn",
    uri: "https://www.webfunny.cn"
  }
};
var getApiHost = function getApiHost() {
  return envUrls["prod"].apiServerUrl;
};
var getWsApiHost = function getWsApiHost() {
  return envUrls["prod"].wsApiServerUrl;
};
var getNodeApiHost = function getNodeApiHost() {
  return envUrls["prod"].nodeApiServerUrl;
};
//  relativePath   eg: "/ltvfe/cl/"
var getAssetsUrl = function getAssetsUrl() {
  var env = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "prod";
  var relativePath = arguments.length > 1 ? arguments[1] : undefined;
  var assetsUrl = envUrls[env].assetsUrl || "";
  var suffix = env === "local" ? "/webfunny/" : relativePath;
  return assetsUrl + suffix;
};
var getUri = function getUri() {
  return envUrls["prod"].uri;
};
module.exports = {
  getApiHost: getApiHost,
  getNodeApiHost: getNodeApiHost,
  getAssetsUrl: getAssetsUrl,
  getUri: getUri,
  getWsApiHost: getWsApiHost
};

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(1);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// CONCATENATED MODULE: ./src/components/svg_icons/svg/requestIcon.svg


var requestIcon_SvgRequestIcon = function SvgRequestIcon(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "requestIcon_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M1004.47 8.265a45.86 45.86 0 00-47.176-3.145L24.722 487.717a45.787 45.787 0 00.366 81.334l226.011 114.103a45.787 45.787 0 0041.253-81.7l-146.14-73.655L801.72 188.562c-89.893 108.983-222.135 268.58-292.425 349.623-106.423 122.66-120.76 221.477-120.76 301.86v138.24a45.714 45.714 0 1091.43 0v-138.24c0-62.17 7.606-137.288 98.377-241.956 82.651-95.305 249.49-297.326 334.701-400.823l-85.357 674.377-202.826-102.326a45.787 45.787 0 00-41.179 81.7l260.608 131.438a46.007 46.007 0 0042.057-.439 45.714 45.714 0 0023.918-34.597l113.371-896a45.641 45.641 0 00-19.163-43.154z",
    fill: "#727082"
  }));
};
/* harmony default export */ var requestIcon = (requestIcon_SvgRequestIcon);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/app_message.svg


var app_message_SvgAppMessage = function SvgAppMessage(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "app_message_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M270.336 970.752C79.872 874.496-10.24 708.608 4.096 471.04c10.24-178.176 86.016-309.248 229.376-399.36C325.632 16.384 350.208 10.24 512 10.24s186.368 6.144 278.528 61.44c61.44 38.912 122.88 100.352 161.792 161.792 55.296 92.16 61.44 116.736 61.44 278.528s-6.144 186.368-61.44 278.528c-94.208 151.552-223.232 221.184-417.792 229.376-135.168 6.144-169.984 0-264.192-49.152z",
    fill: "#F7C65D"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M327.68 741.376c0-8.192 12.288-28.672 26.624-43.008 14.336-16.384 16.384-30.72 4.096-34.816-98.304-38.912-122.88-65.536-129.024-131.072-10.24-104.448 14.336-202.752 55.296-223.232 20.48-12.288 129.024-26.624 241.664-34.816 198.656-12.288 204.8-12.288 239.616 34.816 40.96 59.392 45.056 260.096 4.096 315.392-22.528 30.72-55.296 38.912-147.456 40.96-88.064 0-143.36 12.288-198.656 47.104-86.016 49.152-96.256 53.248-96.256 28.672zM409.6 450.56c0-22.528-14.336-40.96-30.72-40.96s-30.72 18.432-30.72 40.96 14.336 40.96 30.72 40.96 30.72-18.432 30.72-40.96zm143.36 12.288c0-40.96-38.912-63.488-65.536-36.864-12.288 12.288-14.336 30.72-8.192 43.008 20.48 32.768 73.728 26.624 73.728-6.144zm135.168 6.144c20.48-34.816-26.624-73.728-55.296-45.056-24.576 24.576-8.192 67.584 22.528 67.584 10.24 0 24.576-10.24 32.768-22.528z",
    fill: "#FFFEFC"
  }));
};
/* harmony default export */ var app_message = (app_message_SvgAppMessage);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/githubCircle.svg


var githubCircle_SvgGithubCircle = function SvgGithubCircle(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "githubCircle_svg__icon",
    viewBox: "0 0 1055 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M527.95 0C236.016 0 0 234.682 0 524.97c0 232.107 151.21 428.53 361.007 498.037 26.22 5.213 35.84-11.295 35.84-25.197 0-12.163-.87-53.9-.87-97.342-146.866 31.279-177.462-62.588-177.462-62.588-23.583-60.82-58.554-76.49-58.554-76.49-48.097-32.147 3.507-32.147 3.507-32.147 53.31 3.476 81.299 53.869 81.299 53.869 47.166 79.965 123.221 57.406 153.817 43.442 4.344-33.885 18.37-57.344 33.203-70.377-117.109-12.163-240.361-57.375-240.361-259.01 0-57.375 20.976-104.292 54.179-140.815-5.244-13.033-23.583-66.932 5.275-139.047 0 0 44.56-13.932 145.098 53.869a513.862 513.862 0 01131.972-17.377c44.59 0 90.018 6.082 132.002 17.377 100.508-67.801 145.098-53.869 145.098-53.869 28.858 72.115 10.488 126.014 5.244 139.047 34.072 36.523 54.18 83.472 54.18 140.816 0 201.634-123.253 245.977-241.261 259.01 19.238 16.508 35.84 47.786 35.84 97.342 0 70.407-.87 126.913-.87 144.29 0 13.902 9.62 30.41 35.84 25.197 209.766-69.508 361.007-265.93 361.007-498.036C1055.9 234.682 819.014 0 527.95 0z",
    fill: "#555"
  }));
};
/* harmony default export */ var githubCircle = (githubCircle_SvgGithubCircle);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/new_flag.svg


var new_flag_SvgNewFlag = function SvgNewFlag(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "new_flag_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M1002.393 265.195H21.606c-6.782 0-12.28 5.498-12.28 12.28v463.533c0 6.781 5.498 12.28 12.28 12.28h330.66l159.26 155.906 155.91-155.907h334.957c6.782 0 12.28-5.498 12.28-12.28V277.476c0-6.782-5.498-12.28-12.28-12.28zm-647.415 105.44h211.278v48.202H412.512v63.17h143.055v48.01H412.512v77.552h159.187v48.009H354.98V370.634zm-60.837 284.943h-57.728L121.542 469.762v185.816h-53.45V370.634h55.977L240.69 560.92V370.634h53.452v284.944zm603.514 0h-61.033L779.866 442.55l-56.56 213.028h-62.393l-68.027-284.944h58.893l42.956 195.73 52.09-195.73h68.418l49.952 199.033 43.732-199.033h57.923l-69.195 284.944z",
    "data-spm-anchor-id": "a313x.7781069.0.i2",
    className: "new_flag_svg__selected",
    fill: "#d81e06"
  }));
};
/* harmony default export */ var new_flag = (new_flag_SvgNewFlag);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/click1.svg


var click1_SvgClick1 = function SvgClick1(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "click1_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M576 934.4c-8.533 4.267-21.333 4.267-34.133-4.267 0 0-34.134-25.6-149.334-98.133-64-38.4-123.733-85.333-170.666-123.733-42.667-34.134-85.334-68.267-128-89.6-29.867-21.334-46.934-51.2-51.2-81.067 0-38.4 21.333-76.8 55.466-93.867 21.334-12.8 42.667-17.066 68.267-17.066l-140.8-256C8.533 136.533-12.8 59.733 55.467 17.067c25.6-12.8 51.2-17.067 76.8-8.534C170.667 25.6 192 64 200.533 72.533L268.8 183.467c4.267-12.8 17.067-21.334 29.867-29.867 34.133-21.333 68.266-25.6 98.133-12.8 8.533 4.267 12.8 4.267 17.067 8.533 8.533-12.8 21.333-25.6 42.666-34.133 25.6-12.8 55.467-12.8 76.8-4.267 12.8 4.267 21.334 12.8 29.867 21.334 8.533-12.8 25.6-25.6 46.933-29.867 72.534-21.333 123.734 42.667 140.8 76.8l64 106.667c4.267 4.266 76.8 128 81.067 290.133 0 110.933 4.267 136.533 4.267 145.067v8.533c0 8.533-8.534 17.067-17.067 21.333L576 934.4zM132.267 494.933C115.2 503.467 102.4 524.8 102.4 537.6c0 8.533 4.267 17.067 17.067 25.6 42.666 25.6 85.333 59.733 132.266 93.867 51.2 38.4 102.4 81.066 166.4 119.466 76.8 46.934 119.467 76.8 140.8 89.6l277.334-157.866c0-21.334 0-59.734-4.267-132.267-4.267-145.067-72.533-256-72.533-260.267l-64-106.666V204.8c0-4.267-29.867-55.467-68.267-46.933-4.267 0-4.267 4.266-8.533 4.266-4.267 4.267-17.067 8.534-8.534 42.667 8.534 12.8 8.534 17.067 8.534 17.067 4.266 17.066 0 34.133-17.067 38.4-12.8 4.266-29.867 0-38.4-17.067l-8.533-17.067C541.867 196.267 524.8 179.2 512 170.667c-4.267-4.267-17.067-4.267-29.867 4.266-21.333 8.534-34.133 21.334-21.333 51.2l17.067 25.6c8.533 12.8 4.266 29.867-4.267 42.667-12.8 8.533-29.867 8.533-38.4-4.267 0 0-12.8-12.8-21.333-34.133l-8.534-17.067c0-4.266-4.266-4.266-4.266-8.533 0 0-8.534-21.333-25.6-29.867-12.8-4.266-29.867 0-42.667 8.534-17.067 8.533-29.867 21.333-17.067 55.466l34.134 51.2c8.533 12.8 4.266 29.867-8.534 38.4-12.8 8.534-29.866 8.534-38.4-4.266 0 0-25.6-25.6-38.4-59.734L149.333 102.4v-4.267c-4.266-4.266-17.066-25.6-34.133-29.866-8.533-4.267-17.067 0-25.6 4.266-38.4 21.334-17.067 64-12.8 68.267l183.467 328.533c8.533 12.8 4.266 29.867-4.267 38.4-8.533 8.534-25.6 8.534-38.4 0-38.4-34.133-72.533-21.333-85.333-12.8zm0 0",
    fill: "#707070"
  }));
};
/* harmony default export */ var click1 = (click1_SvgClick1);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/click2.svg


var click2_SvgClick2 = function SvgClick2(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "click2_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M812.846 824.699c-25.364-47.872-19.968-35.082-24.545-58.732-4.153-21.31-2.053-45.977-3.22-71.52-1.726-38.58-5.34-79.151-5.34-113.163 0-29.88-12.473-39.399-19.211-58.721-9.8-28.12-17.67-53.847-30.96-67.257-16.118-16.276-33.782-5.95-33.782-5.95-11.654-30.11-14.7-37.78-26.962-52.664-11.761-14.32-29.548-12.385-29.548-12.385s-8.694-43.238-28.585-65.065c-10.609-11.648-32.502-11.52-40.724-7.526-5.955 2.888-13.942 12.17-22.283 18.263-16.076 11.745-35.456 33.73-35.456 33.73s-3.282-10.025-12.441-27.919c-7.772-15.211-22.615-35.185-32.804-54.446a359.046 359.046 0 01-4.716-9.283 136.14 136.14 0 0019.262-69.99c0-75.587-61.266-136.837-136.822-136.837-75.581 0-136.811 61.25-136.811 136.837 0 75.561 61.23 136.817 136.811 136.817a136.243 136.243 0 0054.636-11.382l2.58 8.888c5.514 18.914 14.761 43.705 22.41 63.38 10.21 26.271 18.837 47.714 23.726 75.331 3.574 20.235 1.465 43.397.6 62.73-.753 16.436-1.946 32.267-3.866 45.256-2.59 17.751-8.213 30.218-11.223 38.18-2.253 5.98-1.869 10.988-1.869 10.988s-4.127-.093-9.047 1.53c-4.92 1.629-8.018 5.75-8.018 5.75l-8.182-5.499s1.536-2.97 0-8.258c-1.664-5.78-4.562-13.911-8.699-24.802-1.679-4.449-3.271-13.28-4.582-17.48-3.466-11.058-8.023-15.16-8.023-15.16s4.73-15.19-1.613-31.641c-6.646-17.244-21.258-40.428-37.504-55.798-13.378-12.672-24.294-15.98-35.86-14.223-14.408 2.176-19.912 18.867-17.234 36.434 1.633 10.629 6.364 24.919 7.48 32.266 2.668 17.546-7.014 38.277-6.65 50.365.465 15.673 8.637 24.361 16.107 57.452 2.667 11.812 10.378 24.76 13.921 38.292 5.233 20.02 8.448 39.112 10.778 43.93 12.344 25.528 61.301 57.59 106.757 99.282 25.63 23.49 55.926 23.577 76.861 44.83 12.816 13 19.886 34.75 33.101 54.452 54.784 81.628 215.327 1.869 257.51-58.62 10.036-14.37 7.972-33.213 4.04-40.662zM344.72 310.764c-60.027 0-108.677-48.671-108.677-108.688 0-60.032 48.645-108.708 108.677-108.708s108.688 48.681 108.688 108.708c0 13.42-2.55 26.22-7 38.088-4.157-7.388-8.55-13.804-13.578-18.514 1.398-6.308 2.192-12.851 2.192-19.584 0-49.869-40.428-90.296-90.297-90.296-49.863 0-90.296 40.427-90.296 90.296 0 49.864 40.433 90.296 90.296 90.296 15.407 0 29.901-3.88 42.594-10.685 1.254 5.852 2.739 11.97 4.388 18.288a108.001 108.001 0 01-46.987 10.799z",
    fill: "#333"
  }));
};
/* harmony default export */ var click2 = (click2_SvgClick2);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/backTop.svg


var backTop_SvgBackTop = function SvgBackTop(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "backTop_svg__icon",
    viewBox: "0 0 1040 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M1037.216 814.231c-.947 1.42-3.71 3.868-8.314 7.367-4.63 3.473-7.498 5.314-8.63 5.499-.947.394-3.578.236-7.919-.421-4.341-.658-9.84-.658-16.523 0-6.709.657-11.734.894-15.128.71l-26.283-3.394c-1.71 0-9.998-.71-24.863-2.131-14.892-1.395-24.6-2.947-29.125-4.657-4.526-1.684-7.288-2.157-8.34-1.42-1.027.762-1.553 4.525-1.553 11.313l-.29 52.014.58 11.577 3.104 44.095 1.71 14.707c.553 8.077-1.341 23.916-5.656 47.463-.763 3.579-1.368 6.446-1.842 8.63-.474 2.157-1.947 5.736-4.394 10.735-2.447 4.998-4.946 7.524-7.472 7.63-2.552.105-4.525-5.473-5.946-16.681-1.42-11.208-2.21-19.075-2.394-23.6l-2.842-45.78 1.421-100.32-2.815-163.647c-.395-21.285-.631-32.835-.71-34.624-.106-1.789-.053-2.867.131-3.262l.842-23.153-.842-21.495c-.368-2.263-1.447-9.419-3.236-21.469-1.789-12.05-1.789-20.022 0-23.89 1.79-3.867 4.368-5.788 7.762-5.788.368.185 2.262.658 5.656 1.421 3.394.737 8.472 2.158 15.26 4.236l14.128 4.789c2.447.578 8.21.578 17.233 0 8.683-.369 14.34-1.027 16.97-1.974l21.206-11.313c3.368-1.315 6.762-1.973 10.156-1.973l14.707 3.104c17.522 3.605 27.941 6.604 31.23 9.051 3.289 2.447 4.551 6.499 3.815 12.155-.395 2.079-1.263 4.21-2.684 6.367-1.42 2.158-6.209 6.13-14.418 11.866-8.182 5.735-19.6 17.575-34.203 35.466-14.602 17.917-20.68 30.335-18.232 37.307 1.131 3.762 4.34 7.34 9.63 10.735l17.521 8.76c8.472 4.71 17.786 13.708 27.968 26.995 10.182 13.286 16.286 24.915 18.364 34.913l8.761 46.069c1.316 7.34 3.079 13.786 5.236 19.364 2.158 5.551 3.157 9.366 2.973 11.445-.184 2.078-.763 3.815-1.71 5.209zm-52.83-93.4c-4.526-8.288-8.63-14.26-12.313-17.944-3.657-3.683-9.709-7.524-18.075-11.576-8.393-4.052-14.523-6.13-18.365-6.235-3.867-.08-6.182-.132-6.945-.132l-12.708.553c-3.21.21-5.367-.264-6.499-1.395-1.315-.947-2.13-2.21-2.394-3.815-.29-1.605-.579-3.815-.868-6.656-.263-2.815-.368-5.446-.263-7.92.079-2.446 2.868-8.945 8.34-19.495l21.18-41.254 7.63-14.707c-1.132-3.184-4.42-5.183-9.893-5.92-2.263-.184-7.446 1.315-15.55 4.525-8.103 3.184-12.707 5.552-13.838 7.051-1.132 1.5-2.579 6.551-4.368 15.128-1.815 8.578-2.946 14.681-3.394 18.365-.473 3.683-1.552 15.18-3.262 34.492-1.684 19.312-2.552 31.309-2.552 36.018l-.553 34.203c-1.5 27.31-1.5 43.99 0 50.015l.553 2.553c6.051 1.13 11.024 1.683 14.996 1.683 2.263.21 8.604.053 19.075-.42 10.445-.448 17.654-1.158 21.627-2.105l23.731-7.078c11.682-3 20.101-7.63 25.284-13.839 5.183-6.209 1.658-20.916-10.576-44.095zm4.499-285.963c-.369 6.604-.921 13.892-1.684 21.89-.763 8.025-1.973 14.576-3.684 19.654-1.683 5.077-4.314 8.103-7.893 9.05-3.604.947-7.55-2.552-11.892-10.471l-44.648-79.693c-1.683-2.63-1.604-5.367.29-8.182 1.868-2.842 6.683-5.999 14.418-9.472 7.709-3.499 12.997-6.262 15.812-8.34 2.841-2.079 5.183-4.657 7.077-7.788 1.868-3.104 3.052-6.209 3.526-9.314.473-3.104.342-12.102-.421-26.993l-5.078-95.242-1.71-10.182-4.236-63.88-4.236-50.016-3.104-46.358-3.973-27.968-1.132-19.785c-.552-3.762-.552-6.393 0-7.919.58-1.5 1.605-2.736 3.131-3.683 1.5-.921 5.157-.263 11.024 2 .553.368 6.946 2.104 19.206 5.209 12.235 3.13 18.891 6.051 19.917 8.76 1.052 2.737.342 7.5-2.105 14.287-2.447 6.788-3.683 12.26-3.683 16.391l-2.263 61.881.29 71.247 2.262 61.04 1.132 8.471 1.973 33.361 2.552 21.759c.737 7.34 1.315 20.81 1.684 40.412.368 19.6.368 33.913 0 42.964l-2.552 46.91zm-90.138-308.641l1.973 74.062 1.131 7.077-.289 9.603v7.92c-.552 4.13-2.92 9.13-7.051 14.97-4.157 5.84-8.682 8.577-13.576 8.183-5.078-.185-7.972-1.21-8.63-3.105a24.015 24.015 0 01-1.262-5.657c-.185-1.868-.816-4.42-1.842-7.63-1.026-3.183-2.026-8.471-2.973-15.812l-6.21-44.648-.841-22.916-1.973-20.916c-.763-7.156-1.184-14.813-1.29-23.021-.079-8.209-.263-13.997-.552-17.391-.29-3.394.131-6.025 1.263-7.893 1.131-1.894 4.051-2.657 8.76-2.263 1.316.184 7.736 3.42 19.233 9.735 11.472 6.314 17.707 10.892 18.654 13.707.553 2.263-.105 6.473-2 12.577-1.867 6.13-2.71 10.602-2.525 13.418zm-69.958 584.58c-4.63 2.525-7.156 3.867-7.63 3.946-.474.105-1.947.184-4.394.29-2.447.105-12.34 1.315-29.651 3.683-17.338 2.342-29.494 4.289-36.466 5.788-6.972 1.5-24.205 5.841-51.725 12.997l-35.334 9.314-44.096 12.734-24.862 7.92c-7.92.368-14.26-3.447-19.075-11.446-4.815-8.024-7.577-13.102-8.34-15.286-.763-2.157-.763-4.262 0-6.34 1.894-4.71 41.543-15.918 119-33.65-2.474-3.184-4.342-5.552-5.657-7.052l-3.105-2.841-9.63-16.102-4.788-4.525c-1.526-1.684-2.552-6.683-3.104-14.97-.58-8.288 2.447-15.55 9.024-21.759 1.526-1.5 3.394-1.315 5.657.553 1.894 3.972 3.815 6.603 5.788 7.919 2 1.315 8.735-1.316 20.206-7.92 4.341-2.446 11.787-5.498 22.337-9.181 10.55-3.684 18.89-5.657 25.02-5.92 6.105-.29 9.656-.632 10.604-1l5.367-1.973c4.13-1.316 9.235-1.605 15.26-.842 2.63.552 8.34 2.026 17.101 4.367 8.761 2.368 14.418 4.341 16.944 5.946 2.552 1.605 5.235 3.815 8.05 6.63 2.842 2.816 4.447 5.473 4.815 7.92.369 2.447-3.815 5.893-12.576 10.313-8.761 4.42-13.523 7.314-14.286 8.63l-20.627 25.152c2.078.184 3.683.184 4.815 0l26.836-2c10.182 1.132 17.285 3.973 21.337 8.499 4.052 4.525 6.078 8.182 6.078 11.024-.185 1.868-.553 3.236-1.132 4.078-.552.868-3.157 2.552-7.761 5.104zm-75.036-80.403c-9.419.184-15.444 1.13-18.101 2.815-2.631 1.684-6.315 6.498-10.998 14.418l-11.603 18.075c-4.13 6.972-7.314 14.18-9.471 21.626-2.158 7.446-3.341 11.156-3.526 11.156 22.785-4.684 35.834-8.235 39.15-10.577 3.288-2.368 6.393-7.63 9.313-15.838 2.92-8.183 6.025-15.97 9.34-23.311 3.289-7.34 4.526-12.26 3.657-14.707-.842-2.447-3.42-3.657-7.761-3.657zm-20.916-89.612c-1.684-3.946-4.526-9.735-8.472-17.365-3.973-7.63-5.788-13.575-5.525-17.811.29-4.236 1.552-7.078 3.815-8.472 2.262-1.42 6.314-1.368 12.155.131 13.576 4.157 22.995 8.21 28.257 12.156 5.288 3.946 9.208 9.471 11.734 16.522 2.552 7.078 4.104 10.893 4.683 11.445l32.782 8.761c5.262 2.473 8.525 6.315 9.735 11.603 1.236 5.262 1.842 8.393 1.842 9.314-.185 3.788-2.132 6.84-5.789 9.182-3.683 2.368-14.549 3.367-32.65 2.973L728.6 590.833c-7.92 1.5-12.708 2.526-14.418 3.105l-13.576 5.657-10.445 2.815-14.707 9.34a2.635 2.635 0 01-1.684 0c-6.604-.395-13.418-5.183-20.496-14.418-7.05-9.235-10.129-15.839-9.182-19.785.947-4.525 7.156-7.972 18.654-10.314 11.497-2.367 21.337-4.63 29.546-6.787 8.182-2.158 18.312-4.157 30.362-5.947 12.076-1.789 16.917-4.13 14.575-7.05-2.368-2.921-3.815-5.131-4.393-6.657zm71.51-203.007c-11.313 5.946-20.627 10.313-27.994 13.155l-30.52 10.734c-14.68 5.262-37.36 15.155-67.958 29.678-30.625 14.496-49.515 24.047-56.671 28.677-7.157 4.605-12.156 6.262-14.97 4.947-1.895-.553-3.868-2.368-5.947-5.367l-13.576-23.469c-5.262-8.103-7.63-13.47-7.05-16.102.552-2.63 1.92-4.604 4.104-5.946 2.157-1.315 6.63-3.104 13.418-5.367l49.462-15.812c34.282-10.945 52.699-17.996 55.251-21.206 2.526-3.21 3.63-8.103 3.236-14.707l-1.973-24.021c-23.547 6.42-38.728 9.156-45.49 8.209-4.525-.58-9.471-2.132-14.839-4.657-5.367-2.552-8.445-5.104-9.182-7.63-.763-2.552.368-5.894 3.368-10.05 2.841-4.131 6.13-7.052 9.892-8.762 3.789-1.684 11.261-4.551 22.469-8.603 11.208-4.052 21.627-7.314 31.23-9.761.21-5.657.71-14.26 1.578-25.863.842-11.576-.71-17.943-4.683-19.074-3.946-1.132-9.313 0-16.101 3.394-3.579 1.894-9.288 5.709-17.102 11.444-7.814 5.762-13.234 7.972-16.26 6.63-1.867-.736-5.025-4.84-9.445-12.286-4.446-7.446-8.813-13.76-13.155-18.943-4.34-5.157-7.077-9.183-8.182-11.998-1.131-2.841-.868-6.498.842-11.024 1.131-3.21 5.84-7.735 14.128-13.576 8.288-5.84 14.129-11.76 17.523-17.785l22.31-39.57 13.024-27.152c-17.733-2.447-29.31-5.157-34.782-8.182-5.446-3.026-8.524-5.894-9.182-8.63-.658-2.71-.526-6.34.421-10.866.763-4.341 1.894-7.498 3.394-9.472 1.5-1.973 8.682-4.472 21.495-7.498 12.813-3 24.205-5.262 34.177-6.788l40.701-5.657c35.808-4.893 57.198-4.893 64.17 0 3 2.263 6.262 6.946 9.735 13.997 3.5 7.078 3.736 12.682.71 16.812-1.868 2.474-7.709 4.447-17.522 5.946L776.09 59.82c-18.654 2.447-29.125 4.105-31.388 4.947-2.262.842-4.657 2.262-7.209 4.236-2.525 1.973-6.34 5.788-11.444 11.444l-17.812 18.654c-.184.184-4.657 5.367-13.418 15.55-8.762 10.181-13.945 18.706-15.55 25.572-1.604 6.894-1.368 11.656.71 14.287 2.08 2.63 11.683 1.868 28.837-2.263l27.704-6.498c10.55-2.631 15.68-4.894 15.391-6.788-.29-1.895-1.736-4.394-4.367-7.499a43.56 43.56 0 01-6.499-10.155c-1.71-3.684-2.552-7.315-2.552-10.893v-.29c-.184-.183-.237-.841-.131-1.972.079-1.132 2-2.447 5.788-3.947 3.762-1.526 10.813.184 21.18 5.078l27.151 10.182c6.972 3 11.945 6.34 14.97 10.024 3 3.683 6.13 12.576 9.314 26.705 3.21 14.128 4.447 23.547 3.684 28.256-.948 4.71-2.973 8.735-6.078 12.024-3.105 3.289-6.157 5.052-9.182 5.236-6.394.552-18.075-10.182-35.045-32.23-18.47 7.735-28.652 12.708-30.52 14.97-1.894 2.263-3.21 6.236-3.972 11.893l.868 23.442v26.283c27.125-3.394 41.912-4.972 44.358-4.788 11.314 1.131 17.05 5.735 17.26 13.839.184 8.103-1.237 13.76-4.262 16.943-2.447 2.658-7.104 4.684-13.971 6.078-6.893 1.42-21.337 3.63-43.385 6.656l-.868 16.102c-.737 11.866.447 18.286 3.552 19.233 3.104.947 9.655.263 19.627-2l55.96-12.129c9.999-3.025 15.366-3.552 16.129-1.578.737 2 0 5.235-2.263 9.76-4.92 9.814-12.997 17.655-24.31 23.6zm-384.94 632.043c-1.132-1.5-7.262-9.472-18.365-23.89-11.129-14.417-19.285-25.652-24.442-33.755-5.21-8.104-8.34-13.103-9.471-14.997L353 880.243c-3.025-3.394-6.788-8.288-11.313-14.708-4.525-6.393-6.183-11.681-4.946-15.812 1.21-4.157 3.999-6.051 8.34-5.657 1.868.185 6.34 1.868 13.418 5.078 7.077 3.21 12.47 6.42 16.26 9.603l24.862 19.522c12.63 11.287 22.785 24.205 30.52 38.702 7.735 14.523 12.865 26.468 15.418 35.887 2.525 9.419 2.946 16.865 1.262 22.337-5.077 15.628-14.233 13.84-27.415-5.367zm5.656-254.233c-1.71 14.418-2.552 25.968-2.552 34.624-.184 4.157.29 16.391 1.42 36.755 1.132 20.337 1.027 37.123-.289 50.304-1.131 9.604-3.63 19.023-7.498 28.257-3.841 9.235-11.445 4.894-22.732-12.997-3.788-5.84-5.604-13.418-5.525-22.758.105-9.314-.605-24.442-2.105-45.358l-3.13-43.517-3.368-30.256c-1.132-11.866-3.394-20.443-6.788-25.705-3.394-5.288-10.366-9.13-20.917-11.603-10.55-2.446-19.495-3.578-26.862-3.367-7.156.368-17.101 2.394-29.81 6.051-12.707 3.683-24.31 9.998-34.755 18.943-10.47 8.946-15.785 17.023-15.97 24.179l-1.71 61.328c-.184.553.105 4.605.868 12.156l.842 20.337 6.499 44.385c-.395.947-1.052 2.92-1.973 5.92-.947 3.025-2.079 7.314-3.394 12.865-1.316 5.552-2.92 8.472-4.815 8.761-1.868.29-4.236-1.657-7.051-5.788-3.394-4.34-5.288-11.392-5.657-21.206l-1.131-16.68-.579-91.006c-.368-8.103-.947-17.128-1.684-27.126-.763-9.971-1.052-16.943-.842-20.916l1.132-20.074c-.21-4.5.079-7.525.842-9.025 1.315-2.841 3.473-4.63 6.498-5.367l12.997 1.131c2.447-.394 6.025-4.34 10.735-11.892l16.39-25.704 4.237-11.314c3.578-7.919 5.34-13.707 5.235-17.364-.105-3.684-1.736-6.473-4.946-8.34-.763-.185-4.104 0-10.024.552-5.946.579-11.313-.237-16.102-2.394-4.814-2.158-9.234-5.315-13.286-9.472-4.052-4.157-5.815-8.393-5.236-12.708.369-4.92 3.157-8.76 8.34-11.602 5.183-2.815 10.025-4.525 14.55-5.078l84.218-7.63c7.92-.579 23.468-1.079 46.647-1.552 23.18-.474 36.124.973 38.86 4.367 2.71 3.394 4.289 6.683 4.657 9.893.368 3.21-.605 7.156-2.973 11.866-2.342 4.71-4.788 8.392-7.34 11.023-2.553 2.658-10.235 4.236-23.048 4.815l-38.991 1.973c-15.26.948-25.495 4.394-30.678 10.314-5.183 5.946-9.734 11.629-13.707 17.101-3.947 5.473-6.21 8.762-6.762 9.893l-5.367 14.128-6.525 11.314c6.972-2.079 12.55-3.394 16.68-3.973 4.158-.553 11.314-.21 21.496 1 10.155 1.236 21.232 3.104 33.203 5.656 11.971 2.552 19.548 4 22.758 4.368 3.184.394 7.814.815 13.839 1.289 6.025.473 12.524 1.131 19.496 1.973 6.972.842 11.129 2.631 12.444 5.367 1.316 2.737.553 8.156-2.262 16.26-2.631 7.34-4.815 18.233-6.499 32.624zm-132.55-450.584c-2.84 6.21-8.866 10.182-18.1 11.866l-20.049 1.973c-.947.185-9.024 1.71-24.179 4.526-15.154 2.841-22.837 4.236-23.02 4.236-4.158 2.446-9.893 6.314-17.26 11.602-7.34 5.262-12.892 6.683-16.654 4.236-5.657-3.21-10.182-7.577-13.576-13.155-3.394-5.551-6.025-10.971-7.92-16.233l-8.76-22.337-17.523-30.809c-5.472-9.787-8.577-18.233-9.314-25.284-.763-7.077-.29-11.55 1.395-13.444 1.71-1.868 4.34-2.631 7.919-2.237l13.287 3.947c.763 0 7.393-2.21 19.916-6.656 12.524-4.42 26.626-7.657 42.254-9.735l49.752-5.104c3.762-.737 6.21-1.21 7.34-1.395l18.365 1.132 15.549-1.421h.842c9.235.184 16.601 1.789 22.048 4.815 5.472 2.999 8.392 6.498 8.76 10.445.395 3.972-2.814 11.313-9.602 22.047-1.895 2.816-4.105 7.551-6.63 14.129-2.553 6.604-6.13 13.76-10.761 21.495-4.605 7.709-6.157 13.47-4.657 17.233l1.42 3.394c1.132 3.394.843 6.972-.841 10.734zm-29.387-56.803c0-4.157-.211-6.893-.58-8.208-1.13-3.184-4.367-6.578-9.76-10.182-5.368-3.552-11.813-5.552-19.338-5.92-10.366-.368-21.022 1.184-31.94 4.657-10.945 3.499-19.47 7.34-25.574 11.602-6.13 4.236-11.129 8.656-14.996 13.26-3.868 4.631-5.499 9.946-4.946 15.97 1.13 16.392 17.154 24.416 48.041 24.022 18.102 0 29.862-1.763 35.335-5.367 5.472-3.579 10.734-9.183 15.838-16.813 5.078-7.63 7.709-15.101 7.92-22.468v-.553zm148.072-61.907l-1.132 9.603-7.05 39.307-17.234 90.427c-3.972 31.467-7.182 50.7-9.63 57.645l-7.05 18.391c-11.13 34.86-18.417 52.936-21.916 54.251-3.473 1.316-5.788 1.894-6.92 1.71-1.894 0-4.13-1-6.788-2.973-2.63-1.973-4.078-5.078-4.367-9.34-.29-4.236.052-10.103.973-17.654.763-7.156 1.474-12.286 2.131-15.391.658-3.13.71-5.762.132-7.92-.553-2.157-4.13-4.393-10.735-6.656-9.603-3-33.545-1.684-71.773 3.973l-22.89 2.526-27.993 3.973c-25.626 4.34-44.622 6.788-56.935 7.34-12.366.579-19.18 2.184-20.495 4.815l-3.105 18.654c-2.079 3.762-4.262 5.367-6.525 4.788-.737 0-3.052-1.5-6.92-4.525a44.119 44.119 0 01-9.734-10.445c-2.657-3.947-4.815-8.998-6.499-15.129-1.71-6.104-5.183-20.574-10.471-43.385L63.854 271.8c-1.5-6.42-2.815-11.681-3.946-15.838-1.132-4.13-4.526-14.681-10.182-31.651-5.657-16.944-10.077-29.862-13.287-38.728-3.21-8.84-4.893-14.26-5.078-16.233-.184-2-.289-8.683-.289-20.075s1.079-17.76 3.262-19.075c2.158-1.315 4.657-1.894 7.472-1.71 2.842.58 8.104 4.105 15.839 10.603 7.735 6.499 12.155 15.97 13.287 28.415.184 2.815.078 6.735-.29 11.734-.368 4.973-.473 8.156-.29 9.472l1.71 10.155 1.422 12.155c.368 2.658 2.289 9.183 5.788 19.654 3.473 10.445 6.63 22.363 9.471 35.755l2.816 14.129 8.76 35.597c.948 6.42 2.158 11.182 3.684 14.286 1.5 3.105 4.315 5.841 8.472 8.183 4.13 2.367 18.075 1.657 41.833-2.105 2.262-.184 8.05-.579 17.364-1.132 9.34-.578 28.994-3.394 58.934-8.498l74.063-7.34 9.892-1.973 13.84-2.263c5.077-1.131 10.892-3.683 17.39-7.63 6.499-3.946 9.55-37.413 9.182-100.32v-9.34l-.841-15.26.552-21.468c0-17.733-3.762-29.862-11.313-36.466-4.71-3.762-10.393-6.92-17.102-9.471-6.682-2.552-17.364-5.078-32.071-7.63-14.681-2.552-23.258-4-25.705-4.394-9.235-.737-20.417.29-33.493 3.13-13.102 2.816-29.914 8.788-50.462 17.944-20.522 9.13-35.992 14.181-46.358 15.102-6.21.763-15.944.342-29.23-1.263-13.287-1.605-20.89-3.946-22.759-7.077-1.894-3.105-2.92-5.078-3.104-5.92-.184-.842.368-2.21 1.684-4.104 1.894-3 6.445-7.051 13.707-12.155 7.262-5.078 13.181-8.577 17.812-10.445 4.604-1.895 22.048-5.946 52.278-12.156 30.256-6.209 48.015-9.603 53.277-10.182l44.385-3.683 7.34-1.394c3.21-.369 6.394-.29 9.604.289 3.21.553 16.207 4.052 39.017 10.445 22.785 6.42 40.491 9.577 53.12 9.472 12.629-.106 22.18.947 28.704 3.104 6.499 2.158 12.05 4.236 16.654 6.21 4.63 1.999 6.657 5.524 6.078 10.602-.368 1.71-2.763 5.604-7.209 11.734-4.42 6.13-7.209 13.892-8.34 23.311zM93.242 578.678l59.356-6.235c14.338-1.316 28.046-2.21 41.122-2.684 13.102-.447 21.311 1.342 24.6 5.394 3.288 4.051 5.078 7.182 5.367 9.445.29 2.263-.526 5.84-2.394 10.76-3.578 9.236-6.736 14.918-9.472 17.076-2.736 2.184-6.209 3.447-10.471 3.815-4.236.394-12.524 1-24.863 1.842-12.34.868-20.495 3.078-24.442 6.656-3.973 3.578-6.788 9.13-8.472 16.68-1.71 7.525-2.683 16.207-2.973 25.995-.29 9.787-1.078 25.626-2.42 47.49-1.316 21.836-2.447 52.83-3.368 92.978.553 39.57-.947 66.354-4.525 80.403-3.578 14.024-5.367 21.338-5.367 21.89l-3.131 20.364-7.63 28.836c-2.447 14.68-7.051 20.048-13.84 16.102-1.315-.58-2.551-1.895-3.683-3.973-1.131-2.052-2.71-6.499-4.788-13.26l-4.525-12.734-8.472-27.705c-3.578-8.656-5.473-14.865-5.657-18.654-.184-3.762.658-6.498 2.526-8.182.763-.763 4.394-1.079 10.892-1 6.499.106 11.813-1.631 15.97-5.21 5.657-4.92 8.762-17.522 9.314-37.885l1.131-36.729 1.132-74.615c-2.052-25.073-3.052-42.201-2.947-51.436.079-9.235.132-14.786.132-16.68l-2.552-24.31c-.369-4.894-1.21-8.21-2.526-9.893-1.342-1.684-3.684-2.736-7.078-3.105-1.894 0-5.077.369-9.603 1.132l-17.233 2.815c-.21.184-4.525 1.605-13.023 4.236-8.472 2.657-14.97 3.867-19.496 3.683-4.71 0-7.998-.474-9.892-1.42-1.868-.922-6.972-5.92-15.26-14.971-8.288-9.05-12.681-14.234-13.129-15.55-.473-1.315-.868-3.34-1.131-6.077-.29-2.736 5.025-6.156 15.97-10.313 7.893-2.816 22.416-5.973 43.517-9.472 21.1-3.473 32.23-5.315 33.334-5.499zm92.296 394.254c3.104-4.709 7.708-11.208 13.839-19.495 6.13-8.288 14.891-17.47 26.283-27.547 11.392-10.076 18.47-16.838 21.206-20.206 2.736-3.394 7.025-10.234 12.866-20.495 5.84-10.287 9.313-16.733 10.445-19.364 1.13-2.631 3.71-10.893 7.787-24.732 4.026-13.839 6.341-22.942 6.92-27.283l4.788-42.675c.763-7.919.816-15.812.158-23.731-.658-7.92-.631-13.181.132-15.839.947-3.762 2.815-6.104 5.656-7.05 2.263-.58 5.92-.185 11.024 1.13 5.078 1.316 11.445 2.526 19.075 3.658 7.63 1.13 11.866 2.92 12.708 5.367.868 2.473 1 5.21.42 8.208l-4.499 16.681-3.13 15.812c-.948 3.973-3 11.892-6.21 23.758l-11.023 40.412c-3.579 11.866-7.288 22.1-11.156 30.651-3.867 8.577-8.814 17.523-14.839 26.863-6.025 9.313-13.18 18.838-21.495 28.546-8.287 9.708-13.181 17.654-14.68 23.89-1.527 6.208-2.79 10.208-3.816 11.997-1.052 1.789-9.182 7.156-24.442 16.101-15.26 8.946-26.388 14.129-33.36 15.55-6.973 1.42-11.077 1.315-12.287-.29-1.237-1.579-.71-4.736 1.552-9.445.947-2.263 2.973-5.762 6.078-10.472zM643.54 781.738c.368-3.473.868-5.946 1.552-7.34.658-1.421 1.92-2.158 3.815-2.263 1.868-.105 3.473.316 4.788 1.263 0 .184.947 1.42 2.842 3.683l3.657 3.947a22.213 22.213 0 013.394 6.788l-.29 17.522 5.657 25.994c1.131 7.736 2.552 12.313 4.236 13.708 1.71 1.42 3.867 2.131 6.525 2.131 1.105.184 8.84-1.237 23.153-4.236 14.338-3.026 23.179-5.288 26.573-6.788l15.26-6.498c4.525-1.132 7.787-2.316 9.76-3.526 1.974-1.236 3.394-4.157 4.236-8.761.842-4.63 1.316-11.13 1.42-19.522.08-8.367-4.498-13.97-13.707-16.812-3.025-.737-9.945 1.368-20.784 6.367-10.84 4.999-18.496 7.393-23.022 7.209-8.866 0-14.417-1.973-16.68-5.946l-7.077-9.05c2.446-3 4.525-5.131 6.235-6.342 1.684-1.236 5.367-2.736 11.024-4.525 5.63-1.789 13.26-4.578 22.89-8.34 9.603-3.762 17.127-5.183 22.6-4.236l16.39 3.683c.58 0 2.58-.394 6.078-1.13 3.5-.764 11.077-1.474 22.758-2.132 11.682-.658 19.786 1.263 24.31 5.788a23.217 23.217 0 014.079 6.499c1.052 2.447 1.71 4.393 2 5.788.263 1.42-1.947 5.051-6.657 10.892-2.078 2.447-6.367 9.814-12.866 22.048-6.498 12.26-9.182 19.68-8.05 22.337.184.737 1.552 3.394 4.104 7.893 2.552 4.525 3.526 7.183 2.973 7.92l-7.63 16.101c-4.92 2.078-8.577 3.394-11.024 3.973l-27.415 1.973c-9.603 1.315-19.232 4.657-28.835 10.024-9.603 5.367-17.154 8.972-22.6 10.76-5.473 1.79-8.393 3.29-8.762 4.5-.394 1.236.027 3.788 1.263 7.656 1.237 3.841 1.92 7.156 2.131 9.866.184 2.736-.21 5.42-1.131 8.077-1.342 3.394-2.842 4.42-4.525 3.105-.763-.368-1.474-1.316-2.132-2.842-.657-1.5-2.394-4.367-5.235-8.603-2.815-4.236-5.367-10.84-7.63-19.785-2.236-8.945-4.42-16.338-6.499-22.18l-16.39-42.41-6.5-16.102c-1.867-4.71-2.735-8.762-2.525-12.156 0-2.078.263-4.393.842-6.92.552-2.551 1.026-5.55 1.42-9.05z",
    fill: "#515151"
  }));
};
/* harmony default export */ var backTop = (backTop_SvgBackTop);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/Total.svg


var Total_SvgTotal = function SvgTotal(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "Total_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M89.9 368.2l381.2 173.6c33.7 16.1 48.2 16.1 84.7 0L937 368.2c28.1-13.2 29-69.6 0-85.7L555.9 78.6c-30-18-51-17.1-84.7 0L89.9 282.5c-29 19-29.9 69.6 0 85.7z"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M512.4 756.6c-23.5 0-43.1-7.7-60.7-16.2l-349-159c-5.3-2.4-10.1-5.1-14.5-8.3-24.1-17.1-29.8-50.6-12.7-74.7 16.5-23.4 48.6-29.4 72.6-14L497 643.3l.4.2c.1.1.2.1.3.2 9.4 4.5 20.2 4.7 29.7.6 1-.4 2-.8 3.1-1.3l351.2-160c26.9-12.3 58.7-.4 71 26.6 12.3 26.9.4 58.7-26.6 71L574.3 740.8l-.3.1c-18.4 8.2-38.7 15.7-61.6 15.7zM150.1 485.8z"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M512.4 958.5c-23.5 0-43.1-7.7-60.7-16.2l-349-159c-5.3-2.4-10.1-5.1-14.5-8.3-24.1-17.1-29.8-50.6-12.7-74.7 16.7-23.5 48.8-29.5 72.7-14.1l348.8 159 .4.2c.1.1.2.1.3.2 9.4 4.5 20.2 4.7 29.7.6 1-.4 2-.8 3.1-1.3L881.7 685c26.9-12.3 58.7-.4 71 26.6 12.3 26.9.4 58.7-26.6 71L574.3 942.7l-.3.1c-18.4 8.2-38.7 15.7-61.6 15.7zM150.1 687.6c0 .1 0 .1 0 0 0 .1 0 .1 0 0z"
  }));
};
/* harmony default export */ var Total = (Total_SvgTotal);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/customers.svg


var customers_SvgCustomers = function SvgCustomers(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "customers_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M186.765 766.589H82.229c-9.957 0-17.86-8.4-17.317-18.537 2.28-39.511 10.476-132.17 40.55-174.843 45.29-64.528 194.96-42.334 236.91-100.043 4.538-6.277 5.419-23.233 5.419-36.35 0-4.9-2.078-9.619-5.758-12.915-35.83-32.174-60.17-88.46-60.69-142.85-1.218-106.704 14.338-195.165 124.676-195.165 59.967 0 91.44 27.636 107.539 70.489-20.998 8.218-39.353 20.094-54.91 35.831-25.355 25.513-41.95 59.606-51.071 104.017-6.3 30.954-9.076 67.666-8.557 115.395.361 36.193 8.399 73.424 23.075 108.059 11.876 27.951 27.793 52.99 46.51 73.446-3.68 2.077-8.94 4.538-16.46 7.157-17.813 6.276-40.55 10.815-64.685 15.737-61.547 12.417-131.313 26.393-169.425 80.783-12.553 17.86-22.849 40.957-31.27 69.789m772.323 151.408c.52 10.837-8.06 20.117-18.897 20.117H237.655c-10.814 0-19.394-9.257-18.852-20.117 2.438-43.011 11.537-143.732 44.072-190.22 49.31-70.127 211.894-46.013 257.547-108.758 5.057-6.84 5.938-25.377 5.938-39.714 0-5.419-2.28-10.499-6.3-14.134-38.992-34.973-65.385-96.182-65.905-155.268-1.219-115.916 15.715-212.098 135.694-212.098 116.254 0 134.09 95.302 134.09 210.336 0 60.329-26.574 121.876-65.724 157.03-3.861 3.477-6.141 8.557-6.322 13.795-.339 14.337.542 33.032 5.6 40.053 46.149 62.745 203.856 40.19 256.169 108.758 34.228 45.472 43.146 147.05 45.426 190.22",
    fill: "#727082"
  }));
};
/* harmony default export */ var customers = (customers_SvgCustomers);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/pages.svg


var pages_SvgPages = function SvgPages(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "pages_svg__icon",
    viewBox: "0 0 1117 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M139.636 46.545v837.819h930.91V46.545h-930.91zM1024 930.91v-46.545H139.636V93.09H93.091V46.545A46.545 46.545 0 01139.636 0h930.91a46.545 46.545 0 0146.545 46.545v837.819a46.545 46.545 0 01-46.546 46.545H1024zM46.545 139.636v837.819h930.91V139.636H46.545zm0-46.545h930.91A46.545 46.545 0 011024 139.636v837.819A46.545 46.545 0 01977.455 1024H46.545A46.545 46.545 0 010 977.455V139.636a46.545 46.545 0 0146.545-46.545zm0 372.364h930.91v512H46.545v-512zm512-139.637a46.545 46.545 0 100-93.09 46.545 46.545 0 000 93.09zm139.637 0a46.545 46.545 0 100-93.09 46.545 46.545 0 000 93.09zm139.636 0a46.545 46.545 0 100-93.09 46.545 46.545 0 000 93.09z",
    fill: "#727082"
  }));
};
/* harmony default export */ var pages = (pages_SvgPages);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/zidingyi.svg


var zidingyi_SvgZidingyi = function SvgZidingyi(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "zidingyi_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M901.904 487.727h-73.112V292.885a97.823 97.823 0 00-97.457-97.897H536.492v-73.111a121.804 121.804 0 10-243.607 0v73.111H98.043A97.385 97.385 0 001.17 292.885v185.337h72.526a131.6 131.6 0 010 263.202H.585v185.338A97.823 97.823 0 0098.115 1024h185.046v-73.112a131.6 131.6 0 11263.201 0V1024h184.973a97.823 97.823 0 0097.457-97.53V731.553h73.112a121.95 121.95 0 000-243.827z",
    fill: "#727082"
  }));
};
/* harmony default export */ var zidingyi = (zidingyi_SvgZidingyi);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/error.svg


var error_SvgError = function SvgError(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "error_svg__icon",
    viewBox: "0 0 1194 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M713.44 79.872l452.437 751.275c64.17 106.496 17.664 192.853-103.85 192.853h-929.28c-121.6 0-168.022-86.357-103.851-192.853L481.162 79.872c64.086-106.496 168.107-106.496 232.278 0zM597.386 238.933A68.267 68.267 0 00529.12 307.2v290.133a68.267 68.267 0 10136.533 0V307.2a68.267 68.267 0 00-68.267-68.267zm0 486.4A68.267 68.267 0 00529.12 793.6v34.133a68.267 68.267 0 10136.533 0V793.6a68.267 68.267 0 00-68.267-68.267z",
    fill: "#727082"
  }));
};
/* harmony default export */ var error = (error_SvgError);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/error_red.svg


var error_red_SvgErrorRed = function SvgErrorRed(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "error_red_svg__icon",
    viewBox: "0 0 1199 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M716.8 76.8l452.267 750.933c68.266 102.4 17.066 196.267-102.4 196.267H136.533c-119.466 0-170.666-85.333-102.4-196.267L486.4 76.8c59.733-102.4 162.133-102.4 230.4 0zM597.333 238.933c-34.133 0-68.266 34.134-68.266 68.267v290.133c0 34.134 34.133 68.267 68.266 68.267s68.267-34.133 68.267-68.267V307.2c0-34.133-34.133-68.267-68.267-68.267zm0 486.4c-34.133 0-68.266 34.134-68.266 68.267v34.133c0 34.134 34.133 68.267 68.266 68.267s68.267-34.133 68.267-68.267V793.6c0-34.133-34.133-68.267-68.267-68.267z",
    fill: "#d81e06"
  }));
};
/* harmony default export */ var error_red = (error_red_SvgErrorRed);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/link.svg


var link_SvgLink = function SvgLink(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "link_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M614.169 399.189l-.365.608c-12.285-10.339-27.488-15.934-43.544-15.934-37.705 0-68.355 30.65-68.355 68.356 0 19.34 8.392 37.34 23.474 50.72 26.759 27.731 40.99 64.707 40.99 106.79 0 45.247-20.191 87.452-55.464 116.522l-.608-.609L423.94 812l-.73-1.338-5.96 7.662c-29.19 37.949-72.856 59.72-119.683 59.72-83.438.122-151.308-67.747-151.308-151.185 0-46.95 21.772-90.614 59.72-119.684l5.474-4.257-.851-.851 87.086-88.79-1.094-.973c9.73-12.041 14.96-26.88 14.96-42.327 0-37.705-30.65-68.356-68.356-68.356-15.447 0-30.285 5.352-42.327 15.082l-.73-.851-96.695 96.452C42.874 567.524 8.21 645.49 8.21 726.86c0 77.235 30.042 149.97 84.776 204.58s127.346 84.777 204.58 84.777c82.344 0 160.917-35.273 216.502-97.06l94.506-94.507-.365-.365c29.191-26.272 52.544-57.41 69.086-92.317 18.244-38.435 27.488-79.546 27.488-122.116 0-77.6-30.286-150.577-85.384-205.31l-5.23-5.352z",
    fill: "#1890ff"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M931.136 94.385C876.524 39.65 803.789 9.609 726.555 9.609c-82.1 0-160.552 35.15-216.015 96.574l-95.844 95.722.487.365c-28.827 26.15-51.815 56.923-68.356 91.587-18.245 38.435-27.61 79.546-27.61 122.116 0 77.6 30.286 150.456 85.384 205.311l4.257 4.257.365-.365c12.528 10.825 28.096 16.785 44.516 16.785 37.705 0 68.356-30.65 68.356-68.356 0-19.339-8.27-37.34-23.474-50.72-26.88-27.73-40.99-64.584-40.99-106.912 0-45.246 20.19-87.33 55.463-116.52l.609.607 87.938-87.938.73.852 4.257-5.474c29.07-37.948 72.734-59.72 119.683-59.72 83.438 0 151.308 67.87 151.308 151.307 0 46.95-21.772 90.614-59.72 119.684l-5.474 4.257.851.851-86.965 88.79 1.095.973c-9.852 12.163-15.204 27.123-15.204 42.57 0 37.706 30.65 68.356 68.356 68.356 15.447 0 30.407-5.351 42.57-15.203l.852.85 95.236-95.235c61.423-55.342 96.574-133.793 96.574-216.014.121-77.235-30.043-149.97-84.654-204.581z",
    fill: "#1890ff"
  }));
};
/* harmony default export */ var svg_link = (link_SvgLink);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/request.svg


var request_SvgRequest = function SvgRequest(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "request_svg__icon",
    viewBox: "0 0 1075 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M983.04 5.12L51.2 481.28c-40.96 15.36-25.6 61.44-10.24 66.56l220.16 138.24c15.36 10.24 35.84 10.24 61.44-10.24l532.48-450.56 15.36 10.24L384 716.8c-10.24 10.24-10.24 15.36-10.24 25.6v204.8c0 15.36 10.24 35.84 25.6 40.96 15.36 5.12 35.84 0 40.96-10.24l112.64-112.64 220.16 143.36c25.6 15.36 66.56 15.36 76.8-25.6L1044.48 51.2c15.36-35.84-15.36-61.44-61.44-46.08",
    fill: "#0ff"
  }));
};
/* harmony default export */ var request = (request_SvgRequest);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/resource.svg


var resource_SvgResource = function SvgResource(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "resource_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M433.7 392.303L228.502 563.305 433.7 734.302l38-45.599-150.598-125.301 150.599-125.5-38-45.6zM552.3 438.1l150.598 125.5L552.3 688.904l38 45.598 205.2-170.997-205.2-171.002-38 45.599zm332.9-242.794l-154.5-159.8C720.199 25.006 706.298 7.409 689.899.005h-474.1c-65.797 0-118.998 52.9-118.998 118.097v787.796c0 65.1 53.299 118.097 118.998 118.097h592.3c65.801 0 118.998-52.9 118.998-118.097V296.406c0-32.702-18.601-77.804-41.897-101.1zM689.9 83.907l153.4 153.296h-153.4V83.906zm177.898 821.996c0 32.399-26.598 58.797-59.699 58.797H215.8c-32.998 0-59.699-26.5-59.699-58.797V118.205c0-32.4 26.599-58.798 59.7-58.798h414.8v237.198l237.197-.102v609.4z"
  }));
};
/* harmony default export */ var resource = (resource_SvgResource);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/screenShot.svg


var screenShot_SvgScreenShot = function SvgScreenShot(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "screenShot_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M749.54 272.285s96.599-.96 96.599 94.681c0 0 8.94 92.58-96.599 94.62 0 0-94.56 2.041-93.6-94.62 0-.06-1.02-85.74 93.6-94.681zM939.801 126.845s50.82 3.959 50.82 48.78v668.281s-3.001 47.82-50.82 48.841v-765.9z",
    fill: "#b8860b"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M33.38 843.965s2.041 48.841 48.841 48.841h857.58v-141.42h-93.479l-190.38-193.26-143.46 144.361-195.18-240.96-192.24 287.879-42.78.96-1.079-574.681h-47.82v668.281zM939.801 126.845H82.221s-48.839-1.02-48.839 48.78h906.42v-48.78z",
    fill: "#b8860b"
  }));
};
/* harmony default export */ var screenShot = (screenShot_SvgScreenShot);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/foot.svg


var foot_SvgFoot = function SvgFoot(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "foot_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M491.7 184.5c40.7 0 73.7-33 73.7-73.7s-33-73.7-73.7-73.7S418 70 418 110.7c0 40.8 33 73.8 73.7 73.8zm213.8 18.4c40.7 0 73.7-33 73.7-73.7s-33-73.7-73.7-73.7-73.7 33-73.7 73.7 33 73.7 73.7 73.7zm173.3-51.6c-40.7 0-73.7 33-73.7 73.7s33 73.7 73.7 73.7 73.7-33 73.7-73.7-33-73.7-73.7-73.7zm-512.4 33.1c0-81.4-66-147.4-147.5-147.4-81.4 0-147.4 66-147.4 147.4 0 81.5 66 147.5 147.4 147.5 81.5 0 147.5-66 147.5-147.5zm161.2 78.4c-179.7 22.1-226.7 152-226.7 152-47 176.9 132.7 190.7 168.6 237.7 51.8 67.6 6.8 145.6 0 193.5C450.1 981.5 600.2 994.7 652 984c214.4-44.1 224.1-333.5 200.8-467.2-47.8-273.4-325.2-254-325.2-254z",
    fill: "#fff"
  }));
};
/* harmony default export */ var foot = (foot_SvgFoot);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/more.svg


var more_SvgMore = function SvgMore(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "more_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M487.619 48.762c121.173 0 230.888 51.834 310.32 135.704C877.374 268.336 926.477 384.098 926.477 512c0 127.902-49.103 243.712-128.536 327.534-79.433 83.87-189.148 135.704-310.321 135.704s-230.888-51.834-310.32-135.704C97.864 755.712 48.761 639.902 48.761 512c0-127.902 49.103-243.76 128.536-327.582C256.731 100.596 366.446 48.762 487.62 48.762zM746.203 239.03c-68.51-72.51-161.548-113.225-258.584-113.079-100.986 0-192.414 43.203-258.584 113.128C160.28 311.296 121.758 409.6 121.905 512c0 106.594 40.96 203.142 107.13 272.97 68.51 72.508 161.548 113.224 258.584 113.078 100.986 0 192.415-43.203 258.584-113.079C814.958 712.655 853.48 614.4 853.333 512c0-106.594-40.96-203.093-107.13-272.97zM486.156 459.727c27.307 0 49.494 23.406 49.494 52.273 0 28.867-22.138 52.273-49.494 52.273-27.306 0-49.493-23.406-49.493-52.273 0-28.867 22.138-52.273 49.493-52.273zm177.298 0c27.307 0 49.494 23.406 49.494 52.273 0 28.867-22.187 52.273-49.494 52.273-27.355 0-49.542-23.406-49.542-52.273 0-28.867 22.187-52.273 49.542-52.273zm-354.596 0c27.355 0 49.542 23.406 49.542 52.273 0 28.867-22.187 52.273-49.542 52.273-27.307 0-49.493-23.406-49.493-52.273 0-28.867 22.186-52.273 49.493-52.273z",
    fill: "#999"
  }));
};
/* harmony default export */ var more = (more_SvgMore);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/menu.svg


var menu_SvgMenu = function SvgMenu(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "menu_svg__icon",
    viewBox: "0 0 1392 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M1392.64 512a73.277 73.277 0 00-73.318-73.318H439.788a73.318 73.318 0 000 146.636h879.534A73.277 73.277 0 001392.64 512zm0-438.682A73.277 73.277 0 001319.322 0H439.747a73.114 73.114 0 100 146.227h879.575a73.196 73.196 0 0073.318-72.909zm0 877.364a73.196 73.196 0 00-73.318-72.91H439.788a73.114 73.114 0 100 146.228h879.534a73.277 73.277 0 0073.318-73.318zM73.277 0h73.319a73.114 73.114 0 110 146.227H73.277A73.114 73.114 0 1173.277 0zm0 438.682h73.319a73.318 73.318 0 010 146.636H73.277a73.318 73.318 0 010-146.636zm0 439.09h73.319a73.114 73.114 0 110 146.228H73.277a73.114 73.114 0 110-146.227z",
    fill: "#ea6947"
  }));
};
/* harmony default export */ var menu = (menu_SvgMenu);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/menu_in.svg


var menu_in_SvgMenuIn = function SvgMenuIn(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "menu_in_svg__icon",
    viewBox: "0 0 1257 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M16.756 0h1241.212v62.06H16.756zm620.606 344.436h620.606v62.061H637.362zm0 310.303h620.606V716.8H637.362zM16.756 961.94h1241.212V1024H16.756zM0 401.532v259.413a26.065 26.065 0 0039.098 22.342l224.66-129.706a26.065 26.065 0 000-44.684L38.478 379.19A26.065 26.065 0 000 401.532z",
    fill: "#ea6947"
  }));
};
/* harmony default export */ var menu_in = (menu_in_SvgMenuIn);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/menu_out.svg


var menu_out_SvgMenuOut = function SvgMenuOut(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "menu_out_svg__icon",
    viewBox: "0 0 1222 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M1221.588 51.786c0-28.317-22.956-51.27-51.267-51.27H51.79C23.472.517.52 23.47.52 51.788c0 28.312 22.952 51.26 51.27 51.26h1118.527c28.311 0 51.27-22.95 51.27-51.261zm0 920.05c0-28.308-22.956-51.259-51.267-51.259H51.79c-28.318 0-51.27 22.951-51.27 51.261 0 28.311 22.952 51.27 51.27 51.27h1118.527c28.311 0 51.27-22.959 51.27-51.27zm0-457.129c0-28.224-26.379-51.104-58.918-51.104H491.757c-32.54 0-58.92 22.88-58.92 51.104 0 28.223 26.38 51.102 58.92 51.102h670.913c32.538 0 58.918-22.88 58.918-51.102zm-969.204-181.36v370.776L15.907 520.198l236.477-186.849z",
    fill: "#ea6947"
  }));
};
/* harmony default export */ var menu_out = (menu_out_SvgMenuOut);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/history_record.svg


var history_record_SvgHistoryRecord = function SvgHistoryRecord(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "history_record_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M416.427 899.413H163.84c-22.187 0-40.96-18.773-40.96-40.96V165.547c0-22.187 18.773-40.96 40.96-40.96h539.307c22.186 0 40.96 18.773 40.96 40.96v163.84c39.253 1.706 76.8 6.826 112.64 20.48v-184.32c0-85.334-68.267-153.6-153.6-153.6H163.84c-85.333 0-153.6 68.266-153.6 153.6v692.906c0 85.334 68.267 153.6 153.6 153.6h360.107c-42.667-30.72-78.507-68.266-107.52-112.64z",
    fill: "#ea6947"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M240.64 336.213h382.293c30.72 0 56.32-25.6 56.32-56.32s-25.6-56.32-56.32-56.32H240.64c-30.72 0-56.32 25.6-56.32 56.32 1.707 30.72 25.6 56.32 56.32 56.32zm225.28 107.52H240.64c-30.72 0-56.32 25.6-56.32 56.32s25.6 56.32 56.32 56.32h150.187c6.826-13.653 11.946-27.306 20.48-40.96 15.36-25.6 34.133-49.493 54.613-71.68zm-102.4 220.16H242.347c-30.72 0-56.32 25.6-56.32 56.32s25.6 56.32 56.32 56.32H368.64c-5.12-23.893-6.827-47.786-6.827-73.386 0-13.654 0-27.307 1.707-39.254zm366.933-247.466c-155.306 0-283.306 126.293-283.306 283.306 0 155.307 126.293 283.307 283.306 283.307s283.307-128 283.307-283.307c0-157.013-128-283.306-283.307-283.306zm0 474.453c-105.813 0-191.146-85.333-191.146-191.147s85.333-191.146 191.146-191.146S921.6 593.92 921.6 699.733 836.267 890.88 730.453 890.88z",
    fill: "#ea6947"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M819.2 677.547h-73.387V604.16c0-22.187-18.773-40.96-40.96-40.96-22.186 0-40.96 18.773-40.96 40.96v114.347c0 8.533 1.707 17.066 6.827 22.186 6.827 10.24 20.48 18.774 34.133 18.774H819.2c22.187 0 40.96-18.774 40.96-40.96 0-22.187-18.773-40.96-40.96-40.96z",
    fill: "#ea6947"
  }));
};
/* harmony default export */ var history_record = (history_record_SvgHistoryRecord);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/fullScreen.svg


var fullScreen_SvgFullScreen = function SvgFullScreen(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "fullScreen_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M378.88 1024H25.6C10.24 1024 0 1013.76 0 998.4V645.12c0-10.24 15.36-15.36 20.48-10.24L384 998.4c10.24 10.24 5.12 25.6-5.12 25.6z",
    fill: "#f7c65c"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M440.32 727.04L189.44 977.92c-10.24 10.24-25.6 10.24-35.84 0L46.08 870.4c-10.24-10.24-10.24-25.6 0-35.84l250.88-250.88c10.24-10.24 25.6-10.24 35.84 0L440.32 691.2c10.24 10.24 10.24 25.6 0 35.84zM378.88 0H25.6C10.24 0 0 10.24 0 25.6v353.28c0 10.24 15.36 15.36 20.48 10.24L384 25.6C394.24 15.36 389.12 0 378.88 0z",
    fill: "#f7c65c"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M440.32 296.96L189.44 46.08c-10.24-10.24-25.6-10.24-35.84 0L46.08 153.6c-10.24 10.24-10.24 25.6 0 35.84l250.88 250.88c10.24 10.24 25.6 10.24 35.84 0L440.32 332.8c10.24-10.24 10.24-25.6 0-35.84zM645.12 0H998.4c15.36 0 25.6 10.24 25.6 25.6v353.28c0 10.24-15.36 15.36-20.48 10.24L640 25.6C629.76 15.36 634.88 0 645.12 0z",
    fill: "#f7c65c"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M583.68 296.96L834.56 46.08c10.24-10.24 25.6-10.24 35.84 0L977.92 153.6c10.24 10.24 10.24 25.6 0 35.84L727.04 440.32c-10.24 10.24-25.6 10.24-35.84 0L583.68 332.8c-10.24-10.24-10.24-25.6 0-35.84zM645.12 1024H998.4c15.36 0 25.6-10.24 25.6-25.6V645.12c0-10.24-15.36-15.36-20.48-10.24L640 998.4c-10.24 10.24-5.12 25.6 5.12 25.6z",
    fill: "#f7c65c"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M583.68 727.04l250.88 250.88c10.24 10.24 25.6 10.24 35.84 0L977.92 870.4c10.24-10.24 10.24-25.6 0-35.84L727.04 583.68c-10.24-10.24-25.6-10.24-35.84 0L583.68 691.2c-10.24 10.24-10.24 25.6 0 35.84z",
    fill: "#f7c65c"
  }));
};
/* harmony default export */ var fullScreen = (fullScreen_SvgFullScreen);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/exitFullScreen.svg


var exitFullScreen_SvgExitFullScreen = function SvgExitFullScreen(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "exitFullScreen_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M433.62 442.5c3.922-.044 7.844-1.534 10.824-4.558 3.001-2.979 4.491-6.923 4.491-10.866l-.152-319.1a5.17 5.17 0 00-3.156-4.733 5.145 5.145 0 00-5.587 1.138L332.17 211.743 187.549 67.748a15.34 15.34 0 00-10.868-4.47 15.309 15.309 0 00-10.823 4.47l-98.206 97.764c-2.805 2.763-4.512 6.617-4.512 10.911a15.36 15.36 0 004.512 10.912L212.176 331.24 107.354 435.62c-1.446 1.402-1.928 3.593-1.096 5.611.789 1.971 2.716 3.155 4.733 3.155L433.62 442.5zm-.11 136.326c3.944-.044 7.888 1.49 10.89 4.47a15.381 15.381 0 014.535 10.91l-.152 321.774c0 2.014-1.184 3.944-3.156 4.732-1.972.832-4.163.307-5.587-1.095L332.17 812.213 187.549 956.25a15.331 15.331 0 01-10.868 4.47 15.305 15.305 0 01-10.823-4.47l-98.206-97.762a15.362 15.362 0 01-4.512-10.911c0-4.25 1.706-8.15 4.512-10.91L212.176 692.76l-104.91-104.47a5.183 5.183 0 01-1.138-5.61c.832-1.971 2.716-3.154 4.73-3.198l322.652-.656zM590.26 442.5c-3.944-.044-7.843-1.534-10.824-4.558-3.023-2.979-4.512-6.923-4.512-10.866l.175-319.1a5.17 5.17 0 013.155-4.733c1.972-.79 4.163-.307 5.565 1.138l107.888 107.36L836.321 67.748c2.804-2.76 6.617-4.47 10.867-4.47 4.25 0 8.062 1.71 10.867 4.47l98.162 97.764c2.804 2.763 4.515 6.617 4.515 10.911 0 4.25-1.71 8.107-4.515 10.867L811.648 331.24l104.866 104.38c1.447 1.402 1.928 3.593 1.097 5.611-.79 1.971-2.716 3.155-4.733 3.155L590.26 442.5zm.088 136.326c-3.945-.044-7.888 1.49-10.867 4.47-3.023 3.023-4.557 6.967-4.557 10.91l.175 321.774c0 2.014 1.183 3.944 3.155 4.733 1.972.832 4.163.306 5.565-1.095l107.888-107.402 144.614 144.036c2.804 2.76 6.617 4.47 10.867 4.47 4.25 0 8.062-1.71 10.867-4.47l98.162-97.762a15.37 15.37 0 004.515-10.911c0-4.25-1.71-8.15-4.515-10.91l-144.569-143.91 104.956-104.467a5.186 5.186 0 001.14-5.61c-.834-1.972-2.717-3.155-4.734-3.198l-322.662-.658z",
    fill: "#8a8a8a"
  }));
};
/* harmony default export */ var exitFullScreen = (exitFullScreen_SvgExitFullScreen);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/book.svg


var book_SvgBook = function SvgBook(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "book_svg__icon",
    viewBox: "0 0 1107 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M1089.868 232.664c17.73 25.257 21.72 53.846 11.967 85.75L919.032 920.681c-8.42 28.362-25.373 52.18-50.852 71.459-25.483 19.279-52.628 28.915-81.432 28.915h-613.57c-34.119 0-67.025-11.856-98.714-35.563-31.683-23.707-53.73-52.85-66.145-87.416-10.627-29.69-11.07-57.831-1.328-84.422 0-1.771.664-7.755 1.993-17.95 1.333-10.19 2.22-18.388 2.662-24.593.443-3.543-.221-8.308-1.993-14.292s-2.435-10.306-1.992-12.963c.885-4.871 2.656-9.526 5.313-13.96 2.657-4.428 6.316-9.642 10.971-15.62 4.65-5.984 8.308-11.192 10.97-15.626 10.19-16.838 20.165-37.113 29.913-60.82 9.747-23.712 16.395-43.987 19.943-60.83 1.328-4.429 1.439-11.071.332-19.938-1.107-8.862-1.218-15.067-.332-18.615 1.328-4.871 5.092-11.076 11.302-18.615 6.2-7.528 9.97-12.625 11.298-15.288 9.31-15.952 18.614-36.338 27.919-61.158 9.31-24.814 14.845-44.757 16.622-59.823.443-3.986-.11-11.082-1.66-21.272-1.55-10.196-1.44-16.4.331-18.614 1.772-5.763 6.643-12.52 14.624-20.276 7.97-7.754 12.847-12.742 14.624-14.956 8.413-11.524 17.834-30.25 28.251-56.17 10.412-25.927 16.506-47.309 18.277-64.152.443-3.543-.221-9.194-1.992-16.949-1.772-7.755-2.214-13.627-1.329-17.618.886-3.543 2.879-7.528 5.978-11.962 3.105-4.433 7.096-9.531 11.973-15.293a322.289 322.289 0 0011.297-13.96c3.542-5.314 7.201-12.072 10.97-20.275a458.337 458.337 0 009.97-23.264 337.97 337.97 0 0110.638-23.929c4.207-8.646 8.53-15.736 12.963-21.277 4.428-5.535 10.301-10.743 17.613-15.62A44.397 44.397 0 01338.374.332c8.64-.221 19.163.996 31.572 3.653l-.664 1.993C386.131 1.993 397.422 0 403.185 0h505.872c32.796 0 58.058 12.41 75.782 37.224 17.729 24.82 21.72 53.624 11.967 86.42l-182.14 602.261c-15.957 52.74-31.799 86.752-47.53 102.04-15.73 15.289-44.203 22.933-85.418 22.933H104.05c-11.966 0-20.385 3.32-25.262 9.974-4.87 7.085-5.092 16.616-.664 28.583 10.638 31.025 42.543 46.534 95.725 46.534h613.564c12.852 0 25.262-3.432 37.224-10.306 11.966-6.864 19.721-16.063 23.27-27.587l199.425-656.108c3.1-9.747 4.206-22.378 3.32-37.888 16.839 6.643 29.913 16.174 39.223 28.584zm-707.29 1.328c-1.772 5.757-1.329 10.75 1.328 14.956s7.09 6.316 13.295 6.316h404.17c5.757 0 11.414-2.104 16.949-6.31 5.54-4.212 9.2-9.2 10.97-14.962l13.96-42.543c1.771-5.762 1.329-10.749-1.328-14.956-2.657-4.212-7.09-6.315-13.296-6.315h-404.17c-5.756 0-11.408 2.103-16.948 6.31-5.541 4.212-9.2 9.2-10.97 14.961l-13.96 42.543zM327.402 404.17c-1.771 5.757-1.328 10.744 1.329 14.956 2.657 4.207 7.09 6.31 13.295 6.31h404.17c5.757 0 11.414-2.103 16.949-6.31 5.54-4.207 9.2-9.2 10.97-14.956l13.96-42.549c1.771-5.756 1.328-10.743-1.328-14.955-2.657-4.207-7.091-6.31-13.296-6.31h-404.17c-5.756 0-11.408 2.103-16.949 6.31-5.54 4.206-9.199 9.199-10.97 14.955l-13.96 42.555z",
    fill: "#fff"
  }));
};
/* harmony default export */ var book = (book_SvgBook);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/files.svg


var files_SvgFiles = function SvgFiles(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "files_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M723.2 812.8V896c0 44.8-38.4 83.2-83.2 83.2H128c-44.8 0-83.2-38.4-83.2-83.2V300.8c0-44.8 38.4-83.2 83.2-83.2h172.8v595.2h422.4z",
    fill: "#8FE7D6"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M896 851.2H384c-70.4 0-128-57.6-128-128V128C256 57.6 313.6 0 384 0h512c70.4 0 128 57.6 128 128v595.2c0 70.4-57.6 128-128 128zm-512-768c-25.6 0-44.8 19.2-44.8 44.8v595.2c0 25.6 19.2 44.8 44.8 44.8h512c25.6 0 44.8-19.2 44.8-44.8V128c0-25.6-19.2-44.8-44.8-44.8H384z",
    fill: "#10AC8D"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M640 1024H128C57.6 1024 0 966.4 0 896V300.8c0-70.4 57.6-128 128-128h172.8c19.2 0 38.4 19.2 38.4 38.4S320 256 300.8 256H128c-25.6 0-44.8 19.2-44.8 44.8V896c0 25.6 19.2 44.8 44.8 44.8h512c25.6 0 44.8-19.2 44.8-44.8v-83.2c0-25.6 19.2-44.8 44.8-44.8 25.6 0 44.8 19.2 44.8 44.8V896c-6.4 70.4-64 128-134.4 128zm172.8-768H467.2c-19.2 0-38.4-19.2-38.4-44.8s19.2-38.4 38.4-38.4h339.2c25.6 0 44.8 19.2 44.8 44.8S832 256 812.8 256z",
    fill: "#10AC8D"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M812.8 428.8H467.2c-19.2 0-38.4-19.2-38.4-44.8s19.2-44.8 38.4-44.8h339.2c25.6 0 44.8 19.2 44.8 44.8s-19.2 44.8-38.4 44.8zm0 294.4H467.2c-25.6 0-44.8-19.2-44.8-44.8v-128c6.4-19.2 25.6-38.4 44.8-38.4h339.2c25.6 0 44.8 19.2 44.8 44.8v128c0 19.2-19.2 38.4-38.4 38.4zM512 640h256v-44.8H512V640z",
    fill: "#10AC8D"
  }));
};
/* harmony default export */ var files = (files_SvgFiles);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/word.svg


var word_SvgWord = function SvgWord(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "word_svg__icon",
    viewBox: "0 0 1061 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M945.841 0h-681.08c-62.603 0-113.468 49.092-113.468 109.51v109.507H75.646C33.909 219.017 0 251.742 0 292.023v438.29c0 40.279 33.909 73 75.646 73h75.647v109.512c0 60.416 50.865 109.51 113.469 109.51h681.08c62.6 0 113.471-49.094 113.471-109.51V109.51C1059.441 49.09 1008.442 0 945.841 0zm-811.86 427.195h59.708l38.6 133.875h8.445l43.223-133.875h51.065l43.021 134.069h9.247l38.8-134.069H486L426.09 618.5h-84.838l-28.949-100.502h-8.04l-28.548 100.114h-82.627L133.98 427.195zM983.66 912.95c0 20.137-16.953 36.498-37.82 36.498h-681.08c-20.866 0-37.823-16.36-37.823-36.498V803.437h302.718c41.733 0 75.647-32.721 75.647-72.998v-73.01h264.892c20.866 0 37.826-16.362 37.826-36.502 0-20.139-16.96-36.5-37.826-36.5H605.302v-73.01h264.892c20.866 0 37.826-16.362 37.826-36.5s-16.96-36.505-37.826-36.505H605.302v-73.006h264.892c20.866 0 37.826-16.363 37.826-36.503 0-20.138-16.96-36.502-37.826-36.502H605.302c0-40.28-33.914-73.004-75.648-73.004H226.937V109.89c0-20.142 16.957-36.506 37.823-36.506h681.08c20.867 0 37.82 16.364 37.82 36.506v803.06h.001z"
  }));
};
/* harmony default export */ var word = (word_SvgWord);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/map.svg


var map_SvgMap = function SvgMap(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "map_svg__icon",
    viewBox: "0 0 1025 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M832 832h64v-64h-64v64zm-320 64h128v64H512zm500.736-755.2L888.32 35.328c-9.216-7.68-22.016-9.728-32.768-5.12l-96.256 39.936-77.312 48.64c-10.24 6.656-15.872 18.432-14.848 30.208l9.728 94.208-89.6 61.44-105.472 12.288-84.48-46.08-52.224-101.888c-8.192-15.36-26.624-21.504-42.496-14.336L188.416 209.92c-10.752 5.12-17.92 16.384-17.92 28.672v41.984l-37.888 36.864H89.6c-8.192 0-16.384 3.072-22.016 8.704l-57.856 56.32c-12.8 12.8-12.8 33.28 0 46.08l50.688 48.64L89.6 614.4c1.536 7.168 5.632 13.824 11.264 18.432l104.96 83.968c5.632 4.608 12.8 7.168 19.968 7.168h115.712V793.6c0 17.92 14.336 31.744 31.744 31.744h129.024l58.368 39.936c10.24 7.168 23.04 7.68 33.792 1.536l79.36-45.056L783.36 780.8c5.632-2.048 10.752-6.144 14.336-11.264l68.608-94.208a32.174 32.174 0 006.144-18.944V563.2c0-8.704-3.584-16.896-9.728-23.04l-40.448-38.912 50.688-33.28c4.608-3.072 8.704-7.168 11.264-12.288l35.84-71.168 90.112-62.976c8.704-6.144 13.824-15.872 13.824-26.112V165.376c0-9.728-4.096-18.432-11.264-24.576z"
  }));
};
/* harmony default export */ var map = (map_SvgMap);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/video.svg


var video_SvgVideo = function SvgVideo(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "video_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M692.208 257.846c20.032-111.685-96.439-155.917-96.439-155.917C404.9 76.186 379.311 197.27 409.977 282.115c56.22 155.693 262.268 86.988 282.23-24.27zM246.822 360.733c122.096 41.298 123.33-109.73 88.378-164.904-50.148-79.116-143.174-11.731-143.174-11.731-89.819 107.81-14.201 153.276 54.796 176.635zm634.746 89.355c-26.155 0-91.602 35.4-138.045 62.582 3.327-38.16 6.002-62.582 6.002-62.582s14.15-51.315-94.33-55.98c-175.347-7.547-551.77-55.997-547.054 55.98 0 0-33.014 233.3-18.865 335.965 14.149 102.648 197.97 90.915 282.969 93.316 165.058 4.665 358.415 9.33 358.415-111.993 0-1.235.033-2.521.033-3.774 57.986 30.374 125.766 62.258 150.875 59.77 47.165-4.665 33.015-130.637 37.732-186.633 4.717-55.997 4.717-186.651-37.732-186.651zM353.602 729.85c-25.743-9.484-38.606-192.755 17.168-227.52 0 0 171.593 96.593 171.593 126.4 0 9.484-163.018 110.605-188.761 101.12z",
    fill: "#666"
  }));
};
/* harmony default export */ var video = (video_SvgVideo);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/group.svg


var group_SvgGroup = function SvgGroup(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "group_svg__icon",
    viewBox: "0 0 1273 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M999.177 1023.969H0v-47.6c0-175.998 383.678-138.235 383.678-309.61 0-15.639.497-30.874.248-49.026-18.37-20.635-60.197-73.478-76.828-145.683-16.973-8.068-31.092-25.351-40.06-49.523-12.504-34.195-13.373-81.142 10.985-111.613-.155-.651-.155-1.024-.248-1.675-4.5-42.604-16.632-156.14 50.081-230.518C366.302 35.84 423.892 2.048 498.952 0c75.06 2.048 132.65 35.839 171.127 78.721 66.682 74.378 54.58 187.914 49.957 230.518 0 .527-.155 1.024-.248 1.551 24.327 30.47 23.334 77.542 10.86 111.613-8.874 24.296-23.116 41.58-40.09 49.647-16.631 72.205-58.831 125.048-77.076 145.527-.249 18.184-.497 35.343-.497 50.95 0 168.056 386.067 130.417 386.067 307.843v47.599h.125zm93.677-93.926c-25.475-115.336-148.382-159.118-241.44-191.637a1813.013 1813.013 0 01-23.24-8.316c11.512-12.784 18.866-27.771 18.866-46.854 0-10.737.372-21.349.248-33.916-12.722-14.056-41.58-50.546-53.091-100.349-.87-.496-1.614-1.52-2.483-2.047-10.488-6.02-19.486-16.756-25.103-32.24-8.626-23.551-9.37-56.07 7.479-77.046 0-.403-.094-.651-.094-1.024-3.134-29.57-11.511-107.889 34.598-159.243 7.478-8.44 16.477-16.01 26.096-23.023 24.358-17.811 54.953-30.223 92.033-31.247 51.85 1.427 91.568 24.7 118.16 54.27 46.078 51.354 37.731 129.796 34.598 159.243 0 .373-.125.62-.125 1.024 16.85 20.976 16.105 53.495 7.478 77.046-6.112 16.756-15.949 28.671-27.709 34.287-11.512 49.803-40.586 86.417-53.215 100.474-.124 12.566-.248 24.482-.248 35.218 0 116.08 266.51 90.11 266.51 212.489v32.891h-179.318z",
    fill: "#777"
  }));
};
/* harmony default export */ var group = (group_SvgGroup);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/user.svg


var user_SvgUser = function SvgUser(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "user_svg__icon",
    viewBox: "0 0 1161 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M724.76 710.523c-112.856-17.689-149.852-56.912-149.901-56.912l-3.368-3.585v.058c-12.007-11.46-16.083-31.79-17.24-49.471C627.58 544.169 684.486 437.1 684.486 317.27c0-191.91-128.333-261.907-229.152-261.907-100.792 0-230.478 69.996-230.478 261.907 0 119.83 58.342 226.898 131.701 283.394-1.104 17.578-5.209 37.903-17.302 49.42l-2.615 2.81c-.385.383-37.242 39.883-150.626 57.63-15.946.546-82.556 6.825-111.281 71.614-15.787 35.643-9.365 61.703-1.186 77.237 19.394 36.915 62.065 41.596 72.642 42.26H760.02c14.877 0 64.898-3.142 83.632-44.023 7.989-17.296 12.231-45.836-12.45-83.515-31.684-48.265-80.438-62.534-106.443-63.575z"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M1010.906 679.837c-22.254-34.659-56.523-44.903-74.81-45.678-79.282-12.615-105.285-40.763-105.336-40.763l-2.318-2.538c-8.426-8.207-11.346-22.86-12.12-35.56 51.51-40.52 88.04-111.697 88.04-197.725 0-137.786-89.03-201.447-159.878-201.447-13.605 0-27.549 2.095-41.212 6.475 3.749 10.88 7.002 22.173 9.92 33.798h-8.705s49.253 161.975-9.64 300.115c-2.81-3-5.622-5.674-8.323-9.09-8.7 17.715-18.562 33.965-29.472 48.677 6.394 6.992 13.114 13.553 20.331 19.197-.771 12.642-3.693 27.244-12.232 35.51l-1.819 2.039c-.167.166-14.596 15.751-54.264 28.974 28.866 3.083 59.06 7.605 88.257 13.884.774-.771 1.432-1.545 1.982-2.095 1.602-1.654 2.868-3.416 4.356-5.18a1577.613 1577.613 0 0120.823 11.24c45.12 24.792 126.49 65.563 139.88 80.597h-2.095c14.602 17.908 27.714 38.512 37.736 60.441h64.296c10.464 0 42.146-11.569 55.31-40.822h.057c5.563-12.507 8.591-33.005-8.764-60.05z"
  }));
};
/* harmony default export */ var user = (user_SvgUser);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/group_red.svg


var group_red_SvgGroupRed = function SvgGroupRed(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "group_red_svg__icon",
    viewBox: "0 0 1273 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M999.177 1023.969H0v-47.6c0-175.998 383.678-138.235 383.678-309.61 0-15.639.497-30.874.248-49.026-18.37-20.635-60.197-73.478-76.828-145.683-16.973-8.068-31.092-25.351-40.06-49.523-12.504-34.195-13.373-81.142 10.985-111.613-.155-.651-.155-1.024-.248-1.675-4.5-42.604-16.632-156.14 50.081-230.518C366.302 35.84 423.892 2.048 498.952 0c75.06 2.048 132.65 35.839 171.127 78.721 66.682 74.378 54.58 187.914 49.957 230.518 0 .527-.155 1.024-.248 1.551 24.327 30.47 23.334 77.542 10.86 111.613-8.874 24.296-23.116 41.58-40.09 49.647-16.631 72.205-58.831 125.048-77.076 145.527-.249 18.184-.497 35.343-.497 50.95 0 168.056 386.067 130.417 386.067 307.843v47.599h.125zm93.677-93.926c-25.475-115.336-148.382-159.118-241.44-191.637a1813.013 1813.013 0 01-23.24-8.316c11.512-12.784 18.866-27.771 18.866-46.854 0-10.737.372-21.349.248-33.916-12.722-14.056-41.58-50.546-53.091-100.349-.87-.496-1.614-1.52-2.483-2.047-10.488-6.02-19.486-16.756-25.103-32.24-8.626-23.551-9.37-56.07 7.479-77.046 0-.403-.094-.651-.094-1.024-3.134-29.57-11.511-107.889 34.598-159.243 7.478-8.44 16.477-16.01 26.096-23.023 24.358-17.811 54.953-30.223 92.033-31.247 51.85 1.427 91.568 24.7 118.16 54.27 46.078 51.354 37.731 129.796 34.598 159.243 0 .373-.125.62-.125 1.024 16.85 20.976 16.105 53.495 7.478 77.046-6.112 16.756-15.949 28.671-27.709 34.287-11.512 49.803-40.586 86.417-53.215 100.474-.124 12.566-.248 24.482-.248 35.218 0 116.08 266.51 90.11 266.51 212.489v32.891h-179.318z",
    fill: "#ea6947"
  }));
};
/* harmony default export */ var group_red = (group_red_SvgGroupRed);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/refresh.svg


var refresh_SvgRefresh = function SvgRefresh(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "refresh_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M128.37 337.33q27.805-24.653 75.509-49.294a348.7 348.7 0 01101.69-33.9q53.922-9.248 131.989 0t164.339 43.136l-34.944 79.084a24.491 24.491 0 00-3.078 8.218c-.72 3.389-1.03 9.235-1.03 17.453a41.25 41.25 0 005.139 21.102c3.388 5.847 10.985 10.465 22.592 13.854s27.01 3.798 46.227 1.03l283.48-67.801a7.05 7.05 0 003.03-1.055l8.217-4.109a92.503 92.503 0 0011.296-6.678 69.353 69.353 0 0010.787-9.757 32.274 32.274 0 007.696-13.344 47.096 47.096 0 001.03-17.466 82.089 82.089 0 00-6.206-22.592L801.14 17.863l-3.078-3.079a49.851 49.851 0 00-6.679-4.618 104.035 104.035 0 00-11.296-6.206A47.567 47.567 0 00766.732.484a42.391 42.391 0 00-14.896.51c-4.816 1.03-9.93 3.798-15.405 8.217a75.72 75.72 0 00-15.454 17.924l-33.889 79.085q-93.52-38.059-207.474-40.058-256.842-5.077-374.88 207.475-41.137 75.957-63.68 176.665a113.246 113.246 0 018.218-17.453c4.11-7.448 13.655-21.264 28.762-41.088a384.413 384.413 0 0150.335-54.432zm845.836 236.235q-5.697 11.247-27.222 41.597a353.057 353.057 0 01-48.784 55.475q-27.309 25.112-73.958 50.894a359.127 359.127 0 01-101.168 36.979q-54.394 11.259-131.99 3.6T426.238 722.56l32.82-80.177a10.775 10.775 0 011.018-3.587c.72-1.75 1.329-5.35 2.061-10.787a47.828 47.828 0 000-14.375 76.292 76.292 0 00-4.63-14.896 21.438 21.438 0 00-12.326-12.326 122.481 122.481 0 00-22.083-6.207c-8.938-1.75-20.855-.831-35.999 2.557l-281.32 75.026a6.207 6.207 0 01-3.08 1.54 50.571 50.571 0 00-8.217 3.6 60.552 60.552 0 00-11.296 7.186 74.48 74.48 0 00-10.278 10.278 35.998 35.998 0 00-7.187 13.357 47.07 47.07 0 00-1.03 17.453 57.46 57.46 0 007.187 21.562l161.26 274.245a52.582 52.582 0 005.648 4.618 95.47 95.47 0 0013.357 7.187 51.192 51.192 0 0019.476 5.152c6.467.31 13.555-1.54 21.102-5.648s14.375-11.607 20.532-22.592l31.84-80.115v.968q107.858 38.99 229.049 33.9 255.712-11.246 361.547-242.405 30.834-67.739 47.208-152.993c-2.011 4.829-4.879 10.986-8.69 18.483z",
    fill: "#ea6947"
  }));
};
/* harmony default export */ var refresh = (refresh_SvgRefresh);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/support.svg


var support_SvgSupport = function SvgSupport(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "support_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M0 512a512 512 0 101024 0A512 512 0 100 512z",
    fill: "#ea6847",
    "data-spm-anchor-id": "a313x.7781069.0.i2",
    className: "support_svg__selected"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M729.6 652.096c0 42.432-37.222 77.504-79.642 77.504h-281.6c-42.406 0-73.958-35.072-73.958-77.504v-281.6c0-42.406 31.552-76.096 73.958-76.096h281.6c42.42 0 79.642 33.69 79.642 76.096v281.6z",
    fill: "#FFF"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M489.562 588.173h-52.608v-24.947h52.608v-26.112h-52.608v-24.96h37.632L402.778 377.37h48.78l59.904 122.88 61.07-122.88h47.615l-72.192 134.784h38.016v24.96h-52.608v26.112h52.608v24.947h-52.608v63.373h-43.776v-63.373z",
    fill: "#E54837"
  }));
};
/* harmony default export */ var support = (support_SvgSupport);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/wx.svg


var wx_SvgWx = function SvgWx(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "wx_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M315.84 322.624c-20.032 0-40.128 13.312-40.128 33.472 0 19.904 20.096 33.28 40.128 33.28 19.968 0 33.216-13.376 33.216-33.28 0-20.16-13.312-33.472-33.216-33.472zM588.8 516.032c-13.248 0-26.624 13.376-26.624 26.496 0 13.568 13.376 26.688 26.624 26.688 20.16 0 33.344-13.056 33.344-26.688.064-13.12-13.12-26.496-33.344-26.496z",
    fill: "#61BA46"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M958.016 204.416A136.384 136.384 0 00821.568 68.032H198.464A136.448 136.448 0 0062.016 204.416V827.52c0 75.52 61.12 136.512 136.448 136.512h623.104A136.32 136.32 0 00958.016 827.52V204.416zM402.304 662.592c-33.28 0-59.968-6.784-93.312-13.376l-93.056 46.72 26.624-80.128C175.872 569.152 136 509.248 136 435.968c0-126.656 119.872-226.496 266.304-226.496 131.008 0 245.76 79.744 268.8 187.136a245.824 245.824 0 00-25.792-1.472c-126.464 0-226.304 94.272-226.304 210.624 0 19.456 2.944 38.144 8.192 55.808a354.816 354.816 0 01-24.896 1.024zm392.96 93.44l20.032 66.432-73.216-39.872c-26.56 6.592-53.376 13.12-79.808 13.12-126.72 0-226.56-86.656-226.56-193.152 0-106.496 99.84-193.344 226.56-193.344 119.616 0 226.176 86.912 226.176 193.344.064 60.032-39.744 113.344-93.184 153.472z",
    fill: "#61BA46"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M735.232 516.032c-13.056 0-26.368 13.376-26.368 26.496 0 13.568 13.312 26.688 26.368 26.688 20.032 0 33.408-13.056 33.408-26.688.064-13.12-13.312-26.496-33.408-26.496zM502.208 389.376c20.032 0 33.408-13.376 33.408-33.28 0-20.16-13.312-33.472-33.408-33.472-19.968 0-40 13.312-40 33.472 0 19.904 20.032 33.28 40 33.28z",
    fill: "#61BA46"
  }));
};
/* harmony default export */ var wx = (wx_SvgWx);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/wechat_circle.svg


var wechat_circle_SvgWechatCircle = function SvgWechatCircle(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "wechat_circle_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M512 125.747c-14.54 0-29.389.82-43.418 2.355-34.816 3.892-68.096 12.493-99.84 25.088 0 0 259.994 256.922 266.65 266.65V145.715c-7.885-2.355-15.667-4.813-23.45-7.475-32.153-8.192-65.433-12.493-99.942-12.493zm0 0",
    fill: "#F95452"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M783.36 237.773c-10.547-10.547-21.197-19.968-32.46-28.98-27.854-21.913-57.14-39.526-88.474-52.838 0 0 1.945 365.363 0 377.14L856.269 339.25c-3.482-7.475-7.783-14.438-11.776-21.504-16.794-29.081-36.762-56.115-61.133-79.974zm0 0",
    fill: "#6467F0"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M868.352 369.357S611.43 629.35 601.702 636.007h274.125c2.355-7.885 4.813-15.668 7.475-23.45 8.602-31.744 13.312-65.024 13.312-99.43 0-14.541-.819-29.39-2.355-43.418-4.71-35.328-12.902-69.018-25.907-100.352zm0 0",
    fill: "#5283F0"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M486.912 664.576l193.843 193.843c7.475-3.481 14.439-7.885 21.914-11.776 28.57-16.486 55.193-36.454 79.872-61.133 10.547-10.547 19.968-21.196 28.979-32.46 21.914-27.853 39.526-57.14 52.838-88.474.103 0-365.67 2.048-377.446 0zm0 0",
    fill: "#00B1FE"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M387.891 603.955V878.08c7.783 2.355 16.077 4.71 23.45 7.475 31.744 8.602 65.024 13.312 99.43 13.312 14.541 0 29.389-.819 43.418-2.355 34.099-3.891 67.789-12.493 99.84-25.088.102-.82-259.482-258.15-266.138-267.469zm0 0",
    fill: "#65D020"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M360.448 489.984L166.605 683.827c3.481 7.475 7.885 14.541 11.776 21.914 16.486 28.57 36.454 55.193 61.133 79.872 10.547 10.547 21.196 19.968 32.46 28.979 27.853 21.914 57.14 39.526 88.474 52.838 0-.716-1.946-366.08 0-377.446zm0 0",
    fill: "#9AD122"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M139.571 412.058c-8.601 31.744-12.902 65.024-12.902 99.43 0 14.438.819 29.389 2.355 43.418 3.891 34.816 12.493 68.096 25.088 99.84 0 0 256.922-259.994 266.342-266.65H147.046c-2.764 8.294-5.53 15.667-7.475 23.962zm0 0",
    fill: "#FFC817"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M318.157 178.586c-28.57 16.486-55.194 36.454-79.463 61.132-10.547 10.548-19.968 21.504-28.979 32.461-21.913 27.853-39.526 57.14-52.838 88.474 0 0 365.773-1.946 377.139 0L339.661 167.219c-7.168 3.687-14.439 7.475-21.504 11.367zm0 0",
    fill: "#FF7612"
  }));
};
/* harmony default export */ var wechat_circle = (wechat_circle_SvgWechatCircle);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/zfb.svg


var zfb_SvgZfb = function SvgZfb(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "zfb_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M938.7 669.525V249.412c0-90.555-73.522-164.079-164.146-164.079H249.378c-90.556 0-164.079 73.49-164.079 164.08v525.209c0 90.556 73.455 164.079 164.08 164.079h525.209c80.725 0 147.865-58.368 161.553-135.1-43.52-18.842-232.107-100.284-330.377-147.183-74.786 90.59-153.088 144.93-271.12 144.93S137.83 728.644 147.284 639.693c6.247-58.402 46.285-153.907 220.297-137.523 91.682 8.601 133.666 25.736 208.418 50.415 19.354-35.43 35.43-74.514 47.616-116.02H292.045v-32.87H456.09v-58.982H256V308.53h200.124v-85.197s1.809-13.312 16.52-13.312h82.057v98.475h213.333v36.181H554.701v58.983h174.046c-16.009 65.126-40.278 124.962-70.69 177.22 50.551 18.296 280.644 88.644 280.644 88.644zm-617.13 75.47c-124.723 0-144.452-78.746-137.83-111.651 6.553-32.734 42.666-75.503 112.025-75.503 79.668 0 151.04 20.446 236.715 62.089-60.177 78.404-134.11 125.064-210.91 125.064zm0 0",
    fill: "#1296db"
  }));
};
/* harmony default export */ var zfb = (zfb_SvgZfb);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/newCus.svg


var newCus_SvgNewCus = function SvgNewCus(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "newCus_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M508.704 473.247C404.101 473.247 319 388.146 319 283.543S404.101 93.84 508.704 93.84c104.604 0 189.704 85.101 189.704 189.704s-85.1 189.703-189.704 189.703zm0-347.332c-86.917 0-157.629 70.712-157.629 157.629s70.712 157.629 157.629 157.629c86.917 0 157.629-70.712 157.629-157.629s-70.711-157.629-157.629-157.629zM197.553 803.802l.001-.905",
    fill: "#ea6847"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M213.591 804.004l-32.075-.077c.227-95.165 34.575-184.657 96.718-251.993 30.343-32.878 65.691-58.704 105.061-76.76 40.867-18.743 84.278-28.246 129.028-28.246 86.248 0 167.884 35.698 229.871 100.517l-23.181 22.169c-55.878-58.431-129.281-90.61-206.689-90.61-164.295 0-298.305 145.795-298.733 325z",
    fill: "#ea6847"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M522.715 804.828h-35.69l-64.702-98.641c-3.796-5.765-6.423-10.108-7.883-13.027h-.438c.583 5.547.876 14.013.876 25.399v86.269h-33.391V647.836h38.099l62.293 95.574a226.326 226.326 0 017.883 12.809h.438c-.585-3.648-.876-10.838-.876-21.567v-86.816h33.391v156.992zm130.062 0h-94.152V647.836h90.538v28.792h-55.177v34.924h51.346v28.684h-51.346v35.908h58.791v28.684zm230.561-156.992l-41.492 156.992h-39.193l-26.056-100.721c-1.388-5.255-2.228-11.129-2.518-17.626h-.437c-.658 7.153-1.607 13.027-2.847 17.626l-26.713 100.721h-40.835l-41.274-156.992h38.647l22.114 104.551c.947 4.453 1.642 10.438 2.08 17.955h.657c.291-5.619 1.35-11.749 3.175-18.392l28.465-104.114h37.879l25.727 105.427c.948 3.87 1.788 9.489 2.518 16.86h.437c.291-5.766 1.058-11.605 2.299-17.517l21.677-104.771h35.69z",
    fill: "#ea6847"
  }));
};
/* harmony default export */ var newCus = (newCus_SvgNewCus);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/oldCus.svg


var oldCus_SvgOldCus = function SvgOldCus(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "oldCus_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M508.704 473.247C404.101 473.247 319 388.146 319 283.543S404.101 93.84 508.704 93.84c104.604 0 189.704 85.101 189.704 189.704s-85.1 189.703-189.704 189.703zm0-347.332c-86.917 0-157.629 70.712-157.629 157.629s70.712 157.629 157.629 157.629c86.917 0 157.629-70.712 157.629-157.629s-70.711-157.629-157.629-157.629zM197.553 803.802l.001-.905",
    fill: "#1296db"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M213.591 804.004l-32.075-.077c.227-95.165 34.575-184.657 96.718-251.993 30.343-32.878 65.691-58.704 105.061-76.76 40.867-18.743 84.278-28.246 129.028-28.246 86.248 0 167.884 35.698 229.871 100.517l-23.181 22.169c-55.878-58.431-129.281-90.61-206.689-90.61-164.295 0-298.305 145.795-298.733 325z",
    fill: "#1296db"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M462.207 809.643c-23.053 0-41.838-7.503-56.357-22.51-14.521-15.005-21.78-34.559-21.78-58.658 0-25.446 7.371-46.029 22.116-61.746 14.744-15.718 34.278-23.576 58.603-23.576 22.976 0 41.556 7.521 55.74 22.565 14.183 15.044 21.274 34.878 21.274 59.501 0 25.298-7.354 45.692-22.061 61.185-14.706 15.492-33.886 23.239-57.535 23.239zm1.571-135.281c-12.725 0-22.829 4.771-30.312 14.313-7.485 9.543-11.227 22.173-11.227 37.89 0 15.942 3.742 28.555 11.227 37.834 7.483 9.281 17.289 13.921 29.414 13.921 12.499 0 22.415-4.508 29.75-13.528 7.334-9.018 11.002-21.535 11.002-37.553 0-16.688-3.556-29.675-10.665-38.956-7.111-9.279-16.84-13.921-29.189-13.921zm200.619 132.474h-95.876V645.847h36.263v131.575h59.613v29.414zm21.667 0V645.847h57.031c57.181 0 85.771 26.158 85.771 78.474 0 25.074-7.803 45.095-23.407 60.063-15.605 14.97-36.394 22.453-62.364 22.453h-57.031zm36.263-131.463v102.049h17.962c15.718 0 28.048-4.715 36.992-14.146 8.942-9.43 13.415-22.265 13.415-38.507 0-15.342-4.435-27.41-13.303-36.206-8.869-8.793-21.313-13.19-37.329-13.19h-17.737z",
    fill: "#1296db"
  }));
};
/* harmony default export */ var oldCus = (oldCus_SvgOldCus);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/wechat.svg


var wechat_SvgWechat = function SvgWechat(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "wechat_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M0 512a512 512 0 101024 0A512 512 0 100 512z",
    fill: "#1BB723"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M831.89 585.604c0-90.53-90.594-164.323-192.336-164.323-107.74 0-192.6 73.794-192.6 164.323 0 90.682 84.86 164.322 192.6 164.322 22.542 0 45.283-5.683 67.935-11.359l62.113 34.004-17.02-56.59c45.443-34.092 79.308-79.316 79.308-130.377zm-254.786-28.336c-11.278 0-22.652-11.227-22.652-22.674 0-11.279 11.374-22.638 22.652-22.638 17.123 0 28.35 11.36 28.35 22.638 0 11.447-11.227 22.674-28.35 22.674zm124.57 0c-11.213 0-22.499-11.227-22.499-22.674 0-11.279 11.286-22.638 22.5-22.638 16.954 0 28.327 11.36 28.327 22.638 0 11.447-11.373 22.674-28.328 22.674z",
    fill: "#FFF"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M418.553 251.429c-124.482 0-226.443 84.845-226.443 192.577 0 62.194 33.923 113.262 90.61 152.862l-22.653 68.118 79.162-39.702c28.328 5.61 51.047 11.373 79.316 11.373 7.11 0 14.154-.358 21.139-.9-4.425-15.125-6.993-30.99-6.993-47.44 0-98.933 84.956-179.214 192.52-179.214 7.336 0 14.606.548 21.803 1.338-19.587-91.224-117.116-159.012-228.461-159.012zm-73.56 152.89c-16.97 0-34.1-11.374-34.1-28.343 0-17.042 17.13-28.262 34.1-28.262s28.262 11.22 28.262 28.262c0 16.97-11.293 28.343-28.262 28.343zm158.471 0c-16.976 0-34.004-11.374-34.004-28.343 0-17.042 17.028-28.262 34.004-28.262 17.05 0 28.343 11.22 28.343 28.262.007 16.97-11.293 28.343-28.343 28.343z",
    fill: "#FFF"
  }));
};
/* harmony default export */ var wechat = (wechat_SvgWechat);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/debug.svg


var debug_SvgDebug = function SvgDebug(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "debug_svg__icon",
    viewBox: "0 0 1154 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M1116.255 603.366c28.594 0 37.307-23.176 37.307-51.767 0-28.594-8.716-51.767-37.307-51.767H998.244c-28.264 0-46.523 2.355-60.292-52.504-13.769-54.86 14.062-57.231 37.564-66.5l109.623-43.23c26.6-10.489 25.195-34.77 14.706-61.368-10.489-26.595-26.091-45.44-52.684-34.951l-112.723 44.454c-16.124 6.358-36.069 1.81-45.481-20.04-11.01-25.551-23.486-49.424-37.3-71.09-86.265 38.842-161.937 65.539-236.11 71.09v758.304c124.569-25.765 213.619-105.405 261.313-185.566 12.814-21.539 30.832-25.646 47.323-18.18l125.773 56.895c25.981 11.762 42.235-5.51 54.043-31.614 11.782-26.05 14.68-50.93-11.368-62.718l-118.894-53.783c-24.333-11.015-47.005-4.808-37.5-69.001 9.508-64.194 35.32-56.664 62.739-56.664h117.28zM305.397 194.6c-13.491 21.157-25.704 44.417-36.523 69.293-11.16 25.661-31.764 27.553-46.253 21.837l-112.724-44.454c-26.595-10.489-42.197 8.357-52.686 34.952-10.489 26.597-11.895 50.878 14.706 61.367l109.623 43.23c24.364 9.607 47.335 20.22 37.96 63.578-11.577 53.532-33.537 55.43-60.685 55.43H40.804c-28.594 0-40.2 23.175-40.2 51.766s11.609 51.767 40.2 51.767H158.08c28.123 0 49.447-5.855 62.117 52.721 12.67 58.576-11.186 61.313-36.884 72.947L64.419 782.817c-26.048 11.785-23.15 33.774-11.365 59.826 11.79 26.077 28.024 46.276 54.04 34.506l125.773-56.895c15.085-6.827 33.809-5.311 44.251 12.918 46.89 81.911 137.095 164.49 264.386 190.822V261.145c-74.153-5.55-149.828-27.694-236.107-66.545zM578.527 1.148C706.329.92 763.96 102.333 801.63 150.285c-57.321 29.982-118.145 47.925-222.72 48.046-105.408.116-160.45-17.827-218.227-48.046C398.94 101.59 449.257.92 578.53 1.148z",
    fill: "#333"
  }));
};
/* harmony default export */ var debug = (debug_SvgDebug);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/debugger.svg


var debugger_SvgDebugger = function SvgDebugger(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "debugger_svg__icon",
    viewBox: "0 0 1173 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M786.371 409.69c0-46.24-13.232-79.285-46.24-112.329s-66.088-46.24-112.327-46.24c-39.661 0-79.284 13.233-112.329 46.24-26.428 33.044-46.24 66.089-46.24 112.328H786.41z"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M1011.028 667.427c-6.617-6.616-13.233-6.616-19.812-6.616H878.888V515.438l85.9-85.9c6.616-6.616 6.616-13.233 6.616-19.812s0-13.232-6.616-19.811c-6.616-6.617-13.233-6.617-19.812-6.617s-13.232 0-19.811 6.617l-85.9 85.9H422.958L310.63 363.487c6.616-6.617 6.616-13.233 13.232-13.233 33.045-39.66 33.045-46.24 33.045-46.24v-19.848c19.811-19.812 26.428-33.045 33.044-33.045 13.232-6.616 26.428 0 33.044 0s6.616 6.617 13.233 13.233l-6.617 6.616v6.617l33.045 26.428h6.616l46.24-52.856v-6.617l-39.661-26.428h-6.616v6.617h-13.233c-13.232-6.617-6.616-19.812-13.232-26.428s-13.233-19.812-19.812-19.812c-6.616-6.616-33.044-26.428-72.705-39.66-46.24-13.233-79.284 0-85.9 13.232-6.616 0-13.233 13.233 0 13.233 6.616 0 46.24-6.617 59.472 0 13.233 13.232 26.428 26.428 33.044 46.24 0 19.81 0 33.043-26.428 59.471l-6.616-6.616h-6.616s-6.616 6.616-33.044 46.24C224.693 363.487 165.22 422.959 165.22 422.959v6.616l52.856 46.24h6.616s19.812-26.428 46.24-66.089l105.712 105.712v145.373H264.317c-6.616 0-13.233 0-19.812 6.616s-6.616 13.232-6.616 19.812c0 6.616 0 13.232 6.616 19.811 6.616 13.233 13.233 19.812 19.812 19.812h112.328c0 52.856 6.616 99.133 26.428 132.177L303.94 971.367c-6.616 6.616-6.616 13.233-6.616 19.812s6.616 13.232 13.232 19.811c6.617 6.617 13.233 6.617 19.812 6.617s19.812-6.617 26.428-13.233l92.517-99.133 6.616 6.617c0 13.232 6.616 13.232 13.232 19.811s19.812 13.233 33.045 19.812c13.232 6.616 26.428 13.233 39.66 13.233 19.812 6.616 33.044 6.616 52.856 6.616V535.213h66.089v442.733c13.232 0 33.044 0 46.24-6.616s26.427-6.616 39.66-13.233 19.811-13.232 33.044-19.811 19.812-13.233 19.812-13.233l6.616-6.616 99.133 99.133c6.616 6.616 13.232 6.616 19.811 6.616s13.233 0 19.812-6.616c6.616-6.617 6.616-13.233 6.616-19.812s0-13.233-6.616-19.812l-99.133-105.712c19.812-39.66 33.045-85.9 33.045-145.372h112.328c6.616 0 13.232 0 19.811-6.616s6.617-13.233 6.617-19.812c6.616-19.812 0-26.428-6.617-33.044z"
  }));
};
/* harmony default export */ var svg_debugger = (debugger_SvgDebugger);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/debug_active.svg


var debug_active_SvgDebugActive = function SvgDebugActive(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "debug_active_svg__icon",
    viewBox: "0 0 1154 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M1116.255 603.366c28.594 0 37.307-23.176 37.307-51.767 0-28.594-8.716-51.767-37.307-51.767H998.244c-28.264 0-46.523 2.355-60.292-52.504-13.769-54.86 14.062-57.231 37.564-66.5l109.623-43.23c26.6-10.489 25.195-34.77 14.706-61.368-10.489-26.595-26.091-45.44-52.684-34.951l-112.723 44.454c-16.124 6.358-36.069 1.81-45.481-20.04-11.01-25.551-23.486-49.424-37.3-71.09-86.265 38.842-161.937 65.539-236.11 71.09v758.304c124.569-25.765 213.619-105.405 261.313-185.566 12.814-21.539 30.832-25.646 47.323-18.18l125.773 56.895c25.981 11.762 42.235-5.51 54.043-31.614 11.782-26.05 14.68-50.93-11.368-62.718l-118.894-53.783c-24.333-11.015-47.005-4.808-37.5-69.001 9.508-64.194 35.32-56.664 62.739-56.664h117.28zM305.397 194.6c-13.491 21.157-25.704 44.417-36.523 69.293-11.16 25.661-31.764 27.553-46.253 21.837l-112.724-44.454c-26.595-10.489-42.197 8.357-52.686 34.952-10.489 26.597-11.895 50.878 14.706 61.367l109.623 43.23c24.364 9.607 47.335 20.22 37.96 63.578-11.577 53.532-33.537 55.43-60.685 55.43H40.804c-28.594 0-40.2 23.175-40.2 51.766s11.609 51.767 40.2 51.767H158.08c28.123 0 49.447-5.855 62.117 52.721 12.67 58.576-11.186 61.313-36.884 72.947L64.419 782.817c-26.048 11.785-23.15 33.774-11.365 59.826 11.79 26.077 28.024 46.276 54.04 34.506l125.773-56.895c15.085-6.827 33.809-5.311 44.251 12.918 46.89 81.911 137.095 164.49 264.386 190.822V261.145c-74.153-5.55-149.828-27.694-236.107-66.545zM578.527 1.148C706.329.92 763.96 102.333 801.63 150.285c-57.321 29.982-118.145 47.925-222.72 48.046-105.408.116-160.45-17.827-218.227-48.046C398.94 101.59 449.257.92 578.53 1.148z",
    fill: "#ea6947"
  }));
};
/* harmony default export */ var debug_active = (debug_active_SvgDebugActive);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/connected.svg


var connected_SvgConnected = function SvgConnected(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "connected_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M276.614 302.847a45.803 45.803 0 00-64.752 64.789l37.75 37.734c-43.172 43.893-141.88 154.547-138.68 246.056 2.744 79.007 18.6 130.713 35.947 163.558L6.945 954.94c-12.094 12.083-7.982 35.778 9.164 52.956 17.147 17.147 40.868 21.253 52.956 9.17l139.955-139.95c32.87 17.347 84.577 33.203 163.563 35.963 91.53 3.164 202.148-95.544 246.026-138.69l37.765 37.744c17.869 17.89 46.884 17.89 64.758 0 17.874-17.884 17.874-46.899 0-64.757L276.614 302.847zm732.148-286.304C991.6-.62 967.941-4.71 955.827 7.357l-139.935 139.96c-32.86-17.361-84.577-33.218-163.588-35.947-91.51-3.2-202.158 95.513-246.026 138.675l-37.75-37.75c-17.889-17.89-46.904-17.874-64.773 0-17.889 17.89-17.889 46.904 0 64.773l444.497 444.497a45.788 45.788 0 0064.758-.03c17.874-17.875 17.874-46.89 0-64.764l-37.734-37.729c43.166-43.909 141.874-154.536 138.68-246.056-2.765-79.007-18.607-130.703-35.963-163.563l139.96-139.92c12.088-12.108 7.992-35.813-9.19-52.96z",
    fill: "#009101"
  }));
};
/* harmony default export */ var connected = (connected_SvgConnected);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/connect.svg


var connect_SvgConnect = function SvgConnect(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "connect_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M85.504 888.32l111.104-115.712c-66.048-91.648-55.808-218.624 25.6-298.496l88.576-88.576 67.072 67.072 67.072-67.072 48.128 48.128-67.072 66.56 100.352 100.352 69.632-69.632 45.056 46.08-71.168 71.168 62.464 62.464-88.576 88.576c-44.544 44.544-104.96 70.144-165.376 70.144-51.2 0-96.768-15.36-133.632-44.544L134.144 935.424l-48.64-47.104zm189.44-361.984c-61.952 61.952-64 160.768-4.608 220.16l5.12 5.12v.512c24.576 28.672 62.464 44.544 107.008 44.544 39.936 0 80.896-17.92 112.64-49.664l35.84-35.84-220.16-220.16-35.84 35.328zM396.8 298.496l89.088-83.968c44.544-44.544 104.448-69.632 164.864-69.632 51.2 0 97.28 15.36 133.632 44.544L890.88 88.064l47.616 47.616L832 242.176c66.048 91.648 55.808 218.624-25.6 298.496l-83.456 83.968L396.8 298.496zm326.144 220.672l31.232-31.232c32.256-32.256 50.688-75.776 49.664-119.296-.512-38.912-16.384-74.752-44.544-100.864l-5.12-5.12v-.512C729.6 233.472 691.712 217.6 647.168 217.6c-39.936 0-80.896 17.92-112.64 49.664l-31.232 31.232 219.648 220.672z"
  }));
};
/* harmony default export */ var connect = (connect_SvgConnect);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/disconnect.svg


var disconnect_SvgDisconnect = function SvgDisconnect(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "disconnect_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M230.05 323.32c-18.933-18.932-49.616-18.932-68.574 0-18.943 18.949-18.943 49.657 0 68.574l39.965 39.96C155.73 478.305 51.233 595.454 54.6 692.32c2.92 83.656 19.707 138.381 38.076 173.2l-85.34 85.346c-12.784 12.804-8.428 37.896 9.722 56.025 18.154 18.16 43.241 22.507 56.046 9.712l85.345-85.325c34.815 18.344 89.544 35.142 173.18 38.04 96.876 3.384 214.02-101.136 260.456-146.85l39.975 39.96c18.917 18.933 49.62 18.948 68.558 0 18.917-18.887 18.917-49.626.03-68.563L230.05 323.32zm777.47-305.585C989.373-.4 964.286-4.761 951.49 8.023l-85.355 85.371C831.33 75.034 776.6 58.232 692.98 55.324c-96.9-3.39-214.05 101.12-260.496 146.844l-39.965-39.97a48.448 48.448 0 00-68.558 0c-18.958 18.933-18.943 49.626 0 68.574l470.584 470.605c18.933 18.902 49.626 18.902 68.564-.046 18.917-18.902 18.917-49.641 0-68.548l-39.975-39.985c45.694-46.452 150.203-163.57 146.834-260.466-2.908-83.641-19.68-138.366-38.04-173.175l85.326-85.34c12.758-12.815 8.427-37.907-9.733-56.082z",
    fill: "#D81E06"
  }));
};
/* harmony default export */ var disconnect = (disconnect_SvgDisconnect);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/health.svg


var health_SvgHealth = function SvgHealth(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "health_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M912.422 504.97H724.694c-5.097 0-9.782-3.057-11.823-7.747l-35.466-84.997c-1.428-3.669-4.893-6.931-8.971-5.91-3.872 0-7.54 2.446-8.971 6.114l-55.85 143.089c-4.281 10.802-19.568 10.802-23.645 0L507.605 366.16c-1.428-3.872-5.503-6.318-9.171-6.114-4.078 0-7.747 2.647-8.971 6.522l-48.918 143.905c-1.837 5.097-6.522 8.56-12.026 8.56H343.32c-5.3 0-9.581 4.281-9.581 9.581s4.281 9.581 9.581 9.581h92.131c9.581 0 18.142-6.114 21.196-15.085l31.186-91.927c3.872-11.211 19.568-11.618 23.847-.406l70.934 185.69c1.428 3.669 4.893 6.114 8.971 6.114s7.54-2.446 8.971-6.114l56.665-145.537c4.078-10.601 19.159-10.802 23.645-.205l16.715 39.747c3.465 8.356 11.618 13.654 20.588 13.654h194.045c5.3 0 9.581-4.281 9.581-9.581s-4.078-9.581-9.376-9.581z"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M718.378 562.857c-18.346 0-35.466-8.154-46.678-21.809l-34.857 89.481c-7.338 18.753-24.868 30.778-44.844 30.778h-.205c-19.773 0-37.911-12.637-44.844-30.983L501.7 511.697l-8.154 24.052c-8.356 24.663-31.595 41.379-57.685 41.379H343.73c-26.702 0-48.309-21.607-48.309-48.309 0-26.498 21.607-48.309 48.309-48.309h66.653l43.009-126.373c6.522-19.159 24.663-32.409 44.844-32.614 20.79 0 38.932 12.434 46.065 31.186l48.309 126.578 31.391-80.513c6.522-16.715 21.402-28.129 38.727-30.371l1.837-.406 5.91-.205c18.549 0 35.466 11.618 43.212 29.761l28.942 69.099h102.73c14.269-27.519 22.625-58.703 22.625-91.927 0-54.831-22.014-104.362-57.888-140.439-19.568-23.03-45.045-40.155-76.641-48.309-20.384-7.134-42.397-10.802-65.023-10.802-70.934 0-133.307 37.098-168.771 92.947l-9.987 16.917-5.503 12.637c-.205 0-5.708-12.637-5.708-12.637l-9.987-16.917c-35.466-55.85-97.635-92.947-168.771-92.947-22.83 0-44.639 3.872-65.023 10.802-31.595 8.154-57.071 25.274-76.641 48.309-35.67 36.078-57.888 85.61-57.888 140.439 0 36.484 9.782 70.727 26.907 100.284 4.483 7.747 9.376 15.085 14.878 22.014 10.396 19.159 23.237 37.098 38.932 52.791C288.901 657.845 447.48 817.852 477.85 848.63h5.503c26.702-26.907 145.537-146.961 246.839-248.674h134.326c15.085 0 27.313-12.233 27.313-27.313 0-3.465-.816-6.725-1.837-9.782H718.369z"
  }));
};
/* harmony default export */ var health = (health_SvgHealth);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/performance.svg


var performance_SvgPerformance = function SvgPerformance(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "performance_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M785.954 934.57h-76.117l-56.832-142.335C809.13 734.72 921.054 584.806 921.054 408.917 921.054 183.57 737.69.102 512.239.102c-225.382 0-408.85 183.365-408.85 408.815 0 173.227 108.477 321.23 260.916 380.621-.102.24-.341.444-.444.683l-57.617 144.35h-55.296a31.744 31.744 0 100 63.488h535.143a31.744 31.744 0 10-.103-63.488zM166.946 408.918c0-190.361 154.897-345.292 345.293-345.292 190.362 0 345.259 154.965 345.259 345.292 0 190.396-154.897 345.293-345.26 345.293-190.395 0-345.292-154.897-345.292-345.293zm255.898 404.924c.785-2.014.682-3.994 1.092-6.007 28.433 6.348 57.958 9.898 88.303 9.898 27.511 0 54.374-2.765 80.35-8.021.341 1.468.205 3.038.785 4.471l48.128 120.389H374.579l48.265-120.73zm92.262-179.985c-.444 0-.887 0-1.331-.102a12.117 12.117 0 01-10.684-11.162l-27.204-349.97-43.896 223.13a12.083 12.083 0 01-22.528 3.448l-34.235-62.054-52.156 34.543a12.117 12.117 0 01-9.796 1.536l-15.6-4.096a12.05 12.05 0 01-8.6-14.848 11.913 11.913 0 0114.847-8.568l10.343 2.799 58.538-38.673a12.151 12.151 0 0117.272 4.232l24.507 44.442 54.614-277.3c1.126-5.904 6.929-10.58 12.63-9.693 5.972.341 10.922 5.12 11.331 11.162l29.082 374.476 64.99-212.309a12.186 12.186 0 0111.366-8.602h.24c5.12 0 9.795 3.243 11.468 8.158l38.332 111.787 10.035-20.821a12.356 12.356 0 0111.605-6.93l90.83 4.574a12.077 12.077 0 0111.468 12.698c-.341 6.69-5.666 12.356-12.698 11.469l-82.807-4.233-19.286 40.346a12.63 12.63 0 01-11.605 6.929 12.015 12.015 0 01-10.684-8.158l-36.01-104.448-72.773 237.636a12.186 12.186 0 01-11.605 8.602zm-3.004 60.075a284.058 284.058 0 100-568.081A284.194 284.194 0 00228.25 410.044 283.99 283.99 0 00512.102 693.93zm0-531.661a247.74 247.74 0 01247.774 247.808 247.74 247.74 0 01-247.774 247.74A247.74 247.74 0 01264.33 410.044c.238-136.875 111.035-247.774 247.808-247.774z"
  }));
};
/* harmony default export */ var performance = (performance_SvgPerformance);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/send.svg


var send_SvgSend = function SvgSend(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "send_svg__icon",
    viewBox: "0 0 1033 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M986.25 0a48.535 48.535 0 00-23.792 6.344L23.792 551.653a47.584 47.584 0 0012.372 87.237l222.057 54.562a69.79 69.79 0 0011.42 0 47.584 47.584 0 0011.102-95.167l-107.856-26.33 751.505-433.328L834.3 735.643l-317.224-78.037L666.17 494.87a47.584 47.584 0 00-35.212-79.623 46.95 46.95 0 00-35.212 15.544L397.8 647.455a46.632 46.632 0 00-10.15 42.508v285.502a47.9 47.9 0 0029.184 44.094 52.66 52.66 0 0018.399 3.49 47.266 47.266 0 0033.625-13.959L627.47 850.478a47.584 47.584 0 000-67.251l-2.538-1.586 238.235 58.369a48.853 48.853 0 0037.75-6.662 47.266 47.266 0 0020.62-31.722l111.98-747.063a48.218 48.218 0 00-20.303-46.315A48.853 48.853 0 00986.25 0zM481.23 861.581V747.063l100.877 24.744a46.315 46.315 0 00-23.158 11.737l-77.72 78.037z"
  }));
};
/* harmony default export */ var send = (send_SvgSend);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/avg_time.svg


var avg_time_SvgAvgTime = function SvgAvgTime(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "avg_time_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M502.682 1023.918c3.113.062 6.205.082 9.318.082 282.767 0 512-229.233 512-512S794.767 0 512 0C232.346 0 5.038 224.215.082 502.682h37.253C42.291 244.777 252.908 37.232 512 37.232c262.205 0 474.767 212.563 474.767 474.768S774.205 986.767 512 986.767c-3.113 0-6.205-.04-9.318-.102v37.253z"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M491.52 941.609c6.779.307 13.62.471 20.48.471 237.527 0 430.08-192.553 430.08-430.08S749.527 81.92 512 81.92 81.92 274.473 81.92 512h31.273c0-220.242 178.565-398.807 398.807-398.807S910.807 291.758 910.807 512 732.242 910.807 512 910.807c-6.86 0-13.701-.184-20.48-.532v31.334z"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M0 484.065h167.567a18.637 18.637 0 110 37.233H0v-37.233zM484.065 1024V856.433a18.637 18.637 0 0137.233 0V1024h-37.233zM465.45 502.682h335.135v55.849H465.449z"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M465.449 530.637V256.9c0-18.493 12.493-33.505 27.935-33.505 15.421 0 27.934 15.012 27.934 33.505v273.736a27.935 27.935 0 11-55.849 0zM328.806 986.46a18.637 18.637 0 01-12.37-23.245l43.541-142.438a18.637 18.637 0 1135.615 10.895l-43.54 142.418a18.637 18.637 0 01-23.246 12.37zM142.807 854.835a18.637 18.637 0 010-26.337L248.115 723.19a18.637 18.637 0 1126.337 26.337L169.165 854.835a18.637 18.637 0 01-26.337 0zM18.842 654.787a18.637 18.637 0 0111.96-23.45l141.66-46.04a18.637 18.637 0 0111.51 35.431l-141.66 46.019a18.637 18.637 0 01-23.45-11.96z"
  }));
};
/* harmony default export */ var avg_time = (avg_time_SvgAvgTime);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/count.svg


var count_SvgCount = function SvgCount(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "count_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M144.768 359.68l352.384 176.256a27.904 27.904 0 0024.96 0L874.624 359.68a27.904 27.904 0 000-49.92L522.368 133.504a28.032 28.032 0 00-24.96 0L144.896 309.76a27.904 27.904 0 000 49.92zm74.752-24.96l290.176-145.024L800 334.72 509.696 479.744zm651.904 325.504a27.52 27.52 0 00-21.248 1.792L509.696 832 170.112 661.888h-1.536a27.904 27.904 0 00-23.68 51.2l352.256 175.36a27.904 27.904 0 0024.96 0l352.384-176.64h1.536a27.904 27.904 0 00-4.48-51.2z"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M144.768 535.936l352.384 176.256a27.904 27.904 0 0024.96 0l352.256-176.384h1.536a27.904 27.904 0 00-25.6-49.408L510.592 655.872l-340.48-170.24h-1.536a27.904 27.904 0 00-23.68 51.2z"
  }));
};
/* harmony default export */ var count = (count_SvgCount);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/status_one.svg


var status_one_SvgStatusOne = function SvgStatusOne(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "status_one_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M663 367.9c-30.3 0-54.8 24.6-54.8 54.9 0 30.3 24.6 54.8 54.8 54.8 30.3 0 54.9-24.6 54.9-54.8-.1-30.3-24.6-54.9-54.9-54.9zm-281.2 0c-30.2 0-54.9 24.6-54.9 54.9 0 30.3 24.7 54.8 54.9 54.8 30.4 0 54.9-24.6 54.9-54.8 0-30.3-24.6-54.9-54.9-54.9zM313.1 587c.8 112.5 92.5 204.1 205.5 204.1S723.3 699.6 724.1 587h-411zm199-464.6c-104.1 0-201.9 40.5-275.5 114.1C162.9 310 122.4 407.9 122.4 512s40.5 202 114.1 275.6C310.1 861.1 408 901.7 512 901.7c104.1 0 202-40.6 275.7-114.2 151.9-151.9 151.9-399.1 0-551-73.6-73.6-171.5-114.1-275.6-114.1zM512 960c-119.7 0-232.2-46.6-316.8-131.1C110.6 744.2 64 631.7 64 512c0-119.7 46.6-232.2 131.3-316.8C279.9 110.6 392.4 64 512.1 64c119.7 0 232.2 46.6 316.9 131.2 174.7 174.7 174.7 458.9 0 633.6C744.3 913.4 631.7 960 512 960z"
  }));
};
/* harmony default export */ var status_one = (status_one_SvgStatusOne);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/status_two.svg


var status_two_SvgStatusTwo = function SvgStatusTwo(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "status_two_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M509.4 958.2c-60.4 0-118.9-11.9-174.1-35.1-53.2-22.5-101.1-54.8-142.1-95.9-41-41-73.3-88.9-95.9-142.1C74 629.9 62.2 571.4 62.2 511S74 392.1 97.3 337c22.5-53.2 54.8-101.1 95.9-142.1 41-41 88.9-73.3 142.1-95.9C390.5 75.7 449 63.9 509.4 63.9S628.3 75.7 683.5 99c53.2 22.5 101.1 54.8 142.1 95.9 41 41 73.3 88.9 95.9 142.1 23.3 55.2 35.1 113.7 35.1 174.1 0 60.4-11.9 118.9-35.1 174.1-22.5 53.3-54.8 101.1-95.9 142.1-41 41-88.9 73.3-142.1 95.9-55.2 23.2-113.7 35-174.1 35zm0-827.9c-209.9 0-380.7 170.8-380.7 380.7s170.8 380.7 380.7 380.7S890.1 720.9 890.1 511 719.3 130.3 509.4 130.3z"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M285.7 410.1a55.9 55.9 0 10111.8 0 55.9 55.9 0 10-111.8 0zm335.6-1.1a55.9 55.9 0 10111.8 0 55.9 55.9 0 10-111.8 0zm-106 324.1c-88 0-153.8-69.7-156.6-72.8-11.3-12.1-10.6-31.1 1.6-42.4 12.1-11.3 31.1-10.6 42.3 1.5.9.9 51.4 53.7 112.7 53.7h2.3c34.6-.8 67.4-19 97.7-54.2 10.8-12.6 29.8-14 42.3-3.2 12.6 10.8 14 29.8 3.2 42.3-42 48.8-89.9 74-142.4 75-1 .1-2.1.1-3.1.1z"
  }));
};
/* harmony default export */ var status_two = (status_two_SvgStatusTwo);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/status_three.svg


var status_three_SvgStatusThree = function SvgStatusThree(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "status_three_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M333.368 445.399c24.561 0 44.478-20.24 44.478-45.204s-19.912-45.205-44.478-45.205-44.482 20.24-44.482 45.205 19.917 45.204 44.482 45.204zM512 40.008c-247.245 0-447.677 202.066-447.677 451.323 0 249.262 200.427 451.322 447.677 451.322s447.677-202.065 447.677-451.322c0-249.252-200.432-451.323-447.677-451.323zm-.732 857.446c-222.68 0-403.195-181.832-403.195-406.123S288.589 85.217 511.268 85.217c222.684 0 403.205 181.827 403.205 406.114 0 224.297-180.516 406.123-403.205 406.123zm179.369-542.459c-24.56 0-44.478 20.24-44.478 45.205s19.917 45.204 44.478 45.204 44.482-20.24 44.482-45.204-19.922-45.205-44.482-45.205z"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M327.68 668.16h368.64v40.96H327.68z"
  }));
};
/* harmony default export */ var status_three = (status_three_SvgStatusThree);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/status_four.svg


var status_four_SvgStatusFour = function SvgStatusFour(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "status_four_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M509.698 956.553c-245.062 0-444.412-199.386-444.412-444.449 0-245.032 199.351-444.418 444.412-444.418 245.063 0 444.448 199.357 444.448 444.418-.033 245.062-199.385 444.449-444.448 444.449zm0-842.129c-219.263 0-397.675 178.412-397.675 397.68 0 219.288 178.412 397.71 397.675 397.71 219.294 0 397.711-178.422 397.711-397.71-.034-219.268-178.417-397.68-397.71-397.68z"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M736.095 735.511c8.413 9.815 7.2 24.557-2.615 32.94-9.752 8.414-24.494 7.196-32.936-2.619-47.857-56.085-117.438-88.276-190.847-88.276-73.377 0-142.954 32.19-190.811 88.276-8.412 9.815-23.212 11.032-32.94 2.62-9.815-8.384-11.028-23.155-2.614-32.94 56.771-66.525 139.244-104.693 226.365-104.693 87.12 0 169.631 38.168 226.398 104.692zM369.549 505.308h-5.672c-20.755 0-37.61-16.855-37.61-37.605v-67.337c0-20.72 16.855-37.58 37.61-37.58h5.672c20.72 0 37.575 16.86 37.575 37.58v67.337c0 20.75-16.855 37.605-37.575 37.605zm285.972 0h-5.672c-20.72 0-37.575-16.855-37.575-37.605v-67.337c0-20.72 16.855-37.58 37.575-37.58h5.672c20.72 0 37.575 16.86 37.575 37.58v67.337c0 20.75-16.855 37.605-37.575 37.605z"
  }));
};
/* harmony default export */ var status_four = (status_four_SvgStatusFour);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/status_five.svg


var status_five_SvgStatusFive = function SvgStatusFive(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "status_five_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M816.554 340.5a22.673 22.673 0 00-33.288-20.048l-.148.087-.16.074-140.55 76.562a23.215 23.215 0 00-2.773 1.516 22.636 22.636 0 00-.32 37.986 22.007 22.007 0 003.439 1.861l137.64 74.874a22.66 22.66 0 1023.572-38.516l-106.78-57.12 107.372-57.28.173-.098h.061a22.673 22.673 0 0011.738-19.862zm-421.586 98.038a22.007 22.007 0 003.44-1.861 22.623 22.623 0 00-.32-37.986 22.192 22.192 0 00-2.762-1.516l-140.55-76.55-.185-.099-.148-.074a22.663 22.663 0 00-21.489 39.909l.185.099 107.385 57.28-106.793 57.156a22.66 22.66 0 1023.56 38.516zm346.096 324.065a222.253 222.253 0 00-222.19-217.432c-121.477 0-220.17 97.398-222.216 218.43v3.835h.098a25.397 25.397 0 0050.684-2.318v-1.233a171.544 171.544 0 01343.014.234 1.344 1.344 0 000 .222v2.195a25.373 25.373 0 0050.463.962h.197v-4.833zm0 0"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M512.006 0C229.243 0 0 229.23 0 512.006S229.243 1024 512.006 1024s512.006-229.23 512.006-511.994S794.77 0 512.006 0zm0 970.542c-253.247 0-458.548-205.288-458.548-458.536s205.3-458.56 458.548-458.56 458.536 205.313 458.536 458.56-205.288 458.536-458.536 458.536zm0 0"
  }));
};
/* harmony default export */ var status_five = (status_five_SvgStatusFive);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/fix.svg


var fix_SvgFix = function SvgFix(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "fix_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M286.19 707.131a31.248 31.248 0 1062.496 0 31.248 31.248 0 10-62.496 0z"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M512.143 2.048C230.545 2.048 2.26 230.334 2.26 511.937c0 281.606 228.286 509.898 509.884 509.898 281.627 0 509.9-228.292 509.9-509.898 0-281.603-228.273-509.889-509.9-509.889zm95.976 576.897c-20.695 0-40.417-4.045-58.602-11.16l-191.86 183.69c-22.422 21.452-57.994 20.687-79.469-1.745l-7.465-7.803c-21.463-22.424-20.705-58.016 1.724-79.479l188.115-180.095c-8.638-19.755-13.512-41.533-13.512-64.475 0-88.955 72.114-161.065 161.069-161.065 19.968 0 39.012 3.807 56.67 10.453l-89.063 79.538 8.927 91.835 91.834 10.203 85.537-78.52a160.885 160.885 0 017.154 47.556c-.002 88.957-72.115 161.067-161.06 161.067z"
  }));
};
/* harmony default export */ var fix = (fix_SvgFix);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/local.svg


var local_SvgLocal = function SvgLocal(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "local_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M960 46.406H64c-35.199 0-64 28.801-64 64v639.988c0 35.199 28.801 64 64 64h424v115.199H296c-13.199 0-24 10.801-24 24s10.801 24 24 24h432c13.201 0 24-10.801 24-24s-10.799-24-24-24H536V814.395h424c35.201 0 64-28.801 64-64V110.406c0-35.199-28.799-64-64-64zM976 734.4c0 17.6-14.398 32-32 32H80c-17.6 0-32-14.4-32-32V609.064h928V734.4zM48 561.064V126.4c0-17.6 14.4-32 32-32h864c17.602 0 32 14.4 32 32v434.664H48z"
  }));
};
/* harmony default export */ var local = (local_SvgLocal);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/publish.svg


var publish_SvgPublish = function SvgPublish(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "publish_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M999.71 805.393V999.71H23.011V805.393h976.7m23.01-23.011H0V1024h1022.722V782.382zM779.826 929.398h-671.16v-62.641h671.16v62.641zm149.573 0h-80.54v-62.641h80.54v62.641zm92.045-471.73c-11.505-109.943-104.829-195.596-217.328-195.596-6.392 0-11.506 0-17.898 1.279C779.825 116.335 658.377 0 511.361 0 363.066 0 242.896 116.335 236.504 262.072h-17.897c-112.5 0-205.823 85.653-217.329 195.596C0 465.338 0 471.73 0 479.4c0 121.448 97.159 218.606 218.607 218.606h585.508c120.17 0 218.607-97.158 218.607-218.606 0-7.67 0-14.063-1.279-21.733z"
  }));
};
/* harmony default export */ var publish = (publish_SvgPublish);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/email.svg


var email_SvgEmail = function SvgEmail(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "email_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M932.293 680.855V337.713L753.26 516.799l179.033 164.004M630.125 639.88a155.04 155.04 0 01-110.32 45.72c-41.66 0-80.895-16.242-110.373-45.72l-96.03-96.082-206.086 188.894v31.641c0 41.396 33.645 75.041 74.989 75.041h675c41.343 0 74.988-33.645 74.988-74.988V731.69L726.682 543.324l-96.504 96.504"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M858.834 195.594h-675c-41.291 0-74.883 33.644-74.883 74.988v15.662L437.54 614.937c22.412 22.36 52.207 34.7 83.848 34.7 31.693 0 61.488-12.34 83.847-34.7l328.641-328.693v-15.662c0-41.344-33.75-74.988-75.041-74.988M107.316 337.713v344.092l179.508-164.532-179.508-179.56"
  }));
};
/* harmony default export */ var email = (email_SvgEmail);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/coffee.svg


var coffee_SvgCoffee = function SvgCoffee(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "coffee_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M533.114.316a21.852 21.852 0 00-21.419 22.127c0 66.461-25.395 86.226-57.877 115.401-32.483 29.057-72.328 67.563-72.328 145.678a21.852 21.852 0 0032.719 19.135 21.93 21.93 0 0010.788-19.135c0-64.925 25.238-84.06 57.877-113.274 32.68-29.254 72.328-68.43 72.328-147.805A21.812 21.812 0 00533.114.316zm108.943 108.786a21.852 21.852 0 00-21.379 22.128c0 42.482-14.647 52.601-36.301 71.894s-50.909 48.034-50.909 102.171a21.891 21.891 0 0010.788 19.096 21.835 21.835 0 0021.93 0 21.93 21.93 0 0010.789-19.096c0-40.79 14.37-50.16 36.301-69.689 21.93-19.49 50.909-48.98 50.909-104.376a21.812 21.812 0 00-22.128-22.128zM207.07 370.535a21.773 21.773 0 00-21.733 21.773v261.118a216.942 216.942 0 0087.604 174.027h434.002a217.454 217.454 0 0083.037-131.386c49.688-4.056 86.068-25.75 106.817-59.059 22.364-36.223 27.718-82.17 27.955-132.173.078-.158.078-.315.078-.512a20.67 20.67 0 00.276-3.19c0-35.789-29.49-65.24-65.28-65.24h-65.28v-43.585a21.773 21.773 0 00-21.733-21.733H207.07zm587.477 108.826h65.28c12.323 0 21.772 9.45 21.772 21.733 0 48.192-6.3 87.998-21.773 113-12.993 20.867-31.34 34.135-65.28 37.994V479.36zm-674.49 391.638a21.773 21.773 0 00-21.773 21.773c0 60.24 83.273 108.786 152.293 108.786h478.69c70.477 0 152.332-47.523 152.332-108.786a21.773 21.773 0 00-21.773-21.773H120.018z"
  }));
};
/* harmony default export */ var coffee = (coffee_SvgCoffee);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/docker.svg


var docker_SvgDocker = function SvgDocker(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "docker_svg__icon",
    viewBox: "0 0 1280 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M699.887 472.6h-132.2V353.8h132.2v118.8zm0-408.6h-132.2v121.4h132.2V64zm156.4 289.6h-132.2v118.8h132.2V353.6zm-312.6-144.2h-132.2v120.2h132.2V209.4zm156.2 0h-132.2v120.2h132.2V209.4zm553.6 200c-28.8-19.4-95.2-26.4-146.2-16.8-6.6-48-33.4-89.8-82.2-127.4l-28-18.6-18.6 28c-36.8 55.6-46.8 147.2-7.4 207.6-17.4 9.4-51.6 22.2-96.8 21.4H4.887c-17.4 101.6 11.6 233.6 88 324.2 74.2 87.8 185.4 132.4 330.8 132.4 314.8 0 547.8-145 656.8-408.4 42.8.8 135.2.2 182.6-90.4 3-5 13.2-26.4 17-34.2l-26.6-17.8zm-1022.2-55.8h-132v118.8h132.2V353.6zm156.2 0h-132.2v118.8h132.2V353.6zm156.2 0h-132.2v118.8h132.2V353.6zm-156.2-144.2h-132.2v120.2h132.2V209.4z"
  }));
};
/* harmony default export */ var docker = (docker_SvgDocker);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/jrtt.svg


var jrtt_SvgJrtt = function SvgJrtt(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "jrtt_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M179.091 7.277H833.58c96.43 0 172.206 75.362 172.206 171.27v650.828c0 95.885-75.776 171.247-172.206 171.247H179.09c-96.452 0-172.228-75.362-172.228-171.247V178.546C6.885 82.64 82.661 7.276 179.113 7.276z",
    fill: "#FFF"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M179.091 14.14c-89.545 0-165.3 75.34-165.3 164.406v650.807c0 89.066 75.776 164.406 165.344 164.406H833.58c89.545 0 165.321-75.34 165.321-164.406V178.568c0-89.066-75.776-164.428-165.321-164.428H179.09zm654.489 993.345H179.09C82.661 1007.485 0 925.26 0 829.353V178.568C0 82.618 82.683.436 179.091.436H833.58c96.43 0 179.09 82.203 179.09 178.11v650.807c0 95.907-82.66 178.132-179.09 178.132z",
    fill: "#C0BFBE"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M172.206 192.25c0-13.704 6.907-20.567 20.698-20.567 13.748 0 20.633 6.863 20.633 20.568s-6.885 20.545-20.655 20.545c-13.77 0-20.676-6.841-20.676-20.545zm34.446 95.908l68.891-95.907 27.561 34.25 34.446-61.659 62.006 109.59v-116.41h-254.91V322.43h254.91v-34.25H206.652zm475.332-130.157h186.02v27.408h-186.02v-27.408zm0 54.795h186.02v27.408h-186.02v-27.408zm0-109.612h186.02v27.409h-186.02v-27.409zm-254.889 54.817h220.443v27.408H427.095v-27.408zm0 54.795h220.443v27.408H427.095v-27.408zm0-109.612h220.443v27.409H427.095v-27.409zM144.667 822.512H647.56v27.408H144.667v-27.408zm0 54.795H647.56v27.408H144.667v-27.408zm0-109.59H647.56v27.386H144.667v-27.386zm537.317 54.795h186.02v27.408h-186.02v-27.408zm0 54.795h186.02v27.408h-186.02v-27.408zm0-109.59h186.02v27.386h-186.02v-27.386zM158.437 130.593h6.885v-6.842h-13.77v6.842h6.907zm0-13.704s6.885 0 6.885-6.842h-13.77v6.842h6.907zm0-13.705h6.885s0 6.842 6.884 6.842c0 6.863 0 6.863-6.884 6.863 0 0 0 6.84 6.884 6.84v6.864c0 6.84-6.884 6.84-6.884 6.84h-20.655v-34.249h13.792zm27.56 41.113h-13.79 6.906v-6.863l-6.907-27.387h6.907l6.885 20.546 6.884-20.546h6.885l-13.77 34.25zm34.446-34.271v6.863h-6.885v13.725h6.885v6.82h-13.791v-20.545h-6.863v-6.842h6.885l6.906-6.863v6.863h6.885zm41.33 20.567h6.885s6.885 0 6.885-6.842v-6.862l-6.885-6.842h-13.747v20.546h6.884zm6.885-27.409c6.885 0 6.885 0 6.885 6.842h6.907v20.567h-6.907v6.84h-27.539v-34.249h20.654zm89.568 27.409c-6.885 0-6.885-6.842-6.885-6.842s0-6.862 6.885-6.862v6.862h6.884c0-6.862 0-13.725-6.884-13.725-13.792 0-13.792 13.725-13.792 13.725s0 13.683 13.792 13.683c6.884 0 6.884-6.841 6.884-6.841h-6.884zm27.539-13.704l6.885 6.862h-13.77s0-6.862 6.885-6.862zm6.885 6.84h6.884s0-13.703-13.77-13.703-13.769 13.725-13.769 13.725 0 13.683 13.77 13.683c6.885 0 6.885-6.841 13.77-6.841h-13.77c-6.885 0-6.885 0-6.885-6.863h13.77zm-158.437-6.84l6.906 6.862h-13.791s0-6.862 6.885-6.862zm6.906 6.84h6.885s0-13.703-13.791-13.703c-13.77 0-13.77 13.725-13.77 13.725s0 13.683 13.77 13.683c6.906 0 6.906-6.841 13.791-6.841h-13.77c-6.884 0-6.884 0-6.884-6.863h13.77zm55.1 6.864c-6.885 0-6.885-6.842-6.885-6.842s0-6.862 6.885-6.862 6.885 6.862 6.885 6.862 0 6.842-6.885 6.842zm13.77-20.546h-13.77c-13.77 0-13.77 13.704-13.77 13.704s0 13.683 13.77 13.683h13.77v-27.387zm27.56 6.842c0-6.842-6.884-6.842-6.884-6.842-6.885 0-6.885 6.842-6.885 6.842l-6.885-6.842v27.387h6.885V123.75c0-6.862 6.885-6.862 6.885-6.862v20.545h6.885v-20.545z",
    fill: "#C0BFBE"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M0 219.637v609.716s0 6.841 6.885 13.726L1012.67 788.24V178.546s0-6.84-6.885-13.704L0 219.637z",
    fill: "#E81919"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M902.427 569.039v-47.954l-151.53 6.841v-20.545h-68.913v27.408l-151.552 6.842v47.932l151.552-6.82v102.749l68.913-6.841V575.88z",
    fill: "#FFF"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M530.432 479.973v47.953h48.237l137.782-68.499L847.35 507.36h55.1v-47.932h-34.446l-89.567-27.408 117.106-61.636V288.18l-68.89 6.84-172.207 6.864-55.122-27.408-75.776 116.474 62.007 20.545 41.33-61.657 199.789-6.863v6.863L716.43 404.633l-89.524-34.25-27.583 47.932 48.237 20.545-82.66 41.113h-34.468zm330.687 102.77l-68.913 6.841 48.237 89.067 75.776-6.842-55.122-89.066zm-330.687 109.59h68.891l48.237-95.907-68.891 6.863-48.237 89.066zM358.226 589.584l55.121 109.612h82.64l-61.985-116.453-75.776 6.841zm-75.776-82.203l-62.007-75.362-82.66 6.841 61.984 68.521h82.683zm0-95.907l-62.007-68.5h-82.66l61.984 75.34 82.683-6.84z",
    fill: "#FFF"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M351.34 575.88l130.877-6.841v-47.954l-89.546 6.841v-212.36l-68.89 6.841v205.52l-213.56 13.725v47.932l144.668-6.84-62.007 82.202-82.66 6.863v47.932l137.782-6.84z",
    fill: "#FFF"
  }));
};
/* harmony default export */ var jrtt = (jrtt_SvgJrtt);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/126Email.svg


var _126Email_Svg126Email = function Svg126Email(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "126Email_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M5.12 358.4v61.44H89.6l-48.64 371.2h117.76l71.68-537.6L5.12 358.4zm565.76 76.8c23.04-107.52-92.16-243.2-299.52-122.88L256 422.4s61.44-71.68 120.32-58.88c61.44 12.8 79.36 104.96-20.48 227.84C256 716.8 184.32 788.48 184.32 788.48h343.04l51.2-107.52H445.44s102.4-138.24 125.44-245.76zm445.44 107.52c-28.16-128-181.76-115.2-181.76-115.2L980.48 268.8l-151.04-2.56S706.56 376.32 645.12 455.68s-81.92 192-5.12 279.04c76.8 87.04 217.6 61.44 266.24 35.84 46.08-25.6 138.24-97.28 110.08-227.84zm-189.44 153.6c-56.32 17.92-112.64-7.68-128-56.32s17.92-102.4 74.24-117.76c56.32-17.92 112.64 7.68 128 56.32 15.36 46.08-17.92 99.84-74.24 117.76z",
    fill: "#1E7149"
  }));
};
/* harmony default export */ var _126Email = (_126Email_Svg126Email);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/163Email.svg


var _163Email_Svg163Email = function Svg163Email(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "163Email_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M819.2 145.92h97.28c43.52 0 81.92-20.48 107.52-51.2v268.8c0 48.64-30.72 92.16-79.36 107.52h10.24c17.92 7.68 38.4 7.68 56.32 0h12.8v240.64c0 64-51.2 115.2-115.2 115.2h-89.6v125.44h-5.12c-38.4 0-76.8 17.92-102.4 46.08V256c-2.56-61.44 46.08-110.08 107.52-110.08zm0 309.76V780.8h46.08c30.72 0 56.32-25.6 56.32-56.32V501.76h-51.2s-25.6 2.56-40.96 28.16c0 0 17.92-74.24 69.12-74.24h23.04V192h-46.08c-30.72 0-56.32 25.6-56.32 56.32v207.36zM550.4 867.84H87.04C40.96 870.4 5.12 903.68 0 947.2V302.08c0-64 51.2-115.2 115.2-115.2h161.28v-128h17.92c43.52 0 81.92-20.48 107.52-53.76v179.2h171.52c51.2 0 92.16-40.96 92.16-92.16v657.92c-2.56 66.56-53.76 117.76-115.2 117.76zm-12.8-634.88H399.36v268.8h87.04c15.36 0 40.96-28.16 40.96-28.16s-15.36 74.24-69.12 74.24h-56.32v222.72c0 5.12-5.12 10.24-10.24 10.24h-102.4c-5.12 0-10.24-5.12-10.24-10.24V547.84h-102.4c-15.36 0-40.96 28.16-40.96 28.16s15.36-74.24 69.12-74.24h69.12v-268.8h-89.6c-30.72 0-56.32 25.6-56.32 56.32v532.48h355.84c30.72 0 56.32-25.6 56.32-56.32l-2.56-532.48z",
    fill: "#D01D00"
  }));
};
/* harmony default export */ var _163Email = (_163Email_Svg163Email);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/foxmail.svg


var foxmail_SvgFoxmail = function SvgFoxmail(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "foxmail_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M435.499 362.667h323.776c5.653 0 11.093-2.24 15.082-6.251l136.726-136.832a21.333 21.333 0 006.25-15.083v-97.834A21.333 21.333 0 00896 85.333h-96.17a21.383 21.383 0 00-16.64 7.979l-72.79 90.71A21.333 21.333 0 01693.76 192H393.173a21.248 21.248 0 00-14.57 5.76L106.667 490.667v375.168c0 5.653 2.24 11.093 6.25 15.082l51.499 51.499a21.333 21.333 0 0015.083 6.25h493.717a21.374 21.374 0 0015.787-6.975L890.432 710.1a21.372 21.372 0 005.547-14.357V520.277a21.41 21.41 0 00-6.315-15.168l-51.435-50.944A21.333 21.333 0 00823.232 448H670.827a21.333 21.333 0 00-16.278 7.53L548.011 581.206a10.624 10.624 0 008.064 17.558c33.002-.022 93.994-.747 126.378-1.152A21.29 21.29 0 01704 618.944v75.733a21.36 21.36 0 01-6.315 15.147l-52.437 51.968a21.29 21.29 0 01-15.019 6.187H392.256a21.333 21.333 0 01-14.933-6.102l-72.256-91.605a21.333 21.333 0 01-6.4-15.232V520.853c0-5.653 2.24-11.093 6.25-15.082l115.499-136.832a21.248 21.248 0 0115.083-6.272z",
    fill: "#CC342F"
  }));
};
/* harmony default export */ var foxmail = (foxmail_SvgFoxmail);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/gmail.svg


var gmail_SvgGmail = function SvgGmail(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "gmail_svg__icon",
    viewBox: "0 0 1280 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M1194.667 1024H85.333A85.333 85.333 0 010 938.667V85.333A85.333 85.333 0 0185.333 0h1109.334A85.333 85.333 0 011280 85.333v853.334a85.333 85.333 0 01-85.333 85.333",
    fill: "#E3E3E3"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M1280 938.667V85.333c0-13.312-3.285-25.728-8.704-36.906L637.312 554.965 32.427 155.99 852.395 1024h342.272A85.333 85.333 0 001280 938.667",
    fill: "#D0CFCF"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M170.667 1024H85.333A85.333 85.333 0 010 938.667V85.333a85.333 85.333 0 01170.667 0V1024z",
    fill: "#D54B3D"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M1194.667 1024h-85.334V85.333a85.333 85.333 0 01170.667 0v853.334a85.333 85.333 0 01-85.333 85.333",
    fill: "#AC3D31"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M640 424.15L1139.627 19.2a85.675 85.675 0 01121.429 13.696 88.448 88.448 0 01-13.483 123.136L640 648.533 32.427 155.99A88.448 88.448 0 0118.944 32.853 85.675 85.675 0 01140.374 19.2L640 424.107z",
    fill: "#D54B3D"
  }));
};
/* harmony default export */ var gmail = (gmail_SvgGmail);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/qqEmail.svg


var qqEmail_SvgQqEmail = function SvgQqEmail(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "qqEmail_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M256 384c-12.8 57.6-6.4 115.2 6.4 166.4 12.8 44.8-6.4 89.6-44.8 115.2-57.6 32-128-12.8-134.4-70.4-57.6-300.8 211.2-576 518.4-518.4C422.4 96 288 217.6 256 384z",
    fill: "#FFDC04"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M531.2 800c51.2-19.2 102.4-51.2 140.8-89.6 32-32 83.2-38.4 121.6-12.8 57.6 32 57.6 115.2 6.4 153.6-230.4 198.4-601.6 102.4-704-192C192 800 371.2 851.2 531.2 800z",
    fill: "#E03A22"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M755.2 352c-44.8-38.4-96-64-147.2-76.8-44.8-12.8-76.8-51.2-76.8-96 0-64 70.4-108.8 128-83.2 288 102.4 390.4 467.2 185.6 704 76.8-153.6 32-339.2-89.6-448z",
    fill: "#27AA3A"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M633.6 492.8c0-12.8 0-25.6-6.4-32 0-6.4 0-6.4-6.4-12.8 0-64-38.4-115.2-108.8-115.2S403.2 384 403.2 448c0 6.4-6.4 6.4-6.4 12.8-6.4 12.8-6.4 19.2-6.4 25.6v6.4c-12.8 6.4-25.6 25.6-32 44.8-12.8 32-12.8 64-6.4 64 6.4 6.4 19.2-6.4 32-19.2 0 19.2 12.8 38.4 25.6 51.2-12.8 0-25.6 12.8-25.6 25.6 0 19.2 25.6 32 64 32 32 0 57.6-12.8 64-25.6h6.4c6.4 12.8 32 25.6 64 25.6s64-12.8 64-32c0-12.8-12.8-19.2-25.6-25.6 12.8-12.8 25.6-25.6 32-44.8 12.8 19.2 25.6 25.6 32 19.2 12.8-6.4 6.4-32-6.4-64-19.2-32-32-44.8-44.8-51.2z",
    fill: "#038BC5"
  }));
};
/* harmony default export */ var qqEmail = (qqEmail_SvgQqEmail);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/sina.svg


var sina_SvgSina = function SvgSina(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "sina_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M330.24 529.92c-79.36 343.04-53.76 350.72-53.76 350.72 33.28 15.36 148.48-345.6 148.48-345.6-46.08 7.68-94.72-5.12-94.72-5.12zm675.84-10.24c-17.92-12.8-51.2-20.48-97.28-20.48-48.64 0-97.28 10.24-104.96 10.24l-17.92 56.32s43.52-17.92 92.16-17.92c23.04 0 38.4 2.56 51.2 7.68 10.24 5.12 12.8 12.8 10.24 25.6l-28.16 94.72c-7.68 5.12-17.92 10.24-25.6 12.8s-17.92 5.12-28.16 5.12c-10.24 0-17.92 0-23.04-2.56-5.12-2.56-7.68-2.56-10.24-5.12-2.56-2.56-5.12-5.12-5.12-7.68 0-2.56 0-7.68 2.56-12.8 2.56-7.68 5.12-12.8 12.8-17.92 5.12-5.12 12.8-7.68 23.04-10.24 7.68-2.56 17.92-2.56 30.72-5.12h12.8l12.8-43.52c-15.36 0-33.28 2.56-48.64 5.12-23.04 2.56-43.52 7.68-61.44 12.8s-33.28 15.36-43.52 25.6c-12.8 10.24-20.48 25.6-25.6 40.96-5.12 20.48-2.56 38.4 10.24 53.76 12.8 12.8 43.52 20.48 69.12 20.48 117.76 0 179.2-64 179.2-64l30.72-102.4c2.56-28.16-2.56-48.64-17.92-61.44zm-286.72 2.56c-10.24-15.36-43.52-23.04-71.68-23.04-99.84 0-168.96 30.72-168.96 30.72l-69.12 217.6h84.48L547.84 576c10.24-5.12 20.48-7.68 28.16-10.24 7.68-2.56 17.92-2.56 25.6-2.56 10.24 0 17.92 0 23.04 2.56 5.12 2.56 7.68 5.12 10.24 10.24 2.56 5.12 0 10.24 0 20.48-2.56 10.24-5.12 17.92-7.68 28.16l-38.4 122.88h84.48l48.64-158.72c7.68-28.16 7.68-51.2-2.56-66.56zM153.6 555.52c10.24-2.56 23.04-5.12 35.84-5.12 15.36 0 30.72 2.56 46.08 7.68s28.16 10.24 35.84 17.92h7.68l17.92-58.88c-10.24-5.12-23.04-7.68-38.4-10.24-17.92-2.56-35.84-5.12-53.76-5.12-40.96 0-76.8 7.68-104.96 23.04-28.16 15.36-46.08 33.28-51.2 56.32-5.12 17.92-2.56 33.28 5.12 43.52 7.68 12.8 23.04 20.48 46.08 25.6 7.68 2.56 17.92 2.56 28.16 5.12 10.24 2.56 17.92 2.56 23.04 5.12 12.8 2.56 20.48 5.12 25.6 7.68 5.12 2.56 5.12 7.68 2.56 12.8s-7.68 10.24-15.36 15.36c-7.68 2.56-20.48 5.12-38.4 5.12-12.8 0-23.04 0-33.28-2.56S71.68 693.76 64 691.2c-10.24-2.56-15.36-7.68-20.48-10.24-5.12-2.56-7.68-5.12-12.8-7.68h-12.8L0 729.6c10.24 5.12 23.04 10.24 40.96 12.8s38.4 5.12 61.44 5.12c43.52 0 76.8-7.68 107.52-23.04 28.16-15.36 46.08-33.28 53.76-58.88 5.12-15.36 2.56-30.72-2.56-40.96-7.68-10.24-20.48-17.92-40.96-23.04-10.24-2.56-17.92-5.12-28.16-5.12-10.24-2.56-17.92-2.56-25.6-5.12-15.36-2.56-23.04-5.12-28.16-7.68-2.56-2.56-5.12-7.68-2.56-12.8 0-7.68 7.68-12.8 17.92-15.36z"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M389.12 509.44C509.44 512 698.88 448 652.8 307.2c-2.56-10.24-7.68-17.92-10.24-25.6-2.56-12.8 7.68-23.04 20.48-40.96 7.68-10.24 15.36-20.48 15.36-30.72 0-5.12-5.12-12.8-17.92-10.24-17.92 5.12-40.96 17.92-58.88 30.72-12.8 10.24-23.04 17.92-33.28 12.8-15.36-5.12 7.68-43.52 12.8-53.76 10.24-15.36 12.8-35.84-10.24-30.72-23.04 5.12-40.96 23.04-61.44 43.52-10.24 10.24-20.48 25.6-33.28 28.16-25.6 5.12-12.8-30.72-7.68-46.08 7.68-20.48 12.8-38.4 0-40.96-28.16-5.12-53.76 28.16-69.12 51.2-10.24 12.8-28.16 51.2-46.08 40.96-7.68-5.12 0-30.72-2.56-43.52s-20.48-2.56-28.16 12.8c-7.68 12.8-12.8 23.04-17.92 38.4-2.56 7.68-10.24 33.28-23.04 28.16-10.24-2.56-7.68-20.48-7.68-28.16 0-5.12 0-10.24-2.56-12.8-5.12-5.12-15.36 5.12-25.6 20.48-10.24 20.48-20.48 51.2-20.48 53.76-76.8 148.48 56.32 202.24 163.84 204.8zM256 386.56c10.24-51.2 79.36-94.72 161.28-99.84 87.04-5.12 161.28 35.84 153.6 94.72-5.12 58.88-89.6 107.52-181.76 104.96-84.48-2.56-140.8-48.64-133.12-99.84z",
    fill: "#F60907"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M473.6 327.68H343.04c-5.12 0-12.8 5.12-12.8 12.8v17.92l76.8 30.72 76.8-30.72v-17.92c2.56-7.68-2.56-12.8-10.24-12.8z"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M332.8 368.64v69.12c0 5.12 5.12 12.8 12.8 12.8h130.56c5.12 0 12.8-5.12 12.8-12.8v-69.12l-76.8 30.72-79.36-30.72z"
  }));
};
/* harmony default export */ var sina = (sina_SvgSina);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/bilibili.svg


var bilibili_SvgBilibili = function SvgBilibili(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "bilibili_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M306.005 117.632L444.331 256h135.296l138.368-138.325a42.667 42.667 0 0160.373 60.373L700.331 256h89.002a149.333 149.333 0 01149.334 149.333v341.334A149.333 149.333 0 01789.333 896H234.667A149.333 149.333 0 0185.333 746.667V405.333A149.333 149.333 0 01234.667 256h88.96l-77.995-78.037a42.667 42.667 0 0160.373-60.374zm483.328 223.701H234.667a64 64 0 00-63.702 57.856l-.298 6.144v341.334a64 64 0 0057.856 63.701l6.144.299h554.666a64 64 0 0063.702-57.856l.298-6.144V405.333a64 64 0 00-64-64zm-448 128A42.667 42.667 0 01384 512v85.333a42.667 42.667 0 01-85.333 0V512a42.667 42.667 0 0142.666-42.667zm341.334 0A42.667 42.667 0 01725.333 512v85.333a42.667 42.667 0 01-85.333 0V512a42.667 42.667 0 0142.667-42.667z"
  }));
};
/* harmony default export */ var bilibili = (bilibili_SvgBilibili);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/downloadPPT.svg


var downloadPPT_SvgDownloadPpt = function SvgDownloadPpt(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    width: "1em",
    height: "1em",
    viewBox: "0 0 14 14"
  }, props), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M3 11.5h8a1 1 0 010 2H3a1 1 0 010-2zm4.38-1.532a.5.5 0 01-.76 0L2.905 5.634a.5.5 0 01.38-.825H5.4V1.512a.5.5 0 01.5-.5H8.1a.5.5 0 01.5.5V4.81h2.116a.5.5 0 01.38.825L7.38 9.968z",
    fill: "#FE7526",
    fillRule: "evenodd"
  }));
};
/* harmony default export */ var downloadPPT = (downloadPPT_SvgDownloadPpt);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/h5.svg


var h5_SvgH5 = function SvgH5(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "h5_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M152.365 104.15L217.8 838.297l293.75 81.553 294.515-81.665 65.569-734.035H152.365zm576.797 240.11h-344.55l8.207 92.206h328.169l-24.731 276.423-184.69 51.178-184.464-51.178-12.607-141.407h90.41l6.412 71.879 100.263 27.014.229-.064 100.315-27.078 10.41-116.75H310.477L286.19 254.222h451.03l-8.058 90.039zm0 0"
  }));
};
/* harmony default export */ var h5 = (h5_SvgH5);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/pc.svg


var pc_SvgPc = function SvgPc(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    width: "1em",
    height: "1em",
    viewBox: "0 0 36 36"
  }, props), /*#__PURE__*/react_default.a.createElement("image", {
    width: 36,
    height: 36,
    href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAG1BMVEX4+Pn63rn+pjP/nBr8 tlr47uD47uL8tlv////rOyNtAAAAAWJLR0QIht6VegAAAAd0SU1FB+UHEwcRKBnymZ8AAAA9SURB VCjPY2AgDggZowBFoJAyqpARUMgYDYxsIVdI0KUjCQVAhFjxC5VBhEJIshFLdGCJNGoC4tIE9dwF AKSUU/H41GkWAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA3LTE4VDIzOjE3OjQwKzA4OjAwmzeX ugAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNy0xOFQyMzoxNzo0MCswODowMOpqLwYAAAAgdEVY dHNvZnR3YXJlAGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnvM8dnQAAABh0RVh0VGh1bWI6OkRvY3Vt ZW50OjpQYWdlcwAxp/+7LwAAABd0RVh0VGh1bWI6OkltYWdlOjpIZWlnaHQAMzYvmTztAAAAFnRF WHRUaHVtYjo6SW1hZ2U6OldpZHRoADM21zb8YAAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdl L3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNjI2NjIxNDYwZoyVZgAAABF0RVh0VGh1bWI6 OlNpemUAMjkxQkK4p4jZAAAARnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vYXBwL3RtcC9pbWFnZWxj L2ltZ3ZpZXcyXzlfMTYyNjA1OTkzODIxMjI4NDBfMjlfWzBdML2Z/gAAAABJRU5ErkJggg=="
  }));
};
/* harmony default export */ var pc = (pc_SvgPc);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/uni.svg


var uni_SvgUni = function SvgUni(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 512"
  }, props), /*#__PURE__*/react_default.a.createElement("image", {
    width: 512,
    height: 512,
    href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAe1BMVEX///8rmTkrmTkrmTkr mTkrmTkrmTkrmTkrmTkrmTkrmTkrmTkrmTkrmTkrmTkrmTkrmTkrmTkrmTkrmTkrmTkrmTkrmTkr mTkrmTkrmTkrmTkrmTkrmTkrmTkrmTkrmTkrmTkvmz1uuXddsWg4n0X////L5s7z+fMsmTp65O0g AAAAIHRSTlMAJ2eRudvv+wE/m+QMct8HeOxHCJgj0DTrQvNzkiT0NWmRlD8AAAABYktHRACIBR1I AAAAB3RJTUUH5QcRCA0D8myyNAAACAdJREFUeNrt24malOUZRdHD0Mwyz6iJ0aj3f4XBIQYVFX0C O+Fb6wbe0/ybpruq2N7q0uUrVy+uXf87H4Hr1y6uXrl8ae/qxs1bt+vN/PfdvnXzxjs8/juf3K2X 8r7c/eTOHzz+e/cf1CN5nx7cv/d7z//hRT2Q9+3i4W8+/keP63F8CI8fvf35P3laL+PDePrkbc// 2fN6Fx/K82e/fv4vXtar+HBevvjV33/P/ygvf/E94Inv/4d5/rOfAx75+e84T9/8XcDvfwd6/Mbr P/UWCj+9InTP639Huvj3q8L36yU07v/4/p/3fw714If3Bl/VO6i8+v7zH97/P9bd7z4hcrNeQefm 6wBu1SPo3HodgM//Hez2dqneQOnSLtcTKF3ep/UESld2tZ5A6eq8D3C0i12rJ1C6Nv//72jXVy+g tXoArdUDaK0eQGv1AFqrB9BaPYDW6gG0Vg+gtXoArdUDaK0eQGv1AFqrB9BaPYDW6gG0Vg+gtXoA rdUDaK0eQGv1AFqrB9BaPYDW6gG0Vg+gtXoArdUDaK0eQGv1AFqrB9BaPYDW6gG0Vg+gtXoArdUD aK0eQGv1AFqrB9BaPYDW6gG0Vg+gtXoArdUDaK0eQGv1AFqrB9BaPYDW6gG0Vg+gtXoArdUDaK0e QGv1AFqrB9BaPYDW6gG0Vg+gtXoArdUDaK0eQGv1AFqrB9BaPYDW6gG0Vg+gtXoArdUDaK0eQGv1 AFqrB9BaPYDW6gG0Vg+gtXoArdUDaK0eQGv1AFqrB9BaPYDW6gG0Vg+gtXoArdUDaK0eQGv1AFqr B9BaPYDW6gG0Vg+gtXoArdUDaK0eQGv1AFqrB9BaPYDW6gG0Vg+gtXoArdUDaK0eQGvV4S/+8ed9 Wf9pvZsv/8KX9kU1dtXhr/75531djf1zvv4LX9pX1dhVhwUgAAEIQAACEIAABCAAAURWHRaAAAQg AAEIQAACEIAABBBZdVgAAhCAAAQgAAEIQAACEEBk1WEBCEAAAhCAAAQgAAEIQACRVYcFIAABCEAA AhCAAAQgAAFEVh0WgAAEIAABCEAAAhCAAAQQWXVYAAIQgAAEIAABCEAAAhBAZNVhAQhAAAIQgAAE IAABCEAAkVWHBSAAAQhAAAIQgAAEIAABRFYdFoAABCAAAQhAAAIQgAAEEFl1WAACEIAABCAAAQhA AAIQQGTVYQEIQAACEIAABCAAAQhAAJFVhwUgAAEIQAACEIAABCAAAURWHRaAAAQgAAEIQAACEIAA BBBZdVgAAhCAAAQgAAEIQAACEEBk1WEBCEAAAhCAAAQgAAEIQACRVYcFIAABCEAAAhCAAAQgAAFE Vh0WgAAEIAABCEAAAhCAAAQQWXVYAAIQgAAEIAABCEAAAhBAZNVhAQhAAAIQgAAEIAABCEAAkVWH BSAAAQhAAAIQgAAEIAABRFYdFoAABCAAAQhAAAIQgAAEEFl1WAACEIAABCAAAQhAAAIQQGTVYQEI QAACEIAABCAAAQhAAJFVhwUgAAEIQAACEIAABCAAAURWHRaAAAQgAAEIQAACEIAABBBZdVgAAhCA AAQgAAEIQAACEEBk1WEBCEAAAhCAAAQgAAEIQACRVYcFIAABCEAAAhCAAAQgAAFEVh0WgAAEIAAB CEAAAhCAAAQQWXVYAAIQgAAEIAABCEAAAhBAZNVhAQhAAAIQgAAEIAABCEAAkVWHBSAAAQhAAAIQ gAAEIAABRFYdFoAABCAAAQhAAAIQgAAEEFl1WAACEIAABCAAAQhAAAIQQGTVYQEIQAACEIAABCAA AQhAAJFVhwUgAAEIQAACEIAABCAAAURWHRaAAAQgAAEIQAACEIAA3sk3X/9f+EYA7ymAj5gADieA wwngcAI4nAAOJ4DDCeBwAjicAA4ngMMJ4HACOJwADieAwwngcAI4nAAOJ4DDCeBwAjicAA4ngMMJ 4HACOJwADieAwwngcAI4nAAOJ4DDCeBwAjicAA4ngMMJ4HACOJwADieAwwngcAI4nAAOJ4DDCeBw AjicAA4ngMMJ4HACOJwADieAw50XwLdf8YZvjwuA/w2rB9BaPYDW6gG0Vg+gtXoArdUDaK0eQGv1 AFqrB9BaPYDW6gG0Vg+gtXoArdUDaK0eQGv1AFqrB9BaPYDW6gG0Vg+gtXoArdUDaK0eQGv1AFqr B9BaPYDW6gG0Vg+gtXoArdUDaK0eQGv1AFqrB9BaPYDW6gG0Vg+gtXoArdUDaK0eQGv1AFqrB9Ba PYDW6gG0Vg+gtXoArdUDaK0eQGv1AFqrB9BaPYDW6gG0Vg+gtXoArdUDaK0eQGv1AFqrB9BaPYDW 6gG0Vg+gtXoArdUDaK0eQGv1AFqrB9BaPYDW6gG0Vg+gtXoArdUDaK0eQGvX6wWUru9aPYHStV3U Eyhd7Go9gdLVfVpPoPTpLtcTKF3epXoCpUvb7XoDndvbbtUj6Nx6HcDNegSdm68DuHG3XkHl7o3X AexVPYPKq++e/+48qHfQeHDn+wB2vx5C4/4Pz3/3vB9wpIt7Pwawh/UUCg/3k8f1Fj68x/95/nv0 tF7Dh/b00RsB7LPn9R4+rOef7WeevawX8SF9/rf9wgsFHOTzF/uVZ/4VOMbzZ3uLJ34SPMTTz/ZW j/w2eITHj/ZbHnpN8KN38XC/49597wx91B7cv7ffd+cTnw/4aN19dWd/7MbNWz4n+BG6fevmjXd4 /D+4dPnK1Ytr/t/gR+H6tYurVy5fevuT/hfkmJk6LK4sRwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAy MS0wNy0xN1QwMDoxMzowMyswODowMPUw7P4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDctMTdU MDA6MTM6MDMrMDg6MDCEbVRCAAAAIHRFWHRzb2Z0d2FyZQBodHRwczovL2ltYWdlbWFnaWNrLm9y Z7zPHZ0AAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAYdEVYdFRodW1iOjpJ bWFnZTo6SGVpZ2h0ADUxMo+NU4EAAAAXdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgANTEyHHwD3AAA ABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAx NjI2NDUxOTgzljYHGgAAABJ0RVh0VGh1bWI6OlNpemUANzgwMUJCNsELpgAAAEZ0RVh0VGh1bWI6 OlVSSQBmaWxlOi8vL2FwcC90bXAvaW1hZ2VsYy9pbWd2aWV3Ml85XzE2MjM5MTEyNjg2NzcxMjk2 XzgwX1swXUBJ5xQAAAAASUVORK5CYII="
  }));
};
/* harmony default export */ var uni = (uni_SvgUni);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/miniProgram.svg


var miniProgram_SvgMiniProgram = function SvgMiniProgram(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    className: "miniProgram_svg__icon",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("style", null)), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M512 0a512 512 0 10512 512A512 512 0 00512 0zm256.717 460.186a151.962 151.962 0 01-87.347 65.74 83.251 83.251 0 01-24.474 4.096 29.082 29.082 0 010-58.163 15.667 15.667 0 006.451-1.229 91.443 91.443 0 0055.91-40.96 75.264 75.264 0 0011.06-39.628c0-45.978-42.496-83.866-94.31-83.866a105.267 105.267 0 00-51.2 13.414 81.92 81.92 0 00-43.725 70.452v244.224a138.445 138.445 0 01-72.704 120.422 159.642 159.642 0 01-79.77 20.48c-84.378 0-153.6-63.488-153.6-142.029a136.192 136.192 0 0119.763-69.837 151.962 151.962 0 0187.347-65.74 85.914 85.914 0 0124.474-4.096 29.082 29.082 0 110 58.163 15.667 15.667 0 00-6.451 1.229 95.949 95.949 0 00-55.91 40.96 75.264 75.264 0 00-11.06 39.628c0 45.978 42.496 83.866 94.925 83.866a105.267 105.267 0 0051.2-13.414 81.92 81.92 0 0043.622-70.452V390.35a138.752 138.752 0 0172.807-120.525 151.245 151.245 0 0179.155-21.504c84.378 0 153.6 63.488 153.6 142.029a136.192 136.192 0 01-19.763 69.837z"
  }));
};
/* harmony default export */ var miniProgram = (miniProgram_SvgMiniProgram);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/check.svg


var check_SvgCheck = function SvgCheck(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M6.106 14.064a61.684 61.684 0 013.795-4.752 55.586 55.586 0 011.743-1.903c.5-.517.996-.99 1.472-1.436.812-.76 1.761-1.602 2.358-1.962L14.712 3c-1.106.691-2.17 1.43-2.991 1.998-.479.33-.923.648-1.342.951-.414.3-.842.63-1.294.975a68.96 68.96 0 00-2.766 2.24l-2.447-2.31L1 9.116l5.106 4.947z",
    fill: "#FF7626",
    fillRule: "nonzero"
  }));
};
/* harmony default export */ var check = (check_SvgCheck);
// CONCATENATED MODULE: ./src/components/svg_icons/svg/close.svg


var close_SvgClose = function SvgClose(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", extends_default()({
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/react_default.a.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    d: "M0 0h16v16H0z"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M9.586 8.364l4.889 4.889a.864.864 0 01-1.222 1.222L8.364 9.586l-4.889 4.889a.864.864 0 01-1.222-1.222l4.889-4.889-4.889-4.889a.864.864 0 111.222-1.222l4.889 4.889 4.889-4.889a.864.864 0 011.222 1.222L9.586 8.364z",
    fill: "#828594"
  })));
};
/* harmony default export */ var svg_close = (close_SvgClose);
// CONCATENATED MODULE: ./src/components/svg_icons/index.js














































































/* harmony default export */ var svg_icons = __webpack_exports__["a"] = ({
  RequestSvg: requestIcon,
  AppMessage: app_message,
  GithubCircle: githubCircle,
  NewFlag: new_flag,
  Click1: click1,
  Click2: click2,
  BackToTop: backTop,
  Total: Total,
  Customers: customers,
  Pages: pages,
  ZiDingYi: zidingyi,
  Error: error,
  ErrorRed: error_red,
  Link: svg_link,
  Request: request,
  Resource: resource,
  ScreenShot: screenShot,
  Foot: foot,
  More: more,
  Menu: menu,
  MenuIn: menu_in,
  MenuOut: menu_out,
  HistoryRecord: history_record,
  FullScreen: fullScreen,
  ExitFullScreen: exitFullScreen,
  Book: book,
  Files: files,
  Word: word,
  Map: map,
  Video: video,
  Group: group,
  User: user,
  GroupRed: group_red,
  Refresh: refresh,
  Support: support,
  WeChat: wx,
  WechatCircle: wechat_circle,
  WeChatIcon: wechat,
  ZhiFuBao: zfb,
  OldCus: oldCus,
  NewCus: newCus,
  Debugger: svg_debugger,
  Debug: debug,
  DebugActive: debug_active,
  Connected: connected,
  Connect: connect,
  Disconnect: disconnect,
  Health: health,
  Performance: performance,
  Send: send,
  AvgTime: avg_time,
  Count: count,
  StatusOne: status_one,
  StatusTwo: status_two,
  StatusThree: status_three,
  StatusFour: status_four,
  StatusFive: status_five,
  Fix: fix,
  Local: local,
  Publish: publish,
  Email: email,
  Coffee: coffee,
  Docker: docker,
  Jrtt: jrtt,
  Email126: _126Email,
  Email163: _163Email,
  Foxmail: foxmail,
  Gmail: gmail,
  QQEmail: qqEmail,
  Sina: sina,
  Bilibili: bilibili,
  DownloadPPT: downloadPPT,
  H5: h5,
  Uni: uni,
  MiniProgram: miniProgram,
  PC: pc,
  Check: check,
  Close: svg_close
});

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAApdJREFUWEftl02oTVEUx39/ioSJGb1MXlEkyshMSL0UAyOKIgYiXgYM5WUgA8LDwOANyJsJg2fg602Y+yqkCLlGBhhIsbS8fW7n7nPP2eee65WBPTxnrb1+62OvvbboYZnZALAF2AQMAouCegt4DUwANyW9r7ut6giamRs6DuwCZiZ0fgJjLi/pQ2r/JICZbQauAvNTm0X/vwA7JN2q0qsEMLODwBlgRo/GM3EDDkk6X6ZfChA8vwHEMs+By8Ad4F3YeDGwEdgDLI+M/QK2SvK9CqsrQMj5iyjsP4DDwCVJvmlhmZlHah9wGpiVE/gKLJH0KVYqA3AP3ZtsufEhSffrpMLM1gG3I4gxSbuTAOGovY2q/YCkC3WMt5Nvth8Yzel41AYk+ZFtr0IErKj4FFhVFvYyqJCOJ1FNeEGeSwF4MxnKCQ1LOtuL97koDIdTlH2akORNrDICL71gcjIrJD1rCLAM8FOTrVeSlqYAvGLn5YTmSPreEMCblzekdjFLml0ACIV3ClgLLOwQkJLdsgrOzLwZ5ZcX4SRwxFu1gvHHwIJuG+nvA2RmPgMrHeAasK3Mi2kEcJPjDvAxDvs0p6AjHQ4Q56gjGNMcAf4D/BMRqCrClqRs7mvSi0jUWCt1DMclbW9kOSglAP4cQ590uzWiqUZRY7AsAzSzucC3kv9T+/vPqBX7p3ar7NP7NcCjylbcj4GUrpldDCNaJlqYivq6aBKX0GrgIZC//dbHY13PAGbmw+YIsLNLC/eHyBV/HQHXcy8nZ/UxbzCerJoAnASOpsIf/fd5cIOkB7FeE4DKy6sEbETSsa7XfY+e+InpBcA99zflibKhtkkE6qbgDbBX0r0qJ5sAVBWhj1t3w+t4UlLlVe9gvwGgaRVe0lE5MwAAAABJRU5ErkJggg=="

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./6.jpeg": 43,
	"./85.jpeg": 44,
	"./9.jpeg": 45,
	"./95.jpeg": 46,
	"./lijichoujiang.jpeg": 47,
	"./luck_draw_bg.jpeg": 48,
	"./xiexiecanyu.jpeg": 49
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 28;

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_form_item_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50);
/* harmony import */ var _styles_form_item_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_form_item_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(75);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(73);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(56);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(74);
/* harmony import */ var _contactUs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(32);
/* harmony import */ var Components_svg_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(20);





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







// import HttpUtil from "Common/http-util"
var Header = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Header, _Component);
  var _super = _createSuper(Header);
  function Header(props) {
    var _this;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Header);
    _this = _super.call(this, props);
    _this.state = {
      starCount: 0,
      desList: [{
        name: "前端监控系统",
        url: "./des.html",
        target: ""
      }, {
        name: "埋点系统",
        url: "./desEvent.html",
        target: ""
      }, {
        name: "常见问题",
        url: "./faq.html",
        target: ""
      }],
      helpList: [
      // {
      //   name: "关于开源",
      //   url: "./faq.html?tab=2",
      //   target: "_blank"
      // },
      {
        name: "问/答(FAQ)",
        url: "./faq.html",
        target: "_blank"
      }]
    };
    return _this;
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var userTagArray = ["角色A", "角色B", "角色C", "角色D"];
      var tagIndex = Math.ceil(Math.random() * 3);
      window.localStorage.wmUserInfo = JSON.stringify({
        userId: _common_utils__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].getWfCookie("monitorCustomerKey"),
        userTag: userTagArray[tagIndex],
        projectVersion: "1.0.3"
      });
      document.getElementById("progress_bar").style.display = "none";
      var hideHeader = this.props.hideHeader;
      $(window).scroll(function () {
        var top = $(document).scrollTop();
        var addStyle = "";
        if (hideHeader === "hide") {
          addStyle = "headerHome-hide";
        } else {
          addStyle = "headerHome-scroll-container";
        }
        if (top > 60) {
          $(".headerHome-container").addClass(addStyle);
        } else if (top < 20) {
          $(".headerHome-container").removeClass(addStyle);
        }
      });
      var pathname = window.location.pathname;
      window.webfunnyEvent(3).trackEvent({
        yong_hu_id: _common_utils__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].getWfCookie("monitorCustomerKey"),
        ye_mian_biao_shi: pathname
      });

      // 加载在线客服
      // if (pathname === "/home.html" || pathname === "/" || pathname === "/purchase.html") {
      //   Utils.loadJs("https://www.yingyuchat.com/static/js/warbler-front.js", () => {
      //     WARBLER.init({
      //       WARBLER_URL: "https://www.yingyuchat.com",
      //       WARBLER_KEFU_ID: "a826604005",
      //       WARBLER_ENT: "462"
      //     })
      //   })
      // }
    }
  }, {
    key: "render",
    value: function render() {
      var desList = this.state.desList;
      var url = window.location.href.split("?")[0];
      // 扫码添加微信
      var scanQrCode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "qrcode-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "//www.webfunny.cn/resource/wf_wxq2.png?r=".concat(Math.random())
      }));
      var desMenu = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
        className: "menu-header des-dropdown-container"
      }, desList.map(function (menuName, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].Item, {
          key: index,
          className: "menu-header-dropdown"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          className: "userInfo-box",
          target: menuName.target,
          href: menuName.url
        }, menuName.icon, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "item-name"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, menuName.name))));
      }));
      // const helpInfoMenu =
      //   <Menu>
      //     {
      //       helpList.map((menuName, index) => {
      //         return <Menu.Item key={ index }>
      //           <a className="userInfo-box" target={menuName.target} href={menuName.url}>
      //             {menuName.icon} <div className="item-name"><span>{menuName.name}</span></div>
      //           </a>
      //         </Menu.Item>
      //       })
      //     }
      //   </Menu>
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "headerHome-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "sub-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "menu-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "home-icon",
        onClick: this.turnToHome.bind(this)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        style: {
          width: 160
        },
        src: __webpack_require__(42)
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        style: {
          color: url.indexOf("home.html") !== -1 ? "#FF6A00" : "#393F56"
        },
        className: "menu-right",
        onClick: this.turnToQuickStart.bind(this, "home.html")
      }, "\u76D1\u63A7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        style: {
          color: url.indexOf("eventPoint.html") !== -1 ? "#FF6A00" : "#393F56"
        },
        className: "menu-right",
        onClick: function onClick() {
          setTimeout(function () {
            window.location.href = "./eventPoint.html";
          }, 200);
        }
      }, "\u57CB\u70B9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: url.indexOf("des.html") !== -1 || url.indexOf("desEvent.html") !== -1 || url.indexOf("faq.html") !== -1 ? "menu-right menu-short menu-choose" : "menu-right menu-short"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
        overlay: desMenu,
        trigger: ["hover"]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "ant-dropdown-link"
      }, "\u6587\u6863 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
        type: "down"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        style: {
          color: url.indexOf("update.html") !== -1 ? "#FF6A00" : "#393F56"
        },
        className: "menu-right",
        href: "./update.html"
      }, "\u66F4\u65B0\u65E5\u5FD7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "menu-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        style: {
          color: url.indexOf("purchase.html") !== -1 ? "#FF6A00" : "#393F56"
        },
        onClick: function onClick() {
          window.webfunnyEvent(5).trackEvent({
            yong_hu_id: _common_utils__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].getWfCookie("monitorCustomerKey"),
            dian_ji_xing_wei: "purchase"
          });
          setTimeout(function () {
            window.location.href = "./purchase.html";
          }, 200);
        }
      }, "\u4EF7\u683C")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        style: {
          color: url.indexOf("aboutUs.html") !== -1 ? "#FF6A00" : "#393F56"
        },
        className: "menu-right",
        href: "./aboutUs.html"
      }, "\u5173\u4E8E")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "menu-container menu-container-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "menu-right",
        onMouseEnter: function onMouseEnter() {
          window.webfunnyEvent(5).trackEvent({
            yong_hu_id: _common_utils__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].getWfCookie("monitorCustomerKey"),
            dian_ji_xing_wei: "菜单位置-联系我们"
          });
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
        placement: "topLeft",
        title: ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        placement: "topLeft",
        title: "欢迎扫码进群沟通",
        content: scanQrCode,
        trigger: "hover"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
        style: {
          fontSize: 16
        },
        component: Components_svg_icons__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"].WeChatIcon
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        style: {
          color: "#393F56",
          marginTop: 20,
          cursor: "pointer"
        },
        className: "menu-right",
        target: "_blank",
        onClick: function onClick() {
          window.webfunnyEvent(5).trackEvent({
            yong_hu_id: _common_utils__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].getWfCookie("monitorCustomerKey"),
            dian_ji_xing_wei: "github"
          });
          window.open("https://github.com/a597873885/webfunny_monitor");
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
        title: "\u7814\u53D1\u4E0D\u6613\uFF0C\u9700\u8981\u9F13\u52B1\uFF0C\u5FEB\u6765\u5E2E\u6211\u4EEC\u70B9\u4E2AStar\u5427\uFF0C\u87F9\u87F9 ^_^"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "https://img.shields.io/github/stars/a597873885/webfunny_monitor.svg?style=social&label=Star"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        style: {
          color: "#393F56"
        },
        className: "menu-right",
        href: "https://www.webfunny.cn/blog/"
      }, "\u535A\u5BA2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "menu-right menu-banner-btn"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
        shape: "round",
        className: "header-banner-btn",
        onClick: function onClick() {
          window.location.href = window.location.pathname.indexOf("eventPoint") !== -1 ? "./desEvent.html" : "./des.html#quickstart-env";
        }
      }, "\u7ACB\u5373\u90E8\u7F72")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_contactUs__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], null));
    }
  }, {
    key: "getSourceCode",
    value: function getSourceCode() {
      antd__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].confirm({
        title: "友情提示",
        content: "源码需要付费，有意者请加我的微信私聊。 请扫码或者搜索微信号 webfunny_2020",
        okText: "我知道了",
        cancelText: "取消",
        iconType: "warning",
        onOk: function onOk() {}
      });
    }
  }, {
    key: "turnToQuickStart",
    value: function turnToQuickStart(page) {
      window.location.href = "./" + page;
    }
  }, {
    key: "turnToHome",
    value: function turnToHome() {
      window.open("http://www.webfunny.cn/home.html");
    }
  }, {
    key: "turnToBlog",
    value: function turnToBlog() {
      window.open("https://github.com/a597873885/webfunny_monitor");
    }
  }, {
    key: "turnTo",
    value: function turnTo(url) {
      if (!url) return;
      window.location.href = "./" + url;
    }
  }]);
  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(40)))

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);



var Utils = /*#__PURE__*/function () {
  function Utils() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Utils);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Utils, null, [{
    key: "isArray",
    value: function isArray(object) {
      return Object.prototype.toString.call(object) === "[object Array]";
    }
  }, {
    key: "isObject",
    value: function isObject(object) {
      return Object.prototype.toString.call(object) === "[object Object]";
    }
  }, {
    key: "randomNumber",
    value: function randomNumber(n, m) {
      var random = Math.floor(Math.random() * (m - n + 1) + n);
      return random;
    }
  }, {
    key: "b64EncodeUnicode",
    value: function b64EncodeUnicode(str) {
      return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode("0x" + p1);
      }));
    }
  }, {
    key: "b64DecodeUnicode",
    value: function b64DecodeUnicode(str) {
      try {
        return decodeURIComponent(atob(str).split("").map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(""));
      } catch (e) {
        return Utils.b64DecodeUnicodeWithSpace(str);
      }
    }
  }, {
    key: "b64DecodeUnicodeWithSpace",
    value: function b64DecodeUnicodeWithSpace(tempStr) {
      if (!tempStr) return "";
      var str = "";
      try {
        str = tempStr.replace(/ /g, "+");
        return decodeURIComponent(atob(str).split("").map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(""));
      } catch (e) {
        return str;
      }
    }
  }, {
    key: "b64DecodeUnicodeBehavior",
    value: function b64DecodeUnicodeBehavior(tempStr) {
      if (!tempStr) return "";
      var str = tempStr.replace(/ /g, "+");
      try {
        return decodeURIComponent(atob(str).split("").map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(""));
      } catch (e) {
        return tempStr;
      }
    }
  }, {
    key: "qs",
    value: function qs(object, cache) {
      var arr = [];
      function inner(innerObj, prefix) {
        var _loop = function _loop(prop) {
          if (!innerObj.hasOwnProperty(prop)) return {
            v: void 0
          };
          var textValue = innerObj[prop];
          if (!Utils.isArray(textValue)) {
            if (Utils.isObject(textValue)) inner(textValue, prefix ? prefix + "." + prop : prop);else arr.push(encodeURIComponent((prefix ? prefix + "." : "") + prop) + "=" + encodeURIComponent(textValue || ""));
          } else {
            textValue.forEach(function (val) {
              arr.push(encodeURIComponent((prefix ? prefix + "." : "") + prop + "[]") + "=" + encodeURIComponent(val || ""));
            });
          }
        };
        for (var prop in innerObj) {
          var _ret = _loop(prop);
          if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(_ret) === "object") return _ret.v;
        }
      }
      inner(object, "");
      if (cache && !object._) {
        arr.push("_=" + encodeURIComponent(BUILD_NO));
      }
      return arr.length ? "?" + arr.join("&") : "";
    }
  }, {
    key: "parseQs",
    value: function parseQs() {
      var s = window.location.search;
      var index = s.indexOf("?");
      var result = {};
      if (index === -1) return result;
      var arr = s.substr(index + 1).split("&");
      arr.forEach(function (item) {
        var equals = item.split("=");
        var key = decodeURIComponent(equals[0]);
        var val = decodeURIComponent(equals[1] || "");
        var i = 0;
        var splitting = key.split(".");
        var len = splitting.length;
        key = splitting[len - 1];
        var temp = result;
        if (len > 1) {
          for (; i < len - 1; i++) {
            if (!temp[splitting[i]] || !CommonTool.isObject(temp[splitting[i]])) temp[splitting[i]] = {};
            temp = temp[splitting[i]];
          }
        }
        if (key.substr(-2) !== "[]") {
          temp[key] = val;
        } else {
          key = key.substr(0, key.length - 2);
          if (!temp[key]) temp[key] = [val];else temp[key].push(val);
        }
      });
      return result;
    }

    // 快速排序
  }, {
    key: "quickSort",
    value: function quickSort(arr) {
      // 如果数组<=1,则直接返回
      if (arr.length <= 1) {
        return arr;
      }
      var pivotIndex = Math.floor(arr.length / 2);
      // 找基准，并把基准从原数组删除
      var pivot = arr.splice(pivotIndex, 1)[0];
      // 定义左右数组
      var left = [];
      var right = [];

      // 比基准小的放在left，比基准大的放在right
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] <= pivot) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }
      // 递归
      return Utils.quickSort(left).concat([pivot], Utils.quickSort(right));
    }
  }, {
    key: "showLoading",
    value: function showLoading() {}
    // 获取24小时数组
  }, {
    key: "get24HoursArray",
    value: function get24HoursArray() {
      var dateTime = new Date().getTime();
      var hourArray = [];
      for (var i = 0; i < 24; i++) {
        var tempDateTime = dateTime - i * 60 * 60 * 1000;
        var hour = new Date(tempDateTime).Format("MM-dd hh");
        hourArray.push(hour);
      }
      return hourArray;
    }
    // 根据timeSize获取小时数组
  }, {
    key: "getHoursArrayByTimeSize",
    value: function getHoursArrayByTimeSize(timeSize) {
      var dateTime = new Date().getTime();
      var hourArray = [];
      for (var i = 0; i < timeSize; i++) {
        var tempDateTime = dateTime - i * 60 * 60 * 1000;
        var hour = new Date(tempDateTime).Format("MM-dd hh");
        hourArray.push(hour);
      }
      return hourArray;
    }
    // 根据timeSize获取七天前小时数组
  }, {
    key: "getSevenDaysAgoHoursArrayByTimeSize",
    value: function getSevenDaysAgoHoursArrayByTimeSize(timeSize) {
      var dateTime = new Date().getTime() - 7 * 24 * 60 * 60 * 1000;
      var hourArray = [];
      for (var i = 0; i < timeSize; i++) {
        var tempDateTime = dateTime - i * 60 * 60 * 1000;
        var hour = new Date(tempDateTime).Format("MM-dd hh");
        hourArray.push(hour);
      }
      return hourArray;
    }
  }, {
    key: "getSevenDaysAgo24HoursArray",
    value: function getSevenDaysAgo24HoursArray() {
      var dateTime = new Date().getTime() - 7 * 24 * 60 * 60 * 1000;
      var hourArray = [];
      for (var i = 0; i < 24; i++) {
        var tempDateTime = dateTime - i * 60 * 60 * 1000;
        var hour = new Date(tempDateTime).Format("MM-dd hh");
        hourArray.push(hour);
      }
      return hourArray;
    }
  }, {
    key: "loadJs",
    value: function loadJs(url, onload) {
      var script = document.createElement("script");
      script.async = 1;
      script.onload = typeof onload === "function" ? onload : function () {};
      script.src = url;
      var dom = document.getElementsByTagName("script")[0];
      dom.parentNode.insertBefore(script, dom);
    }
    // 深拷贝方法. 注意: 如果对象里边包含function, 则对function的拷贝依然是浅拷贝
  }, {
    key: "deepCopy",
    value: function deepCopy(o) {
      if (o instanceof Array) {
        var n = [];
        for (var i = 0; i < o.length; ++i) {
          n[i] = this.deepCopy(o[i]);
        }
        return n;
      } else if (o instanceof Object) {
        var _n = {};
        for (var _i in o) {
          _n[_i] = this.deepCopy(o[_i]);
        }
        return _n;
      }
      return o;
    }
  }, {
    key: "addDays",
    value: function addDays(dayIn) {
      var CurrentDate = "";
      var date = new Date();
      var myDate = new Date(date.getTime() + dayIn * 24 * 60 * 60 * 1000);
      var year = myDate.getFullYear();
      var month = myDate.getMonth() + 1;
      var day = myDate.getDate();
      CurrentDate = year + "-";
      if (month >= 10) {
        CurrentDate = CurrentDate + month + "-";
      } else {
        CurrentDate = CurrentDate + "0" + month + "-";
      }
      if (day >= 10) {
        CurrentDate = CurrentDate + day;
      } else {
        CurrentDate = CurrentDate + "0" + day;
      }
      return CurrentDate;
    }
  }, {
    key: "toFixed",
    value: function toFixed(tempNum, s) {
      var num = tempNum;
      var times = Math.pow(10, s);
      if (num < 0) {
        num = Math.abs(num); //先把负数转为正数，然后四舍五入之后再转为负数
        var _des = parseInt(num * times + 0.5, 10) / times;
        return -_des;
      }
      var des = parseInt(num * times + 0.5, 10) / times;
      var finalDes = des;
      var tempDes = des + "";
      if (tempDes.indexOf(".") !== -1) {
        var start = tempDes.split(".")[0];
        var end = tempDes.split(".")[1];
        if (end.length > s) {
          end = end.substring(0, 2);
        }
        finalDes = start + "." + end;
      }
      return finalDes;
    }
  }, {
    key: "getCookie",
    value: function getCookie(name) {
      var arr;
      var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      if (document.cookie.match(reg)) {
        arr = document.cookie.match(reg);
        return unescape(arr[2]);
      }
      return "";
    }
    /**
     * key cookie的key
     * value cookie的值
     * extraTime cookie过期的时间
     */
  }, {
    key: "setCookie",
    value: function setCookie(key, value, extraTime) {
      var exp = new Date();
      exp.setTime(exp.getTime() + extraTime);
      var hostname = window.location.hostname;
      document.cookie = key + "=" + value + ";Path=/;domain=" + hostname + ";expires=" + exp.toGMTString();
    }

    /**
     * 获取模拟cookie
     */
  }, {
    key: "getWfCookie",
    value: function getWfCookie(key) {
      var webfunnyCookie = null;
      if (localStorage.WEBFUNNY_COOKIE) {
        webfunnyCookie = JSON.parse(localStorage.WEBFUNNY_COOKIE);
        var wfData = webfunnyCookie[key];
        if (!wfData) return "";
        var expires = parseInt(wfData.expires, 10);
        var nowTime = new Date().getTime();
        // 数据过期了，则删除这个数据
        if (nowTime > expires) {
          delete webfunnyCookie[key];
          localStorage.WEBFUNNY_COOKIE = JSON.stringify(webfunnyCookie);
          return "";
        }
        return wfData.data;
      }
      return "";
    }

    // 字符串去重
  }, {
    key: "removeDuplicateForString",
    value: function removeDuplicateForString(str) {
      var arr = str.split("");
      var mySet = new Set(arr);
      var resArr = Array.from(mySet);
      var resStr = resArr.join("");
      return resStr;
    }

    //获取url参数
  }, {
    key: "getQueryVariable",
    value: function getQueryVariable(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var result = window.location.search.substr(1).match(reg);
      if (result !== null) return unescape(result[2]);
      return null;
    }

    //set url params
  }, {
    key: "updateQueryStringParameter",
    value: function updateQueryStringParameter(uri, key, value) {
      if (!value) {
        return uri;
      }
      var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
      var separator = uri.indexOf("?") !== -1 ? "&" : "?";
      if (uri.match(re)) {
        return uri.replace(re, "$1" + key + "=" + value + "$2");
      }
      return uri + separator + key + "=" + value;
    }
  }]);
  return Utils;
}();


/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _headerHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _headerHome__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ }),

/***/ 31:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAA/9JREFUSEu9ll9oHFUUxr8zu0maZNOi9qUVWjUWiv9AqY0EhBQFa0wyu21yZxa1oi0+WdCCf6APUhCxL1YoolIEEerOTCbZmaSJppQWpPUh5qEtiIi0lELEiLa1tYY0O/PJZrtlk53dbBfpfbtzzj2/e75z7r0juMND7jAPdQEztveZADtI/i4i50GOaVpsWKm+i8slUBfQsrwTBLtKg4tIDuSh5mZtn67rM5XAdQEd56fGQH7tkEDuBcInIZIieX8BIjOIYVt6IPlDFLQMODQ0tn4+N/8OgPsa4vHd27f3nF9OJpKabfsvUfgRiDUiMieAbhjJiaVrFwGtwZHnGYSHAd61sFfIhcbG5o5t2577o3Sh63oduRDPErzY0qQdLUro+/7af2fpA9wkgr810TqU0n9ZJH1x4rr+47mAJ0m2LHE4ahjJrSLC4nfL9s6SfHRhU4JAIPtFNuxT6uEbjvPd3WE4O0mgHYKTaSP1dCTQsrxTBDsj5dOwK61SXxZttj2iiPA1AJ0k227W7mxbIt7V09Nz2XX9TbmAkyQlpmm6UvpIce0tSTOWNwtwRSRQ8NeqtqYHuru7r5bap6amGs6dm95JhB+TaBbIN6aZfDHvk7GzNggFkbG0keyJAGYvAFhfqUE0kT2GkTwQZS/UPhhfkDgW6zYH+r61ba87JMfyDaTJqtVKbfmn0Bc3R8bOfgXilYodKfJe2kjur2TP2J4Psg8CJ22kjPHx8aar1+auk4jFtHiHUr2Ti4GDXicCnoo8OyJXNFnRrtTWS5WAlpV9k8ABAX42zdRDC7Ja3jTAtZogZRgpbxEwP7Fs7zjJLWVnR8QyjWS6YvYAXNd/bD4XnhHBj6aR2lyoo3cE5AsxLfaMUn3Hy4CZwWwXApwoDyy/tTTLRl3Xr1WDWtaRRxIJTOc7Ne/n+37b3FzYrlTqdFnTFD9YVvYLAq+XBRZxTaWr0vNYDV7JVna1TUxMtF6+Mnua5IPl0mqfmIb+Vj2gihnmDY4zujlk8D3JpohMPzWVvrveTCu+Fo7j9QchbQBaWaaAn0g0vJqvlWWNPgHkdgBaAtAOmmbvmWoKVH2eLMd/g2F4MDqA5BtjBuDGW3Ll71vy0MqVTW8vvZWqSloKsBxvL0N+cDt1y78y8bgM9PfrUxHqLB8q42R3CuVzkvHlvQseIpgV4GXDSA2Vrqn5xS/cjXAAttYOlVxrS2xNb2/vnzVLWhrcdUc35ILga5JP1QIVwSVDJVeXdnTNGRYBjsNYQP9dAd8n0VgNrIl8aBjJvXVJujSw44ysC8NgDyG7omQWEU8TvV8pCf4XYDHI8PCxe27krqfB/G8j1wEyDYprmvrhqOxvW9JaalfN5z8GAZ4s9aFveQAAAABJRU5ErkJggg=="

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ contactUs_contactUs; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(4);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(5);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(10);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(11);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(12);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(6);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(7);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./src/components/contactUs/index.scss
var components_contactUs = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/antd/es/icon/index.js + 4 modules
var icon = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 6 modules
var modal = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 3 modules
var message = __webpack_require__(395);

// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 3 modules
var input = __webpack_require__(658);

// EXTERNAL MODULE: ./src/common/http-util.js
var http_util = __webpack_require__(14);

// EXTERNAL MODULE: ./src/common/http-api.js
var http_api = __webpack_require__(15);

// EXTERNAL MODULE: ./src/common/utils.js
var utils = __webpack_require__(3);

// EXTERNAL MODULE: ./src/assets/img/home/listerner.png
var listerner = __webpack_require__(25);
var listerner_default = /*#__PURE__*/__webpack_require__.n(listerner);

// EXTERNAL MODULE: ./src/assets/img/home/phone.png
var phone = __webpack_require__(31);
var phone_default = /*#__PURE__*/__webpack_require__.n(phone);

// CONCATENATED MODULE: ./src/components/contactUs/contactUs.js







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








var contactUs_contactUs = /*#__PURE__*/function (_Component) {
  inherits_default()(contactUs, _Component);
  var _super = _createSuper(contactUs);
  function contactUs(props) {
    var _this;
    classCallCheck_default()(this, contactUs);
    _this = _super.call(this, props);
    defineProperty_default()(assertThisInitialized_default()(_this), "getContactUsDom", function () {
      var contactUsDom = document.getElementsByClassName("o_livechat_button")[0]; //获取联系我们container
      if (!contactUsDom) {
        _this.timer = setTimeout(function () {
          _this.getContactUsDom();
        });
        return;
      }
      _this.setState({
        showContactUs: false
      });
      contactUsDom.addEventListener("click", _this.getContactUsFun);
      var liveChatDom = document.getElementsByClassName("o_livechat_open")[0]; //获取打开联系我们dom
      if (!liveChatDom) return;
      var image = document.createElement("img"); //创建联系我们img
      image.src = listerner_default.a;
      contactUsDom.insertBefore(image, liveChatDom);
      image.style.width = "16px";
      image.style.margin = "12px 0 7px";
    });
    defineProperty_default()(assertThisInitialized_default()(_this), "getContactUsFun", function () {
      _this.setState({
        showContactUs: false
      });
      window.webfunnyEvent(5).trackEvent({
        yong_hu_id: utils["a" /* default */].getWfCookie("monitorCustomerKey"),
        dian_ji_xing_wei: "联系我们"
      });
    });
    _this.state = {
      showContactUs: true,
      showLuckDrawFlag: false,
      couponList: [{
        name: "6折",
        per: "aa",
        img: "6"
      }, {
        name: "8.5折",
        per: "ab",
        img: "85"
      }, {
        name: "9折",
        per: "ac",
        img: "9"
      }, {
        name: "9.5折",
        per: "ad",
        img: "95"
      }, {
        name: "抽奖",
        img: "lijichoujiang"
      }, {
        name: "9.5折",
        per: "ad",
        img: "95"
      }, {
        name: "9折",
        per: "ac",
        img: "9"
      }, {
        name: "8.5折",
        per: "ab",
        img: "85"
      }, {
        name: "谢谢参与",
        per: "ae",
        img: "xiexiecanyu"
      }],
      imgList: {
        aa: "https://www.webfunny.cn/resource/luckDraw/res-6.png",
        ab: "https://www.webfunny.cn/resource/luckDraw/res-85.png",
        ac: "https://www.webfunny.cn/resource/luckDraw/res-9.png",
        ad: "https://www.webfunny.cn/resource/luckDraw/res-95.png",
        ae: "https://www.webfunny.cn/resource/luckDraw/res-xiexie.png"
      },
      showLuckDrawRes: false,
      luckDrawResImage: "",
      selectKey: -1,
      finalKey: "ae",
      finalId: "",
      showEmailAndCompanyDialog: false,
      email: "",
      luckDrawClickAble: true,
      luckDrawShowPoint: JSON.stringify({
        "pointId": 7,
        "yong_hu_id": utils["a" /* default */].getWfCookie("monitorCustomerKey"),
        "ye_mian_biao_shi": window.location.pathname,
        "puGuangNeiRong": "抽奖转盘曝光"
      }),
      luckDrawCloseBtnFlag: false
    };
    _this.timer = null;
    _this.luckDrawTimer1 = null;
    _this.luckDrawTimer2 = null;
    _this.luckDrawTimer3 = null;
    _this.startSelect = _this.startSelect.bind(assertThisInitialized_default()(_this));
    _this.mailboxValue = _this.mailboxValue.bind(assertThisInitialized_default()(_this));
    return _this;
  }
  createClass_default()(contactUs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getContactUsDom();

      /** 抽奖逻辑 开始 */
      // 首次进来一定弹框的逻辑
      // if (window.localStorage.showLuckDrawFirstTime !== "1") {
      //   this.setState({showLuckDrawFlag: true}, () => {
      //     window.localStorage.showLuckDrawFirstTime = "1"
      //   })
      // }
      // // 3秒钟后显示关闭按钮
      // setTimeout(() => {
      //   this.setState({luckDrawCloseBtnFlag: true})
      // }, 3000)
      /** 抽奖逻辑 结束 */
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timer);
      window.removeEventListener(this.getContactUsFun);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$state = this.state,
        showContactUs = _this$state.showContactUs,
        showLuckDrawFlag = _this$state.showLuckDrawFlag,
        couponList = _this$state.couponList,
        selectKey = _this$state.selectKey,
        showEmailAndCompanyDialog = _this$state.showEmailAndCompanyDialog,
        email = _this$state.email,
        luckDrawClickAble = _this$state.luckDrawClickAble,
        showLuckDrawRes = _this$state.showLuckDrawRes,
        luckDrawResImage = _this$state.luckDrawResImage,
        luckDrawCloseBtnFlag = _this$state.luckDrawCloseBtnFlag;
      return /*#__PURE__*/react_default.a.createElement("div", {
        className: "contact-us-container"
      },  false && /*#__PURE__*/false, showLuckDrawFlag && /*#__PURE__*/react_default.a.createElement("div", {
        className: "luck-draw-box"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "draw-box",
        onClick: function onClick(e) {
          e.stopPropagation();
        },
        "_webfunny-eo": this.state.luckDrawShowPoint
      }, luckDrawCloseBtnFlag === true && /*#__PURE__*/react_default.a.createElement(icon["a" /* default */], {
        className: "close-btn",
        type: "close-circle",
        onClick: function onClick() {
          _this2.setState({
            showLuckDrawFlag: false
          });
          window.webfunnyEvent(5).trackEvent({
            yong_hu_id: utils["a" /* default */].getWfCookie("monitorCustomerKey"),
            dian_ji_xing_wei: "关闭抽奖界面"
          });
        }
      }), /*#__PURE__*/react_default.a.createElement("div", {
        className: "list-box"
      }, couponList.map(function (item, index) {
        if (index === 4) {
          return /*#__PURE__*/react_default.a.createElement("div", {
            key: index,
            className: "draw-item-start  ".concat(luckDrawClickAble === false ? "draw-item-disable" : ""),
            onClick: _this2.inputEmailAndCompany.bind(_this2)
          }, /*#__PURE__*/react_default.a.createElement("img", {
            style: {
              width: 50
            },
            src: __webpack_require__(28)("./".concat(item.img, ".jpeg"))
          }));
        }
        return /*#__PURE__*/react_default.a.createElement("div", {
          key: index,
          className: "draw-item ".concat(selectKey === index ? "draw-item-sel" : "")
        }, /*#__PURE__*/react_default.a.createElement("img", {
          src: __webpack_require__(28)("./".concat(item.img, ".jpeg"))
        }), index !== 8 && /*#__PURE__*/react_default.a.createElement("span", null, item.name));
      }))), showLuckDrawRes === true && /*#__PURE__*/react_default.a.createElement("div", {
        className: "luck-draw-res",
        onClick: function onClick(e) {
          e.stopPropagation();
        }
      }, /*#__PURE__*/react_default.a.createElement("img", {
        src: luckDrawResImage,
        onClick: function onClick(e) {
          e.stopPropagation();
          _this2.setState({
            showLuckDrawRes: false
          });
          window.webfunnyEvent(5).trackEvent({
            yong_hu_id: utils["a" /* default */].getWfCookie("monitorCustomerKey"),
            dian_ji_xing_wei: "我知道了"
          });
        }
      }))), showContactUs && /*#__PURE__*/react_default.a.createElement("div", {
        className: "reach-me",
        onMouseEnter: function onMouseEnter() {
          window.webfunnyEvent(5).trackEvent({
            yong_hu_id: utils["a" /* default */].getWfCookie("monitorCustomerKey"),
            dian_ji_xing_wei: "联系我们"
          });
        }
      }, /*#__PURE__*/react_default.a.createElement("img", {
        src: listerner_default.a
      }), /*#__PURE__*/react_default.a.createElement("span", {
        className: "reach-our"
      }, "\u8D2D\u4E70\u54A8\u8BE2"), /*#__PURE__*/react_default.a.createElement("div", {
        className: "buy-qr-code"
      }, /*#__PURE__*/react_default.a.createElement("p", {
        className: "title"
      }, /*#__PURE__*/react_default.a.createElement("span", null, /*#__PURE__*/react_default.a.createElement("b", null, "\u4F01\u4E1A\u8BD5\u7528"), "\uFF0C\u53EF\u8054\u7CFB\u6211\u4EEC", /*#__PURE__*/react_default.a.createElement("br", null), "\u76F4\u63A5\u5EFA\u7FA4")), /*#__PURE__*/react_default.a.createElement("img", {
        className: "qr-code-img",
        src: "https://www.walkingfunny.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fqr-code2.2065d361.png&w=256&q=75"
      }), /*#__PURE__*/react_default.a.createElement("div", {
        className: "call"
      }, /*#__PURE__*/react_default.a.createElement("img", {
        src: phone_default.a,
        alt: ""
      }), "0519-88559985"))), showContactUs && /*#__PURE__*/react_default.a.createElement("div", {
        className: "wxq-box",
        onMouseEnter: function onMouseEnter() {
          window.webfunnyEvent(5).trackEvent({
            yong_hu_id: utils["a" /* default */].getWfCookie("monitorCustomerKey"),
            dian_ji_xing_wei: "交流群2"
          });
        }
      }, /*#__PURE__*/react_default.a.createElement(icon["a" /* default */], {
        type: "message"
      }), /*#__PURE__*/react_default.a.createElement("span", {
        className: "reach-our"
      }, "\u6280\u672F\u7FA4"), /*#__PURE__*/react_default.a.createElement("div", {
        className: "qr-code2"
      }, /*#__PURE__*/react_default.a.createElement("p", {
        className: "title"
      }, /*#__PURE__*/react_default.a.createElement("span", null, "\u6B22\u8FCE\u626B\u7801\u8FDB", /*#__PURE__*/react_default.a.createElement("b", null, "2"), "\u7FA4\u6C9F\u901A")), /*#__PURE__*/react_default.a.createElement("img", {
        src: "//www.webfunny.cn/resource/wf_wxq2.png?r=".concat(Math.random())
      }))), /*#__PURE__*/react_default.a.createElement(modal["a" /* default */], {
        title: "\u8BF7\u586B\u5199\u4F18\u60E0\u5238\u63A5\u6536\u90AE\u7BB1",
        centered: true,
        visible: showEmailAndCompanyDialog,
        onCancel: function onCancel() {
          _this2.setState({
            showEmailAndCompanyDialog: false
          });
          window.webfunnyEvent(5).trackEvent({
            yong_hu_id: utils["a" /* default */].getWfCookie("monitorCustomerKey"),
            dian_ji_xing_wei: "取消抽奖"
          });
        },
        onOk: function onOk() {
          window.webfunnyEvent(5).trackEvent({
            yong_hu_id: utils["a" /* default */].getWfCookie("monitorCustomerKey"),
            dian_ji_xing_wei: "开始抽奖"
          });
          var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
          if (!reg.test(_this2.state.email)) {
            message["a" /* default */].error("请输入正确的邮箱地址！");
            console.error("抽奖输入错误邮箱");
            return;
          }
          _this2.setState({
            showEmailAndCompanyDialog: false
          }, function () {
            http_util["a" /* default */].post(http_api["a" /* default */].getCouponInfo, {
              email: _this2.state.email
            }).then(function (res) {
              if (res.data === 1) {
                message["a" /* default */].error(res.msg);
              } else {
                var _res$data = res.data,
                  discount = _res$data.discount,
                  id = _res$data.id;
                var finalKey = utils["a" /* default */].b64DecodeUnicode(discount);
                _this2.setState({
                  finalKey: finalKey,
                  finalId: id
                }, function () {
                  _this2.startSelect();
                });
              }
            });
          });
        },
        okText: "\u5F00\u59CB\u62BD\u5956",
        cancelText: "\u53D6\u6D88",
        width: 568,
        className: "web-funny-mailbox"
      }, /*#__PURE__*/react_default.a.createElement("p", null, "\u8BF7\u586B\u5199\u6709\u6548\u7684\u90AE\u7BB1\u5730\u5740\uFF0C\u6BCF\u4E2A\u90AE\u7BB1\u4EC5\u9650\u4E00\u6B21\u62BD\u5956\u673A\u4F1A\u54E6\uFF01"), /*#__PURE__*/react_default.a.createElement("p", {
        className: "modal-text"
      }, /*#__PURE__*/react_default.a.createElement("span", null, "\u60A8\u7684\u90AE\u7BB1\uFF1A"), /*#__PURE__*/react_default.a.createElement(input["a" /* default */], {
        className: "email-input"
        // addonAfter={<Icon component={Email}/>}
        ,
        placeholder: "\u5C06\u53D1\u9001\u5230\u60A8\u7684\u90AE\u7BB1\uFF0C\u8BF7\u586B\u5199\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740",
        value: email,
        onChange: function onChange(e) {
          _this2.mailboxValue(e.target.value);
        }
      }))));
    }
  }, {
    key: "mailboxValue",
    value: function mailboxValue(email) {
      this.setState({
        email: email
      });
    }
  }, {
    key: "inputEmailAndCompany",
    value: function inputEmailAndCompany() {
      var luckDrawClickAble = this.state.luckDrawClickAble;
      if (luckDrawClickAble === false) return;
      this.setState({
        showEmailAndCompanyDialog: true
      });
      window.webfunnyEvent(5).trackEvent({
        yong_hu_id: utils["a" /* default */].getWfCookie("monitorCustomerKey"),
        dian_ji_xing_wei: "立即抽奖"
      });
    }
  }, {
    key: "startSelect",
    value: function startSelect() {
      var _this3 = this;
      this.setState({
        luckDrawClickAble: false
      });
      var _this$state2 = this.state,
        couponList = _this$state2.couponList,
        finalKey = _this$state2.finalKey,
        finalId = _this$state2.finalId;
      var indexArr = [0, 1, 2, 5, 8, 7, 6, 3];
      var tempIndex = 0;
      this.luckDrawTimer1 = setInterval(function () {
        tempIndex++;
        if (tempIndex > 7) {
          tempIndex = 0;
        }
        _this3.setState({
          selectKey: indexArr[tempIndex]
        });
      }, 200);
      setTimeout(function () {
        clearInterval(_this3.luckDrawTimer1);
        _this3.luckDrawTimer2 = setInterval(function () {
          tempIndex++;
          if (tempIndex > 7) {
            tempIndex = 0;
          }
          _this3.setState({
            selectKey: indexArr[tempIndex]
          });
        }, 100);
      }, 2000);
      setTimeout(function () {
        clearInterval(_this3.luckDrawTimer2);
        _this3.luckDrawTimer3 = setInterval(function () {
          tempIndex++;
          if (tempIndex > 7) {
            tempIndex = 0;
          }
          var finalIndex = indexArr[tempIndex];
          _this3.setState({
            selectKey: finalIndex
          });
          if (couponList[finalIndex].per === finalKey) {
            clearInterval(_this3.luckDrawTimer3);
          }
        }, 300);
      }, 5000);
      setTimeout(function () {
        http_util["a" /* default */].post(http_api["a" /* default */].sendCouponEmail, {
          id: finalId
        }).then(function () {
          _this3.setState({
            luckDrawClickAble: true,
            showLuckDrawRes: true,
            luckDrawResImage: _this3.state.imgList[finalKey]
          });
        })["catch"](function () {
          message["a" /* default */].error("网络异常，请稍后再试！");
        });
      }, 6500);
    }
  }, {
    key: "showLuckDraw",
    value: function showLuckDraw() {
      this.setState({
        showLuckDrawFlag: true
      });
      window.webfunnyEvent(5).trackEvent({
        yong_hu_id: utils["a" /* default */].getWfCookie("monitorCustomerKey"),
        dian_ji_xing_wei: "1111抽奖"
      });
    }
  }]);
  return contactUs;
}(react["Component"]);

// CONCATENATED MODULE: ./src/components/contactUs/index.js


/***/ }),

/***/ 37:
/***/ (function(module, exports) {

if (!String.prototype.format) {
  String.prototype.format = function () {
    var fmt = this;
    var params = Array.prototype.slice.call(arguments);
    return fmt.replace(/(\{(\d+)\})/g, function (match, firstCap, index) {
      return params[index] === undefined ? match : params[index];
    });
  };
}
if (!String.prototype.trim) {
  var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  String.prototype.trim = function () {
    return this.replace(rtrim, "");
  };
}
if (!Date.prototype.Format) {
  Date.prototype.Format = function (format) {
    // author: meizz
    var fmt = format;
    var o = {
      "M+": this.getMonth() + 1,
      // 月份
      "d+": this.getDate(),
      // 日
      "h+": this.getHours(),
      // 小时
      "m+": this.getMinutes(),
      // 分
      "s+": this.getSeconds(),
      // 秒
      "q+": Math.floor((this.getMonth() + 3) / 3),
      // 季度
      "S": this.getMilliseconds() // 毫秒
    };

    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
    return fmt;
  };
}
/**
 * @param num 需要处理的数值
 * @param s 需要保留的位数
 */
Number.prototype.toFixed = function (s) {
  var times = Math.pow(10, s);
  var des = this * times + 0.5;
  des = parseInt(des, 10) / times;
  return des + "";
};

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/assets/img/logo4.png";

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/assets/img/contactUs/6.jpeg";

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/assets/img/contactUs/85.jpeg";

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/assets/img/contactUs/9.jpeg";

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/assets/img/contactUs/95.jpeg";

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/assets/img/contactUs/lijichoujiang.jpeg";

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/assets/img/contactUs/luck_draw_bg.jpeg";

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/assets/img/contactUs/xiexiecanyu.jpeg";

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(548);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var Components_headerHome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(30);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var Main = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Main, _Component);
  var _super = _createSuper(Main);
  function Main(props) {
    var _this;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Main);
    _this = _super.call(this, props);
    _this.state = {
      blogList: [{
        title: "部署相关",
        blogs: [{
          name: "本地部署常见问题",
          link: "https://www.webfunny.cn/blog/post/info/62"
        }, {
          name: "服务器部署常见问题",
          link: "https://www.webfunny.cn/blog/post/info/65"
        }, {
          name: "数据库常见问题",
          link: "https://www.webfunny.cn/blog/post/info/69"
        }, {
          name: "增加其他警报方式",
          link: "https://www.webfunny.cn/blog/post/info/83"
        }]
      }, {
        title: "使用相关",
        blogs: [{
          name: "如何使用SourceMap解析源码",
          link: "https://www.webfunny.cn/blog/post/info/89"
        }]
      }, {
        title: "排查问题",
        blogs: [{
          name: "查看错误信息",
          link: "https://www.webfunny.cn/blog/post/info/66"
        }]
      }, {
        title: "安全问题",
        blogs: [{
          name: "关于开源",
          link: "https://www.webfunny.cn/blog/post/info/63"
        }, {
          name: "系统监控",
          link: "https://www.webfunny.cn/blog/post/info/64"
        }]
      }],
      activeIndex: 0,
      blogUrl: ""
    };
    _this.turnTo = _this.turnTo.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Main, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var blogUrl = _common_utils__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].getQueryVariable("blogUrl");
      blogUrl = blogUrl ? decodeURIComponent(blogUrl) : "https://www.webfunny.cn/blog/post/info/62";
      this.setState({
        blogUrl: blogUrl
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$state = this.state,
        blogList = _this$state.blogList,
        blogUrl = _this$state.blogUrl;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "des-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Components_headerHome__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
        hideHeader: "hide"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "con-box"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "menu"
      }, blogList.map(function (item) {
        var blogs = item.blogs;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "title"
        }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", null, blogs.map(function (blogItem) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
            className: blogUrl === blogItem.link ? "sub-title active" : "sub-title",
            onClick: _this2.turnTo.bind(_this2, blogItem.link)
          }, blogItem.name);
        })));
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "con"
      }, blogUrl.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("iframe", {
        className: "blog-iframe",
        src: blogUrl
      }))));
    }
  }, {
    key: "turnTo",
    value: function turnTo(blogUrl) {
      var newUrl = _common_utils__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].updateQueryStringParameter(window.location.href, "blogUrl", encodeURIComponent(blogUrl));
      window.history.replaceState({
        path: newUrl
      }, "", newUrl);
      this.setState({
        blogUrl: blogUrl
      });
    }
  }]);
  return Main;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);
react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Main, null), document.getElementById("app"));

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=faq.7908db86ae2fd21f2b29.min.js.map