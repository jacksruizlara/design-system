import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  component: Card,
  title: "Atoms/Card",
  tags: ["autodocs"],
  argTypes: {

  }
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: "Card",
    cardTitle: "SAMPLE CARD TITLE",
    cardFooter: "SAMPLE CARD FOOTER",
  },
};