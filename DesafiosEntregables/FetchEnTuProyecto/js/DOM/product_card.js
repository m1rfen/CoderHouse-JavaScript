export default function productCard(products) {
    const d = document;

    const productCard = d.querySelector('.main')

    for (product of products) {
        const { id, title, category, type, src, price } = product

        productCard.innerHTML += `<article class="product">
                                <div class="image">
                                    <img src="${src}" alt="${title}">
                                </div>
                                <div class="description">
                                    <h3>${title}</h3>
                                    <p class="category">${category}</p>
                                    <p class="type">${type}</p>
                                    <p class="price">${price}</p>
                                    <div class="button button-${id}">Comprar</div>
                                </div>
                            </article>`

        let buttonProduct = d.querySelector(`.button-${id}`)
    }

    const buttonShowProduct = d.querySelectorAll('.button')
    const popup = d.querySelector('.popupDetalle')

    for (showProduct of buttonShowProduct) {
        showProduct.onclick = (e) => {
            popup.classList.remove('d-none')
            let id = e.target.nextElementSibling.value
            productCard(id, popup)
        }

    }
}