import type { Meta, StoryObj } from '@storybook/react';
import { NavBar } from '.';

const meta = {
  title: 'Molecules/NavBar',
  component: NavBar,
  argTypes: {
    variant: {
      options: ['default'],
      control: 'radio'
    }
  }
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'default'
  }
};
