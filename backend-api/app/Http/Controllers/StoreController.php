<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Store;


class StoreController extends Controller
{
    public function register(Request $request)
    {
        //recoger datos de la store por post


        $params_array = $request->all(); //sacar un Array


        if(!empty($params_array)) {

            //limpiar datos
            $params_array = array_map('trim', $params_array);

            //validar datos
            $validate = \Validator::make($params_array, [
                'name' => 'required|alpha',
                'email' => 'required|email|unique:users', //comprobar si la store ya existe (duplicado)
                'password' => 'required'
            ]);
            if ($validate->fails()) {
                //La validacion ha fallado
                $data = array(
                    'status' => 'error',
                    'code' => 400,
                    'mensage' => 'La store no se ha creado',
                    'errors' => $validate->errors()
                );

            } else {
                //Validacion pasada correctamente

                //cifrar la contraseña
                $pwd = hash('sha256', $params_array['password']);


                //crear la store
                $user = new Store();
                $user->name = $params_array['name'];
                $user->email = $params_array['email'];
                $user->password = $pwd;


                //Guardar el usuario
                $user->save();


                $data = array(
                    'status' => 'success',
                    'code' => 200,
                    'mensage' => 'La store se ha creado correctamente',
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
                'mensage' => 'La store no se ha podido identificar',
                'errors' => $validate->errors()
            );
        } else {
            //Cifrar la password
            $pwd = hash('sha256', $params_array['password']);
            //Devolver token o datos
            $signup = $JwtAuth->signupStore($params_array['email'], $pwd);
            if(!empty($params_array['gettoken'])){
                $signup = $JwtAuth->signupStore($params_array['email'], $pwd, true);
            }

            $data = array(
                'code' => 200,
                'token' => $signup,
                'user' => $JwtAuth->checkToken($signup, true),
                'message' => 'La store se ha podido identificar'

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
            $store = $jwtAuth->checkToken($params_array['token'], true);

            //Validar datos
            $validate = \Validator::make($params_array, [
                'name' => 'required|alpha',
                'email' => 'required|email|unique:users,'. $store->id

            ]);

            //Quitar campos que no quiero actualisar

            unset($params_array['id']);
            unset($params_array['password']);
            unset($params_array['created_at']);

            $userData = array(

                'name' =>$params_array['name'],
                'email' =>$params_array['email'],


            );

            //Actualizar el usuario en la base de datos
            $user_update = Store::where('id', $store->id)->update($userData);

            //Devolver array con resultado

            $data = array(
                'code' => 200,
                'status' => 'succes',
                'store' => $store,
                'change' => $params_array

            );


        }else{
            $data = array(
                'code' => 400,
                'status' => 'error',
                'massage' => 'La tienda no esta identificada.'

            );
        }
        return response()->json($data, $data['code']);
    }
    public function show()
    {
        $store = \Illuminate\Session\Store::all();
        return response()->json($store);
    }
    public function showbytoken($token)
    {
        $jwtAuth = new \JwtAuth();
        $store = $jwtAuth->checkToken($token, true);


        return response()->json($store);
    }


}

