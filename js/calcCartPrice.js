function calcCartPriceAndDelivery(){
    // const cartWrapper = document.querySelector('.cart-wrapper')
    const cartItems = document.querySelectorAll('.cart-item')
    let totalPrice = 0;
    let priceSum = document.querySelector('.total-price')
    const deliveryCost = document.querySelector('.delivery-cost')
    const delivery = document.querySelector('[data-cart-delivery]')
    cartItems.forEach(function (item){
        const amountEl = item.querySelector('[data-counter]')
        const priceEl = item.querySelector('.price__currency')
        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText)
        totalPrice += currentPrice
    })
    
    priceSum.innerHTML = totalPrice 

    if (totalPrice > 0){
        delivery.classList.remove('none')
    } else {
        delivery.classList.add('none')
    }
    if (totalPrice >= 600){
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно'
    } else{
        deliveryCost.classList.remove('free')
        deliveryCost.innerText = '250р'
    }
}