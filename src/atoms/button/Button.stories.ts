import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
const meta: Meta<typeof Button> = {
  component: Button,
  title: "Atoms/Button",
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on component testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Default: Story = {
  args: {
    children: "Button",
    onClick: () => { alert("Button clicked!"); }
  },
};

export const Contained: Story = {
  args: {
    children: "Button",
    onClick: () => { alert("Primary button clicked!"); },
    variant: "contained"
  },
};

export const Outlined: Story = {
  args: {
    children: "Button",
    onClick: () => { alert("Secondary button clicked!"); },
    variant: "outlined"
  },
};

export const Text: Story = {
  args: {
    children: "Button",
    onClick: () => { alert("Text button clicked!"); },
    variant: "text"
  },
};

export const Small: Story = {
  args: {
    children: "Button",
    onClick: () => { alert("Small button clicked!"); },
    size: "small"
  },
};

export const Medium: Story = {
  args: {
    children: "Button",
    onClick: () => { alert("Medium button clicked!"); },
    size: "medium"
  },
};

export const Large: Story = {
  args: {
    children: "Button",
    onClick: () => { alert("Large button clicked!"); },
    size: "large"
  },
};

export const Disabled: Story = {
  args: {
    children: "Button",
    onClick: () => { alert("This should not be clicked!"); },
    disabled: true
  },
};

export const WithStartIcon: Story = {
  args: {
    children: "Button",
    onClick: () => { alert("Button with start icon clicked!"); },
    startIcon: "🚀"
  },
};

export const WithEndIcon: Story = {
  args: {
    children: "Button",
    onClick: () => { alert("Button with end icon clicked!"); },
    endIcon: "➡️"
  },
};

export const Loading: Story = {
  args: {
    children: "Button",
    onClick: () => { alert("This should not be clicked while loading!"); },
    loading: true,
  },
};

export const LoadingStart: Story = {
  args: {
    children: "Button",
    onClick: () => { alert("This should not be clicked while loading!"); },
    loading: true,
    loadingPosition: "start",
  },
};

export const LoadingEnd: Story = {
  args: {
    children: "Button",
    onClick: () => { alert("This should not be clicked while loading!"); },
    loading: true,
    loadingPosition: "end",
  },
};

export const FullWidth: Story = {
  args: {
    children: "Button",
    onClick: () => { alert("Full width button clicked!"); },
    fullWidth: true,
  },
};
