import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css"

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularDishes } from "./slice";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";

// REDUX SLICE & SELECTOR
const actionDispatch = (dispatch: Dispatch) => ({
    setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});
const popularDishesRetriever = createSelector(
    retrievePopularDishes, 
    (popularDishes) => ({popularDishes})
);

export  default function HomePage() {
    const {setPopularDishes} = actionDispatch(useDispatch());
    // const {popularDishes} = useSelector(popularDishesRetriever);
    
    console.log(process.env.REACT_APP_API_URL);
    
    
    useEffect(() => {
        const result = [
            {
                "_id": "65ff9e5623d549fd8ddfdda0",
                "productStatus": "PROCESS",
                "productCollection": "DISH",
                "productName": "shorva",
                "productPrice": 12,
                "productLeftCount": 122,
                "productSize": "NORMAL",
                "productVolume": 1,
                "productDesc": "Delishious meal",
                "productImage": [],
                "productViews": 0,
                "createdAt": "2024-03-24T03:30:30.846Z",
                "updatedAt": "2024-03-24T03:30:30.846Z",
                "__v": 0
            },
            {
                "_id": "65ff919739e06c1d35994c94",
                "productStatus": "PROCESS",
                "productCollection": "DISH",
                "productName": "Lagmon",
                "productPrice": 12,
                "productLeftCount": 122,
                "productSize": "SMALL",
                "productVolume": 1,
                "productDesc": "Delishious meal",
                "productImage": [],
                "productViews": 0,
                "createdAt": "2024-03-24T02:36:07.707Z",
                "updatedAt": "2024-03-24T02:36:07.707Z",
                "__v": 0
            }
        ];

        // @ts-ignore
    setPopularDishes(result);
    }, [])

    // console.log("popularDishes:", popularDishes);
    

    return (
    <div className={"homepage"}>
        <Statistics/>
        <PopularDishes/>
        <NewDishes/>
        <Advertisement/>
        <ActiveUsers/>
        <Events/>
    </div>
    )
}