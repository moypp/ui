import { Preview } from '@storybook/react-webpack5';
import '@/styles/tailwind.css';
import './styles.css';

const preview: Preview = {
  tags: ['autodocs', process.env.NODE_ENV === 'development' ? 'dev' : '!dev'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
