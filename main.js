// eslint-disable-next-line no-unused-vars
function imageSuccess(response) {
  console.log(response);
}
function imageFail(error) {
  console.log(error);
}
// eslint-disable-next-line no-undef
axios({
  method: 'get',
  url: 'https://api.unsplash.com/random',
})
  // eslint-disable-next-line no-undef
  .then(response => $('body').css('background-image', `url(${response.data.urls.raw})`))
  .catch(imageFail);
