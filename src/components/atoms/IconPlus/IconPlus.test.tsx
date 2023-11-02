import { composeStories } from '@storybook/react';
import * as stories from './IconPlus.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('IconPlus', () => {
  const { Primary } = composeStories(stories);
  testSnapshot(<Primary />);
});
