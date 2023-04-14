import { shoeLister } from "../../Modules/ShoeLister/Script.js";
import { closeFilter } from "../../Modules/CloseFilter/CloseFilter.js";
import { openFilter } from "../../Modules/OpenFilter/OpenFilter.js";
import { FilterLister } from "../../Modules/FilterLister/Script.js";
import { searchBar } from "../../Modules/SearchBar/SearchBar.js";
import { closer } from "../../Modules/Closer/Closer.js";
import { searcher} from "../../Modules/Searcher/Searcher.js";
import { homeFilterLister } from "../../Modules/HomaFilterLister/HomeFilterLister.js";

shoeLister();
closeFilter();
openFilter();
FilterLister();
searchBar();
closer();
searcher();
homeFilterLister();

const cartsIcon = document.querySelector(`.cartsIcon`);
cartsIcon.addEventListener(`click`, () => {
    let carts = JSON.parse(localStorage.getItem(`Carts`))
    if ( carts != null && carts.length != 0) {
        window.open(`../CartsPage/Index.html`, `_self`);
    } else {
        document.querySelector(`.cartAlert`).style.left = "-2%"
        setTimeout(() => {
            document.querySelector(`.cartAlert`).style.left = "-100%"
        }, 2000)
    }
})