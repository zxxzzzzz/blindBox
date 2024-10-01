import { ParsedRequest, ParsedResponse } from './type';
import path from 'path';
import { readFileSync } from 'fs';

export const handleStatic = async (request: ParsedRequest, response: ParsedResponse) => {
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
  const filePath = path.resolve(__dirname, './' + rawPath);
  const extItem = extList.find((ext) => rawPath.endsWith(ext.ext)) || {
    ext: '.html',
    type: 'text/html;charset=UTF-8',
    isBase64Encoded: false,
  };
  const buf = readFileSync(filePath);
  response.statusCode = 200;
  response.headers = {
    'content-type': extItem.type,
  };
  response.isBase64Encoded = extItem.isBase64Encoded;
  response.body = extItem.isBase64Encoded ? buf.toString('base64') : buf.toString('utf-8');
  return false;
};
