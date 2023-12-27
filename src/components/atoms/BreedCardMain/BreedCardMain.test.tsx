import { composeStories } from '@storybook/react';
import * as stories from './BreedCardMain.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('BreedCardMain', () => {
  const { Primary } = composeStories(stories);
  testSnapshot(<Primary />);
});
