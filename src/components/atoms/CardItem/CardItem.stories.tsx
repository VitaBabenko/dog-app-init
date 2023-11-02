import type { Meta, StoryObj } from '@storybook/react';
import { CardItem } from '.';

const meta = {
  title: 'Atoms/CardItem',
  component: CardItem,
  argTypes: {
    variant: {
      options: ['primary', 'smallRadiusBorder', 'bigRadiusBorder'],
      control: 'radio'
    }
  }
} satisfies Meta<typeof CardItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    borderRadius: 20
  }
};

export const SmallRadiusBorder: Story = {
  args: {
    variant: 'smallRadiusBorder',
    borderRadius: 10
  }
};

export const BigRadiusBorder: Story = {
  args: {
    variant: 'bigRadiusBorder',
    borderRadius: 40
  }
};
