import type { Meta, StoryObj } from '@storybook/react';
import { CardWrapper } from '.';

const meta = {
  title: 'Atoms/CardWrapper',
  component: CardWrapper,
  argTypes: {
    variant: {
      options: ['primary', 'smallRadiusBorder', 'bigRadiusBorder'],
      control: 'radio'
    }
  }
} satisfies Meta<typeof CardWrapper>;

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
