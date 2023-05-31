import * as R from 'ramda';
// @ts-ignore
import Format from 'json-format';
import dayjs from 'dayjs';
import express from 'express';
import cors from 'cors';
import { CError, Code, createError } from './error';


const app = express();
app.use(cors());

export default app;

app.use(express.static('./public'));
app.use(express.json());
app.listen(9000);



const delay = (n: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, n);
  });
};
