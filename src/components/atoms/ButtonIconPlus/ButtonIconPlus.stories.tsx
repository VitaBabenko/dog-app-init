import type { Meta, StoryObj } from '@storybook/react';
import { ButtonIconPlus } from '.';

const meta = {
  title: 'Atoms/ButtonIconPlus',
  component: ButtonIconPlus,
  argTypes: {
    state: {
      options: ['default', 'hover'],
      control: 'radio'
    }
  }
} satisfies Meta<typeof ButtonIconPlus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    state: 'default'
  }
};
