
const button=document.querySelector('#searchBtn');
const  name=document.querySelector('#search');
const apikey="6293fe8ebdd166661147ef6aaf2e48f6";
const apiUrl='https://api.openweathermap.org/data/2.5/weather?units=metric';

const searchButton=document.querySelector('.search');
async function checkWeather()
{

   //let valu=document.querySelector('#input');
//     let cityN=valu.value;

const ci=name.value;

    const response=await fetch(apiUrl+`&appid=${apikey}&q=${ci}`);
    if(response.status==404)
    {
        document.querySelector('.error').style.display='block';
        document.querySelector('.weather').style.display='none';
    }
   else
   {
    var data=await response.json();
    // temp.innerHTML=data.main[temp];
    // console.log(temp);
    console.log(data);
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=data.main.temp+'°C';
    document.querySelector('.humid').innerHTML=data.main.humidity+'%';
    document.querySelector('.wind').innerHTML=data.wind.speed+" km/hr";

    const w=data.weather[0].main;
    const icon=document.querySelector('.icon');
    if(w=="Rain")
    {
        
        icon.setAttribute('src','rain.png');
    }
    else if(w=="cold")
        icon.setAttribute('src','cold.png');
    else if(w=='Clear')
        icon.setAttribute('src','cloudsun.png');
    else if(w=='Clouds')
        icon.setAttribute('src','cloudy.png');
    document.querySelector('.weather').style.display='block';
    document.querySelector('.error').style.display='none';


   }
}
button.addEventListener('click',checkWeather);
name.addEventListener('keydown',function(e){
    if(e.key==='Enter')
    {
        checkWeather();
    }
}
);
