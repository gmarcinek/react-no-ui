import glob from 'glob';
import typescript from 'rollup-plugin-typescript2';
import pkg from "./package.json";

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];

const entries = glob.sync('./src/components/**/index.{ts,x}');



const getEntryConfig = (input, outputFile) => ({
  input,
  dir: 'dist',
  output: {
    file: outputFile,
    format: 'esm',
    sourcemap: true,
  },
  treeshake: true,
  external,
  plugins: [
    typescript()
  ]
});

const config = entries.map((input) => {
  const paths = input.split('/');
  const componentName = paths[paths.length - 2];
  const outputFile = `dist/${componentName}.js`;

  return getEntryConfig(input, outputFile);
});

export default [
  ...config,
  getEntryConfig('./src/index.ts', 'dist/index.js'),
];
