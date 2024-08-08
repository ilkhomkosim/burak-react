import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Divider from "../../components/divider";

export default function Statistics () {
    return (
    <div className={"static-frame"}>
        <Container>
            <Stack className="info">
                <Stack className="static-box">
                    <Box className={"static-num"}>23+</Box>
                    <Box className={"static-text"}>Years in Business</Box>
                </Stack>
                <Stack className="static-box">
                    <Box className={"static-num"}>564,108+</Box>
                    <Box className={"static-text"}>Products sold</Box>
                </Stack>
                <Stack className="static-box">
                    <Box className={"static-num"}>361,890+</Box>
                    <Box className={"static-text"}>Happy customers</Box>
                </Stack>
            </Stack>
        </Container>
    </div>
    )
}