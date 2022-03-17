import contentService from '../../../../services/contentService';

const handler = async ({ query: { postId } }, res) => {
  try {
    const data = await contentService.getPost(postId);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(200).json({ error });
  }
}

export default handler;