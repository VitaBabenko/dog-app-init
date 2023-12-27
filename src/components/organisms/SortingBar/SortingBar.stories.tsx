import type { Meta, StoryObj } from '@storybook/react';
import { SortingBar } from '.';
import { Order } from '../../../services/images';

const meta = {
  title: 'Organisms/SortingBar',
  component: SortingBar
} satisfies Meta<typeof SortingBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    order: Order.ASC
  }
};
