import React, { Fragment} from 'react';
import ProductsList from "./ProductsList";

function Products({productos, guardarRecargarProductos}) {
    return (
        <Fragment>
            <h1 className="text-center">Productos</h1>
            <ul className="list-group mt-5">
                {productos.map(producto => (
                    <ProductsList
                        key={producto.id}
                        producto={producto}
                        guardarRecargarProductos={guardarRecargarProductos}
                    />
                ))}
            </ul>
        </Fragment>
    )
}
export default Products;