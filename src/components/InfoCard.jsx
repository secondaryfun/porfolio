import React from 'react';
import './InfoCard.css';

function InfoCard(props) {

    return (
        <div className={`InfoCard-wrapper ${props.className}`}>
            <h2 className="InfoCard-title oswald white ">{props.title}</h2>
            {!props.items ? "" : props.items.map((item, index) => {
                return (<p key={index} className="InfoCard__list-item margin-1">{`✦ ${item}`}</p>)
            })}
        </div>
    );
}

export default InfoCard;
