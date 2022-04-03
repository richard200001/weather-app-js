//se va a encargar del DOM
export class UI{
    constructor(){
        this.location = document.getElementById('weather-location');
        this.description = document.getElementById('weather-description');
        this.string = document.getElementById('weather-string');
        this.humidity = document.getElementById('weather-humidity');
        this.wind = document.getElementById('weather-wind');
    }

    render(weather){//textContent es para cambiar el contenido
        //este método renderiza/escribe por la interfaz los resultados obtenidos
        //weather.name + '/' + weather.sys.country de esta forma accedo a los datos de la API que está en json
        this.location.textContent = weather.name + '/' + weather.sys.country;
        this.description.textContent = weather.weather[0].description;//acá también estoy accediendo al json
        this.string.textContent = weather.main.temp + ' °C';
        this.humidity.textContent = 'Humidity: '+ weather.main.humidity + ' %';
        this.wind.textContent = 'Wind: ' + weather.wind.speed + ' m/s';
    }

}