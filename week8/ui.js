import { addQuote, deleteQuote, updateQuote, getAllQuotes } from './quote.js'

// Step 1: Create an array to hold quote objects
let quotes = []

// Step 2: Select the DOM element where quotes will be rendered
const quoteList = document.getElementById("quote-list")

// Step 3: Define a function called renderQuotes()
// This function should:
// - Clear the quoteList element
// - Loop through the quotes array
// - For each quote, create a <p> element with content and author
// - Append each <p> to quoteList
function renderQuotes() {
    quoteList.innerHTML = ''
    const quotes = getAllQuotes()
    Array.from(quotes).forEach((q) => {
        const pEle = document.createElement('p')
        pEle.textContent = `${q.content} : ${q.author}`
        quoteList.appendChild(pEle)
    })
}

// Step 4: Add test quotes manually and call renderQuotes()
// Example:
addQuote('Stay hungry, stay foolish.', 'Steve Jobs')
addQuote('When I have a camera in my hand, I know no fear.', 'Alfred Eisenstaedt')
addQuote('It is not length of life, but depth of life.', 'Ralph Waldo Emerson')
addQuote('Life is not about finding yourself. Life is about creating yourself.', 'George Bernard Shaw')
deleteQuote(4)
updateQuote(1,"Stay humble.","Haaland")
renderQuotes();
