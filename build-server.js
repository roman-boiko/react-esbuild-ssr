const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['./src/server.ts'],
    outfile: './build/server.js',
    platform: 'node',
    minify: true,
    bundle: true,
    sourcemap: true,
  })
  .catch(() => process.exit(1));
