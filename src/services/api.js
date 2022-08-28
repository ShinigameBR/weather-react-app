const KEY = "5546e54b4e9d404d911113309221704";

const fetchData = async (cityName) =>{
    
    const URL = "https://api.weatherapi.com/v1/current.json?key="+KEY+"&q="+cityName+"&aqi=no";
    const fetchResponse = await fetch(URL);
    const data = await fetchResponse.json();
    return data;
};

export default fetchData;