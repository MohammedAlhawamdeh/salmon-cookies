'use strict'
var div = document.getElementById('cookies')
var tableEl = document.createElement('table')
div.appendChild(tableEl)
var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm']
var cities = []
function Location(name, min, max, avg) {
    var newArr = []
    this.newArr = newArr
    this.name = name
    this.min = min
    this.max = max
    this.avg = avg
}
Location.prototype.randomNumber = function () {
    var sum = 0
    for (let i = 0; i < hours.length + 1; i++) {
        if (i === 14) {
            this.newArr.push(sum)
        } else {
            var multiply = Math.floor((Math.floor(Math.random() * (this.max - this.min + 1)) + this.min) * this.avg)
            this.newArr.push(multiply)
            sum = sum + this.newArr[i]
        }
    }
}
function header() {
    var tableRow = document.createElement('tr')
    tableEl.appendChild(tableRow)

    var tableHeader = document.createElement('th')
    tableRow.appendChild(tableHeader)
    tableHeader.textContent = ''
    for (let i = 0; i < hours.length; i++) {
        var tableHeader = document.createElement('th')
        tableRow.appendChild(tableHeader)
        tableHeader.textContent = `${hours[i]}`
    }
    var tableHeader = document.createElement('th')
    tableRow.appendChild(tableHeader)
    tableHeader.textContent = 'Daily Location Total'
}
Location.prototype.render = function () {
    var locationTr = document.createElement('tr')
    tableEl.appendChild(locationTr)
    locationTr.textContent = this.name
    for (let i = 0; i < this.newArr.length; i++) {
        var locationTd = document.createElement('td')
        locationTr.appendChild(locationTd)
        locationTd.textContent = `${this.newArr[i]}`
    }
}
var form = document.getElementById('store')
form.addEventListener("submit", function handleSubmit(event) {
    event.preventDefault()
    var name = event.target.name.value
    var min = parseInt(event.target.minimum.value)
    var max = parseInt(event.target.maximum.value)
    var avg = Number(event.target.avgcookies.value)
    var store = new Location(name, min, max, avg)
    tableEl.deleteRow(tableEl.rows.length - 1)
    console.log(tableEl.rows.length)
    cities.push(store)
    store.randomNumber()
    store.render()
    footer()
})
function footer() {
    var results = []
    console.log(results)
    for (var i = 0; i < hours.length + 1; i++) {
        var total = 0
        for (var j = 0; j < cities.length; j++) {
            total = total + (cities[j].newArr[i])
        }
        results.push(total)
    }
    var totalFooter = document.createElement('tr')
    tableEl.appendChild(totalFooter)
    var totalTd = document.createElement('td')
    totalFooter.appendChild(totalTd)
    totalTd.textContent = 'Total'
    for (let i = 0; i < hours.length + 1; i++) {
        var totalTd = document.createElement('td')
        totalFooter.appendChild(totalTd)
        totalTd.textContent = `${results[i]}`
    }
}
header()
var seattle = new Location('Seattle', 23, 65, 6.3)
cities.push(seattle)
seattle.randomNumber()
seattle.render()
var tokyo = new Location('Tokyo', 3, 24, 1.2)
cities.push(tokyo)
tokyo.randomNumber()
tokyo.render()
var dubai = new Location('Dubai', 11, 38, 3.7)
cities.push(dubai)
dubai.randomNumber()
dubai.render()
var paris = new Location('Paris', 20, 38, 2.3)
cities.push(paris)
paris.randomNumber()
paris.render()
var lima = new Location('Lima', 2, 16, 4.6)
cities.push(lima)
lima.randomNumber()
lima.render()
footer()