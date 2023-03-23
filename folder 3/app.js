//event Delegation

document.querySelector('#football').addEventListener('click', function(e){
    console.log('football is clicked');

    const target = e.target;
    
    if(target.matches('li')){
        target.style.backgroundColor = 'black'
    }
})
document.querySelector('#basketball').addEventListener('click', function(e){
    console.log('basketball is clicked');

    const target = e.target;

    if(target.matches('li')){
        target.style.backgroundColor = 'black'
    }
})
document.querySelector('#boxing').addEventListener('click', function(e){
    console.log('boxing is clicked');

    const target = e.target;

    if(target.matches('li')){
        target.style.backgroundColor = 'black'
    }
})
document.querySelector('#tennis').addEventListener('click', function(e){
    console.log('tennis is clicked');

    const target = e.target;

    if(target.matches('li')){
        target.style.backgroundColor = 'black'
    }
})
document.querySelector('#golf').addEventListener('click', function(e){
    console.log('golf is clicked');

    const target = e.target;

    if(target.matches('li')){
        target.style.backgroundColor = 'black'
    }
})