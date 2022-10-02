const GEOCODE_URL = "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&langCode=EN&location=";

export function isAuth(){
    return localStorage.getItem("tokent")==null;
}

export async function reverseGeocode(location){
    const data = await ( await fetch(GEOCODE_URL+`${location.lng},${location.lat}`)).json();
    return data;
}

export function generateItemShortInfo(data){
    
}

export function convertDate(date){
    const convertedDate = new Date(date);
    return convertedDate.toLocaleString();
}