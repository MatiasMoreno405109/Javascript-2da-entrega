let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function renderizarCarrito() {
    const contenedor = document.getElementById("contenedor-carrito");
    const totalElement = document.getElementById("total-carrito");

    contenedor.innerHTML = "";
    let total = 0;

    if (carrito.length === 0) {
        contenedor.innerHTML = `<p class="text-center fs-4">Tu carrito está vacío 🛒</p>`;
        totalElement.textContent = "0";
        return;
    }

    carrito.forEach((p, index) => {
        const subtotal = p.precio * p.cantidad;
        total += subtotal;

        contenedor.innerHTML += `
            <div class="col-md-4">
                <div class="card h-100 shadow-sm">
                    <img src="${p.imagen}" class="card-img-top" alt="${p.modelo}">
                    <div class="card-body">
                        <h5 class="card-title">${p.modelo}</h5>
                        <p class="card-text">Precio: $${p.precio.toLocaleString()}</p>
                        <p class="card-text">Cantidad: ${p.cantidad}</p>
                        <p class="card-text">Subtotal: $${subtotal.toLocaleString()}</p>
                        <button class="btn btn-outline-danger btn-sm" onclick="eliminarProducto(${index})">Eliminar</button>
                    </div>
                </div>
            </div>
        `;
    });

    totalElement.textContent = total.toLocaleString();
}

function eliminarProducto(index) {
    Swal.fire({
        title: "¿Eliminar producto?",
        text: "Esta acción no se puede deshacer.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            carrito.splice(index, 1);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            renderizarCarrito();
            Swal.fire("Eliminado", "Producto eliminado del carrito", "success");
        }
    });
}

document.getElementById("vaciar-carrito").addEventListener("click", () => {
    Swal.fire({
        title: "¿Vaciar carrito?",
        text: "Se eliminarán todos los productos.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, vaciar",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            carrito = [];
            localStorage.removeItem("carrito");
            renderizarCarrito();
            Swal.fire("Vaciado", "Tu carrito está vacío", "success");
        }
    });
});

document.getElementById("finalizar-compra").addEventListener("click", () => {
    if (carrito.length === 0) {
        Swal.fire("Carrito vacío", "Agrega productos antes de comprar", "warning");
        return;
    }
    Swal.fire("Compra realizada", "Gracias por tu compra", "success");
    carrito = [];
    localStorage.removeItem("carrito");
    renderizarCarrito();
});

renderizarCarrito();
