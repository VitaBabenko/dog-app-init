import { composeStories } from '@storybook/react';
import * as stories from './BreedId.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('BreedId', () => {
  const { Primary } = composeStories(stories);
  testSnapshot(<Primary />);
});
