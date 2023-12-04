import { composeStories } from '@storybook/react';
import * as stories from './ArrowRight.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('ArrowRight', () => {
  const { Primary } = composeStories(stories);
  testSnapshot(<Primary />);
});
