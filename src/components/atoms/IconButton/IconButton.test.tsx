import { composeStories } from '@storybook/react';
import * as stories from './IconButton.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('IconButton', () => {
  const { Primary, Secondary } = composeStories(stories);
  testSnapshot(<Primary />);
  testSnapshot(<Secondary />);
});
