let $current = document.querySelector(".current");
let $city = document.querySelector(".city");

let $temp = document.querySelector(".temp");
let $desc = document.querySelector(".desc");

let $weekday1 = document.querySelector(".weekday1")
let $temp1 = document.querySelector(".temp1");
// let $temp_night = document.querySelector(".temp_night");
let $desc1 = document.querySelector(".desc1");
// let $desc1_title=document.querySelector(".desc__title1")

let $weekday2 = document.querySelector(".weekday2")
let $temp2 = document.querySelector(".temp2");
let $desc2 = document.querySelector(".desc2");

let $weekday3 = document.querySelector(".weekday3")
let $temp3 = document.querySelector(".temp3");
let $desc3 = document.querySelector(".desc3");

let $weekday4 = document.querySelector(".weekday4")
let $temp4 = document.querySelector(".temp4");
let $desc4 = document.querySelector(".desc4");

let $weekday5 = document.querySelector(".weekday5")
let $temp5 = document.querySelector(".temp5");
let $desc5 = document.querySelector(".desc5");

let $weekday6 = document.querySelector(".weekday6")
let $temp6 = document.querySelector(".temp6");
let $desc6 = document.querySelector(".desc6");

let $weekday7 = document.querySelector(".weekday7")
let $temp7 = document.querySelector(".temp7");
let $desc7 = document.querySelector(".desc7");

let $inputSearch = document.querySelector("#inputSearch");
let $btnSearch = document.querySelector("#btnSearch");

$btnSearch.addEventListener("click", function () {
  // let url =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=${apiKey}`
});

let apiKey = "98a0d7ebd78975bae98015dbd6070278";
let lat = 42.882004;
let lon = 74.582748;
let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&lang=ru&units=metric&appid=${apiKey}`;

fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
         console.log(data);
         $city.innerHTML = data.timezone+ "<br>" + " weather"
         $desc.innerHTML=data.current.weather[0].description
         $temp.innerHTML=data.current.temp+" &degC"
         $city.insertAdjacentHTML("afterend",`<img src="http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png">`);
         });
         let d = new Date();
       const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let weekDay = days[d.getDay()];
console.log(weekDay);
     
    //  $titleOne.innerHTML="Погода на 4 часа"
     fetch(url)
         .then(resp=>resp.json())
         .then(data=>{
             console.log(data)

             $weekday1.textContent = days[d.getDay()]
             $temp1.innerHTML=data.daily[0].temp.day+" &degC"
            //  $temp11.innerHTML=data.daily[0].temp.night+" &degC"
             $desc1.innerHTML=data.daily[0].weather[0].description
             $desc1.insertAdjacentHTML("beforebegin",`
             <img src="http://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@2x.png">`)
 
             $weekday2.textContent = days[d.getDay()]
                 $temp2.innerHTML=data.daily[1].temp.day+" &degC"
                 $desc2.innerHTML=data.daily[1].weather[0].description
                 $desc2.insertAdjacentHTML("beforebegin",`
                 <img src="http://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}@2x.png">`)
 
                 $weekday3.textContent = days[d.getDay()]
                 $temp3.innerHTML=data.daily[2].temp.day+" &degC"
                 $desc3.innerHTML=data.daily[2].weather[0].description
                 $desc3.insertAdjacentHTML("beforebegin",`
                 <img src="http://openweathermap.org/img/wn/${data.daily[2].weather[0].icon}@2x.png">`)
                 
                 $weekday4.textContent = days[d.getDay()]
                 $temp4.innerHTML=data.daily[3].temp.day+" &degC"
                 $desc4.innerHTML=data.daily[3].weather[0].description
                 $desc4.insertAdjacentHTML("beforebegin",`
                 <img src="http://openweathermap.org/img/wn/${data.daily[3].weather[0].icon}@2x.png">`)
                 
                 $weekday5.textContent = days[d.getDay()]
                 $temp5.innerHTML=data.daily[4].temp.day+" &degC"
                 $desc5.innerHTML=data.daily[4].weather[0].description
                 $desc5.insertAdjacentHTML("beforebegin",`
                 <img src="http://openweathermap.org/img/wn/${data.daily[4].weather[0].icon}@2x.png">`)
                 
                 $weekday6.textContent = days[d.getDay()]
                 $temp6.innerHTML=data.daily[5].temp.day+" &degC"
                 $desc6.innerHTML=data.daily[5].weather[0].description
                 $desc6.insertAdjacentHTML("beforebegin",`
                 <img src="http://openweathermap.org/img/wn/${data.daily[5].weather[0].icon}@2x.png">`)
                 
                 $weekday7.textContent = days[d.getDay()]
                 $temp7.innerHTML=data.daily[6].temp.day+" &degC"
                 $desc7.innerHTML=data.daily[6].weather[0].description
                 $desc7.insertAdjacentHTML("beforebegin",`
                 <img src="http://openweathermap.org/img/wn/${data.daily[6].weather[0].icon}@2x.png">`)
 
            
              })

              setInterval(() => {

              }, 10000) 
     

// let API="98a0d7ebd78975bae98015dbd6070278"
// let city=0
// let $city=document.querySelector('.city')
// let $temp=document.querySelector('.temp')
// let $desc=document.querySelector('.desc')
// let $search=document.querySelector('#search')
// let $btn=document.querySelector('button')

// let $tempOne=document.querySelector('.tempOne')
// let $descOne=document.querySelector('.descOne')

// let $tempTwo=document.querySelector('.tempTwo')
// let $descTwo=document.querySelector('.descTwo')

// let $tempThree=document.querySelector('.tempThree')
// let $descThree=document.querySelector('.descThree')

// let $tempFour=document.querySelector('.tempFour')
// let $descFour=document.querySelector('.descFour')

// let $titleOne=document.querySelector('.titleOne')
// let lat=42.882004
// let lon=74.582748

// $btn.addEventListener('click', function(){
//     city=$search.value
//     // let url=https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=${API}
//     let url2="https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&units=metric&lang=ru&appid=${API}"

// fetch(url2)
//     .then(resp=>resp.json())
//     .then(data=>{
//         console.log(data)
//         $city.textContent=data.timezone
//         $temp.innerHTML=data.current.temp+" C"+"<br>"+data.current.weather[0].description
//         $desc.insertAdjacentHTML("afterbegin",`
//         <img src="http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png">`)
//     })

    // $titleOne.innerHTML="Погода на 4 часа"
    // fetch(url2)
    //     .then(resp=>resp.json())
    //     .then(data=>{
    //         console.log(data)
    //         $tempOne.innerHTML=data.hourly[0].temp+" C"+"<br>"+data.hourly[0].weather[0].description
    //         $descOne.insertAdjacentHTML("afterbegin",`
    //         <img src="http://openweathermap.org/img/wn/${data.hourly[0].weather[0].icon}@2x.png">`)

    //             $tempTwo.innerHTML=data.hourly[1].temp+" C"+"<br>"+data.hourly[1].weather[0].description
    //             $descTwo.insertAdjacentHTML("afterbegin",`
    //             <img src="http://openweathermap.org/img/wn/${data.hourly[1].weather[0].icon}@2x.png">`)

    //                 $tempThree.innerHTML=data.hourly[2].temp+" C"+"<br>"+data.hourly[2].weather[0].description
    //                 $descThree.insertAdjacentHTML("afterbegin",`
    //                 <img src="http://openweathermap.org/img/wn/${data.hourly[2].weather[0].icon}@2x.png">`)

    //                     $tempFour.innerHTML=data.hourly[3].temp+" C"+"<br>"+data.hourly[3].weather[0].description
    //                     $descFour.insertAdjacentHTML("afterbegin",`
    //                     <img src="http://openweathermap.org/img/wn/${data.hourly[3].weather[0].icon}@2x.png">`)
    //          })
    // })

// let number = Number(prompt("Введите число:"))

// for (let i = 0; i<100; i++) {
//     if(i / 3) {
//         console.log("Fizz’")
//     }else{
//         i
//         console.log("false")
//     }
//     if (i / 5) {
//         console.log("Buzz")
//     }
//     if (i / 3,5) {
//         console.log("FizzBuzz")
//     }
// }

// fetchForecast = function () {
// 	let endpoint  =
//        "https://api.openweathermap.org/data/2.5/onecall?lat=42.882004&lon=74.582748&lang=ru&exclude=current,hourly,minutely,alerts&appid=98a0d7ebd78975bae98015dbd6070278";
//     let forecastEl = document.getElementsByClassName("forecast");

// 	fetch(endpoint)
// 	.then(function (response) {
// 		if (200 !== response.status) {
// 			console.log(
// 				"Looks like there was a problem. Status Code: " + response.status
// 			);
// 			return;
// 		}

// 		forecastEl[0].classList.add('loaded');

// 		response.json().then(function (data) {
// 			let fday = "";
// 			data.daily.forEach((value, index) => {
// 				if (index > 0) {
// 					let dayname = new Date(value.dt * 1000).toLocaleDateString("ru", {
// 						weekday: "long",
// 					});
// 					let icon = value.weather[0].icon;
// 					let temp = value.temp.day.toFixed(0);
// 					fday = `<div class="forecast-day">
// 						<p>${dayname}</p>
// 						<p><span class="ico-${icon}" title="${icon}"></span></p>
// 						<div class="forecast-day--temp">${temp}<sup>°C</sup></div>
// 					</div>`;
// 					forecastEl[0].insertAdjacentHTML('beforeend', fday);
// 				}
// 			});
// 		});
// 	})
// 	.catch(function (err) {
// 		console.log("Fetch Error :-S", err);
// 	});
// };

// document.addEventListener( 'DOMContentLoaded', function() {
// 	let weather;

// 	if ( 'IntersectionObserver' in window ) {
// 		weather = document.querySelectorAll('.weather');

// 		let weatherObserver = new IntersectionObserver( function( entries, observer ) {
// 			entries.forEach( function( entry ) {
// 				if ( entry.isIntersecting ) {
// 					if (entry.target.classList.contains('weather')) {
// 						fetchForecast();
// 					}
// 				}
// 			});
// 		}, {
// 			rootMargin: '0px 0px -120px 0px'
// 		});

// 		weather.forEach(function (s) {
// 			weatherObserver.observe(s);
// 		});
// 	}
// });
