import React from 'react';
import Ratings1 from "../../../../Ratings/Ratings1";
import './ratingstyles.scss'
import Speaker from "../../../../KeySpeakers/SpeakersImges/profile.webp";

function RatingPage() {

    const rows = [
        {"title": 'Rating 1', "description": 'We want to help', "stars": 5, "image": Speaker},
        {"title": 'Rating 1', "description": 'We want to help', "stars": 2, "image": Speaker},
        {"title": 'Rating 1', "description": 'We want to help', "stars": 4, "image": Speaker},
        {"title": 'Rating 1', "description": 'We want to help', "stars": 2, "image": Speaker},
    ];
    return (<React.Fragment>
        <div className="rating-section">
            <div className="rating-header">
                <h2 className="rating-header-main-header">Rating</h2>
                {<button className="buttonDownload" onClick={(e) => {
                    e.preventDefault();
                    // window.location.href='/allFeedbackPage';
                }}>View All</button>}
                <h4 className="rating-header-second-header">Information</h4>
            </div>
            <div className="cardLayout">
                {rows.map((row) => (
                    <div className="card-rating">
                        <Ratings1 rows={row}/>
                    </div>
                ))}
                {/*<div className="rating-section" data-testid='rating-section'>*/}
                {/*    <div className="rating-header" data-testid='rating-header'>*/}
                {/*        <h2 className="rating-header-main-header" data-testid='rating-header-main-header'>Register</h2>*/}
                {/*        <h4 className="rating-header-second-header"*/}
                {/*            data-testid='rating-header-second-header'>Information</h4>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    </React.Fragment>)
}

export default RatingPage;
