import { IMG } from "../utils/constants";

function ResCards({ data, key }) {
    let { info: { name = '', cloudinaryImageId = '', locality = '', areaName = '', costForTwo = '', cuisines = [], avgRating = 0 } = {}, sla: { lastMileTravelString = '' } = {}, availability: { nextCloseTime = '' } = {}
    } = data
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
                    <p>{locality}, {areaName}</p>
                    <p>{costForTwo}</p>
                </div>
                <div className="res_status_dist">
                    <p className="status">
                        Closes soon in 30 minutes
                    </p>
                    <p>
                        {lastMileTravelString}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ResCards