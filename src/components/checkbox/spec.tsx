import { render, screen } from '@testing-library/react';
import { Checkbox } from '@/components';
import userEvent from '@testing-library/user-event';

describe('Checkbox 컴포넌트', () => {
  test('💄 올바르게 렌더링되어야 한다.', () => {
    render(<Checkbox data-testid="ckb" />);
    expect(screen.getByTestId('ckb')).toBeInTheDocument();
  });

  test('✔️ 기본값을 설정할 수 있어야 한다.', () => {
    render(<Checkbox data-testid="ckb" defaultChecked />);
    expect(screen.getByTestId('ckb')).toBeChecked();
  });

  test('🖱️ 클릭 시 값이 변경되어야 한다.', async () => {
    render(<Checkbox data-testid="ckb" />);

    const checkbox = screen.getByTestId('ckb');
    expect(checkbox).not.toBeChecked();

    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  test('🏷️ 라벨을 클릭해도 값이 변경되어야 한다.', async () => {
    render(
      <>
        <Checkbox id="ckb1" data-testid="ckb" />
        <label htmlFor="ckb1">라벨</label>
      </>,
    );

    const checkbox = screen.getByTestId('ckb');
    const label = screen.getByText('라벨');
    expect(checkbox).not.toBeChecked();

    await userEvent.click(label);
    expect(checkbox).toBeChecked();

    await userEvent.click(label);
    expect(checkbox).not.toBeChecked();
  });

  test('🩶 비활성화되었을 때 선택할 수 없어야 한다.', async () => {
    render(<Checkbox data-testid="ckb" disabled />);

    const checkbox = screen.getByTestId('ckb');
    expect(checkbox).toBeDisabled();

    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});
