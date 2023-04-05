//i first start by setting up the success and failure functions to do their respective tasks
function success(response){
    document.body.insertAdjacentHTML(`beforeend` , `<div>
    <img src="${response[`data`][`url`]}"></img>
    <p> this a picture of a random dog </p>
    </div>`)
}
function faliure(error){
document.body[`innerHTML`] = `Error occured . please refresh the page`
}
//i set up the axios.request to grab the url 
axios.request({
    url: `https://random.dog/woof.json`
}).then(success).catch(faliure);
//i made a button function to check for clicks and i made it so it funs the function
let button = document.querySelectorAll(`.clk_but`)
for(let i = 0 ; i < button.length ; i++){
    button[i].addEventListener(`click` , faliure)
}