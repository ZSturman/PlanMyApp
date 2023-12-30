import type { Meta, StoryObj } from '@storybook/react';

import PmaContainer from './PmaContainer';

const meta = {
  title: 'PlanMyApp/PmaContainer',
  component: PmaContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof PmaContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
