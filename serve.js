// serve.js
const esbuild = require('esbuild');

esbuild
  .serve(
    {
      servedir: 'public',
      port: 8000,
    },
    {
      entryPoints: ['./src/App.tsx'],
      outfile: './public/assets/bundle.js',
      bundle: true,
      sourcemap: true,
      loader: {
        '.ts': 'tsx',
      },
    }
  )
  .catch(() => process.exit(1));
