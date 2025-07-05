document.getElementById("filtroForm").addEventListener("submit", (evt)=>{
    evt.preventDefault();
    aplicarFiltros();
});
document.getElementById("marca").addEventListener("change", aplicarFiltros);
document.getElementById("sistema-operativo").addEventListener("change", aplicarFiltros);
document.getElementById("anio-lanzamiento").addEventListener("change",aplicarFiltros)
document.getElementById("capacidad-almacenamiento").addEventListener("change",aplicarFiltros)
document.getElementById("color").addEventListener("change",aplicarFiltros)
document.getElementById("precio-minimo").addEventListener("change",aplicarFiltros)
document.getElementById("precio-maximo").addEventListener("change",aplicarFiltros)