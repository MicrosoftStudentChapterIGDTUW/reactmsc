import React, { useState } from 'react'
import Head from './head/Head'
import Calender from './calender/Calender'
import './CSS/eventspg.css'
//import Events from './events/Events'
import EventCol from './events/EventCol'
import Eventcol from './assets/Eventcol'

const EventsPg = () => {
    const [eventid, seteventId]=useState(1);
    //console.log(eventid)
  return (
    <div className='events_pg'>
        <div className="left_container">
            <div className="header_Container">
                <Head />
            </div>
            <div className="calender_container">
                <Calender eventid={seteventId}/>
            </div>
            {/* <div className="events_container">
                <Events />
            </div> */}
        </div>
        <div className="right_container">
            {/* <EventCol eventId={eventid} seteventId={seteventId} /> */}
            <Eventcol eventId={eventid} seteventId={seteventId}/>
        </div>
        
        
    </div>
  )
}

export default EventsPg
