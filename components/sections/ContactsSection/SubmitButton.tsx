import Button from '@/components/UI/Button';
import Image from 'next/image';

type SubmitButtonProps = {
  isLoading: boolean;
};

export default function SubmitButton({ isLoading }: SubmitButtonProps) {
  return (
    <Button className="absolute -bottom-7 -right-7">
      {
        <>
          <span
            className={`transition-opacity ${isLoading ? 'opacity-0' : ''}`}
          >
            Отправить →
          </span>
          <Image
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity ${
              isLoading ? 'opacity-100' : 'opacity-0'
            }`}
            src={'/gif/rolling-white.gif'}
            width={30}
            height={30}
            alt="loading"
          />
        </>
      }
    </Button>
  );
}
