import type { Meta, StoryObj } from '@storybook/react';
import { ButtonIconFilter } from '.';

const meta = {
  title: 'Atoms/ButtonIconFilter',
  component: ButtonIconFilter,
  argTypes: {
    state: {
      options: ['default', 'down', 'random'],
      control: 'radio'
    }
  }
} satisfies Meta<typeof ButtonIconFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    state: 'default'
  }
};
