
const progress = document.querySelector(".progressdone");
const input = document.querySelector(".input");
const maxinput = document.querySelector(".maxinput");
let finalvalue =0;
let max =0;


function changewidth(){
progress.style.width = `${(finalvalue / max) * 100}%`;
progress.innerText = `${Math.ceil((finalvalue / max) * 100)}%`;
}

input.addEventListener("keyup", function (){
finalvalue= parseInt(input.Value, 10);
changewidth();

});

maxinput.addEventListener("keyup", function (){
    max= parseInt(maxinput.Value, 10);
    changewidth();
    
});