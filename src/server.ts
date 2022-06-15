import fastify from 'fastify';
import fs from 'fs';
import path from 'path';

const server = fastify();

server.get('/', async (request, reply) => {
  return fs.createReadStream(path.join(__dirname, '../public/index.html'));
});

server.get('/assets/bundle.js', async (request, reply) => {
  return fs.createReadStream(path.join(__dirname, '../public/assets/bundle.js'));
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
