import { composeStories } from '@storybook/react';
import * as stories from './PaginationWrap.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('PaginationWrap', () => {
  const { Primary } = composeStories(stories);
  testSnapshot(<Primary />);
});
