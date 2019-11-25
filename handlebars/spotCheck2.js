const animals = [
        {name: "Rabbit"},
        {name: "Giraffe"},
        {name: "Kangaroo"},
        {name: "Whale"},
        {name: "Seagull"},
        {name: "Caterpie"}
]

const languages =
        [
            {name: "French"},
            {name: "Spanish"},
            {name: "Togolese"},
            {name: "Javascript"},
            {name: "Uruk"}
]

const source1 = $('#template1').html()
const template1 = Handlebars.compile(source1)
const newHTML1 = template1({animals})
$('.container').append(newHTML1)

const source2 = $('#template2').html()
const template2 = Handlebars.compile(source2)
const newHTML2 = template2({languages})
$('.container').append(newHTML2)

