// Write your solution in this file!

var customerName = 'bob'
const leastFavoriteCustomer = 'some initial value'

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase()
}
console.log(customerName)

function setBestCustomer() {
  bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'billy'
}