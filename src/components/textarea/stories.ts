import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Textarea } from './component';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {},
};

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  parameters: {
    docs: {
      description: {
        story: '배경이 있는 Textarea입니다.',
      },
    },
  },
  args: {
    placeholder: 'Textarea',
  },
};

export const Outline: Story = {
  parameters: {
    docs: {
      description: {
        story: '외곽선이 있는 Textarea입니다.',
      },
    },
  },
  args: {
    placeholder: 'Textarea',
    variant: 'outline',
  },
};

export default meta;
