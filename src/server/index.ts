import { ParsedRequest, ParsedResponse, Request, Response } from './type';
import { handleStatic, handlePost } from './handle';

const pipe = async (
  event: string,
  context: string,
  callback: (_: null, res: Response) => void,
  funcList: ((req: ParsedRequest, res: ParsedResponse) => Promise<boolean>)[]
) => {
  const request: Request = JSON.parse(event.toString());
  const parsedResponse: ParsedResponse = {
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
  const parsedRequest: ParsedRequest = {
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
      if (!isContinue) break;
    }
  } catch (error) {
    callback(null, { statusCode: 400, body: (error as Error).stack || '', isBase64Encoded: false, headers: {} });
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

export const data = (_event: string, content: string, callback: (_: null, res: Response) => void) => {
  pipe(_event, content, callback, [handleStatic, handlePost]);
};
