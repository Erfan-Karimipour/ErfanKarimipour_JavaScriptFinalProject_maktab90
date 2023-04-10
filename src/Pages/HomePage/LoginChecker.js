let loggedIn = localStorage.getItem(`LoggedIn`);
if (!loggedIn){
    window.open(`../OnBoardingPage/Index.html`, `_self`);
}