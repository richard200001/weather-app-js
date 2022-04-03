//Va a recibir los datos de la API del tiempo
export class Weather{

    
    constructor(city,countryCode){
        this.apikey='';
        this.city=city;
        this.countryCode=countryCode;
    }
    async getWeather(){
        const URI =`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`;
        //el &units=metric es para pasar la temperatura a grados centígrados
        const response = await fetch(URI);//obtengo los datos de la API
        const data = await response.json();//convierto los datos en tipo json
        return data;
    }
    
    changeLocation(city, countryCode){
        this.city=city;
        this.countryCode=countryCode;
    }
}