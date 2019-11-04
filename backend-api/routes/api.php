<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('posts', function(){
    $posts = [
        [
            'name' => 'Mostapha',
            'email' => 'mostapha@mostapha.com',
            'phoneNumber' => '666163598',
            'city' => 'barcelona'
        ],
       [
            'name' => 'Alberto',
            'email' => 'albert@albert.com',
            'phoneNumber' => '666163598',
            'city' => 'valencia'
        ],
        [
           'name' => 'Carlos',
           'email' => 'carlos@carlos.com',
           'phoneNumber' => '665165898',
            'city' => 'madrid'
        ]
    ];

    return response($posts,200);
});
