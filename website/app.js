/* Global Variables */
// api_key = "YOUR_API_KEY";
api_key = "8d802503a466021106005166936d9817";
base_url = "https://api.openweathermap.org/data/2.5/weather";

// API: https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1 +'.'+ d.getDate()+'.'+ d.getFullYear();

// Function to fetch data from open weather api
const getData = async (zip_code) =>{
    const api_url = `${base_url}?zip=${zip_code},us&appid=${api_key}&units=metric`;
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
        headers: {
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
    });
};

// Func to update the UI elements
const updateUI = () =>{
    return fetch('/data')
    .then(res => {
        if (!res.ok) {
        throw new Error('Network response was not ok');
        }
        return res.json();
    })  
    .then(data =>{
        document.getElementById('date').textContent = `Date: ${data.date}`;
        document.getElementById('temp').textContent = `Temperature: ${data.temp}`;
        document.getElementById('content').textContent = `Feelings: ${data.user_res}`;
    })
    .catch(error => {
        console.log('Error updating UI:', error);
    });
};

// Callback func when Generate btn is clicked
const  preformAction = () =>{
    const zip_code = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;

    getData(zip_code)
    .then( weather_data =>{
        const data = {
            temp: weather_data.main.temp,
            date: newDate,
            user_res: feelings
        };
        console.log(weather_data);
        return postData('/addData', data);
    })
    .then(res =>{
        return updateUI();
    })
    .catch(error =>{
        console.log('Error:', error.message);
    });
};

// Run app when loaded and click in btn
document.addEventListener('DOMContentLoaded',()=>{
    const btn = document.getElementById('generate');
    btn.addEventListener('click', preformAction);
});
