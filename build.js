const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['./src/App.tsx'],
    outfile: './public/assets/bundle.js',
    minify: true,
    bundle: true,
    sourcemap: true,
    loader: {
      '.ts': 'tsx',
    },
  })
  .catch(() => process.exit(1));
