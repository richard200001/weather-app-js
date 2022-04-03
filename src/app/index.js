//Archivo principal del proyecto fetchWeather es igual a obtenerClima
require('./index.css');
const {Weather} = require('./Weather');
const {Store} = require('./Store');
const {UI} =require('./UI');
const store = new Store();
const {city, countryCode} = store.getLocationData();
const ui = new UI();
const weather =new Weather(city,countryCode);
async function fetchWeather(){
    const data = await weather.getWeather();
    console.log(data);
    ui.render(data);
}

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;//obtengo el valor que se escribió en el input de ciudad
    const countryCode =  document.getElementById('countryCode').value;//obtengo el valor que se escribió en el input de código de la ciudad
    weather.changeLocation(city,countryCode);//cambiamos los datos por defecto de la ciudad
    store.setLocationData(city,countryCode);//almaceno en el localStorage para obtener los datos de la última búsqueda
    fetchWeather();//ejecutamos la función para obtener los datos de la búsqueda
    e.preventDefault();//esta línea de código es para evitar que se refresqe el formulario
});

document.addEventListener('DOMContentLoaded', fetchWeather)//El evento DOMContentLoaded, se ejecuta cuando se ha cargado por completo el contenido del DOM, es decir
//cuando ya no hay más funciones por ejecutar en un momento, entonces se ejecuta es evento