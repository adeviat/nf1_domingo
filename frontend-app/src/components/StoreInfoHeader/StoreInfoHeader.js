import React from 'react';
import './store_info_header.css';
import ProductList from "../DomingoProductItem/DomingoProductItem";
import {Route,useParams} from "react-router-dom";


function StoreInfoHeader(props) {
    const {store} ={ ...props};
    const { storeId }= useParams();
    return(
       <div className="store_info_header">
            <div className="store_info_header_section">
                <span>
                    <p>home > food > restaurants ></p>
                    <p className="store_info_header_section_store_gold"> Tienda {storeId}</p>
                </span>
            </div>
            <h1 className="store_info_header_storename"> Tienda {storeId}</h1>
            <div className="store_info_header_storedescription"> Comida Comida Comida</div>
        </div>
    );

}


export default StoreInfoHeader;
