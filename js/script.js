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


cart.addEventListener('click', cardOpen)
addCart.addEventListener('click', addToCart);
plus.addEventListener('click', calcPlus)
minus.addEventListener('click', calcMinus)
remove.addEventListener('click', removeCard)

function cardOpen(){
    card.classList.toggle('open')
}

function calcPlus(){
    counter++
    amount[2].textContent = counter
}

function calcMinus(){
    counter--
    if(counter >= 0){
        amount[2].textContent = counter
        checkEmpyt()
    } else{
        return
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
    resulte.textContent = `$${counter * price}.00`
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

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
  }

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;

  const slides = document.querySelectorAll(".slides");
const thumbnails = document.querySelectorAll(".thumbnail");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < thumbnails.length; i++) {
    thumbnails[i].className = thumbnails[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  thumbnails[slideIndex-1].className += " active";
}