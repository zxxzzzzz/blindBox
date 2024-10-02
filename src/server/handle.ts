import { ParsedRequest, ParsedResponse } from './type';
import path from 'path';
import { readFileSync } from 'fs';
import OSS from 'ali-oss';

const client = new OSS({
  // yourRegion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
  region: 'oss-cn-hangzhou',
  // 阿里云账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM用户进行API访问或日常运维，请登录RAM控制台创建RAM用户。
  accessKeyId: 'LTAI5tNpSy9xc' + 'TEcAK7M7Uxu',
  accessKeySecret: 'xJw1QUVCmOs' + 'DT5ZHqJgMssUZTtalqo',
  bucket: 'blind-box-zxx',
  internal: true,
});

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
export const handlePost = async (request: ParsedRequest, response: ParsedResponse) => {
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
      const fileObj = await client.getObjectMeta('data.txt');
      // await client.append(
      //   'data.txt',
      //   Buffer.from((dataList as any[]).map((d) => JSON.stringify({ d })).join('\r\n') + '\r\n'),
      //   { position: fileObj.nextAppendPosition }
      // );
      response.body = JSON.stringify({ code: 200, result: fileObj });
    } catch (error) {
      response.body = JSON.stringify({ code: 500, message: (error as Error).message });
    }
  }
  return false;
};
