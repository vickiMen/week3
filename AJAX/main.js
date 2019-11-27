
// // EX1 + EX2 + EX3

// const fetch = function (queryType, queryValue) {
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//         success: function (data) {
//             const books = data.items.forEach( item => { console.log(item.volumeInfo.title, item.volumeInfo.authors)});
//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }

// fetch("isbn", 9789814561778) //- From Third World to First: The Singapore Story
// fetch("title", "How to Win Friends and Influence People") //- book by Dale Carnegie


// EX4 + EX5

$('body').append(`<input type='text' class='gif' placeholder='type in a giphy...'></input><button class='btn'>Hit me!</button>`)

$(document).on('click', '.btn', function(){
    let gif = $('.gif').val()
    $('.gif').val('')
    beyonce(gif)
})

const beyonce = function(data){$.ajax({
    method: 'GET',
    url: `http://api.giphy.com/v1/gifs/search?q=${data}&api_key=P2yEsdFUthF1AvPg997FcWjYrihXngtR&limit=10`,
    success: function(data) {
        let gifs = []
        data.data.forEach( d => gifs.push(d.embed_url))
        gifs.splice(0,5)
        gifs.forEach( g => $('body').append(`<br><iframe src='${g}'></iframe><button class='gifBtn' class='gifBtn'>Add to Favorites</button>`))
        
        let favoriteGifs = []

        $(document).on('click', '.gifBtn', function(){
            let grabUrl = $(this).prev().attr('src')
            favoriteGifs.push(grabUrl)
            console.log(favoriteGifs)
        })
    },
    error: function(xhr,text,error) {
        console.log('oops! something went wrong.')
    }
})}

