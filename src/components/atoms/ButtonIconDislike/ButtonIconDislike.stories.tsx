import type { Meta, StoryObj } from '@storybook/react';
import { ButttonIconDisLike } from '.';

const meta = {
  title: 'Atoms/ButttonIconDisLike',
  component: ButttonIconDisLike,
  argTypes: {
    state: {
      options: ['default'],
      control: 'radio'
    }
  }
} satisfies Meta<typeof ButttonIconDisLike>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    state: 'default'
  }
};
