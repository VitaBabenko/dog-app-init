import { composeStories } from '@storybook/react';
import * as stories from './ButtonIconDislike.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('ButttonIconDisLike', () => {
  const { Primary } = composeStories(stories);
  testSnapshot(<Primary />);
});
