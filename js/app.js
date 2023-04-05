
function success(response){
    document.body.insertAdjacentHTML(`beforeend` , `<div>
    <img src="${response[`data`][`url`]}"></img>
    <p> this a picture of a random dog </p>
    </div>`)
}
function faliure(error){
document.body[`innerHTML`] = `Error occured . please refresh the page`
}
axios.request({
    url: `https://random.dog/woof.json`
}).then(success).catch(faliure);
let button = document.querySelectorAll(`.clk_but`)
for(let i = 0 ; i < button.length ; i++){
    button[i].addEventListener(`click` , success)
}