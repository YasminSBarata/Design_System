import { fileURLToPath } from 'url';
import path from 'path';
import type { StorybookConfig } from '@storybook/nextjs';

// 👇 Converte import.meta.url para caminho de arquivo
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        //👇 Mockando o next/navigation com caminho absoluto compatível
        ...(config.resolve.alias || {}),
        'next/navigation': path.resolve(
          dirname,
          './mocks/next-navigation-mock.ts',
        ),
      };
    }

    return config;
  },
};

export default config;
