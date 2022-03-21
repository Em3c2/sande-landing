import contentService from '../../../../services/_contentService';

const handler = async ({ query: { postId } }, res) => {
  try {
    const data = await contentService.getAll();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(200).json({ error });
  }
}

export default handler;