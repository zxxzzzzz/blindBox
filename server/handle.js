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
    const filePath = path_1.default.resolve(__dirname, './' + rawPath);
    const body = (0, fs_1.readFileSync)(filePath, { encoding: 'utf-8' });
    response.statusCode = 200;
    response.headers = {};
    response.body = body;
    return false;
};
exports.handleStatic = handleStatic;
