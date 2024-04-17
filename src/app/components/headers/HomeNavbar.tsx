import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import React,{ useEffect, useState } from "react";

export default function HomeNavbar () {
    const authMember: boolean | null = false;
    const [count, setCount] = useState<number>(0);
    const [value, setvalue] = useState<boolean>(true);

    useEffect(() => {
            console.log("componentDidMount"); // DATA FETCH
            setCount(count + 1);

            return() => {
                console.log("componentWillUnmount");
                
            }
    }, []);
    // HANDLERS


    const buttonHandler = () => {
        setvalue(!value)
    }

    return (<div className="home-navbar">
        <Container className="navbar-container">
            <Stack className="menu">
                <Box>
                    <NavLink to="/">
                        <img className="brand-logo" src="/icons/burak.svg" alt="" />
                    </NavLink>
                </Box>

                <Stack className="links">
                    <Box className={"hover-line"}>
                    <NavLink to="/" activeClassName={"under-line"} >Home</NavLink>
                </Box>
                <Box className={"hover-line"}>
                <NavLink to="/products" activeClassName={"under-line"} >Products</NavLink>
                </Box>
                {authMember ? (
                <Box className={"hover-line"}>
                <NavLink to="/orders" activeClassName={"under-line"}>Orders</NavLink>
                </Box>
                ) : null}
                {authMember ? (
                <Box className={"hover-line"}>
                <NavLink to="/member-page" activeClassName={"under-line"}>My Page</NavLink>
                </Box>
                ) : null}
                <Box className={"hover-line"}>
                <NavLink to="/help" activeClassName={"under-line"}>Help</NavLink>
                </Box>
                    <Basket/>

                {!authMember ? (
                <Box>
                    <Button variant="contained" className="login-button">Login</Button>
                    </Box>)
                    : (
                    <img className="user-avatar"
                    src={"/icons/default-user.svg"}
                    aria-haspopup="true"/>
                    )}
                </Stack>
            </Stack>
            <Stack className="header-frame">
                <Stack className="detail">
                    <Box className={"head-main-text"}>World's Most Delocious Cousine</Box>
                    <Box className={"wel-txt"}>The Choice, not just a choice </Box>
                    <Box className={"service-txt"}>{count} hours service</Box>
                    <Box className={"signup"}>
                        {!authMember ? (<Button variant={"contained"} className={"signup-button"}
                        onClick={buttonHandler}
                        >
                            Sign up
                        </Button>) : null}
                    </Box>
                </Stack>
                <Stack className="logo-frame">
                    <div className="logo-img"></div>
                </Stack>
            </Stack>
        </Container>
    </div>
    )
}