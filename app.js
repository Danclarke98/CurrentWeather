  window.addEventListener('load',()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description')
    let temperatureDegree = document.querySelector('.temperature-degree')
    let locationTZ = document.querySelector('.location-tz') 


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            position => {
                long = position.coords.longitude;
                lat = position.coords.latitude;

                const proxy = `https://cors-anywhere.herokuapp.com/`;                 
                const api = `${proxy}https://api.darksky.net/forecast/841c7ce9ad8fc6c0eac7b302c634d2c5/${lat},${long } `

                fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const {temperature, summary} = data.currently;
                    //Set DOM elements from API
                    temperatureDegree.textContent = temperature;
                    temperatureDescription.textContent = summary;
                    locationTZ.textContent = data.timezone;

                });  
    

            });
            

    }else{
        alert("Please enable location services");
    }

});  