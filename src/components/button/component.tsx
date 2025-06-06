import { useEffect } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/utils';

type Size = 'lg' | 'md' | 'sm';
type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';

interface BaseProps {
  /** 내부에 들어갈 콘텐츠 */
  children: React.ReactNode;
  /** 클릭 이벤트 핸들러 */
  onClick?: (event?: React.MouseEvent) => void;
  /** 비활성 상태 여부 */
  disabled?: boolean;
  /** className */
  className?: string;
  /** 하위에 작성된 컴포넌트에 적용시킬지 여부 */
  asChild?: boolean;
  /** 버튼 크기 */
  size?: Size;
  /** 버튼 스타일 variant */
  variant?: Variant;
}

type Props = BaseProps & Omit<React.ComponentPropsWithoutRef<'button'>, keyof BaseProps>;

export const Button = ({
  children,
  onClick,
  disabled,
  className,
  asChild,
  type,
  size = 'md',
  variant = 'primary',
  ...props
}: Props) => {
  const Component = asChild ? Slot : 'button';

  const handleClick = (event: React.MouseEvent) => {
    if (disabled) {
      return;
    }
    if (asChild) {
      return;
    }
    onClick?.(event);
  };

  useEffect(() => {
    if (asChild && process.env.NODE_ENV === 'development') {
      if (onClick) {
        console.warn('asChild 사용 시 onClick은 무시됩니다. 하위 컴포넌트에 직접 지정해주세요.');
      }
      if (type) {
        console.warn('asChild 사용 시 type은 무시됩니다.');
      }
      if (disabled) {
        console.warn('asChild 사용 시 disabled는 aria-disabled로 처리됩니다.');
      }
    }
  }, [asChild, onClick, type, disabled]);

  return (
    <Component
      type={!asChild ? type : undefined}
      className={cn(
        'inline-block cursor-pointer rounded-lg duration-300',
        'disabled:pointer-events-none disabled:cursor-default disabled:opacity-75',
        'aria-disabled:pointer-events-none aria-disabled:cursor-default aria-disabled:opacity-75',
        // sizes
        size === 'lg' && 'px-4.5 py-2 text-lg has-[svg]:px-2!',
        size === 'md' && 'px-4 py-2 text-base has-[svg]:px-2!',
        size === 'sm' && 'px-3 py-1.5 text-sm has-[svg]:px-1.5!',
        // variants
        variant === 'primary' && 'bg-main hover:bg-main-dark text-white',
        variant === 'secondary' && 'bg-sub hover:bg-sub-dark text-black',
        variant === 'ghost' && 'hover:bg-main/20 text-foreground bg-transparent',
        variant === 'outline' &&
          'inset-ring-main-dark hover:bg-main/20 text-foreground bg-transparent inset-ring-1',
        className,
      )}
      onClick={handleClick}
      disabled={!asChild ? disabled : undefined}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </Component>
  );
};

Button.displayName = 'Button';
