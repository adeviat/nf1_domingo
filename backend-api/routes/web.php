<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('api/store/{id}', 'StoreController@showStoreById');
Route::get('api/store/category/{category}/postcode/{postcode}', 'StoreController@storesByCategoryDeliveryArea');
Route::get('api/store/category/{category}', 'StoreController@storesByCategory');
Route::post('api/store/create', 'StoreController@create');
Route::put('api/store/update', 'StoreController@update');
//Route::get('api/stores', 'StoreController@getStores');


Route::post('/api/user/register', 'UserController@register');
Route::post('/api/user/login', 'UserController@login');
Route::put('/api/user/update', 'UserController@update');
Route::put('/api/user/updatepass', 'UserController@updatepassword');
Route::put('/api/user/updateAddress', 'UserController@updateAddress');
Route::get('/api/users', 'UserController@show');
Route::get('/api/users/getStore/{token}', 'UserController@getStore');
Route::get('/api/users/{token}', 'UserController@showbytoken');


Route::post('/api/product/create', 'ProductController@create');
Route::get('/api/products', 'ProductController@show');
Route::get('/api/product/{id}', 'ProductController@showProductById');
Route::put('/api/product/update', 'ProductController@update');
Route::delete('/api/product/{id}', 'ProductController@deleteProductById');


Route::get('/test-orm', 'PruebasController@testOrm');

