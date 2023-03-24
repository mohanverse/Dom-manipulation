// variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote:`"The sun shone brightly overhead, casting a warm and inviting glow over the world below. Birds sang sweetly in the trees."`,
    person: `Mohanverse`
},
{
    quote:`" and a gentle breeze carried the scent of blooming flowers through the air, creating a serene and peaceful atmosphere."`,
    person: `Subhamverse`
},{
    quote:`"The city streets were bustling with activity, as people rushed to and fro."`,
    person: `subhashverse`
},
{
    quote:`"The sun shone brightly overhead, casting a warm and inviting glow over the world below. Birds sang sweetly in the trees."`,
    person: `gamlverse`
},
{
    quote:`"each with their own destination in mind. The honking of car horns and chatter of pedestrians filled the air."`,
    person: `subhamverse`
},{
    quote:`"The sun shone brightly overhead, casting a warm and inviting glow over the world below. Birds sang sweetly in the trees."`,
    person: `Mohanverse`
},];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})

