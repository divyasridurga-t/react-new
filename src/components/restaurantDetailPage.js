import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { useParams } from "react-router-dom";
import { IMG } from "../utils/constants";
import useResMenuCard from "../utils/useResMenucardData";

const RestaurantDetailPage = () => {
  let [menu, setMenu] = useState([]);
  let params = useParams();
  let { resname = "" } = params;
  let x = resname.split("-");
  let id = x[x.length - 1];

  let data = useResMenuCard(id);

  console.log(data);
  

  useEffect(() => {
    if (data) {
      setMenu(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    }
  }, [data]);

  return (
    <>
      <Layout>
        {data == null ? (
          <h1>Loading....</h1>
        ) : (
          <div>
            <div className="res_top_container">
              <div className="res_name_container">
                <h2>{data?.data?.cards[0]?.card?.card.text}</h2>
                <img
                  width={200}
                  height={250}
                  src={
                    IMG +
                    data?.data?.cards[2]?.card?.card?.info?.cloudinaryImageId
                  }
                />
              </div>
            </div>
            <div className="res_card_menu_container">
              {menu?.length
                ? menu?.slice(1)?.map((item, index) => {
                  return (
                    <>
                      <h2>{item?.card?.card?.title || ""}</h2>
                      <div className="menu_container">
                        {item?.card?.card?.categories
                          ? item?.card?.card?.categories?.map((x, index) => {
                            return (
                              <>
                                {x?.itemCards?.map((key, index) => {
                                  return (
                                    <div className="res_card_menu">
                                      <div>
                                        {key?.card?.info?.imageId ? (
                                          <img
                                            src={
                                              IMG + key?.card?.info?.imageId
                                            }
                                            width={200}
                                            height={150}
                                          />
                                        ) : (
                                          <div className="empty_container"></div>
                                        )}

                                        <div className="res_description">
                                          <h2>{key?.card?.info?.name}</h2>
                                          <p className="dish_description">
                                            {key?.card?.info?.description}   
                                          </p>
                                          <p>
                                            {
                                              key?.card?.info?.itemAttribute
                                                ?.vegClassifier
                                            }
                                          </p>
                                          <p>
                                            {+ key?.card?.info?.price / 100}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </>
                            );
                          })
                          : item?.card?.card?.itemCards?.map((key, index) => {
                            return (
                              <div className="res_card_menu">
                                <div>
                                  {key?.card?.info?.imageId ? (
                                    <img
                                      src={IMG + key?.card?.info?.imageId}
                                      width={200}
                                      height={150}
                                    />
                                  ) : (
                                    <div className="empty_container"></div>
                                  )}

                                  <div className="res_description">
                                    <h2>{key?.card?.info?.name}</h2>
                                    <p className="dish_description">
                                      {key?.card?.info?.description}
                                    </p>
                                    <p>
                                      {
                                        key?.card?.info?.itemAttribute
                                          ?.vegClassifier
                                      }
                                    </p>
                                    <p>{+key?.card?.info?.price / 100}</p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </>
                  );
                })
                : ""}
            </div>
          </div>
        )}
      </Layout>
    </>
  );
};

export default RestaurantDetailPage;
