"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleStatic = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
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
    const body = (0, fs_1.readFileSync)(filePath, { encoding: 'utf-8' });
    response.statusCode = 200;
    response.headers = {
        'content-type': extList.find(ext => rawPath.endsWith(ext.ext))?.type || 'plain/text'
    };
    response.body = body;
    return false;
};
exports.handleStatic = handleStatic;
