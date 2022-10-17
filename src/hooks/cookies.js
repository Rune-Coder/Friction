import Cookies from 'js-cookie'

function SetCookie(key, val){
    Cookies.set(key, val, { path: '/' });
}

function GetCookie(key){
    return Cookies.get(key);
}

function RemoveCookie(key){
    Cookies.remove(key, { path: '' });
}


export {SetCookie, GetCookie, RemoveCookie};