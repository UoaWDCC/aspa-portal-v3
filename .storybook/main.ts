import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  core: {
    disableWhatsNewNotifications: true,
    disableTelemetry: true,
    enableCrashReports: false,
  },
  stories: ['../components/**/*.(stories|story).@(js|jsx|ts|tsx)'],
  addons: ['storybook-dark-mode', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: [{from: '../public', to: ''}],
};
export default config;
