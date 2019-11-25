var classData = {
    classmates: [
        {name: "That on gal", description: "Always has the ansswer", socialNetwork: true},
        {name: "The weird dude", description: "Quick with a smile", socialNetwork: true},
        {name: "Taylor", description: "Just Taylor", socialNetwork: false}
    ]
}

const source = $('#class-template').html()
const template = Handlebars.compile(source)
const newHTML = template(classData)

$('.class').append(newHTML)