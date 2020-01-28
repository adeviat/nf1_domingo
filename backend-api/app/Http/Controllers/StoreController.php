<?php


namespace App\Http\Controllers;

use App\Store;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StoreController extends Controller
{
    public function create(Request $request)
    {
        //recoger datos del usuario por post


        $params_array = $request->all(); //sacar un Array


        if (!empty($params_array)) {

            //limpiar datos
            $params_array = array_map('trim', $params_array);

            //validar datos
            $validate = \Validator::make($params_array, [
                'name' => 'required',
                'address' => 'required',
                'postcode' => 'required',
                'image_url' => 'required'

            ]);
            if ($validate->fails()) {
                //La validacion ha fallado
                $data = array(
                    'status' => 'error',
                    'code' => 404,
                    'message' => 'El producto no se ha creado',
                    'errors' => $validate->errors()
                );

            } else {
                //Validacion pasada correctamente


                $deliveryArea = DB::table('delivery_areas')->where('postcode',$params_array['postcode'])->value('delivery_areas');

                //crear el productos
                $store = new Store();
                $store->name = $params_array['name'];
                $store->address = $params_array['address'];
                $store->postcode = $params_array['postcode'];
                $store->delivery_area_id = $deliveryArea;
                $store->image_url = $params_array['image_url'];
                $store->category_id = $params_array['category_id'];




                //Guardar el producto
                $store->save();


                $data = array(
                    'status' => 'success',
                    'code' => 200,
                    'mensaje' => 'El Store se ha creado correctamente',
                    'newStore' => $store
                );
            }

        } else {
            $data = array(
                'status' => 'error',
                'code' => 404,
                'message' => 'Los datos enviados no son correctos'
            );
        }

        return response()->json($data, $data['code']);


    }

    public function update(Request $request){
        $params_array = $request->all();

        $validate = \Validator::make($params_array, [
            'name' => 'required',
            'address' => 'required',
            'postcode' => 'required',

        ]);
        if ($validate->fails()) {
            //La validacion ha fallado
            $data = array(
                'status' => 'error',
                'code' => 404,
                'message' => 'El Store no se ha actualizado',
                'errors' => $validate->errors()
            );

        } else {

            //Quitar campos que no quiero actualizar

            unset($params_array['created_at']);

            $storeData = array(

                'name' =>$params_array['name'],
                'address' => $params_array['address'],
                'postcode' =>$params_array['postcode'],



            );

            //Actualizar el usuario en la base de datos
            $store_update = Store::where('id', $params_array['id'])->update($storeData);

            //Devolver array con resultado

            $data = array(
                'code' => 200,
                'status' => 'success',
                'Store' => $params_array

            );


        }
        return response()->json($data,$data['code']);
    }

    public function showStoreById ($id)
    {
        $store = Store::where('id', $id) -> get();
        $data = array(
            'code' => 200,
            'stores' => $store,
            'totalStores' => 1
        );

        return response()->json($data);
    }
    public function deleteProductById($id)
    {
        $store = Store::where('id', $id) -> delete();
        $data = array(
            'code' => 200,
            'store' => sprintf("El store %d ha sido eliminado",$id)
        );

        return response()->json($data);
    }
    public function storesByCategoryDeliveryArea($category,$postcode)
    {
        $category_id = DB::table('store_categories')->where('name', $category)->value('id');
        $deliveryArea = DB::table('delivery_areas')->where('postcode',$postcode)->value('delivery_areas');

        $stores = DB::table('stores')->where([['category_id',$category_id], ['delivery_area_id' ,$deliveryArea]])->get();

         $data = array (
             'code' => 200,
             'stores' => $stores
         );
        return response()->json($data);
    }

}
