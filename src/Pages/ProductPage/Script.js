import { productPageExit } from "../../Modules/ProductPageExit/ProductPageExit.js";
import { productSwiper } from "../../Modules/productSwiper/productSwiper.js"
import { productPageInfo } from "../../Modules/ProductPageInfo/productPageInfo.js";
import { wishListAddAndRemover } from "../../Modules/wishListAdd&Remover/wishListAdd&Remover.js";
import { wishChecker } from "../../Modules/wishChecker/wishChecker.js"
import { selectedSizeChanger } from "../../Modules/SelectedSizeChanger/SelectedSizeChanger.js";
import { selectedColorChanger } from "../../Modules/SelectedColorChanger/SelectedColorChanger.js";
import { quantityCounter } from "../../Modules/QuantityCounter/QuantityCounter.js";
import { addToCart } from "../../Modules/AddToCart/AddToCart.js";

productSwiper();
productPageInfo();
wishListAddAndRemover();
wishChecker();
selectedSizeChanger();
selectedColorChanger();
quantityCounter();
addToCart();

const exitBtn = document.querySelector(`.exitBtn`);
exitBtn.addEventListener(`click`, productPageExit);



