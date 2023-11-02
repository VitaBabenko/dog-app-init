import { IconButton } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/IconButton',
  component: IconButton,
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: 'radio'
    }
  }
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'primary',
    children: 'icon'
  }
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    children: 'icon'
  }
};
