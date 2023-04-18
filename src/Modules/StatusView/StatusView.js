export function statusView(){
    const statusBtns = document.querySelector(`.status`);
statusBtns.addEventListener(`click`, (event) => {
    document.querySelector(`.selectedStatus`).className = `py-2 text-gray-400 border-b-2 border-gray-300`;
    event.target.className = `py-2 text-black border-b-4 border-black selectedStatus`;
    if (event.target.getAttribute(`name`) == `Active`){
        document.querySelector(`.activeNav`).classList.remove(`hidden`);
        document.querySelector(`.completedNav`).classList.add(`hidden`);
    } else {
        document.querySelector(`.activeNav`).classList.add(`hidden`);
        document.querySelector(`.completedNav`).classList.remove(`hidden`);
        if (document.querySelector(`.completedNav`).children.length == 0){
            document.querySelector(`.absoluteCenter`).classList.remove(`.hidden`);
        }
    }
});
}