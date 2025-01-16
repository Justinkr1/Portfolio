// ACCESSING ALL THE HTML COMPONENTS REQUIRED TO PERFORM ACTIONS ON.
let button = document.querySelector('.button')
let inputvalue = document.querySelector('.inputValue')
let nameVal = document.querySelector('.name')
let locText = document.querySelector('.city')

// ADDING EVENT LISTENER TO SEARCH BUTTON  
button.addEventListener('click', function(){
    // Fecthing data from open weather API
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${inputvalue.value}&units=imperial&appid=71ab3e19b45d2e8543575adb88577b4d`)
    // turns the response into JSON to be able to work with it in js
    .then(response => response.json())
    //.then(console.log(weather))
    // sends data to the fiveDay function as an argument
    .then(
        fiveDay
        )
    .catch(err => alert('Wrong City name')); 
})


// Function to diplay weather on html document with weather= data from api
function fiveDay(weather){
  // for loop to get all 5 days from api list
  for (let i = 0 ; i<5; i++) {
    //sets variables to i+1 day
    //let temp_max = document.querySelector(".day"+(i+1)+"temp_max");
    let temp = document.querySelector(".day"+(i+1)+"temp");
    let desc = document.querySelector(".day"+(i+1)+"desc");
    let humidity = document.querySelector(".day"+(i+1)+"humidity");
    // fills html weather content
    //temp_max.innerText=`${weather.list[i].main.temp_max}°F`
    temp.innerText=`${weather.list[i].main.temp}°F`
    desc.innerText=`${weather.list[i].weather[0].main}`
    humidity.innerText=`${weather.list[i].main.humidity}%`
    //console.log("temp max: " +temp_max)
    //console.log("temp min: " +temp_min)
    console.log("i= " + i)
  }
}
