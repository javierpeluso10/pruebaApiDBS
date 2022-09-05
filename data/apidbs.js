let personajes = []

// OBTENER PRODUCTOS DE JSON
const obtenerPersonajes = async () => {
    try{ 
        const response = await fetch("https://dragon-ball-super-api.herokuapp.com/api/characters")
        personajes = await response.json()
        renderizarProductos(personajes)
    }catch{
        alert('error')
    }
}

obtenerPersonajes()
