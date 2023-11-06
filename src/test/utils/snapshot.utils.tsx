import { cleanup, render } from '@testing-library/react';
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DogAppThemeProvider } from '../../theme';

export const testSnapshot = (el: ReactElement, name = 'Component') => {
  it(`should match snapshot ${name}`, () => {
    const { container, unmount } = render(
      <DogAppThemeProvider>
        <BrowserRouter>{el}</BrowserRouter>
      </DogAppThemeProvider>
    );
    expect(container).toMatchSnapshot();

    unmount();
    cleanup();
  });
};
