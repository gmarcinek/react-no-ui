import glob from 'glob';
import typescript from 'rollup-plugin-typescript2';
import pkg from "./package.json";

const entries = glob.sync('./src/**/*index.{ts,x}');

console.log(entries);

const config = entries.map((input) => ({
  input,
  output: {
    file: pkg.module,
    format: 'esm',
    sourcemap: true,
  },
  treeshake: true,
  external: ['react'],
  plugins: [
    typescript()
  ]
}));

export default config;
