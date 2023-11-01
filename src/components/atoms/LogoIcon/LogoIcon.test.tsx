import { composeStories } from '@storybook/react';
import * as stories from './LogoIcon.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('LogoIcon', () => {
  const { Primary } = composeStories(stories);
  testSnapshot(<Primary />);
});
