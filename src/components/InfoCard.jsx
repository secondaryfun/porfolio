import React from 'react';
import './InfoCard.css';

import arrow from "../assets/images/icons/arrow-button.svg"

function InfoCard(props) {

    return (
        <div className="InfoCard-wrapper ">
            <h2 className="InfoCard-title oswald white ">{props.title}</h2>
            {!props.items ? "" : props.items.map(item => {
                return (<p className="InfoCard__list-item margin-1">{`✦ ${item}`}</p>)
            })}
        </div>
    );
}

export default InfoCard;
