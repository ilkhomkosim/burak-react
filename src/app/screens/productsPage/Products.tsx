import React from "react";
import {Box, Button, Card, CardMedia, Container, Stack} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import  MonetizationOnIcon  from "@mui/icons-material/MonetizationOn";
import  RemoveRedEyeIcon  from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowbackIcon from "@mui/icons-material/ArrowBack";
import  ArrowForwardIcon  from "@mui/icons-material/ArrowForward";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setProducts } from "./slice";
import {createSelector} from "reselect";
import { retrieveProducts } from "./selector";
import { Product } from "../../../lib/types/product";


// REDUX SLICE & SELECTOR
const actionDispatch = (dispatch: Dispatch) => ({
    setProducts:(data: Product[]) => dispatch(setProducts(data)),
});
const productsRetriever = createSelector(
    retrieveProducts,
    (products) => ({products})
);


const products = [
    {productName: "Kebab", imagePath:"/img/kebab-fresh.webp"},
    {productName: "Kebab", imagePath:"/img/kebab-fresh.webp"},
    {productName: "Kebab", imagePath:"/img/kebab-fresh.webp"},
    {productName: "Kebab", imagePath:"/img/kebab-fresh.webp"},
    {productName: "Kebab", imagePath:"/img/kebab-fresh.webp"},
    {productName: "Kebab", imagePath:"/img/kebab-fresh.webp"},
    {productName: "Kebab", imagePath:"/img/kebab-fresh.webp"},
    {productName: "Kebab", imagePath:"/img/kebab-fresh.webp"},
]

export default function Products() {
    return (
        <div className={"products"}>
            <Container>
                <Stack flexDirection={"column"} alignItems={"center"}>
                    <Stack className={"avatar-big-box"} flexDirection={"row"}>
                        <Stack className="res-title"> Burak Restaurant</Stack>
                        <Stack className="search-button">
                            <Box className={"search-field"}> Type here....</Box>
                            <Button className="btn">Search
                            <img src="/img/vector.svg" alt="" />
                            </Button>
                        </Stack>
                    </Stack>

                    <Stack className={"dishes-filter-section"}>
                        <Stack className="dishes-filter-box">
                            <Button 
                            variant={"contained"}
                            color={"primary"}
                            className={"order"}
                            >
                                New
                            </Button>
                            <Button 
                            variant={"contained"}
                            color={"secondary"}
                            className={"order"}
                            >
                                Price
                            </Button>
                            <Button 
                            variant={"contained"}
                            color={"secondary"}
                            className={"order"}
                            >
                                Views
                            </Button>
                        </Stack>
                    </Stack>

                    <Stack className={"list-category-section"}>
                        <Stack className="menu-type">
                        <Stack className="dishes-filter-box">
                            <Button 
                            variant={"contained"}
                            color={"primary"}
                            className={"order"}
                            >
                                <Box className={"btn-text"}>DISH</Box>
                            </Button>
                            <Button 
                            variant={"contained"}
                            color={"secondary"}
                            className={"order"}
                            >
                                SALAD
                            </Button>
                            <Button 
                            variant={"contained"}
                            color={"secondary"}
                            className={"order"}
                            >
                                DRINK
                            </Button>
                            <Button 
                            variant={"contained"}
                            color={"secondary"}
                            className={"order"}
                            >
                                DESERT
                            </Button>
                            <Button 
                            variant={"contained"}
                            color={"secondary"}
                            className={"order"}
                            >
                                OTHER
                            </Button>
                        </Stack>
                        </Stack>
                        <Stack className={"product-wrapper"}>
                            {products.length !== 0 ? (
                                products.map((product, index) => {
                                    return (
                                        <Stack key={index} className={"product-card"}>
                                            <Stack
                                                className={"product-img"}
                                                sx={{backgroundImage:`url(${product.imagePath})`}}
                                            >
                                                <div className="product-sale">
                                                    <Box className={"product-sale-text"}> NORMAL size</Box>
                                                </div>
                                                <Button className="shop-btn">
                                                    <img 
                                                    src={"/icons/shopping-cart.svg"} alt=""
                                                    style={{display:"flex"}}
                                                    />
                                                </Button>
                                                {/* <Button className="view-botton" sx={{right:"36px"}}>
                                                    <Badge badgeContent={20} color="secondary">
                                                        <RemoveRedEyeIcon 
                                                        sx={{
                                                            color:20 ? "gray" :"white",
                                                        }}
                                                        />
                                                    </Badge>
                                                </Button> */}
                                            </Stack>
                                            <Box className={"product-desc"}>
                                                <span className={"product-title"}>
                                                    {product.productName}
                                                </span>
                                                <div className="money">
                                                    <MonetizationOnIcon/>
                                                    {12}
                                                </div>
                                            </Box>
                                        </Stack>
                                    )
                                })
                            ):(
                                <Box className="no-data">Products are not available</Box>
                            )}
                        </Stack>
                    </Stack>

                    <Stack className="pagination-section">
                        <Pagination
                            count={3}
                            page={1}
                            renderItem={(item) => (
                                <PaginationItem 
                                components={{
                                    previous:ArrowbackIcon,
                                    next: ArrowForwardIcon,
                                }} 
                                {...item}
                                color={"secondary"}
                                />
                            )}
                        />
                    </Stack>
                </Stack>
            </Container>


<div className="family-brand">
    <Container className="container">
        <Stack className="family-brand-text">Our Family Brands</Stack>
    </Container>
    <div className="family-brand-img-container">
        <Card className="family-brand-card">
            <CardMedia
                component="img"
                image="/img/doner.webp"
                alt="Doner"
                className="family-brand-img"
            />
        </Card>
        <Card className="family-brand-card">
            <CardMedia
                component="img"
                image="/img/gurme.webp"
                alt="Gurme"
                className="family-brand-img"
            />
        </Card>
        <Card className="family-brand-card">
            <CardMedia
                component="img"
                image="/img/seafood.webp"
                alt="Seafood"
                className="family-brand-img"
            />
        </Card>
        <Card className="family-brand-card">
            <CardMedia
                component="img"
                image="/img/sweets.webp"
                alt="Sweets"
                className="family-brand-img"
            />
        </Card>
    </div>
</div>

<div className="address">
    <Container>
        <Stack className="address-area">
            <Box className="adress-title"> Our address</Box>
            <iframe
            style={{marginTop:"60px"}}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.0459184834926!2d69.23497807605557!3d41.30786467131008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba862628adf%3A0x35cbda4b6948a351!2sKamolonOsh%20Drujba!5e0!3m2!1sen!2skr!4v1712134702603!5m2!1sen!2skr"
            width="1320" 
            height="500" 
            ></iframe>
        </Stack>
    </Container>
</div>

        </div>
    )
    }