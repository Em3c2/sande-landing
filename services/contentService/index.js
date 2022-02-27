import fs from 'fs';
import { read } from 'gray-matter';

export default class contentService {

  static async getAll() {
    try {
      const fileNames = fs.readdirSync('services/contentService/posts/');
      const filesData = fileNames.map(name => {
        const { data } = read(`services/contentService/posts/${name}`);
        return { ...data, id: name.split('.')[0] };
      });
      return Promise.resolve(filesData);
    }
    catch (err) {
      return Promise.reject(err);
    }
  }

  static async getPost(id) {
    try {
      const data = read(`services/contentService/posts/${id}.md`);
      return Promise.resolve(data);
    }
    catch (err) {
      return Promise.reject(err);
    }
  }
}
