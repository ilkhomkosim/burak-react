import React, { useEffect } from "react";
import Statistics from "./Statistics";
import BestSellers from "./BestSellers";
import NewDishes from "./NewProducts";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setNewDishes, setBestSellers, setTopUsers } from "./slice";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import MemberService from "../../services/MemberService";
import { Member } from "../../../lib/types/member";
import "../../../css/home.css"


// REDUX SLICE & SELECTOR
const actionDispatch = (dispatch: Dispatch) => ({
    setBestSellers: (data: Product[]) => dispatch(setBestSellers(data)),
    setNewDishes: (data:Product[]) => dispatch(setNewDishes(data)),
    setTopUsers: (data: Member[]) => dispatch(setTopUsers(data))
});

export  default function HomePage() {
    const {setBestSellers, setNewDishes, setTopUsers} = actionDispatch(useDispatch());
    
    useEffect(() => {
        const product = new ProductService();
        product
        .getProducts({
            page: 1,
            limit: 4,
            order: "productViews",
            // productCollection: ProductCollection.BEDS,
        })
        .then(data => {
            setBestSellers(data);
        })
        .catch((err) => console.log(err));

        product
        .getProducts({
            page: 1,
            limit: 4,
            order: "createdAt",
            // productCollection: ProductCollection.BEDS,
        })
        .then(data => {
            setNewDishes(data);
        })
        .catch((err) => console.log(err));

        const member = new MemberService();
        member
            .getTopUsers()
            .then( data => setTopUsers(data))
            .catch((err) => console.log(err));

    }, [])
    

    return (
    <div className={"homepage"}>
        <Statistics/>
        <BestSellers/>
        <NewDishes/>
        <Advertisement/>
        <ActiveUsers/>
        <Events/>
    </div>
    )
}