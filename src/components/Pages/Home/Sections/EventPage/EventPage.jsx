import React, {useEffect, useState} from 'react'
import EventComponent from "./EventComponent";
import '../../../../../CSS/event.scss';
import AddEvent from "../../../Event/AddEvent";
import event1 from "../../../../../Images/EventImages/screen6.jpg";
import {BrowserRouter as Router, useHistory} from 'react-router-dom';
import Speaker from "../../../../KeySpeakers/SpeakersImges/profile.webp";
import Ratings1 from "../../../../Ratings/Ratings1";
import axios from "axios";
import {useSelector} from "react-redux";

const EventPage = () => {

    const history = useHistory();

    const handleHistory = () => {
        history.push('/eventpage');
    }

    const fetchEventDetails = async () => {
        try {
            const response = await axios
                .get("http://localhost:8093/api/v1/events")
                .catch((error) => {
                    console.log("Error", error);
                });
            console.log(response.data);
            //seteventData(response.data)

        } catch (err) {
            console.log("Error");
            console.log(err.message);
        }
    }

    useEffect(() => {
        // dispatch(timeEntryActions.getTimeEntryDetail())
        fetchEventDetails();
    }, [])

    const rows = [
        {"title1": 'component1',"title2": 'name1', "image": event1},
        {"title1": 'component2',"title2": 'name2', "image": event1},
        {"title1": 'component3',"title2": 'name3', "image": event1},
        {"title1": 'component4',"title2": 'name3', "image": event1},
    ];
    return (<React.Fragment>
            <div className="mainheader">
                <div className="header">
                    <button className="button"
                            onClick ={(e) => {
                                e.preventDefault();
                                handleHistory();
                            }}>View All</button>
                    <h3 className="main1">Event Page</h3>
                    <p className="second">This section contain all the events</p>
                </div>
                <br />
                <div className="home__container">
                    <div className="home__row">
                        {rows.map((row)=> (
                                <EventComponent rows = {row}/>

                        ))}
                    </div>
                </div>
                <br/>
            </div>
        </React.Fragment>
    )
}

export default EventPage
