import Fastify from 'fastify'
import {queryMortonListings} from "./api/morton/query.js";
import {ImageFS} from "./api/images/images.js";
import axios from "axios";
const fastify = Fastify({
    logger: true
})

const image = new ImageFS()

// Declare a route
fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
})


fastify.get('/listings',
    async (req, res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    const location = req.query.location
    const listings = await queryMortonListings(location)
    res.status(200)

    res.send({listings: listings.getListing(), byDate: listings.groupByDay()})
})

fastify.get('/public/:uuid', async (req, res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    const imageBuffer = await image.getImage(req.params.uuid)
    res.type('image/jpeg')
    res.send(imageBuffer)
})

// fastify.get('/public', async (req, res)=>{
//     res.header("Access-Control-Allow-Origin", "*");
//     // const imageBuffer = await image.getImage(req.params.uuid)
//     // res.type('image/jpeg')
//     // res.send(imageBuffer)
//
//     console.log('query')
//     console.log(req.query.uuid)
//
//     axios.get(req.query.uuid, {responseType: 'stream'})
//         .then((axiosResp) => {
//             res.header(
//                 'Content-Type', axiosResp.headers['content-type']
//             )
//             axiosResp.data.pipe(res)
//         });
// })
//



// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})