import type { Meta, StoryObj } from '@storybook/react';
import { LogoIcon } from '.';

const meta = {
  title: 'Atoms/LogoIcon',
  component: LogoIcon,
  argTypes: {
    variant: {
      options: ['default'],
      control: 'radio'
    }
  }
} satisfies Meta<typeof LogoIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'default'
  }
};
