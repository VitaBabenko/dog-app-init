import { composeStories } from '@storybook/react';
import * as stories from './BreedItem.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('BreedItem', () => {
  const { Primary } = composeStories(stories);
  testSnapshot(<Primary />);
});
