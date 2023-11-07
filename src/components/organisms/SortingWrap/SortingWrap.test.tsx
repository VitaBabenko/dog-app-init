import { composeStories } from '@storybook/react';
import * as stories from './SortingWrap.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('SortingWrap', () => {
  const { Primary } = composeStories(stories);
  testSnapshot(<Primary />);
});
