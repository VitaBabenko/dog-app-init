import { composeStories } from '@storybook/react';
import * as stories from './SortingBar.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('SortingBar', () => {
  const { Primary } = composeStories(stories);
  testSnapshot(<Primary />);
});
