alert("Bienvenido/a a el simulador de una tienda de ropa.");

do {
    const opciones = ["talle", "categoria", "nombre", "precio"];
    let filtro = prompt(`Qué desea comprar? Puede filtrar por:\n- ${opciones.join("\n- ")}`).toLowerCase();

    while (!opciones.includes(filtro)) {
        filtro = prompt(`Filtro inválido, por favor ingrese uno correcto:\n- ${opciones.join("\n- ")}`).toLowerCase();
    }

    let prendasFiltradas = [];
    let valorSeleccionado = "";
    switch (filtro) {

        case "categoria":
            let categorias = [];

            productos.forEach((prenda) => {
                if (!categorias.includes(prenda.categoria)) {
                    categorias.push(prenda.categoria)
                }
            });

            let categoriaSeleccionada = prompt(`Ingrese la categoría que desea buscar, las opciones son:\n- ${categorias.join("\n- ")}`).toLowerCase();
            while (!categorias.includes(categoriaSeleccionada)) {
                categoriaSeleccionada = prompt(`La ${filtro} ingresada no es válida. Por favor ingrese una valida\n- ${categorias.join("\n- ")}`).toLowerCase();
            }

            valorSeleccionado = categoriaSeleccionada;

            prendasFiltradas = productos.filter((prenda) => prenda.categoria === categoriaSeleccionada)

            break;


        case "nombre":
            let nombres = [];

            productos.forEach((prenda) => {
                if (!nombres.includes(prenda.nombre)) {
                    nombres.push(prenda.nombre);
                }
            });

            const nombresOrdenados = ["remera", "remera sin mangas", "remera mangas largas", "buzo", "top", "pantalon", "short", "short bermuda"];
            nombres.sort((a, b) => {
                return nombresOrdenados.indexOf(a) - nombresOrdenados.indexOf(b);
            });

            let nombreSeleccionado = prompt(`Ingrese el nombre que desea buscar, las opciones son:\n- ${nombres.join("\n- ")}`).toLowerCase();
            while (!nombres.includes(nombreSeleccionado)) {
                nombreSeleccionado = prompt(`El ${filtro} ingresado no es válido. Por favor ingrese uno válido\n- ${nombres.join("\n- ")}`).toLowerCase();
            }

            valorSeleccionado = nombreSeleccionado;

            prendasFiltradas = productos.filter(prenda => prenda.nombre.includes(nombreSeleccionado));

            break;

        case "talle":
            let talles = [];

            productos.forEach((prenda) => {
                if (!talles.includes(prenda.talle)) {
                    talles.push(prenda.talle);
                }
            });

            const tallesOrdenados = ["XS", "S", "M", "L", "XL"];
            talles.sort((a, b) => {
                return tallesOrdenados.indexOf(a) - tallesOrdenados.indexOf(b);
            });

            let talleSeleccionado = prompt(`Ingrese el talle que desea buscar, las opciones son:\n- ${talles.join("\n- ")}`).toUpperCase();
            while (!talles.includes(talleSeleccionado)) {
                talleSeleccionado = prompt(`El ${filtro} ingresado no es válido.Por favor ingrese uno valido\n- ${talles.join("\n- ")}`).toUpperCase();
            }

            valorSeleccionado = talleSeleccionado;

            prendasFiltradas = productos.filter((prenda) => prenda.talle === talleSeleccionado)

            break;

        case "precio":
            let precios = [];

            productos.forEach((prenda) => {
                if (!precios.includes(prenda.precio)) {
                    precios.push(prenda.precio);
                }
            });

            precios.sort((a, b) => {
                return a - b;
            });

            let precioSeleccionado = (Number(prompt(`Ingrese el precio que desea buscar, las opciones son:\n- $ ${precios.join("\n- $ ")}`)));
            while (!precios.includes(Number(precioSeleccionado))) {
                precioSeleccionado = (Number(prompt(`El ${filtro} ingresado no es válido.Por favor ingrese uno valido\n- $ ${precios.join("\n- $ ")}`)));
            }

            valorSeleccionado = precioSeleccionado;

            prendasFiltradas = productos.filter((prenda) => prenda.precio === Number(precioSeleccionado));


            break;

        default:
    }

    if (prendasFiltradas.length > 0) {
        let opcionesPrendas = prendasFiltradas.map((prenda) => prenda.nombre);

        let seleccion = prompt(`¿Qué prenda con ${filtro} ${valorSeleccionado} desea comprar? Las opciones son:\n- ${opcionesPrendas.join("\n- ")}`).toLowerCase();
        while (!opcionesPrendas.includes(seleccion)) {
            seleccion = prompt(`Opción inválida, por favor ingrese una opción válida:\n- ${opcionesPrendas.join("\n- ")} `).toLowerCase();
        }
        
        let prendaSeleccionada = prendasFiltradas.find((prenda) => prenda.nombre === seleccion);
        
        let decision = prompt(`Usted a seleccionado: \n -Nombre: ${prendaSeleccionada.nombre} \n -Categoria: ${prendaSeleccionada.categoria} \n -Talle: ${prendaSeleccionada.talle} \n -Precio: $${prendaSeleccionada.precio} \n ¿Desea agregar este producto al carrito? Si / No`).toLowerCase();
        if (decision === "si") {
            carrito.push(prendaSeleccionada);
        }
    }
    decision = prompt(`${mostrarCarrito()} \n "Desea agregar mas prendas al carrito? Si / No`).toLowerCase();

} while (decision === "si")

alert((`Su carrito de compras finalizo asi \n ${mostrarCarrito()} \n`))