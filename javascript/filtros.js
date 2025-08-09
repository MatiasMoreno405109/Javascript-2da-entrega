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
    renderProductos(filtrados);
}


