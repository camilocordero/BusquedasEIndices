let arrayGlobal = [];
let contenedorGrafica = document.getElementById('containerIcicle')
//Primarios
const calcRegistrosPorBloque = (tamBloques, longBloques) => {
    return Math.trunc(tamBloques / longBloques); //Aproximacion entera
}

const calcNumeroDeBloques = (numRegistros, registrosPorBloque) => {
    let calculoAux = numRegistros / registrosPorBloque;

    if (Number.isInteger(calculoAux)) {
        return calculoAux //Si es entero lo devuelva igual
    } else {
        return (Math.trunc(calculoAux) + 1) //Aproximar hacia arriba
    }
}

const calcRegistrosInidcePorBloque = (tamBloques, longIndices) => {
    return Math.trunc(tamBloques / longIndices); //Aproximacion entera
}

const calcNumeroDeBloquesIndicePrimarios = (numeroDeBloques, registrosInidcePorBloque) => {
    let calculoAux = numeroDeBloques / registrosInidcePorBloque;

    if (Number.isInteger(calculoAux)) {
        return calculoAux //Si es entero lo devuelva igual
    } else {
        return (Math.trunc(calculoAux) + 1) //Aproximar hacia arriba
    }
}





//Secundarios
const calcNumeroDeBloquesIndiceSecundarios = (numRegistros, registrosInidcePorBloque) => {
    let calculoAux = numRegistros / registrosInidcePorBloque;

    if (Number.isInteger(calculoAux)) {
        return calculoAux //Si es entero lo devuelva igual
    } else {
        return (Math.trunc(calculoAux) + 1) //Aproximar hacia arriba
    }
}






//Multinivel primario
const calcNumeroDeBloquesEstructuraMultinivel = (numeroDeBloquesIndice, registrosInidcePorBloque) => {
    if (numeroDeBloquesIndice === 1) {
        return
    } else {
        let calculoAux = numeroDeBloquesIndice / registrosInidcePorBloque;

        if (Number.isInteger(calculoAux)) {
            arrayGlobal.push(calculoAux) //Si es entero lo devuelva igual
            calcNumeroDeBloquesEstructuraMultinivel(calculoAux, registrosInidcePorBloque);
        } else {
            let aproximacion = Math.trunc(calculoAux) + 1
            arrayGlobal.push(aproximacion) //Aproximar hacia arriba
            calcNumeroDeBloquesEstructuraMultinivel(aproximacion, registrosInidcePorBloque);
        }
    }
}

//Parrafos resultados
let p_registrosPorBloque = document.getElementById('p_registrosPorBloque')
let p_numeroDeBloques = document.getElementById('p_numeroDeBloques')
let p_registrosInidcePorBloque = document.getElementById('p_registrosInidcePorBloque')
let p_numeroDeBloquesIndice = document.getElementById('p_numeroDeBloquesIndice')
let p_numeroDeBloquesIndiceSecundarios = document.getElementById('p_numeroDeBloquesIndiceSecundarios')
let p_numeroDeBloquesIndicePrimario = document.getElementById('p_numeroDeBloquesIndicePrimario')
let p_numeroEstructurasMultinivelPrimario = document.getElementById('p_numeroEstructurasMultinivelPrimario')
let p_numeroDeBloquesIndiceSecundariosMultinivel = document.getElementById('p_numeroDeBloquesIndiceSecundariosMultinivel')
let p_numeroEstructurasMultinivelSecunario = document.getElementById('p_numeroEstructurasMultinivelSecunario')



//Labels resultados
let lblregistrosPorBloque = document.getElementById('registrosPorBloque');
let lblnumeroDeBloques = document.getElementById('numeroDeBloques');
let lblregistrosInidcePorBloque = document.getElementById('registrosInidcePorBloque');

let lblnumeroDeBloquesIndice = document.getElementById('numeroDeBloquesIndice');
let lblnumeroDeBloquesIndiceSecundarios = document.getElementById('numeroDeBloquesIndiceSecundarios');
let lblnumeroDeBloquesIndicePrimario = document.getElementById('numeroDeBloquesIndicePrimario');
let lblnumeroEstructurasMultinivelPrimario = document.getElementById('numeroEstructurasMultinivelPrimario');
let lblnumeroDeBloquesIndiceSecundariosMultinivel = document.getElementById('numeroDeBloquesIndiceSecundariosMultinivel');
let lblnumeroEstructurasMultinivelSecundario = document.getElementById('numeroEstructurasMultinivelSecundario');

const displayPrimarios = () => {
    p_registrosPorBloque.hidden = false;
    p_numeroDeBloques.hidden = false;
    p_registrosInidcePorBloque.hidden = false;
    p_numeroDeBloquesIndice.hidden = false;
    p_numeroDeBloquesIndiceSecundarios.hidden = true;
    p_numeroDeBloquesIndicePrimario.hidden = true;
    p_numeroEstructurasMultinivelPrimario.hidden = true;
    p_numeroDeBloquesIndiceSecundariosMultinivel.hidden = true;
    p_numeroEstructurasMultinivelSecunario.hidden = true;
}
const displaySecundario = () => {
    p_registrosPorBloque.hidden = false;
    p_numeroDeBloques.hidden = false;
    p_registrosInidcePorBloque.hidden = false;
    p_numeroDeBloquesIndice.hidden = true;
    p_numeroDeBloquesIndiceSecundarios.hidden = false;
    p_numeroDeBloquesIndicePrimario.hidden = true;
    p_numeroEstructurasMultinivelPrimario.hidden = true;
    p_numeroDeBloquesIndiceSecundariosMultinivel.hidden = true;
    p_numeroEstructurasMultinivelSecunario.hidden = true;
}
const displayMultinivelPrimario = () => {
    p_registrosPorBloque.hidden = false;
    p_numeroDeBloques.hidden = false;
    p_registrosInidcePorBloque.hidden = false;
    p_numeroDeBloquesIndice.hidden = true;
    p_numeroDeBloquesIndiceSecundarios.hidden = true;
    p_numeroDeBloquesIndicePrimario.hidden = false;
    p_numeroEstructurasMultinivelPrimario.hidden = false;
    p_numeroDeBloquesIndiceSecundariosMultinivel.hidden = true;
    p_numeroEstructurasMultinivelSecunario.hidden = true;
}
const displayMultinivelSecundario = () => {
    p_registrosPorBloque.hidden = false;
    p_numeroDeBloques.hidden = false;
    p_registrosInidcePorBloque.hidden = false;
    p_numeroDeBloquesIndice.hidden = true;
    p_numeroDeBloquesIndiceSecundarios.hidden = true;
    p_numeroDeBloquesIndicePrimario.hidden = true;
    p_numeroEstructurasMultinivelPrimario.hidden = true;
    p_numeroDeBloquesIndiceSecundariosMultinivel.hidden = false;
    p_numeroEstructurasMultinivelSecunario.hidden = false;
}


const submitInfo = () => {
    arrayGlobal = [];
    let numRegistros = parseInt(document.getElementById('numRegistros').value);
    let tamBloques = parseInt(document.getElementById('tamBloques').value);
    let longBloques = parseInt(document.getElementById('longBloques').value);
    let longIndices = parseInt(document.getElementById('longIndices').value);

    let optionList = document.getElementById('searchList').value;


    //Calculos obligatorios
    let registrosPorBloque = calcRegistrosPorBloque(tamBloques, longBloques);
    let numeroDeBloques = calcNumeroDeBloques(numRegistros, registrosPorBloque);
    let registrosInidcePorBloque = calcRegistrosInidcePorBloque(tamBloques, longIndices);

    lblregistrosPorBloque.innerHTML = registrosPorBloque;
    lblnumeroDeBloques.innerHTML = numeroDeBloques;
    lblregistrosInidcePorBloque.innerHTML = registrosInidcePorBloque;




    let numeroDeBloquesIndice = calcNumeroDeBloquesIndicePrimarios(numeroDeBloques, registrosInidcePorBloque);
    switch (optionList) {
        case 'Primario':
            //Primarios
            lblnumeroDeBloquesIndice.innerHTML = numeroDeBloquesIndice;
            displayPrimarios();
            let dataPrimario = {}
            dataPrimario = {

                name: 'Estructuras indices primarios',
                children: [

                ]


            }

            dataPrimario.children.push(
                {
                    name: `Bloque índice ${1} primario - (${registrosInidcePorBloque} registros)`,
                    value: 0.1,
                    children: []
                },
                {
                    name: `Bloque índice ${2} primario - (${registrosInidcePorBloque} registros)`,
                    value: 0.1,
                    children: []
                },
                {
                    name: `Bloque índice ${'...'} primario - (${registrosInidcePorBloque} registros)`,
                    value: 0.1,
                    children: []
                },
                {
                    name: `Bloque índice ${numeroDeBloquesIndice} primario - (${registrosInidcePorBloque} registros)`,
                    value: 0.1,
                    children: []
                }
            )

            let contadorBloquesPrimario = 0;
            for (let i = 0; i < dataPrimario.children.length; i++) {

                if (contadorBloquesPrimario == 0) {
                    dataPrimario.children[i].children.push({
                        name: 'Bloque 1',
                        children: []
                    })
                    dataPrimario.children[i].children.push({
                        name: 'Bloque 2',
                        children: []
                    })
                    dataPrimario.children[i].children.push({
                        name: 'Bloque ...',
                        children: []
                    })
                    dataPrimario.children[i].children.push({
                        name: `Bloque ${registrosInidcePorBloque}`,
                        children: []
                    })
                    contadorBloquesPrimario++;
                } else if (contadorBloquesPrimario == 3) {
                    dataPrimario.children[i].children.push({
                        name: `Bloque ${numeroDeBloques - numeroDeBloquesIndice}`,
                        children: []
                    })
                    dataPrimario.children[i].children.push({
                        name: `Bloque ${numeroDeBloques - numeroDeBloquesIndice + 1}`,
                        children: []
                    })
                    dataPrimario.children[i].children.push({
                        name: 'Bloque ...',
                        children: []
                    })
                    dataPrimario.children[i].children.push({
                        name: `Bloque ${numeroDeBloques}`,
                        children: []
                    })
                } else {
                    dataPrimario.children[i].children.push({
                        name: `Bloque ...`,
                        children: []
                    })
                    dataPrimario.children[i].children.push({
                        name: `Bloque ...`,
                        children: []
                    })
                    dataPrimario.children[i].children.push({
                        name: 'Bloque ...',
                        children: []
                    })
                    dataPrimario.children[i].children.push({
                        name: `Bloque ...`,
                        children: []
                    })
                    contadorBloquesPrimario++;
                }




                for (let j = 0; j < dataPrimario.children[i].children.length; j++) {
                    dataPrimario.children[i].children[j].children.push({
                        name: 'Registro 1',
                        value: registrosPorBloque / 5
                    })
                    dataPrimario.children[i].children[j].children.push({
                        name: 'Registro 2',
                        value: registrosPorBloque / 5
                    })
                    dataPrimario.children[i].children[j].children.push({
                        name: 'Registro ...',
                        value: registrosPorBloque / 5
                    })
                    dataPrimario.children[i].children[j].children.push({
                        name: 'Registro ...',
                        value: registrosPorBloque / 5
                    })
                    dataPrimario.children[i].children[j].children.push({
                        name: `Registro ${registrosPorBloque}`,
                        value: registrosPorBloque / 5
                    })

                }
            }
            contenedorGrafica.innerHTML = '';
            drawChart('.containerIcicle', dataPrimario)




            break;
        case 'Secundario':
            //Secundarios
            let numeroDeBloquesIndiceSecundarios = calcNumeroDeBloquesIndiceSecundarios(numRegistros, registrosInidcePorBloque);
            lblnumeroDeBloquesIndiceSecundarios.innerHTML = numeroDeBloquesIndiceSecundarios;
            displaySecundario();

            let dataSecundario = {}
            dataSecundario = {

                name: 'Estructuras índices secundarios',
                children: [

                ]


            }

            dataSecundario.children.push(
                {
                    name: `Bloque índice secundarios ${1} - (${registrosInidcePorBloque} registros)`,
                    value: 0.1,
                    children: []
                },
                {
                    name: `Bloque índice secundarios ${2} - (${registrosInidcePorBloque} registros)`,
                    value: 0.1,
                    children: []
                },
                {
                    name: `Bloque índice secundarios ${'...'} - (${registrosInidcePorBloque} registros)`,
                    value: 0.1,
                    children: []
                },
                {
                    name: `Bloque índice secundarios ${numeroDeBloquesIndiceSecundarios} - (${registrosInidcePorBloque} registros)`,
                    value: 0.1,
                    children: []
                }
            )

            let contadorBloquesSecundarios = 0;
            for (let i = 0; i < dataSecundario.children.length; i++) {

                if (contadorBloquesSecundarios == 0) {
                    dataSecundario.children[i].children.push({
                        name: 'Bloque 1',
                        children: []
                    })
                    dataSecundario.children[i].children.push({
                        name: 'Bloque 2',
                        children: []
                    })
                    dataSecundario.children[i].children.push({
                        name: 'Bloque ...',
                        children: []
                    })
                    dataSecundario.children[i].children.push({
                        name: `Bloque ${registrosInidcePorBloque}`,
                        children: []
                    })
                    contadorBloquesSecundarios++;
                } else if (contadorBloquesSecundarios == 3) {
                    dataSecundario.children[i].children.push({
                        name: `Bloque ${numeroDeBloques - numeroDeBloquesIndiceSecundarios}`,
                        children: []
                    })
                    dataSecundario.children[i].children.push({
                        name: `Bloque ${numeroDeBloques - numeroDeBloquesIndiceSecundarios + 1}`,
                        children: []
                    })
                    dataSecundario.children[i].children.push({
                        name: 'Bloque ...',
                        children: []
                    })
                    dataSecundario.children[i].children.push({
                        name: `Bloque ${numeroDeBloques}`,
                        children: []
                    })
                } else {
                    dataSecundario.children[i].children.push({
                        name: `Bloque ...`,
                        children: []
                    })
                    dataSecundario.children[i].children.push({
                        name: `Bloque ...`,
                        children: []
                    })
                    dataSecundario.children[i].children.push({
                        name: 'Bloque ...',
                        children: []
                    })
                    dataSecundario.children[i].children.push({
                        name: `Bloque ...`,
                        children: []
                    })
                    contadorBloquesSecundarios++;
                }




                for (let j = 0; j < dataSecundario.children[i].children.length; j++) {
                    dataSecundario.children[i].children[j].children.push({
                        name: 'Registro 1',
                        value: registrosPorBloque / 5
                    })
                    dataSecundario.children[i].children[j].children.push({
                        name: 'Registro 2',
                        value: registrosPorBloque / 5
                    })
                    dataSecundario.children[i].children[j].children.push({
                        name: 'Registro ...',
                        value: registrosPorBloque / 5
                    })
                    dataSecundario.children[i].children[j].children.push({
                        name: 'Registro ...',
                        value: registrosPorBloque / 5
                    })
                    dataSecundario.children[i].children[j].children.push({
                        name: `Registro ${registrosPorBloque}`,
                        value: registrosPorBloque / 5
                    })

                }
            }
            contenedorGrafica.innerHTML = '';
            drawChart('.containerIcicle', dataSecundario)


            break;
        case 'MultinivelPrimario':
            //Multinivel primario
            let numeroDeBloquesIndicePrimario = calcNumeroDeBloquesIndicePrimarios(numeroDeBloques, registrosInidcePorBloque);
            calcNumeroDeBloquesEstructuraMultinivel(numeroDeBloquesIndicePrimario, registrosInidcePorBloque);

            let numeroDeBloquesEstructuraMultinivelPrimario = arrayGlobal.length

            lblnumeroDeBloquesIndicePrimario.innerHTML = numeroDeBloquesIndicePrimario
            lblnumeroEstructurasMultinivelPrimario.innerHTML = numeroDeBloquesEstructuraMultinivelPrimario
            displayMultinivelPrimario();


            //Grafica
            let dataMultinivelPrimario = {}
            dataMultinivelPrimario = {

                name: 'Estructuras multinivel sobre índices primarios',
                children: [

                ]


            }


            //Caso 1 estructura externa
            if (arrayGlobal.length == 1) {
                dataMultinivelPrimario.children.push({
                    name: `Bloque índice ${1} externo - (${registrosInidcePorBloque} registros)`,
                    value: 0.1,
                    children: []
                })


                //Bloques
                dataMultinivelPrimario.children[0].children.push(
                    {
                        name: `Bloque índice ${1} primario - (${registrosInidcePorBloque} registros)`,
                        value: 0.1,
                        children: []
                    },
                    {
                        name: `Bloque índice ${2} primario - (${registrosInidcePorBloque} registros)`,
                        value: 0.1,
                        children: []
                    },
                    {
                        name: `Bloque índice ${'...'} primario - (${registrosInidcePorBloque} registros)`,
                        value: 0.1,
                        children: []
                    },
                    {
                        name: `Bloque índice ${registrosInidcePorBloque} primario - (${registrosInidcePorBloque} registros)`,
                        value: 0.1,
                        children: []
                    }
                )

                let contadorBloquesPrimario = 0;
                for (let i = 0; i < dataMultinivelPrimario.children[0].children.length; i++) {

                    if (contadorBloquesPrimario == 0) {
                        dataMultinivelPrimario.children[0].children[i].children.push({
                            name: 'Bloque 1',
                            children: []
                        })
                        dataMultinivelPrimario.children[0].children[i].children.push({
                            name: 'Bloque 2',
                            children: []
                        })
                        dataMultinivelPrimario.children[0].children[i].children.push({
                            name: 'Bloque ...',
                            children: []
                        })
                        dataMultinivelPrimario.children[0].children[i].children.push({
                            name: `Bloque ${registrosInidcePorBloque}`,
                            children: []
                        })
                        contadorBloquesPrimario++;
                    } else if (contadorBloquesPrimario == 3) {
                        dataMultinivelPrimario.children[0].children[i].children.push({
                            name: `Bloque ${numeroDeBloques - numeroDeBloquesIndice}`,
                            children: []
                        })
                        dataMultinivelPrimario.children[0].children[i].children.push({
                            name: `Bloque ${numeroDeBloques - numeroDeBloquesIndice + 1}`,
                            children: []
                        })
                        dataMultinivelPrimario.children[0].children[i].children.push({
                            name: 'Bloque ...',
                            children: []
                        })
                        dataMultinivelPrimario.children[0].children[i].children.push({
                            name: `Bloque ${numeroDeBloques}`,
                            children: []
                        })
                    } else {
                        dataMultinivelPrimario.children[0].children[i].children.push({
                            name: `Bloque ...`,
                            children: []
                        })
                        dataMultinivelPrimario.children[0].children[i].children.push({
                            name: `Bloque ...`,
                            children: []
                        })
                        dataMultinivelPrimario.children[0].children[i].children.push({
                            name: 'Bloque ...',
                            children: []
                        })
                        dataMultinivelPrimario.children[0].children[i].children.push({
                            name: `Bloque ...`,
                            children: []
                        })
                        contadorBloquesPrimario++;
                    }




                    for (let j = 0; j < dataMultinivelPrimario.children[0].children[i].children.length; j++) {
                        dataMultinivelPrimario.children[0].children[i].children[j].children.push({
                            name: 'Registro 1',
                            value: registrosPorBloque / 5
                        })
                        dataMultinivelPrimario.children[0].children[i].children[j].children.push({
                            name: 'Registro 2',
                            value: registrosPorBloque / 5
                        })
                        dataMultinivelPrimario.children[0].children[i].children[j].children.push({
                            name: 'Registro ...',
                            value: registrosPorBloque / 5
                        })
                        dataMultinivelPrimario.children[0].children[i].children[j].children.push({
                            name: 'Registro ...',
                            value: registrosPorBloque / 5
                        })
                        dataMultinivelPrimario.children[0].children[i].children[j].children.push({
                            name: `Registro ${registrosPorBloque}`,
                            value: registrosPorBloque / 5
                        })

                    }
                }
                contenedorGrafica.innerHTML = '';
                drawChart('.containerIcicle', dataMultinivelPrimario)
            } else { //Caso de 2 estructuras externas

                dataMultinivelPrimario.children.push({
                    name: `Bloque índice ${1} externo - (${registrosInidcePorBloque} registros)`,
                    value: 0.1,
                    children: []
                })


                //Bloques
                for (let i = 0; i < arrayGlobal[0]; i++) {
                    dataMultinivelPrimario.children[0].children.push(
                        {
                            name: `Bloque índice ${i + 1} - (${registrosInidcePorBloque} registros)`,
                            value: 0.1,
                            children: []
                        }
                    );
                }

                let contadorBloquesPrimario = 0;
                console.log(dataMultinivelPrimario.children[0].children.length);
                console.log(dataMultinivelPrimario.children[0].children.length);
                for (let j = 0; j < dataMultinivelPrimario.children[0].children.length; j++) {
                    console.log('asdasd');
                    if (contadorBloquesPrimario == 0) {
                        dataMultinivelPrimario.children[0].children[j].children.push({
                            name: 'Bloque 1',
                            children: []
                        })
                        dataMultinivelPrimario.children[0].children[j].children.push({
                            name: 'Bloque 2',
                            children: []
                        })
                        dataMultinivelPrimario.children[0].children[j].children.push({
                            name: 'Bloque ...',
                            children: []
                        })
                        dataMultinivelPrimario.children[0].children[j].children.push({
                            name: `Bloque ${registrosInidcePorBloque}`,
                            children: []
                        })
                        contadorBloquesPrimario++;
                    } else if (contadorBloquesPrimario == 3) {
                        dataMultinivelPrimario.children[0].children[j].children.push({
                            name: `Bloque ${numeroDeBloques - numeroDeBloquesIndice}`,
                            children: []
                        })
                        dataMultinivelPrimario.children[0].children[j].children.push({
                            name: `Bloque ${numeroDeBloques - numeroDeBloquesIndice + 1}`,
                            children: []
                        })
                        dataMultinivelPrimario.children[0].children[j].children.push({
                            name: 'Bloque ...',
                            children: []
                        })
                        dataMultinivelPrimario.children[0].children[j].children.push({
                            name: `Bloque ${numeroDeBloques}`,
                            children: []
                        })
                    } else {
                        dataMultinivelPrimario.children[0].children[j].children.push({
                            name: `Bloque ...`,
                            children: []
                        })
                        dataMultinivelPrimario.children[0].children[j].children.push({
                            name: `Bloque ...`,
                            children: []
                        })
                        dataMultinivelPrimario.children[0].children[j].children.push({
                            name: 'Bloque ...',
                            children: []
                        })
                        dataMultinivelPrimario.children[0].children[j].children.push({
                            name: `Bloque ...`,
                            children: []
                        })
                        contadorBloquesPrimario++;
                    }




                    for (let k = 0; k < dataMultinivelPrimario.children[0].children[j].children.length; k++) {
                        dataMultinivelPrimario.children[0].children[j].children[k].children.push({
                            name: 'Registro 1',
                            value: registrosPorBloque / 5
                        })
                        dataMultinivelPrimario.children[0].children[j].children[k].children.push({
                            name: 'Registro 2',
                            value: registrosPorBloque / 5
                        })
                        dataMultinivelPrimario.children[0].children[j].children[k].children.push({
                            name: 'Registro ...',
                            value: registrosPorBloque / 5
                        })
                        dataMultinivelPrimario.children[0].children[j].children[k].children.push({
                            name: 'Registro ...',
                            value: registrosPorBloque / 5
                        })
                        dataMultinivelPrimario.children[0].children[j].children[k].children.push({
                            name: `Registro ${registrosPorBloque}`,
                            value: registrosPorBloque / 5
                        })

                    }
                }
                contenedorGrafica.innerHTML = '';
                drawChart('.containerIcicle', dataMultinivelPrimario)

            }




            break;
        case 'MultinivelSecundario':
            //Multinivel secundario
            let numeroDeBloquesIndiceSecundariosMultinivel = calcNumeroDeBloquesIndiceSecundarios(numRegistros, registrosInidcePorBloque);
            let numeroDeBloquesEstructuraMultinivelSecundario = calcNumeroDeBloquesEstructuraMultinivel(numeroDeBloquesIndiceSecundariosMultinivel, registrosInidcePorBloque);
            let numeroEstructurasMultinivelSecundario = arrayGlobal.length;

            lblnumeroDeBloquesIndiceSecundariosMultinivel.innerHTML = numeroDeBloquesIndiceSecundariosMultinivel
            lblnumeroEstructurasMultinivelSecundario.innerHTML = numeroEstructurasMultinivelSecundario
            displayMultinivelSecundario();



            //Grafica
            let dataMultinivelSecundario = {}
            dataMultinivelSecundario = {

                name: 'Estructuras multinivel sobre índices primarios',
                children: [

                ]


            }


            //Caso 1 estructura externa
            if (arrayGlobal.length == 1) {
                dataMultinivelSecundario.children.push({
                    name: `Bloque índice ${1} externo - (${registrosInidcePorBloque} registros)`,
                    value: 0.1,
                    children: []
                })


                //Bloques
                dataMultinivelSecundario.children.push(
                    {
                        name: `Bloque índice secundarios ${1} - (${registrosInidcePorBloque} registros)`,
                        value: 0.1,
                        children: []
                    },
                    {
                        name: `Bloque índice secundarios ${2} - (${registrosInidcePorBloque} registros)`,
                        value: 0.1,
                        children: []
                    },
                    {
                        name: `Bloque índice secundarios ${'...'} - (${registrosInidcePorBloque} registros)`,
                        value: 0.1,
                        children: []
                    },
                    {
                        name: `Bloque índice secundarios ${numeroDeBloquesIndiceSecundarios} - (${registrosInidcePorBloque} registros)`,
                        value: 0.1,
                        children: []
                    }
                )
    
                let contadorBloquesSecundarios = 0;
                for (let i = 0; i < dataMultinivelSecundario.children.length; i++) {
    
                    if (contadorBloquesSecundarios == 0) {
                        dataMultinivelSecundario.children[i].children.push({
                            name: 'Bloque 1',
                            children: []
                        })
                        dataMultinivelSecundario.children[i].children.push({
                            name: 'Bloque 2',
                            children: []
                        })
                        dataMultinivelSecundario.children[i].children.push({
                            name: 'Bloque ...',
                            children: []
                        })
                        dataMultinivelSecundario.children[i].children.push({
                            name: `Bloque ${registrosInidcePorBloque}`,
                            children: []
                        })
                        contadorBloquesSecundarios++;
                    } else if (contadorBloquesSecundarios == 3) {
                        dataMultinivelSecundario.children[i].children.push({
                            name: `Bloque ${numeroDeBloques - numeroDeBloquesIndiceSecundarios}`,
                            children: []
                        })
                        dataMultinivelSecundario.children[i].children.push({
                            name: `Bloque ${numeroDeBloques - numeroDeBloquesIndiceSecundarios + 1}`,
                            children: []
                        })
                        dataMultinivelSecundario.children[i].children.push({
                            name: 'Bloque ...',
                            children: []
                        })
                        dataMultinivelSecundario.children[i].children.push({
                            name: `Bloque ${numeroDeBloques}`,
                            children: []
                        })
                    } else {
                        dataMultinivelSecundario.children[i].children.push({
                            name: `Bloque ...`,
                            children: []
                        })
                        dataMultinivelSecundario.children[i].children.push({
                            name: `Bloque ...`,
                            children: []
                        })
                        dataMultinivelSecundario.children[i].children.push({
                            name: 'Bloque ...',
                            children: []
                        })
                        dataMultinivelSecundario.children[i].children.push({
                            name: `Bloque ...`,
                            children: []
                        })
                        contadorBloquesSecundarios++;
                    }
    
    
    
    
                    for (let j = 0; j < dataMultinivelSecundario.children[i].children.length; j++) {
                        dataMultinivelSecundario.children[i].children[j].children.push({
                            name: 'Registro 1',
                            value: registrosPorBloque / 5
                        })
                        dataMultinivelSecundario.children[i].children[j].children.push({
                            name: 'Registro 2',
                            value: registrosPorBloque / 5
                        })
                        dataMultinivelSecundario.children[i].children[j].children.push({
                            name: 'Registro ...',
                            value: registrosPorBloque / 5
                        })
                        dataMultinivelSecundario.children[i].children[j].children.push({
                            name: 'Registro ...',
                            value: registrosPorBloque / 5
                        })
                        dataMultinivelSecundario.children[i].children[j].children.push({
                            name: `Registro ${registrosPorBloque}`,
                            value: registrosPorBloque / 5
                        })
    
                    }
                }
                contenedorGrafica.innerHTML = '';
                drawChart('.containerIcicle', dataMultinivelSecundario)
            } else { //Caso de 2 estructuras externas

                dataMultinivelSecundario.children.push({
                    name: `Bloque índice ${1} externo - (${registrosInidcePorBloque} registros)`,
                    value: 0.1,
                    children: []
                })


                //Bloques
                for (let i = 0; i < arrayGlobal[0]; i++) {
                    dataMultinivelSecundario.children[0].children.push(
                        {
                            name: `Bloque índice ${i + 1} - (${registrosInidcePorBloque} registros)`,
                            value: 0.1,
                            children: []
                        }
                    );
                }

                let contadorBloquesPrimario = 0;
                console.log(dataMultinivelSecundario.children[0].children.length);
                console.log(dataMultinivelSecundario.children[0].children.length);
                for (let j = 0; j < dataMultinivelSecundario.children[0].children.length; j++) {
                    console.log('asdasd');
                    if (contadorBloquesPrimario == 0) {
                        dataMultinivelSecundario.children[0].children[j].children.push({
                            name: 'Bloque 1',
                            children: []
                        })
                        dataMultinivelSecundario.children[0].children[j].children.push({
                            name: 'Bloque 2',
                            children: []
                        })
                        dataMultinivelSecundario.children[0].children[j].children.push({
                            name: 'Bloque ...',
                            children: []
                        })
                        dataMultinivelSecundario.children[0].children[j].children.push({
                            name: `Bloque ${registrosInidcePorBloque}`,
                            children: []
                        })
                        contadorBloquesPrimario++;
                    } else if (contadorBloquesPrimario == 3) {
                        dataMultinivelSecundario.children[0].children[j].children.push({
                            name: `Bloque ${numeroDeBloques - numeroDeBloquesIndice}`,
                            children: []
                        })
                        dataMultinivelSecundario.children[0].children[j].children.push({
                            name: `Bloque ${numeroDeBloques - numeroDeBloquesIndice + 1}`,
                            children: []
                        })
                        dataMultinivelSecundario.children[0].children[j].children.push({
                            name: 'Bloque ...',
                            children: []
                        })
                        dataMultinivelSecundario.children[0].children[j].children.push({
                            name: `Bloque ${numeroDeBloques}`,
                            children: []
                        })
                    } else {
                        dataMultinivelSecundario.children[0].children[j].children.push({
                            name: `Bloque ...`,
                            children: []
                        })
                        dataMultinivelSecundario.children[0].children[j].children.push({
                            name: `Bloque ...`,
                            children: []
                        })
                        dataMultinivelSecundario.children[0].children[j].children.push({
                            name: 'Bloque ...',
                            children: []
                        })
                        dataMultinivelSecundario.children[0].children[j].children.push({
                            name: `Bloque ...`,
                            children: []
                        })
                        contadorBloquesPrimario++;
                    }




                    for (let k = 0; k < dataMultinivelSecundario.children[0].children[j].children.length; k++) {
                        dataMultinivelSecundario.children[0].children[j].children[k].children.push({
                            name: 'Registro 1',
                            value: registrosPorBloque / 5
                        })
                        dataMultinivelSecundario.children[0].children[j].children[k].children.push({
                            name: 'Registro 2',
                            value: registrosPorBloque / 5
                        })
                        dataMultinivelSecundario.children[0].children[j].children[k].children.push({
                            name: 'Registro ...',
                            value: registrosPorBloque / 5
                        })
                        dataMultinivelSecundario.children[0].children[j].children[k].children.push({
                            name: 'Registro ...',
                            value: registrosPorBloque / 5
                        })
                        dataMultinivelSecundario.children[0].children[j].children[k].children.push({
                            name: `Registro ${registrosPorBloque}`,
                            value: registrosPorBloque / 5
                        })

                    }
                }
                contenedorGrafica.innerHTML = '';
                drawChart('.containerIcicle', dataMultinivelSecundario)

            }

            break;

        default:
            break;
    }
}












//                                  GRAFICA



function drawChart(container, data) {
    // Specify the chart’s dimensions.
    const width = 800;
    const height = 400;

    // Create the color scale.
    const color = d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, data.children.length + 1));

    // Compute the layout.
    const hierarchy = d3.hierarchy(data)
        .sum(d => d.value)
        .sort((a, b) => b.height - a.height || b.value - a.value);
    const root = d3.partition()
        .size([height, (hierarchy.height + 1) * width / 3])
        (hierarchy);

    // Create the SVG container.
    const svg = d3
        .select(container)
        .append('svg')
        .attr("viewBox", [0, 0, width, height])
        .attr("width", width)
        .attr("height", height)
        .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;");

    // Append cells.
    const cell = svg
        .selectAll("g")
        .data(root.descendants())
        .join("g")
        .attr("transform", d => `translate(${d.y0},${d.x0})`);

    const rect = cell.append("rect")
        .attr("width", d => d.y1 - d.y0 - 1)
        .attr("height", d => rectHeight(d))
        .attr("fill-opacity", 0.6)
        .attr("fill", d => {
            if (!d.depth) return "#ccc";
            while (d.depth > 1) d = d.parent;
            return color(d.data.name);
        })
        .style("cursor", "pointer")
        .on("click", clicked);

    const text = cell.append("text")
        .style("user-select", "none")
        .attr("pointer-events", "none")
        .attr("x", 4)
        .attr("y", 13)
        .attr("fill-opacity", d => +labelVisible(d));

    text.append("tspan")
        .text(d => d.data.name);

    const format = d3.format(",d");
    const tspan = text.append("tspan")
        .attr("fill-opacity", d => labelVisible(d) * 0.7)
        .text(d => ` ${format(d.value)}`);

    cell.append("title")
        .text(d => `${d.ancestors().map(d => d.data.name).reverse().join("/")}\n${format(d.value)}`);

    // On click, change the focus and transitions it into view.
    let focus = root;
    function clicked(event, p) {
        focus = focus === p ? p = p.parent : p;

        root.each(d => d.target = {
            x0: (d.x0 - p.x0) / (p.x1 - p.x0) * height,
            x1: (d.x1 - p.x0) / (p.x1 - p.x0) * height,
            y0: d.y0 - p.y0,
            y1: d.y1 - p.y0
        });

        const t = cell.transition().duration(750)
            .attr("transform", d => `translate(${d.target.y0},${d.target.x0})`);

        rect.transition(t).attr("height", d => rectHeight(d.target));
        text.transition(t).attr("fill-opacity", d => +labelVisible(d.target));
        tspan.transition(t).attr("fill-opacity", d => labelVisible(d.target) * 0.7);
    }

    function rectHeight(d) {
        return d.x1 - d.x0 - Math.min(1, (d.x1 - d.x0) / 2);
    }

    function labelVisible(d) {
        return d.y1 <= width && d.y0 >= 0 && d.x1 - d.x0 > 16;
    }

}





// drawChart('.containerIcicle', dataPrimario)