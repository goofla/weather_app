const wrapper = document.querySelector(".wrapper"),
inputPart = document.querySelector(".input-part"),
infoTxt = inputPart.querySelector(".info-txt"),
inputField = inputPart.querySelector("input"),
locationBtn = inputPart.querySelector("button"),
weatherPart = wrapper.querySelector(".weather-part"),
wIcon = weatherPart.querySelector("img"),
arrowBack = wrapper.querySelector("header i");
let button=document.querySelector('button');



let api;

window.onload = function(){
    window.setInterval(function(){
         var now = new Date();
          var clock = document.getElementById("clock");
        clock.innerHTML = now.toLocaleTimeString();
    }, 1000);
   };


//inputField.addEventListener("keyup",e=>{
  // if(e.key == "Enter" && inputField.value !=""){
   //requestApi(inputField.value);
   // }
//});

button.onclick = () => {
   
    api = `https://api.openweathermap.org/data/2.5/weather?q=${inputField.value}&units=metric&appid=a75535a743c24833b265b592221e6e2a`;
    fetchData();
}



function fetchData(){
    //infoTxt.innerText = "Getting weather details...";
    //infoTxt.classList.add("pending");
    fetch(api).then(res => res.json()).then(result => weatherDetails(result)).catch};

    function weatherDetails(info){
        
            const city = info.name;
            const country = info.sys.country;
            const {description, id} = info.weather[0];
            const {temp, feels_like, humidity} = info.main;
            if(id == 800){
                wIcon.src = "icons/sun.png";
            }else if(id >= 200 && id <= 232){
                wIcon.src = "icons/storm.png";  
            }else if(id >= 600 && id <= 622){
                wIcon.src = "icons/snow.png";
            }else if(id >= 701 && id <= 781){
                wIcon.src = "icons/haze.png";
            }else if(id >= 801 && id <= 804){
                wIcon.src = "icons/cloud.png";
            }else if((id >= 500 && id <= 531) || (id >= 300 && id <= 321)){
                wIcon.src = "icons/rain.png";
            }
            
            weatherPart.querySelector(".temp .numb").innerText = Math.floor(temp);
            weatherPart.querySelector(".weather").innerText = description;
            weatherPart.querySelector(".location span").innerText = `${city}, ${country}`;
            weatherPart.querySelector(".temp .numb-2").innerText = Math.floor(feels_like);
            weatherPart.querySelector(".humidity span").innerText = `${humidity}%`;
            //infoTxt.classList.remove("pending", "error");
            //infoTxt.innerText = "";
            inputField.value = "";
            wrapper.classList.add("active");
        }
    
    
    