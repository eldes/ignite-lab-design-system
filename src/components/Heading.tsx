import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

const Heading: React.FC<Props> = function (props) {
  const Container = props.asChild ? Slot : 'h2';

  return (
    <Container className={clsx(
      'text-gray-100 font-bold font-sans',
      {
        'text-lg': props.size === 'sm',
        'text-xl': props.size === 'md',
        'text-xxl': props.size === 'lg',

      }
    )}>{props.children}</Container>
  );
};

Heading.defaultProps = {
  size: 'md',
  asChild: false,
};

export {
  Heading,
  type Props as HeadingProps
}