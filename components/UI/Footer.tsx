import { DEVELOPER_NUMBER, DEVELOPER_GITHUB } from '@/constants';

export default function Footer() {
  return (
    <footer className="pt-[58px] pb-[108px] bg-black text-white">
      <ul className="container flex justify-start flex-wrap gap-x-[168px]">
        <li>
          <p className="mb-[20px]">Выполнил</p>
          <a
            href={DEVELOPER_GITHUB}
            className="inline-block ml-[30px] font-medium text-[21px] transition-opacity hover:opacity-70"
          >
            Кохно Алекасндр
          </a>
        </li>
        <li>
          <p className="mb-[20px]">Телефон</p>
          <a
            href={DEVELOPER_NUMBER.LINK}
            className="inline-block ml-[30px] font-medium text-[21px] transition-opacity hover:opacity-70"
          >
            {DEVELOPER_NUMBER.READABLE}
          </a>
        </li>
      </ul>
    </footer>
  );
}
