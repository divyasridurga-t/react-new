import { IMG } from "../utils/constants";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../hooks/cartSlice";

function ResCards({ data, key }) {
  let dispatch = useDispatch();
  // console.log(dispatch(addItem()));

  let {
    info: {
      id = "",
      name = "",
      cloudinaryImageId = "",
      locality = "",
      areaName = "",
      costForTwo = "",
      cuisines = [],
      avgRating = 0,
      availability: { nextCloseTime = "" } = {},
    } = {},
    sla: { lastMileTravelString = "" } = {},
  } = data;
  let current_time = new Date().getTime();
  let existing_time = new Date(nextCloseTime).getTime();
  let time_difference = existing_time - current_time;
  let minutes = Math.floor(time_difference / (1000 * 60));
  let url = name.replace(" ", "-").toLowerCase() || "";
  let web_url = `/restaurants/${url}-${id}`;


  function handleClick(name) {
    dispatch(addItem(name));
  }

  return (

    <div className="thumb_card" key={key}>
      <div className="img_container">
        <img
          width={200}
          height={150}
          alt="res_image"
          src={IMG + cloudinaryImageId}
        />
      </div>
      <div>
        <div className="res_name_rating">
          <p className="res_name">{name}</p>
          <p className="res_rating">{avgRating}</p>
        </div>
        <div className="res_add_price">
          <p>
            {locality}, {areaName}
          </p>
          <p>{costForTwo}</p>
        </div>
        <div className="res_status_dist">
          <p className="status">
            {minutes <= 30 ? `Closes soon in 30 minutes` : ""}
          </p>
          <p>{lastMileTravelString}</p>
        </div>
      </div>
      <div className='text-center'>
        <button className='bg-black text-white m-2 p-2 rounded-lg' onClick={() => handleClick(name)}>Add</button>
      </div>
    </div>

  );
}

export default ResCards;
