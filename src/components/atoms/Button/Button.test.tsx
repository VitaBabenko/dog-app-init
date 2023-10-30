import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from './Button.stories';
// import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('Button', () => {
  const { Primary, Secondary, Text } = composeStories(stories);
  it('should match snapshot Primary', () => {
    const { container } = render(<Primary />);
    expect(container).toMatchSnapshot();
  });
  it('should match snapshot Primary', () => {
    const { container } = render(<Secondary />);
    expect(container).toMatchSnapshot();
  });
  it('should match snapshot Primary', () => {
    const { container } = render(<Text />);
    expect(container).toMatchSnapshot();
  });
  // testSnapshot(<Primary />);
  // testSnapshot(<Secondary />);
  // testSnapshot(<Text />);
});
