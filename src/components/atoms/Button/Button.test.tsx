import { composeStories } from '@storybook/react';
import * as stories from './Button.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('Button', () => {
  const { Primary, Secondary, Text, TextMenu } = composeStories(stories);
  testSnapshot(<Primary />);
  testSnapshot(<Secondary />);
  testSnapshot(<Text />);
  testSnapshot(<TextMenu />);
});
