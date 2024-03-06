import axios from 'axios';

export async function queryMortonListings(suburb = "Penrith"){
    const res = await axios.get('http://localhost:3000/listings', {params: {location: suburb}})
    return res.data
}
