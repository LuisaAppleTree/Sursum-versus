const stockProductos = [
    {
      id: 1,
      nombre: "Acido Glicolico",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum est quis exercitationem quidem similique possimus.",
      precio: 1234,
      cantidad:1,
      img: "assets/img/product4.jpg",
    },
    {
      id: 2,
      nombre: "Cannabacea",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum est quis exercitationem quidem similique possimus",
      precio: 1234,
      cantidad:1,
      img: "assets/img/product2.jpg",
    },
    {
      id: 3,
      nombre: "Black Alium Kit",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum est quis exercitationem quidem similique possimus",
      precio: 1570,
      cantidad:1,
      img: "assets/img/product3.jpg",
    },
    {
      id: 4,
      nombre: "Neyss Oxígeno Activado",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum est quis exercitationem quidem similique possimus",
      precio: 1234,
      cantidad:1,
      img: "assets/img/product1.jpg",
    },
    {
      id: 5,
      nombre: "Astringente Black Allium",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum est quis exercitationem quidem similique possimus",
      precio: 1234,
      cantidad:1,
      img: "assets/img/product5.jpg",
    },
    {
      id: 6,
      nombre: "Gel Cosmedic",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum est quis exercitationem quidem similique possimus",
      precio: 1234,
      cantidad:1,
      img: "assets/img/product6.jpg",
    },
    {
      id: 7,
      nombre: "Polvo Astringente",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum est quis exercitationem quidem similique possimuse",
      precio: 1234,
      cantidad:1,
      img: "assets/img/product7.jpg",
    },
    {
      id: 8,
      nombre: "Mascarilla Black Allium",
      cantidad: 1,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum est quis exercitationem quidem similique possimus",
      precio: 1234,
      cantidad:1,
      img: "assets/img/product8.jpg",
    }
  ]
  let carrito = [];
  
  const contenedor = document.querySelector("#contenedor");//selecciona tarjetas 
  const carritoContenedor = document.querySelector("#carritoContenedor");//se muestre en el carrito
  const vaciarCarrito = document.querySelector("#vaciarCarrito");
  const precioTotal = document.querySelector("#precioTotal");
  const procesarCompra = document.querySelector("#procesarCompra");
 
  
  if (procesarCompra) {
    procesarCompra.addEventListener("click", () => {
        location.href = "compra.html";
      })
    
  }
  
  
  //vaciar carrito
  if (vaciarCarrito) {
    vaciarCarrito.addEventListener("click", () => {
      carrito.length = [];
      mostrarCarrito();
    });
  }
  
  stockProductos.forEach((prod) => {
    const { id, nombre, precio, desc, img, cantidad } = prod;
    if (contenedor) {
      contenedor.innerHTML += `
       <div class="col-xs-3 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 ">
       <br><br>
      <img class="card-img-top mt-2 radio-img" src="${img}" alt="Card image cap">
      <div class="card-body color-trj  radio">
        <h5 class="card-title h5card">${nombre}</h5>
        <p class="card-text">Precio: ${precio}</p>
        <p class="card-text">Descripcion: ${desc}</p>
       
        <button class="btn btn-card produc-btn" onclick="agregarProducto(${id})">Comprar Producto</button>
      </div>
    </div>
      `;
    }
  });
  //se sume la cantidad del producto (no se duplique al agrgar)
  const agregarProducto = (id) => {
    const existe = carrito.some(prod => prod.id === id)
  
    if(existe){
      const prod = carrito.map(prod => {
        if(prod.id === id){
          prod.cantidad++
        }
      })
    } else {
      const item = stockProductos.find((prod) => prod.id === id)
      carrito.push(item)
    }
    mostrarCarrito()
  
  };
  
  const mostrarCarrito = () => {
    const modalBody = document.querySelector('.modal .modal-body');
    if (modalBody) {
      modalBody.innerHTML = "";
      carrito.forEach((prod) => {
        const { id, nombre, precio, desc, img, cantidad } = prod;
        console.log(modalBody);
        modalBody.innerHTML += `
        <div class="modal-contenedor">
          <div>
          <img class="img-fluid img-carrito" src="${img}"/>
          </div>
          <div>
          <p>Producto: ${nombre}</p>
        <p>Precio: ${precio}</p>
        <p>Cantidad :${cantidad}</p>
        <button class="btn btn-color-carrito"  onclick="eliminarProducto(${id})">Eliminar producto</button>
          </div>
        </div>
        
    
        `;
      });
    }
  
  
  

    carritoContenedor.textContent = carrito.length;//suma los productos al carrito
  
    if (precioTotal) {//suma de productos
      precioTotal.innerText = carrito.reduce(
        (acc, prod) => acc + prod.cantidad * prod.precio,
        0
      );
    }
  
    guardarStorage();
  };
  
  function guardarStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
  
  function eliminarProducto(id) {
    const juegoId = id;
    carrito = carrito.filter((juego) => juego.id !== juegoId);
    mostrarCarrito();
  }
  
  if (procesarCompra) {
    procesarCompra.addEventListener("click", () => {
      if (carrito.length === 0) {
        alert("Agrega algo al carrito");
      } else {
        location.href = "/carrito/carrito.html";
      }
    });
  }