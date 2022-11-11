

// let numbers = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let btnForward = document.querySelector(".forward");
// let btnBackward = document.querySelector(".backward");
// let z = 0;

// btnForward.addEventListener("click", function () {
//   let numbersPara = document.getElementById("numbersPara");
//   z++;
//   if (z >= numbers.length) z = 0;
//   numbersPara.innerText = numbers[z];
// });

// // #### Button backwardwork correctly only partially  ######
// btnBackward.addEventListener("click", function () {
//   let numbersPara = document.getElementById("numbersPara");
//   z--;
//   if (z < 0) z = 10;
//   numbersPara.innerText = numbers[z];
// });


function countTo() {
let from = 10;
let to = 0;
let step = to > from ? 1 : -1;
let interval = 400;

if(from == to){
    document.querySelector("#output").
    textContent = from;
    return;
}

let counter = setInterval (function(){
    from += step;
    document.querySelector("#output").
    textContent = from;

    if(from == to) {
        clearInterval(counter);
    }
}, interval);
}

countTo();

function countdownTo() {
    let from = 0;
    let to = 10;
    let step = to > from ? 1 : -1;
    let interval = 400;
    
    if(from == to){
        document.querySelector("#output").
        textContent = from;
        return;
    }
    
    let counter = setInterval (function(){
        from += step;
        document.querySelector("#output").
        textContent = from;
    
        if(from == to) {
            clearInterval(counter);
        }
    }, interval);
    }
    
    countdownTo();