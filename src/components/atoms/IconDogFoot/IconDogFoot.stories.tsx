import type { Meta, StoryObj } from '@storybook/react';
import { IconDogFoot } from '.';

const meta = {
  title: 'Atoms/IconDogFoot',
  component: IconDogFoot,
  argTypes: {
    state: {
      options: ['primary', 'secondary'],
      control: 'radio'
    }
  }
} satisfies Meta<typeof IconDogFoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    state: 'primary'
  }
};

export const Secondary: Story = {
  args: {
    state: 'secondary'
  }
};
