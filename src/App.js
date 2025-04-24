import { useEffect,useState } from "react";
import axios from "axios";

import "./App.css"
import CryptoList from "./pages/CryptoList";

const App =()=>{
    const [coinsData,setCoinsData] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            try{
                const response = await axios.get(
                    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
                );
                setCoinsData(response.data)
            }catch(error){
                console.error("Error fetching data:",error)
            }
        }
    },[])

    fetchData();
    return(
        <div className="app">
            <h1>Crypto Gallery</h1>
            <CryptoList coinsData={coinsData}/>
        </div>
    );
};
export default App;