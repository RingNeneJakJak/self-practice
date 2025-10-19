const quotes = [
    { id: 1, content: "Stay hungry, stay foolish.", author: "Jobs" },
    { id: 2, content: "Simplicity is the soul of efficiency.", author: "Da Vinci" },
    { id: 3, content: "Code is like humor.", author: "Fowler" },
]
/*
  1. Function: addQuote
  - Accepts a quote object with id, content, and author
  - Adds it to the quotes array
*/
function addQuote(quote){
    return quotes.push(quote)
}
// addQuote({id:126,content:["CSS","html"],author:"Who"})
// console.log(quotes)

/*
  2. Function: deleteQuote
  - Accepts an id
  - Removes the quote with that id from the array
*/
function deleteQuote(id){
    const index  = quotes.findIndex(q => q.id === id)
    if(index !== -1){
        return quotes.splice(index,1)
    }
    
}
// deleteQuote(1)
// console.log(quotes)

/*
  3. Function: updateQuote
  - Accepts an id and an object with new content and/or author
  - Updates the quote with the given id
*/
function updateQuote(id,update){
    const index = quotes.findIndex(q => q.id === id)
    if(index !== -1){
        quotes[index] = {...quotes[index],...update}
        return quotes[index]
    }
}
// updateQuote(1,{id:1112,content:"Pizza",author:"Burgerking"})
// console.log(quotes)

/*
  4. Function: getAllAuthors
    - Returns an array of all unique authors from the quotes array 
*/
function getAllAuthors(id){
    const quote = quotes.find(q => q.id === id)
    if(quote){
        return quote.author;
    } else {
        return undefined;
    }
}
// console.log(getAllAuthors(126))

/*
  5. Function: countContentByAuthor
    - Accepts an author name
    - Returns the number of content written by that author
*/
function countContentByAuthor(name){
    const written = quotes.filter(q => q.author === name).map(q => `${q.content} : ${q.content.length}`)
    return written
}
// console.log(countContentByAuthor('Fowler'))

/* 6. function upsertQuote
โจทย์: เขียน upsertQuote(list, quote) ถ้า id มีอยู่แล้วให้อัปเดตทั้งก้อน (แทนที่) ถ้าไม่มีให้เพิ่มใหม่
*/
function upsertQuote(list,quote){
    const idx = list.findIndex(q => q.id === quote.id)
    if(idx === -1){
        list.push({...quote})
    } else {
        list[idx] = {...quote}
    }
    return list
}
// upsertQuote(quotes, { id: 4, content: "Test", author: "Me" });
// upsertQuote(quotes, { id: 3, content: "Practice", author: "You" });
// console.table(quotes)