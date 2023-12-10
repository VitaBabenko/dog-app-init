import type { Meta, StoryObj } from '@storybook/react';
import { BreedsGallery } from '.';

const meta = {
  title: 'Molecules/BreedsGallery',
  component: BreedsGallery
} satisfies Meta<typeof BreedsGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    page: 1
  }
};
