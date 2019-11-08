import React from 'react';
import './App.css';
import StoreInfoHeader from './StoreInfoHeader.js'
import RegisterCart from "./RegisterCart.js";
import DomingoProductContainer from "./DomingoProductContainer.js";
import {BrowserRouter, Route} from 'react-router-dom';
import Modal from './DialogEditUser.js';



function App() {

  const stores = [{
    name: "KFC",
    description: "Pollo frito"
  },{
    name:"Burger King",
    description:"Hamburguesas"
  },{
    name: "McDonnal's",
    description:"Hamburgesas algo mas malas"
  }];
  const productList = [{
    name: "Text#1",
    descripcion: [{

      desc:"Hamburguesa#1 description",
      imgUrl:"https://res.cloudinary.com/glovoapp/w_200,h_200,c_fill,f_auto,q_auto/Products/xgcr0a30fnru7eccenuo"
    },{
      desc:"Hamburguesa#2 description",
      imgUrl: "https://res.cloudinary.com/glovoapp/w_200,h_200,c_fill,f_auto,q_auto/Products/exgqqvu1qlts4ukjrgut"
    },{
      desc:"Hamburguesa#3 description",
      imgUrl:"https://res.cloudinary.com/glovoapp/w_340,h_170,c_fit,f_auto,q_auto/Products/wymjbrarwnqr2jwqczti"
    }],

  },{
    name: "Text#2",
    descripcion:[{
      desc:"Hamburguesa#1 description",
      imgUrl:"https://res.cloudinary.com/glovoapp/w_200,h_200,c_fill,f_auto,q_auto/Products/xgcr0a30fnru7eccenuo"
    },{
      desc:"Hamburguesa#2 description",
      imgUrl: "https://res.cloudinary.com/glovoapp/w_200,h_200,c_fill,f_auto,q_auto/Products/exgqqvu1qlts4ukjrgut"
    },{
      desc:"Hamburguesa#3 description",
      imgUrl:"https://res.cloudinary.com/glovoapp/w_340,h_170,c_fit,f_auto,q_auto/Products/wymjbrarwnqr2jwqczti"
    }]
  },{
    name: "Text#3",
    descripcion: [{
      desc:"Hamburguesa#1 description",
      imgUrl:"https://res.cloudinary.com/glovoapp/w_200,h_200,c_fill,f_auto,q_auto/Products/xgcr0a30fnru7eccenuo"
    },{
      desc:"Hamburguesa#2 description",
      imgUrl: "https://res.cloudinary.com/glovoapp/w_200,h_200,c_fill,f_auto,q_auto/Products/exgqqvu1qlts4ukjrgut"
    },{
      desc:"Hamburguesa#3 description",
      imgUrl:"https://res.cloudinary.com/glovoapp/w_340,h_170,c_fit,f_auto,q_auto/Products/wymjbrarwnqr2jwqczti"
    }]
  }];
  let bckimg = "https://res.cloudinary.com/glovoapp/w_1200,f_auto,q_auto/Stores/bsuzfftwrffr66zd8h0b";

    return (
        /*<BrowserRouter>
            <Route path{APP_Register} component{RegisterCart}></Route>
        </BrowserRouter>*/

     <div className="App">
       <div className="DomingoHeader"> Domingo Header</div>
       <div className="DomingoStorePageImgDiv">
        <span className="Domingo_store_page_img" style={{backgroundImage: "url(" + bckimg + ")"}} ></span>
       </div>
       <div className="DomingoStoreInfo">
         <div className="DomingoStoreInfoHeaderRG">
           <div className="DomingoStoreInfoHeader">

             <StoreInfoHeader store={stores[0]}/>

             <div className="DomingoStoreInfoSelectProduct">
               <div className="DomingoStoreInfoSelectProductText">
                /* Select a product*/


               </div>
             </div>
           </div>
           <div className="DomingoStoreInfoRegisterCart">
             <RegisterCart/>
           </div>
         </div>
         <div className="DomingoStoreProductContainer">
           {productList.map(product => <div className="DomingoStoreProductContainerItems"><DomingoProductContainer product={product}/></div>)}
         </div>



      </div>
     </div>
  );
}

export default App;
