import 'app.css'
import {div, render} from './core'

const navEl = /* ... */;
const showCalendarButton = /* ... */;
const showClockButton = /* ... */;
const calendarEl = /* ... */;
const clockEl = /* ... */;
a
import ('./Navigation.js').then(Navigation => {
    render(navEl, Navigation.default)
})

showCalendarButton.addEventListener('click', ()=>{
    import ('./Calendar.js').then(Calendar => {
        render(calendarEl, Calendar.default)
    })
})


showCalendarButton.addEventListener('click', ()=>{
    import ('./Clock.js').then(Clock => {
        render(clockEl, Clock.default)
    })
})


//
// app.css
// ...


//
// analytics.js
// Lots of analytics code...
// ...


//
// Navigation.js
// ...

//
// Calendar.js
//

import {div} from './core'
import * as DateTimeUtils from './datetime.js'

export default function Calendar(){
    import('./analytics.js').then(analytics => {
        analytics.track('used_calendar')
    })

    return div(/* uses DateTimeUtils*/)
}

//
// Clock.js
//
import {div} from './core'
import * as DateTimeUtils from './datetime.js'
export default function Clock() {
    return div('/*.. uses DateTimeUtils..*/')
}