import type { Meta, StoryObj } from '@storybook/react';
import { CardItem } from '.';

const meta = {
  title: 'Atoms/CardItem',
  component: CardItem,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: 'radio'
    }
  }
} satisfies Meta<typeof CardItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary'
  }
};
