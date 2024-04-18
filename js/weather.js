// 임시
const API_KEY = "7GQPSFLXnMq7OvxBydVHwlBYjPprOswg";
const LOCATION_KEY = "226081";
const LOCALE = "ko-kr";
const DETAIL = false;
const METRIC = true;
const URL = `http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/${LOCATION_KEY}/?apikey=${API_KEY}&language=${LOCALE}&details=${DETAIL}&metric=${METRIC}`;

$('#weather').append(`<span>10도</span>`);

function loadWeather() {
    // 페이지 로드 시 기상 정보를 받아옵니다
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        let data = this.responseText;
        console.log(data);
        
        $('#w1').append('');
    }
    xhttp.open("GET", URL);
    xhttp.send();
}