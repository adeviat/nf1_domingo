<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
//use Tymon\JWTAuth\Facades\JWTAuth;
//use Tymon\JWTAuth\Facades\JWTFactory;
//use Tymon\JWTAuth\Exceptions\JWTException;
//use Tymon\JWTAuth\Contracts\JWTSubject;
//use Tymon\JWTAuth\PayloadFactory;
//use Tymon\JWTAuth\JWTManager as JWT;


class UserController extends Controller
{
    public function register(Request $Request)
    {
        //recoger datos del usuario por post
        $json = $Request->input('json', null);
        $params = json_decode($json); //sacar un Objeto
        $params_array = json_decode($json, true); //sacar un Array
        if(!empty($params) && !empty($params_array)) {

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
                $pwd = hash('sha256', $params->password);


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
                    'user'=> $user
                );
            }

        }else{
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
        $json = $request->input('json', null);
        $params = json_decode($json);
        $params_array = json_decode($json, true);

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
            $pwd = hash('sha256', $params->password);

        //Devolver token o datos
          $signup = $JwtAuth->signup($params->email, $pwd);

          if(!empty($params->gettoken)){
              $signup = $JwtAuth->signup($params->email, $pwd, true);

          }

        }


        return response()->json($signup, 200);

    }

    public function update(Request $request){

        //Comprobar si el usuario se está identificado
        $token = $request->header('Authorization');
        $jwtAuth = new \JwtAuth();
        $checkToken = $jwtAuth->checkToken($token);

            //Rcoger los datos por Post
            $json = $request->input('json', null );
            $params_array = json_decode($json, true);

        if($checkToken && !empty($params_array)){

            //Sacar usuario identificado
            $user = $jwtAuth->checkToken($token, true);

            //Validar datos
            $validate = \Validator::make($params_array, [
                'name' => 'required|alpha',
                'surname' => 'required|alpha',
                'email' => 'required|email|unique:users,'. $user->sub

            ]);

            //Quitar campos que no quiero actualisar

            unset($params_array['id']);
            unset($params_array['password']);
            unset($params_array['created_at']);

            //Actualisar el usuario en la base de datos
            $user_update = User::where('id', $user->sub)->update($params_array);

            //Devolver array con resultado

            $data = array(
                'code' => 200,
                'status' => 'succes',
                'user' => $user,
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
    public function showbyid($id)
    {
        $users = User::find($id);
        return response()->json($users);
    }


//   public function getAuthenticatedUser()
//   {
//       try {
//            if (! $user = JWTAuth::parseToken()->authenticate()) {
//              return response()->json(['user_not_found'], 404);
//           }
//           } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
//               return response()->json(['token_expired'], $e->getStatusCode());
//           } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
//               return response()->json(['token_invalid'], $e->getStatusCode());
//           } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
//               return response()->json(['token_absent'], $e->getStatusCode());
//           }
//           return response()->json(compact('user'));
//   }

}

