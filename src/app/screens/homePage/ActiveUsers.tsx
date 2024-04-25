import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import { CssVarsProvider, Typography } from "@mui/joy";
import  CardOverflow  from "@mui/joy/CardOverflow";
import  AspectRatio  from "@mui/joy/AspectRatio";
import { createSelector } from "reselect";
import { retrieveTopUsers } from "./selector";
import { serverApi } from "../../../lib/config";
import { useSelector } from "react-redux";
import { Member } from "../../../lib/types/member";

// REDUX SLICE & SELECTOR
const topUsersRetriever = createSelector(
    retrieveTopUsers, 
    (topUsers) => ({topUsers}));

export default function ActiveUsers () {
    const {topUsers} = useSelector(topUsersRetriever);
    return (
        <div className={"active-users-frame"}>
            <Container>
                <Stack className={"main"}>
                    <Box className={"category-title"}> Active Users</Box>
                    <Stack className={"cards-frame"}>
                    <CssVarsProvider>
                        {topUsers.map((member: Member) => {
                            const imagePath = `${serverApi}/${member.memberImage}`;
                            return (
                                <Card key={member._id} variant="outlined" className={"card"}>
                                <CardOverflow>
                                    <AspectRatio ratio="1">
                                        <img src={imagePath} alt="" />
                                    </AspectRatio>
                                </CardOverflow>
                                <CardOverflow variant="soft" className="member-nick">
                                    <Stack className="info">
                                        <Stack flexDirection={"row"}>
                                            <Typography className={"title"}>
                                                {member.memberNick}
                                            </Typography>
                                        </Stack>
                                        <Stack>
                                        </Stack>
                                    </Stack>
                                </CardOverflow>
                                </Card>
                            )
                        })}
                    </CssVarsProvider>
                    </Stack>
                </Stack>
            </Container>
        </div>
        )
}