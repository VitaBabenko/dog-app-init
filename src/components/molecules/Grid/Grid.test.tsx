import { composeStories } from '@storybook/react';
import * as stories from './Grid.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('Grid', () => {
  const { Primary } = composeStories(stories);
  testSnapshot(<Primary />);
});
