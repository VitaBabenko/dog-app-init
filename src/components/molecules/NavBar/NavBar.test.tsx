import { composeStories } from '@storybook/react';
import * as stories from './NavBar.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('NavBar', () => {
  const { Primary } = composeStories(stories);
  testSnapshot(<Primary />);
});
