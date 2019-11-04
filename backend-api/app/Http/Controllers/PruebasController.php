<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Order;
use App\Category;

class PruebasController extends Controller
{
     public function testOrm(){

     $orders = order::all();
     var_dump($orders);
     die();
    }
}
