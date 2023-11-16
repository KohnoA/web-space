import { MOCK_INSTAGRAM } from '@/constants';
import { getInstPostIds } from '@/utils/getInstPostIds';
import { getInstPostsById } from '@/utils/getInstPostsById';
import Image from 'next/image';

export const fetchPosts = async (): Promise<[string[], boolean | undefined]> => {
  let data: string[] = [];
  let error;

  try {
    const arrayOfId = await getInstPostIds(
      process.env.NEXT_PUBLIC_INSTAGRAM_USER_ID,
      process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN
    );
    data = await getInstPostsById(
      arrayOfId,
      process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN
    );
  } catch {
    error = true;
  }

  return [data, error];
};

export default async function PostsSection() {
  const [data, error] = await fetchPosts();

  return (
    <section className="container section">
      <h2 className="font-bold text-[52px] text-center mb-[20px]">Instagram</h2>

      <p className="text-center mb-[30px]">
        <a
          className="inline-block p-[5px] font-medium text-[25px] underline decoration-2 transition-all hover:opacity-80 hover:no-underline"
          href={MOCK_INSTAGRAM}
        >
          Ссылка на пользователя
        </a>
      </p>

      {error && (
        <p className="py-[30px] flex justify-center items-center">
          Не удалось загрузить фотографии, попробуйте позже.
        </p>
      )}

      <ul className="grid grid-cols-4 grid-rows-2 max-w-[1152px] mx-auto my-0">
        {data.map((link) => (
          <li
            key={link}
            className="relative cursor-pointer w-[100%] height-[100%] aspect-square select-none"
          >
            <div className="absolute z-10 top-0 left-0 w-[100%] h-[100%] flex justify-center items-center text-[12px] font-bold text-white bg-black/80 transition-opacity opacity-0 hover:opacity-100">
              <div className="max-w-[150px] text-center">
                <p className="mb-[15px]">пишите свои вопросы в комментарии</p>
                <p>👇👇👇</p>
              </div>
            </div>
            <Image src={link} fill sizes="288px" alt="Mock post" />
          </li>
        ))}
      </ul>
    </section>
  );
}
