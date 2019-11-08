<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserDomingo extends Model {
    public $timestamps = false;
    protected $table='user';
    protected $fillable = ['name','surname','phonenumber','email','current_location'];

}

