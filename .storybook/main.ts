import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  webpackFinal: async (config) => {
    // Ensure that config.module and config.module.rules are defined
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
  
    // Add SCSS support for CSS Modules
    config.module.rules.push({
      test: /\.module\.scss$/,
      use: [
        'style-loader', // creates style nodes from JS strings
        {
          loader: 'css-loader', // translates CSS into CommonJS
          options: {
            importLoaders: 1,
            modules: true,
          },
        },
        'sass-loader', // compiles Sass to CSS
      ],
    });
  
    // Return the altered config
    return config;
  },
  docs: {
    autodocs: 'tag',
  },
};

export default config;


