import { shoeLister } from "../../Modules/ShoeLister/Script.js";
import { closeFilter } from "../../Modules/CloseFilter/CloseFilter.js";
import { openFilter } from "../../Modules/OpenFilter/OpenFilter.js";
import { FilterLister } from "../../Modules/FilterLister/Script.js";
import { searchBar } from "../../Modules/SearchBar/SearchBar.js";
import { closer } from "../../Modules/Closer/Closer.js";
import { searcher} from "../../Modules/Searcher/Searcher.js";
import { homeFilterLister } from "../../Modules/HomaFilterLister/HomeFilterLister.js";
import { cartsChecker } from "../../Modules/CartsChecker/CartsChecker.js";

shoeLister();
closeFilter();
openFilter();
FilterLister();
searchBar();
closer();
searcher();
homeFilterLister();
cartsChecker();


const ordersIcon = document.querySelector(`.ordersIcon`);
ordersIcon.addEventListener(`click`, () => {
    window.open(`../OrderPage/Index.html`, `_self`);
})