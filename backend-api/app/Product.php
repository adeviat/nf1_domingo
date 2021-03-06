<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class product extends Model


{
    protected $table = 'products';
    protected $fillable = [
        'name', 'description', 'price', 'photo', 'store_id',
    ];
    public function orders()
    {
        return $this->belongsToMany('App\Order');
    }
}
