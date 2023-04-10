import { shoeLister } from "../../Modules/ShoeLister/Script.js";
import { closeFilter } from "../../Modules/CloseFilter/CloseFilter.js";
import { openFilter } from "../../Modules/OpenFilter/OpenFilter.js";
import { FilterLister } from "../../Modules/FilterLister/Script.js";

shoeLister();
closeFilter();
openFilter();
FilterLister();

function searchBar(){
    const search = document.querySelector(`.search`);
    const searchBar = document.querySelector(`.searchBar`);
    search.addEventListener(`input`, () => {
        searchBar.innerHTML = ``;
        if(search.value.length > 1){
            axios.get(`http://localhost:3000/Shoes`,{
            }).then(res => { 
                res = res.data;
                res.forEach(element => {
                    if (element.title.includes(search.value)){
                        let p = document.createElement(`p`);
                        p.className = `border-2 pl-2 cursor-pointer hover:bg-gray-200`
                        p.innerHTML = element.title;
                        searchBar.append(p);
                    }
                });
            });

        }
    })
}
searchBar()