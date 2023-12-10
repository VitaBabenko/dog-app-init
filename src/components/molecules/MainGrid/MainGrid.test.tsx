import { composeStories } from '@storybook/react';
import * as stories from './MainGrid.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('MainGrid', () => {
  const { Primary } = composeStories(stories);
  testSnapshot(<Primary />);
});
