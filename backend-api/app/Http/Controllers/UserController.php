<?php

namespace App\Http\Controllers;

use App\Helpers\JwtAuth;
use App\Store;
use Illuminate\Http\Request;
use App\User;


class UserController extends Controller
{
    public function register(Request $request)
    {
        //recoger datos del usuario por post


        $params_array = $request->all(); //sacar un Array


        if(!empty($params_array)) {

            //limpiar datos
            $params_array = array_map('trim', $params_array);

            //validar datos
            $validate = \Validator::make($params_array, [
                'name' => 'required|alpha',
                'surname' => 'required|alpha',
                'email' => 'required|email|unique:users', //comprobar si el usuario ya existe (duplicado)
                'password' => 'required'
            ]);
            if ($validate->fails()) {
                //La validacion ha fallado
                $data = array(
                    'status' => 'error',
                    'code' => 404,
                    'mensage' => 'El usuario no se ha creado',
                    'errors' => $validate->errors()
                );

            } else {
                //Validacion pasada correctamente

                //cifrar la contraseña
                $pwd = hash('sha256', $params_array['password']);


                //crear el usuario
                $user = new User();
                $user->name = $params_array['name'];
                $user->surname = $params_array['surname'];
                $user->email = $params_array['email'];
                $user->password = $pwd;


                //Guardar el usuario
                $user->save();


                $data = array(
                    'status' => 'success',
                    'code' => 200,
                    'mensage' => 'El usuario se ha creado correctamente',
                    'user' => $user
                );
            }

        } else {
            $data = array(
                'status' => 'error',
                'code' => 404,
                'mensage' => 'Los datos enviados no son correctos'
            );
        }

        return response()->json($data, $data['code']);


    }


    public function login(Request $request)
    {
        $JwtAuth = new \JwtAuth();
        //Recibir datos por post
        $params_array = $request->all(); //sacar un Array
        //Validar esos datos
        $validate = \Validator::make($params_array, [
            'email' => 'required|email',
            'password' => 'required'
        ]);
        if ($validate->fails()) {
            //La validacion ha fallado
            $signup = array(
                'status' => 'error',
                'code' => 404,
                'mensage' => 'El usuario no se ha podido identificar',
                'errors' => $validate->errors()
            );
        } else {
            //Cifrar la password
            $pwd = hash('sha256', $params_array['password']);
            //Devolver token o datos
            $signup = $JwtAuth->signup($params_array['email'], $pwd);
            if(!empty($params_array['gettoken'])){
                $signup = $JwtAuth->signup($params_array['email'], $pwd, true);
            }

            $data = array(
                'code' => 200,
                'token' => $signup,
                'user' => $JwtAuth->checkToken($signup, true),
                'message' => 'El usuario se ha podido identificar'

            );
        }


        return response()->json($data, $data["code"]);

    }

    public function update(Request $request){

        //Comprobar si el usuario se está identificado
       // $token = $request->header('Authorization');
        $jwtAuth = new \JwtAuth();
       // $checkToken = $jwtAuth->checkToken($token);

            //Rcoger los datos por Post
        $params_array = $request->all(); //sacar un Array
        $checkToken = $jwtAuth->checkToken($params_array['token']);
        if($checkToken && !empty($params_array)){

            //Sacar usuario identificado
            $user = $jwtAuth->checkToken($params_array['token'], true);

            //Validar datos
            $validate = \Validator::make($params_array, [
                'name' => 'required|alpha',
                'surname' => 'required|alpha',
                'email' => 'required|email|unique:users,'. $user->id

            ]);

            //Quitar campos que no quiero actualisar

            unset($params_array['id']);
            unset($params_array['password']);
            unset($params_array['created_at']);

            $userData = array(

                'name' =>$params_array['name'],
                'surname' => $params_array['surname'],
                'email' =>$params_array['email'],


            );

            //Actualizar el usuario en la base de datos
            $user_update = User::where('id', $user->id)->update($userData);
            //Actualisar el usuario en la base de datos
            User::where('id', $user->id)->update($userData);
            //Crear un token nuevo
            $token_update = $jwtAuth->signup($params_array['email'], $user->password);
            //Usuario
            $user_update = $jwtAuth->checkToken($token_update, true);


                //Devolver array con resultado

            $data = array(
                'code' => 200,
                'status' => 'success',
                'user' => $user,
                'status' => 'succes',
                'user' => $user_update,
                'token' => $token_update,
                'change' => $params_array

            );


        }else{
            $data = array(
                'code' => 400,
                'status' => 'error',
                'massage' => 'El usuario no esta identificado.'

            );
        }
        return response()->json($data, $data['code']);
    }
    public function show()
    {
        $users = User::all();
       return response()->json($users);
    }
    public function showbytoken($token)
    {
        $jwtAuth = new \JwtAuth();
        $data = array(
            'code' => 200,
            'token' => $token,
            'user' => $jwtAuth->checkToken($token, true)


        );


        return response()->json($data);
    }

    public function updatePassword(Request $request){

        //Comprobar si el usuario se está identificado
        // $token = $request->header('Authorization');
        $jwtAuth = new \JwtAuth();
        // $checkToken = $jwtAuth->checkToken($token);

        //Rcoger los datos por Post
        $params_array = $request->all(); //sacar un Array
        $checkToken = $jwtAuth->checkToken($params_array['token']);
        if($checkToken && !empty($params_array)){

            //Sacar usuario identificado
            $user = $jwtAuth->checkToken($params_array['token'], true);

            //Validar datos
            $validate = \Validator::make($params_array, [
                'password' => 'required|confirmed',
                'password_confirmation' => 'required|same:password'
            ]);

            //Quitar campos que no quiero actualizar

            unset($params_array['id']);
            unset($params_array['created_at']);
            unset($params_array['name']);
            unset($params_array['surname']);
            //unset($params_array['email']);

            $userData = array(

                'password' => hash('sha256', $params_array['password']),

            );

            //Actualisar el usuario en la base de datos
            $user_update = User::where('id', $user->id)->update($userData);

            //Devolver array con resultado
            $signup = $jwtAuth->signup($user->email, $userData);
            $new_user = $jwtAuth->checkToken($signup, true);
            $params_array['token'] = $signup;
            $data = array(
                'code' => 200,
                'status' => 'succes',
                'user' => $new_user,
                'token' => $signup,
                'change' => $params_array

            );


        }else{
            $data = array(
                'code' => 400,
                'status' => 'error',
                'massage' => 'El usuario no esta identificado.'

            );
        }
        return response()->json($data, $data['code']);
    }
    public function getStore($token){
        $jwtAuth = new \JwtAuth();
        $user = $jwtAuth->checkToken($token, true);
        $store = Store::where('id', $user->store_id)->get();

        $data = array(
            'code' => 200,
            'store' => $store,
            'status' => 'success'
        );
        return response()->json($data, $data['code']);
    }

    public function updateAddress(Request $request){

        $params_array = $request->all();

        $jwtAuth = new \JwtAuth();
        $checkToken = $jwtAuth->checkToken($params_array['token']);

        if($checkToken && !empty($params_array)){
            \Validator::make($params_array, [
                'address' => 'required',
                'postalcode' => 'required|max:5'

            ]);

            $user = $jwtAuth->signup($params_array['token'], true);

            $dataToUpdate = array(
                'address' => $params_array['address'],
                'postalcode' => $params_array['postalcode']
            );

            User::where('id', $user->id)->update($dataToUpdate);

            $token_update = $jwtAuth->signup($user->email, $user->password);
            $user_update = $jwtAuth->checktoken($token_update, true);

            $data = array(
                'code' => 200,
                'token' => $token_update,
                'user' => $user_update,
                'message' => 'Dirección y cp añadidos correctamente'
            );

            return response()->json($data);
        }
        else {
            $data = array(
                'code' => 400,
                'message' => 'Token no valido'
            );
            return response()->json($data);
        }
    }
}

