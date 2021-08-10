var customerName = "bob";
const leastFavoriteCustomer = "Willis";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
leastFavoriteCustomer = "Jackle";
}
console.log(changeLeastFavoriteCustomer());