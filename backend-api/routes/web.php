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

//cargando clases
use App\Http\Middleware\ApiAuthMiddleware;

Route::get('/', function () {
    return view('welcome');
});

Route::get('api/store/{id}', 'StoreController@getStore');
Route::get('api/stores', 'StoreController@getStores');


Route::post('/api/user/register', 'UserController@register');
Route::post('/api/user/login', 'UserController@login');
Route::put('/api/user/update', 'UserController@update');
Route::get('/api/users', 'UserController@show');
//Route::get('/api/users/{id}', 'UserController@showbyid');
Route::get('/api/user/profile/{id}', 'UserController@profile');
Route::post('api/user/uploade', 'UserController@upload')->middleware(ApiAuthMiddleware::class);
//Ctegories

Route::resource('/api/category', 'CategoryController');


