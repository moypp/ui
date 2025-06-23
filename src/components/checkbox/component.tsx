import { useState } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/utils';

type Variant = 'primary' | 'secondary' | 'outline';

interface BaseProps {
  /** className */
  className?: string;
  /** 초기값 */
  defaultChecked?: boolean;
  /** 비활성 상태 여부 */
  disabled?: boolean;
  /** 체크박스 스타일 variant */
  variant?: Variant;
}

type Props = BaseProps &
  Omit<React.ComponentPropsWithoutRef<'input'>, keyof BaseProps | 'type' | 'value' | 'onChange'>;

export const Checkbox = ({
  className,
  disabled,
  defaultChecked,
  variant = 'primary',
  ...props
}: Props) => {
  const [checked, setChecked] = useState(!!defaultChecked);

  const handleToggleCheck = () => setChecked((prev) => !prev);

  return (
    <>
      <input
        type="checkbox"
        className="peer hidden"
        aria-hidden
        checked={checked}
        onChange={handleToggleCheck}
        disabled={disabled}
        {...props}
      />
      <span
        role="checkbox"
        aria-checked={checked}
        className={cn(
          'group',
          'inline-flex size-4 items-center justify-center rounded',
          variant === 'primary' &&
            'bg-primary/30 hover:bg-primary/50 active:bg-primary peer-checked:bg-primary/80 peer-checked:hover:bg-primary/70 text-white',
          variant === 'secondary' &&
            'bg-secondary/30 hover:bg-secondary/50 active:bg-secondary peer-checked:bg-secondary/80 peer-checked:hover:bg-secondary/70 text-primary',
          variant === 'outline' &&
            'inset-ring-primary hover:bg-primary/10 text-primary inset-ring-1',
          'peer-disabled:pointer-events-none peer-disabled:opacity-70',
          className,
        )}
        onClick={handleToggleCheck}
      >
        <Check
          className={cn(
            'size-[calc(100%-0.25rem)] stroke-3 opacity-0 group-peer-checked:opacity-100',
          )}
        />
      </span>
    </>
  );
};
