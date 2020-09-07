
const fetchPromiseList = fetch("https://gist.githubusercontent.com/josejbocanegra/be0461060d1c2d899740b8247089ba22/raw/916d2141e32e04031bda79c8886e8e4df0ae7f24/productos.json");
fetchPromiseList
        .then(responseList => {
            return responseList.json();
          })
        .then(productsList => {
            
            const fetchPromiseDetail = fetch("https://gist.githubusercontent.com/josejbocanegra/7b6febf87e9d986048a648487b35e693/raw/576531a2d0e601838fc3de997e021816a4b730f8/detallePedido.json");

            fetchPromiseDetail
                     .then(responseDetail => {
                         return responseDetail.json();
                     })
                     .then(productsDetail => {

                        // Creo un array vacio con la cantidad de productos que existen,
                        // como los id comienza en 1 entonces es el tamaño + 1 
                        var numberOfProducts = productsList.length+1;
                        var array = new Array(numberOfProducts).fill(0);
                        
                        // Recorro todos los pedidos para extraer la cantidad.
                        productsDetail.forEach( element => array[element.idproducto] += parseInt(element.cantidad) );

                        // Valor para comparar
                        var value = 0;
                        // Posición del mayor
                        var position = array[1];

                        // Recorre el array para encontrar el mayor.
                        for (var i = 1; i < array.length; i++) {
                            if (array[i] > value) {
                                value = array[i];
                                position = i;
                            }
                        }
                                    
                        console.log("El nombre del producto más pedido es: " + productsList[position].nombreProducto + " y ha sido pedido " + value  + " veces.");    
                      });

          });