import { checkoutPageLister } from "../../Modules/CheckoutPageLister/CheckoutPageLister.js";
import { addNewAddress } from "../../Modules/addNewAddress/addNewAddress.js";
import { addNewAddressToDB } from "../../Modules/addNewAddressToDB/addNewAddressToDB.js";
import { addressLister } from "../../Modules/addressLister/addressLister.js";
import { addressShowAndHide } from "../../Modules/addressShowAndHide/addressShowAndHide.js";
import { shippingShowAndHide } from "../../Modules/shippingShowAndHide/shippingShowAndHide.js";

checkoutPageLister();
addNewAddress();
addNewAddressToDB();
addressLister();
addressShowAndHide();
shippingShowAndHide();