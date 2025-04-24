import { useEffect,useState } from "react";
import axios from "axios";

import "./App.css"
import CryptoList from "./pages/CryptoList";
import Pagination from "./pages/Pagination";

const App =()=>{
    const [coinsData,setCoinsData] = useState([]);
    const[current_page, setCurrentPage] = useState(1);
    const[postsPerPage,setPostsPerPage] = useState(8); //we want to display two rows per page


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
        fetchData();
    },[])
    const lastPostIndex = current_page * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage
    const currentPost = coinsData.slice(firstPostIndex,lastPostIndex)
    return(
        <div className="app">
            <h1>Crypto Gallery</h1>
            <CryptoList coinsData={currentPost}/>
            <Pagination totalPosts = {coinsData.length} postsPerPage={postsPerPage} />
        </div>
    );
};
export default App;