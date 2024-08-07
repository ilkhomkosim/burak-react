import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;

export const retrieveBestSellers = createSelector(
    selectHomePage, 
    (HomePage) => HomePage.bestSellers
);

export const retrieveNewDishes = createSelector(
    selectHomePage, 
    (HomePage) => HomePage.newDishes
);

export const retrieveTopUsers = createSelector(
    selectHomePage, 
    (HomePage) => HomePage.topUsers
);

