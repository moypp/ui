// import { fn } from 'storybook/test';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Input } from './component';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
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
        story: '배경이 있는 Input입니다.',
      },
    },
  },
  args: {
    placeholder: 'Input',
  },
};

export const Outline: Story = {
  parameters: {
    docs: {
      description: {
        story: '외곽선이 있는 Input입니다.',
      },
    },
  },
  args: {
    placeholder: 'Input',
    variant: 'outline',
  },
};

export default meta;
