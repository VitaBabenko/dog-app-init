import type { Meta, StoryObj } from '@storybook/react';
import { IconPlus } from '.';

const meta = {
  title: 'Atoms/IconPlus',
  component: IconPlus,
  argTypes: {
    state: {
      options: ['default', 'hover'],
      control: 'radio'
    }
  }
} satisfies Meta<typeof IconPlus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    state: 'default'
  }
};
