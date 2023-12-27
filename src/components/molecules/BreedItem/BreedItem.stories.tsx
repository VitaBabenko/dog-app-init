import type { Meta, StoryObj } from '@storybook/react';
import { BreedItem } from '.';

const meta = {
  title: 'Molecules/BreedItem',
  component: BreedItem
} satisfies Meta<typeof BreedItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    breedId: '1'
  }
};
