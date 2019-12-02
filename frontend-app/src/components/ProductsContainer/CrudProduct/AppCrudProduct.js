import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Header from "./Component/Header";
import Products from "./Component/Products";
import EditProduct from "./Component/EditProduct";
import AddProduct from "./Component/AddProduct";
import Product from "./Component/Product";

function AppCrudProduct() {


    const [ productos, guardarProductos ] = useState([]);
    const [ recargarProductos, guardarRecargarProductos ] = useState(true);

    useEffect(() => {
        if(recargarProductos) {
            const consultarApi = async () => {
                // consultar la api de json-server
                const resultado = await axios.get('http://localhost:4000/restaurant');

                guardarProductos(resultado.data);
            }
            consultarApi();

            // Cambiar a false la recarga de los productos
            guardarRecargarProductos(false);
        }
    }, [recargarProductos]);




    return (
        <Router>
            <Header />
            <main className="container mt-5">
                <Switch>
                    <Route exact path="/productos"
                           render={ () => (
                               <Products
                                   productos={productos}
                                   guardarRecargarProductos={guardarRecargarProductos}
                               />
                           ) }
                    />
                    <Route exact path="/nuevo-producto"
                           render={() => (
                               <AddProduct
                                   guardarRecargarProductos={guardarRecargarProductos}
                               />
                           )}/>
                    <Route exact path="/productos/:id" component={Product} />
                    <Route exact path="/productos/editar/:id"
                           render={props => {
                               // tomar el ID del producto
                               const idProducto = parseInt(props.match.params.id);

                               // el producto que se pasa al state
                               const producto = productos.filter(producto => producto.id === idProducto);

                               return (
                                   <EditProduct
                                       producto={producto[0]}
                                       guardarRecargarProductos={guardarRecargarProductos}
                                   />
                               )
                           }} />
                </Switch>
            </main>
            {/*<p className="mt-4 p2 text-center">Todos los derechos Reservados</p>*/}
        </Router>
    );
}

export default AppCrudProduct;