import express from 'express';
import next from 'next';
import http from 'http';
import cors from 'cors';
import morgan from 'morgan';
import url from 'url';
import compression from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import setupAuth from './api/auth';
import setupApi from './api';

const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10) || 8000;
const app = next({ dev, quiet: false });
const nextRequestHandler = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  if (!dev) {
    server.use(compression());
  }

  server.use(cookieParser());
  server.use(morgan('dev'));
  server.use(cors({ credentials: true, origin: true }));
  server.use(bodyParser.json());
  server.use(
    bodyParser.urlencoded({
      extended: false,
    })
  );

  setupAuth(server, passport);
  setupApi(server);

  server.get('/post/:id', (req, res) => {
    const params = { id: req.params.id };
    return app.render(req, res, '/post', params);
  });

  server.get('*', (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    return nextRequestHandler(req, res, parsedUrl);
  });

  server.listen(port, err => {
    if (err) {
      throw err;
    }

    console.log(`Running on localhost:${port}`);
  });
});
