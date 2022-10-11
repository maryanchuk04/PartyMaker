import axios from "axios"
const GEOCODE_URL = "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&langCode=EN&location=";

export function isAuth(){
    return localStorage.getItem("authState")!==null;
}

export async function reverseGeocode(location){
    const data = await ( await fetch(GEOCODE_URL+`${location.lng},${location.lat}`)).json();
    return data;
}

export function generateItemShortInfo(data){
    return  `${data.service}, Date : ${new Date(data?.date).toLocaleString()}, Qty : ${data.qty}, Price for 1 : ${data.price}$`;
}

export function convertDate(date){
    const convertedDate = new Date(date);
    return convertedDate.toLocaleString();
}

export function uploadImage(img) {
    let body = new FormData()
    body.set('key','4b76823349508cfe6987b62ea7b72eb8')
    body.append('image', img)

    return axios({
      method: 'post',
      url: 'https://api.imgbb.com/1/upload',
      data: body
    }).then((result) => {
      return result.data.data.image.url;
    })
}

export function setAuthState(data){
  localStorage.setItem("authState", JSON.stringify(data));
}

export function getAuthState(){
  return JSON.parse(localStorage.getItem("authState"));
}

export function logOut(){
  localStorage.clear();
  document.cookie = 'COOKIE_NAME=; Max-Age=0; path=/; domain=' + document.location.host;
  window.location = '/';
}