/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/html-webpack5',
  webpackFinal: async (baseConfig) => {
    // Add or update the rule for TypeScript and JSX files
    baseConfig.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: [{
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-typescript', // Use this for TypeScript
            '@babel/preset-react', // Use this for React JSX
          ],
          plugins: [
            ['@babel/plugin-proposal-decorators', { 'legacy': true }],
            ['@babel/plugin-proposal-class-properties', { 'loose': true }],
          ],
        },
      }],
    });
    baseConfig.resolve.extensions.push('.ts', '.tsx');
    return baseConfig;
  },
  docs: {
    autodocs: 'tag',
  },
};

export default config;
