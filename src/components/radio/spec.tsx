import { render, screen } from '@testing-library/react';
import { Radio } from '@/components';
import userEvent from '@testing-library/user-event';

describe('Radio 컴포넌트', () => {
  test('💄 올바르게 렌더링 되어야 한다.', () => {
    render(
      <Radio name="radio" data-testid="radio" defaultValue="opt1">
        <Radio.Option id="opt1" value="opt1" data-testid="opt1">
          Option 1
        </Radio.Option>
        <Radio.Option id="opt2" value="opt2" data-testid="opt2">
          Option 2
        </Radio.Option>
      </Radio>,
    );
    expect(screen.getByTestId('radio')).toBeInTheDocument();
  });

  test('✔️ 기본값을 설정할 수 있어야 한다.', () => {
    render(
      <Radio name="radio" data-testid="radio" defaultValue="opt1">
        <Radio.Option id="opt1" value="opt1" data-testid="opt1">
          Option 1
        </Radio.Option>
        <Radio.Option id="opt2" value="opt2" data-testid="opt2">
          Option 2
        </Radio.Option>
      </Radio>,
    );

    const opt1 = screen.getByTestId('opt1');
    const opt2 = screen.getByTestId('opt2');

    expect(opt1).toBeChecked();
    expect(opt2).not.toBeChecked();
  });

  test('🖱️ 클릭 시 값이 변경되어야 한다.', async () => {
    render(
      <Radio name="radio" data-testid="radio" defaultValue="opt1">
        <Radio.Option id="opt1" value="opt1" data-testid="opt1">
          Option 1
        </Radio.Option>
        <Radio.Option id="opt2" value="opt2" data-testid="opt2">
          Option 2
        </Radio.Option>
      </Radio>,
    );

    const opt1 = screen.getByTestId('opt1');
    const opt2 = screen.getByTestId('opt2');

    expect(opt1).toBeChecked();
    expect(opt2).not.toBeChecked();

    await userEvent.click(opt2);

    expect(opt1).not.toBeChecked();
    expect(opt2).toBeChecked();
  });

  test('🩶 비활성화되었을 때 선택할 수 없어야 한다.', async () => {
    render(
      <Radio name="radio" data-testid="radio" defaultValue="opt1" disabled>
        <Radio.Option id="opt1" value="opt1" data-testid="opt1">
          Option 1
        </Radio.Option>
        <Radio.Option id="opt2" value="opt2" data-testid="opt2">
          Option 2
        </Radio.Option>
      </Radio>,
    );

    const opt1 = screen.getByTestId('opt1');
    const opt2 = screen.getByTestId('opt2');

    expect(opt1).toBeDisabled();
    expect(opt2).toBeDisabled();
    expect(opt1).toBeChecked();
    expect(opt2).not.toBeChecked();

    await userEvent.click(opt2);
    expect(opt1).toBeChecked();
    expect(opt2).not.toBeChecked();
  });
});
