var sum = 0
var cookiesSold = []
var seattle = {
    customers: 0,
    minCust: 23,
    maxCust: 65,
    avgCookies: 6.3,
    hours: ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'],
    getRandomNumber: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    },
    custPerHour: function () {
        this.customers = seattle.getRandomNumber(this.minCust, this.maxCust)
    },
    cookiesPerHour: function () {
        for (let i = 0; i < this.hours.length; i++) {
            var result1 = seattle.getRandomNumber(this.minCust, this.maxCust)
            var result2 = result1 * this.avgCookies
            cookiesSold.push(Math.floor(result2))
        }
    },
    total: function () {
        for (let i = 0; i < cookiesSold.length; i++) {
            sum = sum + cookiesSold[i]
        }
    },
    render: function () {
        var container = document.getElementById('cookies')
        var articleEl = document.createElement('article')
        container.appendChild(articleEl)

        var h3El = document.createElement('h3')
        articleEl.appendChild(h3El)
        h3El.textContent = 'Seattle'

        var ulEl = document.createElement('ul')
        articleEl.appendChild(ulEl)

        for (let i = 0; i < seattle.hours.length; i++) {
            var liEl = document.createElement('li')
            ulEl.appendChild(liEl)
            liEl.textContent = `${seattle.hours[i]} : ${cookiesSold[i]} cookies`
        }

        var liEl = document.createElement('li')
        ulEl.appendChild(liEl)
        liEl.textContent = `Total : ${sum} cookies`

    }

}
seattle.custPerHour()
seattle.cookiesPerHour()
seattle.total()
seattle.render()
seattle.getRandomNumber()



/****************Tokyo*******************/

var sum2 = 0
var cookiesSold2 = []
var tokyo = {
    customers: 0,
    minCust: 3,
    maxCust: 24,
    avgCookies: 1.2,
    hours: ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'],
    getRandomNumber: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    },
    custPerHour: function () {
        this.customers = tokyo.getRandomNumber(this.minCust, this.maxCust)
    },
    cookiesPerHour: function () {
        for (let i = 0; i < this.hours.length; i++) {
            var result1 = tokyo.getRandomNumber(this.minCust, this.maxCust)
            var result2 = result1 * this.avgCookies
            cookiesSold2.push(Math.floor(result2))
        }
    },
    total: function () {
        for (let i = 0; i < cookiesSold2.length; i++) {
            sum2 = sum2 + cookiesSold2[i]
            console.log(sum2)
        }
    },
    render: function () {
        var container = document.getElementById('cookies')
        var articleEl = document.createElement('article')
        container.appendChild(articleEl)

        var h3El = document.createElement('h3')
        articleEl.appendChild(h3El)
        h3El.textContent = 'Tokyo'

        var ulEl = document.createElement('ul')
        articleEl.appendChild(ulEl)

        for (let i = 0; i < tokyo.hours.length; i++) {
            var liEl = document.createElement('li')
            ulEl.appendChild(liEl)
            liEl.textContent = `${tokyo.hours[i]} : ${cookiesSold2[i]} cookies`
        }

        var liEl = document.createElement('li')
        ulEl.appendChild(liEl)
        liEl.textContent = `Total : ${sum2} cookies`

    }

}
tokyo.custPerHour()
tokyo.cookiesPerHour()
tokyo.getRandomNumber()
tokyo.total()
tokyo.render()





