<?php


namespace App;


use Illuminate\Database\Eloquent\Model;

class UserRegistration extends Model
{
    protected $table = 'user';

    protected $fillable = ['name', 'surname','phonenumber','email','current_location'];

}
