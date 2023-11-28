
let timer = window.setInterval(printQuote, 10000);
let quotes = [
  {
    quote: "All animals are equal, but some animals are more equal than others.",
    source: "Animal Farm",
    
  },
  {
    quote: "Man is the only creature that consumes without producing",
    source: "Animal Farm",
    
  },
  {
    quote: "If liberty means anything at all it means the right to tell people what they do not want to hear.",
    source: "Animal Farm",
    
  },
  {
    quote: "No one believes more firmly than Comrade Napoleon that all animals are equal. He would be only too happy to let you make your decisions for yourselves. But sometimes you might make the wrong decisions, comrades, and then where should we be?",
    source: "Animal Farm",
    
  },
  {
    quote: "This work was strictly voluntary, but any animal who absented himself from it would have his rations reduced by half.",
    source: "Animal Farm",
    
  },
  {
    quote: "I have no wish to take life, not even human life,' repeated Boxer, and his eyes were full of tears.",
    source: "Animal Farm",
    
  },
  {
    quote: "Some of the animals remembered -- or thought they remembered -- that the Sixth Commandment decreed, 'No animal shall kill any other animal.' And though no one cared to mention it in the hearing of the pigs or the dogs, it was felt that the killings which had taken place did not square with this.",
    source: "Animal Farm",
    
  },
  {
    quote: "These people don’t see that if you encourage totalitarian methods, the time may come when they will be used against you instead of for you.",
    source: "Animal Farm",
  },
  {
    quote: "The only good human being is a dead one.",
    source: "Animal Farm",
  },
  {
    quote: "Whatever goes upon two legs is an enemy. Whatever goes upon four legs, or has wings, is a friend.",
    source: "Animal Farm",
  },
  {
    quote: "I do not understand it. I would not have believed that such things could happen on our farm. It must be due to some fault in ourselves. The solution, as I see it, is to work harder. From now onwards I shall get up a full hour earlier in the mornings.",
    source: "Animal Farm",
  },
]




function getRandomQuote() {
const max = quotes.length;

let randomNumber = Math.floor(Math.random() * max - 1 + 1); 

let quote = quotes[randomNumber];
return quotes[randomNumber];
}





function printQuote() {
let randomQuote = getRandomQuote();
let quoteText = '';
let HTML = document.getElementById('quote-box');
let quote = randomQuote.quote;
let upperCase = quote.toUpperCase();

quoteText += '<p class="quote">' + upperCase + '</p>';
quoteText += '<p class="source">' + randomQuote.source;

if(randomQuote.citation) {
  quoteText += '<span class="citation">' + randomQuote.citation + '</span>';
} 
if(randomQuote.year) {
  quoteText += '<span class="year">' + randomQuote.year + '</span>';
}

quoteText += '</p>';
HTML.innerHTML = quoteText;


window.clearInterval(timer);
timer = window.setInterval(printQuote, 10000);

randomColor(255, 1);

}


function randomColor(upper, lower) {

    lower = Math.ceil(lower);
    upper = Math.floor(upper);
    let red = Math.floor(Math.random() * upper - lower + lower) + lower;
    let blue = Math.floor(Math.random() * upper - lower + lower) + lower;
    let green = Math.floor(Math.random() * upper - lower + lower) + lower;
    let bgColor = `rgb(${red},${blue},${green})`;
    let button = document.getElementById("loadQuote");
    button.style.backgroundColor = bgColor;
}


document.getElementById('loadQuote').addEventListener("click", printQuote, false);

