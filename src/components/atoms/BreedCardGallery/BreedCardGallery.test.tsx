import { composeStories } from '@storybook/react';
import * as stories from './BreedCardGallery.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('BreedCardGallery', () => {
  const { Primary } = composeStories(stories);
  testSnapshot(<Primary />);
});
