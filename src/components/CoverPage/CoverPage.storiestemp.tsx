/* import type { Meta, StoryObj } from '@storybook/react';
import CoverPage from './CoverPage';
import contentData from '../../pma.content.json';

const meta = {
  title: 'PlanMyApp/CoverPage',
  component: CoverPage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof CoverPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        content: {
        title: contentData.coverPage.title,
        logo: contentData.coverPage.logo,
        contributors: [
            contentData.coverPage.contributors[0],
            contentData.coverPage.contributors[1],
        ],
        },
    },
} */