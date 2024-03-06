import {ImageFS} from "../images.js";

describe('Images', ()=>{
    it('Should set image from url', async ()=>{
        const image = new ImageFS()
        await image.getAndCacheImage('https://img.agentaccount.com/74972cc771eb641103d4fc4baa52a3e8caea1cca')
    })
})