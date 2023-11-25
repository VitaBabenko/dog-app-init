import type { Meta, StoryObj } from '@storybook/react';
import { PaginationWrap } from '.';

const meta = {
  title: 'Organisms/PaginationWrap',
  component: PaginationWrap
} satisfies Meta<typeof PaginationWrap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    page: 1
  }
};
