
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

                        var numberOfProducts = productsList.length+1;
                        var arr = new Array(numberOfProducts).fill(0);
                        
                        // ACA DEBO SACAR LA INFO DEL DETALLE 
                        productsDetail.forEach( element => console.log(element) );
                      
                        
                        
                        console.log("El nombre del producto más pedido es PEPITO y ha sido pedido X  veces.");    
                      });

          });