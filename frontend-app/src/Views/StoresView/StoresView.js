import React, {useContext, useEffect} from "react";
import {StoreContainer, StoresProvider} from "./Stores/Stores.container";
import HomePageTopmenu from "../../components/HomePageTopMenu/HomePageTopMenu";
import "../../components/ProductList/ProductList.css"
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({});
export default function StoresView(props) {    //const { state, dispatch } = useContext(User);
    const {match} = props;
    const {category} = match.params;
    const classes = useStyles();
    return (
        <StoresProvider>
        <div className="StoreView">
            <div>
                <HomePageTopmenu/></div>
            <div className={classes.DomingoContainerDiv}>
                <StoreContainer category={category}/>
            </div>
        </div>
        </StoresProvider>);
}
