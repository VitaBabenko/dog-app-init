import { cleanup, render } from '@testing-library/react';
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { api } from '../../services/api';
import { DogAppThemeProvider } from '../../theme';

export const testSnapshot = (el: ReactElement, name = 'Component') => {
  it(`should match snapshot ${name}`, () => {
    const { container, unmount } = render(
      <ApiProvider api={api}>
        <DogAppThemeProvider>
          <BrowserRouter>{el}</BrowserRouter>
        </DogAppThemeProvider>
      </ApiProvider>
    );
    expect(container).toMatchSnapshot();

    unmount();
    cleanup();
  });
};
