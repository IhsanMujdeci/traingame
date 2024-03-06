import fsP from 'node:fs/promises'
import path from 'node:path'
import axios from "axios";

export class ImageFS {

    /**
     * @type {string}
     */
    folder


    /**
     * @type {string}
     */
    serverUrl

    constructor(folder = 'public', serverUrl = 'http://localhost:3000') {
        this.folder = folder
        this.serverUrl = serverUrl
    }

    /**
     * @param {string} url
     */
    async getAndCacheImage(url){
        try{
            await this.getImage(url)
        } catch (e){
            await this.cacheImageToFS(url)
        }
        return this.serverUrl + '/public/' + this.getFileUUID(url)
    }


    /**
     * @param {string} url
     */
    async getProxyUrl(url){
        return this.serverUrl + '/public/?uuid=' + encodeURIComponent(url)
    }


    getFileUUID(url){
        const urlSplit = url.split('/')
        return urlSplit[urlSplit.length - 1]
    }

    getFilePath(url){
        return path.join(process.cwd(), this.folder, this.getFileUUID(url))
    }

    async cacheImageToFS(url){
        const res = await axios.get(url,{ responseType: 'arraybuffer' })
        return fsP.writeFile(this.getFilePath(url), res.data)
    }

    /**
     * @param {string} url
     * @return {Buffer}
     */
    getImage(url){
        const urlSplit = url.split('/')
        const uuid = urlSplit[urlSplit.length - 1]
        const filePath = path.join(process.cwd(), this.folder, uuid)
        // return fs.readFileSync(filePath)
        return fsP.readFile(filePath)
    }
}



