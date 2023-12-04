import type { Meta, StoryObj } from '@storybook/react';
import { ArrowRight } from '.';

const meta = {
  title: 'Atoms/ArrowRight',
  component: ArrowRight,
  argTypes: {
    state: {
      options: ['default'],
      control: 'radio'
    }
  }
} satisfies Meta<typeof ArrowRight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    state: 'default'
  }
};
