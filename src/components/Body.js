import Searchbar from "./Searchbar";
import ResCards from "./ResCards";
import DATA from "../utils/mockData";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatusCheck from "../utils/useOnlineStatusCheck";

function Body() {
  let [data, setData] = useState([]);
  let [value, setValue] = useState("");
  let [filteredData, setFilteredData] = useState([]);
  let onlineStatus=useOnlineStatusCheck();
  

  function handleClick() {
    let filtered_data = data.filter((key) => {
      let {
        info: { avgRating = 0 },
      } = key;
      return avgRating >= 4.3;
    });
    setData(filtered_data);
  }
  async function fetchAPI() {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.45228080314395&lng=78.36921878350192&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let res = await data.json();
    setData(
      res?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setFilteredData(
      res?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  function handleBtnClick() {
    let filteredData = data.filter((item) => {
      let { info: { name = 0 } = {} } = item;
      return name.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredData(filteredData);
  }

  if(!onlineStatus){
    return (
      <>
      <h1>Looks like you are offline please check your internet connection</h1>
      </>
    )
  }

  return filteredData.length ? (
    <div className="body">
      {/* search */}
      <Searchbar />
      <div className="filter">
        <button className="top_res_btn" onClick={handleClick}>
          Top Rated Restaurants
        </button>
        <div>
          <input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            type="text"
          />
          <button onClick={handleBtnClick}>search</button>
        </div>
      </div>
      {/* res cards */}
      <div className="res_container">
        {filteredData?.length
          ? filteredData.map((item, index) => {
              let { info: { id = "" } = {} } = item;
              return <ResCards data={item} key={id} />;
            })
          : ""}
      </div>
    </div>
  ) : (
    <img src="https://learn.microsoft.com/en-us/power-platform/guidance/creator-kit/media/shimmer.png" />
  );
}

export default Body;
