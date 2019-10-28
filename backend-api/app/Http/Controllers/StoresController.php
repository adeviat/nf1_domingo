<?php


namespace App\Http\Controllers;


class StoresController extends Controller
{
public function getStores(){
    $Store1 = array(
        "id"=>100,
        "nombre"=>"Mc Donald",
        "description"=>"Fast Food",
        "Ubication"=>"Av Mallorca, Barcelona",
        );

    $Store2 = array(
        "id"=>100,
        "nombre"=>"Burguer King",
        "description"=>"Fast Food",
        "Ubication"=>"Av Diputacio, Barcelona",
        );

    $Store3 = array(
        "id"=>100,
        "nombre"=>"KFC",
        "description"=>"Fast Food",
        "Ubication"=>"Av Independencia, Barcelona",
    );
    return [$Store1,$Store2,$Store3] ;

}
}
