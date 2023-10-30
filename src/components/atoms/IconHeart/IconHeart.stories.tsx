import type { Meta, StoryObj } from '@storybook/react';
import { IconHeart } from '.';

const meta = {
  title: 'Atoms/IconHeart',
  component: IconHeart,
  argTypes: {
    state: {
      options: ['default', 'hover', 'active'],
      control: 'radio'
    }
  }
} satisfies Meta<typeof IconHeart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    state: 'default'
  }
};
