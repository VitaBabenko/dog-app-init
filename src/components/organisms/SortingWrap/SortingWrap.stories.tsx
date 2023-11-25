import type { Meta, StoryObj } from '@storybook/react';
import { SortingWrap } from '.';

const meta = {
  title: 'Organisms/SortingWrap',
  component: SortingWrap
} satisfies Meta<typeof SortingWrap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    order: 1
  }
};
