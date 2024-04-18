// 임시
const API_KEY = "7GQPSFLXnMq7OvxBydVHwlBYjPprOswg";
const LOCATION_KEY = "226081";
const LOCALE = "en-us"; // ko-kr
const DETAIL = false;
const METRIC = true;
const URL = `http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/${LOCATION_KEY}/?apikey=${API_KEY}&language=${LOCALE}&details=${DETAIL}&metric=${METRIC}`;

$('#weather').append(`<span>10도</span>`);

function loadWeather() {
    // 페이지 로드 시 기상 정보를 받아옵니다
    $.ajax({
        url: URL,
        type:"GET",
        success: function(res) {
            console.log(res);
            let data = res[0];
            let datetime = data["DateTime"];
            let state = data["IconPhrase"];
            let temp = data["Temperature"]["Value"];

            console.log(temp);

            let tAt = datetime.indexOf('T') + 1;
            let time = datetime.substring(tAt, tAt+5);

            $('#weather').append(`
                <p>${time}</p>
                <p>${state}</p>
                <p>${temp} °C</p>
            `);
        },
        error: function(err) {
            console.log(err);
        }
    })
    /*
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        let data = this.response;
        console.log(data);
        console.log(typeof(data));
        let time = data["DateTime"];
        let state = data["IconPhrase"];

        console.log(time);
        console.log(state);
        $('#w1').append('');
    }
    xhttp.open("GET", URL);
    xhttp.send();
    */
}
