export function loggedOut(){
    localStorage.setItem(`LoggedIn`, JSON.stringify(false));
}