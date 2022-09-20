//Variables
const navEmail = document.querySelector(`.navbar-email`);
const desktopMenu = document.querySelector(`.desktop-menu`);
const mobileMenu = document.querySelector(`.mobile-menu`);
const moveMobile = document.querySelector(`.menu`);
const carroCompras = document.querySelector(`.navbar-shopping-cart`);
const aside = document.querySelector(`.product-detail`);
const cardsContainer = document.querySelector(`.cards-container`);
const productDetailContainer = document.querySelector(`.product-details`);
const productDetailClose = document.querySelector(`.product-detail-close`);

//Eventos
navEmail.addEventListener(`click`, toggleDesktopMenu);
moveMobile.addEventListener(`click`, toggleMobileMenu);
carroCompras.addEventListener(`click`, toggleMenuCompras);
productDetailClose.addEventListener(`click`, closeProductDetailAside);

//Funciones
function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains(`inactive`);
    const isToggleProductDetailClosed = productDetailContainer.classList.contains(`inactive`);

    if(!isAsideClosed || !isToggleProductDetailClosed){
        aside.classList.add(`inactive`);
        productDetailContainer.classList.add(`inactive`);
    }
    desktopMenu.classList.toggle(`inactive`)
}
function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains(`inactive`);

    if(!isAsideClosed){
        aside.classList.add(`inactive`);
    }
    mobileMenu.classList.toggle(`inactive`);
}
function toggleMenuCompras(){
    const isMobileMenuClosed = mobileMenu.classList.contains(`inactive`);
    const isToggleDesktopMenuClosed = desktopMenu.classList.contains(`inactive`);
    const isToggleProductDetailClosed = productDetailContainer.classList.contains(`inactive`);
    if(!isMobileMenuClosed || !isToggleDesktopMenuClosed || !isToggleProductDetailClosed){
        mobileMenu.classList.add(`inactive`);
        desktopMenu.classList.add(`inactive`);
        productDetailContainer.classList.add(`inactive`);
    }
    aside.classList.toggle(`inactive`);
}
function openProductDetailAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains(`inactive`);
    const isToggleDesktopMenuClosed = desktopMenu.classList.contains(`inactive`);
    const isToggleMenuComprasClosed = aside.classList.contains(`inactive`);

    if(!isMobileMenuClosed || !isToggleDesktopMenuClosed || !isToggleMenuComprasClosed){
        mobileMenu.classList.add(`inactive`);
        desktopMenu.classList.add(`inactive`);
        aside.classList.add(`inactive`);
    }
    productDetailContainer.classList.remove(`inactive`);
}
function closeProductDetailAside(){
    productDetailContainer.classList.add(`inactive`);
}
//agregar elementos a la pagina web
//creamos una array donde se guardan la lista de productos
const productList = [];
//agregamos un producto a la lista
productList.push({
    name: "PC",
    price: 120,
    image: "https://th.bing.com/th/id/R.a74bbd6439a095a1428230b6a70b7c2d?rik=yy8LvE3c492RYA&pid=ImgRaw&r=0",
});
//otros productos se agregan
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "PS5",
    price: 400,
    image: "https://www.egames.news/__export/1618669304474/sites/debate/img/2021/04/17/play-station-5_x10x.jpg_242310155.jpg",
});
productList.push({
    name: "Piece of Furniture",
    price: 800,
    image: "https://sta3.muebleslluesma.com/14534-191489-thickbox_default/mueble-tv-seneca-oferta-cattelan-italia.jpg",
});
productList.push({
    name: "Bathroom Furniture",
    price: 642,
    image: "https://th.bing.com/th/id/R.d5c6679a42d1d4e1d4687dbf1036adef?rik=BYUGFQS8Uk4alQ&pid=ImgRaw&r=0",
});
productList.push({
    name: "Xbox X",
    price: 420,
    image: "https://demoncomps.co.uk/wp-content/uploads/2020/12/XboxX.png",
});
productList.push({
    name: "Nintendo Swift",
    price: 320,
    image: "https://th.bing.com/th/id/R.5f0abce7b2322583668def6512e1242c?rik=DFXmuiHlWSkFBA&pid=ImgRaw&r=0",
});
productList.push({
    name: "Harina Pan",
    price: 2,
    image: "https://venemprende.shop/wp-content/uploads/2021/05/23.png",
});
productList.push({
    name: "Mantequilla Mavesa",
    price: 5,
    image: "https://palospanasfoodmarket.com/wp-content/uploads/2020/01/mantequilla-mavesa-500g.jpg",
});
productList.push({
    name: "Iphone 14",
    price: 1125,
    image: "https://www.macnificos.com/sites/files/styles/product_page_zoom/public/images/product/iphone-14-pro-max-oro-01.jpg?itok=RNEnQxT7",
});
productList.push({
    name: "Samsung S22",
    price: 1100,
    image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_91197813/fee_786_587_png",
});
productList.push({
    name: "TV Samsung",
    price: 450,
    image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_93122117/fee_786_587_png",
});
productList.push({
    name: "Ferrari",
    price: 305000,
    image: "https://th.bing.com/th/id/OIP.VtHrBdGIV1owjBd0ZBoKOgHaE8?pid=ImgDet&rs=1",
});
productList.push({
    name: "Oso de Peluche",
    price: 25,
    image: "https://th.bing.com/th/id/R.2b093b06328934e240ff68a31eeddbfe?rik=fMdC5ifbdxFDsQ&pid=ImgRaw&r=0",
});
productList.push({
    name: "Sofa",
    price: 642,
    image: "https://th.bing.com/th/id/OIP.45QkV-Lt4IuDdflS8NngZgHaFj?pid=ImgDet&rs=1",
});
productList.push({
    name: "Puma Shoes",
    price: 540,
    image: "https://th.bing.com/th/id/R.2180038813cb83127de9047b1c5dcaf8?rik=Dmsx8GW6a%2fs1Mg&pid=ImgRaw&r=0",
});
productList.push({
    name: "Rallye Chaines silk dress",
    price: 625,
    image: "https://assets.zadig-et-voltaire.com/w/w/wwdr01164_buttercup_1.jpg?ixlib=js-3.3.0&auto=format&q=60&w=689",
});
productList.push({
    name: "Pants",
    price: 160,
    image: "https://th.bing.com/th/id/R.e0d293d54c6675391b9f5b9858d20117?rik=qPf%2f%2bbrcpzjH8g&riu=http%3a%2f%2fwww.suministrales.com%2fwp-content%2fuploads%2f2019%2f09%2fJeans-para-Hombre-y-Mujer.jpg&ehk=cqeXr9jQUkjO1glrls44vx6TcdctWV%2fx1tg%2byOIKrYo%3d&risl=&pid=ImgRaw&r=0",
});
productList.push({
    name: "Toy Cart",
    price: 53,
    image: "https://images.nexusapp.co/assets/5b/9e/31/81681357.jpg",
});
//Insertar Elementos a la pagina
//Creamos el Html
function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement(`div`);
        productCard.classList.add(`product-card`);
    
        const productImg = document.createElement(`img`);
        productImg.setAttribute(`src`, product.image);
        productImg.addEventListener(`click`, openProductDetailAside);
    
        const productInfo = document.createElement(`div`);
        productInfo.classList.add(`product-info`);
    
        const productInfoDiv = document.createElement(`div`);
    
        const productPrice = document.createElement(`p`);
        productPrice.innerText = `$` + product.price;
        const productName = document.createElement(`p`);
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
        const productInfoFigure = document.createElement(`figure`);
        const productImgCart = document.createElement(`img`);
        productImgCart.setAttribute(`src`, `./icons/bt_add_to_cart.svg`);
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    };
}
renderProducts(productList);
