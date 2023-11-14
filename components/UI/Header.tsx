import Image from 'next/image';

export default function Header() {
  return (
    <header className="pt-[24px] pb-[25px] bg-black text-white">
      <nav>
        <ul className="container flex justify-start">
          <li>
            <Image
              src={'/icons/logo.svg'}
              width={180}
              height={77}
              alt="Logo for testing task"
              priority
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
