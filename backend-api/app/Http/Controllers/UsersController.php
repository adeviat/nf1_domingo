<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\UserRegistration;

class UsersController extends Controller
{
    public function createUser(Request $request) {

        $request = $request->all();

        $user = UserRegistration::create([
           'name' => $request['username'],
           'surname' => $request['surname'],
           'phonenumber' => $request['phonenumber'],
           'email' => $request['email'],
            'current_location' => $request['current_location']
        ]);
        return $user;
    }

    public function getUser(Request $request) {

    }

}
