<?php

namespace App\Helpers;

use Firebase\JWT\JWT;
use Illuminate\Support\Facades\DB;
use App\User;
use App\Store;

class JwtAuth {

    public $key;

    public function __construct()
    {
        $this->key = 'esto-es_una_clave_super_secreta-666163598';
    }

    public function signup($email, $password, $getToken = null){

    // Buscar si existe el usuario con sus credenciales
      $user = User::where([
          'email' => $email,
          'password' => $password
      ])->first();

    //Comprobar si son correctas
      $signup = false;
      if(is_object($user)){
          $signup = true;
      }
    //Generar el token con los datos de usuario identificado
      if($signup){

          $token = array(
              'id'     => $user->id,
              'email'   => $user->email,
              'name'    => $user->name,
              'surname' => $user->surname,
              'store_id' => $user->store_id,
              'password' => $password,
              'iat'     =>  time(),
              'exp'     =>  time() + (365 * 24 * 60 * 60),
          );

          $jwt = JWT::encode($token, $this->key, 'HS256');
          $decoded = JWT::decode($jwt, $this->key, ['HS256']);

          //Devolcer los datos decodificados o el token, en funcion de un parametro
          if(is_null($getToken)){
              $data = $jwt;
          }else{
              $data = $decoded;

          }

      }else{
          $data = array(
              'status' => 'error',
              'message' => 'Login incorrecto.'

          );
      }

        return $data;

    }
    public function signupStore($email, $password, $getToken = null){

        // Buscar si existe el usuario con sus credenciales
        $store = Store::where([
            'email' => $email,
            'password' => $password
        ])->first();

        //Comprobar si son correctas
        $signup = false;
        if(is_object($store)){
            $store = true;
        }
        //Generar el token con los datos de usuario identificado
        if($signup){

            $token = array(
                'id'     => $store->id,
                'email'   => $store->email,
                'name'    => $store->name,
                'location' => $store->location,
                'iat'     =>  time(),
                'exp'     =>  time() + (7 * 24 * 60 * 60),
            );

            $jwt = JWT::encode($token, $this->key, 'HS256');
            $decoded = JWT::decode($jwt, $this->key, ['HS256']);

            //Devolcer los datos decodificados o el token, en funcion de un parametro
            if(is_null($getToken)){
                $data = $jwt;
            }else{
                $data = $decoded;

            }

        }else{
            $data = array(
                'status' => 'error',
                'message' => 'Login incorrecto.'

            );
        }

        return $data;

    }
      public function checkToken($jwt, $getIdentity = false){
        $auth = false;

        try {
            $jwt = str_replace('"', '', $jwt);  //Remplazar comillas en el token por nada
            $decoded = JWT::decode($jwt, $this->key, ['HS256']);
        }catch (\UnexpectedValueException $e){
            $auth = false;
        }catch (\DomainException $e){
            $auth = false;
        }

        if(!empty($decoded) && is_object($decoded) && isset($decoded->id)){
            $auth = true;
        }else{
            $auth = false;
        }

        if($getIdentity){
            return $decoded;
        }
        return $auth;
      }


}
