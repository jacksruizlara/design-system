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

// export const Small: Story = {
//   args: {
//     children: <Menu />,
//     size: "small"
//   },
// };

// export const Medium: Story = {
//   args: {
//     children: <Menu />,
//     size: "medium"
//   },
// };

// export const Large: Story = {
//   args: {
//     children: <Menu />,
//     size: "large"
//   },
// };

// export const Disabled: Story = {
//   args: {
//     children: <Menu />,
//     disabled: true
//   },
// };

// export const Loading: Story = {
//   args: {
//     children: <Menu />,
//     loading: true
//   },
// };

// export const WithBorder: Story = {
//   args: {
//     children: <Menu />,
//     size: "medium",
//     sx: {
//         border: "1px solid",
//         borderRadius: "5px",
//         borderColor: "primary.main",
//         color: "primary.main"
//     },
//   },
// };
