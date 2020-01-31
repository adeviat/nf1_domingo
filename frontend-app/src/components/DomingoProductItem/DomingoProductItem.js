import React, {useContext, useEffect, useReducer, useState} from 'react';
import '../ProductList/ProductList.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import RegisterCart from "../RegisterCart/RegisterCart";
import HomePageTopmenu from "../HomePageTopMenu/HomePageTopMenu";
import StoreInfoHeader from "../StoreInfoHeader/StoreInfoHeader";
import {User} from "../Helpers/userReducer";
import {Link} from "react-router-dom";


const useStyles = makeStyles({

    card: {
        maxWidth: 150,
    },
    media: {
        height: 80,
    },
    text:{
        fontWeight: 'bold',
        fontSize: 14,
        textTransform: 'uppercase'    }
});function DomingoProductItem(props) {
    const  {image_url,name,address, id} = props.store;
    const classes = useStyles();    return(

        <div className="DomingoProductContainer">
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={image_url}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {address}
                        </Typography>
                    </CardContent>
                </CardActionArea><CardActions>
                <Button size="small" color="primary">
                    <Link to={`/store/${id}`}> Ver tienda</Link>
                </Button>
            </CardActions>
            </Card>
        </div>
        );}
export default DomingoProductItem;
