import fs from 'fs'
import { read } from 'gray-matter'
import { readTime } from '../utils'

export default class contentService {
  static async getAll() {
    try {
      const fileNames = fs.readdirSync('services/_contentService/posts/')
      const filesData = fileNames.map(name => {
        const { data, content } = read(`services/_contentService/posts/${name}`)
        return { ...data, id: name.split('.')[0], time: readTime(content) }
      })

      return Promise.resolve(filesData)
    }
    catch (err) {
      return Promise.reject(err)
    }
  }

  static async getPost(id) {
    try {
      const data = read(`services/_contentService/posts/${id}.md`)
      return Promise.resolve(data)
    }
    catch (err) {
      return Promise.reject(err)
    }
  }
}
