// 임시
const API_KEY = "1k22OKuvuqhdKEvBZGL5tRonPsqO28Az"; //1k22OKuvuqhdKEvBZGL5tRonPsqO28Az
const LOCATION_KEY = "226081";
const LOCALE = "en-us"; // ko-kr
const DETAIL = false;
const METRIC = true;
const URI = `http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/${LOCATION_KEY}/?apikey=${API_KEY}&language=${LOCALE}&details=${DETAIL}&metric=${METRIC}`;

const SUNNY = "img/sunny.gif";
const RAINY = "img/rainy.gif";
const CLOUDY = "img/cloudy.gif";
const HALF_SUNNY = "img/halfsunny.gif";
const HEAT = "img/heat.gif";
const COLD = "img/cold.gif";
const WINDY = "img/windy.gif";
const NIGHT = "img/night.gif";

// html이 준비되면 실행합니다.
$(document).ready(function (){
    /* 
        ajax GET 으로 AccuWeather URL을 통해 날씨 정보를 받아옵니다.
        이후 시간, 날씨, 온도 정보를 추출하고 id가 weather인 태그에 추가합니다.
    */
    $.ajax({
        url: URI,
        type:"GET",
        success: function(res) {
            console.log(res);
            let data = res[0];
            let datetime = data["DateTime"];
            let temp = data["Temperature"]["Value"];
            let state = data["WeatherIcon"];
            
            let vid = '';
            if (state <= 3) vid = SUNNY;
            else if (state <= 6 || state == 21) vid = HALF_SUNNY;
            else if (state <= 11 || state == 23) vid = CLOUDY;
            else if (state <= 18) vid = RAINY;
            else if (state <= 20) vid = CLOUDY;
            else if (state < 29) vid = RAINY;
            else if (state == 30) vid = HEAT;
            else if (state == 31) vid = COLD;
            else if (state == 32) vid = WINDY;
            else vid = NIGHT;

            // <video autoplay muted loop>
            //         <source src="${vid}" type="video/mp4" />
            //     </video>
            let line = `
                <img src="${vid}" alt="..." width="300px" height="300px"  />
            `;

            console.log(temp);

            let tAt = datetime.indexOf('T') + 1;
            let time = datetime.substring(tAt, tAt+5);

            $('#weather').append(`
                <h2 class="weatherText">${time} 서울 날씨: ${temp} °C</h2>
                <p class="weatherBox">${line}</p>
            `);
        },
        error: function(err) {
            console.log(err);
        }
    })
})
