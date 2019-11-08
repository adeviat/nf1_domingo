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




Route::get('/api/stores','StoresController@getStores');

Route::get('/api/store/{id}','StoresController@getStore');

Route::post('/api/user','UsersController@createUser');

Route::get('/api/user/{id}','UsersController@getUser');
