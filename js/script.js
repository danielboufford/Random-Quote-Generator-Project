// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// the array of objects

var quoteArray = [

{quote: 'In the middle of difficulty lies opportunity', source: 'Albert Einstein'},
{quote: "Until you're ready to look foolish, you'll never have the possibility of being great", source: 'Cher'},
{quote: "Whether you think you can, or think you can't, you're probably right", source: 'Henry Ford'},
{quote: "If you want to test a man's character give him power", source: 'Abraham Lincoln'},
{quote: 'Winners lose more than losers. They win and lose more than losers, because they stay in the game.', source: 'Terry Paulson'}

]

// generates random number between 0 and the array length, then returns the object that corresponds to that position in the array

function getRandomQuote() {
	var randomNumber = Math.floor(Math.random() * quoteArray.length);
	return quoteArray[randomNumber];
}

// randomquote gets the object, and then its properties are inserted into an HTML snippet and outputted on the page

function printQuote() {
	var randomQuote = getRandomQuote();
	var output = '<p class="quote">' + randomQuote.quote + '</p>' + '<p class="source">' + randomQuote.source + '</p>';
	document.getElementById('quote-box').innerHTML = output;
	
} 