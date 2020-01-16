<?php


namespace App\Http\Controllers;
use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
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
                'description' => 'required',
                'price' => 'required',
                'photo' => 'required|url'
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




                //crear el producto
                $product = new Product();
                $product->name = $params_array['name'];
                $product->description = $params_array['description'];
                $product->price = $params_array['price'];
                $product->photo = $params_array['photo'];
                $product->store_id = $params_array['store_id'];



                //Guardar el producto
                $product->save();


                $data = array(
                    'status' => 'success',
                    'code' => 200,
                    'mensaje' => 'El producto se ha creado correctamente',
                    'newproduct' => $product
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

    public function show()
    {
        $products = Product::all();
        $data= array(
            'products'=> $products,
            'numOfProducts'=>sizeof($products)

        );

    return response()->json($data);
}
    public function showProductById ($id)
    {
        $product = Product::where('id', $id) -> get();
        $data = array(
            'code' => 200,
            'product' => $product,
        );

        return response()->json($data);
    }

    public function update(Request $request){
        $params_array = $request->all();

        $validate = \Validator::make($params_array, [
            'name' => 'required',
            'description' => 'required',
            'price' => 'required',
            'photo' => 'required|url'
        ]);
        if ($validate->fails()) {
            //La validacion ha fallado
            $data = array(
                'status' => 'error',
                'code' => 404,
                'message' => 'El producto no se ha actualizado',
                'errors' => $validate->errors()
            );

        } else {

            //Quitar campos que no quiero actualizar

            unset($params_array['created_at']);

            $productData = array(

                'name' =>$params_array['name'],
                'description' => $params_array['description'],
                'price' =>$params_array['price'],
                'photo' =>$params_array['photo'],


            );

            //Actualizar el usuario en la base de datos
            $product_update = Product::where('id', $params_array['id'])->update($productData);

            //Devolver array con resultado

            $data = array(
                'code' => 200,
                'status' => 'success',
                'product' => $params_array

            );


        }
        return response()->json($data,$data['code']);
    }
    public function deleteProductById($id)
    {
        $product = Product::where('id', $id) -> delete();
        $data = array(
            'code' => 200,
            'product' => sprintf("El producto %d ha sido eliminado",$id)
        );

        return response()->json($data);
    }
}
