import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './component';

describe('Button 컴포넌트', () => {
  test('💄 올바르게 렌더링되어야 한다.', () => {
    render(<Button onClick={() => {}}>안녕하세요</Button>);
    expect(screen.getByText('안녕하세요')).toBeInTheDocument();
  });

  test('🖱️클릭 이벤트가 올바르게 호출되어야 한다.', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>클릭!</Button>);

    const button = screen.getByText('클릭!');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('🩶 비활성화되었을 때 클릭할 수 없어야 한다.', () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled>
        비활성화
      </Button>,
    );

    const button = screen.getByText('비활성화');
    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
    expect(button).toBeDisabled();
  });
});
