function toggleCartStatus(){
    const cartWrapper = document.querySelector('.cart-wrapper')
    const blockForm = document.querySelector('#order-form')

    const cartEmptyBadge = document.querySelector('[data-cart-empty]')
    if(cartWrapper.children.length > 0){
        cartEmptyBadge.classList.add('none')
        blockForm.classList.remove('none')

    } else{
        cartEmptyBadge.classList.remove('none')
        blockForm.classList.add('none')
    }
}