'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import ConfirmModal from './ConfirmModal';
import SubmitButton from './SubmitButton';
import YandexMap from './YandexMap';

interface IFormInput {
  name: string;
  phone: string;
  conditions: boolean;
}

export default function ContactsSection() {
  const [confirm, setConfirm] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async ({ name, phone }) => {
    setIsLoading(true);

    await fetch(process.env.NEXT_PUBLUC_API_HOST!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, phone }),
    });
  
    setConfirm(true);
    setIsLoading(false);
    reset();
  };

  return (
    <section className="relative w-[100%] h-[544px]">
      {confirm && <ConfirmModal close={() => setConfirm(false)} />}

      <YandexMap />

      <div className="relative container">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="absolute z-20 bottom-[272px] translate-y-1/2 right-9 flex flex-col pt-[30px] pb-[50px] pl-[44px] pr-[105px] text-black bg-white shadow-personal"
        >
          <h4 className="mb-[44px] text-[40px] text-black/40">
            Обратный звонок
          </h4>

          {errors.name && (
            <p className="text-red-700 pb-1">{errors.name.message}</p>
          )}
          <input
            {...register('name', {
              required: 'Заполните это поле',
            })}
            className="bg-lightGrey/60 text-black/50 py-[13px] pl-[41px] mb-[24px]"
            type="text"
            placeholder="Ваше имя"
          />

          {errors.phone && (
            <p className="text-red-700 pb-1">{errors.phone.message}</p>
          )}
          <input
            {...register('phone', {
              required: 'Заполните это поле',
            })}
            className="bg-lightGrey/60 text-black/50 py-[13px] pl-[41px] mb-[24px]"
            type="tel"
            placeholder="Номер телефона"
          />

          {errors.conditions && (
            <p className="text-red-700 pb-1">{errors.conditions.message}</p>
          )}
          <label className="flex items-center gap-[20px] text-black/40 cursor-pointer">
            <input
              {...register('conditions', {
                required: 'Согласитесь на использование данных',
              })}
              className="w-[20px] h-[20px] cursor-pointer"
              type="checkbox"
            />
            Согласие на обработку персональных данных
          </label>

          <SubmitButton isLoading={isLoading} />
        </form>
      </div>
    </section>
  );
}
