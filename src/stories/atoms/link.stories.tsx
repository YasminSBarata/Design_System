import { Meta, StoryObj } from '@storybook/react';
import Link from '@/components/atoms/link';

const meta: Meta<typeof Link> = {
  title: 'atoms/Link',
  component: Link,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='flex h-full w-full items-center justify-center bg-amber-50'>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Link>;
export const Default: Story = {
  args: {
    children: 'Saiba mais...',
  },
};
