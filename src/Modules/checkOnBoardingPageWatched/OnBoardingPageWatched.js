export function checkOnBoardingPageWatched() {
    console.log(`yes`);
    if(JSON.parse(localStorage.getItem(`OnBoardingPageWatched`))){
        window.open(`../RegisterPage/Index.html`, `_self`);
    }
}