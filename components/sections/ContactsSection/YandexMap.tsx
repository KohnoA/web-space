import { YANDEX_MAP_LINK } from '@/constants';

export default function YandexMap() {
  return (
    <>
      <iframe className="w-[100%] h-[100%]" src={YANDEX_MAP_LINK}></iframe>
      <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-black/20 pointer-events-none"></div>
    </>
  );
}
