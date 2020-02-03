<?php

namespace App\Http\Controllers;
use App\Order;
use Illuminate\Http\Request;


class OrderController extends Controller
{
    public function create(Request $request) {

        $params_array = $request->all(); //sacar un Array

        if (!empty($params_array)) {

            //limpiar datos
            //$params_array = array_map('trim', $params_array);

            //validar datos
            $validate = \Validator::make($params_array, [
                'user_id' => 'required',
                'store_id' => 'required'
            ]);
            if ($validate->fails()) {
                //La validacion ha fallado
                $data = array(
                    'status' => 'error',
                    'code' => 404,
                    'message' => 'El pedido no se ha creado',
                    'errors' => $validate->errors()
                );

            } else {
                //Validacion pasada correctamente

                //crear el pedido
                $order = new Order();
                $order->store_id = $params_array['store_id'];
                $order->user_id = $params_array['user_id'];

                //Guardar el pedido
                $order->save();
                //recoger product_ids que vienen de front
                $product_ids = $params_array['productList'];

                /*foreach ($product_ids as $product_id) {
                    $orders_products = array(
                        'order_id' => $order->id,
                        'product_id' => $product_id
                    );
                    DB::table('orders_products') -> insert(
                        ['order_id' => $order->id, 'product_id' => $product_id]
                    );
                }
*/


                $order->products()->attach($params_array['productList']);


                $data = array(
                    'status' => 'success',
                    'code' => 200,
                    'mensaje' => 'El pedido se ha creado correctamente',
                    'neworder' => $order
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

}
