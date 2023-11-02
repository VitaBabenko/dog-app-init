import { composeStories } from '@storybook/react';
import * as stories from './CardItem.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('CardItem', () => {
  const { Primary, SmallRadiusBorder, BigRadiusBorder } =
    composeStories(stories);
  testSnapshot(<Primary />);
  testSnapshot(<SmallRadiusBorder />);
  testSnapshot(<BigRadiusBorder />);
});
