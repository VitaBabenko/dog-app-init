import type { Preview } from '@storybook/react';
import React from 'react';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { BrowserRouter } from 'react-router-dom';
import { DogAppThemeProvider } from '../src/theme';
import { api } from '../src/services/api';

const preview: Preview = {
  decorators: [
    Story => (
      <ApiProvider api={api}>
        <DogAppThemeProvider>
          <BrowserRouter>
            <Story />
          </BrowserRouter>
        </DogAppThemeProvider>
      </ApiProvider>
    )
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export default preview;
