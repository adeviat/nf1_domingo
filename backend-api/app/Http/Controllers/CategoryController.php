<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Category;

class CategoryController extends Controller{

    public function __construct(){
        $this->middleware('api.auth', ['except' => ['index', 'show']]);
    }

    public function index(){
        $categories = Category::all();

        return response()->json([
            'code' => 200,
            'status' => 'success',
            'categories' => $categories
        ]);
    }
    public function show($id){
        $categories = Category::find($id);

        if(is_object($categories)){

        $data= [
            'code' => 200,
            'status' => 'success',
            'categories' => $categories
            ];
        }else{
            $data= [
                'code' => 404,
                'status' => 'error',
                'categories' => 'La categoria no existe'
            ];
        }
        return \response()->json($data, $data['code']);
    }

    public function store(Request $request){
        //Recoger los datos por post
        $json = $request->input('json', null);
        $params_array = json_decode($json, true);

         if(!empty($params_array)) {
             //Validar los datos
             $validate = \Validator::make($params_array, [
                 'name' => 'required'
             ]);

             //Guardar la categoria
             if ($validate->fails()) {
                 $data = [
                     'code' => 404,
                     'status' => 'error',
                     'message' => 'no se ha podido guardar la categoria'
                 ];
             } else {
                 $category = new Category();
                 $category->name = $params_array['name'];
                 $category->save();

                 $data = [
                     'code' => 200,
                     'status' => 'succes',
                     'message' => $category
                 ];
             }

         }else{
             $data = [
                 'code' => 404,
                 'status' => 'error',
                 'message' => 'no has enviado ninguna categoria categoria'
             ];
         }

        //Devolver resultados
        return response()->json($data, $data['error']);
    }

    public function update($id, Request $request){
        //recoger datos por post
        $json = $request->input('json', null);
        $params_array = json_decode($json, true);

        if(!empty($params_array)){
            //Validar los datos
            $validate = \Validator::make($params_array, [
                'name' => 'required'
            ]);

            //Quitar datos que no quiero actualizar
            unset($params_array['id']);
            unset($params_array['created_at']);

            //Actualizar la categoria
            $category = Category::where('id', $id)->update($params_array);

            $data = [
                'code' => 200,
                'status' => 'succes',
                'category' => $params_array
            ];
        }else{
            $data = [
                'code' => 404,
                'status' => 'error',
                'message' => 'no has enviado ninguna categoria categoria'
            ];
        }
        //Devolver respuesta
        return \response()->json($data, $data['code']);
    }
}
