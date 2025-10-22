import type { Meta, StoryObj } from '@storybook/react';
import MainNavbar from './MainNavbar';

const meta: Meta<typeof MainNavbar> = {
  title: 'Molecules/MainNavbar',
  component: MainNavbar,
  tags: ['autodocs'],
  parameters: {
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile (375px)',
          styles: { width: '375px', height: '667px' },
        },
        tablet: {
          name: 'Tablet (768px)',
          styles: { width: '768px', height: '1024px' },
        },
        desktop: {
          name: 'Desktop (1280px)',
          styles: { width: '1280px', height: '800px' },
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MainNavbar>;

export const Primary: Story = {
  args: {
    logo: {
      text: "LONG CONTENT LOGO",
      shortText: "SL"
    },
    avatar: {
      alt: "Jackson Ruiz",
      src: "https://media.licdn.com/dms/image/v2/C5603AQEh3ne8L2GoJQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516812791033?e=1762992000&v=beta&t=-YVPU3POC037N1EBm9pS_6FSLNE3I7bQ5BiSjOO6B_s"
    }
  },
};
