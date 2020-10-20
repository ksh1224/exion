/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-nested-ternary */
import 'reflect-metadata';
import './src/generated/nexus';

import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit'; // graphql 쿼리 뎁스(복잡성) 제어: DOS 공격 방어
import { createServer } from 'http';
import compression from 'compression'; // gzip 압축 라이브러리: 성능향상
import cors from 'cors';
import path from 'path';
import next from 'next';
import dotenv from 'dotenv';
import { createContext } from './src/context';
import { schema } from './src/schema';

const appContiner = next({ customServer: true, dev: process.env.NODE_ENV === 'local' });
const handle = appContiner.getRequestHandler();

appContiner.prepare().then(() => {
  const env = process.env.NODE_ENV;
  const envPath = env === 'development'
    ? path.resolve(__dirname, '../dotenv/dev.env')
    : env === 'test'
      ? path.resolve(__dirname, '../dotenv/test.env')
      : path.resolve(__dirname, '../dotenv/.env');

  dotenv.config({ path: envPath });

  const formatError = (err: any) => {
    console.error('--- GraphQL Error ---');
    console.error('Path:', err.path);
    console.error('Message:', err.message);
    console.error('Code:', err.extensions.code);
    console.error('Original Error', err.originalError);
    return err;
  };

  const server = new ApolloServer({
    schema,
    validationRules: [depthLimit(7)],
    context: createContext,
    debug: process.env.NODE_ENV !== 'production',
    formatError,
  });

  const app = express();
  server.applyMiddleware({ app, path: '/graphql' });
  app.use('*', cors());
  app.all('*', (req, res) => handle(req, res));
  app.use(compression());

  const httpServer = createServer(app);
  process.env.NODE_ENV !== 'local'
    ? httpServer.listen({ port: 3000 }, (): void => console.log('server Start: http://52.78.21.150:3000/graphql'))
    : httpServer.listen({ port: 3000 }, (): void => console.log('server Start: http://localhost:3000/graphql'));
}).catch((error) => {
  console.log(error, 'error');
});
