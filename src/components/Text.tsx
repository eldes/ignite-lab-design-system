import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

const Text: React.FC<Props> = function (props) {
  const Container = props.asChild ? Slot : 'span';

  return (
    <Container className={clsx(
      'text-gray-100 font-sans',
      {
        'text-xs': props.size === 'sm',
        'text-sm': props.size === 'md',
        'text-md': props.size === 'lg',

      }
    )}>{props.children}</Container>
  );
};

Text.defaultProps = {
  size: 'md',
  asChild: false,
};

export {
  Text,
  type Props as TextProps
}