//event Delegation

document.querySelector('#sports').addEventListener('click', function(e){
    console.log('football is clicked');

    const target = e.target;
    
    if(target.matches('li')){
        target.style.backgroundColor = 'black'
    }
});

const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerText = 'rugby';
newSport.setAttribute('id','rugby');

sports.appendChild(newSport)