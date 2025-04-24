import React from "react";

import "../styles/Cryptocard.css"

const CryptoCard = ({image, name, price}) => {
    return(
        <div className="card">
            <div className="card-image">
                <img src={image} alt={name}/>
            </div>
            <div className="card-info">
                <h2>{name}</h2>
                <h3>${price.toLocalString()}</h3>
            </div>
        </div>
    )
}
export default CryptoCard;