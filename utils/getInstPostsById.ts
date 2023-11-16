export type PostsResponseType = Array<{
  id: string;
  media_url: string;
}>

export const getInstPostsById = async (
  arrayOfId: string[],
  accessToken: string | undefined
) => {
  if (!accessToken) {
    throw new Error('Incorrect access token');
  }

  const res = await Promise.all(
    arrayOfId.map((id) =>
      fetch(
        `https://graph.instagram.com/${id}?access_token=${accessToken}&fields=media_url,permalink`
      )
    )
  );
  const data: PostsResponseType = await Promise.all(res.map((item) => item.json()));
  const posts = data.map(({ media_url }) => media_url);

  return posts;
};
