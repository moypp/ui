import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Checkbox } from './component';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {},
};

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Primary Color를 사용한 Checkbox입니다.',
      },
    },
  },
  args: {
    defaultChecked: true,
  },
};

export const Secondary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Secondary Color를 사용한 Checkbox입니다.',
      },
    },
  },
  args: {
    defaultChecked: true,
    variant: 'secondary',
  },
};

export const Outline: Story = {
  parameters: {
    docs: {
      description: {
        story: '외곽선이 존재하는 Checkbox입니다.',
      },
    },
  },
  args: {
    defaultChecked: true,
    variant: 'outline',
  },
};

export default meta;
