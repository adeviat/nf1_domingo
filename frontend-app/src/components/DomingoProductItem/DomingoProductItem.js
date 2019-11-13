import React from 'react';
import './DomingoProductItem.css';

function DomingoProductItem(props) {
    const {desc} = {...props};

    return(
      <div className="DomingoProductItem">
          <div className="DomingoProductItemImg" style={{backgroundImage: "url(" + desc.imgUrl + ")"}}>

          </div>

          <div className="DomingoProdutItemHeaderText">{desc.desc}</div>
      </div>

    );
}
export default DomingoProductItem;