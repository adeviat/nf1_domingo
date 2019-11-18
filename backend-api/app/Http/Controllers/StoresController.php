<?php


namespace App\Http\Controllers;


class StoresController extends Controller
{
    public function getStores(){
         $store1 = array(
             "id" => 100,
             "name" => "KFC",
             "location" => "Barcelona",
             "products" => array("Hamburguesa", "platano" , "mandarina")
         );
        $store2 = array(
            "id" => 100,
            "name" => "BK",
            "location" => "Barcelona",
            "products" => array("Hamburguesa" => "Whooper", "platano" => "de canarias" , "mandarina" => "de Valencia")
        );
        $store3 = array(
            "id" => 100,
            "name" => "McDonnals",
            "location" => "Barcelona",
            "products" => array("Hamburguesa", "platano" , "mandarina")
        );
        return [$store1,$store2,$store3];
    }
}
