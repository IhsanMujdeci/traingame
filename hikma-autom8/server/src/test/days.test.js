import {getExmpleListings, getNewListing} from "./fixture.js";
import {MortonListings} from "../api/morton/listings.js";

describe('date', ()=>{
    it('Should work', ()=>{
        const l = new MortonListings(getExmpleListings())
    })

    it('should group by day', ()=>{
        const l = new MortonListings([getNewListing()])
        console.log(l.groupByDay())
    })
})