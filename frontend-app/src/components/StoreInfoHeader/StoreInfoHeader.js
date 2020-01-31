import React from 'react';
import './store_info_header.css';
import ProductList from "../DomingoProductItem/DomingoProductItem";


function StoreInfoHeader(props) {
    const {store} ={ ...props};
    return(
       <div className="store_info_header">
            <div className="store_info_header_section">
                <span>
                    <p>home > food > restaurants ></p>
                    <p className="store_info_header_section_store_gold"> Mc donald </p>
                </span>
            </div>
            <h1 className="store_info_header_storename"> Mc Donald</h1>
            <div className="store_info_header_storedescription"> Veneno</div>
        </div>
    );

}


export default StoreInfoHeader;
