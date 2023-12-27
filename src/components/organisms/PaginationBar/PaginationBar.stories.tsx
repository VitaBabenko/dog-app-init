import type { Meta, StoryObj } from '@storybook/react';
import { PaginationBar } from '.';

const meta = {
  title: 'Organisms/PaginationBar',
  component: PaginationBar
} satisfies Meta<typeof PaginationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    page: 1
  }
};
