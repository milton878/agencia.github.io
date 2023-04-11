//Variables

const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');


//contenedor para los resultados:
const resultado = document.querySelector('#resultado')

const max = new Date().getFullYear(); //año actual
const min = max - 10; //para que el minimo sea 10 años para atras

//Generar un Objeto con la busqueda:
const datosBusqueda ={
    img:'',
    marca:'',
    year:'',
    minimo:'',
    maximo:'',
    puertas:'',
    transmision:'',
    color:'',
}


//EVENTOS:
document.addEventListener('DOMContentLoaded',()=>{
    mostararAutos(autos); //muestra los autos al cargar

    //llena las opciones de años
    llamarSelect();
})
//event listener para los select del busqueda:
marca.addEventListener('change', e =>{
    datosBusqueda.marca = e.target.value

    filtraAuto();
});
year.addEventListener('change', e =>{
    datosBusqueda.year = parseInt(e.target.value); 

    filtraAuto();
    
});
minimo.addEventListener('change', e =>{
    datosBusqueda.minimo = e.target.value
   
    filtraAuto();
    
});

maximo.addEventListener('change', e =>{
    datosBusqueda.maximo = e.target.value

    filtraAuto();

});
puertas.addEventListener('change', e =>{
    datosBusqueda.puertas = parseInt(e.target.value)

    filtraAuto();

});
transmision.addEventListener('change', e =>{
    datosBusqueda.transmision = e.target.value

    filtraAuto();

});
color.addEventListener('change', e =>{
    datosBusqueda.color = e.target.value
    //onsole.log(datosBusqueda)

    filtraAuto();

});
//funciones:
//recorre el arreglo principal de autos
function mostararAutos(autos){
    limpiarHTML(); //elimina el html previo para q los resultados de la busqueda queden arriba
    autos.forEach(auto =>{
        //distroccion
        const{ img,  marca, modelo, year, puertas, transmision, precio, color}= auto;
        const autoHTML = document.createElement('p')
        

        autoHTML.innerHTML=`
                            <td>
                                <img src="${img}" width="80">
                            </td></br>
                            
                            ${marca}-${modelo} ${year}-Puertas: ${puertas} </br>
                            -Transmision: ${transmision}-Precio: ${precio}- </br>
                            Color: ${color}</br>
                            
                           
                            `

        //insertar en el html
        resultado.appendChild(autoHTML)
        

    })
}
//porque apendChild no borra los datos
//limpiar HTML
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

//Genera los años del select
function llamarSelect(){
    //for: del mas actual al mas antiguo
    for( let i = max; i > min; i--){
        const opcion = document.createElement('option'); //crea un select con etiqueta option
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); //agraga las opciones de años al select
    }
}
//funcion que filtra en base a la busqueda:
function filtraAuto(){
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo).
                            filter ( filtrarMaximo ).filter ( filtrarPuertas ).filter ( filtrarTransmision ).
                            filter ( filtrarColor )
    //console.log(resultado);
    //--Mensaje----//
    if(resultado.length){
        mostararAutos(resultado);
       } else {
            noResultado();
        }

}
//funcion cuando no hay resultado
function noResultado() {
    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay Resultados, intenta con otros terminos de busqueda';
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto) {
    const{marca} = datosBusqueda;
    if(marca){
        return auto.marca === marca;
    }
    return auto;
}
function filtrarYear(auto) {
    const{year} = datosBusqueda;
    if(year){
        return auto.year === year;
    }
    return auto;
}
function filtrarMinimo(auto) {
    const{minimo} = datosBusqueda;
    if (minimo) {
        return auto.precio >= minimo;
    }
    return auto;

}
function filtrarMaximo(auto) {
    const{maximo} = datosBusqueda;
    if (maximo) {
        return auto.precio <= maximo;
    }
    return auto;
}
function filtrarPuertas(auto) {
    const {puertas} = datosBusqueda;
    if(puertas){
        return auto.puertas === puertas;
    }
    return auto;
}

function filtrarTransmision(auto) {
    const {transmision} = datosBusqueda;
    if(transmision){
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto) {
    const {color} = datosBusqueda;
    if(color){
        return auto.color === color;
    }
    return auto;
}
