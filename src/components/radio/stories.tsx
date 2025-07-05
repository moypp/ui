import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Radio } from './component';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: false,
    },
  },
  args: {
    defaultValue: 'tomato',
    children: [
      <Radio.Option id="tomato" value="tomato">
        토마토
      </Radio.Option>,
      <Radio.Option id="potato" value="potato">
        감자
      </Radio.Option>,
      <Radio.Option id="sweetpotato" value="sweetpotato">
        고구마
      </Radio.Option>,
    ],
  },
};

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Primary Color를 사용한 Radio입니다.',
      },
    },
  },
  args: {
    name: 'vegetable1',
  },
};

export const Secondary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Secondary Color를 사용한 Radio입니다.',
      },
    },
  },
  args: {
    name: 'vegetable2',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  parameters: {
    docs: {
      description: {
        story: '외곽선이 존재하는 Radio입니다.',
      },
    },
  },
  args: {
    name: 'vegetable3',
    variant: 'outline',
  },
};

export const Vertical: Story = {
  parameters: {
    docs: {
      description: {
        story: '세로 방향으로 정렬된 Radio입니다.',
      },
    },
  },
  args: {
    name: 'vegetable4',
    orientation: 'vertical',
  },
};

export default meta;
