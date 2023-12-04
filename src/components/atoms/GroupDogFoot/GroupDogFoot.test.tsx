import { composeStories } from '@storybook/react';
import * as stories from './GroupDogFoot.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('GroupDogFoot', () => {
  const { Primary } = composeStories(stories);
  testSnapshot(<Primary />);
});
