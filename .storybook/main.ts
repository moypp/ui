import path from 'path';
import { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/**/stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config) => {
    if (config.module?.rules) {
      const cssRule = config.module.rules.find(
        (rule) =>
          typeof rule === 'object' &&
          rule !== null &&
          'test' in rule &&
          rule.test instanceof RegExp &&
          rule.test.toString().includes('.css'),
      );

      if (
        cssRule &&
        typeof cssRule === 'object' &&
        'use' in cssRule &&
        Array.isArray(cssRule.use)
      ) {
        cssRule.use.push({
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              config: path.resolve(__dirname, '../postcss.config.js'),
            },
          },
        });

        const cssLoader = cssRule.use.find(
          (loader) =>
            typeof loader === 'object' &&
            loader !== null &&
            'loader' in loader &&
            typeof loader.loader === 'string' &&
            loader.loader.includes('css-loader'),
        );
        if (cssLoader && typeof cssLoader === 'object' && 'options' in cssLoader) {
          (cssLoader.options as { importLoaders?: number }).importLoaders = 1;
        }
      } else {
        console.warn(
          'Storybook의 기존 CSS 규칙을 찾거나 수정할 수 없습니다. 새 규칙을 추가하면 충돌이 발생할 수 있습니다.',
        );
      }
    }

    if (config.resolve?.alias) {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        '@': path.resolve(__dirname, '../src'),
      };
    }

    return config;
  },
};

export default config;
