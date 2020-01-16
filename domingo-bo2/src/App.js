import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from "./dataProvider";
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
import {StoreEdit, StoreList, StoreShow} from "./StoreList";
import { ProductList, ProductCreate,ProductEdit } from './ProductList';


const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name="products" list={ProductList} create={ProductCreate}  edit={ProductEdit} />
        <Resource name="stores" list={StoreList} edit={StoreEdit} show={StoreShow} />
    </Admin>
);

export default App;

hola