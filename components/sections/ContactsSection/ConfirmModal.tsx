import Button from '@/components/UI/Button';

type ConfirmModalProps = {
  close: () => void;
}

export default function ConfirmModal({close}: ConfirmModalProps) {
  return (
    <div className="fixed z-20 top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black/20">
      <div className="p-12 bg-white text-darkGrey text-center">
        <p className="text-[28px] mb-10">
          Обратный звонок зарегистрирован. <br /> Вам перезвонят в ближайшее
          время.
        </p>
        <Button onClick={close}>Ок</Button>
      </div>
    </div>
  );
}
