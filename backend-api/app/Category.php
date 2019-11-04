<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'categories';

    //Relacion de uno a muchos
    public function orders(){
        return $this->hasMany('App\order');
    }
}
