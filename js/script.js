const amount = document.querySelectorAll('.amount');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const addCart = document.querySelector('.addCart');
const amountCart = document.querySelector('.amount-cart');
const seeEmpty = document.querySelector('#empty');
const cardEnabled = document.querySelector('.card-able');
const resulte = document.querySelector('#resulte');
const remove = document.querySelector('#delete');
const cart = document.querySelector('.cart')
const card = document.querySelector('.card') 
var counter = 0

function cardOpen(){
    card.classList.toggle('open')
}

function calcPlus(){
    counter++
    amount[2].textContent = counter
}

function calcMinus(){
    if(counter > 0){
        counter--
        amount[2].textContent = counter
    }
}

function addCounterInAll(){
    for(let i = 0; i < amount.length; i++){
        amount[i].textContent = counter
        checkEmpyt()
    }
}

function calcPrice(){
    let price = 125.00
    let total = price * counter
    if(total > 0){
        resulte.textContent = `$${total}.00`
    } else {
        checkEmpyt()
    }
}

function checkEmpyt(){
    if(counter === 0 ){
        seeEmpty.style.display = 'block'
        cardEnabled.style.display = 'none'
        amountCart.style.display = 'none'
    }
}

function addToCart(){
    addCounterInAll()
    seeEmpty.style.display = 'none'
    cardEnabled.style.display = 'block'
    amountCart.style.display = 'block'
    calcPrice()
}

function removeCard(){
    counter = 0
    checkEmpyt()
}

cart.addEventListener('click', cardOpen)
addCart.addEventListener('click', addToCart);
plus.addEventListener('click', calcPlus)
minus.addEventListener('click', calcMinus)
remove.addEventListener('click', removeCard)