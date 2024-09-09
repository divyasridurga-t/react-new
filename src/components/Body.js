import Searchbar from "./Searchbar";
import ResCards from "./ResCards";
import DATA from "../utils/mockData";
import { useState } from "react";


function Body() {
    let [data, setData] = useState(DATA);
    function handleClick() {
        let filtered_data = data.filter((key) => {
            let { info: { avgRating = 0 } } = key;
            return avgRating >= 4.3
        })
        setData(filtered_data)
    }

    return (
        <div className="body">
            {/* search */}
            <Searchbar />
            <button className="top_res_btn" onClick={handleClick}>Top Rated Restaurants</button>
            {/* res cards */}
            <div className="res_container">
                {
                    data?.length ? data.map((item, index) => {
                        let { info: { id = '' } = {} } = item
                        return (
                            <ResCards data={item} key={id} />
                        )
                    }) : ''
                }


            </div>
        </div>
    );
}

export default Body