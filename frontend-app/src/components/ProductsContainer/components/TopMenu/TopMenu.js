import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Cart from "../Cart";
import HeaderLogo from "../../../Footer/Components/HeaderLogo";

import "./TopMenu.scss";
import HomePageTopMenu from "../../../HomePageTopMenu/HomePageTopMenu";

export default function TopMenu(props) {
  const { productsCart, getProductsCart, products } = props;

  return (
    <Navbar bg="white" variant="white" className="top-menu">
      <Container>
        <BrandNav />
        <Cart
            productsCart={productsCart}
          getProductsCart={getProductsCart}
          products={products}
        />
      </Container>
    </Navbar>
  );
}

function BrandNav() {
  return (
      <div>
        <HeaderLogo/>
      </div>
  );
}


