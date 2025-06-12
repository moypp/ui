import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '@/components';

describe('Input 컴포넌트', () => {
  test('💄 올바르게 렌더링되어야 한다.', () => {
    render(<Input placeholder="안녕하세요" />);
    expect(screen.getByPlaceholderText('안녕하세요')).toBeInTheDocument();
  });

  test('⌨️ 값을 입력할 수 있어야한다.', async () => {
    render(<Input placeholder="입력해주세요." />);
    const input = screen.getByPlaceholderText('입력해주세요.');
    await userEvent.type(input, '안녕하세요');
    expect(input).toHaveValue('안녕하세요');
  });

  test('🩶 비활성화되었을 때 사용할 수 없어야 한다.', () => {
    render(<Input placeholder="비활성화" disabled />);
    expect(screen.getByPlaceholderText('비활성화')).toBeDisabled();
  });
});
