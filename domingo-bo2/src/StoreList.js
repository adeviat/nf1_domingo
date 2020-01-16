import React from 'react';
import { Pagination,List, Datagrid, TextField, SimpleShowLayout,Show,EditButton,ShowButton, Create, Edit,SimpleForm,SelectInput,TextInput,ReferenceInput, UrlField } from 'react-admin';


const PostPagination = props => <Pagination rowsPerPageOptions={[]} {...props} />;

export const StoreList = (props) => (
    <List {...props} title="Stores" pagination={<PostPagination/>} >
        <Datagrid >
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="address" />
            <TextField source="postcode" />
            <ShowButton />
            <EditButton />
        </Datagrid>
    </List>
);
export const StoreEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextField source="name" />
            <TextField source="address" />
            <TextField source="postcode" />
        </SimpleForm>
    </Edit>
);
export const StoreShow= props => (
    <Show title="name" {...props} >
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="address" />
            <TextField source="postcode" />
            <EditButton />
        </SimpleShowLayout>
    </Show>
);

