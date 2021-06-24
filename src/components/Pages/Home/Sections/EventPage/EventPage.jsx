import React from 'react'
import EventComponent from "./EventComponent";
import '../../../../../CSS/event.css';
import event1 from "../../../../../Images/EventImages/event1.jpg";

function EventPage() {
    return (
        <div>
            
            <div className="main">      
                <div className="header">
                    
                    <h3 className="main1">Download Page</h3>
                    <p className="second">information</p>
                    
                </div>
                
                <br />
                <div className="home__container">
                    <div className="home__row">
                        <EventComponent title1="component1" title2="name1" image={event1}/>
                        <EventComponent title1="component2" title2="name2" image={event1}/>
                        <EventComponent title1="component3" title2="name3" image={event1}/>
                        <EventComponent title1="component4" title2="name4" image={event1}/>
                    </div>
                </div>
                <br/>
            </div>
        </div>
    )
    }

export default EventPage