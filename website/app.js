/* Global Variables */
api_key = "8d802503a466021106005166936d9817";
base_url = "https://api.openweathermap.org/data/3.0/onecall";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Function to fetch data from open weather api
const getData = async (zip_code) =>{
    const api_url = `${base_url}?zip=${zip_code}&appid=${api_key}&unites=metric`;
    try{
        const res = await fetch(api_url);
        if (!res.ok){
            throw new Error('response was not ok');
        }
        const data = await res.json();
        return data;
    }catch(error){
        console.log('Error featch weather data:', error);
        throw error;
    }
};

// Function to make a post request to server
const postData = (url='', data={}) =>{
    return fetch(url, {
        method: "POST",
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(res => {
        if (!res.ok){
            throw new Error('response was not ok');
        }
        return res.json();
    })
    .catch(error => {
        console.log("Error when posting data", error);
        throw error;
    })
};
