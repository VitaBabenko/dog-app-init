import type { Meta, StoryObj } from '@storybook/react';
import { ButttonIconLike } from '.';

const meta = {
  title: 'Atoms/ButttonIconLike',
  component: ButttonIconLike,
  argTypes: {
    state: {
      options: ['default'],
      control: 'radio'
    }
  }
} satisfies Meta<typeof ButttonIconLike>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    state: 'default'
  }
};
