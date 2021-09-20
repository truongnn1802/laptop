
var menu = document.querySelector(".menu");
var sticky = menu.offsetTop;
console.log(sticky);


let inputQty = document.querySelectorAll('.input-qty');
let btnPlus = document.querySelectorAll('.plus');
let btnMinus = document.querySelectorAll('.minus');
let total = document.querySelectorAll('.total');
let price = document.querySelectorAll('.price');


for (let i = 0; i < btnPlus.length; i++){
    let value = inputQty[i].value;
    price[i].textContent
    btnPlus[i].onclick = function (e) {
        value++;
        inputQty[i].value = value;
        total[i].innerHTML = `Tong ${Number(price[i].ariaValueText) * value}d`
    }
    btnMinus[i].onclick = function (e) {
        if (value > 1) {
            value--;
            inputQty[i].value = value;
            total[i].innerHTML = `Tong ${Number(price[i].ariaValueText) * value}d`

        }
            
    }

}

window.onscroll = function() {myFunction()};


function myFunction() {
    if (window.pageYOffset > sticky) {
      console.log(window.pageYOffset);
    menu.classList.add("sticky");
  } else {
    menu.classList.remove("sticky");
  }
}