import React, {useState} from 'react';
import './Speakers.css';

function KeySpeaker1({rows}){
    return(
        <div className="speaker">
            <div className="img_top">
                <img className='photo' src={rows.image}/>
            </div>
            <div className="speaker-info">
                <h3 className="speaker-info-header">{rows.name}</h3>
                <p className="speaker-info-secondary">{rows.qualifications}</p>
            </div>
        </div>
    );
}

export default KeySpeaker1;
