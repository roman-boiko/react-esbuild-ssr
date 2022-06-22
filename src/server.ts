import fastify from 'fastify';
import fs from 'fs';
import path from 'path';
import App from './App';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';

const server = fastify();

server.get('/', async (request, reply) => {
  return fs.createReadStream(path.join(__dirname, '../public/index.html'));
});

server.get('/assets/bundle.js', async (request, reply) => {
  return fs.createReadStream(path.join(__dirname, '../public/assets/bundle.js'));
});

server.get('/ssr', async (request, reply) => {
  const stream = renderToPipeableStream(React.createElement(App), {
    onShellReady() {
      reply.header('Content-type', 'text/html');
      return stream;
    },
  });
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
