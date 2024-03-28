import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

export function HomeNavbar () {
    const authMember = null;
    return <div className="home-navbar">
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
                {/** BASKET */}
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
            <Stack>DETAIL</Stack>
        </Container>
    </div>;
}