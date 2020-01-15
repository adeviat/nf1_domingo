<?php


namespace App;
use Illuminate\Database\Eloquent\Model;

class Store extends Model
{

    protected $table = 'stores';

    protected $fillable = [
        'name', 'address', 'postcode'
    ];

}
