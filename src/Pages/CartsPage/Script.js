import { cartsLister } from '../../Modules/CartsLister/CartsLister.js'
import { removeCartLister } from '../../Modules/RemoveCartLister/RemoveCartLister.js';
import { removeCartOptions } from '../../Modules/RemoveCartOptions/RemoveCartOptions.js';

cartsLister();
removeCartLister();
removeCartOptions();

const ordersIcon = document.querySelector(`.ordersIcon`);
ordersIcon.addEventListener(`click`, () => {
    window.open(`../OrderPage/Index.html`, `_self`);
})