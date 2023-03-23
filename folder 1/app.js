//Dom Manipulation

// Event Listerners

//elememt.addeventlistner("click", function);

// const buttonTwo = document.querySelector('.btn-2');
// function alertBtn(){
//     alert('i also love javascript')
// }

// buttonTwo.addEventListener("click", alertBtn);



// Mouseover

const newBackgroundColor = document.querySelector('.box-2');
function changeBgColor(){
    newBackgroundColor.style.backgroundColor = 'blue';
}
newBackgroundColor.addEventListener("mouseover", changeBgColor)

