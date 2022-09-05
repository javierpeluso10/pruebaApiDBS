// SELECTORES
const campoDeBusqueda = document.querySelector("#campoDeBusqueda")

// RENDERIZAR PERSONAJES EN HTML
const renderizarProductos =(todosLosProductos)=>{
    contenedorProductos.innerHTML = ""
    todosLosProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('contenedorProductosHide') 
    div.innerHTML = `
    <div class="cardProducto">
    <img src=${producto.imageUrl} alt= "" class="imgProducto">
    <h3 class="productoNombre">Nombre: ${producto.name}</h3>
    <h3>Especie: ${producto.specie}</h3>
    <h3>Rol: ${producto.role}</h3>
    <h3>Estado: ${producto.status}</h3>
    <h3>Universo: ${producto.universe}</h3>
    <h3>Transformacion: ${producto.transform}</h3>
    <h3>Planeta de Origen: ${producto.originplanet}</h3>
    </div>`
    contenedorProductos.append(div)
})
}

//BUSCADOR DE PERSONAJES
const buscarPersonaje = () =>{
    const query = campoDeBusqueda.value.toLowerCase()
    const arrayResultados = personajes.filter((producto) => producto.name.toLowerCase().includes(query))
    renderizarProductos(arrayResultados)
    validarBuscador()
}

//VALIDA QUE HAYA ALGUN DATO EN EL CAMPO DE BUSQUEDA, SINO VACIA EL BODY
const validarBuscador = () =>{
    const contenedorPersonajes = document.querySelectorAll(".contenedorProductosHide")
    if (campoDeBusqueda.value != '' ) {
        contenedorPersonajes.forEach(personaje => {
            personaje.classList.remove('contenedorProductosHide')
            personaje.classList.add('contenedorProductosShow')
        })
    } else {
        contenedorPersonajes.forEach(personaje =>{
            personaje.classList.add('contenedorProductosHide')
        })
    }
}

//LISTENER
campoDeBusqueda.addEventListener('input', buscarPersonaje)