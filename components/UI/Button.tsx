import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
};

export default function Button({
  className,
  href,
  onClick,
  children,
}: ButtonProps) {
  const Component = href ? 'a' : 'button';

  return (
    <Component
      className={`${
        className ?? ''
      } px-16 py-4 text-white text-[21px] text-center font-light bg-black transition-colors hover:bg-darkGrey active:bg-lightGrey`}
      onClick={onClick}
    >
      {children}
    </Component>
  );
}
