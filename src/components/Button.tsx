import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

type Props = {
  text: string;
  asChild?: boolean;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<Props> = function (props) {
  const Container = props.asChild ? Slot : 'button';

  return (
    <Container className={clsx(
      'py-3 px-4 rounded font-semibold text-sm w-full transition-colors',
      {
        'bg-cyan-500 text-black hover:bg-cyan-300': props.variant === 'primary',
        'border border-solid border-cyan-500 text-cyan-500  hover:border-cyan-300 hover:text-cyan-300': props.variant === 'secondary'
      }
    )}>{props.text}</Container>
  );
};

Button.defaultProps = {
  asChild: false,
  variant: 'primary',
};

export {
  Button,
  type Props as ButtonProps
}