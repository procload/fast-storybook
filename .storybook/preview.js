import { setCustomElementsManifest } from '@storybook/web-components';
import customElements from '../custom-elements.json';
import * as Tri from '../src/index-rollup';

setCustomElementsManifest(customElements);

Tri;

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    enableShortcuts: false,
  }
}