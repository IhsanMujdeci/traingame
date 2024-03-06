import {queryListing} from "../api/morton/query.js";

describe('listing', ()=>{
    it('Should query the listing link', async ()=>{
        const q  = await queryListing('https://www.morton.com.au/lease/nsw/inner-west/wentworth-point/residential/apartment/7854554')
        console.log(q)
    })
})