import { fn } from 'storybook/test';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Button } from './component';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: { onClick: fn(), children: 'Button' },
};

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Primary Color를 사용한 Solid 버튼입니다.',
      },
    },
  },
};

export const Secondary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Secondary Color를 사용한 Solid 버튼입니다.',
      },
    },
  },
  args: {
    variant: 'secondary',
  },
};

export const Outline: Story = {
  parameters: {
    docs: {
      description: {
        story: '외곽선이 존재하는 버튼입니다.',
      },
    },
  },
  args: {
    variant: 'outline',
  },
};

export const Ghost: Story = {
  parameters: {
    docs: {
      description: {
        story: '배경/외곽선이 존재하지 않는 버튼입니다.',
      },
    },
  },
  args: {
    variant: 'ghost',
  },
};

export const Icon: Story = {
  parameters: {
    docs: {
      description: {
        story: '아이콘 버튼입니다.',
      },
    },
  },
  args: {
    children: (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 5.99994C17.8124 5.81247 17.5581 5.70715 17.293 5.70715C17.0278 5.70715 16.7735 5.81247 16.586 5.99994L12 10.5859L7.41397 5.99994C7.22644 5.81247 6.97213 5.70715 6.70697 5.70715C6.44181 5.70715 6.1875 5.81247 5.99997 5.99994C5.8125 6.18747 5.70718 6.44178 5.70718 6.70694C5.70718 6.9721 5.8125 7.22641 5.99997 7.41394L10.586 11.9999L5.99997 16.5859C5.8125 16.7735 5.70718 17.0278 5.70718 17.2929C5.70718 17.5581 5.8125 17.8124 5.99997 17.9999C6.1875 18.1874 6.44181 18.2927 6.70697 18.2927C6.97213 18.2927 7.22644 18.1874 7.41397 17.9999L12 13.4139L16.586 17.9999C16.7735 18.1874 17.0278 18.2927 17.293 18.2927C17.5581 18.2927 17.8124 18.1874 18 17.9999C18.1874 17.8124 18.2928 17.5581 18.2928 17.2929C18.2928 17.0278 18.1874 16.7735 18 16.5859L13.414 11.9999L18 7.41394C18.1874 7.22641 18.2928 6.9721 18.2928 6.70694C18.2928 6.44178 18.1874 6.18747 18 5.99994Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
};

export const asChild: Story = {
  parameters: {
    docs: {
      description: {
        story: '하위에 작성된 요소에 Button의 디자인을 적용합니다.',
      },
    },
  },
  args: {
    asChild: true,
    children: (
      <a
        href="#"
        onClick={(event) => {
          event?.preventDefault();
        }}
      >
        Link Button
      </a>
    ),
    onClick: undefined,
  },
};

export default meta;
