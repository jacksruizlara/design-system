import type { Meta, StoryObj } from '@storybook/react';
import IconButton from "./IconButton";
import { Menu } from '@mui/icons-material';

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: "Atoms/IconButton",
  tags: ["autodocs"],
  argTypes: {
    children: { control: false },
  }
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    children: <Menu />,
  },
};
