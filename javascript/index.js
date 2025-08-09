let productos = [];
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

fetch("javascript/productos.json")
    .then(res => res.json())
    .then(data => {
        productos = data;
        renderProductos(productos);
        actualizarContador();
    });

function renderProductos(lista) {
    const contenedor = document.getElementById("contenedor-cards");
    contenedor.innerHTML = "";
    if (lista.length === 0) {
        contenedor.innerHTML = "<p>No se encontraron dispositivos.</p>";
        return;
    }
    lista.forEach(oProd => {
        const card = document.createElement("div");
        card.classList.add("col-md-4", "mb-4");
        card.innerHTML = `
      <div class="card h-100">
        <img src="${oProd.imagen}" class="card-img-top" alt="${oProd.modelo}">
        <div class="card-body">
          <h5 class="card-title">${oProd.modelo}</h5>
          <p class="card-text">Marca: ${oProd.marca}</p>
          <p class = "card-text">Sistema operativo: ${oProd.sistema}</p>
          <p class = "card-text">Año: ${oProd.anio}</p>
          <p class = "card-text">Almacenamiento: ${oProd.almacenamiento}</p>
          <p class = "card-text">Color: ${oProd.color}</p>
          <p class="card-text">Precio: $${oProd.precio.toLocaleString()}</p>
          <button class="btn btn-primary" onclick="agregarAlCarrito(${oProd.id})"> 
            Agregar al carrito
          </button>
        </div>
      </div>
    `;// pongo oProd porque estoy acostumbrado a trabajar con objetos asi desde C#
        contenedor.appendChild(card);
    });
}

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if (!producto) return;

    const existe = carrito.find(item => item.id === id);
    if (existe) {
        existe.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    guardarCarrito();
    actualizarContador();
}

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function actualizarContador() {
    const totalCantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    document.getElementById("contador-carrito").textContent = totalCantidad;
}

actualizarContador();
document.getElementById("marca").addEventListener("change", aplicarFiltros);
document.getElementById("sistema-operativo").addEventListener("change", aplicarFiltros);
document.getElementById("anio-lanzamiento").addEventListener("change", aplicarFiltros);
document.getElementById("capacidad-almacenamiento").addEventListener("change", aplicarFiltros);
document.getElementById("color").addEventListener("change", aplicarFiltros);
document.getElementById("precio-minimo").addEventListener("change", aplicarFiltros);
document.getElementById("precio-maximo").addEventListener("change", aplicarFiltros);
