class ProductsList{
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();
    } 
    
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend',productObj.render())
//            block.innerHTML += productObj.render();
        }
    }
    sumPrice() {
        let sum = 0;
        this.goods.forEach(product => {
            sum += product.price;
        });
        console.log(`Сумма всех товаров: ${sum}`);
    }
    
}


class ProductItem{
	constructor(product, img = 'https://verzenddozenwinkel.be/i/g/verzenddoos-algemeen-229x164x50-115mm-bruin-10-st.jpg'){
		this.title = product.title;
		this.price = product.price;
		this.id = product.id;
		this.img = img;
		
	}
	
	render(){
		 return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
	}
}

let list = new ProductsList();
list.render();
list.sumPrice();

class Card{
    constructor(){
        this.productsInCard = []; // массив продуктов в корзине
    }
    // добавить продукт в корзину
    addToCard(){

    }
    // удалить из корзины
    deleteFromCard(){

    }
    // посчитать общую стоимость
    countPrice(){

    }
    // сделать скидку
    makeDiscount(){

    }
}

class ProductInCard{
    constructor(title, price){
        this.title = title;
        this.price = price;
        numberToBuy = 1; //количество для заказа
    }
    // увеличить количество для заказа
    increaseNumber(){

    }
    // уменьшить количество для заказа
    decreaseNumber(){

    }
    // проверить можно ли заказать данный товар (есть ли в наличии)
    checkOrder(){
        
    }
}





    



