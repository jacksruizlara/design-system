import type { Meta, StoryObj } from '@storybook/react';
import PaletteComponent from './Palette.tsx';

const meta: Meta<typeof PaletteComponent> = {
    component: PaletteComponent,
    title: 'Theme/Palette',
};

export default meta;
type Story = StoryObj<typeof PaletteComponent>;

export const Default: Story = {
    args: {},
};
