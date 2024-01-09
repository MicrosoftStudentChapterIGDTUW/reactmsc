import React, { useState } from 'react'
import '../CSS/feedback.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
//import Events from '../events/Events';
import '../CSS/eventcol.css'
import EventsList from './EventsList'



const EventCol = ({eventId, seteventId, setId}) => {
  //const [Id, setId]=useState(eventId);
  //console.log(eventId)
  //setId(eventId)
  //Id=eventId;
  const [EventDisplayId, setEventDisplayId]=useState(0);
  /* const handleEvent = (id) =>{
    setEventDisplayId(id)
  } */
  console.log(EventDisplayId);
  const handleBack = ()=>{
    if(eventId>1){
      seteventId(eventId-1);
      
    }else{
      if(eventId==1){
        seteventId(3)
        
      }
    }
      
  }

  const handleForward=()=>{
    if(eventId<3){
      seteventId(eventId+1);
      //console.log(Id);
      
    }else{
      if(eventId===3){
        seteventId(1);
        
      }
    }
  }
  return (
    <div className='feedback'>
      <div className="events_heading">
        <h2>EVENTS</h2>
        {/* <div className="back_btn">
        <ArrowBackIcon onClick={handleBack}/>
        <h4 onClick={handleBack}>Back</h4>
        </div>
          <div className="forward_btn">
          <h4 onClick={handleForward}>Next</h4>
          <ArrowForwardIcon onClick={handleForward}/>
          </div> */}
         
        </div>
          
        <div className="event_list">
          <ul>
            <li>
             <EventsList id={1} onClick={()=>{setEventDisplayId(1)}}  event_img={"https://cdn.xxl.thumbs.canstockphoto.com/hands-holding-events-many-hands-holding-the-word-events-isolated-picture_csp21214712.jpg"} event_name={"Insider Series"} EventDisplayId={EventDisplayId} /> 
              
            </li>
            <li>
              <EventsList id={2} onClick={()=>{setEventDisplayId(2)}}event_img={"https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?cs=srgb&dl=pexels-christina-morillo-1181406.jpg&fm=jpg"} event_name={"Insider Series"} EventDisplayId={EventDisplayId}/>
            </li>
            <li>
              <EventsList id={3} onClick={()=>{setEventDisplayId(3)}} event_img={"https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?cs=srgb&dl=pexels-christina-morillo-1181406.jpg&fm=jpg"} event_name={"Insider Series"} EventDisplayId={EventDisplayId}/>
            </li>
            <li>
              <EventsList id={4} onClick={()=>{setEventDisplayId(4)}} event_img={"https://cdn.xxl.thumbs.canstockphoto.com/hands-holding-events-many-hands-holding-the-word-events-isolated-picture_csp21214712.jpg"} event_name={"Insider Series"} EventDisplayId={EventDisplayId}/>
            </li>
            <li>
              <EventsList id={5} onClick={()=>{setEventDisplayId(5)}} event_img={"https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?cs=srgb&dl=pexels-christina-morillo-1181406.jpg&fm=jpg"} event_name={"Insider Series"} EventDisplayId={EventDisplayId}/>
            </li>
          </ul>
        </div>
       {/* {( eventId==1) && <div className="all_events">
            <Events id={1} img_url={"https://assets-global.website-files.com/5ef5480befd3922fbeacf53c/5f51e401c1ad366c50bc64c1_hero-image-Events.png"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, asperiores veritatis? Esse eaque corporis nemo ipsum inventore maxime autem magnam, beatae iste adipisci! Nostrum reprehenderit eos non libero, sint, dolore quod nisi quo excepturi odio explicabo repellendus culpa. Facilis adipisci blanditiis ratione ducimus et explicabo facere fugiat excepturi fugit debitis, enim eligendi, repudiandae quos incidunt nihil? Perferendis recusandae nisi ut."}/>
        </div>}

        {(eventId==2) && <div className="all_events">
            <Events id={2} img_url={"https://cdn.cookielaw.org/logos/4d0f0420-9941-4d59-903c-3cb61fde5441/5b4f737d-981f-4af7-9842-966b1aa26c42/863735b5-020c-4083-b9b5-3256c9323baf/1200px-Mediterranean_Shipping_Company_logo.svg.png"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, asperiores veritatis? Esse eaque corporis nemo ipsum inventore maxime autem magnam, beatae iste adipisci! Nostrum reprehenderit eos non libero, sint, dolore quod nisi quo excepturi odio explicabo repellendus culpa. Facilis adipisci blanditiis ratione ducimus et explicabo facere fugiat excepturi fugit debitis, enim eligendi, repudiandae quos incidunt nihil? Perferendis recusandae nisi ut."}/>
        </div>}

        {(eventId==3) && <div className="all_events">
            <Events id={1} img_url={"https://cdn.xxl.thumbs.canstockphoto.com/hands-holding-events-many-hands-holding-the-word-events-isolated-picture_csp21214712.jpg"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, asperiores veritatis? Esse eaque corporis nemo ipsum inventore maxime autem magnam, beatae iste adipisci! Nostrum reprehenderit eos non libero, sint, dolore quod nisi quo excepturi odio explicabo repellendus culpa. Facilis adipisci blanditiis ratione ducimus et explicabo facere fugiat excepturi fugit debitis, enim eligendi, repudiandae quos incidunt nihil? Perferendis recusandae nisi ut."}/>
        </div>} */}
    </div>
  )
}

export default EventCol