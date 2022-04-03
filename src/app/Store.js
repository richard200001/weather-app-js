//va a guardar durante cierto tiempo ciertos datos, es decir el localStorage
//en sí aquí vamos a almacenar el nombre de la última ciudad que buscamos para que aparezca en resultados
export class Store {
    constructor() {
      this.city;
      this.countryCode;
      this.defaultCity = 'Kiev';
      this.defaultCountry = 'ua';
    }
  
    getLocationData() {//este método es para obtener lo que se tiene almacenado en el localStorage
      if (localStorage.getItem('city') === null) {
        this.city = this.defaultCity;
      } else {
        this.city = localStorage.getItem('city');
      }
      if (localStorage.getItem('countryCode') === null) {
        this.countryCode = this.defaultCountry;
      } else {
        this.countryCode = localStorage.getItem('countryCode');
      }
      return {//se retornan city y countryCode porque son las variables que tienen los datos
        city: this.city,
        countryCode: this.countryCode
      }
    }
  
    setLocationData(city, countryCode) {//aquí almacenamos los datos dentro del localStorage
      localStorage.setItem('city', city);//aquí creo una variable en el primer parámetro y en el 
      //segundo parámetro le paso el valor de la ciudad del constructor
      localStorage.setItem('countryCode', countryCode);//aquí creo una variable en el primer parámetro y en el 
      //segundo parámetro le paso el valor del código de la ciudad del constructor
    }
  
  }