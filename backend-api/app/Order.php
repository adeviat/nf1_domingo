<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'orders';

    //Relacion de muchos a uno

public function User()
{
    return $this->belongsTo('App\User', 'user-id');
}

public function Category()
{
    return $this->belongsTo('App\Category', 'category_id');
}

}
