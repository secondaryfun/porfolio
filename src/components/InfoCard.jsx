import React from 'react';
import './InfoCard.css';

function InfoCard(props) {

    return (
        <div className={`InfoCard-wrapper ${props.className}`}>
            <h2 className="InfoCard-title oswald white ">{props.title}</h2>
            <p className="InfoCard__list-item margin-1" >
                {!props.items ? "" : props.items.map((item, index) => {
                    if (index === props.length - 1) return (`| ${item} `)
                    else if (index === 0) return (`${item} `)
                    else return (`| ${item} `)
                })}
            </p>
        </div>
    );
}

export default InfoCard;
