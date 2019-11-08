<?php


namespace App\Http\Controllers;


use App\formexample;
use App\User;
use App\UserDomingo;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function createUser(Request $request)
    {

        $request = $request->all();

        $user = UserDomingo::create([
            'name' => $request['username'],
            'surname' => $request['surname'],
            'phonenumber' => $request['phonenumber'],
            'email' => $request['email'],
            'current_location' => $request['current_location']

        ]);
        return $user;
    }


    public function getUser($id)
    {
        return response()->json(UserDomingo::findOrFail($id));
        //return view('user.name', ['user'=> FormExample::findOrFail($id)]);
    }


}
