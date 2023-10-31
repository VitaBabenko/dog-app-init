import { composeStories } from '@storybook/react';
import * as stories from './ButtonIconPlus.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('ButtonIconPlus', () => {
  const { Primary } = composeStories(stories);
  testSnapshot(<Primary />);
});
