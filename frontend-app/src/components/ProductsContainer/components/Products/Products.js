import React from "react";
import {Container, Nav, Row} from "react-bootstrap";
import Product from "../Product";
import Loading from "../Loading";

export default function Products(props) {
  const {
    products: { result, loading, error },
    addProductCart
  } = props;

  return (
    <Container>
      <MenuNav/>
      <Row>
        {loading || !result ? (
          <Loading />
        ) : (
          result.map((product, index) => (
            <Product
              key={index}
              product={product}
              addProductCart={addProductCart}
            />
          ))
        )}
      </Row>
    </Container>
  );
}

function MenuNav() {
    return (
    <div>
        <h3>Nombre de los Restaurantes</h3>
        <Nav className="mr-auto">
            <Nav.Link href="#">Americana</Nav.Link>
            <Nav.Link href="#">Árabe</Nav.Link>
            <Nav.Link href="#">Asiática</Nav.Link>
            <Nav.Link href="#">Burger</Nav.Link>
            <Nav.Link href="#">Burger</Nav.Link>
            <Nav.Link href="#">Dulce</Nav.Link>
            <Nav.Link href="#">Helados</Nav.Link>
            <Nav.Link href="#">Hindù</Nav.Link>
            <Nav.Link href="#">Internacional</Nav.Link>

        </Nav>
    </div>
    );
}