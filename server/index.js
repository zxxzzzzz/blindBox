"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
const handle_1 = require("./handle");
const pipe = async (event, context, callback, funcList) => {
    const request = JSON.parse(event.toString());
    const parsedResponse = {
        statusCode: 400,
        setCookie: {},
        headers: {},
        isBase64Encoded: false,
        body: '',
    };
    const queryStr = Object.entries(request.queryParameters || {})
        .map(([k, v]) => {
        return `${k}=${v}`;
    })
        .join('&');
    const parsedRequest = {
        rawPath: request.rawPath,
        method: request.requestContext.http.method.toLowerCase(),
        isBase64Encoded: request.isBase64Encoded,
        body: request.body || '',
        headers: request.headers,
        queryParameters: request.queryParameters,
        query: queryStr,
    };
    try {
        for (const func of funcList) {
            const isContinue = await func(parsedRequest, parsedResponse);
            if (!isContinue)
                break;
        }
    }
    catch (error) {
        callback(null, { statusCode: 400, body: error.stack || '', isBase64Encoded: false, headers: {} });
    }
    const statusCode = parsedResponse.statusCode === 405 ? 400 : parsedResponse.statusCode;
    if (!parsedResponse.setCookie || !Object.keys(parsedResponse.setCookie).length) {
        callback(null, {
            statusCode,
            headers: { ...parsedResponse.headers },
            body: parsedResponse.body,
            isBase64Encoded: parsedResponse.isBase64Encoded,
        });
        return;
    }
    callback(null, {
        statusCode,
        headers: { ...parsedResponse.headers },
        body: parsedResponse.body,
        isBase64Encoded: parsedResponse.isBase64Encoded,
    });
};
const data = (_event, content, callback) => {
    pipe(_event, content, callback, [handle_1.handleStatic, handle_1.handlePost]);
};
exports.data = data;
