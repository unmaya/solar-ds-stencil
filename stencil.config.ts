import { Config } from '@stencil/core';
import { postcss } from '@stencil-community/postcss';
import presetEnv from 'postcss-preset-env';

export const config: Config = {
  namespace: 'solar-ds-stencil',
  // import custom props for tokens
  // link global styles in index; build/project-name.css
  globalStyle: 'src/global-variables.css',
  plugins: [
    postcss({
      plugins: [presetEnv()],
    })
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
