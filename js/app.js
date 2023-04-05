function success(response){

}
function faliure(error){
document.body.insertAdjacentHTML(`afterbegin` , `<p>Something went very wrong, please refresh</p>`) 
}
axios.request({
    url: `https://random.dog/woof.json`
}).then(success).catch(faliure);
let button = document.querySelectorAll(`.clk_but`)
for(let i = 0 ; i < button ; i++){
    button.addEventListener(`click` , success)
}