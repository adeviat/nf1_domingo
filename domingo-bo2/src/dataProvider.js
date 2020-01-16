import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';
import {get, post, put, deleteItem} from "./Server";

const apiUrl = 'http://127.0.0.1:80/api';
const httpClient = fetchUtils.fetchJson;
const addProduct = 'api/product/create';
const editProduct = 'api/product/update';
const getProduct = 'api/product/';
const deleteProduct = 'api/product/'
const getStore = '/store/1';





export default {
    getList: (resource, params) => {
        switch(resource){
            case 'products': {
                const {page, perPage} = params.pagination;
                const {field, order} = params.sort;
                const query = {
                    sort: JSON.stringify([field, order]),
                    range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
                    filter: JSON.stringify(params.filter),
                };
                const url = apiUrl + "/" + resource + "?" + stringify(query);

                return httpClient(url).then(({headers, json}) => ({
                    data: json.products,
                    total: json.numOfProducts
                }));

            }
            case 'stores': {
                const {page, perPage} = params.pagination;
                const {field, order} = params.sort;
                const query = {
                    sort: JSON.stringify([field, order]),
                    range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
                    filter: JSON.stringify(params.filter),
                };
                const url = apiUrl + getStore;

                return httpClient(url).then(({headers, json}) => ({
                    data: json.stores,
                    total: json.totalStores
                }));

            }

        }

    },
    create: (resource, params) =>{
        switch (resource) {
            case 'products': {

                const data = {
                    name: params.data.name,
                    description: params.data.description,
                    price: params.data.price,
                    photo:params.data.photo,
                    store_id: 1
                }

                return post(addProduct,data)
                .then(response => ({
                    data: { ...params.data, id: response.id }
                }))
                .catch(error => {
                    console.log(error);

                });
            }
        }
    },
    update: (resource, params) => {
        debugger;
        const data = {
            id: params.data.id,
            name: params.data.name,
            description: params.data.description,
            price: params.data.price,
            photo:params.data.photo,
            store_id: 1
        }
        return put(editProduct,data)
            .then(response =>({
                data: response.product
            }))
            .catch(error =>{
                console.log(error);
            });
    },
    getOne: (resource,params) => {

        return get(getProduct + params.id)
            .then(response => ({

                data:response
            }))

    },
    delete: function (resource, params) {
        return deleteItem(deleteProduct + params.id)
            .then(function (_a) {
            var json = _a.json;
            return ({ data: json });
        });
    },
}
//total: parseInt(headers.get('content-range').split('/').pop(), 10)