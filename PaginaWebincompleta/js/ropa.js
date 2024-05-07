// INICIO funcion ready
$(document).ready(function() {

    // INICIO consumo API "http://fakestoreapi.com/products"
    $get('http://fakestoreapi.com/products', function(data) { 
        
        // Limpiar fila de ropa
        $('#productsRow').empty();

        // INICIO $each para recorrer los registros con la ropa
        $.each(data, function(i, item) {
            // Crear string con HTML de un "card de bootstrap" para formatear ropa
            var ropa = ` 
                  <div class="col p-2 col-sm_12 col-md-6 col-lg-4 col-xl-3">
                    <div class="card pt-2" style="width: 18rem;">
                      <img src="${item.image}" class="card-img-top" alt="${item.title}">
                      <div class="card-body">
                        <h5 class="card-title">${item.category}</h5>
                        <p class="card-text">${item.description}</p>
                        <p class="card-text">Precio: $${item.price}</p>
                        <a href="#" class="btn btn-primary">Comprar ahora</a>
                      </div>
                    </div>
                  </div>
            ` ;
            // Agregar string con el card a fila de ropa
            $('#productsRow').append(ropa);

        });
            

    });
         
});

     
