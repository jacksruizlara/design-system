import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Atoms/Button",
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: 'Button clicked!' },
    startIcon: { control: false },
    endIcon: { control: false }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};