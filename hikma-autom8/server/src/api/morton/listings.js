/**
 *  @typedef {Object} ListingObject
 *  @property {string} name
 *  @property {ListingDate[]} dates
 *  @property {string} price
 *  @property {string} agentName
 *  @property {string} agentPhone
 *  @property {string} priceInterval
 *  @property {string} link
 *  @property {string} bedroom
 *  @property {string} bathroom
 *  @property {string} carSpace
 *  @property {string[]} images
 */


/**
 *  @typedef {Omit<ListingObject, 'dates'>} ListingSingleDate
 *  @property {ListingDate} date
 */

/**
 * @class MortonListings
 * @property {ListingObject[]} listing
 */
export class MortonListings {

    /**
     * @type {ListingObject[]}
     */
    listing

    constructor(listing) {
        this.listing = listing
    }

    getListing(){
        return this.listing
    }

    /**
     * @return {Record<String, ListingSingleDate>}
     */
    groupByDay(){
        const days = {};
        for(const l of this.listing){
            for(const d of l.dates){
                if(!days[d.day]){
                    days[d.day] = []
                }
                days[d.day].push({...l, date: d})
            }
        }
        for(const d in days){
            days[d] = days[d].sort(sorter)
        }
        const d = new Date();
        let day = d.getDay();
        return sortDays(day, days)
    }
}

/**
 * @param {string} time
 * @return {number}
 */
function getHoursAndMinutesFromTime(time){
    const [fromTime, ampm] = time.split(' ')
    let t = parseInt(fromTime.split(':').join(''))
    if(ampm === 'pm'){
        t += 1200
    }
    return t
}

/**
 * @param {ListingSingleDate} a
 * @param {ListingSingleDate} b
 * @return {number}
 */
function sorter(a,b){
    return getHoursAndMinutesFromTime(a.date.time) - getHoursAndMinutesFromTime(b.date.time)
}


const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]

/**
 * @param {number} startDay
 * @param days
 */
function sortDays(startDay, days){
    const sortedDays = {}
    for(let i = startDay; i < daysOfWeek.length + startDay; i++){
        const day = daysOfWeek[i % daysOfWeek.length]
        if(days[day]){
            sortedDays[day] = days[day]
        }
    }
    return sortedDays
}