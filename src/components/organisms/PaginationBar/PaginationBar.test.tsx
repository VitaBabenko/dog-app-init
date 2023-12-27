import { composeStories } from '@storybook/react';
import * as stories from './PaginationBar.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('PaginationBar', () => {
  const { Primary } = composeStories(stories);
  testSnapshot(<Primary />);
});
