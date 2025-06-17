import { cn } from '@/utils';

interface BaseProps {
  className?: string;
  placeholder?: string;
  variant?: 'solid' | 'outline';
  disabled?: boolean;
}

type Props = BaseProps & Omit<React.ComponentPropsWithoutRef<'textarea'>, keyof BaseProps>;

export const Textarea = ({ className, placeholder, variant = 'solid', ...props }: Props) => {
  return (
    <textarea
      className={cn(
        'scrollbar',
        'resize-none rounded-lg px-2.5 py-2 outline-0 duration-300',
        'disabled:pointer-events-none disabled:cursor-default disabled:opacity-75',
        variant === 'solid' &&
          'not-placeholder-shown:bg-secondary/80 focus:bg-secondary-dark bg-secondary/50',
        variant === 'outline' &&
          'inset-ring-primary/50 focus:inset-ring-primary focus:bg-primary/10 not-placeholder-shown:inset-ring-primary/75 inset-ring-2',
        className,
      )}
      placeholder={placeholder || ' '}
      {...props}
    />
  );
};
