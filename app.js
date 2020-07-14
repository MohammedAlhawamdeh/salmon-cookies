'use strict'
var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm']
var finalSum = 0
var totalFinal = []
var coloumnArr = []
function Location(soldArr, minCust, maxCust, avgCookies, sum) {
    this.soldArr = []
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookies = avgCookies;
    this.sum = sum
    this.customers = 0
}
Location.prototype.calculateCustomers = function () {
    for (let i = 0; i < hours.length; i++) {
        this.customers = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust
        var result = Math.floor(this.customers * this.avgCookies)
        this.soldArr.push(result)
    }
    // console.log(seattle.soldArr)
    for (let i = 0; i < this.soldArr.length; i++) {
        this.sum = this.sum + this.soldArr[i]
    }
    totalFinal.push(this.sum)
}

function sum2() {
    for (let i = 0; i < totalFinal.length; i++) {
        finalSum = finalSum + totalFinal[i]
    }

}

function coloumnTotal() {
    for (let i = 0; i < hours.length; i++) {
        var totalcolomun = seattle.soldArr[i] + tokyo.soldArr[i] + dubai.soldArr[i] + paris.soldArr[i] + lima.soldArr[i]
        coloumnArr.push(totalcolomun)
    }
    console.log(coloumnArr)
}
Location.prototype.render = function () {
    console.log(this.soldArr)

    var div = document.getElementById('cookies')
    var tableEl = document.createElement('table')
    div.appendChild(tableEl)

    var tr1 = document.createElement('tr')
    tableEl.appendChild(tr1)

    var th = document.createElement('th')
    tr1.appendChild(th)
    th.textContent = ''
    for (let i = 0; i < hours.length; i++) {
        var th = document.createElement('th')
        tr1.appendChild(th)
        th.textContent = `${hours[i]}`
    }
    var th = document.createElement('th')
    tr1.appendChild(th)
    th.textContent = 'Daily Location Total'

    var seattleTr = document.createElement('tr')
    tableEl.appendChild(seattleTr)
    seattleTr.textContent = 'Seattle'

    for (let i = 0; i < this.soldArr.length; i++) {
        var seattleTd = document.createElement('td')
        seattleTr.appendChild(seattleTd)
        seattleTd.textContent = `${seattle.soldArr[i]}`
    }
    var seattleTd = document.createElement('td')
    seattleTr.appendChild(seattleTd)
    seattleTd.textContent = `${seattle.sum}`

    var tokyoTr = document.createElement('tr')
    tableEl.appendChild(tokyoTr)
    tokyoTr.textContent = 'Tokyo'

    for (let i = 0; i < this.soldArr.length; i++) {
        var tokyoTd = document.createElement('td')
        tokyoTr.appendChild(tokyoTd)
        tokyoTd.textContent = `${tokyo.soldArr[i]}`
    }

    var tokyoTd = document.createElement('td')
    tokyoTr.appendChild(tokyoTd)
    tokyoTd.textContent = `${tokyo.sum}`

    var dubaiTr = document.createElement('tr')
    tableEl.appendChild(dubaiTr)
    dubaiTr.textContent = 'Dubai'

    for (let i = 0; i < this.soldArr.length; i++) {
        var dubaiTd = document.createElement('td')
        dubaiTr.appendChild(dubaiTd)
        dubaiTd.textContent = `${dubai.soldArr[i]}`
    }

    var dubaiTd = document.createElement('td')
    dubaiTr.appendChild(dubaiTd)
    dubaiTd.textContent = `${dubai.sum}`


    var parisTr = document.createElement('tr')
    tableEl.appendChild(parisTr)
    parisTr.textContent = 'Paris'

    for (let i = 0; i < this.soldArr.length; i++) {
        var parisTd = document.createElement('td')
        parisTr.appendChild(parisTd)
        parisTd.textContent = `${paris.soldArr[i]}`
    }

    var parisTd = document.createElement('td')
    parisTr.appendChild(parisTd)
    parisTd.textContent = `${paris.sum}`

    var limaTr = document.createElement('tr')
    tableEl.appendChild(limaTr)
    limaTr.textContent = 'Lima'

    for (let i = 0; i < this.soldArr.length; i++) {
        var limaTd = document.createElement('td')
        limaTr.appendChild(limaTd)
        limaTd.textContent = `${lima.soldArr[i]}`
    }

    var limaTd = document.createElement('td')
    limaTr.appendChild(limaTd)
    limaTd.textContent = `${lima.sum}`

    var totalTr = document.createElement('tr')
    tableEl.appendChild(totalTr)
    totalTr.textContent = 'Total'

    for (let i = 0; i < coloumnArr.length; i++) {
        var totalTd = document.createElement('td')
        totalTr.appendChild(totalTd)
        totalTd.textContent = `${coloumnArr[i]}`
    }

    var totalTd = document.createElement('td')
    totalTr.appendChild(totalTd)
    totalTd.textContent = `${finalSum}`

}
var seattle = new Location([], 23, 65, 6.3, 0);
var tokyo = new Location([], 3, 24, 1.2, 0)
var dubai = new Location([], 11, 38, 3.7, 0)
var paris = new Location([], 20, 38, 2.3, 0)
var lima = new Location([], 2, 16, 4.6, 0)
seattle.calculateCustomers()
tokyo.calculateCustomers()
dubai.calculateCustomers()
paris.calculateCustomers()
lima.calculateCustomers()
sum2()
coloumnTotal()
seattle.render()
console.log()





