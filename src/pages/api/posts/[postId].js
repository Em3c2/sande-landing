import contentService from '../../../../services/contentService';

const handler = async ({ query: { postId } }, res) => {
  const data = await contentService.getPost(postId);
  res.status(200).json(data);
}

export default handler;