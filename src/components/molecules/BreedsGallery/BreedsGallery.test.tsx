import { composeStories } from '@storybook/react';
import * as stories from './BreedsGallery.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('BreedsGallery', () => {
  const { Primary } = composeStories(stories);
  testSnapshot(<Primary />);
});
