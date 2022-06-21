var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;

function increment(){
   currentNumber = currentNumber + 1 ;
   currentNumberWrapper.innerHTML = currentNumber;
   if (currentNumberWrapper.innerHTML < 10){
    currentNumberWrapper.style.color = "rgb(214, 211, 205)";
    }
   if (currentNumberWrapper.innerHTML >= 10){
    currentNumberWrapper.style.color = 'green'
   }
}

function decrement(){
    currentNumber = currentNumber - 1 ;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumberWrapper.innerHTML < 10){
        currentNumberWrapper.style.color = "rgb(214, 211, 205)";
        }
    if (currentNumberWrapper.innerHTML <= -1){
        currentNumberWrapper.style.color = 'red'
       }
}
function zerar(){
    currentNumber = 0;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumberWrapper.innerHTML == 0){
        currentNumberWrapper.style.color = "rgb(214, 211, 205)";
       }
}