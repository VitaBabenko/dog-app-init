import { Button } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['contained', 'outlined', 'text'],
      control: 'radio'
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'contained',
    children: 'Button'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'outlined',
    color: 'secondary',
    children: 'Button'
  }
};

export const Text: Story = {
  args: {
    variant: 'text',
    color: 'inherit',
    children: 'Button'
  }
};

export const TextMenu: Story = {
  args: {
    variant: 'text',
    color: 'primary',
    children: 'Button'
  }
};
