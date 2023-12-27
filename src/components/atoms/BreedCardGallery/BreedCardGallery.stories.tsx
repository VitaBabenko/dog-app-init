import type { Meta, StoryObj } from '@storybook/react';
import { BreedCardGallery } from '.';

const meta = {
  title: 'Atoms/BreedCardGallery',
  component: BreedCardGallery
} satisfies Meta<typeof BreedCardGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: 1,
    image: {
      url: ''
    },
    name: '',
    temperament: ''
  }
};
