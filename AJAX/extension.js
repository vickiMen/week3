let neruoscienceComputerBooks = []
let startingIndexes = [0,40,120]
let urls = []

startingIndexes.forEach( index => urls.push(`&maxResults=${index}`))
// console.log(urls)

urls.forEach( item => $.ajax({ 
        method: 'GET',
        url: `https://www.googleapis.com/books/v1/volumes?q=title:neuroscience&offset=200${item}`,
        success: function(data) {
            neruoscienceComputerBooks.push(data)
        }
    })
)
// $.ajax({
//     method: 'GET',
//     url: 'https://www.googleapis.com/books/v1/volumes?q=title:neuroscience&offset=200',
//     success: function(data){
//         neruoscienceComputerBooks.push(data)
//         console.log(neruoscienceComputerBooks)
//     }   
// })