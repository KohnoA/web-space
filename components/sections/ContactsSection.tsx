'use client';

import Button from '@/components/UI/Button';
import { YANDEX_MAP_LINK } from '@/constants';
import Image from 'next/image';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
  name: string;
  phone: string;
  conditions: boolean;
}

export default function ContactsSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();
  const [confirm, setConfirm] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<IFormInput> = ({ name, phone, conditions }) => {
    setIsLoading(true);

    setTimeout(() => {
      console.log(name);
      console.log(phone);
      console.log(conditions);

      setConfirm(true);
      setIsLoading(false);
      reset();
    }, 1000);
  };

  return (
    <section className="relative w-[100%] h-[544px]">
      {confirm && (
        <div className="fixed z-20 top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black/20">
          <div className="p-12 bg-white text-darkGrey text-center">
            <p className="text-[28px] mb-10">
              Обратный звонок зарегистрирован. <br /> Вам перезвонят в ближайшее
              время.
            </p>
            <Button onClick={() => setConfirm(false)}>Ок</Button>
          </div>
        </div>
      )}
      <iframe className="w-[100%] h-[100%]" src={YANDEX_MAP_LINK}></iframe>
      <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-black/20 pointer-events-none"></div>

      <div className="relative container">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="absolute z-10 bottom-[272px] translate-y-1/2 right-9 flex flex-col pt-[30px] pb-[50px] pl-[44px] pr-[105px] text-black bg-white shadow-personal"
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

          <Button className="absolute -bottom-7 -right-7">
            {
              <>
                <span
                  className={`transition-opacity ${
                    isLoading ? 'opacity-0' : ''
                  }`}
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
        </form>
      </div>
    </section>
  );
}
