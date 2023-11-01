import { composeStories } from '@storybook/react';
import * as stories from './IconHeart.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('IconHeart', () => {
  const { Primary } = composeStories(stories);
  testSnapshot(<Primary />);
});
