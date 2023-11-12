import type { Meta, StoryObj } from '@storybook/react';
import { Gallery } from '.';

const meta = {
  title: 'Molecules/Gallery',
  component: Gallery
} satisfies Meta<typeof Gallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {}
};
