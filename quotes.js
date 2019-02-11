axios({
    method: 'get',
    url:"https://"
})
.then((response) => $("body").append(response));
.catch((error) => console.log(error));