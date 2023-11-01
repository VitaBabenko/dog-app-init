import { composeStories } from '@storybook/react';
import * as stories from './ButtonIconFilter.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('ButtonIconFilter', () => {
  const { Primary } = composeStories(stories);
  testSnapshot(<Primary />);
});
