import React, { useReducer } from "react";
import { useContext } from "react";
import reducer from './reducer';
const AppContext = React.createContext();

const intialState = {
    name: "",
    image: "",
    // services: [],
}
const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, intialState);

    const updateHomePage = () => {
        return dispatch({
            type: "HOME_UPDATE",
            payload: {

                name: "Believe in being different.",
                image: "./Images/hero.png",

            },
        });
    };

    const updateAboutPage = () => {
        return dispatch({
            type: "ABOUT_UPDATE",
            payload: {

                name: "Let's make brand success",
                image: "./Images/about.png",

            },
        });
    };

    return <AppContext.Provider value={{ ...state, updateAboutPage, updateHomePage }}>{children}</AppContext.Provider>
}
const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppContext, AppProvider, useGlobalContext };