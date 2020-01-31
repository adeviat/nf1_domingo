<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model

{
    protected $table = 'orders';
    protected $fillable = [
        'user_id', 'store_id'
    ];
    public function products()
    {
        return $this->belongsToMany('App\Product');
    }
}

