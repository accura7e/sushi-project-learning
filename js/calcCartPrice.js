function calcCartPrice(){
    // const cartWrapper = document.querySelector('.cart-wrapper')
    const cartItems = document.querySelectorAll('.cart-item')
    let totalPrice = 0;
    let priceSum = document.querySelector('.total-price')
    cartItems.forEach(function (item){
        const amountEl = item.querySelector('[data-counter]')
        const priceEl = item.querySelector('.price__currency')
        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText)
        totalPrice += currentPrice
    })
    
    priceSum.innerHTML = totalPrice 



}