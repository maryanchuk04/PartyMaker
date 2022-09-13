export function isAuth(){
    if(localStorage.getItem("Token") == null) return false;
    else return true;
}