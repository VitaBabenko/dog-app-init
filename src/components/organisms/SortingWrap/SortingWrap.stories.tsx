import type { Meta, StoryObj } from '@storybook/react';
import { SortingWrap } from '.';

const meta = {
  title: 'Organisms/SortingWrap',
  component: SortingWrap,
  argTypes: {
    variant: {
      options: ['default'],
      control: 'radio'
    }
  }
} satisfies Meta<typeof SortingWrap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'default'
  }
};
