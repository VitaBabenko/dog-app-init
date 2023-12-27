import { composeStories } from '@storybook/react';
import * as stories from './CardWrapper.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('CardWrapper', () => {
  const { Primary, SmallRadiusBorder, BigRadiusBorder } =
    composeStories(stories);
  testSnapshot(<Primary />);
  testSnapshot(<SmallRadiusBorder />);
  testSnapshot(<BigRadiusBorder />);
});
