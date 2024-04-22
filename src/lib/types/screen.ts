import { Member } from "./member";
import { Product } from "./product";

// REACT APP STATE
export interface AppRootState {
    homePage: HomePageState;
    // productsPage: productsPageState;
}


// HOME PAGE
export interface HomePageState {
    popularDishes: Product[];
    newDishes: Product[];
    topUsers: Member[];
}


// PRODUCTS PAGE

// ORDERS PAGE