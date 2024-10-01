import { ParsedRequest, ParsedResponse } from './type';
import path from 'path';
import { readFileSync } from 'fs';

export const handleStatic = async (request: ParsedRequest, response: ParsedResponse) => {
  const rawPath = request.rawPath === '/' || !request.rawPath ? '/index.html' : request.rawPath;
  if (request.method !== 'get') {
    return true;
  }
  const filePath = path.resolve(__dirname, './' + rawPath);
  const body = readFileSync(filePath, { encoding: 'utf-8' });
  response.statusCode = 200;
  response.headers = {

  };
  response.body = body;
  return false;
};
