let wisdom = []
let counter = 0

const generateId = function(){
    let idCounter
    // debugger

        // debugger
    wisdom.length == 0 ? idCounter = 0 : idCounter = (wisdom[(wisdom.length)-1]).id
    idCounter++
    return idCounter
}

const renderPage = function(){
    // debugger
    wisdom.forEach( w => $('.show').append(`<div class='wisdom' id='${w.id}'>${w.text} <button class='deleteWisdom'>X</button> </div>`))
}

const reRenderPage = function(){
    $('.show').empty()
    wisdom.forEach( w => $('.show').append(`<div class='wisdom' id='${w.id}'>${w.text} <button class='deleteWisdom'>X</button> </div>`))
}


if (localStorage.wisdom) { //after refresh
    wisdom = JSON.parse(localStorage.getItem('wisdom'))
    // renderPage()
}

const addToStorage = function(wisdom){
    localStorage.setItem('wisdom', JSON.stringify(wisdom))
}


$('.container').on('click', '.btn', function(){
    // debugger
    counter++
    const value = $('.input').val()
    let obj = {
        text: value,
        id: generateId()
    }
    wisdom.push(obj)
    $('.input').val('')
    $('.show').append(`<div class='wisdom' id='${obj.id}'>${value} <button class='deleteWisdom'>X</button> </div>`)
    
    if (counter % 2 == 0){
        addToStorage(wisdom)
    }
})

$('.container').on('click', '.removeBtn', function(){
    localStorage.clear()
    $(".show").empty()
    wisdom = []
})

$('.show').on('click', '.deleteWisdom', function(){
    // debugger
    let id = $(this).parent().attr('id')

    let removedWisdom = wisdom.find( w => w.id == id)
    let index = wisdom.indexOf(removedWisdom)
    wisdom.splice(index,1)
    localStorage.setItem('wisdom', JSON.stringify(wisdom))
    reRenderPage()
    // localStorage.wisdom.id == 
})

renderPage()




