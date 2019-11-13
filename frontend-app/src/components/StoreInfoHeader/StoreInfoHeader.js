import React from 'react';
import './store_info_header.css';


function StoreInfoHeader(props) {
    const {store} ={ ...props};
    return(
       <div className="store_info_header">
            <div className="store_info_header_section">
                <span>
                    <p>home > food > restaurants ></p>
                    <p className="store_info_header_section_store_gold"> {store.name} </p>
                </span>
            </div>
            <h1 className="store_info_header_storename"> {store.name}</h1>
            <div className="store_info_header_storedescription"> {store.description}</div>
        </div>
    );

}


export default StoreInfoHeader;
