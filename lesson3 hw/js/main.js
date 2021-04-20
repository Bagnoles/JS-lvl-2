const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductsList {
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._getProducts()
            .then(data => { 
                this.goods = [...data];
                this.render()
            });
    }
    _getProducts(){
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
    calcSum(){
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
    render(){
        const block = document.querySelector(this.container);
        for (let product of this.goods){
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
        let buyButtons = document.querySelectorAll('.buy-btn');
        buyButtons.forEach(button => {
            button.addEventListener('click', card.addToCard);
        });
    }
}

class ProductItem {
    constructor(product, img = 'https://verzenddozenwinkel.be/i/g/verzenddoos-algemeen-229x164x50-115mm-bruin-10-st.jpg'){
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render(){
        return `<div class="product-item" data-id="${this.id}">
                    <img src="${this.img}" alt="Some img">
                    <div class="desc">
                        <h3>${this.title}</h3>
                        <p>${this.price} $</p>
                        <button class="buy-btn">Купить</button>
                    </div>
                </div>`
    }
}

class Card{
    constructor(){
        this.allProducts = [];
        this.productsInCard = []; 
        this._getProductsInCard()
            .then(data => { 
                this.productsInCard = [...data.contents];
                this.renderCard();
        });
    }
    // добавить продукт в корзину
    addToCard(event){
        let productID = event.target.parentNode.parentNode.getAttribute('data-id');
        card.allProducts.forEach(product => {
            if(productID == product.id) {
                document.querySelector('.cart-wrap').insertAdjacentHTML('beforeend', product.render());
            }
        });
    }
    // удалить из корзины
    deleteFromCard(){

    }
    // посчитать общую стоимость
    countPrice(){

    }
    _getProductsInCard(){
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
    renderCard(){
        const block = document.querySelector('.cart-wrap');
        for (let product of this.productsInCard){
            const productCard = new ProductInCard(product);
            this.allProducts.push(productCard);
            block.insertAdjacentHTML('beforeend', productCard.render());
        }
    }
}

class ProductInCard{
    constructor(product){
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.quantity = product.quantity;
    }
    // увеличить количество для заказа
    increaseNumber(){

    }
    // уменьшить количество для заказа
    decreaseNumber(){

    }
    render(){
        return `<div class="product-item" data-id="${this.id}">
                    <div class="desc">
                        <h3>${this.title}</h3>
                        <p>${this.price} $</p>
                        <p>В корзине: ${this.quantity} шт.</p>
                    </div>
                </div>`
    }
}

let list = new ProductsList();
let card = new Card();

let cardBtn = document.querySelector('.btn-cart');
cardBtn.addEventListener('click', () => {
    document.querySelector('.cart-wrap').classList.toggle('hidden');
});



