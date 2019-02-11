axios({
    method:'get';
    url:'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&&appid=TOKEN'
})

then((response) => {
    console.log(response);
})

.catch((error) => {
    console.log(error);
})
