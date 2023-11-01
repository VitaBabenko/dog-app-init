import { composeStories } from '@storybook/react';
import * as stories from './ButtonIconLike.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('ButttonIconLike', () => {
  const { Primary } = composeStories(stories);
  testSnapshot(<Primary />);
});
