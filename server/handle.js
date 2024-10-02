"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlePost = exports.handleStatic = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const ali_oss_1 = __importDefault(require("ali-oss"));
const client = new ali_oss_1.default({
    region: 'oss-cn-hangzhou',
    accessKeyId: 'LTAI5tNpSy9xc' + 'TEcAK7M7Uxu',
    accessKeySecret: 'xJw1QUVCmOs' + 'DT5ZHqJgMssUZTtalqo',
    bucket: 'blind-box-zxx',
    internal: true,
});
const handleStatic = async (request, response) => {
    const rawPath = request.rawPath === '/' || !request.rawPath ? '/index.html' : request.rawPath;
    if (request.method !== 'get') {
        return true;
    }
    const extList = [
        { ext: '.js', type: 'text/javascript;charset=UTF-8', isBase64Encoded: false },
        { ext: '.html', type: 'text/html;charset=UTF-8', isBase64Encoded: false },
        { ext: '.css', type: 'text/css;charset=UTF-8', isBase64Encoded: false },
        { ext: '.mp3', type: 'audio/mpeg', isBase64Encoded: true },
        { ext: '.jpg', type: 'image/jpeg', isBase64Encoded: true },
        { ext: '.png', type: 'image/png', isBase64Encoded: true },
        { ext: '.ico', type: 'image/x-icon', isBase64Encoded: true },
        { ext: '.woff', type: 'application/font-woff', isBase64Encoded: true },
        { ext: '.ttf', type: 'font/ttf', isBase64Encoded: true },
    ];
    const filePath = path_1.default.resolve(__dirname, './' + rawPath);
    const extItem = extList.find((ext) => rawPath.endsWith(ext.ext)) || {
        ext: '.html',
        type: 'text/html;charset=UTF-8',
        isBase64Encoded: false,
    };
    const buf = (0, fs_1.readFileSync)(filePath);
    response.statusCode = 200;
    response.headers = {
        'content-type': extItem.type,
    };
    response.isBase64Encoded = extItem.isBase64Encoded;
    response.body = extItem.isBase64Encoded ? buf.toString('base64') : buf.toString('utf-8');
    return false;
};
exports.handleStatic = handleStatic;
const handlePost = async (request, response) => {
    const rawPath = request.rawPath;
    if (request.method !== 'post') {
        return true;
    }
    if (rawPath === '/update') {
        const { dataList } = JSON.parse(request.body);
        response.statusCode = 200;
        response.isBase64Encoded = false;
        response.headers = {
            'content-type': 'application/json',
        };
        try {
            const fileObj = await client.append('data.txt', Buffer.from(''));
            await client.append('data.txt', Buffer.from(dataList.map((d) => JSON.stringify({ d })).join('\r\n') + '\r\n'), { position: fileObj.nextAppendPosition });
            response.body = JSON.stringify({ code: 200 });
        }
        catch (error) {
            response.body = JSON.stringify({ code: 500, message: error.message });
        }
    }
    return false;
};
exports.handlePost = handlePost;
