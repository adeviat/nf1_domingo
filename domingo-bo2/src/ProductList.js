import React from 'react';
import { Pagination,List, Datagrid, TextField, EditButton, Create, Edit,SimpleForm,SelectInput,TextInput,ReferenceInput, UrlField } from 'react-admin';


const PostPagination = props => <Pagination rowsPerPageOptions={[]} {...props} />;

export const ProductList = (props) => (
    <List {...props} title="Products" pagination={<PostPagination/>} >
        <Datagrid >
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="price" />
            <UrlField source="photo" />
            <EditButton  />
        </Datagrid>
    </List>
);

export const ProductCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="price" />
            <TextInput source="description" />
            <TextInput source="photo" />
        </SimpleForm>
    </Create>
);

export const ProductEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="price" />
            <TextInput source="description" />
            <TextInput source="photo" />
        </SimpleForm>
    </Edit>

);
