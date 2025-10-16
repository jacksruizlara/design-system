import type { Meta, StoryObj } from '@storybook/react';
import MainNavbar from './MainNavbar';

const meta: Meta<typeof MainNavbar> = {
  title: 'Molecules/MainNavbar',
  component: MainNavbar,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MainNavbar>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'MainNavbar',
  },
};
