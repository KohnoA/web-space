type PostIdsResponseType = {
  data: Array<{ id: string }>
}

export const getInstPostIds = async (userId: string | undefined, accessToken: string | undefined, quantity = 8) => {
  if (!userId || !accessToken) {
    throw new Error('Incorrect access token or user id');
  }

  const res = await fetch(`https://graph.instagram.com/${userId}/media?access_token=${accessToken}`);
  const { data }: PostIdsResponseType = await res.json();
  const postIds = data.map((item) => item.id).slice(0, quantity);

  return postIds;
};