import React from 'react';
import '../DomingoProductItem/DomingoProductContainer.css'
import DomingoProductItem from "./DomingoProductItem.js";

function DomingoProductContainer(props){
    const {product} = {...props};
    return(
        <div className="DomingoProductContainer">
            <div className="DomingoProductContainerHeader">
                <div className="DomingoProductContainerHeadertxt">
                    {product.name}
                </div>
                <div className="DomingoProductContainerHeaderButton">
                    <button className="search-btn-desktop">
                        ver mas ->
                    </button>
                </div>
            </div>
            <div className="DomingoProductContainerProductItemButtonDiv">
                <button className="DomingoProductContainerProductItemButton">
                        {product.descripcion.map(desc => <div className="DomingoProductContainerProductItem"> <DomingoProductItem  desc={desc}/></div>)}
                </button>
            </div>
        </div>

    );
}
export default DomingoProductContainer;