import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/atoms/button';

const meta: Meta<typeof Button> = {
  title: 'atoms/Button',
  component: Button,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='flex h-full w-full items-center justify-center bg-gray-600'>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Button>;
export const Default: Story = {
  args: {
    children: 'Saiba mais...',
    disabled: false,
  },
};
