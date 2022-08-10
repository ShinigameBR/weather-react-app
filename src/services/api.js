const KEY = "403988d390a7424cab9165558223107";

const fetchData = async (cityName) =>{
    const URL = "https://api.weatherapi.com/v1/current.json?key="+KEY+"&q="+cityName+"&aqi=no"
    const fetchResponse = await fetch(URL);
    const data = await fetchResponse.json();
    return data;
};

export default fetchData;