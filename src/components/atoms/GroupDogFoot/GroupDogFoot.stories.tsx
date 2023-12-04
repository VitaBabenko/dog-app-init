import type { Meta, StoryObj } from '@storybook/react';
import { GroupDogFoot } from '.';

const meta = {
  title: 'Atoms/GroupDogFoot',
  component: GroupDogFoot,
  argTypes: {
    state: {
      options: ['default'],
      control: 'radio'
    }
  }
} satisfies Meta<typeof GroupDogFoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    state: 'default'
  }
};
