import type { Meta, StoryObj } from '@storybook/react';
import { BreedId } from '.';

const meta = {
  title: 'Molecules/BreedId',
  component: BreedId
} satisfies Meta<typeof BreedId>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    breedId: '1'
  }
};
