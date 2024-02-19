"use strict";
/**
 * @description
 * HTTP code snippet generator for Java using OkHttp.
 *
 * @author
 * @shashiranjan84
 *
 * for any questions or issues regarding the generated code snippet, please open an issue mentioning the author.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.okhttp = void 0;
var code_builder_1 = require("../../../helpers/code-builder");
var escape_1 = require("../../../helpers/escape");
exports.okhttp = {
    info: {
        key: 'okhttp',
        title: 'OkHttp',
        link: 'http://square.github.io/okhttp/',
        description: 'An HTTP Request Client Library'
    },
    convert: function (_a, options) {
        var postData = _a.postData, method = _a.method, fullUrl = _a.fullUrl, allHeaders = _a.allHeaders;
        var opts = __assign({ indent: '  ' }, options);
        var _b = new code_builder_1.CodeBuilder({ indent: opts.indent }), push = _b.push, blank = _b.blank, join = _b.join;
        var methods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD'];
        var methodsWithBody = ['POST', 'PUT', 'DELETE', 'PATCH'];
        push('OkHttpClient client = new OkHttpClient();');
        blank();
        if (postData.text) {
            if (postData.boundary) {
                push("MediaType mediaType = MediaType.parse(\"".concat(postData.mimeType, "; boundary=").concat(postData.boundary, "\");"));
            }
            else {
                push("MediaType mediaType = MediaType.parse(\"".concat(postData.mimeType, "\");"));
            }
            push("RequestBody body = RequestBody.create(mediaType, ".concat(JSON.stringify(postData.text), ");"));
        }
        push('Request request = new Request.Builder()');
        push(".url(\"".concat(fullUrl, "\")"), 1);
        if (!methods.includes(method.toUpperCase())) {
            if (postData.text) {
                push(".method(\"".concat(method.toUpperCase(), "\", body)"), 1);
            }
            else {
                push(".method(\"".concat(method.toUpperCase(), "\", null)"), 1);
            }
        }
        else if (methodsWithBody.includes(method.toUpperCase())) {
            if (postData.text) {
                push(".".concat(method.toLowerCase(), "(body)"), 1);
            }
            else {
                push(".".concat(method.toLowerCase(), "(null)"), 1);
            }
        }
        else {
            push(".".concat(method.toLowerCase(), "()"), 1);
        }
        // Add headers, including the cookies
        Object.keys(allHeaders).forEach(function (key) {
            push(".addHeader(\"".concat(key, "\", \"").concat((0, escape_1.escapeForDoubleQuotes)(allHeaders[key]), "\")"), 1);
        });
        push('.build();', 1);
        blank();
        push('Response response = client.newCall(request).execute();');
        return join();
    }
};
