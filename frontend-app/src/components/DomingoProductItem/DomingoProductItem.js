import React from 'react';
import './DomingoProductItem.css';

function DomingoProductItem(props) {

    const  {image_url,name} = props.store;
    //const name = props.name;

    //const {desc} = {...props};

    return(
      <div className="DomingoProductItem">
          <div className="DomingoProductItemImg" style={{backgroundImage: "url(" + image_url + ")"}}>

          </div>

          <div className="DomingoProdutItemHeaderText">{name}</div>
      </div>

    );
}
export default DomingoProductItem;