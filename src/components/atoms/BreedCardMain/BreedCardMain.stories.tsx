import type { Meta, StoryObj } from '@storybook/react';
import { BreedCardMain } from '.';

const meta = {
  title: 'Atoms/BreedCardMain',
  component: BreedCardMain
} satisfies Meta<typeof BreedCardMain>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: '',
    url: '',
    breeds: [
      {
        id: 1,
        name: ''
      }
    ],
    favouriteId: ''
  }
};
