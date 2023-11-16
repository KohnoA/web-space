import { Slider, SliderItem } from '@/components/UI/Slider';

type SlideInfoType = {
  count: string;
  caption: string;
  description: {
    title: string;
    body: string;
  };
};

const SLIDES_INFO: SlideInfoType[] = [
  {
    count: '3',
    caption: 'и не более',
    description: {
      title: 'Оценка дизайнеру:',
      body: 'Не заслужил, там криво, там непонятно',
    },
  },
  {
    count: '5',
    caption: 'звезд',
    description: {
      title: 'Сложность задания:',
      body: 'Миссия с вертолетиком была легче...',
    },
  },
  {
    count: '9',
    caption: 'часов',
    description: {
      title: 'Потребовалось на задание:',
      body: 'Справился быстро забыл пообедать',
    },
  },
];

export default function SliderSection() {
  return (
    <section className="container section">
      <Slider>
        {SLIDES_INFO.map(({ count, caption, description }) => (
          <SliderItem key={description.title}>
            <div className="flex gap-[100px]">
              <p className="text-darkGrey font-black text-[250px] leading-[0.85]">
                {count}
              </p>
              <div className="font-medium">
                <h4 className="text-[26px] mb-[26px] pt-[20px]">
                  {description.title}
                </h4>
                <p>{description.body}</p>
              </div>
            </div>
            <p className="text-darkGrey font-black text-[128px] leading-[0.85]">
              {caption}
            </p>
          </SliderItem>
        ))}
      </Slider>
    </section>
  );
}
