import fs from 'fs'
import { join } from 'path'
import { read } from 'gray-matter'
import { readTime } from '../utils'
import getConfig from 'next/config'
const { serverRuntimeConfig } = getConfig()

export default class contentService {
  static async getAll() {
    try {
      const fileNames = fs.readdirSync(join(serverRuntimeConfig.PROJECT_ROOT, 'services/contentService/posts/'))
      const filesData = fileNames.map(name => {
        const { data, content } = read(join(serverRuntimeConfig.PROJECT_ROOT, `services/contentService/posts/${name}`))
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
      const data = read(join(serverRuntimeConfig.PROJECT_ROOT, `services/contentService/posts/${id}.md`))
      return Promise.resolve(data)
    }
    catch (err) {
      return Promise.reject(err)
    }
  }
}
