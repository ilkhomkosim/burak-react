import { Member } from "./member";
import { Product } from "./product";

// REACT APP STATE
export interface AppRootState {
    homePage: HomePageState;
    // productsPage: productsPageState;
}


// HOME PAGE
export interface HomePageState {
    popuparDishes: Product[];
    newDishes: Product[];
    topusers: Member[];
}


// PRODUCTS PAGE

// ORDERS PAGE