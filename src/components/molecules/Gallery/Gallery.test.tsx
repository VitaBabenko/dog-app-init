import { composeStories } from '@storybook/react';
import * as stories from './Gallery.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('NavBar', () => {
  const { Primary } = composeStories(stories);
  testSnapshot(<Primary />);
});
