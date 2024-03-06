import * as cherrio from 'cheerio'
import axios from 'axios';
import {MortonListings} from "./listings.js";
import query from 'node:querystring'
import {ImageFS} from "../images/images.js";

/**
 * @param suburb
 * @return {Promise<MortonListings>}
 */
export async function queryMortonListings(suburb = "Penrith"){
    const links = await queryRentalPage(suburb)
    const listings = await queryListingsList(links)

    return new MortonListings(listings)
}

/**
 * @param {string} suburb
 * @return {Promise<string[]>}
 */
async function queryRentalPage(suburb = 'Penrith'){
    const queryString = query.stringify({keywords: suburb})
    let res = await axios.get('https://www.morton.com.au/rent/properties-for-rent/?' + queryString + '&list=lease&bedrooms=&bathrooms=&carspaces=&min_price=&max_price=&office_id=', { headers: {"Access-Control-Allow-Origin": "*", 'host': 'www.morton.com.au'}})
    const $ = cherrio.load(res.data)

    /**
     * @type {string[]}
     */
    const links = []

    $('.listing-wrapper a').each( (index, value) => {
        const link = $(value).attr('href')
        if(link.startsWith('https://www.morton.com.au')){
            links.push(link)
        }
    });
    return links
}

// axios.post("https://www.morton.com.au/wp-admin/admin-ajax.php", {})
//
// fetch("https://www.morton.com.au/wp-admin/admin-ajax.php", {
//     "headers": {
//         "accept": "*/*",
//         "accept-language": "en-US,en-AU;q=0.9,en-GB;q=0.8,en;q=0.7",
//         "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
//         "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
//         "sec-ch-ua-mobile": "?1",
//         "sec-ch-ua-platform": "\"Android\"",
//         "sec-fetch-dest": "empty",
//         "sec-fetch-mode": "cors",
//         "sec-fetch-site": "same-origin",
//         "x-requested-with": "XMLHttpRequest",
//         "cookie": "_ga=GA1.1.1693869659.1701422608; _ga_QBCGTW94DT=deleted; _ga_QBCGTW94DT=GS1.1.1702522390.6.1.1702522779.59.0.0",
//         "Referer": "https://www.morton.com.au/rent/properties-for-rent/?keywords=&list=lease&bedrooms=&bathrooms=&carspaces=&min_price=50&max_price=&office_id=",
//         "Referrer-Policy": "strict-origin-when-cross-origin"
//     },
//     "body": "atts%5Blist%5D=lease&atts%5Bmultilist%5D=&atts%5Blayout%5D=&atts%5Btemplate%5D=Shortcode.SearchResults.SearchResults&atts%5Bselector_listings%5D=ap-listing-search-results&atts%5Bajax_template%5D=Ajax.SearchResults&atts%5Bload_more%5D=true&atts%5Bhide_search_form%5D=0&atts%5Brow_col_class%5D=row+row-cols-xl-3+row-cols-lg-2+row-cols-1&atts%5Bper_page%5D=16&atts%5Bsur_suburbs%5D=0&atts%5Bcenter_latlng%5D=&atts%5Bsur_suburbs_radius%5D=10&atts%5Bmax_page%5D=false&atts%5Bmap_zoom%5D=11&atts%5Bmap%5D=map_canvas&atts%5Bmap_load_all_marker%5D=0&atts%5Bmap_callback%5D=ap_realty.searchResultsMapCallback&atts%5Bmap_attribute_cluster%5D=0&atts%5Bmap_is_visible%5D=1&atts%5Bproperty_type_column%5D=1%2C2%2C3&atts%5Bcontent_first%5D=0&atts%5Bauth%5D=0&atts%5Bauth_type%5D=content&atts%5Bauth_message%5D=Sorry%2C+You+Are+Not+Allowed+to+Access+This+Page&atts%5Binclude_private_listing%5D=0&atts%5Bmap_attribute_loadCallback%5D=ap_realty.searchResultsMapCallback&atts%5Boffices%5D%5B0%5D%5Bid%5D=19214&atts%5Boffices%5D%5B0%5D%5Bname%5D=Morton+-+Crows+Nest&atts%5Boffices%5D%5B1%5D%5Bid%5D=19215&atts%5Boffices%5D%5B1%5D%5Bname%5D=Morton+-+Pyrmont&atts%5Boffices%5D%5B2%5D%5Bid%5D=19216&atts%5Boffices%5D%5B2%5D%5Bname%5D=Morton+-+Woolloomooloo&atts%5Boffices%5D%5B3%5D%5Bid%5D=19217&atts%5Boffices%5D%5B3%5D%5Bname%5D=Morton+-+Green+Square&atts%5Boffices%5D%5B4%5D%5Bid%5D=19218&atts%5Boffices%5D%5B4%5D%5Bname%5D=Morton+-+Sydney&atts%5Boffices%5D%5B5%5D%5Bid%5D=19219&atts%5Boffices%5D%5B5%5D%5Bname%5D=Morton+-+Newington&atts%5Boffices%5D%5B6%5D%5Bid%5D=19220&atts%5Boffices%5D%5B6%5D%5Bname%5D=Morton+-+Penrith&atts%5Boffices%5D%5B7%5D%5Bid%5D=19221&atts%5Boffices%5D%5B7%5D%5Bname%5D=Morton+-+Riverwood&atts%5Bload_more_automatic%5D=true&atts%5Bkeywords%5D=&atts%5Bbedrooms%5D=&atts%5Bbathrooms%5D=&atts%5Bcarspaces%5D=&atts%5Bmin_price%5D=50&atts%5Bmax_price%5D=&atts%5Boffice_id%5D=&atts%5Bsort%5D=latest&per_page=16&load_more=true&selectorMap=%23map_canvas&selector=%23ap-listing-search-results&current_page=2&sort=latest&action=property_search_results",
//     "method": "POST"
// });

/**
 *
 * @param {string[]} links
 * @return {Promise<ListingObject[]>}
 */
async function queryListingsList(links){
    return Promise.all(links.map(queryListing))
}

/**
 * @typedef ListingDate
 * @property {string} day
 * @property {string} time
 * @property {string} date
 */


const image = new ImageFS()

/**
 * @param {string} link
 * @return {Promise<ListingObject>}
 */
export async function queryListing(link){
    const res = await axios.get(link)
    const cheer = cherrio.load(res.data)
    const name = cheer('.address-section h4').text()
    const date = cheer('.date-time').text()
    const priceLabel = cheer('.price__label').text().trim().split(' ')
    const price = priceLabel[0];
    const priceInterval = priceLabel.slice(1).join(' ')

    const agents = []

    cheer('.listing-agent').each((i, x)=>{
        const loaded = cherrio.load(x)
        const name = loaded('.agent-name').text()
        let phone = ''
        loaded('a').each((index, value) => {
            const link = cheer(value).attr('href')
            if(link.startsWith('tel:')){
                phone = link.split(':')[1]
            }
        })
        agents.push({name, phone})
    })

    const bedroom = parsePropertyFeatures(cheer('.bedroom').text())
    const bathroom = parsePropertyFeatures(cheer('.bathroom').text())
    const carSpace = parsePropertyFeatures(cheer('.rooms-container > .rooms > .carspace').text())

    let images = []
    cheer('.carousel a').each((index, value) => {
        const link = cheer(value).attr('href')
        if(link.startsWith('http')){
            images.push(image.getAndCacheImage(link))
        }
    })
    images = await Promise.all(images)

    /**
     * @type ListingDate[]
     */
    let dates = []
    if(date){
        let datesString = date.split(/(?<=pm|am)(?=\S)/)
        dates = datesString.map(d=>{
            const [day, time] = d.split(',')
            return {
                day,
                time: time.trim(),
                date: d
            }
        })
    }

    return {
        name: name.replace('\n','').trim(),
        dates,
        price: price,
        agentName: agents[0]?.name,
        agentPhone: agents[0]?.phone,
        priceInterval,
        link,
        bedroom,
        bathroom,
        carSpace,
        images,
        agents
    }
}

function parsePropertyFeatures(s = ''){
    if(!s){
        return undefined
    }
    let parsed = s.trim()
    return parsed.charAt(parsed.length-1)
}