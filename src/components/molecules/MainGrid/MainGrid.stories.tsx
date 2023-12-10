import type { Meta, StoryObj } from '@storybook/react';
import { MainGrid } from '.';
import { Order } from '../../../services/images';

const meta = {
  title: 'Molecules/MainGrid',
  component: MainGrid
} satisfies Meta<typeof MainGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    order: Order.ASC,
    page: 1
  }
};
