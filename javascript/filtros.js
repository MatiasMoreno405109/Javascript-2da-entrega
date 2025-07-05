function aplicarFiltros(){
    const marca = document.getElementById("marca").value;
    const sistema = document.getElementById("sistema-operativo").value;
    const anio = document.getElementById("anio-lanzamiento").value;
    const almacenamiento = document.getElementById("capacidad-almacenamiento").value;
    const color = document.getElementById("color").value;
    const precioMinimo = document.getElementById("precio-minimo").value;
    const precioMaximo = document.getElementById("precio-maximo").value;

    let filtrados = productos.filter(oProd =>{
        return (
            (marca === "" || oProd.marca === marca) &&
            (sistema === "" || oProd.sistema === sistema) &&
            (anio === "" || oProd.anio === anio)&&
            (almacenamiento === "" || oProd.almacenamiento === almacenamiento)&&
            (color === "" || oProd.color === color)&&
            (precioMinimo === "" || oProd.precio >= parseInt(precioMinimo))&&
            (precioMaximo === "" || oProd.precio <= parseInt(precioMaximo))
        )
    });
    renderizarProductos(filtrados);
}

function renderizarProductos(lista){
    const contenedor = document.getElementById("contenedor-cards");
    contenedor.innerHTML = ""; // limpiamos resultados anteriores

    if(lista.length === 0){
        contenedor.innerHTML = "<p>No se encontraron dispositivos.</p>";
        return;
    };
    
    lista.forEach(oProd => {
        contenedor.innerHTML += `
        <div class="col-md-3 mb-4">
            <div class="card h-100">
                <img src="${oProd.imagen}" class="card-img-top" alt="${oProd.modelo}">
                <div class="card-body">
                    <h5 class="card-title">${oProd.modelo}</h5>
                    <p class="card-text">${oProd.marca}</p>
                    <p class="card-text">${oProd.sistema}</p>
                    <p class="card-text">${oProd.anio}</p>
                    <p class="card-text">${oProd.almacenamiento}</p>
                    <p class="card-text">${oProd.color}</p>
                    <p class="card-text">$${oProd.precio.toLocaleString()}</p>
                </div>
            </div>
        </div>`
    });
}
