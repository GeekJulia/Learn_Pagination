import React from "react";
import CryptoCard from "./CryptoCard";

import "../styles/CryptoList.css"

const CryptoList = ({coinsdata}) => {
    return(
        <div className="crypto_list">
            {coinsdata.map((coin,index) => {
                return (
                    <CryptoCard
                        key={index}
                        image={coin.image}
                        name={coin.name}
                        price={coin.current_place}
                    />
                )
            })}
        </div>
    )
}
export default CryptoList;