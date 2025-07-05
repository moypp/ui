'use client';

import { createContext, useContext, useState } from 'react';
import { Circle } from 'lucide-react';
import { cn } from '@/utils';

type Variant = 'primary' | 'secondary' | 'outline';
type Orientation = 'horizontal' | 'vertical';

interface RadioProps {
  /** 라디오 옵션들 (Radio.Option) */
  children: React.ReactNode;
  /** 라디오그룹 이름 */
  name: string;
  /** className */
  className?: string;
  /** 초기 선택된 값 */
  defaultValue?: string;
  /** 값이 변경될 때 호출되는 콜백 함수 */
  onChange?: (value: string) => void;
  /** 비활성 상태 여부 */
  disabled?: boolean;
  /** 라디오 버튼 스타일 variant */
  variant?: Variant;
  /** 아이템 정렬 방향 */
  orientation?: Orientation;
}

interface RadioContextProps {
  name: string;
  selected: string | null;
  onSelect: (value: string) => void;
  disabled: boolean;
  variant: Variant;
}

const RadioContext = createContext<RadioContextProps | null>(null);

/*
 * RadioGroup (Root, Radio)
 */

const RadioGroup = ({
  name,
  children,
  className,
  defaultValue,
  onChange,
  disabled,
  variant = 'primary',
  orientation = 'horizontal',
  ...props
}: RadioProps & Omit<React.ComponentPropsWithoutRef<'div'>, keyof RadioProps>) => {
  const [selected, setSelected] = useState<string | null>(defaultValue ?? null);

  const handleSelect = (value: string) => {
    if (disabled) {
      return;
    }
    setSelected(value);
    onChange?.(value);
  };

  return (
    <RadioContext.Provider
      value={{
        name,
        selected,
        disabled: !!disabled,
        onSelect: handleSelect,
        variant,
      }}
    >
      <div
        role="radiogroup"
        className={cn(
          'flex',
          orientation === 'horizontal' && 'items-center gap-4',
          orientation === 'vertical' && 'flex-col gap-2',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </RadioContext.Provider>
  );
};

const useRadioContext = () => {
  const context = useContext(RadioContext);
  if (!context) {
    throw new Error('Radio의 하위 요소들은 Radio 컴포넌트 내부에 작성되어야합니다.');
  }
  return context;
};

/*
 * Radio.Option
 */

interface OptionProps {
  id: string;
  /** 값 */
  value: string;
  /** Label에 들어갈 내용 */
  children?: React.ReactNode;
  /** className */
  className?: string;
}

const Option = ({
  id,
  value,
  children,
  className,
  ...props
}: OptionProps & Omit<React.ComponentPropsWithoutRef<'input'>, keyof OptionProps>) => {
  const { name, selected, disabled, onSelect, variant } = useRadioContext();

  const handleSelect = () => onSelect(value);

  return (
    <label className="inline-flex items-center gap-1">
      <input
        id={id}
        className="peer hidden"
        aria-hidden
        type="radio"
        name={name}
        checked={selected === value}
        value={value}
        onChange={handleSelect}
        disabled={disabled}
        {...props}
      />
      <span
        role="radio"
        aria-checked={selected === value}
        className={cn(
          'group',
          'inline-flex size-4 items-center justify-center rounded-full',
          variant === 'primary' &&
            'active:bg-secondary bg-secondary/80 hover:bg-secondary/70 text-primary',
          variant === 'secondary' &&
            'active:bg-primary bg-primary/80 hover:bg-primary/70 text-white',
          variant === 'outline' &&
            'inset-ring-primary hover:bg-primary/10 text-primary inset-ring-1',
          'peer-disabled:pointer-events-none peer-disabled:opacity-70',
          className,
        )}
        onClick={handleSelect}
      >
        <Circle
          className={cn(
            'size-[calc(100%-0.35rem)] fill-current stroke-3 opacity-0 group-peer-checked:opacity-100',
          )}
        />
      </span>
      {children}
    </label>
  );
};

export const Radio = Object.assign(RadioGroup, { Option });
