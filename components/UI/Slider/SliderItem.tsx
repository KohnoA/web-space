import { ReactNode } from 'react';

type SliderItemProps = {
  children: ReactNode;
  className?: string;
};

export default function SliderItem({ children, className }: SliderItemProps) {
  return (
    <div
      className={`w-[100%] h-[372px] mb-[30px] p-6 snap-always snap-center shadow-personal overflow-hidden ${
        className ?? ''
      }`}
    >
      {children}
    </div>
  );
}
